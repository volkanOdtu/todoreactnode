(this.webpackJsonpreduxemaple=this.webpackJsonpreduxemaple||[]).push([[0],{23:function(e,t,o){e.exports=o(38)},28:function(e,t,o){},29:function(e,t,o){e.exports=o.p+"static/media/logo.25bf045c.svg"},30:function(e,t,o){},38:function(e,t,o){"use strict";o.r(t);var n=o(0),r=o.n(n),a=o(4),c=o.n(a),i=(o(28),o(29),o(30),o(5)),d=o(6),p=o(11),s=o(8),u=o(7),l=o(10),h=o(9),f=function(e){function t(){return Object(i.a)(this,t),Object(p.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this,t={color:"black"};return this.props.completed&&(t={color:"red",textDecoration:"line-through"}),r.a.createElement("div",{className:"todo-item"},r.a.createElement("input",{type:"checkbox",checked:this.props.completed,onChange:function(){return e.props.Change(e.props.id)}}),r.a.createElement("p",{style:t}," ",this.props.item," "),r.a.createElement("div",{style:{"margin-left":"10px","margin-bottom":"15px"}},r.a.createElement("input",{type:"button",onClick:function(){return e.props.Delete(e.props.id)},value:"Delete"})))}}]),t}(n.Component),m=o(19),O=o.n(m),b=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(p.a)(this,Object(s.a)(t).call(this))).Delete=function(t){e.props.deleteTodo(t)},e.Add=function(){var t={id:O.a.v4(),item:e.props.txtNewTodo,completed:0};e.props.createTodo(t),e.props.updateTodoText("")},e.Change=function(t){e.props.updateTodo(t)},e.handleChange=e.handleChange.bind(Object(u.a)(e)),e}return Object(l.a)(t,e),Object(d.a)(t,[{key:"componentWillMount",value:function(){this.props.fetchTodos()}},{key:"handleChange",value:function(e){this.props.updateTodoText(e.target.value)}},{key:"render",value:function(){var e=this,t=this.props.todosInState.map((function(t){return r.a.createElement(f,{id:t.id,completed:t.completed,item:t.item,Change:e.Change,Delete:e.Delete})}));return r.a.createElement("div",{className:"todo-list"},r.a.createElement("h2",null,"Todo List"),t,r.a.createElement("div",null,r.a.createElement("input",{type:"text",name:"txtNewTodo",id:"txtNewTodo",value:this.props.txtNewTodo,onChange:this.handleChange}),r.a.createElement("input",{type:"button",onClick:function(){return e.Add()},value:"Add"})))}}]),t}(n.Component),y=Object(h.b)((function(e){return{todosInState:e.todosReducerCombined.todos,newTodoInState:e.todosReducerCombined.todo,txtNewTodo:e.todosReducerCombined.txtNewTodo}}),{fetchTodos:function(){return function(e){fetch("http://localhost:5000").then((function(e){return e.json()})).then((function(t){return e({type:"FETCH_TODOS",payload:t})}))}},updateTodoText:function(e){return function(t){t({type:"UPDATE_TODO_TEXT",payload:e})}},createTodo:function(e){return function(t){fetch("http://localhost:5000",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()})).then(t({type:"NEW_TODO",payload:e}))}},deleteTodo:function(e){return function(t){fetch("http://localhost:5000",{method:"DELETE",headers:{"content-type":"application/json"},body:JSON.stringify({id:e})}).then((function(e){return e.json()})).then(t({type:"DELETE_TODO",payload:e}))}},updateTodo:function(e){return{type:"UPDATE_TODO",payload:e}}})(b),T=o(2),E=o(20),g=o(22),j=o(21);function v(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function D(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?v(o,!0).forEach((function(t){Object(j.a)(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):v(o).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}var w={todos:[],todo:{},txtNewTodo:""},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_TODOS":return D({},e,{todos:t.payload});case"NEW_TODO":return Object.assign({},e,{todos:[].concat(Object(g.a)(e.todos),[{id:t.payload.id,item:t.payload.item,completed:0}])});case"DELETE_TODO":return Object.assign({},e,{todos:e.todos.filter((function(e,o){return e.id!==t.payload}))});case"UPDATE_TODO_TEXT":return D({},e,{txtNewTodo:t.payload});case"UPDATE_TODO":return Object.assign({},e,{todos:e.todos.map((function(e){return e.id===t.payload?Object.assign({},e,{completed:!e.completed}):e}))});default:return e}},C=Object(T.c)({todosReducerCombined:x}),N=[E.a],k=Object(T.e)(C,{},Object(T.d)(T.a.apply(void 0,N)));var P=function(){return r.a.createElement(h.a,{store:k},r.a.createElement("div",{className:"App"},r.a.createElement(y,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(P,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[23,1,2]]]);
//# sourceMappingURL=main.3a98cf92.chunk.js.map