import * as redis from 'redis';

var client = redis.createClient();
var EVENT_SET = '__keyevent@0__:set';
var EVENT_DEL = '__keyevent@0__:del';

// For this to work, remember to set notify-keyspace-events correctly in your redis configuration (Eg$ will suffice)
// More info on notify-keyspace-events on http://redis.io/topics/notifications
let redisSubscriber = {
    listen: () => {
        client.on('pmessage', function(pattern, channel, key) {
            console.log(pattern, channel, key);
            switch (channel) {
                case EVENT_SET:
                    console.log('Key "' + key + '" set!');
                break;
                case EVENT_DEL:
                    console.log('Key "' + key + '" deleted!');
                break;
            }
        });
        client.psubscribe('*'); // subscribes the client to all patterns
    }
}

export { redisSubscriber }
