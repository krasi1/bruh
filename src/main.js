import { Application, Container, Rectangle } from "pixi.js";

const app = new Application({
    width:1000,
    height:800,
    backgroundColor: 0x12552a,
})

console.log("hello")

const container = new Container()
const rect =  new Rectangle(100,100, 800,400);

// container.addChild(rect);

app.appendChild


document.body.appendChild(app.view)
