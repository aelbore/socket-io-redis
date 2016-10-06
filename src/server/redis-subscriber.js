import * as redis from 'redis';

var client = redis.createClient();

// For this to work, remember to set notify-keyspace-events correctly in your redis configuration (Eg$ will suffice)
// More info on notify-keyspace-events on http://redis.io/topics/notifications
let redisSubscriber = {
    listenWithSocket: (ioSocket) => {
        client.on('pmessage', function(pattern, channel, key) {
            console.log('Room: ' + channel);
            ioSocket.to(channel).emit('occupations', key);
        });
        client.psubscribe('*'); // subscribes the client to all patterns
    }
}

export { redisSubscriber }
