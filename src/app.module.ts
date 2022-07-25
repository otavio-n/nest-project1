import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UniversitiesController } from './universities.controller';

@Module({
  imports: [],
  controllers: [AppController, UniversitiesController],
  providers: [AppService],
})
export class AppModule {}
