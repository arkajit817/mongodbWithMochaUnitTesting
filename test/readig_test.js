const assert = require ('assert');
const User = require('../src/user');

describe('reading users out of database',()=>{
		let arka;

	beforeEach((done)=>{
		arka = new User({ name : 'arka'}); //the scope of arka is within the whole file
		arka.save()
		.then(()=> done())
	})


	it('finds all users with a name arka',(done)=>{
		User.find({name : 'arka'})
		.then((users)=>{
			console.log(users[0]._id);
			console.log(arka._id)
			assert(users[0]._id.toString() === arka._id.toString())
			done();
		})
	});


	it('find a user with a particular ',(done)=>{
		User.findOne({_id : arka._id})
		.then((user)=>{
			
			assert(user.name=== arka._id)
			done();
		})
	})
});