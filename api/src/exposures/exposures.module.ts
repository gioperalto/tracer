import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExposuresService } from './exposures.service';
// import { ExposuresController } from './patients.controller';
import { Exposure } from './exposure.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Exposure])],
  providers: [ExposuresService],
  controllers: [],
})
export class ExposuresModule {}