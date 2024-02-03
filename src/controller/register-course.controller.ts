import { Body, Controller, Post } from '@nestjs/common';
import { RegisterCourseDto } from '../dto/register-course.dto';
import { RegisterCourseService } from '../service/register-course.service';

@Controller('register-course')
export class RegisterCourseController {
  constructor(private readonly registerCourseService: RegisterCourseService) {}

  @Post()
  public async register(@Body() registerData: RegisterCourseDto) {
    return this.registerCourseService.postRegister(registerData);
  }
}
