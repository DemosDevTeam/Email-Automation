(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _city_dashboard_city_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./city-dashboard/city-dashboard.component */ "./src/app/city-dashboard/city-dashboard.component.ts");
/* harmony import */ var _feedback_feedback_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./feedback/feedback.component */ "./src/app/feedback/feedback.component.ts");
/* harmony import */ var _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./landing-page/landing-page.component */ "./src/app/landing-page/landing-page.component.ts");
/* harmony import */ var _successful_user_creation_successful_user_creation_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./successful-user-creation/successful-user-creation.component */ "./src/app/successful-user-creation/successful-user-creation.component.ts");
/* harmony import */ var _successful_content_upload_successful_content_upload_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./successful-content-upload/successful-content-upload.component */ "./src/app/successful-content-upload/successful-content-upload.component.ts");
/* harmony import */ var _successful_feedback_successful_feedback_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./successful-feedback/successful-feedback.component */ "./src/app/successful-feedback/successful-feedback.component.ts");









var routes = [
    { path: 'landing-page/:state/:city', component: _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_5__["LandingPageComponent"] },
    { path: 'feedback/:state/:city/:dateToBeCreated/:title/:email', component: _feedback_feedback_component__WEBPACK_IMPORTED_MODULE_4__["FeedbackComponent"] },
    { path: 'dashboard/:state/:city', component: _city_dashboard_city_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["CityDashboardComponent"] },
    { path: 'successful-content-upload/:state/:city', component: _successful_content_upload_successful_content_upload_component__WEBPACK_IMPORTED_MODULE_7__["SuccessfulContentUploadComponent"] },
    { path: 'successful-user-creation/:state/:city', component: _successful_user_creation_successful_user_creation_component__WEBPACK_IMPORTED_MODULE_6__["SuccessfulUserCreationComponent"] },
    { path: 'successful-feedback/:state/:city', component: _successful_feedback_successful_feedback_component__WEBPACK_IMPORTED_MODULE_8__["SuccessfulFeedbackComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Display router outlet conetent based on the url navved to by the user-->\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'email-automation-angular';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./landing-page/landing-page.component */ "./src/app/landing-page/landing-page.component.ts");
/* harmony import */ var _feedback_feedback_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./feedback/feedback.component */ "./src/app/feedback/feedback.component.ts");
/* harmony import */ var _city_dashboard_city_dashboard_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./city-dashboard/city-dashboard.component */ "./src/app/city-dashboard/city-dashboard.component.ts");
/* harmony import */ var _event_event_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./event/event.component */ "./src/app/event/event.component.ts");
/* harmony import */ var _council_meeting_update_council_meeting_update_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./council-meeting-update/council-meeting-update.component */ "./src/app/council-meeting-update/council-meeting-update.component.ts");
/* harmony import */ var _town_in_news_town_in_news_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./town-in-news/town-in-news.component */ "./src/app/town-in-news/town-in-news.component.ts");
/* harmony import */ var _content_block_content_block_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./content-block/content-block.component */ "./src/app/content-block/content-block.component.ts");
/* harmony import */ var _successful_user_creation_successful_user_creation_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./successful-user-creation/successful-user-creation.component */ "./src/app/successful-user-creation/successful-user-creation.component.ts");
/* harmony import */ var _successful_content_upload_successful_content_upload_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./successful-content-upload/successful-content-upload.component */ "./src/app/successful-content-upload/successful-content-upload.component.ts");
/* harmony import */ var _successful_feedback_successful_feedback_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./successful-feedback/successful-feedback.component */ "./src/app/successful-feedback/successful-feedback.component.ts");

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_7__["LandingPageComponent"],
                _feedback_feedback_component__WEBPACK_IMPORTED_MODULE_8__["FeedbackComponent"],
                _city_dashboard_city_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["CityDashboardComponent"],
                _event_event_component__WEBPACK_IMPORTED_MODULE_10__["EventComponent"],
                _council_meeting_update_council_meeting_update_component__WEBPACK_IMPORTED_MODULE_11__["CouncilMeetingUpdateComponent"],
                _town_in_news_town_in_news_component__WEBPACK_IMPORTED_MODULE_12__["TownInNewsComponent"],
                _content_block_content_block_component__WEBPACK_IMPORTED_MODULE_13__["ContentBlockComponent"],
                _successful_user_creation_successful_user_creation_component__WEBPACK_IMPORTED_MODULE_14__["SuccessfulUserCreationComponent"],
                _successful_content_upload_successful_content_upload_component__WEBPACK_IMPORTED_MODULE_15__["SuccessfulContentUploadComponent"],
                _successful_feedback_successful_feedback_component__WEBPACK_IMPORTED_MODULE_16__["SuccessfulFeedbackComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/city-dashboard/city-dashboard.component.css":
/*!*************************************************************!*\
  !*** ./src/app/city-dashboard/city-dashboard.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*used to style tags that have been selected for content blocks*/\n.selected{\n    color: black;\n    border-top-color: #49c7e3ff;\n    top-width:3px;\n}\n/*styling for content holder sections*/\n.content_holder{\n    background-color:white;\n    box-shadow: 0px 0px 2px 2px #C8C8C8;\n    padding-left:10px;\n    padding-top:5px;\n    padding-bottom:5px;\n    margin-bottom:12.5px;\n}\n/*styling for title of each content holder section*/\n.content_title{\n    margin-top:2px;\n    margin-bottom:4px;\n}\n/*styling for adding and removing content*/\n.content_button{\n    font-size:20px;\n    background-color:white;\n    font-family: 'Source Sans Pro', sans-serif;\n    border-radius: 15px;\n    margin-left:5px;\n    margin-right:5px;\n    padding: 10px;\n    color:white;\n}\n.add_content_button{\n    background-color:#49c7e3ff;\n}\n.remove_content_button{\n    background-color:#ee4c50ff;\n}\n/*styling for adding and removing questions*/\n.question_button{\n    font-size:15px;\n    background-color:white;\n    font-family: 'Source Sans Pro', sans-serif;\n    margin-left:3px;\n    margin-right:3px;\n    border-radius:5px;\n}\n.mc_answers_holder{\n    display:inline-block;\n}\n.mc_question{\n    font-size:15px;\n    margin-bottom:5px;\n    width:300px;\n    font-family: 'Source Sans Pro', sans-serif;\n}\n.mc_answer{\n    font-size:15px;\n    margin-right:5px;\n    width:225px;\n    font-family: 'Source Sans Pro', sans-serif;\n}\n.mc_question_holder{\n    margin-bottom:22.5px;\n}\n/*multiple choice answer styling*/\n.mc_answer_button{\n    border-radius:50%;\n    font-size:20px;\n    border: 2px solid #C8C8C8;\n    color: white;\n    margin-right:2px;\n    font-weight:bold;\n}\n.mc_answer_button:active{\n    box-shadow: 0px 0px 2px 2px #C8C8C8;\n}\n.add_mc_answer_button{\n    background-color: #49c7e3ff;\n}\n.remove_mc_answer_button{\n    background-color: #ee4c50ff;\n}\n/*free response styling*/\n.fr_question{\n    font-size:15px;\n    margin-bottom:5px;\n    width:300px;\n}\n/*styling for mc and fr static content*/\n.questions_header{\n    font-size:20px;\n    margin-bottom:1px;\n}\n/*Styling for indentation of inputs*/\n.indented_holder{\n    margin-left:5px;\n}\n#date_time_input{\n    font-family: 'Source Sans Pro', sans-serif;\n    font-size: 20px;\n    width: 250px;\n}\n#submit_button_holder{\n    text-align:center;\n}\n#submit_content{\n    font-size: 30px;\n}\n#big_holder {\n    padding: 8px;\n    background-color: #f7f7f7;\n}\n#error_message_holder{\n    text-align: center;\n    color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2l0eS1kYXNoYm9hcmQvY2l0eS1kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxpRUFBaUU7QUFDakU7SUFDSSxhQUFhO0lBQ2IsNEJBQTRCO0lBQzVCLGNBQWM7Q0FDakI7QUFFRCx1Q0FBdUM7QUFDdkM7SUFDSSx1QkFBdUI7SUFDdkIsb0NBQW9DO0lBQ3BDLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLHFCQUFxQjtDQUN4QjtBQUVELG9EQUFvRDtBQUNwRDtJQUNJLGVBQWU7SUFDZixrQkFBa0I7Q0FDckI7QUFFRCwyQ0FBMkM7QUFDM0M7SUFDSSxlQUFlO0lBQ2YsdUJBQXVCO0lBQ3ZCLDJDQUEyQztJQUMzQyxvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsWUFBWTtDQUNmO0FBRUQ7SUFDSSwyQkFBMkI7Q0FDOUI7QUFFRDtJQUNJLDJCQUEyQjtDQUM5QjtBQUdELDZDQUE2QztBQUM3QztJQUNJLGVBQWU7SUFDZix1QkFBdUI7SUFDdkIsMkNBQTJDO0lBQzNDLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsa0JBQWtCO0NBQ3JCO0FBRUQ7SUFDSSxxQkFBcUI7Q0FDeEI7QUFFRDtJQUNJLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLDJDQUEyQztDQUM5QztBQUVEO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osMkNBQTJDO0NBQzlDO0FBRUQ7SUFDSSxxQkFBcUI7Q0FDeEI7QUFJRCxrQ0FBa0M7QUFDbEM7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLDBCQUEwQjtJQUMxQixhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLGlCQUFpQjtDQUNwQjtBQUVEO0lBQ0ksb0NBQW9DO0NBQ3ZDO0FBRUQ7SUFDSSw0QkFBNEI7Q0FDL0I7QUFFRDtJQUNJLDRCQUE0QjtDQUMvQjtBQUVELHlCQUF5QjtBQUN6QjtJQUNJLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsWUFBWTtDQUNmO0FBRUQsd0NBQXdDO0FBQ3hDO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtDQUNyQjtBQUVELHFDQUFxQztBQUNyQztJQUNJLGdCQUFnQjtDQUNuQjtBQUVEO0lBQ0ksMkNBQTJDO0lBQzNDLGdCQUFnQjtJQUNoQixhQUFhO0NBQ2hCO0FBRUQ7SUFDSSxrQkFBa0I7Q0FDckI7QUFFRDtJQUNJLGdCQUFnQjtDQUNuQjtBQUVEO0lBQ0ksYUFBYTtJQUNiLDBCQUEwQjtDQUM3QjtBQUdEO0lBQ0ksbUJBQW1CO0lBQ25CLFdBQVc7Q0FDZCIsImZpbGUiOiJzcmMvYXBwL2NpdHktZGFzaGJvYXJkL2NpdHktZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKnVzZWQgdG8gc3R5bGUgdGFncyB0aGF0IGhhdmUgYmVlbiBzZWxlY3RlZCBmb3IgY29udGVudCBibG9ja3MqL1xuLnNlbGVjdGVke1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBib3JkZXItdG9wLWNvbG9yOiAjNDljN2UzZmY7XG4gICAgdG9wLXdpZHRoOjNweDtcbn1cblxuLypzdHlsaW5nIGZvciBjb250ZW50IGhvbGRlciBzZWN0aW9ucyovXG4uY29udGVudF9ob2xkZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDJweCAycHggI0M4QzhDODtcbiAgICBwYWRkaW5nLWxlZnQ6MTBweDtcbiAgICBwYWRkaW5nLXRvcDo1cHg7XG4gICAgcGFkZGluZy1ib3R0b206NXB4O1xuICAgIG1hcmdpbi1ib3R0b206MTIuNXB4O1xufVxuXG4vKnN0eWxpbmcgZm9yIHRpdGxlIG9mIGVhY2ggY29udGVudCBob2xkZXIgc2VjdGlvbiovXG4uY29udGVudF90aXRsZXtcbiAgICBtYXJnaW4tdG9wOjJweDtcbiAgICBtYXJnaW4tYm90dG9tOjRweDtcbn1cblxuLypzdHlsaW5nIGZvciBhZGRpbmcgYW5kIHJlbW92aW5nIGNvbnRlbnQqL1xuLmNvbnRlbnRfYnV0dG9ue1xuICAgIGZvbnQtc2l6ZToyMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XG4gICAgZm9udC1mYW1pbHk6ICdTb3VyY2UgU2FucyBQcm8nLCBzYW5zLXNlcmlmO1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgbWFyZ2luLWxlZnQ6NXB4O1xuICAgIG1hcmdpbi1yaWdodDo1cHg7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBjb2xvcjp3aGl0ZTtcbn1cblxuLmFkZF9jb250ZW50X2J1dHRvbntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiM0OWM3ZTNmZjtcbn1cblxuLnJlbW92ZV9jb250ZW50X2J1dHRvbntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNlZTRjNTBmZjtcbn1cblxuXG4vKnN0eWxpbmcgZm9yIGFkZGluZyBhbmQgcmVtb3ZpbmcgcXVlc3Rpb25zKi9cbi5xdWVzdGlvbl9idXR0b257XG4gICAgZm9udC1zaXplOjE1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcbiAgICBmb250LWZhbWlseTogJ1NvdXJjZSBTYW5zIFBybycsIHNhbnMtc2VyaWY7XG4gICAgbWFyZ2luLWxlZnQ6M3B4O1xuICAgIG1hcmdpbi1yaWdodDozcHg7XG4gICAgYm9yZGVyLXJhZGl1czo1cHg7XG59XG5cbi5tY19hbnN3ZXJzX2hvbGRlcntcbiAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcbn1cblxuLm1jX3F1ZXN0aW9ue1xuICAgIGZvbnQtc2l6ZToxNXB4O1xuICAgIG1hcmdpbi1ib3R0b206NXB4O1xuICAgIHdpZHRoOjMwMHB4O1xuICAgIGZvbnQtZmFtaWx5OiAnU291cmNlIFNhbnMgUHJvJywgc2Fucy1zZXJpZjtcbn1cblxuLm1jX2Fuc3dlcntcbiAgICBmb250LXNpemU6MTVweDtcbiAgICBtYXJnaW4tcmlnaHQ6NXB4O1xuICAgIHdpZHRoOjIyNXB4O1xuICAgIGZvbnQtZmFtaWx5OiAnU291cmNlIFNhbnMgUHJvJywgc2Fucy1zZXJpZjtcbn1cblxuLm1jX3F1ZXN0aW9uX2hvbGRlcntcbiAgICBtYXJnaW4tYm90dG9tOjIyLjVweDtcbn1cblxuXG5cbi8qbXVsdGlwbGUgY2hvaWNlIGFuc3dlciBzdHlsaW5nKi9cbi5tY19hbnN3ZXJfYnV0dG9ue1xuICAgIGJvcmRlci1yYWRpdXM6NTAlO1xuICAgIGZvbnQtc2l6ZToyMHB4O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICNDOEM4Qzg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIG1hcmdpbi1yaWdodDoycHg7XG4gICAgZm9udC13ZWlnaHQ6Ym9sZDtcbn1cblxuLm1jX2Fuc3dlcl9idXR0b246YWN0aXZle1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMnB4IDJweCAjQzhDOEM4O1xufVxuXG4uYWRkX21jX2Fuc3dlcl9idXR0b257XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ5YzdlM2ZmO1xufVxuXG4ucmVtb3ZlX21jX2Fuc3dlcl9idXR0b257XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlNGM1MGZmO1xufVxuXG4vKmZyZWUgcmVzcG9uc2Ugc3R5bGluZyovXG4uZnJfcXVlc3Rpb257XG4gICAgZm9udC1zaXplOjE1cHg7XG4gICAgbWFyZ2luLWJvdHRvbTo1cHg7XG4gICAgd2lkdGg6MzAwcHg7XG59XG5cbi8qc3R5bGluZyBmb3IgbWMgYW5kIGZyIHN0YXRpYyBjb250ZW50Ki9cbi5xdWVzdGlvbnNfaGVhZGVye1xuICAgIGZvbnQtc2l6ZToyMHB4O1xuICAgIG1hcmdpbi1ib3R0b206MXB4O1xufVxuXG4vKlN0eWxpbmcgZm9yIGluZGVudGF0aW9uIG9mIGlucHV0cyovXG4uaW5kZW50ZWRfaG9sZGVye1xuICAgIG1hcmdpbi1sZWZ0OjVweDtcbn1cblxuI2RhdGVfdGltZV9pbnB1dHtcbiAgICBmb250LWZhbWlseTogJ1NvdXJjZSBTYW5zIFBybycsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIHdpZHRoOiAyNTBweDtcbn1cblxuI3N1Ym1pdF9idXR0b25faG9sZGVye1xuICAgIHRleHQtYWxpZ246Y2VudGVyO1xufVxuXG4jc3VibWl0X2NvbnRlbnR7XG4gICAgZm9udC1zaXplOiAzMHB4O1xufVxuXG4jYmlnX2hvbGRlciB7XG4gICAgcGFkZGluZzogOHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmN2Y3Zjc7XG59XG5cblxuI2Vycm9yX21lc3NhZ2VfaG9sZGVye1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogcmVkO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/city-dashboard/city-dashboard.component.html":
/*!**************************************************************!*\
  !*** ./src/app/city-dashboard/city-dashboard.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"big_holder\"> \n  <div id=\"event_holder\" class=\"content_holder\">\n    <h2 class=\"content_title\">Events</h2>\n    <div class=\"content_block_divider\"></div>\n    <div class=\"indented_holder\" *ngFor=\"let event of upload.events\">\n      <app-content-block\n        [(content)] = \"event\"\n        [tags] = \"possible_content_tags\"\n      ></app-content-block>\n    </div>\n    <div class=\"content_buttons_holder indented_holder\">\n      <button class=\"content_button add_content_button\" id=\"add_event\" (click)=\"addContent(upload.events)\">Add Event Content</button>\n      <button class=\"content_button remove_content_button\" id=\"remove_event\" (click)=\"removeContent(upload.events)\">Remove Event Content</button>\n    </div>\n  </div>\n\n  <div id=\"council_meeting_updates_holder\" class=\"content_holder\">\n    <h2 class=\"content_title\">Council meeting Updates</h2>\n    <div class=\"content_block_divider\"></div>\n    <div class=\"indented_holder\" *ngFor=\"let meeting_update of upload.councilMeetingUpdates\">\n      <app-content-block\n        [content] = \"meeting_update\"\n        [tags] = \"possible_content_tags\"\n      ></app-content-block>\n    </div>\n    <div class=\"content_buttons_holder indented_holder\">\n      <button class=\"content_button add_content_button\" id=\"add_council_meeting_updates\" (click)=\"addContent(upload.councilMeetingUpdates)\">Add Council Meeting Update Content</button>\n      <button class=\"content_button remove_content_button\" id=\"remove_council_meeting_updates\" (click)=\"removeContent(upload.councilMeetingUpdates)\">Remove Council Meeting Update Content</button>\n    </div>\n  </div>\n\n  <div id=\"town_in_news_holder\" class=\"content_holder\">\n    <h2 class=\"content_title\">Town in News</h2>\n    <div class=\"content_block_divider\"></div>\n    <div class=\"indented_holder\" *ngFor=\"let news of upload.townInTheNews\">\n      <app-content-block\n        [content] = \"news\"\n        [tags] = \"possible_content_tags\">\n      </app-content-block>\n    </div>\n    <div class=\"content_buttons_holder indented_holder\">\n      <button class=\"content_button add_content_button\" id=\"add_news\" (click)=\"addContent(upload.townInTheNews)\">Add Town in News Content</button>\n      <button class=\"content_button remove_content_button\" id=\"remove_news\" (click)=\"removeContent(upload.townInTheNews)\">Remove Town in News Content</button>\n    </div>\n  </div>\n\n  <div id=\"community_action_opportunities_holder\" class=\"content_holder\">\n    <h2 class=\"content_title\">Community Action Opportunities</h2>\n    <div class=\"content_block_divider\"></div>\n    <div class=\"indented_holder\" *ngFor=\"let community_action of upload.communityActionOpportunities\">\n      <app-content-block\n        [content] = \"community_action\"\n        [tags] = \"possible_content_tags\"\n      ></app-content-block>                                                                                                                                                       \n    </div>\n    <div class=\"content_buttons_holder indented_holder\">\n      <button class=\"content_button add_content_button\" id=\"add_community_action_opportunity\" (click)=\"addContent(upload.communityActionOpportunities)\">Add\n        Community Action Opportunities Content</button>\n      <button class=\"content_button remove_content_button\" id=\"remove_community_action_opportunity\" (click)=\"removeContent(upload.communityActionOpportunities)\">Remove\n        Community Action Opportunities Content</button>\n    </div>\n  </div>\n\n  <div id=\"submit_time_holder\" class=\"content_holder centered\">\n    <p class=\"content_title\">Submit time</p>\n    <input type=\"datetime-local\" id=\"date_time_input\" [(ngModel)]=\"upload.dateToBeCreated\">\n  </div>\n\n  <div id=\"submit_button_holder\">\n    <button class=\"content_button add_content_button\" id=\"submit_content\" (click)=\"submitInputs()\">Schedule Email</button>\n  </div>\n  <div id=\"error_message_holder\">\n    <p class=\"inline\">{{err_message.message}}</p>\n  </div>\n</div> "

/***/ }),

