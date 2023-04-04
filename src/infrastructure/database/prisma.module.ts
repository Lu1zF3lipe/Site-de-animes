import { Module } from '@nestjs/common';
import { PrismaProvider } from './prisma.providers';

@Module({
  providers: [PrismaProvider],
  exports: [PrismaProvider],
})
export class prismaModule {}
