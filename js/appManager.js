import { ChangePlanController } from "./controllers/changePlanController/changePlanController.js";
import { ComplainController } from "./controllers/complainController/complainController.js";
import { DisconnectController } from "./controllers/disconnectController/disconnectController.js";
import { LoginController } from "./controllers/loginController/loginController.js";
import { ManageController } from "./controllers/manageController/manageController.js";
import { MenuController } from "./controllers/menuController/menuController.js";
import { NavbarController } from "./controllers/navbar/navbarController.js";
import { SignInController } from "./controllers/signInController/signInController.js";

import { CHANGE_PLAN, COMPLAIN, DISCONNECT, LOGIN, MAKE_PM, MANAGE, MENU, NONE, SIGNIN, UPDATE_PM } from "./libs/constantes.js";
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
            case MANAGE:
                this.currentController = new ManageController(this, this.controllerContainer);
                break
            case CHANGE_PLAN:
                this.currentController = new ChangePlanController(this, this.controllerContainer);
                break;
            case COMPLAIN:
                this.currentController = new ComplainController(this, this.controllerContainer);
                break;
            case DISCONNECT:
                this.currentController = new DisconnectController(this, this.controllerContainer);
                break;
            case MAKE_PM:
                break
            case UPDATE_PM:
                break
        }
    }
}