import { Module } from '@nestjs/common';
import { ModalityService } from './modality.service';
import { RepositoryModule } from '../repository/_repository.module';
import { CourseService } from './course.service';
import { RegisterCourseService } from './register-course.service';
import { StudentService } from './student.service';

const services = [
  ModalityService,
  CourseService,
  RegisterCourseService,
  StudentService,
];

@Module({
  imports: [RepositoryModule],
  providers: services,
  exports: services,
})
export class _serviceModule {}
