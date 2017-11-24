/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/*
==========================================================================
    # Util
==========================================================================
*/

function Util() {

    return this;

}

// Set Position
Util.prototype.setPosition = function( e1, e2, position ) {

    e1 = $( e1 );
    e2 = $( e2 );

    var presets = {

        'bottom-left': function() {

            var wWidth = $( window ).outerWidth();
            var e1_width = e1.outerWidth();
            var e2_left = e2.offset().left;

            if ( ( wWidth - e2_left ) < ( e1_width + 100 ) ) {

                e1.css({
                    top: e2.outerHeight() + 'px',
                    left: '-' + ( e1.outerWidth() - e2.outerWidth() ) + 'px',
                });

            } else {

                e1.css({
                    top: e2.outerHeight() + 'px',
                    left: e2.position().left  + 'px'
                });

            }

        },

        'bottom-center': function() {

            var sign = '';
            
            if ( e1.outerHeight() > e2.outerHeight() ) {
                sign = '-';
            }
                            
            e1.css({
                top: e2.outerHeight() + 'px',
                left: sign + Math.abs( ( e1.outerWidth() - e2.outerWidth() ) / 2 ) + 'px'
            });

        },

        'bottom-right': function() {
            
            e1.css({
                top: e2.outerHeight() + 'px',
                left: '-' + ( e1.outerWidth() - e2.outerWidth() ) + 'px'
            });

        },
        
        'top-left': function() {
            
            e1.css({
                top: '-' + e1.outerHeight() + 'px',
                left: '0px'
            });

        },
        
        'top-center': function() {
            
            var sign = '';
            
            if ( e1.outerHeight() > e2.outerHeight() ) {
                sign = '-';
            }
                
            e1.css({
                top: '-' + e1.outerHeight() + 'px',
                left: sign + Math.abs( ( e1.outerWidth() - e2.outerWidth() ) / 2 ) + 'px'
            });

        },
        
        'top-right': function() {
            
            e1.css({
                top: '-' + e1.outerHeight() + 'px',
                left: '-' + ( e1.outerWidth() - e2.outerWidth() ) + 'px'
            });

        },
        
        'left-top': function() {
            
            e1.css({
                top: '-' + e1.outerHeight() + 'px',
                left: '-' + e1.outerWidth() + 'px'
            });

        },
        
        'left-center': function() {
            
            var sign = '';
            
            if ( e1.outerHeight() > e2.outerHeight() ) {
                sign = '-';
            }
                            
            e1.css({
                top: sign + Math.abs( ( e1.outerHeight() - e2.outerHeight() ) / 2 ) + 'px',
                left: '-' + e1.outerWidth() + 'px'
            });

        },
        
        'left-bottom': function() {
            
            e1.css({
                top: e2.outerHeight() + 'px',
                left: '-' + e1.outerWidth() + 'px'
            });

        },
        
        'right-top': function() {
            
            e1.css({
                top: '-' + e1.outerHeight() + 'px',
                left: e2.outerWidth() + 'px'
            });

        },
        
        'right-center': function() {

            var sign = '';

            if ( e1.outerHeight() > e2.outerHeight() ) {
                sign = '-';
            }
            
            e1.css({
                top: sign + Math.abs( ( e1.outerHeight() - e2.outerHeight() ) / 2 ) + 'px',
                left: e2.outerWidth() + 'px'
            });

        },
        
        'right-bottom': function() {
            
            e1.css({
                top: e2.outerHeight() + 'px',
                left: e2.outerWidth() + 'px'
            });

        },

    }
    
    presets[position]();

};

// Detect end of animation
Util.prototype.onAnimationEnd = function( element, fn ) {

    element.one('webkitAnimationEnd mozAnimationEnd oAnimationEnd oanimationend animationend', function(e) {
        
        if ( typeof fn == 'function' ) {
            fn();
        }

        $(this).off(e);
    
    });

}

// Detect end of transition
Util.prototype.onTransitionEnd = function( element, fn ) {

    element.one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(e) {
        
        if ( typeof fn == 'function' ) {
            fn();
        }

        $(this).off(e);
    
    });

}

// Check if target is visible or not in screen
Util.prototype.isVisible = function( target ) {

    var win = $( window ),
        target = $( target );
    
    var viewport = {
        top : win.scrollTop(),
        left : win.scrollLeft()
    };

    viewport.right = viewport.left + win.width();
    viewport.bottom = viewport.top + win.height();
    
    var bounds = target.offset();
        bounds.right = bounds.left + target.outerWidth();
        bounds.bottom = bounds.top + target.outerHeight();
    
    return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));
    
}

// Set vibrance module initialized
Util.prototype.setInitialized = function( id, element, options ) {

    var self = this,
        _isInit = self.isInitialized(id, element);


    function set() {

        if ( ! $.vibrance._initialized.hasOwnProperty( id ) ) {
            $.vibrance._initialized[id] = [];
        }
    
        $.vibrance._initialized[id].push({
            element: element[0], 
            options: options
        });


    }

    if ( _isInit.stat === true ) {

        self.offInitialize(id, element, function(){

            set();

        });

    } else {
        
        set();

    }

}

// Check if vibrance module initialized
Util.prototype.isInitialized = function( id, element ) {

    if ( ! $.vibrance._initialized.hasOwnProperty( id ) ) {
        return {
            stat: false
        };
    }

    for ( var obj in $.vibrance._initialized[id] ) {
        if ( $.vibrance._initialized[id].hasOwnProperty( obj ) ) {

            if ( element[0] == $.vibrance._initialized[id][obj].element ) {
                return {
                    stat: true,
                    options: $.vibrance._initialized[id][obj].options
                };

                break;

            }

        }
    }

    return {
        stat: false
    };

}

