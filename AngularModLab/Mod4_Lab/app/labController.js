app.controller('labController', [
    '$scope', "$timeout", "$q", "$http",
    function ($scope, $timeout, $q, $http) {
        $scope.model = {
            number: 0,
            result: "Ready",
        };
        $scope.checkOddNumber = checkOddNumber;
        function checkOddNumber(input){
            $scope.model.result = "working...";
            checkOddNumberHandler(input).then(function(result){
                $scope.model.result = "Success: " + result;
            }, function(result){
                $scope.model.result = "Error: " + result;
            })
        }
        $scope.getRepos = getRepos;
        function getRepos() {
            $http.get('https://api.github.com/orgs/angular/repos')
                .then(function (response) {
                    $scope.model.repos = response.data;
                }, function (response) {
                    $scope.model.repos = 'Error: ' + response.data.message;
                });
        }
        function checkOddNumberHandler(input) {
            var defer = $q.defer();
            $timeout(function (){
                if(isNumberOdd(input)){
                    defer.resolve("Yes, an odd number");
                } else {
                    defer.reject("Not an odd number");
                }
            }, 1000);
            return defer.promise;
        }
        function isNumberOdd(input) {
            return !isNAN(input) && input % 2 == 1;
        }
    }
]);