(function () {
    'use strict';
    dragdropapp.service('WinLossComp', WinLossComp);

    function WinLossComp($http, $log) {
        //var that = this;
        //that.guitarVariable = {};
        //that.survar = function () {
        //    $http.get('JS/App/Survay/WinLossComp.json').success(function (data) {
        //        that.getData = data;
        //        alert(that.getData);
        //    });
        //}


        this.survayResult = function (callBack) {
            var survayData = {};
            $http({
                url: "JS/App/Survay/WinLossComp.json",
                methord: 'GET'
            }).then(
                function (response) {
                    $log.log(response.data.records);
                    //alert(response.data.records);
                    callBack(response.data.records);
                },
                function (response) {
                    $log.log("Error Occurred!!");
                }
            );
            return survayData;
        };
        this.survayUpdate = function (updatedData) {
            $http({
                method: "post",
                url: "JS/App/Survay/WinLossComp.json?" + updatedData,
                data: updatedData,
                headers: { 'Content-Type': 'application/json; charset=utf-8' }
            });
        }
    }
})();
