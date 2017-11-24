/*
==========================================================================
    # PARALLAX
==========================================================================
*/

// Main
export default function Parallax( element, opts ) {

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