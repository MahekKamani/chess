(this.webpackJsonpchess=this.webpackJsonpchess||[]).push([[0],{101:function(e,t,n){"use strict";n.r(t);var i=n(0),r=n.n(i),c=n(55),o=n.n(c),a=(n(37),n(12)),s=n(1),u=function(e){return e.number%2===0?Object(s.jsx)("div",{className:"tile black-tiles",children:e.image&&Object(s.jsx)("div",{style:{backgroundImage:"url(".concat(e.image,")")},className:"piece ".concat(e.color)})}):Object(s.jsx)("div",{className:"tile white-tiles",children:e.image&&Object(s.jsx)("div",{style:{backgroundImage:"url(".concat(e.image,")")},className:"piece ".concat(e.color)})})},f=n(56),l=Object(f.io)("https://react-chess-backend.herokuapp.com/");l.on("updateBoard",(function(e){return e}));for(var p=n(22),h=new function e(){var t=this;Object(p.a)(this,e),this.isAnyPieceBetweenLinear=function(e,t,n,i,r,c){if("rook"===i||"queen"===i){if(r>e)for(var o=function(e){if(n.find((function(n){return n.x===e&&n.y===t})))return{v:!0}},a=r-1;a>e;a--){var s=o(a);if("object"===typeof s)return s.v}else if(r<e)for(var u=function(e){if(n.find((function(n){return n.x===e&&n.y===t})))return{v:!0}},f=r+1;f<e;f++){var l=u(f);if("object"===typeof l)return l.v}if(c>t)for(var p=function(t){if(n.find((function(n){return n.y===t&&n.x===e})))return{v:!0}},h=c-1;h>t;h--){var d=p(h);if("object"===typeof d)return d.v}else if(c<t)for(var g=function(t){if(n.find((function(n){return n.y===t&&n.x===e})))return{v:!0}},b=c+1;b<t;b++){var v=g(b);if("object"===typeof v)return v.v}}return!1},this.isAnyPieceBetweenAcross=function(e,t,n,i,r,c){if("bishop"===i||"queen"===i)if(r>e&&c>t)for(var o=function(e,t){if(n.find((function(n){return n.x===e&&n.y===t})))return s=t,a=e,{v:!0};e--,t--,a=e,s=t},a=r-1,s=c-1;a>e&&s>t;){var u=o(a,s);if("object"===typeof u)return u.v}else if(r<e&&c>t)for(var f=function(e,t){if(n.find((function(n){return n.x===e&&n.y===t})))return p=t,l=e,{v:!0};e++,t--,l=e,p=t},l=r+1,p=c-1;l<e&&p>t;){var h=f(l,p);if("object"===typeof h)return h.v}else if(r>e&&c<t)for(var d=function(e,t){if(n.find((function(n){return n.x===e&&n.y===t})))return b=t,g=e,{v:!0};e--,t++,g=e,b=t},g=r-1,b=c+1;g>e&&b<t;){var v=d(g,b);if("object"===typeof v)return v.v}else for(var y=function(e,t){if(n.find((function(n){return n.x===e&&n.y===t})))return j=t,m=e,{v:!0};e++,t++,m=e,j=t},m=r+1,j=c+1;m<e&&j<t;){var x=y(m,j);if("object"===typeof x)return x.v}return!1},this.isSquareOccupied=function(e,t,n){return!!n.find((function(n){return n.x===e&&n.y===t}))},this.isEnPassant=function(e,t,n,i,r,c,o){if("pawn"===r){var a="w"===c?1:-1;if((n-e===-1||n-e===1)&&i-t===a)if(o.find((function(e){return e.x===n&&e.y===i-a&&e.enPassant})))return!0}return!1},this.isOpponent=function(e,t,n,i){return!!n.find((function(n){return n.x===e&&n.y===t&&n.color!==i}))},this.castling=function(e,n,i,r,c,o,a){if(a){if(4===i&&6===e&&("w"===o&&0===n||"b"===o&&7===r)){for(var s=!0,u=i+1;u<7&&!(s=t.isSquareOccupied(u,n,c));u++);if(!s)if(c.find((function(e){return 7===e.x&&e.y===n&&"rook"===e.type&&e.color===o})))return!0}if(4===i&&2===e&&("w"===o&&0===r||"b"===o&&7===r)){for(var f=!0,l=i-1;l>0&&!(f=t.isSquareOccupied(l,n,c));l--);if(!f)if(c.find((function(e){return 0===e.x&&e.y===n&&"rook"===e.type&&e.color===o})))return!0}}return!1},this.validMove=function(e,n,i,r,c,o,a,s){if("pawn"===c){var u="w"===o?1:-1;if(e===i&&n===("w"===o?1:6)&&r-n===2*u){if(!t.isSquareOccupied(i,r,a)&&!t.isSquareOccupied(i,r-u,a))return!0}else if(e===i&&r-n===u){if(!t.isSquareOccupied(i,r,a))return!0}else if(i-e===1&&r-n===u){if(t.isOpponent(i,r,a,o))return!0}else if(i-e===-1&&r-n===u&&t.isOpponent(i,r,a,o))return!0}else if("bishop"===c){if(Math.abs(e-i)===Math.abs(n-r)&&!t.isAnyPieceBetweenAcross(i,r,a,c,e,n)){if(!t.isSquareOccupied(i,r,a))return!0;if(t.isOpponent(i,r,a,o))return!0}}else if("rook"===c){if((e!==i&&n===r||e===i&&n!==r)&&!t.isAnyPieceBetweenLinear(i,r,a,c,e,n)){if(!t.isSquareOccupied(i,r,a))return!0;if(t.isOpponent(i,r,a,o))return!0}}else if("knight"===c){if(e-i===2||e-i===-2){if(n-r===1||n-r===-1){if(!t.isSquareOccupied(i,r,a))return!0;if(t.isOpponent(i,r,a,o))return!0}}else if((n-r===2||n-r===-2)&&(e-i===1||e-i===-1)){if(!t.isSquareOccupied(i,r,a))return!0;if(t.isOpponent(i,r,a,o))return!0}}else if("queen"===c){if(Math.abs(i-e)===Math.abs(r-n)){if(!t.isAnyPieceBetweenAcross(i,r,a,c,e,n)){if(!t.isSquareOccupied(i,r,a))return!0;if(t.isOpponent(i,r,a,o))return!0}}else if((e!==i&&n===r||e===i&&n!==r)&&!t.isAnyPieceBetweenLinear(i,r,a,c,e,n)){if(!t.isSquareOccupied(i,r,a))return!0;if(t.isOpponent(i,r,a,o))return!0}}else if("king"===c)if(e===i||n===r){if(Math.abs(e+n-(i+r))<2&&!t.isSquareOccupied(i,r,a))return s.castle=!1,!0}else if(Math.abs(e+n-(i+r))<=2&&!t.isSquareOccupied(i,r,a))return s.castle=!1,!0;return!1}},d=["a","b","c","d","e","f","g","h"],g=["1","2","3","4","5","6","7","8"],b=[],v=0;v<2;v++){var y=0===v?"w":"b",m=0===v?0:7;b.push({image:"img/".concat(y,"-king.png"),x:4,y:m,type:"king",color:y,castle:!0}),b.push({image:"img/".concat(y,"-queen.png"),x:3,y:m,type:"queen",color:y}),b.push({image:"img/".concat(y,"-bishop.png"),x:5,y:m,type:"bishop",color:y}),b.push({image:"img/".concat(y,"-bishop.png"),x:2,y:m,type:"bishop",color:y}),b.push({image:"img/".concat(y,"-knight.png"),x:6,y:m,type:"knight",color:y}),b.push({image:"img/".concat(y,"-knight.png"),x:1,y:m,type:"knight",color:y}),b.push({image:"img/".concat(y,"-rook.png"),x:7,y:m,type:"rook",color:y}),b.push({image:"img/".concat(y,"-rook.png"),x:0,y:m,type:"rook",color:y})}for(var j=0;j<9;j++)b.push({image:"img/b-pawn.png",x:j,y:6,type:"pawn",color:"b"});for(var x=0;x<9;x++)b.push({image:"img/w-pawn.png",x:x,y:1,type:"pawn",color:"w"});var O=function(){l.on("updateBoard",(function(e){S(e),I("w"===M?"b":"w")}));for(var e=Object(i.useState)(null),t=Object(a.a)(e,2),n=t[0],r=t[1],c=Object(i.useState)(0),o=Object(a.a)(c,2),f=o[0],p=o[1],v=Object(i.useState)(0),y=Object(a.a)(v,2),m=y[0],j=y[1],x=Object(i.useState)(b),O=Object(a.a)(x,2),w=O[0],S=O[1],k=Object(i.useState)("w"),q=Object(a.a)(k,2),M=q[0],I=q[1],P=Object(i.useRef)(null),L=function(e){var t=P.current;if(n&&t){var i=Math.floor((e.clientX-t.offsetLeft)/(t.clientWidth/8)),c=Math.abs(Math.ceil((e.clientY-t.offsetTop-t.clientWidth)/(t.clientWidth/8))),o=w.find((function(e){return e.x===f&&e.y===m}));if(o){var a=h.validMove(f,m,i,c,o.type,o.color,w,o),s=h.isEnPassant(f,m,i,c,o.type,o.color,w),u=h.castling(i,c,f,m,w,o.color,o.castle),p="w"===o.color?1:-1;if(s&&o.color===M){var d=w.reduce((function(e,t){return t.x===f&&t.y===m?(t.enPassant=!1,t.x=i,t.y=c,e.push(t)):t.x===i&&t.y===c-p||("pawn"===t.type&&(t.enPassant=!1),e.push(t)),e}),[]);S(d),I("w"===M?"b":"w");var g=window.sessionStorage.getItem("gameId");l.emit("move",g,d)}else if(a&&o.color===M){var b=w.reduce((function(e,t){return t.y===m&&t.x===f?(2===Math.abs(m-c)&&"pawn"===t.type?t.enPassant=!0:t.enPassant=!1,t.x=i,t.y=c,"pawn"!==t.type||0!==t.y&&7!==t.y||(t.type="queen",t.image="img/".concat(t.color,"-queen.png")),e.push(t)):t.x===i&&t.y===c||("pawn"===t.type&&(t.enPassant=!1),e.push(t)),e}),[]);S(b),I("w"===M?"b":"w");var v=window.sessionStorage.getItem("gameId");l.emit("move",v,b)}else if(u&&o.color===M){var y=w.reduce((function(e,t){if(t.x===f&&t.y===m)if(t.x=i,t.y=c,t.castle=!1,e.push(t),6===t.x){var n=e.find((function(e){return 7===e.x&&e.y===c}));n.x=5,e.push(n)}else if(2===t.x){var r=e.find((function(e){return 0===e.x&&e.y===c}));r.x=3,e.push(r)}return e}),w);S(y),I("w"===M?"b":"w");var j=window.sessionStorage.getItem("gameId");l.emit("move",j,y)}else n.style.position="relative",n.style.removeProperty("top"),n.style.removeProperty("left")}r(null)}},W=[],A=function(e){for(var t=function(t){var n=t+e+2,i=void 0,r="";w.forEach((function(n){n.x===t&&n.y===e&&(i=n.image,r=n.color)})),W.push(Object(s.jsx)(u,{number:n,image:i,color:r},d[t]+g[e]))},n=0;n<d.length;n++)t(n)},B=g.length-1;B>=0;B--)A(B);return Object(s.jsx)("div",{className:"board",onMouseDown:function(e){return function(e){var t=P.current;if(e.target.classList.contains("piece")&&t&&e.target.classList.contains("".concat(M))){p(Math.floor((e.clientX-t.offsetLeft)/(t.clientWidth/8))),j(Math.abs(Math.ceil((e.clientY-t.offsetTop-t.clientWidth)/(t.clientWidth/8))));var n=e.clientX-e.target.clientWidth/2,i=e.clientY-e.target.clientHeight/2;e.target.style.position="absolute",e.target.style.top="".concat(i,"px"),e.target.style.left="".concat(n,"px")}else L(e);r(e.target)}(e)},onMouseMove:function(e){return function(e){var t=P.current;if(n&&n.classList.contains("piece")&&t&&e.target.classList.contains("".concat(M))){var i=t.offsetLeft,r=t.offsetTop,c=t.clientWidth+t.offsetLeft-t.clientWidth/8,o=t.clientHeight+t.offsetTop-t.clientHeight/8,a=e.clientX-e.target.clientWidth/2,s=e.clientY-e.target.clientHeight/2;n.style.position="absolute",n.style.left="".concat(a<i?i:a>c?c:a,"px"),n.style.top="".concat(s<r?r:s>o?o:s,"px")}}(e)},onMouseUp:function(e){return L(e)},ref:P,children:W})},w=n(24),S=n(2),k=n(57),q=n(16),M=n(61),I=n(60),P=n(58),L=n(35),W=function(e){Object(M.a)(n,e);var t=Object(I.a)(n);function n(){var e;return Object(p.a)(this,n),(e=t.call(this)).create=function(){l.emit("createRoom",""),l.on("generateId",(function(t){e.setState({gameId:t})}))},e.join=function(){var t=function(e){return window.sessionStorage.setItem("gameId",e),l.emit("join",e),e}(e.id.current.value);e.setState({gameId:t})},e.state={gameId:""},e.join=e.join.bind(Object(q.a)(e)),e.create=e.create.bind(Object(q.a)(e)),e.id=r.a.createRef(null),e}return Object(k.a)(n,[{key:"render",value:function(){return Object(s.jsx)(r.a.Fragment,{children:Object(s.jsxs)(P.a,{className:"text-center",children:[Object(s.jsx)("h1",{children:"Welcome to Chess"}),Object(s.jsx)("h2",{children:Object(s.jsx)(L.a,{variant:"success",className:"w-100",onClick:this.create,children:"Create Room"})}),Object(s.jsx)("div",{children:this.state.gameId}),Object(s.jsx)(w.b,{to:this.state.gameId?"/game":"/",children:Object(s.jsx)("h2",{children:Object(s.jsx)(L.a,{variant:"primary",className:"w-100",onClick:this.join,children:"Join Room"})})}),Object(s.jsx)("input",{type:"text",className:"w-100",ref:this.id})]})})}}]),n}(i.Component);var A=function(){return Object(s.jsx)("div",{className:"App",children:Object(s.jsx)(w.a,{basename:window.location.pathname||"",children:Object(s.jsxs)(S.c,{children:[Object(s.jsx)(S.a,{exact:!0,path:"/",component:W}),Object(s.jsx)(S.a,{path:"/game",component:O})]})})})},B=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,102)).then((function(t){var n=t.getCLS,i=t.getFID,r=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),i(e),r(e),c(e),o(e)}))};o.a.render(Object(s.jsx)(r.a.StrictMode,{children:Object(s.jsx)(A,{})}),document.getElementById("root")),B()},37:function(e,t,n){}},[[101,1,2]]]);
//# sourceMappingURL=main.e2fccc05.chunk.js.map