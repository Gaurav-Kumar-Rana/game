(function () {
    'use strict';
    dragdropapp.service('ThrowError', ThrowError);

    function ThrowError() {
        this.callError = function (errorMessage) {
            $(".message span").html(errorMessage);
            $(".errorBlock").toggleClass("activeModal", function () {
                setTimeout(function () {
                    $(".errorBlock").removeClass("activeModal");
                }, 5000);
            });
        };
    }
})();
