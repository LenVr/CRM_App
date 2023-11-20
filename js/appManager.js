import { div } from "./libs/html.js";

export class AppManager {
    constructor() {
        this.mainContainer = div(document.body, { className: "mainContainer" });
        this.controllerContainer = div(this.mainContainer, { className: "controllerContainer" })
        
    }
}