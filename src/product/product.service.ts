import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductsEntity } from '../model/Products.entity';
import { Repository } from 'typeorm';
import {response, products} from "../utills/interfaces";

@Injectable()
export class ProductsService {
  constructor(@InjectRepository(ProductsEntity) private readonly productRepo: Repository<ProductsEntity>) { }

  async getAll():Promise<response> {
        return {
            statusCode: 200,
            response: await this.productRepo.find(),
            message: "Success"
        }
  }

  async addProduct(product: products): Promise<response>{
      try{
        console.log("avy any",product);
        
        const productEntity=new ProductsEntity();
        productEntity.title=product.title;
        productEntity.img=product.img;
        productEntity.price=product.price;
        productEntity.info=product.info;
        productEntity.inCart=product.inCart;
        productEntity.count=product.count;
        productEntity.total=product.total;
        await this.productRepo.save(productEntity);
  
        return {
            statusCode: 200,
            response: productEntity,
            message: "Success"
        }
      }catch(error){
          return{
              statusCode: 400,
              response: error,
              message: error.message
          }
      }
  }

  async update(id:string,data:products): Promise<response> {
      const product = await this.productRepo.findOneBy({id});
      if(product){
        product.title=data.title;
        product.img=data.img;
        product.price=data.price;
        product.info=data.info;
        product.inCart=data.inCart;
        product.count=data.count;
        product.total=data.total;
        await this.productRepo.save(product);
  }else {
      throw new NotFoundException("Product not found with given id");
  }
  return {
      statusCode: 200,
      response: product,
      message: "success"
  }
}


}