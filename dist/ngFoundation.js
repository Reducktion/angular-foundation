var ngFoundation;
(function (ngFoundation) {
    var directives;
    (function (directives) {
        angular.module("ngFoundation.directives", []);
    })(directives = ngFoundation.directives || (ngFoundation.directives = {}));
})(ngFoundation || (ngFoundation = {}));
/// <reference path="..\ngFoundation.directives.ng.ts" />
var ngFoundation;
(function (ngFoundation) {
    var directives;
    (function (directives) {
        //@NgDirective('col')
        var ColDirective = (function () {
            function ColDirective() {
                this.template = '<div class="col" ng-transclude></div>';
                this.restrict = "E";
                this.transclude = false;
                this.replace = true;
                for (var m in this) {
                    if (this[m].bind) {
                        this[m] = this[m].bind(this);
                    }
                }
            }
            return ColDirective;
        })();
        angular.module("ngFoundation.directives").directive("col", [
            function () {
                return new ColDirective();
            }
        ]);
    })(directives = ngFoundation.directives || (ngFoundation.directives = {}));
})(ngFoundation || (ngFoundation = {}));
/// <reference path="..\ngFoundation.directives.ng.ts" />
/// <reference path="../../typings/typings.d.ts" />
var ngFoundation;
(function (ngFoundation) {
    var directives;
    (function (directives) {
        //@NgDirective('divider')
        var DividerDirective = (function () {
            function DividerDirective() {
                this.template = '<li class="divider"></li>';
                this.restrict = "E";
                this.transclude = false;
                this.replace = true;
                for (var m in this) {
                    if (this[m].bind) {
                        this[m] = this[m].bind(this);
                    }
                }
            }
            return DividerDirective;
        })();
        angular.module("ngFoundation.directives").directive("divider", [
            function () {
                return new DividerDirective();
            }
        ]);
    })(directives = ngFoundation.directives || (ngFoundation.directives = {}));
})(ngFoundation || (ngFoundation = {}));
/// <reference path="..\ngFoundation.directives.ng.ts" />
var ngFoundation;
(function (ngFoundation) {
    var directives;
    (function (directives) {
        //@NgDirective('panel')
        var PanelDirective = (function () {
            function PanelDirective() {
                this.template = '<p class="panel" ng-transclude></p>';
                this.restrict = "E";
                this.transclude = true;
                this.replace = true;
                for (var m in this) {
                    if (this[m].bind) {
                        this[m] = this[m].bind(this);
                    }
                }
            }
            return PanelDirective;
        })();
        angular.module("ngFoundation.directives").directive("panel", [
            function () {
                return new PanelDirective();
            }
        ]);
    })(directives = ngFoundation.directives || (ngFoundation.directives = {}));
})(ngFoundation || (ngFoundation = {}));
/// <reference path="..\ngFoundation.directives.ng.ts" />
var ngFoundation;
(function (ngFoundation) {
    var directives;
    (function (directives) {
        //@NgDirective('row')
        var RowDirective = (function () {
            function RowDirective($templateCache) {
                this.template = '<div class="row" ng-transclude></div>';
                this.restrict = "E";
                this.transclude = true;
                this.replace = true;
                for (var m in this) {
                    if (this[m].bind) {
                        this[m] = this[m].bind(this);
                    }
                }
            }
            return RowDirective;
        })();
        angular.module("ngFoundation.directives").directive("row", [
            "$templateCache",
            function (a) {
                return new RowDirective(a);
            }
        ]);
    })(directives = ngFoundation.directives || (ngFoundation.directives = {}));
})(ngFoundation || (ngFoundation = {}));
/// <reference path="..\ngFoundation.directives.ng.ts" />
var ngFoundation;
(function (ngFoundation) {
    var directives;
    (function (directives) {
        //@NgDirective('topBar')
        var TopBarDirective = (function () {
            function TopBarDirective() {
                this.template = '<nav class="top-bar" data-topbar role="navigation" ng-transclude></nav>';
                this.restrict = "E";
                this.transclude = true;
                this.replace = true;
                for (var m in this) {
                    if (this[m].bind) {
                        this[m] = this[m].bind(this);
                    }
                }
            }
            return TopBarDirective;
        })();
        angular.module("ngFoundation.directives").directive("topBar", [
            function () {
                return new TopBarDirective();
            }
        ]);
    })(directives = ngFoundation.directives || (ngFoundation.directives = {}));
})(ngFoundation || (ngFoundation = {}));
/// <reference path="..\ngFoundation.directives.ng.ts" />
var ngFoundation;
(function (ngFoundation) {
    var directives;
    (function (directives) {
        //@NgDirective('topBarSection')
        var TopBarSectionDirective = (function () {
            function TopBarSectionDirective() {
                this.template = '<section class="top-bar-section" ng-transclude></section>';
                this.restrict = "E";
                this.transclude = true;
                this.replace = true;
                for (var m in this) {
                    if (this[m].bind) {
                        this[m] = this[m].bind(this);
                    }
                }
            }
            return TopBarSectionDirective;
        })();
        angular.module("ngFoundation.directives").directive("topBarSection", [
            function () {
                return new TopBarSectionDirective();
            }
        ]);
    })(directives = ngFoundation.directives || (ngFoundation.directives = {}));
})(ngFoundation || (ngFoundation = {}));
