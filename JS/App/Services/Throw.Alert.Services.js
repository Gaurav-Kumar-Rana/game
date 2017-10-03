(function () {
    'use strict';
    dragdropapp.service('ThrowAlert', ThrowAlert);

    function ThrowAlert() {
        this.callAlert = function (status, alertMessage) {
            $(".message").html(alertMessage);
            $(".alertBlock").addClass("activeModal", function () {
                if (status == "Won") {
                    //alert("Won")
                    $(".alertBlock .modalMessageContainer").css({
                        "background-image": "url(Contents/Images/win.gif)",
                        "background-repeat": "no-repeat",
                        "background-position": "center",
                        "background-size": "148px 175px"
                    });
                } else {
                    //alert("Loss");
                    $(".alertBlock .modalMessageContainer").css({
                        "background-image": "url(Contents/Images/loss.gif)",
                        "background-repeat": "no-repeat",
                        "background-position": "center",
                        "background-size": "125px 125px"
                    });
                }
            });
        };
    }
})();
