(this["webpackJsonpwhich-pokemon-type"]=this["webpackJsonpwhich-pokemon-type"]||[]).push([[0],{35:function(e,n,t){e.exports={pokeNumber:"style_pokeNumber__2ctK-"}},45:function(e,n,t){},66:function(e,n,t){},67:function(e,n,t){},68:function(e,n,t){"use strict";t.r(n);var a=t(1),r=t(0),c=t.n(r),i=t(14),s=t.n(i),o=t(37),u=t(34),l=t(7),m=t.n(l),d=t(12),p=t(4),b=(t(45),["normal","grass","fire","water","electric","ice","fighting","poison","ground","flying","psychic","bug","rock","ghost","dark","dragon","steel","fairy"]),f=function(e){return e.filter((function(e){var n=e.pokemon.name;return!n.includes("-totem")&&!n.includes("-gmax")&&!n.includes("-mega")&&!n.endsWith("-battle-bond")&&!n.endsWith("-ash")&&!n.endsWith("-school")&&!n.endsWith("-10")&&!n.endsWith("-50")&&!n.endsWith("-cap")&&!n.endsWith("-eternamax")&&!(n.startsWith("minior-")&&"minior-red-meteor"!==n)&&!n.endsWith("lycanroc-midnight")&&!n.endsWith("lycanroc-dusk")&&!n.endsWith("rockruff-own-tempo")&&!n.endsWith("-busted")&&!n.endsWith("magearna-original")}))},h=t(24),j=t.n(h),g=function(){var e=Object(d.a)(m.a.mark((function e(n){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.get("".concat("https://pokeapi.co/api/v2/type","/").concat(n));case 2:return e.abrupt("return",e.sent.data);case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),x=function(){var e=Object(d.a)(m.a.mark((function e(n){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",j.a.get(n.pokemon.url.replace(/\/$/,"")));case 1:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),O=function(){var e=Object(d.a)(m.a.mark((function e(n){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",j.a.get(n.species.url));case 1:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),k=function(e){return e.charAt(0).toUpperCase()+e.slice(1)},y=t.p+"static/media/normal.a9776648.png",v=t.p+"static/media/grass.0c8a77ef.png",_=t.p+"static/media/fire.3277d77f.png",N=t.p+"static/media/water.2fcb40f7.png",S=t.p+"static/media/electric.2e3808d7.png",w=t.p+"static/media/ice.a9638502.png",T=t.p+"static/media/fighting.c777e8ec.png",A=t.p+"static/media/poison.8f3b0bcd.png",C=t.p+"static/media/ground.0ddb1818.png",W=t.p+"static/media/flying.7de276f3.png",K=t.p+"static/media/psychic.7f7cc4f4.png",H=t.p+"static/media/bug.167802fd.png",P=t.p+"static/media/rock.06ce1a1f.png",U=t.p+"static/media/ghost.7452d549.png",M=t.p+"static/media/dark.c0450a81.png",z=t.p+"static/media/dragon.3c3d4c99.png",F=t.p+"static/media/steel.86c2d7c9.png",J=t.p+"static/media/fairy.b3cc9537.png",L=function(e){switch(e){case"normal":return y;case"grass":return v;case"fire":return _;case"water":return N;case"electric":return S;case"ice":return w;case"fighting":return T;case"poison":return A;case"ground":return C;case"flying":return W;case"psychic":return K;case"bug":return H;case"rock":return P;case"ghost":return U;case"dark":return M;case"dragon":return z;case"steel":return F;case"fairy":return J;default:throw Error("not an expected type: "+e)}},G=function(e){var n=e.title,t=e.value,r=e.onChange;return Object(a.jsxs)(c.a.Fragment,{children:[Object(a.jsxs)("div",{className:"d-flex m-auto w-50 justify-content-between align-items-center",children:[Object(a.jsx)("label",{className:"lbl",children:n}),t&&Object(a.jsx)("img",{src:L(t),alt:"Type: "+t,width:32})]}),Object(a.jsxs)("select",{className:"form-control w-50 my-3 mx-auto",value:t,onChange:function(e){function n(n){return e.apply(this,arguments)}return n.toString=function(){return e.toString()},n}((function(e){r(e.target.value)})),children:[Object(a.jsx)("option",{}),b.map((function(e){return Object(a.jsx)("option",{value:e,children:k(e)},"type1-o-"+e)}))]})]})},I=function(){return Object(a.jsx)("div",{className:"pokeball-spinner"})},B=function(e){var n=e.onClick,t=e.disabled,r=e.loading;return Object(a.jsx)("button",{className:"btn btn-info d-block m-auto py-3",onClick:n,disabled:t,children:r?Object(a.jsxs)("div",{className:"d-flex align-items-center",children:["Loading... ",Object(a.jsx)(I,{})]}):"Find Pokemon!"})},D=t(35),E=t.n(D),R=function(e){var n=e.pokemon;return Object(a.jsxs)("li",{className:"list-group-item",children:[Object(a.jsxs)("div",{className:E.a.pokeNumber,children:["#",n.number]}),Object(a.jsxs)("div",{children:[k(n.name),n.imageUrl?Object(a.jsx)("img",{src:n.imageUrl,alt:n.name}):Object(a.jsx)("strong",{className:"d-block",children:" No Image Available"})]}),Object(a.jsxs)("p",{children:["Types: ",k(n.type1),n.type2&&", ".concat(k(n.type2))]})]},"pokemon-"+n.id)},$=function(e){var n=e.data;return Object(a.jsx)("ul",{className:"list-group poke-list",children:n.map((function(e){return Object(a.jsx)(R,{pokemon:e},"pli"+e.id)}))})},q=function(){return Object(a.jsx)("footer",{className:"text-left mx-4",children:Object(a.jsxs)("p",{children:["Pok\xe9mon and Pok\xe9mon character names are trademarks of Nintendo",Object(a.jsx)("br",{}),"Data from: ",Object(a.jsx)("a",{href:"https://pokeapi.co/",children:"Poke API"}),Object(a.jsx)("br",{}),"Pokemon Type Images from: ",Object(a.jsx)("a",{href:"https://www.deviantart.com/falke2009",children:"Falke2009 on DeviantArt"})]})})},Q=function(e){var n=e.checked,t=e.onChange;return Object(a.jsxs)("div",{children:[Object(a.jsx)("label",{children:"Filter exclusively on Type 1"}),Object(a.jsx)("input",{className:"mx-4",type:"checkbox",checked:n,onChange:t})]})},V=t(70),X=function(e){var n=e.show,t=e.onHide,r=e.type1,c=e.type2,i=function(e){var n=1;return r.name?(n*=r.strongAgainst.includes(e)?2:1,n*=r.weakAgainst.includes(e)?.5:1,"x"+(n*=r.zeroAgainst.includes(e)?0:1)):""},s=function(e){if(!c.name)return"";var n=1;return n*=c.strongAgainst.includes(e)?2:1,n*=c.weakAgainst.includes(e)?.5:1,"x"+(n*=c.zeroAgainst.includes(e)?0:1)},o=function(e){if(!r.name&&!c.name)return"";var n=1;return r.name&&(n*=r.vulnerableTo.includes(e)?2:1,n*=r.resistantTo.includes(e)?.5:1,n*=r.immuneTo.includes(e)?0:1),c.name&&(n*=c.vulnerableTo.includes(e)?2:1,n*=c.resistantTo.includes(e)?.5:1,n*=c.immuneTo.includes(e)?0:1),"x"+n};return Object(a.jsxs)(V.a,{show:n,onHide:t,children:[Object(a.jsx)(V.a.Header,{closeButton:!0,children:Object(a.jsx)("h3",{children:"Type Matchups"})}),Object(a.jsx)(V.a.Body,{children:Object(a.jsxs)("table",{className:"table table-striped table-sm",children:[Object(a.jsx)("thead",{children:Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{className:"table-primary",children:"Opponent Type"}),Object(a.jsx)("td",{className:"table-primary",children:r.name&&"Offense "+k(r.name)}),Object(a.jsx)("td",{className:"table-primary",children:c.name&&"Offense "+k(c.name)}),Object(a.jsx)("td",{className:"table-primary",children:(r.name||c.name)&&"Defense "})]})}),Object(a.jsx)("tbody",{children:b.map((function(e){return Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:k(e)}),Object(a.jsx)("td",{children:i(e)}),Object(a.jsx)("td",{children:s(e)}),Object(a.jsx)("td",{children:o(e)})]},"tr-"+e)}))})]})})]})},Y=t(71);function Z(e){var n=e.data,t=e.onChange,r=c.a.useState(!1),i=Object(p.a)(r,2),s=i[0],o=i[1];return Object(a.jsxs)("div",{className:"m-3",children:[Object(a.jsxs)("span",{className:"border p-1",onClick:function(){return o(!s)},children:["Filter by Region ",Object(a.jsx)("span",{className:s?"text-secondary":"text-primary",children:s?"\u25b2":"\u25bc"})]}),Object(a.jsx)(Y.a,{in:s,children:Object(a.jsxs)("div",{className:"m-3",children:[Object(a.jsxs)("div",{className:"d-inline-block",children:[Object(a.jsx)("label",{children:"Kanto"}),Object(a.jsx)("input",{className:"ml-1 mr-3",type:"checkbox",value:"Kanto",onChange:function(e){function n(n){return e.apply(this,arguments)}return n.toString=function(){return e.toString()},n}((function(e){return t(e.target.value)})),checked:n.includes("Kanto")})]}),Object(a.jsxs)("div",{className:"d-inline-block",children:[Object(a.jsx)("label",{children:"Johto"}),Object(a.jsx)("input",{className:"ml-1 mr-3",type:"checkbox",value:"Johto",onChange:function(e){function n(n){return e.apply(this,arguments)}return n.toString=function(){return e.toString()},n}((function(e){return t(e.target.value)})),checked:n.includes("Johto")})]}),Object(a.jsxs)("div",{className:"d-inline-block",children:[Object(a.jsx)("label",{children:"Hoenn"}),Object(a.jsx)("input",{className:"ml-1 mr-3",type:"checkbox",value:"Hoenn",onChange:function(e){function n(n){return e.apply(this,arguments)}return n.toString=function(){return e.toString()},n}((function(e){return t(e.target.value)})),checked:n.includes("Hoenn")})]}),Object(a.jsxs)("div",{className:"d-inline-block",children:[Object(a.jsx)("label",{children:"Sinnoh"}),Object(a.jsx)("input",{className:"ml-1 mr-3",type:"checkbox",value:"Sinnoh",onChange:function(e){function n(n){return e.apply(this,arguments)}return n.toString=function(){return e.toString()},n}((function(e){return t(e.target.value)})),checked:n.includes("Sinnoh")})]}),Object(a.jsxs)("div",{className:"d-inline-block",children:[Object(a.jsx)("label",{children:"Unova"}),Object(a.jsx)("input",{className:"ml-1 mr-3",type:"checkbox",value:"Unova",onChange:function(e){function n(n){return e.apply(this,arguments)}return n.toString=function(){return e.toString()},n}((function(e){return t(e.target.value)})),checked:n.includes("Unova")})]}),Object(a.jsxs)("div",{className:"d-inline-block",children:[Object(a.jsx)("label",{children:"Kalos"}),Object(a.jsx)("input",{className:"ml-1 mr-3",type:"checkbox",value:"Kalos",onChange:function(e){function n(n){return e.apply(this,arguments)}return n.toString=function(){return e.toString()},n}((function(e){return t(e.target.value)})),checked:n.includes("Kalos")})]}),Object(a.jsxs)("div",{className:"d-inline-block",children:[Object(a.jsx)("label",{children:"Alola"}),Object(a.jsx)("input",{className:"ml-1 mr-3",type:"checkbox",value:"Alola",onChange:function(e){function n(n){return e.apply(this,arguments)}return n.toString=function(){return e.toString()},n}((function(e){return t(e.target.value)})),checked:n.includes("Alola")})]}),Object(a.jsxs)("div",{className:"d-inline-block",children:[Object(a.jsx)("label",{children:"Galar"}),Object(a.jsx)("input",{className:"ml-1 mr-3",type:"checkbox",value:"Galar",onChange:function(e){function n(n){return e.apply(this,arguments)}return n.toString=function(){return e.toString()},n}((function(e){return t(e.target.value)})),checked:n.includes("Galar")})]})]})})]})}function ee(e){return Object(a.jsx)("p",{className:"my-5 font-weight-bold text-danger",children:"No Pokemon Were Found With These Types"})}function ne(e){var n=e.legendary,t=e.mythical,r=e.onChange;return Object(a.jsx)("div",{className:"m-3",children:Object(a.jsxs)("div",{className:"m-3",children:[Object(a.jsxs)("div",{className:"d-inline-block",children:[Object(a.jsx)("label",{children:"Legendary"}),Object(a.jsx)("input",{className:"ml-1 mr-3",value:"legendary",type:"checkbox",onChange:function(e){function n(n){return e.apply(this,arguments)}return n.toString=function(){return e.toString()},n}((function(e){return r(e.target.value)})),checked:n})]}),Object(a.jsxs)("div",{className:"d-inline-block",children:[Object(a.jsx)("label",{children:"Mythical"}),Object(a.jsx)("input",{className:"ml-1 mr-3",value:"mythical",type:"checkbox",onChange:function(e){function n(n){return e.apply(this,arguments)}return n.toString=function(){return e.toString()},n}((function(e){return r(e.target.value)})),checked:t})]})]})})}var te=function(){var e=c.a.useState(!1),n=Object(p.a)(e,2),t=n[0],r=n[1],i=c.a.useState(!1),s=Object(p.a)(i,2),l=s[0],b=s[1],h=c.a.useState(!1),j=Object(p.a)(h,2),k=j[0],y=j[1],v=c.a.useState(!1),_=Object(p.a)(v,2),N=_[0],S=_[1],w=c.a.useState(!1),T=Object(p.a)(w,2),A=T[0],C=T[1],W=c.a.useState(!1),K=Object(p.a)(W,2),H=K[0],P=K[1],U=c.a.useState(""),M=Object(p.a)(U,2),z=M[0],F=M[1],J=c.a.useState(""),L=Object(p.a)(J,2),I=L[0],D=L[1],E=c.a.useState({}),R=Object(p.a)(E,2),V=R[0],Y=R[1],te=c.a.useState({}),ae=Object(p.a)(te,2),re=ae[0],ce=ae[1],ie=c.a.useState({}),se=Object(p.a)(ie,2),oe=se[0],ue=se[1],le=c.a.useState({}),me=Object(p.a)(le,2),de=me[0],pe=me[1],be=c.a.useState([]),fe=Object(p.a)(be,2),he=fe[0],je=fe[1],ge=c.a.useState([]),xe=Object(p.a)(ge,2),Oe=xe[0],ke=xe[1],ye=c.a.useState(!1),ve=Object(p.a)(ye,2),_e=ve[0],Ne=ve[1],Se=c.a.useState(!1),we=Object(p.a)(Se,2),Te=we[0],Ae=we[1];c.a.useEffect((function(){l&&!k&&V.damage_relations?b(!1):k&&!l&&re.damage_relations?y(!1):l&&k&&V.damage_relations&&re.damage_relations&&(b(!1),y(!1))}),[l,k,V,re,z,I]);var Ce=function(){var e=Object(d.a)(m.a.mark((function e(n){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==n){e.next=4;break}return Y({}),F(n),e.abrupt("return");case 4:return b(!0),Y({}),F(n),e.t0=Y,e.next=10,g(n);case 10:e.t1=e.sent,(0,e.t0)(e.t1);case 12:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),We=function(){var e=Object(d.a)(m.a.mark((function e(n){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==n){e.next=4;break}return ce({}),D(n),e.abrupt("return");case 4:return y(!0),ce({}),D(n),e.t0=ce,e.next=10,g(n);case 10:e.t1=e.sent,(0,e.t0)(e.t1);case 12:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),Ke=function(){var e=Object(d.a)(m.a.mark((function e(n){var t,a,r,c,i,s,o,l;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==n.length){e.next=4;break}return S(!0),setTimeout((function(){return S(!1)}),3e3),e.abrupt("return");case 4:S(!1),t=f(n),a=[],r=Object(u.a)(t),e.prev=8,r.s();case 10:if((c=r.n()).done){e.next=22;break}return s=c.value,e.next=14,x(s);case 14:return o=e.sent,e.next=17,O(o.data);case 17:l=e.sent,a.push({id:o.data.id,name:o.data.name,number:l.data.id,imageUrl:o.data.sprites.front_default,type1:o.data.types[0].type.name,type2:null===(i=o.data.types[1])||void 0===i?void 0:i.type.name,isLegendary:l.data.is_legendary,isMythical:l.data.is_mythical}),je([].concat(a));case 20:e.next=10;break;case 22:e.next=27;break;case 24:e.prev=24,e.t0=e.catch(8),r.e(e.t0);case 27:return e.prev=27,r.f(),e.finish(27);case 30:case"end":return e.stop()}}),e,null,[[8,24,27,30]])})));return function(n){return e.apply(this,arguments)}}(),He=function(){var e=Object(d.a)(m.a.mark((function e(){var n,t,a,c,i;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!l&&!k){e.next=3;break}return je([]),e.abrupt("return");case 3:if(z||I){e.next=5;break}return e.abrupt("return");case 5:if(je([]),r(!0),!V.damage_relations||!re.damage_relations){e.next=17;break}return n=V.damage_relations,ue({name:V.name,strongAgainst:n.double_damage_to.map((function(e){return e.name})),vulnerableTo:n.double_damage_from.map((function(e){return e.name})),weakAgainst:n.half_damage_to.map((function(e){return e.name})),resistantTo:n.half_damage_from.map((function(e){return e.name})),zeroAgainst:n.no_damage_to.map((function(e){return e.name})),immuneTo:n.no_damage_from.map((function(e){return e.name}))}),t=re.damage_relations,pe({name:re.name,strongAgainst:t.double_damage_to.map((function(e){return e.name})),vulnerableTo:t.double_damage_from.map((function(e){return e.name})),weakAgainst:t.half_damage_to.map((function(e){return e.name})),resistantTo:t.half_damage_from.map((function(e){return e.name})),zeroAgainst:t.no_damage_to.map((function(e){return e.name})),immuneTo:n.no_damage_from.map((function(e){return e.name}))}),a=V.pokemon.filter((function(e){return re.pokemon.map((function(e){return e.pokemon.name})).includes(e.pokemon.name)})),e.next=15,Ke(a);case 15:e.next=31;break;case 17:if(!V.damage_relations){e.next=25;break}return c=V.damage_relations,ue({name:V.name,strongAgainst:c.double_damage_to.map((function(e){return e.name})),vulnerableTo:c.double_damage_from.map((function(e){return e.name})),weakAgainst:c.half_damage_to.map((function(e){return e.name})),resistantTo:c.half_damage_from.map((function(e){return e.name})),zeroAgainst:c.no_damage_to.map((function(e){return e.name})),immuneTo:c.no_damage_from.map((function(e){return e.name}))}),pe({}),e.next=23,Ke(V.pokemon);case 23:e.next=31;break;case 25:if(!re.damage_relations){e.next=31;break}return i=re.damage_relations,pe({name:re.name,strongAgainst:i.double_damage_to.map((function(e){return e.name})),vulnerableTo:i.double_damage_from.map((function(e){return e.name})),weakAgainst:i.half_damage_to.map((function(e){return e.name})),resistantTo:i.half_damage_from.map((function(e){return e.name})),zeroAgainst:i.no_damage_to.map((function(e){return e.name})),immuneTo:i.no_damage_from.map((function(e){return e.name}))}),ue({}),e.next=31,Ke(re.pokemon);case 31:r(!1);case 32:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.jsxs)("div",{className:"App my-2 mx-auto",children:[Object(a.jsx)("h3",{children:"Pokemon Types"}),Object(a.jsx)(G,{title:"Type 1",value:z,onChange:Ce}),Object(a.jsx)(Q,{checked:H&&!I,onChange:function(){P(!H)}}),Object(a.jsx)(G,{title:"Type 2",value:I,onChange:We}),he.length>0&&Object(a.jsx)("button",{className:"btn btn-primary d-block mx-auto my-3",onClick:function(){return C(!0)},children:"Show Type Matchups"}),Object(a.jsx)(X,{show:A,onHide:function(){return C(!1)},type1:oe,type2:de}),Object(a.jsx)(B,{disabled:t||l||k,loading:t,onClick:He}),he.length>0&&Object(a.jsx)(Z,{data:Oe,onChange:function(e){Oe.includes(e)?ke(Oe.filter((function(n){return n!==e}))):ke([].concat(Object(o.a)(Oe),[e]))}}),he.length>0&&Object(a.jsx)(ne,{legendary:_e,mythical:Te,onChange:function(e){"legendary"===e&&Ne((function(e){return!e})),"mythical"===e&&Ae((function(e){return!e}))}}),N&&Object(a.jsx)(ee,{}),Object(a.jsx)($,{data:function(e){var n=Oe.length>0?e.filter((function(e){return Oe.some((function(n){return function(e){var n=[];return e.number>=1&&e.number<=151&&n.push("Kanto"),e.number>=152&&e.number<=251&&n.push("Johto"),e.number>=252&&e.number<=386&&n.push("Hoenn"),e.number>=387&&e.number<=493&&n.push("Sinnoh"),e.number>=494&&e.number<=649&&n.push("Unova"),e.number>=650&&e.number<=721&&n.push("Kalos"),(e.number>=722&&e.number<=809||e.name.includes("-alola"))&&n.push("Alola"),(e.number>=810&&e.number<=898||e.name.includes("-galar"))&&n.push("Galar"),n}(e).includes(n)}))})):e,t=!I&&H?n.filter((function(e){return e.type1===z&&void 0===e.type2})):n;return _e&&Te?t.filter((function(e){return e.isLegendary||e.isMythical})):_e?t.filter((function(e){return e.isLegendary})):Te?t.filter((function(e){return e.isMythical})):t}(he)}),Object(a.jsx)(q,{})]})};t(66),t(67);s.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(te,{})}),document.getElementById("root"))}},[[68,1,2]]]);
//# sourceMappingURL=main.d1ab445a.chunk.js.map