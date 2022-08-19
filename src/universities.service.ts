import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { University } from './university.model';

@Injectable()
export class UniversitiesService {
  constructor(
    private readonly httpService: HttpService,
    private prisma: PrismaService,
  ) {}
  universities: University[] = [
    new University('123', 'uem', 'BR'),
    new University('321', 'uel', 'BR'),
    new University('312', 'mit', 'BR'),
  ];
  //Promise<Observable<AxiosResponse<University[]>>>
  async importAll(): Promise<string> {
    const response = await this.httpService.axiosRef.get(
      'http://universities.hipolabs.com/search?country=uruguay',
    );
    console.log(response.data);

    return 'All universities imported';
  }

  getAll(): University[] {
    return this.universities;
  }

  getOne(id: string): University {
    return this.universities.find((thisUni) => thisUni._id === id);
  }

  async createOne(university: University): Promise<void> {
    console.log({ university });

    this.universities.push(university);
    await this.prisma.university.create({ data: university });
  }

  updateOne(university): University {
    return university;
  }

  deleteOne(id: string): void {
    console.log(id);

    for (let i = 0; i < this.universities.length; i++) {
      if (id === this.universities[i]._id) {
        this.universities.splice(i, 1);
      }
    }
  }
}
