module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    connect: {
      server: {
        options: {
          port: 9001,
          base: 'src',
          // keepalive: true
          open: true,
        }
      }
    },
    uglify: {
      options: {
        mangle: false,
        sourceMap : true,
        compress : {
          dead_code : true,
          unused : true,
          join_vars : true
        }
      },
      libs: {
        files: {
          'src/js/compiled/libs.js': ['src/js/libs/jquery.js','src/js/libs/**/*.js']
        }
      },
      pages: {
        files : [{
          expand: true,
          cwd: 'src/js/src',
          src: '**/*.js',
          dest: 'src/js/compiled'
        }]
      }
   },
    sass: {
      dist: {
        options: {
          style: 'expanded',
          trace: true
        },
        files: {
          'src/css/compiled.css': 'src/scss/main.scss'
        }
      }
    },
    watch: {
          css: {
            options: {
              livereload: true,
            },
            files: 'src/scss/**/*.scss',
            tasks: ['sass'],
          },
          html: {
            options: {
              livereload: true,
            },
            files: 'src/*.html'
          },
          jsLibs : {
            options: {
              livereload: true,
            },
            files: ['src/js/libs/**/*.js','src/js/src/*.js'] ,
            tasks : ['uglify:libs']
          },
          jsPages : {
            options: {
              livereload: true,
            },
            files: ['src/js/src/**/*.js'] ,
            tasks : ['uglify:pages']
          },
          gruntfile : {
            options : {
              livereload: true
            },
            files : ['Gruntfile.js']
          }
        },  
  });
  // grunt.loadNpmTasks('grunt-contrib-watch');
  // grunt.loadNpmTasks('grunt-contrib-connect');
  // grunt.loadNpmTasks('grunt-contrib-sass');
  // grunt.registerTask('convert', ['sass','connect','watch']);
  grunt.registerTask('start-dev', ['sass','connect','watch','uglify']);
};