const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
//this is ES6 implementation of promises
before((done)=>{
	mongoose.connect('mongodb://localhost/users_test');
mongoose.connection
.once('open',()=> {done();})
.on('error',(error)=>{
	console.warn('error occurred',error)
});
});


//.once & .on are events prresent in mongoose 
beforeEach((done)=>{
	mongoose.connection.collections.users.drop(()=>{
		done();
	});
})