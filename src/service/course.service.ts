import { Injectable } from '@nestjs/common';
import { CourseRepository } from '../repository/course.repository';
import { ModalityRepository } from '../repository/modality.repository';

@Injectable()
export class CourseService {
  constructor(
    private readonly courseRepository: CourseRepository,
    private readonly modalityRepository: ModalityRepository,
  ) {}

  public async getCourses(modalityId: number) {
    const modality = await this.modalityRepository.findOne(modalityId);

    return await this.courseRepository.findAllByModality(modality);
  }
}
