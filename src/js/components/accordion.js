/*
==========================================================================
    # ACCORDION
==========================================================================
*/

import util from '../util.js';

// Main
export default function Accordion( element, opts ) {

    var self = this;

    self.element = element = $( element );
    self.opts = opts = opts || {};

    var _isInit = util.isInitialized( 'accordion', element);

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

        util.setInitialized('accordion', element, opts);

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