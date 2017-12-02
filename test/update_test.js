const assert = require('assert');
//assert is alreday there in mocha
const User = require('../src/user')

describe('Updating record', ()=>{
	let arka;

	beforeEach((done)=>{
		arka = new User({name :'arka',postCount : 0})
			arka.save()
			.then(()=>done());
	});

function assertName(operation, done){
 	operation
 	.then(()=>{User.find({})})
			.then((users)=>{
				console.log(users)
				//assert(users.length ===1)
				assert(users[0].name === 'alex')
				done();
			});
}

	it('instance type using set and save',(done)=>{
		console.log(arka)
		arka.set('name','alex');
		console.log(arka)
		//By using set changes will be only in memory
		//we need to save for make changes in database
		assertName(arka.save(), done);
			
	});

	it('A model instance can update',(done)=>{
		assertName(arka.update({name : 'Alex'}), done);
	});


	it('A model instance can update',(done)=>{
		//assertName
User.update({name : 'arka', name :'alex'})
done()	
});

	it('A model instance can update',(done)=>{
		//assertName
User.findByIdAndUpdate({name : 'arka', name :'alex'})
done()	
});


	it('a user can have their postcount incremented by 1',(done)=>{
		User.update({name : 'arka'},{ $inc : {postCount : 1}})
		.then(()=> User.findOne({name :'arka'}))
		.then((user)=>{
			assert(user.postCount ===1)
			done();
		})
	});
})