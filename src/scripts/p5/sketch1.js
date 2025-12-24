import { randomInt } from '../../lib/functions.js';

export default function sketch(p, size) {
    let w = size.width;
    let h = size.height;
    let old = [];
    let oldTR = [];
    let oldDL = [];
    let oldDR = [];

    console.log('Sketch size:', w, h);
    
    p.setup = () => 
    {
        p.createCanvas(w, h);
        p.background(0);
        p.rectMode(p.CENTER);
        old = [p.width/2, p.height/2];
    }

    p.draw = () => {
        let r = randomInt(255);
        let g = randomInt(255);
        let b = randomInt(255);

        p.stroke(r,g,b);
        p.strokeWeight(6);

        if( p.mouseIsPressed ) {
            p.line(old[0], old[1], p.mouseX, p.mouseY);
            p.line(oldTR[0], oldTR[1], p.width/2 + (p.width/2 - p.mouseX), p.mouseY);
            p.line(oldDL[0], oldDL[1], p.mouseX, p.height/2 + (p.height/2 - p.mouseY));
            p.line(oldDR[0], oldDR[1], p.width/2 + (p.width/2 - p.mouseX), p.height/2 + (p.height/2 - p.mouseY));
            old =[p.mouseX, p.mouseY];
            oldTR =[p.width/2 + (p.width/2 - p.mouseX), p.mouseY];
            oldDL =[p.mouseX, p.height/2 + (p.height/2 - p.mouseY)];
            oldDR =[p.width/2 + (p.width/2 - p.mouseX), p.height/2 + (p.height/2 - p.mouseY)];
        } else {
            old =[p.mouseX, p.mouseY];
            oldTR =[p.width/2 + (p.width/2 - p.mouseX), p.mouseY];
            oldDL =[p.mouseX, p.height/2 + (p.height/2 - p.mouseY)];
            oldDR =[p.width/2 + (p.width/2 - p.mouseX), p.height/2 + (p.height/2 - p.mouseY)];
        }
    }
}