"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostapiSchema = void 0;
const mongoose = require("mongoose");
exports.PostapiSchema = new mongoose.Schema({
    Id: String,
    ProfileId: String,
    Image: String,
    Title: String,
    Location: String,
    Date: String,
    Description: String,
    ViewsProfileId: Array,
    LikesProfileId: Array
});
//# sourceMappingURL=postapi.schema.js.map