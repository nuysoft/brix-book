function load(url, cb) {
	$('<script>').appendTo('body')
		.on('load', cb)
		.attr('src', url)
}

require(["gitbook", "jquery"], function(gitbook, $) {
	console.log(gitbook)
	console.log($)
	gitbook.events
		.bind('start', function() {})
		.bind('finish', function() {})
		.bind('page', function() {})
		.bind('page.change', function() {
			$('iframe').each(function(index, item) {
				$(item).on('load', function() {
					setInterval(function() {
						$(item).height(
							$(item.contentDocument.body).outerHeight()
						)
					}, 1000)
				})
			})

			var base = 'http://g-assets.daily.taobao.net/thx/brix-release/1.0.0-alpha.2/'
			load(base + 'requirejs/require.js', function() {
				require = requirejs
					// load(base + 'css.js')
				load(base + 'config.js', function() {
					require(['brix/loader'], function(Loader) {
						Loader.boot()
					})
				})
			})

		})
	$(function() {
		// load('http://mo.local:4242/bower_components/requirejs/require.js', function() {
		// 	require = requirejs
		// 	load('http://mo.local:4242/config.js', function() {
		// 		load('http://mo.local:4242/css.js', function() {
		// 			require(['brix/loader'], function(Loader) {
		// 				Loader.boot()
		// 			})
		// 		})
		// 	})
		// })
	})
})