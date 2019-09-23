const command = require('./pwd');
command();

const fs = require('fs');

process.stdin.on('data', data => {
  const cmd = data.toString().trim();
});
