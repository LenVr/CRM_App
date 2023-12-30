import { Controller } from "../controller.js";
import { MakePaymentView } from "./paymentView.js";

export class MakePaymentController extends Controller {
    constructor(appManager, parent) {
        super(appManager, parent);
        this.view = new MakePaymentView(this, parent);
    }
}