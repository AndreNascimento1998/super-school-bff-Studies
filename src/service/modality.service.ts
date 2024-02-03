import { Injectable } from '@nestjs/common';
import { ModalityRepository } from '../repository/modality.repository';

@Injectable()
export class ModalityService {
  constructor(private readonly modalityRepository: ModalityRepository) {}
  public async getModalities() {
    const modalities = await this.modalityRepository.findAll();

    return modalities.map((modality) => ({
      id: modality.id,
      name: modality.name,
    }));
  }
}
