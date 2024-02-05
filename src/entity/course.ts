import {
  Column,
  Entity,
  JoinTable,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Modality } from './modality';

@Entity('course')
export class Course {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column()
  name: string;

  @Column()
  typeGraduationId: number;

  @Column({ unique: true })
  title: string;

  @Column()
  discount: number;

  @Column()
  price: number;

  @Column()
  type: string;

  @Column()
  period: string;

  @Column()
  maxInstallments: number;

  @Column()
  turn: string;

  @ManyToOne((type) => Modality, (modality) => modality.id)
  @JoinTable()
  modality: Modality;
}
