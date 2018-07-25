var app = angular.module('quiz', ['ngRoute','720kb.socialshare','pdfjsViewer']);

 var serverName = "http://admin.niitquiz.in/";
 // var serverName = "http://139.59.33.107:8000/";
 
 // var serverName = "http://192.168.0.17:8000/";
 

app.config(['$routeProvider', function($routeProvider) {
            $routeProvider.when('/', {
               templateUrl: 'views/home.html',
               controller: 'homePage'
            });

            
            $routeProvider.when('/terms-conditions', {
               templateUrl: 'views/terms-conditions.html',
               controller: 'termsConditions'
            });

          
        	$routeProvider.when('/register', {
               templateUrl: 'views/register.html',
               controller: 'register'
            });
            
           

            $routeProvider.when('/test', {
               templateUrl: 'views/test.html',
               controller: 'test'
            });

           
            $routeProvider.when('/correctAnswers', {
               templateUrl: 'views/correctAnswers.html',
               controller: 'correctAnswers'
            });

            $routeProvider.when('/thankyou', {
               templateUrl: 'views/thankyou.html',
               controller: 'thankYou'
               
              
            });
 
            $routeProvider.otherwise({
               redirectTo: '/'
            });
         }]);    



