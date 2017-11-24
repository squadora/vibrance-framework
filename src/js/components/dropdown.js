/*
==========================================================================
    # DROPDOWN
==========================================================================
*/

import util from '../util.js';

// Main
export default function Dropdown( element, opts ) {

    var self = this;

    self.element = element = $( element );
    self.opts = opts = opts || {};

    var _isInit = util.isInitialized( 'dropdown', element);

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
        
        util.setInitialized('dropdown', element, opts);

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
    util.setPosition( element, toggle, opts.position );

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