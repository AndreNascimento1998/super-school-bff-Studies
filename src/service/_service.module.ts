import { Module } from '@nestjs/common';
import { ModalityService } from './modality.service';
import { _repositoryModule } from '../repository/_repository.module';
import { CourseService } from './course.service';
import { RegisterCourseService } from './register-course.service';

const services = [ModalityService, CourseService, RegisterCourseService];

@Module({
  imports: [_repositoryModule],
  providers: services,
  exports: services,
})
export class _serviceModule {}
