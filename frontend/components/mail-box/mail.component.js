import template from './mail.template.html';
import './mail.css';

function controller(mailService) {
    "ngInject";

    this.test = "Value is set";
    this.selected = [];

    this.$onInit = () => {
        this.letters = filterLettersByBoxId(this.boxId, this.letters);
    };

    this.selectLetter = (letter) => {
        let index = this.selected.indexOf(letter);
        if (index > -1) {
            this.selected.splice(index, 1);
        } else {
            this.selected.push(letter);
        }
    };

    this.deleteLetters = () => {
        if (this.selected.length === 0) return;

        mailService.deleteLetters(this.selected.map((letter) => letter._id))
            .then(mailService.getLetters)
            .then((response) => {
                this.letters = response;
                this.selected = [];
            });
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