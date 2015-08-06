var fashionApp = angular.module('fashionApp', ["ui.router","angular-input-stars","ngMaterial","ui.bootstrap"])
    fashionApp.config(function($stateProvider){
    $stateProvider
        .state('home', {
            url: "",
            templateUrl: 'src/views/home.tpl.html',
            controller:'homeController'
        })
        .state('categories', {
            url: "/categories",
            templateUrl: 'src/views/category-list.tpl.html'
        })
         .state('shops', {
            url: "/shops",
            templateUrl: 'src/views/shop-list.tpl.html',
        })
         .state('shop-detail', {
            url: "/shop-detail/{shopId}",
            templateUrl: 'src/views/shop-detail.tpl.html',
            controller: 'shopDetailController'
        })
         .state('user', {
            url: "/user",
            templateUrl: 'src/views/user.tpl.html',
        })
         .state('admin', {
            url: "/admin",
            templateUrl:'src/views/admin-user.tpl.html',
            controller:'adminController'
        })
         .state('offers', {
            url: "/offers",
            templateUrl: 'src/views/offer-list.tpl.html',
        })

    })
     fashionApp.config( function($mdThemingProvider){
    // Configure a dark theme with primary foreground yellow
    $mdThemingProvider.theme('docs-dark', 'default')
        .primaryPalette('yellow')
        .dark();
  });