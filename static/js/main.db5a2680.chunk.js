(this["webpackJsonptic-tac-toe"]=this["webpackJsonptic-tac-toe"]||[]).push([[0],{25:function(n,e,t){"use strict";t.r(e);var r,a,i,o,c,l,s,u,d,b,p,f,j,v,x,h,O,g=t(13),m=t.n(g),y=t(2),w="X",_="O",k=t(3),G=t(4);!function(n){n[n.Game=0]="Game",n[n.None=1]="None",n[n.Horizontal_0=2]="Horizontal_0",n[n.Horizontal_1=3]="Horizontal_1",n[n.Horizontal_2=4]="Horizontal_2",n[n.Vertical_0=5]="Vertical_0",n[n.Vertical_1=6]="Vertical_1",n[n.Vertical_2=7]="Vertical_2",n[n.LeftDiagonal=8]="LeftDiagonal",n[n.RightDiagonal=9]="RightDiagonal"}(r||(r={}));var z,M=G.a.div(a||(a=Object(k.a)(["\n  height: 100%;\n  font-family: Arial, Helvetica, sans-serif;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]))),H=G.a.div(i||(i=Object(k.a)(["\n  width: 600px;\n  height: 600px;\n  margin: auto;\n  background: #f7f7f7;\n  border-radius: 20px;\n  position: relative;\n\n  ","\n"])),(function(n){var e=n.disabled;return void 0!==e&&e&&"\n        opacity: 0.6;\n        pointer-events: none;\n  "})),S=G.a.div(o||(o=Object(k.a)(["\n  width: 33.2%;\n  cursor: pointer;\n  padding: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]))),R=G.a.div(c||(c=Object(k.a)(["\n  position: relative;\n  width: 100%;\n  height: 100%;\n\n  ::before,\n  ::after {\n    content: '';\n    position: absolute;\n    width: 100%;\n    height: 6px;\n    background: #545454;\n    top: 50%;\n  }\n\n  ::before {\n    transform: rotate(45deg);\n  }\n\n  ::after {\n    transform: rotate(-45deg);\n  }\n"]))),V=G.a.div(l||(l=Object(k.a)(["\n  width: 80%;\n  height: 80%;\n  border: 6px solid #545454;\n  border-radius: 100%;\n"]))),D=G.a.div(s||(s=Object(k.a)(["\n  display: flex;\n  height: 33%;\n\n  :not(:last-of-type) {\n    border-bottom: 4px solid turquoise;\n  }\n\n  & > div:not(:last-of-type) {\n    border-right: 4px solid turquoise;\n  }\n"]))),C=G.a.div(u||(u=Object(k.a)(["\n  margin-left: 20px;\n  min-height: 650px;\n  max-height: 650px;\n  width: 400px;\n  overflow-y: auto;\n  margin-top: 20px;\n"]))),N=G.a.div(d||(d=Object(k.a)(["\n  margin: 30px 0px;\n"]))),U=G.a.div(b||(b=Object(k.a)(["\n  display: flex;\n  width: 100%;\n  align-items: center;\n  justify-content: space-between;\n"]))),q=G.a.div(p||(p=Object(k.a)(["\n  width: 120px;\n  height: 20px;\n  border: 2px solid #545454;\n  border-radius: 6px;\n  font-weight: bold;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 2px 10px;\n  position: relative;\n\n  ","\n\n  &[data-current-mover='true'] {\n    border: 2px solid turquoise;\n  }\n\n  & > div:first-of-type {\n    color: #545454;\n  }\n\n  & > div:last-of-type {\n    color: #919191;\n  }\n\n  &[data-my-side='true'] {\n    ::before {\n      content: '\u0412\u044b';\n      position: absolute;\n      top: -20px;\n      left: 0px;\n      text-align: center;\n      color: turquoise;\n    }\n  }\n"])),(function(n){var e=n.disabled;return void 0!==e&&e?"pointer-events: none;":"cursor: pointer;"})),L=G.a.button(f||(f=Object(k.a)(["\n  background: turquoise;\n  color: #545454;\n  border: none;\n  font-size: 14px;\n  padding: 4px 10px;\n  font-weight: bold;\n  border-radius: 10px;\n\n  :enabled:hover {\n    background: #22f1dc;\n  }\n\n  :enabled:active {\n    background: #1ad4c1;\n  }\n\n  :enabled {\n    cursor: pointer;\n  }\n"]))),J=(j={},Object(y.a)(j,r.Game," display: none; "),Object(y.a)(j,r.None," display: none; "),Object(y.a)(j,r.Horizontal_0," \n    top: 15%;\n    width: 94%;\n    left: 3%; \n  "),Object(y.a)(j,r.Horizontal_1," \n    top: calc(50% - 3px);\n    width: 94%;\n    left: 3%; \n  "),Object(y.a)(j,r.Horizontal_2," \n    top: calc(85% - 10px);\n    width: 94%;\n    left: 3%; \n   "),Object(y.a)(j,r.Vertical_0,"\n    transform: rotate(90deg);\n    top: calc(50% - 5px);\n    width: 94%;\n    left: -30%;\n  "),Object(y.a)(j,r.Vertical_1,"\n    transform: rotate(90deg);\n    top: calc(50% - 5px);\n    width: 94%;\n    left: 3%;\n  "),Object(y.a)(j,r.Vertical_2,"\n    transform: rotate(90deg);\n    top: calc(50% - 5px);\n    width: 94%;\n    left: 36%;\n  "),Object(y.a)(j,r.LeftDiagonal,"\n    transform: rotate(45deg);\n    top: calc(50% - 5px);\n  "),Object(y.a)(j,r.RightDiagonal,"\n    transform: rotate(-45deg);\n    top: calc(50% - 5px);\n  "),j),E=G.a.div(v||(v=Object(k.a)(["\n  background: tomato;\n  height: 10px;\n  width: 100%;\n  position: absolute;\n  z-index: 3;\n\n  ","\n"])),(function(n){var e=n.endGameResult;return J[e]})),F=G.a.div(x||(x=Object(k.a)(["\n  font-size: 16px;\n  margin-bottom: 20px;\n"]))),X=G.a.div(h||(h=Object(k.a)(["\n  font-size: 14px;\n"]))),A=G.a.span(O||(O=Object(k.a)(["\n  font-size: 12px;\n  color: darkgray;\n  margin-right: 10px;\n"]))),B=t(5),I=t(17),T=t(9),K=t(0),P=function(n){if(null===function(n){for(var e=0;e<3;e++)for(var t=0;t<3;t++)if(!n[e][t])return{x:e,y:t};return null}(n))return r.None;for(var e=function(e){var t=n[e][0];if(t&&n[e].every((function(n){return n===t})))return{v:r.Horizontal_0+e};var a=n[0][e];return a&&n.every((function(n){return n[e]===a}))?{v:r.Vertical_0+e}:void 0},t=0;3!==t;t++){var a=e(t);if("object"===typeof a)return a.v}var i=n[0][0];if(i&&n.every((function(e,t){return n[t][t]===i})))return r.LeftDiagonal;var o=n[2][0];return o&&n.every((function(e,t){return n[2-t][t]===o}))?r.RightDiagonal:r.Game},Q=function(n){return JSON.parse(JSON.stringify(n))},W=function n(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return e.map((function(i,o){return i.map((function(i,c){if(!e[o][c]){var l=Q(e);l[o][c]=t;var s=P(l),u={x:o,y:c,currentMover:t},d=a+1;return s!==r.Game?{layer:d,result:t===_?1:-1,move:u,child:null}:{layer:d,result:0,move:u,child:n(l,t===w?_:w,d)}}}))}))},Y=function n(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[[{result:0,steps:0},{result:0,steps:0},{result:0,steps:0}],[{result:0,steps:0},{result:0,steps:0},{result:0,steps:0}],[{result:0,steps:0},{result:0,steps:0},{result:0,steps:0}]];return e.reduce((function(e,t,r){return t.reduce((function(e,t,a){return(null===t||void 0===t?void 0:t.result)&&(0===e[r][a].steps||e[r][a].steps>=t.layer)&&(e[r][a]={result:t.result,steps:t.layer}),(null===t||void 0===t?void 0:t.child)?n(t.child,e):e}),e)}),t)},Z=function(){var n,e=Object(K.useState)([[null,null,null],[null,null,null],[null,null,null]]),t=Object(T.a)(e,2),a=t[0],i=t[1],o=Object(K.useState)({currentMover:w,score:(n={},Object(y.a)(n,w,0),Object(y.a)(n,_,0),n),selectedUserMover:w,endGameResult:r.Game,currentStep:0}),c=Object(T.a)(o,2),l=c[0],s=c[1],u=Object(K.useState)([]),d=Object(T.a)(u,2),b=d[0],p=d[1],f=l.currentMover,j=l.selectedUserMover,v=Object(K.useCallback)((function(n,e){if(!a[n][e]){var t=Object(I.a)(a);t[n][e]=f;var o=P(t),c={mover:f,x:n,y:e,message:o!==r.Game?"\u0418\u0433\u0440\u0430 \u043e\u043a\u043e\u043d\u0447\u0435\u043d\u0430 ".concat(o===r.None?"\u043d\u0438\u0447\u044c\u0435\u0439":"\u043f\u043e\u0431\u0435\u0434\u043e\u0439 - ".concat(f),"!"):"",date:new Date};p((function(n){return n.concat(c)})),i(t),s((function(n){var e=Object(B.a)({},n);return o!==r.Game&&r.None!==o&&e.score[f]++,e.endGameResult=o,e.currentStep++,e.currentMover=f===w?_:w,e}))}}),[a,i,f,s]),x=Object(K.useCallback)((function(){if(f!==j){if(!a[1][1])return void v(1,1);var n=(r=W(a,f),Y(r).reduce((function(n,e,t){return e.reduce((function(n,e,r){return e.result&&e.steps<n.min?{pos:{x:t,y:r},min:e.steps}:n}),n)}),{pos:{x:0,y:0},min:100}).pos),e=n.x,t=n.y;v(e,t)}var r}),[f,j,a,v]);Object(K.useEffect)((function(){x()}),[f]),Object(K.useEffect)((function(){f!==j&&x()}),[j]);var h=Object(K.useCallback)((function(){i([[null,null,null],[null,null,null],[null,null,null]]),s((function(n){return Object(B.a)(Object(B.a)({},n),{},{currentMover:w,endGameResult:r.Game,currentStep:0})}))}),[i,s]),O=Object(K.useCallback)((function(n){return s((function(e){return Object(B.a)(Object(B.a)({},e),{},{selectedUserMover:n})}))}),[s]);return{gameField:a,settings:l,onMove:v,changeSelectedUserMover:O,reset:h,gameHistory:b}},$=t(1),nn=(z={},Object(y.a)(z,w,R),Object(y.a)(z,_,V),z),en=function(){var n=Z(),e=n.gameField,t=n.onMove,a=n.settings,i=n.reset,o=n.gameHistory,c=n.changeSelectedUserMover,l=a.currentMover,s=a.selectedUserMover,u=a.score,d=a.endGameResult,b=a.currentStep;return Object($.jsxs)(M,{children:[Object($.jsxs)("div",{children:[Object($.jsx)(N,{children:Object($.jsxs)(U,{children:[Object($.jsxs)(q,{disabled:b>0,"data-current-mover":l===w,"data-my-side":s===w,title:"\u0418\u0433\u0440\u0430\u0442\u044c \u0437\u0430 ".concat(w),onClick:function(){return c(w)},children:[Object($.jsx)("div",{children:w}),Object($.jsx)("div",{children:u.X})]}),Object($.jsx)("div",{children:Object($.jsx)(L,{onClick:i,children:"\u21bb \u043d\u0430\u0447\u0430\u0442\u044c \u0437\u0430\u043d\u043e\u0432\u043e"})}),Object($.jsxs)(q,{disabled:b>0,"data-current-mover":l===_,"data-my-side":s===_,title:"\u0418\u0433\u0440\u0430\u0442\u044c \u0437\u0430 ".concat(_),onClick:function(){return c(_)},children:[Object($.jsx)("div",{children:_}),Object($.jsx)("div",{children:u.O})]})]})}),Object($.jsx)("div",{children:Object($.jsxs)(H,{disabled:d!==r.Game,children:[Object($.jsx)(E,{endGameResult:d}),e.map((function(n,e){return Object($.jsx)(D,{children:n.map((function(n,r){var a="".concat(e,"_").concat(r);if(!n)return Object($.jsx)(S,{onClick:function(){return t(e,r)}},a);var i=nn[n];return Object($.jsx)(S,{children:Object($.jsx)(i,{})},a)}))},"row_".concat(e))}))]})})]}),Object($.jsxs)(C,{children:[Object($.jsx)(F,{children:"\u0418\u0441\u0442\u043e\u0440\u0438\u044f:"}),o.map((function(n){var e=n.mover,t=n.x,r=n.y,a=n.message,i=n.date;return Object($.jsxs)(X,{children:[Object($.jsxs)(A,{children:["(",null===i||void 0===i?void 0:i.toLocaleTimeString(),") ",e,": [",t,", ",r,"]"]}),a&&Object($.jsx)("span",{children:a})]},"h_".concat(t,"_").concat(r))}))]})]})};m.a.render(Object($.jsx)(en,{}),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.db5a2680.chunk.js.map