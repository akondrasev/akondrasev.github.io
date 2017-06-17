import template from './form.template.html';
import './form.css';

const mailBoxComponent = {
    template,
    controller: function () {
        this.$onDestroy = () => {
            $('.modal-backdrop').remove();
        };

        this.$onInit = () => {
            $('#new-message-modal').modal();
        };
    }
};

export default mailBoxComponent;