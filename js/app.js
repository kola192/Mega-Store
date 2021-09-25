angular.module("megaStore", ["ui.router"])
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state("store", {
                url: "/store",
                views: {
                    main: {
                        templateUrl: "templates/main.html",
                        controller: "MainCtrl"
                    }
                }
            })
            .state("store.home", {
                url: "/home",
                views: {
                    sub: {
                        templateUrl: "templates/home.html",
                        controller: "HomeCtrl"
                    }
                }
            })
            .state("store.login", {
                url: "/login",
                views: {
                    sub: {
                        templateUrl: "templates/login.html",
                        controller: "LoginCtrl"
                    }
                }
            })
            .state("store.register", {
                url: "/register",
                views: {
                    sub: {
                        templateUrl: "templates/register.html",
                        controller: "RegisterCtrl"
                    }
                }
            })
            .state("store.allProducts", {
                url: "/all-products",
                views: {
                    sub: {
                        templateUrl: "templates/allProducts.html",
                        controller: "AllProductsCtrl"
                    }
                }
            })
            .state("store.contact", {
                url: "/contact",
                views: {
                    sub: {
                        templateUrl: "templates/contact.html",
                        controller: "ContactCtrl"
                    }
                }
            })
            .state("store.about", {
                url: "/about",
                views: {
                    sub: {
                        templateUrl: "templates/about.html",
                        controller: "ContactCtrl"
                    }
                }
            })
            .state("store.profile", {
                url: "/profile",
                views: {
                    sub: {
                        templateUrl: "templates/profile.html",
                        controller: "ProfileCtrl"
                    }
                }
            })

            
        $urlRouterProvider.otherwise("/store/home")
    })