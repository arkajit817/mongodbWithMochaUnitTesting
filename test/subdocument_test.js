const assert = require('assert');
//assert is alreday there in mocha
const User = require('../src/user');

describe('Subdocuments',()=>{
	it('can create a subdocument', (done)=>{
		const arka = new User ({
			name : 'arka',
			posts: [{title : 'chowdhury'}]
		});
		arka.save()
		.then(()=>User.findOne({name : 'arka'}))
		.then((user)=>{
			assert(user.posts[0].title=== 'chowdhury')
		})
				});

it('can create a subdocument of an existing user', (done)=>{
		const arka = new User ({
			name : 'arka',
			posts: [{title : 'debnath'}]
		});
		arka.save()
		.then(()=>User.findOne({name : 'arka'}))
		.then((user)=>{
			user.posts.push({title : 'roy'});
			return user.save();
		})
				});


	it('can remove a subdocument of an existing user', (done)=>{
		const arka = new User ({
			name : 'arka',
			posts: [{title : 'debnath'}]
		});
		arka.save()
		.then(()=>User.findOne({name : 'arka'}))
		.then((user)=>{
		const post = user.posts[0];
		post.remove();
		return user.save();
				});
		.then(()=> User.findOne({name : 'arka'}))
		.then((user)=>{
			assert(user.posts.length === 0);
			done();
		})


});