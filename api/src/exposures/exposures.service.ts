import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Exposure } from './exposure.entity';

@Injectable()
export class ExposuresService {
  constructor(
    @InjectRepository(Exposure)
    private exposuresRepository: Repository<Exposure>,
  ) {}

  findAll(): Promise<Exposure[]> {
    return this.exposuresRepository.find();
  }

  findOne(id: string): Promise<Exposure> {
    return this.exposuresRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.exposuresRepository.delete(id);
  }
}