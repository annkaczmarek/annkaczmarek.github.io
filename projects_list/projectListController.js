app.controller("ProjectsListCtrl", ['$scope', '$routeParams', function ($scope, $routeParams) {
    var id = $routeParams.id;
    var architPath = 'images/PORTFOLIO/PL/01. ARCHITEKTURA/';
    var smallArchitPath = 'images/PORTFOLIO/PL/02. MAŁA ARCHITEKTURA/';
    var urbanPath = 'images/PORTFOLIO/PL/03. URBANISTYKA/';
    var scultpurePath = 'images/PORTFOLIO/PL/06. RZEZBA/';
    var tilePath = 'tile/tile.jpg';
    var types = [
        {
            title: "ARCHITEKTURA",
            projects: [
                {
                    name: 'PIEKARNIA',
                    tilePath: architPath + 'PIEKARNIA/' + tilePath
                },
                {
                    name: 'ELDERLY CARE CENTER',
                    tilePath: architPath + 'ELDERLY CARE CENTER/' + tilePath
                },
                {
                    name: 'CAFE-FRAME',
                    tilePath: architPath + 'CAFE-FRAME/' + tilePath
                },
                {
                    name: 'ZESPÓŁ BUDYNKÓW WIELORODZINNYCH - RIVER&TERRACE',
                    tilePath: architPath + 'ZESPÓŁ BUDYNKÓW WIELORODZINNYCH - RIVER&TERRACE/' + tilePath
                },
                {
                    name: 'PRACOWNIA BIURA GRAFICZNEGO',
                    tilePath: architPath + 'PRACOWNIA BIURA GRAFICZNEGO/' + tilePath
                },
                {
                    name: 'SKATEPARK',
                    tilePath: architPath + 'SKATEPARK/' + tilePath
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
                },
                {
                    name: 'WEDDING',
                    tilePath: smallArchitPath + 'WEDDING/' + tilePath
                }]
        },
        {
            title: "URBANISTYKA",
            projects:[
                {
                    name: 'PRACA INŻYNIERSKA - CEGIELNIA',
                    tilePath: urbanPath + 'PRACA INŻYNIERSKA - CEGIELNIA/' + tilePath
                },
                {
                    name: 'TUREK',
                    tilePath: urbanPath + 'TUREK/' + tilePath
                },
                {
                    name: 'POZOSTAŁE',
                    tilePath: urbanPath + "POZOSTAŁE/" + tilePath
                }
            ]
        },
        {},
        {},
        {
            title: "RZEŹBA",
            projects:[
                {
                    name: 'KOLEKCJA KSIĄŻEK',
                    tilePath: scultpurePath + 'KOLEKCJA KSIĄŻEK/' + tilePath
                },
                {
                    name: 'POZOSTAŁE',
                    tilePath: scultpurePath + 'POZOSTAŁE/' + tilePath
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