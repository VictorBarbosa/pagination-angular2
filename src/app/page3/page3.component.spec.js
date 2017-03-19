"use strict";
var testing_1 = require('@angular/core/testing');
var page3_component_1 = require('./page3.component');
describe('a page3 component', function () {
    var component;
    // register all needed dependencies
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [
                page3_component_1.Page3Component
            ]
        });
    });
    // instantiation through framework injection
    beforeEach(testing_1.inject([page3_component_1.Page3Component], function (Page3Component) {
        component = Page3Component;
    }));
    it('should have an instance', function () {
        expect(component).toBeDefined();
    });
});
