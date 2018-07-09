(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["forms-forms-module"],{

/***/ "./node_modules/ng2-material-dropdown/ng2-material-dropdown.es5.js":
/*!*************************************************************************!*\
  !*** ./node_modules/ng2-material-dropdown/ng2-material-dropdown.es5.js ***!
  \*************************************************************************/
/*! exports provided: Ng2Dropdown, Ng2DropdownMenu, Ng2MenuItem, Ng2DropdownButton, Ng2DropdownModule, DropdownStateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ng2Dropdown", function() { return Ng2Dropdown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ng2DropdownMenu", function() { return Ng2DropdownMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ng2MenuItem", function() { return Ng2MenuItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ng2DropdownButton", function() { return Ng2DropdownButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ng2DropdownModule", function() { return Ng2DropdownModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownStateService", function() { return DropdownStateService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/esm5/common.js");


var Ng2DropdownButton = (function () {
    /**
     * @param {?} element
     */
    function Ng2DropdownButton(element) {
        this.element = element;
        this.onMenuToggled = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.showCaret = true;
    }
    /**
     * \@name toggleMenu
     * @desc emits event to toggle menu
     * @return {?}
     */
    Ng2DropdownButton.prototype.toggleMenu = function () {
        this.onMenuToggled.emit(true);
    };
    /**
     * \@name getPosition
     * @desc returns position of the button
     * @return {?}
     */
    Ng2DropdownButton.prototype.getPosition = function () {
        return this.element.nativeElement.getBoundingClientRect();
    };
    return Ng2DropdownButton;
}());
Ng2DropdownButton.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'ng2-dropdown-button',
                styles: ["\n      .ng2-dropdown-button {\n        font-family: \"Roboto\", \"Helvetica Neue\", Helvetica, Arial;\n        background: #fff;\n        padding: 0.45rem 0.25rem;\n        font-size: 14px;\n        letter-spacing: 0.08rem;\n        color: #444;\n        outline: 0;\n        cursor: pointer;\n        font-weight: 400;\n        border: none;\n        border-bottom: 1px solid #efefef;\n        text-align: left;\n        min-width: 100px;\n        width: 100%;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: row;\n                flex-direction: row;\n        max-width: 150px; }\n\n      .ng2-dropdown-button:hover {\n        color: #222; }\n\n      .ng2-dropdown-button:active,\n      .ng2-dropdown-button:focus {\n        color: #222;\n        border-bottom: 2px solid #2196F3; }\n\n      .ng2-dropdown-button__label {\n        -webkit-box-flex: 1;\n            -ms-flex: 1 1 95%;\n                flex: 1 1 95%; }\n\n      .ng2-dropdown-button__caret {\n        width: 12px;\n        height: 12px;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-flex: 1;\n            -ms-flex: 1 1 6%;\n                flex: 1 1 6%; }\n\n      :host-context(.ng2-dropdown-button--icon) .ng2-dropdown-button {\n        border: none;\n        min-width: 40px;\n        width: 40px;\n        border-radius: 100%;\n        -webkit-transition: all 0.2s;\n        transition: all 0.2s;\n        text-align: center;\n        height: 40px;\n        padding: 0.5em; }\n\n      :host-context(.ng2-dropdown-button--icon) .ng2-dropdown-button:active {\n        background: rgba(0, 0, 0, 0.2); }\n    "],
                template: "\n      <button class='ng2-dropdown-button' type=\"button\" (click)=\"toggleMenu()\" tabindex=\"0s\">\n          <span class=\"ng2-dropdown-button__label\">\n              <ng-content></ng-content>\n          </span>\n\n          <span class=\"ng2-dropdown-button__caret\" *ngIf=\"showCaret\">\n              <svg enable-background=\"new 0 0 32 32\" height=\"16px\" id=\"\u0421\u043B\u043E\u0439_1\" version=\"1.1\" viewBox=\"0 0 32 32\" width=\"16px\" xml:space=\"preserve\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"><path d=\"M24.285,11.284L16,19.571l-8.285-8.288c-0.395-0.395-1.034-0.395-1.429,0  c-0.394,0.395-0.394,1.035,0,1.43l8.999,9.002l0,0l0,0c0.394,0.395,1.034,0.395,1.428,0l8.999-9.002  c0.394-0.395,0.394-1.036,0-1.431C25.319,10.889,24.679,10.889,24.285,11.284z\" fill=\"#121313\" id=\"Expand_More\"/><g/><g/><g/><g/><g/><g/></svg>\n          </span>\n      </button>\n    "
            },] },
];
/**
 * @nocollapse
 */
Ng2DropdownButton.ctorParameters = function () { return [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
]; };
Ng2DropdownButton.propDecorators = {
    'onMenuToggled': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    'showCaret': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
};
var KEYS = {
    BACKSPACE: 9,
    PREV: 38,
    NEXT: 40,
    ENTER: 13,
    ESCAPE: 27
};
/**
 * \@name onSwitchNext
 * @param index
 * @param items
 * @param state
 */
var onSwitchNext = function (index, items, state$$1) {
    if (index < items.length - 1) {
        state$$1.select(items[index + 1], true);
    }
};
/**
 * \@name onSwitchPrev
 * @param index
 * @param items
 * @param state
 */
var onSwitchPrev = function (index, items, state$$1) {
    if (index > 0) {
        state$$1.select(items[index - 1], true);
    }
};
/**
 * \@name onBackspace
 * @param index
 * @param items
 * @param state
 */
var onBackspace = function (index, items, state$$1) {
    if (index < items.length - 1) {
        state$$1.select(items[index + 1], true);
    }
    else {
        state$$1.select(items[0], true);
    }
};
/**
 * @this {?}
 * @return {?}
 */
function onEscape() {
    this.hide();
}
/**
 * \@name onItemClicked
 * @param index
 * @param items
 * @param state
 */
var onItemClicked = function (index, items, state$$1) {
    return state$$1.selectedItem ? state$$1.selectedItem.click() : undefined;
};
var ACTIONS = (_a = {},
    _a[KEYS.BACKSPACE] = onBackspace,
    _a[KEYS.PREV] = onSwitchPrev,
    _a[KEYS.NEXT] = onSwitchNext,
    _a[KEYS.ENTER] = onItemClicked,
    _a[KEYS.ESCAPE] = onEscape,
    _a);
/**
 * @param {?} event
 * @return {?}
 */
function arrowKeysHandler(event) {
    if ([38, 40].indexOf(event.keyCode) > -1) {
        event.preventDefault();
    }
}
var Ng2DropdownState = (function () {
    function Ng2DropdownState() {
        this.onItemSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onItemClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    Object.defineProperty(Ng2DropdownState.prototype, "selectedItem", {
        /**
         * \@name selectedItem
         * @desc getter for _selectedItem
         * @return {?}
         */
        get: function () {
            return this._selectedItem;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * \@name selects a menu item and emits event
     * @param {?} item {Ng2MenuItem}
     * @param {?=} dispatchEvent {boolean}
     * @return {?}
     */
    Ng2DropdownState.prototype.select = function (item, dispatchEvent) {
        if (dispatchEvent === void 0) { dispatchEvent = true; }
        this._selectedItem = item;
        if (!dispatchEvent) {
            return;
        }
        item.focus();
        this.onItemSelected.emit(item);
    };
    /**
     * \@name unselect
     * @desc sets _selectedItem as undefined
     * @return {?}
     */
    Ng2DropdownState.prototype.unselect = function () {
        this._selectedItem = undefined;
    };
    return Ng2DropdownState;
}());
var DropdownStateService = (function () {
    function DropdownStateService() {
        this.menuState = {
            isVisible: /** @type {?} */ (false),
            /**
             * @return {?}
             */
            toString: function () {
                return this.isVisible === true ? 'visible' : 'hidden';
            }
        };
        this.dropdownState = new Ng2DropdownState();
    }
    return DropdownStateService;
}());
DropdownStateService.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
];
/**
 * @nocollapse
 */
DropdownStateService.ctorParameters = function () { return []; };
var Ng2MenuItem = (function () {
    /**
     * @param {?} state
     * @param {?} element
     * @param {?} renderer
     */
    function Ng2MenuItem(state$$1, element, renderer) {
        this.state = state$$1;
        this.element = element;
        this.renderer = renderer;
        /**
         * \@preventClose
         * @desc if true, clicking on the item won't close the dropdown
         */
        this.preventClose = false;
    }
    Object.defineProperty(Ng2MenuItem.prototype, "isSelected", {
        /**
         * \@name isSelected
         * @desc returns current selected item
         * @return {?}
         */
        get: function () {
            return this === this.state.dropdownState.selectedItem;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * \@name click
     * @desc emits select event
     * @param {?=} $event
     * @return {?}
     */
    Ng2MenuItem.prototype.select = function ($event) {
        this.state.dropdownState.select(this, true);
        if ($event) {
            $event.stopPropagation();
            $event.preventDefault();
        }
    };
    /**
     * \@name click
     * @desc emits click event
     * @return {?}
     */
    Ng2MenuItem.prototype.click = function () {
        this.state.dropdownState.onItemClicked.emit(this);
    };
    /**
     * \@name focus
     * @return {?}
     */
    Ng2MenuItem.prototype.focus = function () {
        this.renderer.invokeElementMethod(this.element.nativeElement.children[0], 'focus');
    };
    return Ng2MenuItem;
}());
Ng2MenuItem.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'ng2-menu-item',
                styles: ["\n      .ng2-menu-item {\n        font-family: \"Roboto\", \"Helvetica Neue\", Helvetica, Arial;\n        background: #fff;\n        color: rgba(0, 0, 0, 0.87);\n        cursor: pointer;\n        font-size: 0.9em;\n        text-transform: none;\n        font-weight: 400;\n        letter-spacing: 0.03em;\n        height: 48px;\n        line-height: 48px;\n        padding: 0.3em 1.25rem;\n        text-overflow: ellipsis;\n        white-space: nowrap;\n        overflow: hidden;\n        -webkit-transition: background 0.25s;\n        transition: background 0.25s; }\n\n      .ng2-menu-item--selected {\n        background: rgba(158, 158, 158, 0.2);\n        outline: 0; }\n\n      .ng2-menu-item:focus {\n        outline: 0; }\n\n      .ng2-menu-item:active {\n        background: rgba(158, 158, 158, 0.4); }\n\n      :host(ng2-menu-item) /deep/ [ng2-menu-item-icon] {\n        vertical-align: middle;\n        font-size: 28px;\n        width: 1.5em;\n        height: 30px;\n        color: rgba(0, 0, 0, 0.44); }\n    "],
                template: "\n      <div class='ng2-menu-item'\n           role=\"button\"\n           tabindex=\"0\"\n           [class.ng2-menu-item--selected]=\"isSelected\"\n           (keydown.enter)=\"click()\"\n           (click)=\"click()\"\n           (mouseover)=\"select()\">\n              <ng-content></ng-content>\n      </div>\n    "
            },] },
];
/**
 * @nocollapse
 */
Ng2MenuItem.ctorParameters = function () { return [
    { type: DropdownStateService, },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer"], },
]; };
Ng2MenuItem.propDecorators = {
    'preventClose': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'value': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
};
var Ng2DropdownMenu = (function () {
    /**
     * @param {?} state
     * @param {?} element
     * @param {?} renderer
     */
    function Ng2DropdownMenu(state$$1, element, renderer) {
        this.state = state$$1;
        this.element = element;
        this.renderer = renderer;
        /**
         * \@name width
         */
        this.width = 4;
        /**
         * \@description if set to true, the first element of the dropdown will be automatically focused
         * \@name focusFirstElement
         */
        this.focusFirstElement = true;
        /**
         * \@name appendToBody
         */
        this.appendToBody = true;
        this.listeners = {
            arrowHandler: undefined,
            handleKeypress: undefined
        };
    }
    /**
     * \@name show
     * \@shows menu and selects first item
     * @return {?}
     */
    Ng2DropdownMenu.prototype.show = function () {
        var /** @type {?} */ dc = typeof document !== 'undefined' ? document : undefined;
        var /** @type {?} */ wd = typeof window !== 'undefined' ? window : undefined;
        // update state
        this.state.menuState.isVisible = true;
        // setting handlers
        this.listeners.handleKeypress = this.renderer.listen(dc.body, 'keydown', this.handleKeypress.bind(this));
        this.listeners.arrowHandler = this.renderer.listen(wd, 'keydown', arrowKeysHandler);
    };
    /**
     * \@name hide
     * @desc hides menu
     * @return {?}
     */
    Ng2DropdownMenu.prototype.hide = function () {
        this.state.menuState.isVisible = false;
        // reset selected item state
        this.state.dropdownState.unselect();
        // call function to unlisten
        this.listeners.arrowHandler ? this.listeners.arrowHandler() : undefined;
        this.listeners.handleKeypress ? this.listeners.handleKeypress() : undefined;
    };
    /**
     * \@name updatePosition
     * @desc updates the menu position every time it is toggled
     * @param {?} position {ClientRect}
     * @return {?}
     */
    Ng2DropdownMenu.prototype.updatePosition = function (position) {
        this.position = position;
        this.ngDoCheck();
    };
    /**
     * \@name handleKeypress
     * @desc executes functions on keyPress based on the key pressed
     * @param {?} $event
     * @return {?}
     */
    Ng2DropdownMenu.prototype.handleKeypress = function ($event) {
        var /** @type {?} */ key = $event.keyCode;
        var /** @type {?} */ items = this.items.toArray();
        var /** @type {?} */ index = items.indexOf(this.state.dropdownState.selectedItem);
        if (!ACTIONS.hasOwnProperty(key)) {
            return;
        }
        ACTIONS[key].call(this, index, items, this.state.dropdownState);
    };
    /**
     * \@name getMenuElement
     * @return {?}
     */
    Ng2DropdownMenu.prototype.getMenuElement = function () {
        return this.element.nativeElement.children[0];
    };
    /**
     * \@name calcPositionOffset
     * @param {?} position
     * @return {?}
     */
    Ng2DropdownMenu.prototype.calcPositionOffset = function (position) {
        var /** @type {?} */ wd = typeof window !== 'undefined' ? window : undefined;
        var /** @type {?} */ dc = typeof document !== 'undefined' ? document : undefined;
        if (!wd || !dc || !position) {
            return;
        }
        var /** @type {?} */ element = this.getMenuElement();
        var /** @type {?} */ supportPageOffset = wd.pageXOffset !== undefined;
        var /** @type {?} */ isCSS1Compat = ((dc.compatMode || '') === 'CSS1Compat');
        var /** @type {?} */ x = supportPageOffset ? wd.pageXOffset : isCSS1Compat ?
            dc.documentElement.scrollLeft : dc.body.scrollLeft;
        var /** @type {?} */ y = supportPageOffset ? wd.pageYOffset : isCSS1Compat ?
            dc.documentElement.scrollTop : dc.body.scrollTop;
        var _a = this.applyOffset(position.top + (this.appendToBody ? y - 15 : 0) + "px", position.left + x - 5 + "px"), top = _a.top, left = _a.left;
        var /** @type {?} */ clientWidth = element.clientWidth;
        var /** @type {?} */ clientHeight = element.clientHeight;
        var /** @type {?} */ marginFromBottom = parseInt(top) + clientHeight + (this.appendToBody ? 0 : y - 15);
        var /** @type {?} */ marginFromRight = parseInt(left) + clientWidth;
        var /** @type {?} */ windowScrollHeight = wd.innerHeight + wd.scrollY;
        var /** @type {?} */ windowScrollWidth = wd.innerWidth + wd.scrollX;
        if (marginFromBottom >= windowScrollHeight) {
            top = parseInt(top.replace('px', '')) - clientHeight + "px";
        }
        if (marginFromRight >= windowScrollWidth) {
            var /** @type {?} */ marginRight = marginFromRight - windowScrollWidth + 30;
            left = parseInt(left.replace('px', '')) - marginRight + "px";
        }
        return { top: top, left: left };
    };
    /**
     * @param {?} top
     * @param {?} left
     * @return {?}
     */
    Ng2DropdownMenu.prototype.applyOffset = function (top, left) {
        if (!this.offset) {
            return { top: top, left: left };
        }
        var /** @type {?} */ offset = this.offset.split(' ');
        if (!offset[1]) {
            offset[1] = '0';
        }
        top = parseInt(top.replace('px', '')) + parseInt(offset[0]) + "px";
        left = parseInt(left.replace('px', '')) + parseInt(offset[1]) + "px";
        return { top: top, left: left };
    };
    /**
     * @return {?}
     */
    Ng2DropdownMenu.prototype.ngOnInit = function () {
        var /** @type {?} */ dc = typeof document !== 'undefined' ? document : undefined;
        if (this.appendToBody) {
            // append menu element to the body
            dc.body.appendChild(this.element.nativeElement);
        }
    };
    /**
     * @return {?}
     */
    Ng2DropdownMenu.prototype.ngDoCheck = function () {
        if (this.state.menuState.isVisible && this.position) {
            var /** @type {?} */ element = this.getMenuElement();
            var /** @type {?} */ position = this.calcPositionOffset(this.position);
            if (position) {
                this.renderer.setElementStyle(element, 'top', position.top);
                this.renderer.setElementStyle(element, 'left', position.left);
            }
            // select first item unless user disabled this option
            if (this.focusFirstElement &&
                this.items.first &&
                !this.state.dropdownState.selectedItem) {
                this.state.dropdownState.select(this.items.first, false);
            }
        }
    };
    /**
     * @return {?}
     */
    Ng2DropdownMenu.prototype.ngOnDestroy = function () {
        var /** @type {?} */ elem = this.element.nativeElement;
        elem.parentNode.removeChild(elem);
        if (this.listeners.handleKeypress) {
            this.listeners.handleKeypress();
        }
    };
    return Ng2DropdownMenu;
}());
Ng2DropdownMenu.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'ng2-dropdown-menu',
                styles: ["\n      .ng2-dropdown-menu {\n        z-index: 100;\n        overflow-y: auto;\n        -webkit-box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.3);\n                box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.3);\n        position: absolute;\n        padding: 0.5em 0;\n        background: #fff;\n        border-radius: 1px;\n        max-height: 400px;\n        width: 260px;\n        min-height: 0;\n        display: block; }\n\n      .ng2-dropdown-menu.ng2-dropdown-menu--inside-element {\n        position: fixed; }\n\n      .ng2-dropdown-menu.ng2-dropdown-menu--width--2 {\n        width: 200px; }\n\n      .ng2-dropdown-menu.ng2-dropdown-menu--width--4 {\n        width: 260px; }\n\n      .ng2-dropdown-menu.ng2-dropdown-menu--width--6 {\n        width: 320px; }\n\n      .ng2-dropdown-backdrop {\n        position: fixed;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        z-index: 1;\n        overflow: hidden; }\n\n      :host /deep/ .ng2-menu-divider {\n        height: 1px;\n        min-height: 1px;\n        max-height: 1px;\n        width: 100%;\n        display: block;\n        background: #f9f9f9; }\n    "],
                template: "\n      <!-- MENU -->\n      <div class='ng2-dropdown-menu ng2-dropdown-menu---width--{{ width }}'\n           [class.ng2-dropdown-menu--inside-element]=\"!appendToBody\"\n           [class.ng2-dropdown-menu--open]=\"state.menuState.isVisible\"\n           [@fade]=\"state.menuState.toString()\">\n              <div class=\"ng2-dropdown-menu__options-container\"\n                   [@opacity]=\"state.menuState.toString()\">\n                  <ng-content></ng-content>\n              </div>\n      </div>\n\n      <!-- BACKDROP -->\n      <div class=\"ng2-dropdown-backdrop\" *ngIf=\"state.menuState.isVisible\" (click)=\"hide()\"></div>\n    ",
                animations: [
                    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["trigger"])('fade', [
                        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["state"])('visible', Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["style"])({ display: 'block', height: '*', width: '*' })),
                        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["state"])('hidden', Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["style"])({ display: 'none', overflow: 'hidden', height: 0, width: 0 })),
                        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["transition"])('hidden => visible', [
                            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["animate"])('250ms ease-in', Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
                                Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, offset: 0 }),
                                Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, offset: 1, height: '*', width: '*' }),
                            ]))
                        ]),
                        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["transition"])('visible => hidden', [
                            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["animate"])('350ms ease-out', Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
                                Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, offset: 0 }),
                                Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, offset: 1, width: '0', height: '0' }),
                            ]))
                        ])
                    ]),
                    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["trigger"])('opacity', [
                        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["transition"])('hidden => visible', [
                            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["animate"])('450ms ease-in', Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
                                Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, offset: 0 }),
                                Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, offset: 1 }),
                            ]))
                        ]),
                        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["transition"])('visible => hidden', [
                            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["animate"])('250ms ease-out', Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
                                Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, offset: 0 }),
                                Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0.5, offset: 0.3 }),
                                Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, offset: 1 }),
                            ]))
                        ])
                    ])
                ]
            },] },
];
/**
 * @nocollapse
 */
Ng2DropdownMenu.ctorParameters = function () { return [
    { type: DropdownStateService, },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer"], },
]; };
Ng2DropdownMenu.propDecorators = {
    'width': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'focusFirstElement': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'offset': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'appendToBody': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'items': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"], args: [Ng2MenuItem,] },],
};
var Ng2Dropdown = (function () {
    /**
     * @param {?} state
     */
    function Ng2Dropdown(state$$1) {
        this.state = state$$1;
        this.dynamicUpdate = true;
        this.onItemClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onItemSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onShow = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onHide = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * \@name toggleMenu
     * @desc toggles menu visibility
     * @param {?=} position
     * @return {?}
     */
    Ng2Dropdown.prototype.toggleMenu = function (position) {
        if (position === void 0) { position = this.button.getPosition(); }
        this.state.menuState.isVisible ? this.hide() : this.show(position);
    };
    /**
     * - hides dropdown
     * \@name hide
     * @return {?}
     */
    Ng2Dropdown.prototype.hide = function () {
        this.menu.hide();
        this.onHide.emit(this);
    };
    /**
     * - shows dropdown
     * \@name show
     * @param {?=} position
     * @return {?}
     */
    Ng2Dropdown.prototype.show = function (position) {
        if (position === void 0) { position = this.button.getPosition(); }
        this.menu.show();
        // update menu position based on its button's
        this.menu.updatePosition(position);
        this.onShow.emit(this);
    };
    /**
     * \@name scrollListener
     * @return {?}
     */
    Ng2Dropdown.prototype.scrollListener = function () {
        if (this.state.menuState.isVisible && this.button && this.dynamicUpdate) {
            this.menu.updatePosition(this.button.getPosition());
        }
    };
    /**
     * @return {?}
     */
    Ng2Dropdown.prototype.ngOnInit = function () {
        var _this = this;
        this.state.dropdownState.onItemClicked.subscribe(function (item) {
            _this.onItemClicked.emit(item);
            if (item.preventClose) {
                return;
            }
            _this.hide.call(_this);
        });
        if (this.button) {
            this.button.onMenuToggled.subscribe(function () {
                _this.toggleMenu();
            });
        }
        this.state.dropdownState.onItemSelected.subscribe(function (item) { return _this.onItemSelected.emit(item); });
    };
    return Ng2Dropdown;
}());
Ng2Dropdown.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'ng2-dropdown',
                template: "\n      <div class=\"ng2-dropdown-container\">\n          <ng-content select=\"ng2-dropdown-button\"></ng-content>\n          <ng-content select=\"ng2-dropdown-menu\"></ng-content>\n      </div>\n    ",
                providers: [DropdownStateService]
            },] },
];
/**
 * @nocollapse
 */
Ng2Dropdown.ctorParameters = function () { return [
    { type: DropdownStateService, },
]; };
Ng2Dropdown.propDecorators = {
    'button': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [Ng2DropdownButton,] },],
    'menu': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [Ng2DropdownMenu,] },],
    'dynamicUpdate': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'onItemClicked': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    'onItemSelected': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    'onShow': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    'onHide': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    'scrollListener': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['window:scroll',] },],
};
var Ng2DropdownModule = (function () {
    function Ng2DropdownModule() {
    }
    return Ng2DropdownModule;
}());
Ng2DropdownModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                exports: [
                    Ng2MenuItem,
                    Ng2DropdownButton,
                    Ng2DropdownMenu,
                    Ng2Dropdown
                ],
                declarations: [
                    Ng2Dropdown,
                    Ng2MenuItem,
                    Ng2DropdownButton,
                    Ng2DropdownMenu,
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ]
            },] },
];
/**
 * @nocollapse
 */
Ng2DropdownModule.ctorParameters = function () { return []; };
/**
 * Generated bundle index. Do not edit.
 */

var _a;
//# sourceMappingURL=ng2-material-dropdown.es5.js.map


/***/ }),

/***/ "./node_modules/ng2-nouislider/src/nouislider.js":
/*!*******************************************************!*\
  !*** ./node_modules/ng2-nouislider/src/nouislider.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var noUiSlider = __webpack_require__(/*! nouislider */ "./node_modules/nouislider/distribute/nouislider.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/esm5/forms.js");
