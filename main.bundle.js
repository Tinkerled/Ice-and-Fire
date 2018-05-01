webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about.component.css":
/***/ (function(module, exports) {

module.exports = ".footer {\r\n    left: 0;\r\n    bottom: 0;\r\n    width: 100%;\r\n    background-color: rgb(30,30,30);\r\n    color: white;\r\n    text-align: center;\r\n }\r\n\r\n .footer .about button {\r\n\tbackground-color: rgb(30,30,30);\r\n\tcolor: rgb(220, 220, 220);;\r\n\tborder-radius: 5%;\r\n}\r\n\r\n .footer .about button:hover {\r\n\tbackground-color: rgb(0, 0, 0);\r\n}\r\n\r\n .end {\r\n\tfont-size: .7em;\r\n\tcolor: rgb(200, 200, 200);;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"footer\">\n    <div class=\"about\"><br><br>\n      <button>\n        <h3>About</h3>\n      </button>\n    </div>\n    <br><br>\n    <p>All the data from the universe of Ice And Fire you've ever wanted!</p>\n    <br><br>\n    <p class=\"end\">Copyright © 2018 - Chirag Gahlawat</p><br><br>\n</div>"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-about',
            template: __webpack_require__("./src/app/about/about.component.html"),
            styles: [__webpack_require__("./src/app/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ".image{\r\n    height: 35em; background-size: cover ; width:auto;\r\n     background-image:url('GOT.ff2167c9898fc6154848.png');  \r\n     margin: 0;\r\n     padding: 0;\r\n}\r\n\r\n.navbar{\r\n    margin-bottom:0;\r\n    background-color: rgb(192,192,192);\r\n}\r\n\r\n.container-fluid{\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\nul.navbar-nav  {\r\n    list-style-type: none;\r\n    margin: 0;\r\n    overflow: hidden;\r\n    background-color: rgb(70,70,70);\r\n}\r\n\r\nul.navbar-nav  li {\r\n    float: left;\r\n}\r\n\r\nul.navbar-nav  li a {\r\n    display: block;\r\n    color: white;\r\n    text-align: center;\r\n    padding: 15px 15px;\r\n}\r\n\r\nul.navbar-nav  li a:hover {\r\n    background-color: rgb(0,0,0);\r\n}\r\n\r\n.navbar-brand {\r\n    color: rgb(120,120,120);\r\n}\r\n\r\n.navbar-nav  input[type=text] {\r\n    float: right;\r\n    padding: 5px;\r\n    margin-top: 10px;\r\n    margin-right: 20px;\r\n    font-size: 15px;\r\n}\r\n\r\n@media screen and (max-width: 600px){ \r\n    ul.navbar-nav  li {\r\n        float: none;\r\n    }\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <nav class=\"navbar navbar-inverse\">\n    <div class=\"container-fluid\">\n      <div class=\"navbar-header\">\n        <a class=\"navbar-brand\" href=\"http://www.westeros.org/GoT/\">Ice and Fire</a>\n      </div>\n      <ul class=\"nav navbar-nav\">\n        <li><a [routerLink] = \"['/home']\">Home</a></li>\n        <li><a [routerLink] = \"['/about']\">About</a></li>\n      </ul>\n    </div>\n  </nav>\n\n  <div class=\"image\"></div>\n</div>\n\n\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__about_about_component__ = __webpack_require__("./src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__book_details_book_details_component__ = __webpack_require__("./src/app/book-details/book-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__char_details_char_details_component__ = __webpack_require__("./src/app/char-details/char-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__house_details_house_details_component__ = __webpack_require__("./src/app/house-details/house-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__got_service__ = __webpack_require__("./src/app/got.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__got_http_service__ = __webpack_require__("./src/app/got-http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_3__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_4__about_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_6__book_details_book_details_component__["a" /* BookDetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_7__char_details_char_details_component__["a" /* CharDetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_8__house_details_house_details_component__["a" /* HouseDetailsComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_11__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* RouterModule */].forRoot([
                    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_3__home_home_component__["a" /* HomeComponent */] },
                    { path: '', redirectTo: 'home', pathMatch: 'full' },
                    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_4__about_about_component__["a" /* AboutComponent */] },
                    { path: 'book/:name', component: __WEBPACK_IMPORTED_MODULE_6__book_details_book_details_component__["a" /* BookDetailsComponent */] },
                    { path: 'char/:url', component: __WEBPACK_IMPORTED_MODULE_7__char_details_char_details_component__["a" /* CharDetailsComponent */] },
                    { path: 'house/:name', component: __WEBPACK_IMPORTED_MODULE_8__house_details_house_details_component__["a" /* HouseDetailsComponent */] }
                ])
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_9__got_service__["a" /* GotService */], __WEBPACK_IMPORTED_MODULE_10__got_http_service__["a" /* GotHttpService */], __WEBPACK_IMPORTED_MODULE_11__angular_common_http__["a" /* HttpClient */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/book-details/book-details.component.css":
/***/ (function(module, exports) {

module.exports = ".container-fluid{\r\n    background-color: black;\r\n}\r\n\r\n.col-md-12{\r\n    color: white;\r\n}\r\n\r\n.card{\r\n    padding-top: 20px;\r\n    margin: auto;\r\n    margin-bottom: 50px;\r\n    width: 600px;\r\n    background-color: rgb(30,30,30);\r\n    color: rgb(250,250,250);\r\n    border-radius: 2%;\r\n}\r\n\r\n.card-text{\r\n    margin-left: 120px;\r\n    color: rgb(200, 200, 200);\r\n}\r\n\r\nbutton {\r\n    background-color: rgb(0,0,0);\r\n\tcolor: rgb(220, 220, 220);;\r\n\tborder-radius: 4px;\r\n}\r\n\r\n.footer {\r\n    left: 0;\r\n    bottom: 0;\r\n    width: 100%;\r\n    background-color: rgb(30,30,30);\r\n    color: white;\r\n    text-align: center;\r\n }\r\n\r\n.footer .about button {\r\n\tbackground-color: rgb(30,30,30);\r\n\tcolor: rgb(220, 220, 220);;\r\n\tborder-radius: 5%;\r\n}\r\n\r\n.footer .about button:hover {\r\n\tbackground-color: rgb(0, 0, 0);\r\n}\r\n\r\n.end {\r\n\tfont-size: .7em;\r\n\tcolor: rgb(200, 200, 200);;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/book-details/book-details.component.html":
/***/ (function(module, exports) {

module.exports = "<div container style=\"text-align:center\">\n  <div class=\"container-fluid\">\n  <div row *ngIf=\"currentBook\">\n    <div class=\"col-md-12 justify-content-center\">\n      <div class=\"card\">\n        <div class=\"card-body\">\n          <h4 class=\"card-title\">{{currentBook.name | uppercase}}</h4><hr><br>\n          <p class=\"card-text text-left\">\n              URL : &nbsp;&nbsp;&nbsp;&emsp;&emsp;&emsp;&emsp;&emsp;{{currentBook.url}}<br>\n              Name : &nbsp;&emsp;&emsp;&emsp;&emsp;&emsp;{{currentBook.name}}<br>\n              ISBN : &nbsp;&nbsp;&emsp;&emsp;&emsp;&emsp;&emsp;{{currentBook.isbn}}<br>\n              Authors : &nbsp;&nbsp;&emsp;&emsp;&emsp;&emsp;{{currentBook.authors[0]}}<br>\n              Number Of Pages : {{currentBook.numberOfPages}}<br>\n              Publisher : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&emsp;&emsp;{{currentBook.publisher}}<br>\n              Country : &nbsp;&emsp;&emsp;&emsp;&emsp;{{currentBook.country}}<br>\n              Media Type : &nbsp;&nbsp;&emsp;&emsp;{{currentBook.mediaType}}<br>\n              Released : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&emsp;&emsp;{{currentBook.released | date}}<br>\n              Characters : {{currentBook.characters[0]}}<br>\n          </p><br><hr>\n          <a (click)=\"goBackToPrevPage()\"><button type=\"button\" >Go Back</button></a><br><br>\n        </div>\n      </div>\n    </div>\n  </div>\n  </div>\n</div>\n\n<div class=\"footer\">\n    <div class=\"about\"><br><br>\n      <button>\n        <h1>About</h1>\n      </button>\n    </div>\n    <br><br>\n    <p>All the data from the universe of Ice And Fire you've ever wanted!</p>\n    <br><br>\n    <p class=\"end\">Copyright © 2018 - Chirag Gahlawat</p><br><br>\n</div>\n\n"

/***/ }),

/***/ "./src/app/book-details/book-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__got_service__ = __webpack_require__("./src/app/got.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BookDetailsComponent = /** @class */ (function () {
    function BookDetailsComponent(_route, router, gotService, location) {
        this._route = _route;
        this.router = router;
        this.gotService = gotService;
        this.location = location;
        console.log("constructor is called");
    }
    BookDetailsComponent.prototype.goBackToPrevPage = function () {
        this.location.back();
    };
    BookDetailsComponent.prototype.ngOnInit = function () {
        console.log("ngOnInit is called");
        // getting the book name from route
        var bookName = this._route.snapshot.paramMap.get('name');
        console.log(bookName);
        this.currentBook = this.gotService.getSingleBookInfo(bookName);
        console.log(this.currentBook);
    };
    BookDetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-book-details',
            template: __webpack_require__("./src/app/book-details/book-details.component.html"),
            styles: [__webpack_require__("./src/app/book-details/book-details.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_3__angular_common__["f" /* Location */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__got_service__["a" /* GotService */], __WEBPACK_IMPORTED_MODULE_3__angular_common__["f" /* Location */]])
    ], BookDetailsComponent);
    return BookDetailsComponent;
}());



/***/ }),

/***/ "./src/app/char-details/char-details.component.css":
/***/ (function(module, exports) {

module.exports = ".container-fluid{\r\n    background-color: black;\r\n}\r\n\r\n.col-md-12{\r\n    color: white;\r\n}\r\n\r\n.card{\r\n    padding-top: 20px;\r\n    margin: auto;\r\n    margin-bottom: 50px;\r\n    width: 600px;\r\n    background-color: rgb(30,30,30);\r\n    color: rgb(250,250,250);\r\n    border-radius: 2%;\r\n}\r\n\r\n.card-text{\r\n    margin-left: 120px;\r\n    color: rgb(200, 200, 200);\r\n}\r\n\r\nbutton {\r\n    background-color: rgb(0,0,0);\r\n\tcolor: rgb(220, 220, 220);;\r\n\tborder-radius: 4px;\r\n}\r\n\r\n.footer {\r\n    left: 0;\r\n    bottom: 0;\r\n    width: 100%;\r\n    background-color: rgb(30,30,30);\r\n    color: white;\r\n    text-align: center;\r\n }\r\n\r\n.footer .about button {\r\n\tbackground-color: rgb(30,30,30);\r\n\tcolor: rgb(220, 220, 220);;\r\n\tborder-radius: 5%;\r\n}\r\n\r\n.footer .about button:hover {\r\n\tbackground-color: rgb(0, 0, 0);\r\n}\r\n\r\n.end {\r\n\tfont-size: .7em;\r\n\tcolor: rgb(200, 200, 200);;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/char-details/char-details.component.html":
/***/ (function(module, exports) {

module.exports = "<div container style=\"text-align:center\">\n    <div class=\"container-fluid\">\n    <div row *ngIf=\"currentChar\">\n      <div class=\"col-md-12 justify-content-center\">\n        <div class=\"card\">\n          <div class=\"card-body\">\n            <h4 class=\"card-title\">{{currentChar.aliases[0] | uppercase}}</h4><hr><br>\n            <p class=\"card-text text-left\">\n                URL : {{currentChar.url}}<br>\n                Name : {{currentChar.name}}<br>\n                Gender : {{currentChar.gender}}<br>\n                Culture : {{currentChar.culture}}<br>\n                Born : {{currentChar.born}}<br>\n                Died : {{currentChar.died}}<br>\n                Aliases : <span *ngFor=\"let alias of currentChar.aliases;let first=first;let last=last\">{{alias}}{{last ? '' : ', '}}</span><br>\n                Allegiances : <span *ngFor=\"let allegiance of currentChar.allegiances;let first=first;let last=last\">{{allegiance}}{{last ? '' : ', '}}</span><br>\n                Books : <span *ngFor=\"let book of currentChar.books;let first=first;let last=last\">{{book}}{{last ? '' : ', '}}</span><br>\n                Tv Series : <span *ngFor=\"let tv of currentChar.tvSeries;let first=first;let last=last\">{{tv}}{{last ? '' : ', '}}</span><br>\n                Played By : <span *ngFor=\"let played of currentChar.playedBy;let first=first;let last=last\">{{played}}{{last ? '' : ', '}}</span><br>\n            </p><br><br><hr>\n            <a (click)=\"goBackToPrevPage()\"><button type=\"button\">Go Back</button></a><br><br>\n          </div>\n        </div>\n      </div>\n    </div>\n    </div>\n  </div>\n  \n  <div class=\"footer\">\n      <div class=\"about\"><br><br>\n        <button>\n          <h1>About</h1>\n        </button>\n      </div>\n      <br><br>\n      <p>All the data from the universe of Ice And Fire you've ever wanted!</p>\n      <br><br>\n      <p class=\"end\">Copyright © 2018 - Chirag Gahlawat</p><br><br>\n  </div>\n  \n  "

/***/ }),

/***/ "./src/app/char-details/char-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CharDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__got_service__ = __webpack_require__("./src/app/got.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CharDetailsComponent = /** @class */ (function () {
    function CharDetailsComponent(_route, router, gotService, location) {
        this._route = _route;
        this.router = router;
        this.gotService = gotService;
        this.location = location;
        console.log("constructor is called");
    }
    CharDetailsComponent.prototype.goBackToPrevPage = function () {
        this.location.back();
    };
    CharDetailsComponent.prototype.ngOnInit = function () {
        console.log("ngOnInit is called");
        // getting the book name from route
        var charUrl = this._route.snapshot.paramMap.get('url');
        console.log(charUrl);
        this.currentChar = this.gotService.getSingleCharInfo(charUrl);
        console.log(this.currentChar);
    };
    CharDetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-char-details',
            template: __webpack_require__("./src/app/char-details/char-details.component.html"),
            styles: [__webpack_require__("./src/app/char-details/char-details.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_3__angular_common__["f" /* Location */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__got_service__["a" /* GotService */], __WEBPACK_IMPORTED_MODULE_3__angular_common__["f" /* Location */]])
    ], CharDetailsComponent);
    return CharDetailsComponent;
}());



/***/ }),

/***/ "./src/app/got-http.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GotHttpService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/do.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GotHttpService = /** @class */ (function () {
    function GotHttpService(_http) {
        this._http = _http;
        this.baseUrl = 'https://anapioficeandfire.com/api';
        console.log("got-http service called");
    }
    GotHttpService.prototype.getAllBooks = function () {
        var myResponse = this._http.get(this.baseUrl + '/books');
        console.log(myResponse);
        return myResponse;
    };
    GotHttpService.prototype.getSingleBookInfo = function (currentBookName) {
    };
    GotHttpService.prototype.getAllChars = function () {
        var myResponse = this._http.get(this.baseUrl + '/characters');
        console.log(myResponse);
        return myResponse;
    };
    GotHttpService.prototype.getSingleCharInfo = function (currentCharUrl) {
    };
    GotHttpService.prototype.getAllHouses = function () {
        var myResponse = this._http.get(this.baseUrl + '/houses');
        console.log(myResponse);
        return myResponse;
    };
    GotHttpService.prototype.getSingleHouseInfo = function (currentHouseName) {
    };
    GotHttpService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], GotHttpService);
    return GotHttpService;
}());



/***/ }),

