import template from './login.template.html';
import './login.css';

const component = {
    template,
    controller: function (authenticationService) {
        "ngInject";

        this.login = () => {

        };
    }
};

export default component;