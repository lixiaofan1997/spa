/* global module: true */
module.exports = function(grunt){
  grunt.initConfig({
    eslint:{
      options:{
        configFile:'.eslintrc.json'
      },
      target:['./10-timer-button/main.js','./11-password-visual/main.js','./12-range/main.js','./13-progress/main.js']
    },
    csslint:{
      options:{
        csslintrc:'.csslintrc'
      },
      src:['./10-timer-button/layout.css','./11-password-visual/layout.css','./12-range/layout.css','./13-progress/layout.css']
    },
    htmlhint:{
      options:{
        htmlhintrc:'.htmlhintrc',
      },
      src:['./10-timer-button/index.html','./11-password-visual/index.html','./12-range/index.html','./13-progress/index.html']
    },
    htmlmin: {
      dist:{
        options: {
          collapseWhitespace: true,
          preserveLineBreaks: false                           
        },
        files: {
          'dist/10-timer-button.html':'./10-timer-button/index.html',
          'dist/11-password-visual.html':'./11-password-visual/index.html',         'dist/12-range.html':'./12-range/index.html',
          'dist/13-progress.html':'./13-progress/index.html'
       }                   
     }  
    },
    cssmin: {
      target:{
      files:{
        'dist/10-timer-button.css':'./10-timer-button/layout.css',
        'dist/11-password.css':'./11-password-visual/layout.css',                 'dist/12-range.css':'./12-range/layout.css',
        'dist/13-progress.css':'./13-progress/layout.css'
      }
     }       
    },
    uglify: {
      release:{
        files: {
          'dist/10-timer-button.js':'./10-timer-button/main.js',
          'dist/11-password.js':'./11-password-visual/main.js',                    
          'dist/12-range.js':'./12-range/main.js',
          'dist/13-progress.js':'./13-progress/main.js'   
        },
      }        
    }                
  
  });

  grunt.loadNpmTasks('grunt-contrib-csslint');
  grunt.loadNpmTasks('grunt-htmlhint');
  grunt.loadNpmTasks('grunt-eslint');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.registerTask('default', ['htmlhint', 'csslint', 'eslint','uglify','cssmin', 'htmlmin']);
};
