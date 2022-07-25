import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UniversitiesController } from './universities.controller';
import { UniversitiesService } from './universities.service';

@Module({
  imports: [],
  controllers: [AppController, UniversitiesController],
  providers: [AppService, UniversitiesService],
})
export class AppModule {}
