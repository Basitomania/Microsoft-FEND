app.controller('menuController', [
    '$scope',
    function ($scope) {
        $scope.model = { title: 'Our Menu' };
        $scope.changeMainDish = function (item) {
            $scope.model.mainDish = item;
        }
        
        $scope.$watch('model.mainDish', function (newValue, oldValue) {
            if (newValue === 'BBQ Chicken Pizza') {
                alert('You have selected the BBQ Chicken Pizza!');
            }
        });
    }
]);