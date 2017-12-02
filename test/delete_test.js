const assert = require ('assert');
const User = require('../src/user');

describe('Deleting a user',()=>{
	let arka;

	beforeEach((done)=>{
		arka = new User({name : 'arka'});
		arka.save()
			.then(()=> done());
	});
	it('model instance remove',(done)=>{
		arka.remove()
			.then(()=> User.findOne({name :'arka'}))
			.then((user)=>{
				assert(user === null);
				done(); // Nested promises -- the first promise returns the callback to the first promise(.then)
						//the promises of the .then is returned to the second .then function
						//Two .then is occurring sequencially
			})
	});

	it('class method remove',(done)=>{
		User.remove({ name : 'arka'})
		.then(()=> User.findOne({name :'arka'}))
			.then((user)=>{
				assert(user === null);
				done(); // Nested promises -- the first promise returns the callback to the first promise(.then)
						//the promises of the .then is returned to the second .then function
						//Two .then is occurring sequencially
			})
	});
	it('class method findOneAndRemove',(done)=>{
		User.findOneAndRemove({name : 'arka'})
		.then(()=> User.findOne({name :'arka'}))
			.then((user)=>{
				assert(user === null);
				done(); // Nested promises -- the first promise returns the callback to the first promise(.then)
						//the promises of the .then is returned to the second .then function
						//Two .then is occurring sequencially
			})
	});
	it('class method findByIdAndRemove',(done)=>{
		User.findByIdAndRemove(arka._id)
		.then(()=> User.findOne({name :'arka'}))
			.then((user)=>{
				assert(user === null);
				done(); // Nested promises -- the first promise returns the callback to the first promise(.then)
						//the promises of the .then is returned to the second .then function
						//Two .then is occurring sequencially
			})

	});


});