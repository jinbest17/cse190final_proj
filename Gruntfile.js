var package = require('./package.json');

module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        copy: {
            main: {
                files: [
                    // {expand: true, src:['./_about/**'], dest: './build_grunt/_about'},
                    // {expand: true, src:['./_resources/**', '!./_resources/css/**','!./_resources/img/**'], dest: './build_grunt/_resources'},
                    // {expand: true, src:['./academics/**'], dest: './build_grunt/academics'},
                    // {expand: true, src:['./about/**'], dest: './build_grunt/about'},
                    // {expand: true, src:['./catalog/**'], dest: './build_grunt/catalog'},
                    // {expand: true, src:['./academics/**'], dest: './build_grunt/academics'},
                ]
            }
        },
        cssmin: {
            options : {
                report: "min"
            },
            my_target: {

                files: [{
                    expand: true,
                    cwd: './build_grunt/_resources/css',
                    src: '**/*.css',
                    dest: './build_grunt_resources/css',
                    ext: '.css'
                }]
            }
        }
    });


    // load configured tasks here
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.registerTask('build', ['copy', 'cssmin'])
};