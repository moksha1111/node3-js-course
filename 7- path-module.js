var path = require("path");
console.log(path.sep);

var filePath = path.join("./content", "sub-content", "text.txt");
console.log(filePath);

var base = path.basename(filePath);
console.log(base);

var absolute = path.resolve(__dirname,"content", "sub-content", "text.txt");
console.log(absolute);
