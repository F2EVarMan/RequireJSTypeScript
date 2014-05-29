var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", "../events/EventDispatcher"], function(require, exports, EventDispatcher) {
    var UIBase = (function (_super) {
        __extends(UIBase, _super);
        function UIBase() {
            _super.call(this);
            this._animationLoopFlag = false;
        }
        UIBase.prototype.test = function (str) {
            console.log(str);
        };

        UIBase.prototype.isLoopActive = function () {
            return this._animationLoopFlag;
        };

        UIBase.prototype.skin = function () {
            return this._skin;
        };

        UIBase.prototype.setSkin = function (s) {
            this._skin = s;
            this.skinSet();
        };

        UIBase.prototype.setSize = function (w, h) {
            this._width = w;
            this._height = h;
            this.resize();
        };

        UIBase.prototype.height = function () {
            return this._height;
        };

        UIBase.prototype.width = function () {
            return this._width;
        };

        UIBase.prototype.skinSet = function () {
        };

        UIBase.prototype.resize = function () {
        };

        UIBase.prototype.getId = function (id) {
            return document.getElementById(id);
        };

        UIBase.prototype.getClass = function (className) {
            return document.getElementsByClassName(className);
        };

        UIBase.prototype.getElementsByClassNme = function (theClass) {
            var classElms = new Array();
            var node = document;
            var i = 0;

            if (node.getElementsByClassName) {
                var tempEls = node.getElementsByClassName(theClass);

                for (i = 0; i < tempEls.length; i++)
                    classElms.push(tempEls[i]);
            } else {
                var getclass = new RegExp('\\b' + theClass + '\\b');
                var elems = node.getElementsByTagName('*');

                for (i = 0; i < elems.length; i++) {
                    var classes = elems[i]['className'];

                    if (getclass.test(classes))
                        classElms.push(elems[i]);
                }
            }
            return classElms;
        };

        UIBase.prototype.animationLoop = function () {
        };

        UIBase.prototype.startLoop = function () {
            var _this = this;
            this._animationLoopFlag = true;

            var updateFunc = function () {
                _this.animationLoop();

                if (_this._animationLoopFlag)
                    requestAnimationFrame(updateFunc);
            };

            requestAnimationFrame(updateFunc);
        };

        UIBase.prototype.stopLoop = function () {
            this._animationLoopFlag = false;
        };
        return UIBase;
    })(EventDispatcher);

    
    return UIBase;
});
