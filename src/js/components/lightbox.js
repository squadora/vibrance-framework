/*
==========================================================================
    # LIGHTBOX
==========================================================================
*/

import util from '../util.js';

// Main
export default function Lightbox( element, opts ) {

    var self = this;
    
    self.element = element = $( element );
    self.opts = opts = opts || {};

    var _isInit = util.isInitialized( 'lightbox', element);

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

        util.setInitialized('lightbox', element, opts);

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