YUI.add('zeView', function (Y, NAME) {

var each = Y.Array.each,
     CONT = 'container';

Y.ZeView = Y.Base.create(
    NAME,
    Y.View,
    [Y.ContentSwapper,Y.View.NodeMap],
    {
        _eventHandles: null,
        _destroyOnExit: null,

        initializer: function (){
            this._eventHandles = [];
            this._destroyOnExit = [];
        },
        destructor: function () {
            each(this._eventHandles,function(h) {
                     h.detach();
                 });
            each(this._destroyOnExit,function(h) {
                     h.destroy();
                 });
            var c = this.get(CONT);
            if (c) {
                c.setHTML('');
            }
        },
        render: function (container) {
            container = Y.one(container);
            if (container) {
                this.set(CONT, container);
            } else {
                container = this.get(CONT);
            }
            if (container) {
                this._render(container);
            }
            return this;
        },
        attachEvents: function() {
            var ev = {};
             each(this._classes, function (c) {
                 if(c.prototype.events) {
                     Y.mix(ev,c.prototype.events);
                 }
             });
            return Y.ZeView.superclass.attachEvents.call(this,ev);
        },
        _getContainer: function (value) {
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
