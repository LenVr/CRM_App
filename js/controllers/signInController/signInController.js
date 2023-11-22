import { Controller } from "../controller.js";
import { SigninView } from "./signInView.js"

export class SignInController extends Controller {
    constructor(appManager, parent) {
        super(appManager, parent)
        this.view = new SigninView(this, parent);
    }
}