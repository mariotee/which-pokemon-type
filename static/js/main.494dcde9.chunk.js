(this["webpackJsonpwhich-pokemon-type"]=this["webpackJsonpwhich-pokemon-type"]||[]).push([[0],{35:function(e,n,t){e.exports={pokeNumber:"style_pokeNumber__2ctK-"}},62:function(e,n,t){},66:function(e,n,t){},67:function(e,n,t){},68:function(e,n,t){"use strict";t.r(n);var a=t(1),r=t(0),c=t.n(r),i=t(13),s=t.n(i),o=t(37),u=t(34),l=t(11),m=t.n(l),d=t(19),p=t(6),b=t(24),f=t.n(b),h=(t(62),["normal","grass","fire","water","electric","ice","fighting","poison","ground","flying","psychic","bug","rock","ghost","dark","dragon","steel","fairy"]),j=function(e){return e.filter((function(e){var n=e.pokemon.name;return!n.includes("-totem")&&!n.includes("-gmax")&&!n.includes("-mega")&&!n.endsWith("-battle-bond")&&!n.endsWith("-ash")&&!n.endsWith("-school")&&!n.endsWith("-10")&&!n.endsWith("-50")&&!n.endsWith("-cap")&&!n.endsWith("-eternamax")&&!(n.startsWith("minior-")&&"minior-red-meteor"!==n)&&!n.endsWith("lycanroc-midnight")&&!n.endsWith("lycanroc-dusk")&&!n.endsWith("rockruff-own-tempo")&&!n.endsWith("-busted")&&!n.endsWith("magearna-original")}))},g=function(e){return e.charAt(0).toUpperCase()+e.slice(1)},x=t.p+"static/media/normal.a9776648.png",O=t.p+"static/media/grass.0c8a77ef.png",k=t.p+"static/media/fire.3277d77f.png",v=t.p+"static/media/water.2fcb40f7.png",y=t.p+"static/media/electric.2e3808d7.png",_=t.p+"static/media/ice.a9638502.png",N=t.p+"static/media/fighting.c777e8ec.png",S=t.p+"static/media/poison.8f3b0bcd.png",w=t.p+"static/media/ground.0ddb1818.png",T=t.p+"static/media/flying.7de276f3.png",A=t.p+"static/media/psychic.7f7cc4f4.png",C=t.p+"static/media/bug.167802fd.png",W=t.p+"static/media/rock.06ce1a1f.png",K=t.p+"static/media/ghost.7452d549.png",H=t.p+"static/media/dark.c0450a81.png",P=t.p+"static/media/dragon.3c3d4c99.png",U=t.p+"static/media/steel.86c2d7c9.png",z=t.p+"static/media/fairy.b3cc9537.png",F=function(e){switch(e){case"normal":return x;case"grass":return O;case"fire":return k;case"water":return v;case"electric":return y;case"ice":return _;case"fighting":return N;case"poison":return S;case"ground":return w;case"flying":return T;case"psychic":return A;case"bug":return C;case"rock":return W;case"ghost":return K;case"dark":return H;case"dragon":return P;case"steel":return U;case"fairy":return z}},J=function(e){var n=e.title,t=e.value,r=e.onChange;return Object(a.jsxs)(c.a.Fragment,{children:[Object(a.jsxs)("div",{className:"d-flex m-auto w-50 justify-content-between align-items-center",children:[Object(a.jsx)("label",{className:"lbl-large",children:n}),t&&Object(a.jsx)("img",{src:F(t),alt:"Type: "+t,width:40})]}),Object(a.jsxs)("select",{className:"form-control w-50 my-3 mx-auto",value:t,onChange:function(e){function n(n){return e.apply(this,arguments)}return n.toString=function(){return e.toString()},n}((function(e){r(e.target.value)})),children:[Object(a.jsx)("option",{}),h.map((function(e){return Object(a.jsx)("option",{value:e,children:g(e)},"type1-o-"+e)}))]})]})},G=function(){return Object(a.jsx)("div",{className:"pokeball-spinner"})},I=function(e){var n=e.onClick,t=e.disabled,r=e.loading;return Object(a.jsx)("button",{className:"btn btn-info d-block m-auto py-3",onClick:n,disabled:t,children:r?Object(a.jsxs)("div",{className:"d-flex align-items-center",children:["Loading... ",Object(a.jsx)(G,{})]}):"Find Pokemon!"})},B=t(35),D=t.n(B),M=function(e){var n=e.pokemon;return Object(a.jsxs)("li",{className:"list-group-item",children:[Object(a.jsxs)("div",{className:D.a.pokeNumber,children:["#",n.number]}),Object(a.jsxs)("div",{children:[g(n.name),n.imageUrl?Object(a.jsx)("img",{src:n.imageUrl,alt:n.name}):Object(a.jsx)("strong",{className:"d-block",children:" No Image Available"})]}),Object(a.jsxs)("p",{children:["Types: ",g(n.type1),n.type2&&", ".concat(g(n.type2))]})]},"pokemon-"+n.id)},E=function(e){var n=e.data;return Object(a.jsx)("ul",{className:"list-group poke-list",children:n.map((function(e){return Object(a.jsx)(M,{pokemon:e},"pli"+e.id)}))})},L=function(){return Object(a.jsx)("footer",{className:"text-left mx-4",children:Object(a.jsxs)("p",{children:["Pok\xe9mon and Pok\xe9mon character names are trademarks of Nintendo",Object(a.jsx)("br",{}),"Data from: ",Object(a.jsx)("a",{href:"https://pokeapi.co/",children:"Poke API"}),Object(a.jsx)("br",{}),"Pokemon Type Images from: ",Object(a.jsx)("a",{href:"https://www.deviantart.com/falke2009",children:"Falke2009 on DeviantArt"})]})})},R=function(e){var n=e.checked,t=e.onChange;return Object(a.jsxs)("div",{children:[Object(a.jsx)("label",{children:"Filter exclusively on Type 1"}),Object(a.jsx)("input",{className:"mx-4",type:"checkbox",checked:n,onChange:t})]})},q=t(70),Q=function(e){var n=e.show,t=e.onHide,r=e.type1,c=e.type2,i=function(e){var n=1;return r.name?(n*=r.strongAgainst.includes(e)?2:1,n*=r.weakAgainst.includes(e)?.5:1,"x"+(n*=r.zeroAgainst.includes(e)?0:1)):""},s=function(e){if(!c.name)return"";var n=1;return n*=c.strongAgainst.includes(e)?2:1,n*=c.weakAgainst.includes(e)?.5:1,"x"+(n*=c.zeroAgainst.includes(e)?0:1)},o=function(e){if(!r.name&&!c.name)return"";var n=1;return r.name&&(n*=r.vulnerableTo.includes(e)?2:1,n*=r.resistantTo.includes(e)?.5:1,n*=r.immuneTo.includes(e)?0:1),c.name&&(n*=c.vulnerableTo.includes(e)?2:1,n*=c.resistantTo.includes(e)?.5:1,n*=c.immuneTo.includes(e)?0:1),"x"+n};return Object(a.jsxs)(q.a,{show:n,onHide:t,children:[Object(a.jsx)(q.a.Header,{closeButton:!0,children:Object(a.jsx)("h3",{children:"Type Matchups"})}),Object(a.jsx)(q.a.Body,{children:Object(a.jsxs)("table",{className:"table table-striped table-sm",children:[Object(a.jsx)("thead",{children:Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{className:"table-primary",children:"Opponent Type"}),Object(a.jsx)("td",{className:"table-primary",children:r.name&&"Offense "+g(r.name)}),Object(a.jsx)("td",{className:"table-primary",children:c.name&&"Offense "+g(c.name)}),Object(a.jsx)("td",{className:"table-primary",children:(r.name||c.name)&&"Defense "})]})}),Object(a.jsx)("tbody",{children:h.map((function(e){return Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:g(e)}),Object(a.jsx)("td",{children:i(e)}),Object(a.jsx)("td",{children:s(e)}),Object(a.jsx)("td",{children:o(e)})]},"tr-"+e)}))})]})})]})},V=t(71);function X(e){var n=e.data,t=e.onChange,r=c.a.useState(!1),i=Object(p.a)(r,2),s=i[0],o=i[1];return Object(a.jsxs)("div",{className:"m-3",children:[Object(a.jsxs)("span",{className:"border p-1",onClick:function(){return o(!s)},children:["Filter by Region ",Object(a.jsx)("span",{className:s?"text-secondary":"text-primary",children:s?"\u25b2":"\u25bc"})]}),Object(a.jsx)(V.a,{in:s,children:Object(a.jsxs)("div",{className:"m-3",children:[Object(a.jsxs)("div",{className:"d-inline-block",children:[Object(a.jsx)("label",{children:"Kanto"}),Object(a.jsx)("input",{className:"ml-1 mr-3",type:"checkbox",value:"Kanto",onChange:function(e){function n(n){return e.apply(this,arguments)}return n.toString=function(){return e.toString()},n}((function(e){return t(e.target.value)})),checked:n.includes("Kanto")})]}),Object(a.jsxs)("div",{className:"d-inline-block",children:[Object(a.jsx)("label",{children:"Johto"}),Object(a.jsx)("input",{className:"ml-1 mr-3",type:"checkbox",value:"Johto",onChange:function(e){function n(n){return e.apply(this,arguments)}return n.toString=function(){return e.toString()},n}((function(e){return t(e.target.value)})),checked:n.includes("Johto")})]}),Object(a.jsxs)("div",{className:"d-inline-block",children:[Object(a.jsx)("label",{children:"Hoenn"}),Object(a.jsx)("input",{className:"ml-1 mr-3",type:"checkbox",value:"Hoenn",onChange:function(e){function n(n){return e.apply(this,arguments)}return n.toString=function(){return e.toString()},n}((function(e){return t(e.target.value)})),checked:n.includes("Hoenn")})]}),Object(a.jsxs)("div",{className:"d-inline-block",children:[Object(a.jsx)("label",{children:"Sinnoh"}),Object(a.jsx)("input",{className:"ml-1 mr-3",type:"checkbox",value:"Sinnoh",onChange:function(e){function n(n){return e.apply(this,arguments)}return n.toString=function(){return e.toString()},n}((function(e){return t(e.target.value)})),checked:n.includes("Sinnoh")})]}),Object(a.jsxs)("div",{className:"d-inline-block",children:[Object(a.jsx)("label",{children:"Unova"}),Object(a.jsx)("input",{className:"ml-1 mr-3",type:"checkbox",value:"Unova",onChange:function(e){function n(n){return e.apply(this,arguments)}return n.toString=function(){return e.toString()},n}((function(e){return t(e.target.value)})),checked:n.includes("Unova")})]}),Object(a.jsxs)("div",{className:"d-inline-block",children:[Object(a.jsx)("label",{children:"Kalos"}),Object(a.jsx)("input",{className:"ml-1 mr-3",type:"checkbox",value:"Kalos",onChange:function(e){function n(n){return e.apply(this,arguments)}return n.toString=function(){return e.toString()},n}((function(e){return t(e.target.value)})),checked:n.includes("Kalos")})]}),Object(a.jsxs)("div",{className:"d-inline-block",children:[Object(a.jsx)("label",{children:"Alola"}),Object(a.jsx)("input",{className:"ml-1 mr-3",type:"checkbox",value:"Alola",onChange:function(e){function n(n){return e.apply(this,arguments)}return n.toString=function(){return e.toString()},n}((function(e){return t(e.target.value)})),checked:n.includes("Alola")})]}),Object(a.jsxs)("div",{className:"d-inline-block",children:[Object(a.jsx)("label",{children:"Galar"}),Object(a.jsx)("input",{className:"ml-1 mr-3",type:"checkbox",value:"Galar",onChange:function(e){function n(n){return e.apply(this,arguments)}return n.toString=function(){return e.toString()},n}((function(e){return t(e.target.value)})),checked:n.includes("Galar")})]})]})})]})}function Y(e){return Object(a.jsx)("p",{className:"my-5 font-weight-bold text-danger",children:"No Pokemon Were Found With These Types"})}var Z="https://pokeapi.co/api/v2/type",$=function(){var e=c.a.useState(!1),n=Object(p.a)(e,2),t=n[0],r=n[1],i=c.a.useState(!1),s=Object(p.a)(i,2),l=s[0],b=s[1],h=c.a.useState(!1),g=Object(p.a)(h,2),x=g[0],O=g[1],k=c.a.useState(!1),v=Object(p.a)(k,2),y=v[0],_=v[1],N=c.a.useState(!1),S=Object(p.a)(N,2),w=S[0],T=S[1],A=c.a.useState(!1),C=Object(p.a)(A,2),W=C[0],K=C[1],H=c.a.useState(""),P=Object(p.a)(H,2),U=P[0],z=P[1],F=c.a.useState(""),G=Object(p.a)(F,2),B=G[0],D=G[1],M=c.a.useState({}),q=Object(p.a)(M,2),V=q[0],$=q[1],ee=c.a.useState({}),ne=Object(p.a)(ee,2),te=ne[0],ae=ne[1],re=c.a.useState({}),ce=Object(p.a)(re,2),ie=ce[0],se=ce[1],oe=c.a.useState({}),ue=Object(p.a)(oe,2),le=ue[0],me=ue[1],de=c.a.useState([]),pe=Object(p.a)(de,2),be=pe[0],fe=pe[1],he=c.a.useState([]),je=Object(p.a)(he,2),ge=je[0],xe=je[1];c.a.useEffect((function(){l&&!x&&V.damage_relations?b(!1):x&&!l&&te.damage_relations?O(!1):l&&x&&V.damage_relations&&te.damage_relations&&(b(!1),O(!1))}),[l,x,V,te,U,B]);var Oe=function(){var e=Object(d.a)(m.a.mark((function e(n){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b(!0),$({}),z(n),e.t0=$,e.next=6,f.a.get("".concat(Z,"/").concat(n));case 6:e.t1=e.sent.data,(0,e.t0)(e.t1);case 8:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),ke=function(){var e=Object(d.a)(m.a.mark((function e(n){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return O(!0),ae({}),D(n),e.t0=ae,e.next=6,f.a.get("".concat(Z,"/").concat(n));case 6:e.t1=e.sent.data,(0,e.t0)(e.t1);case 8:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),ve=function(){var e=Object(d.a)(m.a.mark((function e(n){var t,a,r,c,i,s;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==n.length){e.next=4;break}return _(!0),setTimeout((function(){return _(!1)}),3e3),e.abrupt("return");case 4:_(!1),t=j(n),a=[],r=Object(u.a)(t),e.prev=8,r.s();case 10:if((c=r.n()).done){e.next=19;break}return i=c.value,e.next=14,f.a.get(i.pokemon.url);case 14:s=e.sent,a.push({id:s.data.id,name:s.data.name,number:s.data.species.url.split("/")[6],imageUrl:s.data.sprites.front_default,type1:s.data.types[0].type.name,type2:s.data.types[1]&&s.data.types[1].type.name}),fe([].concat(a));case 17:e.next=10;break;case 19:e.next=24;break;case 21:e.prev=21,e.t0=e.catch(8),r.e(e.t0);case 24:return e.prev=24,r.f(),e.finish(24);case 27:case"end":return e.stop()}}),e,null,[[8,21,24,27]])})));return function(n){return e.apply(this,arguments)}}(),ye=function(){var e=Object(d.a)(m.a.mark((function e(){var n,t,a,c,i;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!l&&!x){e.next=3;break}return fe([]),e.abrupt("return");case 3:if(U||B){e.next=5;break}return e.abrupt("return");case 5:if(fe([]),r(!0),!V.damage_relations||!te.damage_relations){e.next=17;break}return n=V.damage_relations,se({name:V.name,strongAgainst:n.double_damage_to.map((function(e){return e.name})),vulnerableTo:n.double_damage_from.map((function(e){return e.name})),weakAgainst:n.half_damage_to.map((function(e){return e.name})),resistantTo:n.half_damage_from.map((function(e){return e.name})),zeroAgainst:n.no_damage_to.map((function(e){return e.name})),immuneTo:n.no_damage_from.map((function(e){return e.name}))}),t=te.damage_relations,me({name:te.name,strongAgainst:t.double_damage_to.map((function(e){return e.name})),vulnerableTo:t.double_damage_from.map((function(e){return e.name})),weakAgainst:t.half_damage_to.map((function(e){return e.name})),resistantTo:t.half_damage_from.map((function(e){return e.name})),zeroAgainst:t.no_damage_to.map((function(e){return e.name})),immuneTo:n.no_damage_from.map((function(e){return e.name}))}),a=V.pokemon.filter((function(e){return te.pokemon.map((function(e){return e.pokemon.name})).includes(e.pokemon.name)})),e.next=15,ve(a);case 15:e.next=31;break;case 17:if(!V.damage_relations){e.next=25;break}return c=V.damage_relations,se({name:V.name,strongAgainst:c.double_damage_to.map((function(e){return e.name})),vulnerableTo:c.double_damage_from.map((function(e){return e.name})),weakAgainst:c.half_damage_to.map((function(e){return e.name})),resistantTo:c.half_damage_from.map((function(e){return e.name})),zeroAgainst:c.no_damage_to.map((function(e){return e.name})),immuneTo:c.no_damage_from.map((function(e){return e.name}))}),me({}),e.next=23,ve(V.pokemon);case 23:e.next=31;break;case 25:if(!te.damage_relations){e.next=31;break}return i=te.damage_relations,me({name:te.name,strongAgainst:i.double_damage_to.map((function(e){return e.name})),vulnerableTo:i.double_damage_from.map((function(e){return e.name})),weakAgainst:i.half_damage_to.map((function(e){return e.name})),resistantTo:i.half_damage_from.map((function(e){return e.name})),zeroAgainst:i.no_damage_to.map((function(e){return e.name})),immuneTo:i.no_damage_from.map((function(e){return e.name}))}),se({}),e.next=31,ve(te.pokemon);case 31:r(!1);case 32:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.jsxs)("div",{className:"App my-2 mx-auto",children:[Object(a.jsx)("h3",{children:"Pokemon Types"}),Object(a.jsx)(J,{title:"Type 1",value:U,onChange:Oe}),Object(a.jsx)(R,{checked:W&&!B,onChange:function(){K(!W)}}),Object(a.jsx)(J,{title:"Type 2",value:B,onChange:ke}),be.length>0&&Object(a.jsx)("button",{className:"btn btn-primary d-block mx-auto my-3",onClick:function(){return T(!0)},children:"Show Type Matchups"}),Object(a.jsx)(Q,{show:w,onHide:function(){return T(!1)},type1:ie,type2:le}),Object(a.jsx)(I,{disabled:t||l||x,loading:t,onClick:ye}),be.length>0&&Object(a.jsx)(X,{data:ge,onChange:function(e){ge.includes(e)?xe(ge.filter((function(n){return n!==e}))):xe([].concat(Object(o.a)(ge),[e]))}}),y&&Object(a.jsx)(Y,{}),Object(a.jsx)(E,{data:function(e){var n=ge.length>0?e.filter((function(e){return ge.some((function(n){return function(e){var n=[];return e.number>=1&&e.number<=151&&n.push("Kanto"),e.number>=152&&e.number<=251&&n.push("Johto"),e.number>=252&&e.number<=386&&n.push("Hoenn"),e.number>=387&&e.number<=493&&n.push("Sinnoh"),e.number>=494&&e.number<=649&&n.push("Unova"),e.number>=650&&e.number<=721&&n.push("Kalos"),(e.number>=722&&e.number<=809||e.name.includes("-alola"))&&n.push("Alola"),(e.number>=810&&e.number<=898||e.name.includes("-galar"))&&n.push("Galar"),n}(e).includes(n)}))})):e;return!B&&W?n.filter((function(e){return e.type1===U&&void 0===e.type2})):n}(be)}),Object(a.jsx)(L,{})]})};t(66),t(67);s.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)($,{})}),document.getElementById("root"))}},[[68,1,2]]]);
//# sourceMappingURL=main.494dcde9.chunk.js.map