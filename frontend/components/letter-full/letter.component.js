import template from './letter.template.html';

const component = {
    template,
    bindings: {
        letter: "<"
    },
    controller: function ($state) {
        "ngInject";

        this.$onInit = () => {
            $('#view-message-modal').modal();
            $('#view-message-modal').on("hidden.bs.modal", () => {
                $state.go("home");
            });
        };
    }
};

export default component;