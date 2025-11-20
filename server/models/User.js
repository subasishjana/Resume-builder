import mongoose from "mongoose";
import bcrypt from "bcrypt"

const UserSchema = new mongoose.Schema({
    name : {type : String , require : true},
    email : {type : String, require: true, unique : true},
    password : {type : String, require: true}
}, {timestamps : true})

UserSchema.methods.comparePassword = function(password){
    return bcrypt.compareSync(password, this.password)
}

const User = mongoose.model("User", UserSchema)
export default User;