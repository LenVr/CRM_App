import { div } from "../libs/html.js";
import { View } from "./view.js";


export class ViewForController extends View {
    constructor(controller, parent) {
        super(parent);
        this.controller = controller;
        this.fade = div(this.container, { className: "fade" });
        this.elementsContainer = div(this.container, { className: "elementsContainer" });
    }

    setStartPosition() {
        this.elementsContainer.style.transform = `translateX(${window.innerWidth}px)`;
    }

    moveIn() {
        gsap.to(this.elementscontainer, { x: 0, ease: "back.out(0.8)" })
        gsap.to(this.fade, { opacity: 1, duration: 0.5, ease: "back.out(0.8)" })
    }

    moveOut() {
        gsap.to(this.elementscontainer, { x: window.innerWidth, ease: "back.out(0.8)", onComplete: this.moveOutOnComplete.bind(this) })
        gsap.to(this.fade, { opacity: 0, duration: 0.5, ease: "back.out(0.8)" })
    }

    moveOutOnComplete() {
        this.delete()
    }
}