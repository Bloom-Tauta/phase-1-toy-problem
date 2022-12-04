//enter your code here!
const prompt =require("prompt-sync")()
let marks=prompt("Input student's marks")

function grade() {
    let mark = marks;
    if (mark >= 0 && mark <= 100){
        if (mark > 79){
            console.log('Grade: A');
        }
        else if (mark > 60 && mark <= 79){
            console.log('Grade: B');
        }
        else if (mark > 49 && mark <= 59) {
            console.log('Grade: C');
        }
        else if (mark > 40 && mark <= 49) {
            console.log('Grade: D')
        }
        else if (mark < 40) {
            cosole.log('Grade: E')
        }
    }
}   
grade();
