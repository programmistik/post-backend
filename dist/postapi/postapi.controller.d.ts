import { PostapiService } from './postapi.service';
import { CreatePostDTO } from './dto/create-post.dto';
export declare class PostapiController {
    private postapiService;
    constructor(postapiService: PostapiService);
    getPosts(res: any): Promise<any>;
    getPostsByProfileId(res: any, profileID: string): Promise<any>;
    getPost(res: any, postID: any): Promise<any>;
    addPost(res: any, createPostDTO: CreatePostDTO): Promise<any>;
    editPost(res: any, postID: any, createPostDTO: CreatePostDTO): Promise<any>;
    deletePost(res: any, postID: any): Promise<any>;
}
