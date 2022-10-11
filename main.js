var _ = require("loadsh");

var items = [1,[2,[3,[4]]]];

var newItems = _.flattenDeep(items);
console.log(newItems);

