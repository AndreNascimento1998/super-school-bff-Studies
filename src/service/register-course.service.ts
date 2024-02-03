import { Injectable } from '@nestjs/common';
import { RegisterCourseDto } from '../dto/register-course.dto';
import { RegisterCourseRepository } from '../repository/register-course.repository';

@Injectable()
export class RegisterCourseService {
  constructor(
    private readonly registerCourseRepository: RegisterCourseRepository,
  ) {}

  public async postRegister(registerCourse: RegisterCourseDto) {
    return await this.registerCourseRepository.createRegister(registerCourse);
  }
}
