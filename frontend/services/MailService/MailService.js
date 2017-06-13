const MailService = function ($http) {
    this.getLetters = () => {
        return $http.get("http://test-api.javascript.ru/v1/anton.kondrasev/letters");
    };

    this.createLetter = (data) => {
        return $http.post("http://test-api.javascript.ru/v1/anton.kondrasev/letters", data);
    };

    this.createMailBox = (title) => {
        return $http.post('http://test-api.javascript.ru/v1/anton.kondrasev/mailboxes', {
            title: title
        });
    };

    this.deleteLetter = (id) => {
        return $http.delete('http://test-api.javascript.ru/v1/anton.kondrasev/letters', id);
    };
};

export default MailService;