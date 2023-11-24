import { div, img, p, h2, span } from "../../libs/html.js";
import { ViewForController } from "../../views/ViewForController.js";
import { LOGIN, SIGNIN } from "../../libs/constantes.js";

export class ManageView extends ViewForController {
    constructor(controller, parent) {
        super(controller, parent)
        this.container.className = 'manageController';

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

        this.changePlanBtn = div(this.elementsContainer, { className: "accessBtn", innerHTML: "Change plan", onclick: this.onChangePlan.bind(this) });
        this.complainBtn = div(this.elementsContainer, { className: "accessBtn", innerHTML: "Complain", onclick: this.onComplain.bind(this) });
        this.disconnectBtn = div(this.elementsContainer, { className: "accessBtn", innerHTML: "Disconnect customer", onclick: this.onDisconnect.bind(this) });

    }

    setImg(index) {
        this.cloudIconDiv.innerHTML = '';
        img(this.cloudIconDiv, { className: "cloudIconImg", src: this.images[index] });
    };

    showNextImg() {
        this.currentIndex = (this.currentIndex + 1) % this.images.length;
        this.setImg(this.currentIndex);
    }

    onChangePlan() {

    }

    onComplain() {

    }
    
    onDisconnect() {

    }
}