(this.webpackJsonppokeflix=this.webpackJsonppokeflix||[]).push([[0],{35:function(n,e,t){n.exports=t.p+"static/media/logopoke.92f8a692.png"},36:function(n,e,t){n.exports=t(64)},41:function(n,e,t){},59:function(n,e,t){},64:function(n,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),o=t(30),i=t.n(o),c=(t(41),t(10)),l=t(1),u=t(2);function s(){var n=Object(l.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  width: 100%;\n  height: 100%;\n"]);return s=function(){return n},n}function d(){var n=Object(l.a)(["\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n  padding-top: 56.25%;\n  @media (max-width: 800px) {\n    display: none;\n  }\n"]);return d=function(){return n},n}var p=u.b.div(d()),m=u.b.iframe(s());var f=function(n){var e=n.youtubeID;return r.a.createElement(p,null,r.a.createElement(m,{title:"Titulo do Iframe",src:"https://www.youtube.com/embed/".concat(e,"?autoplay=0&mute=1"),frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}))};function g(){var n=Object(l.a)(["\n  font-family: 'Roboto', sans-serif;\n  box-sizing: border-box;\n  cursor: pointer;\n  padding: 16px 24px;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 16px;\n  outline: none;\n  border-radius: 5px;\n  text-decoration: none;\n  display: inline-block;\n  border: 1px solid transparent;\n  color: var(--black);\n  background: var(--white);\n  border-color: var(--black);\n  transition: opacity .3s;\n  display: none;\n  margin: 0 auto;\n  @media (max-width: 800px) {\n    display: block;\n  }\n"]);return g=function(){return n},n}function b(){var n=Object(l.a)(["\n  height: 80vh;\n  position: relative;\n  color: #fff;\n  background-image: ",'; \n  background-size: cover;\n  background-position: center;\n  @media (max-width: 800px) {\n    height: auto;\n    min-height: 50vh;\n  }\n\n  &:after,\n  &:before {\n    content: "";\n    display: block;\n    position: absolute;\n    left: 0;\n    right: 0;\n    margin: auto;\n    height: 20%;\n  }\n\n  &:before {\n    top: 0;\n    height: 100%;\n    background: rgba(0,0,0,0.5);\n  }\n\n  &:after {\n    bottom: 0;\n    background: linear-gradient(0deg, #141414 0%, transparent 100%);\n  }\n']);return b=function(){return n},n}function h(){var n=Object(l.a)(["\n  font-style: normal;\n  font-weight: 300;\n  font-size: 40px;\n  line-height: 1;\n  margin-top: 0;\n  margin-bottom: 32px;\n\n  @media (max-width: 800px) {\n    font-size: 32px;\n    text-align: center;\n  }\n"]);return h=function(){return n},n}function v(){var n=Object(l.a)(["\n  @media (max-width: 800px) {\n    display: none;\n  }\n"]);return v=function(){return n},n}function x(){var n=Object(l.a)(["\n  font-family: Roboto;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 60px;\n  line-height: 70px;\n  display: flex;\n  align-items: center;\n  text-align: center;\n  display: inline-block; \n  padding: 25px;\n  line-height: 1;\n  border-radius: 4px;\n\n  @media (max-width: 800px) {\n    display: none;\n    font-size: 18px;\n    padding: 10px;\n  }\n"]);return x=function(){return n},n}function E(){var n=Object(l.a)(["\n  width: 50%;\n  display: inline-block;\n  margin-bottom: 50px;\n  @media (max-width: 800px) {\n    width: 100%;\n  }\n"]);return E=function(){return n},n}function w(){var n=Object(l.a)(["\n  margin-left: 5%;\n  margin-right: 5%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  z-index: 10;\n  @media (max-width: 800px) {\n    padding-top: 100px;\n    flex-direction: column;\n  }\n"]);return w=function(){return n},n}var y=u.b.section(w());y.Item=u.b.div(E()),y.Category=u.b.h1(x()),y.Description=u.b.p(v()),y.Title=u.b.h2(h());var k=u.b.section(b(),(function(n){var e=n.backgroundImage;return"url(".concat(e,")")})),j=u.b.button(g());function O(n){var e=n.videoTitle,t=n.videoDescription,a=n.url,o=a.replace(/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,"$7"),i="https://img.youtube.com/vi/".concat(o,"/maxresdefault.jpg");return r.a.createElement(k,{backgroundImage:i},r.a.createElement(y,null,r.a.createElement(y.Item,null,r.a.createElement(y.Title,null,e),r.a.createElement(y.Description,null,t)),r.a.createElement(y.Item,null,r.a.createElement(f,{youtubeID:o}),r.a.createElement(j,null,"Assistir"))))}function C(){var n=Object(l.a)(["\n  color: white;\n  min-height: 197px;\n  margin-left: 5%;\n  margin-bottom: 16px;\n"]);return C=function(){return n},n}function z(){var n=Object(l.a)(["\n  margin: 0;\n  padding-left: 0;\n  padding-bottom: 32px;\n  list-style: none;\n  display: flex;\n  overflow-x: auto;\n  flex-direction: row;\n  \n  li {\n    margin-right: 16px;\n  }\n"]);return z=function(){return n},n}function A(){var n=Object(l.a)(["\n  margin-left: 16px;\n  text-decoration: none;\n  transition: opacity .3s;\n  &:hover,\n  &:focus {\n    opacity: .5;\n  }\n  @media (max-width: 800px) {\n    display: block;\n    margin-bottom: 16px;\n    margin-left: 0;\n  }\n"]);return A=function(){return n},n}function F(){var n=Object(l.a)(["\n  font-style: normal;\n  font-weight: normal;\n  font-size: 35px;\n  line-height: 1;\n  margin-bottom: 16px;\n  display: inline-block;\n  padding: 20px;\n  background: red;\n  line-height: 1;\n  border-radius: 4px;\n\n  @media (max-width: 800px) {\n    font-size: 18px;\n    padding: 10px;\n  }\n"]);return F=function(){return n},n}var _=u.b.h3(F()),D=u.b.a(A()),T=(u.b.ul(z()),u.b.section(C()));function I(){var n=Object(l.a)(["\n  border: 2px solid;\n  border-radius: 4px;\n  text-decoration: none;\n  overflow: hidden;\n  cursor: pointer;\n  color: white;\n  flex: 0 0 298px;\n  width: 298px;\n  height: 197px;\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n  border-radius: 10px;\n  position: relative;\n  display: flex;\n  align-items: flex-end;\n  padding: 16px;\n\n  transition: opacity .3s;\n  &:hover,\n  &:focus {\n    opacity: .5;\n  }\n  \n  &:not(:first-child) {\n    margin-left: 20px;\n  }\n"]);return I=function(){return n},n}var L=u.b.a(I(),(function(n){var e=n.url;return"url(".concat(e,")")}));var N=function(n){var e=n.videoTitle,t=n.videoURL,a=n.categoryColor,o="https://img.youtube.com/vi/".concat(t.replace(/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,"$7"),"/hqdefault.jpg");return r.a.createElement(L,{url:o,href:t,target:"_blank",style:{borderColor:a||"red"},title:e})},V=t(34),R=t.n(V);function S(){var n=Object(l.a)(["\n  margin-right: 16px;\n  img {\n    margin: 16px;\n    width: 298px;\n    height: 197px;\n    object-fit: cover;\n  }\n"]);return S=function(){return n},n}function B(){var n=Object(l.a)(["\n  padding: 0;\n  margin: 0;\n  .slick-prev,\n  .slick-next {\n    z-index: 50;\n    top: 0;\n    bottom: 0;\n    margin: auto;\n    width: 30px;\n    height: 30px;\n    transform: initial;\n    &:before {\n      font-size: 30px;\n    }\n  }\n  \n  .slick-prev {\n    left: 0;\n  }\n  .slick-next {\n    right: 16px;\n  }\n"]);return B=function(){return n},n}var P=u.b.ul(B()),U=u.b.li(S()),J=function(n){var e=n.children;return r.a.createElement(P,null,r.a.createElement(R.a,{dots:!1,infinite:!1,speed:300,centerMode:!1,variableWidth:!0,adaptiveHeight:!0},e))};var K=function(n){var e=n.ignoreFirstVideo,t=n.category,a=t.titulo,o=t.cor,i=t.link_extra,c=t.videos;return r.a.createElement(T,null,a&&r.a.createElement(r.a.Fragment,null,r.a.createElement(_,{style:{backgroundColor:o||"red"}},a),i&&r.a.createElement(D,{href:i.url,target:"_blank"},i.text)),r.a.createElement(J,null,c.map((function(n,t){return e&&0===t?null:r.a.createElement(U,{key:n.titulo},r.a.createElement(N,{videoTitle:n.titulo,videoURL:n.url,categoryColor:o}))}))))},W=t(35),M=t.n(W),Y=(t(59),t(9));function $(){var n=Object(l.a)(["\n    color: var(--white);\n    border: 1px solid var(--white);\n    box-sizing: border-box;\n    cursor: pointer;\n    padding: 16px 24px;\n    font-style: normal;\n    font-weight: bold;\n    font-size: 16px;\n    outline: none;\n    border-radius: 5px;\n    text-decoration: none;\n    display: inline-block;\n    transition: opacity .3s;\n    &:hover,\n    &:focus {\n    opacity: .5;\n    }\n"]);return $=function(){return n},n}var q=u.b.button($());var H=function(){return r.a.createElement("nav",{className:"Menu"},r.a.createElement(Y.b,{to:"/"},r.a.createElement("img",{className:"Logo",src:M.a,alt:"PokeFlix Logo"})),r.a.createElement(q,{as:Y.b,className:"ButtonLink",to:"/cadastro/video"},"Novo V\xeddeo"))};function G(){var n=Object(l.a)(["\n  background: var(--black);\n  border-top: 2px solid var(--primary);\n  padding-left: 16px;\n  padding-right: 16px;\n  padding-top: 32px;\n  padding-bottom: 32px;\n  color: var(--white);\n  text-align: center;\n  @media (max-width: 800px) {\n    margin-bottom: 50px;\n  }\n"]);return G=function(){return n},n}var Q=u.b.footer(G());var X=function(){return r.a.createElement(Q,null,r.a.createElement("a",{href:"https://www.alura.com.br/"},r.a.createElement("img",{src:"https://www.alura.com.br/assets/img/alura-logo-white.1570550707.svg",alt:"Logo Alura"})),r.a.createElement("p",null,"Orgulhosamente criado durante a"," ",r.a.createElement("a",{href:"https://www.alura.com.br/"},"Imers\xe3o React da Alura")))};function Z(){var n=Object(l.a)(["\n      padding: ","; \n    "]);return Z=function(){return n},n}function nn(){var n=Object(l.a)(["\n    background-color: var(--black);\n    color: var(--white);\n    flex: 1;\n    padding-top: 50px;\n    padding-right: 5%;\n    padding-left:  5%;\n    ","\n"]);return nn=function(){return n},n}var en=u.b.main(nn(),(function(n){var e=n.paddingAll;return Object(u.a)(Z(),e)}));var tn=function(n){var e=n.children,t=n.paddingAll;return r.a.createElement(r.a.Fragment,null,r.a.createElement(H,null),r.a.createElement(en,{paddingAll:t},e),r.a.createElement(X,null))},an=t(8),rn=t.n(an),on=t(11),cn={URL_BACKEND_TOP:window.location.hostname.includes("localhost")?"http://localhost:8080":"https://pokeflix.herokuapp.com"},ln="".concat(cn.URL_BACKEND_TOP,"/categorias");var un={getAllWithVideos:function(){return fetch("".concat(ln,"?_embed=videos")).then(function(){var n=Object(on.a)(rn.a.mark((function n(e){var t;return rn.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!e.ok){n.next=5;break}return n.next=3,e.json();case 3:return t=n.sent,n.abrupt("return",t);case 5:throw new Error("N\xe3o foi poss\xedvel pegar os dados :(");case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}())},getAll:function(){return fetch("".concat(ln)).then(function(){var n=Object(on.a)(rn.a.mark((function n(e){var t;return rn.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!e.ok){n.next=5;break}return n.next=3,e.json();case 3:return t=n.sent,n.abrupt("return",t);case 5:throw new Error("N\xe3o foi poss\xedvel pegar os dados :(");case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}())}};var sn=function(){var n=Object(a.useState)([]),e=Object(c.a)(n,2),t=e[0],o=e[1];return Object(a.useEffect)((function(){un.getAllWithVideos().then((function(n){console.log(n[0].videos[0]),o(n)})).catch((function(n){console.log(n.message)}))}),[]),r.a.createElement(tn,{paddingAll:0},0===t.length&&r.a.createElement("div",null,"Loading..."),t.map((function(n,e){return 0===e?r.a.createElement("div",{key:n.id},r.a.createElement(O,{videoTitle:t[0].videos[0].titulo,url:t[0].videos[0].url,videoDescription:t[0].videos[0].description}),r.a.createElement(K,{ignoreFirstVideo:!0,category:t[0]})):r.a.createElement(K,{key:n.id,category:n})})))},dn=t(3),pn=t(20),mn=t(25);var fn=function(n){var e=Object(a.useState)(n),t=Object(c.a)(e,2),r=t[0],o=t[1];return{values:r,handleChange:function(n){var e,t;e=n.target.getAttribute("name"),t=n.target.value,o(Object(mn.a)(Object(mn.a)({},r),{},Object(pn.a)({},e,t)))},clearForm:function(){o(n)}}};function gn(){var n=Object(l.a)(['\n    &:not([type="color"]) + span {\n      transform: scale(.6) translateY(-10px);\n    }\n  ']);return gn=function(){return n},n}function bn(){var n=Object(l.a)(['\n  background: #53585D;\n  color: #F5F5F5;\n  display: block;\n  width: 100%;\n  height: 57px;\n  font-size: 18px;\n  \n  outline: 0;\n  border: 0;\n  border-top: 4px solid transparent;\n  border-bottom: 4px solid #53585D;\n  \n  padding: 16px 16px;\n  margin-bottom: 45px;\n  \n  resize: none;\n  border-radius: 4px;\n  transition: border-color .3s;\n  \n  &:focus {\n    border-bottom-color: var(--primary);\n  }\n  &:focus:not([type="color"]) + span {\n    transform: scale(.6) translateY(-10px);\n  }\n  ',"\n"]);return bn=function(){return n},n}function hn(){var n=Object(l.a)(["\n  color: #E5E5E5;\n  height: 57px;\n  position: absolute; \n  top: 0;\n  left: 16px;\n  \n  display: flex;\n  align-items: center;\n  \n  transform-origin: 0% 0%;\n  font-size: 18px;\n  font-style: normal;\n  font-weight: 300;\n  \n  transition: .1s ease-in-out;\n"]);return hn=function(){return n},n}function vn(){var n=Object(l.a)([""]);return vn=function(){return n},n}function xn(){var n=Object(l.a)(['\n  position: relative; \n  textarea {\n    min-height: 150px;\n  }\n  input[type="color"] {\n    padding-left: 56px;\n  }\n']);return xn=function(){return n},n}var En=u.b.div(xn()),wn=u.b.label(vn());wn.Text=u.b.span(hn());var yn=u.b.input(bn(),(function(n){return n.hasValue&&Object(u.a)(gn())}));function kn(n){var e=n.label,t=n.type,a=n.name,o=n.value,i=n.onChange,c=n.suggestions,l="id_".concat(a),u="textarea"===t?"textarea":"input",s=Boolean(o.length),d=Boolean(c.length);return r.a.createElement(En,null,r.a.createElement(wn,{htmlFor:l},r.a.createElement(yn,{as:u,id:l,type:t,value:o,name:a,hasValue:s,onChange:i,autoComplete:d?"off":"on",list:d?"suggestionFor_".concat(l):void 0}),r.a.createElement(wn.Text,null,e,":"),d&&r.a.createElement("datalist",{id:"suggestionFor_".concat(l)},c.map((function(n){return r.a.createElement("option",{value:n,key:"suggestionFor_".concat(l,"_option").concat(n)},n)})))))}kn.defaultProps={type:"text",value:"",onChange:function(){},suggestions:[]};var jn=kn,On="".concat(cn.URL_BACKEND_TOP,"/videos");var Cn={create:function(n){return fetch("".concat(On,"?_embed=videos"),{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(n)}).then(function(){var n=Object(on.a)(rn.a.mark((function n(e){var t;return rn.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!e.ok){n.next=5;break}return n.next=3,e.json();case 3:return t=n.sent,n.abrupt("return",t);case 5:throw new Error("N\xe3o foi poss\xedvel cadastrar os dados :(");case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}())}};var zn=function(){var n=Object(dn.f)(),e=Object(a.useState)([]),t=Object(c.a)(e,2),o=t[0],i=t[1],l=o.map((function(n){return n.titulo})),u=fn({titulo:"Video padr\xe3o",url:"https://www.youtube.com/watch?v=jOAU81jdi-c",categoria:"Front End"}),s=u.handleChange,d=u.values;return Object(a.useEffect)((function(){un.getAll().then((function(n){i(n)}))}),[]),r.a.createElement(tn,null,r.a.createElement("h1",null,"Cadastro de Video"),r.a.createElement("form",{onSubmit:function(e){e.preventDefault();var t=o.find((function(n){return n.titulo===d.categoria}));Cn.create({titulo:d.titulo,url:d.url,categoriaId:t.id}).then((function(){console.log("Cadastrou com sucesso!"),n.push("/")}))}},r.a.createElement(jn,{label:"T\xedtulo do V\xeddeo",name:"titulo",value:d.titulo,onChange:s}),r.a.createElement(jn,{label:"URL",name:"url",value:d.url,onChange:s}),r.a.createElement(jn,{label:"Categoria",name:"categoria",value:d.categoria,onChange:s,suggestions:l}),r.a.createElement(q,{type:"submit"},"Cadastrar")),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(Y.b,{to:"/cadastro/categoria"},"Cadastrar Categoria"))},An=t(26);var Fn=function(){var n=fn({nome:"",descricao:"",cor:""}),e=n.handleChange,t=n.values,o=n.clearForm,i=Object(a.useState)([]),l=Object(c.a)(i,2),u=l[0],s=l[1];return Object(a.useEffect)((function(){var n=window.location.hostname.includes("localhost")?"http://localhost:8080/categorias":"https://devsoutinhoflix.herokuapp.com/categorias";fetch(n).then(function(){var n=Object(on.a)(rn.a.mark((function n(e){var t;return rn.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.json();case 2:t=n.sent,s(Object(An.a)(t));case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}())}),[]),r.a.createElement(tn,null,r.a.createElement("h1",null,"Cadastro de Categoria:",t.nome),r.a.createElement("form",{onSubmit:function(n){n.preventDefault(),s([].concat(Object(An.a)(u),[t])),o()}},r.a.createElement(jn,{label:"Nome da Categoria",name:"nome",value:t.nome,onChange:e}),r.a.createElement(jn,{label:"Descri\xe7\xe3o",type:"textarea",name:"descricao",value:t.descricao,onChange:e}),r.a.createElement(jn,{label:"Cor",type:"color",name:"cor",value:t.cor,onChange:e}),r.a.createElement(q,null,"Cadastrar")),0===u.length&&r.a.createElement("div",null,"Loading..."),r.a.createElement("ul",null,u.map((function(n){return r.a.createElement("li",{key:"".concat(n.titulo)},n.titulo)}))),r.a.createElement(Y.b,{to:"/"},"Ir para home"))};i.a.render(r.a.createElement(Y.a,null,r.a.createElement(dn.c,null,r.a.createElement(dn.a,{path:"/cadastro/video",component:zn}),r.a.createElement(dn.a,{path:"/cadastro/categoria",component:Fn}),r.a.createElement(dn.a,{path:"/",component:sn,exact:!0}),r.a.createElement(dn.a,{component:function(){return r.a.createElement("div",null,"P\xe1gina 404")}}))),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.b4850819.chunk.js.map