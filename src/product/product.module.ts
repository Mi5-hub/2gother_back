import { Module } from '@nestjs/common';
import { ProductsService } from './product.service';
import { ProductsControler } from './product.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './product.entity';
import { ProductsEntity } from 'src/model/Products.entity';

@Module({
  providers: [ProductsService],
  controllers: [ProductsControler],
  imports:[TypeOrmModule.forFeature([ProductsEntity])]
})
export class ProductModule {}
