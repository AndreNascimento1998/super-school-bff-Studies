import { Injectable } from '@nestjs/common';
import { RegisterCourseRepository } from '../repository/register-course.repository';
import { StudentRepository } from '../repository/student.repository';
import { CourseRepository } from '../repository/course.repository';
import { StudentDto } from '../dto/student.dto';
import { Student } from '../entity/student';

@Injectable()
export class RegisterCourseService {
  constructor(
    private readonly registerCourseRepository: RegisterCourseRepository,
    private readonly studentRepository: StudentRepository,
    private readonly courseRepository: CourseRepository,
  ) {}

  public async postRegister(studentPayload: StudentDto, courseId: number) {
    let student: Student | StudentDto = await this.studentRepository.findOne(
      studentPayload.cpf,
    );
    const course = await this.courseRepository.findById(courseId);

    if (!student) {
      student = await this.studentRepository.register(studentPayload);
    }
    return await this.registerCourseRepository.createRegister(student, course);
  }
}
