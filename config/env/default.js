'use strict';

module.exports = {
	app: {
		title: '',
		description: 'Your Video Editing HERO',
		keywords: 'gopro, selfiestick',
	},
	port: process.env.PORT || 3000,
	metaserver: process.env.METASERVER || 'http://go.bropro.video:3001',
	templateEngine: 'swig',
	sessionSecret: '',
	sessionCollection: 'sessions'
};
