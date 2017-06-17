import angular from 'angular';
import constants from '../../lib/constants'

const MailService = function ($http) {
    "ngInject";

    const lettersUrl = `${constants.baseApiUrl}/letters`;

    this.getLetters = () => {
        return $http.get(lettersUrl);
    };

    this.createLetter = (data) => {
        return $http.post(lettersUrl, data);
    };

    this.createMailBox = (title) => {
        return $http.post(`${constants.baseApiUrl}/mailboxes`, {
            title: title
        });
    };

    this.deleteLetter = (id) => {
        return $http.delete(lettersUrl, id);
    };
};

const module = angular
    .module("mailService", [])
    .service('mailService', MailService);

export default module.name;