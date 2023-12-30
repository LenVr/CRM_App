import { div, img, p, h2, span, h1, textArea, input } from "../../libs/html.js";
import { ViewForController } from "../../views/ViewForController.js";
import { AlertLibrary } from "../../libs/alerts.js";

export class MakePaymentView extends ViewForController {
    constructor(controller, parent) {
        super(controller, parent)
        this.container.className = 'paymentController';

        this.title = div(this.elementsContainer, { className: "titleComplain", innerHTML: "Make a payment" });
        this.inputsDiv = div(this.elementsContainer, { className: "inputsDiv" });

        this.containerInformation = div(this.inputsDiv, { className: "paymentInfoContainer" });
        this.containerInformation2 = div(this.inputsDiv, { className: "paymentInfoContainer2" });

        this.cardHolderTitle = p(this.containerInformation, { className: "paymentTitle", innerHTML: "Card holder's name" });
        this.cardHolderInput = input(this.containerInformation, { type: "text", className: "paymentInput" });

        this.cardNumberTitle = p(this.containerInformation, { className: "paymentTitle", innerHTML: "Card number" });
        this.cardNumber = input(this.containerInformation, { type: "text", className: "paymentInput" });

        this.expirationTitle = p(this.containerInformation, { className: "paymentTitle", innerHTML: "Expiration date" });
        this.expiration = input(this.containerInformation, { type: "text", className: "paymentInput", placeholder: "mm/yy" });

        this.zipCodeTitle = p(this.containerInformation2, { className: "paymentTitle", innerHTML: "Zip code" });
        this.zipCode = input(this.containerInformation2, { type: "text", className: "paymentInput" });

        this.cvvCodeTitle = p(this.containerInformation2, { className: "paymentTitle", innerHTML: "cvv code" });
        this.cvvCode = input(this.containerInformation2, { type: "password", className: "paymentInput", maxlength: "3" });
        this.cvvCodeImg = img(this.containerInformation2, { className: "imgCvv", src: "assets/CVV.png" })

        this.paymentBtn = div(this.elementsContainer, { className: "accessBtn", innerHTML: "Make payment", onclick: this.onMakePaymentBtn.bind(this) });
    }

    onMakePaymentBtn() {
        let myAlerts = new AlertLibrary();

        let cardHolder = this.cardHolderInput.value;
        let cardNumber = this.cardNumber.value;
        let expiration = this.expiration.value;
        let zipCode = this.zipCode.value;
        let cvvCode = this.cvvCode.value;

        if (cardHolder === '' || cardHolder === undefined || cardHolder === null) {
            myAlerts.errorAlert(this.elementsContainer, () => {
                console.log('error')
            });
        } else if (cardNumber === '' || cardNumber === undefined || cardNumber === null) {
            myAlerts.errorAlert(this.elementsContainer, () => {
                console.log('error')
            });
        } else if (expiration === '' || expiration === undefined || expiration === null) {
            myAlerts.errorAlert(this.elementsContainer, () => {
                console.log('error')
            });
        } else if (zipCode === '' || zipCode === undefined || zipCode === null) {
            myAlerts.errorAlert(this.elementsContainer, () => {
                console.log('error')
            });
        } else if (cvvCode === '' || cvvCode === undefined || cvvCode === null) {
            myAlerts.errorAlert(this.elementsContainer, () => {
                console.log('error')
            });
        } else {
            myAlerts.successAlertPayment(this.elementsContainer, () => {
                this.delete()
            });
        }
    }
}