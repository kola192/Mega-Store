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
        {name:"mutwakil", email:"mutwakil@gmail.com", password:"kola123"},
        {name:"omer", email:"omer123@gmai.com", password:"omer123"},
        {name:"khalid", email:"khalid123@gmai.com", password:"khalid123"},
        {name:"ali", email:"ali123@gmai.com", password:"ali123"}
    ]


    $rootScope.userLoggedOut =false

    $scope.login = function() {
        $scope.userLoggedOut =true
    }
    

    $scope.logout = function() {
        $scope.userLoggedOut =false
    }
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
        {name:"Chambary T-shirt",mainPrice:72,sellPrice:68,category:"clothes",image:"img/products/cloth2.jpg"},
        {name:"Stratus Backpack",mainPrice:96,sellPrice:79,category:"clothes",image:"img/products/cloth5.png"},
        {name:"Gulf Jacket",mainPrice:110,sellPrice:99,category:"clothes",image:"img/products/cloth7.jpg"},
        {name:"Toshiba Stalite",mainPrice:1100,sellPrice:899,category:"electronics",image:"img/products/lap2.jpg"},
        {name:"Mac 5",mainPrice:1500,sellPrice:1299,category:"electronics",image:"img/products/lap4.jpg"},
        {name:"Denim Pullover",mainPrice:110,sellPrice:98,category:"clothes",image:"img/products/cloth8.jpg"},
        {name:"Gunbarrel",mainPrice:120,sellPrice:99,category:"shoes",image:"img/products/shoes1.jpg"},
        {name:"Toshiba C55",mainPrice:1250,sellPrice:999,category:"electronics",image:"img/products/lap3.jpg"},
        {name:"Scout",mainPrice:118,sellPrice:97,category:"shoes",image:"img/products/shoes2.jpg"},
        {name:"Holla Skinny",mainPrice:80,sellPrice:74,category:"clothes",image:"img/products/cloth3.jpg"},
        {name:"Bomber Jacket",mainPrice:110,sellPrice:99,category:"clothes",image:"img/products/cloth6.jpg"},
        {name:"Adventure Pullover",mainPrice:78,sellPrice:69,category:"clothes",image:"img/products/cloth1.jpg"},
        {name:"Hot Scout",mainPrice:130,sellPrice:110,category:"shoes",image:"img/products/shoes3.jpg"},
        {name:"Tecno",mainPrice:700,sellPrice:679,category:"electronics",image:"img/products/mobile2.jpg"},
        {name:"Drill Chino",mainPrice:100,sellPrice:89,category:"shoes",image:"img/products/shoes4.jpg"},
        {name:"Neulla Pjamas",mainPrice:72,sellPrice:63,category:"clothes",image:"img/products/cloth4.jpg"},
        {name:"Samsung S7 Edge",mainPrice:900,sellPrice:889,category:"electronics",image:"img/products/mobile1.jpg"}
    ]

    $scope.categories = [
        {id:0,name:"All Products"},
        {id:1,name:"Clothes"},
        {id:2,name:"Shoes"},
        {id:3,name:"Electronics"},
        {id:4,name:"Perfuems"}
        ]

    $scope.currentCategory = null
    $scope.activeCategory = $scope.categories[0]
    $scope.setCurrentCategory = function(category) {
        if(category !== $scope.categories[0]) {
            $scope.currentCategory = category
        } 
        else {
            $scope.currentCategory = null
        }
    }
    $scope.setActiveCategory = function(category) {
        $scope.activeCategory = category
    }
    $scope.isCurrentCategory= function(category) {
        return $scope.currentCategory !== null && category === $scope.currentCategory
    }
    $scope.isActiveCategory= function(category) {
        return $scope.activeCategory !== null && category === $scope.activeCategory
    }

}])
.controller('LoginCtrl', ['$scope', '$rootScope', function($scope, $rootScope) {

}])
.controller('RegisterCtrl', ['$scope', '$rootScope', '$state', function($scope, $rootScope, $state) {
    $scope.register = function() {
        $scope.newUser = {
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