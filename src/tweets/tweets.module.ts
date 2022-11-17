import { Module } from '@nestjs/common';
import { TweetsService } from './tweets.service';
import { TweetsController } from './tweets.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tweet } from './entities/tweet.entity';

@Module({
    controllers: [TweetsController],
    providers: [TweetsService],
    imports: [TypeOrmModule.forFeature([Tweet])],
    exports: [TweetsService, TypeOrmModule],
})
export class TweetsModule {}
