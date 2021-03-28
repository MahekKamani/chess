(this.webpackJsonpchess=this.webpackJsonpchess||[]).push([[0],{101:function(e,t,n){"use strict";n.r(t);var i=n(0),c=n.n(i),a=n(55),r=n.n(a),s=(n(37),n(17)),o=n(1),u=function(e){return e.number%2===0?Object(o.jsx)("div",{className:"tile black-tiles",children:e.image&&Object(o.jsx)("div",{style:{backgroundImage:"url(".concat(e.image,")")},className:"piece"})}):Object(o.jsx)("div",{className:"tile white-tiles",children:e.image&&Object(o.jsx)("div",{style:{backgroundImage:"url(".concat(e.image,")")},className:"piece"})})},p=n(56),l=Object(p.io)("https://react-chess-backend.herokuapp.com/");l.on("updateBoard",(function(e){return e}));for(var f=n(22),h=new function e(){var t=this;Object(f.a)(this,e),this.isSquareOccupied=function(e,t,n){return!!n.find((function(n){return n.x===e&&n.y===t}))},this.isEnPassant=function(e,t,n,i,c,a,r){if("pawn"===c){var s="w"===a?1:-1;if((n-e===-1||n-e===1)&&i-t===s)if(r.find((function(e){return e.x===n&&e.y===i-s&&e.enPassant})))return!0}return!1},this.isOpponent=function(e,t,n,i){return!!n.find((function(n){return n.x===e&&n.y===t&&n.color!==i}))},this.validMove=function(e,n,i,c,a,r,s){if("pawn"===a){var o="w"===r?1:-1;if(e===i&&n===("w"===r?1:6)&&c-n===2*o){if(!t.isSquareOccupied(i,c,s)&&!t.isSquareOccupied(i,c-o,s))return!0}else if(e===i&&c-n===o){if(!t.isSquareOccupied(i,c,s))return!0}else if(i-e===1&&c-n===o){if(t.isOpponent(i,c,s,r))return!0}else if(i-e===-1&&c-n===o&&t.isOpponent(i,c,s,r))return!0}else if("bishop"===a){if(Math.abs(e-i)===Math.abs(n-c)){if(!t.isSquareOccupied(i,c,s))return!0;if(t.isOpponent(i,c,s,r))return!0}}else if("rook"===a){if(e!==i&&n===c||e===i&&n!==c){if(!t.isSquareOccupied(i,c,s))return!0;if(t.isOpponent(i,c,s,r))return!0}}else if("knight"===a){if(e-i===2||e-i===-2){if(n-c===1||n-c===-1){if(!t.isSquareOccupied(i,c,s))return!0;if(t.isOpponent(i,c,s,r))return!0}}else if((n-c===2||n-c===-2)&&(e-i===1||e-i===-1)){if(!t.isSquareOccupied(i,c,s))return!0;if(t.isOpponent(i,c,s,r))return!0}}else if("queen"===a){if(Math.abs(i-e)===Math.abs(c-n)){if(!t.isSquareOccupied(i,c,s))return!0;if(t.isOpponent(i,c,s,r))return!0}else if(e!==i&&n===c||e===i&&n!==c){if(!t.isSquareOccupied(i,c,s))return!0;if(t.isOpponent(i,c,s,r))return!0}}else if("king"===a){if(e-i===1||i-e===1){if(!t.isSquareOccupied(i,c,s))return!0;if(t.isOpponent(i,c,s,r))return!0}if(n-c===1||c-n===1){if(!t.isSquareOccupied(i,c,s))return!0;if(t.isOpponent(i,c,s,r))return!0}}return!1}},g=["a","b","c","d","e","f","g","h"],d=["1","2","3","4","5","6","7","8"],m=[],b=0;b<2;b++){var j=0===b?"w":"b",O=0===b?0:7;m.push({image:"img/".concat(j,"-king.png"),x:4,y:O,type:"king",color:j}),m.push({image:"img/".concat(j,"-queen.png"),x:3,y:O,type:"queen",color:j}),m.push({image:"img/".concat(j,"-bishop.png"),x:5,y:O,type:"bishop",color:j}),m.push({image:"img/".concat(j,"-bishop.png"),x:2,y:O,type:"bishop",color:j}),m.push({image:"img/".concat(j,"-knight.png"),x:6,y:O,type:"knight",color:j}),m.push({image:"img/".concat(j,"-knight.png"),x:1,y:O,type:"knight",color:j}),m.push({image:"img/".concat(j,"-rook.png"),x:7,y:O,type:"rook",color:j}),m.push({image:"img/".concat(j,"-rook.png"),x:0,y:O,type:"rook",color:j})}for(var y=0;y<9;y++)m.push({image:"img/b-pawn.png",x:y,y:6,type:"pawn",color:"b"});for(var x=0;x<9;x++)m.push({image:"img/w-pawn.png",x:x,y:1,type:"pawn",color:"w"});var v=function(){l.on("updateBoard",(function(e){k(e)}));for(var e=Object(i.useState)(null),t=Object(s.a)(e,2),n=t[0],c=t[1],a=Object(i.useState)(0),r=Object(s.a)(a,2),p=r[0],f=r[1],b=Object(i.useState)(0),j=Object(s.a)(b,2),O=j[0],y=j[1],x=Object(i.useState)(m),v=Object(s.a)(x,2),w=v[0],k=v[1],S=Object(i.useRef)(null),M=[],I=function(e){for(var t=function(t){var n=t+e+2,i=void 0;w.forEach((function(n){n.x===t&&n.y===e&&(i=n.image)})),M.push(Object(o.jsx)(u,{number:n,image:i},g[t]+d[e]))},n=0;n<g.length;n++)t(n)},q=d.length-1;q>=0;q--)I(q);return Object(o.jsx)("div",{className:"board",onMouseDown:function(e){return function(e){var t=S.current;if(e.target.classList.contains("piece")&&t){f(Math.floor((e.clientX-t.offsetLeft)/(t.clientWidth/8))),y(Math.abs(Math.ceil((e.clientY-t.offsetTop-800)/(t.clientWidth/8))));var n=e.clientX-e.target.clientWidth/2,i=e.clientY-e.target.clientHeight/2;e.target.style.position="absolute",e.target.style.top="".concat(i,"px"),e.target.style.left="".concat(n,"px")}c(e.target)}(e)},onMouseMove:function(e){return function(e){var t=S.current;if(n&&n.classList.contains("piece")&&t){var i=t.offsetLeft,c=t.offsetTop,a=t.clientWidth+t.offsetLeft-t.clientWidth/8,r=t.clientHeight+t.offsetTop-t.clientHeight/8,s=e.clientX-e.target.clientWidth/2,o=e.clientY-e.target.clientHeight/2;n.style.position="absolute",n.style.left="".concat(s<i?i:s>a?a:s,"px"),n.style.top="".concat(o<c?c:o>r?r:o,"px")}}(e)},onMouseUp:function(e){return function(e){var t=S.current;if(n&&t){var i=Math.floor((e.clientX-t.offsetLeft)/(t.clientWidth/8)),a=Math.abs(Math.ceil((e.clientY-t.offsetTop-800)/(t.clientWidth/8))),r=w.find((function(e){return e.x===p&&e.y===O}));if(r){var s=h.validMove(p,O,i,a,r.type,r.color,w),o=h.isEnPassant(p,O,i,a,r.type,r.color,w),u="w"===r.color?1:-1;if(o){var f=w.reduce((function(e,t){return t.x===p&&t.y===O?(t.enPassant=!1,t.x=i,t.y=a,e.push(t)):t.x===i&&t.y===a-u||("pawn"===t.type&&(t.enPassant=!1),e.push(t)),e}),[]);k(f);var g=window.sessionStorage.getItem("gameId");l.emit("move",g,f)}else if(s){var d=w.reduce((function(e,t){return t.y===O&&t.x===p?(2===Math.abs(O-a)&&"pawn"===t.type?t.enPassant=!0:t.enPassant=!1,t.x=i,t.y=a,e.push(t)):t.x===i&&t.y===a||("pawn"===t.type&&(t.enPassant=!1),e.push(t)),e}),[]);k(d);var m=window.sessionStorage.getItem("gameId");l.emit("move",m,d)}else n.style.position="relative",n.style.removeProperty("top"),n.style.removeProperty("left")}c(null)}}(e)},ref:S,children:M})},w=n(24),k=n(2),S=n(57),M=n(15),I=n(61),q=n(60),P=n(58),N=n(35),W=function(e){Object(I.a)(n,e);var t=Object(q.a)(n);function n(){var e;return Object(f.a)(this,n),(e=t.call(this)).create=function(){l.emit("createRoom",""),l.on("generateId",(function(t){e.setState({gameId:t})}))},e.join=function(){var t=function(e){return window.sessionStorage.setItem("gameId",e),l.emit("join",e),e}(e.id.current.value);e.setState({gameId:t})},e.state={gameId:""},e.join=e.join.bind(Object(M.a)(e)),e.create=e.create.bind(Object(M.a)(e)),e.id=c.a.createRef(null),e}return Object(S.a)(n,[{key:"render",value:function(){return Object(o.jsx)(c.a.Fragment,{children:Object(o.jsxs)(P.a,{className:"text-center",children:[Object(o.jsx)("h1",{children:"Welcome to Chess"}),Object(o.jsx)("h2",{children:Object(o.jsx)(N.a,{variant:"success",className:"w-100",onClick:this.create,children:"Create Room"})}),Object(o.jsx)("div",{children:this.state.gameId}),Object(o.jsx)(w.b,{to:this.state.gameId?"/game":"/",children:Object(o.jsx)("h2",{children:Object(o.jsx)(N.a,{variant:"primary",className:"w-100",onClick:this.join,children:"Join Room"})})}),Object(o.jsx)("input",{type:"text",className:"w-100",ref:this.id})]})})}}]),n}(i.Component);var C=function(){return Object(o.jsx)("div",{className:"App",children:Object(o.jsx)(w.a,{basename:window.location.pathname||"",children:Object(o.jsxs)(k.c,{children:[Object(o.jsx)(k.a,{exact:!0,path:"/",component:W}),Object(o.jsx)(k.a,{path:"/game",component:v})]})})})},L=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,102)).then((function(t){var n=t.getCLS,i=t.getFID,c=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),i(e),c(e),a(e),r(e)}))};r.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(C,{})}),document.getElementById("root")),L()},37:function(e,t,n){}},[[101,1,2]]]);
//# sourceMappingURL=main.b671064e.chunk.js.map