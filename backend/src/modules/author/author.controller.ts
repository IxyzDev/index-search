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
import { AuthorService } from './author.service';

import { Author } from '@prisma/client';

@Controller('authors')
export class AuthorController {
    constructor(private readonly authorService: AuthorService) {}

    @Get()
    async getAllAuthors() {
        return this.authorService.getAllAuthors();
    }

    @Get(':id')
    async getAuthorByID(@Param('id') id: string) {
        const authorfound = await this.authorService.getAuthorByID(Number(id));
        if (!authorfound) {
            throw new NotFoundException('Author not found');
        }
        return authorfound;
    }

    @Post()
    async createAuthor(@Body() data: Author) {
        return this.authorService.createAuthor(data);
    }

    @Put(':id')
    async updateAuthor(@Param('id') id: string, @Body() data: Author) {
        try {
            return await this.authorService.updateAuthor(Number(id), data);
        } catch (e) {
            throw new NotFoundException('Author not found');
        }
    }

    @Delete(':id')
    async deleteAuthor(@Param('id') id: string) {
        try {
            return await this.authorService.deleteAuthor(Number(id));
        } catch (e) {
            throw new NotFoundException('Author not found');
        }
    }
}
