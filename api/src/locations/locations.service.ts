import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Location } from './location.entity';

@Injectable()
export class LocationsService {
  constructor(
    @InjectRepository(Location)
    private locationsRepository: Repository<Location>,
  ) {}

  findAll(): Promise<Location[]> {
    return this.locationsRepository.find();
  }

  findOne(id: string): Promise<Location> {
    return this.locationsRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.locationsRepository.delete(id);
  }
}