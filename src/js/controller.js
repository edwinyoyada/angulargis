gisApp.controller("firstController", function ($scope, $http, uiGmapGoogleMapApi, Organization, OrganizationTotal, OrganizationType, GeneralOrganization, Provinces, Cities, AllCities, Type, ConventionalType, AreaSummary,$loading) {
    // Do stuff with your $scope.
    // Note: Some of the directives require at least something to be defined originally!
    // e.g. $scope.markers = []

    // uiGmapGoogleMapApi is a promise.
    // The "then" callback function provides the google.maps object.

    $scope.PolygonVisible = false;

    $scope.filter = {
        city: {
            id: "All",
            name: "All"
        },
        province: {
            id: "All",
            name: "All"
        },
        type: "All",
        sub_type: "All",
        conventional_type: "All",
        is_hq_only: false
    }

    $scope.activeFilter = angular.copy($scope.filter);

    $scope.summary = {}
    $scope.organization_total_list = {}

    var lastModel = null;
    var allCities = null;

    var updateSelected = function (checked, id) {
        if (checked && $scope.filter_organization.indexOf(id) === -1) {
            $scope.filter_organization.push(id);
        }
        if (!checked && $scope.filter_organization.indexOf(id) !== -1) {
            $scope.filter_organization.splice($scope.filter_organization.indexOf(id), 1);
        }
    };

    $scope.updateAreaSumary = function () {
        AreaSummary.query({
            province: $scope.activeFilter.province.id,
            city: $scope.activeFilter.city.id,
            organization_type_id: $scope.organization_type
        }, function (obj) {
            $scope.summary = obj[0];
        });
    }

    $scope.updateOrganizationTotal = function () {
        $scope.organization_total_list = {};
        $scope.organization_total_list['All'] = 0;
        OrganizationTotal.query({
            organization_type_id: $scope.organization_type,
            province: $scope.activeFilter.province.id,
            city: $scope.activeFilter.city.id,
            type: $scope.activeFilter.type,
            sub_type: $scope.activeFilter.sub_type,
            conventional: $scope.activeFilter.conventional_type,
            is_hq_only: $scope.activeFilter.is_hq_only
        }, function (obj) {
            obj.forEach(function (v) {
                $scope.organization_total_list[v._id] = v.total_organizations;
                $scope.organization_total_list['All'] = $scope.organization_total_list['All'] + v.total_organizations
            });
        });

    }

    //$scope.polygons_events = {
    //    click: function (gPoly, eventName, polyModel) {
    //        //alert("Polygon ID =" + polyModel.id);
    //         //polyModel.fill.opacity = '0.3';
    //    }
    //    , mouseover: function (gPoly, eventName, polyModel) {
    //        console.log(polyModel);
    //        polyModel.fill.opacity = '0.8';
    //        // polyModel.stroke.weight = '2';
    //    },
    //    mouseout: function (gPoly, eventName, polyModel) {
    //        // polyModel.stroke.weight = '1';
    //        polyModel.fill.opacity = '0.3';
    //    }
    //}

    $scope.showDemographyClick= function($event){
        var checkbox = $event.target;
        $loading.start('body');
        if (checkbox.checked && $scope.poly_lists.length==0){
            $http.get('src/js/IDN_adm2.json').then(function (data) {
                index = 0;
                $scope.poly_lists[index]=[];
                data.data.features.forEach(function (obj, k) {
                    if(k%5==0)
                    {
                        index++;
                        $scope.poly_lists[index]=[];
                    }
                    obj.id = k;
                    if (k % 2 == 0) {
                        obj.fill = {color: 'red', opacity: '0.3'};
                    } else if (k % 3 == 0) {
                        obj.fill = {color: 'green', opacity: '0.3'};
                    } else if (k % 5 == 0) {
                        obj.fill = {color: 'yellow', opacity: '0.3'};
                    } else {
                        obj.fill = {color: 'blue', opacity: '0.3'};
                    }
                    obj.stroke = {color: 'white', weight: 1, opacity: '1.0'};

                    $scope.poly_lists[index].push(obj)
                });
                $loading.finish('body');
            });
        }else{
            $loading.finish('body');
        }
        $scope.PolygonVisible = checkbox.checked;
    }

    uiGmapGoogleMapApi.then(function (maps) {
        $scope.poly_lists = [];


        $scope.map = {
            center: {latitude: -2.3163654, longitude: 119.0851044},
            zoom: 6
        };

        $scope.options = {
            language: "in",
            mapTypeControl: true,
            mapTypeControlOptions: {
                position: google.maps.ControlPosition.BOTTOM_CENTER
            }
        };

        $scope.general_organization_name_list = [];
        $scope.filter_organization = [];
        $scope.IsFilterShow = true;
        $scope.IsSummaryShow = true;
        $scope.organization_type_list = OrganizationType.query(function (data) {
            $scope.organization_type = $scope.organization_type_list[0]._id;
            $scope.general_organization_name_list = GeneralOrganization.query({organizationTypeID: $scope.organization_type});
        });

        $scope.province_list = Provinces.query(function (data) {
            $scope.filter.province.id = "All";
            $scope.filter.province.name = "All";
            //$scope.ddlProvince_change();
        });

        $scope.type_list = Type.query(function (data) {
            $scope.filter.type = "All";
        });

        $scope.conventional_type_list = ConventionalType.query(function (data) {
            $scope.filter.conventional_type = "All";
        });

        $scope.ddlProvince_change = function () {
            $scope.city_list = [];
            $scope.filter.province.name = $('#ddlProvince option:selected').text();
            if ($scope.filter.province.id != null) {
                if ($scope.filter.province.id == "All") {
                    //if(allCities==null) {
                    //	$scope.city_list = AllCities.query(function () {
                    //		allCities = $scope.city_list
                    //		$scope.filter.city = "All";
                    //	});
                    //}else{
                    //	$scope.city_list = allCities;
                    //	$scope.filter.city = "All";
                    //}
                }
                else {
                    Cities.get({'id': $scope.filter.province.id}, function (data) {
                        $scope.city_list = data.cities;
                    });
                }
                $scope.filter.city.id = "All";
            }
        };

        $scope.ddlCity_change = function () {
            $scope.filter.city.name = $('#ddlCity option:selected').text();
        };

        $scope.marker = [];

        $scope.loadMapData = function () {
            $loading.start('body');
            var searchKeyword = "";
            var markers = Organization.query({
                general_ids: ($scope.filter_organization.length == 0 ? 'null' : $scope.filter_organization),
                province: $scope.activeFilter.province.id,
                city: $scope.activeFilter.city.id,
                type: $scope.activeFilter.type,
                sub_type: $scope.activeFilter.sub_type,
                conventional: $scope.activeFilter.conventional_type,
                is_hq_only: $scope.activeFilter.is_hq_only
            },function (data) {
                $loading.finish('body');
            });
            $scope.marker = markers;
        }

        $scope.loadSearch = function () {
            $scope.activeFilter=angular.copy($scope.filter);
            $scope.updateAreaSumary();
            $scope.updateOrganizationTotal();
        }

        $scope.organizationTypeClick = function (id) {
            $scope.filter.province.name = "All";
            $scope.filter.city.name = "All";
            $scope.filter.city.id = "All";
            $scope.filter.province.id = "All";
            $scope.filter.type = "All";
            $scope.filter.sub_type = "All";
            $scope.filter.conventional_type = "All";
            $scope.filter.is_hq_only = false;
            $scope.city_list = [];

            $scope.organization_type = id;
            $scope.filter_organization = [];
            $scope.marker = [];
            $scope.general_organization_name_list = GeneralOrganization.query({organizationTypeID: id});
            $scope.loadSearch();
        };


        $scope.markerClick = function (marker, eventName, model) {
            var phone = '';

            if (model.phone != null && Array.isArray(model.phone)) {
                model.phone.forEach(function (obj, index) {
                    if (index == 0)
                        phone = obj.phone;
                    else
                        phone = phone + ', ' + obj.phone;
                });

                model.phone = phone;
            }

            if (lastModel != null) {
                lastModel.show = false;
            }

            lastModel = model;
        };

        $scope.filterCheckboxOrganizationClick = function filterCheckboxOrganizationClick($event, id) {
            var checkbox = $event.target;
            updateSelected(checkbox.checked, id);
        };

        $scope.isSelectedAll = function () {
            if ($scope.general_organization_name_list.length == 0) {
                return false;
            }
            return $scope.filter_organization.length === $scope.general_organization_name_list.length;
        };

        $scope.selectAll = function ($event) {
            var checkbox = $event.target;
            $scope.general_organization_name_list.$promise.then(function (data) {
                data.forEach(function (obj) {
                    updateSelected(checkbox.checked, obj._id);
                });
            });
        };

        $scope.showFilterClick = function ($event) {
            var checkbox = $event.target;
            $scope.IsFilterShow = checkbox.checked;
        };

        $scope.showSummaryClick = function ($event) {
            var checkbox = $event.target;
            $scope.IsSummaryShow = checkbox.checked;
        };


        $scope.openHqWindow = function () {
            var hqModel = $scope.marker.filter(function (obj) {
                return obj._id == lastModel.hq_id
            })[0];

            if (hqModel != null) {
                var phone = '';

                if (hqModel.phone != null && Array.isArray(hqModel.phone)) {
                    hqModel.phone.forEach(function (obj, index) {
                        if (index == 0)
                            phone = obj.phone;
                        else
                            phone = phone + ', ' + obj.phone;
                    });

                    hqModel.phone = phone;
                }

                $scope.map.center = {latitude:hqModel.coord.latitude, longitude: hqModel.coord.longitude}

                lastModel.show = false;
                hqModel.show = true;
                lastModel = hqModel;
            } else {
                alert('HQ Location not found in current map. HQ Location address at ' + lastModel.hq_address);
            }
        }

    });


});
