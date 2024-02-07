import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
}
