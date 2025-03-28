module.exports = function(grunt) {
    grunt.initConfig({
        less: {
            dev: {
                files: {
                    'dev/styles/main.css': 'src/styles/main.less'
                }
            },
            dist: {
                options: {
                    compress: true
                },
                files: {
                    'dist/styles/main.min.css': 'src/styles/main.less'
                }
            }
        },
        uglify: {
            dist: {
                files: {
                    'dist/scripts/main.min.js': ['src/scripts/main.js']
                }
            }
        },
        copy: {
            html: {
                files: [
                    { src: 'src/index.html', dest: 'dist/index.html' },
                    { src: 'src/index.html', dest: 'dev/index.html' }
                ]
            }
        },
        watch: {
            scripts: {
                files: ['src/scripts/**/*.js'],
                tasks: ['uglify'],
                options: { spawn: false }
            },
            styles: {
                files: ['src/styles/**/*.less'],
                tasks: ['less'],
                options: { spawn: false }
            },
            html: {
                files: ['src/**/*.html'],
                tasks: ['copy'],
                options: { spawn: false }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['less', 'uglify', 'copy']);
};