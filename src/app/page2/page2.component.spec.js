"use strict";
var testing_1 = require('@angular/core/testing');
var page2_component_1 = require('./page2.component');
describe('a page2 component', function () {
    var component;
    // register all needed dependencies
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [
                page2_component_1.Page2Component
            ]
        });
    });
    // instantiation through framework injection
    beforeEach(testing_1.inject([page2_component_1.Page2Component], function (Page2Component) {
        component = Page2Component;
    }));
    it('should have an instance', function () {
        expect(component).toBeDefined();
    });
});
