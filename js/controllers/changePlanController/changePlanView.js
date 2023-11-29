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

        this.acceptBtn1 = div(this.optionPlanContainer1, { className: "changeBtn", innerHTML: "Select plan" });

        this.acceptBtn2 = div(this.optionPlanContainer2, { className: "changeBtn", innerHTML: "Select plan" });


    }

    createOptionPlanInfo() {
        if (this.localStoragePlanName === 'Intermediate') {

            this.planName = h2(this.optionPlanContainer1, { className: "planName", innerHTML: "Plan: Advanced" });
            this.planUserAmount = p(this.optionPlanContainer1, { className: 'planUserAmount', innerHTML: "User: 4" });
            this.planPrice = p(this.optionPlanContainer1, { className: "planPrice", innerHTML: `Price: $109.99` });
            this.informationPlanContainer = div(this.optionPlanContainer1, { className: "planInformationContainer" })


            this.planInformation = p(this.informationPlanContainer, { className: 'planInformation', innerHTML: "The group option for $109.99. Full access for up to four people, maximizing collaborative learning. Elevate your language skills together!" })

            this.planName = h2(this.optionPlanContainer2, { className: "planName", innerHTML: "Plan: Basic" });
            this.planUserAmount = p(this.optionPlanContainer2, { className: 'planUserAmount', innerHTML: "User: 1" });
            this.planPrice = p(this.optionPlanContainer2, { className: "planPrice", innerHTML: `Price: $69.99` });
            this.informationPlanContainer = div(this.optionPlanContainer2, { className: "planInformationContainer" })


            this.planInformation = p(this.informationPlanContainer, { className: 'planInformation', innerHTML: "Experience personalized English learning for $69.99. Full access to exclusive classes and resources to enhance your skills at your own pace." })

        }
        if (this.localStoragePlanName === 'Advanced') {

            this.planName = h2(this.optionPlanContainer1, { className: "planName", innerHTML: "Plan: Intermediate" });
            this.planUserAmount = p(this.optionPlanContainer1, { className: 'planUserAmount', innerHTML: "User: 2" });
            this.planPrice = p(this.optionPlanContainer1, { className: "planPrice", innerHTML: `Price: $84.99` });
            this.informationPlanContainer = div(this.optionPlanContainer1, { className: "planInformationContainer" })


            this.planInformation = p(this.informationPlanContainer, { className: 'planInformation', innerHTML: "Share the learning experience for $84.99. Premium access for two users, strengthening skills together." })


            this.planName = h2(this.optionPlanContainer2, { className: "planName", innerHTML: "Plan: Basic" });
            this.planUserAmount = p(this.optionPlanContainer2, { className: 'planUserAmount', innerHTML: "User: 1" });
            this.planPrice = p(this.optionPlanContainer2, { className: "planPrice", innerHTML: `Price: $69.99` });
            this.informationPlanContainer = div(this.optionPlanContainer2, { className: "planInformationContainer" })


            this.planInformation = p(this.informationPlanContainer, { className: 'planInformation', innerHTML: "Experience personalized English learning for $69.99. Full access to exclusive classes and resources to enhance your skills at your own pace." })
        }
        if (this.localStoragePlanName === 'Basic') {

            this.planName = h2(this.optionPlanContainer1, { className: "planName", innerHTML: "Plan: Intermediate" });
            this.planUserAmount = p(this.optionPlanContainer1, { className: 'planUserAmount', innerHTML: "User: 2" });
            this.planPrice = p(this.optionPlanContainer1, { className: "planPrice", innerHTML: `Price: $84.99` });
            this.informationPlanContainer = div(this.optionPlanContainer1, { className: "planInformationContainer" })

            this.planInformation = p(this.informationPlanContainer, { className: 'planInformation', innerHTML: "Share the learning experience for $84.99. Premium access for two users, strengthening skills together." })


            this.planName = h2(this.optionPlanContainer2, { className: "planName", innerHTML: "Plan: Advanced" });
            this.planUserAmount = p(this.optionPlanContainer2, { className: 'planUserAmount', innerHTML: "User: 4" });
            this.planPrice = p(this.optionPlanContainer2, { className: "planPrice", innerHTML: `Price: $109.99` });
            this.informationPlanContainer = div(this.optionPlanContainer2, { className: "planInformationContainer" })

            this.planInformation = p(this.informationPlanContainer, { className: 'planInformation', innerHTML: "The group option for $109.99. Full access for up to four people, maximizing collaborative learning. Elevate your language skills together!" })

        }
    }

}