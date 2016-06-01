angular.module('appServices', ['ngResource'])

.factory('Links', ['$resource', function($resource) {
  return $resource('/api/url/:id',{}, {
  	query: {isArray: false}
  })
}])
