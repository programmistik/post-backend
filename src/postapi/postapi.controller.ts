import { Controller, Get, Res, HttpStatus, Param, NotFoundException, Post, Body, Query, Put, Delete } from '@nestjs/common';
import { PostapiService } from './postapi.service';
import { CreatePostDTO } from './dto/create-post.dto';
import { ValidateObjectId } from './shared/pipes/validate-object-id.pipes';

@Controller('postapi')
export class PostapiController {
    constructor(private postapiService: PostapiService) { }

    @Get('posts')
    async getPosts(@Res() res) {
        const posts = await this.postapiService.getPosts();
        return res.status(HttpStatus.OK).json(posts);
    }

    @Get('posts/:profileID')
    async getPostsByProfileId(@Res() res, @Param('profileID') profileID: string) {
       
        const posts = await this.postapiService.getPostsByProfileId(profileID);
        return res.status(HttpStatus.OK).json(posts);
    }

    @Get('news/:profileID')
    async getNews(@Res() res, @Param('profileID') profileID: string) {
       
        const posts = await this.postapiService.getNews(profileID);
        return res.status(HttpStatus.OK).json(posts);
    }

    @Get('post/:postID')
    async getPost(@Res() res, @Param('postID', new ValidateObjectId()) postID)
     {
        const post = await this.postapiService.getPost(postID);
        if (!post) throw new NotFoundException('Post does not exist!');
        return res.status(HttpStatus.OK).json(post);

    }

    @Get('postbyunique/:UniqueId')
    async getPostByUniqueId(@Res() res, @Param('UniqueId') UniqueId: string)
     {
        const post = await this.postapiService.getPostByUniqueId(UniqueId);
        if (!post) throw new NotFoundException('Post does not exist!');
        return res.status(HttpStatus.OK).json(post);

    }

    @Get('postsByHashtag/:hashtag')
    async getPostsByHashtag(@Res() res, @Param('hashtag') hashtag: string) {
       
        const posts = await this.postapiService.getPostsByHashtag(hashtag);
        return res.status(HttpStatus.OK).json(posts);
    }

    @Post('/post')
    async addPost(@Res() res, @Body() createPostDTO: CreatePostDTO) {
        const newPost = await this.postapiService.addPost(createPostDTO);
        return res.status(HttpStatus.OK).json({
            message: "Post has been submitted successfully!",
            post: newPost
        })
    }

    @Put('/edit')
    async editPost(@Res() res, @Body() createPostDTO: CreatePostDTO) {
        const editedPost = await this.postapiService.editPost(createPostDTO.Id, createPostDTO);
        if (!editedPost) throw new NotFoundException('Post does not exist!'+createPostDTO.Id+ ' ' + createPostDTO.Title);
        return res.status(HttpStatus.OK).json({
            message: 'Post has been successfully updated',
            post: editedPost
        })
    }

    @Get('sposts/:searchStr')
    async getPostsBySearchStr(@Res() res, @Param('searchStr') searchStr: string) {
       
        const posts = await this.postapiService.getPostsBysearchStr(searchStr);
        return res.status(HttpStatus.OK).json(posts);
    }

    @Delete('/delete/:postID')
    async deletePost(@Res() res, @Param('postID', new ValidateObjectId()) postID) {
        const deletedPost = await this.postapiService.deletePost(postID);
        if (!deletedPost) throw new NotFoundException('Post does not exist!');
        return res.status(HttpStatus.OK).json({
            message: 'Post has been deleted!',
            post: deletedPost
        })
    }

}
