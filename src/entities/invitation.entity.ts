import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinTable } from 'typeorm';
@Entity()
export class InvitationEntity {
    @PrimaryGeneratedColumn()
    id: number
    @Column()
    user_id: number
    @Column()
    app_id: string
    @Column()
    app_name: string
    @Column()
    he: string
    @Column()
    she: string
    @Column()
    he_tel: string
    @Column()
    she_tel: string
    @Column()
    date: string
    @Column()
    lunar: string
    @Column()
    music: string
    @Column()
    address: string
    @Column()
    hotel: string
    @Column()
    lat: string
    @Column()
    lng: string
    @Column()
    share: string
    @Column()
    cover: string
    @Column()
    thumb: string
    @Column()
    code: string
}
