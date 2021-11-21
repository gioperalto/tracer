import { Patient } from 'src/patients/patient.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity()
export class Location {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ type: 'decimal', precision: 10, scale: 8 })
  latitude: number;

  @Column({ type: 'decimal', precision: 10, scale: 8 })
  longitude: number;

  @Column({ type: 'timestamp' })
  visited: Date;

  @ManyToOne(() => Patient, patient => patient.locations)
  patient: Patient;
}