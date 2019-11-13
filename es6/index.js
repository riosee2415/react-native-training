// Map
let map = new Map([["id", "dodo"]]);
map.set("testId", "test");
map.get("testId"); // test

console.log(map);
console.log(map.size);
console.log(map.has("testId"));
console.log(map.entries());
console.log(map.keys());
console.log(map.values());
console.log(map.delete("testId"));
console.log(map.size);
map.clear();
console.log(map.size);

// Set
const set = new Set([1, 1, 1, 1, 2, 3, 3, 2, 2, 2, 2, 2, 3, 3]);
set.add(4);
set.add(5);

console.log(set);
