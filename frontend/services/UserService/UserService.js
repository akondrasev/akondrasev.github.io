import angular from 'angular';
import constants from '../../lib/constants';

const UserService = function ($http) {
    "ngInject";

    const usersUrl = `${constants.baseApiUrl}/users`;

    /**
     * fill all field here with default values
     * @returns {{}}
     */
    this.getDraftUser = () => {
        return {
            fullName: "",
            email: "",
            avatarUrl: "",
            birthdate: new Date(),
            gender: "M",
            address: ""
        }
    };

    this.editUser = (data) => {
        $http.patch(`${usersUrl}/${data._id}`, data);
    };

    this.getUsers = () => {
        return $http.get(usersUrl);
    };

    this.getUser = (id) => {
        return $http.get(`${usersUrl}/${id}`);
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