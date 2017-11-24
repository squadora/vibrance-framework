/*
==========================================================================
    # COUNTDOWN
==========================================================================
*/

import util from '../util.js';

// Main
export default function Countdown( element, opts ) {

    var self = this;

    self.element = element = $( element );
    self.opts = opts = opts || {};

    var _isInit = util.isInitialized( 'countdown', element);

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

Countdown.prototype.interval = null;

Countdown.prototype.initialize = function() {

    var self = this,
        element = this.element,
        opts = this.opts;
        
    $.vibrance._global.countdown = {};

    var date = null;

    if ( typeof opts == 'object' ) {

        if ( opts.hasOwnProperty( 'date' ) ) {
            date = opts.date;
        } else {

            if ( element[0].hasAttribute( 'data-date' ) ) {

                date = element.attr( 'data-date' );

            }

        }

    }

    util.setInitialized('countdown', element, opts);

    if ( date.length === 0 || date === null ) {
        self.refresh( '00', '00', '00', '00' );
    } else {
        self.start();
    }

}

Countdown.prototype.start = function() {
    
    var self = this;
    var element = self.element;
    var opts = self.opts;

    var date = null;
    
    if ( element[0].hasAttribute( 'data-date' )  ) {
        
        date = element.attr( 'data-date' );

    } else {

        if ( opts.hasOwnProperty( 'date' ) ) {

            date = opts.date;

        }

    }

    var cddate = new Date( date ).getTime();
        
    $( element ).trigger('vibrance.countdown.start');

    self.stop();

    $.vibrance._global.countdown.interval = setInterval(function() {
        
        var now = new Date().getTime();
    
        var distance = cddate - now;
    
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        if ( days < 10 ) { days = '0' + days }
        if ( hours < 10 ) { hours = '0' + hours }
        if ( minutes < 10 ) { minutes = '0' + minutes }
        if ( seconds < 10 ) { seconds = '0' + seconds }
    
        self.refresh( days, hours, minutes, seconds );
        
        if ( distance < 0 ) {

            self.refresh( '00', '00', '00', '00' );

            self.stop();
            
            $(element).trigger('vibrance.countdown.end');

            if ( opts.hasOwnProperty( 'finished' ) ) {
                if ( typeof opts.finished == 'function' ) {
                    opts.finished();
                }
            }

        }

    }, 1000);

}

Countdown.prototype.refresh = function( days, hours, minutes, seconds ) {
    
    var element = this.element;

    if ( element.find( '.countdown-days' ).length > 0 ) {
        element.find( '.countdown-days' ).html( days );
    }

    if ( element.find( '.countdown-hours' ).length > 0 ) {
        element.find( '.countdown-hours' ).html( hours );
    }

    if ( element.find( '.countdown-minutes' ).length > 0 ) {
        element.find( '.countdown-minutes' ).html( minutes );
    }

    if ( element.find( '.countdown-seconds' ).length > 0 ) {
        element.find( '.countdown-seconds' ).html( seconds );
    }

}

Countdown.prototype.stop = function() {

    var self = this,
        element = this.element,
        opts = this.opts;

    clearInterval($.vibrance._global.countdown.interval);

    $(element).trigger('vibrance.countdown.stop');

}

Countdown.prototype.update = function() {

    var self = this,
        element = this.element,
        opts = this.opts;

    $(element).trigger('vibrance.countdown.update');

    var date = null;
    
    if ( element[0].hasAttribute( 'data-date' )  ) {
        
        date = element.attr( 'data-date' );

    } else {

        if ( opts.hasOwnProperty( 'date' ) ) {

            date = opts.date;

        }

    }

    if ( date.length === 0 || date === null ) {
        self.refresh( '00', '00', '00', '00' );
        return false;
    }

    self.stop();
    self.start();

}