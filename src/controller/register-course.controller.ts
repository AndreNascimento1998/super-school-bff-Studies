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
    console.log(registerData);
    return this.registerCourseService.postRegister(
      JSON.parse(registerData.payloadData),
      payloadFile.path,
    );
  }
}
