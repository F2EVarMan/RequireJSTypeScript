///<reference path="libs/require.d.ts" />
///<reference path="libs/jquery.d.ts" />
///<reference path='tests/App.ts'/>
///<reference path='config.ts'/>


/**
 * Main entry point for RequireJS
 */
require(
	[
		'tests/App',
		'jquery',
		'stagegl-context.next',
		'awayjs-core.next',
		'stagegl-renderer.next'
	],
	(App, $) => {
		'use strict';

		$(document).ready(function ()
		{
			console.log('ready');
			var app = new App();

		});
	}
);