// Set off vibrance module initialized
Util.prototype.offInitialize = function( id, element, fn ) {
    
    if ( ! $.vibrance._initialized.hasOwnProperty( id ) ) {
        return {
            stat: false
        };
    }

    for ( var obj in $.vibrance._initialized[id] ) {
        if ( $.vibrance._initialized[id].hasOwnProperty( obj ) ) {

            if ( element[0] == $.vibrance._initialized[id][obj].element ) {
                
                delete $.vibrance._initialized[id][obj];

                break;

            }

        }
    }

    if ( typeof fn == 'function' ) {
        fn();
    }

}

var util = new Util();

/* harmony default export */ __webpack_exports__["a"] = (util);

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__init_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_accordion_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_countdown_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_dropdown_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_lightbox_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_modal_js__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_offcanvas_js__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_parallax_js__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_progress_js__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_scroll_js__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_scrollspy_js__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_scrolltop_js__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_tab_js__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__util_js__ = __webpack_require__(0);
/*
==========================================================================
    # MAIN
==========================================================================
*/
















var vibrance = {

    _initialized: {},

    _global: {},

    accordion: function( element, opts ) { 
        return new __WEBPACK_IMPORTED_MODULE_1__components_accordion_js__["a" /* default */]( element, opts ); 
    },

    countdown: function( element, opts ) { 
        return new __WEBPACK_IMPORTED_MODULE_2__components_countdown_js__["a" /* default */]( element, opts ); 
    },

    dropdown: function( element, opts ) { 
        return new __WEBPACK_IMPORTED_MODULE_3__components_dropdown_js__["a" /* default */]( element, opts ); 
    },
    
    lightbox: function( element, opts ) { 
        return new __WEBPACK_IMPORTED_MODULE_4__components_lightbox_js__["a" /* default */]( element, opts ); 
    },
    
    modal: function( element, opts ) { 
        return new __WEBPACK_IMPORTED_MODULE_5__components_modal_js__["a" /* default */]( element, opts ); 
    },
    
    offcanvas: function( element, opts ) { 
        return new __WEBPACK_IMPORTED_MODULE_6__components_offcanvas_js__["a" /* default */]( element, opts ); 
    },
    
    parallax: function( element, opts ) { 
        return new __WEBPACK_IMPORTED_MODULE_7__components_parallax_js__["a" /* default */]( element, opts ); 
    },
    
    progressBar: function( element, opts ) { 
        return new __WEBPACK_IMPORTED_MODULE_8__components_progress_js__["a" /* default */]( element, opts ); 
    },
    
    scroll: function( element, opts ) { 
        return new __WEBPACK_IMPORTED_MODULE_9__components_scroll_js__["a" /* default */]( element, opts ); 
    },
    
    scrollspy: function( element, opts ) { 
        return new __WEBPACK_IMPORTED_MODULE_10__components_scrollspy_js__["a" /* default */]( element, opts ); 
    },
    
    scrolltop: function( element, opts ) { 
        return new __WEBPACK_IMPORTED_MODULE_11__components_scrolltop_js__["a" /* default */]( element, opts ); 
    },
    
    tab: function( element, opts ) { 
        return new __WEBPACK_IMPORTED_MODULE_12__components_tab_js__["a" /* default */]( element, opts ); 
    },

    util: function() { 
        return __WEBPACK_IMPORTED_MODULE_13__util_js__["a" /* default */]; 
    }

};

(function($){ 

    $.vibrance = vibrance;

    // Initialize components
    __WEBPACK_IMPORTED_MODULE_0__init_js__["a" /* default */].accordion();
    __WEBPACK_IMPORTED_MODULE_0__init_js__["a" /* default */].countdown();
    __WEBPACK_IMPORTED_MODULE_0__init_js__["a" /* default */].dropdown();
    __WEBPACK_IMPORTED_MODULE_0__init_js__["a" /* default */].lightbox();
    __WEBPACK_IMPORTED_MODULE_0__init_js__["a" /* default */].modal();
    __WEBPACK_IMPORTED_MODULE_0__init_js__["a" /* default */].offcanvas();
    __WEBPACK_IMPORTED_MODULE_0__init_js__["a" /* default */].parallax();
    __WEBPACK_IMPORTED_MODULE_0__init_js__["a" /* default */].progress();
    __WEBPACK_IMPORTED_MODULE_0__init_js__["a" /* default */].scroll();
    __WEBPACK_IMPORTED_MODULE_0__init_js__["a" /* default */].scrolltop();
    __WEBPACK_IMPORTED_MODULE_0__init_js__["a" /* default */].tab();

})(jQuery);

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var initComponents = {

    // Initialize accordion
    accordion: function() {

        $('.accordion').each(function(){
            $.vibrance.accordion( $(this) );
        });

    },

    // Initialize countdown
    countdown: function() {

        $('.countdown').each(function(){
            $.vibrance.countdown( $(this) );
        });

    },

    // Initialize dropdown
    dropdown: function() {

        $('.dropdown').each(function(){
            $.vibrance.dropdown( $(this) );
        });

    },

    // Initialize lightbox
    lightbox: function() {

        $('.lightbox').each(function(){
            $.vibrance.lightbox( $(this) );
        });

    },

    // Initialize modal
    modal: function() {
       
        $('.modal-toggle').each(function(){
            
            var _modal = null,
                _toggle = $(this),
                opts = {
                    toggle: $(this)
                };

            if ( _toggle[0].hasAttribute( 'data-modal' ) ) {
                _modal = $( _toggle.attr( 'data-modal') );
            } else {
                return false;
            }

            if ( _modal.length === 0 ) {
                return false;
            }
            
            $.vibrance.modal( _modal, opts );

        });
    },

    // Initialize off-canvas
    offcanvas: function() {
        $('.offcanvas-toggle').each(function(){

            var _offcanvas = null,
                _toggle = $(this),
                opts = {
                    toggle: $(this)
                };

            if ( _toggle[0].hasAttribute( 'data-offcanvas' ) ) {
                _offcanvas = $( _toggle.attr( 'data-offcanvas') );
            } else {
                return false;
            }

            if ( _offcanvas.length === 0 ) {
                return false;
            }

            $.vibrance.offcanvas( _offcanvas, opts );

        });
    },

    // Initialize parallax
    parallax: function() {

        $('.parallax').each(function(){
            $.vibrance.parallax( $(this) );
        });

    },

    // Initialize progress
    progress: function() {

        $('.progress-bar').each(function(){
            $.vibrance.progressBar( $(this) );
        });

    },

    // Initialize scroll
    scroll: function() {
        $('.scroll-toggle').each(function(){

            var _toggle = $(this);

            var target = _toggle.attr( 'href' );

            $( _toggle ).click(function(){

                $.vibrance.scroll( 'html, body' ).to( target );

                return false;
                
            });

        });
    },

    // Initialize scrolltop
    scrolltop: function() {

        $('.scroll-top-toggle').each(function(){
            $.vibrance.scrolltop( $(this) );
        });

    },

    // Initialize tab
    tab: function() {

        $('.tab').each(function(){
            $.vibrance.tab( $(this) );
        });

    }

}

