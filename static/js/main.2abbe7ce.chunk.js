(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{20:function(e,t,n){},21:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var s=n(2),a=n.n(s),i=n(5),c=n.n(i),r=(n(20),n(13)),o=n(8),d=n(9),u=n(3),l=n(15),h=n(14),j=(n(21),n(10)),b=n(11),m=n(1);var p=function(e){var t=e.items.map((function(t){return Object(m.jsx)("div",{className:"list",children:Object(m.jsxs)("p",{children:[Object(m.jsx)("input",{type:"text",id:t.key,value:t.text,onChange:function(n){e.setUpdate(n.target.value,t.key)}}),Object(m.jsx)("span",{children:Object(m.jsx)(j.a,{className:"faicons",icon:"trash",onClick:function(){return e.deleteItem(t.key)}})})]})},t.key)}));return Object(m.jsx)("div",{children:Object(m.jsx)(b.a,{duration:500,easing:"ease-in-out",children:t})})},f=(n(28),n(4)),x=n(12);f.b.add(x.a);var O=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(e){var s;return Object(o.a)(this,n),(s=t.call(this,e)).handleKeyPress=function(e){if("Enter"===e.key){console.log("enter press here! "),e.preventDefault();var t=s.state.currentItem;if(console.log(t),""!==t.text){var n=[].concat(Object(r.a)(s.state.items),[t]);s.setState({items:n,currentItem:{text:"",key:""}})}}},s.state={items:[],currentItem:{text:"",key:""}},s.handleInput=s.handleInput.bind(Object(u.a)(s)),s.deleteItem=s.deleteItem.bind(Object(u.a)(s)),s.setUpdate=s.setUpdate.bind(Object(u.a)(s)),s.handleKeyPress=s.handleKeyPress.bind(Object(u.a)(s)),s}return Object(d.a)(n,[{key:"handleInput",value:function(e){this.setState({currentItem:{text:e.target.value,key:Date.now()}})}},{key:"deleteItem",value:function(e){var t=this.state.items.filter((function(t){return t.key!==e}));this.setState({items:t})}},{key:"setUpdate",value:function(e,t){var n=this.state.items;n.map((function(n){n.key===t&&(n.text=e)})),this.setState({items:n})}},{key:"render",value:function(){return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsxs)("header",{children:[Object(m.jsx)("h2",{children:"My To Do List"}),Object(m.jsx)("form",{id:"to-do-form",onKeyPress:this.handleKeyPress,children:Object(m.jsx)("input",{type:"text",placeholder:"Enter text",value:this.state.currentItem.text,onChange:this.handleInput})})]}),Object(m.jsx)(p,{items:this.state.items,deleteItem:this.deleteItem,setUpdate:this.setUpdate})]})}}]),n}(s.Component),v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,30)).then((function(t){var n=t.getCLS,s=t.getFID,a=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),s(e),a(e),i(e),c(e)}))};c.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(O,{})}),document.getElementById("root")),v()}},[[29,1,2]]]);
//# sourceMappingURL=main.2abbe7ce.chunk.js.map