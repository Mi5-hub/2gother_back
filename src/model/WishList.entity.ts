import { 
    PrimaryGeneratedColumn, 
    Column, 
    UpdateDateColumn, 
    CreateDateColumn, 
    Entity,
    OneToOne
} from 'typeorm';

import {ProductsEntity} from "./Products.entity";
import { UserEntity } from './User.entity';

@Entity()
export class WishListEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'json', nullable: true })
    wishListems: { item: ProductsEntity }[];
    
    // @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    // createDateTime: Date;

    // @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    // lastChangedDateTime: Date;

    @OneToOne(() => UserEntity, (user: UserEntity) => user.wishList)
    public user: UserEntity;
}