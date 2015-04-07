module.exports = function(grunt) {

 require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),


    // watch
    watch: {
      css: {
        files: '**/*.scss',
        tasks: ['sass'],
        options: {
          livereload: true,
        },
      },
    },
    // Lint Spaces in code
    lintspaces: {
      all: {
        src: [
          '*.html'
        ],
        options: {
          newline: true,
          newlineMaximum: 2,
          trailingspaces: true,
          indentationGuess: true,
          editorconfig: '.editorconfig',
          ignores: [
            'html-comments',
            'js-comments'
          ],
          showTypes: true,
          showCodes: true
        }
      }
      },
      // Compile sass
      sass: {
        dist: {
          options: {
            style: 'expanded'
          },
          files: {
            'css/style.css' : ["scss/style.scss"]
          }
        }
      },
      // autoprefix
      autoprefixer: {
        options: {
          browsers: ["last 4 version"]
        },
        style: {
          src: "css/style.css"
        }
      },
      //combine media queris
      cmq: {
        style: {
          files: {
            "css/style.css":["css/style.css"]
          }
        }
      },
      //cssmin
      cssmin: {
        style: {
          files: {
            "css/css.min.css":["css/style.css"]
          }
        }
      },
      // image min
    imagemin: {
      images: {
        options: {
          optimizationLevel: 3
        },
        files: [{
          expand: true,
          src:["img/*.{png,jpg,gif,svg}"]
          }]
      }
    }
  });

  grunt.registerTask('default', [
    'watch',
    "sass",
    "autoprefixer",
    "cmq",
    "cssmin",
    "imagemin"
    ]);
};
