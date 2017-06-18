import angular from 'angular';

const ResponseFormatInterceptor = function ($injector, $q) {
    "ngInject";
    this.response = function(response) {
        return response.data;
    };

    this.responseError = (rejection) => {
        if(rejection.status === 401) {
            $injector.get('$state').go('login');
        }

        return $q.reject(rejection.data.errors);
    }
};

const module = angular
    .module("responseFormatInterceptor", [])
    .service('responseFormatInterceptor', ResponseFormatInterceptor);

module.config(($httpProvider) => {
    $httpProvider.interceptors.push('responseFormatInterceptor');
});

export default module.name;