import { TestBed, inject } from '@angular/core/testing';

import { Page3Component } from './page3.component';

describe('a page3 component', () => {
	let component: Page3Component;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				Page3Component
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([Page3Component], (Page3Component) => {
		component = Page3Component;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});