const { default: mongoose } = require("mongoose");

mongoose.connect(process.env.MONGODB_URI ||'mongodb://localhost:27017/theblogspot',{
    useNewUrlParser:true,
    useUnifiedTopology: true
});
//use this to log mongo queries being executed
mongoose.set('debug',true)