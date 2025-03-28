module.exports = function(grunt) {
    grunt.initConfig({
      less: {
        dev: {
          files: {
            "dev/styles/main.css": "src/styles/main.less"
          }
        },
        dist: {
          options: {
            compress: true
          },
          files: {
            "dist/styles/main.css": "src/styles/main.less"
          }
        }
      },
      uglify: {
        dist: {
          files: {
            "dist/scripts/main.js": ["src/scripts/main.js"]
          }
        }
      },
      copy: {
        dev: {
          files: [
            { src: "src/index.html", dest: "dev/index.html" },
            { src: "src/scripts/main.js", dest: "dev/scripts/main.js" }
          ]
        },
        dist: {
          files: [
            { src: "src/index.html", dest: "dist/index.html" }
          ]
        }
      },
      watch: {
        styles: {
          files: ["src/styles/**/*.less"],
          tasks: ["less"]
        },
        scripts: {
          files: ["src/scripts/**/*.js"],
          tasks: ["copy:dev"]
        },
        html: {
          files: ["src/*.html"],
          tasks: ["copy"]
        }
      }
    });
  
    grunt.loadNpmTasks("grunt-contrib-less");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-copy");
    grunt.loadNpmTasks("grunt-contrib-watch");
  
    grunt.registerTask("default", ["less:dist", "uglify:dist", "copy:dist"]);
    grunt.registerTask("dev", ["less:dev", "copy:dev", "watch"]);
  };