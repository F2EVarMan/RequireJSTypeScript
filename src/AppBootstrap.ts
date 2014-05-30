///<reference path="libs/require.d.ts" />
///<reference path="libs/jquery.d.ts" />
///<reference path='App.ts'/>
///<reference path='config.ts'/>


/**
 * Main entry point for RequireJS
 */

require(
	[
		'App',
		'jquery',
		'stagegl-context.next',
		'awayjs-core.next',
		'stagegl-renderer.next'
	],
	(App, $) => {
		'use strict';

		$(document).ready(function ( )
		{
			var app = new App();
		});
	}
);
