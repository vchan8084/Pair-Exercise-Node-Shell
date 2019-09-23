module.exports = function pwdCommand() {
  process.stdout.write('prompt > ');
  process.stdout.write(`Current directory: ${process.cwd()}`);
};