/***/ "./src/app/city-dashboard/city-dashboard.component.ts":
/*!************************************************************!*\
  !*** ./src/app/city-dashboard/city-dashboard.component.ts ***!
  \************************************************************/
/*! exports provided: CityDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CityDashboardComponent", function() { return CityDashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _upload_city_content_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../upload-city-content.service */ "./src/app/upload-city-content.service.ts");




var CityDashboardComponent = /** @class */ (function () {
    function CityDashboardComponent(router, route, uploadCityContentService) {
        this.router = router;
        this.route = route;
        this.uploadCityContentService = uploadCityContentService;
        //initialize upload object with arrays of length 1 each with a single Content object
        this.upload = {
            cityName: "",
            stateName: "",
            events: [{
                    title: "",
                    text: "",
                    imageUrl: "",
                    contentTags: [],
                    associatedMCQuestions: [],
                    associatedFRQuestions: []
                }],
            councilMeetingUpdates: [{
                    title: "",
                    text: "",
                    imageUrl: "",
                    contentTags: [],
                    associatedMCQuestions: [],
                    associatedFRQuestions: []
                }],
            townInTheNews: [{
                    title: "",
                    text: "",
                    imageUrl: "",
                    contentTags: [],
                    associatedMCQuestions: [],
                    associatedFRQuestions: []
                }],
            communityActionOpportunities: [{
                    title: "",
                    text: "",
                    imageUrl: "",
                    contentTags: [],
                    associatedMCQuestions: [],
                    associatedFRQuestions: []
                }],
            dateToBeCreated: ""
        };
        this.possible_content_tags = [
            { key: "Housing", val: "housing" },
            { key: "Public Spaces", val: "publicSpaces" },
            { key: "Health and Wellness", val: "healthAndWellness" },
            { key: "Transportation", val: "transportation" },
            { key: "Education", val: "education" },
            { key: "Environment", val: "environment" },
            { key: "Economic Development", val: "economicDevelopment" }
        ];
        //used for displaying messages to user about invalid inputs
        this.err_message = {
            exists: false,
            message: ""
        };
    }
    //add content block
    CityDashboardComponent.prototype.addContent = function (content_arr) {
        content_arr.push({
            title: "",
            text: "",
            imageUrl: "",
            contentTags: [],
            associatedMCQuestions: [],
            associatedFRQuestions: []
        });
    };
    //remove content block
    CityDashboardComponent.prototype.removeContent = function (content_arr) {
        content_arr.pop();
    };
    //log all values to be uploaded
    CityDashboardComponent.prototype.logVals = function () {
        console.log(this.upload);
    };
    //verify and log inputs before sending 
    CityDashboardComponent.prototype.submitInputs = function () {
        this.verifyInputs();
        if (this.err_message.exists) {
            return;
        }
        this.logVals();
        this.submit();
    };
    //submit content to backend
    CityDashboardComponent.prototype.submit = function () {
        var _this = this;
        this.uploadCityContentService.subscribeContent(this.upload)
            .subscribe(function (response) {
            console.log("response from uploadCityContentService.subscribeContent");
            console.log(response);
            _this.router.navigateByUrl('/successful-content-upload/' + _this.upload.stateName + '/' + _this.upload.cityName);
        });
        console.log("subscribe function has been called and request should have been sent");
    };
    CityDashboardComponent.prototype.ngOnInit = function () {
        this.upload.cityName = this.route.snapshot.paramMap.get("city");
        this.upload.stateName = this.route.snapshot.paramMap.get("state");
    };
    //helper method to make sure that the necessary input fields have been filled out
    CityDashboardComponent.prototype.verifyInputs = function () {
        this.err_message.exists = false;
        if (this.upload.events[0].title == "" && this.upload.councilMeetingUpdates[0].title == "" &&
            this.upload.townInTheNews[0].title == "" && this.upload.communityActionOpportunities[0].title == "") {
            this.err_message.exists = true;
            this.err_message.message = "Please ensure that at least one content block is filled in to be uploaded and that it has a title";
            return;
        }
        var currentDate = new Date();
        //parse out values for year, month, day, hour, minute
        var input_date = new Date(this.upload.dateToBeCreated.toString());
        if (input_date.getTime() <= currentDate.getTime()) {
            this.err_message.exists = true;
            this.err_message.message = "Please ensure that you are scheduling your content for a time in the future!";
            return;
        }
        var content_arrs = [this.upload.events, this.upload.councilMeetingUpdates, this.upload.townInTheNews, this.upload.communityActionOpportunities];
        if (this.check_for_title_duplicates(content_arrs)) {
            this.err_message.exists = true;
            this.err_message.message = "Please ensure that the titles to all content pieces are unique";
            return;
        }
        //if we have made it this far it means that input is clean
    };
    CityDashboardComponent.prototype.check_for_title_duplicates = function (content_arrs) {
        //iterate through every array in the array for every array in the array
        console.log("content_arrs from within check_for_title_duplicates:");
        console.log(content_arrs);
        for (var i = 0; i < content_arrs.length; i++) {
            for (var j = 0; j < content_arrs.length; j++) {
                //iterate through all the members of each array
                for (var k = 0; k < content_arrs[i].length; k++) {
                    for (var l = 0; l < content_arrs[j].length; l++) {
                        if (content_arrs[i][k].title == content_arrs[j][l].title && content_arrs[i][k].title != ""
                            && !(i == j && k == l)) {
                            console.log("the indexes where this occurred are [" + i + "][" + k + "] and [" + j + "][" + l + "]");
                            this.err_message.exists = true;
                            this.err_message.message = "Please ensure that the titles to all content pieces are unique";
                            //there are duplicates
                            return true;
                        }
                    }
                }
            }
        }
        return false;
    };
    CityDashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-city-dashboard',
            template: __webpack_require__(/*! ./city-dashboard.component.html */ "./src/app/city-dashboard/city-dashboard.component.html"),
            styles: [__webpack_require__(/*! ./city-dashboard.component.css */ "./src/app/city-dashboard/city-dashboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _upload_city_content_service__WEBPACK_IMPORTED_MODULE_3__["UploadCityContentService"]])
    ], CityDashboardComponent);
    return CityDashboardComponent;
}());



