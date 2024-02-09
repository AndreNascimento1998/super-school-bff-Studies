import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Modality } from './modality';
import { Course } from './course';
import { RegisterCourse } from './register-course';
import { Student } from './student';

export const entityExports = [Modality, Course, RegisterCourse, Student];
@Module({
  imports: [TypeOrmModule.forFeature(entityExports)],
  exports: [TypeOrmModule.forFeature(entityExports)],
})
export class EntityModule {}
