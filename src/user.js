const mongoose = require ('mongoose');
const Schema = mongoose.Schema;
const PostSchema = require('./postSchema');

const UserSchema = new Schema({
	name : {
		type : String,
		validate : {
			validator : (name)=> name.length >2,
			message : 'name must be longer than 3 charactsers'
		},
		required : [true,'Name is required']
	},
	
	posts : [PostSchema]
});

UserSchema.virtual('postCount').get(function(){
	
})
const User = mongoose.model('user',UserSchema);
//User represents the whole collection
module.exports = User;