/* harmony default export */ __webpack_exports__["a"] = (initComponents);

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Accordion;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_js__ = __webpack_require__(0);
/*
==========================================================================
    # ACCORDION
==========================================================================
*/



// Main
function Accordion( element, opts ) {

    var self = this;

    self.element = element = $( element );
    self.opts = opts = opts || {};

    var _isInit = __WEBPACK_IMPORTED_MODULE_0__util_js__["a" /* default */].isInitialized( 'accordion', element);

    if ( ! _isInit.stat ) {

        self.initialize();

    } else {

        if ( Object.keys( opts ).length > 0 ) {

            self.initialize();

        } else {

            self.opts = opts = _isInit.options;

        }
        
        return false;

    }

    return element;
    
}

// Initialize
Accordion.prototype.initialize = function() {

    var self = this,
        element = this.element,
        opts = this.opts;
    
    if ( ! opts.hasOwnProperty( 'animation' ) ) {
        if ( element[0].hasAttribute( 'data-animation' ) ) {
            opts.animation = ( element.attr( 'data-animation' ) == 'true' );
        } else {
            opts.animation = true;
        }
    }

    if ( ! opts.hasOwnProperty( 'duration' ) ) {
        if ( element[0].hasAttribute( 'data-duration' ) ) {
            opts.animation = element.attr( 'data-duration' );
        } else {
            opts.duration = 300;
        }
    }

    if ( opts.animation === false ) {
        opts.duration = 0;
        element.find( '.accordion-title' ).css( 'transition', 'none' );
    }

    if ( ! self.opts.hasOwnProperty( 'expendable' ) ) {
        if ( element.hasClass( 'accordion-expendable' ) ) {
            opts.expendable = true;
        } else {
            opts.expendable = false;
        }
    }

    if ( ! self.opts.hasOwnProperty( 'collapsible' ) ) {
        if ( element.hasClass( 'accordion-collapsible-off' ) ) {
            opts.collapsible = false;
        } else {
            opts.collapsible = true;
        }
    }

    self.events(function(){

        if ( element.find( '> *.active' ).length > 0 ) {

            var item;

            if ( opts.expendable === false ) {

                item = element.find( '> *.active' ).eq(0);

                element.find( '> *.active' ).removeClass( 'active' );
                
                self.open( item.index() );

            } else {

                element.find( '> *.active' ).each(function(){

                    item = $( this );

                    item.removeClass( 'active' );
                    
                    self.open( item.index() );

                });

            }

        }

        __WEBPACK_IMPORTED_MODULE_0__util_js__["a" /* default */].setInitialized('accordion', element, opts);

    });

}

// Events
Accordion.prototype.events = function( fn ) {

    var self = this,
        element = this.element,
        opts = this.opts;

    element.find( '.accordion-title' ).click(function( e ) {
    
        e.preventDefault();
        
        self.toggle( $( this ).parent().index() );
            
        return false;

    });

    if ( typeof fn == 'function' ) {
        fn();
    }

}

// Method: .toggle( index )
Accordion.prototype.toggle = function( index ) {

    var self = this,
        element = this.element,
        opts = this.opts;

    var item = element.find( '> *' ).eq( index );

    $(element).trigger('vibrance.accordion.toggle');

    if ( opts.expendable === false && item.closest( '.active' ).length === 0 ) {

        self.closeAll();

    }
    
    if ( item.closest( '.active' ).length > 0 ) {
        
        self.close( index );

    } else {

        self.open( index );

    }

}

// Method: .open( index )
Accordion.prototype.open = function( index ) {
    
    var self = this,
        element = this.element,
        opts = this.opts;

    var item = element.find( '> *' ).eq( index );

    $(element).trigger('vibrance.accordion.open');
    
    item.addClass( 'active' );
    item.find( '.accordion-content' ).slideDown( opts.duration )
	/* Fix */
	.css({
		height: '',
		paddingTop: '',
		marginTop: '',
		paddingBottom: '',
		marginBottom: ''
    }); 
    
}

// Method: .close( index )
Accordion.prototype.close = function( index ) {
    
    var self = this,
        element = this.element,
        opts = this.opts;

    if ( opts.collapsible === false ) {
        if ( element.find( '> *.active' ).length === 1 ) {
            return false;
        }
    }

    var item = element.find( '> *' ).eq( index );

    $(element).trigger('vibrance.accordion.close');
    
    item.removeClass( 'active' );

    if ( opts.expendable === false ) {

        item.find( '.accordion-content' ).slideUp( opts.duration );

    } else {

        item.find( '.accordion-content' ).slideUp( opts.duration );

    }

}

// Method: .closeAll()
Accordion.prototype.closeAll = function() {
    
    var self = this,
        element = this.element,
        opts = this.opts;
    
    var item = element.find( '> *' );

    item.removeClass( 'active' );
    item.find( '.accordion-title' ).removeClass( 'active' );
    item.find( '.accordion-content' ).slideUp( opts.duration );

}

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Countdown;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_js__ = __webpack_require__(0);
/*
==========================================================================
    # COUNTDOWN
==========================================================================
*/



