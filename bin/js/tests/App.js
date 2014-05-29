var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", "../kurst/core/UIBase", "jquery", "../kurst/away3d/TorusPrimitive"], function(require, exports, UIBase, $, TorusPrimitive) {
    var App = (function (_super) {
        __extends(App, _super);
        function App() {
            _super.call(this);
            this.testString = 'Hello RequireJS';

            document.body.style.overflow = 'hidden';

            this.torusPrimitive = new TorusPrimitive();
            this.test(this.testString);

            var p = document.createElement('p');
            p.innerHTML = 'App initialised';
            p.style.color = '#FFFFFF';
            p.style.zIndex = '10';
            p.style.position = 'absolute';
            p.style.left = '30px';
            p.style.top = '30px';
            p.style.fontFamily = "Arial, Courier";

            document.body.appendChild(p);

            $(p).hide();
            $(p).fadeIn(2000);
        }
        return App;
    })(UIBase);

    
    return App;
});
