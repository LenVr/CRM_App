import { Controller } from "../controller.js";
import { ChangePlanView } from "./changePlanView.js";

export class ChangePlanController extends Controller {
    constructor(appManager, parent) {
        super(appManager, parent);
        this.view = new ChangePlanView(this, parent);
    }
}