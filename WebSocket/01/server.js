const Http = require('http')
const Ws = require('ws');
const server = Http.createServer();
const ws = new Ws.Server({ server });
ws.on('connection', (socket) => {
    console.log('WebSocket连接已打开');
    socket.on('message', (message) => {
        console.log('收到消息' + message);
        socket.send('Hello FireUG 我是服务端传递过来的信息');
    })

    socket.on('close', () => {
        console.log('WebSocket连接已经关闭');
    });
});

server.on('request', (request, response) => {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.end('Hello,World!');
})

server.listen(8080, () => {
    console.log('服务器已启动,端口号为8080')
})