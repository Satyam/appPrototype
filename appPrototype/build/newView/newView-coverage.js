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
_yuitest_coverage["build/newView/newView.js"] = {
    lines: {},
    functions: {},
    coveredLines: 0,
    calledLines: 0,
    coveredFunctions: 0,
    calledFunctions: 0,
    path: "build/newView/newView.js",
    code: []
};
_yuitest_coverage["build/newView/newView.js"].code=["YUI.add('newView', function (Y, NAME) {","","var NewView = Y.Base.create('newView',Y.ZeView, [], {","                                template: \"Click Me NewView<button id='btn1' type='button'>Click Me NewView!</button><div class='innerContainer'></div>\",","                                events: {","                                    button: {","                                        click: function () {","                                            this.fire('swap', { which: 'AnotherNewView',","                                                                view: this});","                                        }","                                    }","                                },","                                _render:  function (container) {","                                    container.setHTML(this.template);","                                    var table = new Y.DataTable({","                                                                    columns: ['id', 'name','price','cost'],","                                                                    data: [","                                                                        { id: \"ga-3475\", name: \"gadget\",   price: \"$6.99\", cost: \"$5.99\" },","                                                                        { id: \"sp-9980\", name: \"sprocket\", price: \"$3.75\", cost: \"$3.25\" },","                                                                        { id: \"wi-0650\", name: \"widget\",   price: \"$4.25\", cost: \"$3.75\" }","                                                                    ]","                                                                });","                                    this.setSwapContainer(container.one('.innerContainer'),2);","                                    this.setSwapView(table,2);","                                    this._destroyOnExit.push(table);","                                }","                            });","","Y.NewView = NewView;","","}, '@VERSION@', {\"requires\": [\"zeView\", \"datatable\", \"contentSwapper\", \"autocomplete\", \"autocomplete-highlighters\"]});"];
_yuitest_coverage["build/newView/newView.js"].lines = {"1":0,"3":0,"8":0,"14":0,"15":0,"23":0,"24":0,"25":0,"29":0};
_yuitest_coverage["build/newView/newView.js"].functions = {"click:7":0,"_render:13":0,"(anonymous 1):1":0};
_yuitest_coverage["build/newView/newView.js"].coveredLines = 9;
_yuitest_coverage["build/newView/newView.js"].coveredFunctions = 3;
_yuitest_coverline("build/newView/newView.js", 1);
YUI.add('newView', function (Y, NAME) {

_yuitest_coverfunc("build/newView/newView.js", "(anonymous 1)", 1);
_yuitest_coverline("build/newView/newView.js", 3);
var NewView = Y.Base.create('newView',Y.ZeView, [], {
                                template: "Click Me NewView<button id='btn1' type='button'>Click Me NewView!</button><div class='innerContainer'></div>",
                                events: {
                                    button: {
                                        click: function () {
                                            _yuitest_coverfunc("build/newView/newView.js", "click", 7);
_yuitest_coverline("build/newView/newView.js", 8);
this.fire('swap', { which: 'AnotherNewView',
                                                                view: this});
                                        }
                                    }
                                },
                                _render:  function (container) {
                                    _yuitest_coverfunc("build/newView/newView.js", "_render", 13);
_yuitest_coverline("build/newView/newView.js", 14);
container.setHTML(this.template);
                                    _yuitest_coverline("build/newView/newView.js", 15);
var table = new Y.DataTable({
                                                                    columns: ['id', 'name','price','cost'],
                                                                    data: [
                                                                        { id: "ga-3475", name: "gadget",   price: "$6.99", cost: "$5.99" },
                                                                        { id: "sp-9980", name: "sprocket", price: "$3.75", cost: "$3.25" },
                                                                        { id: "wi-0650", name: "widget",   price: "$4.25", cost: "$3.75" }
                                                                    ]
                                                                });
                                    _yuitest_coverline("build/newView/newView.js", 23);
this.setSwapContainer(container.one('.innerContainer'),2);
                                    _yuitest_coverline("build/newView/newView.js", 24);
this.setSwapView(table,2);
                                    _yuitest_coverline("build/newView/newView.js", 25);
this._destroyOnExit.push(table);
                                }
                            });

_yuitest_coverline("build/newView/newView.js", 29);
Y.NewView = NewView;

}, '@VERSION@', {"requires": ["zeView", "datatable", "contentSwapper", "autocomplete", "autocomplete-highlighters"]});
