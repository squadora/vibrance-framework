/*
==========================================================================
    # SCROLL
==========================================================================
*/

// Main
export default function Scroll( element, opts ) {
    
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