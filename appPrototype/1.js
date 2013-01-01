    YUI().use('zeView', 'datatable', 'event-custom', function(Y) {

        var NewView = Y.Base.create('newView',Y.ZeView, [Y.ContentSwapper], {
            template: "<button id='btn1' type='button'>Click Me NewView!</button><div class='innerContainer'></div>",
            events: {
                         button: {
                             click: function () {
                                 this.fire('swap', {which: 'AnotherNewView'});
                             }
                         }
                     },
//                     {
//                '#btn1': {click: '_clickMe'}
//            },
            // _clickMe: function(ev){
            //     //this.fire('changetoanother')
            //     // myView.set('view', new AnotherNewView());
            //     console.log(ev);
            // },
            // initializer: function() {
            // },
            _render:  function (container) {
            container.setHTML(this.template);
            this.set('swapContainer', container.one('.innerContainer'));

            var table = new Y.DataTable({
                columns: ['id', 'name','price','cost'],
                data: [
                { id: "ga-3475", name: "gadget",   price: "$6.99", cost: "$5.99" },
                { id: "sp-9980", name: "sprocket", price: "$3.75", cost: "$3.25" },
                { id: "wi-0650", name: "widget",   price: "$4.25", cost: "$3.75" }
                ]
                });
                this.set('swapView',table);
                this._destroyOnExit.push(table);
               //  table.render(container);

            }
        });

        var AnotherNewView = Y.Base.create('anothernewView',Y.ZeView, [], {
            template: "<button id='btn2' type='button'>Click Me AnotherNewView!</button>",
            events: {
                        button: {
                             click: function () {
                                 this.fire('swap', {which: 'NewView'});
                             }
                        }
            },
//                     {
//                '#btn1': {click: '_clickMe2'}
//            },
            _clickMe2: function(ev){
                // this.fire('changetoanotherone')

                // myView.set('swapView', new NewView());

                console.log("asd");
            },
            _render:  function (container) {
                container.setHTML(this.template);
            }
        });

        var MyView = Y.Base.create('myView', Y.ZeView, [Y.ContentSwapper,Y.View.NodeMap], {
            template: '<p><div class="variableContent"></div></p>',
            initializer: function () {
                         this._eventHandles.push(
                             this.on('*:swap', this.swap)
                         );
                         this._eventHandles.push(
                             this.on('*:tabsa', this.handleAnchor)
                         );
                     },
            events: {
                        anchor: {
                             click: function (e) {
                                 e.preventDefault();
                             }
                        }
            },
            handleAnchor: function(ev) {
              console.log(ev);
            },
            swap: function (ev) {
                         switch (ev.which) {
                             case 'NewView':
                                 this.set('swapView', new NewView());
                                 break;
                             case 'AnotherNewView':
                                 this.set('swapView', new AnotherNewView());
                                 break;

                         }
                     },
            _render: function (container) {
                         container.setHTML(this.template);
                         this.set('swapContainer', container.one('.variableContent'));
                     }
        });

        var myView = new MyView();
        myView.render(Y.one('#mainContent'));

        Y.all(".tabsa").on("click", function (e) {
              console.log(e);
              e.preventDefault();
              if (e.currentTarget._node.id === 'tab1') {
                  myView.set('swapView', new AnotherNewView());
              }
              else if (e.currentTarget._node.id === 'tab2') {
                  // Y.ZeView.getByNode(Y.one('#mainContent'));
                  // var myView = new MyView();
                  // myView.render(Y.one('#mainContent'));
                  myView.set('swapView', new AnotherNewView());
              }
              else { 
                  // var myView = new MyView();
                  // myView.render(Y.one('#mainContent'));
                  myView.set('swapView', new NewView());
              }
        });
});