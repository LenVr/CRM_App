import { div, img, p, h2, span, h1, textArea } from "../../libs/html.js";
import { ViewForController } from "../../views/ViewForController.js";
import { AlertLibrary } from "../../libs/alerts.js";

export class DisconnectView extends ViewForController {
    constructor(controller, parent) {
        super(controller, parent)
        this.container.className = 'disconnectController';

        this.title = div(this.elementsContainer, { className: "titleComplain", innerHTML: "Disconnect member" });
        this.information = div(this.elementsContainer, { className: "instructions", innerHTML: "Read the disclosure below" });

        this.disclosureContainer = div(this.elementsContainer, { className: "containerDisclosure" });
        this.disclosure = p(this.disclosureContainer, { className: "disclosureText", innerHTML: "We sincerely appreciate your choice to be part of our community and regret any inconvenience you may have experienced during your membership. We want to assure you that we respect your decision and value the trust you have placed in us thus far.We have processed your cancellation request, and your membership will be terminated with effect from today's date, [current date]. We hope you have found value in your experience with us, and should you decide to return in the future, we would be delighted to welcome you back. " });

        this.acceptBtn = div(this.elementsContainer, { className: "accessBtnDel", innerHTML: "Disconnect account", onclick: this.onDisconnect.bind(this) });
    }

    onDisconnect() {
        let myAlerts = new AlertLibrary();
        myAlerts.successAlertComplain(this.elementsContainer, () => {
            localStorage.removeItem('date')
            localStorage.removeItem('lastName')
            localStorage.removeItem('id')
            localStorage.removeItem('email')
            localStorage.removeItem('name')
            localStorage.removeItem('user_amount')
            localStorage.removeItem('firstName')
            localStorage.removeItem('price')
            localStorage.removeItem('phone')
            this.delete()
        });
    }
}