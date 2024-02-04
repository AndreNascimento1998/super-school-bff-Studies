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

  public async register(studentDatas: StudentDto) {
    return this.studentRepository.save(studentDatas);
  }

  public async findOne(cpf: string) {
    return this.studentRepository.findOneBy({ cpf: cpf });
  }
}
