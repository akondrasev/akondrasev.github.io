import template from './user-card.html';

const userCard = {
    restrict: 'E',
    bindings: {
        user: '<'
    },
    template,
    controller: function () {
        const self = this;
        this.onClick = () => self.selected = !self.selected;
    }
};

export default userCard;