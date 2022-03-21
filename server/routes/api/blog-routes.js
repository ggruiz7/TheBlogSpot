const router=require('express').Router;
const{
    getAllBlog,
    getBlogById,
    createBlog,
    deleteBlog

} = require('../../controllers/blog-controller')
//set up get all and post at /api/blog
router
 .route('/')
 .get(getAllBlog)
 .post(createBlog);
// set up get one ,put ,and delete 
router
 .route('/:id')
 .get(getBlogById)
 .delete(deleteBlog);

module.exports=router;
