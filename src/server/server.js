/// <reference path="../../typings/index.d.ts" />

import express from 'express';
import * as http from 'http';

import { app } from './app';
import { socketio } from './socket-io';

let server = http.createServer(app);
socketio.onInit(server);

server.listen(3000, 'localhost');
server.on('listening', () => {
  let { port, address } = server.address();
  console.log(`Express server started on port ${port} at ${address}.`);
});