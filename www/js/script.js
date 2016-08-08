(function(angular) {
  'use strict';
var app = angular.module('beanApp', []);

app.controller('MainCtrl', function($scope, fontService){
    $scope.fontDetails = fontService;
    console.log($scope.fontDetails);
});

app.service('fontService', function(){

	var fontList = [
    		"Impact",
			"Palatino Linotype",
			"Tahoma",
			"Century Gothic",
			"Lucida Sans Unicode",
			"Arial Black",
			"Times New Roman",
			"Arial Narrow",
			"Verdana",
			"Copperplate",
			"Copperplate Gothic Light",
			"Lucida Console",
			"Gill Sans",
			"Trebuchet MS",
			"Courier-New",
			"Arial",
			"Constantina"
	];

    return {
    	fontlist : function(){
    		return fontList;
    	},
    	getClass : function(val){
    		var temp = val.split(" ").join("-"); 
    		return temp;
    	}
    }
});

app.directive('fonts', function(){
	return {
		restrict: 'E',
		templateUrl: 'templates/fonts.html'
	}
});

})(window.angular);