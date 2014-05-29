var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", "../kurst/core/UIBase", "jquery"], function(require, exports, UIBase, $) {
    var App = (function (_super) {
        __extends(App, _super);
        function App() {
            _super.call(this);
            this.testString = 'Hello RequireJS';

            this.test(this.testString);

            var p = document.createElement('p');
            p.innerHTML = 'App initialised';

            document.body.appendChild(p);

            $(p).hide();
            $(p).fadeIn(2000);
        }
        return App;
    })(UIBase);

    
    return App;
});
