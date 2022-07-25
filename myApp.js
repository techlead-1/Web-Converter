//Setting up angular module
var app = angular.module("myApp", ["ngRoute"]);

//Angular controller for Angular app "myApp"
app.controller('myCtrl', function($scope) {
    $scope.clicked = false;

    $scope.download = function() {
        alert('Download will start soon...')
    }
})

