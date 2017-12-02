const assert = require('assert');
//assert is alreday there in mocha
const User = require('../src/user');

describe('Vlidation records',()=>{
	it('requires a username',()=>{
		const user = new User({name : undefined});
		const validationResult = user.validateSync();
		console.log(validationResult)
		const {message} = validationResult.errors.name.message;
		assert(message === 'Name is required')
	});

	it('requires a username longer than 2 char',()=>{
		const user = new User({name : 'al'})
		const validationResult = user.validateSync();
		const {message} = validationResult.errors.name;

		assert(message === 'name must be longer than 3 charactsers')
	});


	it('disallows invalid data to be saved', (done)=>{
		const user = new User({name : 'what'})
		user.save()
			.catch((validationResult)=>{
				const {message} = validationResult.errors.name
			})
			assert(message === 'name must be longer than 3 charactsers')
			done();
	})
});