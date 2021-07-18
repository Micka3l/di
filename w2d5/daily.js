function bottle() {
    let totalBottle = prompt("how many botlles are on the wall");
    let bottleFall = 1;

    for (let i = totalBottle; i >= 0 && totalBottle > bottleFall; i--) {
        print(totalBottle, bottleFall);
        totalBottle -= bottleFall;
        bottleFall++;
        console.log(`${totalBottle} bottles of beer on the wall`);
    }
}



function print(totalBottle, bottleFall) {
    console.log(`${totalBottle} bottles of beer on the wall\n${totalBottle} bottles of beer`);
    if (bottleFall == 1) {
        console.log(`Take ${bottleFall} down, pass it around`);
    }
    else {
        console.log(`Take ${bottleFall} down, pass them around`);
    }
}

bottle();