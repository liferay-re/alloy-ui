AUI.add("aui-zippy-delegate",function(l){var b=l.Lang,g=b.isBoolean,h=b.isObject,j=b.isString,k=l.ZippyItem,p=function(w){return(w instanceof k);},q="-",o=".",v="",f=" ",i="animated",c="click",d="content",n="container",r="header",a="keydown",e="linear",t="transition",u="zippy",s="zippy-item";var m=l.Component.create({NAME:u,ATTRS:{animated:{validator:g,value:false,writeOnce:true},container:{setter:l.one},content:{validator:j},header:{validator:j},transition:{validator:h,value:{duration:0.5,easing:e}}},EXTENDS:l.Base,prototype:{initializer:function(){var w=this;w.bindUI();},bindUI:function(){var w=this;var x=w.get(n);var y=w.get(r);x.delegate([c,a],l.bind(w.headerEventHandler,w),y);},headerEventHandler:function(x){var w=this;var y=x.target;var z=y.getData(s);if(!p(z)){z=new k({animated:w.get(i),bindDOMEvents:false,content:y.next(w.get(d)),header:y,transition:w.get(t)});z.addTarget(w);y.setData(s,z);}k.headerEventHandler(x,z);}}});l.Zippy=m;},"@VERSION@",{skinnable:false,requires:["aui-zippy-item"]});