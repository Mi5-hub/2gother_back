import { Column,Entity,PrimaryGeneratedColumn,CreateDateColumn,UpdateDateColumn } from "typeorm";
@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    img: string;

    @Column()
    price: number;

    @Column()
    info: string;

    @Column()
    inCart: boolean;

    @Column()
    count: number;

    @Column()
    total: number;

    @Column()
    subscriptionDays: string;

    @Column()
    time: string;

    // @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    // createDateTime: Date;
    
    // @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    // lastChangedDateTime: Date;
}
