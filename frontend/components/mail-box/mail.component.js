import template from './mail.template.html';
import './mail.css';

function controller() {
    this.test = "Value is set";
    this.$onInit = () => {
        this.letters = filterLettersByBoxId(this.boxId, this.letters);
    }
}

function filterLettersByBoxId(id, letters) {
    if (!id) return letters;

    return letters.filter(letter => letter.mailbox === id);
}

const mailBox = {
    bindings: {
        letters: "<",
        boxId: "@"
    },
    template,
    controller
};

export default mailBox;