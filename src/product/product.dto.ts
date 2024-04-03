import { ApiProperty } from "@nestjs/swagger";

export class ProductDto {
    @ApiProperty()
    title: string;

    @ApiProperty()
    img: string;

    @ApiProperty()
    price: number;

    @ApiProperty()
    info: string;

    @ApiProperty()
    inCart: boolean;

    @ApiProperty()
    count: number;

    @ApiProperty()
    total: number;

    @ApiProperty()
    subscriptionDays: string;

    @ApiProperty()
    time: string;
}