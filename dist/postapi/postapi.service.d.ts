import { Model } from 'mongoose';
import { Post } from './interfaces/postapi.interface';
import { CreatePostDTO } from './dto/create-post.dto';
export declare class PostapiService {
    private readonly postModel;
    constructor(postModel: Model<Post>);
    getPosts(): Promise<Post[]>;
    getPostsByProfileId(ProfileId: any): Promise<Post[]>;
    getPost(postID: any): Promise<Post>;
    addPost(createPostDTO: CreatePostDTO): Promise<Post>;
    editPost(postID: any, createPostDTO: CreatePostDTO): Promise<Post>;
    deletePost(postID: any): Promise<any>;
}
