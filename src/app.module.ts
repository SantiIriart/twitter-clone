import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TweetsModule } from './tweets/tweets.module';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'postgres',
            password: 'hola',
            database: 'hola',
            autoLoadEntities: true,
            synchronize: true,
        }),
        TweetsModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}
