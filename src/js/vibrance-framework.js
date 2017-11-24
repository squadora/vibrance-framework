/*
==========================================================================
    # MAIN
==========================================================================
*/

import initComponents from './init.js';
import Accordion from './components/accordion.js';
import Countdown from './components/countdown.js';
import Dropdown from './components/dropdown.js';
import Lightbox from './components/lightbox.js';
import Modal from './components/modal.js';
import Offcanvas from './components/offcanvas.js';
import Parallax from './components/parallax.js';
import Progress from './components/progress.js';
import Scroll from './components/scroll.js';
import Scrollspy from './components/scrollspy.js';
import Scrolltop from './components/scrolltop.js';
import Tab from './components/tab.js';
import util from './util.js';

var vibrance = {

    _initialized: {},

    _global: {},

    accordion: function( element, opts ) { 
        return new Accordion( element, opts ); 
    },

    countdown: function( element, opts ) { 
        return new Countdown( element, opts ); 
    },

    dropdown: function( element, opts ) { 
        return new Dropdown( element, opts ); 
    },
    
    lightbox: function( element, opts ) { 
        return new Lightbox( element, opts ); 
    },
    
    modal: function( element, opts ) { 
        return new Modal( element, opts ); 
    },
    
    offcanvas: function( element, opts ) { 
        return new Offcanvas( element, opts ); 
    },
    
    parallax: function( element, opts ) { 
        return new Parallax( element, opts ); 
    },
    
    progressBar: function( element, opts ) { 
        return new Progress( element, opts ); 
    },
    
    scroll: function( element, opts ) { 
        return new Scroll( element, opts ); 
    },
    
    scrollspy: function( element, opts ) { 
        return new Scrollspy( element, opts ); 
    },
    
    scrolltop: function( element, opts ) { 
        return new Scrolltop( element, opts ); 
    },
    
    tab: function( element, opts ) { 
        return new Tab( element, opts ); 
    },

    util: function() { 
        return util; 
    }

};

(function($){ 

    $.vibrance = vibrance;

    // Initialize components
    initComponents.accordion();
    initComponents.countdown();
    initComponents.dropdown();
    initComponents.lightbox();
    initComponents.modal();
    initComponents.offcanvas();
    initComponents.parallax();
    initComponents.progress();
    initComponents.scroll();
    initComponents.scrolltop();
    initComponents.tab();

})(jQuery);