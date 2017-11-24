var initComponents = {

    // Initialize accordion
    accordion: function() {

        $('.accordion').each(function(){
            $.vibrance.accordion( $(this) );
        });

    },

    // Initialize countdown
    countdown: function() {

        $('.countdown').each(function(){
            $.vibrance.countdown( $(this) );
        });

    },

    // Initialize dropdown
    dropdown: function() {

        $('.dropdown').each(function(){
            $.vibrance.dropdown( $(this) );
        });

    },

    // Initialize lightbox
    lightbox: function() {

        $('.lightbox').each(function(){
            $.vibrance.lightbox( $(this) );
        });

    },

    // Initialize modal
    modal: function() {
       
        $('.modal-toggle').each(function(){
            
            var _modal = null,
                _toggle = $(this),
                opts = {
                    toggle: $(this)
                };

            if ( _toggle[0].hasAttribute( 'data-modal' ) ) {
                _modal = $( _toggle.attr( 'data-modal') );
            } else {
                return false;
            }

            if ( _modal.length === 0 ) {
                return false;
            }
            
            $.vibrance.modal( _modal, opts );

        });
    },

    // Initialize off-canvas
    offcanvas: function() {
        $('.offcanvas-toggle').each(function(){

            var _offcanvas = null,
                _toggle = $(this),
                opts = {
                    toggle: $(this)
                };

            if ( _toggle[0].hasAttribute( 'data-offcanvas' ) ) {
                _offcanvas = $( _toggle.attr( 'data-offcanvas') );
            } else {
                return false;
            }

            if ( _offcanvas.length === 0 ) {
                return false;
            }

            $.vibrance.offcanvas( _offcanvas, opts );

        });
    },

    // Initialize parallax
    parallax: function() {

        $('.parallax').each(function(){
            $.vibrance.parallax( $(this) );
        });

    },

    // Initialize progress
    progress: function() {

        $('.progress-bar').each(function(){
            $.vibrance.progressBar( $(this) );
        });

    },

    // Initialize scroll
    scroll: function() {
        $('.scroll-toggle').each(function(){

            var _toggle = $(this);

            var target = _toggle.attr( 'href' );

            $( _toggle ).click(function(){

                $.vibrance.scroll( 'html, body' ).to( target );

                return false;
                
            });

        });
    },

    // Initialize scrolltop
    scrolltop: function() {

        $('.scroll-top-toggle').each(function(){
            $.vibrance.scrolltop( $(this) );
        });

    },

    // Initialize tab
    tab: function() {

        $('.tab').each(function(){
            $.vibrance.tab( $(this) );
        });

    }

}

export default initComponents;