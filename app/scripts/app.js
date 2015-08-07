'use strict';

/**
 * @ngdoc overview
 * @name socialMediaApp
 * @description
 * # socialMediaApp
 *
 * Main module of the application.
 */

//angular.module('app.constants',[])
//  .constant('FIREBASE_URL','https://oveyzeeraq5.firebaseio-demo.com');
// // .constant('FIREBASE_URL', 'https://shining-torch-6748.firebaseio.com');

var app = angular
  .module('socialMediaApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'firebase'
  ])
  .constant('FIREBASE_URL', 'https://shining-torch-6748.firebaseio.com')

  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/posts.html',
        controller: 'PostsCtrl'
      })
      .when('/posts/:postId', {
        templateUrl: 'views/showpost.html',
        controller: 'PostViewCtrl'
      })
      .when('/register', {
        templateUrl: 'views/register.html',
        controller: 'AuthCtrl',
        resolve: {
          // controller will not be loaded until $requireAuth resolves
          // Auth refers to our $firebaseAuth wrapper in the example above
          "currentAuth": ["Authen", function (Authen) {
            // $requireAuth returns a promise so the resolve waits for it to complete
            // If the promise is rejected, it will throw a $stateChangeError (see above)
            return Authen.$waitForAuth();
          }]
        }
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'AuthCtrl',
        resolve: {
          // controller will not be loaded until $requireAuth resolves
          // Auth refers to our $firebaseAuth wrapper in the example above
          "currentAuth": ["Authen", function (Authen) {
            // $requireAuth returns a promise so the resolve waits for it to complete
            // If the promise is rejected, it will throw a $stateChangeError (see above)
            return Authen.$waitForAuth();
          }]
        }
      })
      .otherwise({
        redirectTo: '/'
      });
  });


