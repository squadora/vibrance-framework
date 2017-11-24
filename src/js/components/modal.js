/*
==========================================================================
    # MODAL
==========================================================================
*/

import util from '../util.js';

// Main
export default function Modal( element, opts ) {

    var self = this;

    self.element = element = $( element );
    self.opts = opts = opts || {};

    var _isInit = util.isInitialized( 'modal', element);

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

        util.setInitialized('modal', element, opts);

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