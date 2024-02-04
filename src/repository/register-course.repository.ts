import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RegisterCourse } from '../entity/register-course';
import { Repository } from 'typeorm';
import { RegisterCourseDto } from '../dto/register-course.dto';

@Injectable()
export class RegisterCourseRepository {
  constructor(
    @InjectRepository(RegisterCourse)
    private registerCourse: Repository<RegisterCourse>,
  ) {}

  public async createRegister(registerCourse: RegisterCourseDto, student: any) {
    const newCourseRegistered = new RegisterCourse();
    newCourseRegistered.name = registerCourse.name;
    newCourseRegistered.cpf = registerCourse.cpf;
    newCourseRegistered.courseId = registerCourse.courseId;
    newCourseRegistered.student = student;

    try {
      await this.registerCourse.save(newCourseRegistered);
      return {
        success: true,
        message: 'O aluno foi cadastrado com sucesso!',
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
