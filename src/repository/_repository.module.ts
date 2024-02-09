import { ModalityRepository } from './modality.repository';
import { Module, OnModuleInit } from '@nestjs/common';
import { CourseRepository } from './course.repository';
import { RegisterCourseRepository } from './register-course.repository';
import { StudentRepository } from './student.repository';
import { EntityModule } from '../entity/_entity.module';
import { DataFixture } from './fixtures/data.fixture';

const repositories = [
  ModalityRepository,
  CourseRepository,
  RegisterCourseRepository,
  StudentRepository,
];

@Module({
  imports: [EntityModule],
  providers: [...repositories, DataFixture],
  exports: repositories,
})
export class RepositoryModule implements OnModuleInit {
  constructor(private readonly dataFixtures: DataFixture) {}

  async onModuleInit(): Promise<void> {
    await this.dataFixtures.loadFixtures();
  }
}
