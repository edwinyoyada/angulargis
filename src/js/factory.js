gisApp.factory('OrganizationType', function($resource) {
	return $resource('http://localhost:8000/api/organization_types');
})

gisApp.factory('GeneralOrganization', function($resource) {
	return $resource('http://localhost:8000/api/general_organizations/:id');
})

gisApp.factory('Organization', function($resource) {
	return $resource('http://localhost:8000/api/organizations/:id');
})

gisApp.factory('Type', function($resource) {
	return $resource('http://localhost:8000/api/types/:id');
})

gisApp.factory('Provinces', function($resource) {
	return $resource('http://api.terhubung.com/provinces');
});

gisApp.factory('Cities', function($resource) {
	return $resource('http://api.terhubung.com/province/:id/cities',{id:'@id'});
});