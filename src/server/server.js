/// <reference path="../../typings/index.d.ts" />

import express from 'express';
import * as http from 'http';
import * as redis from 'redis';

import { app } from './app';
import { socketio } from './socket-io';
import { redisSubscriber } from './redis-subscriber';

let server = http.createServer(app);
//socketio.onInit(server);
redisSubscriber.listen();

server.listen(3000, 'localhost');
server.on('listening', () => {
  let { port, address } = server.address();
  console.log(`Express server started on port ${port} at ${address}.`);
});
