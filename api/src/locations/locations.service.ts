import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateLocationDto } from 'src/dto/create-location.dto';
import { PatientsService } from 'src/patients/patients.service';
import { MoreThanOrEqual, Not, Repository } from 'typeorm';
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
    const existingLocation = await this.locationsRepository.findOne({
      relations: ['patients'],
      where: { latitude: loc.latitude, longitude: loc.longitude, visited: new Date(loc.visited) }
    });
    let location = existingLocation;

    if (existingLocation === undefined) {
      location = new Location();
      location.name = loc.name;
      location.visited = loc.visited;
      location.latitude = loc.latitude;
      location.longitude = loc.longitude;
      location.patients = [ patient ];
    } else {
      location.patients.push(patient);
    }

    await location.save();
    return location;
  }

  async findAll(patientId: string): Promise<Location[]> {
    const locations = await this.locationsRepository
    .createQueryBuilder('location')
    .leftJoin('location.patients', 'patient')
    .where('patient.id = :id', { id: patientId })
    .getMany();

    return locations;
  }

  async findExposedLocations(patientId: string, occurrence: Date): Promise<Location[]> {
    const dayof = new Date(occurrence);
    const weekAgo = new Date(dayof.getFullYear(), dayof.getMonth(), dayof.getDate() - 7);
    const locations = await this.locationsRepository
    .createQueryBuilder('location')
    .leftJoin('location.patients', 'patient')
    .where('patient.id != :id and location.visited >= :time', { id: patientId, time: weekAgo })
    .getMany();
    
    return locations;
  }

  // findOne(id: string): Promise<Location> {
  //   return this.locationsRepository.findOne(id);
  // }

  // async remove(id: string): Promise<void> {
  //   await this.locationsRepository.delete(id);
  // }
}