/// <reference path="../../typings/typings.d.ts" />
module ngFoundation.directives {

	//@NgDirective('divider')
    class DividerDirective implements ng.IDirective {
        template = '<li class="divider"></li>';
		restrict = "E";
		transclude = false;
		replace = true;
	}
}