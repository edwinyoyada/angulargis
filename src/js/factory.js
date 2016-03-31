gisApp.factory('Organization', function($resource) {
	return $resource('http://localhost:8000/api/organizations/:id');
})

gisApp.factory('NonBankType', function($resource) {
	return $resource('http://localhost:8000/api/nonbanktypes/:id');
})