// Main
function Countdown( element, opts ) {

    var self = this;

    self.element = element = $( element );
    self.opts = opts = opts || {};

    var _isInit = __WEBPACK_IMPORTED_MODULE_0__util_js__["a" /* default */].isInitialized( 'countdown', element);

    if ( ! _isInit.stat ) {

        self.initialize();

    } else {

        if ( Object.keys( opts ).length > 0 ) {

            self.initialize();

        } else {

            self.opts = opts = _isInit.options;

        }
        
        return false;

    }

    return $( element );

}

Countdown.prototype.interval = null;

Countdown.prototype.initialize = function() {

    var self = this,
        element = this.element,
        opts = this.opts;
        
    $.vibrance._global.countdown = {};

    var date = null;

    if ( typeof opts == 'object' ) {

        if ( opts.hasOwnProperty( 'date' ) ) {
            date = opts.date;
        } else {

            if ( element[0].hasAttribute( 'data-date' ) ) {

                date = element.attr( 'data-date' );

            }

        }

    }

    __WEBPACK_IMPORTED_MODULE_0__util_js__["a" /* default */].setInitialized('countdown', element, opts);

    if ( date.length === 0 || date === null ) {
        self.refresh( '00', '00', '00', '00' );
    } else {
        self.start();
    }

}

Countdown.prototype.start = function() {
    
    var self = this;
    var element = self.element;
    var opts = self.opts;

    var date = null;
    
    if ( element[0].hasAttribute( 'data-date' )  ) {
        
        date = element.attr( 'data-date' );

    } else {

        if ( opts.hasOwnProperty( 'date' ) ) {

            date = opts.date;

        }

    }

    var cddate = new Date( date ).getTime();
        
    $( element ).trigger('vibrance.countdown.start');

    self.stop();

    $.vibrance._global.countdown.interval = setInterval(function() {
        
        var now = new Date().getTime();
    
        var distance = cddate - now;
    
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        if ( days < 10 ) { days = '0' + days }
        if ( hours < 10 ) { hours = '0' + hours }
        if ( minutes < 10 ) { minutes = '0' + minutes }
        if ( seconds < 10 ) { seconds = '0' + seconds }
    
        self.refresh( days, hours, minutes, seconds );
        
        if ( distance < 0 ) {

            self.refresh( '00', '00', '00', '00' );

            self.stop();
            
            $(element).trigger('vibrance.countdown.end');

            if ( opts.hasOwnProperty( 'finished' ) ) {
                if ( typeof opts.finished == 'function' ) {
                    opts.finished();
                }
            }

        }

    }, 1000);

}

Countdown.prototype.refresh = function( days, hours, minutes, seconds ) {
    
    var element = this.element;

    if ( element.find( '.countdown-days' ).length > 0 ) {
        element.find( '.countdown-days' ).html( days );
    }

    if ( element.find( '.countdown-hours' ).length > 0 ) {
        element.find( '.countdown-hours' ).html( hours );
    }

    if ( element.find( '.countdown-minutes' ).length > 0 ) {
        element.find( '.countdown-minutes' ).html( minutes );
    }

    if ( element.find( '.countdown-seconds' ).length > 0 ) {
        element.find( '.countdown-seconds' ).html( seconds );
    }

}

Countdown.prototype.stop = function() {

    var self = this,
        element = this.element,
        opts = this.opts;

    clearInterval($.vibrance._global.countdown.interval);

    $(element).trigger('vibrance.countdown.stop');

}

Countdown.prototype.update = function() {

    var self = this,
        element = this.element,
        opts = this.opts;

    $(element).trigger('vibrance.countdown.update');

    var date = null;
    
    if ( element[0].hasAttribute( 'data-date' )  ) {
        
        date = element.attr( 'data-date' );

    } else {

        if ( opts.hasOwnProperty( 'date' ) ) {

            date = opts.date;

        }

    }

    if ( date.length === 0 || date === null ) {
        self.refresh( '00', '00', '00', '00' );
        return false;
    }

    self.stop();
    self.start();

}

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Dropdown;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_js__ = __webpack_require__(0);
/*
==========================================================================
    # DROPDOWN
==========================================================================
*/



// Main
function Dropdown( element, opts ) {

    var self = this;

    self.element = element = $( element );
    self.opts = opts = opts || {};

    var _isInit = __WEBPACK_IMPORTED_MODULE_0__util_js__["a" /* default */].isInitialized( 'dropdown', element);

    if ( ! _isInit.stat ) {

        self.initialize();

    } else {

        if ( Object.keys( opts ).length > 0 ) {

            self.initialize();

        } else {

            self.opts = opts = _isInit.options;

        }
        
        return false;

    }

    return $( element );

}

// Initialize
Dropdown.prototype.initialize = function() {

    var self = this,
        element = this.element,
        opts = this.opts;

    // Ajout des paramètres par défaut
    if ( ! opts.hasOwnProperty( 'toggle' ) ) {

        if ( element.prev( '.dropdown-toggle' ).length > 0 ) {

            opts.toggle = element.prev( '.dropdown-toggle' );

        } else {

            if ( element[0].hasAttribute( 'data-toggle' ) ) {

                var _toggle = element.attr( 'data-toggle' );

                if ( $( _toggle ).length > 0 ) {

                    opts.toggle = $( _toggle );

                }

            } else {
                return false;
            }

        }
        
    }

    if ( element[0].hasAttribute( 'data-mode' ) ) {
        
        opts.mode = element.attr( 'data-mode' );

    } else {
        
        if ( ! opts.hasOwnProperty( 'mode' ) ) {

            opts.mode = 'click';

        }
        
    }

    if ( element[0].hasAttribute( 'data-position' ) ) {
        
        opts.position = element.attr( 'data-position' );

    } else {
        
        if ( ! opts.hasOwnProperty( 'position' ) ) {

            opts.position = 'bottom-left';

        }
        
    }

    if ( ! opts.hasOwnProperty( 'hideDelay' ) ) {

        if ( element[0].hasAttribute( 'data-hide-delay' ) ) {
            opts.animation = element.attr( 'data-hide-delay' );
        } else {
            opts.hideDelay = 500;
        }

    }

    self.events(function(){
        
        __WEBPACK_IMPORTED_MODULE_0__util_js__["a" /* default */].setInitialized('dropdown', element, opts);

    });

}

