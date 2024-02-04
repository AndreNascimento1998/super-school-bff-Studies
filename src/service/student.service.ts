import { Injectable } from '@nestjs/common';
import { StudentRepository } from '../repository/student.repository';
import { StudentDto } from '../dto/student.dto';

@Injectable()
export class StudentService {
  constructor(private readonly studentRepository: StudentRepository) {}

  public async verify(cpf: string) {
    return await this.studentRepository.findOne(cpf);
  }

  public async register(studentData: StudentDto) {
    return await this.studentRepository.register(studentData);
  }
}
