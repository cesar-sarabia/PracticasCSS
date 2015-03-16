
var tiendaApp = angular.module('tienda',[]);

tiendaApp.controller('tiendaController',['$scope','$http', function ($scope, $http){
	$http.get('catalogo/tienda.json').success(function(data)
	{
		$scope.catalogo = data;
	});
}]);

