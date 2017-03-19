"use strict";
var testing_1 = require('@angular/core/testing');
var PageNotFound_component_1 = require('./PageNotFound.component');
describe('a PageNotFound component', function () {
    var component;
    // register all needed dependencies
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [
                PageNotFound_component_1.PageNotFoundComponent
            ]
        });
    });
    // instantiation through framework injection
    beforeEach(testing_1.inject([PageNotFound_component_1.PageNotFoundComponent], function (PageNotFoundComponent) {
        component = PageNotFoundComponent;
    }));
    it('should have an instance', function () {
        expect(component).toBeDefined();
    });
});
