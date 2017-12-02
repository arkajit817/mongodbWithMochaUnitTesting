const assert = require('assert');
//assert is alreday there in mocha
const User = require('../src/user')


describe('Creating records',(done)=>{
	it('saves a user',()=>{
		const arka = new User({name : 'arka'});
		arka.save()
		.then(()=>{
			assert(!arka.isNew)
			done();
		})
		.catch(()=>{
			console.log("arka")
		})
	});
});