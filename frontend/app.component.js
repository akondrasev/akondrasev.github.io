import template from './app.html';
import './app.css';

let appComponent = {
    template,
    controller: function (authenticationService) {
        "ngInject";

        this.isAuthorized = authenticationService.isAuthorized;
    }
};

export default appComponent;