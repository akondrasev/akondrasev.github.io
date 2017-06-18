import template from './navbar.html';
import './navbar.css';

const navbar = {
    template,
    controller: function (authenticationService, $state) {
        "ngInject";

        this.user = authenticationService.getCurrentUser();

        this.logout = () => {
            authenticationService.logout().then(() => {
                $state.go("login");
            });
        }
    }
};

export default navbar;