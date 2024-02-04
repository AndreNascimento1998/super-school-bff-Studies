import { ModalityRepository } from './modality.repository';
import { Module } from '@nestjs/common';
import { _entityModule } from '../entity/_entity.module';
import { CourseRepository } from './course.repository';
import { RegisterCourseRepository } from './register-course.repository';
import { StudentRepository } from './student.repository';

const repositories = [
  ModalityRepository,
  CourseRepository,
  RegisterCourseRepository,
  StudentRepository,
];

@Module({
  imports: [_entityModule],
  providers: repositories,
  exports: repositories,
})
export class _repositoryModule {}
