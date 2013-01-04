YUI().use('zeView', 'datatable', 'contentSwapper', 'autocomplete', 'autocomplete-highlighters', function(Y) {

    var MyView = Y.Base.create('myView', Y.ZeView, [Y.ContentSwapper], {
        template: '<p border="1">This is the fixed div container, next comes the variable part:</p><div class="variableContent"></div>',
        initializer: function () {
            this._eventHandles.push(
                this.on('*:swap', this.swap)
            );
        },
        swap: function (ev) {
            switch (ev.which) {
            case 'NewView':
                Y.use("newView",function(){
                          myView.setSwapView(new Y.NewView(),1);       
                      });
                break;
            case 'AnotherNewView':
                Y.use("anotherNewView",function(){
                          myView.setSwapView(new Y.AnotherNewView(),1);       
                      });
                break;
            }
        },
        _render: function (container) {
            container.setHTML(this.template);
            this.setSwapContainer(container.one('.variableContent'),1);
        }
    });

    var myView = new MyView();
    myView.render(Y.one('#mainContent'));
    Y.use("newView",function(){
              myView.setSwapView(new Y.NewView(),1);       
          });

    Y.all(".tabsa").on("click", function(e) {
        console.log(e);
        e.preventDefault();
        if (e.currentTarget._node.id === 'tab1') {
            Y.use("clearView",function(){
                      myView.setSwapView(new Y.ClearView(),1);       
                  });
           }
        else if (e.currentTarget._node.id === 'tab2') {
            Y.use("anotherNewView",function(){
                      myView.setSwapView(new Y.AnotherNewView(),1);       
                  });
        }
        else { 
            Y.use("newView",function(){
                      myView.setSwapView(new Y.NewView(),1);       
                  });
        }
    });
});