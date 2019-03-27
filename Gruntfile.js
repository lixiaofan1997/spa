/* global module: true */
module.exports = function (grunt) {
  grunt.initConfig({
    eslint: {
      options: {
        configFile: '.eslintrc.json'
      },
      target: ['*.js']
    },
    csslint: {
      options: {
        csslintrc: '.csslintrc'
      },
      src: '*.css'
    },
    htmlhint: {
      options: {
        htmlhintrc: '.htmlhintrc'
      },
      src: '*.html'
    },
    mocha: {
      test:{
        src:['./test/index.html']      
      },   
      options:{
        run:true,
        reporter:'Spec'                        
      }                       
    },
    htmlmin: {
      options: {
        collapseWhitespace: true,
        preserveLineBreaks: false                        
      },
      files: {
        src: './index.html',
        dest: './dist/indexmin.html'
      }
    },
    cssmin: {
      './dist/layoutmin.css': './layout.css'            
    },
    uglify: {
      release:{
        files: {
          './dist/bundle.min.js': './main.js',
                                    
        }             
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-csslint');
  grunt.loadNpmTasks('grunt-htmlhint');
  grunt.loadNpmTasks('grunt-eslint');
  grunt.loadNpmTasks('grunt-mocha');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  
  grunt.registerTask('default', ['htmlhint', 'csslint', 'eslint','htmlmin','cssmin','uglify']);
  grunt.registerTask('test', ['mocha']);
};
