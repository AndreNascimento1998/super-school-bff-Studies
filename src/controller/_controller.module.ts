import { Module } from '@nestjs/common';
import { ModalityController } from './modality.controller';
import { _serviceModule } from '../service/_service.module';
import { CourseController } from './course.controller';
import { RegisterCourseController } from './register-course.controller';

@Module({
  imports: [_serviceModule],
  controllers: [ModalityController, CourseController, RegisterCourseController],
})
export class _controllerModule {}
