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

  public async createRegister(registerCourse: RegisterCourseDto) {
    const newCourseRegistered =
      await this.registerCourse.create(registerCourse);
    return await this.registerCourse.save(newCourseRegistered);
  }
}
