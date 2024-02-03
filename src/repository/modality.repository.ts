import { InjectRepository } from '@nestjs/typeorm';
import { Modality } from '../entity/modality';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ModalityRepository {
  constructor(
    @InjectRepository(Modality)
    private modalityRepository: Repository<Modality>,
  ) {}

  public async findAll(): Promise<Modality[]> {
    return this.modalityRepository.find();
  }

  public async findOne(modalityId: number): Promise<Modality> {
    return this.modalityRepository.findOneBy({ id: modalityId });
  }
}
