/**
 * Application configuration declaration.
 */
/// <reference path="libs/require.d.ts" />

require.config({

    baseUrl: 'js/',

    paths: {
        //main libraries
		jquery: 'bower_components/jquery/dist/jquery'

        //shortcut paths
        //templates: '../templates',
        //data: '../data',

        //require plugins
        //text: '../vendor/require/text',
        //tpl: '../vendor/require/tpl',
        //json: '../vendor/require/json',
        //hbs: '../vendor/require-handlebars-plugin/hbs'
    },
    shim: {
        jquery: {
            exports: '$'
        }
    }
});