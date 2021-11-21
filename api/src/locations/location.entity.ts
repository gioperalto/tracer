import { Patient } from 'src/patients/patient.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity()
export class Location {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  latitude: string;

  @Column()
  longitude: string;

  @Column({ type: 'timestamp' })
  visited: Date;

  @ManyToOne(() => Patient, patient => patient.locations)
  patient: Patient;
}