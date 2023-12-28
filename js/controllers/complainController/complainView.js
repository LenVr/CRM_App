import { div, img, p, h2, span, h1, textArea } from "../../libs/html.js";
import { ViewForController } from "../../views/ViewForController.js";
import { AlertLibrary } from "../../libs/alerts.js";

export class ComplainView extends ViewForController {
    constructor(controller, parent) {
        super(controller, parent)
        this.container.className = 'complainController';

        this.complainContainer = div(this.elementsContainer, { className: "containerComplain" });
        this.title = div(this.complainContainer, { className: "titleComplain", innerHTML: 'Complain' });
        this.textArea = textArea(this.complainContainer, { className: "textArea", placeholder: 'Write a complaint here' });

        this.saveComplainBtn = div(this.complainContainer, { className: "accessBtn", innerHTML: "Accept", onclick: this.onSaveComplain.bind(this) });

    }

    onSaveComplain() {
        let myAlerts = new AlertLibrary();
        let textAreaValue = this.textArea.value;

        if (textAreaValue === null || textAreaValue === '' || textAreaValue === undefined) {
            myAlerts.errorAlert(this.elementsContainer, () => {
                console.log('Error');
            });
        } else {
            myAlerts.successAlertComplain(this.elementsContainer, () => {
                this.delete()
            });
        }
    }
}