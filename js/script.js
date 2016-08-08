(function(angular) {
  'use strict';
var app = angular.module('beanApp', []);

app.controller('MainCtrl', function($scope, fontService){
    $scope.fontsDetails = fontService;
    console.log($scope.fontsDetails);
});

app.service('fontService', function(){
    return {
        font1: "Test 1",
        font2: "Test 2"
    }
});


})(window.angular);