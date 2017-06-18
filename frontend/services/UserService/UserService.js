import angular from 'angular';
import constants from '../../lib/constants';

const UserService = function ($http) {
    "ngInject";

    const usersUrl = `${constants.baseApiUrl}/users`;

    this.getUsers = () => {
        return $http.get(usersUrl);
    };

    this.createUser = (data) => {
        // String fullName* -- имя
        // String email* -- email
        // String avatarUrl -- URL аватара
        // Date birthdate -- дата рождения
        // String gender -- пол: "M" или "F"
        // String address -- адрес
        $http.post(usersUrl, data);
    };

    this.deleteUser = (id) => {
        $http.delete(usersUrl, id);
    };
};

const module = angular
    .module("userService", [])
    .service('userService', UserService);

export default module.name;