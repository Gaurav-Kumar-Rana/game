(function () {
    'use strict';
    dragdropapp.directive('oprationGroup', creteOprationsGroup);

    function creteOprationsGroup() {
        return {
            restrict: "E",
            templateUrl: "JS/App/Templates/Opration.Template.html",
            controller: function () {
                this.oprationLists = [
                    {
                        OprationName: '+',
                        OprationValue: 'add',
                        OprationId: 'oprationbtn',

                    },
                    {
                        OprationName: '-',
                        OprationValue: 'sub',
                        OprationId: 'oprationbtn1',
                    },
                    {
                        OprationName: '/',
                        OprationValue: 'divide',
                        OprationId: 'oprationbtn2',
                    },
                    {
                        OprationName: 'x',
                        OprationValue: 'multiply',
                        OprationId: 'oprationbtn3',
                    },
                    {
                        OprationName: '√',
                        OprationValue: 'sqroot',
                        OprationId: 'oprationbtn4',
                    },
                    {
                        OprationName: '∛',
                        OprationValue: 'cuberoot',
                        OprationId: 'oprationbtn5',
                    }
                    //,
                    //{
                    //    OprationName: '^',
                    //    OprationValue: 'power',
                    //    OprationId: 'oprationbtn6',
                    //}
                ];


            },
            controllerAs: "oprations",
            scope: true,
            bindToController: {
            }
        }
    }
})();
