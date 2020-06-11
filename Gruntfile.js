var package = require('./package.json');

module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        clean: {
            build_folder: './build'
        },
        // copies resources to build folder
        copy: {
            main: {
                files: [
                    // {expand: true, src:['./_about/**'], dest: './build_grunt/_about'},
                    // {expand: true, src:['./_resources/**', '!./_resources/css/**','!./_resources/img/**'], dest: './build_grunt/_resources'},
                    // {expand: true, src:['./academics/**'], dest: './build_grunt/academics'},
                    // {expand: true, src:['./about/**'], dest: './build_grunt/about'},
                    // {expand: true, src:['./catalog/**'], dest: './build_grunt/catalog'},
                    // {expand: true, src:['./academics/**'], dest: './build_grunt/academics'},
                    {expand: true, src:['./**', '!./Gruntfile.js', '!.gitignore', '!package.json','package-lock.json','!./build/**',"!./node_modules/**"], dest: './build'}
                ]
            }
        },
        // run cssmin
        cssmin: {
            options : {
                report: "min"
            },
            my_target: {

                files: [{
                    expand: true,
                    cwd: './build/_resources/css',
                    src: '**/*.css',
                    dest: './build/_resources/css',
                    ext: '.css'
                }]
            }
        },
        // minified images, could be improved with static and higher image compression level
        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'build/_images/',
                    src: '**/*.{png,jpg,gif}',
                    dest: './build/_images/'
                },
                
                {
                    expand: true,
                    cwd: './build/_resources/img',
                    src: '**/*.{png,jpg,gif}',
                    dest: './build/_resources/img'  
                }]
            }
        }
    });


    // load configured tasks here
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.registerTask('build', ['clean', 'copy', 'cssmin', 'imagemin'])
};