app.controller('MainController', ['$anchorScroll', '$location', '$scope', function ($anchorScroll, $location, $scope) {
    $scope.types = [
        {class_id: 'fa fa-home fa-4x', name: 'ARCHITEKTURA', urlPart: ''},
        {class_id: 'fa fa-cube fa-4x', name: 'MAŁA ARCHITEKTURA', urlPart: ''},
        {class_id: 'fa fa-globe fa-4x', name: 'URBANISTYKA', urlPart: '/gallery'},
        {class_id: 'fa fa-scissors fa-4x', name: 'MAKIETY', urlPart: '/gallery'},
        {class_id: 'fa fa-pencil fa-4x', name: 'RYSUNKI', urlPart: '/gallery'},
        {class_id: 'fa fa-american-sign-language-interpreting fa-4x', name: 'RZEŹBA', urlPart: '/gallery'},
        {class_id: 'fa fa-desktop fa-4x', name: 'WIZUALIZACJE', urlPart: '/gallery'}
    ];
    $scope.references = [
        {path: "images/REFERENCJE/R PILCH.jpg"},
        {path: "images/REFERENCJE/ULTRA ARCHITECTS.jpg"}
    ];
    $scope.certifates = [
        {path: "images/CERTIFIKATY/3ds max.jpg"},
        {path: "images/CERTIFIKATY/AutoCad.jpg"}
    ];
    $scope.gotoAnchor = function(x) {
        if ($location.hash() !== x){
            $location.hash(x);
        }
        else {
            $anchorScroll();
        }
    };

    $(".dropdown-menu li a").click(function () {
        var text = $(this).text();
        $(this).parents(".dropdown").children(".dropdown-toggle").text(text);
        selected_class = $(this).text();
    });
}]);