import { Module } from '@nestjs/common';

import { PrismaModule } from '@/prisma/prisma.module';
import { AuthorController } from './author.controller';
import { AuthorService } from './author.service';

@Module({
    controllers: [AuthorController],
    providers: [AuthorService],
    imports: [PrismaModule],
})
export class AuthorModule {}
