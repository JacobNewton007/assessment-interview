import chai from 'chai';
import chatHttp from 'chai-http';
import delay from 'delay'
import request from 'supertest'
import app from '../index';


chai.use(chatHttp);
const { expect } = chai;



// API tests
describe('POST /add-user', function() {
	it('Adds a user', async function() {
    await delay(1000)
	  request(app)
		.post('/api/v1/users/create')
		.send({  
          name: 'Jacob Kehinde',
          email: 'metikenny@gmail.com',
          password: '123456789' 
        })
		.expect(201);
	});
});


  describe('GET /users', function() {
	it('Gets a particular user', async function() {
    await delay(1000)
	  request(app)
		.get('/api/v1/users')
		.send({  
      email: 'metikenny@gmail.com',
      password: '123456789' 
    })
		.expect(200);
	});
});


  describe('PUT /users/:id', function() {
	it('Updates a particular users', async function() {
    await delay(1000)
	  request(app)
		.put('api/v1/users/1')
		.send({ 
      name: 'Jacob Kehinde',
      email: 'metikenny@gmail.com',
      password: '123456789' 
    })
		.expect(200);
	});
});  


  describe('DELETE /users/:id', function() {
	it('Deletes a particular user', async function() {
    await delay(1000)
	  request(app)
		.delete('/api/v1/users/1')
		.expect(200);
	});
});    
