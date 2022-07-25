import { Injectable } from '@nestjs/common';
import { University } from './university.model';

@Injectable()
export class UniversitiesService {
  universities: University[] = [
    new University('123', 'uem', 'BR'),
    new University('321', 'uel', 'BR'),
    new University('312', 'mit', 'BR'),
  ];

  importAll(): string {
    return 'Import all universities';
  }

  getAll(): University[] {
    return this.universities;
  }

  getOne(id: string): University {
    return this.universities.find((thisUni) => thisUni._id === id);
  }

  createOne(university: University): void {
    console.log({ university });

    this.universities.push(university);
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
