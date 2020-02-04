var app=require('express')();
var http=require('http').createServer(app);
var io=require('socket.io')(http);

app.get('/',(req,res)=>{
  res.sendFile(__dirname+'/socket.html');
})
io.on('connection',(socket)=>{
  console.log('new user connected');
  socket.on('createmsg',(data)=>{
    io.sockets.emit('newmsg',data);
  })
})


http.listen(3000,()=>{
  console.log('listening to port 3000')
})