if (typeof _yuitest_coverage == "undefined"){
    _yuitest_coverage = {};
    _yuitest_coverline = function(src, line){
        var coverage = _yuitest_coverage[src];
        if (!coverage.lines[line]){
            coverage.calledLines++;
        }
        coverage.lines[line]++;
    };
    _yuitest_coverfunc = function(src, name, line){
        var coverage = _yuitest_coverage[src],
            funcId = name + ":" + line;
        if (!coverage.functions[funcId]){
            coverage.calledFunctions++;
        }
        coverage.functions[funcId]++;
    };
}
_yuitest_coverage["build/contentSwapper/contentSwapper.js"] = {
    lines: {},
    functions: {},
    coveredLines: 0,
    calledLines: 0,
    coveredFunctions: 0,
    calledFunctions: 0,
    path: "build/contentSwapper/contentSwapper.js",
    code: []
};
_yuitest_coverage["build/contentSwapper/contentSwapper.js"].code=["YUI.add('contentSwapper', function (Y, NAME) {","","var CS = function () {},","    isFn = Y.Lang.isFunction,","    each = Y.Array.each;","","","CS.prototype = {","    _swapContainer: null,","    _swapView: null,","    initializer: function () {","        this._swapContainer = [];","        this._swapView = [];","        this._eventHandles.push(","            this.after('destroy', this._beforeDestroy)","        );","    },","    setSwapContainer: function (container, index) {","        index = index || 0;","        var prev = this._swapContainer[index],","            view = this._swapView[index],","            children;","        this._swapContainer[index] = container;","        if (view) {","            if (container) {","                if (prev) {","                    children = prev.get('children');","                    children.each(function (child) {","                        container.appendChild(child);","                    });","                } else {","                    view.render(container);","                }","                view._set('container', container);","            } else {","                view.destroy();","            }","        }","        return this;","    },","    getSwapContainer: function (index) {","        return this._swapContainer[index || 0];","    },","    setSwapView: function (view, index) {","        index = index || 0;","        var prev = this._swapView[index],","            c = this._swapContainer[index];","        if (view === null || (isFn(view.render) && isFn(view.destroy))) {","            this._swapView[index] = view;","            if (prev) {","                prev.removeTarget(this);","                prev.destroy();","            }","            if (c && view) {","                view.render(c);","                view.addTarget(this);","            }","        }","        return this;","    },","    getSwapView: function (index) {","        return this._swapView[index || 0];","    },","    _beforeDestroy: function () {","        each(this._swapView, function (view) {","            view.destroy();","        });","    }","","};","Y.ContentSwapper = CS;","","}, '@VERSION@', {\"requires\": [\"view\", \"calendar\", \"base-build\", \"datatype-date\", \"event-outside\", \"event-focus\"]});"];
_yuitest_coverage["build/contentSwapper/contentSwapper.js"].lines = {"1":0,"3":0,"8":0,"12":0,"13":0,"14":0,"19":0,"20":0,"23":0,"24":0,"25":0,"26":0,"27":0,"28":0,"29":0,"32":0,"34":0,"36":0,"39":0,"42":0,"45":0,"46":0,"48":0,"49":0,"50":0,"51":0,"52":0,"54":0,"55":0,"56":0,"59":0,"62":0,"65":0,"66":0,"71":0};
_yuitest_coverage["build/contentSwapper/contentSwapper.js"].functions = {"initializer:11":0,"(anonymous 2):28":0,"setSwapContainer:18":0,"getSwapContainer:41":0,"setSwapView:44":0,"getSwapView:61":0,"(anonymous 3):65":0,"_beforeDestroy:64":0,"(anonymous 1):1":0};
_yuitest_coverage["build/contentSwapper/contentSwapper.js"].coveredLines = 35;
_yuitest_coverage["build/contentSwapper/contentSwapper.js"].coveredFunctions = 9;
_yuitest_coverline("build/contentSwapper/contentSwapper.js", 1);
YUI.add('contentSwapper', function (Y, NAME) {

_yuitest_coverfunc("build/contentSwapper/contentSwapper.js", "(anonymous 1)", 1);
_yuitest_coverline("build/contentSwapper/contentSwapper.js", 3);
var CS = function () {},
    isFn = Y.Lang.isFunction,
    each = Y.Array.each;


_yuitest_coverline("build/contentSwapper/contentSwapper.js", 8);
CS.prototype = {
    _swapContainer: null,
    _swapView: null,
    initializer: function () {
        _yuitest_coverfunc("build/contentSwapper/contentSwapper.js", "initializer", 11);
_yuitest_coverline("build/contentSwapper/contentSwapper.js", 12);
this._swapContainer = [];
        _yuitest_coverline("build/contentSwapper/contentSwapper.js", 13);
this._swapView = [];
        _yuitest_coverline("build/contentSwapper/contentSwapper.js", 14);
this._eventHandles.push(
            this.after('destroy', this._beforeDestroy)
        );
    },
    setSwapContainer: function (container, index) {
        _yuitest_coverfunc("build/contentSwapper/contentSwapper.js", "setSwapContainer", 18);
_yuitest_coverline("build/contentSwapper/contentSwapper.js", 19);
index = index || 0;
        _yuitest_coverline("build/contentSwapper/contentSwapper.js", 20);
var prev = this._swapContainer[index],
            view = this._swapView[index],
            children;
        _yuitest_coverline("build/contentSwapper/contentSwapper.js", 23);
this._swapContainer[index] = container;
        _yuitest_coverline("build/contentSwapper/contentSwapper.js", 24);
if (view) {
            _yuitest_coverline("build/contentSwapper/contentSwapper.js", 25);
if (container) {
                _yuitest_coverline("build/contentSwapper/contentSwapper.js", 26);
if (prev) {
                    _yuitest_coverline("build/contentSwapper/contentSwapper.js", 27);
children = prev.get('children');
                    _yuitest_coverline("build/contentSwapper/contentSwapper.js", 28);
children.each(function (child) {
                        _yuitest_coverfunc("build/contentSwapper/contentSwapper.js", "(anonymous 2)", 28);
_yuitest_coverline("build/contentSwapper/contentSwapper.js", 29);
container.appendChild(child);
                    });
                } else {
                    _yuitest_coverline("build/contentSwapper/contentSwapper.js", 32);
view.render(container);
                }
                _yuitest_coverline("build/contentSwapper/contentSwapper.js", 34);
view._set('container', container);
            } else {
                _yuitest_coverline("build/contentSwapper/contentSwapper.js", 36);
view.destroy();
            }
        }
        _yuitest_coverline("build/contentSwapper/contentSwapper.js", 39);
return this;
    },
    getSwapContainer: function (index) {
        _yuitest_coverfunc("build/contentSwapper/contentSwapper.js", "getSwapContainer", 41);
_yuitest_coverline("build/contentSwapper/contentSwapper.js", 42);
return this._swapContainer[index || 0];
    },
    setSwapView: function (view, index) {
        _yuitest_coverfunc("build/contentSwapper/contentSwapper.js", "setSwapView", 44);
_yuitest_coverline("build/contentSwapper/contentSwapper.js", 45);
index = index || 0;
        _yuitest_coverline("build/contentSwapper/contentSwapper.js", 46);
var prev = this._swapView[index],
            c = this._swapContainer[index];
        _yuitest_coverline("build/contentSwapper/contentSwapper.js", 48);
if (view === null || (isFn(view.render) && isFn(view.destroy))) {
            _yuitest_coverline("build/contentSwapper/contentSwapper.js", 49);
this._swapView[index] = view;
            _yuitest_coverline("build/contentSwapper/contentSwapper.js", 50);
if (prev) {
                _yuitest_coverline("build/contentSwapper/contentSwapper.js", 51);
prev.removeTarget(this);
                _yuitest_coverline("build/contentSwapper/contentSwapper.js", 52);
prev.destroy();
            }
            _yuitest_coverline("build/contentSwapper/contentSwapper.js", 54);
if (c && view) {
                _yuitest_coverline("build/contentSwapper/contentSwapper.js", 55);
view.render(c);
                _yuitest_coverline("build/contentSwapper/contentSwapper.js", 56);
view.addTarget(this);
            }
        }
        _yuitest_coverline("build/contentSwapper/contentSwapper.js", 59);
return this;
    },
    getSwapView: function (index) {
        _yuitest_coverfunc("build/contentSwapper/contentSwapper.js", "getSwapView", 61);
_yuitest_coverline("build/contentSwapper/contentSwapper.js", 62);
return this._swapView[index || 0];
    },
    _beforeDestroy: function () {
        _yuitest_coverfunc("build/contentSwapper/contentSwapper.js", "_beforeDestroy", 64);
_yuitest_coverline("build/contentSwapper/contentSwapper.js", 65);
each(this._swapView, function (view) {
            _yuitest_coverfunc("build/contentSwapper/contentSwapper.js", "(anonymous 3)", 65);
_yuitest_coverline("build/contentSwapper/contentSwapper.js", 66);
view.destroy();
        });
    }

};
_yuitest_coverline("build/contentSwapper/contentSwapper.js", 71);
Y.ContentSwapper = CS;

}, '@VERSION@', {"requires": ["view", "calendar", "base-build", "datatype-date", "event-outside", "event-focus"]});
