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


    $rootScope.userLoggedOut =true

    $scope.login = function() {
        $scope.userLoggedOut = true
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

    //Handle Add To Cart 
    $rootScope.cartProducts = []
    $rootScope.total = 0
    $rootScope.addToCart = function(productToBeAddedToCart) {
        //make sure to put a default value for every new item before adding it the cart
        if(productToBeAddedToCart.qty === undefined) {
            productToBeAddedToCart.qty = 1
        }
        $rootScope.amount = productToBeAddedToCart.sellPrice * 1
        $rootScope.cartItems = $rootScope.cartProducts 
        $scope.found=false
    
        $rootScope.cartItems.forEach(item =>{
            //Check if cartItem doesn't have qty and providing it with default value
            if(item.qty === undefined) {
                item.qty = 1
            }
            // check if the product is already in the cartProducts array
            if(productToBeAddedToCart.id===item.id){
                $scope.found=true
                $scope.index=$rootScope.cartItems.indexOf(item)
            }
            
        }) 
        if($scope.found){
            $rootScope.cartItems[$scope.index].qty+=1
            $rootScope.amount = productToBeAddedToCart.sellPrice * $rootScope.cartItems[$scope.index].qty
            alert("Your product has been added successfully to the cart")
        }
        else{
            $rootScope.cartProducts.push(productToBeAddedToCart)
            $rootScope.amount = productToBeAddedToCart.sellPrice * productToBeAddedToCart.qty
            alert("Your product has been added successfully to the cart")
        }

    }

    //Handle Deleting From The Cart
    $rootScope.deleteCartProduct = function(cartProduct) {
        var index = $rootScope.cartProducts.indexOf(cartProduct);
        $rootScope.cartProducts.splice(index, 1); 
    }

}])