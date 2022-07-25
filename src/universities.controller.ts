import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';

@Controller('universities')
export class UniversitiesController {
  @Get('import')
  importAll(): string {
    return 'Import all universities';
  }

  @Get()
  getAll(): string {
    return 'List all universities';
  }

  @Get(':id')
  getOne(@Param() params): string {
    return `Return university ${params.id}`;
  }

  @Post()
  createOne(@Body() university): string {
    console.log({ university });

    return 'University created';
  }

  @Put()
  updateOne(@Body() university): string {
    console.log({ university });
    return 'University updated';
  }
}
