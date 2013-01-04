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
_yuitest_coverage["build/zeView/zeView.js"] = {
    lines: {},
    functions: {},
    coveredLines: 0,
    calledLines: 0,
    coveredFunctions: 0,
    calledFunctions: 0,
    path: "build/zeView/zeView.js",
    code: []
};
_yuitest_coverage["build/zeView/zeView.js"].code=["YUI.add('zeView', function (Y, NAME) {","","var each = Y.Array.each,","     CONT = 'container';","","Y.ZeView = Y.Base.create(","    NAME,","    Y.View,","    [Y.ContentSwapper,Y.View.NodeMap],","    {","        _eventHandles: null,","        _destroyOnExit: null,","","        initializer: function (){","            this._eventHandles = [];","            this._destroyOnExit = [];","        },","        destructor: function () {","            each(this._eventHandles,function(h) {","                     h.detach();","                 });","            each(this._destroyOnExit,function(h) {","                     h.destroy();","                 });","            var c = this.get(CONT);","            if (c) {","                c.setHTML('');","            }","        },","        render: function (container) {","            container = Y.one(container);","            if (container) {","                this.set(CONT, container);","            } else {","                container = this.get(CONT);","            }","            if (container) {","                this._render(container);","            }","            return this;","        },","        attachEvents: function() {","            var ev = {};","             each(this._classes, function (c) {","                 if(c.prototype.events) {","                     Y.mix(ev,c.prototype.events);","                 }","             });","            return Y.ZeView.superclass.attachEvents.call(this,ev);","        },","        _getContainer: function (value) {","            return value;","        }","    }",");","","}, '@VERSION@', {","    \"requires\": [","        \"view\",","        \"contentSwapper\",","        \"calendar\",","        \"base-build\",","        \"datatype-date\",","        \"event-outside\",","        \"event-focus\",","        \"view-node-map\"","    ]","});"];
_yuitest_coverage["build/zeView/zeView.js"].lines = {"1":0,"3":0,"6":0,"15":0,"16":0,"19":0,"20":0,"22":0,"23":0,"25":0,"26":0,"27":0,"31":0,"32":0,"33":0,"35":0,"37":0,"38":0,"40":0,"43":0,"44":0,"45":0,"46":0,"49":0,"52":0};
_yuitest_coverage["build/zeView/zeView.js"].functions = {"initializer:14":0,"(anonymous 2):19":0,"(anonymous 3):22":0,"destructor:18":0,"render:30":0,"(anonymous 4):44":0,"attachEvents:42":0,"_getContainer:51":0,"(anonymous 1):1":0};
_yuitest_coverage["build/zeView/zeView.js"].coveredLines = 25;
_yuitest_coverage["build/zeView/zeView.js"].coveredFunctions = 9;
_yuitest_coverline("build/zeView/zeView.js", 1);
YUI.add('zeView', function (Y, NAME) {

_yuitest_coverfunc("build/zeView/zeView.js", "(anonymous 1)", 1);
_yuitest_coverline("build/zeView/zeView.js", 3);
var each = Y.Array.each,
     CONT = 'container';

_yuitest_coverline("build/zeView/zeView.js", 6);
Y.ZeView = Y.Base.create(
    NAME,
    Y.View,
    [Y.ContentSwapper,Y.View.NodeMap],
    {
        _eventHandles: null,
        _destroyOnExit: null,

        initializer: function (){
            _yuitest_coverfunc("build/zeView/zeView.js", "initializer", 14);
_yuitest_coverline("build/zeView/zeView.js", 15);
this._eventHandles = [];
            _yuitest_coverline("build/zeView/zeView.js", 16);
this._destroyOnExit = [];
        },
        destructor: function () {
            _yuitest_coverfunc("build/zeView/zeView.js", "destructor", 18);
_yuitest_coverline("build/zeView/zeView.js", 19);
each(this._eventHandles,function(h) {
                     _yuitest_coverfunc("build/zeView/zeView.js", "(anonymous 2)", 19);
_yuitest_coverline("build/zeView/zeView.js", 20);
h.detach();
                 });
            _yuitest_coverline("build/zeView/zeView.js", 22);
each(this._destroyOnExit,function(h) {
                     _yuitest_coverfunc("build/zeView/zeView.js", "(anonymous 3)", 22);
_yuitest_coverline("build/zeView/zeView.js", 23);
h.destroy();
                 });
            _yuitest_coverline("build/zeView/zeView.js", 25);
var c = this.get(CONT);
            _yuitest_coverline("build/zeView/zeView.js", 26);
if (c) {
                _yuitest_coverline("build/zeView/zeView.js", 27);
c.setHTML('');
            }
        },
        render: function (container) {
            _yuitest_coverfunc("build/zeView/zeView.js", "render", 30);
_yuitest_coverline("build/zeView/zeView.js", 31);
container = Y.one(container);
            _yuitest_coverline("build/zeView/zeView.js", 32);
if (container) {
                _yuitest_coverline("build/zeView/zeView.js", 33);
this.set(CONT, container);
            } else {
                _yuitest_coverline("build/zeView/zeView.js", 35);
container = this.get(CONT);
            }
            _yuitest_coverline("build/zeView/zeView.js", 37);
if (container) {
                _yuitest_coverline("build/zeView/zeView.js", 38);
this._render(container);
            }
            _yuitest_coverline("build/zeView/zeView.js", 40);
return this;
        },
        attachEvents: function() {
            _yuitest_coverfunc("build/zeView/zeView.js", "attachEvents", 42);
_yuitest_coverline("build/zeView/zeView.js", 43);
var ev = {};
             _yuitest_coverline("build/zeView/zeView.js", 44);
each(this._classes, function (c) {
                 _yuitest_coverfunc("build/zeView/zeView.js", "(anonymous 4)", 44);
_yuitest_coverline("build/zeView/zeView.js", 45);
if(c.prototype.events) {
                     _yuitest_coverline("build/zeView/zeView.js", 46);
Y.mix(ev,c.prototype.events);
                 }
             });
            _yuitest_coverline("build/zeView/zeView.js", 49);
return Y.ZeView.superclass.attachEvents.call(this,ev);
        },
        _getContainer: function (value) {
            _yuitest_coverfunc("build/zeView/zeView.js", "_getContainer", 51);
_yuitest_coverline("build/zeView/zeView.js", 52);
return value;
        }
    }
);

}, '@VERSION@', {
    "requires": [
        "view",
        "contentSwapper",
        "calendar",
        "base-build",
        "datatype-date",
        "event-outside",
        "event-focus",
        "view-node-map"
    ]
});
