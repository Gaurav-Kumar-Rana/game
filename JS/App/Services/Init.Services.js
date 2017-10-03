(function () {
    'use strict';
    dragdropapp.service('initApp', ['ThrowError', 'ThrowAlert','WinLossComp', initApp]);
    function initApp(ThrowError, ThrowAlert, WinLossComp) {
        this.playerLevel = null;
        this.playerSteps = null;
        this.playerMaxStep = null;
        var winLossInfo = {};

        this.inits = function () {
            var that = this;
            that.validateBtn = function () {
                switch (that.playerLevel) {
                    case 'B':
                        break;
                    case 'M':
                        $("input[name='oprations']:checked").addClass("disabled");
                        $("input[name='oprations']:checked").parent("span").addClass("disabled");
                        $("input[name='oprations']:checked").val("");
                        break;
                    case 'E':
                        if (that.playerSteps < that.playerMaxStep) {
                            that.playerSteps++;
                            $("input[name='oprations']:checked").addClass("disabled");
                            $("input[name='oprations']:checked").parent("span").addClass("disabled");
                            $("input[name='oprations']:checked").val("");
                        }
                        else {
                            ThrowAlert.callAlert("Loss", "Sorry You are out of steps . you had only 3 steps. you Loss.Try again!!");
                        }
                        break;
                }
            }
            that.calWinLoss = function (winOrLoss)
            {
                switch (that.playerLevel) {
                    case 'B':
                        WinLossComp.survayResult(function (result) {
                            winLossInfo = result;
                            if (winOrLoss == 'Won') {
                                winLossInfo[0].Win = winLossInfo[0].Win + 1;
                                //alert(winLossInfo[0].Win);
                            } else {
                                winLossInfo[0].Loss = winLossInfo[0].Loss + 1;
                                //alert(winLossInfo[0].Loss);
                            }
                            WinLossComp.survayUpdate(winLossInfo);
                        });
                       
                        break;
                    case 'M':
                        WinLossComp.survayResult(function (result) {
                            winLossInfo = result;
                            if (winOrLoss == 'Won') {
                                winLossInfo[1].Win = winLossInfo[1].Win + 1;
                                //alert(winLossInfo[1].Win);
                            } else {
                                winLossInfo[1].Loss = winLossInfo[1].Loss + 1;
                                //alert(winLossInfo[1].Loss);
                            }

                        });
                        break;
                    case 'E':
                        WinLossComp.survayResult(function (result) {
                            winLossInfo = result;
                            if (winOrLoss == 'Won') {
                                winLossInfo[2].Win = winLossInfo[2].Win + 1;
                                //alert(winLossInfo[2].Win);
                            } else {
                                winLossInfo[2].Loss = winLossInfo[2].Loss + 1;
                                //alert(winLossInfo[2].Loss);
                            }

                        });
                        break;
                }
            }
            //$(".draggable").draggable();
            $(".draggable").draggable({
                revert: 'invalid',
                stop: function () {
                    //$(this).draggable('option', 'revert', 'invalid');
                }
            });
            $(".draggable").droppable({
                greedy: true,
                tolerance: 'touch',
                drop: function (event, ui) {
                    ui.draggable.draggable('option', 'revert', true);
                    //----------------------
                    var opration = $("input[name='oprations']:checked").val();
                    var num1 = $("#" + ui.draggable.attr("id")).text();
                    if (opration) {
                        var result = $(this).text();
                        if (opration == "add") {
                            var result = eval(result) + eval(num1);
                            if ($(this).text(result)) {
                                that.validateBtn();
                            }
                            $("#" + ui.draggable.attr("id")).remove();
                        }
                        else if (opration == "sub") {
                            var result = eval(result) - eval(num1);
                            if ($(this).text(result)) {
                                that.validateBtn();
                            }
                            $("#" + ui.draggable.attr("id")).remove();
                        }
                        else if (opration == "divide") {
                            var result = eval(result) / eval(num1);
                            var newResult = Math.floor(result);
                            if (newResult == result) {
                                if ($(this).text(result)) {
                                    that.validateBtn();
                                }
                                $("#" + ui.draggable.attr("id")).remove();
                            }
                            else {
                                ThrowError.callError("Invalid Opration !!");

                            }

                        }
                        else if (opration == "multiply") {
                            var result = eval(result) * eval(num1);
                            if ($(this).text(result)) {
                                that.validateBtn();
                            }
                            $("#" + ui.draggable.attr("id")).remove();
                        }
                        else if (opration == "power") {
                            var result = Math.pow(eval(result), eval(num1));
                            if ($(this).text(result)) {
                                that.validateBtn();
                            }
                            $("#" + ui.draggable.attr("id")).remove();
                        }
                        else if (opration == "sqroot") {
                            ThrowError.callError("To find Square Root click on the single ball.");
                        }
                        else if (opration == "cuberoot") {
                            ThrowError.callError("To find Cube Root click on the single ball.");
                        }
                        else {
                            ThrowError.callError("Invalid Opration !!");
                        }
                    }
                    else {
                        ThrowError.callError("Please select an operation !!");
                    }

                    var nubTiles = $(".draggable").length;
                    if (nubTiles == 1) {
                        var checkZero = $(".draggable").text();
                        if (checkZero == 0) {
                            that.calWinLoss("Won");
                            ThrowAlert.callAlert("Won", "Congratulation You Won !!");
                        }
                        else {
                            that.calWinLoss("Loss");
                            ThrowAlert.callAlert("Loss", "Sorry You Loss.Try again!!");
                        }
                    }
                    //----------------------
                }

            });
            $(".draggable").click(function () {
                var opration = $("input[name='oprations']:checked").val();
                var num1 = $(this).text();

                if (opration == "sqroot") {
                    var result = Math.sqrt(eval(num1));
                    var floorValue = Math.floor(result);
                    if (eval(num1) == (floorValue * floorValue)) {
                        if($(this).text(result)) {
                            that.validateBtn();
                        }
                    }
                    else {
                        ThrowError.callError("Can't find perfect square root !!");
                    }
                }
                else if (opration == "cuberoot") {
                    var result = Math.cbrt(eval(num1));
                    var floorValue = Math.floor(result);

                    if (eval(num1) == (floorValue * floorValue * floorValue)) {
                        if($(this).text(result)) {
                            that.validateBtn();
                        }
                    }
                    else {
                        ThrowError.callError("Can't find perfect cube root !!");
                    }
                }
            });
        }
    }
})();
