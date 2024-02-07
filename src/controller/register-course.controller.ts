import {
  Body,
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { diskStorage } from 'multer';
import { RegisterCourseService } from '../service/register-course.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { extname } from 'path';
import { StudentDto } from '../dto/student.dto';

@Controller('register-course')
export class RegisterCourseController {
  constructor(private readonly registerCourseService: RegisterCourseService) {}

  @Post()
  @UseInterceptors(
    FileInterceptor('payloadFile', {
      storage: diskStorage({
        destination: './src/storage/docs',
        filename: (req, file, callback) => {
          const uniqueName = Date.now() + '-' + Math.round(Math.random() * 1e9);
          const fileExt = extname(file.originalname);
          const filename = `${uniqueName}${fileExt}`;

          callback(null, filename);
        },
      }),
    }),
  )
  public async register(
    @UploadedFile() payloadFile: Express.Multer.File,
    @Body() registerData,
  ) {
    const payload = JSON.parse(registerData.payloadData);
    const student: StudentDto = {
      name: payload.name,
      email: payload.email,
      phone: payload.phone,
      cep: payload.cep,
      cpf: payload.cpf,
      dateBirth: payload.dateBirth,
      documentFile: payloadFile.path,
    };

    return this.registerCourseService.postRegister(student, payload.courseId);
  }
}
