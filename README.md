# Creating a live chat app

# Errors encountered
-  Was getting a [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) issue. 
    + Browser would make calls to http://server/3000/socket.io/socker.io.js, but server did not have policy set to tell browser where it could load resources
    + **Error message seen from browser**
    > ```bash 
    Cross-Origin Request Blocked: The Same Origin Policy disallows reading the remote resource at http://server-ip-addr:3000/socket.io/?EIO=4&transport=polling&t=Oz_ljdQ. (Reason: CORS header ‘Access-Control-Allow-Origin’ missing). Status code: 200.```
    + more messages

# Curl commands to test webapp endpoints
```bash
 curl -X GET http://server_ip_addr/
 
 curl -X POST -H "Content-Type: application/json" -d '{"msg": "my-message"}' http://server-ip-addr/my-message
```

# Links
[I will be following along this youtube channel](https://www.youtube.com/watch?v=rxzOqP9YwmM)