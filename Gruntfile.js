module.exports = function (grunt) {
   grunt.initConfig({
      sass: {
         dist: {
            style: {
               style: 'expanded',
               sourcemap: 'none'
            },

            // files: [{
            //    expand: true,
            //    cwd: assets+"/css/scss",
            //    src: '*.scss',
            //    dest: assets+"/css/",
            //    ext: '.css'
            // }]
            files: {
               'resources/styles/style.css': 'resources/styles/sass/style.scss'
            }
         }
      },

      // sass_globbing: {
      //    your_target: {
      //       files: {
      //          'wp-content/themes/clik/assets/css/scss/allImports.scss': assets + '/css/scss/*.scss',
      //       },
      //       options: {
      //          useSingleQuotes: false,
      //          signature: '// Hello, World!'
      //       }
      //    }
      // },

      // cssmin: {
      //    options: {
      //       mergeIntoShorthands: false,
      //       roundingPrecision: -1
      //    },
      //    target: {
      //       files: {
      //          'wp-content/themes/clik/assets/css/clikStyle.min.css': assets + "/css/allImports.css"
      //       }
      //    }
      // },

      postcss: {
        options: {
          map: true,
          processors: [
            require('autoprefixer')({browsers: ['last 10 versions']})
          ]
        },
        dist: {
          src: "resources/styles/style.css"
        }
      },
/*
      uglify: {
         my_target: {
            files: {
				src: 'wp-content/themes/clik/assets/js/*.js',
				dest: 'wp-content/themes/clik/assets/js/base.js',
            }
         }
      },*/

      watch: {
        /* scripts: {
           files: assets+"js/*.js",
           tasks: ['uglify'],
           options: {
             spawn: false,
           },
         },*/
         css: {
            files: "resources/styles/sass/*.scss",
            tasks: [ 'sass' , 'postcss'],
         }
       },
   });

   grunt.loadNpmTasks('grunt-contrib-sass');
   //grunt.loadNpmTasks('grunt-sass-globbing');
   //grunt.loadNpmTasks('grunt-contrib-cssmin');
   //grunt.loadNpmTasks('grunt-contrib-uglify');
   grunt.loadNpmTasks('grunt-contrib-watch');
   grunt.loadNpmTasks('grunt-postcss');

   grunt.registerTask('default', ['watch']);

};