import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CourseDto, CourseInputDto } from '../dto/course.dto';
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

  public async findById(courseId: number): Promise<Course> {
    return this.courseRepository.findOneBy({ id: courseId });
  }

  public async findAllByModality(modality: Modality): Promise<CourseDto[]> {
    return this.courseRepository.findBy({ modality: modality });
  }

  public async create(course: CourseInputDto): Promise<Course> {
    const resp = await this.courseRepository.insert(course);

    return {
      id: resp.raw?.insertId ?? 0,
      ...course,
    };
  }
}
