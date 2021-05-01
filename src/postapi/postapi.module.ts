import { Module } from '@nestjs/common';
import { PostapiService } from './postapi.service';
import { PostapiController } from './postapi.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { PostapiSchema } from './schemas/postapi.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Post', schema: PostapiSchema }])
 ],
  providers: [PostapiService],
  controllers: [PostapiController]
})
export class PostapiModule {}
