'use strict';
const server=require('../server.js');
const supertest=require('supertest');
const request=supertest(server.app);

describe('server', ()=>{
  it('should get status 404',async()=>{
    const response =await request.get('/foo');
    expect(response.status).toBe(404);
 
  });
  it('should get a welcome message',async()=>{
    let route='/';
    const response = await request.get(route);
    expect(response.status).toBe(200);
    expect(response.text).toBe('Hello world, this app is working!');
  });

  it('should get get an error',async()=>{
    const response =await request.get('/bad');
    expect(response.status).toBe(500);
  });
});
 
