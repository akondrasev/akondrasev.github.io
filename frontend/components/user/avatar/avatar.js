import template from './avatar.html';

const avatar = {
    restrict: 'E',
    bindings: {
        img: '<'
    },
    template
};

export default avatar;