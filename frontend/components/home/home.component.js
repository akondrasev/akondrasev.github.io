import template from './home.template.html';
import './home.css';

function controller($stateParams) {
    "ngInject";

    this.boxId = $stateParams.boxId;
}

const homeComponent = {
    bindings: {
        mailBoxes: "<",
        letters: "<",
        contacts: "<"
    },
    template,
    controller
};

export default homeComponent;