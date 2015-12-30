/**
* Init Class
* @author cycasociados
* @author Desarrollador: @krobing
* @link http://cycasociados.com.co
*/

/*global*/
var app = app || {};

(function ($, window, document, undefined) {

    var InitComponent = function(){
        // var csrf = window.Misc.getCsrf();

        //Init Attributes
        /*$.ajaxSetup({
            cache: false,
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            },
            beforeSend: function(xhr, settings) {
                if (!csrf.safeMethod(settings.type) && csrf.sameOrigin(settings.url)) {
                    xhr.setRequestHeader("X-XSRF-TOKEN", csrf.getCookie('XSRF-TOKEN'));
                }
            }
        });*/
    }

    InitComponent.prototype = {

        defaults: {

        },

        /**
        * Constructor or Initialize Method
        */
        initialize: function ( opts ) {
            opts || (opts = {});

            // Extends default config
            this.settings = $.extend({}, this.defaults, opts);

            // Initialize methods
            this.initApp();

        }
    };

    //Init Foundation Plugins
    //-----------------------
    /*$(document).foundation({

    });*/

    //Init App Components
    //-----------------------
    $(function() {
        window.initComponent = new InitComponent();
        window.initComponent.initialize();
    });

})(jQuery, this, this.document);
