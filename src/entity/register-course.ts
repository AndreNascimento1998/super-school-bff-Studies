import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'registered-courses' })
export class RegisterCourse {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  idStudent: number;

  @Column()
  name: string;

  @Column()
  cpf: string;

  @Column()
  courseId: string;

  @Column()
  courseName: string;
}
