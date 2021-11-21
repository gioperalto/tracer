import { Exposure } from 'src/exposures/exposure.entity';
import { Location } from 'src/locations/location.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class Patient {
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

  @OneToMany(() => Location, location => location.patient)
  locations: Location[];

  @OneToMany(() => Exposure, exposure => exposure.patient)
  exposures: Exposure[];
}