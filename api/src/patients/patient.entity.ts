import { Exposure } from 'src/exposures/exposure.entity';
import { Location } from 'src/locations/location.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, BaseEntity, ManyToOne, ManyToMany } from 'typeorm';

@Entity()
export class Patient extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  phoneNumber: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({ type: 'timestamp' })
  created: Date;

  @OneToMany(() => Exposure, exposure => exposure.patient)
  exposures: Exposure[];
}