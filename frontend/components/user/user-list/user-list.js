import template from './user-list.html';

const userList = {
    restrict: 'E',
    template,
    controller: function (userService) {
        userService.getUsers().then((response) => {
            this.users = response;
        })
    }
};

export default userList;