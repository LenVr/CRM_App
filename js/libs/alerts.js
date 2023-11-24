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
        alertDivFade.className = 'alertDivFadeWarning';

        this.alertDivFade = alertDivFade;

        let alertDiv = document.createElement('div');
        alertDivFade.appendChild(alertDiv)
        alertDiv.className = "alertDivWarning";

        let checkIcon = document.createElement('p');
        checkIcon.className = 'checkIconWarning';
        checkIcon.innerHTML = '⚠️';
        alertDiv.appendChild(checkIcon);

        let textAlert = document.createElement('p');
        textAlert.className = 'textAlertWarning';
        textAlert.innerHTML = 'Changes are going to be saved and this account would be logged out <br> <br>  Do you want to continue?';
        alertDiv.appendChild(textAlert);

        let divBtns = document.createElement('div');
        divBtns.className = 'divBtns'
        alertDiv.appendChild(divBtns)

        let continueBtn = document.createElement('div');
        continueBtn.innerHTML = '✔️';
        continueBtn.className = 'accessBtn';
        continueBtn.onclick = function () {
            action();
            // Remove the alert after the action is performed
            parent.removeChild(alertDivFade);
        };

        divBtns.appendChild(continueBtn)

        let stopBtn = document.createElement('div');
        stopBtn.innerHTML = '❌';
        stopBtn.className = 'accessBtn';
        stopBtn.onclick = function () {
            // Remove the alert after the action is performed
            parent.removeChild(alertDivFade);
        };

        divBtns.appendChild(stopBtn)
    }
    AlertLibrary.prototype.successAlertRightCorner = function (parent) {

        let alertDivFade = document.createElement('div');
        parent.appendChild(alertDivFade);
        alertDivFade.className = 'alertDivFadeFR';

        this.alertDivFade = alertDivFade;

        let alertDiv = document.createElement('div');
        alertDivFade.appendChild(alertDiv)
        alertDiv.className = "alertDivFR";

        let checkIcon = document.createElement('p');
        checkIcon.className = 'checkIconFR';
        checkIcon.innerHTML = '✔️';
        alertDiv.appendChild(checkIcon);

        let textAlert = document.createElement('p');
        textAlert.className = 'textAlertFR';
        textAlert.innerHTML = 'Account logged in successfully';
        alertDiv.appendChild(textAlert);

        alertDivFade.offsetHeight;
        alertDivFade.style.right = '1%';

        setTimeout(function () {
            alertDivFade.style.right = '-10000%'
            setTimeout(function () {
                parent.removeChild(alertDivFade);
            }, 500)
        }, 3000)
    }
}

export { AlertLibrary };