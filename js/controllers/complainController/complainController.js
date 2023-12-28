import { Controller } from "../controller.js";
import { ComplainView } from "./complainView.js";

export class ComplainController extends Controller {
    constructor(appManager, parent) {
        super(appManager, parent);
        this.view = new ComplainView(this, parent);
    }
}