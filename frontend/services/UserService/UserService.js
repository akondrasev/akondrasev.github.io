const UserService = function ($http) {
    this.getUsers = function () {
        return $http.get("https://learn.javascript.ru/courses/groups/api/participants?key=uczue3");
    }
};