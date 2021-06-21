export class CreatePostDTO {
    readonly Id: string;
    readonly UniqueId: string;
    readonly ProfileId: string;
    readonly Image: string;
    readonly Title: string;
    readonly Location: string;
    readonly Date: string;
    readonly Description: string;
    readonly ViewsProfileId: Array<string>;
    readonly LikesProfileId: Array<string>;
    readonly Hashtags: Array<string>
}