const { schema } = require("./blog");

const UserSchema = new Schema({
    userName: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    },
    frinds: [{
        type:schema.types.objectId,
        ref:'User'
    }]
    
},
{
    toJSON:{
        virtuals:true,
    },
    id:false
}
);
//create the User mofel using the UserSchema
const User = model('User', UserSchema);
//export the User model
module.exports = User;