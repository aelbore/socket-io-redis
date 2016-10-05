/// <reference path="../../typings/index.d.ts" />

import * as io from 'socket.io';
import * as redis from 'redis';
import { Occupations } from './occupations';
import { OccupationSeed } from './occupations-seed';
import { AppSubscriber } from './app-subscriber';

let redisClient = redis.createClient();

let socketio = {
  onInit: (server) => {
    let ioSocket = io.listen(server);
    //OccupationSeed();

    /// initialize occupations demo;
    /// Occupations.onInit(socket);

    AppSubscriber.subscribe(ioSocket);
    
    ioSocket.sockets.on('connection', (socket) => {
      /// listen to the emit events from client
      socket.on('message', (data) => {
        let clientId = socket.client.id;
        /// check the key exist or the new connection
        // if (!socketio.isExistKey(clientId)){
        //   redisClient.set(socket.client.id, 'demo');
        // }
        /// print the message key
        console.log(`> Client: ${clientId}, data: ${data}`);
      });
    });
  },
  isExistKey: (key) => {
    let client = redis.createClient();
    client.get(key, (err, value) => {
      if (!(value)) { return false; }
      return true;
    });
  }
};

export { socketio }