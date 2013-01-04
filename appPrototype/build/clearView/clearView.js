YUI.add('clearView', function (Y, NAME) {

var ClearView = Y.Base.create('clearView',Y.ZeView, [], {
                                  template: "<p><b>CLEARED ALL THE DOM OBJECTS AND EVENTS :)</p>",
                                  _render:  function (container) {
                                      container.setHTML(this.template);
                                  }
                              });

Y.ClearView = ClearView;

}, '@VERSION@', {"requires": ["zeView", "datatable", "contentSwapper", "autocomplete", "autocomplete-highlighters"]});
