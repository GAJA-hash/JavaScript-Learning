//Calculate total score [25,25,25,25]

scores = [25,25,25,25];

score = scores.reduce(
    (num, num1) => num + num1, 0
);
console.log(score);