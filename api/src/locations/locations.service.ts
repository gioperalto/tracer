import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateLocationDto } from 'src/dto/create-location.dto';
import { PatientsService } from 'src/patients/patients.service';
import { Repository } from 'typeorm';
import { Location } from './location.entity';

@Injectable()
export class LocationsService {
  constructor(
    @InjectRepository(Location)
    private locationsRepository: Repository<Location>,
    private patientsService: PatientsService,
  ) {}

  async create(loc: CreateLocationDto, patientId: string) {
    const patient = await this.patientsService.findOne(patientId);
    const location = new Location();

    location.name = loc.name;
    location.visited = loc.visited;
    location.latitude = loc.latitude;
    location.longitude = loc.longitude;
    location.patient = patient;

    await location.save();
  }

  async findAll(patientId: string): Promise<Location[]> {
    const patient = await this.patientsService.findOne(patientId);

    return this.locationsRepository.find({ patient: patient });
  }

  findOne(id: string): Promise<Location> {
    return this.locationsRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.locationsRepository.delete(id);
  }
}