import angular from 'angular';

const AuthorizationService = function ($http, $q) {
    "ngInject";

    let _user = null;

    this.isAuthorized = () => {
        return _user !== null || true;
    };

    this.login = (user) => {
        let deferred = $q.defer();
        setTimeout(()=> {
            _user = user;
            deferred.resolve();
        }, 1000);
        return deferred.promise;
    };

    this.logout = () => {
        let deferred = $q.defer();
        setTimeout(()=> {
            _user = null;
            deferred.resolve();
        }, 1000);

        return deferred.promise;
    };
};

const module = angular
    .module("authenticationService", [])
    .service('authenticationService', AuthorizationService);

export default module.name;