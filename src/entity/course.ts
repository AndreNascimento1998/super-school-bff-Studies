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

  @Column({ unique: true })
  name: string;

  @ManyToOne((type) => Modality, (modality) => modality.id)
  @JoinTable()
  modality: Modality;
}
