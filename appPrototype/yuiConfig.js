/*global YUI_config:true */
YUI_config = {
	// filter:'raw',
	// combine:false,
        base: 'yui/',
	groups: {
		js: {
			base: 'build',
			modules: {
				'zeView': {
					path: '/zeView/zeView.js',
					requires: ["view", "contentSwapper", "calendar", "base-build", "datatype-date", "event-outside", "event-focus"]
				},
				'contentSwapper': {
					path: '/contentSwapper/contentSwapper.js',
					requires: ["view", "calendar", "base-build", "datatype-date", "event-outside", "event-focus"]
				}
			}
		}
	}
};
