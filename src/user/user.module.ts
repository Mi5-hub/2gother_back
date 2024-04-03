import { Module } from '@nestjs/common';
import { UsersController } from './user.controller';
import { UsersService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { UserEntity } from 'src/model/User.entity';
import { CartEntity } from 'src/model/Cart.entity';
import { ProductsEntity } from 'src/model/Products.entity';
import { AuthService } from 'src/auth/auth.service';
import { WishListEntity } from 'src/model/WishList.entity';

@Module({
    controllers:[UsersController],
    providers:[UsersService,AuthService],
    imports:[TypeOrmModule.forFeature([UserEntity,CartEntity,ProductsEntity,WishListEntity])]
})
export class UserModule {}

