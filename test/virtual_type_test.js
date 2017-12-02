const assert = require('assert');
//assert is alreday there in mocha
const User = require('../src/user');
describe('Virtual types',()=>{\
it('postCount returns number of posts',(done)=>{
	const arka = new User({
		name :'arka',
		posts: [{title: 'PostTitle'}]
	});
	arka.save()
		.then((user)=>{
			assert(joe.postCount ===1);
			done();
			
		})
})
})