import template from './form.template.html';
import './form.css';

const mailBoxComponent = {
    template,
    controller: function ($state) {
        "ngInject";

        this.$onInit = () => {
            $('#new-message-modal').modal();
            $('#new-message-modal').on("hidden.bs.modal", () => {
                $state.go("home");
            });
        };
    }
};

export default mailBoxComponent;