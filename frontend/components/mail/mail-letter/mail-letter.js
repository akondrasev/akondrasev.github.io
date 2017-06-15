import template from './mail-letter.html';

const mailLetter = {
    bindings: {
        letter: '<',
        onDeleteClicked: "&"
    },
    template
};

export default mailLetter;