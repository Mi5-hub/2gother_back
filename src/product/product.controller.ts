import { Body, Controller, Get, Post, UnauthorizedException } from '@nestjs/common';
import { response, products } from "../utills/interfaces";
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { ProductsService } from './product.service';

@Controller('products')
export class ProductsControler {
  constructor(private serv: ProductsService) { }

  @Get()
  @ApiTags('products')
  public async getAll(): Promise<response> {
    return await this.serv.getAll();
  }

  @Post("addProduct")
  @ApiTags('products')
  @ApiBody({
    schema: {
      example: {
        password: "xxx",
        title: "Google Pixel - Black",
        img: "img/healthy-food-shopping.jpg",
        price: 10,
        info:
          "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
        inCart: false,
        count: 0,
        total: 0,
        subscriptionDays: 0,
        time: "00:00"
      },
    }
  })
  async createProduct(@Body() product: products): Promise<response> {


    try {
      return await this.serv.addProduct(product);

    } catch (error) {
      return { statusCode: 500, message: error.message,response:undefined };
    }
  }

  @Post("update")
  @ApiTags('products')
  @ApiBody({
    schema: {
      example: {
        "id": "15dbca0d-d8c3-40bf-95f7-a2c3acf5a107",
        "password": "password",
        "product": {
          "name": "White Tshirt",
          "category": "clotihng",
          "price": 5999,
          "attributes": {
            "img": "https://rukminim1.flixcart.com/image/533/640/kph8h3k0/t-shirt/g/i/n/xxl-lykpcslp607320-louis-philippe-sport-original-imag3p8rr6gwrcxu.jpeg?q=50",
            "sizes": [
              "s",
              "m",
              "l",
              "xl"
            ]
          },
          "desc": "Men's white t-shirt",
          "discount": 20,
          "quantity": 2,
          "createDateTime": "2021-07-18T15:20:50.123Z",
          "lastChangedDateTime": "2021-07-18T15:20:50.123Z"
        }
      }
    }
  })
  async updateProduct(@Body() productData: { id: string, password: string, product: products }): Promise<response> {
    if (productData.password === process.env.API_PASSWORD)
      return await this.serv.update(productData.id, productData.product);
    throw new UnauthorizedException();
  }
}