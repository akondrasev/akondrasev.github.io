import template from './list.template.html';
import './list.css';

const component = {
    bindings:{
        addBox: "&"
    },
    controller: function (mailService) {
        "ngInject";

        mailService.getMailBoxes().then((response) => {
            this.mailBoxes = response;
        });
    },
    template
};

export default component;