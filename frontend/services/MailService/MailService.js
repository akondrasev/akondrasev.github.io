import angular from 'angular';
import constants from '../../lib/constants';

const MailService = function ($http, $q) {
    "ngInject";

    const lettersUrl = `${constants.baseApiUrl}/letters`;
    const mailBoxUrl = `${constants.baseApiUrl}/mailboxes`;

    this.getLetters = () => {
        return $http.get(lettersUrl);
    };

    this.getLetter = (id) => {
        return $http.get(`${lettersUrl}/${id}`);
    };

    this.createLetter = (data) => {
        return $http.post(lettersUrl, data);
    };

    this.createMailBox = (title) => {
        return $http.post(mailBoxUrl, {
            title: title
        });
    };

    this.getMailBoxes = () => {
        return $http.get(mailBoxUrl);
    };

    this.deleteLetter = (id) => {
        return $http.delete(`${lettersUrl}/${id}`);
    };

    this.deleteLetters = (ids) => {
        let promises = [];
        ids.forEach((id) => {
            promises.push(this.deleteLetter(id));
        });

        return $q.all(promises);
    };
};

const module = angular
    .module("mailService", [])
    .service('mailService', MailService);

export default module.name;