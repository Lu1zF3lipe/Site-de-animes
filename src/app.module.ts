import { Module } from '@nestjs/common';
import { AnimesModule } from './animes.module';
import { GenreModule } from './genre.module';

@Module({
  imports: [AnimesModule, GenreModule],
})
export class AppModule {}
