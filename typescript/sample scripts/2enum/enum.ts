enum level {one = 1000, two = 2000, three = 3000, four = 4000, five = 5000};
let score = 2500;
if(score <= level.one) {
    console.log('Shift to power mode');
} else if(score <= level.two) {
    console.log('Able to purchase sports car');
} else if(score <= level.three) {
    console.log('Able to purchase racing car'); 
} else if(score <= level.four){
    console.log('Able to purchase super car');
} else if(score <= level.five){
    console.log('Able to purchase flying car');
}

console.log(level[2000]);

enum newLevels {one = 1000, two, three, four, five};

console.log(newLevels);

enum latestLevels {one, two, three, four, five};

console.log(latestLevels);