/***/ }),

/***/ "./src/app/config.ts":
/*!***************************!*\
  !*** ./src/app/config.ts ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//url used to connect to backend from front end client
var config_url = "http://localhost:3000/";
/* harmony default export */ __webpack_exports__["default"] = (config_url);


/***/ }),

/***/ "./src/app/content-block/content-block.component.css":
/*!***********************************************************!*\
  !*** ./src/app/content-block/content-block.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRlbnQtYmxvY2svY29udGVudC1ibG9jay5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/content-block/content-block.component.html":
/*!************************************************************!*\
  !*** ./src/app/content-block/content-block.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p class=\"large_text_title\">Title</p>\n<input class=\"inline large_text_input\" [(ngModel)]=\"content.title\" placeholder=\"The best event ever!\"><br>\n<p class=\"large_text_title\">Associated Text</p>\n<textarea class=\"inline large_text_input associated_text_holder\" [(ngModel)]=\"content.text\" placeholder=\"This event was put on by the city of goodness\"></textarea>\n<p class=\"large_text_title\">Link an image</p>\n<textarea class=\"inline large_text_input associated_text_holder\" [(ngModel)]=\"content.imageUrl\" placeholder=\"http://example.com/picture.jpg\"></textarea>\n<p class=\"large_text_title\">Add tags to your content</p>\n<div class=\"inline tag_selector\">\n  <button class=\"inline tag_button\" [ngClass]=\"[isFirst(tag, tags), isSelected(content, tag.val)]\" *ngFor=\"let tag of tags\" (click)=\"toggleTag(content, tag.val)\">{{tag.key}}</button>\n</div>\n\n<p class=\"large_text_title\">Citizen Questions</p>\n<div id=\"mc_question_interface\">\n\n  <p class=\"questions_header\">Multiple Choice Questions</p>\n  <div class=\"mc_questions_holder\" *ngIf=\"content.associatedMCQuestions\">\n    <div class=\"mc_question_holder\" *ngFor=\"let mc_question of content.associatedMCQuestions\">\n      <input class=\"inline mc_question text_input\" [(ngModel)]=\"mc_question.question\" placeholder=\"Question here\"><br>\n      <div class=\"mc_answers_holder\" *ngIf=\"mc_question.answerChoices\">\n        <input class=\"inline mc_answer\" *ngFor=\"let answer_choice of mc_question.answerChoices\" [(ngModel)]=\"answer_choice.answerChoice\" placeholder=\"Answer Choice here\">\n        <button class=\"mc_answer_button add_mc_answer_button\" (click)=\"addMultipleChoiceAnswer(mc_question)\">+</button>\n        <button class=\"mc_answer_button remove_mc_answer_button\" (click)=\"removeMultipleChoiceAnswer(mc_question)\">-</button>\n      </div>\n    </div>\n  </div>\n  <button class=\"question_button\" id=\"add_mc_question\" (click)=\"addMultipleChoice(content.associatedMCQuestions)\">Add Question</button>\n  <button class=\"question_button\" id=\"remove_mc_question\" (click)=\"removeMultipleChoice(content.associatedMCQuestions)\">Remove Question</button>\n</div>\n\n<div id=\"fr_question_interface\">\n  <p class=\"questions_header\"> Free Response Questions</p>\n  <div class=\"fr_questions_holder\" *ngIf=\"content.associatedFRQuestions.length\">\n    <!--<div *ngFor=\"let fr_question of content.associatedFRQuestions; let i = index\">-->\n      <textarea *ngFor=\"let fr_question of content.associatedFRQuestions;\" class=\"inline fr_question text_input\" [(ngModel)]=\"fr_question.question\" placeholder=\"Question here\"></textarea><br>\n    <!--</div>-->\n  </div>\n  <button class=\"question_button\" id=\"add_fr_question\" (click)=\"addFreeResponseQuestion(content.associatedFRQuestions)\">Add Question</button>\n  <button class=\"question_button\" id=\"remove_fr_question\" (click)=\"removeFreeResponseQuestion(content.associatedFRQuestions)\">Remove Question</button>\n</div>\n\n\n\n<div class=\"content_block_divider\"></div>\n"

/***/ }),

/***/ "./src/app/content-block/content-block.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/content-block/content-block.component.ts ***!
  \**********************************************************/
/*! exports provided: ContentBlockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentBlockComponent", function() { return ContentBlockComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _content__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../content */ "./src/app/content.ts");



