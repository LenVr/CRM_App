/* import { div, p } from "./html.js"; */


function AlertLibrary() {
    AlertLibrary.prototype.successAlert = function (parent, action) {

        let alertDivFade = document.createElement('div');
        parent.appendChild(alertDivFade);
        alertDivFade.className = 'alertDivFade';

        this.alertDivFade = alertDivFade;

        let alertDiv = document.createElement('div');
        alertDivFade.appendChild(alertDiv)
        alertDiv.className = "alertDiv";

        let checkIcon = document.createElement('p');
        checkIcon.className = 'checkIcon';
        checkIcon.innerHTML = '✔️';
        alertDiv.appendChild(checkIcon);

        let textAlert = document.createElement('p');
        textAlert.className = 'textAlert';
        textAlert.innerHTML = 'Account created successfully';
        alertDiv.appendChild(textAlert);

        let continueBtn = document.createElement('div');
        continueBtn.innerHTML = 'Ok';
        continueBtn.className = 'accessBtn';
        continueBtn.onclick = function () {
            action();
            // Remove the alert after the action is performed
            parent.removeChild(alertDivFade);
        };

        alertDiv.appendChild(continueBtn)
    }

    AlertLibrary.prototype.errorAlert = function (parent, action) {

        let alertDivFade = document.createElement('div');
        parent.appendChild(alertDivFade);
        alertDivFade.className = 'alertDivFade';

        this.alertDivFade = alertDivFade;

        let alertDiv = document.createElement('div');
        alertDivFade.appendChild(alertDiv)
        alertDiv.className = "alertDiv";

        let checkIcon = document.createElement('p');
        checkIcon.className = 'checkIcon';
        checkIcon.innerHTML = '❌';
        alertDiv.appendChild(checkIcon);

        let textAlert = document.createElement('p');
        textAlert.className = 'textAlert';
        textAlert.innerHTML = 'Something went wrong';
        alertDiv.appendChild(textAlert);

        let continueBtn = document.createElement('div');
        continueBtn.innerHTML = 'Ok';
        continueBtn.className = 'accessBtn';
        continueBtn.onclick = function () {
            action();
            // Remove the alert after the action is performed
            parent.removeChild(alertDivFade);
        };

        alertDiv.appendChild(continueBtn)
    }

    AlertLibrary.prototype.warningAlert = function (parent, action) {
        let alertDivFade = document.createElement('div');
        parent.appendChild(alertDivFade);
        alertDivFade.className = 'alertDivFade';

        this.alertDivFade = alertDivFade;

        let alertDiv = document.createElement('div');
        alertDivFade.appendChild(alertDiv)
        alertDiv.className = "alertDiv";

        let checkIcon = document.createElement('p');
        checkIcon.className = 'checkIcon';
        checkIcon.innerHTML = '⚠️';
        alertDiv.appendChild(checkIcon);

        let textAlert = document.createElement('p');
        textAlert.className = 'textAlert';
        textAlert.innerHTML = 'Are you sure you want to do this?';
        alertDiv.appendChild(textAlert);

        let continueBtn = document.createElement('div');
        continueBtn.innerHTML = 'Ok';
        continueBtn.className = 'accessBtn';
        continueBtn.onclick = function () {
            action();
            // Remove the alert after the action is performed
            parent.removeChild(alertDivFade);
        };

        alertDiv.appendChild(continueBtn)
    }
}

export { AlertLibrary };