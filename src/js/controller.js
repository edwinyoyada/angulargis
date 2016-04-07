gisApp.controller("firstController", function ($scope, $http, uiGmapGoogleMapApi, Organization, OrganizationTotal, OrganizationType, GeneralOrganization, Provinces, Cities, AllCities, Type, ConventionalType, AreaSummary) {
    // Do stuff with your $scope.
    // Note: Some of the directives require at least something to be defined originally!
    // e.g. $scope.markers = []

    // uiGmapGoogleMapApi is a promise.
    // The "then" callback function provides the google.maps object.

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
            province: $scope.filter.province.id,
            city: $scope.filter.city.id,
            organization_type_id: $scope.organization_type
        }, function (obj) {
            $scope.summary = obj[0];
        });
    }

    $scope.updateOrganizationTotal = function () {
        $scope.organization_total_list = {};
        OrganizationTotal.query({
            organization_type_id: $scope.organization_type,
            province: $scope.filter.province.id,
            city: $scope.filter.city.id,
            type: $scope.filter.type,
            sub_type: $scope.filter.sub_type,
            conventional: $scope.filter.conventional_type,
            is_hq_only: $scope.filter.is_hq_only
        }, function (obj) {
            $scope.organization_total_list['All'] = null;
            obj.forEach(function (v) {
                $scope.organization_total_list[v._id] = v.total_organizations;
                $scope.organization_total_list['All'] = ($scope.organization_total_list['All'] == null ? 0 : $scope.organization_total_list['All']) + v.total_organizations
            });
        });

    }

    $scope.polygons_events = {
        click: function (gPoly, eventName, polyModel) {
            //alert("Polygon ID =" + polyModel.id);
             polyModel.fill.opacity = '0.3';
        }
        , mouseover: function (gPoly, eventName, polyModel) {
            polyModel.fill.opacity = '0.8';
            // polyModel.stroke.weight = '2';
        },
        mouseout: function (gPoly, eventName, polyModel) {
            // polyModel.stroke.weight = '1';
            polyModel.fill.opacity = '0.3';
        }
    }

    uiGmapGoogleMapApi.then(function (maps) {
        $scope.poly_lists = [];


        $scope.map = {
            center: {latitude: -2.3163654, longitude: 119.0851044},
            zoom: 6
        };

        $scope.polys = [];

        $http.get('src/js/IDN_adm_2_kabkota.json').then(function (data) {
            //data.data.features.forEach(function (obj, k) {
            //    obj.id = k;
            //    if (k % 2 == 0) {
            //        obj.fill = {color: 'red', opacity: '0.3'};
            //    } else if (k % 3 == 0) {
            //        obj.fill = {color: 'green', opacity: '0.3'};
            //    } else if (k % 5 == 0) {
            //        obj.fill = {color: 'yellow', opacity: '0.3'};
            //    } else {
            //        obj.fill = {color: 'blue', opacity: '0.3'};
            //    }
            //    obj.stroke = {color: 'white', weight: 1, opacity: '1.0'};
            //});
            //$scope.polys = data.data.features;
            index = 0;
            $scope.poly_lists[index]=[];
            data.data.features.forEach(function (obj, k) {
                if(k%10==0)
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
        });

        //$http.get('src/js/IDN_adm_1_province.json').then(function (data) {
        //	console.log(data.data.features);
        //	$scope.polys = data.data.features;
        //});

        //$http.get('src/js/provinsi.json').then(function (data) {
        //	console.log(data.data.features);
        //	$scope.polys = data.data.features;
        //});

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
            $scope.updateAreaSumary();
            $scope.updateOrganizationTotal();
        });

        $scope.province_list = Provinces.query(function (data) {
            $scope.filter.province.id = "All";
            $scope.filter.province.name = "All";
            //$scope.ddlProvince_change();
        });

        $scope.type_list = Type.query(function (data) {
            $scope.filter.type = "All";
            $scope.ddlType_change();
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

                    $scope.filter.city.id = "All";
                    $scope.updateAreaSumary();
                    $scope.updateOrganizationTotal();
                }
                else {
                    Cities.get({'id': $scope.filter.province.id}, function (data) {
                        $scope.city_list = data.cities;
                        $scope.filter.city.id = "All";
                        $scope.updateAreaSumary();
                        $scope.updateOrganizationTotal();
                    });
                }
            }
        };

        $scope.ddlCity_change = function () {
            $scope.filter.city.name = $('#ddlCity option:selected').text();
            $scope.updateAreaSumary();
            $scope.updateOrganizationTotal();
        };

        $scope.ddlType_change = function () {
            $scope.sub_type_list = [];
            if ($scope.filter.type != "All") {
                var selected_type = $scope.type_list.filter(function (obj) {
                    return (obj._id == $scope.filter.type);
                })[0];

                if (selected_type != null) {
                    $scope.sub_type_list = selected_type.sub_type;
                }
            } else {
                if ($scope.type_list != null) {
                    $scope.sub_type_list = [];
                    $scope.type_list.forEach(function (obj) {
                        if (obj.sub_type != null) {
                            $scope.sub_type_list = $scope.sub_type_list.concat(obj.sub_type);
                        }
                    });
                }
            }
            $scope.sub_type_list.sort(function (a, b) {
                return (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0);
            });

            $scope.filter.sub_type = "All";
            $scope.updateOrganizationTotal();
        };

        $scope.marker = [];

        $scope.doSearch2 = function () {
            var searchKeyword = "";
            var markers = Organization.query({
                general_ids: ($scope.filter_organization.length == 0 ? 'null' : $scope.filter_organization),
                province: $scope.filter.province.id,
                city: $scope.filter.city.id,
                type: $scope.filter.type,
                sub_type: $scope.filter.sub_type,
                conventional: $scope.filter.conventional_type,
                is_hq_only: $scope.filter.is_hq_only
            });
            //var markers = Organization.query();
            $scope.marker = markers;
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
            //$scope.sub_type_list=[];
            $scope.ddlType_change();

            $scope.organization_type = id;
            $scope.filter_organization = [];
            $scope.marker = [];
            $scope.general_organization_name_list = GeneralOrganization.query({organizationTypeID: id});
            $scope.updateAreaSumary();
            $scope.updateOrganizationTotal();
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

                $scope.map.center = {latitude: hqModel.coord.latitude, longitude: hqModel.coord.longitude}

                lastModel.show = false;
                hqModel.show = true;
                lastModel = hqModel;
            } else {
                alert('HQ Location not found in current map. HQ Location address at ' + lastModel.hq_address);
            }
        }

    });


});
