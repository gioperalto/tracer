import { Body, Controller, Get, Post, Request, UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "../auth/jwt-auth.guard";
import { CreateLocationDto } from "../dto/create-location.dto";
import { LocationsService } from "./locations.service";

@Controller('api/locations')
export class LocationsController {
	constructor(private locationsService: LocationsService) {}

	@UseGuards(JwtAuthGuard)
	@Post()
  async create(@Request() req, @Body() createLocationDto: CreateLocationDto) {
    await this.locationsService.create(createLocationDto, req.user.userId);
  }

	@UseGuards(JwtAuthGuard)
  @Get()
  getLocations(@Request() req) {
    return this.locationsService.findAll(req.user.userId);
  }
}
