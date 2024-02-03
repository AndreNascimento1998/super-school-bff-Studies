import { InjectRepository } from '@nestjs/typeorm';
import { Modality } from '../entity/modality';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { ModalityDto } from '../dto/modality.dto';

@Injectable()
export class ModalityRepository {
  constructor(
    @InjectRepository(Modality)
    private modalityRepository: Repository<Modality>,
  ) {}

  public async findAll(): Promise<ModalityDto[]> {
    return this.modalityRepository.find();
  }
}
