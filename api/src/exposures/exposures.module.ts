import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExposuresService } from './exposures.service';
import { ExposuresController } from './exposures.controller';
import { Exposure } from './exposure.entity';
import { PatientsModule } from 'src/patients/patients.module';
import { LocationsModule } from 'src/locations/locations.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Exposure]), 
    PatientsModule, 
    LocationsModule,
  ],
  providers: [ExposuresService],
  controllers: [ExposuresController],
})
export class ExposuresModule {}