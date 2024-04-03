import { Cart } from 'src/cart/cart.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  password: string;

  @Column()
  mail: string;

  @Column({ default: false })
  isAdmin: boolean;

  // @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  // createDateTime: Date;

  // @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  // lastChangedDateTime: Date;

  @OneToOne(() => Cart, {
    eager: true,
    cascade: true
  })
  @JoinColumn()
  cart: Cart;
}