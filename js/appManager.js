import { div } from "./libs/html.js";
import { MenuController } from "./controllers/menuController/menuController.js";

export class AppManager {
    constructor() {
        this.mainContainer = div(document.body, { className: "mainContainer" });
        this.controllerContainer = div(this.mainContainer, { className: "controllerContainer" });

        this.loginController = new MenuController(this, this.controllerContainer)

    }
}