// Events
Dropdown.prototype.events = function( fn ) {

    var self = this,
        element = this.element,
        opts = this.opts;

    // Click mode
    if ( opts.mode == 'click' ) {

        opts.toggle.click(function(e){
                
            e.preventDefault();

            if ( element.hasClass( 'drop-open' ) ) {
                self.hide();
                return false;
            }

            $( '.dropdown.drop-open' ).removeClass( 'drop-open' ).hide();

            $(element).trigger('vibrance.dropdown.toggle');

            self.show();

            return false;

        });

    }

    // Hover mode
    else {

        var time = null;

        $( opts.toggle ).add( element ).mouseenter(function(){
            
            clearTimeout( time );

            if ( $( window ).width() < 768 ) {

                $( this ).click(function(e){

                    e.preventDefault();

                    self.show();

                    return false;

                });

            } else {

                $( '.dropdown.drop-open' ).removeClass( 'drop-open' ).hide();

                $(element).trigger('vibrance.dropdown.toggle');

                self.show();

            }

        });

        $( opts.toggle ).add( element ).mouseleave(function(){

            if ( $( window ).width() < 768 ) {
                return false;
            }

            $(element).trigger('vibrance.dropdown.toggle');
            
            time = setTimeout(function(){

                self.hide();

            }, opts.hideDelay);

        });

    }
    
    if ( typeof fn == 'function' ) {
        fn();
    }

}

// Method: .show()
Dropdown.prototype.show = function() {

    var self = this,
        element = this.element,
        opts = this.opts;
    
    var toggle = opts.toggle;

    /* fix button group */
    if ( opts.toggle.parent( '.button-group' ).length > 0 ) {
        toggle = opts.toggle.parent( '.button-group' );
    }
    
    // Set position
    __WEBPACK_IMPORTED_MODULE_0__util_js__["a" /* default */].setPosition( element, toggle, opts.position );

    $(element).trigger('vibrance.dropdown.show');

    element.addClass( 'drop-open' ).show();

    // Hide on click out
    $( window ).click(function(e){
        
        if ( $( e.target ).closest( '.dropdown' ).length === 0 ) {
        
            self.hide();

            $(this).off(e);
        
        }

    });

}

// Method: .hide()
Dropdown.prototype.hide = function() {
    
    var self = this,
        element = this.element,
        opts = this.opts;

    $(element).trigger('vibrance.dropdown.hide');

    element.removeClass( 'drop-open' ).hide();

}

// Method: .toggle()
Dropdown.prototype.toggle = function() {
    
    var self = this,
        element = this.element,
        opts = this.opts;

    if ( opts.mode == 'click' ) {
        
        opts.toggle.trigger('click');

    } else {

        opts.toggle.trigger('mouseenter');

    }

}

// Method: .update()
Dropdown.prototype.update = function() {
    
    var self = this,
        element = this.element,
        opts = this.opts;

    $(element).trigger('vibrance.dropdown.update');

    self.initialize();

}

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Lightbox;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_js__ = __webpack_require__(0);
/*
==========================================================================
    # LIGHTBOX
==========================================================================
*/



// Main
function Lightbox( element, opts ) {

    var self = this;
    
    self.element = element = $( element );
    self.opts = opts = opts || {};

    var _isInit = __WEBPACK_IMPORTED_MODULE_0__util_js__["a" /* default */].isInitialized( 'lightbox', element);

    if ( ! _isInit.stat ) {

        self.initialize();

    } else {

        if ( Object.keys( opts ).length > 0 ) {

            self.initialize();

        } else {

            self.opts = opts = _isInit.options;

        }
        
        return false;

    }

    return element;
    
}

// Initialize
Lightbox.prototype.initialize = function() {

    var self = this,
        element = this.element,
        opts = this.opts;

    if ( element.find( '.lightbox-item' ).length === 0 ) {
        return false;
    }

    self.events(function(){

        __WEBPACK_IMPORTED_MODULE_0__util_js__["a" /* default */].setInitialized('lightbox', element, opts);

    });

}

// Events
Lightbox.prototype.events = function( fn ) {

    var self = this,
        element = this.element,
        opts = this.opts;

    element.find( '.lightbox-item' ).click(function(){

        element.trigger('vibrance.lightbox.toggle');
            
        $( this ).addClass( 'lightbox-target' );

        self.open();

    });
    
    if ( typeof fn == 'function' ) {
        fn();
    }

}

// Method: .open( callback )
Lightbox.prototype.open = function( fn ) {

    var self = this,
        element = this.element,
        opts = this.opts;

    self.close();

    element.trigger('vibrance.lightbox.open');
        
    var lightbox = $( '<div/>', {
        class: 'win-lightbox'
    }).appendTo( 'body' );

    var closeLightbox = $( '<div/>', {
        class: 'lightbox-close-bar',
        html: '<button class="lightbox-close"><i class="fa fa-times"></i></button>'
    })
    .appendTo( lightbox ).click(function(){

        self.close();

    });
    
    var slider = $( '<div/>', {
        class: 'slider'
    }).appendTo( lightbox );

    element.find( '.lightbox-item' ).each(function(){
        
        var sliderItem = $( '<div/>', {
            class: 'item-slider lightbox-list'
        }).appendTo( slider );

        var sliderBlock = $( '<div/>', {
            class: 'slider-block lightbox-list-item'
        }).appendTo( sliderItem );

        var media = $( this ).clone();

        sliderBlock.append( media );

        if ( media[0].hasAttribute( 'alt' ) && media.attr( 'alt' ).length > 0 ) {

            $( '<div/>', {
                class: 'lightbox-caption',
                html: media.attr( 'alt' )
            }).appendTo( sliderItem );

        }

    });

    // Si multi-medias prepare owl-carousel
    if ( element.find( '.lightbox-item' ).length > 1 ) {

        slider.addClass( 'owl-carousel' );

        var targetSlide = element.find( '.lightbox-target' ).parent().index() || 0;
        
        if ( $.vibrance.hasOwnProperty( 'slider' ) ) {

            $.vibrance.slider( slider, {
                loop: true,
                items: 1,
                nav: true,
                dots: false,
                navText: ['&#xf053;','&#xf054;'],
                startPosition: targetSlide
            });
            
        }

    }

    $( '.lightbox-target' ).removeClass( 'lightbox-target' );

}

