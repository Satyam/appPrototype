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
_yuitest_coverage["build/clearView/clearView.js"] = {
    lines: {},
    functions: {},
    coveredLines: 0,
    calledLines: 0,
    coveredFunctions: 0,
    calledFunctions: 0,
    path: "build/clearView/clearView.js",
    code: []
};
_yuitest_coverage["build/clearView/clearView.js"].code=["YUI.add('clearView', function (Y, NAME) {","","var ClearView = Y.Base.create('clearView',Y.ZeView, [], {","                                  template: \"<p><b>CLEARED ALL THE DOM OBJECTS AND EVENTS :)</p>\",","                                  _render:  function (container) {","                                      container.setHTML(this.template);","                                  }","                              });","","Y.ClearView = ClearView;","","}, '@VERSION@', {\"requires\": [\"zeView\", \"datatable\", \"contentSwapper\", \"autocomplete\", \"autocomplete-highlighters\"]});"];
_yuitest_coverage["build/clearView/clearView.js"].lines = {"1":0,"3":0,"6":0,"10":0};
_yuitest_coverage["build/clearView/clearView.js"].functions = {"_render:5":0,"(anonymous 1):1":0};
_yuitest_coverage["build/clearView/clearView.js"].coveredLines = 4;
_yuitest_coverage["build/clearView/clearView.js"].coveredFunctions = 2;
_yuitest_coverline("build/clearView/clearView.js", 1);
YUI.add('clearView', function (Y, NAME) {

_yuitest_coverfunc("build/clearView/clearView.js", "(anonymous 1)", 1);
_yuitest_coverline("build/clearView/clearView.js", 3);
var ClearView = Y.Base.create('clearView',Y.ZeView, [], {
                                  template: "<p><b>CLEARED ALL THE DOM OBJECTS AND EVENTS :)</p>",
                                  _render:  function (container) {
                                      _yuitest_coverfunc("build/clearView/clearView.js", "_render", 5);
_yuitest_coverline("build/clearView/clearView.js", 6);
container.setHTML(this.template);
                                  }
                              });

_yuitest_coverline("build/clearView/clearView.js", 10);
Y.ClearView = ClearView;

}, '@VERSION@', {"requires": ["zeView", "datatable", "contentSwapper", "autocomplete", "autocomplete-highlighters"]});
