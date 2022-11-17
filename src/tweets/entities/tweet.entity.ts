import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Tweet {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column('text')
    info: string;

    @Column('int', { default: 0 })
    likes: number;

    //@OneToMany(() => User, (user) => user.tweet)
    //user: User;
}
