import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreatePatientDto } from 'src/dto/create-patient.dto';
import { Repository } from 'typeorm';
import { Patient } from './patient.entity';

@Injectable()
export class PatientsService {
  constructor(
    @InjectRepository(Patient)
    private patientsRepository: Repository<Patient>,
  ) {}

  async create(pat: CreatePatientDto) {
    const patient = new Patient();

    patient.firstName = pat.firstName;
    patient.lastName = pat.lastName;
    patient.phoneNumber = pat.phoneNumber;
    patient.email = pat.email;
    patient.password = pat.password;
    patient.created = pat.created;

    console.log(patient);

    await patient.save();

    return patient;
  }

  findAll(): Promise<Patient[]> {
    return this.patientsRepository.find();
  }

  findOne(id: string): Promise<Patient> {
    return this.patientsRepository.findOne(id);
  }

  findOneByEmail(email: string): Promise<Patient> {
    return this.patientsRepository.findOne({ email: email });
  }

  async remove(id: string): Promise<void> {
    await this.patientsRepository.delete(id);
  }
}