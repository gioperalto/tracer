import { Body, Controller, Get, Param, Post, Request, UseGuards } from "@nestjs/common";
import { CreateExposureDto } from "../dto/create-exposure.dto";
import { JwtAuthGuard } from "../auth/jwt-auth.guard";
import { ExposuresService } from "./exposures.service";

@Controller('api/exposures')
export class ExposuresController {
	constructor(private exposuresService: ExposuresService) {}

	@UseGuards(JwtAuthGuard)
	@Post()
  async create(@Request() req, @Body() createExposureDto: CreateExposureDto) {
    return await this.exposuresService.create(createExposureDto, req.user.userId);
  }

	@UseGuards(JwtAuthGuard)
  @Get()
  async getExposures(@Request() req) {
    return {
      type: 'exposures',
      items: await this.exposuresService.findAll(req.user.userId)
    };
  }

  // @UseGuards(JwtAuthGuard)
  // @Get(':id')
  // async getExposees(@Request() req, @Param('id') id: string) {
  //   const exposure = await this.exposuresService.findOne(id);
  //   return {
  //     type: 'locations',
  //     items: await this.exposuresService.findExposees(req.user.userId, exposure.occurrence)
  //   };
  // }
}
