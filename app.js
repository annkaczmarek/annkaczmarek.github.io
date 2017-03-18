var app = angular.module('portfolioAnn', ['ngRoute']);
app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when("/type/:id", {
            templateUrl : "projects_list/project_list.html"
        })
        .when("/type/:id/gallery/:project_id", {
            templateUrl : "gallery/gallery.html"
        })
        .when("/type/gallery/:id", {
            templateUrl : "gallery/gallery.html"
        })
        .when("/",{
            templateUrl: "main/main.html"
        })
        .otherwise('/');
}]);
app.run(['$anchorScroll', function($anchorScroll) {
    $anchorScroll.yOffset = -80;
}]);