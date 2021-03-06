module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/<%= pkg.name %>.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    },

    clean: {
      all: ['dest/*']
    },

    copy: {
      main: {
        files: [
          {expand: true, src: ['lib/.htaccess'], dest: 'dest', flatten: true},
          {expand: true, src: ['lib/bootstrap/bootstrap-3.1.1-dist/js/bootstrap.min.js'], dest: 'dest/js', flatten: true},
          {expand: true, src: ['lib/bootstrap/bootstrap-3.1.1-dist/css/bootstrap.min.css'], dest: 'dest/css', flatten: true},
          {expand: true, src: ['lib/angularjs/angular-1.3.15/*'], dest: 'dest/js', flatten: true},
          {expand: true, src: ['src/js/app.js'], dest: 'dest/js', flatten: true},
          {expand: true, src: ['src/css/*'], dest: 'dest/css', flatten: true},
          {expand: true, src: ['lib/img/*'], dest: 'dest/img', flatten: true},
          {expand: true, src: ['lib/font/*'], dest: 'dest/font', flatten: true},
          {expand: true, src: ['src/data/cities/cities.json'], dest: 'dest/data', flatten: true},
          {expand: true, src: ['src/data/party/party.json'], dest: 'dest/data', flatten: true},
          {expand: true, src: ['src/data/session_notes/*.json'], dest: 'dest/data', flatten: true},
          {expand: true, src: ['src/templates/*.html'], dest: 'dest', flatten: true},
          {expand: true, src: ['src/templates/partials/*.html'], dest: 'dest', flatten: true}
        ]
      }
    },

    'http-server': {
        'dev': {
            // the server root directory
            root: 'dest',

            port: 8888,
            // port: function() { return 8282; }

            host: "127.0.0.1",

            //cache: <sec>,
            showDir : true,
            autoIndex: true,

            // server default file extension
            ext: "html",

            // run in parallel with other tasks
            runInBackground: false
        }
    }

  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // load every plugin in package.json
//  grunt.loadNpmTasks('grunt-contrib-connect');

  // Load the Assemble.io plugin
  // grunt.loadNpmTasks('assemble');

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-http-server');

  // Default task(s).
  grunt.registerTask('build', ['clean', 'copy']);
  grunt.registerTask('test', ['build', 'http-server']);

  grunt.registerTask('default', ['build']);

};
