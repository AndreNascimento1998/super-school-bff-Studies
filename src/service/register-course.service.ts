import { Injectable } from '@nestjs/common';
import { RegisterCourseDto } from '../dto/register-course.dto';
import { RegisterCourseRepository } from '../repository/register-course.repository';
import { StudentRepository } from '../repository/student.repository';

@Injectable()
export class RegisterCourseService {
  constructor(
    private readonly registerCourseRepository: RegisterCourseRepository,
    private readonly studentRepository: StudentRepository,
  ) {}

  public async postRegister(
    registerCourse: RegisterCourseDto,
    filePath: string,
  ) {
    let student: RegisterCourseDto;
    student = await this.studentRepository.findOne(registerCourse.cpf);

    if (!student) {
      student = await this.studentRepository.register({
        name: registerCourse.name,
        email: registerCourse.email,
        phone: registerCourse.phone,
        cep: registerCourse.cep,
        cpf: registerCourse.cpf,
        dateBirth: registerCourse.dateBirth,
        documentFile: filePath,
      });
    }
    return await this.registerCourseRepository.createRegister(
      registerCourse,
      student,
    );
  }
}
