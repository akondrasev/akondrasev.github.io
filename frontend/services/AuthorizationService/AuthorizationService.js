import angular from 'angular';

const AuthorizationService = function ($http, $q) {
    "ngInject";

    this.getCurrentUser = () => {
        return localStorage.getItem("userEmail");
    };

    this.isAuthorized = () => {
        return localStorage.getItem("userEmail") !== null;
    };

    this.login = (user) => {
        let deferred = $q.defer();
        setTimeout(()=> {
            localStorage.setItem("userEmail", user.email);
            deferred.resolve();
        }, 1000);
        return deferred.promise;
    };

    this.logout = () => {
        let deferred = $q.defer();
        setTimeout(()=> {
            localStorage.clear();
            deferred.resolve();
        }, 1000);

        return deferred.promise;
    };
};

const module = angular
    .module("authenticationService", [])
    .service('authenticationService', AuthorizationService);

export default module.name;