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

  conn.on('connect', () => {
    console.log('Im connected');
    conn.write('Name: TBA');
  })

  return conn;
}

module.exports = connect;