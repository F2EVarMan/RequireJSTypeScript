/**
 * Application configuration declaration.
 */
/// <reference path="libs/require.d.ts" />

require.config({

    baseUrl: 'js/',

    paths: {
        //main libraries
		jquery: 'bower_components/jquery/dist/jquery'
    },
    shim: {
        jquery: {
            exports: '$'
        }
    }
});