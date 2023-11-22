import { div } from "../libs/html.js";
import { View } from "./view.js";


export class ViewForController extends View {
    constructor(controller, parent) {
        super(parent);
        this.controller = controller;
        this.fade = div(this.container, { className: "fade" });
        this.elementsContainer = div(this.container, { className: "elementsContainer" });
    }
}