var DefaultFormatter = (function () {
    function DefaultFormatter() {
    }
    DefaultFormatter.prototype.to = function (value) {
        // formatting with http://stackoverflow.com/a/26463364/478584
        return String(parseFloat(parseFloat(String(value)).toFixed(2)));
    };
    ;
    DefaultFormatter.prototype.from = function (value) {
        return parseFloat(value);
    };
    return DefaultFormatter;
}());
exports.DefaultFormatter = DefaultFormatter;
var NouisliderComponent = (function () {
    function NouisliderComponent(el, renderer) {
        var _this = this;
        this.el = el;
        this.renderer = renderer;
        this.config = {};
        this.change = new core_1.EventEmitter(true);
        this.update = new core_1.EventEmitter(true);
        this.slide = new core_1.EventEmitter(true);
        this.set = new core_1.EventEmitter(true);
        this.start = new core_1.EventEmitter(true);
        this.end = new core_1.EventEmitter(true);
        this.onChange = Function.prototype;
        this.onTouched = Function.prototype;
        this.eventHandler = function (emitter, values, handle, unencoded) {
            var v = _this.toValues(values);
            var emitEvents = false;
            if (_this.value === undefined) {
                _this.value = v;
                return;
            }
            if (Array.isArray(v) && _this.value[handle] != v[handle]) {
                emitEvents = true;
            }
            if (!Array.isArray(v) && _this.value != v) {
                emitEvents = true;
            }
            if (emitEvents) {
                emitter.emit(v);
                _this.onChange(v);
            }
            if (Array.isArray(v)) {
                _this.value[handle] = v[handle];
            }
            else {
                _this.value = v;
            }
        };
        this.defaultKeyHandler = function (e) {
            var stepSize = _this.slider.steps();
            var index = parseInt(e.target.getAttribute('data-handle'));
            var sign = 1;
            var multiplier = 1;
            var step = 0;
            var delta = 0;
            switch (e.which) {
                case 34:// PageDown
                    multiplier = _this.config.pageSteps;
                case 40: // ArrowDown
                case 37:// ArrowLeft
                    sign = -1;
                    step = stepSize[index][0];
                    e.preventDefault();
                    break;
                case 33:// PageUp
                    multiplier = _this.config.pageSteps;
                case 38: // ArrowUp
                case 39:// ArrowRight
                    step = stepSize[index][1];
                    e.preventDefault();
                    break;
                default:
                    break;
            }
            delta = sign * multiplier * step;
            var newValue;
            if (Array.isArray(_this.value)) {
                newValue = [].concat(_this.value);
                newValue[index] = newValue[index] + delta;
            }
            else {
                newValue = _this.value + delta;
            }
            _this.slider.set(newValue);
        };
    }
    NouisliderComponent.prototype.ngOnInit = function () {
        var _this = this;
        var inputsConfig = JSON.parse(JSON.stringify({
            behaviour: this.behaviour,
            connect: this.connect,
            limit: this.limit,
            start: this.formControl !== undefined ? this.formControl.value : this.ngModel,
            step: this.step,
            pageSteps: this.pageSteps,
            keyboard: this.keyboard,
            onKeydown: this.onKeydown,
            range: this.config.range || { min: this.min, max: this.max },
            tooltips: this.tooltips,
        }));
        inputsConfig.format = this.format || this.config.format || new DefaultFormatter();
        this.slider = noUiSlider.create(this.el.nativeElement.querySelector('div'), Object.assign(this.config, inputsConfig));
        this.handles = [].slice.call(this.el.nativeElement.querySelectorAll('.noUi-handle'));
        if (this.config.keyboard) {
            if (this.config.pageSteps === undefined) {
                this.config.pageSteps = 10;
            }
            var _loop_1 = function (handle) {
                handle.setAttribute('tabindex', 0);
                handle.addEventListener('click', function () {
                    handle.focus();
                });
                if (this_1.config.onKeydown === undefined) {
                    handle.addEventListener('keydown', this_1.defaultKeyHandler);
                }
                else {
                    handle.addEventListener('keydown', this_1.config.onKeydown);
                }
            };
            var this_1 = this;
            for (var _i = 0, _a = this.handles; _i < _a.length; _i++) {
                var handle = _a[_i];
                _loop_1(handle);
            }
        }
        this.slider.on('set', function (values, handle, unencoded) {
            _this.eventHandler(_this.set, values, handle, unencoded);
        });
        this.slider.on('update', function (values, handle, unencoded) {
            _this.update.emit(_this.toValues(values));
        });
        this.slider.on('change', function (values, handle, unencoded) {
            _this.change.emit(_this.toValues(values));
        });
        this.slider.on('slide', function (values, handle, unencoded) {
            _this.eventHandler(_this.slide, values, handle, unencoded);
        });
        this.slider.on('start', function (values, handle, unencoded) {
            _this.start.emit(_this.toValues(values));
        });
        this.slider.on('end', function (values, handle, unencoded) {
            _this.end.emit(_this.toValues(values));
        });
    };
    NouisliderComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (this.slider && (changes.min || changes.max || changes.step)) {
            setTimeout(function () {
                _this.slider.updateOptions({
                    range: {
                        min: _this.min,
                        max: _this.max
                    },
                    step: _this.step
                });
            });
        }
    };
    NouisliderComponent.prototype.toValues = function (values) {
        var v = values.map(this.config.format.from);
        return (v.length == 1 ? v[0] : v);
    };
    NouisliderComponent.prototype.writeValue = function (value) {
        if (this.slider) {
            this.slider.set(value);
        }
    };
    NouisliderComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    NouisliderComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    NouisliderComponent.prototype.setDisabledState = function (isDisabled) {
        isDisabled
            ? this.renderer.setAttribute(this.el.nativeElement.childNodes[0], 'disabled', 'true')
            : this.renderer.removeAttribute(this.el.nativeElement.childNodes[0], 'disabled');
    };
    NouisliderComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'nouislider',
                    host: {
                        '[class.ng2-nouislider]': 'true'
                    },
                    template: '<div [attr.disabled]="disabled ? true : undefined"></div>',
                    styles: ["\n    :host {\n      display: block;\n      margin-top: 1rem;\n      margin-bottom: 1rem;\n    }\n  "],
                    providers: [
                        {
                            provide: forms_1.NG_VALUE_ACCESSOR,
                            useExisting: core_1.forwardRef(function () { return NouisliderComponent; }),
                            multi: true
                        }
                    ]
                },] },
    ];
    /** @nocollapse */
    NouisliderComponent.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
        { type: core_1.Renderer2, },
    ]; };
    NouisliderComponent.propDecorators = {
        'disabled': [{ type: core_1.Input },],
        'behaviour': [{ type: core_1.Input },],
        'connect': [{ type: core_1.Input },],
        'limit': [{ type: core_1.Input },],
        'min': [{ type: core_1.Input },],
        'max': [{ type: core_1.Input },],
        'step': [{ type: core_1.Input },],
        'format': [{ type: core_1.Input },],
        'pageSteps': [{ type: core_1.Input },],
        'config': [{ type: core_1.Input },],
        'ngModel': [{ type: core_1.Input },],
        'keyboard': [{ type: core_1.Input },],
        'onKeydown': [{ type: core_1.Input },],
        'formControl': [{ type: core_1.Input },],
        'tooltips': [{ type: core_1.Input },],
        'change': [{ type: core_1.Output },],
        'update': [{ type: core_1.Output },],
        'slide': [{ type: core_1.Output },],
        'set': [{ type: core_1.Output },],
        'start': [{ type: core_1.Output },],
        'end': [{ type: core_1.Output },],
    };
    return NouisliderComponent;
}());
exports.NouisliderComponent = NouisliderComponent;
var NouisliderModule = (function () {
    function NouisliderModule() {
    }
    NouisliderModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [],
                    exports: [NouisliderComponent],
                    declarations: [NouisliderComponent],
                },] },
    ];
    /** @nocollapse */
    NouisliderModule.ctorParameters = function () { return []; };
    return NouisliderModule;
}());
exports.NouisliderModule = NouisliderModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdWlzbGlkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx1Q0FBeUM7QUFDekMsc0NBV3VCO0FBQ3ZCLHdDQUl3QjtBQU94QjtJQUFBO0lBU0EsQ0FBQztJQVJDLDZCQUFFLEdBQUYsVUFBRyxLQUFhO1FBQ2QsNkRBQTZEO1FBQzdELE1BQU0sQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2xFLENBQUM7SUFBQSxDQUFDO0lBRUYsK0JBQUksR0FBSixVQUFLLEtBQWE7UUFDaEIsTUFBTSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBQ0gsdUJBQUM7QUFBRCxDQVRBLEFBU0MsSUFBQTtBQVRZLDRDQUFnQjtBQVk3QjtJQTZCRSw2QkFBb0IsRUFBYyxFQUFVLFFBQW9CO1FBQWhFLGlCQUFxRTtRQUFqRCxPQUFFLEdBQUYsRUFBRSxDQUFZO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBWTtRQWhCeEQsV0FBTSxHQUFRLEVBQUUsQ0FBQztRQU1qQixXQUFNLEdBQXNCLElBQUksbUJBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNuRCxXQUFNLEdBQXNCLElBQUksbUJBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNuRCxVQUFLLEdBQXNCLElBQUksbUJBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNsRCxRQUFHLEdBQXNCLElBQUksbUJBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNoRCxVQUFLLEdBQXNCLElBQUksbUJBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNsRCxRQUFHLEdBQXNCLElBQUksbUJBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUVoRCxhQUFRLEdBQVEsUUFBUSxDQUFDLFNBQVMsQ0FBQztRQUNuQyxjQUFTLEdBQVEsUUFBUSxDQUFDLFNBQVMsQ0FBQztRQTRHcEMsaUJBQVksR0FBRyxVQUFDLE9BQTBCLEVBQUUsTUFBZ0IsRUFBRSxNQUFjLEVBQUUsU0FBbUI7WUFDdkcsSUFBSSxDQUFDLEdBQUcsS0FBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUM5QixJQUFJLFVBQVUsR0FBRyxLQUFLLENBQUM7WUFDdkIsRUFBRSxDQUFBLENBQUMsS0FBSSxDQUFDLEtBQUssS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDO2dCQUM1QixLQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztnQkFDZixNQUFNLENBQUM7WUFDVCxDQUFDO1lBQ0QsRUFBRSxDQUFBLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3ZELFVBQVUsR0FBRyxJQUFJLENBQUM7WUFDcEIsQ0FBQztZQUNELEVBQUUsQ0FBQSxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3hDLFVBQVUsR0FBRyxJQUFJLENBQUM7WUFDcEIsQ0FBQztZQUNELEVBQUUsQ0FBQSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7Z0JBQ2QsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDaEIsS0FBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNuQixDQUFDO1lBQ0QsRUFBRSxDQUFBLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3BCLEtBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ2pDLENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDTixLQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztZQUNqQixDQUFDO1FBQ0gsQ0FBQyxDQUFBO1FBRU8sc0JBQWlCLEdBQUcsVUFBQyxDQUFnQjtZQUMzQyxJQUFJLFFBQVEsR0FBVSxLQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQzFDLElBQUksS0FBSyxHQUFHLFFBQVEsQ0FBZSxDQUFDLENBQUMsTUFBTyxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO1lBQzFFLElBQUksSUFBSSxHQUFHLENBQUMsQ0FBQztZQUNiLElBQUksVUFBVSxHQUFXLENBQUMsQ0FBQztZQUMzQixJQUFJLElBQUksR0FBRyxDQUFDLENBQUM7WUFDYixJQUFJLEtBQUssR0FBRyxDQUFDLENBQUM7WUFFZCxNQUFNLENBQUMsQ0FBRSxDQUFDLENBQUMsS0FBTSxDQUFDLENBQUMsQ0FBQztnQkFDbEIsS0FBSyxFQUFFLENBQUcsV0FBVztvQkFDbkIsVUFBVSxHQUFHLEtBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDO2dCQUNyQyxLQUFLLEVBQUUsQ0FBQyxDQUFFLFlBQVk7Z0JBQ3RCLEtBQUssRUFBRSxDQUFHLFlBQVk7b0JBQ3BCLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQztvQkFDVixJQUFJLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUMxQixDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7b0JBQ25CLEtBQUssQ0FBQztnQkFFUixLQUFLLEVBQUUsQ0FBRyxTQUFTO29CQUNqQixVQUFVLEdBQUcsS0FBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUM7Z0JBQ3JDLEtBQUssRUFBRSxDQUFDLENBQUUsVUFBVTtnQkFDcEIsS0FBSyxFQUFFLENBQUcsYUFBYTtvQkFDckIsSUFBSSxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDMUIsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO29CQUNuQixLQUFLLENBQUM7Z0JBRVI7b0JBQ0UsS0FBSyxDQUFDO1lBQ1YsQ0FBQztZQUVELEtBQUssR0FBRyxJQUFJLEdBQUcsVUFBVSxHQUFHLElBQUksQ0FBQztZQUNqQyxJQUFJLFFBQTJCLENBQUM7WUFFaEMsRUFBRSxDQUFBLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUM3QixRQUFRLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxLQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ2pDLFFBQVEsQ0FBQyxLQUFLLENBQUMsR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLEdBQUcsS0FBSyxDQUFDO1lBQzVDLENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDTixRQUFRLEdBQUcsS0FBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7WUFDaEMsQ0FBQztZQUVELEtBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzVCLENBQUMsQ0FBQTtJQTNLbUUsQ0FBQztJQUVyRSxzQ0FBUSxHQUFSO1FBQUEsaUJBK0RDO1FBOURDLElBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztZQUMzQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVM7WUFDekIsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPO1lBQ3JCLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztZQUNqQixLQUFLLEVBQUUsSUFBSSxDQUFDLFdBQVcsS0FBSyxTQUFTLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE9BQU87WUFDN0UsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO1lBQ2YsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTO1lBQ3pCLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtZQUN2QixTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVM7WUFDekIsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxJQUFJLEVBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUM7WUFDMUQsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO1NBQ3hCLENBQUMsQ0FBQyxDQUFDO1FBRUosWUFBWSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxJQUFJLElBQUksZ0JBQWdCLEVBQUUsQ0FBQztRQUVsRixJQUFJLENBQUMsTUFBTSxHQUFHLFVBQVUsQ0FBQyxNQUFNLENBQzdCLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsRUFDMUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLFlBQVksQ0FBQyxDQUN6QyxDQUFDO1FBRUYsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO1FBRXJGLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUN4QixFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDO2dCQUN2QyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7WUFDN0IsQ0FBQztvQ0FDTyxNQUFNO2dCQUNaLE1BQU0sQ0FBQyxZQUFZLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUNuQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFO29CQUMvQixNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7Z0JBQ2pCLENBQUMsQ0FBQyxDQUFDO2dCQUNILEVBQUUsQ0FBQSxDQUFDLE9BQUssTUFBTSxDQUFDLFNBQVMsS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDO29CQUN2QyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLE9BQUssaUJBQWlCLENBQUMsQ0FBQztnQkFDN0QsQ0FBQztnQkFBQyxJQUFJLENBQUMsQ0FBQztvQkFDTixNQUFNLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLE9BQUssTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUM1RCxDQUFDO1lBQ0gsQ0FBQzs7WUFWRCxHQUFHLENBQUEsQ0FBZSxVQUFZLEVBQVosS0FBQSxJQUFJLENBQUMsT0FBTyxFQUFaLGNBQVksRUFBWixJQUFZO2dCQUExQixJQUFJLE1BQU0sU0FBQTt3QkFBTixNQUFNO2FBVWI7UUFDSCxDQUFDO1FBRUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLFVBQUMsTUFBZ0IsRUFBRSxNQUFjLEVBQUUsU0FBbUI7WUFDMUUsS0FBSSxDQUFDLFlBQVksQ0FBQyxLQUFJLENBQUMsR0FBRyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFDekQsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsVUFBQyxNQUFnQixFQUFFLE1BQWMsRUFBRSxTQUFtQjtZQUM3RSxLQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDMUMsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsVUFBQyxNQUFnQixFQUFFLE1BQWMsRUFBRSxTQUFtQjtZQUM3RSxLQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDMUMsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsVUFBQyxNQUFnQixFQUFFLE1BQWMsRUFBRSxTQUFtQjtZQUM1RSxLQUFJLENBQUMsWUFBWSxDQUFDLEtBQUksQ0FBQyxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxTQUFTLENBQUMsQ0FBQztRQUMzRCxDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxVQUFDLE1BQWdCLEVBQUUsTUFBYyxFQUFFLFNBQW1CO1lBQzVFLEtBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUN6QyxDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxVQUFDLE1BQWdCLEVBQUUsTUFBYyxFQUFFLFNBQW1CO1lBQzFFLEtBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUN2QyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCx5Q0FBVyxHQUFYLFVBQVksT0FBWTtRQUF4QixpQkFZQztRQVhDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxJQUFJLE9BQU8sQ0FBQyxHQUFHLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNoRSxVQUFVLENBQUM7Z0JBQ1QsS0FBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUM7b0JBQ3hCLEtBQUssRUFBRTt3QkFDTCxHQUFHLEVBQUUsS0FBSSxDQUFDLEdBQUc7d0JBQ2IsR0FBRyxFQUFFLEtBQUksQ0FBQyxHQUFHO3FCQUNkO29CQUNELElBQUksRUFBRSxLQUFJLENBQUMsSUFBSTtpQkFDaEIsQ0FBQyxDQUFDO1lBQ0wsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDO0lBQ0gsQ0FBQztJQUVELHNDQUFRLEdBQVIsVUFBUyxNQUFnQjtRQUN2QixJQUFJLENBQUMsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzVDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBRUQsd0NBQVUsR0FBVixVQUFXLEtBQVU7UUFDbkIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDaEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDekIsQ0FBQztJQUNILENBQUM7SUFFRCw4Q0FBZ0IsR0FBaEIsVUFBaUIsRUFBd0I7UUFDdkMsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVELCtDQUFpQixHQUFqQixVQUFrQixFQUFZO1FBQzVCLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFFRCw4Q0FBZ0IsR0FBaEIsVUFBaUIsVUFBbUI7UUFDbEMsVUFBVTtjQUNOLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxDQUFDO2NBQ25GLElBQUksQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBRSxVQUFVLENBQUMsQ0FBQztJQUNyRixDQUFDO0lBb0VJLDhCQUFVLEdBQTBCO1FBQzNDLEVBQUUsSUFBSSxFQUFFLGdCQUFTLEVBQUUsSUFBSSxFQUFFLENBQUM7b0JBQ3hCLFFBQVEsRUFBRSxZQUFZO29CQUN0QixJQUFJLEVBQUU7d0JBQ0osd0JBQXdCLEVBQUUsTUFBTTtxQkFDakM7b0JBQ0QsUUFBUSxFQUFFLDJEQUEyRDtvQkFDckUsTUFBTSxFQUFFLENBQUMsc0dBTVIsQ0FBQztvQkFDRixTQUFTLEVBQUU7d0JBQ1Q7NEJBQ0UsT0FBTyxFQUFFLHlCQUFpQjs0QkFDMUIsV0FBVyxFQUFFLGlCQUFVLENBQUMsY0FBTSxPQUFBLG1CQUFtQixFQUFuQixDQUFtQixDQUFDOzRCQUNsRCxLQUFLLEVBQUUsSUFBSTt5QkFDWjtxQkFDRjtpQkFDRixFQUFHLEVBQUU7S0FDTCxDQUFDO0lBQ0Ysa0JBQWtCO0lBQ1gsa0NBQWMsR0FBbUUsY0FBTSxPQUFBO1FBQzlGLEVBQUMsSUFBSSxFQUFFLGlCQUFVLEdBQUc7UUFDcEIsRUFBQyxJQUFJLEVBQUUsZ0JBQVMsR0FBRztLQUNsQixFQUg2RixDQUc3RixDQUFDO0lBQ0ssa0NBQWMsR0FBMkM7UUFDaEUsVUFBVSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsWUFBSyxFQUFFLEVBQUU7UUFDOUIsV0FBVyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsWUFBSyxFQUFFLEVBQUU7UUFDL0IsU0FBUyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsWUFBSyxFQUFFLEVBQUU7UUFDN0IsT0FBTyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsWUFBSyxFQUFFLEVBQUU7UUFDM0IsS0FBSyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsWUFBSyxFQUFFLEVBQUU7UUFDekIsS0FBSyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsWUFBSyxFQUFFLEVBQUU7UUFDekIsTUFBTSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsWUFBSyxFQUFFLEVBQUU7UUFDMUIsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsWUFBSyxFQUFFLEVBQUU7UUFDNUIsV0FBVyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsWUFBSyxFQUFFLEVBQUU7UUFDL0IsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsWUFBSyxFQUFFLEVBQUU7UUFDNUIsU0FBUyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsWUFBSyxFQUFFLEVBQUU7UUFDN0IsVUFBVSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsWUFBSyxFQUFFLEVBQUU7UUFDOUIsV0FBVyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsWUFBSyxFQUFFLEVBQUU7UUFDL0IsYUFBYSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsWUFBSyxFQUFFLEVBQUU7UUFDakMsVUFBVSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsWUFBSyxFQUFFLEVBQUU7UUFDOUIsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsYUFBTSxFQUFFLEVBQUU7UUFDN0IsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsYUFBTSxFQUFFLEVBQUU7UUFDN0IsT0FBTyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsYUFBTSxFQUFFLEVBQUU7UUFDNUIsS0FBSyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsYUFBTSxFQUFFLEVBQUU7UUFDMUIsT0FBTyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsYUFBTSxFQUFFLEVBQUU7UUFDNUIsS0FBSyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsYUFBTSxFQUFFLEVBQUU7S0FDekIsQ0FBQztJQUNGLDBCQUFDO0NBNVBELEFBNFBDLElBQUE7QUE1UFksa0RBQW1CO0FBZ1FoQztJQUFBO0lBVUEsQ0FBQztJQVZzQywyQkFBVSxHQUEwQjtRQUMzRSxFQUFFLElBQUksRUFBRSxlQUFRLEVBQUUsSUFBSSxFQUFFLENBQUM7b0JBQ3ZCLE9BQU8sRUFBRSxFQUFFO29CQUNYLE9BQU8sRUFBRSxDQUFDLG1CQUFtQixDQUFDO29CQUM5QixZQUFZLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQztpQkFDcEMsRUFBRyxFQUFFO0tBQ0wsQ0FBQztJQUNGLGtCQUFrQjtJQUNYLCtCQUFjLEdBQW1FLGNBQU0sT0FBQSxFQUM3RixFQUQ2RixDQUM3RixDQUFDO0lBQ0YsdUJBQUM7Q0FWRCxBQVVDLElBQUE7QUFWWSw0Q0FBZ0IiLCJmaWxlIjoibm91aXNsaWRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBub1VpU2xpZGVyIGZyb20gJ25vdWlzbGlkZXInO1xuaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIGZvcndhcmRSZWYsXG4gIElucHV0LFxuICBPbkluaXQsXG4gIE9uQ2hhbmdlcyxcbiAgT3V0cHV0LFxuICBOZ01vZHVsZSxcbiAgUmVuZGVyZXIyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQ29udHJvbFZhbHVlQWNjZXNzb3IsXG4gIEZvcm1Db250cm9sLFxuICBOR19WQUxVRV9BQ0NFU1NPUlxufSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTm91aUZvcm1hdHRlciB7XG4gIHRvKHZhbHVlOiBudW1iZXIpOiBzdHJpbmc7XG4gIGZyb20odmFsdWU6IHN0cmluZyk6IG51bWJlcjtcbn1cblxuZXhwb3J0IGNsYXNzIERlZmF1bHRGb3JtYXR0ZXIgaW1wbGVtZW50cyBOb3VpRm9ybWF0dGVyIHtcbiAgdG8odmFsdWU6IG51bWJlcik6IHN0cmluZyB7XG4gICAgLy8gZm9ybWF0dGluZyB3aXRoIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI2NDYzMzY0LzQ3ODU4NFxuICAgIHJldHVybiBTdHJpbmcocGFyc2VGbG9hdChwYXJzZUZsb2F0KFN0cmluZyh2YWx1ZSkpLnRvRml4ZWQoMikpKTtcbiAgfTtcblxuICBmcm9tKHZhbHVlOiBzdHJpbmcpOiBudW1iZXIge1xuICAgIHJldHVybiBwYXJzZUZsb2F0KHZhbHVlKTtcbiAgfVxufVxuXG5cbmV4cG9ydCBjbGFzcyBOb3Vpc2xpZGVyQ29tcG9uZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE9uSW5pdCwgT25DaGFuZ2VzIHtcblxuICBwdWJsaWMgc2xpZGVyOiBhbnk7XG4gIHB1YmxpYyBoYW5kbGVzOiBhbnlbXTtcbiAgIHB1YmxpYyBkaXNhYmxlZDogYm9vbGVhbjsgLy8gdHNsaW50OmRpc2FibGUtbGluZVxuICAgcHVibGljIGJlaGF2aW91cjogc3RyaW5nO1xuICAgcHVibGljIGNvbm5lY3Q6IGJvb2xlYW5bXTtcbiAgIHB1YmxpYyBsaW1pdDogbnVtYmVyO1xuICAgcHVibGljIG1pbjogbnVtYmVyO1xuICAgcHVibGljIG1heDogbnVtYmVyO1xuICAgcHVibGljIHN0ZXA6IG51bWJlcjtcbiAgIHB1YmxpYyBmb3JtYXQ6IE5vdWlGb3JtYXR0ZXI7XG4gICBwdWJsaWMgcGFnZVN0ZXBzOiBudW1iZXI7XG4gICBwdWJsaWMgY29uZmlnOiBhbnkgPSB7fTtcbiAgIHB1YmxpYyBuZ01vZGVsOiBudW1iZXIgfCBudW1iZXJbXTtcbiAgIHB1YmxpYyBrZXlib2FyZDogYm9vbGVhbjtcbiAgIHB1YmxpYyBvbktleWRvd246IGFueTtcbiAgIHB1YmxpYyBmb3JtQ29udHJvbDogRm9ybUNvbnRyb2w7XG4gICBwdWJsaWMgdG9vbHRpcHM6IEFycmF5PGFueT47XG4gICBwdWJsaWMgY2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIodHJ1ZSk7XG4gICBwdWJsaWMgdXBkYXRlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIodHJ1ZSk7XG4gICBwdWJsaWMgc2xpZGU6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcih0cnVlKTtcbiAgIHB1YmxpYyBzZXQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcih0cnVlKTtcbiAgIHB1YmxpYyBzdGFydDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKHRydWUpO1xuICAgcHVibGljIGVuZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKHRydWUpO1xuICBwcml2YXRlIHZhbHVlOiBhbnk7XG4gIHByaXZhdGUgb25DaGFuZ2U6IGFueSA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcbiAgcHJpdmF0ZSBvblRvdWNoZWQ6IGFueSA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmLCBwcml2YXRlIHJlbmRlcmVyIDogUmVuZGVyZXIyKSB7IH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBsZXQgaW5wdXRzQ29uZmlnID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh7XG4gICAgICBiZWhhdmlvdXI6IHRoaXMuYmVoYXZpb3VyLFxuICAgICAgY29ubmVjdDogdGhpcy5jb25uZWN0LFxuICAgICAgbGltaXQ6IHRoaXMubGltaXQsXG4gICAgICBzdGFydDogdGhpcy5mb3JtQ29udHJvbCAhPT0gdW5kZWZpbmVkID8gdGhpcy5mb3JtQ29udHJvbC52YWx1ZSA6IHRoaXMubmdNb2RlbCxcbiAgICAgIHN0ZXA6IHRoaXMuc3RlcCxcbiAgICAgIHBhZ2VTdGVwczogdGhpcy5wYWdlU3RlcHMsXG4gICAgICBrZXlib2FyZDogdGhpcy5rZXlib2FyZCxcbiAgICAgIG9uS2V5ZG93bjogdGhpcy5vbktleWRvd24sXG4gICAgICByYW5nZTogdGhpcy5jb25maWcucmFuZ2UgfHwge21pbjogdGhpcy5taW4sIG1heDogdGhpcy5tYXh9LFxuICAgICAgdG9vbHRpcHM6IHRoaXMudG9vbHRpcHMsXG4gICAgfSkpO1xuXG4gICAgaW5wdXRzQ29uZmlnLmZvcm1hdCA9IHRoaXMuZm9ybWF0IHx8IHRoaXMuY29uZmlnLmZvcm1hdCB8fCBuZXcgRGVmYXVsdEZvcm1hdHRlcigpO1xuXG4gICAgdGhpcy5zbGlkZXIgPSBub1VpU2xpZGVyLmNyZWF0ZShcbiAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCdkaXYnKSxcbiAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5jb25maWcsIGlucHV0c0NvbmZpZylcbiAgICApO1xuXG4gICAgdGhpcy5oYW5kbGVzID0gW10uc2xpY2UuY2FsbCh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5vVWktaGFuZGxlJykpO1xuXG4gICAgaWYodGhpcy5jb25maWcua2V5Ym9hcmQpIHtcbiAgICAgIGlmKHRoaXMuY29uZmlnLnBhZ2VTdGVwcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuY29uZmlnLnBhZ2VTdGVwcyA9IDEwO1xuICAgICAgfVxuICAgICAgZm9yKGxldCBoYW5kbGUgb2YgdGhpcy5oYW5kbGVzKSB7XG4gICAgICAgIGhhbmRsZS5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgMCk7XG4gICAgICAgIGhhbmRsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICBoYW5kbGUuZm9jdXMoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmKHRoaXMuY29uZmlnLm9uS2V5ZG93biA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgaGFuZGxlLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLmRlZmF1bHRLZXlIYW5kbGVyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBoYW5kbGUuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuY29uZmlnLm9uS2V5ZG93bik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLnNsaWRlci5vbignc2V0JywgKHZhbHVlczogc3RyaW5nW10sIGhhbmRsZTogbnVtYmVyLCB1bmVuY29kZWQ6IG51bWJlcltdKSA9PiB7XG4gICAgICB0aGlzLmV2ZW50SGFuZGxlcih0aGlzLnNldCwgdmFsdWVzLCBoYW5kbGUsIHVuZW5jb2RlZCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLnNsaWRlci5vbigndXBkYXRlJywgKHZhbHVlczogc3RyaW5nW10sIGhhbmRsZTogbnVtYmVyLCB1bmVuY29kZWQ6IG51bWJlcltdKSA9PiB7XG4gICAgICB0aGlzLnVwZGF0ZS5lbWl0KHRoaXMudG9WYWx1ZXModmFsdWVzKSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLnNsaWRlci5vbignY2hhbmdlJywgKHZhbHVlczogc3RyaW5nW10sIGhhbmRsZTogbnVtYmVyLCB1bmVuY29kZWQ6IG51bWJlcltdKSA9PiB7XG4gICAgICB0aGlzLmNoYW5nZS5lbWl0KHRoaXMudG9WYWx1ZXModmFsdWVzKSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLnNsaWRlci5vbignc2xpZGUnLCAodmFsdWVzOiBzdHJpbmdbXSwgaGFuZGxlOiBudW1iZXIsIHVuZW5jb2RlZDogbnVtYmVyW10pID0+IHtcbiAgICAgIHRoaXMuZXZlbnRIYW5kbGVyKHRoaXMuc2xpZGUsIHZhbHVlcywgaGFuZGxlLCB1bmVuY29kZWQpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5zbGlkZXIub24oJ3N0YXJ0JywgKHZhbHVlczogc3RyaW5nW10sIGhhbmRsZTogbnVtYmVyLCB1bmVuY29kZWQ6IG51bWJlcltdKSA9PiB7XG4gICAgICB0aGlzLnN0YXJ0LmVtaXQodGhpcy50b1ZhbHVlcyh2YWx1ZXMpKTtcbiAgICB9KTtcblxuICAgIHRoaXMuc2xpZGVyLm9uKCdlbmQnLCAodmFsdWVzOiBzdHJpbmdbXSwgaGFuZGxlOiBudW1iZXIsIHVuZW5jb2RlZDogbnVtYmVyW10pID0+IHtcbiAgICAgIHRoaXMuZW5kLmVtaXQodGhpcy50b1ZhbHVlcyh2YWx1ZXMpKTtcbiAgICB9KTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IGFueSkge1xuICAgIGlmICh0aGlzLnNsaWRlciAmJiAoY2hhbmdlcy5taW4gfHwgY2hhbmdlcy5tYXggfHwgY2hhbmdlcy5zdGVwKSkge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuc2xpZGVyLnVwZGF0ZU9wdGlvbnMoe1xuICAgICAgICAgIHJhbmdlOiB7XG4gICAgICAgICAgICBtaW46IHRoaXMubWluLFxuICAgICAgICAgICAgbWF4OiB0aGlzLm1heFxuICAgICAgICAgIH0sXG4gICAgICAgICAgc3RlcDogdGhpcy5zdGVwXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgdG9WYWx1ZXModmFsdWVzOiBzdHJpbmdbXSk6IGFueSB8IGFueVtdIHtcbiAgICBsZXQgdiA9IHZhbHVlcy5tYXAodGhpcy5jb25maWcuZm9ybWF0LmZyb20pO1xuICAgIHJldHVybiAodi5sZW5ndGggPT0gMSA/IHZbMF0gOiB2KTtcbiAgfVxuXG4gIHdyaXRlVmFsdWUodmFsdWU6IGFueSk6IHZvaWQge1xuICAgIGlmICh0aGlzLnNsaWRlcikge1xuICAgICAgdGhpcy5zbGlkZXIuc2V0KHZhbHVlKTtcbiAgICB9XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAodmFsdWU6IGFueSkgPT4gdm9pZCkge1xuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB7fSk6IHZvaWQge1xuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XG4gIH1cblxuICBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBpc0Rpc2FibGVkXG4gICAgICA/IHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKHRoaXMuZWwubmF0aXZlRWxlbWVudC5jaGlsZE5vZGVzWzBdLCAnZGlzYWJsZWQnLCAndHJ1ZScpXG4gICAgICA6IHRoaXMucmVuZGVyZXIucmVtb3ZlQXR0cmlidXRlKHRoaXMuZWwubmF0aXZlRWxlbWVudC5jaGlsZE5vZGVzWzBdLCAnZGlzYWJsZWQnKTtcbiAgfVxuXG4gIHByaXZhdGUgZXZlbnRIYW5kbGVyID0gKGVtaXR0ZXI6IEV2ZW50RW1pdHRlcjxhbnk+LCB2YWx1ZXM6IHN0cmluZ1tdLCBoYW5kbGU6IG51bWJlciwgdW5lbmNvZGVkOiBudW1iZXJbXSkgPT4ge1xuICAgIGxldCB2ID0gdGhpcy50b1ZhbHVlcyh2YWx1ZXMpO1xuICAgIGxldCBlbWl0RXZlbnRzID0gZmFsc2U7XG4gICAgaWYodGhpcy52YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLnZhbHVlID0gdjtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYoQXJyYXkuaXNBcnJheSh2KSAmJiB0aGlzLnZhbHVlW2hhbmRsZV0gIT0gdltoYW5kbGVdKSB7XG4gICAgICBlbWl0RXZlbnRzID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYoIUFycmF5LmlzQXJyYXkodikgJiYgdGhpcy52YWx1ZSAhPSB2KSB7XG4gICAgICBlbWl0RXZlbnRzID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYoZW1pdEV2ZW50cykge1xuICAgICAgZW1pdHRlci5lbWl0KHYpO1xuICAgICAgdGhpcy5vbkNoYW5nZSh2KTtcbiAgICB9XG4gICAgaWYoQXJyYXkuaXNBcnJheSh2KSkge1xuICAgICAgdGhpcy52YWx1ZVtoYW5kbGVdID0gdltoYW5kbGVdO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnZhbHVlID0gdjtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGRlZmF1bHRLZXlIYW5kbGVyID0gKGU6IEtleWJvYXJkRXZlbnQpID0+IHtcbiAgICBsZXQgc3RlcFNpemU6IGFueVtdID0gdGhpcy5zbGlkZXIuc3RlcHMoKTtcbiAgICBsZXQgaW5kZXggPSBwYXJzZUludCgoPEhUTUxFbGVtZW50PmUudGFyZ2V0KS5nZXRBdHRyaWJ1dGUoJ2RhdGEtaGFuZGxlJykpO1xuICAgIGxldCBzaWduID0gMTtcbiAgICBsZXQgbXVsdGlwbGllcjogbnVtYmVyID0gMTtcbiAgICBsZXQgc3RlcCA9IDA7XG4gICAgbGV0IGRlbHRhID0gMDtcblxuICAgIHN3aXRjaCAoIGUud2hpY2ggKSB7XG4gICAgICBjYXNlIDM0OiAgLy8gUGFnZURvd25cbiAgICAgICAgbXVsdGlwbGllciA9IHRoaXMuY29uZmlnLnBhZ2VTdGVwcztcbiAgICAgIGNhc2UgNDA6ICAvLyBBcnJvd0Rvd25cbiAgICAgIGNhc2UgMzc6ICAvLyBBcnJvd0xlZnRcbiAgICAgICAgc2lnbiA9IC0xO1xuICAgICAgICBzdGVwID0gc3RlcFNpemVbaW5kZXhdWzBdO1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIDMzOiAgLy8gUGFnZVVwXG4gICAgICAgIG11bHRpcGxpZXIgPSB0aGlzLmNvbmZpZy5wYWdlU3RlcHM7XG4gICAgICBjYXNlIDM4OiAgLy8gQXJyb3dVcFxuICAgICAgY2FzZSAzOTogIC8vIEFycm93UmlnaHRcbiAgICAgICAgc3RlcCA9IHN0ZXBTaXplW2luZGV4XVsxXTtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBicmVhaztcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgZGVsdGEgPSBzaWduICogbXVsdGlwbGllciAqIHN0ZXA7XG4gICAgbGV0IG5ld1ZhbHVlOiBudW1iZXIgfCBudW1iZXJbXTtcblxuICAgIGlmKEFycmF5LmlzQXJyYXkodGhpcy52YWx1ZSkpIHtcbiAgICAgIG5ld1ZhbHVlID0gW10uY29uY2F0KHRoaXMudmFsdWUpO1xuICAgICAgbmV3VmFsdWVbaW5kZXhdID0gbmV3VmFsdWVbaW5kZXhdICsgZGVsdGE7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5ld1ZhbHVlID0gdGhpcy52YWx1ZSArIGRlbHRhO1xuICAgIH1cblxuICAgIHRoaXMuc2xpZGVyLnNldChuZXdWYWx1ZSk7XG4gIH1cbnN0YXRpYyBkZWNvcmF0b3JzOiBEZWNvcmF0b3JJbnZvY2F0aW9uW10gPSBbXG57IHR5cGU6IENvbXBvbmVudCwgYXJnczogW3tcbiAgc2VsZWN0b3I6ICdub3Vpc2xpZGVyJyxcbiAgaG9zdDoge1xuICAgICdbY2xhc3MubmcyLW5vdWlzbGlkZXJdJzogJ3RydWUnXG4gIH0sXG4gIHRlbXBsYXRlOiAnPGRpdiBbYXR0ci5kaXNhYmxlZF09XCJkaXNhYmxlZCA/IHRydWUgOiB1bmRlZmluZWRcIj48L2Rpdj4nLFxuICBzdHlsZXM6IFtgXG4gICAgOmhvc3Qge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICB9XG4gIGBdLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IE5vdWlzbGlkZXJDb21wb25lbnQpLFxuICAgICAgbXVsdGk6IHRydWVcbiAgICB9XG4gIF1cbn0sIF0gfSxcbl07XG4vKiogQG5vY29sbGFwc2UgKi9cbnN0YXRpYyBjdG9yUGFyYW1ldGVyczogKCkgPT4gKHt0eXBlOiBhbnksIGRlY29yYXRvcnM/OiBEZWNvcmF0b3JJbnZvY2F0aW9uW119fG51bGwpW10gPSAoKSA9PiBbXG57dHlwZTogRWxlbWVudFJlZiwgfSxcbnt0eXBlOiBSZW5kZXJlcjIsIH0sXG5dO1xuc3RhdGljIHByb3BEZWNvcmF0b3JzOiB7W2tleTogc3RyaW5nXTogRGVjb3JhdG9ySW52b2NhdGlvbltdfSA9IHtcbidkaXNhYmxlZCc6IFt7IHR5cGU6IElucHV0IH0sXSxcbidiZWhhdmlvdXInOiBbeyB0eXBlOiBJbnB1dCB9LF0sXG4nY29ubmVjdCc6IFt7IHR5cGU6IElucHV0IH0sXSxcbidsaW1pdCc6IFt7IHR5cGU6IElucHV0IH0sXSxcbidtaW4nOiBbeyB0eXBlOiBJbnB1dCB9LF0sXG4nbWF4JzogW3sgdHlwZTogSW5wdXQgfSxdLFxuJ3N0ZXAnOiBbeyB0eXBlOiBJbnB1dCB9LF0sXG4nZm9ybWF0JzogW3sgdHlwZTogSW5wdXQgfSxdLFxuJ3BhZ2VTdGVwcyc6IFt7IHR5cGU6IElucHV0IH0sXSxcbidjb25maWcnOiBbeyB0eXBlOiBJbnB1dCB9LF0sXG4nbmdNb2RlbCc6IFt7IHR5cGU6IElucHV0IH0sXSxcbidrZXlib2FyZCc6IFt7IHR5cGU6IElucHV0IH0sXSxcbidvbktleWRvd24nOiBbeyB0eXBlOiBJbnB1dCB9LF0sXG4nZm9ybUNvbnRyb2wnOiBbeyB0eXBlOiBJbnB1dCB9LF0sXG4ndG9vbHRpcHMnOiBbeyB0eXBlOiBJbnB1dCB9LF0sXG4nY2hhbmdlJzogW3sgdHlwZTogT3V0cHV0IH0sXSxcbid1cGRhdGUnOiBbeyB0eXBlOiBPdXRwdXQgfSxdLFxuJ3NsaWRlJzogW3sgdHlwZTogT3V0cHV0IH0sXSxcbidzZXQnOiBbeyB0eXBlOiBPdXRwdXQgfSxdLFxuJ3N0YXJ0JzogW3sgdHlwZTogT3V0cHV0IH0sXSxcbidlbmQnOiBbeyB0eXBlOiBPdXRwdXQgfSxdLFxufTtcbn1cblxuXG5cbmV4cG9ydCBjbGFzcyBOb3Vpc2xpZGVyTW9kdWxlIHsgc3RhdGljIGRlY29yYXRvcnM6IERlY29yYXRvckludm9jYXRpb25bXSA9IFtcbnsgdHlwZTogTmdNb2R1bGUsIGFyZ3M6IFt7XG4gIGltcG9ydHM6IFtdLFxuICBleHBvcnRzOiBbTm91aXNsaWRlckNvbXBvbmVudF0sXG4gIGRlY2xhcmF0aW9uczogW05vdWlzbGlkZXJDb21wb25lbnRdLFxufSwgXSB9LFxuXTtcbi8qKiBAbm9jb2xsYXBzZSAqL1xuc3RhdGljIGN0b3JQYXJhbWV0ZXJzOiAoKSA9PiAoe3R5cGU6IGFueSwgZGVjb3JhdG9ycz86IERlY29yYXRvckludm9jYXRpb25bXX18bnVsbClbXSA9ICgpID0+IFtcbl07XG59XG5cbmludGVyZmFjZSBEZWNvcmF0b3JJbnZvY2F0aW9uIHtcbiAgdHlwZTogRnVuY3Rpb247XG4gIGFyZ3M/OiBhbnlbXTtcbn1cbiJdfQ==

/***/ }),

/***/ "./node_modules/ngx-chips/ngx-chips.es5.js":
/*!*************************************************!*\
  !*** ./node_modules/ngx-chips/ngx-chips.es5.js ***!
  \*************************************************/
