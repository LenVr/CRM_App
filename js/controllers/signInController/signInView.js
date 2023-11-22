import { div, img, input, p } from "../../libs/html.js";
import { ViewForController } from "../../views/ViewForController.js"

export class SigninView extends ViewForController {
    constructor(controller, parent) {
        super(controller, parent);
        this.container.className = 'signInController';

        this.signInIcon = div(this.elementsContainer, { className: "iconDiv" });
        this.signImg = img(this.signInIcon, { className: "IconImg", src: "../../../assets/AccIcon.png" });

        this.inputsDiv = div(this.elementsContainer, { className: "inputsDiv" });
        this.personalDivInfo = div(this.inputsDiv, { className: "personalDivInfo" });
        this.contactDivInfo = div(this.inputsDiv, { className: "contactDivInfo" });

        /* personal information */
        this.firtsName = p(this.personalDivInfo, { className: 'inputName', innerHTML: "First name" });
        this.firtsNameInput = input(this.personalDivInfo, { className: "input", name: "firstName" });

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
        console.log('account created')
    }
}