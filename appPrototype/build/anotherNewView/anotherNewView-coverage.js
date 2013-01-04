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
_yuitest_coverage["build/anotherNewView/anotherNewView.js"] = {
    lines: {},
    functions: {},
    coveredLines: 0,
    calledLines: 0,
    coveredFunctions: 0,
    calledFunctions: 0,
    path: "build/anotherNewView/anotherNewView.js",
    code: []
};
_yuitest_coverage["build/anotherNewView/anotherNewView.js"].code=["YUI.add('anotherNewView', function (Y, NAME) {","","var AnotherNewView = Y.Base.create('anothernewView',Y.ZeView, [], {","                                       template: 'Click Me AnotherNewView <button id=\"btn2\" type=\"button\">Click Me AnotherNewView!</button>'","                                           + '<div class=\"acFields\">'","                                           + '<br>Autocomplete Field 1: <input id=\"ac-input1\" type=\"text\">'","                                           + '&nbsp;Autocomplete Field 2: <input id=\"ac-input2\" type=\"text\">'","                                           + '<br>Autocomplete Field 3: <input id=\"ac-input3\" type=\"text\">'","                                           + '&nbsp;Autocomplete Field 4: <input id=\"ac-input4\" type=\"text\">'","                                           + '</div>',","                                       events: {","                                           button: {","                                               click: function () {","                                                   this.fire('swap', {which: 'NewView',","                                                                      view: this});","                                               }","                                           }","                                       },","                                       _clickMe2: function(ev){","                                           console.log(\"asd\");","                                       },","                                       _render:  function (container) {","                                           container.setHTML(this.template);","                                           var ac1 = new Y.AutoComplete({","                                                                            inputNode: '#ac-input1',","                                                                            render   : true,","                                                                            resultHighlighter: 'phraseMatch',","                                                                            source: 'select * from search.suggest where query=\"{query}\"',","                                                                            yqlEnv: 'http://pieisgood.org/yql/tables.env'","                                                                        }),","                                           ac2 = new Y.AutoComplete({","                                                                        inputNode: '#ac-input2',","                                                                        render   : true,","                                                                        resultHighlighter: 'phraseMatch',","                                                                        source: 'select * from search.suggest where query=\"{query}\"',","                                                                        yqlEnv: 'http://pieisgood.org/yql/tables.env'","                                                                    }),","                                           ac3 = new Y.AutoComplete({","                                                                        inputNode: '#ac-input3',","                                                                        render   : true,","                                                                        resultHighlighter: 'phraseMatch',","                                                                        source: 'select * from search.suggest where query=\"{query}\"',","                                                                        yqlEnv: 'http://pieisgood.org/yql/tables.env'","                                                                    }),","                                           ac4 = new Y.AutoComplete({","                                                                        inputNode: '#ac-input4',","                                                                        render   : true,","                                                                        resultHighlighter: 'phraseMatch',","                                                                        source: 'select * from search.suggest where query=\"{query}\"',","                                                                        yqlEnv: 'http://pieisgood.org/yql/tables.env'","                                                                    });","","                                           this._destroyOnExit.push(ac1,ac2,ac3,ac4);","                                       }","                                   });","","Y.AnotherNewView = AnotherNewView;","","}, '@VERSION@', {\"requires\": [\"zeView\", \"datatable\", \"contentSwapper\", \"autocomplete\", \"autocomplete-highlighters\"]});"];
_yuitest_coverage["build/anotherNewView/anotherNewView.js"].lines = {"1":0,"3":0,"14":0,"20":0,"23":0,"24":0,"53":0,"57":0};
_yuitest_coverage["build/anotherNewView/anotherNewView.js"].functions = {"click:13":0,"_clickMe2:19":0,"_render:22":0,"(anonymous 1):1":0};
_yuitest_coverage["build/anotherNewView/anotherNewView.js"].coveredLines = 8;
_yuitest_coverage["build/anotherNewView/anotherNewView.js"].coveredFunctions = 4;
_yuitest_coverline("build/anotherNewView/anotherNewView.js", 1);
YUI.add('anotherNewView', function (Y, NAME) {

_yuitest_coverfunc("build/anotherNewView/anotherNewView.js", "(anonymous 1)", 1);
_yuitest_coverline("build/anotherNewView/anotherNewView.js", 3);
var AnotherNewView = Y.Base.create('anothernewView',Y.ZeView, [], {
                                       template: 'Click Me AnotherNewView <button id="btn2" type="button">Click Me AnotherNewView!</button>'
                                           + '<div class="acFields">'
                                           + '<br>Autocomplete Field 1: <input id="ac-input1" type="text">'
                                           + '&nbsp;Autocomplete Field 2: <input id="ac-input2" type="text">'
                                           + '<br>Autocomplete Field 3: <input id="ac-input3" type="text">'
                                           + '&nbsp;Autocomplete Field 4: <input id="ac-input4" type="text">'
                                           + '</div>',
                                       events: {
                                           button: {
                                               click: function () {
                                                   _yuitest_coverfunc("build/anotherNewView/anotherNewView.js", "click", 13);
_yuitest_coverline("build/anotherNewView/anotherNewView.js", 14);
this.fire('swap', {which: 'NewView',
                                                                      view: this});
                                               }
                                           }
                                       },
                                       _clickMe2: function(ev){
                                           _yuitest_coverfunc("build/anotherNewView/anotherNewView.js", "_clickMe2", 19);
_yuitest_coverline("build/anotherNewView/anotherNewView.js", 20);
console.log("asd");
                                       },
                                       _render:  function (container) {
                                           _yuitest_coverfunc("build/anotherNewView/anotherNewView.js", "_render", 22);
_yuitest_coverline("build/anotherNewView/anotherNewView.js", 23);
container.setHTML(this.template);
                                           _yuitest_coverline("build/anotherNewView/anotherNewView.js", 24);
var ac1 = new Y.AutoComplete({
                                                                            inputNode: '#ac-input1',
                                                                            render   : true,
                                                                            resultHighlighter: 'phraseMatch',
                                                                            source: 'select * from search.suggest where query="{query}"',
                                                                            yqlEnv: 'http://pieisgood.org/yql/tables.env'
                                                                        }),
                                           ac2 = new Y.AutoComplete({
                                                                        inputNode: '#ac-input2',
                                                                        render   : true,
                                                                        resultHighlighter: 'phraseMatch',
                                                                        source: 'select * from search.suggest where query="{query}"',
                                                                        yqlEnv: 'http://pieisgood.org/yql/tables.env'
                                                                    }),
                                           ac3 = new Y.AutoComplete({
                                                                        inputNode: '#ac-input3',
                                                                        render   : true,
                                                                        resultHighlighter: 'phraseMatch',
                                                                        source: 'select * from search.suggest where query="{query}"',
                                                                        yqlEnv: 'http://pieisgood.org/yql/tables.env'
                                                                    }),
                                           ac4 = new Y.AutoComplete({
                                                                        inputNode: '#ac-input4',
                                                                        render   : true,
                                                                        resultHighlighter: 'phraseMatch',
                                                                        source: 'select * from search.suggest where query="{query}"',
                                                                        yqlEnv: 'http://pieisgood.org/yql/tables.env'
                                                                    });

                                           _yuitest_coverline("build/anotherNewView/anotherNewView.js", 53);
this._destroyOnExit.push(ac1,ac2,ac3,ac4);
                                       }
                                   });

_yuitest_coverline("build/anotherNewView/anotherNewView.js", 57);
Y.AnotherNewView = AnotherNewView;

}, '@VERSION@', {"requires": ["zeView", "datatable", "contentSwapper", "autocomplete", "autocomplete-highlighters"]});
