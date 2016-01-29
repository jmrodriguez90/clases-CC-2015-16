#!/usr/bin/env node

var redis = require('redis');
var url = require('url');

var redisURL = url.parse(process.env.REDISCLOUD_URL);
console.log(redisURL);
var client = redis.createClient(redisURL.port, redisURL.hostname, {
  no_ready_check: true
});

client.set("prueba", "clave", redis.print);
client.get("prueba", function(err, reply) {
  console.log('Get ');
  if (err) {
    console.log(err);
  } else {
    console.log(reply.toString());
  }
});

client.hset("cosa", "campo1", "hola", redis.print);
client.hset("cosa", "campo2", "mundo", redis.print);
client.hkeys("cosa", function(err, replies) {
  console.log('hkeys');
  replies.forEach(function(reply, i) {
    console.log("    " + i + ": " + reply);
  });
  console.log("End ");
  client.end();
});
