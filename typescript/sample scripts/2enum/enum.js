var level;
(function (level) {
    level[level["one"] = 1000] = "one";
    level[level["two"] = 2000] = "two";
    level[level["three"] = 3000] = "three";
    level[level["four"] = 4000] = "four";
    level[level["five"] = 5000] = "five";
})(level || (level = {}));
;
var score = 2500;
if (score <= level.one) {
    console.log('Shift to power mode');
}
else if (score <= level.two) {
    console.log('Able to purchase sports car');
}
else if (score <= level.three) {
    console.log('Able to purchase racing car');
}
else if (score <= level.four) {
    console.log('Able to purchase super car');
}
else if (score <= level.five) {
    console.log('Able to purchase flying car');
}
console.log(level[2000]);
var newLevels;
(function (newLevels) {
    newLevels[newLevels["one"] = 1000] = "one";
    newLevels[newLevels["two"] = 1001] = "two";
    newLevels[newLevels["three"] = 1002] = "three";
    newLevels[newLevels["four"] = 1003] = "four";
    newLevels[newLevels["five"] = 1004] = "five";
})(newLevels || (newLevels = {}));
;
console.log(newLevels);
var latestLevels;
(function (latestLevels) {
    latestLevels[latestLevels["one"] = 0] = "one";
    latestLevels[latestLevels["two"] = 1] = "two";
    latestLevels[latestLevels["three"] = 2] = "three";
    latestLevels[latestLevels["four"] = 3] = "four";
    latestLevels[latestLevels["five"] = 4] = "five";
})(latestLevels || (latestLevels = {}));
;
console.log(latestLevels);
