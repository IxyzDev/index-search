import { Module } from '@nestjs/common';

import { PrismaModule } from '@/prisma/prisma.module';
import { BookController } from './book.controller';
import { BookService } from './book.service';

@Module({
    controllers: [BookController],
    providers: [BookService],
    imports: [PrismaModule],
})
export class BookModule {}
