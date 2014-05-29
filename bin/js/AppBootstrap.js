require([
    'tests/App',
    'jquery',
    'stagegl-context.next',
    'awayjs-core.next',
    'stagegl-renderer.next'
], function (App, $) {
    'use strict';

    $(document).ready(function () {
        console.log('ready');
        var app = new App();
    });
});
