import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Student } from './student';
import { Course } from './course';

@Entity({ name: 'registered-courses' })
export class RegisterCourse {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @ManyToOne(() => Course, (course) => course.id)
  @JoinColumn({ name: 'courseId' })
  course: Course;

  @ManyToOne(() => Student, (student) => student.id)
  @JoinColumn({ name: 'studentId' })
  student: Student;

  @Column()
  createdAt: Date;
}
