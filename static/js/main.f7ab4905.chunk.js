(this["webpackJsonpwhich-pokemon-type"]=this["webpackJsonpwhich-pokemon-type"]||[]).push([[0],{25:function(e,n,t){e.exports={pokeNumber:"style_pokeNumber__2ctK-"}},50:function(e,n,t){},54:function(e,n,t){},55:function(e,n,t){},56:function(e,n,t){"use strict";t.r(n);var a=t(1),r=t(0),c=t.n(r),s=t(8),i=t.n(s),o=t(10),u=t.n(o),m=t(24),l=t(15),d=t(7),p=t(9),f=t.n(p),b=(t(50),function(e){return e.charAt(0).toUpperCase()+e.slice(1)}),g=["normal","grass","fire","water","electric","ice","fighting","poison","ground","flying","psychic","bug","rock","ghost","dark","dragon","steel","fairy"],j=t.p+"static/media/normal.a9776648.png",h=t.p+"static/media/grass.0c8a77ef.png",x=t.p+"static/media/fire.3277d77f.png",O=t.p+"static/media/water.2fcb40f7.png",k=t.p+"static/media/electric.2e3808d7.png",_=t.p+"static/media/ice.a9638502.png",y=t.p+"static/media/fighting.c777e8ec.png",v=t.p+"static/media/poison.8f3b0bcd.png",T=t.p+"static/media/ground.0ddb1818.png",w=t.p+"static/media/flying.7de276f3.png",A=t.p+"static/media/psychic.7f7cc4f4.png",N=t.p+"static/media/bug.167802fd.png",C=t.p+"static/media/rock.06ce1a1f.png",S=t.p+"static/media/ghost.7452d549.png",P=t.p+"static/media/dark.c0450a81.png",z=t.p+"static/media/dragon.3c3d4c99.png",F=t.p+"static/media/steel.86c2d7c9.png",H=t.p+"static/media/fairy.b3cc9537.png",I=function(e){switch(e){case"normal":return j;case"grass":return h;case"fire":return x;case"water":return O;case"electric":return k;case"ice":return _;case"fighting":return y;case"poison":return v;case"ground":return T;case"flying":return w;case"psychic":return A;case"bug":return N;case"rock":return C;case"ghost":return S;case"dark":return P;case"dragon":return z;case"steel":return F;case"fairy":return H}},M=function(e){var n=e.title,t=e.value,r=e.onChange;return Object(a.jsxs)(c.a.Fragment,{children:[Object(a.jsx)("label",{className:"d-block",children:n}),Object(a.jsxs)("select",{className:"form-control",value:t,onChange:function(e){function n(n){return e.apply(this,arguments)}return n.toString=function(){return e.toString()},n}((function(e){r(e.target.value)})),children:[Object(a.jsx)("option",{}),g.map((function(e){return Object(a.jsx)("option",{value:e,children:b(e)},"type1-o-"+e)}))]}),t&&Object(a.jsx)("img",{src:I(t),alt:"Type: "+t})]})},U=function(e){var n=e.onClick;return Object(a.jsx)("button",{className:"btn btn-primary d-block w-100 my-3",onClick:n,children:"Find Me Pokemon!"})},B=t(25),D=t.n(B),J=function(e){var n=e.pokemon;return Object(a.jsxs)("li",{className:"list-group-item",children:[Object(a.jsxs)("span",{className:D.a.pokeNumber,children:["#",n.number]}),b(n.name),n.imageUrl?Object(a.jsx)("img",{src:n.imageUrl,alt:n.name}):Object(a.jsx)("strong",{children:" No Image Available"}),Object(a.jsxs)("p",{children:["Types: ",b(n.type1),n.type2&&", ".concat(b(n.type2))]})]},"pokemon-"+n.id)},E=function(e){var n=e.data;return Object(a.jsx)("ul",{className:"list-group poke-list",children:n.map((function(e){return Object(a.jsx)(J,{pokemon:e})}))})},K=function(){return Object(a.jsx)("footer",{className:"text-left",children:Object(a.jsxs)("p",{children:["Pok\xe9mon and Pok\xe9mon character names are trademarks of Nintendo",Object(a.jsx)("br",{}),"Data from: ",Object(a.jsx)("a",{href:"https://pokeapi.co/",children:"Poke API"}),Object(a.jsx)("br",{}),"Pokemon Type Images from: ",Object(a.jsx)("a",{href:"https://www.deviantart.com/falke2009",children:"Falke2009 on DeviantArt"})]})})},L=function(){return Object(a.jsxs)(c.a.Fragment,{children:[Object(a.jsx)("div",{className:"pokeball-spinner"}),Object(a.jsx)("span",{children:"Loading..."})]})},q=function(e){var n=e.checked,t=e.onChange;return Object(a.jsxs)("div",{children:[Object(a.jsx)("label",{children:"Filter exclusively on Type 1"}),Object(a.jsx)("input",{className:"mx-4",type:"checkbox",checked:n,onChange:t})]})},G=t(59),Q=function(e){var n=e.show,t=e.onHide,r=e.type1,c=e.type2,s=function(e){var n=1;return r?(r.strongAgainst.includes(e)&&(n*=2),r.weakAgainst.includes(e)&&(n*=.5),r.zeroAgainst.includes(e)&&(n*=0),"x"+n):""},i=function(e){if(!c)return"";var n=1;return c.strongAgainst.includes(e)&&(n*=2),c.weakAgainst.includes(e)&&(n*=.5),c.zeroAgainst.includes(e)&&(n*=0),"x"+n},o=function(e){if(!r&&!c)return"";var n=1;return r&&(r.vulnerableTo.includes(e)&&(n*=2),r.resistantTo.includes(e)&&(n*=.5),r.immuneTo.includes(e)&&(n*=0)),c&&(c.vulnerableTo.includes(e)&&(n*=2),c.resistantTo.includes(e)&&(n*=.5),c.immuneTo.includes(e)&&(n*=0)),"x"+n};return Object(a.jsxs)(G.a,{show:n,onHide:t,children:[Object(a.jsx)(G.a.Header,{closeButton:!0,children:Object(a.jsx)("h3",{children:"Type Matchups"})}),Object(a.jsx)(G.a.Body,{children:Object(a.jsxs)("table",{className:"table table-striped table-sm",children:[Object(a.jsx)("thead",{children:Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{className:"table-primary",children:"Opponent Type"}),Object(a.jsx)("td",{className:"table-primary",children:r&&"Offense "+b(r.name)}),Object(a.jsx)("td",{className:"table-primary",children:c&&"Offense "+b(c.name)}),Object(a.jsx)("td",{className:"table-primary",children:(r||c)&&"Defense "})]})}),Object(a.jsx)("tbody",{children:g.map((function(e){return Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:b(e)}),Object(a.jsx)("td",{children:s(e)}),Object(a.jsx)("td",{children:i(e)}),Object(a.jsx)("td",{children:o(e)})]})}))})]})})]})},R="https://pokeapi.co/api/v2/type",V=function(){var e,n=c.a.useState(!1),t=Object(d.a)(n,2),r=t[0],s=t[1],i=c.a.useState(!1),o=Object(d.a)(i,2),p=o[0],b=o[1],g=c.a.useState(!1),j=Object(d.a)(g,2),h=j[0],x=j[1],O=c.a.useState(""),k=Object(d.a)(O,2),_=k[0],y=k[1],v=c.a.useState(""),T=Object(d.a)(v,2),w=T[0],A=T[1],N=c.a.useState(null),C=Object(d.a)(N,2),S=C[0],P=C[1],z=c.a.useState(null),F=Object(d.a)(z,2),H=F[0],I=F[1],B=c.a.useState([]),D=Object(d.a)(B,2),J=D[0],G=D[1],V=function(){var e=Object(l.a)(u.a.mark((function e(n){var t,a,r,c,s,i;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=n.filter((function(e){return!e.pokemon.name.includes("-totem")&&!e.pokemon.name.includes("-gmax")})),a=[],r=Object(m.a)(t),e.prev=3,r.s();case 5:if((c=r.n()).done){e.next=13;break}return s=c.value,e.next=9,f.a.get(s.pokemon.url);case 9:i=e.sent,a.push({id:i.data.id,name:i.data.name,number:i.data.species.url.split("/")[6],imageUrl:i.data.sprites.front_default,type1:i.data.types[0].type.name,type2:i.data.types[1]&&i.data.types[1].type.name});case 11:e.next=5;break;case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(3),r.e(e.t0);case 18:return e.prev=18,r.f(),e.finish(18);case 21:return e.abrupt("return",a);case 22:case"end":return e.stop()}}),e,null,[[3,15,18,21]])})));return function(n){return e.apply(this,arguments)}}(),W=function(){var e=Object(l.a)(u.a.mark((function e(){var n,t,a,r,c,i,o,m,l,d,p,b;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(G([]),s(!0),!(_.length>0&&w.length>0)){e.next=22;break}return e.next=5,f.a.get("".concat(R,"/").concat(_));case 5:return n=e.sent.data,t=n.damage_relations,P({name:n.name,strongAgainst:t.double_damage_to.map((function(e){return e.name})),vulnerableTo:t.double_damage_from.map((function(e){return e.name})),weakAgainst:t.half_damage_to.map((function(e){return e.name})),resistantTo:t.half_damage_from.map((function(e){return e.name})),zeroAgainst:t.no_damage_to.map((function(e){return e.name})),immuneTo:t.no_damage_from.map((function(e){return e.name}))}),e.next=10,f.a.get("".concat(R,"/").concat(w));case 10:return a=e.sent.data,r=a.damage_relations,I({name:a.name,strongAgainst:r.double_damage_to.map((function(e){return e.name})),vulnerableTo:r.double_damage_from.map((function(e){return e.name})),weakAgainst:r.half_damage_to.map((function(e){return e.name})),resistantTo:r.half_damage_from.map((function(e){return e.name})),zeroAgainst:r.no_damage_to.map((function(e){return e.name})),immuneTo:t.no_damage_from.map((function(e){return e.name}))}),e.next=15,V(n.pokemon);case 15:return c=e.sent,e.next=18,V(a.pokemon);case 18:i=e.sent,G(c.filter((function(e){return i.map((function(e){return e.id})).includes(e.id)}))),e.next=46;break;case 22:if(!(_.length>0)){e.next=35;break}return e.next=25,f.a.get("".concat(R,"/").concat(_));case 25:return o=e.sent.data,m=o.damage_relations,P({name:o.name,strongAgainst:m.double_damage_to.map((function(e){return e.name})),vulnerableTo:m.double_damage_from.map((function(e){return e.name})),weakAgainst:m.half_damage_to.map((function(e){return e.name})),resistantTo:m.half_damage_from.map((function(e){return e.name})),zeroAgainst:m.no_damage_to.map((function(e){return e.name})),immuneTo:m.no_damage_from.map((function(e){return e.name}))}),I(null),e.next=31,V(o.pokemon);case 31:l=e.sent,G(l),e.next=46;break;case 35:if(!(w.length>0)){e.next=46;break}return e.next=38,f.a.get("".concat(R,"/").concat(w));case 38:return d=e.sent.data,p=d.damage_relations,I({name:d.name,strongAgainst:p.double_damage_to.map((function(e){return e.name})),vulnerableTo:p.double_damage_from.map((function(e){return e.name})),weakAgainst:p.half_damage_to.map((function(e){return e.name})),resistantTo:p.half_damage_from.map((function(e){return e.name})),zeroAgainst:p.no_damage_to.map((function(e){return e.name})),immuneTo:p.no_damage_from.map((function(e){return e.name}))}),P(null),e.next=44,V(d.pokemon);case 44:b=e.sent,G(b);case 46:s(!1);case 47:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)("h1",{children:"Pokemon Types"}),Object(a.jsx)(M,{title:"Type 1",value:_,onChange:y}),Object(a.jsx)(q,{checked:h&&!w,onChange:function(){x(!h)}}),Object(a.jsx)(M,{title:"Type 2",value:w,onChange:A}),(_||w)&&Object(a.jsx)("button",{className:"btn d-block mx-auto my-3",onClick:function(){return b(!0)},children:"Show Type Matchups"}),Object(a.jsx)(Q,{show:p,onHide:function(){return b(!1)},type1:S,type2:H}),Object(a.jsx)(U,{onClick:W}),r&&Object(a.jsx)(L,{}),Object(a.jsx)(E,{data:(e=J,!w&&h?e.filter((function(e){return e.type1===_&&void 0===e.type2})):e)}),Object(a.jsx)(K,{})]})};t(54),t(55);i.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(V,{})}),document.getElementById("root"))}},[[56,1,2]]]);
//# sourceMappingURL=main.f7ab4905.chunk.js.map