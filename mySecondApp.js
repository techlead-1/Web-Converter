//Setting up angular module
var app = angular.module("mySecondApp", []);

//Angular controller for Angular app "myApp"
app.controller('mySecondCtrl', function($scope) {
    $scope.webUrl = ""

    $scope.download = function(webUrl) {
        //variable that searches for the http:// in string
        $scope.search = $scope.webUrl.search("http://");
        //variable to ccheck if string exist and is written at the beginning
        $scope.httpResult = $scope.search >= 0;
        
        //variable that searches for https:// in string
        $scope.searchTwo = $scope.webUrl.search("https://");
        //variable to check if string exist and is written at the beginning
        $scope.httpsResult = $scope.searchTwo >= 0;

        //creating if condition to add an http:// prefix if both parameters do not exist
        if($scope.httpResult || $scope.httpsResult) {
            alert("Valid Url, download will start soon..")
        }
        else{
            $scope.webUrl = "http://" + $scope.webUrl;
            alert("Url has been auto-corrected and download will start soon..")
        };
    }
})
