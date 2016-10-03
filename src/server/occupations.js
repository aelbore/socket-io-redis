/// <reference path="../../typings/index.d.ts" />

import * as redis from 'redis';

let sub = redis.createClient();
let redisClient = redis.createClient();

let Occupations = {
  onInit: (socket) => {
    /// subscribe to 'app' channel
    sub.subscribe('app');

    /// listen to message comming from publish
    /// channel => channel subscribe
    /// message =>  key to get the data
    sub.on('message', (channel, message) => {
      redisClient.get(message, (err, value) => {
        let data = JSON.parse(value);
        socket.emit(message, data);
      });
    });    
  }
};

export { Occupations }