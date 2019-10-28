let mic;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background('white');
    noStroke();
    mic = new p5.AudioIn();
    mic.start();
}

function draw() {
    micLevel = mic.getLevel();

    mov = map(micLevel, 0, 1, 10, 300);

    noStroke();

    rectMode(CENTER);

    //pelo
    fill('#402c26');
    ellipse(width / 2, height / 3, height / 3, height / 3);
    rect(width / 2, height / 2, height / 3, height / 3);
    
    //sombra
    fill('#000');
    ellipse(width / 2, height / 2.4, height / 4.1, height / 3.5+mov+0.1);
    
    //cara
    fill('#F5DEB3');
    ellipse(width / 2, height / 2.5, height / 4+mov+0.1, height / 3.5);
    
    
    //fleki
    fill('#402c26');
    rect(width / 2, height / 3, height / 3.6, height / 6);

    //cinta
    fill('255');
    rect(width / 2, height / 3, height / 2.3, height / 18+mov+0.1);

    //punto
    fill('red');
    ellipse(width / 2, height / 3, height / 25+mov+0.1, height / 26+mov+0.1);

    //boca
    fill('#FA8072');
    arc(width / 2, height / 2.2+mov+0.1, width / 25+mov+0.1, width / 24, 0, HALF_PI + HALF_PI, OPEN);


}

function touchStarted() {
    getAudioContext().resume();
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
