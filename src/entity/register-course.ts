import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'registered-courses' })
export class RegisterCourse {
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
  dateBirth: string;

  @Column()
  documentFile: string;
}
