import { Injectable } from '@nestjs/common';

import { ModalityRepository } from '../modality.repository';
import { Modality } from '../../entity/modality';
import { CourseInputDto } from '../../dto/course.dto';
import { CourseRepository } from '../course.repository';
import { Course } from '../../entity/course';

@Injectable()
export class DataFixture {
  private modalities: Array<Modality>;

  constructor(
    private readonly modalityRepository: ModalityRepository,
    private readonly courseRepository: CourseRepository,
  ) {}

  async loadFixtures(): Promise<void> {
    this.modalities = await this.modalityFixtures();
    await this.courseFixtures();
  }

  async modalityFixtures(): Promise<Modality[]> {
    const savedModalities: Array<Modality> = [];

    for (const modality of this.getMockModalities()) {
      try {
        savedModalities.push(await this.modalityRepository.create(modality));
      } catch (e) {
        console.log('Modalidades base já existem');
      }
    }

    return savedModalities;
  }

  public async courseFixtures(): Promise<Course[]> {
    const savedCourses: Array<Course> = [];

    for (const course of await this.getMockCourses()) {
      try {
        savedCourses.push(await this.courseRepository.create(course));
      } catch (e) {
        console.log('Curso fixture já existente');
      }

      return savedCourses;
    }
  }

  private async getMockCourses(): Promise<CourseInputDto[]> {
    return [
      {
        name: 'História',
        typeGraduationId: 1,
        title: 'Curso de História',
        discount: 0,
        price: 55,
        type: 'EAD',
        period: '400 Horas',
        maxInstallments: 2,
        turn: 'Livre',
        modality: await this.getRandomModality(),
      },
      {
        name: 'Análise e desenvolvimento de sistemas',
        typeGraduationId: 1,
        title: 'Curso ADS',
        discount: 1,
        price: 20,
        type: 'Presencial',
        period: 'integral',
        maxInstallments: 1,
        turn: 'turn',
        modality: await this.getRandomModality(),
      },
      {
        name: 'Geografia',
        typeGraduationId: 2,
        title: 'Curso de Geografia',
        discount: 20,
        price: 200,
        type: 'Presencial',
        period: '800 Horas',
        maxInstallments: 6,
        turn: 'Vespertino',
        modality: await this.getRandomModality(),
      },
      {
        name: 'Filosofia',
        typeGraduationId: 1,
        title: 'Curso de Filosofia',
        discount: 5,
        price: 255,
        type: 'Presencial',
        period: '600 Horas',
        maxInstallments: 12,
        turn: 'Matutino',
        modality: await this.getRandomModality(),
      },
      {
        name: 'Sociologia',
        typeGraduationId: 2,
        title: 'Curso de Sociologia',
        discount: 0,
        price: 150,
        type: 'EAD',
        period: '200 Horas',
        maxInstallments: 1,
        turn: 'Livre',
        modality: await this.getRandomModality(),
      },
      {
        name: 'Marketing digital',
        typeGraduationId: 1,
        title: 'Curso de Marketing digital',
        discount: 5,
        price: 60,
        type: 'EAD',
        period: '100 Horas',
        maxInstallments: 1,
        turn: 'Livre',
        modality: await this.getRandomModality(),
      },
      {
        name: 'Português',
        typeGraduationId: 2,
        title: 'Curso de português',
        discount: 5,
        price: 250,
        type: 'EAD',
        period: '400 Horas',
        maxInstallments: 6,
        turn: 'Livre',
        modality: await this.getRandomModality(),
      },
      {
        name: 'Química',
        typeGraduationId: 1,
        title: 'Curso de química',
        discount: 50,
        price: 450,
        type: 'Presencial',
        period: '1000 Horas',
        maxInstallments: 10,
        turn: 'Livre',
        modality: await this.getRandomModality(),
      },
      // exemplo se quiser gerar aleatório
      // {
      //   name: 'Química',
      //   typeGraduationId: 1,
      //   title: 'Curso de química',
      //   discount: 50,
      //   price: 450,
      //   type: 'Presencial',
      //   period: '1000 Horas',
      //   maxInstallments: 10,
      //   turn: 'Livre',
      //   modality: await this.getRandomModality(),
      // },
    ];
  }

  private getMockModalities(): Array<{ name: string; createdAt: Date }> {
    return [
      { name: 'EAD', createdAt: new Date() },
      { name: 'Presencial', createdAt: new Date() },
    ];
  }

  private async getRandomModality(): Promise<Modality> {
    const baseModalities = this.modalities.length
      ? this.modalities
      : await this.modalityRepository.findAll();

    return baseModalities[Math.floor(Math.random() * this.modalities.length)];
  }
}
