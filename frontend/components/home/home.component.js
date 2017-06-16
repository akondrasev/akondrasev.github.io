import template from './home.template.html';
import './home.css';

function controller() {
    this.test = "Value is set";
}

const homeComponent = {
    template,
    controller
};

export default homeComponent;