import { div, img, p, h2, span } from "../../libs/html.js";
import { ViewForController } from "../../views/ViewForController.js";
import { AlertLibrary } from "../../libs/alerts.js"
import { CHANGE_PLAN, COMPLAIN, DISCONNECT, LOGIN, MAKE_PM, MENU, UPDATE_PM } from "../../libs/constantes.js";

export class ManageView extends ViewForController {
    constructor(controller, parent) {
        super(controller, parent)
        this.container.className = 'manageController';
        let myAlerts = new AlertLibrary();
        myAlerts.successAlertRightCorner(this.elementsContainer);
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
        this.paymentBtn = div(this.elementsContainer, { className: "accessBtn", innerHTML: "Make payment", onclick: this.onPaymentBtn.bind(this) });
        this.updatePmBtn = div(this.elementsContainer, { className: "accessBtn", innerHTML: "Update payment", onclick: this.onUpdateBtn.bind(this) });

        this.acceptBtn = div(this.elementsContainer, { className: "accessBtnSv", innerHTML: "Save changes", onclick: this.onAcceptBtn.bind(this) });

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
        this.controller.appManager.showController(CHANGE_PLAN)
    }

    onComplain() {
        this.controller.appManager.showController(COMPLAIN)
    }

    onDisconnect() {
        this.controller.appManager.showController(DISCONNECT)
    }

    onPaymentBtn() {
        this.controller.appManager.showController(MAKE_PM)
    }

    onUpdateBtn() {
        this.controller.appManager.showController(UPDATE_PM)
    }

    onAcceptBtn() {
        let myAlerts = new AlertLibrary();

        myAlerts.warningAlert(this.elementsContainer, () => {
            this.controller.appManager.showController(MENU)
            this.delete()
        });
    }
}