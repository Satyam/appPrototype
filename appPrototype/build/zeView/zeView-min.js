YUI.add("zeView",function(e,t){e.ZeView=e.Base.create(t,e.View,[],{_eventHandles:null,_destroyOnExit:null,initializer:function(){this._eventHandles=[],this._destroyOnExit=[]},destructor:function(){e.Array.each(this._eventHandles,function(e){e.detach()}),e.Array.each(this._destroyOnExit,function(e){e.destroy()})},render:function(t){return t=e.one(t),t?this.set("container",t):t=this.get("container"),t&&this._render(t),this},attachEvents:function(){var t=this._classes,n,r,i={};for(r=0;r<t.length;r++)n=t[r],n.prototype.events&&e.mix(i,n.prototype.events);e.ZeView.superclass.attachEvents.call(this,i)}})},"@VERSION@",{requires:["view"]});