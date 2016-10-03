(function(){
  'use strict';

  var socket = io.connect('http://localhost:3000');
  var content = document.getElementById('content');

  /// listen to connect message
  socket.on('connect', function() {
    console.log('Connected');
    socket.emit('message', Math.random());
  });

  /// listen to occupations message
  socket.on('occupations', function(data){
    var html = '<ul>';
    for(var i = 0; i < data.length - 1; i++){
      html += '<li>' + data[i].text + '</li>';
    }
    html += '</ul>';
    content.insertAdjacentHTML('afterbegin', html);
  }); 

})();