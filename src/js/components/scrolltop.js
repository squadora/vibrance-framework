/*
==========================================================================
    # GOTO TOP
==========================================================================
*/

// Main
export default function Scrolltop( element ) {
    
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