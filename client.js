const net = require('net');

/**
 * Establishes connection with the game server
 */
const connect = function( pSrv) {
  const conn = net.createConnection({ 
    host: pSrv,
    port: 50541
  });
  conn.setEncoding('utf8'); 

  return conn;
}

console.log("Connecting to..." );
connect();

module.exports = connect;