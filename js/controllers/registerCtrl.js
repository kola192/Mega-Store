angular.module('megaStore')
.controller('RegisterCtrl', ['$scope', '$rootScope', '$state', function($scope, $rootScope, $state) {
    $scope.register = function() {
        $scope.newUser = {
            id: $scope.users.length,
            name: $scope.name,
            email: $scope.email,
            password: $scope.password
        }
        console.log($scope.newUser)
        $scope.users.push($scope.newUser)

        $scope.name = ''
        $scope.email = ''
        $scope.password = ''

        $state.go('app.store')
        $rootScope.userLoggedOut =true        
        console.log($scope.users)
    }
}])