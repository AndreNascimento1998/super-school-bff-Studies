import { Module } from '@nestjs/common';
import { ModalityService } from './modality.service';
import { _repositoryModule } from '../repository/_repository.module';

const services = [ModalityService];

@Module({
  imports: [_repositoryModule],
  providers: services,
  exports: services,
})
export class _serviceModule {}
