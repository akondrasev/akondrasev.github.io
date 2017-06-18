import template from './form.template.html';
import './form.css';

const mailBoxComponent = {
    bindings: {
        boxId: "@",
        contacts: "<"
    },
    template,
    controller: function ($state, mailService, userService) {
        "ngInject";

        this.$onInit = () => {
            $('#new-message-modal').modal();
            $('#new-message-modal').on("hidden.bs.modal", () => {
                $state.go("home");
            });
        };

        this.send = (to, subject, body) => {
            let contact = this.contacts.find((contact) => contact.email === to);

            if(!contact) {
                userService.getDraftUser().then((draft) => {
                    draft.email = to;
                    return draft;
                }).then((draft) => {
                    userService.createUser(draft);
                });
            }

            mailService.createLetter({
                mailbox: this.boxId,
                to: to,
                subject: subject,
                title: "[TITLE]",
                body: body
            }).then(() => {
                $('#new-message-modal').modal('hide');
            });
        }
    }
};

export default mailBoxComponent;