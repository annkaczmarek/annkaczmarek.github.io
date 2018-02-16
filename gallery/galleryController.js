app.controller('GalleryCtrl', ['$scope', '$routeParams', function ($scope, $routeParams) {
    var type_id = $routeParams.id;
    var project_id = $routeParams.project_id;

    var paths =
        {
            relativePath: 'images/PORTFOLIO/PL/',
            dirs: [
                {
                    dir:"01. ARCHITEKTURA",
                    subdirs:["PIEKARNIA", "ELDERLY CARE CENTER", "CAFE-FRAME", "ZESPÓŁ BUDYNKÓW WIELORODZINNYCH - RIVER&TERRACE",
                        "PRACOWNIA BIURA GRAFICZNEGO", "SKATEPARK"]
                },
                {
                    dir:"02. MAŁA ARCHITEKTURA",
                    subdirs:["PROJEKT REWITALIZACJI PRZESTRZENI MIEJSKIEJ", "FORMA WYSTAWIENNICZA", "WEDDING"]
                },
                {
                    dir:"03. URBANISTYKA",
                    subdirs:["PRACA INŻYNIERSKA - CEGIELNIA", "TUREK", "POZOSTAŁE"]
                },
                {dir:"04. MAKIETY"},
                {dir:"05. RYSUNKI"},
                {
                    dir:"06. RZEZBA",
                    subdirs:["KOLEKCJA KSIĄŻEK", "POZOSTAŁE"]
                },
                {dir:"07. WIZUALIZACJE"}]
        };

    var images = [
        [[
            {name: '01', title: 'wizualizacja'},
            {name: '02', title: 'widok na kompleks'},
            {name: '03', title: 'wnętrze kantyny'},
            {name: '04', title: 'projekt zagospodarowania terenu'},
            {name: '05', title: 'rzuty'},
            {name: '06', title: 'przekroje i elewacje'}
        ], [
            {name: '01', title: ''},
            {name: '02', title: ''},
            {name: '03', title: ''},
            {name: '04', title: ''},
            {name: '05', title: ''},
            {name: '06', title: ''},
            {name: '07', title: ''},
            {name: '08', title: ''},
            {name: '09', title: ''},
            {name: '10', title: ''},
            {name: '11', title: ''},
            {name: '12', title: ''}
        ], [
            {name: '01', title: 'plansza'},
            {name: '02', title: 'makieta'},
            {name: '03', title: 'projekt zagospodarowania terenu'},
            {name: '04', title: 'szkic'},
            {name: '05', title: 'rzuty i przekroje'},
            {name: '06', title: 'przekrój'},
            {name: '07', title: 'elewacje'}
        ], [
            {name: '01', title: 'plansza'},
            {name: '02', title: 'projekt zagospodarowania terenu'},
            {name: '03', title: '1. makieta'},
            {name: '04', title: 'aksonometrie'},
            {name: '05', title: 'rzuty i przekroje'},
            {name: '06', title: 'aksonometrie mieszkań'},
            {name: '07', title: 'elewacje'},
            {name: '08', title: 'wizualizacje'}
        ], [
            {name: '01', title: 'wizualizacja'},
            {name: '02', title: 'wizualizacja'},
            {name: '03', title: 'projekt zagospodarowania terenu'},
            {name: '04', title: 'rzut piwnicy'},
            {name: '05', title: 'rzut parteru'},
            {name: '06', title: 'rzut piętra'},
            {name: '07', title: 'rzut 2. piętra'},
            {name: '08', title: 'rzut 3. piętra'},
            {name: '09', title: 'rzut dachu'},
            {name: '10', title: 'przekrój A-A'},
            {name: '11', title: 'przekroje B-B'},
            {name: '12', title: 'elewacje zewnętrzne'},
            {name: '13', title: 'elewacje wewnętrzne'}
        ], [
            {name: '01', title: 'plansze'},
            {name: '02', title: 'wizualizacja'},
            {name: '03', title: 'wizualizacja'},
            {name: '04', title: 'wizualizacja'},
            {name: '05', title: 'projekt zagospodarowania terenu'},
            {name: '06', title: 'rzuty'},
            {name: '07', title: 'przekroje i detale'},
            {name: '08', title: 'elewacje'}
        ]],
        [[
            {name: '01', title: 'plansza'},
            {name: '02', title: 'projekt zagospodarowania terenu'},
            {name: '03', title: ''},
            {name: '04', title: 'mała architektura'}
        ], [
            {name: '01', title: 'plansza'},
            {name: '02', title: 'wizualizacja'},
            {name: '03', title: 'wizualizacja'},
            {name: '04', title: 'detal'},
            {name: '05', title: 'rzut i przekrój'},
            {name: '06', title: 'elewacje'},
            {name: '07', title: 'kłady'}
        ],[
            {name: '01', title: 'plansza'},
            {name: '02', title: 'pawilony'},
            {name: '03', title: 'rzuty i przekroje'},
            {name: '04', title: 'makieta modułu'},
            {name: '05', title: 'makieta modułu'}
        ]],
        [[
            {name: '01', title: 'wizualizacja'},
            {name: '02', title: 'wizualizacja'},
            {name: '03', title: 'wizualizacja'},
            {name: '04', title: '1. makieta'},
            {name: '05', title: '2. makieta'},
            {name: '06', title: 'szkic'},
            {name: '07', title: 'projekt zagospodarowania terenu'},
            {name: '08', title: 'rzut parkingu podziemnego'},
            {name: '09', title: 'rzuty budynków'},
            {name: '10', title: 'rzuty dachów'},
            {name: '11', title: 'przekroje budynków'},
            {name: '12', title: 'elewacje'},
            {name: '13', title: 'elewacje'},
            {name: '14', title: 'detal'},
            {name: '15', title: 'rzut techniczny'},
            {name: '16', title: 'rzut techniczny'},
            {name: '17', title: 'przekrój techniczny'}
        ],[
            {name: '01', title: 'plansze'},
            {name: '02', title: 'rzut'},
            {name: '03', title: 'aksonometrie'},
            {name: '04', title: 'detale'},
            {name: '05', title: 'widok na kolorowy plac'},
            {name: '06', title: 'widok na plac zabaw'},
            {name: '07', title: 'widok na deptak'},
            {name: '08', title: 'widok na obiekt usługowy i targowiska'},
            {name: '09', title: 'wnętrze targowiska'}
        ],[
            {name: '01', title: 'projekt zagospodarowania terenu w miejscowości Skierniewice'},
            {name: '02', title: 'projekt rewitalizacji przestrzeni miejskiej w Poznaniu'},
            {name: '03', title: 'projekt osiedla Lusowo'}
        ]],
        [[
            {name: '01', title: ''},
            {name: '02', title: ''},
            {name: '03', title: ''},
            {name: '04', title: ''},
            {name: '05', title: ''},
            {name: '06', title: ''},
            {name: '07', title: ''}
        ]],
        [[
            {name: '01', title: ''},
            {name: '02', title: ''},
            {name: '03', title: ''},
            {name: '04', title: ''},
            {name: '05', title: ''},
            {name: '06', title: ''},
            {name: '07', title: ''}
        ]],
        [[
            {name: '01', title: ''},
            {name: '02', title: ''},
            {name: '03', title: ''},
            {name: '04', title: ''},
            {name: '05', title: ''},
            {name: '06', title: ''},
            {name: '07', title: ''},
            {name: '08', title: ''},
            {name: '09', title: ''},
            {name: '10', title: ''},
            {name: '11', title: ''},
            {name: '12', title: ''}

        ],[
            {name: '01', title: 'forma przemysłowa inspirowana kodem kulturowym'},
            {name: '02', title: 'interaktywny obiekton dla niewidomych'}
        ]],
        [[
            {name: '01', title: ''},
            {name: '02', title: ''},
            {name: '03', title: ''},
            {name: '04', title: ''},
            {name: '05', title: ''},
            {name: '06', title: ''},
            {name: '07', title: ''},
            {name: '08', title: ''},
            {name: '09', title: ''}
        ]]
    ];

    for(var i = 0 ; i < images.length ; i++)
    {
        for(var j = 0 ; j < images[i].length ; j++)
        {
            for(var k = 0 ; k < images[i][j].length ; k++)
            {
                var dir = paths.dirs[i];
                images[i][j][k].name += ".jpg";
                images[i][j][k].path = paths.relativePath + dir.dir;

                if(dir.subdirs !== undefined)
                {
                    images[i][j][k].path += '/' + dir.subdirs[j];
                }
            }
        }
    }

    var title;

    if(project_id !== undefined)
    {
        $scope.images = images[type_id][project_id];
        title = paths.dirs[type_id].subdirs[project_id];
    }
    else
    {
        $scope.images = images[type_id][0];
        title = paths.dirs[type_id].dir;
    }

    var array = title.split(".");

    if (array.length > 1)
    {
        $scope.title = array[1];
    }
    else {
        $scope.title = title;
    }

    $scope.currentImg = function (n) {
        currentImg(n);
    };
    $scope.changeVisibility = function (n) {
        if(n==1){
            var x = document.getElementsByClassName("slideshow");
            $(x[0]).fadeIn("slow");
        }
    };
    $scope.changeOpacity = function (n) {
        if(n==1){
            var dots = document.getElementsByClassName("miniature");
            dots[0].style.opacity = "1";
        }
    }
}]);

var slideIndex = 1;
var timeout;

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("slideshow");
    var dots = document.getElementsByClassName("miniature");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length}
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].style.opacity = "0.25";
    }
    if(x.length > 0) {
        $(x[slideIndex - 1]).fadeIn("slow");
    }
    if(dots.length > 0) {
        dots[slideIndex - 1].style.opacity = "1";
    }

    clearTimeout(timeout);
    timeout = setTimeout(carousel, 10000);
}

function carousel()
{
    var i;
    var x = document.getElementsByClassName("slideshow");
    var dots = document.getElementsByClassName("miniature");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1}
    if(x.length > 0){
        $(x[slideIndex-1]).fadeIn("slow");
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].style.opacity = "0.25";
    }
    if(dots.length > 0) {
        dots[slideIndex - 1].style.opacity = "1";
    }
    timeout = setTimeout(carousel, 15000);
}

carousel();

function currentImg(n) {
    showDivs(slideIndex = n);
}
