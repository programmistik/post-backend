import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { PostapiModule } from './postapi/postapi.module';
import { ConfigModule } from '@nestjs/config';

@Module({
    imports: [ConfigModule.forRoot(), MongooseModule.forRoot(process.env.DBURL, { useNewUrlParser: true, useFindAndModify: false }), PostapiModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
