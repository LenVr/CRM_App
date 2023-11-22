import { div, img, p, h2, span } from "../../libs/html.js";
import { ViewForController } from "../../views/ViewForController.js";

export class MenuView extends ViewForController {
    constructor(controller, parent) {
        super(controller, parent)
        this.container.className = 'menuController';

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

        this.accessBtn = div(this.elementsContainer, { className: "accessBtn", innerHTML: "Login" });
        this.accessBtn = div(this.elementsContainer, { className: "accessBtn", innerHTML: "Create account" });

    }

    setImg(index) {
        this.cloudIconDiv.innerHTML = '';
        img(this.cloudIconDiv, { className: "cloudIconImg", src: this.images[index] });
    };

    showNextImg() {
        this.currentIndex = (this.currentIndex + 1) % this.images.length;
        this.setImg(this.currentIndex);
    }
}