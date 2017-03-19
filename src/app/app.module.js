"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var router_1 = require('@angular/router');
var app_component_1 = require('./app.component');
var PageNotFound_component_1 = require('./PageNotFound/PageNotFound.component');
var page1_component_1 = require('./page1/page1.component');
var page2_component_1 = require('./page2/page2.component');
var page3_component_1 = require('./page3/page3.component');
var appRoutes = [
    { path: 'page1', component: page1_component_1.Page1Component },
    { path: 'page2', component: page2_component_1.Page2Component },
    { path: 'page3', component: page3_component_1.Page3Component },
    { path: '', redirectTo: '/page1', pathMatch: 'full' },
    { path: '**', component: PageNotFound_component_1.PageNotFoundComponent }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                router_1.RouterModule.forRoot(appRoutes)
            ],
            declarations: [
                app_component_1.AppComponent,
                page1_component_1.Page1Component,
                page2_component_1.Page2Component,
                page3_component_1.Page3Component,
                PageNotFound_component_1.PageNotFoundComponent
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
