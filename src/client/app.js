(function(){
  'use strict';

  var socket = io.connect('http://localhost:3000');
  var content = document.getElementById('content');

  /// listen to connect message
  socket.on('connect', function() {
    console.log('Connected');
    socket.emit('message', ['SG_GROUP', 'user'+Math.random()]);
  });

  /// listen to occupations message
  socket.on('occupations', function(data){
    var html = '<div>' + data + '</div>';
    content.insertAdjacentHTML('afterbegin', html);
  }); 

})();
