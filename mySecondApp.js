//Setting up angular module
var app = angular.module("mySecondApp", []);

//Angular controller for Angular app "myApp"
app.controller('mySecondCtrl', function($scope) {
    $scope.clicked = false;

    $scope.download = function() {
        alert('Download will start soon...');
        
    }
})
