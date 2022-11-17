import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class User {
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column('text', {
        unique: true
    })
    email: string

    @Column('text', {
        unique: true
    })
    username: string

    @Column('text')
    password: string

    @Column('text')
    name: string

    // @OneToMany(
    //     () => Comment,
    //     (comment) => comment.id
    //     {cascade: true, eager: true}
    // )

}
