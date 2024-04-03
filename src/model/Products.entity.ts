import { 
    PrimaryGeneratedColumn, 
    Column, 
    UpdateDateColumn, 
    CreateDateColumn,
    Entity 
} from 'typeorm';

@Entity()
export class ProductsEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    title: string;

    @Column()
    img: string;

    @Column()
    price: number;

    @Column({ type: 'json', nullable: true })
    info: any;

    @Column()
    inCart: boolean;

    @Column({default: 0})
    count: number;

    @Column({default: 0})
    total: number;

    @Column({default: 0})
    subscriptionDays: number;

    @Column({default: "00:00"})
    time: string;
    // @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    // createDateTime: Date;
    
    // @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    // lastChangedDateTime: Date;
}

