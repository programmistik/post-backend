import * as mongoose from 'mongoose';

export const PostapiSchema = new mongoose.Schema({
    Id: String,
    UniqueId: String,
    ProfileId: String,
    Image: String,
    Title: String,
    Location: String,
    Date: String,
    Description: String,
    ViewsProfileId: Array,
    LikesProfileId: Array,
    Hashtags: Array
    
}, { versionKey: false })