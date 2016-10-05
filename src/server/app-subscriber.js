/// <reference path="../../typings/index.d.ts" />

import * as redis from 'redis';

const PMESSAGE_EVENT = 'pmessage';

let redisSubscriber = redis.createClient();

let AppSubscriber = {
  subscribe: (io) => {
    /// subscribe to 
    redisSubscriber.psubscribe('*');
    /// event PMESSAGE_EVENT
    redisSubscriber.on(PMESSAGE_EVENT, (pattern, channel, key) => {
      console.log(`Pattern: ${pattern}, Channel: ${channel}, Key: ${key}`);
    });
  }
};

export { AppSubscriber }