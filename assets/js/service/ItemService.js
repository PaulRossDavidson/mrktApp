mrktApp.service('ItemService', function($http, $q) {
	return {
		'getItems': function() {
			var defer = $q.defer();
			$http.get('/item/getItems').success(function(resp){
				defer.resolve(resp);
			}).error( function(err) {
				defer.reject(err);
			});
			return defer.promise;
		},
		'addItem': function(item) {
			var defer = $q.defer();
			$http.post('/item/addItem', item).success(function(resp){
				defer.resolve(resp);
			}).error( function(err) {
				defer.reject(err);
			});
			return defer.promise;
		},
		'removeItem': function(item) {
			var defer = $q.defer();
			$http.post('/item/removeItem', item).success(function(resp){
				defer.resolve(resp):
			})
		}
	}
})