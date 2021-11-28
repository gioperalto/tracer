import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { PatientsModule } from 'src/patients/patients.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';

@Module({
  imports: [PatientsModule, PassportModule],
  providers: [AuthService, LocalStrategy],
})
export class AuthModule {}
