import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Modality } from './modality';

export const entityExports = [Modality];
@Module({
  imports: [TypeOrmModule.forFeature(entityExports)],
  exports: [TypeOrmModule.forFeature(entityExports)],
})
export class _entityModule {}
