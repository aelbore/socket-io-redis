/// <reference path="../../typings/index.d.ts" />

import * as redis from 'redis';

let redisClient = redis.createClient();

let OccupationSeed = () => {
    let isKeyExist = redisClient.exists('occupations');
    if (!isKeyExist){
      let occupations = require('./occupations.json');
      redisClient.set('occupations', JSON.stringify(occupations));  
    }
};

export { OccupationSeed }