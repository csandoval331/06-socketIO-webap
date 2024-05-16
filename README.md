# Creating a live chat app
- express app with socketio sharring same port 3000
    ```javascript
    const app = require('express')();
    const server = require('http').createServer(app);
    const io = require('socket.io')(server);
    io.on('connection', () => { /* … */ });
    server.listen(3000);
    ```

# Errors encountered
-  Was getting a [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) issue. 
    + Browser would make calls to http://server/3000/socket.io/socker.io.js, but server did not have policy set to tell browser where it could load resources
    + **Error message seen from browser**
        > ```Cross-Origin Request Blocked: The Same Origin Policy disallows reading the remote resource at http://server-ip-addr:3000/socket.io/?EIO=4&transport=polling&t=Oz_ljdQ. (Reason: CORS header ‘Access-Control-Allow-Origin’ missing). Status code: 200.```

# Server.js socket.io console.log(socket)
- [socket.io documentation](https://socket.io/docs/v3/server-socket-instance/) 
- io.on() returns socket objet which is assigned to each new connection
    ```javascript server.js
    const io = require('socket.io')
    io.on('connection', (socket) => {
        console.log(socket.id) //will return something like this
        // { id: 'an4FbKYi0i7cMIwCAAAF' }
    })
    ```
- console.log(socket) for fun
    ````json
    Socket {
        _events: [Object: null prototype] {
            error: [Function: noop],
            'new-user': [Function (anonymous)],
            'send-chat-message': [Function (anonymous)],
            disconnect: [Function (anonymous)]
        },
        _eventsCount: 4,
        _maxListeners: undefined,
        nsp: <ref *2> Namespace {
            _events: [Object: null prototype] { connection: [Function (anonymous)] },
            _eventsCount: 1,
            _maxListeners: undefined,
            sockets: Map(2) {
            'CM9qmtouieqPnHZnAAAB' => [Socket],
            'lIJhZiEqdhBeGanuAAAD' => [Circular *1]
            },
            _fns: [],
            _ids: 0,
            server: Server {
            _events: [Object: null prototype] {},
            _eventsCount: 0,
            _maxListeners: undefined,
            _nsps: [Map],
            parentNsps: Map(0) {},
            parentNamespacesFromRegExp: Map(0) {},
            _path: '/socket.io',
            clientPathRegex: /^\/socket\.io\/socket\.io(\.msgpack|\.esm)?(\.min)?\.js(\.map)?(?:\?|$)/,
            _connectTimeout: 45000,
            _serveClient: true,
            _parser: [Object],
            encoder: [Encoder],
            opts: [Object],
            _adapter: [class Adapter extends EventEmitter],
            sockets: [Circular *2],
            eio: [Server],
            httpServer: [Server],
            engine: [Server],
            _corsMiddleware: [Function: corsMiddleware],
            [Symbol(shapeMode)]: false,
            [Symbol(kCapture)]: false
            },
            name: '/',
            adapter: Adapter {
            _events: [Object: null prototype] {},
            _eventsCount: 0,
            _maxListeners: undefined,
            nsp: [Circular *2],
            rooms: [Map],
            sids: [Map],
            encoder: [Encoder],
            [Symbol(shapeMode)]: false,
            [Symbol(kCapture)]: false
            },
            [Symbol(shapeMode)]: false,
            [Symbol(kCapture)]: false
        },
        client: Client {
            sockets: Map(1) { 'lIJhZiEqdhBeGanuAAAD' => [Circular *1] },
            nsps: Map(1) { '/' => [Circular *1] },
            server: Server {
            _events: [Object: null prototype] {},
            _eventsCount: 0,
            _maxListeners: undefined,
            _nsps: [Map],
            parentNsps: Map(0) {},
            parentNamespacesFromRegExp: Map(0) {},
            _path: '/socket.io',
            clientPathRegex: /^\/socket\.io\/socket\.io(\.msgpack|\.esm)?(\.min)?\.js(\.map)?(?:\?|$)/,
            _connectTimeout: 45000,
            _serveClient: true,
            _parser: [Object],
            encoder: [Encoder],
            opts: [Object],
            _adapter: [class Adapter extends EventEmitter],
            sockets: [Namespace],
            eio: [Server],
            httpServer: [Server],
            engine: [Server],
            _corsMiddleware: [Function: corsMiddleware],
            [Symbol(shapeMode)]: false,
            [Symbol(kCapture)]: false
            },
            conn: Socket {
            _events: [Object: null prototype],
            _eventsCount: 3,
            _maxListeners: undefined,
            _readyState: 'open',
            upgrading: false,
            upgraded: true,
            writeBuffer: [],
            packetsFn: [],
            sentCallbackFn: [],
            cleanupFn: [Array],
            id: 'lEB8xVdijjMl2k0AAAAC',
            server: [Server],
            request: [IncomingMessage],
            protocol: 4,
            remoteAddress: '::ffff:10.0.0.47',
            pingTimeoutTimer: Timeout {
                _idleTimeout: 45000,
                _idlePrev: [TimersList],
                _idleNext: [TimersList],
                _idleStart: 8260,
                _onTimeout: [Function (anonymous)],
                _timerArgs: undefined,
                _repeat: null,
                _destroyed: false,
                [Symbol(refed)]: true,
                [Symbol(kHasPrimitive)]: false,
                [Symbol(asyncId)]: 182,
                [Symbol(triggerId)]: 161
            },
            pingIntervalTimer: Timeout {
                _idleTimeout: 25000,
                _idlePrev: [TimersList],
                _idleNext: [Timeout],
                _idleStart: 3712,
                _onTimeout: [Function (anonymous)],
                _timerArgs: undefined,
                _repeat: null,
                _destroyed: false,
                [Symbol(refed)]: true,
                [Symbol(kHasPrimitive)]: false,
                [Symbol(asyncId)]: 127,
                [Symbol(triggerId)]: 0
            },
            transport: [WebSocket],
            [Symbol(shapeMode)]: false,
            [Symbol(kCapture)]: false
            },
            encoder: Encoder { replacer: undefined },
            decoder: Decoder { reviver: undefined, _callbacks: [Object] },
            id: 'lEB8xVdijjMl2k0AAAAC',
            onclose: [Function: bound onclose],
            ondata: [Function: bound ondata],
            onerror: [Function: bound onerror],
            ondecoded: [Function: bound ondecoded],
            connectTimeout: undefined
        },
        recovered: false,
        data: {},
        connected: true,
        acks: Map(0) {},
        fns: [],
        flags: {},
        server: <ref *3> Server {
            _events: [Object: null prototype] {},
            _eventsCount: 0,
            _maxListeners: undefined,
            _nsps: Map(1) { '/' => [Namespace] },
            parentNsps: Map(0) {},
            parentNamespacesFromRegExp: Map(0) {},
            _path: '/socket.io',
            clientPathRegex: /^\/socket\.io\/socket\.io(\.msgpack|\.esm)?(\.min)?\.js(\.map)?(?:\?|$)/,
            _connectTimeout: 45000,
            _serveClient: true,
            _parser: {
            protocol: 5,
            PacketType: [Object],
            Encoder: [class Encoder],
            Decoder: [class Decoder extends Emitter]
            },
            encoder: Encoder { replacer: undefined },
            opts: { cors: [Object], cleanupEmptyChildNamespaces: false },
            _adapter: [class Adapter extends EventEmitter],
            sockets: <ref *2> Namespace {
            _events: [Object: null prototype],
            _eventsCount: 1,
            _maxListeners: undefined,
            sockets: [Map],
            _fns: [],
            _ids: 0,
            server: [Circular *3],
            name: '/',
            adapter: [Adapter],
            [Symbol(shapeMode)]: false,
            [Symbol(kCapture)]: false
            },
            eio: Server {
            _events: [Object: null prototype],
            _eventsCount: 1,
            _maxListeners: undefined,
            middlewares: [Array],
            clients: [Object],
            clientsCount: 2,
            opts: [Object],
            ws: [WebSocketServer],
            [Symbol(shapeMode)]: false,
            [Symbol(kCapture)]: false
            },
            httpServer: Server {
            maxHeaderSize: undefined,
            insecureHTTPParser: undefined,
            requestTimeout: 300000,
            headersTimeout: 60000,
            keepAliveTimeout: 5000,
            connectionsCheckingInterval: 30000,
            requireHostHeader: true,
            joinDuplicateHeaders: undefined,
            rejectNonStandardBodyWrites: false,
            _events: [Object: null prototype],
            _eventsCount: 5,
            _maxListeners: undefined,
            _connections: 5,
            _handle: [TCP],
            _usingWorkers: false,
            _workers: [],
            _unref: false,
            _listeningId: 1,
            allowHalfOpen: true,
            pauseOnConnect: false,
            noDelay: true,
            keepAlive: false,
            keepAliveInitialDelay: 0,
            highWaterMark: 16384,
            httpAllowHalfOpen: false,
            timeout: 0,
            maxHeadersCount: null,
            maxRequestsPerSocket: 0,
            _connectionKey: '6::::3000',
            [Symbol(IncomingMessage)]: [Function: IncomingMessage],
            [Symbol(ServerResponse)]: [Function: ServerResponse],
            [Symbol(shapeMode)]: false,
            [Symbol(kCapture)]: false,
            [Symbol(async_id_symbol)]: 10,
            [Symbol(kUniqueHeaders)]: null,
            [Symbol(http.server.connections)]: ConnectionsList {},
            [Symbol(http.server.connectionsCheckingInterval)]: Timeout {
                _idleTimeout: 30000,
                _idlePrev: [TimersList],
                _idleNext: [TimersList],
                _idleStart: 111,
                _onTimeout: [Function: bound checkConnections],
                _timerArgs: undefined,
                _repeat: 30000,
                _destroyed: false,
                [Symbol(refed)]: false,
                [Symbol(kHasPrimitive)]: false,
                [Symbol(asyncId)]: 12,
                [Symbol(triggerId)]: 11
            }
            },
            engine: Server {
            _events: [Object: null prototype],
            _eventsCount: 1,
            _maxListeners: undefined,
            middlewares: [Array],
            clients: [Object],
            clientsCount: 2,
            opts: [Object],
            ws: [WebSocketServer],
            [Symbol(shapeMode)]: false,
            [Symbol(kCapture)]: false
            },
            _corsMiddleware: [Function: corsMiddleware],
            [Symbol(shapeMode)]: false,
            [Symbol(kCapture)]: false
        },
        adapter: <ref *4> Adapter {
            _events: [Object: null prototype] {},
            _eventsCount: 0,
            _maxListeners: undefined,
            nsp: <ref *2> Namespace {
            _events: [Object: null prototype],
            _eventsCount: 1,
            _maxListeners: undefined,
            sockets: [Map],
            _fns: [],
            _ids: 0,
            server: [Server],
            name: '/',
            adapter: [Circular *4],
            [Symbol(shapeMode)]: false,
            [Symbol(kCapture)]: false
            },
            rooms: Map(2) {
            'CM9qmtouieqPnHZnAAAB' => [Set],
            'lIJhZiEqdhBeGanuAAAD' => [Set]
            },
            sids: Map(2) {
            'CM9qmtouieqPnHZnAAAB' => [Set],
            'lIJhZiEqdhBeGanuAAAD' => [Set]
            },
            encoder: Encoder { replacer: undefined },
            [Symbol(shapeMode)]: false,
            [Symbol(kCapture)]: false
        },
        id: 'lIJhZiEqdhBeGanuAAAD',
        handshake: {
            headers: {
            host: '10.0.0.55:3000',
            'user-agent': 'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:125.0) Gecko/20100101 Firefox/125.0',
            accept: '*/*',
            'accept-language': 'en-US,en;q=0.5',
            'accept-encoding': 'gzip, deflate',
            origin: 'null',
            connection: 'keep-alive',
            pragma: 'no-cache',
            'cache-control': 'no-cache'
            },
            time: 'Thu May 16 2024 01:14:54 GMT-0500 (Central Daylight Time)',
            address: '::ffff:10.0.0.47',
            xdomain: true,
            secure: false,
            issued: 1715840094923,
            url: '/socket.io/?EIO=4&transport=polling&t=O-02X6C',
            query: [Object: null prototype] {
            EIO: '4',
            transport: 'polling',
            t: 'O-02X6C'
            },
            auth: {}
        },
        [Symbol(shapeMode)]: false,
        [Symbol(kCapture)]: false
    }
    ````

# Curl commands to test webapp endpoints
```bash
 curl -X GET http://server_ip_addr/
 
 curl -X POST -H "Content-Type: application/json" -d '{"msg": "my-message"}' http://server-ip-addr/my-message
```

# Links
- [I will be following along this youtube channel](https://www.youtube.com/watch?v=rxzOqP9YwmM)
- [Express app with socketio example](https://github.com/socketio/socket.io#in-conjunction-with-express)
- [GeekforGeek handlebars and express example](https://www.geeksforgeeks.org/handlebars-templating-in-expressjs/)
- [javascript templating engines -pug, hbs, vs ejs](https://dev.to/m__mdy__m/javascript-templating-engines-pug-handlebars-hbs-and-ejs-jcd)