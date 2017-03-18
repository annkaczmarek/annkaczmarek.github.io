app.controller("ProjectsListCtrl", ['$scope', '$routeParams', function ($scope, $routeParams) {
    var id = $routeParams.id;
    var architPath = 'images/PORTFOLIO/PL/01. ARCHITEKTURA/';
    var smallArchitPath = 'images/PORTFOLIO/PL/02. MAŁA ARCHITEKTURA/';
    var tilePath = 'tile/tile.jpg';
    var types = [
        {
            title: "ARCHITEKTURA",
            projects: [{name: 'PRACA INŻYNIERSKA - CEGIELNIA',
                    tilePath: architPath + '01. PRACA INŻYNIERSKA - CEGIELNIA/' + tilePath
                },
                {
                    name: 'CAFE-FRAME',
                    tilePath: architPath + '04. CAFE-FRAME/' + tilePath
                },
                {
                    name: 'ZESPÓŁ BUDYNKÓW WIELORODZINNYCH - RIVER&TERRACE',
                    tilePath: architPath + '05. ZESPÓŁ BUDYNKÓW WIELORODZINNYCH - RIVER&TERRACE/' + tilePath
                },
                {
                    name: 'PRACOWNIA BIURA GRAFICZNEGO',
                    tilePath: architPath + '02. PRACOWNIA BIURA GRAFICZNEGO/' + tilePath
                },
                {
                    name: 'SKATEPARK',
                    tilePath: architPath + '03. SKATEPARK/' + tilePath
                }]
        },
        {
            title: "MAŁA ARCHITEKTURA",
            projects:[
                {
                    name: 'PROJEKT REWITALIZACJI PRZESTRZENI MIEJSKIEJ',
                    tilePath: smallArchitPath + 'PROJEKT REWITALIZACJI PRZESTRZENI MIEJSKIEJ/' + tilePath
                },
                {
                    name: 'FORMA WYSTAWIENNICZA',
                    tilePath: smallArchitPath + 'FORMA WYSTAWIENNICZA/' + tilePath
                }]
        }
    ];
    $scope.id = id;
    var elems = types[id].projects;

    for(var i = 0 ; i < elems.length ; i++){
        elems[i].counter = i;
    }
    var firstColCount = Math.ceil(elems.length/2);
    $scope.column1 = elems.slice(0, firstColCount);
    $scope.column2 = elems.slice(firstColCount);
    $scope.title = types[id].title;
}]);