//TODO: Write service for creation of a content block, and upload to server
var ContentBlockComponent = /** @class */ (function () {
    function ContentBlockComponent() {
    }
    //add tag remove tag to/from the currently targeted piece of content
    ContentBlockComponent.prototype.toggleTag = function (content, tag) {
        console.log('called toggleTag');
        console.log("value of content argument is:");
        console.log(content);
        console.log("value of tag is:");
        console.log(tag);
        if (content.contentTags.indexOf(tag) < 0) {
            content.contentTags.push(tag);
        }
        else {
            content.contentTags.splice(content.contentTags.indexOf(tag), 1);
        }
        this.isSelected(content, tag);
    };
    //used to toggle class for styling based on whether or not an interest tag has been selected
    ContentBlockComponent.prototype.isSelected = function (content, tag) {
        if (content.contentTags.indexOf(tag) >= 0) {
            //content tag has been associated with this piece of content
            return "selected";
        }
        return "";
    };
    //sets styling for the left border of first element of tags arr
    ContentBlockComponent.prototype.isFirst = function (content, contentArr) {
        if (contentArr[0] == content) {
            return "tag_button_left_border";
        }
        return "";
    };
    ContentBlockComponent.prototype.addMultipleChoice = function (associatedQuestions) {
        associatedQuestions.push({
            question: "",
            answerChoices: [{ answerChoice: "", count: 0 }]
        });
    };
    ContentBlockComponent.prototype.removeMultipleChoice = function (associatedQuestions) {
        associatedQuestions.pop();
    };
    ContentBlockComponent.prototype.addMultipleChoiceAnswer = function (question) {
        question.answerChoices.push({ answerChoice: "", count: 0 });
    };
    ContentBlockComponent.prototype.removeMultipleChoiceAnswer = function (question) {
        question.answerChoices.pop();
    };
    ContentBlockComponent.prototype.addFreeResponseQuestion = function (associatedQuestions) {
        var responses_arr;
        responses_arr = [];
        associatedQuestions.push({ question: "", responses: responses_arr });
    };
    ContentBlockComponent.prototype.removeFreeResponseQuestion = function (associatedQuestions) {
        associatedQuestions.pop();
    };
    ContentBlockComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('content'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _content__WEBPACK_IMPORTED_MODULE_2__["Content"])
    ], ContentBlockComponent.prototype, "content", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('tags'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], ContentBlockComponent.prototype, "tags", void 0);
    ContentBlockComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-content-block',
            template: __webpack_require__(/*! ./content-block.component.html */ "./src/app/content-block/content-block.component.html"),
            styles: [__webpack_require__(/*! ./content-block.component.css */ "./src/app/content-block/content-block.component.css"), __webpack_require__(/*! ../city-dashboard/city-dashboard.component.css */ "./src/app/city-dashboard/city-dashboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContentBlockComponent);
    return ContentBlockComponent;
}());



/***/ }),

/***/ "./src/app/content.ts":
/*!****************************!*\
  !*** ./src/app/content.ts ***!
  \****************************/
/*! exports provided: Content */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Content", function() { return Content; });
var Content = /** @class */ (function () {
    function Content() {
    }
    return Content;
}());



/***/ }),

/***/ "./src/app/council-meeting-update/council-meeting-update.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/council-meeting-update/council-meeting-update.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvdW5jaWwtbWVldGluZy11cGRhdGUvY291bmNpbC1tZWV0aW5nLXVwZGF0ZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/council-meeting-update/council-meeting-update.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/council-meeting-update/council-meeting-update.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  council-meeting-update works!\n</p>\n"

/***/ }),

/***/ "./src/app/council-meeting-update/council-meeting-update.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/council-meeting-update/council-meeting-update.component.ts ***!
  \****************************************************************************/
/*! exports provided: CouncilMeetingUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CouncilMeetingUpdateComponent", function() { return CouncilMeetingUpdateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CouncilMeetingUpdateComponent = /** @class */ (function () {
    function CouncilMeetingUpdateComponent() {
    }
    CouncilMeetingUpdateComponent.prototype.ngOnInit = function () {
    };
    CouncilMeetingUpdateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-council-meeting-update',
            template: __webpack_require__(/*! ./council-meeting-update.component.html */ "./src/app/council-meeting-update/council-meeting-update.component.html"),
            styles: [__webpack_require__(/*! ./council-meeting-update.component.css */ "./src/app/council-meeting-update/council-meeting-update.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CouncilMeetingUpdateComponent);
    return CouncilMeetingUpdateComponent;
}());



/***/ }),

/***/ "./src/app/create-subscriber.service.ts":
/*!**********************************************!*\
  !*** ./src/app/create-subscriber.service.ts ***!
  \**********************************************/
/*! exports provided: CreateSubscriberService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateSubscriberService", function() { return CreateSubscriberService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config */ "./src/app/config.ts");




var CreateSubscriberService = /** @class */ (function () {
    function CreateSubscriberService(http) {
        this.http = http;
        //uses the domain provided in config_url and appends 'singup' to the end for this specific request
        this.request_url = _config__WEBPACK_IMPORTED_MODULE_3__["default"] + 'signup';
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'content-Type': 'application/json'
            })
        };
    }
    CreateSubscriberService.prototype.subscribeUser = function (new_user) {
        console.log("new_user from front end:");
        console.log(new_user);
        return this.http.post(this.request_url, new_user, this.httpOptions);
    };
    CreateSubscriberService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], CreateSubscriberService);
    return CreateSubscriberService;
}());



/***/ }),

/***/ "./src/app/event/event.component.css":
/*!*******************************************!*\
  !*** ./src/app/event/event.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V2ZW50L2V2ZW50LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/event/event.component.html":
/*!********************************************!*\
  !*** ./src/app/event/event.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  event works!\n</p>\n"

/***/ }),

/***/ "./src/app/event/event.component.ts":
/*!******************************************!*\
  !*** ./src/app/event/event.component.ts ***!
  \******************************************/
/*! exports provided: EventComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventComponent", function() { return EventComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EventComponent = /** @class */ (function () {
    function EventComponent() {
    }
    EventComponent.prototype.ngOnInit = function () {
    };
    EventComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-event',
            template: __webpack_require__(/*! ./event.component.html */ "./src/app/event/event.component.html"),
            styles: [__webpack_require__(/*! ./event.component.css */ "./src/app/event/event.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EventComponent);
    return EventComponent;
}());



/***/ }),

/***/ "./src/app/feedback/feedback.component.css":
/*!*************************************************!*\
  !*** ./src/app/feedback/feedback.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#durham_crest{\n    width:60px;\n    height:60px;\n    vertical-align: middle;\n}\n\n#durham_title{\n    margin-left:20px;\n}\n\n.page_header{\n    margin-bottom:10px;\n}\n\n.feedback_holder{\n    width:95%;\n    background-color:#F8F8F8;\n    border: 1px solid #E8E8E8;\n    padding-left:15px;\n    padding-right:15px;\n}\n\n#submission_button{\n    background-color:#49c7e3ff;\n    font-size: 20px;\n    font-family: 'Source Sans Pro', sans-serif;\n    border-radius: 15px;\n    padding:10px;\n    color:white;\n    margin-bottom:10px;\n    margin-top:15px;\n}\n\n#submission_button:active{\n    box-shadow: 0px 0px 2px 2px #C8C8C8;\n}\n\n.content_tag{\n    font-size: 20px;\n    margin-left:10px;\n    margin-right:10px;\n    margin-top:5px;\n    box-shadow: 0px 0px 2px 2px #49c7e3ff;\n    padding-left:10px;\n    padding-right:10px;\n    border-radius:10%;\n    color:#49c7e3ff;\n}\n\n.form_text{\n    font-size: 17.5px;\n    color: #707070;\n    margin-top:1px;\n    margin-bottom:2px;\n}\n\n.form_sub_header{\n    text-align:left;\n    font-size: 17.5px;\n    border-bottom: 1px solid black;\n    display: inline-block;\n    margin-bottom:1px;\n}\n\n/*styling for questions*/\n\n/*styling for mc questions*/\n\n/*styling for fr questions*/\n\n.fr_question{\n    margin-top:10px;\n    margin-bottom:2px;\n    font-size:17.5px;\n}\n\n.fr_response{\n    width:400px;\n    font-size:20px;\n    padding-left:2px;\n    padding-top:2px;\n    padding-bottom:2px;\n}\n\n#video{\n    width:600px;\n    height:400px;\n}\n\n.form_header{\n    font-family: 'Source Sans Pro', sans-serif;\n}\n\n.mc_response{\n    font-size: 17.5px;\n    color: #707070;\n    margin-top: 1px;\n    margin-bottom: 2px;\n    font-family: 'Source Sans Pro', sans-serif;\n    margin-left:3px;\n}\n\ninput[type=\"radio\"]{\n    margin-right:7px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVlZGJhY2svZmVlZGJhY2suY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osdUJBQXVCO0NBQzFCOztBQUVEO0lBQ0ksaUJBQWlCO0NBQ3BCOztBQUVEO0lBQ0ksbUJBQW1CO0NBQ3RCOztBQUVEO0lBQ0ksVUFBVTtJQUNWLHlCQUF5QjtJQUN6QiwwQkFBMEI7SUFDMUIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtDQUN0Qjs7QUFFRDtJQUNJLDJCQUEyQjtJQUMzQixnQkFBZ0I7SUFDaEIsMkNBQTJDO0lBQzNDLG9CQUFvQjtJQUNwQixhQUFhO0lBQ2IsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixnQkFBZ0I7Q0FDbkI7O0FBRUQ7SUFDSSxvQ0FBb0M7Q0FDdkM7O0FBRUQ7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2Ysc0NBQXNDO0lBQ3RDLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtDQUNuQjs7QUFFRDtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsZUFBZTtJQUNmLGtCQUFrQjtDQUNyQjs7QUFFRDtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsK0JBQStCO0lBQy9CLHNCQUFzQjtJQUN0QixrQkFBa0I7Q0FDckI7O0FBRUQseUJBQXlCOztBQUV6Qiw0QkFBNEI7O0FBRTVCLDRCQUE0Qjs7QUFDNUI7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtDQUNwQjs7QUFFRDtJQUNJLFlBQVk7SUFDWixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixtQkFBbUI7Q0FDdEI7O0FBRUQ7SUFDSSxZQUFZO0lBQ1osYUFBYTtDQUNoQjs7QUFFRDtJQUNJLDJDQUEyQztDQUM5Qzs7QUFHRDtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQiwyQ0FBMkM7SUFDM0MsZ0JBQWdCO0NBQ25COztBQUVEO0lBQ0ksaUJBQWlCO0NBQ3BCIiwiZmlsZSI6InNyYy9hcHAvZmVlZGJhY2svZmVlZGJhY2suY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNkdXJoYW1fY3Jlc3R7XG4gICAgd2lkdGg6NjBweDtcbiAgICBoZWlnaHQ6NjBweDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4jZHVyaGFtX3RpdGxle1xuICAgIG1hcmdpbi1sZWZ0OjIwcHg7XG59XG5cbi5wYWdlX2hlYWRlcntcbiAgICBtYXJnaW4tYm90dG9tOjEwcHg7XG59XG5cbi5mZWVkYmFja19ob2xkZXJ7XG4gICAgd2lkdGg6OTUlO1xuICAgIGJhY2tncm91bmQtY29sb3I6I0Y4RjhGODtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjRThFOEU4O1xuICAgIHBhZGRpbmctbGVmdDoxNXB4O1xuICAgIHBhZGRpbmctcmlnaHQ6MTVweDtcbn1cblxuI3N1Ym1pc3Npb25fYnV0dG9ue1xuICAgIGJhY2tncm91bmQtY29sb3I6IzQ5YzdlM2ZmO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBmb250LWZhbWlseTogJ1NvdXJjZSBTYW5zIFBybycsIHNhbnMtc2VyaWY7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICBwYWRkaW5nOjEwcHg7XG4gICAgY29sb3I6d2hpdGU7XG4gICAgbWFyZ2luLWJvdHRvbToxMHB4O1xuICAgIG1hcmdpbi10b3A6MTVweDtcbn1cblxuI3N1Ym1pc3Npb25fYnV0dG9uOmFjdGl2ZXtcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDJweCAycHggI0M4QzhDODtcbn1cblxuLmNvbnRlbnRfdGFne1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBtYXJnaW4tbGVmdDoxMHB4O1xuICAgIG1hcmdpbi1yaWdodDoxMHB4O1xuICAgIG1hcmdpbi10b3A6NXB4O1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMnB4IDJweCAjNDljN2UzZmY7XG4gICAgcGFkZGluZy1sZWZ0OjEwcHg7XG4gICAgcGFkZGluZy1yaWdodDoxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6MTAlO1xuICAgIGNvbG9yOiM0OWM3ZTNmZjtcbn1cblxuLmZvcm1fdGV4dHtcbiAgICBmb250LXNpemU6IDE3LjVweDtcbiAgICBjb2xvcjogIzcwNzA3MDtcbiAgICBtYXJnaW4tdG9wOjFweDtcbiAgICBtYXJnaW4tYm90dG9tOjJweDtcbn1cblxuLmZvcm1fc3ViX2hlYWRlcntcbiAgICB0ZXh0LWFsaWduOmxlZnQ7XG4gICAgZm9udC1zaXplOiAxNy41cHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtYXJnaW4tYm90dG9tOjFweDtcbn1cblxuLypzdHlsaW5nIGZvciBxdWVzdGlvbnMqL1xuXG4vKnN0eWxpbmcgZm9yIG1jIHF1ZXN0aW9ucyovXG5cbi8qc3R5bGluZyBmb3IgZnIgcXVlc3Rpb25zKi9cbi5mcl9xdWVzdGlvbntcbiAgICBtYXJnaW4tdG9wOjEwcHg7XG4gICAgbWFyZ2luLWJvdHRvbToycHg7XG4gICAgZm9udC1zaXplOjE3LjVweDtcbn1cblxuLmZyX3Jlc3BvbnNle1xuICAgIHdpZHRoOjQwMHB4O1xuICAgIGZvbnQtc2l6ZToyMHB4O1xuICAgIHBhZGRpbmctbGVmdDoycHg7XG4gICAgcGFkZGluZy10b3A6MnB4O1xuICAgIHBhZGRpbmctYm90dG9tOjJweDtcbn1cblxuI3ZpZGVve1xuICAgIHdpZHRoOjYwMHB4O1xuICAgIGhlaWdodDo0MDBweDtcbn1cblxuLmZvcm1faGVhZGVye1xuICAgIGZvbnQtZmFtaWx5OiAnU291cmNlIFNhbnMgUHJvJywgc2Fucy1zZXJpZjtcbn1cblxuXG4ubWNfcmVzcG9uc2V7XG4gICAgZm9udC1zaXplOiAxNy41cHg7XG4gICAgY29sb3I6ICM3MDcwNzA7XG4gICAgbWFyZ2luLXRvcDogMXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDJweDtcbiAgICBmb250LWZhbWlseTogJ1NvdXJjZSBTYW5zIFBybycsIHNhbnMtc2VyaWY7XG4gICAgbWFyZ2luLWxlZnQ6M3B4O1xufVxuXG5pbnB1dFt0eXBlPVwicmFkaW9cIl17XG4gICAgbWFyZ2luLXJpZ2h0OjdweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/feedback/feedback.component.html":