/*! exports provided: TagInputModule, TagInputDropdown, DeleteIconComponent, TagInputForm, TagRipple, TagComponent, TagInputComponent, ɵd, ɵi, ɵe, ɵc, ɵa, ɵg, ɵf, ɵb, ɵj, ɵh */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagInputModule", function() { return TagInputModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagInputDropdown", function() { return TagInputDropdown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteIconComponent", function() { return DeleteIconComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagInputForm", function() { return TagInputForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagRipple", function() { return TagRipple; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagComponent", function() { return TagComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagInputComponent", function() { return TagInputComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵd", function() { return TagInputDropdown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵi", function() { return DeleteIconComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵe", function() { return TagInputForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return animations$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return TagInputComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵg", function() { return TagRipple; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵf", function() { return TagComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return TagInputAccessor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵj", function() { return HighlightPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵh", function() { return DragProvider; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var ng2_material_dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-material-dropdown */ "./node_modules/ng2-material-dropdown/ng2-material-dropdown.es5.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var rxjs_add_observable_of__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/observable/of */ "./node_modules/rxjs/_esm5/add/observable/of.js");
/* harmony import */ var rxjs_add_operator_debounceTime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/add/operator/debounceTime */ "./node_modules/rxjs/_esm5/add/operator/debounceTime.js");
/* harmony import */ var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/add/operator/filter */ "./node_modules/rxjs/_esm5/add/operator/filter.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_first__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/add/operator/first */ "./node_modules/rxjs/_esm5/add/operator/first.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/esm5/animations.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();











var escape = function (s) { return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'); };
var HighlightPipe = (function () {
    function HighlightPipe() {
    }
    /**
     * \@name transform
     * @param {?} value {string}
     * @param {?} arg {string}
     * @return {?}
     */
    HighlightPipe.prototype.transform = function (value, arg) {
        if (!arg.trim()) {
            return value;
        }
        try {
            var /** @type {?} */ regex = new RegExp("(" + escape(arg) + ")", 'i');
            return value.replace(regex, '<b>$1</b>');
        }
        catch (e) {
            return value;
        }
    };
    return HighlightPipe;
}());
HighlightPipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{
                name: 'highlight'
            },] },
];
/**
 * @nocollapse
 */
HighlightPipe.ctorParameters = function () { return []; };
/*
** constants and default values for <tag-input>
 */
/*
** constants and default values for <tag-input>
 */ var PLACEHOLDER = '+ Tag';
var SECONDARY_PLACEHOLDER = 'Enter a new tag';
var KEYDOWN = 'keydown';
var KEYUP = 'keyup';
var MAX_ITEMS_WARNING = 'The number of items specified was greater than the property max-items.';
var ACTIONS_KEYS = {
    DELETE: 'DELETE',
    SWITCH_PREV: 'SWITCH_PREV',
    SWITCH_NEXT: 'SWITCH_NEXT',
    TAB: 'TAB'
};
var KEY_PRESS_ACTIONS = {
    8: ACTIONS_KEYS.DELETE,
    37: ACTIONS_KEYS.SWITCH_PREV,
    39: ACTIONS_KEYS.SWITCH_NEXT,
    9: ACTIONS_KEYS.TAB
};
var DRAG_AND_DROP_KEY = 'Text';
var NEXT = 'NEXT';
var PREV = 'PREV';
var DragProvider = (function () {
    function DragProvider() {
        this.state = {
            dragging: false,
            dropping: false,
            index: undefined
        };
    }
    /**
     * \@name setDraggedItem
     * @param {?} event
     * @param {?} tag
     * @return {?}
     */
    DragProvider.prototype.setDraggedItem = function (event, tag) {
        event.dataTransfer.setData(DRAG_AND_DROP_KEY, JSON.stringify(tag));
    };
    /**
     * \@name getDraggedItem
     * @param {?} event
     * @return {?}
     */
    DragProvider.prototype.getDraggedItem = function (event) {
        var /** @type {?} */ data = event.dataTransfer.getData(DRAG_AND_DROP_KEY);
        return (JSON.parse(data));
    };
    /**
     * \@name setSender
     * @param {?} sender
     * @return {?}
     */
    DragProvider.prototype.setSender = function (sender) {
        this.sender = sender;
    };
    /**
     * \@name setReceiver
     * @param {?} receiver
     * @return {?}
     */
    DragProvider.prototype.setReceiver = function (receiver) {
        this.receiver = receiver;
    };
    /**
     * \@name onTagDropped
     * @param {?} tag
     * @param {?} indexDragged
     * @param {?} indexDropped
     * @return {?}
     */
    DragProvider.prototype.onTagDropped = function (tag, indexDragged, indexDropped) {
        this.onDragEnd();
        this.sender.onRemoveRequested(tag, indexDragged);
        this.receiver.onAddingRequested(false, tag, indexDropped);
    };
    /**
     * \@name setState
     * @param {?} state
     * @return {?}
     */
    DragProvider.prototype.setState = function (state$$1) {
        this.state = Object.assign({}, this.state, state$$1);
    };
    /**
     * \@name getState
     * @param {?=} key
     * @return {?}
     */
    DragProvider.prototype.getState = function (key) {
        return key ? this.state[key] : this.state;
    };
    /**
     * \@name onDragEnd
     * @return {?}
     */
    DragProvider.prototype.onDragEnd = function () {
        this.setState({
            dragging: false,
            dropping: false,
            index: undefined
        });
    };
    return DragProvider;
}());
DragProvider.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
];
/**
 * @nocollapse
 */
DragProvider.ctorParameters = function () { return []; };
var defaults = {
    tagInput: /** @type {?} */ ({
        separatorKeys: [],
        separatorKeyCodes: [],
        maxItems: Infinity,
        placeholder: PLACEHOLDER,
        secondaryPlaceholder: SECONDARY_PLACEHOLDER,
        validators: [],
        asyncValidators: [],
        onlyFromAutocomplete: false,
        errorMessages: {},
        theme: '',
        onTextChangeDebounce: 250,
        inputId: '',
        inputClass: '',
        clearOnBlur: false,
        hideForm: false,
        addOnBlur: false,
        addOnPaste: false,
        pasteSplitPattern: ',',
        blinkIfDupe: true,
        removable: true,
        editable: false,
        allowDupes: false,
        modelAsStrings: false,
        trimTags: true,
        ripple: true,
        tabIndex: '',
        disable: false,
        dragZone: '',
        onRemoving: undefined,
        onAdding: undefined,
        displayBy: 'display',
        identifyBy: 'value',
        animationDuration: {
            enter: "250ms",
            leave: "150ms"
        }
    }),
    dropdown: /** @type {?} */ ({
        displayBy: 'display',
        identifyBy: 'value',
        appendToBody: true,
        offset: '50 0',
        focusFirstElement: false,
        showDropdownIfEmpty: false,
        minimumTextLength: 1,
        limitItemsTo: Infinity,
        keepOpen: true,
        matchingFn: matchingFn
    })
};
/**
 * \@name matchingFn
 * @this {?}
 * @param {?} value
 * @param {?} target
 * @return {?}
 */
function matchingFn(value, target) {
    var /** @type {?} */ targetValue = target[this.displayBy].toString();
    return targetValue && targetValue
        .toLowerCase()
        .indexOf(value.toLowerCase()) >= 0;
}
var OptionsProvider = (function () {
    function OptionsProvider() {
    }
    /**
     * @param {?} options
     * @return {?}
     */
    OptionsProvider.prototype.setOptions = function (options) {
        OptionsProvider.defaults.tagInput = Object.assign({}, defaults.tagInput, options.tagInput);
        OptionsProvider.defaults.dropdown = Object.assign({}, defaults.dropdown, options.dropdown);
    };
    return OptionsProvider;
}());
OptionsProvider.defaults = defaults;
/**
 * @param {?} obj
 * @return {?}
 */
function isObject(obj) {
    return obj === Object(obj);
}
var TagInputAccessor = (function () {
    function TagInputAccessor() {
        this._items = [];
        /**
         * \@name displayBy
         */
        this.displayBy = OptionsProvider.defaults.tagInput.displayBy;
        /**
         * \@name identifyBy
         */
        this.identifyBy = OptionsProvider.defaults.tagInput.identifyBy;
    }
    Object.defineProperty(TagInputAccessor.prototype, "items", {
        /**
         * @return {?}
         */
        get: function () {
            return this._items;
        },
        /**
         * @param {?} items
         * @return {?}
         */
        set: function (items) {
            this._items = items;
            this._onChangeCallback(this._items);
        },
        enumerable: true,
        configurable: true
    });
    ;
    /**
     * @return {?}
     */
    TagInputAccessor.prototype.onTouched = function () {
        this._onTouchedCallback();
    };
    /**
     * @param {?} items
     * @return {?}
     */
    TagInputAccessor.prototype.writeValue = function (items) {
        this._items = items || [];
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    TagInputAccessor.prototype.registerOnChange = function (fn) {
        this._onChangeCallback = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    TagInputAccessor.prototype.registerOnTouched = function (fn) {
        this._onTouchedCallback = fn;
    };
    /**
     * \@name getItemValue
     * @param {?} item
     * @return {?}
     */
    TagInputAccessor.prototype.getItemValue = function (item) {
        return isObject(item) ? item[this.identifyBy] : item;
    };
    /**
     * \@name getItemDisplay
     * @param {?} item
     * @return {?}
     */
    TagInputAccessor.prototype.getItemDisplay = function (item) {
        return isObject(item) ? item[this.displayBy] : item;
    };
    /**
     * \@name getItemsWithout
     * @param {?} index
     * @return {?}
     */
    TagInputAccessor.prototype.getItemsWithout = function (index) {
        return this.items.filter(function (item, position) { return position !== index; });
    };
    return TagInputAccessor;
}());
TagInputAccessor.propDecorators = {
    'displayBy': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'identifyBy': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
};
/**
 * \@name listen
 * @param {?} listenerType
 * @param {?} action
 * @param {?=} condition
 * @return {?}
 */
function listen(listenerType, action, condition) {
    if (condition === void 0) { condition = true; }
    // if the event provided does not exist, throw an error
    if (!this.listeners.hasOwnProperty(listenerType)) {
        throw new Error('The event entered may be wrong');
    }
    // if a condition is present and is false, exit early
    if (!condition) {
        return;
    }
    // fire listener
    this.listeners[listenerType].push(action);
}
var TagInputForm = (function () {
    function TagInputForm() {
        /**
         * \@name onSubmit
         */
        this.onSubmit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * \@name onBlur
         */
        this.onBlur = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * \@name onFocus
         */
        this.onFocus = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * \@name onKeyup
         */
        this.onKeyup = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * \@name onKeydown
         */
        this.onKeydown = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * \@name validators
         */
        this.validators = [];
        /**
         * \@name asyncValidators
         * @desc array of AsyncValidator that are used to validate the tag before it gets appended to the list
         */
        this.asyncValidators = [];
        /**
         * \@name tabindex
         * @desc pass through the specified tabindex to the input
         */
        this.tabindex = '';
        /**
         * \@name disabled
         */
        this.disabled = false;
        /**
         * \@name inputTextChange
         */
        this.inputTextChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * \@name inputTextValue
         */
        this.inputTextValue = '';
    }
    Object.defineProperty(TagInputForm.prototype, "inputText", {
        /**
         * \@name inputText
         * @return {?}
         */
        get: function () {
            return this.inputTextValue;
        },
        /**
         * \@name inputText
         * @param {?} text {string}
         * @return {?}
         */
        set: function (text) {
            this.inputTextValue = text;
            this.inputTextChange.emit(text);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    TagInputForm.prototype.ngOnInit = function () {
        // creating form
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            item: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: '', disabled: this.disabled }, this.validators, this.asyncValidators)
        });
    };
    Object.defineProperty(TagInputForm.prototype, "value", {
        /**
         * \@name value
         * @return {?}
         */
        get: function () {
            return this.form.get('item');
        },
        enumerable: true,
        configurable: true
    });
    /**
     * \@name isInputFocused
     * @return {?}
     */
    TagInputForm.prototype.isInputFocused = function () {
        return document.activeElement === this.input.nativeElement;
    };
    /**
     * \@name getErrorMessages
     * @param {?} messages
     * @return {?}
     */
    TagInputForm.prototype.getErrorMessages = function (messages) {
        var /** @type {?} */ value = this.value;
        return value ? Object.keys(messages)
            .filter(function (err) { return value.hasError(err); })
            .map(function (err) { return messages[err]; }) : [];
    };
    /**
     * \@name hasErrors
     * @return {?}
     */
    TagInputForm.prototype.hasErrors = function () {
        return this.form.dirty &&
            this.form.value.item &&
            this.form.invalid;
    };
    /**
     * \@name focus
     * @return {?}
     */
    TagInputForm.prototype.focus = function () {
        this.input.nativeElement.focus();
    };
    /**
     * \@name blur
     * @return {?}
     */
    TagInputForm.prototype.blur = function () {
        this.input.nativeElement.blur();
    };
    /**
     * \@name getElementPosition
     * @return {?}
     */
    TagInputForm.prototype.getElementPosition = function () {
        return this.input.nativeElement.getBoundingClientRect();
    };
    /**
     * - removes input from the component
     * \@name destroy
     * @return {?}
     */
    TagInputForm.prototype.destroy = function () {
        var /** @type {?} */ input = this.input.nativeElement;
        input.parentElement.removeChild(input);
    };
    /**
     * \@name onKeyDown
     * @param {?} $event
     * @return {?}
     */
    TagInputForm.prototype.onKeyDown = function ($event) {
        return this.onKeydown.emit($event);
    };
    /**
     * \@name submit
     * @param {?} $event
     * @return {?}
     */
    TagInputForm.prototype.submit = function ($event) {
        this.onSubmit.emit($event);
    };
    return TagInputForm;
}());
TagInputForm.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'tag-input-form',
                styles: ["\n      .dark tag:focus {\n        -webkit-box-shadow: 0 0 0 1px #323232;\n                box-shadow: 0 0 0 1px #323232; }\n\n      .ng2-tag-input.bootstrap3-info {\n        background-color: #fff;\n        display: inline-block;\n        color: #555;\n        vertical-align: middle;\n        max-width: 100%;\n        height: 42px;\n        line-height: 44px; }\n\n      .ng2-tag-input.bootstrap3-info input {\n        border: none;\n        -webkit-box-shadow: none;\n                box-shadow: none;\n        outline: none;\n        background-color: transparent;\n        padding: 0 6px;\n        margin: 0;\n        width: auto;\n        max-width: inherit; }\n\n      .ng2-tag-input.bootstrap3-info .form-control input::-moz-placeholder {\n        color: #777;\n        opacity: 1; }\n\n      .ng2-tag-input.bootstrap3-info .form-control input:-ms-input-placeholder {\n        color: #777; }\n\n      .ng2-tag-input.bootstrap3-info .form-control input::-webkit-input-placeholder {\n        color: #777; }\n\n      .ng2-tag-input.bootstrap3-info input:focus {\n        border: none;\n        -webkit-box-shadow: none;\n                box-shadow: none; }\n\n      .bootstrap3-info.ng2-tag-input.ng2-tag-input--focused {\n        -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.4);\n                box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.4);\n        border: 1px solid #ccc; }\n\n      .bootstrap3-info.ng2-tag-input.ng2-tag-input--invalid {\n        -webkit-box-shadow: inset 0 1px 1px #d9534f;\n                box-shadow: inset 0 1px 1px #d9534f; }\n\n      .ng2-tag-input {\n        display: block;\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: row;\n                flex-direction: row;\n        -ms-flex-wrap: wrap;\n            flex-wrap: wrap;\n        position: relative;\n        -webkit-transition: all 0.25s;\n        transition: all 0.25s;\n        padding: 0.25rem 0;\n        min-height: 32px;\n        cursor: text;\n        border-bottom: 2px solid #efefef; }\n        .ng2-tag-input:focus {\n          outline: 0; }\n        .ng2-tag-input.ng2-tag-input--dropping {\n          opacity: 0.7; }\n        .ng2-tag-input.ng2-tag-input--focused {\n          border-bottom: 2px solid #2196F3; }\n        .ng2-tag-input.ng2-tag-input--invalid {\n          border-bottom: 2px solid #f44336; }\n        .ng2-tag-input.ng2-tag-input--loading {\n          border: none; }\n        .ng2-tag-input.ng2-tag-input--disabled {\n          opacity: 0.5;\n          cursor: not-allowed; }\n        .ng2-tag-input form {\n          margin: 0.1em 0; }\n        .ng2-tag-input .ng2-tags-container {\n          -ms-flex-wrap: wrap;\n              flex-wrap: wrap;\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex; }\n\n      .minimal.ng2-tag-input {\n        display: block;\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: row;\n                flex-direction: row;\n        -ms-flex-wrap: wrap;\n            flex-wrap: wrap;\n        position: relative;\n        cursor: text;\n        border-bottom: 1px solid transparent; }\n        .minimal.ng2-tag-input:focus {\n          outline: 0; }\n        .minimal.ng2-tag-input.ng2-tag-input--dropping {\n          opacity: 0.7; }\n        .minimal.ng2-tag-input.ng2-tag-input--loading {\n          border: none; }\n        .minimal.ng2-tag-input.ng2-tag-input--disabled {\n          opacity: 0.5;\n          cursor: not-allowed; }\n        .minimal.ng2-tag-input .ng2-tags-container {\n          -ms-flex-wrap: wrap;\n              flex-wrap: wrap;\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex; }\n\n      .dark.ng2-tag-input {\n        display: block;\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: row;\n                flex-direction: row;\n        -ms-flex-wrap: wrap;\n            flex-wrap: wrap;\n        position: relative;\n        cursor: text;\n        border-bottom: 2px solid #444; }\n        .dark.ng2-tag-input:focus {\n          outline: 0; }\n        .dark.ng2-tag-input.ng2-tag-input--dropping {\n          opacity: 0.7; }\n        .dark.ng2-tag-input.ng2-tag-input--loading {\n          border: none; }\n        .dark.ng2-tag-input.ng2-tag-input--disabled {\n          opacity: 0.5;\n          cursor: not-allowed; }\n        .dark.ng2-tag-input .ng2-tags-container {\n          -ms-flex-wrap: wrap;\n              flex-wrap: wrap;\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex; }\n\n      .bootstrap.ng2-tag-input {\n        display: block;\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: row;\n                flex-direction: row;\n        -ms-flex-wrap: wrap;\n            flex-wrap: wrap;\n        position: relative;\n        cursor: text;\n        border-bottom: 2px solid #efefef; }\n        .bootstrap.ng2-tag-input:focus {\n          outline: 0; }\n        .bootstrap.ng2-tag-input.ng2-tag-input--dropping {\n          opacity: 0.7; }\n        .bootstrap.ng2-tag-input.ng2-tag-input--focused {\n          border-bottom: 2px solid #0275d8; }\n        .bootstrap.ng2-tag-input.ng2-tag-input--invalid {\n          border-bottom: 2px solid #d9534f; }\n        .bootstrap.ng2-tag-input.ng2-tag-input--loading {\n          border: none; }\n        .bootstrap.ng2-tag-input.ng2-tag-input--disabled {\n          opacity: 0.5;\n          cursor: not-allowed; }\n        .bootstrap.ng2-tag-input .ng2-tags-container {\n          -ms-flex-wrap: wrap;\n              flex-wrap: wrap;\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex; }\n\n      .bootstrap3-info.ng2-tag-input {\n        display: block;\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: row;\n                flex-direction: row;\n        -ms-flex-wrap: wrap;\n            flex-wrap: wrap;\n        position: relative;\n        padding: 4px;\n        cursor: text;\n        -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n                box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n        border-radius: 4px; }\n        .bootstrap3-info.ng2-tag-input:focus {\n          outline: 0; }\n        .bootstrap3-info.ng2-tag-input.ng2-tag-input--dropping {\n          opacity: 0.7; }\n        .bootstrap3-info.ng2-tag-input.ng2-tag-input--invalid {\n          border-bottom: 1px solid #d9534f; }\n        .bootstrap3-info.ng2-tag-input.ng2-tag-input--loading {\n          border: none; }\n        .bootstrap3-info.ng2-tag-input.ng2-tag-input--disabled {\n          opacity: 0.5;\n          cursor: not-allowed; }\n        .bootstrap3-info.ng2-tag-input form {\n          margin: 0.1em 0; }\n        .bootstrap3-info.ng2-tag-input .ng2-tags-container {\n          -ms-flex-wrap: wrap;\n              flex-wrap: wrap;\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex; }\n\n      .error-message {\n        font-size: 0.8em;\n        color: #f44336;\n        margin: 0.5em 0 0 0; }\n\n      .bootstrap .error-message {\n        color: #d9534f; }\n\n      .ng2-tag-input__text-input {\n        display: inline;\n        vertical-align: middle;\n        border: none;\n        padding: 0 0.5rem;\n        height: 38px;\n        font-size: 1em;\n        font-family: \"Roboto\", \"Helvetica Neue\", sans-serif; }\n        .ng2-tag-input__text-input:focus {\n          outline: 0; }\n        .ng2-tag-input__text-input[disabled=true] {\n          opacity: 0.5;\n          background: #fff; }\n    "],
                template: "\n      <!-- form -->\n      <form (submit)=\"submit($event)\" [formGroup]=\"form\">\n          <input #input\n\n                 type=\"text\"\n                 class=\"ng2-tag-input__text-input\"\n                 autocomplete=\"off\"\n                 tabindex=\"{{ disabled ? -1 : tabindex ? tabindex : 0 }}\"\n                 minlength=\"1\"\n\n                 [(ngModel)]=\"inputText\"\n                 [formControlName]=\"'item'\"\n                 [ngClass]=\"inputClass\"\n                 [attr.id]=\"inputId\"\n                 [attr.placeholder]=\"placeholder\"\n                 [attr.aria-label]=\"placeholder\"\n                 [attr.tabindex]=\"tabindex\"\n                 [attr.disabled]=\"disabled ? disabled : null\"\n\n                 (focus)=\"onFocus.emit($event)\"\n                 (blur)=\"onBlur.emit($event)\"\n                 (keydown)=\"onKeyDown($event)\"\n                 (keyup)=\"onKeyup.emit($event)\"\n          />\n      </form>\n    "
            },] },
];
/**
 * @nocollapse
 */
TagInputForm.ctorParameters = function () { return []; };
TagInputForm.propDecorators = {
    'onSubmit': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    'onBlur': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    'onFocus': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    'onKeyup': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    'onKeydown': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    'placeholder': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'validators': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'asyncValidators': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'inputId': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'inputClass': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'inputText': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'tabindex': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'disabled': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'input': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['input',] },],
    'inputTextChange': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
};
var defaults$2 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return OptionsProvider.defaults.dropdown; });
var TagInputDropdown = (function () {
    /**
     * @param {?} injector
     */
    function TagInputDropdown(injector) {
        var _this = this;
        this.injector = injector;
        /**
         * \@name offset
         */
        this.offset = new defaults$2().offset;
        /**
         * \@name focusFirstElement
         */
        this.focusFirstElement = new defaults$2().focusFirstElement;
        /**
         * - show autocomplete dropdown if the value of input is empty
         * \@name showDropdownIfEmpty
         */
        this.showDropdownIfEmpty = new defaults$2().showDropdownIfEmpty;
        /**
         * - desc minimum text length in order to display the autocomplete dropdown
         * \@name minimumTextLength
         */
        this.minimumTextLength = new defaults$2().minimumTextLength;
        /**
         * - number of items to display in the autocomplete dropdown
         * \@name limitItemsTo
         */
        this.limitItemsTo = new defaults$2().limitItemsTo;
        /**
         * \@name displayBy
         */
        this.displayBy = new defaults$2().displayBy;
        /**
         * \@name identifyBy
         */
        this.identifyBy = new defaults$2().identifyBy;
        /**
         * \@description a function a developer can use to implement custom matching for the autocomplete
         * \@name matchingFn
         */
        this.matchingFn = new defaults$2().matchingFn;
        /**
         * \@name appendToBody
         */
        this.appendToBody = new defaults$2().appendToBody;
        /**
         * \@name keepOpen
         * \@description option to leave dropdown open when adding a new item
         */
        this.keepOpen = new defaults$2().keepOpen;
        /**
         * list of items that match the current value of the input (for autocomplete)
         * \@name items
         */
        this.items = [];
        /**
         * \@name tagInput
         */
        this.tagInput = this.injector.get(TagInputComponent);
        /**
         * \@name _autocompleteItems
         */
        this._autocompleteItems = [];
        /**
         *
         * \@name show
         */
        this.show = function () {
            var maxItemsReached = _this.tagInput.items.length === _this.tagInput.maxItems;
            var value = _this.getFormValue();
            var hasMinimumText = value.trim().length >= _this.minimumTextLength;
            var position = _this.calculatePosition();
            var items = _this.getMatchingItems(value);
            var hasItems = items.length > 0;
            var isHidden = _this.isVisible === false;
            var showDropdownIfEmpty = _this.showDropdownIfEmpty && hasItems && !value;
            var shouldShow = isHidden && ((hasItems && hasMinimumText) || showDropdownIfEmpty);
            var shouldHide = _this.isVisible && !hasItems;
            if (_this.autocompleteObservable && hasMinimumText) {
                return _this.getItemsFromObservable(value);
            }
            if (!_this.showDropdownIfEmpty && !value) {
                return _this.dropdown.hide();
            }
            if (maxItemsReached) {
                return _this.dropdown.hide();
            }
            _this.setItems(items);
            if (shouldShow) {
                _this.dropdown.show(position);
            }
            else if (shouldHide) {
                _this.hide();
            }
        };
        /**
         * \@name requestAdding
         * @param item {Ng2MenuItem}
         */
        this.requestAdding = function (item) {
            _this.tagInput.onAddingRequested(true, _this.createTagModel(item));
        };
        /**
         * \@name resetItems
         */
        this.resetItems = function () {
            _this.items = [];
        };
        /**
         * \@name getItemsFromObservable
         * @param text
         */
        this.getItemsFromObservable = function (text) {
            _this.setLoadingState(true);
            var subscribeFn = function (data) {
                // hide loading animation
                _this.setLoadingState(false)
                    .populateItems(data);
                _this.setItems(_this.getMatchingItems(text));
                if (_this.items.length) {
                    _this.dropdown.show(_this.calculatePosition());
                }
                else if (!_this.showDropdownIfEmpty && _this.isVisible) {
                    _this.dropdown.hide();
                }
            };
            _this.autocompleteObservable(text)
                .first()
                .subscribe(subscribeFn, function () { return _this.setLoadingState(false); });
        };
    }
    Object.defineProperty(TagInputDropdown.prototype, "autocompleteItems", {
        /**
         * \@name autocompleteItems
         * @desc array of items that will populate the autocomplete
         * @return {?}
         */
        get: function () {
            var _this = this;
            var /** @type {?} */ items = this._autocompleteItems;
            if (!items) {
                return [];
            }
            return items.map(function (item) {
                return typeof item === 'string' ? (_a = {},
                    _a[_this.displayBy] = item,
                    _a[_this.identifyBy] = item,
                    _a) : item;
                var _a;
            });
        },
        /**
         * \@name autocompleteItems
         * @param {?} items
         * @return {?}
         */
        set: function (items) {
            this._autocompleteItems = items;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * \@name ngOnInit
     * @return {?}
     */
    TagInputDropdown.prototype.ngOnInit = function () {
        this.onItemClicked().subscribe(this.requestAdding);
        // reset itemsMatching array when the dropdown is hidden
        this.onHide().subscribe(this.resetItems);
        var /** @type {?} */ DEBOUNCE_TIME = 200;
        var /** @type {?} */ KEEP_OPEN = this.keepOpen;
        this.tagInput
            .onTextChange
            .asObservable()
            .debounceTime(DEBOUNCE_TIME)
            .filter(function (value) {
            if (KEEP_OPEN === false) {
                return value.length > 0;
            }
            return true;
        })
            .subscribe(this.show);
    };
    /**
     * \@name updatePosition
     * @return {?}
     */
    TagInputDropdown.prototype.updatePosition = function () {
        var /** @type {?} */ position = this.tagInput.inputForm.getElementPosition();
        this.dropdown.menu.updatePosition(position);
    };
    Object.defineProperty(TagInputDropdown.prototype, "isVisible", {
        /**
         * \@name isVisible
         * @return {?}
         */
        get: function () {
            return this.dropdown.menu.state.menuState.isVisible;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * \@name onHide
     * @return {?}
     */
    TagInputDropdown.prototype.onHide = function () {
        return this.dropdown.onHide;
    };
    /**
     * \@name onItemClicked
     * @return {?}
     */
    TagInputDropdown.prototype.onItemClicked = function () {
        return this.dropdown.onItemClicked;
    };
    Object.defineProperty(TagInputDropdown.prototype, "selectedItem", {
        /**
         * \@name selectedItem
         * @return {?}
         */
        get: function () {
            return this.dropdown.menu.state.dropdownState.selectedItem;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TagInputDropdown.prototype, "state", {
        /**
         * \@name state
         * @return {?}
         */
        get: function () {
            return this.dropdown.menu.state;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * \@name hide
     * @return {?}
     */
    TagInputDropdown.prototype.hide = function () {
        this.resetItems();
        this.dropdown.hide();
    };
    /**
     * \@name scrollListener
     * @return {?}
     */
    TagInputDropdown.prototype.scrollListener = function () {
        if (!this.isVisible) {
            return;
        }
        this.updatePosition();
    };
    /**
     * \@name onWindowBlur
     * @return {?}
     */
    TagInputDropdown.prototype.onWindowBlur = function () {
        this.dropdown.hide();
    };
    /**
     * \@name getFormValue
     * @return {?}
     */
    TagInputDropdown.prototype.getFormValue = function () {
        return this.tagInput.formValue.trim();
    };
    /**
     * \@name calculatePosition
     * @return {?}
     */
    TagInputDropdown.prototype.calculatePosition = function () {
        return this.tagInput.inputForm.getElementPosition();
    };
    /**
     * \@name createTagModel
     * @param {?} item
     * @return {?}
     */
    TagInputDropdown.prototype.createTagModel = function (item) {
        var /** @type {?} */ display = typeof item.value === 'string' ? item.value : item.value[this.displayBy];
        var /** @type {?} */ value = typeof item.value === 'string' ? item.value : item.value[this.identifyBy];
        return Object.assign({}, item.value, (_a = {}, _a[this.tagInput.displayBy] = display, _a[this.tagInput.identifyBy] = value, _a));
        var _a;
    };
    /**
     *
     * @param {?} value {string}
     * @return {?}
     */
    TagInputDropdown.prototype.getMatchingItems = function (value) {
        var _this = this;
        if (!value && !this.showDropdownIfEmpty) {
            return [];
        }
        var /** @type {?} */ dupesAllowed = this.tagInput.allowDupes;
        return this.autocompleteItems.filter(function (item) {
            var /** @type {?} */ hasValue = dupesAllowed ? false : _this.tagInput.tags.some(function (tag) {
                var /** @type {?} */ identifyBy = _this.tagInput.identifyBy;
                var /** @type {?} */ model = typeof tag.model === 'string' ? tag.model : tag.model[identifyBy];
                return model === item[_this.identifyBy];
            });
            return _this.matchingFn(value, item) && (hasValue === false);
        });
    };
    /**
     * \@name setItems
     * @param {?} items
     * @return {?}
     */
    TagInputDropdown.prototype.setItems = function (items) {
        this.items = items.slice(0, this.limitItemsTo || items.length);
    };
    /**
     * \@name populateItems
     * @param {?} data
     * @return {?}
     */
    TagInputDropdown.prototype.populateItems = function (data) {
        var _this = this;
        this.autocompleteItems = data.map(function (item) {
            return typeof item === 'string' ? (_a = {},
                _a[_this.displayBy] = item,
                _a[_this.identifyBy] = item,
                _a) : item;
            var _a;
        });
        return this;
    };
    /**
     * \@name setLoadingState
     * @param {?} state
     * @return {?}
     */
    TagInputDropdown.prototype.setLoadingState = function (state$$1) {
        this.tagInput.isLoading = state$$1;
        return this;
    };
    return TagInputDropdown;
}());
TagInputDropdown.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'tag-input-dropdown',
                template: "\n      <ng2-dropdown>\n          <ng2-dropdown-menu [focusFirstElement]=\"focusFirstElement\"\n                             [appendToBody]=\"appendToBody\"\n                             [offset]=\"offset\">\n              <ng2-menu-item *ngFor=\"let item of items; let index = index; let last = last\"\n                             [value]=\"item\"\n                             [ngSwitch]=\"!!templates.length\">\n\n                  <span *ngSwitchCase=\"false\"\n                        [innerHTML]=\"item[displayBy] | highlight : tagInput.inputForm.value.value\">\n                  </span>\n\n                  <ng-template *ngSwitchDefault\n                            [ngTemplateOutlet]=\"templates.first\"\n                            [ngTemplateOutletContext]=\"{ item: item, index: index, last: last }\">\n                  </ng-template>\n              </ng2-menu-item>\n          </ng2-dropdown-menu>\n      </ng2-dropdown>\n    "
            },] },
];
/**
 * @nocollapse
 */
TagInputDropdown.ctorParameters = function () { return [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], },
]; };
TagInputDropdown.propDecorators = {
    'dropdown': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: [ng2_material_dropdown__WEBPACK_IMPORTED_MODULE_3__["Ng2Dropdown"],] },],
    'templates': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"],] },],
    'offset': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'focusFirstElement': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'showDropdownIfEmpty': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'autocompleteObservable': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'minimumTextLength': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'limitItemsTo': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'displayBy': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'identifyBy': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'matchingFn': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'appendToBody': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'keepOpen': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'autocompleteItems': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'scrollListener': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['window:scroll',] },],
    'onWindowBlur': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['window:blur',] },],
};
var TagRipple = (function () {
    function TagRipple() {
        this.state = 'none';
    }
    return TagRipple;
}());
TagRipple.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'tag-ripple',
                styles: ["\n        :host {\n            width: 100%;\n            height: 100%;\n            left: 0;\n            overflow: hidden;\n            position: absolute;\n        }\n        \n        .tag-ripple {\n            background: rgba(0, 0, 0, 0.1);\n            top: 50%;\n            left: 50%;\n            height: 100%;\n            transform: translate(-50%, -50%);\n            position: absolute;\n        }\n    "],
                template: "\n        <div class=\"tag-ripple\" [@ink]=\"state\"></div>\n    ",
                animations: [
                    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["trigger"])('ink', [
                        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["state"])('none', Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["style"])({ width: 0, opacity: 0 })),
                        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["transition"])('none => clicked', [
                            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["animate"])(300, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
                                Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, offset: 0, width: '30%', borderRadius: '100%' }),
                                Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, offset: 0.5, width: '50%' }),
                                Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0.5, offset: 1, width: '100%', borderRadius: '16px' })
                            ]))
                        ])
                    ])
                ]
            },] },
];
/**
 * @nocollapse
 */
TagRipple.ctorParameters = function () { return []; };
TagRipple.propDecorators = {
    'state': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
};
// angular universal hacks
/* tslint:disable-next-line */
var KeyboardEvent = ((global)).KeyboardEvent;
var MouseEvent = ((global)).MouseEvent;
// mocking navigator
var navigator = typeof window !== 'undefined' ? window.navigator : {
    userAgent: 'Chrome',
    vendor: 'Google Inc'
};
var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
var TagComponent = (function () {
    /**
     * @param {?} element
     * @param {?} renderer
     * @param {?} cdRef
     */
    function TagComponent(element, renderer, cdRef) {
        this.element = element;
        this.renderer = renderer;
        this.cdRef = cdRef;
        /**
         * \@name disabled
         */
        this.disabled = false;
        /**
         * \@name onSelect
         */
        this.onSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * \@name onRemove
         */
        this.onRemove = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * \@name onBlur
         */
        this.onBlur = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * \@name onKeyDown
         */
        this.onKeyDown = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * \@name onTagEdited
         */
        this.onTagEdited = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * \@name editing
         */
        this.editing = false;
        /**
         * \@name rippleState
         */
        this.rippleState = 'none';
    }
    Object.defineProperty(TagComponent.prototype, "readonly", {
        /**
         * \@name readonly {boolean}
         * @return {?}
         */
        get: function () {
            return typeof this.model !== 'string' && this.model.readonly === true;
        },
        enumerable: true,
        configurable: true
    });
    ;
    /**
     * \@name select
     * @param {?=} $event
     * @return {?}
     */
    TagComponent.prototype.select = function ($event) {
        if (this.readonly || this.disabled) {
            return;
        }
        if ($event) {
            $event.stopPropagation();
        }
        this.focus();
        this.onSelect.emit(this.model);
    };
    /**
     * \@name remove
     * @param {?} $event
     * @return {?}
     */
    TagComponent.prototype.remove = function ($event) {
        $event.stopPropagation();
        this.onRemove.emit(this);
    };
    /**
     * \@name focus
     * @return {?}
     */
    TagComponent.prototype.focus = function () {
        this.element.nativeElement.focus();
    };
    /**
     * @return {?}
     */
    TagComponent.prototype.move = function () {
        this.moving = true;
    };
    /**
     * \@name keydown
     * @param {?} event
     * @return {?}
     */
    TagComponent.prototype.keydown = function (event) {
        if (this.editing) {
            event.keyCode === 13 ? this.disableEditMode(event) : undefined;
            return;
        }
        this.onKeyDown.emit({ event: event, model: this.model });
    };
    /**
     * \@name blink
     * @return {?}
     */
    TagComponent.prototype.blink = function () {
        var /** @type {?} */ classList = this.element.nativeElement.classList;
        classList.add('blink');
        setTimeout(function () { return classList.remove('blink'); }, 50);
    };
    /**
     * \@name toggleEditMode
     * @return {?}
     */
    TagComponent.prototype.toggleEditMode = function () {
        if (this.editable) {
            this.editing ? undefined : this.activateEditMode();
        }
    };
    /**
     * \@name onBlurred
     * @param {?} event
     * @return {?}
     */
    TagComponent.prototype.onBlurred = function (event) {
        // Checks if it is editable first before handeling the onBlurred event in order to prevent
        // a bug in IE where tags are still editable with onlyFromAutocomplete set to true
        if (!this.editable) {
            return;
        }
        this.disableEditMode();
        var /** @type {?} */ value = event.target.innerText;
        var /** @type {?} */ result = typeof this.model === 'string' ? value : Object.assign({}, this.model, (_a = {}, _a[this.displayBy] = value, _a));
        this.onBlur.emit(result);
        var _a;
    };
    /**
     * \@name getDisplayValue
     * @param {?} item
     * @return {?}
     */
    TagComponent.prototype.getDisplayValue = function (item) {
        return typeof item === 'string' ? item : item[this.displayBy];
    };
    Object.defineProperty(TagComponent.prototype, "isRippleVisible", {
        /**
         * @desc returns whether the ripple is visible or not
         * only works in Chrome
         * \@name isRippleVisible
         * @return {?}
         */
        get: function () {
            return !this.readonly &&
                !this.editing &&
                isChrome &&
                this.hasRipple;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * \@name disableEditMode
     * @param {?=} $event
     * @return {?}
     */
    TagComponent.prototype.disableEditMode = function ($event) {
        var /** @type {?} */ classList = this.element.nativeElement.classList;
        var /** @type {?} */ input = this.getContentEditableText();
        this.editing = false;
        classList.remove('tag--editing');
        if (!input) {
            this.setContentEditableText(this.model);
            return;
        }
        this.storeNewValue(input);
        this.cdRef.detectChanges();
        if ($event) {
            $event.preventDefault();
        }
    };
    /**
     * \@name isDeleteIconVisible
     * @return {?}
     */
    TagComponent.prototype.isDeleteIconVisible = function () {
        return !this.readonly &&
            !this.disabled &&
            this.removable &&
            !this.editing;
    };
    /**
     * \@name getContentEditableText
     * @return {?}
     */
    TagComponent.prototype.getContentEditableText = function () {
        var /** @type {?} */ input = this.getContentEditable();
        return input ? input.innerText.trim() : '';
    };
    /**
     * \@name setContentEditableText
     * @param {?} model
     * @return {?}
     */
    TagComponent.prototype.setContentEditableText = function (model) {
        var /** @type {?} */ input = this.getContentEditable();
        var /** @type {?} */ value = this.getDisplayValue(model);
        input.innerText = value;
    };
    /**
     * \@name
     * @return {?}
     */
    TagComponent.prototype.activateEditMode = function () {
        var /** @type {?} */ classList = this.element.nativeElement.classList;
        classList.add('tag--editing');
        this.editing = true;
    };
    /**
     * \@name storeNewValue
     * @param {?} input
     * @return {?}
     */
    TagComponent.prototype.storeNewValue = function (input) {
        var _this = this;
        var /** @type {?} */ exists = function (model) {
            return typeof model === 'string' ?
                model === input :
                model[_this.displayBy] === input;
        };
        var /** @type {?} */ hasId = function () {
            return _this.model[_this.identifyBy] !== _this.model[_this.displayBy];
        };
        // if the value changed, replace the value in the model
        if (exists(this.model)) {
            return;
        }
        var /** @type {?} */ model = typeof this.model === 'string' ? input : (_a = {},
            _a[this.identifyBy] = hasId() ? this.model[this.identifyBy] : input,
            _a[this.displayBy] = input,
            _a);
        // emit output
        this.model = model;
        this.onTagEdited.emit(model);
        var _a;
    };
    /**
     * \@name getContentEditable
     * @return {?}
     */
    TagComponent.prototype.getContentEditable = function () {
        return this.element.nativeElement.querySelector('[contenteditable]');
    };
    return TagComponent;
}());
TagComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'tag',
                template: "\n      <div (click)=\"select($event)\"\n           (dblclick)=\"toggleEditMode()\"\n           (mousedown)=\"rippleState='clicked'\"\n           (mouseup)=\"rippleState='none'\"\n           [ngSwitch]=\"!!template\"\n           [class.disabled]=\"disabled\"\n           [attr.tabindex]=\"-1\"\n           [attr.aria-label]=\"getDisplayValue(model)\">\n\n          <div *ngSwitchCase=\"true\" [attr.contenteditable]=\"editing\">\n              <!-- CUSTOM TEMPLATE -->\n              <ng-template\n                  [ngTemplateOutletContext]=\"{ item: model, index: index }\"\n                  [ngTemplateOutlet]=\"template\">\n              </ng-template>\n          </div>\n\n          <div *ngSwitchCase=\"false\" class=\"tag-wrapper\">\n              <!-- TAG NAME -->\n              <div [attr.contenteditable]=\"editing\"\n                   [attr.title]=\"getDisplayValue(model)\"\n                   class=\"tag__text inline\"\n                   spellcheck=\"false\"\n                   (keydown.enter)=\"disableEditMode($event)\"\n                   (keydown.escape)=\"disableEditMode($event)\"\n                   (click)=\"editing ? $event.stopPropagation() : undefined\"\n                   (blur)=\"onBlurred($event)\">\n                  {{ getDisplayValue(model) }}\n              </div>\n\n              <!-- 'X' BUTTON -->\n              <delete-icon\n                  aria-label=\"Remove tag\"\n                  role=\"button\"\n                  (click)=\"remove($event)\"\n                  *ngIf=\"isDeleteIconVisible()\">\n              </delete-icon>\n          </div>\n      </div>\n\n      <tag-ripple [state]=\"rippleState\"\n                  [attr.tabindex]=\"-1\"\n                  *ngIf=\"isRippleVisible\">\n      </tag-ripple>\n    ",
                styles: ["\n      :host,\n      :host > div,\n      :host > div:focus {\n        outline: 0;\n        overflow: hidden;\n        -webkit-transition: opacity 1s;\n        transition: opacity 1s;\n        z-index: 1; }\n\n      :host {\n        max-width: 400px; }\n\n      :host.blink {\n        -webkit-animation: blink 0.3s normal forwards ease-in-out;\n        animation: blink 0.3s normal forwards ease-in-out; }\n\n      @-webkit-keyframes blink {\n        0% {\n          opacity: 0.3; } }\n\n      @keyframes blink {\n        0% {\n          opacity: 0.3; } }\n\n      :host .disabled {\n        cursor: not-allowed; }\n\n      :host [contenteditable='true'] {\n        outline: 0; }\n\n      .tag-wrapper {\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: row;\n                flex-direction: row;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex; }\n\n      .tag__text {\n        overflow: hidden;\n        text-overflow: ellipsis;\n        white-space: nowrap; }\n    "]
            },] },
];
/**
 * @nocollapse
 */
