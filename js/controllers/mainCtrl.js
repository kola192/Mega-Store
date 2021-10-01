angular.module('megaStore')
.controller('MainCtrl', ['$scope', '$rootScope', '$state', function($scope, $rootScope, $state) {
    // Handle Links
    $scope.links = [
        {name:"Home", url:"app.home"},
        {name:"About", url:"app.about"},
        {name:"Store", url:"app.store"}, 
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
        {id:0, name:"mutwakil", email:"mutwakil@gmail.com", password:"kola123"},
        {id:1, name:"omer", email:"omer123@gmai.com", password:"omer123"},
        {id:2, name:"khalid", email:"khalid123@gmai.com", password:"khalid123"},
        {id:3, name:"ali", email:"ali123@gmai.com", password:"ali123"}
    ]


    $rootScope.userLoggedOut =false

    $scope.login = function() {
        $scope.userLoggedOut = true
        $rootScope.isLoggedIn = true
        $state.go('app.store')
    }
    

    $scope.logout = function() {
        $scope.userLoggedOut =false
    }

    //Categories
    $rootScope.categories = [
        {id:0,name:"All Products"},
        {id:1,name:"Clothes"},
        {id:2,name:"Shoes"},
        {id:3,name:"Electronics"}
        ]

    //Add To Cart 
    $rootScope.cartProducts = []
    $rootScope.total = 0
    $rootScope.isLoggedIn = false;
    $rootScope.addToCart = function(cartProduct) {
        if ($rootScope.isLoggedIn) {
            $rootScope.qty = 1
            $rootScope.amount = cartProduct.sellPrice * $rootScope.qty
            $rootScope.total += $rootScope.amount
            console.log($rootScope.total)
            $rootScope.cartProducts.push(cartProduct)
            console.log($scope.cartProducts)
        } 
        else {
            alert("You need to login first!")
            $state.go('app.login')
        }
    }

}])