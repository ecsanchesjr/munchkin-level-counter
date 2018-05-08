module.exports = function (grunt) {
   grunt.initConfig({
      sass: {
         dist: {
            style: {
               style: 'expanded',
               sourcemap: 'none'
            },
            files: {
              'resources/styles/style.css': 'resources/styles/sass/style.scss'
            }
         }
      },
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

      watch: {
         css: {
            files: "resources/styles/sass/*.scss",
            tasks: [ 'sass' , 'postcss'],
         }
       },
   });

   grunt.loadNpmTasks('grunt-contrib-sass');
   grunt.loadNpmTasks('grunt-contrib-watch');
   grunt.loadNpmTasks('grunt-postcss');

   grunt.registerTask('default', ['watch']);

};