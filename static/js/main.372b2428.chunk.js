(this["webpackJsonpsimple-todo-app"]=this["webpackJsonpsimple-todo-app"]||[]).push([[0],{13:function(e,t,n){e.exports=n(21)},20:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(11),i=n.n(r),l=n(7),c=n(1),s=n(2),d=n(4),p=n(3),u=n(5),m=function(e){function t(){return Object(c.a)(this,t),Object(d.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props.todo,n=t.completed,a=t.id,r=t.title;return o.a.createElement("li",{className:"todo-item"},o.a.createElement("input",{type:"checkbox",checked:n,onChange:function(){return e.props.handleChangeProps(a)}}),o.a.createElement("button",{onClick:function(){return e.props.deleteTodoProps(a)}},"Delete"),o.a.createElement("span",{style:n?{fontStyle:"italic",color:"#d35e0f",opacity:.4,textDecoration:"line-through"}:null},r))}}]),t}(o.a.Component),h=function(e){function t(){return Object(c.a)(this,t),Object(d.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",null,this.props.todos.map((function(t){return o.a.createElement(m,{key:t.id,todo:t,handleChangeProps:e.props.handleChangeProps,deleteTodoProps:e.props.deleteTodoProps})})))}}]),t}(o.a.Component),f=function(){return o.a.createElement("header",{style:{padding:"20px 0",lineHeight:"2em"}},o.a.createElement("h1",{style:{fontSize:"25px",marginBottom:"15px"}},"Simple Todo App"),o.a.createElement("p",{style:{fontSize:"19px"}},"Please add to-dos item(s) through the input field"))},b=n(12),v=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(o)))).state={title:""},n.onChange=function(e){n.setState(Object(b.a)({},e.target.name,e.target.value))},n.handleSubmit=function(e){e.preventDefault(),n.props.addTodoProps(n.state.title),n.setState({title:""})},n}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("form",{onSubmit:this.handleSubmit,className:"form-container"},o.a.createElement("input",{type:"text",className:"input-text",placeholder:"Add todo...",value:this.state.title,name:"title",onChange:this.onChange}),o.a.createElement("input",{type:"submit",className:"input-submit",value:"Submit"}))}}]),t}(a.Component),j=n(6),O=n.n(j),y=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(o)))).state={todos:[{id:O.a.v4(),title:"Setup development environment",completed:!0},{id:O.a.v4(),title:"Develop website and add content",completed:!1},{id:O.a.v4(),title:"Deploy to live server",completed:!1}]},n.handleChange=function(e){n.setState({todos:n.state.todos.map((function(t){return t.id===e&&(t.completed=!t.completed),t}))})},n.delTodo=function(e){n.setState({todos:Object(l.a)(n.state.todos.filter((function(t){return t.id!==e})))})},n.addTodoItem=function(e){var t={id:O.a.v4(),title:e,completed:!1};n.setState({todos:[].concat(Object(l.a)(n.state.todos),[t])})},n}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"container"},o.a.createElement(f,null),o.a.createElement(v,{addTodoProps:this.addTodoItem}),o.a.createElement(h,{todos:this.state.todos,handleChangeProps:this.handleChange,deleteTodoProps:this.delTodo}))}}]),t}(o.a.Component);n(20);i.a.render(o.a.createElement(y,null),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.372b2428.chunk.js.map