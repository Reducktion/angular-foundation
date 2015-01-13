/// <reference path="gruntjs/gruntjs.d.ts" />

declare module "grunt-ide-support" { 
    var gruntidesupport: {
        (grunt: IGrunt): any;
    };

    export = gruntidesupport;
}