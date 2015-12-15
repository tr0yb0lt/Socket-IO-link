var socket = io.connect("http://");

socket.on('connect',function(){
 console.log("connected");
    
    socket.on('word',fucntion(data){
              var a = data;
              console.log(a);
              }
}