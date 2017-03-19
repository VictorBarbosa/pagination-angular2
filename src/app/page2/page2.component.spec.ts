import { TestBed, inject } from '@angular/core/testing';

import { Page2Component } from './page2.component';

describe('a page2 component', () => {
	let component: Page2Component;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				Page2Component
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([Page2Component], (Page2Component) => {
		component = Page2Component;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});