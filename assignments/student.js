let name = "Gaja";
let mark = 40;

debugger; 

console.log("Name:", name);
console.log("Marks:", mark);
console.log("Type:", typeof mark);

// Pass/Fail check
if (mark >= 50) {
    console.log("Pass");
} else {
    console.log("Fail");
}

// Print 1 to 10
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// Grade function
function getGrade(x) {
    if (x >= 90) {
        return "Grade A";
    } else if (x >= 80 && x < 90) {
        return "Grade B";
    } else if (x >= 70 && x < 80) {
        return "Grade C";
    } else if (x >= 0 && x < 70) {
        return "Grade D";
    }
}

console.log(getGrade(mark));
