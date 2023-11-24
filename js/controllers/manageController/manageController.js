import { Controller } from "../controller.js";
import { ManageView } from "./manageView.js";

export class ManageController extends Controller {
    constructor(appManager, parent) {
        super(appManager, parent);
        this.view = new ManageView(this, parent);
    }
}