/**
* Animation for application elements
* @author cycasociados
* @author Desarrollador: @krobing
* @link http://cycasociados.com.co
*/

(function ($, window, document, undefined) {

    var InitAnimated = function () {
        //
    };

    InitAnimated.prototype = {

        defaults: {

        },

        /**
        * Constructor or Initialize Method
        */
        initialize: function (opts) {
            opts || (opts = {});

            // Extends default config
            this.settings = $.extend({}, this.defaults, opts);

            // Initialize Methods
        },
    };

    //Initialize animated components
    //-----------------------
    $(function() {
        window.initAnimated = new InitAnimated();
        window.initAnimated.initialize();
    });

})(jQuery, this, this.document);
