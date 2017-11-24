/*
==========================================================================
    # SCROLLSPY
==========================================================================
*/
import util from '../util.js';

// Main
export default function Scrollspy( element, opts ) {
    
    var self = this;

    self.element = element = $( element );
    self.opts = opts = opts || {};

    var _isInit = util.isInitialized( 'scrollspy', element);

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
        
        util.setInitialized('scrollspy', element, opts);
            
    });

}

// Events
Scrollspy.prototype.events = function() {

    var self = this,
        element = this.element,
        opts = this.opts;

    element[0].onscroll = function(event) {
        
        if ( util.isVisible( opts.target ) ) {
            
            opts.onVisible(opts.target);

        } else {
            
            opts.onInvisible(opts.target);

        }

    };

}