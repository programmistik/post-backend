import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { PostapiModule } from './postapi/postapi.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/postapi', { useNewUrlParser: true }), PostapiModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
