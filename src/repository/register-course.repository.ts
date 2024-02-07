import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RegisterCourse } from '../entity/register-course';
import { Repository } from 'typeorm';
import { Course } from '../entity/course';
import { StudentDto } from '../dto/student.dto';

@Injectable()
export class RegisterCourseRepository {
  constructor(
    @InjectRepository(RegisterCourse)
    private registerCourse: Repository<RegisterCourse>,
  ) {}

  public async createRegister(student: StudentDto, course: Course) {
    const createdAt = new Date();

    try {
      await this.registerCourse.save({
        course,
        student,
        createdAt,
      });
      return {
        success: true,
        message: 'A matrícula foi realizada com sucesso com sucesso!',
      };
    } catch (err) {
      console.log(err);
      return {
        success: false,
        message: 'Erro ao cadastrar, confira os dados do aluno!',
      };
    }
  }
}
