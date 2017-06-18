import template from './form.template.html';
import './form.css';

const mailBoxComponent = {
    bindings: {
        boxId: "@",
        updateLetters: "&"
    },
    template,
    controller: function ($state, mailService) {
        "ngInject";

        this.$onInit = () => {
            $('#new-message-modal').modal();
            $('#new-message-modal').on("hidden.bs.modal", () => {
                $state.go("home");
            });
        };

        this.send = (to, subject, body) => {
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