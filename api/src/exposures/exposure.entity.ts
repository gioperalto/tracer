import { Patient } from 'src/patients/patient.entity';
import { Location } from 'src/locations/location.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, BaseEntity, ManyToMany, JoinTable } from 'typeorm';

@Entity()
export class Exposure extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'timestamp' })
  occurrence: Date;

  @ManyToOne(() => Patient, patient => patient.exposures)
  patient: Patient;

  @ManyToMany(() => Location)
    @JoinTable()
    locations: Location[];
}