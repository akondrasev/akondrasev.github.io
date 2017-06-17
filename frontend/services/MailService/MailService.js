import angular from 'angular';
import constants from '../../lib/constants';

const MailService = function ($http) {
    "ngInject";

    const lettersUrl = `${constants.baseApiUrl}/letters`;
    const mailBoxUrl = `${constants.baseApiUrl}/mailboxes`;

    this.getLetters = () => {
        return $http.get(lettersUrl);
    };

    this.createLetter = (data) => {
        return $http.post(lettersUrl, data);
    };

    this.createMailBox = (title) => {
        return $http.post(mailBoxUrl, {
            title: title
        });
    };

    this.getMailBoxes = (title) => {
        return $http.get(mailBoxUrl);
    };

    this.deleteLetter = (id) => {
        return $http.delete(lettersUrl, id);
    };
};

const module = angular
    .module("mailService", [])
    .service('mailService', MailService);

export default module.name;