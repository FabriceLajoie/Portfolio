import { randomInt } from '../../lib/functions.js';

export default function sketch2(p, size) {
    let w = size.width;
    let h = size.height;
    let lastDrawTime = 0;

    console.log('Sketch size:', w, h);
    
    p.setup = () => 
    {
      p.createCanvas(w, h);
      p.background(210);
      p.rectMode(p.CENTER);
      p.noStroke();
      lastDrawTime = p.millis();
    }

    p.draw = () => {
      if( p.millis() - lastDrawTime >= 400) {
        for( let i = 0; i < w / 32; i++ ) {
          for( let y = 0; y < h / 16; y++ ) {
            let r = randomInt(255);
            let g = randomInt(255);
            let b = randomInt(255);
            let o = randomInt(255);
            p.fill(r,g,b,o);
            let s = randomInt(4);
  
            if (s === 1) {p.rect(y*32, i*32, 32, 32)}
            if (s === 2) {p.rect(y*32, i*32, 64, 64)}
            if (s === 3) {p.rect(y*32, i*32, 128, 128)}
            lastDrawTime = p.millis();
          }
        }
      }
    }
}