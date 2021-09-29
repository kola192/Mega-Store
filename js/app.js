angular.module("megaStore", ["ui.router"])
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state("app", {
                url: "/app",
                views: {
                    main: {
                        templateUrl: "templates/main.html",
                        controller: "MainCtrl"
                    }
                }
            })
            .state("app.home", {
                url: "/home",
                views: {
                    sub: {
                        templateUrl: "templates/home.html",
                        controller: "HomeCtrl"
                    }
                }
            })
            .state("app.login", {
                url: "/login",
                views: {
                    sub: {
                        templateUrl: "templates/login.html",
                        controller: "LoginCtrl"
                    }
                }
            })
            .state("app.register", {
                url: "/register",
                views: {
                    sub: {
                        templateUrl: "templates/register.html",
                        controller: "RegisterCtrl"
                    }
                }
            })
            .state("app.store", {
                url: "/store",
                views: {
                    sub: {
                        templateUrl: "templates/store.html",
                        controller: "storeCtrl"
                    }
                }
            })
            .state("app.contact", {
                url: "/contact",
                views: {
                    sub: {
                        templateUrl: "templates/contact.html",
                        controller: "ContactCtrl"
                    }
                }
            })
            .state("app.about", {
                url: "/about",
                views: {
                    sub: {
                        templateUrl: "templates/about.html",
                        controller: "ContactCtrl"
                    }
                }
            })
            .state("app.profile", {
                url: "/profile",
                views: {
                    sub: {
                        templateUrl: "templates/profile.html",
                        controller: "ProfileCtrl"
                    }
                }
            })
            .state("app.cart", {
                url: "/cart",
                views: {
                    sub: {
                        templateUrl: "templates/cart.html",
                        controller: "CartCtrl"
                    }
                }
            })
            .state("app.details", {
                url: "/details",
                views: {
                    sub: {
                        templateUrl: "templates/details.html",
                        controller: "DetailsCtrl"
                    }
                }
            })
            .state("app.checkout", {
                url: "/checkout",
                views: {
                    sub: {
                        templateUrl: "templates/checkout.html",
                        controller: "CheckoutCtrl"
                    }
                }
            })

            
        $urlRouterProvider.otherwise("/app/home")
    })