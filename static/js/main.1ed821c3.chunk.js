(window["webpackJsonpclicky-game"]=window["webpackJsonpclicky-game"]||[]).push([[0],[,function(e){e.exports=JSON.parse('[{"id":1,"name":"Alex","image":"https://whereispolaris.github.io/clicky-game/img/Alex.png"},{"id":2,"name":"Anne","image":"https://whereispolaris.github.io/clicky-game/img/Alfred.png"},{"id":3,"name":"Anita","image":"https://whereispolaris.github.io/clicky-game/img/Anita.png"},{"id":4,"name":"Anne","image":"https://whereispolaris.github.io/clicky-game/img/Anne.png"},{"id":5,"name":"Bernard","image":"https://whereispolaris.github.io/clicky-game/img/Bernard.png"},{"id":6,"name":"Bill","image":"https://whereispolaris.github.io/clicky-game/img/Bill.png"},{"id":7,"name":"Charles","image":"https://whereispolaris.github.io/clicky-game/img/Charles.png"},{"id":8,"name":"Claire","image":"https://whereispolaris.github.io/clicky-game/img/Claire.png"},{"id":9,"name":"David","image":"https://whereispolaris.github.io/clicky-game/img/David.png"},{"id":10,"name":"Eric","image":"https://whereispolaris.github.io/clicky-game/img/Eric.png"},{"id":11,"name":"Frans","image":"https://whereispolaris.github.io/clicky-game/img/Frans.png"},{"id":12,"name":"George","image":"https://whereispolaris.github.io/clicky-game/img/George.png"}]')},,,,,,,,,function(e,a,t){e.exports=t(19)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var i=t(0),n=t.n(i),r=t(3),c=t.n(r),s=(t(15),t(7)),o=t(4),l=t(5),m=t(8),g=t(6),u=t(9);var d=function(){return n.a.createElement("div",{className:"col-sm text-center"},n.a.createElement("h4",null,"Clicky Game"))};var h=function(e){return n.a.createElement("div",{className:"col-sm text-center"},n.a.createElement("h4",null,e.message))};var p=function(e){return n.a.createElement("div",{className:"col-sm text-center"},n.a.createElement("h4",null,"Score: ",e.score," | Top Score: ",e.topScore))},k=(t(16),function(e){return n.a.createElement("nav",{className:"nav-menu navbar navbar-inverse navbar-fixed-top"},n.a.createElement(d,null),n.a.createElement(h,{message:e.message}),n.a.createElement(p,{score:e.score,topScore:e.topScore}))});t(17);var v=function(){return n.a.createElement("div",{className:"jumbotron jumbotron-fluid text-center"},n.a.createElement("div",{className:"container-fluid justify-items-center"},n.a.createElement("img",{className:"main-logo",src:"https://whereispolaris.github.io/clicky-game/img/guessWhoLogo.png",alt:"guessWho"}),n.a.createElement("h4",{className:"instructions"},"Click on an image to earn points, but don't click on any more than once!")))};var f=function(){return n.a.createElement("div",{className:"container-fluid text-center"},n.a.createElement("div",{className:"card text-center"},n.a.createElement("div",{className:"card-footer text-muted"},"React Clicky Game")))};var E=function(e){return n.a.createElement("div",{className:"container-fluid text-center"},n.a.createElement("div",{className:"row",style:{margin:"20px 10%"}},e.children))};t(18);var w=function(e){return n.a.createElement("div",{className:"card",style:{width:"11rem"}},n.a.createElement("img",{className:"image",onClick:function(){return e.clickedCard(e.id)},src:e.image,alt:e.name}))},y=t(1),b=function(e){function a(){var e,t;Object(o.a)(this,a);for(var i=arguments.length,n=new Array(i),r=0;r<i;r++)n[r]=arguments[r];return(t=Object(m.a)(this,(e=Object(g.a)(a)).call.apply(e,[this].concat(n)))).state={guessWho:y,score:0,topScore:0,message:"Click and Image to Begin!",clickedCards:[]},t.handleClickedCard=function(e){t.state.clickedCards.includes(e)?t.setState({message:"You're wrong!",score:0,clickedCards:[]}):(t.setState({score:t.state.score+=1,message:"You guessed correctly!",guessWho:t.state.guessWho.sort(function(){return Math.random()-.5})}),t.setState({clickedCards:[].concat(Object(s.a)(t.state.clickedCards),[e])})),t.state.topScore<t.state.score&&t.setState({topScore:t.state.score}),console.log(t.state.clickedCards)},t}return Object(u.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){var e=this;return n.a.createElement("div",null,n.a.createElement(k,{score:this.state.score,topScore:this.state.topScore,message:this.state.message}),n.a.createElement(v,null),n.a.createElement(E,null,y.map(function(a){return n.a.createElement(w,{key:a.id,image:a.image,name:a.name,id:a.id,clicked:a.clicked,clickedCard:e.handleClickedCard})})),n.a.createElement(f,null))}}]),a}(n.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[10,1,2]]]);
//# sourceMappingURL=main.1ed821c3.chunk.js.map