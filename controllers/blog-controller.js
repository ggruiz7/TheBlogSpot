const { Blog } = require('../models');

const BlogController = {
    //the functions
    //get all Blogs
    getAllBlog(req, res) {
        Blog.find({})
            .then(dbBlogData => res.json(dbBlogData))
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    },
    //get one blog by id 
    getblogbyId({ params }, res) {
        Blog.findOne({ _id: params.id })
            .then(dbBlogData => {
                //if no blog found , send 404
                if (!dbBlogData) {
                    res.status(404).json({ message: 'No Blog found with this id' });
                    return;
                }
                res.json(dbBlogData);
            })
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });

    },
    //create blog
    createBlog({ body }, res) {
        Blog.create(body)
            .then(dbBlogData => res.json(dbBlogData))
            .catch(err => res.status(400).json(err));

    },
    //delete Blog
    deleteBlog({ params }, res) {
        Blog.findOneAndDelete({ _id: params.id })
            .then(dbBlogData => {
                if (!dbBlogData) {
                    res.status(404).json({ message: 'No blog found with this id ' });
                    return;
                }
                res.json(dbBlogData);
            })
            .catch(err => res.status(400).json(err));

    }
};
module.exports = BlogController;