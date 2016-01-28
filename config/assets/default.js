'use strict';

module.exports = {
	client: {
		lib: {
			css: [
				'modules/lib/fontawesome/css/font-awesome.css',
				'modules/lib/sweetalert/dist/sweetalert.css'
			],
			js: [
				'modules/lib/angular/angular.js',
				'modules/lib/angular-resource/angular-resource.js',
				'modules/lib/angular-animate/angular-animate.js',
				'modules/lib/angular-ui-router/release/angular-ui-router.js',
				'modules/lib/angular-ui-utils/ui-utils.js',
				'modules/lib/angular-bootstrap/ui-bootstrap-tpls.js',
				'modules/lib/angular-file-upload/angular-file-upload.js',
				'modules/lib/jquery/dist/jquery.js',
				'modules/lib/moment/min/moment.min.js',
				'modules/lib/moment-timezone/moment-timezone.js',
				'modules/ext/bro-uploader.js',
				'modules/lib/sweetalert/dist/sweetalert.min.js'
			],
			// tests: ['modules/lib/angular-mocks/angular-mocks.js']
		},
		css: [
			'css/*.css',
			'public/libs/angular-carousel/dist/angular-carousel.css'
		],
		less: [
			'modules/*/client/less/*.less'
		],
		sass: [
			'modules/core/client/scss/*.scss'
		],
		js: [
			'modules/*/client/*.js',
			'modules/*/client/**/*.js'
		],
		views: ['modules/*/client/views/**/*.html']
	},
	server: {
		allJS: ['gruntfile.js', 'server.js', 'config/**/*.js', 'modules/*/server/**/*.js'],
		models: 'modules/*/server/models/**/*.js',
		routes: ['modules/!(core)/server/routes/**/*.js', 'modules/server/routes/**/*.js'],
		sockets: 'modules/*/server/sockets/**/*.js',
		config: 'modules/*/server/config/*.js',
		policies: 'modules/*/server/policies/*.js',
		views: 'modules/*/server/views/*.html'
	}
};
