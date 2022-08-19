import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UniversitiesService } from './universities.service';
import { University } from './university.model';

@Controller('universities')
export class UniversitiesController {
  constructor(private readonly universitiesService: UniversitiesService) {}

  @Get('import')
  @HttpCode(201)
  async importAll(): Promise<string> {
    return await this.universitiesService.importAll();
  }

  @Get()
  getAll(): University[] {
    return this.universitiesService.getAll();
  }

  @Get(':id')
  getOne(@Param() params): University {
    return this.universitiesService.getOne(params.id);
  }

  @Post()
  @HttpCode(201)
  async createOne(@Body() university): Promise<void> {
    return this.universitiesService.createOne(university);
  }

  @Put()
  updateOne(@Body() university): University {
    return this.universitiesService.updateOne(university);
  }

  @Delete(':id')
  deleteOne(@Param() params): void {
    return this.universitiesService.deleteOne(params.id);
  }
}
