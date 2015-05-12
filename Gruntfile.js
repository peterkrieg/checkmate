module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    uglify: {
      options: {
        manage: false
      },
      my_target: {
        src : ['js/bootstrap/**/*.js', 'js/main.js'],
        dest : 'js/checkmate.min.js'
        
      }
    },


    cssmin: {
      my_target: {
        files: [{
          expand: true,
          cwd: 'css/testgruntcss',
          src: ['*.css', '!*.min.css'],
          dest: 'css/testgruntcss',
          ext: '.min.css'
        }]
      }
    }





    // concat: {
    //   src: ['js/bootstrap.js', 'js/main.js'],
    //   dest: 'js/checkmate.js',
    // },
    // uglify: {
    //   options: {
    //     banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
    //   },
    //   build: {
    //     src: 'src/<%= pkg.name %>.js',
    //     dest: 'build/<%= pkg.name %>.min.js'
    //   }
    // }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');


  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task(s).
  grunt.registerTask('default', ['uglify']);

};