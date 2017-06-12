const mailBox = {
    bindings: {
        display: '@'
    },
    templateUrl: 'components/mail/mail-box/mail-box.html',
    controller: function (mailService) {
//            mailService.createMailBox("default").then((response) => {
//                console.log(response)
//            });

        mailService.getLetters().then((response) => {
            console.log("letters: ", response.data);
            this.letters = response.data;
        });

        this.deleteLetter = (letter) => {
            mailService.deleteLetter(letter._id).then(() => {
                this.letters = this.letters.filter(function (el) {
                    return el._id !== letter._id
                });
            });
        };

        this.addLetter = () => {
            mailService.createLetter({
                mailbox: "59353c5855fc9c1d0458843d",
                to: "some@mail.ru",
                subject: "subject",
                title: "title",
                body: "content"
            }).then((response) => {
                return mailService.getLetters();
            }).then((response) => {
                this.letters = response.data;
            });

            clearTimeout(this.timer);
            this.timer = generateTimeout(this.addLetter);
        };

//            this.timer = generateTimeout(this.addLetter);
    }
};