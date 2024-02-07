import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Student } from '../entity/student';
import { Repository } from 'typeorm';
import { StudentDto } from '../dto/student.dto';

@Injectable()
export class StudentRepository {
  constructor(
    @InjectRepository(Student)
    private studentRepository: Repository<Student>,
  ) {}

  public async register(studentData: StudentDto) {
    const resp = await this.studentRepository.insert(studentData);

    return {
      id: resp.raw.insertedId ?? 0,
      ...studentData,
    };
  }

  public async findOne(cpf: string) {
    return this.studentRepository.findOneBy({ cpf: cpf });
  }
}
