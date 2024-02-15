import { Module } from '@nestjs/common';

import { PrismaModule } from '@/prisma/prisma.module';
import { GenreController } from './genre.controller';
import { GenreService } from './genre.service';

@Module({
    controllers: [GenreController],
    providers: [GenreService],
    imports: [PrismaModule],
})
export class GenreModule {}
