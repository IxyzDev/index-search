import { Module } from '@nestjs/common';

import { AuthorModule } from '@/modules/author/author.module';
import { BookModule } from '@/modules/book/book.module';
import { GenreModule } from '@/modules/genre/genre.module';

@Module({
    imports: [AuthorModule, BookModule, GenreModule],
    controllers: [],
    providers: [],
})
export class AppModule {}
