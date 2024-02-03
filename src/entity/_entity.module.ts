import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Modality } from './modality';
import { Course } from './course';
import { RegisterCourse } from './register-course';

export const entityExports = [Modality, Course, RegisterCourse];
@Module({
  imports: [TypeOrmModule.forFeature(entityExports)],
  exports: [TypeOrmModule.forFeature(entityExports)],
})
export class _entityModule {}
