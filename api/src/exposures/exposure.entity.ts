import { Patient } from 'src/patients/patient.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity()
export class Exposure {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'timestamp' })
  occurrence: Date;

  @ManyToOne(() => Patient, patient => patient.exposures)
  patient: Patient;
}