// Method: .close( callback )
Lightbox.prototype.close = function( fn ) {

    if ( $( '.win-lightbox' ).length > 0 ) {
    
        this.element.trigger('vibrance.lightbox.close');

        $( '.win-lightbox' ).remove();

    }

}

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Modal;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_js__ = __webpack_require__(0);
/*
==========================================================================
    # MODAL
==========================================================================
*/



// Main
function Modal( element, opts ) {

    var self = this;

    self.element = element = $( element );
    self.opts = opts = opts || {};

    var _isInit = __WEBPACK_IMPORTED_MODULE_0__util_js__["a" /* default */].isInitialized( 'modal', element);

    if ( ! _isInit.stat ) {

        self.initialize();

    } else {

        if ( Object.keys( opts ).length > 0 ) {

            self.initialize();

        } else {

            self.opts = opts = _isInit.options;

        }
        
        return false;

    }

    return element;
}

// Initialize
Modal.prototype.initialize = function() {

    var self = this,
        element = this.element,
        opts = this.opts;
   
    if ( ! opts.hasOwnProperty( 'toggle' ) ) {

        if ( element.prev( '.modal-toggle' ).length > 0 ) {

            opts.toggle = element.prev( '.modal-toggle' );

        } else {

            if ( element[0].hasAttribute( 'modal-toggle' ) ) {

                var _toggle = element.attr( 'modal-toggle' );

                if ( $( _toggle ).length > 0 ) {

                    opts.toggle = $( _toggle );

                }

            } else {
                return false;
            }
        }
        
    }
    
    self.events(function(){

        __WEBPACK_IMPORTED_MODULE_0__util_js__["a" /* default */].setInitialized('modal', element, opts);

    });

}

// Events
Modal.prototype.events = function( fn ) {

    var self = this,
        element = this.element,
        opts = this.opts;

    opts.toggle.click(function(e){

        self.show();

    });

    element.find( '.modal-close, .modal-overlay' ).click(function(e){
        
        e.preventDefault();
            
        self.hide();

        return false;

    });
    
    if ( typeof fn == 'function' ) {
        fn();
    }

}

// Method: .show()
Modal.prototype.show = function() {

    var self = this,
        element = this.element,
        opts = this.opts;

    if ( $( '.modal' ).length > 0 ) {
    
        // Hide all modal
        $( '.modal' ).removeClass( 'modal-opened' ).hide();

    }

    element.trigger('vibrance.modal.show');

    element.addClass( 'modal-opened' ).show();

}

// Method: .hide()
Modal.prototype.hide = function() {
    
    var self = this,
        element = this.element,
        opts = this.opts;
    
    element.trigger('vibrance.modal.hide');

    element.removeClass( 'modal-opened' ).hide();

}

// Method: .toggle()
Modal.prototype.toggle = function() {

    var self = this,
        element = this.element,
        opts = this.opts;

    element.trigger('vibrance.modal.toggle');

    if ( element.hasClass( 'modal-opened' ) ) {
        
        self.hide();

    } else {

        self.show();

    }

}

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Offcanvas;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_js__ = __webpack_require__(0);
/*
==========================================================================
    # OFF-CANVAS
==========================================================================
*/



// Main
function Offcanvas( element, opts ) {

    var self = this;

    self.element = element = $( element );
    self.opts = opts = opts || {};
    
    var _isInit = __WEBPACK_IMPORTED_MODULE_0__util_js__["a" /* default */].isInitialized( 'offcanvas', element);

    if ( ! _isInit.stat ) {

        self.initialize();

    } else {

        if ( Object.keys( opts ).length > 0 ) {

            self.initialize();

        } else {

            self.opts = opts = _isInit.options;

        }
        
        return false;

    }

    return element;

}

// Initialize
Offcanvas.prototype.initialize = function() {

    var self = this,
        element = this.element,
        opts = this.opts;

    if ( ! opts.hasOwnProperty( 'width' ) ) {
        if ( element[0].hasAttribute( 'data-width' ) ) {
            opts.width = element.attr( 'data-width' );
        } else {
            opts.width = '300px';
        }
    }

    if ( ! opts.hasOwnProperty( 'position' ) ) {
        if ( element[0].hasAttribute( 'data-position' ) ) {
            opts.position = element.attr( 'data-position' );
        } else {
            opts.position = 'left';
        }
    }

    if ( ! opts.hasOwnProperty( 'animation' ) ) {
        if ( element[0].hasAttribute( 'data-animation' ) ) {
            opts.animation = ( element.attr( 'data-animation' ) == 'true' );
        } else {
            opts.animation = true;
        }
    }

    if ( ! opts.hasOwnProperty( 'duration' ) ) {
        if ( element[0].hasAttribute( 'data-duration' ) ) {
            opts.duration = element.attr( 'data-duration' );
        } else {
            opts.duration = 200;
        }
    }
    
    element.css({
        display: 'none',
        width: opts.width,
        transform: 'translateX(-100%)'
    });

    if ( opts.position == 'left' || opts.position == 'right' ) {

        element.css({
            position: opts.position
        });

    }

    if ( opts.animation === true ) {
        
        element.css( 'transition', 'transform ' + ( opts.duration / 1000 ) + 's ease-out' );
        
    }

    self.events(function(){

        element.css({
            display: 'block'
        });

        __WEBPACK_IMPORTED_MODULE_0__util_js__["a" /* default */].setInitialized('offcanvas', element, opts);

    });

}

