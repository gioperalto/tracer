import { Injectable } from '@nestjs/common';
import { Patient } from 'src/patients/patient.entity';
import { PatientsService } from 'src/patients/patients.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
	constructor(
    private patientsService: PatientsService,
    private jwtService: JwtService
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.patientsService.findOneByEmail(username);
    
		if (user && user.password === pass) {
      const { 
				password,
				...result 
			} = user;
			
      return result;
    }

    return null;
  }

  async login(user: any) {
    const payload = { username: user.email, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
      expiration: new Date(Date.now() + 2 * (60 * 60 * 1000) )
    };
  }
}
