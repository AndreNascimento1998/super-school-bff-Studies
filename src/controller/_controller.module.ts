import { Module } from '@nestjs/common';
import { ModalityController } from './modality.controller';
import { _serviceModule } from '../service/_service.module';

@Module({
  imports: [_serviceModule],
  controllers: [ModalityController],
})
export class _controllerModule {}
