/*
==========================================================================
    # OFF-CANVAS
==========================================================================
*/

import util from '../util.js';

// Main
export default function Offcanvas( element, opts ) {

    var self = this;

    self.element = element = $( element );
    self.opts = opts = opts || {};
    
    var _isInit = util.isInitialized( 'offcanvas', element);

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

        util.setInitialized('offcanvas', element, opts);

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