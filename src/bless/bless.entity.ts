import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinTable } from 'typeorm';
@Entity()
export class BlessEntity {
    @PrimaryGeneratedColumn()
    id: number
    @Column()
    user_id: number
    @Column()
    openid: string
    @Column()
    face: string
    @Column()
    nickname: string
    @Column()
    time: string
}
