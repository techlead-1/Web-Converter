//Setting up angular module
var app = angular.module("myApp", []);

//Angular controller for Angular app "myApp"
app.controller('myCtrl', function($scope, $interval, $http) {
    $scope.webUrl = ""
    $scope.status = "";
    $scope.check = true;

    //Creating function that will be used to validate url input
    var validateInput = function() {
        //script will first check if an http or https input is added and will add if not found dynamically
        $scope.httpSearch = $scope.webUrl.search("http");
        $scope.httpCompare = $scope.httpSearch < 0;
        if($scope.httpCompare && $scope.webUrl.length >= 4) {
            $scope.webUrl = "http://" + $scope.webUrl;
            $scope.validationCount = 1;
        }
        else{$scope.webUrl = $scope.webUrl;
             $scope.validationCount = 1;
        }

        //script will check if a domain extension is added and will automatically add a .com after a warning
        //array of the most common domain
        $scope.extensionSearch = $scope.webUrl.lastIndexOf(".");
        $scope.extensionCompare = $scope.extensionSearch + 1< $scope.webUrl.length && $scope.extensionSearch + 1;
        if($scope.extensionCompare && $scope.webUrl.length > 8 && $scope.extensionSearch - $scope.webUrl.length <= 4) {
            $scope.status = "";
            $scope.validationCountTwo = 1;
        }
        else if($scope.extensionSearch + 1 == $scope.webUrl.length) {
            $scope.status = "Please add a .com or an equivalent domain extension";
            $scope.validationCountTwo = 0;
        }
        else if($scope.extensionSearch == -1) {
            $scope.status = "Please add a .com or an equivalent domain extension";
            $scope.validationCountTwo = 0;
        }

        //last validation before unlocking button is space check
        $scope.spaceSearch = $scope.webUrl.search(" ");
        $scope.spaceLocation = $scope.spaceSearch + 1;
        if ($scope.spaceSearch < 0) {
            $scope.status = "";
            $scope.validationCountThree = 1;
        }
        else if ($scope.spaceSearch >= 0) {
            $scope.status = "Remove the space detected in row " + $scope.spaceLocation;
            $scope.validationCountThree = 0
        }

        //Combining validation to unlock the download button
        $scope.validationKeys = $scope.validationCount + $scope.validationCountTwo + $scope.validationCountThree;
        //creating a condition that counts key, if keys are up to three, the download button is unlocked
        if ($scope.validationKeys == 3) {
            return $scope.check = false;
        }
        else{return $scope.check = true}
    }

    $interval(validateInput, 100)//carries out function every 100millisecs

    //Creating a function to alert when api is processing data
    $scope.getResponse = function() {
        alert("Success, you download will start soon");
    }
})
