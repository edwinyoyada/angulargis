gisApp.controller("firstController", function($scope, uiGmapGoogleMapApi, Organization) {
    // Do stuff with your $scope.
    // Note: Some of the directives require at least something to be defined originally!
    // e.g. $scope.markers = []

    // uiGmapGoogleMapApi is a promise.
    // The "then" callback function provides the google.maps object.

	var lastModel = null;
    uiGmapGoogleMapApi.then(function(maps) {
    	$scope.map = { center: { latitude: -2.3163654, longitude: 119.0851044 }, zoom: 6 };
    	$scope.marker = Organization.query();

    	$scope.doSearch = function() {
    		var searchKeyword = $scope.search; console.log(searchKeyword);
    		var markers = Organization.query({ name: searchKeyword }); console.log(markers);
    		$scope.marker = markers;
    	}

		$scope.onClick =function(marker, eventName, model) {

			if(lastModel!=null){
				lastModel.show = false;
			}
			lastModel = model;
		};
    });


});