angular.module('megaStore')
.controller('MainCtrl', ['$scope', '$rootScope', function($scope, $rootScope) {
    // Handle Links
    $scope.links = [
        {name:"Home", url:"app.home"},
        {name:"About", url:"app.about"},
        {name:"Products", url:"app.store"}, 
        {name:"Contact Us", url:"app.contact"}
    ]
    $scope.currentLink = $scope.links[0]
    $scope.setCurrentLink = function(link) {
        $scope.currentLink = link
    }
    $scope.isCurrentLink = function(link) {
        return $scope.currentLink !== null && link.name === $scope.currentLink.name
    }

    // Handle Users
    $scope.users = [
        {name:"mutwakil", email:"mutwakil@gmail.com", password:"kola123"},
        {name:"omer", email:"omer123@gmai.com", password:"omer123"},
        {name:"khalid", email:"khalid123@gmai.com", password:"khalid123"},
        {name:"ali", email:"ali123@gmai.com", password:"ali123"}
    ]

    $scope.newUser = {}

    $scope.userLoggedOut =false

    $scope.login = function() {
        $scope.userLoggedOut =true

    }

    $scope.register = function() {
        
    }

    $scope.logout = function() {
        $scope.userLoggedOut =false
    }
}])
.controller('HomeCtrl', ['$scope', '$rootScope', function($scope, $rootScope) {

}])
.controller('storeCtrl', ['$scope', '$rootScope', function($scope, $rootScope) {

}])
.controller('LoginCtrl', ['$scope', '$rootScope', function($scope, $rootScope) {

}])
.controller('RegisterCtrl', ['$scope', '$rootScope', function($scope, $rootScope) {

}])
.controller('ContactCtrl', ['$scope', '$rootScope', function($scope, $rootScope) {

}])
.controller('AboutCtrl', ['$scope', '$rootScope', function($scope, $rootScope) {

}])
.controller('ProfileCtrl', ['$scope', '$rootScope', function($scope, $rootScope) {

}])