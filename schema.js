const mongoose = require('mongoose');

const Profile = new mongoose.Schema({
    
        firstName: {
            type: String,
            
        },
        lastName: {
            type: String,
            
        },
        age: {
            type: Number,
            min: 0
        }
})
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true
    },
    roles: {
        type: [String],  
        default: ['user']
    },
    profile: Profile
    ,
    lastLogin: {
        type: Date,
        default: Date.now
    }
}); 


const User = mongoose.model('User', userSchema);

module.exports = User;
