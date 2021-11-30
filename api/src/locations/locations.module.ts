import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LocationsService } from './locations.service';
// import { LocationsController } from './patients.controller';
import { Location } from './location.entity';
import { LocationsController } from './locations.controller';
import { PatientsService } from 'src/patients/patients.service';
import { PatientsModule } from 'src/patients/patients.module';

@Module({
  imports: [TypeOrmModule.forFeature([Location]), PatientsModule],
  providers: [LocationsService],
  controllers: [LocationsController],
})
export class LocationsModule {}