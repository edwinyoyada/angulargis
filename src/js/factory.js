gisApp.factory('Organization', function($resource) {
	return $resource('http://gis.local/api/organization/:id');
})