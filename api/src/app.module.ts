import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Patient } from './patients/patient.entity';
import { Location } from './locations/location.entity';
import { Exposure } from './exposures/exposure.entity';
import { AuthModule } from './auth/auth.module';
import { LocationsModule } from './locations/locations.module';
import { PatientsModule } from './patients/patients.module';
import { ExposuresModule } from './exposures/exposures.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'password',
      database: 'tracer',
      entities: [Patient, Location, Exposure],
      synchronize: true,
    }),
    AuthModule,
    LocationsModule,
    PatientsModule,
    ExposuresModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
