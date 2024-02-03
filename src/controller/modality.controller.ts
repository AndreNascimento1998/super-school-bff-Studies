import { Controller, Get } from '@nestjs/common';
import { ModalityService } from '../service/modality.service';

@Controller('modality')
export class ModalityController {
  constructor(private readonly modalityService: ModalityService) {}

  @Get('/')
  public async getAll() {
    return this.modalityService.getModalities();
  }
}
