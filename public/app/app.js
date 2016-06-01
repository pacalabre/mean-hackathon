angular.module('hackathonApp', ['appCtrls','ui.router'])


.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {
  $urlRouterProvider.otherwise('/404');
  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: 'app/views/home.html'
  })
  .state('login', {
    url: '/route',
    templateUrl: 'app/views/login.html'
  })
  .state('results', {
    url: 'route',
    templateUrl: 'app/views/results.html'
  })
  .state('404', {
    url: '/404',
    templateUrl: 'app/views/404.html'
  })

  $locationProvider.html5Mode(true);
}]);