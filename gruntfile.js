'use strict';

/**
 * Module dependencies.
 */
var _ = require('lodash'),
	defaultAssets = require('./config/assets/default');
	// testAssets = require('./config/assets/test');

module.exports = function (grunt) {
	// Project Configuration
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		env: {
			// test: {
			// 	NODE_ENV: 'test'
			// },
			dev: {
				NODE_ENV: 'development'
			},
			prod: {
				NODE_ENV: 'production'
			}
		},
		watch: {
			serverViews: {
				files: defaultAssets.server.views,
				options: {
					livereload: true
				}
			},
			serverJS: {
				files: defaultAssets.server.allJS,
				options: {
					livereload: true
				}
			},
			clientViews: {
				files: defaultAssets.client.views,
				options: {
					livereload: true
				}
			},
			clientJS: {
				files: defaultAssets.client.js,
				options: {
					livereload: true
				}
			},
			clientCSS: {
				files: defaultAssets.client.css,
				options: {
					livereload: true
				}
			},
			clientSCSS: {
				files: defaultAssets.client.sass,
				tasks: ['sass'],
				options: {
					livereload: true
				}
			},
			clientLESS: {
				files: defaultAssets.client.less,
				options: {
					livereload: true
				}
			}
		},
		nodemon: {
			dev: {
				script: 'server.js',
				options: {
					nodeArgs: ['--debug'],
					ext: 'js,html',
					watch: _.union(defaultAssets.server.views, defaultAssets.server.allJS, defaultAssets.server.config)
				}
			}
		},
		concurrent: {
			default: ['nodemon', 'watch'],
			debug: ['nodemon', 'watch', 'node-inspector'],
			options: {
				logConcurrentOutput: true
			}
		},
		jshint: {
			all: {
				src: _.union(defaultAssets.server.allJS, defaultAssets.client.js),
				options: {
					jshintrc: true,
					node: true,
					mocha: true,
					jasmine: true
				}
			}
		},
		csslint: {
			options: {
				csslintrc: '.csslintrc'
			},
			all: {
				src: defaultAssets.client.css
			}
		},
		ngAnnotate: {
			production: {
				files: {
					'': defaultAssets.client.js
				}
			}
		},
		uglify: {
			production: {
				options: {
					mangle: false
				},
				files: {
					'': ''
				}
			}
		},
		cssmin: {
			combine: {
				files: {
					'': defaultAssets.client.css
				}
			}
		},
		sass: {
			dist: {
				files: [{
					expand: true,
					src: defaultAssets.client.sass,
					dest: 'public',
					ext: '.css',
					rename: function(base, src) {
						return  src.replace('/scss/', '/css/');
					}
				}]
			}
		},
		less: {
			dist: {
				files: [{
					expand: true,
					src: defaultAssets.client.less,
					ext: '.css',
					rename: function(base, src) {
						return  src.replace('/less/', '/css/');
					}
				}]
			}
		},
		'node-inspector': {
			custom: {
				options: {
					'web-port': 1337,
					'web-host': 'localhost',
					'debug-port': 5858,
					'save-live-edit': true,
					'no-preload': true,
					'stack-trace-limit': 50,
					'hidden': []
				}
			}
		},
	});

	// Load NPM tasks 
	require('load-grunt-tasks')(grunt);

	// Making grunt default to force in order not to break the project.
	grunt.option('force', true);

	// Connect to the MongoDB instance and load the models
	grunt.task.registerTask('mongoose', 'Task that connects to the MongoDB instance and loads the application models.', function() {
		// Get the callback
		var done = this.async();

		// Use mongoose configuration
		var mongoose = require('./config/lib/mongoose.js');

		// Connect to database
		mongoose.connect(function(db) {
			done();
		});
	});



	// Lint CSS and JavaScript files.
	grunt.registerTask('lint', ['sass', 'less', 'jshint', 'csslint']);

	// // Lint project files and minify them into two production files.
	grunt.registerTask('build', ['env:dev', 'lint', 'ngAnnotate', 'uglify', 'cssmin']);
	grunt.registerTask('default', ['env:dev', 'lint', 'concurrent:default']);

};
