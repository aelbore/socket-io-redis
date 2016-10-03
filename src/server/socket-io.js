/// <reference path="../../typings/index.d.ts" />

import * as io from 'socket.io';
import * as redis from 'redis';
import * as path from 'path';


let sub = redis.createClient();
let pub = redis.createClient();

let redisClient = redis.createClient();

let socketio = {
  onInit: (server) => {
    let ioSocket = io.listen(server);

    ioSocket.sockets.on('connection', (socket) => {

      /// listen to the emit events from client
      socket.on('message', (data) => {
        /// print the message key
        console.log(`Data from client: ${data}`);

        /// insert data to redis;
        redisClient.set(data, JSON.stringify({ Fname: 'Arjay', Lname: 'Elbore' }));

        /// get data to redis;
        redisClient.get('users', (err, msg) => {
          let values = [];
          let value = JSON.parse(msg);

          values.push(value);

          /// emit to front-end/ui
          socket.emit('users', values);
        });

        sub.subscribe('user');

        sub.on('message', (channel, message) => {
          redisClient.get(message, (err, value) => {
            let data = JSON.stringify(JSON.parse(value));
            console.log(data);
          });
        });       

      });

    });

  }
};

export { socketio }