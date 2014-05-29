/**
 * Application configuration declaration.
 */
/// <reference path="libs/require.d.ts" />

require.config({

    baseUrl: 'js/',

    paths: {
        //main libraries
		jquery: 'bower_components/jquery/dist/jquery',
		"awayjs-core.next": 'vendor/away/awayjs-core.next',
		"stagegl-context.next": 'vendor/away/stagegl-context.next',
		"stagegl-renderer.next": 'vendor/away/stagegl-renderer.next'
    },
    shim: {
        jquery: {
            exports: '$'
        },
		'stagegl-context.next': {
			deps: ['awayjs-core.next']
		},
		'stagegl-renderer.next': {
			deps: ['stagegl-context.next']
		}
    }
});
