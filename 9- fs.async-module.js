var { readFile, writeFile } = require('fs');

console.log("Start");

readFile("./content/first.txt","utf-8", (err, result) => {
  if (err) {
    console.log(err);
    return
  }
  const first = result;
  readFile("./content/second.txt", "utf-8", (err, result) => {
    if (err) {
      console.log(err);
      return
    }
    const second = result;
    writeFile("./content/result-async.txt", `Result file contains: ${first} and ${second}`, (err, result) => {
      if (err) {
        console.log(err);
        return
      }
      console.log('done with this task');
    })
  })
})

console.log('starting with next task');