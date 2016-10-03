# socket-io-redis
Socket-io and redis (publish &amp; subscribe)

## For Mac users
* Install homebrew (Copy and Paste this commad to your terminal)
```
  /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```
* Install Redis
```
https://medium.com/@petehouston/install-and-config-redis-on-mac-os-x-via-homebrew-eb8df9a4f298
```

## Clone repository
```
  git clone https://github.com/aelbore/socket-io-redis.git
  cd socket-io-redis
  npm install
  node start
  
  Open another terminal window (for running the redis)
  redis-server /usr/local/etc/redis.conf
  
  Open another terminal window/tab
  redis-cli
  publish app 'occupations' 
```
