(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{248:function(t,e,r){var content=r(252);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(24).default)("51d88c79",content,!0,{sourceMap:!1})},249:function(t,e,r){var content=r(254);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(24).default)("7d433f80",content,!0,{sourceMap:!1})},251:function(t,e,r){"use strict";var n=r(248);r.n(n).a},252:function(t,e,r){(e=r(23)(!1)).push([t.i,".system[data-v-801fb6be]{color:#fff;font-family:monospace;background-color:rgba(235,221,204,.151)}.system[data-v-801fb6be],.system p[data-v-801fb6be]{margin-bottom:1rem}.system p[data-v-801fb6be]{font-size:5rem}.msgmain[data-v-801fb6be]{display:inline-block}.name[data-v-801fb6be]{font-size:25px;color:#270e3f}.msgtext[data-v-801fb6be]{margin-left:20px}.msgtext[data-v-801fb6be],.sendtime[data-v-801fb6be]{font-family:monospace}.sendtime[data-v-801fb6be]{color:grey}.msg-wrapper[data-v-801fb6be]{display:flex;flex-direction:column}.msg[data-v-801fb6be]{padding:1rem;width:60%;box-shadow:0 1px 0 0 rgba(50,50,50,.3);border-radius:4px;background:#1976d2;color:#fff;position:relative;word-break:break-all;margin:0 1rem 1rem}.msg__date[data-v-801fb6be]{text-decoration:underline}.owner[data-v-801fb6be]{background:hsla(0,100%,99%,.842);color:#000;align-self:flex-end;font-family:monospace}@media(max-width:400px){.msg[data-v-801fb6be]{width:90%}}",""]),t.exports=e},253:function(t,e,r){"use strict";var n=r(249);r.n(n).a},254:function(t,e,r){(e=r(23)(!1)).push([t.i,".chat-wrapper[data-v-75b08dac]{height:100%;overflow:hidden}.message[data-v-75b08dac]{position:absolute;bottom:0;left:0;right:0;padding:1rem 3rem 0;background-color:#c2f8b1}.chatList[data-v-75b08dac]{position:absolute;top:0;right:10%;left:10%;bottom:80px;padding:1rem;overflow-y:auto;color:#fff;background-color:rgba(204,206,165,.2);border-radius:5px}.chat__typing[data-v-75b08dac]{position:absolute;display:flex;bottom:50px}.chat__typing-user[data-v-75b08dac]:not(first-child){margin-left:15px}",""]),t.exports=e},257:function(t,e,r){"use strict";r.r(e);r(50),r(22),r(15),r(8),r(29);var n=r(20),o=r(35),c=(r(38),{props:{message:{type:Object,default:function(){}},owner:{type:Boolean}},computed:{isSystemMessage:function(){return"admin"===this.message.name}}}),l=(r(251),r(13)),f=Object(l.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-row",{attrs:{justify:"center","no-gutters":""}},[t.isSystemMessage?r("h1",{staticClass:"text-center  system"},[t._v("\n    "+t._s(t.message.text)+"\n  ")]):r("v-col",{staticClass:"msg-wrapper"},[r("v-row",{staticClass:"msg",class:{owner:t.owner},attrs:{"no-gutters":"",justify:"space-between"}},[r("v-col",{attrs:{cols:"auto"}},[r("v-avatar",[r("img",{attrs:{src:t.message.photo}})]),t._v(" "),r("span",{staticClass:"name"},[t._v(t._s(t.message.name))])],1),t._v(" "),r("v-col",{attrs:{cols:"7"}},[r("p",{staticClass:"mb-0  msgtext"},[t._v(t._s(t.message.text))])]),t._v(" "),r("v-col",{attrs:{cols:"auto"}},[r("span",{staticClass:"sendtime "},[t._v(t._s(t.message.time))])])],1)],1)],1)}),[],!1,null,"801fb6be",null).exports;function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v={data:function(){return{text:"",rules:[function(t){return!!t||"請輸入一點文字吧!"},function(t){return t&&t.length<=256||"字數已經超過囉~"}]}},computed:m({},Object(o.c)(["typingStatus"])),methods:m(m({},Object(o.b)(["createMessage","setTypingStatus"])),{},{send:function(){this.$refs.form.validate()&&(this.createMessage(this.text),this.text="",this.setTypingStatus(!1),this.resetValidation())},resetValidation:function(){this.$refs.form.resetValidation()},typing:function(){this.typingStatus||this.setTypingStatus(!0)}})};function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function y(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var O={name:"ChatRoom",layout:"chat",components:{ChatList:f,Message:Object(l.a)(v,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-form",{ref:"form",on:{submit:function(e){return e.preventDefault(),t.send(e)}}},[r("v-text-field",{attrs:{label:"輸入訊息...",outlined:"",rules:t.rules,"append-icon":"fa fa-rocket"},on:{input:t.typing,"click:append":t.send,blur:t.resetValidation},model:{value:t.text,callback:function(e){t.text=e},expression:"text"}})],1)}),[],!1,null,"ec9cd49e",null).exports},computed:y(y({},Object(o.d)(["user","messages","users"])),Object(o.c)(["typingUsers"])),mounted:function(){console.log(this.user.photo)},watch:{messages:function(){var t=this;setTimeout((function(){t.$refs.chat&&(t.$refs.chat.scrollTop=t.$refs.chat.scrollHeight)}),0)}},head:function(){return{title:"".concat(this.user.room)}}},w=(r(253),Object(l.a)(O,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"chat-wrapper"},[r("div",{ref:"chat",staticClass:"chatList"},t._l(t.messages,(function(e,n){return r("ChatList",{key:"message-"+n,attrs:{message:e,owner:e.id===t.user.id}})})),1),t._v(" "),t.typingUsers.length?r("div",{staticClass:"chat__typing"},t._l(t.typingUsers,(function(e,n){return r("p",{key:"typingUser-"+n,staticClass:"chat__typing-user"},[t._v("\n      "+t._s(e.name)+" is typing...\n    ")])})),0):t._e(),t._v(" "),r("div",{staticClass:"message"},[r("Message")],1)])}),[],!1,null,"75b08dac",null));e.default=w.exports}}]);