// Events
Offcanvas.prototype.events = function( fn ) {

    var self = this,
        element = this.element,
        opts = this.opts;

    opts.toggle.click(function(e){

        self.toggle();

    });

    element.find( '.offcanvas-close' ).click(function(e){
        
        e.preventDefault();
            
        self.hide();

        return false;

    });
    
    if ( typeof fn == 'function' ) {
        fn();
    }

}

// Method: .toggle()
Offcanvas.prototype.toggle = function() {

    var self = this,
        element = this.element,
        opts = this.opts;


    $(element).trigger('vibrance.offcanvas.toggle');

    if ( element.hasClass( 'opened' ) ) {

        self.hide();

    } else {

        self.show();

    }
        
}

// Method: .show()
Offcanvas.prototype.show = function() {

    var self = this,
        element = this.element,
        opts = this.opts;
        
    $(element).trigger('vibrance.offcanvas.show');

    if ( $( '.offcanvas.opened' ).length > 0 ) {

        // Close all modal
        $( '.offcanvas' ).removeClass( 'opened' ).css({
            transform: 'translateX(-100%)'
        });

    }
    
    element.addClass( 'opened' ).css({
        transform: 'translateX(0%)'
    });

}

// Method: .hide()
Offcanvas.prototype.hide = function() {
    
    var self = this,
        element = this.element,
        opts = this.opts;

    $(element).trigger('vibrance.offcanvas.hide');

    element.removeClass( 'opened' ).css({
        transform: 'translateX(-100%)'
    });

}

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Parallax;
/*
==========================================================================
    # PARALLAX
==========================================================================
*/

// Main
function Parallax( element, opts ) {

    var self = this;
    
    self.element = $( element );
    self.opts = opts = opts || {};

    if ( ! opts.hasOwnProperty( 'intesity' ) ) {
        opts.intensity = 1.2;
    } else {
        
        if ( opts.intensity > 1 ) {
            opts.intensity = 1;
        }

        if ( opts.intensity < 0 ) {
            opts.intensity = 0;
        }
    }

    if (document.documentMode || /Edge/.test(navigator.userAgent)) {
        opts.intensity = .4;
    }

    if ( ! opts.hasOwnProperty( 'targetScroll' ) ) {
        opts.targetScroll = $( window );
    }

    self.events();

}

// Events
Parallax.prototype.events = function() {

    var self = this,
        element = this.element,
        opts = this.opts;

    opts.targetScroll.scroll(function(e) {

        if ( element.parent().length === 0 ) {
            
            $( this ).off(e);
            
            return false;

        }

        if ( ! element.hasClass( 'parallax' )  ) {

            $( this ).off(e);

            return false;
            
        } else {

            var elementOffsetTop = element.offset().top || 0;
            var parentOffsetTop = element.parent().offset().top || 0;
            var offsetDifference = ( elementOffsetTop - $(this).scrollTop() ) || 0;

            var imgPos = ( ( -offsetDifference * opts.intensity ) / 2 ) + 'px';

            element.css('background-position-y', imgPos);

        }

    });

    opts.targetScroll.trigger( 'scroll' );  

}

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = ProgressBar;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_js__ = __webpack_require__(0);
/*
==========================================================================
    # PROGRESS BAR
==========================================================================
*/



// Main
function ProgressBar( element, opts ) {
    
    var self = this;

    self.element = element = $( element );
    self.opts = opts = opts || {}; 
    
    var bar = element.find( '.progression');
    
    if ( bar.length === 0 ) {

        element.empty();

        bar = $( '<div/>', {
            class: 'progression',
            'data-value': 0
        })
        .css({
            width: '0%'
        })
        .appendTo( element );

    }

    self.bar = bar;

    var _isInit = __WEBPACK_IMPORTED_MODULE_0__util_js__["a" /* default */].isInitialized( 'progressbar', element);

    if ( ! _isInit.stat ) {

        self.initialize();

    } else {

        if ( Object.keys( opts ).length > 0 ) {

            self.initialize();

        } else {

            self.opts = opts = _isInit.options;

        }
        
        return false;

    }

    return element;

}

// Initialize
ProgressBar.prototype.initialize = function() {
    
    var self = this,
        element = this.element,
        opts = this.opts,
        bar = this.bar;

    if ( ! opts.hasOwnProperty( 'value' ) ) {
        if ( ! bar[0].hasAttribute( 'data-value' ) ) {
            opts.value = 0;
        } else {
            opts.value = bar.attr( 'data-value' );
        }
    }

    if ( ! opts.hasOwnProperty( 'max' ) ) {
        if ( ! bar[0].hasAttribute( 'data-max' ) ) {
            opts.max = 100;
        } else {
            opts.max = bar.attr( 'data-max' );
        }
    }
    
    if ( ! opts.hasOwnProperty( 'caption' ) ) {
        opts.caption = false;
    }

    if ( bar[0].hasAttribute( 'data-caption' ) ) {
        opts.caption = true;
    }

    if ( ! opts.hasOwnProperty( 'percent' ) ) {
        opts.percent = false;
    }

    if ( opts.caption === true ) {
        opts.percent = true;
    }

    var calcValue = ( ( opts.value * 100 ) / opts.max );

    bar.css({
        width: calcValue + '%'
    });

    if ( opts.percent === true ) {
        bar.text( calcValue.toFixed(0) );
    }
    
    __WEBPACK_IMPORTED_MODULE_0__util_js__["a" /* default */].setInitialized('progressbar', element, opts);

}

// Method: .to()
ProgressBar.prototype.to = function ( value ) {
    
    var self = this,
        element = this.element,
        opts = this.opts,
        bar = this.bar;

    var calcValue = ( ( value * 100 ) / opts.max );
  
    bar.css({
        width: calcValue + '%'
    });
    
    bar.attr( 'data-value', value );
    
    if ( opts.percent === true ) {
        bar.text( calcValue.toFixed(0) );
    }

    element.trigger('vibrance.progressBar.change');

}

