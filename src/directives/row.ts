module ngFoundation.directives {

	//@NgDirective('row')
	class RowDirective implements ng.IDirective {
		constructor($templateCache: ng.ITemplateCacheService) {

		}
		template = '<div class="row" ng-transclude></div>';
		restrict = "E";
		transclude = true;
		replace = true;

	}
} 