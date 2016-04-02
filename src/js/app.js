var gisApp = angular.module('gisApp', ['uiGmapgoogle-maps', 'ngResource', 'ui.materialize']);

gisApp.config(function(uiGmapGoogleMapApiProvider) {
    uiGmapGoogleMapApiProvider.configure({
        //    key: 'your api key',
        // v: '3.20', //defaults to latest 3.X anyhow
        libraries: 'weather,geometry,visualization'
    });
});