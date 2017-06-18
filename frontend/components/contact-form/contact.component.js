import template from './contact.template.html';

const component = {
    bindings: {
        contact: "<",
        isDraft: "@"
    },
    template,
    controller: function (userService, $state) {
        "ngInject";

        this.save = () => {
            this.errors = null;

            let promise;
            if (this.isDraft) {
                promise = userService.createUser(this.contact);
            } else {
                promise = userService.editUser(this.contact);
            }

            promise.then(() => {
                $state.go("contacts");
            }).catch((errorsObject) => {
                this.errors = errorsObject;
            });
        }
    }
};

export default component;