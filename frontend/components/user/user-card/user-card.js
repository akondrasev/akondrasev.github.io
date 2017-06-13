const userCard = {
    restrict: 'E',
    bindings: {
        user: '<'
    },
    templateUrl: 'components/user/user-card/user-card.html',
    controller: function () {
        const self = this;
        this.onClick = () => self.selected = !self.selected;
    }
};

export default userCard;