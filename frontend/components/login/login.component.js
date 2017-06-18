import template from './login.template.html';
import './login.css';

const component = {
    template,
    controller: function (authenticationService) {
        "ngInject";

        this.login = () => {
            authenticationService.login({
                username: this.username
            });
        };
    }
};

export default component;