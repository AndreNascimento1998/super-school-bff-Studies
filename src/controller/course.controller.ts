import { Controller, Get, Param } from '@nestjs/common';
import { CourseService } from '../service/course.service';

@Controller('course')
export class CourseController {
  constructor(private readonly courseService: CourseService) {}

  @Get('/:modalityId')
  public async getAll(@Param('modalityId') modalityId: number) {
    return this.courseService.getCourses(modalityId);
  }
}
