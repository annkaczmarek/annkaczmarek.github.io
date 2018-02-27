app.controller("ProjectsListCtrl", ['$scope', '$routeParams', function ($scope, $routeParams) {
    var id = $routeParams.id,
        archiPath = 'images/PORTFOLIO/PL/01. ARCHITEKTURA/',
        pavilionPath = 'images/PORTFOLIO/PL/02. PAWILONY/',
        urbanPath = 'images/PORTFOLIO/PL/03. URBANISTYKA/',
        otherPath = 'images/PORTFOLIO/PL/06. INNE/',
        tilePath = 'tile/tile.jpg', elems, firstColCount;

    var types = [
        {
            title: "ARCHITEKTURA",
            projects: [
                {
                    name: 'ELDERLY CARE CENTER',
                    tilePath: archiPath + 'ELDERLY CARE CENTER/' + tilePath
                },
                {
                    name: 'ZESPÓŁ BUDYNKÓW WIELORODZINNYCH - RIVER&TERRACE',
                    tilePath: archiPath + 'ZESPÓŁ BUDYNKÓW WIELORODZINNYCH - RIVER&TERRACE/' + tilePath
                },
                {
                    name: 'CAFE-FRAME',
                    tilePath: archiPath + 'CAFE-FRAME/' + tilePath
                },
                {
                    name: 'PIEKARNIA',
                    tilePath: archiPath + 'PIEKARNIA/' + tilePath
                },
                {
                    name: 'SKATEPARK',
                    tilePath: archiPath + 'SKATEPARK/' + tilePath
                },
                {
                    name: 'PRACOWNIA BIURA GRAFICZNEGO',
                    tilePath: archiPath + 'PRACOWNIA BIURA GRAFICZNEGO/' + tilePath
                }]
        },
        {
            title: "PAWILONY",
            projects:[
                {
                    name: 'FORMA WYSTAWIENNICZA',
                    tilePath: pavilionPath + 'FORMA WYSTAWIENNICZA/' + tilePath
                },
                {
                    name: 'WEDDING',
                    tilePath: pavilionPath + 'WEDDING/' + tilePath
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
                    name: 'PROJEKT ZAGOSPODAROWANIA PRZESTRZENNEGO W SKIERNIEWICACH',
                    tilePath: urbanPath + "PROJEKT ZAGOSPODAROWANIA PRZESTRZENNEGO W SKIERNIEWICACH/" + tilePath
                },
                {
                    name: 'DEPTAK - OSIEDLE GÓRNICZE W TURKU',
                    tilePath: urbanPath + 'DEPTAK - OSIEDLE GÓRNICZE W TURKU/' + tilePath
                },
                {
                    name: 'PROJEKT REWITALIZACJI PRZESTRZENI MIEJSKIEJ',
                    tilePath: urbanPath + 'PROJEKT REWITALIZACJI PRZESTRZENI MIEJSKIEJ/' + tilePath
                }
            ]
        },
        {},
        {},
        {
            title: "INNE",
            projects:[
                {
                    name: 'KOLEKCJA KSIĄŻEK',
                    tilePath: otherPath + 'KOLEKCJA KSIĄŻEK/' + tilePath
                },
                {
                    name: 'THE COLOUR ROLLER',
                    tilePath: otherPath + 'THE COLOUR ROLLER/' + tilePath
                },
                {
                    name: 'RZEŹBA Z GLINY',
                    tilePath: otherPath + 'RZEŹBA Z GLINY/' + tilePath
                },
                {
                    name: '"GOOD BOY"',
                    tilePath: otherPath + '"GOOD BOY"/' + tilePath
                }]
        }
    ];
    $scope.id = id;
    elems = types[id].projects;

    for(var i = 0 ; i < elems.length ; i++)
    {
        elems[i].counter = i;
    }

    firstColCount = Math.ceil(elems.length/2);
    $scope.column1 = elems.slice(0, firstColCount);
    $scope.column2 = elems.slice(firstColCount);
    $scope.title = types[id].title;
}]);