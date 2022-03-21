const { Schema, model } = require('mongoose');
const BlogSchema = new Schema({
    blogtittle: {
        type: String
    },
    blogBody: {
        type: String
    },
    writtenBy: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    createdAt: {
        type: Date,
        default: Date.now

    },
});
const Blog = model('Blog', BlogSchema);
module.exports = Blog;