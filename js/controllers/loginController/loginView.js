import { div, img, input, p } from "../../libs/html.js";
import { ViewForController } from "../../views/ViewForController.js"

export class LoginView extends ViewForController {
    constructor(controller, parent) {
        super(controller, parent);
        this.container.className = 'loginController';

        this.loginIcon = div(this.elementsContainer, { className: "iconDiv" });
        this.loginImg = img(this.loginIcon, { className: "IconImg", src: "../../../assets/LoginIcon.png" });

        this.loginDivInputs = div(this.elementsContainer, { className: 'loginDivInputs' })

        this.email = p(this.loginDivInputs, { className: "inputNameLogin", innerHTML: "Email" });
        this.emailInput = input(this.loginDivInputs, { className: "inputLogin", name: "email" });

        this.id = p(this.loginDivInputs, { className: "inputNameLogin", innerHTML: "ID" });
        this.idInput = input(this.loginDivInputs, { className: "inputLogin", name: "id" });

        this.loginBtn = div(this.elementsContainer, { className: "accessBtn", innerHTML: "Login", onclick: this.onLoginBtn.bind(this) })
    }
    onLoginBtn() {
        let emailStoraged = localStorage.getItem('email');
        let idStoraged = localStorage.getItem('id');

        let emailValue = this.emailInput.value;
        let idValue = this.idInput.value;

        if (emailValue === emailStoraged && idValue === idStoraged) {
            console.log('Account logged in')
        } else {
            console.log('incorrect credentials')
        }
    }
}