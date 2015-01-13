module ngFoundation.directives {
    //@NgDirective('col')
    class ColDirective implements ng.IDirective {
        template = '<div class="col" ng-transclude></div>';
        restrict = "E";
        transclude = false;
        replace = true;
    }
}