angular.module('megaStore')

.controller('HomeCtrl', ['$scope', '$rootScope', function($scope, $rootScope) {
    $rootScope.featuredProducts = [
        {name:"Adventure Pullover",mainPrice:78,sellPrice:69,category:"clothes",image:"img/products/cloth1.jpg"},
        {name:"Stratus Backpack",mainPrice:96,sellPrice:79,category:"clothes",image:"img/products/cloth5.png"},
        {name:"Drill Chino",mainPrice:100,sellPrice:89,category:"shoes",image:"img/products/shoes4.jpg"},
        {name:"Mac 5",mainPrice:1500,sellPrice:1299,category:"elects",image:"img/products/lap4.jpg"}
    ]
}])