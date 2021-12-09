import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateExposureDto } from 'src/dto/create-exposure.dto';
import { LocationsService } from 'src/locations/locations.service';
import { PatientsService } from 'src/patients/patients.service';
import { Repository } from 'typeorm';
import { Exposure } from './exposure.entity';

@Injectable()
export class ExposuresService {
  constructor(
    @InjectRepository(Exposure)
    private exposuresRepository: Repository<Exposure>,
    private patientsService: PatientsService,
    private locationsService: LocationsService,
  ) {}

  async create(exp: CreateExposureDto, patientId: string) {
    const patient = await this.patientsService.findOne(patientId);
    const exposure = new Exposure();
    const locations = await this.locationsService.findExposedLocations(patientId, exp.occurrence);

    // TODO: Report exposure(s) to affected patients

    exposure.occurrence = exp.occurrence;
    exposure.patient = patient;
    exposure.locations = locations;

    await exposure.save();

    return exposure;
  }

  async findAll(patientId: string): Promise<Exposure[]> {
    const patient = await this.patientsService.findOne(patientId);
    const exposures = await this.exposuresRepository
    .find({ 
      relations: ['locations'],
      where: { patient: patient },
      order: { occurrence: 'DESC' }
    });
    return exposures;
  }

  async findExposedPatients(patientId: string): Promise<Exposure[]> {
    const exposures = await this.exposuresRepository
    .createQueryBuilder('exposure')
    .innerJoinAndSelect('exposure.locations', 'location')
    .innerJoin('location.patients', 'patient')
    .where('patient.id = :id and exposure.patientId != :expId', { id: patientId, expId: patientId })
    .getMany();
    return exposures;
  }

  findOne(id: string): Promise<Exposure> {
    return this.exposuresRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.exposuresRepository.delete(id);
  }
}