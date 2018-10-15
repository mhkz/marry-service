import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinTable } from 'typeorm';
@Entity()
export class PhotoEntity {
  @PrimaryGeneratedColumn()
  id: number
  @Column()
  user_id: number
  @Column()
  image: string
}
