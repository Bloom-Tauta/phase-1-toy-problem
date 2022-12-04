const prompt =require("prompt-sync")()
let insertSpeed=prompt("Input car's speed")

function findSpeed() {
    let speed = insertSpeed
    if (speed >= 0 && speed <=70){
        console.log('Ok')
    }
    else if (speed > 70) {
        points();
    }
};

function points() {
    let speed = insertSpeed
    let point = (speed -70)/5;
    if (point < 12){
        console.log(`points: ${point}`)
    }

    else if (point >= 12){
        console.log(`points:${point}`)
        console.log(`License suspended`)
    }
};

findSpeed();