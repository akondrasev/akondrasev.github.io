import template from './home.template.html';
import './home.css';

function controller($stateParams) {
    "ngInject";

    this.boxId = $stateParams.boxId;

    this.$onInit = () => {
        if (!this.boxId) this.boxId = this.mailBoxes[0]._id;
    }
}

const homeComponent = {
    bindings: {
        mailBoxes: "<",
        letters: "<"
    },
    template,
    controller
};

export default homeComponent;