/*!**************************************************!*\
  !*** ./src/app/feedback/feedback.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page_header\">\n  <div class=\"left_align inline\">\n    <img id=\"durham_crest\" src=\"https://files.slack.com/files-pri/TBBQYCTSM-FF98KLGSZ/image.png\">\n  </div>\n  <div class=\"centered inline\">\n    <p id=\"durham_title\" class=\"large_text_title inline centered\">Durham Citizen Feedback</p>\n  </div>\n</div>\n<div div class=\"centered\">\n  <div class=\"feedback_holder inline\">\n    <h2 class=\"form_header\">{{content.title}}</h2>\n    <div class=\"video_holder\">\n      <iframe id=\"video\" src=\"https://www.youtube.com/embed/GdM0koq7w8o\"></iframe>\n    </div>\n    <div class=\"left_align\"><p class=\"form_sub_header\">Details</p></div>\n    <p class=\"left_align form_text\">{{content.text}}</p>\n    <div class=\"tag_holders left_align\">\n      <p class=\"content_tag inline\" *ngFor=\"let tag of content.contentTags\">{{tag}}</p>\n    </div>\n\n    <div class=\"left_align\"><p class=\"form_sub_header\">Questions</p></div>\n      <div class=\"questions_holder\">\n\n      </div>\n      <div class=\"questions_holder\">\n        <div class=\"left_align fr_question_sub_holder\" *ngFor=\"let question of content.associatedFRQuestions\">\n          <p class=\"fr_question\">{{question.question}}</p>\n          <textarea class=\"fr_response\" placeholder=\"Your feedback here\" [(ngModel)]=\"question.response\"></textarea>\n        </div>\n      </div>\n\n      <div class=\"questions_holder\">\n        <div class=\"left_align mc_question_sub_holder\" *ngFor=\"let question of content.associatedMCQuestions\">\n          <p class=\"fr_question\">{{question.question}}</p>\n          <div *ngFor=\"let answerChoice of question.answerChoices\">\n            <label class=\"mc_response\">\n             <input type=\"radio\" [name]=\"question.question\" [value]=\"answerChoice.answerChoice\" (click)=\"select_answer(question.question, answerChoice.answerChoice)\">{{answerChoice.answerChoice}}\n            </label>\n          </div>\n        </div>\n      </div>\n    \n    <div class=\"left_align\">\n      <button id=\"submission_button\" (click)=\"submit()\">Submit Feedback</button>\n    </div>\n  </div>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/feedback/feedback.component.ts":
/*!************************************************!*\
  !*** ./src/app/feedback/feedback.component.ts ***!
  \************************************************/
/*! exports provided: FeedbackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbackComponent", function() { return FeedbackComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _get_feedback_info_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../get-feedback-info.service */ "./src/app/get-feedback-info.service.ts");
/* harmony import */ var _submit_feedback_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../submit-feedback.service */ "./src/app/submit-feedback.service.ts");





var FeedbackComponent = /** @class */ (function () {
    function FeedbackComponent(router, route, feedbackInfoService, submitFeedbackService) {
        this.router = router;
        this.route = route;
        this.feedbackInfoService = feedbackInfoService;
        this.submitFeedbackService = submitFeedbackService;
        //placeholder data; will be replaced with an http request and real data in production
        this.content = {
            title: "Pedestrian Safety",
            text: "As Durham strives to be more pedestrian friendly, safety for those who walk is the city's priority. As the city changes with new construction projects and regulations, Durham wants to prioritize safe crosswalks, accessible sidewalks, and congestion-free space for pedestrians to move freely from place to place. Durham County wants to know what concerns do you, as a pedestrian, have for the future of the city's walk-ability?",
            imageUrl: "",
            contentTags: ["Public Spaces", "Health and Wellness"],
            associatedMCQuestions: [{
                    question: "How would you like land to be developed in Durham?",
                    answerChoices: [
                        { answerChoice: "More parks and recreational spaces", count: 0 },
                        { answerChoice: "Bring more business to Durham", count: 0 },
                        { answerChoice: "Affordable housing", count: 0 }
                    ]
                }
            ],
            associatedFRQuestions: [{
                    question: "What are your biggest pedestrian safety concerns?",
                    responses: []
                }]
        };
    }
    FeedbackComponent.prototype.select_answer = function (question, question_answer) {
        for (var i = 0; i < this.content.associatedMCQuestions.length; i++) {
            //check if question is correct
            if (this.content.associatedMCQuestions[i].question == question) {
                //check if this is correct answer chioce, if it is set to 1, else to 0
                for (var j = 0; j < this.content.associatedMCQuestions[i].answerChoices.length; j++) {
                    if (this.content.associatedMCQuestions[i].answerChoices[j].answerChoice == question_answer) {
                        this.content.associatedMCQuestions[i].answerChoices[j].count = 1;
                    }
                    else {
                        this.content.associatedMCQuestions[i].answerChoices[j].count = 0;
                    }
                }
                return;
            }
        }
    };
    FeedbackComponent.prototype.submit = function () {
        var _this = this;
        this.feedback = {
            category: this.category,
            associatedFRQuestions: this.content.associatedFRQuestions,
            associatedMCQuestions: this.content.associatedMCQuestions,
            city: this.city,
            state: this.state,
            dateToBeCreated: this.dateToBeCreated,
            email: this.email,
            title: this.title
        };
        this.submitFeedbackService.subscribeContent(this.feedback)
            .subscribe(function (response) {
            console.log("response from backend after running through submit content subscriber");
            console.log(response);
            _this.router.navigateByUrl('/successful-feedback/' + _this.state + '/' + _this.city);
        });
        //this.router.navigateByUrl('/successful-feedback');
    };
    FeedbackComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.state = this.route.snapshot.paramMap.get("state");
        this.city = this.route.snapshot.paramMap.get("city");
        this.dateToBeCreated = this.route.snapshot.paramMap.get("dateToBeCreated");
        this.title = this.route.snapshot.paramMap.get("title");
        this.email = this.route.snapshot.paramMap.get("email");
        this.feedbackInfoService.subscribeContent(this.city, this.state, this.dateToBeCreated, this.title)
            .subscribe(function (response) {
            console.log("response from backend after running through subscriber:");
            console.log(response);
            var res = response;
            _this.category = res.category;
            _this.content = res.result;
        });
    };
    FeedbackComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-feedback',
            template: __webpack_require__(/*! ./feedback.component.html */ "./src/app/feedback/feedback.component.html"),
            styles: [__webpack_require__(/*! ./feedback.component.css */ "./src/app/feedback/feedback.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _get_feedback_info_service__WEBPACK_IMPORTED_MODULE_3__["GetFeedbackInfoService"], _submit_feedback_service__WEBPACK_IMPORTED_MODULE_4__["SubmitFeedbackService"]])
    ], FeedbackComponent);
    return FeedbackComponent;
}());



/***/ }),

/***/ "./src/app/get-feedback-info.service.ts":
/*!**********************************************!*\
  !*** ./src/app/get-feedback-info.service.ts ***!
  \**********************************************/
/*! exports provided: GetFeedbackInfoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetFeedbackInfoService", function() { return GetFeedbackInfoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config */ "./src/app/config.ts");




var GetFeedbackInfoService = /** @class */ (function () {
    function GetFeedbackInfoService(http) {
        this.http = http;
        //use pre configured domain and append 'uploadCityContent' to end for this specific request
        this.request_url = _config__WEBPACK_IMPORTED_MODULE_3__["default"] + 'feedback/cityFeedback';
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'content-Type': 'application/json',
            })
        };
    }
    GetFeedbackInfoService.prototype.subscribeContent = function (city_name, state_name, dateToBeCreated, title) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('city', city_name)
            .set('state', state_name)
            .set('dateToBeCreated', dateToBeCreated)
            .set('title', title);
        return this.http.get(this.request_url, { params: params });
    };
    GetFeedbackInfoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], GetFeedbackInfoService);
    return GetFeedbackInfoService;
}());



/***/ }),

