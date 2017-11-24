/*
==========================================================================
    # PROGRESS BAR
==========================================================================
*/

import util from '../util.js';

// Main
export default function ProgressBar( element, opts ) {
    
    var self = this;

    self.element = element = $( element );
    self.opts = opts = opts || {}; 
    
    var bar = element.find( '.progression');
    
    if ( bar.length === 0 ) {

        element.empty();

        bar = $( '<div/>', {
            class: 'progression',
            'data-value': 0
        })
        .css({
            width: '0%'
        })
        .appendTo( element );

    }

    self.bar = bar;

    var _isInit = util.isInitialized( 'progressbar', element);

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
ProgressBar.prototype.initialize = function() {
    
    var self = this,
        element = this.element,
        opts = this.opts,
        bar = this.bar;

    if ( ! opts.hasOwnProperty( 'value' ) ) {
        if ( ! bar[0].hasAttribute( 'data-value' ) ) {
            opts.value = 0;
        } else {
            opts.value = bar.attr( 'data-value' );
        }
    }

    if ( ! opts.hasOwnProperty( 'max' ) ) {
        if ( ! bar[0].hasAttribute( 'data-max' ) ) {
            opts.max = 100;
        } else {
            opts.max = bar.attr( 'data-max' );
        }
    }
    
    if ( ! opts.hasOwnProperty( 'caption' ) ) {
        opts.caption = false;
    }

    if ( bar[0].hasAttribute( 'data-caption' ) ) {
        opts.caption = true;
    }

    if ( ! opts.hasOwnProperty( 'percent' ) ) {
        opts.percent = false;
    }

    if ( opts.caption === true ) {
        opts.percent = true;
    }

    var calcValue = ( ( opts.value * 100 ) / opts.max );

    bar.css({
        width: calcValue + '%'
    });

    if ( opts.percent === true ) {
        bar.text( calcValue.toFixed(0) );
    }
    
    util.setInitialized('progressbar', element, opts);

}

// Method: .to()
ProgressBar.prototype.to = function ( value ) {
    
    var self = this,
        element = this.element,
        opts = this.opts,
        bar = this.bar;

    var calcValue = ( ( value * 100 ) / opts.max );
  
    bar.css({
        width: calcValue + '%'
    });
    
    bar.attr( 'data-value', value );
    
    if ( opts.percent === true ) {
        bar.text( calcValue.toFixed(0) );
    }

    element.trigger('vibrance.progressBar.change');

}

// Method: .add()
ProgressBar.prototype.add = function ( addValue, fnmax ) {
    
    var self = this,
        element = this.element,
        opts = this.opts,
        bar = this.bar;

    var value = parseInt( bar.attr('data-value') ),
        max = parseInt( bar.attr('data-max') );
    
    var newValue = value + addValue;

    self.to(newValue);

    if (newValue >= max) {
        if (typeof fnmax == 'function' ) {
            fnmax();
        }
    }

}