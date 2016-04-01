gisApp.directive('onFinishRender', function ($timeout) {
	return {
		restrict: 'A',
		link: function (scope, element, attr) {
			if (scope.$last === true) {
				$timeout(function () {
					scope.$emit('ngRepeatFinished');
				});
			}
		}
	}
});

gisApp.controller("firstController", function($scope, uiGmapGoogleMapApi, Organization, OrganizationType, GeneralOrganization, Provinces, Cities,Type) {
    // Do stuff with your $scope.
    // Note: Some of the directives require at least something to be defined originally!
    // e.g. $scope.markers = []

    // uiGmapGoogleMapApi is a promise.
    // The "then" callback function provides the google.maps object.

	$scope.$on('ngRepeatFinished', function(ngRepeatFinishedEvent) {
		$('select').material_select();
	});

	$scope.filter = {};

	var lastModel = null;

	var updateSelected = function(checked, id) {
		if (checked && $scope.filter_organization.indexOf(id) === -1) {
			$scope.filter_organization.push(id);
		}
		if (!checked && $scope.filter_organization.indexOf(id) !== -1) {
			$scope.filter_organization.splice($scope.filter_organization.indexOf(id), 1);
		}
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

		$scope.general_organization_name_list = [];
		$scope.filter_organization = [];
		$scope.IsFilterShow = true;
		$scope.organization_type_list = OrganizationType.query(function(data){
			$scope.organization_type = $scope.organization_type_list[0]._id;
			$scope.general_organization_name_list = GeneralOrganization.query({ organizationTypeID:$scope.organization_type});
		});

		$scope.province_list = Provinces.query();
		$scope.type_list = Type.query(function(data){
			//$scope.sub_type_list = $scope.organization_type_list[0]._id;
			//$scope.general_organization_name_list = GeneralOrganization.query({ organizationTypeID:$scope.organization_type});
		});

		console.log($scope.type_list);

		$scope.ddlProvince_change = function() {
			Cities.get({'id':$scope.filter.province},function(data){
				$scope.city_list = data.cities;
				$scope.filter.city="";
			})
		};

		$scope.marker = [];

		$scope.doSearch2 = function() {
			var searchKeyword = "";
			//var markers = Organization.query({ organization_names:($scope.filter_organization.length==0?'null':$scope.filter_organization) });
			var markers = Organization.query();
			$scope.marker = markers;
		}

		$scope.organizationTypeClick = function organizationTypeClick(id) {
			$scope.organization_type = id;
			$scope.filter_organization = [];
			$scope.marker = [];
			$scope.general_organization_name_list = GeneralOrganization.query({ organizationTypeID:id});
		};

		$scope.onClick =function(marker, eventName, model) {
			if(lastModel!=null){
				lastModel.show = false;
			}
			lastModel = model;
		};

		$scope.filterCheckboxOrganizationClick = function filterCheckboxOrganizationClick($event,id) {
			var checkbox = $event.target;
			updateSelected(checkbox.checked,id);
		};

		$scope.isSelectedAll = function() {
			if($scope.general_organization_name_list.length==0)
			{
				return false;
			}
			return $scope.filter_organization.length === $scope.general_organization_name_list.length;
		};

		$scope.selectAll = function($event) {
			var checkbox = $event.target;
			$scope.general_organization_name_list.$promise.then(function(data) {
				data.forEach(function(obj) {
					updateSelected(checkbox.checked, obj._id);
				});
			});
		};

		$scope.showFilterClick = function($event) {
			var checkbox = $event.target;
			$scope.IsFilterShow = checkbox.checked;
		};
  });


});
