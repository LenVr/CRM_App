import { div, img, p, h2, span } from "../../libs/html.js";
import { ViewForController } from "../../views/ViewForController.js";
import { LOGIN, SIGNIN } from "../../libs/constantes.js";

export class MenuView extends ViewForController {
    constructor(controller, parent) {
        super(controller, parent)
        this.container.className = 'menuController';

        /* img movement and img change */
        this.cloudIconDiv = div(this.elementsContainer, { className: "cloudIconDiv", id: "cloudIcon" });

        this.images = [
            '../../../assets/nube1.png',
            '../../../assets/nube2.png',
            '../../../assets/nube3.png',
            '../../../assets/nube4.png',
            '../../../assets/nube5.png',
        ]

        this.currentIndex = 0;
        this.setImg(this.currentIndex);
        setInterval(this.showNextImg.bind(this), 3000);

        this.welcomeDiv = div(this.elementsContainer, { className: "welcomeDiv" })
        this.welcomeTitle = h2(this.welcomeDiv, { className: "welcomeTitle" });
        this.welcomeSpan = span(this.welcomeTitle, { id: 'typed' });

        var typed = new Typed('#typed', {
            strings: ['Welcome', 'to', 'Community', 'Academy'],
            typeSpeed: 100,
            loop: 'true',
            backspeed: 100,
            startDelay: 300
        });
        /* img movement and img change */

        /* Access btns and nav logic */
        this.loginBtn = div(this.elementsContainer, { className: "accessBtn", innerHTML: "Login", onclick: this.onLoginBtn.bind(this) });
        this.signinBtn = div(this.elementsContainer, { className: "accessBtn", innerHTML: "Create account", onclick: this.onSigninBtn.bind(this) });

    }

    /* img movement and img change */
    setImg(index) {
        this.cloudIconDiv.innerHTML = '';
        img(this.cloudIconDiv, { className: "cloudIconImg", src: this.images[index] });
    };

    showNextImg() {
        this.currentIndex = (this.currentIndex + 1) % this.images.length;
        this.setImg(this.currentIndex);
    }
    /* img movement and img change */

    /* Access btns and nav logic */

    onLoginBtn() {
        this.controller.appManager.showController(LOGIN)
    }

    onSigninBtn() {
        this.controller.appManager.showController(SIGNIN)
    }

}