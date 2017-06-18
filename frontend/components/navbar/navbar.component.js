import template from './navbar.html';
import './navbar.css';

const navbar = {
    template,
    controller: function (authenticationService, $state) {
        "ngInject";

        this.logout = () => {
            authenticationService.logout().then(() => {
                $state.go("login");
            });
        }
    }
};

export default navbar;