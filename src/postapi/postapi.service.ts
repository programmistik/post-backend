import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Post } from './interfaces/postapi.interface';
import { CreatePostDTO } from './dto/create-post.dto';

@Injectable()
export class PostapiService {
    constructor(@InjectModel('Post') private readonly postModel: Model<Post>) { }

    async getPosts(): Promise<Post[]> {
        const posts = await this.postModel.find().exec();
        return posts;
    }

    async getPostsByProfileId(ProfileId): Promise<Post[]> {
        const posts = await this.postModel.find({ProfileId});
        return posts;
    }
    
    async getPostsBysearchStr(searchStr): Promise<Post[]> {
        const posts = await this.postModel.find({ Title: { $regex: new RegExp(searchStr, "i")  } });
        return posts;
    }

    async getNews(ProfileId): Promise<Post[]> {
        const posts = await this.postModel.find( { ViewsProfileId: { $ne: ProfileId }});
        return posts;
    }

    async getPost(postID): Promise<Post> {
        const post = await this.postModel
            .findById(postID)
            .exec();
        return post;
    }

    async getPostByUniqueId(UniqueId): Promise<Post> {
        const post = await this.postModel.findOne({UniqueId});
        return post;
    }

    async getPostsByHashtag(hashtag): Promise<Post[]> {
        const posts = await this.postModel.find({ Hashtags: { $regex: new RegExp("^" + hashtag, "i") }});
        return posts;
    }

    async addPost(createPostDTO: CreatePostDTO): Promise<Post> {
        const newPost = await this.postModel.create(createPostDTO);
        return newPost.save();
    }

    async editPost(postID, createPostDTO: CreatePostDTO): Promise<Post> {
        const editedPost = await this.postModel
            .findByIdAndUpdate(postID, createPostDTO, { new: true });
        return editedPost;
    }

    async deletePost(postID): Promise<any> {
        const deletedPost = await this.postModel
            .findByIdAndRemove(postID);
        return deletedPost;
    }
}
