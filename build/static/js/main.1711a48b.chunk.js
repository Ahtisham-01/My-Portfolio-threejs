(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{44:function(e,t,a){e.exports=a(52)},48:function(e,t,a){},52:function(e,t,a){"use strict";a.r(t);var n=a(41),r=a(7),o=a.n(r),c=a(58),i=(a(48),a(18)),l=a(55),m=a(56),u=a(19);function s(){var e=Object(m.a)("/level-react-draco.glb").nodes,t=Object(i.f)().camera;return Object(u.useSpring)(function(){return{from:{y:t.position.y+5},to:{y:t.position.y},config:{friction:100},onChange:function(e){var a=e.value;return t.position.y=a.y,t.lookAt(0,0,0)}}},[]),o.a.createElement("mesh",{geometry:e.Level.geometry,material:e.Level.material,position:[-.38,.69,.62],rotation:[Math.PI/2,-Math.PI/9,0]})}var f=a(9),g=a(6);function b(){var e=Object(m.a)("/level-react-draco.glb").nodes,t=Object(u.useSpring)(function(){return{rotation:[Math.PI/2,0,.29],config:{friction:40}}},[]),a=Object(f.a)(t,2),n=a[0],c=a[1];return Object(r.useEffect)(function(){var e;return function t(){c.start({rotation:[Math.PI/2+.3*g.MathUtils.randFloatSpread(2),0,.29+.2*g.MathUtils.randFloatSpread(2)]}),e=setTimeout(t,1e3*(1+3*Math.random()))}(),function(){return clearTimeout(e)}},[]),o.a.createElement(o.a.Fragment,null,o.a.createElement("mesh",{geometry:e.Sudo.geometry,material:e.Sudo.material,position:[.68,.33,-.67],rotation:[Math.PI/2,0,.29]}),o.a.createElement(u.a.mesh,Object.assign({geometry:e.SudoHead.geometry,material:e.SudoHead.material,position:[.68,.33,-.67]},n)))}function p(){var e=Object(m.a)("/level-react-draco.glb"),t=e.nodes,a=e.materials,n=Object(u.useSpring)(function(){return{"rotation-z":0,config:{friction:40}}},[]),c=Object(f.a)(n,2),i=c[0],l=c[1];return Object(r.useEffect)(function(){var e;return function t(){l.start({"rotation-z":Math.random()}),e=setTimeout(t,1e3*(1+5*Math.random()))}(),function(){return clearTimeout(e)}},[]),o.a.createElement(u.a.group,Object.assign({position:[-.58,.83,-.03],rotation:[Math.PI/2,0,.47]},i),o.a.createElement("mesh",{geometry:t.Camera.geometry,material:t.Camera.material}),o.a.createElement("mesh",{geometry:t.Camera_1.geometry,material:a.Lens}))}var E=a(54);function d(){var e=Object(m.a)("/level-react-draco.glb"),t=e.nodes,a=e.materials;return o.a.createElement("mesh",{geometry:t.Cactus.geometry,position:[-.42,.51,-.62],rotation:[Math.PI/2,0,0]},o.a.createElement(E.a,{factor:.4,map:a.Cactus.map}))}var h=a(57);function j(){var e=Object(m.a)("/level-react-draco.glb").nodes,t=Object(h.a)("65A0C7_C3E4F8_A7D5EF_97CAE9",1024),a=Object(f.a)(t,1)[0],n=Object(u.useSpring)(function(){return{rotation:[.8,1.1,-.4],position:[-.79,1.3,.62],config:{mass:2,tension:200}}}),c=Object(f.a)(n,2),i=c[0],l=c[1];return Object(r.useEffect)(function(){var e,t=!1;return function a(){l.start({rotation:[.8-(t?.8+1.8*Math.PI:0),1.1,-.4],position:[-.79,t?1.4:1.3,.62]}),t=!t,e=setTimeout(a,1500)}(),function(){return clearTimeout(e)}},[]),o.a.createElement(u.a.mesh,Object.assign({geometry:e.React.geometry},i),o.a.createElement("meshMatcapMaterial",{matcap:a}))}function O(){var e=Object(m.a)("/level-react-draco.glb").nodes,t=Object(h.a)("489B7A_A0E7D9_6DC5AC_87DAC7",1024),a=Object(f.a)(t,1)[0],n=Object(u.useSpring)(function(){return{rotation:[0,0,0],config:{mass:5,tension:200}}},[]),c=Object(f.a)(n,2),i=c[0],l=c[1];return Object(r.useEffect)(function(){var e;return function t(){l.start({rotation:[(Math.random()-.5)*Math.PI*3,0,(Math.random()-.5)*Math.PI*3]}),e=setTimeout(t,1e3*(.5+2*Math.random()))}(),function(){clearTimeout(e)}},[]),o.a.createElement(u.a.mesh,Object.assign({geometry:e.Pyramid.geometry,position:[-.8,1.33,.25]},i),o.a.createElement("meshMatcapMaterial",{matcap:a}))}function M(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(i.a,{flat:!0,dpr:[1,2],camera:{fov:25,position:[0,0,8]}},o.a.createElement("color",{attach:"background",args:["#e0b7ff"]}),o.a.createElement("ambientLight",null),o.a.createElement(l.a,{snap:!0,global:!0,zoom:.8,rotation:[0,-Math.PI/4,0],polar:[0,Math.PI/4],azimuth:[-Math.PI/4,Math.PI/4]},o.a.createElement("group",{"position-y":-.75,dispose:null},o.a.createElement(s,null),o.a.createElement(b,null),o.a.createElement(p,null),o.a.createElement(d,null),o.a.createElement(j,null),o.a.createElement(O,null)))))}Object(n.render)(o.a.createElement(o.a.Fragment,null,o.a.createElement(r.Suspense,{fallback:null},o.a.createElement(M,null)),o.a.createElement(c.a,null)),document.getElementById("root"))}},[[44,2,1]]]);
//# sourceMappingURL=main.1711a48b.chunk.js.map