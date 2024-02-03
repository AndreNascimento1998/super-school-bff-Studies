import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CourseDto } from '../dto/course.dto';
import { Course } from '../entity/course';
import { Modality } from '../entity/modality';

@Injectable()
export class CourseRepository {
  constructor(
    @InjectRepository(Course)
    private courseRepository: Repository<Course>,
  ) {}

  public async findAll(): Promise<CourseDto[]> {
    return this.courseRepository.find();
  }

  public async findAllByModality(modality: Modality): Promise<CourseDto[]> {
    return this.courseRepository.findBy({ modality: modality });
  }
}
