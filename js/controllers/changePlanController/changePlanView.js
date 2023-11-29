import { div, img, p, h2, span, h1 } from "../../libs/html.js";
import { ViewForController } from "../../views/ViewForController.js";
import { AlertLibrary } from "../../libs/alerts.js";

export class ChangePlanView extends ViewForController {
    constructor(controller, parent) {
        super(controller, parent)
        this.container.className = 'changePlanController';
        let myAlerts = new AlertLibrary();

        /* Containers where all the information goes */

        this.plansContainer = div(this.elementsContainer, { className: "plansContainer" })

        this.currentPlanContainer = div(this.plansContainer, { className: "currentPlanContainer" });
        this.optionPlanContainer1 = div(this.plansContainer, { className: "optionPlanContainer" });
        this.optionPlanContainer2 = div(this.plansContainer, { className: "optionPlanContainer" });

        /* Current plan information taken from Local storage */

        this.currentPlanTitle = h1(this.currentPlanContainer, { className: "planTitle", innerHTML: "Current plan" })
        this.currentPlanInformation = div(this.currentPlanContainer, { className: "currentPlanInformation" });
        this.currentPlanName = h2(this.currentPlanInformation, { className: "currentPlanName", innerHTML: `Plan: ${localStorage.getItem('name')}` });
        this.currentPlanUserAmount = p(this.currentPlanInformation, { className: "currentPlanUserAmount", innerHTML: `User amount: ${localStorage.getItem('user_amount')}` })
        this.currentPlanPrice = p(this.currentPlanInformation, { className: "currentPlanPrice", innerHTML: `Price: ${localStorage.getItem('price')} p/month` });

        /* Current plan information taken from Local storage */

        /* Plan option information */
        this.localStoragePlanName = localStorage.getItem('name');
        this.createOptionPlanInfo()

    }

    createOptionPlanInfo() {
        if (this.localStoragePlanName === 'Intermediate') {
            this.planName = h2(this.optionPlanContainer1, { className: "planName", innerHTML: "Plan: Advanced" });
            this.planUserAmount = p(this.optionPlanContainer1, { className: 'planUserAmount', innerHTML: "Price: 4" });
            this.planPrice = p(this.optionPlanContainer1, { className: "planPrice", innerHTML: `Price: $109.99` });

            this.planName = h2(this.optionPlanContainer2, { className: "planName", innerHTML: "Plan: Basic" });
            this.planUserAmount = p(this.optionPlanContainer2, { className: 'planUserAmount', innerHTML: "Price: 1" });
            this.planPrice = p(this.optionPlanContainer2, { className: "planPrice", innerHTML: `Price: $69.99` });
        }
        if (this.localStoragePlanName === 'Advanced') {
            this.planName = h2(this.optionPlanContainer1, { className: "planName", innerHTML: "Plan: Intermediate" });
            this.planUserAmount = p(this.optionPlanContainer1, { className: 'planUserAmount', innerHTML: "Price: 2" });
            this.planPrice = p(this.optionPlanContainer1, { className: "planPrice", innerHTML: `Price: $84.99` });

            this.planName = h2(this.optionPlanContainer2, { className: "planName", innerHTML: "Plan: Basic" });
            this.planUserAmount = p(this.optionPlanContainer2, { className: 'planUserAmount', innerHTML: "Price: 1" });
            this.planPrice = p(this.optionPlanContainer2, { className: "planPrice", innerHTML: `Price: $69.99` });
        }
        if (this.localStoragePlanName === 'Basic') {
            this.planName = h2(this.optionPlanContainer1, { className: "planName", innerHTML: "Plan: Intermediate" });
            this.planUserAmount = p(this.optionPlanContainer1, { className: 'planUserAmount', innerHTML: "Price: 2" });
            this.planPrice = p(this.optionPlanContainer1, { className: "planPrice", innerHTML: `Price: $84.99` });

            this.planName = h2(this.optionPlanContainer2, { className: "planName", innerHTML: "Plan: Advanced" });
            this.planUserAmount = p(this.optionPlanContainer2, { className: 'planUserAmount', innerHTML: "Price: 4" });
            this.planPrice = p(this.optionPlanContainer2, { className: "planPrice", innerHTML: `Price: $109.99` });
        }
    }

}