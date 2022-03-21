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
    frinds: []
});
//create the User mofel using the UserSchema
const User = model('User', UserSchema);
//export the User model
module.exports = User;