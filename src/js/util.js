/*
==========================================================================
    # Util
==========================================================================
*/

function Util() {

    return this;

}

// Set Position
Util.prototype.setPosition = function( e1, e2, position ) {

    e1 = $( e1 );
    e2 = $( e2 );

    var presets = {

        'bottom-left': function() {

            var wWidth = $( window ).outerWidth();
            var e1_width = e1.outerWidth();
            var e2_left = e2.offset().left;

            if ( ( wWidth - e2_left ) < ( e1_width + 100 ) ) {

                e1.css({
                    top: e2.outerHeight() + 'px',
                    left: '-' + ( e1.outerWidth() - e2.outerWidth() ) + 'px',
                });

            } else {

                e1.css({
                    top: e2.outerHeight() + 'px',
                    left: e2.position().left  + 'px'
                });

            }

            e1.removeClass( 'dropdown-overflow' );

            if ( parseInt( e1.css('left') ) < 0 || parseInt( e1.css('right') ) < 0 || parseInt( e1.css('top') ) < 0 ) {
                e1.addClass( 'dropdown-overflow' );
            }

        },

        'bottom-center': function() {

            var sign = '';
            
            if ( e1.outerHeight() > e2.outerHeight() ) {
                sign = '-';
            }
                            
            e1.css({
                top: e2.outerHeight() + 'px',
                left: sign + Math.abs( ( e1.outerWidth() - e2.outerWidth() ) / 2 ) + 'px'
            });

        },

        'bottom-right': function() {
            
            e1.css({
                top: e2.outerHeight() + 'px',
                left: '-' + ( e1.outerWidth() - e2.outerWidth() ) + 'px'
            });

        },
        
        'top-left': function() {
            
            e1.css({
                top: '-' + e1.outerHeight() + 'px',
                left: '0px'
            });

        },
        
        'top-center': function() {
            
            var sign = '';
            
            if ( e1.outerHeight() > e2.outerHeight() ) {
                sign = '-';
            }
                
            e1.css({
                top: '-' + e1.outerHeight() + 'px',
                left: sign + Math.abs( ( e1.outerWidth() - e2.outerWidth() ) / 2 ) + 'px'
            });

        },
        
        'top-right': function() {
            
            e1.css({
                top: '-' + e1.outerHeight() + 'px',
                left: '-' + ( e1.outerWidth() - e2.outerWidth() ) + 'px'
            });

        },
        
        'left-top': function() {
            
            e1.css({
                top: '-' + e1.outerHeight() + 'px',
                left: '-' + e1.outerWidth() + 'px'
            });

        },
        
        'left-center': function() {
            
            var sign = '';
            
            if ( e1.outerHeight() > e2.outerHeight() ) {
                sign = '-';
            }
                            
            e1.css({
                top: sign + Math.abs( ( e1.outerHeight() - e2.outerHeight() ) / 2 ) + 'px',
                left: '-' + e1.outerWidth() + 'px'
            });

        },
        
        'left-bottom': function() {
            
            e1.css({
                top: e2.outerHeight() + 'px',
                left: '-' + e1.outerWidth() + 'px'
            });

        },
        
        'right-top': function() {
            
            e1.css({
                top: '-' + e1.outerHeight() + 'px',
                left: e2.outerWidth() + 'px'
            });

        },
        
        'right-center': function() {

            var sign = '';

            if ( e1.outerHeight() > e2.outerHeight() ) {
                sign = '-';
            }
            
            e1.css({
                top: sign + Math.abs( ( e1.outerHeight() - e2.outerHeight() ) / 2 ) + 'px',
                left: e2.outerWidth() + 'px'
            });

        },
        
        'right-bottom': function() {
            
            e1.css({
                top: e2.outerHeight() + 'px',
                left: e2.outerWidth() + 'px'
            });

        },

    }
    
    presets[position]();

};

// Detect end of animation
Util.prototype.onAnimationEnd = function( element, fn ) {

    element.one('webkitAnimationEnd mozAnimationEnd oAnimationEnd oanimationend animationend', function(e) {
        
        if ( typeof fn == 'function' ) {
            fn();
        }

        $(this).off(e);
    
    });

}

// Detect end of transition
Util.prototype.onTransitionEnd = function( element, fn ) {

    element.one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(e) {
        
        if ( typeof fn == 'function' ) {
            fn();
        }

        $(this).off(e);
    
    });

}

// Check if target is visible or not in screen
Util.prototype.isVisible = function( target ) {

    var win = $( window ),
        target = $( target );
    
    var viewport = {
        top : win.scrollTop(),
        left : win.scrollLeft()
    };

    viewport.right = viewport.left + win.width();
    viewport.bottom = viewport.top + win.height();
    
    var bounds = target.offset();
        bounds.right = bounds.left + target.outerWidth();
        bounds.bottom = bounds.top + target.outerHeight();
    
    return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));
    
}

// Set vibrance module initialized
Util.prototype.setInitialized = function( id, element, options ) {

    var self = this,
        _isInit = self.isInitialized(id, element);


    function set() {

        if ( ! $.vibrance._initialized.hasOwnProperty( id ) ) {
            $.vibrance._initialized[id] = [];
        }
    
        $.vibrance._initialized[id].push({
            element: element[0], 
            options: options
        });


    }

    if ( _isInit.stat === true ) {

        self.offInitialize(id, element, function(){

            set();

        });

    } else {
        
        set();

    }

}

// Check if vibrance module initialized
Util.prototype.isInitialized = function( id, element ) {

    if ( ! $.vibrance._initialized.hasOwnProperty( id ) ) {
        return {
            stat: false
        };
    }

    for ( var obj in $.vibrance._initialized[id] ) {
        if ( $.vibrance._initialized[id].hasOwnProperty( obj ) ) {

            if ( element[0] == $.vibrance._initialized[id][obj].element ) {
                return {
                    stat: true,
                    options: $.vibrance._initialized[id][obj].options
                };

                break;

            }

        }
    }

    return {
        stat: false
    };

}

// Set off vibrance module initialized
Util.prototype.offInitialize = function( id, element, fn ) {
    
    if ( ! $.vibrance._initialized.hasOwnProperty( id ) ) {
        return {
            stat: false
        };
    }

    for ( var obj in $.vibrance._initialized[id] ) {
        if ( $.vibrance._initialized[id].hasOwnProperty( obj ) ) {

            if ( element[0] == $.vibrance._initialized[id][obj].element ) {
                
                delete $.vibrance._initialized[id][obj];

                break;

            }

        }
    }

    if ( typeof fn == 'function' ) {
        fn();
    }

}

var util = new Util();

export default util;