/***/ "./src/app/got.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GotService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GotService = /** @class */ (function () {
    function GotService() {
        this.allHouses = [
            {
                "url": "https://anapioficeandfire.com/api/houses/1",
                "name": "House Algood",
                "region": "The Westerlands",
                "coatOfArms": "A golden wreath, on a blue field with a gold border(Azure, a garland of laurel within a bordure or)",
                "words": "",
                "titles": [
                    ""
                ],
                "seats": [
                    ""
                ],
                "currentLord": "",
                "heir": "",
                "overlord": "https://anapioficeandfire.com/api/houses/229",
                "founded": "",
                "founder": "",
                "diedOut": "",
                "ancestralWeapons": [
                    ""
                ],
                "cadetBranches": [],
                "swornMembers": []
            },
            {
                "url": "https://anapioficeandfire.com/api/houses/2",
                "name": "House Allyrion of Godsgrace",
                "region": "Dorne",
                "coatOfArms": "Gyronny Gules and Sable, a hand couped Or",
                "words": "No Foe May Pass",
                "titles": [
                    ""
                ],
                "seats": [
                    "Godsgrace"
                ],
                "currentLord": "https://anapioficeandfire.com/api/characters/298",
                "heir": "https://anapioficeandfire.com/api/characters/1922",
                "overlord": "https://anapioficeandfire.com/api/houses/285",
                "founded": "",
                "founder": "",
                "diedOut": "",
                "ancestralWeapons": [
                    ""
                ],
                "cadetBranches": [],
                "swornMembers": [
                    "https://anapioficeandfire.com/api/characters/298",
                    "https://anapioficeandfire.com/api/characters/1129",
                    "https://anapioficeandfire.com/api/characters/1301",
                    "https://anapioficeandfire.com/api/characters/1922"
                ]
            },
            {
                "url": "https://anapioficeandfire.com/api/houses/3",
                "name": "House Amber",
                "region": "The North",
                "coatOfArms": "",
                "words": "",
                "titles": [
                    ""
                ],
                "seats": [
                    ""
                ],
                "currentLord": "",
                "heir": "",
                "overlord": "",
                "founded": "",
                "founder": "",
                "diedOut": "",
                "ancestralWeapons": [
                    ""
                ],
                "cadetBranches": [],
                "swornMembers": []
            },
            {
                "url": "https://anapioficeandfire.com/api/houses/4",
                "name": "House Ambrose",
                "region": "The Reach",
                "coatOfArms": "Or, semy of ants gules",
                "words": "Never Resting",
                "titles": [
                    ""
                ],
                "seats": [
                    ""
                ],
                "currentLord": "https://anapioficeandfire.com/api/characters/141",
                "heir": "",
                "overlord": "https://anapioficeandfire.com/api/houses/398",
                "founded": "",
                "founder": "",
                "diedOut": "",
                "ancestralWeapons": [
                    ""
                ],
                "cadetBranches": [],
                "swornMembers": [
                    "https://anapioficeandfire.com/api/characters/82",
                    "https://anapioficeandfire.com/api/characters/102",
                    "https://anapioficeandfire.com/api/characters/141",
                    "https://anapioficeandfire.com/api/characters/152",
                    "https://anapioficeandfire.com/api/characters/344"
                ]
            },
            {
                "url": "https://anapioficeandfire.com/api/houses/5",
                "name": "House Appleton of Appleton",
                "region": "The Reach",
                "coatOfArms": "Or, an apple tree eradicated proper fructed gules, quartered with argent, a gatehouse cendrée",
                "words": "",
                "titles": [
                    ""
                ],
                "seats": [
                    "Appleton"
                ],
                "currentLord": "",
                "heir": "",
                "overlord": "https://anapioficeandfire.com/api/houses/398",
                "founded": "",
                "founder": "",
                "diedOut": "",
                "ancestralWeapons": [
                    ""
                ],
                "cadetBranches": [],
                "swornMembers": []
            },
            {
                "url": "https://anapioficeandfire.com/api/houses/6",
                "name": "House Arryn of Gulltown",
                "region": "The Vale",
                "coatOfArms": "",
                "words": "",
                "titles": [
                    ""
                ],
                "seats": [
                    "Gulltown"
                ],
                "currentLord": "",
                "heir": "",
                "overlord": "https://anapioficeandfire.com/api/houses/7",
                "founded": "",
                "founder": "",
                "diedOut": "",
                "ancestralWeapons": [
                    ""
                ],
                "cadetBranches": [],
                "swornMembers": []
            },
            {
                "url": "https://anapioficeandfire.com/api/houses/7",
                "name": "House Arryn of the Eyrie",
                "region": "The Vale",
                "coatOfArms": "A sky-blue falcon soaring against a white moon, on a sky-blue field(Bleu celeste, upon a plate a falcon volant of the field)",
                "words": "As High as Honor",
                "titles": [
                    "King of Mountain and Vale (formerly)",
                    "Lord of the Eyrie",
                    "Defender of the Vale",
                    "Warden of the East"
                ],
                "seats": [
                    "The Eyrie (summer)",
                    "Gates of the Moon (winter)"
                ],
                "currentLord": "https://anapioficeandfire.com/api/characters/894",
                "heir": "https://anapioficeandfire.com/api/characters/477",
                "overlord": "https://anapioficeandfire.com/api/houses/16",
                "founded": "Coming of the Andals",
                "founder": "https://anapioficeandfire.com/api/characters/144",
                "diedOut": "",
                "ancestralWeapons": [
                    ""
                ],
                "cadetBranches": [
                    "https://anapioficeandfire.com/api/houses/6"
                ],
                "swornMembers": [
                    "https://anapioficeandfire.com/api/characters/49",
                    "https://anapioficeandfire.com/api/characters/92",
                    "https://anapioficeandfire.com/api/characters/93",
                    "https://anapioficeandfire.com/api/characters/107",
                    "https://anapioficeandfire.com/api/characters/223",
                    "https://anapioficeandfire.com/api/characters/265",
                    "https://anapioficeandfire.com/api/characters/300",
                    "https://anapioficeandfire.com/api/characters/356",
                    "https://anapioficeandfire.com/api/characters/477",
                    "https://anapioficeandfire.com/api/characters/508",
                    "https://anapioficeandfire.com/api/characters/540",
                    "https://anapioficeandfire.com/api/characters/548",
                    "https://anapioficeandfire.com/api/characters/558",
                    "https://anapioficeandfire.com/api/characters/572",
                    "https://anapioficeandfire.com/api/characters/688",
                    "https://anapioficeandfire.com/api/characters/894",
                    "https://anapioficeandfire.com/api/characters/1068",
                    "https://anapioficeandfire.com/api/characters/1193",
                    "https://anapioficeandfire.com/api/characters/1280",
                    "https://anapioficeandfire.com/api/characters/1443",
                    "https://anapioficeandfire.com/api/characters/1655",
                    "https://anapioficeandfire.com/api/characters/1693",
                    "https://anapioficeandfire.com/api/characters/1715",
                    "https://anapioficeandfire.com/api/characters/1884"
                ]
            },
            {
                "url": "https://anapioficeandfire.com/api/houses/8",
                "name": "House Ashford of Ashford",
                "region": "The Reach",
                "coatOfArms": "Tenny, a sun in splendour beneath a chevron inverted argent",
                "words": "Our Sun Shines Bright",
                "titles": [
                    "Lord of Ashford"
                ],
                "seats": [
                    "Ashford"
                ],
                "currentLord": "",
                "heir": "",
                "overlord": "https://anapioficeandfire.com/api/houses/398",
                "founded": "",
                "founder": "",
                "diedOut": "",
                "ancestralWeapons": [
                    ""
                ],
                "cadetBranches": [],
                "swornMembers": [
                    "https://anapioficeandfire.com/api/characters/121",
                    "https://anapioficeandfire.com/api/characters/641",
                    "https://anapioficeandfire.com/api/characters/895",
                    "https://anapioficeandfire.com/api/characters/1812"
                ]
            },
            {
                "url": "https://anapioficeandfire.com/api/houses/9",
                "name": "House Ashwood",
                "region": "The North",
                "coatOfArms": "",
                "words": "",
                "titles": [
                    ""
                ],
                "seats": [
                    ""
                ],
                "currentLord": "",
                "heir": "",
                "overlord": "https://anapioficeandfire.com/api/houses/34",
                "founded": "",
                "founder": "",
                "diedOut": "",
                "ancestralWeapons": [
                    ""
                ],
                "cadetBranches": [],
                "swornMembers": []
            },
            {
                "url": "https://anapioficeandfire.com/api/houses/10",
                "name": "House Baelish of Harrenhal",
                "region": "The Riverlands",
                "coatOfArms": "A field of silver mockingbirds, on a green field(Vert, semé of mockingbirds argent)",
                "words": "",
                "titles": [
                    "Lord Paramount of the Trident",
                    "Lord of Harrenhal"
                ],
                "seats": [
                    "Harrenhal"
                ],
                "currentLord": "https://anapioficeandfire.com/api/characters/823",
                "heir": "",
                "overlord": "https://anapioficeandfire.com/api/houses/16",
                "founded": "299 AC",
                "founder": "https://anapioficeandfire.com/api/characters/823",
                "diedOut": "",
                "ancestralWeapons": [
                    ""
                ],
                "cadetBranches": [],
                "swornMembers": [
                    "https://anapioficeandfire.com/api/characters/651",
                    "https://anapioficeandfire.com/api/characters/804",
                    "https://anapioficeandfire.com/api/characters/823",
                    "https://anapioficeandfire.com/api/characters/957",
                    "https://anapioficeandfire.com/api/characters/970"
                ]
            }
        ];
        this.allCharacters = [
            {
                "url": "https://anapioficeandfire.com/api/characters/1",
                "name": "",
                "gender": "Female",
                "culture": "Braavosi",
                "born": "",
                "died": "",
                "titles": [
                    ""
                ],
                "aliases": [
                    "The Daughter of the Dusk"
                ],
                "father": "",
                "mother": "",
                "spouse": "",
                "allegiances": [],
                "books": [
                    "https://anapioficeandfire.com/api/books/5"
                ],
                "povBooks": [],
                "tvSeries": [
                    ""
                ],
                "playedBy": [
                    ""
                ]
            },
            {
                "url": "https://anapioficeandfire.com/api/characters/2",
                "name": "Walder",
                "gender": "Male",
                "culture": "",
                "born": "",
                "died": "",
                "titles": [
                    ""
                ],
                "aliases": [
                    "Hodor"
                ],
                "father": "",
                "mother": "",
                "spouse": "",
                "allegiances": [
                    "https://anapioficeandfire.com/api/houses/362"
                ],
                "books": [
                    "https://anapioficeandfire.com/api/books/1",
                    "https://anapioficeandfire.com/api/books/2",
                    "https://anapioficeandfire.com/api/books/3",
                    "https://anapioficeandfire.com/api/books/5",
                    "https://anapioficeandfire.com/api/books/8"
                ],
                "povBooks": [],
                "tvSeries": [
                    "Season 1",
                    "Season 2",
                    "Season 3",
                    "Season 4",
                    "Season 6"
                ],
                "playedBy": [
                    "Kristian Nairn"
                ]
            },
            {
                "url": "https://anapioficeandfire.com/api/characters/3",
                "name": "",
                "gender": "Male",
                "culture": "",
                "born": "",
                "died": "",
                "titles": [
                    ""
                ],
                "aliases": [
                    "Lamprey"
                ],
                "father": "",
                "mother": "",
                "spouse": "",
                "allegiances": [
                    "https://anapioficeandfire.com/api/houses/15"
                ],
                "books": [
                    "https://anapioficeandfire.com/api/books/3"
                ],
                "povBooks": [],
                "tvSeries": [
                    ""
                ],
                "playedBy": [
                    ""
                ]
            },
            {
                "url": "https://anapioficeandfire.com/api/characters/4",
                "name": "",
                "gender": "Female",
                "culture": "Braavosi",
                "born": "",
                "died": "",
                "titles": [
                    ""
                ],
                "aliases": [
                    "The Merling Queen"
                ],
                "father": "",
                "mother": "",
                "spouse": "",
                "allegiances": [],
                "books": [
                    "https://anapioficeandfire.com/api/books/5",
                    "https://anapioficeandfire.com/api/books/8"
                ],
                "povBooks": [],
                "tvSeries": [
                    ""
                ],
                "playedBy": [
                    ""
                ]
            },
            {
                "url": "https://anapioficeandfire.com/api/characters/5",
                "name": "",
                "gender": "Male",
                "culture": "",
                "born": "",
                "died": "",
                "titles": [
                    ""
                ],
                "aliases": [
                    "Old Crackbones"
                ],
                "father": "",
                "mother": "",
                "spouse": "",
                "allegiances": [],
                "books": [
                    "https://anapioficeandfire.com/api/books/5"
                ],
                "povBooks": [],
                "tvSeries": [
                    ""
                ],
                "playedBy": [
                    ""
                ]
            },
            {
                "url": "https://anapioficeandfire.com/api/characters/6",
                "name": "",
                "gender": "Female",
                "culture": "Braavosi",
                "born": "",
                "died": "",
                "titles": [
                    ""
                ],
                "aliases": [
                    "The Poetess"
                ],
                "father": "",
                "mother": "",
                "spouse": "",
                "allegiances": [],
                "books": [
                    "https://anapioficeandfire.com/api/books/5"
                ],
                "povBooks": [],
                "tvSeries": [
                    ""
                ],
                "playedBy": [
                    ""
                ]
            },
            {
                "url": "https://anapioficeandfire.com/api/characters/7",
                "name": "",
                "gender": "Female",
                "culture": "",
                "born": "",
                "died": "",
                "titles": [
                    ""
                ],
                "aliases": [
                    "Porridge"
                ],
                "father": "",
                "mother": "",
                "spouse": "",
                "allegiances": [
                    "https://anapioficeandfire.com/api/houses/15"
                ],
                "books": [
                    "https://anapioficeandfire.com/api/books/3"
                ],
                "povBooks": [],
                "tvSeries": [
                    ""
                ],
                "playedBy": [
                    ""
                ]
            },
            {
                "url": "https://anapioficeandfire.com/api/characters/8",
                "name": "",
                "gender": "Male",
                "culture": "",
                "born": "",
                "died": "",
                "titles": [
                    ""
                ],
                "aliases": [
                    "Quickfinger"
                ],
                "father": "",
                "mother": "",
                "spouse": "",
                "allegiances": [
                    "https://anapioficeandfire.com/api/houses/23"
                ],
                "books": [
                    "https://anapioficeandfire.com/api/books/6"
                ],
                "povBooks": [],
                "tvSeries": [
                    ""
                ],
                "playedBy": [
                    ""
                ]
            },
            {
                "url": "https://anapioficeandfire.com/api/characters/9",
                "name": "",
                "gender": "Female",
                "culture": "",
                "born": "",
                "died": "",
                "titles": [
                    ""
                ],
                "aliases": [
                    "the Sailor's Wife"
                ],
                "father": "",
                "mother": "",
                "spouse": "",
                "allegiances": [],
                "books": [
                    "https://anapioficeandfire.com/api/books/5"
                ],
                "povBooks": [],
                "tvSeries": [
                    ""
                ],
                "playedBy": [
                    ""
                ]
            },
            {
                "url": "https://anapioficeandfire.com/api/characters/10",
                "name": "",
                "gender": "Female",
                "culture": "Braavosi",
                "born": "",
                "died": "",
                "titles": [
                    ""
                ],
                "aliases": [
                    "The Veiled Lady"
                ],
                "father": "",
                "mother": "",
                "spouse": "",
                "allegiances": [],
                "books": [
                    "https://anapioficeandfire.com/api/books/5"
                ],
                "povBooks": [],
                "tvSeries": [
                    ""
                ],
                "playedBy": [
                    ""
                ]
            }
        ];
        this.allBooks = [
            {
                "url": "https://anapioficeandfire.com/api/books/1",
                "name": "A Game of Thrones",
                "isbn": "978-0553103540",
                "authors": [
                    "George R. R. Martin"
                ],
                "numberOfPages": 694,
                "publisher": "Bantam Books",
                "country": "United States",
                "mediaType": "Hardcover",
                "released": "1996-08-01T00:00:00",
                "characters": []
            },
            {
                "url": "https://anapioficeandfire.com/api/books/2",
                "name": "A Clash of Kings",
                "isbn": "978-0553108033",
                "authors": [
                    "George R. R. Martin"
                ],
                "numberOfPages": 768,
                "publisher": "Bantam Books",
                "country": "United States",
                "mediaType": "Hardback",
                "released": "1999-02-02T00:00:00",
                "characters": []
            },
            {
                "url": "https://anapioficeandfire.com/api/books/3",
                "name": "A Storm of Swords",
                "isbn": "978-0553106633",
                "authors": [
                    "George R. R. Martin"
                ],
                "numberOfPages": 992,
                "publisher": "Bantam Books",
                "country": "United States",
                "mediaType": "Hardcover",
                "released": "2000-10-31T00:00:00",
                "characters": []
            },
            {
                "url": "https://anapioficeandfire.com/api/books/4",
                "name": "The Hedge Knight",
                "isbn": "978-0976401100",
                "authors": [
                    "George R. R. Martin"
                ],
                "numberOfPages": 164,
                "publisher": "Dabel Brothers Publishing",
                "country": "United States",
                "mediaType": "GraphicNovel",
                "released": "2005-03-09T00:00:00",
                "characters": []
            },
            {
                "url": "https://anapioficeandfire.com/api/books/5",
                "name": "A Feast for Crows",
                "isbn": "978-0553801507",
                "authors": [
                    "George R. R. Martin"
                ],
                "numberOfPages": 784,
                "publisher": "Bantam Books",
                "country": "United Status",
                "mediaType": "Hardcover",
                "released": "2005-11-08T00:00:00",
                "characters": []
            },
            {
                "url": "https://anapioficeandfire.com/api/books/6",
                "name": "The Sworn Sword",
                "isbn": "978-0785126508",
                "authors": [
                    "George R. R. Martin"
                ],
                "numberOfPages": 152,
                "publisher": "Marvel",
                "country": "United States",
                "mediaType": "Hardcover",
                "released": "2008-06-18T00:00:00",
                "characters": []
            },
            {
                "url": "https://anapioficeandfire.com/api/books/7",
                "name": "The Mystery Knight",
                "isbn": "978-0765360267",
                "authors": [
                    "George R. R. Martin"
                ],
                "numberOfPages": 416,
                "publisher": "Tor Fantasy",
                "country": "United States",
                "mediaType": "Paperback",
                "released": "2011-03-29T00:00:00",
                "characters": []
            },
            {
                "url": "https://anapioficeandfire.com/api/books/8",
                "name": "A Dance with Dragons",
                "isbn": "978-0553801477",
                "authors": [
                    "George R. R. Martin"
                ],
                "numberOfPages": 1040,
                "publisher": "Bantam Books",
                "country": "United States",
                "mediaType": "Hardcover",
                "released": "2011-07-12T00:00:00",
                "characters": []
            },
            {
                "url": "https://anapioficeandfire.com/api/books/9",
                "name": "The Princess and the Queen",
                "isbn": "978-0765332066",
                "authors": [
                    "George R. R. Martin"
                ],
                "numberOfPages": 784,
                "publisher": "Tor Books",
                "country": "United States",
                "mediaType": "Hardcover",
                "released": "2013-12-03T00:00:00",
                "characters": []
            },
            {
                "url": "https://anapioficeandfire.com/api/books/10",
                "name": "The Rogue Prince",
                "isbn": "978-0345537263",
                "authors": [
                    "George R. R. Martin"
                ],
                "numberOfPages": 832,
                "publisher": "Bantam Books",
                "country": "United States",
                "mediaType": "Hardcover",
                "released": "2014-06-17T00:00:00",
                "characters": []
            }
        ];
        console.log("service constructor was called");
    }
    GotService.prototype.getAllBooks = function () {
        return this.allBooks;
    };
    GotService.prototype.getSingleBookInfo = function (currentBookName) {
        for (var _i = 0, _a = this.allBooks; _i < _a.length; _i++) {
            var book = _a[_i];
            if (book.name == currentBookName) {
                this.currentBook = book;
            }
        }
        console.log(this.currentBook);
        return this.currentBook;
    };
    GotService.prototype.getAllChars = function () {
        return this.allCharacters;
    };
    GotService.prototype.getSingleCharInfo = function (currentCharUrl) {
        for (var _i = 0, _a = this.allCharacters; _i < _a.length; _i++) {
            var char = _a[_i];
            if (char.url == currentCharUrl) {
                this.currentChar = char;
            }
        }
        console.log(this.currentChar);
        return this.currentChar;
    };
    GotService.prototype.getAllHouses = function () {
        return this.allHouses;
    };
    GotService.prototype.getSingleHouseInfo = function (currentHouseName) {
        for (var _i = 0, _a = this.allHouses; _i < _a.length; _i++) {
            var house = _a[_i];
            if (house.name == currentHouseName) {
                this.currentHouse = house;
            }
        }
        console.log(this.currentHouse);
        return this.currentHouse;
    };
    GotService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], GotService);
    return GotService;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ".container-fluid{\r\n    color: white;\r\n    background-color: black;\r\n}\r\n\r\n.card {\r\n    margin-left: 55%;\r\n    width: 290px;\r\n    background-color: rgb(30,30,30);\r\n    color: rgb(250,250,250)\r\n}\r\n\r\n.list-group-item {\r\n    background-color:  rgb(30,30,30);  \r\n}\r\n\r\na {\r\n    color: rgb(220,220,220);\r\n}\r\n\r\na:hover {\r\n    color: white;\r\n}\r\n\r\n.footer {\r\n    left: 0;\r\n    bottom: 0;\r\n    width: 100%;\r\n    background-color: rgb(30,30,30);\r\n    color: white;\r\n    text-align: center;\r\n }\r\n\r\n.footer .about button {\r\n\tbackground-color: rgb(30,30,30);\r\n\tcolor: rgb(220, 220, 220);;\r\n\tborder-radius: 5%;\r\n}\r\n\r\n.footer .about button:hover {\r\n\tbackground-color: rgb(0, 0, 0);\r\n}\r\n\r\n.end {\r\n\tfont-size: .7em;\r\n\tcolor: rgb(200, 200, 200);;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align:center\">\n  <div class=\"container-fluid\">\n    <div class=\"row justify-content-center\">\n      <div class=\"card-deck\">\n\n        <div class=\"col-sm-3\">\n          <div class=\"card\" id=\"left\">\n            <img class=\"card-img-top\" src=\"assets/books.jpg\">\n            <div class=\"card-block\">\n              <h4 class=\"card-title\" *ngIf=\"allBooks.length>0\">BOOKS</h4>\n              <ul *ngFor=\"let book of allBooks\" class=\"list-group list-group-flush\">\n                  <li class=\"list-group-item\"><a [routerLink]=\"['/book',book.name]\" > {{book.name}} </a></li>\n                </ul>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"col-sm-3\">\n          <div class=\"card\">\n            <img class=\"card-img-top\" src=\"assets/char.jpg\">\n            <div class=\"card-block\">\n              <h4 class=\"card-title\" *ngIf=\"allCharacters.length>0\">CHARACTERS</h4>\n              <ul *ngFor=\"let char of allCharacters\" class=\"list-group list-group-flush\">\n                  <li class=\"list-group-item\"><a [routerLink]=\"['/char',char.url]\"> {{char.aliases}} </a></li>\n                </ul>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"col-sm-3\">\n          <div class=\"card\">\n            <img class=\"card-img-top\" src=\"assets/houses.jpg\">\n            <div class=\"card-block\">\n              <h4 class=\"card-title\" >HOUSES</h4>\n              <ul *ngFor=\"let house of allHouses\" class=\"list-group list-group-flush\">\n                  <li class=\"list-group-item\"><a [routerLink]=\"['/house',house.name]\"> {{house.name}} </a></li>\n                </ul>\n            </div>\n          </div>\n        </div>\n\n      </div>\n    </div>\n  </div>\n\n  <div class=\"footer\">\n      <div class=\"about\"><br><br>\n        <button>\n          <h1>About</h1>\n        </button>\n      </div>\n      <br><br>\n      <p>All the data from the universe of Ice And Fire you've ever wanted!</p>\n      <br><br>\n      <p class=\"end\">Copyright © 2018 - Chirag Gahlawat</p><br><br>\n  </div>\n \n</div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__got_http_service__ = __webpack_require__("./src/app/got-http.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(gotHttpService) {
        this.gotHttpService = gotHttpService;
        this.allBooks = [];
        console.log("Home component constructor called");
    }
    HomeComponent.prototype.ngOnDestroy = function () {
        console.log("Home component destroyed");
    };
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("Home component OnInit called");
        //this.allBooks = this.gotHttpService.getAllBooks();
        this.allBooks = this.gotHttpService.getAllBooks().subscribe(function (data) {
            console.log(data);
            _this.allBooks = data;
        }, function (error) {
            console.log("some error occured");
            console.log(error.errorMessage);
        });
        console.log(this.allBooks);
        //this.allCharacters = this.gotHttpService.getAllChars();
        this.allCharacters = this.gotHttpService.getAllChars().subscribe(function (data) {
            console.log(data);
            _this.allCharacters = data;
        }, function (error) {
            console.log("some error occured");
            console.log(error.errorMessage);
        });
        console.log(this.allCharacters);
        //this.allHouses = this.gotHttpService.getAllHouses();
        this.allHouses = this.gotHttpService.getAllHouses().subscribe(function (data) {
            console.log(data);
            _this.allHouses = data;
        }, function (error) {
            console.log("some error occured");
            console.log(error.errorMessage);
        });
        console.log(this.allHouses);
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/home/home.component.html"),
            styles: [__webpack_require__("./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__got_http_service__["a" /* GotHttpService */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/house-details/house-details.component.css":
/***/ (function(module, exports) {

module.exports = ".container-fluid{\r\n    background-color: black;\r\n}\r\n\r\n.col-md-12{\r\n    color: white;\r\n}\r\n\r\n.card{\r\n    padding-top: 20px;\r\n    margin: auto;\r\n    margin-bottom: 50px;\r\n    width: 600px;\r\n    background-color: rgb(30,30,30);\r\n    color: rgb(250,250,250);\r\n    border-radius: 2%;\r\n}\r\n\r\n.card-text{\r\n    margin-left: 120px;\r\n    color: rgb(200, 200, 200);\r\n}\r\n\r\nbutton {\r\n    background-color: rgb(0,0,0);\r\n\tcolor: rgb(220, 220, 220);;\r\n\tborder-radius: 4px;\r\n}\r\n\r\n.footer {\r\n    left: 0;\r\n    bottom: 0;\r\n    width: 100%;\r\n    background-color: rgb(30,30,30);\r\n    color: white;\r\n    text-align: center;\r\n }\r\n\r\n.footer .about button {\r\n\tbackground-color: rgb(30,30,30);\r\n\tcolor: rgb(220, 220, 220);;\r\n\tborder-radius: 5%;\r\n}\r\n\r\n.footer .about button:hover {\r\n\tbackground-color: rgb(0, 0, 0);\r\n}\r\n\r\n.end {\r\n\tfont-size: .7em;\r\n\tcolor: rgb(200, 200, 200);;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/house-details/house-details.component.html":
/***/ (function(module, exports) {

module.exports = "<div container style=\"text-align:center\">\n    <div class=\"container-fluid\">\n    <div row *ngIf=\"currentHouse\">\n      <div class=\"col-md-12 justify-content-center\">\n        <div class=\"card\">\n          <div class=\"card-body\">\n            <h4 class=\"card-title\">{{currentHouse.name | uppercase}}</h4><hr><br>\n            <p class=\"card-text  text-left\">\n                URL : {{currentHouse.url}}<br>\n                Name : {{currentHouse.name}}<br>\n                Region : {{currentHouse.region}}<br>\n                Coat of Arms : {{currentHouse.coatOfArms}}<br>\n                Words : {{currentHouse.words}}<br>\n                Titles : <span *ngFor=\"let title of currentHouse.titles;let first=first;let last=last\">{{title}}{{last ? '' : ', '}}</span><br>\n                Seats : <span *ngFor=\"let seat of currentHouse.seats;let first=first;let last=last\">{{seat}}{{last ? '' : ', '}}</span><br>\n                Current Lord : {{currentHouse.currentLord}}<br>\n                Heir : {{currentHouse.heir}}<br>\n                Overload : {{currentHouse.overload}}<br>\n                Founded : {{currentHouse.founded}}<br>\n                Founder : {{currentHouse.founder}}<br>\n                Cadet Branches : <span *ngFor=\"let cadet of currentHouse.cadetBranches;let first=first;let last=last\">{{cadet}}{{last ? '' : ', '}}</span><br>\n                Sworn Members : <span *ngFor=\"let sworn of currentHouse.swornMembers;let first=first;let last=last\">{{sworn}}{{last ? '' : ', '}}</span><br>\n            </p><br><br><hr>\n            <a (click)=\"goBackToPrevPage()\"><button type=\"button\">Go Back</button></a><br><br>\n          </div>\n        </div>\n      </div>\n    </div>\n    </div>\n  </div>\n  \n  <div class=\"footer\">\n      <div class=\"about\"><br><br>\n        <button>\n          <h1>About</h1>\n        </button>\n      </div>\n      <br><br>\n      <p>All the data from the universe of Ice And Fire you've ever wanted!</p>\n      <br><br>\n      <p class=\"end\">Copyright © 2018 - Chirag Gahlawat</p><br><br>\n  </div>\n  \n  "

/***/ }),

/***/ "./src/app/house-details/house-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HouseDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__got_service__ = __webpack_require__("./src/app/got.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HouseDetailsComponent = /** @class */ (function () {
    function HouseDetailsComponent(_route, router, gotService, location) {
        this._route = _route;
        this.router = router;
        this.gotService = gotService;
        this.location = location;
        this.allHouses = [
            {
                "url": "https://anapioficeandfire.com/api/houses/1",
                "name": "House Algood",
                "region": "The Westerlands",
                "coatOfArms": "A golden wreath, on a blue field with a gold border(Azure, a garland of laurel within a bordure or)",
                "words": "",
                "titles": [
                    ""
                ],
                "seats": [
                    ""
                ],
                "currentLord": "",
                "heir": "",
                "overlord": "https://anapioficeandfire.com/api/houses/229",
                "founded": "",
                "founder": "",
                "diedOut": "",
                "ancestralWeapons": [
                    ""
                ],
                "cadetBranches": [],
                "swornMembers": []
            },
            {
                "url": "https://anapioficeandfire.com/api/houses/2",
                "name": "House Allyrion of Godsgrace",
                "region": "Dorne",
                "coatOfArms": "Gyronny Gules and Sable, a hand couped Or",
                "words": "No Foe May Pass",
                "titles": [
                    ""
                ],
                "seats": [
                    "Godsgrace"
                ],
                "currentLord": "https://anapioficeandfire.com/api/characters/298",
                "heir": "https://anapioficeandfire.com/api/characters/1922",
                "overlord": "https://anapioficeandfire.com/api/houses/285",
                "founded": "",
                "founder": "",
                "diedOut": "",
                "ancestralWeapons": [
                    ""
                ],
                "cadetBranches": [],
                "swornMembers": [
                    "https://anapioficeandfire.com/api/characters/298",
                    "https://anapioficeandfire.com/api/characters/1129",
                    "https://anapioficeandfire.com/api/characters/1301",
                    "https://anapioficeandfire.com/api/characters/1922"
                ]
            },
            {
                "url": "https://anapioficeandfire.com/api/houses/3",
                "name": "House Amber",
                "region": "The North",
                "coatOfArms": "",
                "words": "",
                "titles": [
                    ""
                ],
                "seats": [
                    ""
                ],
                "currentLord": "",
                "heir": "",
                "overlord": "",
                "founded": "",
                "founder": "",
                "diedOut": "",
                "ancestralWeapons": [
                    ""
                ],
                "cadetBranches": [],
                "swornMembers": []
            },
            {
                "url": "https://anapioficeandfire.com/api/houses/4",
                "name": "House Ambrose",
                "region": "The Reach",
                "coatOfArms": "Or, semy of ants gules",
                "words": "Never Resting",
                "titles": [
                    ""
                ],
                "seats": [
                    ""
                ],
                "currentLord": "https://anapioficeandfire.com/api/characters/141",
                "heir": "",
                "overlord": "https://anapioficeandfire.com/api/houses/398",
                "founded": "",
                "founder": "",
                "diedOut": "",
                "ancestralWeapons": [
                    ""
                ],
                "cadetBranches": [],
                "swornMembers": [
                    "https://anapioficeandfire.com/api/characters/82",
                    "https://anapioficeandfire.com/api/characters/102",
                    "https://anapioficeandfire.com/api/characters/141",
                    "https://anapioficeandfire.com/api/characters/152",
                    "https://anapioficeandfire.com/api/characters/344"
                ]
            },
            {
                "url": "https://anapioficeandfire.com/api/houses/5",
                "name": "House Appleton of Appleton",
                "region": "The Reach",
                "coatOfArms": "Or, an apple tree eradicated proper fructed gules, quartered with argent, a gatehouse cendrée",
                "words": "",
                "titles": [
                    ""
                ],
                "seats": [
                    "Appleton"
                ],
                "currentLord": "",
                "heir": "",
                "overlord": "https://anapioficeandfire.com/api/houses/398",
                "founded": "",
                "founder": "",
                "diedOut": "",
                "ancestralWeapons": [
                    ""
                ],
                "cadetBranches": [],
                "swornMembers": []
            },
            {
                "url": "https://anapioficeandfire.com/api/houses/6",
                "name": "House Arryn of Gulltown",
                "region": "The Vale",
                "coatOfArms": "",
                "words": "",
                "titles": [
                    ""
                ],
                "seats": [
                    "Gulltown"
                ],
                "currentLord": "",
                "heir": "",
                "overlord": "https://anapioficeandfire.com/api/houses/7",
                "founded": "",
                "founder": "",
                "diedOut": "",
                "ancestralWeapons": [
                    ""
                ],
                "cadetBranches": [],
                "swornMembers": []
            },
            {
                "url": "https://anapioficeandfire.com/api/houses/7",
                "name": "House Arryn of the Eyrie",
                "region": "The Vale",
                "coatOfArms": "A sky-blue falcon soaring against a white moon, on a sky-blue field(Bleu celeste, upon a plate a falcon volant of the field)",
                "words": "As High as Honor",
                "titles": [
                    "King of Mountain and Vale (formerly)",
                    "Lord of the Eyrie",
                    "Defender of the Vale",
                    "Warden of the East"
                ],
                "seats": [
                    "The Eyrie (summer)",
                    "Gates of the Moon (winter)"
                ],
                "currentLord": "https://anapioficeandfire.com/api/characters/894",
                "heir": "https://anapioficeandfire.com/api/characters/477",
                "overlord": "https://anapioficeandfire.com/api/houses/16",
                "founded": "Coming of the Andals",
                "founder": "https://anapioficeandfire.com/api/characters/144",
                "diedOut": "",
                "ancestralWeapons": [
                    ""
                ],
                "cadetBranches": [
                    "https://anapioficeandfire.com/api/houses/6"
                ],
                "swornMembers": [
                    "https://anapioficeandfire.com/api/characters/49",
                    "https://anapioficeandfire.com/api/characters/92",
                    "https://anapioficeandfire.com/api/characters/93",
                    "https://anapioficeandfire.com/api/characters/107",
                    "https://anapioficeandfire.com/api/characters/223",
                    "https://anapioficeandfire.com/api/characters/265",
                    "https://anapioficeandfire.com/api/characters/300",
                    "https://anapioficeandfire.com/api/characters/356",
                    "https://anapioficeandfire.com/api/characters/477",
                    "https://anapioficeandfire.com/api/characters/508",
                    "https://anapioficeandfire.com/api/characters/540",
                    "https://anapioficeandfire.com/api/characters/548",
                    "https://anapioficeandfire.com/api/characters/558",
                    "https://anapioficeandfire.com/api/characters/572",
                    "https://anapioficeandfire.com/api/characters/688",
                    "https://anapioficeandfire.com/api/characters/894",
                    "https://anapioficeandfire.com/api/characters/1068",
                    "https://anapioficeandfire.com/api/characters/1193",
                    "https://anapioficeandfire.com/api/characters/1280",
                    "https://anapioficeandfire.com/api/characters/1443",
                    "https://anapioficeandfire.com/api/characters/1655",
                    "https://anapioficeandfire.com/api/characters/1693",
                    "https://anapioficeandfire.com/api/characters/1715",
                    "https://anapioficeandfire.com/api/characters/1884"
                ]
            },
            {
                "url": "https://anapioficeandfire.com/api/houses/8",
                "name": "House Ashford of Ashford",
                "region": "The Reach",
                "coatOfArms": "Tenny, a sun in splendour beneath a chevron inverted argent",
                "words": "Our Sun Shines Bright",
                "titles": [
                    "Lord of Ashford"
                ],
                "seats": [
                    "Ashford"
                ],
                "currentLord": "",
                "heir": "",
                "overlord": "https://anapioficeandfire.com/api/houses/398",
                "founded": "",
                "founder": "",
                "diedOut": "",
                "ancestralWeapons": [
                    ""
                ],
                "cadetBranches": [],
                "swornMembers": [
                    "https://anapioficeandfire.com/api/characters/121",
                    "https://anapioficeandfire.com/api/characters/641",
                    "https://anapioficeandfire.com/api/characters/895",
                    "https://anapioficeandfire.com/api/characters/1812"
                ]
            },
            {
                "url": "https://anapioficeandfire.com/api/houses/9",
                "name": "House Ashwood",
                "region": "The North",
                "coatOfArms": "",
                "words": "",
                "titles": [
                    ""
                ],
                "seats": [
                    ""
                ],
                "currentLord": "",
                "heir": "",
                "overlord": "https://anapioficeandfire.com/api/houses/34",
                "founded": "",
                "founder": "",
                "diedOut": "",
                "ancestralWeapons": [
                    ""
                ],
                "cadetBranches": [],
                "swornMembers": []
            },
            {
                "url": "https://anapioficeandfire.com/api/houses/10",
                "name": "House Baelish of Harrenhal",
                "region": "The Riverlands",
                "coatOfArms": "A field of silver mockingbirds, on a green field(Vert, semé of mockingbirds argent)",
                "words": "",
                "titles": [
                    "Lord Paramount of the Trident",
                    "Lord of Harrenhal"
                ],
                "seats": [
                    "Harrenhal"
                ],
                "currentLord": "https://anapioficeandfire.com/api/characters/823",
                "heir": "",
                "overlord": "https://anapioficeandfire.com/api/houses/16",
                "founded": "299 AC",
                "founder": "https://anapioficeandfire.com/api/characters/823",
                "diedOut": "",
                "ancestralWeapons": [
                    ""
                ],
                "cadetBranches": [],
                "swornMembers": [
                    "https://anapioficeandfire.com/api/characters/651",
                    "https://anapioficeandfire.com/api/characters/804",
                    "https://anapioficeandfire.com/api/characters/823",
                    "https://anapioficeandfire.com/api/characters/957",
                    "https://anapioficeandfire.com/api/characters/970"
                ]
            }
        ];
        console.log("constructor is called");
    }
    HouseDetailsComponent.prototype.goBackToPrevPage = function () {
        this.location.back();
    };
    HouseDetailsComponent.prototype.ngOnInit = function () {
        console.log("ngOnInit is called");
        // getting the house name from route
        var houseName = this._route.snapshot.paramMap.get('name');
        console.log(houseName);
        this.currentHouse = this.gotService.getSingleHouseInfo(houseName);
        console.log(this.currentHouse);
    };
    HouseDetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-house-details',
            template: __webpack_require__("./src/app/house-details/house-details.component.html"),
            styles: [__webpack_require__("./src/app/house-details/house-details.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_3__angular_common__["f" /* Location */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__got_service__["a" /* GotService */], __WEBPACK_IMPORTED_MODULE_3__angular_common__["f" /* Location */]])
    ], HouseDetailsComponent);
    return HouseDetailsComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map