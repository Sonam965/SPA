var app = angular.module('myApp',['ngRoute']);
app.config(function($routeProvider){
    $routeProvider
    .when('/',{
        templateUrl : 'home.html',
    })
    .when('/about',{
       
            templateUrl : 'about.html',
           
        })
        .when('/services',{
       
            templateUrl : 'services.html',
        })
        .when('/blogs',{
       
            templateUrl : 'blogs.html',
          
        })
        .when('/contact',{
       
            templateUrl : 'contact.html',
            
        })
        .otherwise({redirectTo: '/'});
    });
    // app.controller('HomeController',function($scope){
    //     $scope.message = 'hello from home controller'
    // })


    // app.controller('BlogController',function($scope){
    //     $scope.message = 'hello from blog controller'
    // })


    // app.controller('AboutController',function($scope){
    //     $scope.message = 'hello from about controller'
    // })
