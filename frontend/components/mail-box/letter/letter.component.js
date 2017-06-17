import template from './letter.template.html';
import './letter.css';

const component = {
    template,
    bindings: {
        letter: "<",
        select: "&"
    }
};

export default component;