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
        const createPlanInfo = (container, planName, userAmount, price, information) => {
            const planNameElement = h2(container, { className: "planName", innerHTML: planName });
            const planUserAmountElement = p(container, { className: 'planUserAmount', innerHTML: `User: ${userAmount}` });
            const planPriceElement = p(container, { className: "planPrice", innerHTML: `Price: $${price}` });
            const informationPlanContainer = div(container, { className: "planInformationContainer" });
            const planInformationElement = p(informationPlanContainer, { className: 'planInformation', innerHTML: information });

            return { planNameElement, planUserAmountElement, planPriceElement, informationPlanContainer, planInformationElement };
        };

        if (this.localStoragePlanName === 'Intermediate') {
            const {
                planNameElement: planName1,
                planUserAmountElement: planUserAmount1,
                planPriceElement: planPrice1,
                informationPlanContainer: informationPlanContainer1,
                planInformationElement: planInformation1
            } = createPlanInfo(this.optionPlanContainer1, "Plan: Advanced", 4, 109.99, "The group option for $109.99. Full access for up to four people, maximizing collaborative learning. Elevate your language skills together!");
            this.acceptBtn1 = div(this.optionPlanContainer1, { className: "changeBtn", innerHTML: "Select plan", onclick: () => this.handleAcceptBtnClick("Advanced") });

            const {
                planNameElement: planName2,
                planUserAmountElement: planUserAmount2,
                planPriceElement: planPrice2,
                informationPlanContainer: informationPlanContainer2,
                planInformationElement: planInformation2
            } = createPlanInfo(this.optionPlanContainer2, "Plan: Basic", 1, 69.99, "Experience personalized English learning for $69.99. Full access to exclusive classes and resources to enhance your skills at your own pace.");
            this.acceptBtn2 = div(this.optionPlanContainer2, { className: "changeBtn", innerHTML: "Select plan", onclick: () => this.handleAcceptBtnClick("Basic") });
        }
        if (this.localStoragePlanName === 'Advanced') {
            const {
                planNameElement: planName1,
                planUserAmountElement: planUserAmount1,
                planPriceElement: planPrice1,
                informationPlanContainer: informationPlanContainer1,
                planInformationElement: planInformation1
            } = createPlanInfo(this.optionPlanContainer1, "Plan: Intermediate", 2, 84.99, "Share the learning experience for $84.99. Premium access for two users, strengthening skills together.");
            this.acceptBtn1 = div(this.optionPlanContainer1, { className: "changeBtn", innerHTML: "Select plan", onclick: () => this.handleAcceptBtnClick("Intermediate") });


            const {
                planNameElement: planName2,
                planUserAmountElement: planUserAmount2,
                planPriceElement: planPrice2,
                informationPlanContainer: informationPlanContainer2,
                planInformationElement: planInformation2
            } = createPlanInfo(this.optionPlanContainer2, "Plan: Basic", 1, 69.99, "Experience personalized English learning for $69.99. Full access to exclusive classes and resources to enhance your skills at your own pace.");
            this.acceptBtn2 = div(this.optionPlanContainer2, { className: "changeBtn", innerHTML: "Select plan", onclick: () => this.handleAcceptBtnClick("Basic") });
        }
        if (this.localStoragePlanName === 'Basic') {
            const {
                planNameElement: planName1,
                planUserAmountElement: planUserAmount1,
                planPriceElement: planPrice1,
                informationPlanContainer: informationPlanContainer1,
                planInformationElement: planInformation1
            } = createPlanInfo(this.optionPlanContainer1, "Plan: Intermediate", 2, 84.99, "Share the learning experience for $84.99. Premium access for two users, strengthening skills together.");
            this.acceptBtn1 = div(this.optionPlanContainer1, { className: "changeBtn", innerHTML: "Select plan", onclick: () => this.handleAcceptBtnClick("Intermediate") });

            const {
                planNameElement: planName2,
                planUserAmountElement: planUserAmount2,
                planPriceElement: planPrice2,
                informationPlanContainer: informationPlanContainer2,
                planInformationElement: planInformation2
            } = createPlanInfo(this.optionPlanContainer2, "Plan: Advanced", 4, 109.99, "The group option for $109.99. Full access for up to four people, maximizing collaborative learning. Elevate your language skills together!");
            this.acceptBtn2 = div(this.optionPlanContainer2, { className: "changeBtn", innerHTML: "Select plan", onclick: () => this.handleAcceptBtnClick("Advanced") });
        }
    }

    handleAcceptBtnClick(selectedPlan) {
        let myAlerts = new AlertLibrary();
        myAlerts.successAlertChangePlan(this.elementsContainer, () => {
            window.localStorage.removeItem('name');
            window.localStorage.removeItem('user_amount');
            window.localStorage.removeItem('price')
            switch (selectedPlan) {
                case 'Advanced':
                    window.localStorage.setItem('name', "Advanced");
                    window.localStorage.setItem('user_amount', 4);
                    window.localStorage.setItem('price', "$109.99")
                    break;
                case 'Intermediate':
                    window.localStorage.setItem('name', "Intermediate");
                    window.localStorage.setItem('user_amount', 2);
                    window.localStorage.setItem('price', "$84.99")
                    break;
                case 'Basic':
                    window.localStorage.setItem('name', "Basic");
                    window.localStorage.setItem('user_amount', 1);
                    window.localStorage.setItem('price', "$69.99")
                    break;
                default:
                    break;
            }
            this.delete()
        });
    }
}