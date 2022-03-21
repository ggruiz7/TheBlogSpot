const router=require('express').Router();
const blogRoutes =require('./blog-routes')
//add prefix of blog to routes 
router.use('/blogs',blogRoutes);
module.exports=router;