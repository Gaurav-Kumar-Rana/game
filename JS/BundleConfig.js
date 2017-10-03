$(function () {

    //Content Files Path.
    var contentCssPath = 'Contents/CSS/';
    var contentLibPath = 'Contents/Lib/';
    var jsAppPath = 'JS/App/';
    var jsLibPath = 'JS/Libs/';

    // Load CSS
    $.import_css(contentCssPath + 'normalize.css');
    $.import_css(contentLibPath + 'Bootstrap/bootstrap.min.css');
    //$.import_css(contentLibPath + 'Bootstrap/bootstrap-theme.min.css');
    $.import_css(contentCssPath + 'animate.css');
    $.import_css(contentCssPath + 'main.css');

    //Load Libraries
    //$.import_js('JS/Libs/Angular/angular.js'); 
    $.import_js(jsLibPath + 'Angular/angular.js');
    $.import_js(jsLibPath + 'Angular/route/angular-ui-router.js');
    //$.import_js('JS/Libs/Angular/animate/angular-animate.min.js');
    //$.import_js('JS/Libs/Angular/touch/angular-touch.js'); 
    $.import_js(jsLibPath + 'Angular/touch/angular-touch.min.js');
    //$.import_js('JS/Libs/Bootstrap/bootstrap.min.js');

    //Load Controls

    //Load App.js
    //$.import_js('JS/App/Main/app.js');
    $.import_js(jsAppPath + 'Main/dragdropapp.js');

    //Load Controllers

    //Common

    //Load Components

    //End Components

    //End Controllers

    //Load Services
    $.import_js(jsAppPath + 'Services/Init.Services.js');
    $.import_js(jsAppPath + 'Services/Throw.Error.Services.js');
    $.import_js(jsAppPath + 'Services/Throw.Alert.Services.js');
    $.import_js(jsAppPath + 'Services/WinLossComp.Services.js');
    //Load Directives

    $.import_js(jsAppPath + 'Directives/Tiles.Derictive.js');
    $.import_js(jsAppPath + 'Directives/Oprations.Directive.js');
    $.import_js(jsAppPath + 'Directives/Error.Directive.js');
    $.import_js(jsAppPath + 'Directives/Alert.Directive.js'); 
    $.import_js(jsAppPath + 'Directives/Setting.Directive.js');
    $.import_js(jsAppPath + 'Directives/About.Directive.js');
    $.import_js(jsAppPath + 'Directives/Help.Directive.js');

    //End Directives

    //Load Factories

    //End Factories

    //Load Filters

    //Load Constants

    //Load Routes
    $.import_js(jsAppPath + 'Main/route.js');
    
});

(function ($) {
    /*
     * $.import_js() helper (for JavaScript importing within JavaScript code).
     */
    var import_js_imported = [];
    $.extend(true,
    {
        import_js: function (script) {
            var found = false;
            for (var i = 0; i < import_js_imported.length; i++)
                if (import_js_imported[i] == script) {
                    found = true;
                    break;
                }

            if (found == false) {
                $("head").append('<script type="text/javascript" src="' + script + '"></script>');
                import_js_imported.push(script);
            }
        }
    });

    /*
    * $.import_css() helper (for css importing within JavaScript code).
    */
    var import_css_imported = [];
    $.extend(true,
    {
        import_css: function (script) {
            var found = false;
            for (var i = 0; i < import_css_imported.length; i++)
                if (import_css_imported[i] == script) {
                    found = true;
                    break;
                }

            if (found == false) {
                $("head").append('<link href="' + script + '" rel="stylesheet" />');
                import_css_imported.push(script);
            }
        }
    });

})(jQuery);