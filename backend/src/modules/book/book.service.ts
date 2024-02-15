import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/prisma/prisma.service';
import { Book } from '@prisma/client';

@Injectable()
export class BookService {
    constructor(private prisma: PrismaService) {}

    async getAllBooks(): Promise<Book[]> {
        return this.prisma.book.findMany();
    }

    async getBookByID(id: number): Promise<Book> {
        return this.prisma.book.findUnique({
            where: { id },
        });
    }

    async createBook(data: Book): Promise<Book> {
        return this.prisma.book.create({ data });
    }

    async updateBook(id: number, data: Book): Promise<Book> {
        return this.prisma.book.update({
            where: { id },
            data,
        });
    }

    async deleteBook(id: number): Promise<Book> {
        return this.prisma.book.delete({
            where: { id },
        });
    }
}
