
angular.module('hackathonApp', ['appCtrls','ui.router'])


.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {
  $urlRouterProvider.otherwise('/404');
  console.log("test")
  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: 'app/views/.ejs'
  })
  .state('home', {
    url: '/route',
    templateUrl: 'app/views/home.html'
  })
  .state('login', {
    url: '/route',
    templateUrl: 'app/views/.ejs'
  })
  .state('', {
    url: '/route',
    templateUrl: 'app/views/.ejs'
  })
  .state('recipe-search', {
    url: 'route',
    templateUrl: 'app/views/.ejs'
  })
  .state('404', {
    url: '/404',
    templateUrl: 'app/views/404.ejs'
  })


  $locationProvider.html5Mode(true);
}]);
