// User model here
const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const userSchema = new Schema (
    {
        username: {
            type: String,
            trim: true,
            unique: true,
            required: [true, 'username is required']
        },
        password: {
            type: String,
            required: [true, 'password is required']
        }
    }
)

module.exports= model('User', userSchema)