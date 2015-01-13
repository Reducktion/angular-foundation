module ngFoundation.directives {

	//@NgDirective('panel')
	class PanelDirective implements ng.IDirective {
        template = '<p class="panel" ng-transclude></p>';
		restrict = "E";
		transclude = true;
		replace = true;
	}
} 