module ngFoundation.directives {

	//@NgDirective('topBar')
	class TopBarDirective implements ng.IDirective {
        template = '<nav class="top-bar" data-topbar role="navigation" ng-transclude></nav>';
		restrict = "E";
		transclude = true;
		replace = true;
	}
} 