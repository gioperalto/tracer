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
import { dbConstants } from './config/constants';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: dbConstants.host,
      port: dbConstants.port,
      username: dbConstants.username,
      password: dbConstants.password,
      database: dbConstants.database,
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
