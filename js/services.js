angular.module('appServices', ['ngResource'])

.factory('', ['$resource', function($resource) {
  return $resource('',{'database'},{
    query: {isArray: false}
  })
}])
