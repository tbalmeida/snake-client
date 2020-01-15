const net = require('net');

let vSrv = process.argv[2] === undefined? "localhost" : process.argv[2];

console.log("Server: " + vSrv);

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: vSrv,
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 

  return conn;
}

console.log('Connecting ...');
connect();