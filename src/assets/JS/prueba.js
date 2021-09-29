var app = angular.module('app', []);
app.controller('OperacionesController', function($scope) {
  $scope.contador= 0;
  $scope.sumar = function(cantidad) { $scope.contador += cantidad; };
  $scope.restar = function(cantidad) { $scope.contador -= cantidad; };
});