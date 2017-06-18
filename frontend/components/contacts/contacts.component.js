import template from './contacts.template.html';
import './contacts.css';

const component = {
    bindings: {
        contacts: "<"
    },
    template,
    controller: function (userService) {
        "ngInject";

        this.deleteContact = (id) => {
            userService
                .deleteUser(id)
                .then(userService.getUsers)
                .then((response) => {
                    this.contacts = response;
                });
        };
    }
};

export default component;