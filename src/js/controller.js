gisApp.controller("firstController", function($scope, uiGmapGoogleMapApi, Organization) {
    // Do stuff with your $scope.
    // Note: Some of the directives require at least something to be defined originally!
    // e.g. $scope.markers = []

    // uiGmapGoogleMapApi is a promise.
    // The "then" callback function provides the google.maps object.

	var lastModel = null;
	var organization = Organization.query();

	$scope.filter_bank = [];
	$scope.IsFilterShow = true;

	var updateSelected = function(checked, id) {
		if (checked && $scope.filter_bank.indexOf(id) === -1) {
			$scope.filter_bank.push(id);
		}
		if (!checked && $scope.filter_bank.indexOf(id) !== -1) {
			$scope.filter_bank.splice($scope.filter_bank.indexOf(id), 1);
		}
	};

	var updateMarker = function(){
		organization.$promise.then(function(data) {
			$scope.marker = data.filter(function(obj) {
				return ($scope.filter_bank.indexOf(obj._id)!==-1);
			});
		});
	}

	$scope.filterCheckboxBankClick = function filterCheckboxBankClick($event,id) {
		var checkbox = $event.target;
		updateSelected(checkbox.checked,id);
		//updateMarker();
	};

	$scope.isSelectedAll = function() {
		return $scope.filter_bank.length === organization.length;
	};

	$scope.selectAll = function($event) {
		var checkbox = $event.target;
		organization.$promise.then(function(data) {
			data.forEach(function(obj) {
				updateSelected(checkbox.checked, obj._id);
			});
		});
		//updateMarker();
	};

	$scope.showFilterClick = function($event) {
		var checkbox = $event.target;
		$scope.IsFilterShow = checkbox.checked;
	};



	uiGmapGoogleMapApi.then(function(maps) {
    	$scope.map = {
			center: { latitude: -2.3163654, longitude: 119.0851044 },
			zoom: 6,

		};
		$scope.options = {
			language:"in",
			mapTypeControl: true,
			mapTypeControlOptions: {
				position: google.maps.ControlPosition.BOTTOM_CENTER
			}};

		$scope.organization = organization;

		//organization.$promise.then(function(data) {
		//	data.forEach(function(obj) {
		//		$scope.filter_bank.push(obj._id);
		//	});
		//});

		$scope.marker = {};

		//organization.$promise.then(function(data) {
		//	$scope.marker = data.filter(function(obj) {
		//		//return (arr.indexOf(obj.coord.latitude)!==-1);
		//		//return (obj.name == 'Asuransi Adira Dinamika Pusat');
		//	});
		//});

    	$scope.doSearch = function() {
    		var searchKeyword = $scope.search; console.log(searchKeyword);
    		var markers = Organization.query({ name: searchKeyword }); console.log(markers);
    		$scope.marker = markers;
    	}

		$scope.doSearch2 = function() {
			var searchKeyword = "";
			var markers = Organization.query({ ids:($scope.filter_bank.length==0?'null':$scope.filter_bank) }); console.log(markers);
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
