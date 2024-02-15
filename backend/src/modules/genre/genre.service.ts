import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/prisma/prisma.service';
import { Genre } from '@prisma/client';

@Injectable()
export class GenreService {
    constructor(private prisma: PrismaService) {}

    async getAllGenres(): Promise<Genre[]> {
        return this.prisma.genre.findMany();
    }

    async getGenreByID(id: number): Promise<Genre> {
        return this.prisma.genre.findUnique({
            where: { id },
        });
    }

    async createGenre(data: Genre): Promise<Genre> {
        return this.prisma.genre.create({ data });
    }

    async updateGenre(id: number, data: Genre): Promise<Genre> {
        return this.prisma.genre.update({
            where: { id },
            data,
        });
    }

    async deleteGenre(id: number): Promise<Genre> {
        return this.prisma.genre.delete({
            where: { id },
        });
    }
}
