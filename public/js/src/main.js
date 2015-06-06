// Require.js allows us to configure shortcut alias
require.config({
	baseUrl: BASE_URL + 'js/' + JS_VERSION,
	paths: {
		// Libs
		text: ['//cdnjs.cloudflare.com/ajax/libs/require-text/2.0.5/text',
			'../libs/require/text'],
		touchswipe: ['//cdnjs.cloudflare.com/ajax/libs/jquery.touchswipe/1.5.1/jquery.touchswipe.min',
			'../libs/jquery/jquery-touchswipe.min'],

		// MyLibs
		ajaxqueue: '../libs/ajaxqueue',
		image: '../libs/image',
		string: '../libs/string',

		// Tools
		form_mem: 'tools/form_memorizer',
		comic_queue: 'tools/comic_queue',
		api: 'tools/api',
		tabs: 'tools/tabs',
		layout: 'tools/layout',
		
		// Views
		searchbar: 'views/widget/searchbar',
		pagebar: 'views/widget/pagebar',
		comment: 'views/widget/comment'
	}
});
requirejs.onError = function (err) {
	window.err('404 找不到這頁喔!');
};
require([
	'router',
	'comic_queue',
	'views/browse',
	'searchbar',
	'tabs', 'tools/utils', 'tools/image_cache', 'views/widget/comic_slot'
	], function (Router, ComicQueue, BrowseView, Searchbar) {
	// initialize searchbar
	Searchbar.init();

	// initialize comic queue
	window.comic_queue = ComicQueue();

    // Instantiate the router
    window.app_router = new Router;

    // Start Backbone history a neccesary step for bookmarkable URL's
    Backbone.history.start();

    // comic queue need browse utility...Q_Q
	window.__browse = window.__browse || BrowseView();
});