import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Workshop {
    @PrimaryGeneratedColumn()
    workshopId: number;

    @Column()
    workshopName: string;

    @Column()
    webPage: string;

    @Column()
    isAvailable: boolean;
}
