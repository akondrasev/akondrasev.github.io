import template from './mail.template.html';
import './mail.css';

function controller() {
    this.test = "Value is set";
    this.$onInit = () => {
        this.letters = filterLettersByBoxId(this.boxId, this.letters);
        console.log(this.letters, this.boxId);
    }
}

function filterLettersByBoxId(id, letters) {
    if (!letters || !letters.length) return [];

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