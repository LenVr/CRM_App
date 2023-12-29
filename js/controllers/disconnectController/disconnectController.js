import { Controller } from "../controller.js";
import { DisconnectView } from "./disconnectView.js";

export class DisconnectController extends Controller {
    constructor(appManager, parent) {
        super(appManager, parent);
        this.view = new DisconnectView(this, parent);
    }
}