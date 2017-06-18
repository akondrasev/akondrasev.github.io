import HomeModule from './home'
import Services from '../../services/services';

describe('Home', () => {
    let $rootScope, $state, $location, $componentController, $compile;

    beforeEach(window.module(HomeModule, Services));

    beforeEach(inject(($injector) => {
        $rootScope = $injector.get('$rootScope');
        $componentController = $injector.get('$componentController');
        $state = $injector.get('$state');
        $location = $injector.get('$location');
        $compile = $injector.get('$compile');
    }));

    describe('Module', () => {
        // top-level specs: i.e., routes, injection, naming
        it('default component should be home', () => {
            $location.url('/');
            $rootScope.$digest();
            expect($state.current.component).to.eq('home');
        });
    });

    describe('Controller', () => {
        // controller specs
        let controller;
        beforeEach(() => {
            controller = $componentController('home', {
                $scope: $rootScope.$new()
            });
        });

        it('has a name property', () => {
            expect(controller).to.have.property('test');
        });
    });

    describe('View', () => {
        // view layer specs.
        let scope, template;

        beforeEach(() => {
            scope = $rootScope.$new();
            template = $compile('<home></home>')(scope);
            scope.$apply();
        });

        it('has class .home', () => {
            console.log(template.find(".home").length);
            expect(angular.element(template.children()[0]).hasClass("home")).to.eq(true);
        });

    });
});