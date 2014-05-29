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
		'jquery'
	],
	(App, $) => {
		'use strict';

		$(document).ready(function ()
		{
			var app = new App();

		});
	}
);