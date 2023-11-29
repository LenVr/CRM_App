import { MENU } from "../../libs/constantes.js";
import { div, img, input, p, select, option } from "../../libs/html.js";
import { ViewForController } from "../../views/ViewForController.js";
import { AlertLibrary } from '../../libs/alerts.js';


export class SigninView extends ViewForController {
    constructor(controller, parent) {
        super(controller, parent);
        this.container.className = 'signInController';
        this.controller = controller;

        this.signInIcon = div(this.elementsContainer, { className: "iconDiv" });
        this.signImg = img(this.signInIcon, { className: "IconImg", src: "../../../assets/AccIcon.png" });

        this.inputsDiv = div(this.elementsContainer, { className: "inputsDiv" });
        this.personalDivInfo = div(this.inputsDiv, { className: "personalDivInfo" });
        this.contactDivInfo = div(this.inputsDiv, { className: "contactDivInfo" });

        /* personal information */
        this.firstName = p(this.personalDivInfo, { className: 'inputName', innerHTML: "First name" });
        this.firstNameInput = input(this.personalDivInfo, { className: "input", name: "firstName" });

        this.lastName = p(this.personalDivInfo, { className: 'inputName', innerHTML: "Last name" });
        this.lastNameInput = input(this.personalDivInfo, { className: "input", name: "lastName" });

        this.dateOfBirth = p(this.personalDivInfo, { className: 'inputName', innerHTML: "Date of Birth" });
        this.dateOfBirthInput = input(this.personalDivInfo, { className: "input", type: "date", name: "date" });
        /* personal information */

        /* contact information */
        this.email = p(this.contactDivInfo, { className: "inputName", innerHTML: "Email" });
        this.emailInput = input(this.contactDivInfo, { className: "input", name: "email" });

        this.phone = p(this.contactDivInfo, { className: "inputName", innerHTML: "Phone" });
        this.phoneInput = input(this.contactDivInfo, { className: "input", name: "phone" });

        this.id = p(this.contactDivInfo, { className: "inputName", innerHTML: "ID" });
        this.idInput = input(this.contactDivInfo, { className: "input", name: "id" });
        /* contact information */

        this.InputPlan = select(this.elementsContainer, { className: "input", name: "id", id: "planId" });
        this.placeHolderSelect = option(this.InputPlan, { className: "option", value: '0', disabled: true, innerHTML: "Select a plan" });
        this.BasicOption = option(this.InputPlan, { className: "option", value: "1", innerHTML: "Basic plan" });
        this.intermediateOption = option(this.InputPlan, { className: "option", value: "2", innerHTML: "Intermediate plan" });
        this.AdvancedOption = option(this.InputPlan, { className: "option", value: "3", innerHTML: "Advanced plan" });

        this.createAccountBtn = div(this.elementsContainer, { className: "accessBtn", innerHTML: "Create Account", onclick: this.onCreate.bind(this) });
    }

    onCreate() {
        let myAlerts = new AlertLibrary();
        let firstName = this.firstNameInput.value;
        let lastName = this.lastNameInput.value;
        let date = this.dateOfBirthInput.value;

        let email = this.emailInput.value;
        let phone = this.phoneInput.value;
        let id = this.idInput.value;

        let plan = this.InputPlan.value;


        if (firstName === '' || lastName === "" || date === "" || email === "" || phone === "" || id === '' || plan === "0") {

            myAlerts.errorAlert(this.elementsContainer, () => {
                console.log('Cerrando la alerta de error');
            });
        } else {
            window.localStorage.setItem('firstName', firstName);
            window.localStorage.setItem('lastName', lastName);
            window.localStorage.setItem('date', date);
            window.localStorage.setItem('email', email);
            window.localStorage.setItem('phone', phone);
            window.localStorage.setItem('id', id);

            if (plan === "1") {
                window.localStorage.setItem('id', 1);
                window.localStorage.setItem('name', "Basic");
                window.localStorage.setItem('user_amount', 1);
                window.localStorage.setItem('price', "$69.99")
            }
            if (plan === "2") {
                window.localStorage.setItem('id', 2);
                window.localStorage.setItem('name', "Intermediate");
                window.localStorage.setItem('user_amount', 2);
                window.localStorage.setItem('price', "$84.99")
            }
            if (plan === "3") {
                window.localStorage.setItem('id', 3);
                window.localStorage.setItem('name', "Advanced");
                window.localStorage.setItem('user_amount', 4);
                window.localStorage.setItem('price', "$109.99")
            }

            myAlerts.successAlert(this.elementsContainer, () => {
                this.controller.appManager.showController(MENU);
            });
        }
    }
}
