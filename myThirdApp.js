//Setting up angular module
var app = angular.module("myThirdApp", []);

//Angular controller for Angular app "myApp"
app.controller('myThirdCtrl', function($scope) {
    $scope.clicked = false;

    $scope.download = function() {
        alert('Download will start soon...');
        
    }
})
