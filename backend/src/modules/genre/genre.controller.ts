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
import { GenreService } from './genre.service';

import { Genre } from '@prisma/client';

@Controller('genres')
export class GenreController {
    constructor(private readonly genreService: GenreService) {}

    @Get()
    async getAllGenres() {
        return this.genreService.getAllGenres();
    }

    @Get(':id')
    async getGenreByID(@Param('id') id: string) {
        const genrefound = await this.genreService.getGenreByID(Number(id));
        if (!genrefound) {
            throw new NotFoundException('Genre not found');
        }
        return genrefound;
    }

    @Post()
    async createGenre(@Body() data: Genre) {
        return this.genreService.createGenre(data);
    }

    @Put(':id')
    async updateGenre(@Param('id') id: string, @Body() data: Genre) {
        try {
            return await this.genreService.updateGenre(Number(id), data);
        } catch (e) {
            throw new NotFoundException('Genre not found');
        }
    }

    @Delete(':id')
    async deleteGenre(@Param('id') id: string) {
        try {
            return await this.genreService.deleteGenre(Number(id));
        } catch (e) {
            throw new NotFoundException('Genre not found');
        }
    }
}
