(function () {
    'use strict';
    dragdropapp.directive('tileGroup', ['initApp', '$compile', '$timeout', creteTilesGroup]);

    function creteTilesGroup(initApp) {
        return {
            restrict: "E",
            templateUrl: "JS/App/Templates/Tiles.Template.html",
            controller: function ($scope) {
                var numberOfTiles = 4;
                var randomNum = new Array();
                $scope.uniqueRandomNum = function () {
                    var insertPos = 0;
                    while (randomNum.length <= numberOfTiles) {
                        var duplicate = 0;
                        var temp = Math.floor((Math.random() * 9) + 1);
                        for (var k = 0; k <= randomNum.length; k++) {

                            if (randomNum[k] == temp) {
                                duplicate++;
                            }
                        }
                        if (duplicate == 0) {
                            randomNum[insertPos] = temp;
                            insertPos++;
                        }
                    }
                    return randomNum;
                }
                $scope.createTiles = function () {
                    var tilesAdded = 0, newTilesWithId = "";
                    $scope.uniqueRandomNum();
                    while (tilesAdded < numberOfTiles) {
                        newTilesWithId = newTilesWithId + "<div id='draggable" + tilesAdded + "' class='draggable ui-widget-content pulse animated  infinite'>" + randomNum[tilesAdded] + "</div>"
                        tilesAdded++;
                    }
                    return newTilesWithId;
                }

                $scope.addTiles = function () {
                    var createdListOfTiles = $scope.createTiles();
                    $(".col").html(createdListOfTiles);

                    initApp.inits();
                }

                $scope.addTiles();
            },
            controllerAs: "tiles",
            scope: true,
            bindToController: {
            }
        };
    }
})();