/***/ "./src/app/landing-page/landing-page.component.css":
/*!*********************************************************!*\
  !*** ./src/app/landing-page/landing-page.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#registration_holder{\n    margin-top:40px;\n    margin-left:100px;\n    margin-right:100px;\n    border-top: 1px dotted grey;\n}\n\n#interest_holder{\n    margin-top:20px;\n    display:inline-block;\n}\n\n#selected_interests_holder{\n    display:inline-block;\n}\n\n.text_input{\n    width: 950px;\n    font-size:21px;\n}\n\n.input_name{\n    padding-right:50px;\n    font-size:24px;\n    margin-bottom:3px;\n}\n\n.interest_button{\n    font-size: 20px;\n    background-color: white;\n    font-family: 'Source Sans Pro', sans-serif;\n    border-right: 2px solid #C8C8C8;\n    border-top: 2px solid #C8C8C8;\n    border-bottom: 2px solid #C8C8C8;\n    padding: 3px 3px 3px 3px;\n    color: #C8C8C8;\n}\n\nselect{\n    font-size:21px;\n}\n\n.trait_selector_holder{\n    text-align:left;\n    margin-left:135px;\n}\n\n.trait_selector{\n    width:950px;\n}\n\n.submission_err_holder{\n    color:red;\n    margin-top:3px;\n}\n\n#interests_title{\n    font-size:24px;\n    margin-top:30px;\n}\n\n.sub_header{\n    text-align:center;\n    margin-top:2px;\n    margin-bottom:2px;\n}\n\n.subtext{\n  margin-top:0;\n  margin-bottom:10px;  \n  padding-left: 250px;\n  padding-right: 250px;\n  color: #888888;\n}\n\n#submission_button{\n    font-size: 25px;\n    background-color: #49c7e3ff;\n    font-family: 'Source Sans Pro', sans-serif;\n    border-radius: 15px;\n    margin-left: 5px;\n    margin-right: 5px;\n    margin-top: 15px;\n    margin-bottom: 15px;\n    padding-top: 10px;\n    padding-bottom: 10px;\n    padding-left: 20px;\n    padding-right: 20px;\n    color: white;\n}\n\n.generic_button{\n    font-size: 20px;\n    font-family: 'Source Sans Pro', sans-serif;\n    border-right: 2px solid #C8C8C8;\n    border-top: 2px solid #C8C8C8;\n    border-bottom: 2px solid #C8C8C8;\n    border-left: 1px solid #C8C8C8;\n    padding-left: 3px;\n    padding-top: 3px;\n    padding-bottom: 3px;\n    padding-right: 18px;\n    color: #C8C8C8;\n}\n\n.generic_radio{\n    visibility: hidden;\n}\n\n.selected{\n    color: black;\n    border-top-color: #49c7e3ff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGFuZGluZy1wYWdlL2xhbmRpbmctcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsNEJBQTRCO0NBQy9COztBQUVEO0lBQ0ksZ0JBQWdCO0lBQ2hCLHFCQUFxQjtDQUN4Qjs7QUFFRDtJQUNJLHFCQUFxQjtDQUN4Qjs7QUFFRDtJQUNJLGFBQWE7SUFDYixlQUFlO0NBQ2xCOztBQUVEO0lBQ0ksbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixrQkFBa0I7Q0FDckI7O0FBRUQ7SUFDSSxnQkFBZ0I7SUFDaEIsd0JBQXdCO0lBQ3hCLDJDQUEyQztJQUMzQyxnQ0FBZ0M7SUFDaEMsOEJBQThCO0lBQzlCLGlDQUFpQztJQUNqQyx5QkFBeUI7SUFDekIsZUFBZTtDQUNsQjs7QUFFRDtJQUNJLGVBQWU7Q0FDbEI7O0FBRUQ7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0NBQ3JCOztBQUVEO0lBQ0ksWUFBWTtDQUNmOztBQUVEO0lBQ0ksVUFBVTtJQUNWLGVBQWU7Q0FDbEI7O0FBRUQ7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0NBQ25COztBQUVEO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixrQkFBa0I7Q0FDckI7O0FBRUQ7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLG9CQUFvQjtFQUNwQixxQkFBcUI7RUFDckIsZUFBZTtDQUNoQjs7QUFFRDtJQUNJLGdCQUFnQjtJQUNoQiw0QkFBNEI7SUFDNUIsMkNBQTJDO0lBQzNDLG9CQUFvQjtJQUNwQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLGFBQWE7Q0FDaEI7O0FBR0Q7SUFDSSxnQkFBZ0I7SUFDaEIsMkNBQTJDO0lBQzNDLGdDQUFnQztJQUNoQyw4QkFBOEI7SUFDOUIsaUNBQWlDO0lBQ2pDLCtCQUErQjtJQUMvQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQixvQkFBb0I7SUFDcEIsZUFBZTtDQUNsQjs7QUFFRDtJQUNJLG1CQUFtQjtDQUN0Qjs7QUFFRDtJQUNJLGFBQWE7SUFDYiw0QkFBNEI7Q0FDL0IiLCJmaWxlIjoic3JjL2FwcC9sYW5kaW5nLXBhZ2UvbGFuZGluZy1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjcmVnaXN0cmF0aW9uX2hvbGRlcntcbiAgICBtYXJnaW4tdG9wOjQwcHg7XG4gICAgbWFyZ2luLWxlZnQ6MTAwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OjEwMHB4O1xuICAgIGJvcmRlci10b3A6IDFweCBkb3R0ZWQgZ3JleTtcbn1cblxuI2ludGVyZXN0X2hvbGRlcntcbiAgICBtYXJnaW4tdG9wOjIwcHg7XG4gICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XG59XG5cbiNzZWxlY3RlZF9pbnRlcmVzdHNfaG9sZGVye1xuICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xufVxuXG4udGV4dF9pbnB1dHtcbiAgICB3aWR0aDogOTUwcHg7XG4gICAgZm9udC1zaXplOjIxcHg7XG59XG5cbi5pbnB1dF9uYW1le1xuICAgIHBhZGRpbmctcmlnaHQ6NTBweDtcbiAgICBmb250LXNpemU6MjRweDtcbiAgICBtYXJnaW4tYm90dG9tOjNweDtcbn1cblxuLmludGVyZXN0X2J1dHRvbntcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgZm9udC1mYW1pbHk6ICdTb3VyY2UgU2FucyBQcm8nLCBzYW5zLXNlcmlmO1xuICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkICNDOEM4Qzg7XG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICNDOEM4Qzg7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNDOEM4Qzg7XG4gICAgcGFkZGluZzogM3B4IDNweCAzcHggM3B4O1xuICAgIGNvbG9yOiAjQzhDOEM4O1xufVxuXG5zZWxlY3R7XG4gICAgZm9udC1zaXplOjIxcHg7XG59XG5cbi50cmFpdF9zZWxlY3Rvcl9ob2xkZXJ7XG4gICAgdGV4dC1hbGlnbjpsZWZ0O1xuICAgIG1hcmdpbi1sZWZ0OjEzNXB4O1xufVxuXG4udHJhaXRfc2VsZWN0b3J7XG4gICAgd2lkdGg6OTUwcHg7XG59XG5cbi5zdWJtaXNzaW9uX2Vycl9ob2xkZXJ7XG4gICAgY29sb3I6cmVkO1xuICAgIG1hcmdpbi10b3A6M3B4O1xufVxuXG4jaW50ZXJlc3RzX3RpdGxle1xuICAgIGZvbnQtc2l6ZToyNHB4O1xuICAgIG1hcmdpbi10b3A6MzBweDtcbn1cblxuLnN1Yl9oZWFkZXJ7XG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDoycHg7XG4gICAgbWFyZ2luLWJvdHRvbToycHg7XG59XG5cbi5zdWJ0ZXh0e1xuICBtYXJnaW4tdG9wOjA7XG4gIG1hcmdpbi1ib3R0b206MTBweDsgIFxuICBwYWRkaW5nLWxlZnQ6IDI1MHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAyNTBweDtcbiAgY29sb3I6ICM4ODg4ODg7XG59XG5cbiNzdWJtaXNzaW9uX2J1dHRvbntcbiAgICBmb250LXNpemU6IDI1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ5YzdlM2ZmO1xuICAgIGZvbnQtZmFtaWx5OiAnU291cmNlIFNhbnMgUHJvJywgc2Fucy1zZXJpZjtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuXG4uZ2VuZXJpY19idXR0b257XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGZvbnQtZmFtaWx5OiAnU291cmNlIFNhbnMgUHJvJywgc2Fucy1zZXJpZjtcbiAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCAjQzhDOEM4O1xuICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCAjQzhDOEM4O1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjQzhDOEM4O1xuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI0M4QzhDODtcbiAgICBwYWRkaW5nLWxlZnQ6IDNweDtcbiAgICBwYWRkaW5nLXRvcDogM3B4O1xuICAgIHBhZGRpbmctYm90dG9tOiAzcHg7XG4gICAgcGFkZGluZy1yaWdodDogMThweDtcbiAgICBjb2xvcjogI0M4QzhDODtcbn1cblxuLmdlbmVyaWNfcmFkaW97XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuXG4uc2VsZWN0ZWR7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGJvcmRlci10b3AtY29sb3I6ICM0OWM3ZTNmZjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/landing-page/landing-page.component.html":
/*!**********************************************************!*\
  !*** ./src/app/landing-page/landing-page.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"centered\">\n  <h1>Welcome to Durham E News</h1>\n</div>\n\n<div class=\"centered\" id=\"registration_holder\">\n\n  <p id=\"interests_title\" class=\"inline sub_header\">What do you care about?</p><br>\n  <p class=\"inline subtext\">We know you care about a lot of things, so feel free to come back and add more later!</p>\n  <div class=\"trait_selector_holder\">\n      <div class=\"inline\">\n        <button [ngClass]=\"isSelected(interest.val)\" class=\"interest_button\" *ngFor=\"let interest of interest_options_unselected\" (click)=\"toggleInterest(interest.val)\">{{interest.key}}</button><br>\n      </div>\n  </div><br>\n  <div class=\"spacing\"></div>\n\n  <p id=\"interests_title\" class=\"inline sub_header\">Tell us a little about yourself:</p><br>\n  <p id=\"subtext_two\" class=\"inline subtext\">The acta team is dedicated to our mission to connect you with unbiased, informative, and relevant local news and updates. We request our users’ demographics in order to get to know those who are using our platform. The more familiar we are with you, the more accurate our algorithms are. Please fill in as much information as you feel comfortable sharing with us. We are committed to protecting your privacy.</p>\n  <div class=\"trait_selector_holder\">\n    <p class=\"inline input_name\">Email</p><br>\n    <input class=\"inline text_input\" [(ngModel)]=\"user.email\" placeholder=\"email\"><br>\n  </div>\n\n  <div class=\"trait_selector_holder\">\n    <p class=\"inline input_name\">Gender</p><br>\n    <div class=\"inline\">\n      <button type=\"button\" [ngClass]=\"isSelectedGender(gender)\" class=\"generic_button\" *ngFor=\"let gender of gender_options\" (click)=\"toggleGender(gender)\">{{gender}}</button>\n    </div>\n  </div>\n\n  <div class=\"trait_selector_holder\">\n    <p class=\"inline input_name\">Race</p><br>\n    <div class=\"inline\">\n      <button type=\"button\" [ngClass]=\"isSelectedRace(race)\" class=\"generic_button\" *ngFor=\"let race of race_options\" (click)=\"toggleRace(race)\">{{race}}</button>\n    </div>\n  </div>\n\n  <div class=\"trait_selector_holder\">\n    <p class=\"inline input_name\">Household Income Range</p><br>\n    <div class=\"inline\">\n      <button type=\"button\" [ngClass]=\"isSelectedIncome(income)\" class=\"generic_button\" *ngFor=\"let income of income_options\" (click)=\"toggleIncome(income)\">{{income}}</button>\n    </div>\n  </div>\n\n  <div class=\"trait_selector_holder\">\n    <p class=\"inline input_name\">Age Range</p><br>\n    <div class=\"inline\">\n      <button type=\"button\" [ngClass]=\"isSelectedAgeRange(age)\" class=\"generic_button\" *ngFor=\"let age of age_options\" (click)=\"toggleAge(age)\">{{age}}</button>\n    </div>\n  </div>\n\n  <div class=\"trait_selector_holder\">\n    <p class=\"inline input_name \">Employment Status</p><br>\n    <div class=\"inline\">\n      <button type=\"button\" [ngClass]=\"isSelectedEmployment(employment)\" class=\"generic_button\" *ngFor=\"let employment of employment_options\" (click)=\"toggleEmployment(employment)\">{{employment}}</button>\n    </div>\n  </div>\n\n  <div class=\"trait_selector_holder\">\n    <p class=\"inline input_name\">Education Level</p><br>\n    <div class=\"inline\">\n        <button type=\"button\" [ngClass]=\"isSelectedEducation(education)\" class=\"generic_button\" *ngFor=\"let education of education_options\" (click)=\"toggleEducation(education)\">{{education}}</button>\n      </div>\n  </div>\n\n  <div class=\"trait_selector_holder\">\n    <p class=\"inline input_name\">Number of Children</p><br>\n    <div class=\"inline\">\n      <button type=\"button\" [ngClass]=\"isSelectedChildren(child)\" class=\"generic_button\" *ngFor=\"let child of children_options\" (click)=\"toggleChildren(child)\">{{child}}</button>\n    </div>\n  </div>\n\n  <div class=\"submission_err_holder\" *ngIf=\"err_message.exists\">{{err_message.message}}</div>\n  <button id=\"submission_button\" (click)=\"submitInputs()\">Submit</button><br>\n\n  \n</div>\n\n\n"

/***/ }),