TagComponent.ctorParameters = function () { return [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], },
]; };
TagComponent.propDecorators = {
    'model': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'removable': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'editable': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'template': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'displayBy': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'identifyBy': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'index': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'hasRipple': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'disabled': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'onSelect': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    'onRemove': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    'onBlur': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    'onKeyDown': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    'onTagEdited': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    'moving': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.moving',] },],
    'ripple': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: [TagRipple,] },],
    'keydown': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['keydown', ['$event'],] },],
};
/**
 * \@name animations
 */
var animations$1 = [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["trigger"])('animation', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["state"])('in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({
            opacity: 1
        })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["state"])('out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({
            opacity: 0
        })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["transition"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["animate"])("{{ enter }}", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["keyframes"])([
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({ opacity: 0, offset: 0, transform: 'translate(0px, 20px)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({ opacity: 0.3, offset: 0.3, transform: 'translate(0px, -10px)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({ opacity: 0.5, offset: 0.5, transform: 'translate(0px, 0px)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({ opacity: 0.75, offset: 0.75, transform: 'translate(0px, 5px)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({ opacity: 1, offset: 1, transform: 'translate(0px, 0px)' })
            ]))
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["transition"])(':leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["animate"])("{{ leave }}", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["keyframes"])([
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({ opacity: 1, transform: 'translateX(0)', offset: 0 }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({ opacity: 1, transform: 'translateX(-15px)', offset: 0.7 }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({ opacity: 0, transform: 'translateX(100%)', offset: 1.0 })
            ]))
        ])
    ])
];
// angular
// rx
// ng2-tag-input
// angular universal hacks
/* tslint:disable-next-line */
var DragEvent = ((global)).DragEvent;
var CUSTOM_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return TagInputComponent; }),
    multi: true
};
var defaults$1 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return OptionsProvider.defaults.tagInput; });
var TagInputComponent = (function (_super) {
    __extends(TagInputComponent, _super);
    /**
     * @param {?} renderer
     * @param {?} dragProvider
     */
    function TagInputComponent(renderer, dragProvider) {
        var _this = _super.call(this) || this;
        _this.renderer = renderer;
        _this.dragProvider = dragProvider;
        /**
         * \@name separatorKeys
         * @desc keyboard keys with which a user can separate items
         */
        _this.separatorKeys = new defaults$1().separatorKeys;
        /**
         * \@name separatorKeyCodes
         * @desc keyboard key codes with which a user can separate items
         */
        _this.separatorKeyCodes = new defaults$1().separatorKeyCodes;
        /**
         * \@name placeholder
         * @desc the placeholder of the input text
         */
        _this.placeholder = new defaults$1().placeholder;
        /**
         * \@name secondaryPlaceholder
         * @desc placeholder to appear when the input is empty
         */
        _this.secondaryPlaceholder = new defaults$1().secondaryPlaceholder;
        /**
         * \@name maxItems
         * @desc maximum number of items that can be added
         */
        _this.maxItems = new defaults$1().maxItems;
        /**
         * \@name validators
         * @desc array of Validators that are used to validate the tag before it gets appended to the list
         */
        _this.validators = new defaults$1().validators;
        /**
         * \@name asyncValidators
         * @desc array of AsyncValidator that are used to validate the tag before it gets appended to the list
         */
        _this.asyncValidators = new defaults$1().asyncValidators;
        /**
         * - if set to true, it will only possible to add items from the autocomplete
         * \@name onlyFromAutocomplete
         */
        _this.onlyFromAutocomplete = new defaults$1().onlyFromAutocomplete;
        /**
         * \@name errorMessages
         */
        _this.errorMessages = new defaults$1().errorMessages;
        /**
         * \@name theme
         */
        _this.theme = new defaults$1().theme;
        /**
         * \@name onTextChangeDebounce
         */
        _this.onTextChangeDebounce = new defaults$1().onTextChangeDebounce;
        /**
         * - custom id assigned to the input
         * \@name id
         */
        _this.inputId = new defaults$1().inputId;
        /**
         * - custom class assigned to the input
         */
        _this.inputClass = new defaults$1().inputClass;
        /**
         * - option to clear text input when the form is blurred
         * \@name clearOnBlur
         */
        _this.clearOnBlur = new defaults$1().clearOnBlur;
        /**
         * - hideForm
         * \@name clearOnBlur
         */
        _this.hideForm = new defaults$1().hideForm;
        /**
         * \@name addOnBlur
         */
        _this.addOnBlur = new defaults$1().addOnBlur;
        /**
         * \@name addOnPaste
         */
        _this.addOnPaste = new defaults$1().addOnPaste;
        /**
         * - pattern used with the native method split() to separate patterns in the string pasted
         * \@name pasteSplitPattern
         */
        _this.pasteSplitPattern = new defaults$1().pasteSplitPattern;
        /**
         * \@name blinkIfDupe
         */
        _this.blinkIfDupe = new defaults$1().blinkIfDupe;
        /**
         * \@name removable
         */
        _this.removable = new defaults$1().removable;
        /**
         * \@name editable
         */
        _this.editable = new defaults$1().editable;
        /**
         * \@name allowDupes
         */
        _this.allowDupes = new defaults$1().allowDupes;
        /**
         * \@description if set to true, the newly added tags will be added as strings, and not objects
         * \@name modelAsStrings
         */
        _this.modelAsStrings = new defaults$1().modelAsStrings;
        /**
         * \@name trimTags
         */
        _this.trimTags = new defaults$1().trimTags;
        /**
         * \@name ripple
         */
        _this.ripple = new defaults$1().ripple;
        /**
         * \@name tabindex
         * @desc pass through the specified tabindex to the input
         */
        _this.tabindex = new defaults$1().tabIndex;
        /**
         * \@name disable
         */
        _this.disable = new defaults$1().disable;
        /**
         * \@name dragZone
         */
        _this.dragZone = new defaults$1().dragZone;
        /**
         * \@name onRemoving
         */
        _this.onRemoving = new defaults$1().onRemoving;
        /**
         * \@name onAdding
         */
        _this.onAdding = new defaults$1().onAdding;
        /**
         * \@name animationDuration
         */
        _this.animationDuration = new defaults$1().animationDuration;
        /**
         * \@name onAdd
         * @desc event emitted when adding a new item
         */
        _this.onAdd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * \@name onRemove
         * @desc event emitted when removing an existing item
         */
        _this.onRemove = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * \@name onSelect
         * @desc event emitted when selecting an item
         */
        _this.onSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * \@name onFocus
         * @desc event emitted when the input is focused
         */
        _this.onFocus = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * \@name onFocus
         * @desc event emitted when the input is blurred
         */
        _this.onBlur = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * \@name onTextChange
         * @desc event emitted when the input value changes
         */
        _this.onTextChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * - output triggered when text is pasted in the form
         * \@name onPaste
         */
        _this.onPaste = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * - output triggered when tag entered is not valid
         * \@name onValidationError
         */
        _this.onValidationError = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * - output triggered when tag is edited
         * \@name onTagEdited
         */
        _this.onTagEdited = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * \@name isLoading
         */
        _this.isLoading = false;
        /**
         * \@name listeners
         * @desc array of events that get fired using \@fireEvents
         */
        _this.listeners = (_a = {},
            _a[KEYDOWN] = [],
            _a[KEYUP] = [],
            _a);
        /**
         * \@description emitter for the 2-way data binding inputText value
         * \@name inputTextChange
         */
        _this.inputTextChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * \@description private variable to bind get/set
         * \@name inputTextValue
         */
        _this.inputTextValue = '';
        /**
         * \@name appendTag
         * @param tag {TagModel}
         */
        _this.appendTag = function (tag, index) {
            if (index === void 0) { index = _this.items.length; }
            var items = _this.items;
            var model = _this.modelAsStrings ? tag[_this.identifyBy] : tag;
            _this.items = items.slice(0, index).concat([
                model
            ], items.slice(index, items.length));
        };
        /**
         * \@name createTag
         * @param model
         */
        _this.createTag = function (model) {
            var trim = function (val, key) {
                return typeof val === 'string' ? val.trim() : val[key];
            };
            return Object.assign({}, typeof model !== 'string' ? model : {}, (_a = {}, _a[_this.displayBy] = _this.trimTags ? trim(model, _this.displayBy) : model, _a[_this.identifyBy] = _this.trimTags ? trim(model, _this.identifyBy) : model, _a));
            var _a;
        };
        /**
         * \@name onPasteCallback
         * @param data
         */
        _this.onPasteCallback = function (data) {
            var text = data.clipboardData.getData('text/plain');
            text.split(_this.pasteSplitPattern)
                .map(function (item) { return _this.createTag(item); })
                .forEach(function (item) { return _this.onAddingRequested(false, item); });
            _this.onPaste.emit(text);
            setTimeout(function () { return _this.setInputValue(''); }, 0);
        };
        return _this;
        var _a;
    }
    Object.defineProperty(TagInputComponent.prototype, "inputText", {
        /**
         * \@name inputText
         * @return {?}
         */
        get: function () {
            return this.inputTextValue;
        },
        /**
         * \@name inputText
         * @param {?} text
         * @return {?}
         */
        set: function (text) {
            this.inputTextValue = text;
            this.inputTextChange.emit(text);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TagInputComponent.prototype, "tabindexAttr", {
        /**
         * @desc removes the tab index if it is set - it will be passed through to the input
         * \@name tabindexAttr
         * @return {?}
         */
        get: function () {
            return this.tabindex !== '' ? '-1' : '';
        },
        enumerable: true,
        configurable: true
    });
    /**
     * \@name ngAfterViewInit
     * @return {?}
     */
    TagInputComponent.prototype.ngAfterViewInit = function () {
        // set up listeners
        this.setUpKeypressListeners();
        this.setupSeparatorKeysListener();
        this.setUpInputKeydownListeners();
        if (this.onTextChange.observers.length) {
            this.setUpTextChangeSubscriber();
        }
        // if clear on blur is set to true, subscribe to the event and clear the text's form
        if (this.clearOnBlur || this.addOnBlur) {
            this.setUpOnBlurSubscriber();
        }
        // if addOnPaste is set to true, register the handler and add items
        if (this.addOnPaste) {
            this.setUpOnPasteListener();
        }
        // if hideForm is set to true, remove the input
        if (this.hideForm) {
            this.inputForm.destroy();
        }
    };
    /**
     * \@name ngOnInit
     * @return {?}
     */
    TagInputComponent.prototype.ngOnInit = function () {
        // if the number of items specified in the model is > of the value of maxItems
        // degrade gracefully and let the max number of items to be the number of items in the model
        // though, warn the user.
        var /** @type {?} */ hasReachedMaxItems = this.maxItems !== undefined &&
            this.items &&
            this.items.length > this.maxItems;
        if (hasReachedMaxItems) {
            this.maxItems = this.items.length;
            console.warn(MAX_ITEMS_WARNING);
        }
        // Setting editable to false to fix problem with tags in IE still being editable when
        // onlyFromAutocomplete is true
        this.editable = this.onlyFromAutocomplete ? false : this.editable;
        this.setAnimationMetadata();
    };
    /**
     * \@name onRemoveRequested
     * @param {?} tag
     * @param {?} index
     * @return {?}
     */
    TagInputComponent.prototype.onRemoveRequested = function (tag, index) {
        var _this = this;
        var /** @type {?} */ subscribeFn = function (model) { return _this.removeItem(model, index); };
        this.onRemoving ?
            this.onRemoving(tag)
                .first()
                .subscribe(subscribeFn) : subscribeFn(tag);
    };
    /**
     * \@name onAddingRequested
     * @param {?} fromAutocomplete {boolean}
     * @param {?} tag {TagModel}
     * @param {?=} index
     * @return {?}
     */
    TagInputComponent.prototype.onAddingRequested = function (fromAutocomplete, tag, index) {
        var _this = this;
        if (!tag) {
            return;
        }
        var /** @type {?} */ subscribeFn = function (model) {
            return _this.addItem(fromAutocomplete, model, index);
        };
        this.onAdding ?
            this.onAdding(tag)
                .first()
                .subscribe(subscribeFn) : subscribeFn(tag);
    };
    /**
     * \@name selectItem
     * @desc selects item passed as parameter as the selected tag
     * @param {?} item
     * @param {?=} emit
     * @return {?}
     */
    TagInputComponent.prototype.selectItem = function (item, emit) {
        if (emit === void 0) { emit = true; }
        var /** @type {?} */ isReadonly = item && typeof item !== 'string' && item.readonly;
        if (isReadonly || this.selectedTag === item) {
            return;
        }
        this.selectedTag = item;
        if (emit) {
            this.onSelect.emit(item);
        }
    };
    /**
     * \@name fireEvents
     * @desc goes through the list of the events for a given eventName, and fires each of them
     * @param {?} eventName
     * @param {?=} $event
     * @return {?}
     */
    TagInputComponent.prototype.fireEvents = function (eventName, $event) {
        var _this = this;
        this.listeners[eventName].forEach(function (listener) { return listener.call(_this, $event); });
    };
    /**
     * \@name handleKeydown
     * @desc handles action when the user hits a keyboard key
     * @param {?} data
     * @return {?}
     */
    TagInputComponent.prototype.handleKeydown = function (data) {
        var /** @type {?} */ event = data.event;
        var /** @type {?} */ key = event.keyCode || event.which;
        switch (KEY_PRESS_ACTIONS[key]) {
            case ACTIONS_KEYS.DELETE:
                if (this.selectedTag && this.removable) {
                    var /** @type {?} */ index = this.items.indexOf(this.selectedTag);
                    this.onRemoveRequested(this.selectedTag, index);
                }
                break;
            case ACTIONS_KEYS.SWITCH_PREV:
                this.moveToTag(data.model, PREV);
                break;
            case ACTIONS_KEYS.SWITCH_NEXT:
                this.moveToTag(data.model, NEXT);
                break;
            case ACTIONS_KEYS.TAB:
                this.moveToTag(data.model, NEXT);
                break;
            default:
                return;
        }
        // prevent default behaviour
        event.preventDefault();
    };
    /**
     * \@name setInputValue
     * @param {?} value
     * @return {?}
     */
    TagInputComponent.prototype.setInputValue = function (value) {
        var /** @type {?} */ control = this.getControl();
        // update form value with the transformed item
        control.setValue(value);
    };
    /**
     * \@name getControl
     * @return {?}
     */
    TagInputComponent.prototype.getControl = function () {
        return (this.inputForm.value);
    };
    /**
     * \@name focus
     * @param {?=} applyFocus
     * @param {?=} displayAutocomplete
     * @return {?}
     */
    TagInputComponent.prototype.focus = function (applyFocus, displayAutocomplete) {
        if (applyFocus === void 0) { applyFocus = false; }
        if (displayAutocomplete === void 0) { displayAutocomplete = false; }
        if (this.dragProvider.getState('dragging')) {
            return;
        }
        this.selectItem(undefined, false);
        if (applyFocus) {
            this.inputForm.focus();
            this.onFocus.emit(this.formValue);
        }
    };
    /**
     * \@name blur
     * @return {?}
     */
    TagInputComponent.prototype.blur = function () {
        this.onTouched();
        this.onBlur.emit(this.formValue);
    };
    /**
     * \@name hasErrors
     * @return {?}
     */
    TagInputComponent.prototype.hasErrors = function () {
        return this.inputForm && this.inputForm.hasErrors();
    };
    /**
     * \@name isInputFocused
     * @return {?}
     */
    TagInputComponent.prototype.isInputFocused = function () {
        return this.inputForm && this.inputForm.isInputFocused();
    };
    /**
     * - this is the one way I found to tell if the template has been passed and it is not
     * the template for the menu item
     * \@name hasCustomTemplate
     * @return {?}
     */
    TagInputComponent.prototype.hasCustomTemplate = function () {
        var /** @type {?} */ template = this.templates ? this.templates.first : undefined;
        var /** @type {?} */ menuTemplate = this.dropdown && this.dropdown.templates ?
            this.dropdown.templates.first : undefined;
        return Boolean(template && template !== menuTemplate);
    };
    Object.defineProperty(TagInputComponent.prototype, "maxItemsReached", {
        /**
         * \@name maxItemsReached
         * @return {?}
         */
        get: function () {
            return this.maxItems !== undefined &&
                this.items.length >= this.maxItems;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TagInputComponent.prototype, "formValue", {
        /**
         * \@name formValue
         * @return {?}
         */
        get: function () {
            var /** @type {?} */ form = this.inputForm.value;
            return form ? form.value : '';
        },
        enumerable: true,
        configurable: true
    });
    /**
     * 3
     * \@name onDragStarted
     * @param {?} event
     * @param {?} tag
     * @param {?} index
     * @return {?}
     */
    TagInputComponent.prototype.onDragStarted = function (event, tag, index) {
        event.stopPropagation();
        var /** @type {?} */ item = ({ zone: this.dragZone, tag: tag, index: index });
        this.dragProvider.setSender(this);
        this.dragProvider.setDraggedItem(event, item);
        this.dragProvider.setState({ dragging: true, index: index });
    };
    /**
     * \@name onDragOver
     * @param {?} event
     * @param {?=} index
     * @return {?}
     */
    TagInputComponent.prototype.onDragOver = function (event, index) {
        this.dragProvider.setState({ dropping: true });
        this.dragProvider.setReceiver(this);
        event.preventDefault();
    };
    /**
     * \@name onTagDropped
     * @param {?} event
     * @param {?} index
     * @return {?}
     */
    TagInputComponent.prototype.onTagDropped = function (event, index) {
        var /** @type {?} */ item = this.dragProvider.getDraggedItem(event);
        if (item.zone !== this.dragZone) {
            return;
        }
        this.dragProvider.onTagDropped(item.tag, item.index, index);
        event.preventDefault();
        event.stopPropagation();
    };
    /**
     * \@name isDropping
     * @return {?}
     */
    TagInputComponent.prototype.isDropping = function () {
        var /** @type {?} */ isReceiver = this.dragProvider.receiver === this;
        var /** @type {?} */ isDropping = this.dragProvider.getState('dropping');
        return Boolean(isReceiver && isDropping);
    };
    /**
     * \@name onTagBlurred
     * @param {?} changedElement {TagModel}
     * @param {?} index {number}
     * @return {?}
     */
    TagInputComponent.prototype.onTagBlurred = function (changedElement, index) {
        this.items[index] = changedElement;
        this.blur();
    };
    /**
     * \@name trackBy
     * @param {?} item
     * @return {?}
     */
    TagInputComponent.prototype.trackBy = function (item) {
        return item[this.identifyBy];
    };
    /**
     *
     * @param {?} tag
     * @param {?=} fromAutocomplete
     * @return {?}
     */
    TagInputComponent.prototype.isTagValid = function (tag, fromAutocomplete) {
        var _this = this;
        if (fromAutocomplete === void 0) { fromAutocomplete = false; }
        var /** @type {?} */ selectedItem = this.dropdown ? this.dropdown.selectedItem : undefined;
        if (selectedItem && !fromAutocomplete) {
            return false;
        }
        var /** @type {?} */ dupe = this.findDupe(tag, fromAutocomplete);
        // if so, give a visual cue and return false
        if (!this.allowDupes && dupe && this.blinkIfDupe) {
            var /** @type {?} */ model = this.tags.find(function (tag) {
                return _this.getItemValue(tag.model) === _this.getItemValue(dupe);
            });
            if (model) {
                model.blink();
            }
        }
        var /** @type {?} */ isFromAutocomplete = fromAutocomplete && this.onlyFromAutocomplete;
        var /** @type {?} */ assertions = [
            // 1. there must be no dupe OR dupes are allowed
            !dupe || this.allowDupes === true,
            // 2. check max items has not been reached
            this.maxItemsReached === false,
            // 3. check item comes from autocomplete or onlyFromAutocomplete is false
            ((isFromAutocomplete) || this.onlyFromAutocomplete === false)
        ];
        return assertions.filter(function (item) { return item; }).length === assertions.length;
    };
    /**
     * \@name moveToTag
     * @param {?} item
     * @param {?} direction
     * @return {?}
     */
    TagInputComponent.prototype.moveToTag = function (item, direction) {
        var /** @type {?} */ isLast = this.tags.last.model === item;
        var /** @type {?} */ isFirst = this.tags.first.model === item;
        var /** @type {?} */ stopSwitch = (direction === NEXT && isLast) ||
            (direction === PREV && isFirst);
        if (stopSwitch) {
            this.focus(true);
            return;
        }
        var /** @type {?} */ offset = direction === NEXT ? 1 : -1;
        var /** @type {?} */ index = this.getTagIndex(item) + offset;
        var /** @type {?} */ tag = this.getTagAtIndex(index);
        return tag.select.call(tag);
    };
    /**
     * \@name getTagIndex
     * @param {?} item
     * @return {?}
     */
    TagInputComponent.prototype.getTagIndex = function (item) {
        var /** @type {?} */ tags = this.tags.toArray();
        return tags.findIndex(function (tag) { return tag.model === item; });
    };
    /**
     * \@name getTagAtIndex
     * @param {?} index
     * @return {?}
     */
    TagInputComponent.prototype.getTagAtIndex = function (index) {
        var /** @type {?} */ tags = this.tags.toArray();
        return tags[index];
    };
    /**
     * \@name removeItem
     * @desc removes an item from the array of the model
     * @param {?} tag {TagModel}
     * @param {?} index {number}
     * @return {?}
     */
    TagInputComponent.prototype.removeItem = function (tag, index) {
        this.items = this.getItemsWithout(index);
        // if the removed tag was selected, set it as undefined
        if (this.selectedTag === tag) {
            this.selectItem(undefined, false);
        }
        // focus input
        this.focus(true, false);
        // emit remove event
        this.onRemove.emit(tag);
    };
    /**
     * \@name addItem
     * @desc adds the current text model to the items array
     * @param {?=} fromAutocomplete
     * @param {?=} item
     * @param {?=} index
     * @return {?}
     */
    TagInputComponent.prototype.addItem = function (fromAutocomplete, item, index) {
        var _this = this;
        if (fromAutocomplete === void 0) { fromAutocomplete = false; }
        var /** @type {?} */ model = this.getItemDisplay(item);
        /**
         * \@name reset
         */
        var reset = function () {
            // reset control and focus input
            _this.setInputValue('');
            // focus input
            _this.focus(true, false);
        };
        /**
         * \@name validationFilter
         * @param tag
         */
        var validationFilter = function (tag) {
            var isValid = _this.isTagValid(tag, fromAutocomplete) && _this.inputForm.form.valid;
            if (!isValid) {
                _this.onValidationError.emit(tag);
            }
            return isValid;
        };
        /**
         * \@name subscribeFn
         * @param tag
         */
        var subscribeFn = function (tag) {
            _this.appendTag(tag, index);
            // emit event
            _this.onAdd.emit(tag);
            if (!_this.dropdown) {
                return;
            }
            _this.dropdown.hide();
            _this.dropdown.showDropdownIfEmpty ? _this.dropdown.show() : undefined;
        };
        rxjs_Observable__WEBPACK_IMPORTED_MODULE_4__["Observable"]
            .of(model)
            .first()
            .filter(function () { return model.trim() !== ''; })
            .map(function () { return item; })
            .map(this.createTag)
            .filter(validationFilter)
            .subscribe(subscribeFn, undefined, reset);
    };
    /**
     * \@name setupSeparatorKeysListener
     * @return {?}
     */
    TagInputComponent.prototype.setupSeparatorKeysListener = function () {
        var _this = this;
        var /** @type {?} */ useSeparatorKeys = this.separatorKeyCodes.length > 0 || this.separatorKeys.length > 0;
        var /** @type {?} */ listener = function ($event) {
            var /** @type {?} */ hasKeyCode = _this.separatorKeyCodes.indexOf($event.keyCode) >= 0;
            var /** @type {?} */ hasKey = _this.separatorKeys.indexOf($event.key) >= 0;
            if (hasKeyCode || hasKey) {
                $event.preventDefault();
                _this.onAddingRequested(false, _this.formValue);
            }
        };
        listen.call(this, KEYDOWN, listener, useSeparatorKeys);
    };
    /**
     * \@name setUpKeypressListeners
     * @return {?}
     */
    TagInputComponent.prototype.setUpKeypressListeners = function () {
        var _this = this;
        var /** @type {?} */ listener = function ($event) {
            var /** @type {?} */ isCorrectKey = $event.keyCode === 37 || $event.keyCode === 8;
            if (isCorrectKey &&
                !_this.formValue &&
                _this.items.length) {
                _this.tags.last.select.call(_this.tags.last);
            }
        };
        // setting up the keypress listeners
        listen.call(this, KEYDOWN, listener);
    };
    /**
     * \@name setUpKeydownListeners
     * @return {?}
     */
    TagInputComponent.prototype.setUpInputKeydownListeners = function () {
        var _this = this;
        this.inputForm.onKeydown.subscribe(function (event) {
            _this.fireEvents('keydown', event);
            if (event.key === 'Backspace' && _this.formValue === '') {
                event.preventDefault();
            }
        });
    };
    /**
     * \@name setUpOnPasteListener
     * @return {?}
     */
    TagInputComponent.prototype.setUpOnPasteListener = function () {
        var /** @type {?} */ input = this.inputForm.input.nativeElement;
        // attach listener to input
        this.renderer.listen(input, 'paste', this.onPasteCallback);
    };
    /**
     * \@name setUpTextChangeSubscriber
     * @return {?}
     */
    TagInputComponent.prototype.setUpTextChangeSubscriber = function () {
        var _this = this;
        this.inputForm.form
            .valueChanges
            .debounceTime(this.onTextChangeDebounce)
            .map(function () { return _this.formValue; })
            .subscribe(function (value) { return _this.onTextChange.emit(value); });
    };
    /**
     * \@name setUpOnBlurSubscriber
     * @return {?}
     */
    TagInputComponent.prototype.setUpOnBlurSubscriber = function () {
        var _this = this;
        var /** @type {?} */ filterFn = function () {
            return !(_this.dropdown && _this.dropdown.isVisible) && !!_this.formValue;
        };
        this.inputForm
            .onBlur
            .filter(filterFn)
            .subscribe(function () {
            if (_this.addOnBlur) {
                _this.onAddingRequested(false, _this.formValue);
            }
            _this.setInputValue('');
        });
    };
    /**
     * \@name findDupe
     * @param {?} tag
     * @param {?} isFromAutocomplete
     * @return {?}
     */
    TagInputComponent.prototype.findDupe = function (tag, isFromAutocomplete) {
        var _this = this;
        var /** @type {?} */ identifyBy = isFromAutocomplete ? this.dropdown.identifyBy : this.identifyBy;
        var /** @type {?} */ id = tag[identifyBy];
        return this.items.find(function (item) { return _this.getItemValue(item) === id; });
    };
    /**
     * \@name setAnimationMetadata
     * @return {?}
     */
    TagInputComponent.prototype.setAnimationMetadata = function () {
        this.animationMetadata = {
            value: 'in',
            params: Object.assign({}, this.animationDuration)
        };
    };
    return TagInputComponent;
}(TagInputAccessor));
TagInputComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'tag-input',
                providers: [CUSTOM_ACCESSOR],
                styles: ["\n      .dark tag:focus {\n        -webkit-box-shadow: 0 0 0 1px #323232;\n                box-shadow: 0 0 0 1px #323232; }\n\n      .ng2-tag-input.bootstrap3-info {\n        background-color: #fff;\n        display: inline-block;\n        color: #555;\n        vertical-align: middle;\n        max-width: 100%;\n        height: 42px;\n        line-height: 44px; }\n\n      .ng2-tag-input.bootstrap3-info input {\n        border: none;\n        -webkit-box-shadow: none;\n                box-shadow: none;\n        outline: none;\n        background-color: transparent;\n        padding: 0 6px;\n        margin: 0;\n        width: auto;\n        max-width: inherit; }\n\n      .ng2-tag-input.bootstrap3-info .form-control input::-moz-placeholder {\n        color: #777;\n        opacity: 1; }\n\n      .ng2-tag-input.bootstrap3-info .form-control input:-ms-input-placeholder {\n        color: #777; }\n\n      .ng2-tag-input.bootstrap3-info .form-control input::-webkit-input-placeholder {\n        color: #777; }\n\n      .ng2-tag-input.bootstrap3-info input:focus {\n        border: none;\n        -webkit-box-shadow: none;\n                box-shadow: none; }\n\n      .bootstrap3-info.ng2-tag-input.ng2-tag-input--focused {\n        -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.4);\n                box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.4);\n        border: 1px solid #ccc; }\n\n      .bootstrap3-info.ng2-tag-input.ng2-tag-input--invalid {\n        -webkit-box-shadow: inset 0 1px 1px #d9534f;\n                box-shadow: inset 0 1px 1px #d9534f; }\n\n      .ng2-tag-input {\n        display: block;\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: row;\n                flex-direction: row;\n        -ms-flex-wrap: wrap;\n            flex-wrap: wrap;\n        position: relative;\n        -webkit-transition: all 0.25s;\n        transition: all 0.25s;\n        padding: 0.25rem 0;\n        min-height: 32px;\n        cursor: text;\n        border-bottom: 2px solid #efefef; }\n        .ng2-tag-input:focus {\n          outline: 0; }\n        .ng2-tag-input.ng2-tag-input--dropping {\n          opacity: 0.7; }\n        .ng2-tag-input.ng2-tag-input--focused {\n          border-bottom: 2px solid #2196F3; }\n        .ng2-tag-input.ng2-tag-input--invalid {\n          border-bottom: 2px solid #f44336; }\n        .ng2-tag-input.ng2-tag-input--loading {\n          border: none; }\n        .ng2-tag-input.ng2-tag-input--disabled {\n          opacity: 0.5;\n          cursor: not-allowed; }\n        .ng2-tag-input form {\n          margin: 0.1em 0; }\n        .ng2-tag-input .ng2-tags-container {\n          -ms-flex-wrap: wrap;\n              flex-wrap: wrap;\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex; }\n\n      .minimal.ng2-tag-input {\n        display: block;\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: row;\n                flex-direction: row;\n        -ms-flex-wrap: wrap;\n            flex-wrap: wrap;\n        position: relative;\n        cursor: text;\n        border-bottom: 1px solid transparent; }\n        .minimal.ng2-tag-input:focus {\n          outline: 0; }\n        .minimal.ng2-tag-input.ng2-tag-input--dropping {\n          opacity: 0.7; }\n        .minimal.ng2-tag-input.ng2-tag-input--loading {\n          border: none; }\n        .minimal.ng2-tag-input.ng2-tag-input--disabled {\n          opacity: 0.5;\n          cursor: not-allowed; }\n        .minimal.ng2-tag-input .ng2-tags-container {\n          -ms-flex-wrap: wrap;\n              flex-wrap: wrap;\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex; }\n\n      .dark.ng2-tag-input {\n        display: block;\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: row;\n                flex-direction: row;\n        -ms-flex-wrap: wrap;\n            flex-wrap: wrap;\n        position: relative;\n        cursor: text;\n        border-bottom: 2px solid #444; }\n        .dark.ng2-tag-input:focus {\n          outline: 0; }\n        .dark.ng2-tag-input.ng2-tag-input--dropping {\n          opacity: 0.7; }\n        .dark.ng2-tag-input.ng2-tag-input--loading {\n          border: none; }\n        .dark.ng2-tag-input.ng2-tag-input--disabled {\n          opacity: 0.5;\n          cursor: not-allowed; }\n        .dark.ng2-tag-input .ng2-tags-container {\n          -ms-flex-wrap: wrap;\n              flex-wrap: wrap;\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex; }\n\n      .bootstrap.ng2-tag-input {\n        display: block;\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: row;\n                flex-direction: row;\n        -ms-flex-wrap: wrap;\n            flex-wrap: wrap;\n        position: relative;\n        cursor: text;\n        border-bottom: 2px solid #efefef; }\n        .bootstrap.ng2-tag-input:focus {\n          outline: 0; }\n        .bootstrap.ng2-tag-input.ng2-tag-input--dropping {\n          opacity: 0.7; }\n        .bootstrap.ng2-tag-input.ng2-tag-input--focused {\n          border-bottom: 2px solid #0275d8; }\n        .bootstrap.ng2-tag-input.ng2-tag-input--invalid {\n          border-bottom: 2px solid #d9534f; }\n        .bootstrap.ng2-tag-input.ng2-tag-input--loading {\n          border: none; }\n        .bootstrap.ng2-tag-input.ng2-tag-input--disabled {\n          opacity: 0.5;\n          cursor: not-allowed; }\n        .bootstrap.ng2-tag-input .ng2-tags-container {\n          -ms-flex-wrap: wrap;\n              flex-wrap: wrap;\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex; }\n\n      .bootstrap3-info.ng2-tag-input {\n        display: block;\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: row;\n                flex-direction: row;\n        -ms-flex-wrap: wrap;\n            flex-wrap: wrap;\n        position: relative;\n        padding: 4px;\n        cursor: text;\n        -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n                box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n        border-radius: 4px; }\n        .bootstrap3-info.ng2-tag-input:focus {\n          outline: 0; }\n        .bootstrap3-info.ng2-tag-input.ng2-tag-input--dropping {\n          opacity: 0.7; }\n        .bootstrap3-info.ng2-tag-input.ng2-tag-input--invalid {\n          border-bottom: 1px solid #d9534f; }\n        .bootstrap3-info.ng2-tag-input.ng2-tag-input--loading {\n          border: none; }\n        .bootstrap3-info.ng2-tag-input.ng2-tag-input--disabled {\n          opacity: 0.5;\n          cursor: not-allowed; }\n        .bootstrap3-info.ng2-tag-input form {\n          margin: 0.1em 0; }\n        .bootstrap3-info.ng2-tag-input .ng2-tags-container {\n          -ms-flex-wrap: wrap;\n              flex-wrap: wrap;\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex; }\n\n      .error-message {\n        font-size: 0.8em;\n        color: #f44336;\n        margin: 0.5em 0 0 0; }\n\n      .bootstrap .error-message {\n        color: #d9534f; }\n\n      .progress-bar, .progress-bar:before {\n        height: 2px;\n        width: 100%;\n        margin: 0; }\n\n      .progress-bar {\n        background-color: #2196F3;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        position: absolute;\n        bottom: 0; }\n\n      .progress-bar:before {\n        background-color: #82c4f8;\n        content: '';\n        -webkit-animation: running-progress 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;\n        animation: running-progress 2s cubic-bezier(0.4, 0, 0.2, 1) infinite; }\n\n      @-webkit-keyframes running-progress {\n        0% {\n          margin-left: 0;\n          margin-right: 100%; }\n        50% {\n          margin-left: 25%;\n          margin-right: 0; }\n        100% {\n          margin-left: 100%;\n          margin-right: 0; } }\n\n      @keyframes running-progress {\n        0% {\n          margin-left: 0;\n          margin-right: 100%; }\n        50% {\n          margin-left: 25%;\n          margin-right: 0; }\n        100% {\n          margin-left: 100%;\n          margin-right: 0; } }\n\n      tag {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: row;\n                flex-direction: row;\n        -ms-flex-wrap: wrap;\n            flex-wrap: wrap;\n        font-family: \"Roboto\", \"Helvetica Neue\", sans-serif;\n        font-weight: 400;\n        font-size: 1em;\n        letter-spacing: 0.05rem;\n        color: #444;\n        border-radius: 16px;\n        -webkit-transition: all 0.3s;\n        transition: all 0.3s;\n        margin: 0.1rem 0.3rem 0.1rem 0;\n        padding: 0.08rem 0.45rem;\n        height: 32px;\n        line-height: 34px;\n        background: #efefef;\n        -webkit-user-select: none;\n           -moz-user-select: none;\n            -ms-user-select: none;\n                user-select: none;\n        overflow: hidden;\n        outline: 0;\n        cursor: pointer;\n        position: relative; }\n        tag:not(.readonly):not(.tag--editing):focus {\n          background: #2196F3;\n          color: #fff; }\n        tag:not(.readonly):not(.tag--editing):active {\n          background: #0d8aee;\n          color: #fff; }\n        tag:not(:focus):not(.tag--editing):not(:active):not(.readonly):hover {\n          background: #e2e2e2;\n          color: initial; }\n        tag.readonly {\n          cursor: default; }\n        tag.readonly:focus, tag:focus {\n          outline: 0; }\n        tag.tag--editing {\n          background-color: #fff;\n          border: 1px solid #ccc;\n          cursor: text; }\n\n      .minimal tag {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: row;\n                flex-direction: row;\n        -ms-flex-wrap: wrap;\n            flex-wrap: wrap;\n        border-radius: 0;\n        background: #f9f9f9;\n        -webkit-user-select: none;\n           -moz-user-select: none;\n            -ms-user-select: none;\n                user-select: none;\n        overflow: hidden;\n        outline: 0;\n        cursor: pointer;\n        position: relative; }\n        .minimal tag:not(.readonly):not(.tag--editing):focus {\n          background: #d0d0d0;\n          color: initial; }\n        .minimal tag:not(.readonly):not(.tag--editing):active {\n          background: #d0d0d0;\n          color: initial; }\n        .minimal tag:not(:focus):not(.tag--editing):not(:active):not(.readonly):hover {\n          background: #ececec; }\n        .minimal tag.readonly {\n          cursor: default; }\n        .minimal tag.readonly:focus, .minimal tag:focus {\n          outline: 0; }\n        .minimal tag.tag--editing {\n          cursor: text; }\n\n      .dark tag {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: row;\n                flex-direction: row;\n        -ms-flex-wrap: wrap;\n            flex-wrap: wrap;\n        color: #f9f9f9;\n        border-radius: 3px;\n        background: #444;\n        -webkit-user-select: none;\n           -moz-user-select: none;\n            -ms-user-select: none;\n                user-select: none;\n        overflow: hidden;\n        outline: 0;\n        cursor: pointer;\n        position: relative; }\n        .dark tag:not(.readonly):not(.tag--editing):focus {\n          background: #efefef;\n          color: #444; }\n        .dark tag:not(:focus):not(.tag--editing):not(:active):not(.readonly):hover {\n          background: #2b2b2b;\n          color: #f9f9f9; }\n        .dark tag.readonly {\n          cursor: default; }\n        .dark tag.readonly:focus, .dark tag:focus {\n          outline: 0; }\n        .dark tag.tag--editing {\n          cursor: text; }\n\n      .bootstrap tag {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: row;\n                flex-direction: row;\n        -ms-flex-wrap: wrap;\n            flex-wrap: wrap;\n        color: #f9f9f9;\n        border-radius: 0.25rem;\n        background: #0275d8;\n        -webkit-user-select: none;\n           -moz-user-select: none;\n            -ms-user-select: none;\n                user-select: none;\n        overflow: hidden;\n        outline: 0;\n        cursor: pointer;\n        position: relative; }\n        .bootstrap tag:not(.readonly):not(.tag--editing):focus {\n          background: #025aa5; }\n        .bootstrap tag:not(.readonly):not(.tag--editing):active {\n          background: #025aa5; }\n        .bootstrap tag:not(:focus):not(.tag--editing):not(:active):not(.readonly):hover {\n          background: #0267bf;\n          color: #f9f9f9; }\n        .bootstrap tag.readonly {\n          cursor: default; }\n        .bootstrap tag.readonly:focus, .bootstrap tag:focus {\n          outline: 0; }\n        .bootstrap tag.tag--editing {\n          cursor: text; }\n\n      .bootstrap3-info tag {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: row;\n                flex-direction: row;\n        -ms-flex-wrap: wrap;\n            flex-wrap: wrap;\n        font-family: inherit;\n        font-weight: 400;\n        font-size: 95%;\n        color: #fff;\n        border-radius: 0.25em;\n        background: #5bc0de;\n        -webkit-user-select: none;\n           -moz-user-select: none;\n            -ms-user-select: none;\n                user-select: none;\n        overflow: hidden;\n        outline: 0;\n        cursor: pointer;\n        position: relative;\n        padding: .25em .6em;\n        text-align: center;\n        white-space: nowrap; }\n        .bootstrap3-info tag:not(.readonly):not(.tag--editing):focus {\n          background: #28a1c5; }\n        .bootstrap3-info tag:not(.readonly):not(.tag--editing):active {\n          background: #28a1c5; }\n        .bootstrap3-info tag:not(:focus):not(.tag--editing):not(:active):not(.readonly):hover {\n          background: #46b8da;\n          color: #fff; }\n        .bootstrap3-info tag.readonly {\n          cursor: default; }\n        .bootstrap3-info tag.readonly:focus, .bootstrap3-info tag:focus {\n          outline: 0; }\n        .bootstrap3-info tag.tag--editing {\n          cursor: text; }\n\n      :host {\n        display: block; }\n    "],
                template: "\n      <!-- CONTAINER -->\n\n      <div ngClass=\"ng2-tag-input {{ theme || '' }}\"\n           (click)=\"focus(true, false)\"\n           [attr.tabindex]=\"-1\"\n\n           (drop)=\"dragZone ? onTagDropped($event, undefined) : undefined\"\n           (dragenter)=\"dragZone ? onDragOver($event) : undefined\"\n           (dragover)=\"dragZone ? onDragOver($event) : undefined\"\n           (dragend)=\"dragZone ? dragProvider.onDragEnd() : undefined\"\n\n           [class.ng2-tag-input--dropping]=\"isDropping()\"\n           [class.ng2-tag-input--disabled]=\"disable\"\n           [class.ng2-tag-input--loading]=\"isLoading\"\n           [class.ng2-tag-input--invalid]=\"hasErrors()\"\n           [class.ng2-tag-input--focused]=\"isInputFocused()\">\n\n          <!-- TAGS -->\n          <div class=\"ng2-tags-container\">\n              <tag *ngFor=\"let item of items; let i = index; trackBy: trackBy\"\n\n                   (onSelect)=\"selectItem(item)\"\n                   (onRemove)=\"onRemoveRequested(item, i)\"\n                   (onKeyDown)=\"handleKeydown($event)\"\n                   (onTagEdited)=\"onTagEdited.emit($event)\"\n                   (onBlur)=\"onTagBlurred($event, i)\"\n                   draggable=\"{{ editable }}\"\n\n                   (dragstart)=\"dragZone ? onDragStarted($event, item, i) : undefined\"\n                   (drop)=\"dragZone ? onTagDropped($event, i) : undefined\"\n                   (dragenter)=\"dragZone ? onDragOver($event) : undefined\"\n                   (dragover)=\"dragZone ? onDragOver($event, i) : undefined\"\n                   (dragleave)=\"dragZone ? dragProvider.onDragEnd() : undefined\"\n\n                   [attr.tabindex]=\"0\"\n                   [disabled]=\"disable\"\n                   [@animation]=\"animationMetadata\"\n                   [hasRipple]=\"ripple\"\n                   [index]=\"i\"\n                   [removable]=\"removable\"\n                   [editable]=\"editable\"\n                   [displayBy]=\"displayBy\"\n                   [identifyBy]=\"identifyBy\"\n                   [template]=\"!!hasCustomTemplate() ? templates.first : undefined\"\n                   [draggable]=\"dragZone\"\n                   [model]=\"item\">\n              </tag>\n\n              <tag-input-form\n                  (onSubmit)=\"onAddingRequested(false, formValue)\"\n                  (onBlur)=\"blur()\"\n                  (click)=\"dropdown ? dropdown.show() : undefined\"\n                  (onKeydown)=\"fireEvents('keydown', $event)\"\n                  (onKeyup)=\"fireEvents('keyup', $event)\"\n\n                  [(inputText)]=\"inputText\"\n                  [disabled]=\"disable\"\n                  [validators]=\"validators\"\n                  [asyncValidators]=\"asyncValidators\"\n                  [hidden]=\"maxItemsReached\"\n                  [placeholder]=\"items.length ? placeholder : secondaryPlaceholder\"\n                  [inputClass]=\"inputClass\"\n                  [inputId]=\"inputId\"\n                  [tabindex]=\"tabindex\">\n              </tag-input-form>\n          </div>\n\n          <div class=\"progress-bar\" *ngIf=\"isLoading\"></div>\n      </div>\n\n      <!-- ERRORS -->\n      <div *ngIf=\"hasErrors()\" class=\"error-messages {{ theme || '' }}\">\n          <p *ngFor=\"let error of inputForm.getErrorMessages(errorMessages)\" class=\"error-message\">\n              <span>{{ error }}</span>\n          </p>\n      </div>\n\n      <ng-content></ng-content>\n    ",
                animations: animations$1
            },] },
];
/**
 * @nocollapse
 */
