/// <reference path="../../typings/index.d.ts" />

import * as io from 'socket.io';
import { Occupations } from './occupations';
import { OccupationSeed } from './occupations-seed';

let socketio = {
  onInit: (server) => {
    let ioSocket = io.listen(server);
    OccupationSeed();
    
    ioSocket.sockets.on('connection', (socket) => {
      /// listen to the emit events from client
      socket.on('message', (data) => {
        /// print the message key
        console.log(`> Client: ${socket.client.id}, data: ${data}`);
      });

      /// initialize occupations demo;
      Occupations.onInit(socket);
    });

  }
};

export { socketio }