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
                                                   this.fire('swap', {which: 'NewView',
                                                                      view: this});
                                               }
                                           }
                                       },
                                       _clickMe2: function(ev){
                                           console.log("asd");
                                       },
                                       _render:  function (container) {
                                           container.setHTML(this.template);
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

                                           this._destroyOnExit.push(ac1,ac2,ac3,ac4);
                                       }
                                   });

Y.AnotherNewView = AnotherNewView;