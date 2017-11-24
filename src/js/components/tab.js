/*
==========================================================================
    # TAB
==========================================================================
*/

import util from '../util.js';

// Main
export default function Tab( element, opts ) {

    var self = this;
    
    self.element = element = $( element );
    self.opts = opts = opts || {};

    var _isInit = util.isInitialized( 'tab', element);

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

        util.setInitialized('tab', element, opts);

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