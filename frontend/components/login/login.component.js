import template from './login.template.html';
import './login.css';

const component = {
    template,
    controller: function (authenticationService, $state) {
        "ngInject";

        this.login = (mail, password) => {
            authenticationService.login({
                email: mail,
                password: password
            }).then(() => {
                $state.go("home", {
                    boxId: null
                });
            });
        };
    }
};

export default component;