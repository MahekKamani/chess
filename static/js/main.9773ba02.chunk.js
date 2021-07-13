(this.webpackJsonpchess=this.webpackJsonpchess||[]).push([[0],{101:function(e,t,n){"use strict";n.r(t);var i=n(0),r=n.n(i),c=n(55),a=n.n(c),o=(n(37),n(12)),s=n(1),u=function(e){return e.number%2===0?Object(s.jsx)("div",{className:"tile black-tiles",children:e.image&&Object(s.jsx)("div",{style:{backgroundImage:"url(".concat(e.image,")")},className:"piece"})}):Object(s.jsx)("div",{className:"tile white-tiles",children:e.image&&Object(s.jsx)("div",{style:{backgroundImage:"url(".concat(e.image,")")},className:"piece"})})},f=n(56),p=Object(f.io)("https://react-chess-backend.herokuapp.com/");p.on("updateBoard",(function(e){return e}));for(var l=n(22),h=new function e(){var t=this;Object(l.a)(this,e),this.isAnyPieceBetween=function(e,t,n,i,r,c){if(console.log("x:",e,"y:",t,"prevx:",r,"prevY:",c,"type:",i),"rook"===i||"queen"===i){if(r-e>0)for(var a=function(e){if(n.find((function(n){return n.x===e&&n.y===t})))return{v:!0}},o=r-1;o>e;o--){var s=a(o);if("object"===typeof s)return s.v}else if(r-e<0)for(var u=function(e){if(n.find((function(n){return n.x===e&&n.y===t})))return{v:!0}},f=r+1;f<e;f++){var p=u(f);if("object"===typeof p)return p.v}if(c-t>0)for(var l=function(t){if(n.find((function(n){return n.y===t&&n.x===e})))return{v:!0}},h=c-1;h>t;h--){var g=l(h);if("object"===typeof g)return g.v}else if(c-t<0)for(var d=function(t){if(n.find((function(n){return n.y===t&&n.x===e})))return{v:!0}},b=c+1;b<t;b++){var m=d(b);if("object"===typeof m)return m.v}}return!1},this.isSquareOccupied=function(e,t,n){return!!n.find((function(n){return n.x===e&&n.y===t}))},this.isEnPassant=function(e,t,n,i,r,c,a){if("pawn"===r){var o="w"===c?1:-1;if((n-e===-1||n-e===1)&&i-t===o)if(a.find((function(e){return e.x===n&&e.y===i-o&&e.enPassant})))return!0}return!1},this.isOpponent=function(e,t,n,i){return!!n.find((function(n){return n.x===e&&n.y===t&&n.color!==i}))},this.validMove=function(e,n,i,r,c,a,o){if("pawn"===c){var s="w"===a?1:-1;if(e===i&&n===("w"===a?1:6)&&r-n===2*s){if(!t.isSquareOccupied(i,r,o)&&!t.isSquareOccupied(i,r-s,o))return!0}else if(e===i&&r-n===s){if(!t.isSquareOccupied(i,r,o))return!0}else if(i-e===1&&r-n===s){if(t.isOpponent(i,r,o,a))return!0}else if(i-e===-1&&r-n===s&&t.isOpponent(i,r,o,a))return!0}else if("bishop"===c){if(Math.abs(e-i)===Math.abs(n-r)){if(!t.isSquareOccupied(i,r,o))return!0;if(t.isOpponent(i,r,o,a))return!0}}else if("rook"===c){if((e!==i&&n===r||e===i&&n!==r)&&!t.isAnyPieceBetween(i,r,o,c,e,n)){if(!t.isSquareOccupied(i,r,o))return!0;if(t.isOpponent(i,r,o,a))return!0}}else if("knight"===c){if(e-i===2||e-i===-2){if(n-r===1||n-r===-1){if(!t.isSquareOccupied(i,r,o))return!0;if(t.isOpponent(i,r,o,a))return!0}}else if((n-r===2||n-r===-2)&&(e-i===1||e-i===-1)){if(!t.isSquareOccupied(i,r,o))return!0;if(t.isOpponent(i,r,o,a))return!0}}else if("queen"===c){if(Math.abs(i-e)===Math.abs(r-n)){if(!t.isSquareOccupied(i,r,o))return!0;if(t.isOpponent(i,r,o,a))return!0}else if((e!==i&&n===r||e===i&&n!==r)&&!t.isAnyPieceBetween(i,r,o,c,e,n)){if(!t.isSquareOccupied(i,r,o))return!0;if(t.isOpponent(i,r,o,a))return!0}}else if("king"===c){if(e-i===1||i-e===1){if(!t.isSquareOccupied(i,r,o))return!0;if(t.isOpponent(i,r,o,a))return!0}if(n-r===1||r-n===1){if(!t.isSquareOccupied(i,r,o))return!0;if(t.isOpponent(i,r,o,a))return!0}}return!1}},g=["a","b","c","d","e","f","g","h"],d=["1","2","3","4","5","6","7","8"],b=[],m=0;m<2;m++){var j=0===m?"w":"b",y=0===m?0:7;b.push({image:"img/".concat(j,"-king.png"),x:4,y:y,type:"king",color:j}),b.push({image:"img/".concat(j,"-queen.png"),x:3,y:y,type:"queen",color:j}),b.push({image:"img/".concat(j,"-bishop.png"),x:5,y:y,type:"bishop",color:j}),b.push({image:"img/".concat(j,"-bishop.png"),x:2,y:y,type:"bishop",color:j}),b.push({image:"img/".concat(j,"-knight.png"),x:6,y:y,type:"knight",color:j}),b.push({image:"img/".concat(j,"-knight.png"),x:1,y:y,type:"knight",color:j}),b.push({image:"img/".concat(j,"-rook.png"),x:7,y:y,type:"rook",color:j}),b.push({image:"img/".concat(j,"-rook.png"),x:0,y:y,type:"rook",color:j})}for(var v=0;v<9;v++)b.push({image:"img/b-pawn.png",x:v,y:6,type:"pawn",color:"b"});for(var O=0;O<9;O++)b.push({image:"img/w-pawn.png",x:O,y:1,type:"pawn",color:"w"});var x=function(){p.on("updateBoard",(function(e){k(e)}));for(var e=Object(i.useState)(null),t=Object(o.a)(e,2),n=t[0],r=t[1],c=Object(i.useState)(0),a=Object(o.a)(c,2),f=a[0],l=a[1],m=Object(i.useState)(0),j=Object(o.a)(m,2),y=j[0],v=j[1],O=Object(i.useState)(b),x=Object(o.a)(O,2),w=x[0],k=x[1],S=Object(i.useState)("w"),q=Object(o.a)(S,2),M=q[0],I=q[1],P=Object(i.useRef)(null),N=[],W=function(e){for(var t=function(t){var n=t+e+2,i=void 0;w.forEach((function(n){n.x===t&&n.y===e&&(i=n.image)})),N.push(Object(s.jsx)(u,{number:n,image:i},g[t]+d[e]))},n=0;n<g.length;n++)t(n)},C=d.length-1;C>=0;C--)W(C);return Object(s.jsx)("div",{className:"board",onMouseDown:function(e){return function(e){var t=P.current;if(e.target.classList.contains("piece")&&t){l(Math.floor((e.clientX-t.offsetLeft)/(t.clientWidth/8))),v(Math.abs(Math.ceil((e.clientY-t.offsetTop-800)/(t.clientWidth/8))));var n=e.clientX-e.target.clientWidth/2,i=e.clientY-e.target.clientHeight/2;e.target.style.position="absolute",e.target.style.top="".concat(i,"px"),e.target.style.left="".concat(n,"px")}r(e.target)}(e)},onMouseMove:function(e){return function(e){var t=P.current;if(n&&n.classList.contains("piece")&&t){var i=t.offsetLeft,r=t.offsetTop,c=t.clientWidth+t.offsetLeft-t.clientWidth/8,a=t.clientHeight+t.offsetTop-t.clientHeight/8,o=e.clientX-e.target.clientWidth/2,s=e.clientY-e.target.clientHeight/2;n.style.position="absolute",n.style.left="".concat(o<i?i:o>c?c:o,"px"),n.style.top="".concat(s<r?r:s>a?a:s,"px")}}(e)},onMouseUp:function(e){return function(e){var t=P.current;if(n&&t){var i=Math.floor((e.clientX-t.offsetLeft)/(t.clientWidth/8)),c=Math.abs(Math.ceil((e.clientY-t.offsetTop-800)/(t.clientWidth/8))),a=w.find((function(e){return e.x===f&&e.y===y}));if(a){var o=h.validMove(f,y,i,c,a.type,a.color,w),s=h.isEnPassant(f,y,i,c,a.type,a.color,w),u="w"===a.color?1:-1;if(s&&a.color===M){var l=w.reduce((function(e,t){return t.x===f&&t.y===y?(t.enPassant=!1,t.x=i,t.y=c,e.push(t)):t.x===i&&t.y===c-u||("pawn"===t.type&&(t.enPassant=!1),e.push(t)),e}),[]);k(l),I("w"===M?"b":"w");var g=window.sessionStorage.getItem("gameId");p.emit("move",g,l)}else if(o&&a.color===M){var d=w.reduce((function(e,t){return t.y===y&&t.x===f?(2===Math.abs(y-c)&&"pawn"===t.type?t.enPassant=!0:t.enPassant=!1,t.x=i,t.y=c,"pawn"!==t.type||0!==t.y&&7!==t.y||(t.type="queen",t.image="img/".concat(t.color,"-queen.png")),e.push(t)):t.x===i&&t.y===c||("pawn"===t.type&&(t.enPassant=!1),e.push(t)),e}),[]);k(d),I("w"===M?"b":"w");var b=window.sessionStorage.getItem("gameId");p.emit("move",b,d)}else n.style.position="relative",n.style.removeProperty("top"),n.style.removeProperty("left")}r(null)}}(e)},ref:P,children:N})},w=n(24),k=n(2),S=n(57),q=n(16),M=n(61),I=n(60),P=n(58),N=n(35),W=function(e){Object(M.a)(n,e);var t=Object(I.a)(n);function n(){var e;return Object(l.a)(this,n),(e=t.call(this)).create=function(){p.emit("createRoom",""),p.on("generateId",(function(t){e.setState({gameId:t})}))},e.join=function(){var t=function(e){return window.sessionStorage.setItem("gameId",e),p.emit("join",e),e}(e.id.current.value);e.setState({gameId:t})},e.state={gameId:""},e.join=e.join.bind(Object(q.a)(e)),e.create=e.create.bind(Object(q.a)(e)),e.id=r.a.createRef(null),e}return Object(S.a)(n,[{key:"render",value:function(){return Object(s.jsx)(r.a.Fragment,{children:Object(s.jsxs)(P.a,{className:"text-center",children:[Object(s.jsx)("h1",{children:"Welcome to Chess"}),Object(s.jsx)("h2",{children:Object(s.jsx)(N.a,{variant:"success",className:"w-100",onClick:this.create,children:"Create Room"})}),Object(s.jsx)("div",{children:this.state.gameId}),Object(s.jsx)(w.b,{to:this.state.gameId?"/game":"/",children:Object(s.jsx)("h2",{children:Object(s.jsx)(N.a,{variant:"primary",className:"w-100",onClick:this.join,children:"Join Room"})})}),Object(s.jsx)("input",{type:"text",className:"w-100",ref:this.id})]})})}}]),n}(i.Component);var C=function(){return Object(s.jsx)("div",{className:"App",children:Object(s.jsx)(w.a,{basename:window.location.pathname||"",children:Object(s.jsxs)(k.c,{children:[Object(s.jsx)(k.a,{exact:!0,path:"/",component:W}),Object(s.jsx)(k.a,{path:"/game",component:x})]})})})},L=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,102)).then((function(t){var n=t.getCLS,i=t.getFID,r=t.getFCP,c=t.getLCP,a=t.getTTFB;n(e),i(e),r(e),c(e),a(e)}))};a.a.render(Object(s.jsx)(r.a.StrictMode,{children:Object(s.jsx)(C,{})}),document.getElementById("root")),L()},37:function(e,t,n){}},[[101,1,2]]]);
//# sourceMappingURL=main.9773ba02.chunk.js.map