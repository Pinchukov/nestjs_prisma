import {
    IsNotEmpty, IsString, MinLength, IsBoolean, IsOptional,
    //MaxLength,
} from 'class-validator';

export class CreatePostDto {

    @IsString()
    @IsNotEmpty()
    @MinLength(2)
    title: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(10)
    content: string;

    @IsBoolean()
    @IsOptional()
    published: boolean;
}
