(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"0456":function(o,n,e){},"5f58":function(o,n,e){"use strict";e("c6b64")},"63bd":function(o,n,e){"use strict";e("0456")},"657a":function(o,n,e){"use strict";e.r(n);var t=function(){var o=this,n=o.$createElement,e=o._self._c||n;return e("div",{staticClass:"container"},[e("PokemonCombat",{attrs:{Pokemon1:o.pokemon1,Pokemon2:o.pokemon2}})],1)},s=[],a=function(){var o=this,n=o.$createElement,e=o._self._c||n;return e("div",[e("div",{staticClass:"pokemon1"},[e("h1",[o._v(" "+o._s(o.pokemon1.name)+" "),e("img",{attrs:{src:o.url_image+"/"+o.pokemon1.name+".png"}})]),e("h2",[o._v(" "+o._s(o.pokemon1.stats[0].base_stat)+" / "+o._s(o.pokemon1.stats[0].base_stat)+" "+o._s(o.pokemon1.stats[0].stat.name)+" ")]),o._l(4,(function(n){return e("div",{key:n,staticClass:"ability"},[o._v(" "+o._s(o.pokemon1.moves[n].move.name)+" ")])}))],2),e("div",{staticClass:"pokemon2"},[e("h1",[o._v(" "+o._s(o.pokemon2.name)+" "),e("img",{attrs:{src:o.url_image+"/"+o.pokemon2.name+".png"}})]),e("h2",[o._v(" "+o._s(o.pokemon2.stats[0].base_stat)+" / "+o._s(o.pokemon2.stats[0].base_stat)+" "+o._s(o.pokemon2.stats[0].stat.name)+" ")]),o._l(4,(function(n){return e("div",{key:n,staticClass:"ability"},[o._v(" "+o._s(o.pokemon2.moves[n].move.name)+" ")])}))],2)])},m=[],c=e("bc3a"),i=e.n(c),p=e("896d"),k={data:function(){return{pokemon1:"",pokemon2:"",moves1:[],url_image:p.IMG_URL}},props:["Pokemon1","Pokemon2"],methods:{getPokemon1Moves:function(o){var n=this;i.a.get(this.pokemon1.moves[o].move.url).then((function(e){console.log(e),n.moves1.push(e.data),console.log("move"+o+n.moves1[o])})).catch((function(o){console.log(o)}))}},beforeMount:function(){var o=this;i.a.get(this["Pokemon1"]).then((function(n){console.log(n),o.pokemon1=n.data,console.log("pokemon 1"+o.pokemon1)})).catch((function(o){console.log(o)})),i.a.get(this["Pokemon2"]).then((function(n){console.log(n),o.pokemon2=n.data,console.log("pokemon 2"+o.pokemon2)})).catch((function(o){console.log(o)}))}},l=k,u=(e("5f58"),e("2877")),r=Object(u["a"])(l,a,m,!1,null,"45edc708",null),v=r.exports,_={data:function(){return{pokemon1:"https://pokeapi.co/api/v2/pokemon/1",pokemon2:"https://pokeapi.co/api/v2/pokemon/4"}},components:{PokemonCombat:v}},f=_,h=(e("63bd"),Object(u["a"])(f,t,s,!1,null,"821af7c6",null));n["default"]=h.exports},c6b64:function(o,n,e){}}]);
//# sourceMappingURL=about.b64c9b05.js.map