/* global PIXI */
import * as PIXI from 'pixi.js';
import { Application, Assets, Container, Rectangle, Sprite } from "pixi.js";
// import "src\assets\staff.png";
 

const app = new Application({
    width:1400,
    height:1000,
    backgroundColor: 0x12552a,
    
})
document.body.appendChild(app.view);



const container = new Container();

app.stage.addChild(container);


const bounds = {
    x: 1000,
    y:1000,
}

for(let i = 0; i < 20; i++){
    for(let j = 0; j < 20; j++){
        const sprite = PIXI.Sprite.from('assets/dirt.png');
    sprite.y = i*32;
    sprite.x = j *32;
    container.addChild(sprite);
    }
}
container.addChild(staff);




container.position.set(app.view.width / 2, app.view.height / 2);
container.pivot.set(container.width / 2, container.height / 2);






