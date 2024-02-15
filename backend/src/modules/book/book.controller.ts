import {
    Controller,
    Get,
    Post,
    Put,
    Delete,
    Body,
    Param,
    NotFoundException,
} from '@nestjs/common';
import { BookService } from './book.service';

import { Book } from '@prisma/client';

@Controller('books')
export class BookController {
    constructor(private readonly bookService: BookService) {}

    @Get()
    async getAllBooks() {
        return this.bookService.getAllBooks();
    }

    @Get(':id')
    async getBookByID(@Param('id') id: string) {
        const bookfound = await this.bookService.getBookByID(Number(id));
        if (!bookfound) {
            throw new NotFoundException('Book not found');
        }
        return bookfound;
    }

    @Post()
    async createBook(@Body() data: Book) {
        return this.bookService.createBook(data);
    }

    @Put(':id')
    async updateBook(@Param('id') id: string, @Body() data: Book) {
        try {
            return await this.bookService.updateBook(Number(id), data);
        } catch (e) {
            throw new NotFoundException('Book not found');
        }
    }

    @Delete(':id')
    async deleteBook(@Param('id') id: string) {
        try {
            return await this.bookService.deleteBook(Number(id));
        } catch (e) {
            throw new NotFoundException('Book not found');
        }
    }
}
