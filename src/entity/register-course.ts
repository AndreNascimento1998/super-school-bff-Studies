import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Student } from './student';

@Entity({ name: 'registered-courses' })
export class RegisterCourse {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column()
  name: string;

  @Column()
  cpf: string;

  @Column()
  courseId: string;

  @ManyToOne(() => Student, (student) => student.id)
  @JoinColumn({ name: 'studentId' })
  student: Student;
}
