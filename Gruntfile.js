var package = require('./package.json');

module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        cssmin: {
            options : {
                report: "min"
            },
            my_target: {

                files: [{
                    expand: true,
                    cwd: './_resources/css',
                    src: '**/*.css',
                    dest: './build',
                    ext: '.min.css'
                }]
            }
        }
    });


    // load configured tasks here
    grunt.loadNpmTasks('grunt-contrib-cssmin');
};