TagInputComponent.ctorParameters = function () { return [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], },
    { type: DragProvider, },
]; };
TagInputComponent.propDecorators = {
    'separatorKeys': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'separatorKeyCodes': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'placeholder': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'secondaryPlaceholder': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'maxItems': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'validators': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'asyncValidators': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'onlyFromAutocomplete': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'errorMessages': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'theme': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'onTextChangeDebounce': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'inputId': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'inputClass': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'clearOnBlur': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'hideForm': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'addOnBlur': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'addOnPaste': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'pasteSplitPattern': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'blinkIfDupe': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'removable': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'editable': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'allowDupes': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'modelAsStrings': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'trimTags': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'inputText': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'ripple': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'tabindex': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'disable': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'dragZone': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'onRemoving': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'onAdding': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'animationDuration': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'onAdd': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    'onRemove': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    'onSelect': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    'onFocus': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    'onBlur': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    'onTextChange': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    'onPaste': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    'onValidationError': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    'onTagEdited': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    'dropdown': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [TagInputDropdown,] },],
    'templates': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], { descendants: false },] },],
    'inputForm': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: [TagInputForm,] },],
    'tags': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"], args: [TagComponent,] },],
    'inputTextChange': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    'tabindexAttr': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['attr.tabindex',] },],
};
var DeleteIconComponent = (function () {
    function DeleteIconComponent() {
    }
    return DeleteIconComponent;
}());
DeleteIconComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'delete-icon',
                template: "\n      <span>\n          <svg height=\"16px\" viewBox=\"0 0 32 32\" width=\"16px\">\n              <path d=\"M17.459,16.014l8.239-8.194c0.395-0.391,0.395-1.024,0-1.414c-0.394-0.391-1.034-0.391-1.428,0  l-8.232,8.187L7.73,6.284c-0.394-0.395-1.034-0.395-1.428,0c-0.394,0.396-0.394,1.037,0,1.432l8.302,8.303l-8.332,8.286  c-0.394,0.391-0.394,1.024,0,1.414c0.394,0.391,1.034,0.391,1.428,0l8.325-8.279l8.275,8.276c0.394,0.395,1.034,0.395,1.428,0  c0.394-0.396,0.394-1.037,0-1.432L17.459,16.014z\"\n                    fill=\"#121313\" />\n          </svg>\n      </span>\n    ",
                styles: ["\n      .dark tag:focus {\n        -webkit-box-shadow: 0 0 0 1px #323232;\n                box-shadow: 0 0 0 1px #323232; }\n\n      .ng2-tag-input.bootstrap3-info {\n        background-color: #fff;\n        display: inline-block;\n        color: #555;\n        vertical-align: middle;\n        max-width: 100%;\n        height: 42px;\n        line-height: 44px; }\n\n      .ng2-tag-input.bootstrap3-info input {\n        border: none;\n        -webkit-box-shadow: none;\n                box-shadow: none;\n        outline: none;\n        background-color: transparent;\n        padding: 0 6px;\n        margin: 0;\n        width: auto;\n        max-width: inherit; }\n\n      .ng2-tag-input.bootstrap3-info .form-control input::-moz-placeholder {\n        color: #777;\n        opacity: 1; }\n\n      .ng2-tag-input.bootstrap3-info .form-control input:-ms-input-placeholder {\n        color: #777; }\n\n      .ng2-tag-input.bootstrap3-info .form-control input::-webkit-input-placeholder {\n        color: #777; }\n\n      .ng2-tag-input.bootstrap3-info input:focus {\n        border: none;\n        -webkit-box-shadow: none;\n                box-shadow: none; }\n\n      .bootstrap3-info.ng2-tag-input.ng2-tag-input--focused {\n        -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.4);\n                box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.4);\n        border: 1px solid #ccc; }\n\n      .bootstrap3-info.ng2-tag-input.ng2-tag-input--invalid {\n        -webkit-box-shadow: inset 0 1px 1px #d9534f;\n                box-shadow: inset 0 1px 1px #d9534f; }\n\n      .ng2-tag-input {\n        display: block;\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: row;\n                flex-direction: row;\n        -ms-flex-wrap: wrap;\n            flex-wrap: wrap;\n        position: relative;\n        -webkit-transition: all 0.25s;\n        transition: all 0.25s;\n        padding: 0.25rem 0;\n        min-height: 32px;\n        cursor: text;\n        border-bottom: 2px solid #efefef; }\n        .ng2-tag-input:focus {\n          outline: 0; }\n        .ng2-tag-input.ng2-tag-input--dropping {\n          opacity: 0.7; }\n        .ng2-tag-input.ng2-tag-input--focused {\n          border-bottom: 2px solid #2196F3; }\n        .ng2-tag-input.ng2-tag-input--invalid {\n          border-bottom: 2px solid #f44336; }\n        .ng2-tag-input.ng2-tag-input--loading {\n          border: none; }\n        .ng2-tag-input.ng2-tag-input--disabled {\n          opacity: 0.5;\n          cursor: not-allowed; }\n        .ng2-tag-input form {\n          margin: 0.1em 0; }\n        .ng2-tag-input .ng2-tags-container {\n          -ms-flex-wrap: wrap;\n              flex-wrap: wrap;\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex; }\n\n      .minimal.ng2-tag-input {\n        display: block;\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: row;\n                flex-direction: row;\n        -ms-flex-wrap: wrap;\n            flex-wrap: wrap;\n        position: relative;\n        cursor: text;\n        border-bottom: 1px solid transparent; }\n        .minimal.ng2-tag-input:focus {\n          outline: 0; }\n        .minimal.ng2-tag-input.ng2-tag-input--dropping {\n          opacity: 0.7; }\n        .minimal.ng2-tag-input.ng2-tag-input--loading {\n          border: none; }\n        .minimal.ng2-tag-input.ng2-tag-input--disabled {\n          opacity: 0.5;\n          cursor: not-allowed; }\n        .minimal.ng2-tag-input .ng2-tags-container {\n          -ms-flex-wrap: wrap;\n              flex-wrap: wrap;\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex; }\n\n      .dark.ng2-tag-input {\n        display: block;\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: row;\n                flex-direction: row;\n        -ms-flex-wrap: wrap;\n            flex-wrap: wrap;\n        position: relative;\n        cursor: text;\n        border-bottom: 2px solid #444; }\n        .dark.ng2-tag-input:focus {\n          outline: 0; }\n        .dark.ng2-tag-input.ng2-tag-input--dropping {\n          opacity: 0.7; }\n        .dark.ng2-tag-input.ng2-tag-input--loading {\n          border: none; }\n        .dark.ng2-tag-input.ng2-tag-input--disabled {\n          opacity: 0.5;\n          cursor: not-allowed; }\n        .dark.ng2-tag-input .ng2-tags-container {\n          -ms-flex-wrap: wrap;\n              flex-wrap: wrap;\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex; }\n\n      .bootstrap.ng2-tag-input {\n        display: block;\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: row;\n                flex-direction: row;\n        -ms-flex-wrap: wrap;\n            flex-wrap: wrap;\n        position: relative;\n        cursor: text;\n        border-bottom: 2px solid #efefef; }\n        .bootstrap.ng2-tag-input:focus {\n          outline: 0; }\n        .bootstrap.ng2-tag-input.ng2-tag-input--dropping {\n          opacity: 0.7; }\n        .bootstrap.ng2-tag-input.ng2-tag-input--focused {\n          border-bottom: 2px solid #0275d8; }\n        .bootstrap.ng2-tag-input.ng2-tag-input--invalid {\n          border-bottom: 2px solid #d9534f; }\n        .bootstrap.ng2-tag-input.ng2-tag-input--loading {\n          border: none; }\n        .bootstrap.ng2-tag-input.ng2-tag-input--disabled {\n          opacity: 0.5;\n          cursor: not-allowed; }\n        .bootstrap.ng2-tag-input .ng2-tags-container {\n          -ms-flex-wrap: wrap;\n              flex-wrap: wrap;\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex; }\n\n      .bootstrap3-info.ng2-tag-input {\n        display: block;\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: row;\n                flex-direction: row;\n        -ms-flex-wrap: wrap;\n            flex-wrap: wrap;\n        position: relative;\n        padding: 4px;\n        cursor: text;\n        -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n                box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n        border-radius: 4px; }\n        .bootstrap3-info.ng2-tag-input:focus {\n          outline: 0; }\n        .bootstrap3-info.ng2-tag-input.ng2-tag-input--dropping {\n          opacity: 0.7; }\n        .bootstrap3-info.ng2-tag-input.ng2-tag-input--invalid {\n          border-bottom: 1px solid #d9534f; }\n        .bootstrap3-info.ng2-tag-input.ng2-tag-input--loading {\n          border: none; }\n        .bootstrap3-info.ng2-tag-input.ng2-tag-input--disabled {\n          opacity: 0.5;\n          cursor: not-allowed; }\n        .bootstrap3-info.ng2-tag-input form {\n          margin: 0.1em 0; }\n        .bootstrap3-info.ng2-tag-input .ng2-tags-container {\n          -ms-flex-wrap: wrap;\n              flex-wrap: wrap;\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex; }\n\n      .error-message {\n        font-size: 0.8em;\n        color: #f44336;\n        margin: 0.5em 0 0 0; }\n\n      .bootstrap .error-message {\n        color: #d9534f; }\n\n      :host(delete-icon) {\n        width: 20px;\n        height: 16px;\n        -webkit-transition: all 0.15s;\n        transition: all 0.15s;\n        display: inline-block;\n        text-align: right; }\n        :host(delete-icon) path {\n          fill: #444; }\n        :host(delete-icon) svg {\n          vertical-align: bottom;\n          height: 34px; }\n\n      :host(delete-icon):hover {\n        -webkit-transform: scale(1.5) translateY(-3px);\n                transform: scale(1.5) translateY(-3px); }\n\n      :host-context(.dark) {\n        text-align: right; }\n        :host-context(.dark) path {\n          fill: #fff; }\n        :host-context(.dark) svg {\n          vertical-align: bottom;\n          height: 34px; }\n\n      :host-context(.minimal) {\n        text-align: right; }\n        :host-context(.minimal) path {\n          fill: #444; }\n        :host-context(.minimal) svg {\n          vertical-align: bottom;\n          height: 34px; }\n\n      :host-context(.bootstrap) {\n        text-align: right; }\n        :host-context(.bootstrap) path {\n          fill: #fff; }\n        :host-context(.bootstrap) svg {\n          vertical-align: bottom;\n          height: 34px; }\n\n      :host-context(tag:focus) path,\n      :host-context(tag:active) path {\n        fill: #fff; }\n\n      :host-context(.dark tag:focus) path,\n      :host-context(.dark tag:active) path {\n        fill: #000; }\n\n      :host-context(.minimal tag:focus) path,\n      :host-context(.minimal tag:active) path {\n        fill: #000; }\n\n      :host-context(.bootstrap tag:focus) path,\n      :host-context(.bootstrap tag:active) path {\n        fill: #fff; }\n\n      :host-context(.bootstrap3-info) {\n        height: inherit; }\n        :host-context(.bootstrap3-info) path {\n          fill: #fff; }\n    "]
            },] },
];
/**
 * @nocollapse
 */
DeleteIconComponent.ctorParameters = function () { return []; };
var optionsProvider = new OptionsProvider();
var TagInputModule = (function () {
    function TagInputModule() {
    }
    /**
     * \@name withDefaults
     * @param {?} options {Options}
     * @return {?}
     */
    TagInputModule.withDefaults = function (options) {
        optionsProvider.setOptions(options);
    };
    return TagInputModule;
}());
TagInputModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                    ng2_material_dropdown__WEBPACK_IMPORTED_MODULE_3__["Ng2DropdownModule"]
                ],
                declarations: [
                    TagInputComponent,
                    DeleteIconComponent,
                    TagInputForm,
                    TagComponent,
                    HighlightPipe,
                    TagInputDropdown,
                    TagRipple
                ],
                exports: [
                    TagInputComponent,
                    DeleteIconComponent,
                    TagInputForm,
                    TagComponent,
                    HighlightPipe,
                    TagInputDropdown,
                    TagRipple
                ],
                providers: [
                    DragProvider,
                    { provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["COMPOSITION_BUFFER_MODE"], useValue: false },
                ]
            },] },
];
/**
 * @nocollapse
 */
TagInputModule.ctorParameters = function () { return []; };
/**
 * Generated bundle index. Do not edit.
 */

//# sourceMappingURL=ngx-chips.es5.js.map


/***/ }),

/***/ "./node_modules/nouislider/distribute/nouislider.js":
/*!**********************************************************!*\
  !*** ./node_modules/nouislider/distribute/nouislider.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! nouislider - 9.2.0 - 2017-01-11 10:35:34 */

