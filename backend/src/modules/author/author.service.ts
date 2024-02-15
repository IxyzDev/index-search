import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/prisma/prisma.service';
import { Author } from '@prisma/client';

@Injectable()
export class AuthorService {
    constructor(private prisma: PrismaService) {}

    async getAllAuthors(): Promise<Author[]> {
        return this.prisma.author.findMany();
    }

    async getAuthorByID(id: number): Promise<Author> {
        return this.prisma.author.findUnique({
            where: { id },
        });
    }

    async createAuthor(data: Author): Promise<Author> {
        return this.prisma.author.create({ data });
    }

    async updateAuthor(id: number, data: Author): Promise<Author> {
        return this.prisma.author.update({
            where: { id },
            data,
        });
    }

    async deleteAuthor(id: number): Promise<Author> {
        return this.prisma.author.delete({
            where: { id },
        });
    }
}
