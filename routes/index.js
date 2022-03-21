const router = require('expresss').Router();
//import all of the API routes 
const apiRoutes = require('./api');
const htmlRoutes = require('./html/html-routes');

//add prefix of api to all
router.use('/api', apiRoutes);
router.use('/'.htmlRoutes);

router.use((req, res) => {
    res.status(404).send('<h1> 404 nError!</h1>');
});
module.exports = router;