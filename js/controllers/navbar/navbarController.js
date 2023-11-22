import { View } from "../../views/view.js";
import { div } from "../../libs/html.js";
import { Controller } from "../controller.js";
import { MENU } from "../../libs/constantes.js"



export class NavbarController extends Controller {
    constructor(appManager, parent) {
        super(appManager, parent);
        this.view = new View(parent);
        this.view.container.className = 'navbarController';

        this.backBtn = div(this.view.container, { className: "navbarBackBtn", onclick: this.onBackBtn.bind(this), innerHTML: "⮌" });
        this.hideBackBtn()
    }

    onBackBtn() {
        this.appManager.showController(MENU);
    }

    hideBackBtn() {
        this.backBtn.classList.add('hidden');
    }

    showBackBtn() {
        this.backBtn.classList.remove('hidden');
    }
}