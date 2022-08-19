import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma.service';
import { UniversitiesController } from './universities.controller';
import { UniversitiesService } from './universities.service';

@Module({
  imports: [HttpModule],
  controllers: [AppController, UniversitiesController],
  providers: [AppService, UniversitiesService, PrismaService],
})
export class AppModule {}
