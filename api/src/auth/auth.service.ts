import { Injectable } from '@nestjs/common';
import { Patient } from 'src/patients/patient.entity';
import { PatientsService } from 'src/patients/patients.service';

@Injectable()
export class AuthService {
	constructor(private patientsService: PatientsService) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.patientsService.findOneByEmail(username);
    
    console.log(`Email: ${username}. Pass: ${pass}. User: ${user}.`);
		if (user && user.password === pass) {
      const { 
				password, firstName, lastName, email, 
				phoneNumber, locations, exposures, 
				...result 
			} = user;
			
      return result;
    }

    return null;
  }
}
