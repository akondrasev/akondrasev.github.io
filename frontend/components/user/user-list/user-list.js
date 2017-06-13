const userList = {
    restrict: 'E',
    templateUrl: 'components/user/user-list/user-list.html',
    controller: function (userService) {
        userService.getUsers().then((response) => {
            this.users = response.data;
        })
    }
};

export default userList;