(function (factory) {

    if ( true ) {

        // AMD. Register as an anonymous module.
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

    } else {}

}(function( ){

	'use strict';

	var VERSION = '9.2.0';


	// Creates a node, adds it to target, returns the new node.
	function addNodeTo ( target, className ) {
		var div = document.createElement('div');
		addClass(div, className);
		target.appendChild(div);
		return div;
	}

	// Removes duplicates from an array.
	function unique ( array ) {
		return array.filter(function(a){
			return !this[a] ? this[a] = true : false;
		}, {});
	}

	// Round a value to the closest 'to'.
	function closest ( value, to ) {
		return Math.round(value / to) * to;
	}

	// Current position of an element relative to the document.
	function offset ( elem, orientation ) {

	var rect = elem.getBoundingClientRect(),
		doc = elem.ownerDocument,
		docElem = doc.documentElement,
		pageOffset = getPageOffset();

		// getBoundingClientRect contains left scroll in Chrome on Android.
		// I haven't found a feature detection that proves this. Worst case
		// scenario on mis-match: the 'tap' feature on horizontal sliders breaks.
		if ( /webkit.*Chrome.*Mobile/i.test(navigator.userAgent) ) {
			pageOffset.x = 0;
		}

		return orientation ? (rect.top + pageOffset.y - docElem.clientTop) : (rect.left + pageOffset.x - docElem.clientLeft);
	}

	// Checks whether a value is numerical.
	function isNumeric ( a ) {
		return typeof a === 'number' && !isNaN( a ) && isFinite( a );
	}

	// Sets a class and removes it after [duration] ms.
	function addClassFor ( element, className, duration ) {
		if (duration > 0) {
		addClass(element, className);
			setTimeout(function(){
				removeClass(element, className);
			}, duration);
		}
	}

	// Limits a value to 0 - 100
	function limit ( a ) {
		return Math.max(Math.min(a, 100), 0);
	}

	// Wraps a variable as an array, if it isn't one yet.
	// Note that an input array is returned by reference!
	function asArray ( a ) {
		return Array.isArray(a) ? a : [a];
	}

	// Counts decimals
	function countDecimals ( numStr ) {
		numStr = String(numStr);
		var pieces = numStr.split(".");
		return pieces.length > 1 ? pieces[1].length : 0;
	}

	// http://youmightnotneedjquery.com/#add_class
	function addClass ( el, className ) {
		if ( el.classList ) {
			el.classList.add(className);
		} else {
			el.className += ' ' + className;
		}
	}

	// http://youmightnotneedjquery.com/#remove_class
	function removeClass ( el, className ) {
		if ( el.classList ) {
			el.classList.remove(className);
		} else {
			el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
		}
	}

	// https://plainjs.com/javascript/attributes/adding-removing-and-testing-for-classes-9/
	function hasClass ( el, className ) {
		return el.classList ? el.classList.contains(className) : new RegExp('\\b' + className + '\\b').test(el.className);
	}

	// https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollY#Notes
	function getPageOffset ( ) {

		var supportPageOffset = window.pageXOffset !== undefined,
			isCSS1Compat = ((document.compatMode || "") === "CSS1Compat"),
			x = supportPageOffset ? window.pageXOffset : isCSS1Compat ? document.documentElement.scrollLeft : document.body.scrollLeft,
			y = supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;

		return {
			x: x,
			y: y
		};
	}

	// we provide a function to compute constants instead
	// of accessing window.* as soon as the module needs it
	// so that we do not compute anything if not needed
	function getActions ( ) {

		// Determine the events to bind. IE11 implements pointerEvents without
		// a prefix, which breaks compatibility with the IE10 implementation.
		return window.navigator.pointerEnabled ? {
			start: 'pointerdown',
			move: 'pointermove',
			end: 'pointerup'
		} : window.navigator.msPointerEnabled ? {
			start: 'MSPointerDown',
			move: 'MSPointerMove',
			end: 'MSPointerUp'
		} : {
			start: 'mousedown touchstart',
			move: 'mousemove touchmove',
			end: 'mouseup touchend'
		};
	}


// Value calculation

	// Determine the size of a sub-range in relation to a full range.
	function subRangeRatio ( pa, pb ) {
		return (100 / (pb - pa));
	}

	// (percentage) How many percent is this value of this range?
	function fromPercentage ( range, value ) {
		return (value * 100) / ( range[1] - range[0] );
	}

	// (percentage) Where is this value on this range?
	function toPercentage ( range, value ) {
		return fromPercentage( range, range[0] < 0 ?
			value + Math.abs(range[0]) :
				value - range[0] );
	}

	// (value) How much is this percentage on this range?
	function isPercentage ( range, value ) {
		return ((value * ( range[1] - range[0] )) / 100) + range[0];
	}


// Range conversion

	function getJ ( value, arr ) {

		var j = 1;

		while ( value >= arr[j] ){
			j += 1;
		}

		return j;
	}

	// (percentage) Input a value, find where, on a scale of 0-100, it applies.
	function toStepping ( xVal, xPct, value ) {

		if ( value >= xVal.slice(-1)[0] ){
			return 100;
		}

		var j = getJ( value, xVal ), va, vb, pa, pb;

		va = xVal[j-1];
		vb = xVal[j];
		pa = xPct[j-1];
		pb = xPct[j];

		return pa + (toPercentage([va, vb], value) / subRangeRatio (pa, pb));
	}

	// (value) Input a percentage, find where it is on the specified range.
	function fromStepping ( xVal, xPct, value ) {

		// There is no range group that fits 100
		if ( value >= 100 ){
			return xVal.slice(-1)[0];
		}

		var j = getJ( value, xPct ), va, vb, pa, pb;

		va = xVal[j-1];
		vb = xVal[j];
		pa = xPct[j-1];
		pb = xPct[j];

		return isPercentage([va, vb], (value - pa) * subRangeRatio (pa, pb));
	}

	// (percentage) Get the step that applies at a certain value.
	function getStep ( xPct, xSteps, snap, value ) {

		if ( value === 100 ) {
			return value;
		}

		var j = getJ( value, xPct ), a, b;

		// If 'snap' is set, steps are used as fixed points on the slider.
		if ( snap ) {

			a = xPct[j-1];
			b = xPct[j];

			// Find the closest position, a or b.
			if ((value - a) > ((b-a)/2)){
				return b;
			}

			return a;
		}

		if ( !xSteps[j-1] ){
			return value;
		}

		return xPct[j-1] + closest(
			value - xPct[j-1],
			xSteps[j-1]
		);
	}


// Entry parsing

	function handleEntryPoint ( index, value, that ) {

		var percentage;

		// Wrap numerical input in an array.
		if ( typeof value === "number" ) {
			value = [value];
		}

		// Reject any invalid input, by testing whether value is an array.
		if ( Object.prototype.toString.call( value ) !== '[object Array]' ){
			throw new Error("noUiSlider (" + VERSION + "): 'range' contains invalid value.");
		}

		// Covert min/max syntax to 0 and 100.
		if ( index === 'min' ) {
			percentage = 0;
		} else if ( index === 'max' ) {
			percentage = 100;
		} else {
			percentage = parseFloat( index );
		}

		// Check for correct input.
		if ( !isNumeric( percentage ) || !isNumeric( value[0] ) ) {
			throw new Error("noUiSlider (" + VERSION + "): 'range' value isn't numeric.");
		}

		// Store values.
		that.xPct.push( percentage );
		that.xVal.push( value[0] );

		// NaN will evaluate to false too, but to keep
		// logging clear, set step explicitly. Make sure
		// not to override the 'step' setting with false.
		if ( !percentage ) {
			if ( !isNaN( value[1] ) ) {
				that.xSteps[0] = value[1];
			}
		} else {
			that.xSteps.push( isNaN(value[1]) ? false : value[1] );
		}

		that.xHighestCompleteStep.push(0);
	}

	function handleStepPoint ( i, n, that ) {

		// Ignore 'false' stepping.
		if ( !n ) {
			return true;
		}

		// Factor to range ratio
		that.xSteps[i] = fromPercentage([
			 that.xVal[i]
			,that.xVal[i+1]
		], n) / subRangeRatio (
			that.xPct[i],
			that.xPct[i+1] );

		var totalSteps = (that.xVal[i+1] - that.xVal[i]) / that.xNumSteps[i];
		var highestStep = Math.ceil(Number(totalSteps.toFixed(3)) - 1);
		var step = that.xVal[i] + (that.xNumSteps[i] * highestStep);

		that.xHighestCompleteStep[i] = step;
	}


// Interface

	// The interface to Spectrum handles all direction-based
	// conversions, so the above values are unaware.

	function Spectrum ( entry, snap, direction, singleStep ) {

		this.xPct = [];
		this.xVal = [];
		this.xSteps = [ singleStep || false ];
		this.xNumSteps = [ false ];
		this.xHighestCompleteStep = [];

		this.snap = snap;
		this.direction = direction;

		var index, ordered = [ /* [0, 'min'], [1, '50%'], [2, 'max'] */ ];

		// Map the object keys to an array.
		for ( index in entry ) {
			if ( entry.hasOwnProperty(index) ) {
				ordered.push([entry[index], index]);
			}
		}

		// Sort all entries by value (numeric sort).
		if ( ordered.length && typeof ordered[0][0] === "object" ) {
			ordered.sort(function(a, b) { return a[0][0] - b[0][0]; });
		} else {
			ordered.sort(function(a, b) { return a[0] - b[0]; });
		}


		// Convert all entries to subranges.
		for ( index = 0; index < ordered.length; index++ ) {
			handleEntryPoint(ordered[index][1], ordered[index][0], this);
		}

		// Store the actual step values.
		// xSteps is sorted in the same order as xPct and xVal.
		this.xNumSteps = this.xSteps.slice(0);

		// Convert all numeric steps to the percentage of the subrange they represent.
		for ( index = 0; index < this.xNumSteps.length; index++ ) {
			handleStepPoint(index, this.xNumSteps[index], this);
		}
	}

	Spectrum.prototype.getMargin = function ( value ) {

		var step = this.xNumSteps[0];

		if ( step && ((value / step) % 1) !== 0 ) {
			throw new Error("noUiSlider (" + VERSION + "): 'limit', 'margin' and 'padding' must be divisible by step.");
		}

		return this.xPct.length === 2 ? fromPercentage(this.xVal, value) : false;
	};

	Spectrum.prototype.toStepping = function ( value ) {

		value = toStepping( this.xVal, this.xPct, value );

		return value;
	};

	Spectrum.prototype.fromStepping = function ( value ) {

		return fromStepping( this.xVal, this.xPct, value );
	};

	Spectrum.prototype.getStep = function ( value ) {

		value = getStep(this.xPct, this.xSteps, this.snap, value );

		return value;
	};

	Spectrum.prototype.getNearbySteps = function ( value ) {

		var j = getJ(value, this.xPct);

		return {
			stepBefore: { startValue: this.xVal[j-2], step: this.xNumSteps[j-2], highestStep: this.xHighestCompleteStep[j-2] },
			thisStep: { startValue: this.xVal[j-1], step: this.xNumSteps[j-1], highestStep: this.xHighestCompleteStep[j-1] },
			stepAfter: { startValue: this.xVal[j-0], step: this.xNumSteps[j-0], highestStep: this.xHighestCompleteStep[j-0] }
		};
	};

	Spectrum.prototype.countStepDecimals = function () {
		var stepDecimals = this.xNumSteps.map(countDecimals);
		return Math.max.apply(null, stepDecimals);
 	};

	// Outside testing
	Spectrum.prototype.convert = function ( value ) {
		return this.getStep(this.toStepping(value));
	};

/*	Every input option is tested and parsed. This'll prevent
	endless validation in internal methods. These tests are
	structured with an item for every option available. An
	option can be marked as required by setting the 'r' flag.
	The testing function is provided with three arguments:
		- The provided value for the option;
		- A reference to the options object;
		- The name for the option;

	The testing function returns false when an error is detected,
	or true when everything is OK. It can also modify the option
	object, to make sure all values can be correctly looped elsewhere. */

	var defaultFormatter = { 'to': function( value ){
		return value !== undefined && value.toFixed(2);
	}, 'from': Number };

	function testStep ( parsed, entry ) {

		if ( !isNumeric( entry ) ) {
			throw new Error("noUiSlider (" + VERSION + "): 'step' is not numeric.");
		}

		// The step option can still be used to set stepping
		// for linear sliders. Overwritten if set in 'range'.
		parsed.singleStep = entry;
	}

	function testRange ( parsed, entry ) {

		// Filter incorrect input.
		if ( typeof entry !== 'object' || Array.isArray(entry) ) {
			throw new Error("noUiSlider (" + VERSION + "): 'range' is not an object.");
		}

		// Catch missing start or end.
		if ( entry.min === undefined || entry.max === undefined ) {
			throw new Error("noUiSlider (" + VERSION + "): Missing 'min' or 'max' in 'range'.");
		}

		// Catch equal start or end.
		if ( entry.min === entry.max ) {
			throw new Error("noUiSlider (" + VERSION + "): 'range' 'min' and 'max' cannot be equal.");
		}

		parsed.spectrum = new Spectrum(entry, parsed.snap, parsed.dir, parsed.singleStep);
	}

	function testStart ( parsed, entry ) {

		entry = asArray(entry);

		// Validate input. Values aren't tested, as the public .val method
		// will always provide a valid location.
		if ( !Array.isArray( entry ) || !entry.length ) {
			throw new Error("noUiSlider (" + VERSION + "): 'start' option is incorrect.");
		}

		// Store the number of handles.
		parsed.handles = entry.length;

		// When the slider is initialized, the .val method will
		// be called with the start options.
		parsed.start = entry;
	}

	function testSnap ( parsed, entry ) {

		// Enforce 100% stepping within subranges.
		parsed.snap = entry;

		if ( typeof entry !== 'boolean' ){
			throw new Error("noUiSlider (" + VERSION + "): 'snap' option must be a boolean.");
		}
	}

	function testAnimate ( parsed, entry ) {

		// Enforce 100% stepping within subranges.
		parsed.animate = entry;

		if ( typeof entry !== 'boolean' ){
			throw new Error("noUiSlider (" + VERSION + "): 'animate' option must be a boolean.");
		}
	}

	function testAnimationDuration ( parsed, entry ) {

		parsed.animationDuration = entry;

		if ( typeof entry !== 'number' ){
			throw new Error("noUiSlider (" + VERSION + "): 'animationDuration' option must be a number.");
		}
	}

	function testConnect ( parsed, entry ) {

		var connect = [false];
		var i;

		// Map legacy options
		if ( entry === 'lower' ) {
			entry = [true, false];
		}

		else if ( entry === 'upper' ) {
			entry = [false, true];
		}

		// Handle boolean options
		if ( entry === true || entry === false ) {

			for ( i = 1; i < parsed.handles; i++ ) {
				connect.push(entry);
			}

			connect.push(false);
		}

		// Reject invalid input
		else if ( !Array.isArray( entry ) || !entry.length || entry.length !== parsed.handles + 1 ) {
			throw new Error("noUiSlider (" + VERSION + "): 'connect' option doesn't match handle count.");
		}

		else {
			connect = entry;
		}

		parsed.connect = connect;
	}

	function testOrientation ( parsed, entry ) {

		// Set orientation to an a numerical value for easy
		// array selection.
		switch ( entry ){
		  case 'horizontal':
			parsed.ort = 0;
			break;
		  case 'vertical':
			parsed.ort = 1;
			break;
		  default:
			throw new Error("noUiSlider (" + VERSION + "): 'orientation' option is invalid.");
		}
	}

	function testMargin ( parsed, entry ) {

		if ( !isNumeric(entry) ){
			throw new Error("noUiSlider (" + VERSION + "): 'margin' option must be numeric.");
		}

		// Issue #582
		if ( entry === 0 ) {
			return;
		}

		parsed.margin = parsed.spectrum.getMargin(entry);

		if ( !parsed.margin ) {
			throw new Error("noUiSlider (" + VERSION + "): 'margin' option is only supported on linear sliders.");
		}
	}

	function testLimit ( parsed, entry ) {

		if ( !isNumeric(entry) ){
			throw new Error("noUiSlider (" + VERSION + "): 'limit' option must be numeric.");
		}

		parsed.limit = parsed.spectrum.getMargin(entry);

		if ( !parsed.limit || parsed.handles < 2 ) {
			throw new Error("noUiSlider (" + VERSION + "): 'limit' option is only supported on linear sliders with 2 or more handles.");
		}
	}

	function testPadding ( parsed, entry ) {

		if ( !isNumeric(entry) ){
			throw new Error("noUiSlider (" + VERSION + "): 'padding' option must be numeric.");
		}

		if ( entry === 0 ) {
			return;
		}

		parsed.padding = parsed.spectrum.getMargin(entry);

		if ( !parsed.padding ) {
			throw new Error("noUiSlider (" + VERSION + "): 'padding' option is only supported on linear sliders.");
		}

		if ( parsed.padding < 0 ) {
			throw new Error("noUiSlider (" + VERSION + "): 'padding' option must be a positive number.");
		}

		if ( parsed.padding >= 50 ) {
			throw new Error("noUiSlider (" + VERSION + "): 'padding' option must be less than half the range.");
		}
	}

	function testDirection ( parsed, entry ) {

		// Set direction as a numerical value for easy parsing.
		// Invert connection for RTL sliders, so that the proper
		// handles get the connect/background classes.
		switch ( entry ) {
		  case 'ltr':
			parsed.dir = 0;
			break;
		  case 'rtl':
			parsed.dir = 1;
			break;
		  default:
			throw new Error("noUiSlider (" + VERSION + "): 'direction' option was not recognized.");
		}
	}

	function testBehaviour ( parsed, entry ) {

		// Make sure the input is a string.
		if ( typeof entry !== 'string' ) {
			throw new Error("noUiSlider (" + VERSION + "): 'behaviour' must be a string containing options.");
		}

		// Check if the string contains any keywords.
		// None are required.
		var tap = entry.indexOf('tap') >= 0;
		var drag = entry.indexOf('drag') >= 0;
		var fixed = entry.indexOf('fixed') >= 0;
		var snap = entry.indexOf('snap') >= 0;
		var hover = entry.indexOf('hover') >= 0;

		if ( fixed ) {

			if ( parsed.handles !== 2 ) {
				throw new Error("noUiSlider (" + VERSION + "): 'fixed' behaviour must be used with 2 handles");
			}

			// Use margin to enforce fixed state
			testMargin(parsed, parsed.start[1] - parsed.start[0]);
		}

		parsed.events = {
			tap: tap || snap,
			drag: drag,
			fixed: fixed,
			snap: snap,
			hover: hover
		};
	}

	function testTooltips ( parsed, entry ) {

		if ( entry === false ) {
			return;
		}

		else if ( entry === true ) {

			parsed.tooltips = [];

			for ( var i = 0; i < parsed.handles; i++ ) {
				parsed.tooltips.push(true);
			}
		}

		else {

			parsed.tooltips = asArray(entry);

			if ( parsed.tooltips.length !== parsed.handles ) {
				throw new Error("noUiSlider (" + VERSION + "): must pass a formatter for all handles.");
			}

			parsed.tooltips.forEach(function(formatter){
				if ( typeof formatter !== 'boolean' && (typeof formatter !== 'object' || typeof formatter.to !== 'function') ) {
					throw new Error("noUiSlider (" + VERSION + "): 'tooltips' must be passed a formatter or 'false'.");
				}
			});
		}
	}

	function testFormat ( parsed, entry ) {

		parsed.format = entry;

		// Any object with a to and from method is supported.
		if ( typeof entry.to === 'function' && typeof entry.from === 'function' ) {
			return true;
		}

		throw new Error("noUiSlider (" + VERSION + "): 'format' requires 'to' and 'from' methods.");
	}

	function testCssPrefix ( parsed, entry ) {

		if ( entry !== undefined && typeof entry !== 'string' && entry !== false ) {
			throw new Error("noUiSlider (" + VERSION + "): 'cssPrefix' must be a string or `false`.");
		}

		parsed.cssPrefix = entry;
	}

	function testCssClasses ( parsed, entry ) {

		if ( entry !== undefined && typeof entry !== 'object' ) {
			throw new Error("noUiSlider (" + VERSION + "): 'cssClasses' must be an object.");
		}

		if ( typeof parsed.cssPrefix === 'string' ) {
			parsed.cssClasses = {};

			for ( var key in entry ) {
				if ( !entry.hasOwnProperty(key) ) { continue; }

				parsed.cssClasses[key] = parsed.cssPrefix + entry[key];
			}
		} else {
			parsed.cssClasses = entry;
		}
	}

	function testUseRaf ( parsed, entry ) {
		if ( entry === true || entry === false ) {
			parsed.useRequestAnimationFrame = entry;
		} else {
			throw new Error("noUiSlider (" + VERSION + "): 'useRequestAnimationFrame' option should be true (default) or false.");
		}
	}

	// Test all developer settings and parse to assumption-safe values.
	function testOptions ( options ) {

		// To prove a fix for #537, freeze options here.
		// If the object is modified, an error will be thrown.
		// Object.freeze(options);

		var parsed = {
			margin: 0,
			limit: 0,
			padding: 0,
			animate: true,
			animationDuration: 300,
			format: defaultFormatter
		};

		// Tests are executed in the order they are presented here.
		var tests = {
			'step': { r: false, t: testStep },
			'start': { r: true, t: testStart },
			'connect': { r: true, t: testConnect },
			'direction': { r: true, t: testDirection },
			'snap': { r: false, t: testSnap },
			'animate': { r: false, t: testAnimate },
			'animationDuration': { r: false, t: testAnimationDuration },
			'range': { r: true, t: testRange },
			'orientation': { r: false, t: testOrientation },
			'margin': { r: false, t: testMargin },
			'limit': { r: false, t: testLimit },
			'padding': { r: false, t: testPadding },
			'behaviour': { r: true, t: testBehaviour },
			'format': { r: false, t: testFormat },
			'tooltips': { r: false, t: testTooltips },
			'cssPrefix': { r: false, t: testCssPrefix },
			'cssClasses': { r: false, t: testCssClasses },
			'useRequestAnimationFrame': { r: false, t: testUseRaf }
		};

		var defaults = {
			'connect': false,
			'direction': 'ltr',
			'behaviour': 'tap',
			'orientation': 'horizontal',
			'cssPrefix' : 'noUi-',
			'cssClasses': {
				target: 'target',
				base: 'base',
				origin: 'origin',
				handle: 'handle',
				handleLower: 'handle-lower',
				handleUpper: 'handle-upper',
				horizontal: 'horizontal',
				vertical: 'vertical',
				background: 'background',
				connect: 'connect',
				ltr: 'ltr',
				rtl: 'rtl',
				draggable: 'draggable',
				drag: 'state-drag',
				tap: 'state-tap',
				active: 'active',
				tooltip: 'tooltip',
				pips: 'pips',
				pipsHorizontal: 'pips-horizontal',
				pipsVertical: 'pips-vertical',
				marker: 'marker',
				markerHorizontal: 'marker-horizontal',
				markerVertical: 'marker-vertical',
				markerNormal: 'marker-normal',
				markerLarge: 'marker-large',
				markerSub: 'marker-sub',
				value: 'value',
				valueHorizontal: 'value-horizontal',
				valueVertical: 'value-vertical',
				valueNormal: 'value-normal',
				valueLarge: 'value-large',
				valueSub: 'value-sub'
			},
			'useRequestAnimationFrame': true
		};

		// Run all options through a testing mechanism to ensure correct
		// input. It should be noted that options might get modified to
		// be handled properly. E.g. wrapping integers in arrays.
		Object.keys(tests).forEach(function( name ){

			// If the option isn't set, but it is required, throw an error.
			if ( options[name] === undefined && defaults[name] === undefined ) {

				if ( tests[name].r ) {
					throw new Error("noUiSlider (" + VERSION + "): '" + name + "' is required.");
				}

				return true;
			}

			tests[name].t( parsed, options[name] === undefined ? defaults[name] : options[name] );
		});

		// Forward pips options
		parsed.pips = options.pips;

		var styles = [['left', 'top'], ['right', 'bottom']];

		// Pre-define the styles.
		parsed.style = styles[parsed.dir][parsed.ort];
		parsed.styleOposite = styles[parsed.dir?0:1][parsed.ort];

		return parsed;
	}


function closure ( target, options, originalOptions ){

	var actions = getActions( );

	// All variables local to 'closure' are prefixed with 'scope_'
	var scope_Target = target;
	var scope_Locations = [];
	var scope_Base;
	var scope_Handles;
	var scope_HandleNumbers = [];
	var scope_ActiveHandle = false;
	var scope_Connects;
	var scope_Spectrum = options.spectrum;
	var scope_Values = [];
	var scope_Events = {};
	var scope_Self;


	// Append a origin to the base
	function addOrigin ( base, handleNumber ) {

		var origin = addNodeTo(base, options.cssClasses.origin);
		var handle = addNodeTo(origin, options.cssClasses.handle);

		handle.setAttribute('data-handle', handleNumber);

		if ( handleNumber === 0 ) {
			addClass(handle, options.cssClasses.handleLower);
		}

		else if ( handleNumber === options.handles - 1 ) {
			addClass(handle, options.cssClasses.handleUpper);
		}

		return origin;
	}

	// Insert nodes for connect elements
	function addConnect ( base, add ) {

		if ( !add ) {
			return false;
		}

		return addNodeTo(base, options.cssClasses.connect);
	}

	// Add handles to the slider base.
	function addElements ( connectOptions, base ) {

		scope_Handles = [];
		scope_Connects = [];

		scope_Connects.push(addConnect(base, connectOptions[0]));

		// [::::O====O====O====]
		// connectOptions = [0, 1, 1, 1]

		for ( var i = 0; i < options.handles; i++ ) {
			// Keep a list of all added handles.
			scope_Handles.push(addOrigin(base, i));
			scope_HandleNumbers[i] = i;
			scope_Connects.push(addConnect(base, connectOptions[i + 1]));
		}
	}

	// Initialize a single slider.
	function addSlider ( target ) {

		// Apply classes and data to the target.
		addClass(target, options.cssClasses.target);

		if ( options.dir === 0 ) {
			addClass(target, options.cssClasses.ltr);
		} else {
			addClass(target, options.cssClasses.rtl);
		}

		if ( options.ort === 0 ) {
			addClass(target, options.cssClasses.horizontal);
		} else {
			addClass(target, options.cssClasses.vertical);
		}

		scope_Base = addNodeTo(target, options.cssClasses.base);
	}


	function addTooltip ( handle, handleNumber ) {

		if ( !options.tooltips[handleNumber] ) {
			return false;
		}

		return addNodeTo(handle.firstChild, options.cssClasses.tooltip);
	}

	// The tooltips option is a shorthand for using the 'update' event.
	function tooltips ( ) {

		// Tooltips are added with options.tooltips in original order.
		var tips = scope_Handles.map(addTooltip);

		bindEvent('update', function(values, handleNumber, unencoded) {

			if ( !tips[handleNumber] ) {
				return;
			}

			var formattedValue = values[handleNumber];

			if ( options.tooltips[handleNumber] !== true ) {
				formattedValue = options.tooltips[handleNumber].to(unencoded[handleNumber]);
			}

			tips[handleNumber].innerHTML = formattedValue;
		});
	}


	function getGroup ( mode, values, stepped ) {

		// Use the range.
		if ( mode === 'range' || mode === 'steps' ) {
			return scope_Spectrum.xVal;
		}

		if ( mode === 'count' ) {

			if ( !values ) {
				throw new Error("noUiSlider (" + VERSION + "): 'values' required for mode 'count'.");
			}

			// Divide 0 - 100 in 'count' parts.
			var spread = ( 100 / (values - 1) );
			var v;
			var i = 0;

			values = [];

			// List these parts and have them handled as 'positions'.
			while ( (v = i++ * spread) <= 100 ) {
				values.push(v);
			}

			mode = 'positions';
		}

		if ( mode === 'positions' ) {

			// Map all percentages to on-range values.
			return values.map(function( value ){
				return scope_Spectrum.fromStepping( stepped ? scope_Spectrum.getStep( value ) : value );
			});
		}

		if ( mode === 'values' ) {

			// If the value must be stepped, it needs to be converted to a percentage first.
			if ( stepped ) {

				return values.map(function( value ){

					// Convert to percentage, apply step, return to value.
					return scope_Spectrum.fromStepping( scope_Spectrum.getStep( scope_Spectrum.toStepping( value ) ) );
				});

			}

			// Otherwise, we can simply use the values.
			return values;
		}
	}

	function generateSpread ( density, mode, group ) {

		function safeIncrement(value, increment) {
			// Avoid floating point variance by dropping the smallest decimal places.
			return (value + increment).toFixed(7) / 1;
		}

		var indexes = {};
		var firstInRange = scope_Spectrum.xVal[0];
		var lastInRange = scope_Spectrum.xVal[scope_Spectrum.xVal.length-1];
		var ignoreFirst = false;
		var ignoreLast = false;
		var prevPct = 0;

		// Create a copy of the group, sort it and filter away all duplicates.
		group = unique(group.slice().sort(function(a, b){ return a - b; }));

		// Make sure the range starts with the first element.
		if ( group[0] !== firstInRange ) {
			group.unshift(firstInRange);
			ignoreFirst = true;
		}

		// Likewise for the last one.
		if ( group[group.length - 1] !== lastInRange ) {
			group.push(lastInRange);
			ignoreLast = true;
		}

		group.forEach(function ( current, index ) {

			// Get the current step and the lower + upper positions.
			var step;
			var i;
			var q;
			var low = current;
			var high = group[index+1];
			var newPct;
			var pctDifference;
			var pctPos;
			var type;
			var steps;
			var realSteps;
			var stepsize;

			// When using 'steps' mode, use the provided steps.
			// Otherwise, we'll step on to the next subrange.
			if ( mode === 'steps' ) {
				step = scope_Spectrum.xNumSteps[ index ];
			}

			// Default to a 'full' step.
			if ( !step ) {
				step = high-low;
			}

			// Low can be 0, so test for false. If high is undefined,
			// we are at the last subrange. Index 0 is already handled.
			if ( low === false || high === undefined ) {
				return;
			}

			// Make sure step isn't 0, which would cause an infinite loop (#654)
			step = Math.max(step, 0.0000001);

			// Find all steps in the subrange.
			for ( i = low; i <= high; i = safeIncrement(i, step) ) {

				// Get the percentage value for the current step,
				// calculate the size for the subrange.
				newPct = scope_Spectrum.toStepping( i );
				pctDifference = newPct - prevPct;

				steps = pctDifference / density;
				realSteps = Math.round(steps);

				// This ratio represents the ammount of percentage-space a point indicates.
				// For a density 1 the points/percentage = 1. For density 2, that percentage needs to be re-devided.
				// Round the percentage offset to an even number, then divide by two
				// to spread the offset on both sides of the range.
				stepsize = pctDifference/realSteps;

				// Divide all points evenly, adding the correct number to this subrange.
				// Run up to <= so that 100% gets a point, event if ignoreLast is set.
				for ( q = 1; q <= realSteps; q += 1 ) {

					// The ratio between the rounded value and the actual size might be ~1% off.
					// Correct the percentage offset by the number of points
					// per subrange. density = 1 will result in 100 points on the
					// full range, 2 for 50, 4 for 25, etc.
					pctPos = prevPct + ( q * stepsize );
					indexes[pctPos.toFixed(5)] = ['x', 0];
				}

				// Determine the point type.
				type = (group.indexOf(i) > -1) ? 1 : ( mode === 'steps' ? 2 : 0 );

				// Enforce the 'ignoreFirst' option by overwriting the type for 0.
				if ( !index && ignoreFirst ) {
					type = 0;
				}

				if ( !(i === high && ignoreLast)) {
					// Mark the 'type' of this point. 0 = plain, 1 = real value, 2 = step value.
					indexes[newPct.toFixed(5)] = [i, type];
				}

				// Update the percentage count.
				prevPct = newPct;
			}
		});

		return indexes;
	}

	function addMarking ( spread, filterFunc, formatter ) {

		var element = document.createElement('div');
		var out = '';
		var valueSizeClasses = [
			options.cssClasses.valueNormal,
			options.cssClasses.valueLarge,
			options.cssClasses.valueSub
		];
		var markerSizeClasses = [
			options.cssClasses.markerNormal,
			options.cssClasses.markerLarge,
			options.cssClasses.markerSub
		];
		var valueOrientationClasses = [
			options.cssClasses.valueHorizontal,
			options.cssClasses.valueVertical
		];
		var markerOrientationClasses = [
			options.cssClasses.markerHorizontal,
			options.cssClasses.markerVertical
		];

		addClass(element, options.cssClasses.pips);
		addClass(element, options.ort === 0 ? options.cssClasses.pipsHorizontal : options.cssClasses.pipsVertical);

		function getClasses( type, source ){
			var a = source === options.cssClasses.value;
			var orientationClasses = a ? valueOrientationClasses : markerOrientationClasses;
			var sizeClasses = a ? valueSizeClasses : markerSizeClasses;

			return source + ' ' + orientationClasses[options.ort] + ' ' + sizeClasses[type];
		}

		function getTags( offset, source, values ) {
			return 'class="' + getClasses(values[1], source) + '" style="' + options.style + ': ' + offset + '%"';
		}

		function addSpread ( offset, values ){

			// Apply the filter function, if it is set.
			values[1] = (values[1] && filterFunc) ? filterFunc(values[0], values[1]) : values[1];

			// Add a marker for every point
			out += '<div ' + getTags(offset, options.cssClasses.marker, values) + '></div>';

			// Values are only appended for points marked '1' or '2'.
			if ( values[1] ) {
				out += '<div ' + getTags(offset, options.cssClasses.value, values) + '>' + formatter.to(values[0]) + '</div>';
			}
		}

		// Append all points.
		Object.keys(spread).forEach(function(a){
			addSpread(a, spread[a]);
		});

		element.innerHTML = out;

		return element;
	}

	function pips ( grid ) {

		var mode = grid.mode;
		var density = grid.density || 1;
		var filter = grid.filter || false;
		var values = grid.values || false;
		var stepped = grid.stepped || false;
		var group = getGroup( mode, values, stepped );
		var spread = generateSpread( density, mode, group );
		var format = grid.format || {
			to: Math.round
		};

		return scope_Target.appendChild(addMarking(
			spread,
			filter,
			format
		));
	}


	// Shorthand for base dimensions.
	function baseSize ( ) {
		var rect = scope_Base.getBoundingClientRect(), alt = 'offset' + ['Width', 'Height'][options.ort];
		return options.ort === 0 ? (rect.width||scope_Base[alt]) : (rect.height||scope_Base[alt]);
	}

	// Handler for attaching events trough a proxy.
	function attachEvent ( events, element, callback, data ) {

		// This function can be used to 'filter' events to the slider.
		// element is a node, not a nodeList

		var method = function ( e ){

			if ( scope_Target.hasAttribute('disabled') ) {
				return false;
			}

			// Stop if an active 'tap' transition is taking place.
			if ( hasClass(scope_Target, options.cssClasses.tap) ) {
				return false;
			}

			e = fixEvent(e, data.pageOffset);

			// Handle reject of multitouch
			if ( !e ) {
				return false;
			}

			// Ignore right or middle clicks on start #454
			if ( events === actions.start && e.buttons !== undefined && e.buttons > 1 ) {
				return false;
			}

			// Ignore right or middle clicks on start #454
			if ( data.hover && e.buttons ) {
				return false;
			}

			e.calcPoint = e.points[ options.ort ];

			// Call the event handler with the event [ and additional data ].
			callback ( e, data );
		};

		var methods = [];

		// Bind a closure on the target for every event type.
		events.split(' ').forEach(function( eventName ){
			element.addEventListener(eventName, method, false);
			methods.push([eventName, method]);
		});

		return methods;
	}

	// Provide a clean event with standardized offset values.
	function fixEvent ( e, pageOffset ) {

		// Prevent scrolling and panning on touch events, while
		// attempting to slide. The tap event also depends on this.
		e.preventDefault();

		// Filter the event to register the type, which can be
		// touch, mouse or pointer. Offset changes need to be
		// made on an event specific basis.
		var touch = e.type.indexOf('touch') === 0;
		var mouse = e.type.indexOf('mouse') === 0;
		var pointer = e.type.indexOf('pointer') === 0;
		var x;
		var y;

		// IE10 implemented pointer events with a prefix;
		if ( e.type.indexOf('MSPointer') === 0 ) {
			pointer = true;
		}

		if ( touch ) {

			// Fix bug when user touches with two or more fingers on mobile devices.
			// It's useful when you have two or more sliders on one page,
			// that can be touched simultaneously.
			// #649, #663, #668
			if ( e.touches.length > 1 ) {
				return false;
			}

			// noUiSlider supports one movement at a time,
			// so we can select the first 'changedTouch'.
			x = e.changedTouches[0].pageX;
			y = e.changedTouches[0].pageY;
		}

		pageOffset = pageOffset || getPageOffset();

		if ( mouse || pointer ) {
			x = e.clientX + pageOffset.x;
			y = e.clientY + pageOffset.y;
		}

		e.pageOffset = pageOffset;
		e.points = [x, y];
		e.cursor = mouse || pointer; // Fix #435

		return e;
	}

	// Translate a coordinate in the document to a percentage on the slider
	function calcPointToPercentage ( calcPoint ) {
		var location = calcPoint - offset(scope_Base, options.ort);
		var proposal = ( location * 100 ) / baseSize();
		return options.dir ? 100 - proposal : proposal;
	}

	// Find handle closest to a certain percentage on the slider
	function getClosestHandle ( proposal ) {

		var closest = 100;
		var handleNumber = false;

		scope_Handles.forEach(function(handle, index){

			// Disabled handles are ignored
			if ( handle.hasAttribute('disabled') ) {
				return;
			}

			var pos = Math.abs(scope_Locations[index] - proposal);

			if ( pos < closest ) {
				handleNumber = index;
				closest = pos;
			}
		});

		return handleNumber;
	}

	// Moves handle(s) by a percentage
	// (bool, % to move, [% where handle started, ...], [index in scope_Handles, ...])
	function moveHandles ( upward, proposal, locations, handleNumbers ) {

		var proposals = locations.slice();

		var b = [!upward, upward];
		var f = [upward, !upward];

		// Copy handleNumbers so we don't change the dataset
		handleNumbers = handleNumbers.slice();

		// Check to see which handle is 'leading'.
		// If that one can't move the second can't either.
		if ( upward ) {
			handleNumbers.reverse();
		}

		// Step 1: get the maximum percentage that any of the handles can move
		if ( handleNumbers.length > 1 ) {

			handleNumbers.forEach(function(handleNumber, o) {

				var to = checkHandlePosition(proposals, handleNumber, proposals[handleNumber] + proposal, b[o], f[o]);

				// Stop if one of the handles can't move.
				if ( to === false ) {
					proposal = 0;
				} else {
					proposal = to - proposals[handleNumber];
					proposals[handleNumber] = to;
				}
			});
		}

		// If using one handle, check backward AND forward
		else {
			b = f = [true];
		}

		var state = false;

		// Step 2: Try to set the handles with the found percentage
		handleNumbers.forEach(function(handleNumber, o) {
			state = setHandle(handleNumber, locations[handleNumber] + proposal, b[o], f[o]) || state;
		});

		// Step 3: If a handle moved, fire events
		if ( state ) {
			handleNumbers.forEach(function(handleNumber){
				fireEvent('update', handleNumber);
				fireEvent('slide', handleNumber);
			});
		}
	}

	// External event handling
	function fireEvent ( eventName, handleNumber, tap ) {

		Object.keys(scope_Events).forEach(function( targetEvent ) {

			var eventType = targetEvent.split('.')[0];

			if ( eventName === eventType ) {
				scope_Events[targetEvent].forEach(function( callback ) {

					callback.call(
						// Use the slider public API as the scope ('this')
						scope_Self,
						// Return values as array, so arg_1[arg_2] is always valid.
						scope_Values.map(options.format.to),
						// Handle index, 0 or 1
						handleNumber,
						// Unformatted slider values
						scope_Values.slice(),
						// Event is fired by tap, true or false
						tap || false,
						// Left offset of the handle, in relation to the slider
						scope_Locations.slice()
					);
				});
			}
		});
	}


	// Fire 'end' when a mouse or pen leaves the document.
	function documentLeave ( event, data ) {
		if ( event.type === "mouseout" && event.target.nodeName === "HTML" && event.relatedTarget === null ){
			eventEnd (event, data);
		}
	}

	// Handle movement on document for handle and range drag.
	function eventMove ( event, data ) {

		// Fix #498
		// Check value of .buttons in 'start' to work around a bug in IE10 mobile (data.buttonsProperty).
		// https://connect.microsoft.com/IE/feedback/details/927005/mobile-ie10-windows-phone-buttons-property-of-pointermove-event-always-zero
		// IE9 has .buttons and .which zero on mousemove.
		// Firefox breaks the spec MDN defines.
		if ( navigator.appVersion.indexOf("MSIE 9") === -1 && event.buttons === 0 && data.buttonsProperty !== 0 ) {
			return eventEnd(event, data);
		}

		// Check if we are moving up or down
		var movement = (options.dir ? -1 : 1) * (event.calcPoint - data.startCalcPoint);

		// Convert the movement into a percentage of the slider width/height
		var proposal = (movement * 100) / data.baseSize;

		moveHandles(movement > 0, proposal, data.locations, data.handleNumbers);
	}

	// Unbind move events on document, call callbacks.
	function eventEnd ( event, data ) {

		// The handle is no longer active, so remove the class.
		if ( scope_ActiveHandle ) {
			removeClass(scope_ActiveHandle, options.cssClasses.active);
			scope_ActiveHandle = false;
		}

		// Remove cursor styles and text-selection events bound to the body.
		if ( event.cursor ) {
			document.body.style.cursor = '';
			document.body.removeEventListener('selectstart', document.body.noUiListener);
		}

		// Unbind the move and end events, which are added on 'start'.
		document.documentElement.noUiListeners.forEach(function( c ) {
			document.documentElement.removeEventListener(c[0], c[1]);
		});

		// Remove dragging class.
		removeClass(scope_Target, options.cssClasses.drag);

		setZindex();

		data.handleNumbers.forEach(function(handleNumber){
			fireEvent('set', handleNumber);
			fireEvent('change', handleNumber);
			fireEvent('end', handleNumber);
		});
	}

	// Bind move events on document.
	function eventStart ( event, data ) {

		if ( data.handleNumbers.length === 1 ) {

			var handle = scope_Handles[data.handleNumbers[0]];

			// Ignore 'disabled' handles
			if ( handle.hasAttribute('disabled') ) {
				return false;
			}

			// Mark the handle as 'active' so it can be styled.
			scope_ActiveHandle = handle.children[0];
			addClass(scope_ActiveHandle, options.cssClasses.active);
		}

		// Fix #551, where a handle gets selected instead of dragged.
		event.preventDefault();

		// A drag should never propagate up to the 'tap' event.
		event.stopPropagation();

		// Attach the move and end events.
		var moveEvent = attachEvent(actions.move, document.documentElement, eventMove, {
			startCalcPoint: event.calcPoint,
			baseSize: baseSize(),
			pageOffset: event.pageOffset,
			handleNumbers: data.handleNumbers,
			buttonsProperty: event.buttons,
			locations: scope_Locations.slice()
		});

		var endEvent = attachEvent(actions.end, document.documentElement, eventEnd, {
			handleNumbers: data.handleNumbers
		});

		var outEvent = attachEvent("mouseout", document.documentElement, documentLeave, {
			handleNumbers: data.handleNumbers
		});

		document.documentElement.noUiListeners = moveEvent.concat(endEvent, outEvent);

		// Text selection isn't an issue on touch devices,
		// so adding cursor styles can be skipped.
		if ( event.cursor ) {

			// Prevent the 'I' cursor and extend the range-drag cursor.
			document.body.style.cursor = getComputedStyle(event.target).cursor;

			// Mark the target with a dragging state.
			if ( scope_Handles.length > 1 ) {
				addClass(scope_Target, options.cssClasses.drag);
			}

			var f = function(){
				return false;
			};

			document.body.noUiListener = f;

			// Prevent text selection when dragging the handles.
			document.body.addEventListener('selectstart', f, false);
		}

		data.handleNumbers.forEach(function(handleNumber){
			fireEvent('start', handleNumber);
		});
	}

	// Move closest handle to tapped location.
	function eventTap ( event ) {

		// The tap event shouldn't propagate up
		event.stopPropagation();

		var proposal = calcPointToPercentage(event.calcPoint);
		var handleNumber = getClosestHandle(proposal);

		// Tackle the case that all handles are 'disabled'.
		if ( handleNumber === false ) {
			return false;
		}

		// Flag the slider as it is now in a transitional state.
		// Transition takes a configurable amount of ms (default 300). Re-enable the slider after that.
		if ( !options.events.snap ) {
			addClassFor(scope_Target, options.cssClasses.tap, options.animationDuration);
		}

		setHandle(handleNumber, proposal, true, true);

		setZindex();

		fireEvent('slide', handleNumber, true);
		fireEvent('set', handleNumber, true);
		fireEvent('change', handleNumber, true);
		fireEvent('update', handleNumber, true);

		if ( options.events.snap ) {
			eventStart(event, { handleNumbers: [handleNumber] });
		}
	}

	// Fires a 'hover' event for a hovered mouse/pen position.
	function eventHover ( event ) {

		var proposal = calcPointToPercentage(event.calcPoint);

		var to = scope_Spectrum.getStep(proposal);
		var value = scope_Spectrum.fromStepping(to);

		Object.keys(scope_Events).forEach(function( targetEvent ) {
			if ( 'hover' === targetEvent.split('.')[0] ) {
				scope_Events[targetEvent].forEach(function( callback ) {
					callback.call( scope_Self, value );
				});
			}
		});
	}

	// Attach events to several slider parts.
	function bindSliderEvents ( behaviour ) {

		// Attach the standard drag event to the handles.
		if ( !behaviour.fixed ) {

			scope_Handles.forEach(function( handle, index ){

				// These events are only bound to the visual handle
				// element, not the 'real' origin element.
				attachEvent ( actions.start, handle.children[0], eventStart, {
					handleNumbers: [index]
				});
			});
		}

		// Attach the tap event to the slider base.
		if ( behaviour.tap ) {
			attachEvent (actions.start, scope_Base, eventTap, {});
		}

		// Fire hover events
		if ( behaviour.hover ) {
			attachEvent (actions.move, scope_Base, eventHover, { hover: true });
		}

		// Make the range draggable.
		if ( behaviour.drag ){

			scope_Connects.forEach(function( connect, index ){

				if ( connect === false || index === 0 || index === scope_Connects.length - 1 ) {
					return;
				}

				var handleBefore = scope_Handles[index - 1];
				var handleAfter = scope_Handles[index];
				var eventHolders = [connect];

				addClass(connect, options.cssClasses.draggable);

				// When the range is fixed, the entire range can
				// be dragged by the handles. The handle in the first
				// origin will propagate the start event upward,
				// but it needs to be bound manually on the other.
				if ( behaviour.fixed ) {
					eventHolders.push(handleBefore.children[0]);
					eventHolders.push(handleAfter.children[0]);
				}

				eventHolders.forEach(function( eventHolder ) {
					attachEvent ( actions.start, eventHolder, eventStart, {
						handles: [handleBefore, handleAfter],
						handleNumbers: [index - 1, index]
					});
				});
			});
		}
	}


	// Split out the handle positioning logic so the Move event can use it, too
	function checkHandlePosition ( reference, handleNumber, to, lookBackward, lookForward ) {

		// For sliders with multiple handles, limit movement to the other handle.
		// Apply the margin option by adding it to the handle positions.
		if ( scope_Handles.length > 1 ) {

			if ( lookBackward && handleNumber > 0 ) {
				to = Math.max(to, reference[handleNumber - 1] + options.margin);
			}

			if ( lookForward && handleNumber < scope_Handles.length - 1 ) {
				to = Math.min(to, reference[handleNumber + 1] - options.margin);
			}
		}

		// The limit option has the opposite effect, limiting handles to a
		// maximum distance from another. Limit must be > 0, as otherwise
		// handles would be unmoveable.
		if ( scope_Handles.length > 1 && options.limit ) {

			if ( lookBackward && handleNumber > 0 ) {
				to = Math.min(to, reference[handleNumber - 1] + options.limit);
			}

			if ( lookForward && handleNumber < scope_Handles.length - 1 ) {
				to = Math.max(to, reference[handleNumber + 1] - options.limit);
			}
		}

		// The padding option keeps the handles a certain distance from the
		// edges of the slider. Padding must be > 0.
		if ( options.padding ) {

			if ( handleNumber === 0 ) {
				to = Math.max(to, options.padding);
			}

			if ( handleNumber === scope_Handles.length - 1 ) {
				to = Math.min(to, 100 - options.padding);
			}
		}

		to = scope_Spectrum.getStep(to);

		// Limit percentage to the 0 - 100 range
		to = limit(to);

		// Return false if handle can't move
		if ( to === reference[handleNumber] ) {
			return false;
		}

		return to;
	}

	function toPct ( pct ) {
		return pct + '%';
	}

	// Updates scope_Locations and scope_Values, updates visual state
	function updateHandlePosition ( handleNumber, to ) {

		// Update locations.
		scope_Locations[handleNumber] = to;

		// Convert the value to the slider stepping/range.
		scope_Values[handleNumber] = scope_Spectrum.fromStepping(to);

		// Called synchronously or on the next animationFrame
		var stateUpdate = function() {
			scope_Handles[handleNumber].style[options.style] = toPct(to);
			updateConnect(handleNumber);
			updateConnect(handleNumber + 1);
		};

		// Set the handle to the new position.
		// Use requestAnimationFrame for efficient painting.
		// No significant effect in Chrome, Edge sees dramatic performace improvements.
		// Option to disable is useful for unit tests, and single-step debugging.
		if ( window.requestAnimationFrame && options.useRequestAnimationFrame ) {
			window.requestAnimationFrame(stateUpdate);
		} else {
			stateUpdate();
		}
	}

	function setZindex ( ) {

		scope_HandleNumbers.forEach(function(handleNumber){
			// Handles before the slider middle are stacked later = higher,
			// Handles after the middle later is lower
			// [[7] [8] .......... | .......... [5] [4]
			var dir = (scope_Locations[handleNumber] > 50 ? -1 : 1);
			var zIndex = 3 + (scope_Handles.length + (dir * handleNumber));
			scope_Handles[handleNumber].childNodes[0].style.zIndex = zIndex;
		});
	}

	// Test suggested values and apply margin, step.
	function setHandle ( handleNumber, to, lookBackward, lookForward ) {

		to = checkHandlePosition(scope_Locations, handleNumber, to, lookBackward, lookForward);

		if ( to === false ) {
			return false;
		}

		updateHandlePosition(handleNumber, to);

		return true;
	}

	// Updates style attribute for connect nodes
	function updateConnect ( index ) {

		// Skip connects set to false
		if ( !scope_Connects[index] ) {
			return;
		}

		var l = 0;
		var h = 100;

		if ( index !== 0 ) {
			l = scope_Locations[index - 1];
		}

		if ( index !== scope_Connects.length - 1 ) {
			h = scope_Locations[index];
		}

		scope_Connects[index].style[options.style] = toPct(l);
		scope_Connects[index].style[options.styleOposite] = toPct(100 - h);
	}

	// ...
	function setValue ( to, handleNumber ) {

		// Setting with null indicates an 'ignore'.
		// Inputting 'false' is invalid.
		if ( to === null || to === false ) {
			return;
		}

		// If a formatted number was passed, attemt to decode it.
		if ( typeof to === 'number' ) {
			to = String(to);
		}

		to = options.format.from(to);

		// Request an update for all links if the value was invalid.
		// Do so too if setting the handle fails.
		if ( to !== false && !isNaN(to) ) {
			setHandle(handleNumber, scope_Spectrum.toStepping(to), false, false);
		}
	}

	// Set the slider value.
	function valueSet ( input, fireSetEvent ) {

		var values = asArray(input);
		var isInit = scope_Locations[0] === undefined;

		// Event fires by default
		fireSetEvent = (fireSetEvent === undefined ? true : !!fireSetEvent);

		values.forEach(setValue);

		// Animation is optional.
		// Make sure the initial values were set before using animated placement.
		if ( options.animate && !isInit ) {
			addClassFor(scope_Target, options.cssClasses.tap, options.animationDuration);
		}

		// Now that all base values are set, apply constraints
		scope_HandleNumbers.forEach(function(handleNumber){
			setHandle(handleNumber, scope_Locations[handleNumber], true, false);
		});

		setZindex();

		scope_HandleNumbers.forEach(function(handleNumber){

			fireEvent('update', handleNumber);

			// Fire the event only for handles that received a new value, as per #579
			if ( values[handleNumber] !== null && fireSetEvent ) {
				fireEvent('set', handleNumber);
			}
		});
	}

	// Reset slider to initial values
	function valueReset ( fireSetEvent ) {
		valueSet(options.start, fireSetEvent);
	}

	// Get the slider value.
	function valueGet ( ) {

		var values = scope_Values.map(options.format.to);

		// If only one handle is used, return a single value.
		if ( values.length === 1 ){
			return values[0];
		}

		return values;
	}

	// Removes classes from the root and empties it.
	function destroy ( ) {

		for ( var key in options.cssClasses ) {
			if ( !options.cssClasses.hasOwnProperty(key) ) { continue; }
			removeClass(scope_Target, options.cssClasses[key]);
		}

		while (scope_Target.firstChild) {
			scope_Target.removeChild(scope_Target.firstChild);
		}

		delete scope_Target.noUiSlider;
	}

	// Get the current step size for the slider.
	function getCurrentStep ( ) {

		// Check all locations, map them to their stepping point.
		// Get the step point, then find it in the input list.
		return scope_Locations.map(function( location, index ){

			var nearbySteps = scope_Spectrum.getNearbySteps( location );
			var value = scope_Values[index];
			var increment = nearbySteps.thisStep.step;
			var decrement = null;

			// If the next value in this step moves into the next step,
			// the increment is the start of the next step - the current value
			if ( increment !== false ) {
				if ( value + increment > nearbySteps.stepAfter.startValue ) {
					increment = nearbySteps.stepAfter.startValue - value;
				}
			}


			// If the value is beyond the starting point
			if ( value > nearbySteps.thisStep.startValue ) {
				decrement = nearbySteps.thisStep.step;
			}

			else if ( nearbySteps.stepBefore.step === false ) {
				decrement = false;
			}

			// If a handle is at the start of a step, it always steps back into the previous step first
			else {
				decrement = value - nearbySteps.stepBefore.highestStep;
			}


			// Now, if at the slider edges, there is not in/decrement
			if ( location === 100 ) {
				increment = null;
			}

			else if ( location === 0 ) {
				decrement = null;
			}

			// As per #391, the comparison for the decrement step can have some rounding issues.
			var stepDecimals = scope_Spectrum.countStepDecimals();

			// Round per #391
			if ( increment !== null && increment !== false ) {
				increment = Number(increment.toFixed(stepDecimals));
			}

			if ( decrement !== null && decrement !== false ) {
				decrement = Number(decrement.toFixed(stepDecimals));
			}

			return [decrement, increment];
		});
	}

	// Attach an event to this slider, possibly including a namespace
	function bindEvent ( namespacedEvent, callback ) {
		scope_Events[namespacedEvent] = scope_Events[namespacedEvent] || [];
		scope_Events[namespacedEvent].push(callback);

		// If the event bound is 'update,' fire it immediately for all handles.
		if ( namespacedEvent.split('.')[0] === 'update' ) {
			scope_Handles.forEach(function(a, index){
				fireEvent('update', index);
			});
		}
	}

	// Undo attachment of event
	function removeEvent ( namespacedEvent ) {

		var event = namespacedEvent && namespacedEvent.split('.')[0];
		var namespace = event && namespacedEvent.substring(event.length);

		Object.keys(scope_Events).forEach(function( bind ){

			var tEvent = bind.split('.')[0],
				tNamespace = bind.substring(tEvent.length);

			if ( (!event || event === tEvent) && (!namespace || namespace === tNamespace) ) {
				delete scope_Events[bind];
			}
		});
	}

	// Updateable: margin, limit, padding, step, range, animate, snap
	function updateOptions ( optionsToUpdate, fireSetEvent ) {

		// Spectrum is created using the range, snap, direction and step options.
		// 'snap' and 'step' can be updated, 'direction' cannot, due to event binding.
		// If 'snap' and 'step' are not passed, they should remain unchanged.
		var v = valueGet();

		var updateAble = ['margin', 'limit', 'padding', 'range', 'animate', 'snap', 'step', 'format'];

		// Only change options that we're actually passed to update.
		updateAble.forEach(function(name){
			if ( optionsToUpdate[name] !== undefined ) {
				originalOptions[name] = optionsToUpdate[name];
			}
		});

		var newOptions = testOptions(originalOptions);

		// Load new options into the slider state
		updateAble.forEach(function(name){
			if ( optionsToUpdate[name] !== undefined ) {
				options[name] = newOptions[name];
			}
		});

		// Save current spectrum direction as testOptions in testRange call
		// doesn't rely on current direction
		newOptions.spectrum.direction = scope_Spectrum.direction;
		scope_Spectrum = newOptions.spectrum;

		// Limit, margin and padding depend on the spectrum but are stored outside of it. (#677)
		options.margin = newOptions.margin;
		options.limit = newOptions.limit;
		options.padding = newOptions.padding;

		// Invalidate the current positioning so valueSet forces an update.
		scope_Locations = [];
		valueSet(optionsToUpdate.start || v, fireSetEvent);
	}

	// Throw an error if the slider was already initialized.
	if ( scope_Target.noUiSlider ) {
		throw new Error("noUiSlider (" + VERSION + "): Slider was already initialized.");
	}

	// Create the base element, initialise HTML and set classes.
	// Add handles and connect elements.
	addSlider(scope_Target);
	addElements(options.connect, scope_Base);

	scope_Self = {
		destroy: destroy,
		steps: getCurrentStep,
		on: bindEvent,
		off: removeEvent,
		get: valueGet,
		set: valueSet,
		reset: valueReset,
		// Exposed for unit testing, don't use this in your application.
		__moveHandles: function(a, b, c) { moveHandles(a, b, scope_Locations, c); },
		options: originalOptions, // Issue #600, #678
		updateOptions: updateOptions,
		target: scope_Target, // Issue #597
		pips: pips // Issue #594
	};

	// Attach user events.
	bindSliderEvents(options.events);

	// Use the public value method to set the start values.
	valueSet(options.start);

	if ( options.pips ) {
		pips(options.pips);
	}

	if ( options.tooltips ) {
		tooltips();
	}

	return scope_Self;

}


	// Run the standard initializer
	function initialize ( target, originalOptions ) {

		if ( !target.nodeName ) {
			throw new Error("noUiSlider (" + VERSION + "): create requires a single element.");
		}

		// Test the options and create the slider environment;
		var options = testOptions( originalOptions, target );
		var api = closure( target, options, originalOptions );

		target.noUiSlider = api;

		return api;
	}

	// Use an object instead of a function for future expansibility;
	return {
		version: VERSION,
		create: initialize
	};

}));