/***/ "./src/app/landing-page/landing-page.component.ts":
/*!********************************************************!*\
  !*** ./src/app/landing-page/landing-page.component.ts ***!
  \********************************************************/
/*! exports provided: LandingPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingPageComponent", function() { return LandingPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _create_subscriber_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../create-subscriber.service */ "./src/app/create-subscriber.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var LandingPageComponent = /** @class */ (function () {
    function LandingPageComponent(route, router, createSubscriberService) {
        this.route = route;
        this.router = router;
        this.createSubscriberService = createSubscriberService;
        //object where input values will be stored
        this.user = {
            email: "", gender: "", race: "", householdIncomeRange: "", ageRange: "", employmentStatus: "", educationLevel: "", numberOfChildren: "",
            interests: {
                "housing": 0,
                "publicSpaces": 0,
                "healthAndWellness": 0,
                "transportation": 0,
                "education": 0,
                "environment": 0,
                "economicDevelopment": 0
            },
            city: "Greensboro",
            state: "North Carolina",
            score: 0
        };
        //used for displaying messages to user about invalid inputs
        this.err_message = {
            exists: false,
            message: ""
        };
        //arrays holding all options that should be availabile for various fields that we collect data on
        this.gender_options = ["Male", "Female", "Non-Binary", "Others", "Prefer Not To Respond"];
        this.race_options = ["Black/African-American", "Caucasian", "Asian/Pacific Islander", "Hispanic/Latinx", "Prefer Not To Respond"];
        this.income_options = ["0-20,0000", "20,001-40,000", "40,001-60,000", "60,001-80,000", "80,001-100,000", "100,000+", "Prefer Not To Respond"];
        this.age_options = ["18-21", "22-25", "26-30", "31-40", "40+", "Prefer Not To Respond"];
        this.employment_options = ["Unemployed", "Employed, part time", "Employed, full time", "Employed, with multiple jobs", "Student", "Prefer Not to Respond"];
        this.education_options = ["No Degree", "High School Diploma", "Associate's Degree", "Bachelor's Degree", "Master's Degree", "PhD", "Prefer Not to Respond"];
        this.children_options = ["None", "1-2", "3-5", "6+", "Prefer Not to Respond"];
        this.interest_options_unselected = [
            { key: "Housing", val: "housing" },
            { key: "Public Spaces", val: "publicSpaces" },
            { key: "Health and Wellness", val: "healthAndWellness" },
            { key: "Transportation", val: "transportation" },
            { key: "Education", val: "education" },
            { key: "Environment", val: "environment" },
            { key: "Econominc Development", val: "economicDevelopment" }
        ];
    }
    LandingPageComponent.prototype.logVals = function () {
        console.log("user:");
        console.log(this.user);
    };
    LandingPageComponent.prototype.verifyInputs = function () {
        this.err_message.exists = false;
        if (this.user.email == "") {
            this.err_message.exists = true;
            this.err_message.message = "Please ensure that a valid email input has been entered";
            return;
        }
        if (this.user.gender == "") {
            this.err_message.exists = true;
            this.err_message.message = "Please ensure that a gender option has been selected";
            return;
        }
        if (this.user.householdIncomeRange == "") {
            this.err_message.exists = true;
            this.err_message.message = "Please ensure that an income range option has been selected";
            return;
        }
        if (this.user.ageRange == "") {
            this.err_message.exists = true;
            this.err_message.message = "Please ensure that an age range option has been selected";
            return;
        }
        if (this.user.employmentStatus == "") {
            this.err_message.exists = true;
            this.err_message.message = "Please ensure that an employment option has been selected";
            return;
        }
        if (this.user.educationLevel == "") {
            this.err_message.exists = true;
            this.err_message.message = "Please ensure that an education level option has been selected";
            return;
        }
        if (this.user.numberOfChildren == "") {
            this.err_message.exists = true;
            this.err_message.message = "Please ensure that a number of children option has been selected";
            return;
        }
        if (this.user.interests.housing == 0 && this.user.interests.publicSpaces == 0 && this.user.interests.healthAndWellness == 0 &&
            this.user.interests.transportation == 0 && this.user.interests.education == 0 && this.user.interests.economicDevelopment == 0) {
            this.err_message.exists = true;
            this.err_message.message = "Please ensure that at least one interest has been selected";
        }
    };
    //toggle selection of number of children
    LandingPageComponent.prototype.toggleChildren = function (selected_option) {
        this.user.numberOfChildren = selected_option;
        this.isSelectedChildren(selected_option);
    };
    LandingPageComponent.prototype.isSelectedChildren = function (selected_option) {
        if (this.user.numberOfChildren == selected_option) {
            return "selected";
        }
        return "";
    };
    //toggle selection of education level
    LandingPageComponent.prototype.toggleEducation = function (selected_option) {
        this.user.educationLevel = selected_option;
        this.isSelectedEducation(selected_option);
    };
    LandingPageComponent.prototype.isSelectedEducation = function (selected_option) {
        if (this.user.educationLevel == selected_option) {
            return "selected";
        }
        return "";
    };
    //toggle selection of employment status
    LandingPageComponent.prototype.toggleEmployment = function (selected_option) {
        this.user.employmentStatus = selected_option;
        this.isSelectedEmployment(selected_option);
    };
    LandingPageComponent.prototype.isSelectedEmployment = function (selected_option) {
        if (this.user.employmentStatus == selected_option) {
            return "selected";
        }
        return "";
    };
    //toggle selection of age range
    LandingPageComponent.prototype.toggleAge = function (selected_option) {
        this.user.ageRange = selected_option;
        this.isSelectedAgeRange(selected_option);
    };
    LandingPageComponent.prototype.isSelectedAgeRange = function (selected_option) {
        if (this.user.ageRange == selected_option) {
            return "selected";
        }
        return "";
    };
    //toggle selection of household income
    LandingPageComponent.prototype.toggleIncome = function (selected_option) {
        this.user.householdIncomeRange = selected_option;
        this.isSelectedIncome(selected_option);
    };
    LandingPageComponent.prototype.isSelectedIncome = function (selected_option) {
        if (this.user.householdIncomeRange == selected_option) {
            return "selected";
        }
        return "";
    };
    //toggle selection of race
    LandingPageComponent.prototype.isSelectedRace = function (selected_option) {
        if (this.user.race == selected_option) {
            return "selected";
        }
        return "";
    };
    LandingPageComponent.prototype.toggleRace = function (selected_option) {
        this.user.race = selected_option;
        this.isSelectedGender(selected_option);
    };
    //toggle css class for gender selected
    LandingPageComponent.prototype.isSelectedGender = function (selected_option) {
        if (this.user.gender == selected_option) {
            return "selected";
        }
        return "";
    };
    //toggle selection for gender selected
    LandingPageComponent.prototype.toggleGender = function (selected_option) {
        this.user.gender = selected_option;
        this.isSelectedGender(selected_option);
    };
    //activate css class for an interest element that has been selected
    LandingPageComponent.prototype.isSelected = function (interest) {
        if (this.user.interests[interest] > 0) {
            return "selected";
        }
        return "";
    };
    //toggle interests when an interest tag is clicked so that only those selected are activated
    LandingPageComponent.prototype.toggleInterest = function (interest) {
        if (this.user.interests[interest] == 0) {
            this.user.interests[interest] = 1;
        }
        else {
            this.user.interests[interest] = 0;
        }
        this.isSelected(interest);
    };
    LandingPageComponent.prototype.submit = function () {
        var _this = this;
        this.createSubscriberService.subscribeUser(this.user)
            .subscribe(function (response) {
            console.log("response from createSubscriberService:");
            console.log(response);
            _this.router.navigateByUrl('/successful-user-creation/' + _this.user.state + '/' + _this.user.city);
        });
    };
    LandingPageComponent.prototype.submitInputs = function () {
        this.verifyInputs();
        if (this.err_message.exists) {
            return;
        }
        this.logVals();
        this.submit();
    };
    LandingPageComponent.prototype.ngOnInit = function () {
        this.user.city = this.route.snapshot.paramMap.get("city");
        this.user.state = this.route.snapshot.paramMap.get("state");
    };
    LandingPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-landing-page',
            template: __webpack_require__(/*! ./landing-page.component.html */ "./src/app/landing-page/landing-page.component.html"),
            styles: [__webpack_require__(/*! ./landing-page.component.css */ "./src/app/landing-page/landing-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _create_subscriber_service__WEBPACK_IMPORTED_MODULE_2__["CreateSubscriberService"]])
    ], LandingPageComponent);
    return LandingPageComponent;
}());



