import { randomInt } from '../../lib/functions.js';

let walkers = [];

export default function sketch(p, size, nbWalker) {
    let w = size.width;
    let h = size.height;
    let nbWaler = nbWalker;

    console.log('Sketch size:', w, h);
    
    p.setup = () => 
    {
        p.createCanvas(w, h);
        p.background(255);
        p.rectMode(p.CENTER);
        for( let i = 0; i < nbWalker; i++) {
            walkers.push(new Walker(p));
        }
    }

    p.draw = () => {
        for( let walker of walkers ) {
            walker.step();
            walker.show();
        }
    }
}

class Walker {
    constructor(p) {
        // this.x = p.width / 2;
        // this.y = p.height / 2;
        this.x = randomInt(p.width);
        this.y = randomInt(p.height);
        this.p = p;
        this.r = randomInt(255);
        this.g = randomInt(255);
        this.b = randomInt(255);
        
    }

    step() {
        let a = randomInt(255);
        this.p.stroke(this.r, this.g, this.b, a);
        // this.p.stroke(this.r, this.g, this.b);
        this.p.strokeWeight(7);
        let choice = randomInt(4);
        if (choice === 0) {
            this.x += 5;
        } else if (choice === 1) {
            this.x -= 5;
        } else if (choice === 2) {
            this.y += 5;
        } else if (choice === 3) {
            this.y -= 5;
        }
    }

    show() {
        this.p.point(this.x, this.y);
    }
}