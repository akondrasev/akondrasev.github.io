import template from './mail.template.html';
import './mail.css';

function controller() {
    this.test = "Value is set";
}

const mailBox = {
    template,
    controller
};

export default mailBox;