/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/observable/of.js":
/*!******************************************************!*\
  !*** ./node_modules/rxjs/_esm5/add/observable/of.js ***!
  \******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Observable */ "./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var _observable_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../observable/of */ "./node_modules/rxjs/_esm5/observable/of.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._observable_of PURE_IMPORTS_END */


_Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"].of = _observable_of__WEBPACK_IMPORTED_MODULE_1__["of"];
//# sourceMappingURL=of.js.map 


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/debounceTime.js":
/*!**************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/add/operator/debounceTime.js ***!
  \**************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Observable */ "./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var _operator_debounceTime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../operator/debounceTime */ "./node_modules/rxjs/_esm5/operator/debounceTime.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_debounceTime PURE_IMPORTS_END */


_Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"].prototype.debounceTime = _operator_debounceTime__WEBPACK_IMPORTED_MODULE_1__["debounceTime"];
//# sourceMappingURL=debounceTime.js.map 


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/first.js":
/*!*******************************************************!*\
  !*** ./node_modules/rxjs/_esm5/add/operator/first.js ***!
  \*******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Observable */ "./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var _operator_first__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../operator/first */ "./node_modules/rxjs/_esm5/operator/first.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_first PURE_IMPORTS_END */


_Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"].prototype.first = _operator_first__WEBPACK_IMPORTED_MODULE_1__["first"];
//# sourceMappingURL=first.js.map 


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/debounceTime.js":
/*!**********************************************************!*\
  !*** ./node_modules/rxjs/_esm5/operator/debounceTime.js ***!
  \**********************************************************/
/*! exports provided: debounceTime */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "debounceTime", function() { return debounceTime; });
/* harmony import */ var _scheduler_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scheduler/async */ "./node_modules/rxjs/_esm5/scheduler/async.js");
/* harmony import */ var _operators_debounceTime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../operators/debounceTime */ "./node_modules/rxjs/_esm5/operators/debounceTime.js");
/** PURE_IMPORTS_START .._scheduler_async,.._operators_debounceTime PURE_IMPORTS_END */


/**
 * Emits a value from the source Observable only after a particular time span
 * has passed without another source emission.
 *
 * <span class="informal">It's like {@link delay}, but passes only the most
 * recent value from each burst of emissions.</span>
 *
 * <img src="./img/debounceTime.png" width="100%">
 *
 * `debounceTime` delays values emitted by the source Observable, but drops
 * previous pending delayed emissions if a new value arrives on the source
 * Observable. This operator keeps track of the most recent value from the
 * source Observable, and emits that only when `dueTime` enough time has passed
 * without any other value appearing on the source Observable. If a new value
 * appears before `dueTime` silence occurs, the previous value will be dropped
 * and will not be emitted on the output Observable.
 *
 * This is a rate-limiting operator, because it is impossible for more than one
 * value to be emitted in any time window of duration `dueTime`, but it is also
 * a delay-like operator since output emissions do not occur at the same time as
 * they did on the source Observable. Optionally takes a {@link IScheduler} for
 * managing timers.
 *
 * @example <caption>Emit the most recent click after a burst of clicks</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.debounceTime(1000);
 * result.subscribe(x => console.log(x));
 *
 * @see {@link auditTime}
 * @see {@link debounce}
 * @see {@link delay}
 * @see {@link sampleTime}
 * @see {@link throttleTime}
 *
 * @param {number} dueTime The timeout duration in milliseconds (or the time
 * unit determined internally by the optional `scheduler`) for the window of
 * time required to wait for emission silence before emitting the most recent
 * source value.
 * @param {Scheduler} [scheduler=async] The {@link IScheduler} to use for
 * managing the timers that handle the timeout for each value.
 * @return {Observable} An Observable that delays the emissions of the source
 * Observable by the specified `dueTime`, and may drop some values if they occur
 * too frequently.
 * @method debounceTime
 * @owner Observable
 */
function debounceTime(dueTime, scheduler) {
    if (scheduler === void 0) {
        scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_0__["async"];
    }
    return Object(_operators_debounceTime__WEBPACK_IMPORTED_MODULE_1__["debounceTime"])(dueTime, scheduler)(this);
}
//# sourceMappingURL=debounceTime.js.map 


/***/ }),

/***/ "./src/app/forms/extendedforms/extendedforms.component.html":
/*!******************************************************************!*\
  !*** ./src/app/forms/extendedforms/extendedforms.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <br>\n                <div class=\"row\">\n                    <div class=\"col-md-4 mr-auto\">\n                        <legend>Datepicker</legend>\n                        <mat-form-field >\n                          <input matInput [matDatepicker]=\"picker\" placeholder=\"Choose a date\" (click)=\"picker.open()\">\n                          <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n                          <mat-datepicker #picker></mat-datepicker>\n                        </mat-form-field>\n                    </div>\n                    <div class=\"col-md-4 mr-auto\">\n                        <legend>Datepicker Year</legend>\n                        <mat-form-field>\n                          <input matInput [matDatepicker]=\"picker2\" placeholder=\"Choose a date\" (click)=\"picker2.open()\">\n                          <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\n                          <mat-datepicker #picker2 startView=\"year\" [startAt]=\"startDate\"></mat-datepicker>\n                        </mat-form-field>\n                    </div>\n                </div>\n                <br>\n                <br>\n                <div class=\"row\">\n                    <div class=\"col-md-6\">\n                        <legend>Switches</legend>\n                        <div class=\"togglebutton\">\n                          <label>\n                            <input type=\"checkbox\" checked=\"\">\n                            <span class=\"toggle\"></span>\n                            Toggle is on\n                          </label>\n                        </div>\n                        <div class=\"togglebutton\">\n                          <label>\n                            <input type=\"checkbox\">\n                            <span class=\"toggle\"></span>\n                            Toggle is off\n                          </label>\n                        </div>\n                    </div>\n                    <div class=\"col-md-6\">\n                        <legend>Customisable Select</legend>\n\n                        <div class=\"row\">\n                            <div class=\"col-lg-5 col-md-8 col-sm-4\">\n                              <mat-form-field>\n                                  <mat-select multiple placeholder=\"Multiple Cities\" [(ngModel)]=\"currentCity\" name=\"Paris\" ariaLabel=\"cities[0]\">\n                                      <mat-option *ngFor=\"let city of cities\" [value]=\"city.value\">\n                                          {{ city.viewValue }}\n                                      </mat-option>\n                                  </mat-select>\n                              </mat-form-field>\n                            </div>\n                            <div class=\"col-lg-5 col-md-8 col-sm-4\">\n                                <mat-form-field>\n                                    <mat-select placeholder=\"Single City\" name=\"city\">\n                                      <mat-option *ngFor=\"let city of cities\" [value]=\"city.value\">\n                                        {{ city.viewValue }}\n                                      </mat-option>\n                                    </mat-select>\n                                </mat-form-field>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <br>\n                <br>\n                <div class=\"row\">\n                    <div class=\"col-md-6\">\n                        <legend>Tags</legend>\n                        Regular: <tag-input [(ngModel)]='regularItems' theme='filled-theme'></tag-input>\n                    </div>\n                    <div class=\"col-md-6\">\n                        <legend>Dropdown & Dropup</legend>\n                        <div class=\"row\">\n                            <div class=\"col-lg-4 col-md-6 col-sm-3\">\n                                <div class=\"dropdown\">\n                                    <button mat-raised-button href=\"#pablo\" class=\"dropdown-toggle btn btn-primary btn-round btn-block\" data-toggle=\"dropdown\">Dropdown\n                                        <b class=\"caret\"></b>\n                                    </button>\n                                    <ul class=\"dropdown-menu dropdown-menu-left\">\n                                        <li class=\"dropdown-header\">Dropdown header</li>\n                                        <li>\n                                            <a href=\"#pablo\">Action</a>\n                                        </li>\n                                        <li>\n                                            <a href=\"#pablo\">Another action</a>\n                                        </li>\n                                        <li>\n                                            <a href=\"#pablo\">Something else here</a>\n                                        </li>\n                                        <li class=\"divider\"></li>\n                                        <li>\n                                            <a href=\"#pablo\">Separated link</a>\n                                        </li>\n                                        <li class=\"divider\"></li>\n                                        <li>\n                                            <a href=\"#pablo\">One more separated link</a>\n                                        </li>\n                                    </ul>\n                                </div>\n                            </div>\n                            <div class=\"col-lg-4 col-md-6 col-sm-3\">\n                                <div class=\"dropup\">\n                                    <button mat-raised-button href=\"#pablo\" class=\"dropdown-toggle btn btn-primary btn-round btn-block\" data-toggle=\"dropdown\">Dropup\n                                        <b class=\"caret\"></b>\n                                    </button>\n                                    <ul class=\"dropdown-menu dropdown-menu-left\">\n                                        <li class=\"dropdown-header\">Dropdown header</li>\n                                        <li>\n                                            <a href=\"#pablo\">Action</a>\n                                        </li>\n                                        <li>\n                                            <a href=\"#pablo\">Another action</a>\n                                        </li>\n                                        <li>\n                                            <a href=\"#pablo\">Something else here</a>\n                                        </li>\n                                        <li class=\"divider\"></li>\n                                        <li>\n                                            <a href=\"#pablo\">Separated link</a>\n                                        </li>\n                                        <li class=\"divider\"></li>\n                                        <li>\n                                            <a href=\"#pablo\">One more separated link</a>\n                                        </li>\n                                    </ul>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <br>\n                <br>\n                <div class=\"row\">\n                    <div class=\"col-md-6\">\n                        <legend>Progress Bars</legend>\n                        <div class=\"progress progress-line-primary\">\n                            <div class=\"progress-bar progress-bar-primary\" role=\"progressbar\" aria-valuenow=\"60\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 30%;\">\n                                <span class=\"sr-only\">60% Complete</span>\n                            </div>\n                        </div>\n                        <div class=\"progress progress-line-info\">\n                            <div class=\"progress-bar progress-bar-info\" role=\"progressbar\" aria-valuenow=\"60\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 60%;\">\n                                <span class=\"sr-only\">60% Complete</span>\n                            </div>\n                        </div>\n                        <div class=\"progress progress-line-danger\">\n                            <div class=\"progress-bar progress-bar-success\" style=\"width: 35%\">\n                                <span class=\"sr-only\">35% Complete (success)</span>\n                            </div>\n                            <div class=\"progress-bar progress-bar-warning\" style=\"width: 20%\">\n                                <span class=\"sr-only\">20% Complete (warning)</span>\n                            </div>\n                            <div class=\"progress-bar progress-bar-danger\" style=\"width: 10%\">\n                                <span class=\"sr-only\">10% Complete (danger)</span>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-md-6\">\n                        <legend>Sliders</legend>\n                        <nouislider [connect]=\"true\" [min]=\"0\" [max]=\"100\" [step]=\"1\" [(ngModel)]=\"simpleSlider\" [tooltips]=\"true\" class=\"slider\"></nouislider>\n                        <br>\n                        <nouislider class=\"slider slider-info\" [connect]=\"true\" [min]=\"0\" [max]=\"100\" [step]=\"1\" [(ngModel)]=\"doubleSlider\" [tooltips]=\"true\"></nouislider>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-md-4 col-sm-4\">\n                        <legend>Regular Image</legend>\n                        <div class=\"fileinput fileinput-new text-center\" data-provides=\"fileinput\">\n                            <div class=\"fileinput-new thumbnail\">\n                                <img src=\"../../assets/img/image_placeholder.jpg\" alt=\"...\">\n                            </div>\n                            <div class=\"fileinput-preview fileinput-exists thumbnail\"></div>\n                            <div>\n                                <span class=\"btn btn-rose btn-round btn-file\">\n                                    <span class=\"fileinput-new\">Select image</span>\n                                    <span class=\"fileinput-exists\">Change</span>\n                                    <input type=\"file\" name=\"...\" />\n                                </span>\n                                <a href=\"#pablo\" class=\"btn btn-danger btn-round fileinput-exists\" data-dismiss=\"fileinput\"><i class=\"fa fa-times\"></i> Remove</a>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-md-3 col-sm-4\">\n                        <legend>Avatar</legend>\n                        <div class=\"fileinput fileinput-new text-center\" data-provides=\"fileinput\">\n                            <div class=\"fileinput-new thumbnail img-circle\">\n                                <img src=\"../../assets/img/placeholder.jpg\" alt=\"...\">\n                            </div>\n                            <div class=\"fileinput-preview fileinput-exists thumbnail img-circle\"></div>\n                            <div>\n                                <span class=\"btn btn-round btn-rose btn-file\">\n                                    <span class=\"fileinput-new\">Add Photo</span>\n                                    <span class=\"fileinput-exists\">Change</span>\n                                    <input type=\"file\" name=\"...\" />\n                                </span>\n                                <br />\n                                <a href=\"#pablo\" class=\"btn btn-danger btn-round fileinput-exists\" data-dismiss=\"fileinput\"><i class=\"fa fa-times\"></i> Remove</a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <!-- end card -->\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/forms/extendedforms/extendedforms.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/forms/extendedforms/extendedforms.component.ts ***!
  \****************************************************************/
/*! exports provided: ExtendedFormsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExtendedFormsComponent", function() { return ExtendedFormsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ExtendedFormsComponent = /** @class */ (function () {
    function ExtendedFormsComponent() {
        this.simpleSlider = 40;
        this.doubleSlider = [20, 60];
        this.regularItems = ['Pizza', 'Pasta', 'Parmesan'];
        this.selectTheme = 'primary';
        this.cities = [
            { value: 'paris-0', viewValue: 'Paris' },
            { value: 'miami-1', viewValue: 'Miami' },
            { value: 'bucharest-2', viewValue: 'Bucharest' },
            { value: 'new-york-3', viewValue: 'New York' },
            { value: 'london-4', viewValue: 'London' },
            { value: 'barcelona-5', viewValue: 'Barcelona' },
            { value: 'moscow-6', viewValue: 'Moscow' },
        ];
    }
    ExtendedFormsComponent.prototype.ngOnInit = function () { };
    ExtendedFormsComponent.prototype.myFunc = function (val) {
        console.log('value is changed to ' + val);
    };
    ExtendedFormsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-extendedforms-cmp',
            template: __webpack_require__(/*! ./extendedforms.component.html */ "./src/app/forms/extendedforms/extendedforms.component.html"),
            styles: ["md-calendar {\n      width: 300px;\n  }"]
        })
    ], ExtendedFormsComponent);
    return ExtendedFormsComponent;
}());



/***/ }),

/***/ "./src/app/forms/forms.module.ts":
/*!***************************************!*\
  !*** ./src/app/forms/forms.module.ts ***!
  \***************************************/
/*! exports provided: Forms */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Forms", function() { return Forms; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var ng2_nouislider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-nouislider */ "./node_modules/ng2-nouislider/src/nouislider.js");
/* harmony import */ var ng2_nouislider__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng2_nouislider__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var ngx_chips__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-chips */ "./node_modules/ngx-chips/ngx-chips.es5.js");
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../app.module */ "./src/app/app.module.ts");
/* harmony import */ var _forms_routing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./forms.routing */ "./src/app/forms/forms.routing.ts");
/* harmony import */ var _extendedforms_extendedforms_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./extendedforms/extendedforms.component */ "./src/app/forms/extendedforms/extendedforms.component.ts");
/* harmony import */ var _regularforms_regularforms_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./regularforms/regularforms.component */ "./src/app/forms/regularforms/regularforms.component.ts");
/* harmony import */ var _validationforms_validationforms_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./validationforms/validationforms.component */ "./src/app/forms/validationforms/validationforms.component.ts");
/* harmony import */ var _wizard_wizard_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./wizard/wizard.component */ "./src/app/forms/wizard/wizard.component.ts");
/* harmony import */ var _validationforms_field_error_display_field_error_display_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./validationforms/field-error-display/field-error-display.component */ "./src/app/forms/validationforms/field-error-display/field-error-display.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var Forms = /** @class */ (function () {
    function Forms() {
    }
    Forms = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_forms_routing__WEBPACK_IMPORTED_MODULE_7__["FormsRoutes"]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                ng2_nouislider__WEBPACK_IMPORTED_MODULE_4__["NouisliderModule"],
                ngx_chips__WEBPACK_IMPORTED_MODULE_5__["TagInputModule"],
                _app_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"]
            ],
            declarations: [
                _extendedforms_extendedforms_component__WEBPACK_IMPORTED_MODULE_8__["ExtendedFormsComponent"],
                _regularforms_regularforms_component__WEBPACK_IMPORTED_MODULE_9__["RegularFormsComponent"],
                _validationforms_validationforms_component__WEBPACK_IMPORTED_MODULE_10__["ValidationFormsComponent"],
                _wizard_wizard_component__WEBPACK_IMPORTED_MODULE_11__["WizardComponent"],
                _validationforms_field_error_display_field_error_display_component__WEBPACK_IMPORTED_MODULE_12__["FieldErrorDisplayComponent"]
            ]
        })
    ], Forms);
    return Forms;
}());



/***/ }),

/***/ "./src/app/forms/forms.routing.ts":
/*!****************************************!*\
  !*** ./src/app/forms/forms.routing.ts ***!
  \****************************************/
/*! exports provided: FormsRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormsRoutes", function() { return FormsRoutes; });
/* harmony import */ var _extendedforms_extendedforms_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./extendedforms/extendedforms.component */ "./src/app/forms/extendedforms/extendedforms.component.ts");
/* harmony import */ var _regularforms_regularforms_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./regularforms/regularforms.component */ "./src/app/forms/regularforms/regularforms.component.ts");
/* harmony import */ var _validationforms_validationforms_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./validationforms/validationforms.component */ "./src/app/forms/validationforms/validationforms.component.ts");
/* harmony import */ var _wizard_wizard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./wizard/wizard.component */ "./src/app/forms/wizard/wizard.component.ts");




var FormsRoutes = [
    {
        path: '',
        children: [{
                path: 'regular',
                component: _regularforms_regularforms_component__WEBPACK_IMPORTED_MODULE_1__["RegularFormsComponent"]
            }]
    }, {
        path: '',
        children: [{
                path: 'extended',
                component: _extendedforms_extendedforms_component__WEBPACK_IMPORTED_MODULE_0__["ExtendedFormsComponent"]
            }]
    }, {
        path: '',
        children: [{
                path: 'validation',
                component: _validationforms_validationforms_component__WEBPACK_IMPORTED_MODULE_2__["ValidationFormsComponent"]
            }]
    }, {
        path: '',
        children: [{
                path: 'wizard',
                component: _wizard_wizard_component__WEBPACK_IMPORTED_MODULE_3__["WizardComponent"]
            }]
    }
];


/***/ }),

/***/ "./src/app/forms/regularforms/regularforms.component.html":
/*!****************************************************************!*\
  !*** ./src/app/forms/regularforms/regularforms.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-md-6\">\n        <div class=\"card \">\n          <div class=\"card-header card-header-rose card-header-icon\">\n            <div class=\"card-icon\">\n              <i class=\"material-icons\">mail_outline</i>\n            </div>\n            <h4 class=\"card-title\">Stacked Form</h4>\n          </div>\n          <div class=\"card-body \">\n            <form method=\"#\" action=\"#\">\n              <mat-form-field class=\"example-full-width\">\n                <input matInput placeholder=\"Email Address\" type=\"email\">\n              </mat-form-field>\n              <mat-form-field class=\"example-full-width\">\n                <input matInput placeholder=\"Password\" type=\"password\">\n              </mat-form-field>\n              <div class=\"form-check\">\n                <label class=\"form-check-label\">\n                  <input class=\"form-check-input\" type=\"checkbox\" value=\"\"> Subscribe to newsletter\n                  <span class=\"form-check-sign\">\n                    <span class=\"check\"></span>\n                  </span>\n                </label>\n              </div>\n            </form>\n          </div>\n          <div class=\"card-footer \">\n            <button mat-raised-button type=\"submit\" class=\"btn btn-fill btn-rose\">Submit</button>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-6\">\n        <div class=\"card \">\n          <div class=\"card-header card-header-rose card-header-icon\">\n            <div class=\"card-icon\">\n              <i class=\"material-icons\">contacts</i>\n            </div>\n            <h4 class=\"card-title\">Horizontal Form</h4>\n          </div>\n          <div class=\"card-body \">\n            <form class=\"form-horizontal\">\n              <div class=\"row\">\n                <label class=\"col-md-3 col-form-label\">Email</label>\n                <div class=\"col-md-9\">\n                  <mat-form-field class=\"example-full-width\">\n                    <input matInput type=\"email\">\n                  </mat-form-field>\n                </div>\n              </div>\n              <div class=\"row\">\n                <label class=\"col-md-3 col-form-label\">Password</label>\n                <div class=\"col-md-9\">\n                  <mat-form-field class=\"example-full-width\">\n                    <input matInput type=\"password\">\n                  </mat-form-field>\n                </div>\n              </div>\n              <div class=\"row\">\n                <label class=\"col-md-3\"></label>\n                <div class=\"col-md-9\">\n                  <div class=\"form-check\">\n                    <label class=\"form-check-label\">\n                      <input class=\"form-check-input\" type=\"checkbox\" value=\"\"> Remember me\n                      <span class=\"form-check-sign\">\n                        <span class=\"check\"></span>\n                      </span>\n                    </label>\n                  </div>\n                </div>\n              </div>\n            </form>\n          </div>\n          <div class=\"card-footer \">\n            <div class=\"row\">\n              <div class=\"col-md-9\">\n                <button mat-raised-button type=\"submit\" class=\"btn btn-fill btn-rose\">Sign in</button>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-12\">\n        <div class=\"card \">\n          <div class=\"card-header card-header-rose card-header-text\">\n            <div class=\"card-text\">\n              <h4 class=\"card-title\">Form Elements</h4>\n            </div>\n          </div>\n          <div class=\"card-body \">\n            <form method=\"get\" action=\"/\" class=\"form-horizontal\">\n              <div class=\"row\">\n                <label class=\"col-sm-2 col-form-label\">With help</label>\n                <div class=\"col-sm-10\">\n                  <mat-form-field class=\"example-full-width\">\n                    <input matInput type=\"text\">\n                  </mat-form-field>\n                </div>\n              </div>\n              <div class=\"row\">\n                <label class=\"col-sm-2 col-form-label\">Password</label>\n                <div class=\"col-sm-10\">\n                  <mat-form-field class=\"example-full-width\">\n                    <input matInput type=\"password\">\n                  </mat-form-field>\n                </div>\n              </div>\n              <div class=\"row\">\n                <label class=\"col-sm-2 col-form-label\">Placeholder</label>\n                <div class=\"col-sm-10\">\n                  <mat-form-field class=\"example-full-width\">\n                    <input matInput type=\"text\" placeholder=\"placeholder\">\n                  </mat-form-field>\n                </div>\n              </div>\n              <div class=\"row\">\n                <label class=\"col-sm-2 col-form-label\">Disabled</label>\n                <div class=\"col-sm-10\">\n                  <mat-form-field class=\"example-full-width\">\n                    <input matInput type=\"text\" placeholder=\"placeholder\" value=\"Disabled input here..\" disabled>\n                  </mat-form-field>\n                </div>\n              </div>\n              <div class=\"row\">\n                <label class=\"col-sm-2 col-form-label\">Static control</label>\n                <div class=\"col-sm-10\">\n                  <div class=\"form-group\">\n                    <p class=\"form-control-static\">hello@creative-tim.com</p>\n                  </div>\n                </div>\n              </div>\n              <div class=\"row\">\n                <label class=\"col-sm-2 col-form-label\">Checkboxes and radios</label>\n                <div class=\"col-sm-10 checkbox-radios\">\n                  <div class=\"form-check\">\n                    <label class=\"form-check-label\">\n                      <input class=\"form-check-input\" type=\"checkbox\" value=\"\"> First Checkbox\n                      <span class=\"form-check-sign\">\n                        <span class=\"check\"></span>\n                      </span>\n                    </label>\n                  </div>\n                  <div class=\"form-check\">\n                    <label class=\"form-check-label\">\n                      <input class=\"form-check-input\" type=\"checkbox\" value=\"\"> Second Checkbox\n                      <span class=\"form-check-sign\">\n                        <span class=\"check\"></span>\n                      </span>\n                    </label>\n                  </div>\n                  <div class=\"form-check\">\n                    <label class=\"form-check-label\">\n                      <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios\" value=\"option2\" checked> First Radio\n                      <span class=\"circle\">\n                        <span class=\"check\"></span>\n                      </span>\n                    </label>\n                  </div>\n                  <div class=\"form-check\">\n                    <label class=\"form-check-label\">\n                      <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios\" value=\"option1\"> Second Radio\n                      <span class=\"circle\">\n                        <span class=\"check\"></span>\n                      </span>\n                    </label>\n                  </div>\n                </div>\n              </div>\n              <div class=\"row\">\n                <label class=\"col-sm-2 col-form-label\">Inline checkboxes</label>\n                <div class=\"col-sm-10\">\n                  <div class=\"form-check form-check-inline\">\n                    <label class=\"form-check-label\">\n                      <input class=\"form-check-input\" type=\"checkbox\" value=\"\"> a\n                      <span class=\"form-check-sign\">\n                        <span class=\"check\"></span>\n                      </span>\n                    </label>\n                  </div>\n                  <div class=\"form-check form-check-inline\">\n                    <label class=\"form-check-label\">\n                      <input class=\"form-check-input\" type=\"checkbox\" value=\"\"> b\n                      <span class=\"form-check-sign\">\n                        <span class=\"check\"></span>\n                      </span>\n                    </label>\n                  </div>\n                  <div class=\"form-check form-check-inline\">\n                    <label class=\"form-check-label\">\n                      <input class=\"form-check-input\" type=\"checkbox\" value=\"\"> c\n                      <span class=\"form-check-sign\">\n                        <span class=\"check\"></span>\n                      </span>\n                    </label>\n                  </div>\n                </div>\n              </div>\n            </form>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-12\">\n        <div class=\"card \">\n          <div class=\"card-header card-header-rose card-header-text\">\n            <div class=\"card-text\">\n              <h4 class=\"card-title\">Input Variants</h4>\n            </div>\n          </div>\n          <div class=\"card-body \">\n            <form method=\"get\" action=\"/\" class=\"form-horizontal\">\n              <div class=\"row\">\n                <label class=\"col-sm-2 col-form-label\">Custom Checkboxes &amp; radios</label>\n                <div class=\"col-sm-4 col-sm-offset-1 checkbox-radios\">\n                  <div class=\"form-check\">\n                    <label class=\"form-check-label\">\n                      <input class=\"form-check-input\" type=\"checkbox\" value=\"\" checked> Checked\n                      <span class=\"form-check-sign\">\n                        <span class=\"check\"></span>\n                      </span>\n                    </label>\n                  </div>\n                  <div class=\"form-check\">\n                    <label class=\"form-check-label\">\n                      <input class=\"form-check-input\" type=\"checkbox\" value=\"\"> Unchecked\n                      <span class=\"form-check-sign\">\n                        <span class=\"check\"></span>\n                      </span>\n                    </label>\n                  </div>\n                  <div class=\"form-check disabled\">\n                    <label class=\"form-check-label\">\n                      <input class=\"form-check-input\" type=\"checkbox\" value=\"\" disabled checked> Disabled Checked\n                      <span class=\"form-check-sign\">\n                        <span class=\"check\"></span>\n                      </span>\n                    </label>\n                  </div>\n                  <div class=\"form-check disabled\">\n                    <label class=\"form-check-label\">\n                      <input class=\"form-check-input\" type=\"checkbox\" value=\"\" disabled> Disabled Unchecked\n                      <span class=\"form-check-sign\">\n                        <span class=\"check\"></span>\n                      </span>\n                    </label>\n                  </div>\n                </div>\n                <div class=\"col-sm-5 checkbox-radios\">\n                  <div class=\"form-check\">\n                    <label class=\"form-check-label\">\n                      <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios\" value=\"option1\" checked> Radio is on\n                      <span class=\"circle\">\n                        <span class=\"check\"></span>\n                      </span>\n                    </label>\n                  </div>\n                  <div class=\"form-check\">\n                    <label class=\"form-check-label\">\n                      <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios\" value=\"option2\"> Radio is off\n                      <span class=\"circle\">\n                        <span class=\"check\"></span>\n                      </span>\n                    </label>\n                  </div>\n                  <div class=\"form-check disabled\">\n                    <label class=\"form-check-label\">\n                      <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios2\" value=\"option1\" checked disabled> Disabled Radio is on\n                      <span class=\"circle\">\n                        <span class=\"check\"></span>\n                      </span>\n                    </label>\n                  </div>\n                  <div class=\"form-check disabled\">\n                    <label class=\"form-check-label\">\n                      <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios2\" value=\"option2\" disabled> Disabled Radio is off\n                      <span class=\"circle\">\n                        <span class=\"check\"></span>\n                      </span>\n                    </label>\n                  </div>\n                </div>\n              </div>\n              <div class=\"row\">\n                <label class=\"col-sm-2 col-form-label\">Input with success</label>\n                <div class=\"col-sm-10\">\n                  <mat-form-field class=\"example-full-width has-success\">\n                    <input matInput type=\"text\" placeholder=\"Success input\">\n                    <span class=\"form-control-feedback\">\n                      <i class=\"material-icons\">done</i>\n                    </span>\n                  </mat-form-field>\n                </div>\n              </div>\n              <div class=\"row\">\n                <label class=\"col-sm-2 col-form-label\">Input with error</label>\n                <div class=\"col-sm-10\">\n                  <mat-form-field class=\"example-full-width has-danger\">\n                    <input matInput type=\"text\" placeholder=\"Error input\">\n                    <span class=\"form-control-feedback\">\n                      <i class=\"material-icons\">clear</i>\n                    </span>\n                  </mat-form-field>\n                </div>\n              </div>\n              <div class=\"row\">\n                <label class=\"col-sm-2 col-form-label\">Column sizing</label>\n                <div class=\"col-sm-10\">\n                  <div class=\"row\">\n                    <div class=\"col-md-3\">\n                      <mat-form-field class=\"example-full-width\">\n                        <input matInput type=\"text\" placeholder=\".col-md-3\">\n                      </mat-form-field>\n                    </div>\n                    <div class=\"col-md-4\">\n                      <mat-form-field class=\"example-full-width\">\n                        <input matInput type=\"text\" placeholder=\".col-md-4\">\n                      </mat-form-field>\n                    </div>\n                    <div class=\"col-md-5\">\n                      <mat-form-field class=\"example-full-width\">\n                        <input matInput type=\"text\" placeholder=\".col-md-5\">\n                      </mat-form-field>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </form>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/forms/regularforms/regularforms.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/forms/regularforms/regularforms.component.ts ***!
  \**************************************************************/
/*! exports provided: RegularFormsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegularFormsComponent", function() { return RegularFormsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var RegularFormsComponent = /** @class */ (function () {
    function RegularFormsComponent() {
    }
    RegularFormsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-regularforms-cmp',
            template: __webpack_require__(/*! ./regularforms.component.html */ "./src/app/forms/regularforms/regularforms.component.html")
        })
    ], RegularFormsComponent);
    return RegularFormsComponent;
}());



/***/ }),

