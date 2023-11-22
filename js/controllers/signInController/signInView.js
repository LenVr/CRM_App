import { div, img } from "../../libs/html.js";
import { ViewForController } from "../../views/ViewForController.js"

export class SigninView extends ViewForController {
    constructor(controller, parent) {
        super(controller, parent);
        this.container.className = 'signInController';

        this.signInIcon = div(this.elementsContainer, { className: "iconDiv" });
        this.signImg = img(this.signInIcon, { className: "IconImg", src: "../../../assets/AccIcon.png" })

    }
}