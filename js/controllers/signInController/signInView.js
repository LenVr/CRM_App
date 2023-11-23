import { MENU } from "../../libs/constantes.js";
import { div, img, input, p } from "../../libs/html.js";
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


        if (firstName !== '') {
            window.localStorage.setItem('lastName', lastName)
        } if (lastName !== '') {
            window.localStorage.setItem('lastName', lastName)
        } if (date !== '') {
            window.localStorage.setItem('date', date)
        } if (email !== '') {
            window.localStorage.setItem('email', email)
        } if (phone !== '') {
            window.localStorage.setItem('phone', phone)
        } if (id !== '') {
            window.localStorage.setItem('id', id)
            myAlerts.successAlert(this.elementsContainer, () => {
                this.controller.appManager.showController(MENU)
            });
        } else {
            myAlerts.errorAlert(this.elementsContainer, () => {
                console.log('closing Alert')
            });
        }
    }
}