/***/ }),

/***/ "./src/app/submit-feedback.service.ts":
/*!********************************************!*\
  !*** ./src/app/submit-feedback.service.ts ***!
  \********************************************/
/*! exports provided: SubmitFeedbackService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubmitFeedbackService", function() { return SubmitFeedbackService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config */ "./src/app/config.ts");




var SubmitFeedbackService = /** @class */ (function () {
    function SubmitFeedbackService(http) {
        this.http = http;
        this.request_url = _config__WEBPACK_IMPORTED_MODULE_3__["default"] + 'feedback/cityFeedback';
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'content-Type': 'application/json',
            })
        };
    }
    SubmitFeedbackService.prototype.subscribeContent = function (feedback_content) {
        return this.http.post(this.request_url, feedback_content, this.httpOptions);
    };
    SubmitFeedbackService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], SubmitFeedbackService);
    return SubmitFeedbackService;
}());



/***/ }),

/***/ "./src/app/successful-content-upload/successful-content-upload.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/successful-content-upload/successful-content-upload.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1{\n    text-align: center;\n    font-family: 'Source Sans Pro', sans-serif;\n    margin-top:300px;\n}\n\n#link-holder{\n    text-align:center;\n    width:100%;\n}\n\na {\n    display: inline-block;\n    padding:10px;\n    font-size:20px;\n    text-decoration: none;\n    font-family: 'Source Sans Pro', sans-serif;\n    background-color: #49c7e3ff;\n    color: white;\n    border-radius: 10px;\n    box-shadow: 0 0 3px #ccc;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3VjY2Vzc2Z1bC1jb250ZW50LXVwbG9hZC9zdWNjZXNzZnVsLWNvbnRlbnQtdXBsb2FkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7SUFDbkIsMkNBQTJDO0lBQzNDLGlCQUFpQjtDQUNwQjs7QUFFRDtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0NBQ2Q7O0FBRUQ7SUFDSSxzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLGVBQWU7SUFDZixzQkFBc0I7SUFDdEIsMkNBQTJDO0lBQzNDLDRCQUE0QjtJQUM1QixhQUFhO0lBQ2Isb0JBQW9CO0lBQ3BCLHlCQUF5QjtDQUM1QiIsImZpbGUiOiJzcmMvYXBwL3N1Y2Nlc3NmdWwtY29udGVudC11cGxvYWQvc3VjY2Vzc2Z1bC1jb250ZW50LXVwbG9hZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDF7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtZmFtaWx5OiAnU291cmNlIFNhbnMgUHJvJywgc2Fucy1zZXJpZjtcbiAgICBtYXJnaW4tdG9wOjMwMHB4O1xufVxuXG4jbGluay1ob2xkZXJ7XG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gICAgd2lkdGg6MTAwJTtcbn1cblxuYSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBhZGRpbmc6MTBweDtcbiAgICBmb250LXNpemU6MjBweDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgZm9udC1mYW1pbHk6ICdTb3VyY2UgU2FucyBQcm8nLCBzYW5zLXNlcmlmO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM0OWM3ZTNmZjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBib3gtc2hhZG93OiAwIDAgM3B4ICNjY2M7XG59Il19 */"

/***/ }),

/***/ "./src/app/successful-content-upload/successful-content-upload.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/successful-content-upload/successful-content-upload.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>\n  Congratulations! Your content upload was successful\n</h1>\n\n<div id=\"link-holder\">\n  <a [routerLink]=\"['/dashboard',state,city]\">Back to content upload</a>\n</div>\n"

/***/ }),

/***/ "./src/app/successful-content-upload/successful-content-upload.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/successful-content-upload/successful-content-upload.component.ts ***!
  \**********************************************************************************/
/*! exports provided: SuccessfulContentUploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuccessfulContentUploadComponent", function() { return SuccessfulContentUploadComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var SuccessfulContentUploadComponent = /** @class */ (function () {
    function SuccessfulContentUploadComponent(route) {
        this.route = route;
    }
    SuccessfulContentUploadComponent.prototype.ngOnInit = function () {
        this.state = this.route.snapshot.paramMap.get("state");
        this.city = this.route.snapshot.paramMap.get("city");
    };
    SuccessfulContentUploadComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-successful-content-upload',
            template: __webpack_require__(/*! ./successful-content-upload.component.html */ "./src/app/successful-content-upload/successful-content-upload.component.html"),
            styles: [__webpack_require__(/*! ./successful-content-upload.component.css */ "./src/app/successful-content-upload/successful-content-upload.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], SuccessfulContentUploadComponent);
    return SuccessfulContentUploadComponent;
}());



/***/ }),

/***/ "./src/app/successful-feedback/successful-feedback.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/successful-feedback/successful-feedback.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1{\n    text-align: center;\n    font-family: 'Source Sans Pro', sans-serif;\n    margin-top:300px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3VjY2Vzc2Z1bC1mZWVkYmFjay9zdWNjZXNzZnVsLWZlZWRiYWNrLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7SUFDbkIsMkNBQTJDO0lBQzNDLGlCQUFpQjtDQUNwQiIsImZpbGUiOiJzcmMvYXBwL3N1Y2Nlc3NmdWwtZmVlZGJhY2svc3VjY2Vzc2Z1bC1mZWVkYmFjay5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDF7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtZmFtaWx5OiAnU291cmNlIFNhbnMgUHJvJywgc2Fucy1zZXJpZjtcbiAgICBtYXJnaW4tdG9wOjMwMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/successful-feedback/successful-feedback.component.html":
/*!************************************************************************!*\
  !*** ./src/app/successful-feedback/successful-feedback.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>\n  Submission was successful, thank you for being an engaged citizen!\n</h1>\n"

/***/ }),

/***/ "./src/app/successful-feedback/successful-feedback.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/successful-feedback/successful-feedback.component.ts ***!
  \**********************************************************************/
/*! exports provided: SuccessfulFeedbackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuccessfulFeedbackComponent", function() { return SuccessfulFeedbackComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SuccessfulFeedbackComponent = /** @class */ (function () {
    function SuccessfulFeedbackComponent() {
    }
    SuccessfulFeedbackComponent.prototype.ngOnInit = function () {
    };
    SuccessfulFeedbackComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-successful-feedback',
            template: __webpack_require__(/*! ./successful-feedback.component.html */ "./src/app/successful-feedback/successful-feedback.component.html"),
            styles: [__webpack_require__(/*! ./successful-feedback.component.css */ "./src/app/successful-feedback/successful-feedback.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SuccessfulFeedbackComponent);
    return SuccessfulFeedbackComponent;
}());



/***/ }),

/***/ "./src/app/successful-user-creation/successful-user-creation.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/successful-user-creation/successful-user-creation.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1{\n    text-align: center;\n    font-family: 'Source Sans Pro', sans-serif;\n    margin-top:300px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3VjY2Vzc2Z1bC11c2VyLWNyZWF0aW9uL3N1Y2Nlc3NmdWwtdXNlci1jcmVhdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0lBQ25CLDJDQUEyQztJQUMzQyxpQkFBaUI7Q0FDcEIiLCJmaWxlIjoic3JjL2FwcC9zdWNjZXNzZnVsLXVzZXItY3JlYXRpb24vc3VjY2Vzc2Z1bC11c2VyLWNyZWF0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMXtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1mYW1pbHk6ICdTb3VyY2UgU2FucyBQcm8nLCBzYW5zLXNlcmlmO1xuICAgIG1hcmdpbi10b3A6MzAwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/successful-user-creation/successful-user-creation.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/successful-user-creation/successful-user-creation.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>\n  Thank you for joining the Acta engagement platform for {{city}}, {{state}}\n</h1>\n"

/***/ }),

/***/ "./src/app/successful-user-creation/successful-user-creation.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/successful-user-creation/successful-user-creation.component.ts ***!
  \********************************************************************************/
/*! exports provided: SuccessfulUserCreationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuccessfulUserCreationComponent", function() { return SuccessfulUserCreationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var SuccessfulUserCreationComponent = /** @class */ (function () {
    function SuccessfulUserCreationComponent(route) {
        this.route = route;
    }
    SuccessfulUserCreationComponent.prototype.ngOnInit = function () {
        this.state = this.route.snapshot.paramMap.get("state");
        this.city = this.route.snapshot.paramMap.get("city");
    };
    SuccessfulUserCreationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-successful-user-creation',
            template: __webpack_require__(/*! ./successful-user-creation.component.html */ "./src/app/successful-user-creation/successful-user-creation.component.html"),
            styles: [__webpack_require__(/*! ./successful-user-creation.component.css */ "./src/app/successful-user-creation/successful-user-creation.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], SuccessfulUserCreationComponent);
    return SuccessfulUserCreationComponent;
}());



/***/ }),

/***/ "./src/app/town-in-news/town-in-news.component.css":
/*!*********************************************************!*\
  !*** ./src/app/town-in-news/town-in-news.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rvd24taW4tbmV3cy90b3duLWluLW5ld3MuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/town-in-news/town-in-news.component.html":
/*!**********************************************************!*\
  !*** ./src/app/town-in-news/town-in-news.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  town-in-news works!\n</p>\n"

/***/ }),

/***/ "./src/app/town-in-news/town-in-news.component.ts":
/*!********************************************************!*\
  !*** ./src/app/town-in-news/town-in-news.component.ts ***!
  \********************************************************/
/*! exports provided: TownInNewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TownInNewsComponent", function() { return TownInNewsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TownInNewsComponent = /** @class */ (function () {
    function TownInNewsComponent() {
    }
    TownInNewsComponent.prototype.ngOnInit = function () {
    };
    TownInNewsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-town-in-news',
            template: __webpack_require__(/*! ./town-in-news.component.html */ "./src/app/town-in-news/town-in-news.component.html"),
            styles: [__webpack_require__(/*! ./town-in-news.component.css */ "./src/app/town-in-news/town-in-news.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TownInNewsComponent);
    return TownInNewsComponent;
}());



/***/ }),

/***/ "./src/app/upload-city-content.service.ts":
/*!************************************************!*\
  !*** ./src/app/upload-city-content.service.ts ***!
  \************************************************/
/*! exports provided: UploadCityContentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadCityContentService", function() { return UploadCityContentService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config */ "./src/app/config.ts");




var UploadCityContentService = /** @class */ (function () {
    function UploadCityContentService(http) {
        this.http = http;
        //use pre configured domain and append 'uploadCityContent' to end for this specific request
        this.request_url = _config__WEBPACK_IMPORTED_MODULE_3__["default"] + 'cityContent/uploadCityContent';
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'content-Type': 'application/json',
            })
        };
    }
    UploadCityContentService.prototype.subscribeContent = function (city_content) {
        return this.http.post(this.request_url, city_content, this.httpOptions);
    };
    UploadCityContentService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], UploadCityContentService);
    return UploadCityContentService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/andrewmckinnon2/Documents/DemosProject/Demos2/Email-Automation/email-automation-angular/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map