// Method: .add()
ProgressBar.prototype.add = function ( addValue, fnmax ) {
    
    var self = this,
        element = this.element,
        opts = this.opts,
        bar = this.bar;

    var value = parseInt( bar.attr('data-value') ),
        max = parseInt( bar.attr('data-max') );
    
    var newValue = value + addValue;

    self.to(newValue);

    if (newValue >= max) {
        if (typeof fnmax == 'function' ) {
            fnmax();
        }
    }

}

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Scroll;
/*
==========================================================================
    # SCROLL
==========================================================================
*/

// Main
function Scroll( element, opts ) {
    
    var self = this;

    if ( typeof element == 'undefined' ) {
        element = 'html';
    }

    self.element = element = $( element );
    self.opts = opts = opts || {};

    if ( ! opts.hasOwnProperty( 'animation' ) ) {
        if ( element[0].hasAttribute( 'data-animation' ) ) {
            opts.animation = ( element.attr( 'data-animation' ) == 'true' );
        } else {
            opts.animation = true;
        }
    }
    
    if ( ! opts.hasOwnProperty( 'duration' ) ) {
        if ( element[0].hasAttribute( 'data-duration' ) ) {
            opts.animdurationation = element.attr( 'data-duration' );
        } else {
            opts.duration = 1000;
        }
    }

    if ( opts.animation === false ) {
        opts.duration = 0;
    }

    return this;

}

// Method: .to()
Scroll.prototype.to = function ( target, fn ) {

    var self = this,
        element = this.element,
        opts = this.opts;

    if ( (target ^ 0) !== target ) {
        target = $( target ).offset().top - 100;
    }
    
    $(element).animate({
        scrollTop: target
    }, opts.duration, function(){

        element.trigger('vibrance.scroll.scrolled');
        
    });

}

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Scrollspy;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_js__ = __webpack_require__(0);
/*
==========================================================================
    # SCROLLSPY
==========================================================================
*/


// Main
function Scrollspy( element, opts ) {
    
    var self = this;

    self.element = element = $( element );
    self.opts = opts = opts || {};

    var _isInit = __WEBPACK_IMPORTED_MODULE_0__util_js__["a" /* default */].isInitialized( 'scrollspy', element);

    if ( ! _isInit.stat ) {

        self.initialize();

    } else {

        if ( Object.keys( opts ).length > 0 ) {

            self.initialize();

        } else {

            self.opts = opts = _isInit.options;

        }
        
        return false;

    }

    return element;

}

// Initialize
Scrollspy.prototype.initialize = function() {

    var self = this,
        element = this.element,
        opts = this.opts;

    if ( ! opts.hasOwnProperty( 'target' ) ) {
        return false;
    } else {
        opts.target = $( opts.target );
    }

    if ( ! opts.hasOwnProperty( 'onVisible' ) ) {
        opts.onVisible = function(){};
    }
    
    if ( ! opts.hasOwnProperty( 'onInvisible' ) ) {
        opts.onInvisible = function(){};
    }

    self.events(function(){
        
        __WEBPACK_IMPORTED_MODULE_0__util_js__["a" /* default */].setInitialized('scrollspy', element, opts);
            
    });

}

// Events
Scrollspy.prototype.events = function() {

    var self = this,
        element = this.element,
        opts = this.opts;

    element[0].onscroll = function(event) {
        
        if ( __WEBPACK_IMPORTED_MODULE_0__util_js__["a" /* default */].isVisible( opts.target ) ) {
            
            opts.onVisible(opts.target);

        } else {
            
            opts.onInvisible(opts.target);

        }

    };

}

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Scrolltop;
/*
==========================================================================
    # GOTO TOP
==========================================================================
*/

// Main
function Scrolltop( element ) {
    
    var self = this;

    self.element = element = $( element ) || $( html );

    self.events();

}

// Events
Scrolltop.prototype.events = function( fn ) {

    var self = this,
        element = this.element,
        opts = this.opts;

    element.click(function(e){
        e.preventDefault();
        
        $.vibrance.scroll( 'html, body' ).to(0);

        return false;
    });

}

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Tab;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_js__ = __webpack_require__(0);
/*
==========================================================================
    # TAB
==========================================================================
*/



// Main
function Tab( element, opts ) {

    var self = this;
    
    self.element = element = $( element );
    self.opts = opts = opts || {};

    var _isInit = __WEBPACK_IMPORTED_MODULE_0__util_js__["a" /* default */].isInitialized( 'tab', element);

    if ( ! _isInit.stat ) {

        self.initialize();

    } else {

        if ( Object.keys( opts ).length > 0 ) {

            self.initialize();

        } else {

            self.opts = opts = _isInit.options;

        }
        
        return false;

    }

    return element;

}

// Initialize
Tab.prototype.initialize = function() {

    var self = this,
        element = this.element,
        opts = this.opts;
    
    self.events(function(){
        
        if ( element.find( '.tab-header > *.active' ).length > 0 ) {

            self.open( element.find( '.tab-header > *.active' ).index() );

        }

        __WEBPACK_IMPORTED_MODULE_0__util_js__["a" /* default */].setInitialized('tab', element, opts);

    });

}

// Events
Tab.prototype.events = function( fn ) {

    var self = this,
        element = this.element,
        opts = this.opts;
    
    element.find( '.tab-header > *' ).click(function(e){
            
        e.preventDefault();

        self.open( $( this ).index() );

        return false;

    });
    
    if ( typeof fn == 'function' ) {
        fn();
    }

}

// Method: .open( index )
Tab.prototype.open = function( index ) {

    var self = this,
        element = this.element,
        opts = this.opts;

    var tabsLink = element.find( '.tab-header' ),
        tabsContent = element.find( '.tab-content' );

    element.trigger('vibrance.tab.toggle');

    tabsLink.find( '> *' ).removeClass( 'active' );
    tabsLink.find( '> *' ).eq( index ).addClass( 'active' );

    tabsContent.find('> *').removeClass( 'active' );
    tabsContent.find('> *').eq( index ).addClass( 'active' );

}

/***/ })
/******/ ]);