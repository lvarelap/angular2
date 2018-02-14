
var app = angular.module('myApp', ['angularUtils.directives.dirPagination']);

app.controller('SRCtrl', function($scope, $http) {
   $http.get("http://localhost/php/acceso.php")
   .then(function (response) {

      //console.log(response);
      $scope.srs = response.data.records;
  });


  $scope.sort = function(keyname){
    $scope.sortKey = keyname;   //set the sortKey to the param passed
    $scope.reverse = !$scope.reverse; //if true make it false and vice versa
  }
  //console.log($scope.reverse);
});






