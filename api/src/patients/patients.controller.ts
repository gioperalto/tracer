import { Body, Controller, Get, Post, Request, UseGuards } from "@nestjs/common";
import { CreatePatientDto } from "src/dto/create-patient.dto";
import { JwtAuthGuard } from "../auth/jwt-auth.guard";
import { CreateLocationDto } from "../dto/create-location.dto";
import { PatientsService } from "./patients.service";

@Controller('api/patients')
export class PatientsController {
	constructor(private patientsService: PatientsService) {}

	@Post()
  async create(@Body() createPatientDto: CreatePatientDto) {
    console.log(`POST to api/patients received.`);
    return await this.patientsService.create(createPatientDto);
  }

	@UseGuards(JwtAuthGuard)
  @Get()
  async getPatient(@Request() req) {
    return await this.patientsService.findOne(req.user.userId);
  }
}
