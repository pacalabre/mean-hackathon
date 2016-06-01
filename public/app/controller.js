angular.module('appCtrls', ['appServices'])

.controller('UrlShowCtrl', ['$scope', '$stateParams', 'Urls', function($scope, $stateParams, Urls) {
  $scope.urls = {};

  Urls.get({id: $stateParams.id}, function success(data) {
    $scope.film = data;
  }, function error(data) {
    console.log(data);
  });
}])

.controller('UrlsCtrl', ['$scope', '$stateParams', 'Urls', function($scope, $stateParams, Urls) {
  $scope.urls = {};

  Urls.get({id: $stateParams.id}, function success(data) {
    $scope.url = data;
  }, function error(data) {
    console.log(data);
  });
}])

