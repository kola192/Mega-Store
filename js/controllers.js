angular.module('megaStore')
.controller('MainCtrl', ['$scope', '$rootScope', function($scope, $rootScope) {
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
        $scope.userLoggedOut =true
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

}])
.controller('HomeCtrl', ['$scope', '$rootScope', function($scope, $rootScope) {
    $rootScope.featuredProducts = [
        {name:"Adventure Pullover",mainPrice:78,sellPrice:69,category:"clothes",image:"img/products/cloth1.jpg"},
        {name:"Stratus Backpack",mainPrice:96,sellPrice:79,category:"clothes",image:"img/products/cloth5.png"},
        {name:"Drill Chino",mainPrice:100,sellPrice:89,category:"shoes",image:"img/products/shoes4.jpg"},
        {name:"Mac 5",mainPrice:1500,sellPrice:1299,category:"elects",image:"img/products/lap4.jpg"}
    ]
}])
.controller('storeCtrl', ['$scope', '$rootScope', function($scope, $rootScope) {
    $rootScope.products = [
        {id:0,name:"Chambary T-shirt",mainPrice:72,sellPrice:68,category:"clothes",image:"img/products/cloth2.jpg"},
        {id:1,name:"Stratus Backpack",mainPrice:96,sellPrice:79,category:"clothes",image:"img/products/cloth5.png"},
        {id:2,name:"Gulf Jacket",mainPrice:110,sellPrice:99,category:"clothes",image:"img/products/cloth7.jpg"},
        {id:3,name:"Toshiba Stalite",mainPrice:1100,sellPrice:899,category:"electronics",image:"img/products/lap2.jpg"},
        {id:4,name:"Mac 5",mainPrice:1500,sellPrice:1299,category:"electronics",image:"img/products/lap4.jpg"},
        {id:5,name:"Denim Pullover",mainPrice:110,sellPrice:98,category:"clothes",image:"img/products/cloth8.jpg"},
        {id:6,name:"Gunbarrel",mainPrice:120,sellPrice:99,category:"shoes",image:"img/products/shoes1.jpg"},
        {id:7,name:"Toshiba C55",mainPrice:1250,sellPrice:999,category:"electronics",image:"img/products/lap3.jpg"},
        {id:8,name:"Scout",mainPrice:118,sellPrice:97,category:"shoes",image:"img/products/shoes2.jpg"},
        {id:9,name:"Holla Skinny",mainPrice:80,sellPrice:74,category:"clothes",image:"img/products/cloth3.jpg"},
        {id:10,name:"Bomber Jacket",mainPrice:110,sellPrice:99,category:"clothes",image:"img/products/cloth6.jpg"},
        {id:11,name:"Adventure Pullover",mainPrice:78,sellPrice:69,category:"clothes",image:"img/products/cloth1.jpg"},
        {id:12,name:"Hot Scout",mainPrice:130,sellPrice:110,category:"shoes",image:"img/products/shoes3.jpg"},
        {id:13,name:"Tecno",mainPrice:700,sellPrice:679,category:"electronics",image:"img/products/mobile2.jpg"},
        {id:14,name:"Drill Chino",mainPrice:100,sellPrice:89,category:"shoes",image:"img/products/shoes4.jpg"},
        {id:15,name:"Neulla Pjamas",mainPrice:72,sellPrice:63,category:"clothes",image:"img/products/cloth4.jpg"},
        {id:16,name:"Samsung S7 Edge",mainPrice:900,sellPrice:889,category:"electronics",image:"img/products/mobile1.jpg"}
    ]

    $rootScope.currentCategory = null
    $rootScope.activeCategory = $rootScope.categories[0]
    $rootScope.setCurrentCategory = function(category) {
        if(category !== $rootScope.categories[0]) {
            $rootScope.currentCategory = category
        } 
        else {
            $rootScope.currentCategory = null
        }
    }
    $rootScope.setActiveCategory = function(category) {
        $rootScope.activeCategory = category
    }
    $rootScope.isCurrentCategory= function(category) {
        return $rootScope.currentCategory !== null && category === $rootScope.currentCategory
    }
    $rootScope.isActiveCategory= function(category) {
        return $rootScope.activeCategory !== null && category === $rootScope.activeCategory
    }

}])
.controller('LoginCtrl', ['$scope', '$rootScope', function($scope, $rootScope) {

}])
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
.controller('ContactCtrl', ['$scope', '$rootScope', function($scope, $rootScope) {

}])
.controller('AboutCtrl', ['$scope', '$rootScope', function($scope, $rootScope) {

}])
.controller('ProfileCtrl', ['$scope', '$rootScope', function($scope, $rootScope) {

}])