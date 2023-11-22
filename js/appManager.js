import { LoginController } from "./controllers/loginController/loginController.js";
import { MenuController } from "./controllers/menuController/menuController.js";
import { NavbarController } from "./controllers/navbar/navbarController.js";
import { SignInController } from "./controllers/signInController/signInController.js";

import { LOGIN, MENU, NONE, SIGNIN } from "./libs/constantes.js";
import { div } from "./libs/html.js";

export class AppManager {
    constructor() {
        this.mainContainer = div(document.body, { className: "mainContainer" });
        this.navbarViewController = new NavbarController(this, this.mainContainer)

        this.controllerContainer = div(this.mainContainer, { className: "controllerContainer" });
        this.menuController = new MenuController(this, this.controllerContainer)

        this.currentController = null;

    }

    showController(type) {
        this.navbarViewController.showBackBtn()
        switch (type) {
            case NONE:
                break;
            case MENU:
                if (this.currentController != null) {
                    this.currentController.delete();
                    this.currentController = null;
                    this.navbarViewController.hideBackBtn()
                }
                break;
            case LOGIN:
                this.currentController = new LoginController(this, this.controllerContainer);
                break
            case SIGNIN:
                this.currentController = new SignInController(this, this.controllerContainer);
                break;

        }
    }
}