YUI.add("zeView",function(e,t){var n=function(){},r="swapContainer",i="swapView",s="Change",o=e.Lang;n.ATTRS={swapContainer:{value:null,validator:function(e){return e===null||e.constructor.NAME==="node"}},swapView:{value:null,validator:function(e){return e===null||o.isFunction(e.render)&&o.isFunction(e.destroy)}}},n.prototype={initializer:function(){this._eventHandles.push(this.after(r+s,this._afterSwapContainerChange)),this._eventHandles.push(this.after(i+s,this._afterViewChange)),this._eventHandles.push(this.after("destroy",this._beforeDestroy))},_afterSwapContainerChange:function(e){var t=this.get(i),n=e.prevVal,r=e.newVal,s;t&&(r?(n?(s=n.get("children"),s.each(function(e){r.appendChild(e)})):t.render(r),t._set("container",r)):t.destroy())},_afterViewChange:function(e){var t=e.prevVal,n=e.newVal;t&&(t.removeTarget(this),t.destroy());var i=this.get(r);i&&n&&(n.render(i),n.addTarget(this))},_beforeDestroy:function(){var e=this.get(i);e&&e.destroy()}},e.ContentSwapper=n;var u=e.Array.each,a="container";e.ZeView=e.Base.create(t,e.View,[e.ContentSwapper,e.View.NodeMap],{_eventHandles:null,_destroyOnExit:null,initializer:function(){this._eventHandles=[],this._destroyOnExit=[]},destructor:function(){u(this._eventHandles,function(e){e.detach()}),u(this._destroyOnExit,function(e){e.destroy()});var e=this.get(a);e&&e.setHTML("")},render:function(t){return t=e.one(t),t?this.set(a,t):t=this.get(a),t&&this._render(t),this},attachEvents:function(){var t={};return u(this._classes,function(n){n.prototype.events&&e.mix(t,n.prototype.events)}),e.ZeView.superclass.attachEvents.call(this,t)}})},"@VERSION@",{requires:["view","calendar","base-build","datatype-date","event-outside","event-focus","node","view-node-map"]});
