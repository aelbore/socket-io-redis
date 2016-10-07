/// <reference path="../../typings/index.d.ts" />

import * as io from 'socket.io';
import { Occupations } from './occupations';
import { OccupationSeed } from './occupations-seed';
import { RedisSubscriber } from './redis-subscriber';

let socketio = {
  onInit: (server) => {
    let ioSocket = io.listen(server);
    RedisSubscriber.listenWithSocket(ioSocket);

    ioSocket.sockets.on('connection', (socket) => {
      /// listen to the emit events from client
      socket.on('message', (data) => {
        /// print the message key
        console.log(`> Client: ${socket.client.id}, data: ${JSON.stringify(data)}`);
        data.forEach((value) => {
          socket.join(value);
        });
      });
    });
  }
};

export { socketio }
