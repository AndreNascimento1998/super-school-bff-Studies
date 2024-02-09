import { Modality } from '../entity/modality';

export class CourseDto {
  id: number;
  name: string;
}

export class CourseInputDto {
  name: string;
  typeGraduationId: number;
  title: string;
  discount: number;
  price: number;
  type: string;
  period: string;
  maxInstallments: number;
  turn: string;
  modality: Modality;
}
