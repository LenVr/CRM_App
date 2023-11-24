import { div, img, p, h2, span, h1 } from "../../libs/html.js";
import { ViewForController } from "../../views/ViewForController.js";
import { AlertLibrary } from "../../libs/alerts.js";

export class ChangePlanView extends ViewForController {
    constructor(controller, parent) {
        super(controller, parent)
        this.container.className = 'manageController';
        let myAlerts = new AlertLibrary();

        this.currentPlanContainer = div(this.elementsContainer, { className: "currentPlanContainer" });
        this.currentPlanTitle = h1(this.currentPlanContainer, { className: "planTitle", innerHTML: "Current plan" })
        this.currentPlanInformation = div(this.currentPlanContainer, { className: "currentPlanInformation" });
        this.currentPlanName = h2(this.currentPlanInformation, { className: "currentPlanName", innerHTML: `Plan: ${localStorage.getItem('name')}` });
        this.currentPlanUserAmount = p(this.currentPlanInformation, { className: "currentPlanUserAmount", innerHTML: `User amount: ${localStorage.getItem('user_amount')}` })
        this.currentPlanPrice = p(this.currentPlanInformation, { className: "currentPlanPrice", innerHTML: `Price: ${localStorage.getItem('price')} p/month` });


    }
}