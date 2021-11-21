import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Patient } from './patient.entity';

@Injectable()
export class PatientsService {
  constructor(
    @InjectRepository(Patient)
    private patientsRepository: Repository<Patient>,
  ) {}

  findAll(): Promise<Patient[]> {
    return this.patientsRepository.find();
  }

  findOne(id: string): Promise<Patient> {
    return this.patientsRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.patientsRepository.delete(id);
  }
}