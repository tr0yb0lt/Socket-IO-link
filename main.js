var mraa = require('mraa'); //require mraa
console.log('MRAA Version: ' + mraa.getVersion()); //write the mraa version to the Intel XDK console

var LMotorIN = new mraa.Gpio(4); 
var LMotorOUT = new mraa.Gpio(5);
LMotorIN.dir(mraa.DIR_OUT);
LMotorOUT.dir(mraa.DIR_OUT);

var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res) {
    //Join all arguments together and normalize the resulting path.
    res.sendFile(path.join(__dirname + '/client', 'index.html'));
});

//Allow use of files in client folder
app.use(express.static(__dirname + '/client'));
app.use('/client', express.static(__dirname + '/client'))

http.listen(8080, function(){
    console.log('Web server Active listening on *:8080');
});

var socket = io.listen(server);

socket.on('connect',function(socket){
    console.log("user is connected");
    
    var b =123;
    socket.emit('word',b);
    
    socket.on('disconnect',function(){
     console.log("user disconnect");   
    }
}