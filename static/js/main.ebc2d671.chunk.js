(this["webpackJsonpwhich-pokemon-type"]=this["webpackJsonpwhich-pokemon-type"]||[]).push([[0],{35:function(e,n,t){e.exports={pokeNumber:"style_pokeNumber__2ctK-"}},62:function(e,n,t){},66:function(e,n,t){},67:function(e,n,t){},68:function(e,n,t){"use strict";t.r(n);var a=t(1),r=t(0),c=t.n(r),i=t(13),s=t.n(i),o=t(37),u=t(34),l=t(11),m=t.n(l),d=t(19),p=t(6),b=t(24),h=t.n(b),j=(t(62),["normal","grass","fire","water","electric","ice","fighting","poison","ground","flying","psychic","bug","rock","ghost","dark","dragon","steel","fairy"]),f=function(e){return e.filter((function(e){var n=e.pokemon.name;return!n.includes("-totem")&&!n.includes("-gmax")&&!n.includes("-mega")&&!n.endsWith("-battle-bond")&&!n.endsWith("-ash")&&!n.endsWith("-school")&&!n.endsWith("-10")&&!n.endsWith("-50")&&!n.endsWith("-cap")&&!n.endsWith("-eternamax")&&!(n.startsWith("minior-")&&"minior-red-meteor"!==n)&&!n.endsWith("lycanroc-midnight")&&!n.endsWith("lycanroc-dusk")&&!n.endsWith("rockruff-own-tempo")&&!n.endsWith("-busted")&&!n.endsWith("magearna-original")}))},g=function(e){return e.charAt(0).toUpperCase()+e.slice(1)},x=t.p+"static/media/normal.a9776648.png",O=t.p+"static/media/grass.0c8a77ef.png",k=t.p+"static/media/fire.3277d77f.png",v=t.p+"static/media/water.2fcb40f7.png",y=t.p+"static/media/electric.2e3808d7.png",_=t.p+"static/media/ice.a9638502.png",N=t.p+"static/media/fighting.c777e8ec.png",S=t.p+"static/media/poison.8f3b0bcd.png",w=t.p+"static/media/ground.0ddb1818.png",T=t.p+"static/media/flying.7de276f3.png",A=t.p+"static/media/psychic.7f7cc4f4.png",C=t.p+"static/media/bug.167802fd.png",W=t.p+"static/media/rock.06ce1a1f.png",K=t.p+"static/media/ghost.7452d549.png",H=t.p+"static/media/dark.c0450a81.png",U=t.p+"static/media/dragon.3c3d4c99.png",P=t.p+"static/media/steel.86c2d7c9.png",z=t.p+"static/media/fairy.b3cc9537.png",F=function(e){switch(e){case"normal":return x;case"grass":return O;case"fire":return k;case"water":return v;case"electric":return y;case"ice":return _;case"fighting":return N;case"poison":return S;case"ground":return w;case"flying":return T;case"psychic":return A;case"bug":return C;case"rock":return W;case"ghost":return K;case"dark":return H;case"dragon":return U;case"steel":return P;case"fairy":return z}},J=function(e){var n=e.title,t=e.value,r=e.onChange;return Object(a.jsxs)(c.a.Fragment,{children:[Object(a.jsxs)("div",{className:"d-flex m-auto w-50 justify-content-between align-items-center",children:[Object(a.jsx)("label",{className:"lbl-large",children:n}),t&&Object(a.jsx)("img",{src:F(t),alt:"Type: "+t,width:40})]}),Object(a.jsxs)("select",{className:"form-control w-50 my-3 mx-auto",value:t,onChange:function(e){function n(n){return e.apply(this,arguments)}return n.toString=function(){return e.toString()},n}((function(e){r(e.target.value)})),children:[Object(a.jsx)("option",{}),j.map((function(e){return Object(a.jsx)("option",{value:e,children:g(e)},"type1-o-"+e)}))]})]})},G=function(e){var n=e.onClick,t=e.disabled;return Object(a.jsx)("button",{className:"btn btn-info d-block m-auto",onClick:n,disabled:t,children:t?"Loading...":"Find Me Pokemon!"})},I=t(35),M=t.n(I),B=function(e){var n=e.pokemon;return Object(a.jsxs)("li",{className:"list-group-item",children:[Object(a.jsxs)("div",{className:M.a.pokeNumber,children:["#",n.number]}),Object(a.jsxs)("div",{children:[g(n.name),n.imageUrl?Object(a.jsx)("img",{src:n.imageUrl,alt:n.name}):Object(a.jsx)("strong",{className:"d-block",children:" No Image Available"})]}),Object(a.jsxs)("p",{children:["Types: ",g(n.type1),n.type2&&", ".concat(g(n.type2))]})]},"pokemon-"+n.id)},D=function(e){var n=e.data;return Object(a.jsx)("ul",{className:"list-group poke-list",children:n.map((function(e){return Object(a.jsx)(B,{pokemon:e},"pli"+e.id)}))})},L=function(){return Object(a.jsx)("footer",{className:"text-left mx-4",children:Object(a.jsxs)("p",{children:["Pok\xe9mon and Pok\xe9mon character names are trademarks of Nintendo",Object(a.jsx)("br",{}),"Data from: ",Object(a.jsx)("a",{href:"https://pokeapi.co/",children:"Poke API"}),Object(a.jsx)("br",{}),"Pokemon Type Images from: ",Object(a.jsx)("a",{href:"https://www.deviantart.com/falke2009",children:"Falke2009 on DeviantArt"})]})})},E=function(){return Object(a.jsxs)(c.a.Fragment,{children:[Object(a.jsx)("div",{className:"pokeball-spinner"}),Object(a.jsx)("span",{children:"Loading..."})]})},R=function(e){var n=e.checked,t=e.onChange;return Object(a.jsxs)("div",{children:[Object(a.jsx)("label",{children:"Filter exclusively on Type 1"}),Object(a.jsx)("input",{className:"mx-4",type:"checkbox",checked:n,onChange:t})]})},q=t(70),Q=function(e){var n=e.show,t=e.onHide,r=e.type1,c=e.type2,i=function(e){var n=1;return r?(n*=r.strongAgainst.includes(e)?2:1,n*=r.weakAgainst.includes(e)?.5:1,"x"+(n*=r.zeroAgainst.includes(e)?0:1)):""},s=function(e){if(!c)return"";var n=1;return n*=c.strongAgainst.includes(e)?2:1,n*=c.weakAgainst.includes(e)?.5:1,"x"+(n*=c.zeroAgainst.includes(e)?0:1)},o=function(e){if(!r&&!c)return"";var n=1;return r&&(n*=r.vulnerableTo.includes(e)?2:1,n*=r.resistantTo.includes(e)?.5:1,n*=r.immuneTo.includes(e)?0:1),c&&(n*=c.vulnerableTo.includes(e)?2:1,n*=c.resistantTo.includes(e)?.5:1,n*=c.immuneTo.includes(e)?0:1),"x"+n};return Object(a.jsxs)(q.a,{show:n,onHide:t,children:[Object(a.jsx)(q.a.Header,{closeButton:!0,children:Object(a.jsx)("h3",{children:"Type Matchups"})}),Object(a.jsx)(q.a.Body,{children:Object(a.jsxs)("table",{className:"table table-striped table-sm",children:[Object(a.jsx)("thead",{children:Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{className:"table-primary",children:"Opponent Type"}),Object(a.jsx)("td",{className:"table-primary",children:r&&"Offense "+g(r.name)}),Object(a.jsx)("td",{className:"table-primary",children:c&&"Offense "+g(c.name)}),Object(a.jsx)("td",{className:"table-primary",children:(r||c)&&"Defense "})]})}),Object(a.jsx)("tbody",{children:j.map((function(e){return Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:g(e)}),Object(a.jsx)("td",{children:i(e)}),Object(a.jsx)("td",{children:s(e)}),Object(a.jsx)("td",{children:o(e)})]},"tr-"+e)}))})]})})]})},V=t(71);function X(e){var n=e.data,t=e.onChange,r=c.a.useState(!1),i=Object(p.a)(r,2),s=i[0],o=i[1];return Object(a.jsxs)("div",{className:"m-3",children:[Object(a.jsxs)("span",{className:"border p-1",onClick:function(){return o(!s)},children:["Filter by Region ",Object(a.jsx)("span",{className:s?"text-secondary":"text-primary",children:s?"\u25b2":"\u25bc"})]}),Object(a.jsx)(V.a,{in:s,children:Object(a.jsxs)("div",{className:"m-3",children:[Object(a.jsxs)("div",{className:"d-inline-block",children:[Object(a.jsx)("label",{children:"Kanto"}),Object(a.jsx)("input",{className:"ml-1 mr-3",type:"checkbox",value:"Kanto",onChange:function(e){function n(n){return e.apply(this,arguments)}return n.toString=function(){return e.toString()},n}((function(e){return t(e.target.value)})),checked:n.includes("Kanto")})]}),Object(a.jsxs)("div",{className:"d-inline-block",children:[Object(a.jsx)("label",{children:"Johto"}),Object(a.jsx)("input",{className:"ml-1 mr-3",type:"checkbox",value:"Johto",onChange:function(e){function n(n){return e.apply(this,arguments)}return n.toString=function(){return e.toString()},n}((function(e){return t(e.target.value)})),checked:n.includes("Johto")})]}),Object(a.jsxs)("div",{className:"d-inline-block",children:[Object(a.jsx)("label",{children:"Hoenn"}),Object(a.jsx)("input",{className:"ml-1 mr-3",type:"checkbox",value:"Hoenn",onChange:function(e){function n(n){return e.apply(this,arguments)}return n.toString=function(){return e.toString()},n}((function(e){return t(e.target.value)})),checked:n.includes("Hoenn")})]}),Object(a.jsxs)("div",{className:"d-inline-block",children:[Object(a.jsx)("label",{children:"Sinnoh"}),Object(a.jsx)("input",{className:"ml-1 mr-3",type:"checkbox",value:"Sinnoh",onChange:function(e){function n(n){return e.apply(this,arguments)}return n.toString=function(){return e.toString()},n}((function(e){return t(e.target.value)})),checked:n.includes("Sinnoh")})]}),Object(a.jsxs)("div",{className:"d-inline-block",children:[Object(a.jsx)("label",{children:"Unova"}),Object(a.jsx)("input",{className:"ml-1 mr-3",type:"checkbox",value:"Unova",onChange:function(e){function n(n){return e.apply(this,arguments)}return n.toString=function(){return e.toString()},n}((function(e){return t(e.target.value)})),checked:n.includes("Unova")})]}),Object(a.jsxs)("div",{className:"d-inline-block",children:[Object(a.jsx)("label",{children:"Kalos"}),Object(a.jsx)("input",{className:"ml-1 mr-3",type:"checkbox",value:"Kalos",onChange:function(e){function n(n){return e.apply(this,arguments)}return n.toString=function(){return e.toString()},n}((function(e){return t(e.target.value)})),checked:n.includes("Kalos")})]}),Object(a.jsxs)("div",{className:"d-inline-block",children:[Object(a.jsx)("label",{children:"Alola"}),Object(a.jsx)("input",{className:"ml-1 mr-3",type:"checkbox",value:"Alola",onChange:function(e){function n(n){return e.apply(this,arguments)}return n.toString=function(){return e.toString()},n}((function(e){return t(e.target.value)})),checked:n.includes("Alola")})]}),Object(a.jsxs)("div",{className:"d-inline-block",children:[Object(a.jsx)("label",{children:"Galar"}),Object(a.jsx)("input",{className:"ml-1 mr-3",type:"checkbox",value:"Galar",onChange:function(e){function n(n){return e.apply(this,arguments)}return n.toString=function(){return e.toString()},n}((function(e){return t(e.target.value)})),checked:n.includes("Galar")})]})]})})]})}var Y="https://pokeapi.co/api/v2/type",Z=function(){var e=c.a.useState(!1),n=Object(p.a)(e,2),t=n[0],r=n[1],i=c.a.useState(!1),s=Object(p.a)(i,2),l=s[0],b=s[1],j=c.a.useState(!1),g=Object(p.a)(j,2),x=g[0],O=g[1],k=c.a.useState(""),v=Object(p.a)(k,2),y=v[0],_=v[1],N=c.a.useState(""),S=Object(p.a)(N,2),w=S[0],T=S[1],A=c.a.useState({}),C=Object(p.a)(A,2),W=C[0],K=C[1],H=c.a.useState({}),U=Object(p.a)(H,2),P=U[0],z=U[1],F=c.a.useState(null),I=Object(p.a)(F,2),M=I[0],B=I[1],q=c.a.useState(null),V=Object(p.a)(q,2),Z=V[0],$=V[1],ee=c.a.useState([]),ne=Object(p.a)(ee,2),te=ne[0],ae=ne[1],re=c.a.useState([]),ce=Object(p.a)(re,2),ie=ce[0],se=ce[1],oe=function(){var e=Object(d.a)(m.a.mark((function e(n){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return _(n),e.t0=K,e.next=4,h.a.get("".concat(Y,"/").concat(n));case 4:e.t1=e.sent.data,(0,e.t0)(e.t1);case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),ue=function(){var e=Object(d.a)(m.a.mark((function e(n){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return T(n),e.t0=z,e.next=4,h.a.get("".concat(Y,"/").concat(n));case 4:e.t1=e.sent.data,(0,e.t0)(e.t1);case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),le=function(){var e=Object(d.a)(m.a.mark((function e(n){var t,a,r,c,i,s;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=f(n),a=[],r=Object(u.a)(t),e.prev=3,r.s();case 5:if((c=r.n()).done){e.next=14;break}return i=c.value,e.next=9,h.a.get(i.pokemon.url);case 9:s=e.sent,a.push({id:s.data.id,name:s.data.name,number:s.data.species.url.split("/")[6],imageUrl:s.data.sprites.front_default,type1:s.data.types[0].type.name,type2:s.data.types[1]&&s.data.types[1].type.name}),ae([].concat(a));case 12:e.next=5;break;case 14:e.next=19;break;case 16:e.prev=16,e.t0=e.catch(3),r.e(e.t0);case 19:return e.prev=19,r.f(),e.finish(19);case 22:case"end":return e.stop()}}),e,null,[[3,16,19,22]])})));return function(n){return e.apply(this,arguments)}}(),me=function(){var e=Object(d.a)(m.a.mark((function e(){var n,t,a,c,i;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(ae([]),r(!0),!(y.length>0&&w.length>0)){e.next=12;break}return n=W.damage_relations,B({name:W.name,strongAgainst:n.double_damage_to.map((function(e){return e.name})),vulnerableTo:n.double_damage_from.map((function(e){return e.name})),weakAgainst:n.half_damage_to.map((function(e){return e.name})),resistantTo:n.half_damage_from.map((function(e){return e.name})),zeroAgainst:n.no_damage_to.map((function(e){return e.name})),immuneTo:n.no_damage_from.map((function(e){return e.name}))}),t=P.damage_relations,$({name:P.name,strongAgainst:t.double_damage_to.map((function(e){return e.name})),vulnerableTo:t.double_damage_from.map((function(e){return e.name})),weakAgainst:t.half_damage_to.map((function(e){return e.name})),resistantTo:t.half_damage_from.map((function(e){return e.name})),zeroAgainst:t.no_damage_to.map((function(e){return e.name})),immuneTo:n.no_damage_from.map((function(e){return e.name}))}),a=W.pokemon.filter((function(e){return P.pokemon.map((function(e){return e.pokemon.name})).includes(e.pokemon.name)})),e.next=10,le(a);case 10:e.next=26;break;case 12:if(!(y.length>0)){e.next=20;break}return c=W.damage_relations,B({name:W.name,strongAgainst:c.double_damage_to.map((function(e){return e.name})),vulnerableTo:c.double_damage_from.map((function(e){return e.name})),weakAgainst:c.half_damage_to.map((function(e){return e.name})),resistantTo:c.half_damage_from.map((function(e){return e.name})),zeroAgainst:c.no_damage_to.map((function(e){return e.name})),immuneTo:c.no_damage_from.map((function(e){return e.name}))}),$(null),e.next=18,le(W.pokemon);case 18:e.next=26;break;case 20:if(!(w.length>0)){e.next=26;break}return i=P.damage_relations,$({name:P.name,strongAgainst:i.double_damage_to.map((function(e){return e.name})),vulnerableTo:i.double_damage_from.map((function(e){return e.name})),weakAgainst:i.half_damage_to.map((function(e){return e.name})),resistantTo:i.half_damage_from.map((function(e){return e.name})),zeroAgainst:i.no_damage_to.map((function(e){return e.name})),immuneTo:i.no_damage_from.map((function(e){return e.name}))}),B(null),e.next=26,le(P.pokemon);case 26:r(!1);case 27:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.jsxs)("div",{className:"App my-2 mx-auto",children:[Object(a.jsx)("h3",{children:"Pokemon Types"}),Object(a.jsx)(J,{title:"Type 1",value:y,onChange:oe}),Object(a.jsx)(R,{checked:x&&!w,onChange:function(){O(!x)}}),Object(a.jsx)(J,{title:"Type 2",value:w,onChange:ue}),te.length>0&&Object(a.jsx)("button",{className:"btn btn-primary d-block mx-auto my-3",onClick:function(){return b(!0)},children:"Show Type Matchups"}),Object(a.jsx)(Q,{show:l,onHide:function(){return b(!1)},type1:M,type2:Z}),Object(a.jsx)(G,{disabled:t,onClick:me}),te.length>0&&Object(a.jsx)(X,{data:ie,onChange:function(e){ie.includes(e)?se(ie.filter((function(n){return n!==e}))):se([].concat(Object(o.a)(ie),[e]))}}),Object(a.jsx)(D,{data:function(e){var n=ie.length>0?e.filter((function(e){return ie.some((function(n){return function(e){var n=[];return e.number>=1&&e.number<=151&&n.push("Kanto"),e.number>=152&&e.number<=251&&n.push("Johto"),e.number>=252&&e.number<=386&&n.push("Hoenn"),e.number>=387&&e.number<=493&&n.push("Sinnoh"),e.number>=494&&e.number<=649&&n.push("Unova"),e.number>=650&&e.number<=721&&n.push("Kalos"),(e.number>=722&&e.number<=809||e.name.includes("-alola"))&&n.push("Alola"),(e.number>=810&&e.number<=898||e.name.includes("-galar"))&&n.push("Galar"),n}(e).includes(n)}))})):e;return!w&&x?n.filter((function(e){return e.type1===y&&void 0===e.type2})):n}(te)}),t&&Object(a.jsx)(E,{}),Object(a.jsx)(L,{})]})};t(66),t(67);s.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(Z,{})}),document.getElementById("root"))}},[[68,1,2]]]);
//# sourceMappingURL=main.ebc2d671.chunk.js.map