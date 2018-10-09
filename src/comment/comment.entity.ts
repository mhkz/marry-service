import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinTable } from 'typeorm';
@Entity()
export class CommentEntity {
    @PrimaryGeneratedColumn()
    id: number
    @Column()
    user_id: number
    @Column()
    nickname: string
    @Column()
    face: string
    @Column()
    words: string
    @Column()
    time: string    
}