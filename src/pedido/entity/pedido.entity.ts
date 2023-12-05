import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Pedido{

    @PrimaryGeneratedColumn()
        id: number;

    @Column()
        nome: string;

    @Column()
        mesa: number;

    @Column()
        prato: number;
    

}