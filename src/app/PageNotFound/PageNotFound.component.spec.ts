import { TestBed, inject } from '@angular/core/testing';

import { PageNotFoundComponent } from './PageNotFound.component';

describe('a PageNotFound component', () => {
	let component: PageNotFoundComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				PageNotFoundComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([PageNotFoundComponent], (PageNotFoundComponent) => {
		component = PageNotFoundComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});