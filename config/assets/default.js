'use strict';

module.exports = {
	client: {
		lib: {
			css: [

			],
			js: [
				'public/lib/angular/angular.js',
				'public/lib/angular-resource/angular-resource.js',
				'public/lib/angular-animate/angular-animate.js',
				'public/lib/angular-ui-router/release/angular-ui-router.js',
				'public/lib/angular-ui-utils/ui-utils.js',
				'public/lib/angular-bootstrap/ui-bootstrap-tpls.js',
				'public/lib/angular-file-upload/angular-file-upload.js',
				'public/lib/jquery/dist/jquery.js',
				'public/lib/moment/min/moment.min.js',
				'public/lib/moment-timezone/moment-timezone.js',
				'public/ext/bro-uploader.js',
				'public/lib/sweetalert/dist/sweetalert.min.js'
			],

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
