(this.webpackJsonpreact_test=this.webpackJsonpreact_test||[]).push([[0],{57:function(e,t,a){e.exports=a(81)},62:function(e,t,a){},81:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(17),r=a.n(c),l=a(42),i=(a(62),a(7)),s=a(22),u=a(26),m=a(31),d=a(32),h=a(37),p=a(35),f=a(24);function g(e){return{type:"ADD_TODOS",todo:e}}var E=a(88),b=a(89),v=a(84),w=a(85),y=a(56),k=a(87),C=a(90),O=a(86),j=a(44);a(77);j.initializeApp({apiKey:"AIzaSyBpQzI7Bq2KJ-XM08-UQ8aWhE4aRLKOd2g",authDomain:"newsweb-9652b.firebaseapp.com",databaseURL:"https://newsweb-9652b.firebaseio.com",projectId:"newsweb-9652b",storageBucket:"newsweb-9652b.appspot.com",messagingSenderId:"644221807054",appId:"1:644221807054:web:bde2e890db99544476a39f"});var S=j,L=function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).state={curUrlEverything:"https://newsapi.org/v2/everything?",curUrlTop:"https://newsapi.org/v2/top-headlines?country=in&",base:!0,apiKey:"269eea8eaa2b47858b5a4dd3ec3997e2",query:"",items:[],isLoaded:!1,loadMoreB:!1,loadingClicks:!0,page:1},e.fetchNow=function(t,a){if(e.state.query||e.state.base){e.setState({isLoaded:!1}),console.log(e.state.page);var n=a+"q="+e.state.query+"&page="+e.state.page+"&apiKey="+e.state.apiKey;fetch(n).then((function(e){return e.json()})).then((function(a){t?e.setState({isLoaded:!0,items:[].concat(Object(u.a)(e.state.items),Object(u.a)(a.articles)),loadMoreB:!1},(function(){e.fetchClicks(),console.log(e.state.items)})):e.setState({isLoaded:!0,items:a.articles},(function(){e.fetchClicks(),console.log(a)}))}),(function(t){e.setState({isLoaded:!0,loadMoreB:!1,error:t},(function(){console.log("no more news found")}))}))}},e.fetchNew=function(t){e.state.base?e.fetchNow(!0,e.state.curUrlTop):e.fetchNow(!0,e.state.curUrlEverything)},e.fetchCat=function(t){e.setState({query:t},(function(){e.fetchNow(!1,e.state.curUrlEverything)}))},e.loadMore=function(){window.innerHeight+document.documentElement.scrollTop>=document.scrollingElement.scrollHeight-1500&&!e.state.loadMoreB&&(e.state.page>=5?console.log("developer account reached"):e.setState({loadMoreB:!0,page:e.state.page+1},(function(){e.fetchNew(e.state.page)})))},e.fetchClicks=function(){S.firestore().collection("clicks").get().then((function(t){var a=new Map;t.forEach((function(e){a.set(e.id,e.data()),console.log(e.id," => ",e.data())})),e.setState({count:a,loadingClicks:!1},(function(){console.log(e.state.count)}))}))},e.handleChange=function(t){var a;e.setState((a={},Object(s.a)(a,t.target.name,t.target.value),Object(s.a)(a,"page",1),Object(s.a)(a,"base",!1),a),(function(){e.fetchNow(!1,e.state.curUrlEverything)}))},e.incrementClick=function(e,t){var a=S.firestore().collection("clicks").doc(t);a.get().then((function(t){t.exists?a.update({clicks:S.firestore.FieldValue.increment(1)}).then((function(){window.location.replace(e)})):a.set({clicks:1}).then((function(){window.location.replace(e)}))}))},e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.loadMore),this.fetchNow(!1,this.state.curUrlTop)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.loadMore)}},{key:"render",value:function(){var e=this;return o.a.createElement(o.a.Fragment,null,o.a.createElement(E.a,{sticky:"top",bg:"dark",variant:"dark",expand:"lg"},o.a.createElement(E.a.Brand,{href:"#home"},"React News"),o.a.createElement(E.a.Toggle,{"aria-controls":"basic-navbar-nav"}),o.a.createElement(E.a.Collapse,{id:"basic-navbar-nav"},o.a.createElement(b.a,{className:"mr-auto"},o.a.createElement(b.a.Link,{onClick:function(){e.fetchCat("sports")}},"Sports |"),o.a.createElement(b.a.Link,{onClick:function(){e.fetchCat("politics")}},"Politics |"),o.a.createElement(b.a.Link,{onClick:function(){e.fetchCat("technology")}},"Technology |"),o.a.createElement(b.a.Link,{onClick:function(){e.fetchCat("entertainment")}},"Entertainment |")))),o.a.createElement(v.a,{fluid:!0},o.a.createElement(w.a,null,o.a.createElement(y.a,null),o.a.createElement(y.a,{md:6},o.a.createElement("h1",null,"Hello ! Here is Your News Feed")),o.a.createElement(y.a,null)),o.a.createElement(w.a,null,o.a.createElement(y.a,null),o.a.createElement(y.a,{md:6},o.a.createElement(k.a,null,o.a.createElement(k.a.Group,{controlId:"formBasicEmail"},o.a.createElement(k.a.Control,{type:"text",placeholder:"Search",value:this.state.query,onChange:this.handleChange,name:"query"})))),o.a.createElement(y.a,null)),o.a.createElement(w.a,null,o.a.createElement(y.a,null),o.a.createElement(y.a,{md:6},this.state.isLoaded?this.state.items.map((function(t){return o.a.createElement(o.a.Fragment,null,o.a.createElement(C.a,{onClick:function(){e.incrementClick(t.url,t.title)},border:"primary"},o.a.createElement(C.a.Header,null,t.author?t.author:"News Flash"),o.a.createElement(C.a.Img,{variant:"top",src:t.urlToImage}),o.a.createElement(C.a.Body,null,o.a.createElement(C.a.Title,null,t.title),o.a.createElement(C.a.Text,null,t.description)),o.a.createElement(C.a.Footer,null,o.a.createElement("span",null,t.source.name),o.a.createElement("span",{style:{float:"right"}},"Clicks"," ",e.state.loadingClicks?o.a.createElement(O.a,{animation:"border",role:"status",size:"sm"},o.a.createElement("span",{className:"sr-only"},"Loading...")):e.state.count.get(t.title)?e.state.count.get(t.title).clicks:0))),o.a.createElement("br",null))})):o.a.createElement("span",{style:{display:"flex",justifyContent:"center",alignItems:"center"}},o.a.createElement(O.a,{animation:"border",role:"status"},o.a.createElement("span",{className:"sr-only"},"Loading...")))),o.a.createElement(y.a,null))))}}]),a}(n.Component),T=a(15),N=function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).state={todo:"",date:""},e.handleSubmit=function(t){t.preventDefault(),e.props.actions.addTodos(e.state.todo)},e.handleChange=function(t){e.setState(Object(s.a)({},t.target.name,t.target.value))},e}return Object(d.a)(a,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("h1",null,"Create a New Todo Here"),o.a.createElement("form",{onSubmit:this.handleSubmit},o.a.createElement("input",{name:"todo",type:"text",placeholder:"Enter Todo",onChange:this.handleChange,value:this.state.todo}),o.a.createElement("input",{name:"date",type:"text",placeholder:"Enter Date & Time",onChange:this.handleChange,value:this.state.date}),o.a.createElement("input",{type:"submit",name:"Save",value:"Save"})))}}]),a}(n.Component);var B=Object(f.b)((function(e,t){return{todos:e.todos}}),(function(e){return{actions:{addTodos:Object(T.a)(g,e)}}}))(N);var M=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(i.c,null,o.a.createElement(i.a,{exact:!0,path:"/",component:L}),o.a.createElement(i.a,{path:"/create",component:B})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var x=Object(T.b)({todos:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["idea for Aatmanirbhar app","Redux course complete"],t=arguments.length>1?arguments[1]:void 0;return"ADD_TODOS"===t.type?[].concat(Object(u.a)(e),[t.todo]):e}});a(80);var D,I=Object(T.c)(x,D);r.a.render(o.a.createElement(o.a.Fragment,null,o.a.createElement(l.a,null,o.a.createElement(f.a,{store:I},o.a.createElement(M,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[57,1,2]]]);
//# sourceMappingURL=main.2ef314a5.chunk.js.map