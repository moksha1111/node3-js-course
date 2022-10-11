var os = require("os");

var userInfo = os.userInfo()
console.log(userInfo);

console.log(`The System Uptime is ${os.uptime()} Seconds.`);

var currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
}

console.log(currentOS)