import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { RegisterCourse } from './register-course';

@Entity('students')
export class Student {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  phone: string;

  @Column()
  cep: string;

  @Column()
  cpf: string;

  @Column()
  dateBirth: Date;

  @Column()
  documentFile: string;

  @OneToMany(() => RegisterCourse, (registerCourse) => registerCourse.student)
  registeredCourses: RegisterCourse[];
}
