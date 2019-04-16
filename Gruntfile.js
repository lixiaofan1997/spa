/* global module: true */
module.exports = function(grunt){
  grunt.initConfig({
    eslint:{
      options:{
        configFile:'.eslintrc.json'
      },
      target:[
        './10-timer-button/main.js',
        './11-password-visual/main.js',
        './12-range/main.js',
        './13-progress/main.js',
        './31-echart/main.js',
        './32-map/index.html',
        './33-highlight/main.js',
        './34-excel/main.js',
        './41-timer-button/timer-button.js',
        './42-password-visual/main.js']
    },
    csslint:{
      options:{
        csslintrc:'.csslintrc'
      },
      src:['./00-template/layout.css','./10-timer-button/layout.css','./11-password-visual/layout.css','./12-range/layout.css','./13-progress/layout.css','./31-echart/layout.css','./32-map/layout.css','./33-highlight/layout.css','./34-excel/layout.css','./41-timer-button/timer-button.css','./42-password-visual/layout.css']
    },
    htmlhint:{
      options:{
        htmlhintrc:'.htmlhintrc',
      },
      src:['./00-template/index.html','./10-timer-button/index.html','./11-password-visual/index.html','./12-range/index.html','./13-progress/index.html','./31-echart/index.html','./32-map/index.html','./33-highlight/index.html','./34-excel/index.html','./41-timer-button/index.html','./42-password-visual/index.html']
    },
    htmlmin: {
      dist:{
        options: {
          collapseWhitespace: true,
          preserveLineBreaks: false                           
        },
        files: {
          'dist/00-template.html':'./00-template/index.html',
          'dist/10-timer-button.html':'./10-timer-button/index.html',
          'dist/11-password-visual.html':'./11-password-visual/index.html',         'dist/12-range.html':'./12-range/index.html',
          'dist/13-progress.html':'./13-progress/index.html',
          'dist/31-echart.html':'./31-echart/index.html',
          'dist/32-map.html':'./32-map/index.html',
          'dist/33-highlight.html':'./33-highlight/index.html',
          'dist/34-excel.html':'./34-excel/index.html',
          'dist/42-password-visual.html':'./42-password-visual/index.html',
          'dist/41-timer-button.html':'./41-timer-button/index.html'
         }                   
     }  
    },
    cssmin: {
      target:{
      files:{
        'dist/10-timer-button.css':'./10-timer-button/layout.css',
        'dist/11-password.css':'./11-password-visual/layout.css',                 'dist/12-range.css':'./12-range/layout.css',
        'dist/13-progress.css':'./13-progress/layout.css',
        'dist/31-echart.css':'./31-echart/layout.css',
        'dist/32-map.css':'./32-map/layout.css',
        'dist/33-highlight.css':'./33-highlight/layout.css',
        'dist/34-excel.css':'./34-excel/layout.css',
        'dist/41-timer-button.css':'./41-timer-button/timer-button.css', 
        'dist/42-password-visual.css':'./42-password-visual/layout.css',
      }
     }       
    },
    uglify: {
      release:{
        files: {
          'dist/10-timer-button.js':'./10-timer-button/main.js',
          'dist/11-password.js':'./11-password-visual/main.js',                    
          'dist/12-range.js':'./12-range/main.js',
          'dist/13-progress.js':'./13-progress/main.js',
          'dist/31-echart.js':'./31-echart/main.js',
          'dist/32-map.js':'./32-map/main.js',
          'dist/33-highlight.js':'./33-highlight/main.js',
          'dist/34-excel.js':'./34-excel/main.js' ,
          'dist/41-timer-button.js':'./41-timer-button/timer-button.js',
          'dist/42-password-visual.js':'./42-password-visual/main.js'  
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