/***/ "./src/app/forms/validationforms/field-error-display/field-error-display.component.css":
/*!*********************************************************************************************!*\
  !*** ./src/app/forms/validationforms/field-error-display/field-error-display.component.css ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".error-msg {\n  color: red;\n  display: inline-block;\n  position: absolute;\n  top: 34px;\n  /* font-size: 10px; */\n  font-size: 75%;\n  margin-top: 2.604167em;\n  top: calc(100% - 1.72916667em);\n}\n.fix-error-icon {\n  top: 27px;\n}\n"

/***/ }),

/***/ "./src/app/forms/validationforms/field-error-display/field-error-display.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/forms/validationforms/field-error-display/field-error-display.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"displayError\" >\n  <!-- <span class=\"glyphicon glyphicon-remove form-control-feedback fix-error-icon\"></span> -->\n  <span class=\"sr-only\">(error)</span>\n  <div class=\"error-msg\">\n    {{ errorMsg }}\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/forms/validationforms/field-error-display/field-error-display.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/forms/validationforms/field-error-display/field-error-display.component.ts ***!
  \********************************************************************************************/
/*! exports provided: FieldErrorDisplayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FieldErrorDisplayComponent", function() { return FieldErrorDisplayComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FieldErrorDisplayComponent = /** @class */ (function () {
    function FieldErrorDisplayComponent() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], FieldErrorDisplayComponent.prototype, "errorMsg", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], FieldErrorDisplayComponent.prototype, "displayError", void 0);
    FieldErrorDisplayComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-field-error-display',
            template: __webpack_require__(/*! ./field-error-display.component.html */ "./src/app/forms/validationforms/field-error-display/field-error-display.component.html"),
            styles: [__webpack_require__(/*! ./field-error-display.component.css */ "./src/app/forms/validationforms/field-error-display/field-error-display.component.css")]
        })
    ], FieldErrorDisplayComponent);
    return FieldErrorDisplayComponent;
}());



/***/ }),

/***/ "./src/app/forms/validationforms/password-validator.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/forms/validationforms/password-validator.component.ts ***!
  \***********************************************************************/
/*! exports provided: PasswordValidation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordValidation", function() { return PasswordValidation; });
var PasswordValidation = /** @class */ (function () {
    function PasswordValidation() {
    }
    PasswordValidation.MatchPassword = function (AC) {
        var password = AC.get('password').value; // to get value in input tag
        var confirmPassword = AC.get('confirmPassword').value; // to get value in input tag
        if (password !== confirmPassword) {
            AC.get('confirmPassword').setErrors({ MatchPassword: true });
        }
        else {
            return null;
        }
    };
    return PasswordValidation;
}());



/***/ }),

/***/ "./src/app/forms/validationforms/validationforms.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/forms/validationforms/validationforms.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-6\">\n                <div class=\"card\">\n                    <form [formGroup]=\"register\">\n                      <div class=\"card-header card-header-rose card-header-icon\">\n                        <div class=\"card-icon\">\n                          <i class=\"material-icons\">mail_outline</i>\n                        </div>\n                        <h4 class=\"card-title\">Register Form</h4>\n                      </div>\n                        <div class=\"card-body\">\n                          <mat-form-field class=\"example-full-width\">\n                             <input\n                             type=\"email\"\n                             matInput\n                             placeholder=\"Email Address *\"\n                             [errorStateMatcher]=\"matcher\"\n                             formControlName=\"email\">\n                             <mat-error *ngIf=\"emailFormControl.hasError('email') && !emailFormControl.hasError('required')\">\n                               Please enter a valid email address\n                             </mat-error>\n                             <mat-error *ngIf=\"emailFormControl.hasError('required')\">\n                               Email is <strong>required</strong>\n                             </mat-error>\n                           </mat-form-field>\n\n                            <mat-form-field class=\"example-full-width has-label\" [ngClass]=\"displayFieldCss(register, 'password')\">\n                              <input type=\"password\"\n                              matInput\n                              id=\"password\"\n                              placeholder=\"Password *\"\n                              formControlName=\"password\">\n                              <app-field-error-display [displayError]=\"isFieldValid(register, 'password')\" errorMsg=\"Enter a valid password.\">\n                              </app-field-error-display>\n                            </mat-form-field>\n\n                            <mat-form-field class=\"example-full-width has-label\" [ngClass]=\"displayFieldCss(register, 'password')\">\n                              <input type=\"password\"\n                              matInput\n                              id=\"confirmPassword\"\n                              placeholder=\"Confirm Password *\"\n                              formControlName=\"confirmPassword\">\n                              <app-field-error-display\n                               [displayError]=\"isFieldValid(register, 'confirmPassword')\" errorMsg=\"These passwords don't match. Try again!\">\n                              </app-field-error-display>\n                            </mat-form-field>\n                            <div class=\"category form-category\">* Required fields</div>\n\n                          </div>\n                            <div class=\"card-footer text-right\">\n                              <div class=\"form-check mr-auto\">\n                                <label class=\"form-check-label\">\n                                  <input class=\"form-check-input\" type=\"checkbox\" value=\"\"> Subscribe to newsletter\n                                  <span class=\"form-check-sign\">\n                                    <span class=\"check\"></span>\n                                  </span>\n                                </label>\n                              </div>\n                              <button mat-raised-button type=\"submit\" class=\"btn btn-rose\" (click)=\"onRegister()\">Register</button>\n                            </div>\n                    </form>\n                </div>\n\n            </div>\n            <div class=\"col-md-6\">\n                <div class=\"card\">\n                    <form [formGroup]=\"login\">\n                      <div class=\"card-header card-header-rose card-header-icon\">\n                        <div class=\"card-icon\">\n                          <i class=\"material-icons\">contacts</i>\n                        </div>\n                        <h4 class=\"card-title\">Login Form</h4>\n                      </div>\n                        <div class=\"card-body\">\n                          <mat-form-field class=\"example-full-width\">\n                             <input\n                             type=\"email\"\n                             matInput\n                             placeholder=\"Email Address *\"\n                             [errorStateMatcher]=\"matcher\"\n                             formControlName=\"email\">\n                             <mat-error *ngIf=\"emailFormControl.hasError('email') && !emailFormControl.hasError('required')\">\n                               Please enter a valid email address\n                             </mat-error>\n                             <mat-error *ngIf=\"emailFormControl.hasError('required')\">\n                               Email is <strong>required</strong>\n                             </mat-error>\n                           </mat-form-field>\n                            <mat-form-field class=\"example-full-width\" [ngClass]=\"displayFieldCss(login, 'password')\">\n                              <input type=\"password\"\n                              matInput\n                              placeholder=\"Password *\"\n                              formControlName=\"password\">\n                              <app-field-error-display [displayError]=\"isFieldValid(login, 'password')\" errorMsg=\"Enter a valid password.\">\n                              </app-field-error-display>\n                            </mat-form-field>\n                            <div class=\"category form-category\">* Required fields</div>\n                          </div>\n                            <div class=\"card-footer text-right\">\n                                <div class=\"form-group\">\n                                    <button mat-raised-button type=\"submit\" class=\"btn btn-rose btn-fill btn-wd\" (click)=\"onLogin()\">Login</button>\n                                </div>\n                            </div>\n                    </form>\n                </div>\n            </div>\n            <div class=\"col-md-12\">\n                <div class=\"card\">\n                    <form [formGroup]=\"type\" class=\"form-horizontal\">\n                      <div class=\"card-header card-header-rose card-header-text\">\n                        <div class=\"card-text\">\n                          <h4 class=\"card-title\">Type Validation</h4>\n                        </div>\n                      </div>\n                        <div class=\"card-body\">\n                            <div class=\"row\">\n                              <label class=\"col-sm-2 col-form-label\">Required Text</label>\n                                <div class=\"col-sm-7\">\n                                  <mat-form-field class=\"example-full-width has-label\" [ngClass]=\"displayFieldCss(type, 'text')\">\n                                    <input type=\"text\"\n                                    matInput\n                                    id=\"text\"\n                                    formControlName=\"text\">\n                                    <app-field-error-display [displayError]=\"isFieldValid(type, 'text')\" errorMsg=\"Required text\">\n                                    </app-field-error-display>\n                                  </mat-form-field>\n                                </div>\n                                <label class=\"col-sm-3 label-on-right\">\n                                    <code>required</code>\n                                </label>\n                            </div>\n                            <div class=\"row\">\n\n                                <label class=\"col-sm-2 col-form-label\">Email</label>\n\n                                <div class=\"col-sm-7\">\n                                  <mat-form-field class=\"example-full-width\">\n                                     <input\n                                     type=\"email\"\n                                     matInput\n                                     [errorStateMatcher]=\"matcher\"\n                                     formControlName=\"email\">\n                                     <mat-error *ngIf=\"emailFormControl.hasError('email') && !emailFormControl.hasError('required')\">\n                                       Please enter a valid email address\n                                     </mat-error>\n                                     <mat-error *ngIf=\"emailFormControl.hasError('required')\">\n                                       Email is <strong>required</strong>\n                                     </mat-error>\n                                   </mat-form-field>\n                                </div>\n                                <label class=\"col-sm-3 label-on-right\">\n                                    <code>email=\"true\"</code>\n                                </label>\n                            </div>\n                            <div class=\"row\">\n                                <label class=\"col-sm-2 col-form-label\">Number</label>\n                                <div class=\"col-sm-7\">\n                                  <mat-form-field class=\"example-full-width has-label\" [ngClass]=\"displayFieldCss(type, 'number')\">\n                                    <input type=\"number\" name=\"number\" number=\"true\"\n                                    matInput\n                                    formControlName=\"number\">\n                                    <app-field-error-display [displayError]=\"isFieldValid(type, 'number')\" errorMsg=\"Add a number!\">\n                                    </app-field-error-display>\n                                  </mat-form-field>\n                                </div>\n                                <label class=\"col-sm-3 label-on-right\">\n                                    <code>number=\"true\"</code>\n                                </label>\n                            </div>\n                            <div class=\"row\">\n                                <label class=\"col-sm-2 col-form-label\">Url</label>\n                                <div class=\"col-sm-7\">\n                                  <mat-form-field class=\"example-full-width has-label\" [ngClass]=\"displayFieldCss(type, 'url')\">\n                                    <input type=\"text\" id=\"url\" pattern=\"https?://.+\" name=\"url\" formControlName=\"url\"\n                                    matInput>\n                                    <app-field-error-display [displayError]=\"isFieldValid(type, 'url')\" errorMsg=\"Must be a valid URL!\">\n                                    </app-field-error-display>\n                                  </mat-form-field>\n                                </div>\n\n                                <label class=\"col-sm-3 label-on-right\">\n                                    <code>url=\"true\"</code>\n                                </label>\n                            </div>\n                            <div class=\"row\">\n\n                                <label class=\"col-sm-2 col-form-label\">Equal to</label>\n                                <div class=\"col-sm-3\">\n                                  <mat-form-field class=\"example-full-width\" [ngClass]=\"displayFieldCss(type, 'password')\">\n                                    <input type=\"text\"\n                                    matInput\n                                    placeholder=\"#idSource\"\n                                      name=\"idSource\"\n                                    formControlName=\"password\">\n                                    <app-field-error-display [displayError]=\"isFieldValid(type, 'password')\" errorMsg=\"IdSource is required\">\n                                    </app-field-error-display>\n                                  </mat-form-field>\n                                </div>\n                                <div class=\"col-sm-3\">\n                                  <mat-form-field class=\"example-full-width\" [ngClass]=\"displayFieldCss(type, 'confirmPassword')\">\n                                    <input type=\"text\"\n                                    matInput\n                                    name=\"idDestination\"\n                                    placeholder=\"#idDestination\"\n                                    formControlName=\"confirmPassword\">\n                                    <app-field-error-display [displayError]=\"isFieldValid(type, 'confirmPassword')\" errorMsg=\" IdSource mismatch!\">\n                                    </app-field-error-display>\n                                  </mat-form-field>\n                                </div>\n                                <label class=\"col-sm-4 label-on-right\">\n                                    <code>equalTo=\"#idSource\"</code>\n                                </label>\n                            </div>\n                        </div>\n                        <div class=\"card-footer text-center\">\n                            <button mat-raised-button type=\"submit\" class=\"btn btn-rose btn-fill\" (click)=\"onType()\">Validate Inputs</button>\n                        </div>\n                    </form>\n                </div>\n            </div>\n            <!-- <div class=\"col-md-12\">\n                <div class=\"card\">\n                    <form id=\"RangeValidation\" class=\"form-horizontal\" action=\"\" method=\"\">\n\n                        <div class=\"card-header card-header-text\" data-background-color=\"rose\">\n                            <h4 class=\"card-title\">Range Validation</h4>\n                        </div>\n                        <div class=\"card-content\">\n                            <div class=\"row\">\n                                <label class=\"col-sm-2 col-form-label\">Min Length</label>\n                                <div class=\"col-sm-7\">\n                                    <div class=\"form-group has-label\">\n                                        <label class=\"bmd-label-floating\"></label>\n                                        <input class=\"form-control\" type=\"text\" name=\"min_length\" minLength=\"5\" />\n                                    </div>\n                                </div>\n                                <label class=\"col-sm-3 label-on-right\">\n                                    <code>minLength=\"5\"</code>\n                                </label>\n                            </div>\n                            <div class=\"row\">\n                                <label class=\"col-sm-2 col-form-label\">Max Length</label>\n                                <div class=\"col-sm-7\">\n                                    <div class=\"form-group has-label\">\n                                        <label class=\"bmd-label-floating\"></label>\n                                        <input class=\"form-control\" type=\"text\" name=\"max_length\" maxLength=\"5\" />\n                                    </div>\n                                </div>\n                                <label class=\"col-sm-3 label-on-right\">\n                                    <code>maxLength=\"5\"</code>\n                                </label>\n                            </div>\n                            <div class=\"row\">\n                                <label class=\"col-sm-2 col-form-label\">Range</label>\n                                <div class=\"col-sm-7\">\n                                    <div class=\"form-group has-label\">\n                                        <label class=\"bmd-label-floating\"></label>\n                                        <input class=\"form-control\" type=\"text\" name=\"range\" range=\"[6,10]\" />\n                                    </div>\n                                </div>\n                                <label class=\"col-sm-3 label-on-right\">\n                                    <code>range=\"[6,10]\"</code>\n                                </label>\n                            </div>\n                            <div class=\"row\">\n                                <label class=\"col-sm-2 col-form-label\">Min Value</label>\n                                <div class=\"col-sm-7\">\n                                    <div class=\"form-group has-label\">\n                                        <label class=\"bmd-label-floating\"></label>\n                                        <input class=\"form-control\" type=\"text\" name=\"min\" min=\"6\" />\n                                    </div>\n                                </div>\n                                <label class=\"col-sm-3 label-on-right\">\n                                    <code>min=\"6\"</code>\n                                </label>\n                            </div>\n                            <div class=\"row\">\n                                <label class=\"col-sm-2 col-form-label\">Max Value</label>\n                                <div class=\"col-sm-7\">\n                                    <div class=\"form-group has-label\">\n                                        <label class=\"bmd-label-floating\"></label>\n                                        <input class=\"form-control\" type=\"text\" name=\"max\" max=\"6\" />\n                                    </div>\n                                </div>\n                                <label class=\"col-sm-3 label-on-right\">\n                                    <code>max=\"6\"</code>\n                                </label>\n                            </div>\n                        </div>\n                        <div class=\"card-footer text-center\">\n                            <button mat-raised-button type=\"submit\" class=\"btn btn-rose btn-fill\">Validate Inputs</button>\n                        </div>\n                    </form>\n                </div>\n            </div> -->\n        <!-- </div> -->\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/forms/validationforms/validationforms.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/forms/validationforms/validationforms.component.ts ***!
  \********************************************************************/
/*! exports provided: MyErrorStateMatcher, ValidationFormsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyErrorStateMatcher", function() { return MyErrorStateMatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidationFormsComponent", function() { return ValidationFormsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var _password_validator_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./password-validator.component */ "./src/app/forms/validationforms/password-validator.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MyErrorStateMatcher = /** @class */ (function () {
    function MyErrorStateMatcher() {
    }
    MyErrorStateMatcher.prototype.isErrorState = function (control, form) {
        var isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    };
    return MyErrorStateMatcher;
}());

var ValidationFormsComponent = /** @class */ (function () {
    function ValidationFormsComponent(formBuilder) {
        this.formBuilder = formBuilder;
        this.emailFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email,
        ]);
        this.matcher = new MyErrorStateMatcher();
    }
    ValidationFormsComponent.prototype.isFieldValid = function (form, field) {
        return !form.get(field).valid && form.get(field).touched;
    };
    ValidationFormsComponent.prototype.displayFieldCss = function (form, field) {
        return {
            'has-error': this.isFieldValid(form, field),
            'has-feedback': this.isFieldValid(form, field)
        };
    };
    ValidationFormsComponent.prototype.onRegister = function () {
        console.log(this.emailFormControl);
        if (this.register.valid) {
            console.log('form submitted');
        }
        else {
            this.validateAllFormFields(this.register);
        }
    };
    ValidationFormsComponent.prototype.onLogin = function () {
        console.log(this.login);
        if (this.login.valid) {
            console.log('form submitted');
        }
        else {
            this.validateAllFormFields(this.login);
        }
    };
    ValidationFormsComponent.prototype.onType = function () {
        console.log(this.type);
        if (this.type.valid) {
            console.log('form submitted');
        }
        else {
            this.validateAllFormFields(this.type);
        }
    };
    ValidationFormsComponent.prototype.validateAllFormFields = function (formGroup) {
        var _this = this;
        Object.keys(formGroup.controls).forEach(function (field) {
            console.log(field);
            var control = formGroup.get(field);
            if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]) {
                control.markAsTouched({ onlySelf: true });
            }
            else if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]) {
                _this.validateAllFormFields(control);
            }
        });
    };
    ValidationFormsComponent.prototype.ngOnInit = function () {
        this.register = this.formBuilder.group({
            // To add a validator, we must first convert the string value into an array. The first item in the array is the default value if any, then the next item in the array is the validator. Here we are adding a required validator meaning that the firstName attribute must have a value in it.
            email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
            // We can use more than one validator per field. If we want to use more than one validator we have to wrap our array of validators with a Validators.compose function. Here we are using a required, minimum length and maximum length validator.
            optionsCheckboxes: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        }, {
            validator: _password_validator_component__WEBPACK_IMPORTED_MODULE_2__["PasswordValidation"].MatchPassword // your validation method
        });
        this.login = this.formBuilder.group({
            // To add a validator, we must first convert the string value into an array. The first item in the array is the default value if any, then the next item in the array is the validator. Here we are adding a required validator meaning that the firstName attribute must have a value in it.
            email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
            // We can use more than one validator per field. If we want to use more than one validator we have to wrap our array of validators with a Validators.compose function. Here we are using a required, minimum length and maximum length validator.
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        this.type = this.formBuilder.group({
            // To add a validator, we must first convert the string value into an array. The first item in the array is the default value if any, then the next item in the array is the validator. Here we are adding a required validator meaning that the firstName attribute must have a value in it.
            text: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
            number: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            url: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            // We can use more than one validator per field. If we want to use more than one validator we have to wrap our array of validators with a Validators.compose function. Here we are using a required, minimum length and maximum length validator.
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        }, {
            validator: _password_validator_component__WEBPACK_IMPORTED_MODULE_2__["PasswordValidation"].MatchPassword // your validation method
        });
    };
    ValidationFormsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-validationforms-cmp',
            template: __webpack_require__(/*! ./validationforms.component.html */ "./src/app/forms/validationforms/validationforms.component.html")
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], ValidationFormsComponent);
    return ValidationFormsComponent;
}());



/***/ }),

/***/ "./src/app/forms/wizard/wizard.component.css":
/*!***************************************************!*\
  !*** ./src/app/forms/wizard/wizard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/forms/wizard/wizard.component.html":
/*!****************************************************!*\
  !*** ./src/app/forms/wizard/wizard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n  <div class=\"container-fluid\">\n    <div class=\"col-md-8 mr-auto ml-auto\">\n      <!--      Wizard container        -->\n      <div class=\"wizard-container\">\n        <div class=\"card card-wizard\" data-color=\"rose\" id=\"wizardProfile\">\n          <form [formGroup]=\"type\" action=\"\" method=\"\">\n            <!--        You can switch \" data-color=\"primary\" \"  with one of the next bright colors: \"green\", \"orange\", \"red\", \"blue\"       -->\n            <div class=\"card-header text-center\">\n              <h3 class=\"card-title\">\n                Build Your Profile\n              </h3>\n              <h5 class=\"card-description\">This information will let us know more about you.</h5>\n            </div>\n            <div class=\"wizard-navigation\">\n              <ul class=\"nav nav-pills\">\n                <li class=\"nav-item\">\n                  <a class=\"nav-link active\" href=\"#about\" data-toggle=\"tab\" role=\"tab\">\n                    About\n                  </a>\n                </li>\n                <li class=\"nav-item\">\n                  <a class=\"nav-link\" href=\"#account\" data-toggle=\"tab\" role=\"tab\">\n                    Account\n                  </a>\n                </li>\n                <li class=\"nav-item\">\n                  <a class=\"nav-link\" href=\"#address\" data-toggle=\"tab\" role=\"tab\">\n                    Address\n                  </a>\n                </li>\n              </ul>\n            </div>\n            <div class=\"card-body\">\n              <div class=\"tab-content\">\n                <div class=\"tab-pane active\" id=\"about\">\n                  <h5 class=\"info-text\"> Let's start with the basic information (with validation)</h5>\n                  <div class=\"row justify-content-center\">\n                    <div class=\"col-sm-4\">\n                      <div class=\"picture-container\">\n                        <div class=\"picture\">\n                          <img src=\"../../assets/img/default-avatar.png\" class=\"picture-src\" id=\"wizardPicturePreview\" title=\"\" />\n                          <input type=\"file\" id=\"wizard-picture\">\n                        </div>\n                        <h6 class=\"description\">Choose Picture</h6>\n                      </div>\n                    </div>\n                    <div class=\"col-sm-6\">\n                      <div class=\"input-group form-control-lg\">\n                        <div class=\"input-group-prepend\">\n                          <span class=\"input-group-text\">\n                            <i class=\"material-icons\">face</i>\n                          </span>\n                        </div>\n                        <mat-form-field class=\"example-full-width has-label\" [ngClass]=\"displayFieldCss(type, 'firstName')\">\n                          <input type=\"text\"\n                          name=\"firstname\"\n                          matInput\n                          id=\"text\"\n                          placeholder=\"First Name\"\n                          formControlName=\"firstName\">\n                        </mat-form-field>\n                      </div>\n                      <div class=\"input-group form-control-lg\">\n                        <div class=\"input-group-prepend\">\n                          <span class=\"input-group-text\">\n                            <i class=\"material-icons\">record_voice_over</i>\n                          </span>\n                        </div>\n                        <mat-form-field class=\"example-full-width has-label\" [ngClass]=\"displayFieldCss(type, 'lastName')\">\n                          <input type=\"text\"\n                          name=\"lastname\"\n                          matInput\n                          id=\"text\"\n                          placeholder=\"last Name\"\n                          formControlName=\"lastName\">\n                        </mat-form-field>\n                      </div>\n                    </div>\n                    <div class=\"col-lg-10 mt-3\">\n                      <div class=\"input-group form-control-lg\">\n                        <div class=\"input-group-prepend\">\n                          <span class=\"input-group-text\">\n                            <i class=\"material-icons\">email</i>\n                          </span>\n                        </div>\n                        <mat-form-field class=\"example-full-width\">\n                           <input matInput placeholder=\"Email (required)\" [formControl]=\"emailFormControl\"\n                             type=\"email\" id=\"exampleemalil\" name=\"email\">\n                         </mat-form-field>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"tab-pane\" id=\"account\">\n                  <h5 class=\"info-text\"> What are you doing? (checkboxes) </h5>\n                  <div class=\"row justify-content-center\">\n                    <div class=\"col-lg-10\">\n                      <div class=\"row\">\n                        <div class=\"col-sm-4\">\n                          <div class=\"choice\" data-toggle=\"wizard-checkbox\">\n                            <input type=\"checkbox\" name=\"jobb\" value=\"Design\">\n                            <div class=\"icon\">\n                              <i class=\"fa fa-pencil\"></i>\n                            </div>\n                            <h6>Design</h6>\n                          </div>\n                        </div>\n                        <div class=\"col-sm-4\">\n                          <div class=\"choice\" data-toggle=\"wizard-checkbox\">\n                            <input type=\"checkbox\" name=\"jobb\" value=\"Code\">\n                            <div class=\"icon\">\n                              <i class=\"fa fa-terminal\"></i>\n                            </div>\n                            <h6>Code</h6>\n                          </div>\n                        </div>\n                        <div class=\"col-sm-4\">\n                          <div class=\"choice\" data-toggle=\"wizard-checkbox\">\n                            <input type=\"checkbox\" name=\"jobb\" value=\"Develop\">\n                            <div class=\"icon\">\n                              <i class=\"fa fa-laptop\"></i>\n                            </div>\n                            <h6>Develop</h6>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"tab-pane\" id=\"address\">\n                  <div class=\"row justify-content-center\">\n                    <div class=\"col-sm-12\">\n                      <h5 class=\"info-text\"> Are you living in a nice area? </h5>\n                    </div>\n                    <div class=\"col-sm-7\">\n                      <mat-form-field class=\"example-full-width\">\n                        <input matInput type=\"text\" placeholder=\"Street Name\">\n                      </mat-form-field>\n                    </div>\n                    <div class=\"col-sm-3\">\n                      <mat-form-field class=\"example-full-width\">\n                        <input matInput type=\"text\" placeholder=\"Street No.\">\n                      </mat-form-field>\n                    </div>\n                    <div class=\"col-sm-5\">\n                      <mat-form-field class=\"example-full-width\">\n                        <input matInput type=\"text\" placeholder=\"City\">\n                      </mat-form-field>\n                    </div>\n                    <div class=\"col-sm-5\">\n                        <mat-form-field>\n                            <mat-select placeholder=\"Single City\" name=\"city\">\n                              <mat-option *ngFor=\"let city of cities\" [value]=\"city.value\">\n                                {{ city.viewValue }}\n                              </mat-option>\n                            </mat-select>\n                        </mat-form-field>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"card-footer\">\n              <div class=\"mr-auto\">\n                <input type=\"button\" class=\"btn btn-previous btn-fill btn-default btn-wd disabled\" name=\"previous\" value=\"Previous\">\n              </div>\n              <div class=\"ml-auto\">\n                <input type=\"button\" class=\"btn btn-next btn-fill btn-rose btn-wd\" name=\"next\" value=\"Next\">\n                <input type=\"button\" class=\"btn btn-finish btn-fill btn-rose btn-wd\" name=\"finish\" value=\"Finish\" style=\"display: none;\">\n              </div>\n              <div class=\"clearfix\"></div>\n            </div>\n          </form>\n        </div>\n      </div>\n      <!-- wizard container -->\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/forms/wizard/wizard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/forms/wizard/wizard.component.ts ***!
  \**************************************************/
/*! exports provided: MyErrorStateMatcher, WizardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyErrorStateMatcher", function() { return MyErrorStateMatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WizardComponent", function() { return WizardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/esm5/forms.js");
// IMPORTANT: this is a plugin which requires jQuery for initialisation and data manipulation
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MyErrorStateMatcher = /** @class */ (function () {
    function MyErrorStateMatcher() {
    }
    MyErrorStateMatcher.prototype.isErrorState = function (control, form) {
        var isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    };
    return MyErrorStateMatcher;
}());

var WizardComponent = /** @class */ (function () {
    function WizardComponent(formBuilder) {
        this.formBuilder = formBuilder;
        this.cities = [
            { value: 'paris-0', viewValue: 'Paris' },
            { value: 'miami-1', viewValue: 'Miami' },
            { value: 'bucharest-2', viewValue: 'Bucharest' },
            { value: 'new-york-3', viewValue: 'New York' },
            { value: 'london-4', viewValue: 'London' },
            { value: 'barcelona-5', viewValue: 'Barcelona' },
            { value: 'moscow-6', viewValue: 'Moscow' },
        ];
        this.emailFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email,
        ]);
        this.matcher = new MyErrorStateMatcher();
    }
    WizardComponent.prototype.isFieldValid = function (form, field) {
        return !form.get(field).valid && form.get(field).touched;
    };
    WizardComponent.prototype.displayFieldCss = function (form, field) {
        return {
            'has-error': this.isFieldValid(form, field),
            'has-feedback': this.isFieldValid(form, field)
        };
    };
    WizardComponent.prototype.ngOnInit = function () {
        this.type = this.formBuilder.group({
            // To add a validator, we must first convert the string value into an array. The first item in the array is the default value if any, then the next item in the array is the validator. Here we are adding a required validator meaning that the firstName attribute must have a value in it.
            firstName: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            lastName: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
        });
        // Code for the Validator
        var $validator = $('.card-wizard form').validate({
            rules: {
                firstname: {
                    required: true,
                    minlength: 3
                },
                lastname: {
                    required: true,
                    minlength: 3
                },
                email: {
                    required: true,
                    minlength: 3,
                }
            },
            highlight: function (element) {
                $(element).closest('.form-group').removeClass('has-success').addClass('has-danger');
            },
            success: function (element) {
                $(element).closest('.form-group').removeClass('has-danger').addClass('has-success');
            },
            errorPlacement: function (error, element) {
                $(element).append(error);
            }
        });
        // Wizard Initialization
        $('.card-wizard').bootstrapWizard({
            'tabClass': 'nav nav-pills',
            'nextSelector': '.btn-next',
            'previousSelector': '.btn-previous',
            onNext: function (tab, navigation, index) {
                var $valid = $('.card-wizard form').valid();
                console.log($valid);
                if (!$valid) {
                    $validator.focusInvalid();
                    return false;
                }
            },
            onInit: function (tab, navigation, index) {
                // check number of tabs and fill the entire row
                var $total = navigation.find('li').length;
                var $wizard = navigation.closest('.card-wizard');
                var $first_li = navigation.find('li:first-child a').html();
                var $moving_div = $('<div class="moving-tab">' + $first_li + '</div>');
                $('.card-wizard .wizard-navigation').append($moving_div);
                $total = $wizard.find('.nav li').length;
                var $li_width = 100 / $total;
                var total_steps = $wizard.find('.nav li').length;
                var move_distance = $wizard.width() / total_steps;
                var index_temp = index;
                var vertical_level = 0;
                var mobile_device = $(document).width() < 600 && $total > 3;
                if (mobile_device) {
                    move_distance = $wizard.width() / 2;
                    index_temp = index % 2;
                    $li_width = 50;
                }
                $wizard.find('.nav li').css('width', $li_width + '%');
                var step_width = move_distance;
                move_distance = move_distance * index_temp;
                var $current = index + 1;
                if ($current == 1 || (mobile_device == true && (index % 2 == 0))) {
                    move_distance -= 8;
                }
                else if ($current == total_steps || (mobile_device == true && (index % 2 == 1))) {
                    move_distance += 8;
                }
                if (mobile_device) {
                    var x = index / 2;
                    vertical_level = parseInt(x);
                    vertical_level = vertical_level * 38;
                }
                $wizard.find('.moving-tab').css('width', step_width);
                $('.moving-tab').css({
                    'transform': 'translate3d(' + move_distance + 'px, ' + vertical_level + 'px, 0)',
                    'transition': 'all 0.5s cubic-bezier(0.29, 1.42, 0.79, 1)'
                });
                $('.moving-tab').css('transition', 'transform 0s');
            },
            onTabClick: function (tab, navigation, index) {
                var $valid = $('.card-wizard form').valid();
                if (!$valid) {
                    return false;
                }
                else {
                    return true;
                }
            },
            onTabShow: function (tab, navigation, index) {
                var $total = navigation.find('li').length;
                var $current = index + 1;
                var $wizard = navigation.closest('.card-wizard');
                // If it's the last tab then hide the last button and show the finish instead
                if ($current >= $total) {
                    $($wizard).find('.btn-next').hide();
                    $($wizard).find('.btn-finish').show();
                }
                else {
                    $($wizard).find('.btn-next').show();
                    $($wizard).find('.btn-finish').hide();
                }
                var button_text = navigation.find('li:nth-child(' + $current + ') a').html();
                setTimeout(function () {
                    $('.moving-tab').text(button_text);
                }, 150);
                var checkbox = $('.footer-checkbox');
                if (index !== 0) {
                    $(checkbox).css({
                        'opacity': '0',
                        'visibility': 'hidden',
                        'position': 'absolute'
                    });
                }
                else {
                    $(checkbox).css({
                        'opacity': '1',
                        'visibility': 'visible'
                    });
                }
                $total = $wizard.find('.nav li').length;
                var $li_width = 100 / $total;
                var total_steps = $wizard.find('.nav li').length;
                var move_distance = $wizard.width() / total_steps;
                var index_temp = index;
                var vertical_level = 0;
                var mobile_device = $(document).width() < 600 && $total > 3;
                if (mobile_device) {
                    move_distance = $wizard.width() / 2;
                    index_temp = index % 2;
                    $li_width = 50;
                }
                $wizard.find('.nav li').css('width', $li_width + '%');
                var step_width = move_distance;
                move_distance = move_distance * index_temp;
                $current = index + 1;
                if ($current == 1 || (mobile_device == true && (index % 2 == 0))) {
                    move_distance -= 8;
                }
                else if ($current == total_steps || (mobile_device == true && (index % 2 == 1))) {
                    move_distance += 8;
                }
                if (mobile_device) {
                    var x = index / 2;
                    vertical_level = parseInt(x);
                    vertical_level = vertical_level * 38;
                }
                $wizard.find('.moving-tab').css('width', step_width);
                $('.moving-tab').css({
                    'transform': 'translate3d(' + move_distance + 'px, ' + vertical_level + 'px, 0)',
                    'transition': 'all 0.5s cubic-bezier(0.29, 1.42, 0.79, 1)'
                });
            }
        });
        // Prepare the preview for profile picture
        $('#wizard-picture').change(function () {
            var input = $(this);
            if (input[0].files && input[0].files[0]) {
                var reader = new FileReader();
                reader.onload = function (e) {
                    $('#wizardPicturePreview').attr('src', e.target.result).fadeIn('slow');
                };
                reader.readAsDataURL(input[0].files[0]);
            }
        });
        $('[data-toggle="wizard-radio"]').click(function () {
            var wizard = $(this).closest('.card-wizard');
            wizard.find('[data-toggle="wizard-radio"]').removeClass('active');
            $(this).addClass('active');
            $(wizard).find('[type="radio"]').removeAttr('checked');
            $(this).find('[type="radio"]').attr('checked', 'true');
        });
        $('[data-toggle="wizard-checkbox"]').click(function () {
            if ($(this).hasClass('active')) {
                $(this).removeClass('active');
                $(this).find('[type="checkbox"]').removeAttr('checked');
            }
            else {
                $(this).addClass('active');
                $(this).find('[type="checkbox"]').attr('checked', 'true');
            }
        });
        $('.set-full-height').css('height', 'auto');
    };
    WizardComponent.prototype.ngOnChanges = function (changes) {
        var input = $(this);
        if (input[0].files && input[0].files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                $('#wizardPicturePreview').attr('src', e.target.result).fadeIn('slow');
            };
            reader.readAsDataURL(input[0].files[0]);
        }
    };
    WizardComponent.prototype.ngAfterViewInit = function () {
        $(window).resize(function () {
            $('.card-wizard').each(function () {
                var $wizard = $(this);
                var index = $wizard.bootstrapWizard('currentIndex');
                var $total = $wizard.find('.nav li').length;
                var $li_width = 100 / $total;
                var total_steps = $wizard.find('.nav li').length;
                var move_distance = $wizard.width() / total_steps;
                var index_temp = index;
                var vertical_level = 0;
                var mobile_device = $(document).width() < 600 && $total > 3;
                if (mobile_device) {
                    move_distance = $wizard.width() / 2;
                    index_temp = index % 2;
                    $li_width = 50;
                }
                $wizard.find('.nav li').css('width', $li_width + '%');
                var step_width = move_distance;
                move_distance = move_distance * index_temp;
                var $current = index + 1;
                if ($current == 1 || (mobile_device == true && (index % 2 == 0))) {
                    move_distance -= 8;
                }
                else if ($current == total_steps || (mobile_device == true && (index % 2 == 1))) {
                    move_distance += 8;
                }
                if (mobile_device) {
                    var x = index / 2;
                    vertical_level = parseInt(x);
                    vertical_level = vertical_level * 38;
                }
                $wizard.find('.moving-tab').css('width', step_width);
                $('.moving-tab').css({
                    'transform': 'translate3d(' + move_distance + 'px, ' + vertical_level + 'px, 0)',
                    'transition': 'all 0.5s cubic-bezier(0.29, 1.42, 0.79, 1)'
                });
                $('.moving-tab').css({
                    'transition': 'transform 0s'
                });
            });
        });
    };
    WizardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-wizard-cmp',
            template: __webpack_require__(/*! ./wizard.component.html */ "./src/app/forms/wizard/wizard.component.html"),
            styles: [__webpack_require__(/*! ./wizard.component.css */ "./src/app/forms/wizard/wizard.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], WizardComponent);
    return WizardComponent;
}());



/***/ })

}]);
//# sourceMappingURL=forms-forms-module.js.map