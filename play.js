const net = require('net');

const vSrv = process.argv[2] !== undefined ? process.argv[2] : "localhost"; 

const connect = require('./client');

console.log(`Server: ${vSrv}`);
connect( vSrv );
