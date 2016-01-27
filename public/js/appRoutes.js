var app = angular.module('appRoutes', ['ui.router'])

app.config([
  '$stateProvider',
  '$urlRouterProvider',
  function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: '/views/home.html',
        controller: 'MainCtrl'
      })

      .state('nerds', {
        url: '/nerds',
        templateUrl: '/nerds',
        controller: 'NerdCtrl'
      })
  $urlRouterProvider.otherwise('home')
}])


// angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider',
// function ($routeProvider, $locationProvider) {
//   $routeProvider
//
//     .when('/', {
//       templateUrl: 'views/home.html',
//       controller: 'MainCtrl'
//     })
//
//     .when('/nerds', {
//       templateUrl: 'views/nerd.html',
//       controler: 'NerdCtrl'
//     })
//
//   $locationProvider.html5Mode(true)
// }])
