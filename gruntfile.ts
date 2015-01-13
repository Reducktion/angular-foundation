/// <reference path="typings/gruntjs/gruntjs.d.ts" />
/// <reference path="typings/grunt-ide-support.d.ts" />


import gruntIdeSupport = require("grunt-ide-support");
function init(grunt: IGrunt) {
    grunt.loadNpmTasks("grunt-bower-task");
    grunt.initConfig({
        bower: {
            install: {
                options: {
                    targetDir: "dist/lib",
                    layout: "byComponent",
                    cleanTargetDir: false
                }
            }
        },
    });

    gruntIdeSupport(grunt);

    grunt.registerTask("gruntfile", ["typescript:gruntfile"]);

    grunt.registerTask("ng", ["tsng:ng", "typescript:ng", "clean:ng"]);

    grunt.registerTask("monitor", ["watch:gruntfile", "watch:tsd"]);

    grunt.registerTask("default", ["bower:install"]);
    
}

export = init;