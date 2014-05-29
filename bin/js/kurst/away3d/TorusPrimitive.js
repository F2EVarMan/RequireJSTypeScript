define(["require", "exports"], function(require, exports) {
    var TorusPrimitive = (function () {
        function TorusPrimitive() {
            var _this = this;
            this.initView();

            this._raf = new away.utils.RequestAnimationFrame(this.render, this);
            this._raf.start();

            this.loadResources();
            window.onresize = function () {
                return _this.resize();
            };

            this.resize();
        }
        TorusPrimitive.prototype.initView = function () {
            this._view = new away.containers.View(new away.render.DefaultRenderer());
            this._view.backgroundColor = 0x000000;
        };

        TorusPrimitive.prototype.loadResources = function () {
            var _this = this;
            var urlRequest = new away.net.URLRequest("assets/dots.png");
            var imgLoader = new away.net.URLLoader();
            imgLoader.dataFormat = away.net.URLLoaderDataFormat.BLOB;

            imgLoader.addEventListener(away.events.Event.COMPLETE, function (event) {
                return _this.urlCompleteHandler(event);
            });
            imgLoader.load(urlRequest);
        };

        TorusPrimitive.prototype.urlCompleteHandler = function (event) {
            var _this = this;
            var imageLoader = event.target;
            this._image = away.parsers.ParserUtils.blobToImage(imageLoader.data);
            this._image.onload = function (event) {
                return _this.imageCompleteHandler(event);
            };
        };

        TorusPrimitive.prototype.initLights = function () {
            this._light = new away.lights.DirectionalLight();
            this._light.diffuse = .7;
            this._light.specular = 1;
            this._view.scene.addChild(this._light);
            this._lightPicker = new away.materials.StaticLightPicker([this._light]);
        };

        TorusPrimitive.prototype.initMaterial = function (image) {
            this._texture = new away.textures.ImageTexture(image, false);
            this._material = new away.materials.TextureMaterial(this._texture, true, true, false);
            this._material.lightPicker = this._lightPicker;
        };

        TorusPrimitive.prototype.initTorus = function () {
            this._torus = new away.prefabs.PrimitiveTorusPrefab(220, 80, 32, 16, false);
            this._mesh = this._torus.getNewObject();
            this._mesh.material = this._material;
            this._view.scene.addChild(this._mesh);
        };

        TorusPrimitive.prototype.imageCompleteHandler = function (e) {
            this.initLights();
            this.initMaterial(e.target);
            this.initTorus();
        };

        TorusPrimitive.prototype.render = function (dt) {
            if (typeof dt === "undefined") { dt = null; }
            if (this._mesh)
                this._mesh.rotationY += 1;

            this._view.render();
        };

        TorusPrimitive.prototype.resize = function () {
            this._view.y = 0;
            this._view.x = 0;
            this._view.width = window.innerWidth;
            this._view.height = window.innerHeight;
        };
        return TorusPrimitive;
    })();

    
    return TorusPrimitive;
});
