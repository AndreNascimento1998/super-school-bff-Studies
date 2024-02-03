import { ModalityRepository } from './modality.repository';
import { Module } from '@nestjs/common';
import { _entityModule } from '../entity/_entity.module';

const repositories = [ModalityRepository];

@Module({
  imports: [_entityModule],
  providers: repositories,
  exports: repositories,
})
export class _repositoryModule {}
