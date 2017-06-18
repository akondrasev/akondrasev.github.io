import angular from 'angular';

const AuthorizationService = function ($http) {
    "ngInject";

    let _user = null;

    this.isAuthorized = () => {
        return _user !== null;
    };

    this.login = (user) => {
        _user = user;
    };

    this.logout = () => {
        _user = null;
    };
};

const module = angular
    .module("authenticationService", [])
    .service('authenticationService', AuthorizationService);

export default module.name;