import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LocationsService } from './locations.service';
import { Location } from './location.entity';
import { LocationsController } from './locations.controller';
import { PatientsModule } from 'src/patients/patients.module';

@Module({
  imports: [TypeOrmModule.forFeature([Location]), PatientsModule],
  providers: [LocationsService],
  exports: [LocationsService],
  controllers: [LocationsController],
})
export class LocationsModule {}