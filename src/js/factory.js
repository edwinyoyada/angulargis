//var BackendUrl ='localhost:8000/';

var BackendUrl = '128.199.119.162:8000';

gisApp.factory('OrganizationType', function($resource) {
	return $resource(BackendUrl+'api/organization_types');
})

gisApp.factory('GeneralOrganization', function($resource) {
	return $resource(BackendUrl+'api/general_organizations/:id');
})

gisApp.factory('Organization', function($resource) {
	return $resource(BackendUrl+'api/organizations/:id');
})

gisApp.factory('OrganizationTotal', function($resource) {
	return $resource(BackendUrl+'api/organizations_total/:id');
})

gisApp.factory('Type', function($resource) {
	return $resource(BackendUrl+'api/types/:id');
})

gisApp.factory('ConventionalType', function($resource) {
	return $resource(BackendUrl+'api/conventional_types/:id');
})

gisApp.factory('AreaSummary', function($resource) {
	return $resource(BackendUrl+'api/organizations_summary/:id');
})

gisApp.factory('Provinces', function($resource) {
	return $resource('http://api.terhubung.com/provinces');
});

gisApp.factory('Cities', function($resource) {
	return $resource('http://api.terhubung.com/province/:id/cities',{id:'@id'});
});

gisApp.factory('AllCities', function($resource) {
	return $resource('http://api.terhubung.com/cities');
});

