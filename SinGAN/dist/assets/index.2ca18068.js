import{S as ne,i as ie,s as le,e as p,t as K,a,b as M,c as g,l as Q,n as se,d as I,r as Le,f as C,g as Ue,h as O,j as A,m as P,k as W,o as V,p as H,q as z,u as X,v as N,w as Be,x as pe,y as de,z as We,A as Qe}from"./vendor.0e12515b.js";const Ve=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const f of document.querySelectorAll('link[rel="modulepreload"]'))r(f);new MutationObserver(f=>{for(const l of f)if(l.type==="childList")for(const n of l.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function e(f){const l={};return f.integrity&&(l.integrity=f.integrity),f.referrerpolicy&&(l.referrerPolicy=f.referrerpolicy),f.crossorigin==="use-credentials"?l.credentials="include":f.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(f){if(f.ep)return;f.ep=!0;const l=e(f);fetch(f.href,l)}};Ve();function Xe(i){let t,e,r,f,l,n,h;return{c(){t=p("div"),t.textContent="Source",e=p("div"),r=p("label"),f=K("\u9078\u64C7\u6A94\u6848"),l=p("input"),a(t,"class","mb-2 eras svelte-14cb1nh"),a(e,"class","bg-contain bg-no-repeat bg-center rounded border border-purple-300 mb-2 h-3/4"),a(l,"class","hidden"),a(l,"type","file"),a(r,"class","JhengHei rounded border border-purple flex items-center justify-center cursor-pointer h-1/4 hover:bg-purple hover:text-white svelte-14cb1nh")},m(o,s){M(o,t,s),M(o,e,s),i[4](e),M(o,r,s),g(r,f),g(r,l),n||(h=[Q(l,"change",i[5]),Q(l,"change",i[2])],n=!0)},p:se,i:se,o:se,d(o){o&&I(t),o&&I(e),i[4](null),o&&I(r),n=!1,Le(h)}}}function Ye(i,t,e){let{file:r}=t,{maxScale:f}=t,l;const n=(d,w)=>Math.log(w)/Math.log(d),h=d=>{if(!r.length){e(1,l.style.backgroundImage="",l);return}let w=window.URL.createObjectURL(d.target.files[0]);e(1,l.style.backgroundImage=`url(${w})`,l);let v=new Image;v.onload=function(){let $=v.width,x=v.height,U=.75,k=20,T=250,_=Math.ceil(n(U,k/Math.min($,x)))+1,R=Math.ceil(n(U,Math.min(T,Math.max($,x))/Math.max($,x))),c=_-R;e(3,f=c)},v.src=w};function o(d){C[d?"unshift":"push"](()=>{l=d,e(1,l)})}function s(){r=this.files,e(0,r)}return i.$$set=d=>{"file"in d&&e(0,r=d.file),"maxScale"in d&&e(3,f=d.maxScale)},[r,l,h,f,o,s]}class me extends ne{constructor(t){super();ie(this,t,Ye,Xe,le,{file:0,maxScale:3})}}function Ze(i){let t,e,r,f;return{c(){t=p("div"),e=K(i[0]),r=p("div"),f=p("div"),f.textContent="\u9078\u64C7\u6A94\u6848",a(t,"class","mb-2 eras svelte-14cb1nh"),a(r,"class","rounded border border-purple-300 mb-2 h-3/4"),a(f,"class","JhengHei rounded border border-purple flex items-center justify-center h-1/4 svelte-14cb1nh")},m(l,n){M(l,t,n),g(t,e),M(l,r,n),M(l,f,n)},p(l,[n]){n&1&&Ue(e,l[0])},i:se,o:se,d(l){l&&I(t),l&&I(r),l&&I(f)}}}function et(i,t,e){let{imageType:r}=t;return i.$$set=f=>{"imageType"in f&&e(0,r=f.imageType)},[r]}class _e extends ne{constructor(t){super();ie(this,t,et,Ze,le,{imageType:0})}}function tt(i){let t,e,r,f,l,n,h,o,s;function d(_){i[3](_)}function w(_){i[4](_)}var v=me;function $(_){let R={};return _[1]!==void 0&&(R.file=_[1]),_[0]!==void 0&&(R.maxScale=_[0]),{props:R}}v&&(e=new v($(i)),C.push(()=>O(e,"file",d)),C.push(()=>O(e,"maxScale",w)));var x=_e;function U(_){return{props:{imageType:"Target"}}}x&&(n=new x(U()));var k=_e;function T(_){return{props:{imageType:"Mask"}}}return k&&(o=new k(T())),{c(){t=p("div"),e&&A(e.$$.fragment),l=p("div"),n&&A(n.$$.fragment),h=p("div"),o&&A(o.$$.fragment),a(t,"class","flex flex-col h-full mr-6 text-purple w-1/3"),a(l,"class","flex flex-col h-full mr-6 text-purple opacity-30 w-1/3"),a(h,"class","flex flex-col h-full text-purple opacity-30 w-1/3")},m(_,R){M(_,t,R),e&&P(e,t,null),M(_,l,R),n&&P(n,l,null),M(_,h,R),o&&P(o,h,null),s=!0},p(_,[R]){const c={};if(!r&&R&2&&(r=!0,c.file=_[1],W(()=>r=!1)),!f&&R&1&&(f=!0,c.maxScale=_[0],W(()=>f=!1)),v!==(v=me)){if(e){V();const S=e;H(S.$$.fragment,1,0,()=>{z(S,1)}),X()}v?(e=new v($(_)),C.push(()=>O(e,"file",d)),C.push(()=>O(e,"maxScale",w)),A(e.$$.fragment),N(e.$$.fragment,1),P(e,t,null)):e=null}else v&&e.$set(c);if(x!==(x=_e)){if(n){V();const S=n;H(S.$$.fragment,1,0,()=>{z(S,1)}),X()}x?(n=new x(U()),A(n.$$.fragment),N(n.$$.fragment,1),P(n,l,null)):n=null}if(k!==(k=_e)){if(o){V();const S=o;H(S.$$.fragment,1,0,()=>{z(S,1)}),X()}k?(o=new k(T()),A(o.$$.fragment),N(o.$$.fragment,1),P(o,h,null)):o=null}},i(_){s||(e&&N(e.$$.fragment,_),n&&N(n.$$.fragment,_),o&&N(o.$$.fragment,_),s=!0)},o(_){e&&H(e.$$.fragment,_),n&&H(n.$$.fragment,_),o&&H(o.$$.fragment,_),s=!1},d(_){_&&I(t),e&&z(e),_&&I(l),n&&z(n),_&&I(h),o&&z(o)}}}function nt(i,t,e){let{props:r}=t,{maxScale:f}=t,l;function n(o){l=o,e(1,l)}function h(o){f=o,e(0,f)}return i.$$set=o=>{"props"in o&&e(2,r=o.props),"maxScale"in o&&e(0,f=o.maxScale)},i.$$.update=()=>{i.$$.dirty&2&&l&&e(2,r={image1:l[0].name})},[f,l,r,n,h]}class Oe extends ne{constructor(t){super();ie(this,t,nt,tt,le,{props:2,maxScale:0})}}function it(i){let t,e,r,f,l,n,h,o;return{c(){t=p("div"),e=K(i[1]),r=p("div"),f=p("label"),l=K("\u9078\u64C7\u6A94\u6848"),n=p("input"),a(t,"class","mb-2 eras svelte-14cb1nh"),a(r,"class","bg-contain bg-no-repeat bg-center rounded border border-purple-300 mb-2 h-3/4"),a(n,"class","hidden"),a(n,"type","file"),a(f,"class","JhengHei rounded border border-purple flex items-center justify-center cursor-pointer h-1/4 hover:bg-purple hover:text-white svelte-14cb1nh")},m(s,d){M(s,t,d),g(t,e),M(s,r,d),i[4](r),M(s,f,d),g(f,l),g(f,n),h||(o=[Q(n,"change",i[5]),Q(n,"change",i[3])],h=!0)},p(s,[d]){d&2&&Ue(e,s[1])},i:se,o:se,d(s){s&&I(t),s&&I(r),i[4](null),s&&I(f),h=!1,Le(o)}}}function lt(i,t,e){let{file:r}=t,{imageType:f}=t,l;const n=s=>{if(!r.length){e(2,l.style.backgroundImage="",l);return}let d=window.URL.createObjectURL(s.target.files[0]);e(2,l.style.backgroundImage=`url(${d})`,l)};function h(s){C[s?"unshift":"push"](()=>{l=s,e(2,l)})}function o(){r=this.files,e(0,r)}return i.$$set=s=>{"file"in s&&e(0,r=s.file),"imageType"in s&&e(1,f=s.imageType)},[r,f,l,n,h,o]}class he extends ne{constructor(t){super();ie(this,t,lt,it,le,{file:0,imageType:1})}}function st(i){let t,e,r,f,l,n,h,o,s,d;function w(c){i[4](c)}function v(c){i[5](c)}var $=me;function x(c){let S={};return c[1]!==void 0&&(S.file=c[1]),c[0]!==void 0&&(S.maxScale=c[0]),{props:S}}$&&(e=new $(x(i)),C.push(()=>O(e,"file",w)),C.push(()=>O(e,"maxScale",v)));function U(c){i[6](c)}var k=he;function T(c){let S={imageType:"Target"};return c[2]!==void 0&&(S.file=c[2]),{props:S}}k&&(n=new k(T(i)),C.push(()=>O(n,"file",U)));var _=_e;function R(c){return{props:{imageType:"Mask"}}}return _&&(s=new _(R())),{c(){t=p("div"),e&&A(e.$$.fragment),l=p("div"),n&&A(n.$$.fragment),o=p("div"),s&&A(s.$$.fragment),a(t,"class","flex flex-col h-full mr-6 text-purple w-1/3"),a(l,"class","flex flex-col h-full mr-6 text-purple w-1/3"),a(o,"class","flex flex-col h-full text-purple opacity-30 w-1/3")},m(c,S){M(c,t,S),e&&P(e,t,null),M(c,l,S),n&&P(n,l,null),M(c,o,S),s&&P(s,o,null),d=!0},p(c,[S]){const m={};if(!r&&S&2&&(r=!0,m.file=c[1],W(()=>r=!1)),!f&&S&1&&(f=!0,m.maxScale=c[0],W(()=>f=!1)),$!==($=me)){if(e){V();const b=e;H(b.$$.fragment,1,0,()=>{z(b,1)}),X()}$?(e=new $(x(c)),C.push(()=>O(e,"file",w)),C.push(()=>O(e,"maxScale",v)),A(e.$$.fragment),N(e.$$.fragment,1),P(e,t,null)):e=null}else $&&e.$set(m);const y={};if(!h&&S&4&&(h=!0,y.file=c[2],W(()=>h=!1)),k!==(k=he)){if(n){V();const b=n;H(b.$$.fragment,1,0,()=>{z(b,1)}),X()}k?(n=new k(T(c)),C.push(()=>O(n,"file",U)),A(n.$$.fragment),N(n.$$.fragment,1),P(n,l,null)):n=null}else k&&n.$set(y);if(_!==(_=_e)){if(s){V();const b=s;H(b.$$.fragment,1,0,()=>{z(b,1)}),X()}_?(s=new _(R()),A(s.$$.fragment),N(s.$$.fragment,1),P(s,o,null)):s=null}},i(c){d||(e&&N(e.$$.fragment,c),n&&N(n.$$.fragment,c),s&&N(s.$$.fragment,c),d=!0)},o(c){e&&H(e.$$.fragment,c),n&&H(n.$$.fragment,c),s&&H(s.$$.fragment,c),d=!1},d(c){c&&I(t),e&&z(e),c&&I(l),n&&z(n),c&&I(o),s&&z(s)}}}function at(i,t,e){let{props:r}=t,{maxScale:f}=t,l,n;function h(d){l=d,e(1,l)}function o(d){f=d,e(0,f)}function s(d){n=d,e(2,n)}return i.$$set=d=>{"props"in d&&e(3,r=d.props),"maxScale"in d&&e(0,f=d.maxScale)},i.$$.update=()=>{i.$$.dirty&6&&l&&n&&e(3,r={image1:l[0].name,image2:n[0].name})},[f,l,n,r,h,o,s]}class rt extends ne{constructor(t){super();ie(this,t,at,st,le,{props:3,maxScale:0})}}function ft(i){let t,e,r,f,l,n,h,o,s,d,w;function v(m){i[5](m)}function $(m){i[6](m)}var x=me;function U(m){let y={};return m[1]!==void 0&&(y.file=m[1]),m[0]!==void 0&&(y.maxScale=m[0]),{props:y}}x&&(e=new x(U(i)),C.push(()=>O(e,"file",v)),C.push(()=>O(e,"maxScale",$)));function k(m){i[7](m)}var T=he;function _(m){let y={imageType:"Target"};return m[2]!==void 0&&(y.file=m[2]),{props:y}}T&&(n=new T(_(i)),C.push(()=>O(n,"file",k)));function R(m){i[8](m)}var c=he;function S(m){let y={imageType:"Mask"};return m[3]!==void 0&&(y.file=m[3]),{props:y}}return c&&(s=new c(S(i)),C.push(()=>O(s,"file",R))),{c(){t=p("div"),e&&A(e.$$.fragment),l=p("div"),n&&A(n.$$.fragment),o=p("div"),s&&A(s.$$.fragment),a(t,"class","flex flex-col h-full mr-6 text-purple w-1/3"),a(l,"class","flex flex-col h-full mr-6 text-purple w-1/3"),a(o,"class","flex flex-col h-full text-purple w-1/3")},m(m,y){M(m,t,y),e&&P(e,t,null),M(m,l,y),n&&P(n,l,null),M(m,o,y),s&&P(s,o,null),w=!0},p(m,[y]){const b={};if(!r&&y&2&&(r=!0,b.file=m[1],W(()=>r=!1)),!f&&y&1&&(f=!0,b.maxScale=m[0],W(()=>f=!1)),x!==(x=me)){if(e){V();const G=e;H(G.$$.fragment,1,0,()=>{z(G,1)}),X()}x?(e=new x(U(m)),C.push(()=>O(e,"file",v)),C.push(()=>O(e,"maxScale",$)),A(e.$$.fragment),N(e.$$.fragment,1),P(e,t,null)):e=null}else x&&e.$set(b);const Y={};if(!h&&y&4&&(h=!0,Y.file=m[2],W(()=>h=!1)),T!==(T=he)){if(n){V();const G=n;H(G.$$.fragment,1,0,()=>{z(G,1)}),X()}T?(n=new T(_(m)),C.push(()=>O(n,"file",k)),A(n.$$.fragment),N(n.$$.fragment,1),P(n,l,null)):n=null}else T&&n.$set(Y);const Z={};if(!d&&y&8&&(d=!0,Z.file=m[3],W(()=>d=!1)),c!==(c=he)){if(s){V();const G=s;H(G.$$.fragment,1,0,()=>{z(G,1)}),X()}c?(s=new c(S(m)),C.push(()=>O(s,"file",R)),A(s.$$.fragment),N(s.$$.fragment,1),P(s,o,null)):s=null}else c&&s.$set(Z)},i(m){w||(e&&N(e.$$.fragment,m),n&&N(n.$$.fragment,m),s&&N(s.$$.fragment,m),w=!0)},o(m){e&&H(e.$$.fragment,m),n&&H(n.$$.fragment,m),s&&H(s.$$.fragment,m),w=!1},d(m){m&&I(t),e&&z(e),m&&I(l),n&&z(n),m&&I(o),s&&z(s)}}}function ot(i,t,e){let{props:r}=t,{maxScale:f}=t,l,n,h;function o(v){l=v,e(1,l)}function s(v){f=v,e(0,f)}function d(v){n=v,e(2,n)}function w(v){h=v,e(3,h)}return i.$$set=v=>{"props"in v&&e(4,r=v.props),"maxScale"in v&&e(0,f=v.maxScale)},i.$$.update=()=>{i.$$.dirty&14&&l&&n&&h&&e(4,r={image1:l[0].name,image2:n[0].name,image3:h[0].name})},[f,l,n,h,r,o,s,d,w]}class Fe extends ne{constructor(t){super();ie(this,t,ot,ft,le,{props:4,maxScale:0})}}function Ge(i,t,e){const r=i.slice();return r[26]=t[e],r}function Ke(i){let t,e,r,f,l,n;function h(){return i[12](i[26])}return{c(){t=p("input"),a(t,"class",e="eras rounded appearance-none cursor-pointer border border-blue flex justify-center py-2 hover:bg-blue hover:text-white "+(i[0]==i[26]?"bg-blue text-white":"text-blue")+" svelte-fmjd3d"),a(t,"type","radio"),a(t,"name","mode"),a(t,"label",r=i[26]),t.checked=f=i[0]==i[26]},m(o,s){M(o,t,s),l||(n=Q(t,"click",h),l=!0)},p(o,s){i=o,s&1&&e!==(e="eras rounded appearance-none cursor-pointer border border-blue flex justify-center py-2 hover:bg-blue hover:text-white "+(i[0]==i[26]?"bg-blue text-white":"text-blue")+" svelte-fmjd3d")&&a(t,"class",e),s&1&&f!==(f=i[0]==i[26])&&(t.checked=f)},d(o){o&&I(t),l=!1,n()}}}function ut(i){let t;return{c(){t=p("p"),t.textContent="Image processing ...",a(t,"class","eras svelte-fmjd3d")},m(e,r){M(e,t,r)},d(e){e&&I(t)}}}function ct(i){let t;return{c(){t=p("p"),t.textContent="Training ...",a(t,"class","eras svelte-fmjd3d")},m(e,r){M(e,t,r)},d(e){e&&I(t)}}}function pt(i){let t;return{c(){t=p("p"),t.textContent="Ready for training !!",a(t,"class","eras svelte-fmjd3d")},m(e,r){M(e,t,r)},d(e){e&&I(t)}}}function dt(i){let t;return{c(){t=p("p"),t.textContent="Done !!",a(t,"class","eras svelte-fmjd3d")},m(e,r){M(e,t,r)},d(e){e&&I(t)}}}function mt(i){let t,e,r,f,l,n,h,o,s,d,w,v,$,x,U,k,T,_,R,c,S,m,y,b,Y,Z,G,we,D,ye,ge,ve,Ae,Se,B,xe,je,ae,Pe,$e,re,He,ke,fe,Re,be,oe,L,Me,Ie,Te,E,Ce,ze,ue=i[9],q=[];for(let u=0;u<ue.length;u+=1)q[u]=Ke(Ge(i,ue,u));function Ne(u,j){if(u[4]=="done"&&u[2]=="100%")return dt;if(u[4]=="done"&&u[2]=="0%")return pt;if(u[2]!="100%")return ct;if(u[2]=="100%")return ut}let ce=Ne(i),F=ce&&ce(i);function Ee(u){i[16](u)}function Je(u){i[17](u)}var ee=i[8][i[0]];function qe(u){let j={};return u[5]!==void 0&&(j.props=u[5]),u[1]!==void 0&&(j.maxScale=u[1]),{props:j}}return ee&&(L=new ee(qe(i)),C.push(()=>O(L,"props",Ee)),C.push(()=>O(L,"maxScale",Je))),{c(){t=p("div"),e=p("div"),r=p("div"),f=p("div"),f.textContent="SinGAN",l=p("div"),n=p("div"),h=K(i[2]),o=p("div"),s=p("div"),d=p("div"),w=p("div"),v=K("Style"),x=p("div"),U=p("div");for(let u=0;u<q.length;u+=1)q[u].c();T=p("div"),_=p("div"),R=p("div"),c=p("div"),S=K("Scale"),y=p("input"),Y=p("div"),Z=p("div"),G=K("Width"),D=p("input"),ge=p("div"),ve=p("div"),Ae=K("Height"),B=p("input"),ae=p("button"),Pe=K("Submit"),re=p("button"),He=K("Stop"),fe=p("div"),Re=p("div"),Re.textContent="Output",be=p("div"),F&&F.c(),oe=p("div"),L&&A(L.$$.fragment),a(f,"class","text-4xl mb-4 eras text-blue svelte-fmjd3d"),a(n,"class","absolute mx-auto h-5 flex justify-center items-center eras w-10/12 svelte-fmjd3d"),a(o,"class","flex items-center justify-center bg-purple h-5"),Be(o,"width",i[2]),a(l,"class","w-full"),a(r,"class","mb-8"),a(w,"class",$="w-full mb-4 eras text-blue "+(i[4]!="done"?"opacity-30 pointer-events-none":"")+" svelte-fmjd3d"),a(U,"class",k="flex flex-col justify-between mr-8 w-1/2 "+(i[4]!="done"?"opacity-30 pointer-events-none":"")),a(c,"class",m="eras text-blue "+(i[0]=="RandomSample"?"opacity-30 pointer-events-none":"")+" svelte-fmjd3d"),a(y,"class",b="eras text-center px-4 py-2 rounded-lg border border-blue text-xs w-20 focus:outline-none "+(i[0]=="RandomSample"?"opacity-30 pointer-events-none":"")+" svelte-fmjd3d"),a(y,"type","number"),a(y,"min","1"),a(y,"max",i[1]),a(R,"class","flex justify-between mb-2"),a(Z,"class",we="eras text-blue "+(i[0]!="RandomSample"?"opacity-30 pointer-events-none":"")+" svelte-fmjd3d"),a(D,"class",ye="eras text-center px-4 py-2 rounded-lg border border-blue text-xs w-20 focus:outline-none "+(i[0]!="RandomSample"?"opacity-30 pointer-events-none":"")+" svelte-fmjd3d"),a(D,"type","number"),a(D,"min","0.1"),a(D,"max","10"),a(D,"step","0.1"),a(Y,"class","flex justify-between mb-2"),a(ve,"class",Se="eras text-blue "+(i[0]!="RandomSample"?"opacity-30 pointer-events-none":"")+" svelte-fmjd3d"),a(B,"class",xe="eras text-center px-4 py-2 rounded-lg border border-blue text-xs w-20 focus:outline-none "+(i[0]!="RandomSample"?"opacity-30 pointer-events-none":"")+" svelte-fmjd3d"),a(B,"type","number"),a(B,"min","0.1"),a(B,"max","10"),a(B,"step","0.1"),a(ge,"class","flex justify-between"),a(_,"class",je="flex flex-col mb-8 "+(i[4]!="done"?"opacity-30 pointer-events-none":"")),a(ae,"class",$e="eras bg-purple text-white font-bold mb-8 py-2 rounded "+(i[4]!="done"?"opacity-30 pointer-events-none":"")+" svelte-fmjd3d"),a(re,"class",ke="eras bg-purple text-white font-bold py-2 rounded "+(i[4]=="done"?"opacity-30 pointer-events-none":"")+" svelte-fmjd3d"),a(T,"class","flex flex-col w-1/2"),a(x,"class","flex w-full h-full"),a(d,"class","flex flex-col mr-8 w-4/12"),a(Re,"class","mb-4 eras text-purple svelte-fmjd3d"),a(be,"class","w-full box-border p-2 border border-purple rounded mb-2 h-3/5"),a(oe,"class",Te="w-full flex h-2/5 "+(i[4]!="done"?"opacity-30 pointer-events-none":"")),a(fe,"class","flex flex-col w-8/12"),a(s,"class","inline-flex w-full h-4/5"),a(e,"class","h-full box-border py-10 mx-auto w-10/12"),a(t,"class","w-screen h-screen bg-white")},m(u,j){M(u,t,j),g(t,e),g(e,r),g(r,f),g(r,l),g(l,n),g(n,h),g(l,o),g(e,s),g(s,d),g(d,w),g(w,v),g(d,x),g(x,U);for(let te=0;te<q.length;te+=1)q[te].m(U,null);g(x,T),g(T,_),g(_,R),g(R,c),g(c,S),g(R,y),pe(y,i[3]),g(_,Y),g(Y,Z),g(Z,G),g(Y,D),pe(D,i[6]),g(_,ge),g(ge,ve),g(ve,Ae),g(ge,B),pe(B,i[7]),g(T,ae),g(ae,Pe),g(T,re),g(re,He),g(s,fe),g(fe,Re),g(fe,be),F&&F.m(be,null),g(fe,oe),L&&P(L,oe,null),E=!0,Ce||(ze=[Q(y,"input",i[13]),Q(D,"input",i[14]),Q(B,"input",i[15]),Q(ae,"click",i[10]),Q(re,"click",i[11])],Ce=!0)},p(u,[j]){if((!E||j&4)&&Ue(h,u[2]),(!E||j&4)&&Be(o,"width",u[2]),(!E||j&16&&$!==($="w-full mb-4 eras text-blue "+(u[4]!="done"?"opacity-30 pointer-events-none":"")+" svelte-fmjd3d"))&&a(w,"class",$),j&513){ue=u[9];let J;for(J=0;J<ue.length;J+=1){const De=Ge(u,ue,J);q[J]?q[J].p(De,j):(q[J]=Ke(De),q[J].c(),q[J].m(U,null))}for(;J<q.length;J+=1)q[J].d(1);q.length=ue.length}(!E||j&16&&k!==(k="flex flex-col justify-between mr-8 w-1/2 "+(u[4]!="done"?"opacity-30 pointer-events-none":"")))&&a(U,"class",k),(!E||j&1&&m!==(m="eras text-blue "+(u[0]=="RandomSample"?"opacity-30 pointer-events-none":"")+" svelte-fmjd3d"))&&a(c,"class",m),(!E||j&1&&b!==(b="eras text-center px-4 py-2 rounded-lg border border-blue text-xs w-20 focus:outline-none "+(u[0]=="RandomSample"?"opacity-30 pointer-events-none":"")+" svelte-fmjd3d"))&&a(y,"class",b),(!E||j&2)&&a(y,"max",u[1]),j&8&&de(y.value)!==u[3]&&pe(y,u[3]),(!E||j&1&&we!==(we="eras text-blue "+(u[0]!="RandomSample"?"opacity-30 pointer-events-none":"")+" svelte-fmjd3d"))&&a(Z,"class",we),(!E||j&1&&ye!==(ye="eras text-center px-4 py-2 rounded-lg border border-blue text-xs w-20 focus:outline-none "+(u[0]!="RandomSample"?"opacity-30 pointer-events-none":"")+" svelte-fmjd3d"))&&a(D,"class",ye),j&64&&de(D.value)!==u[6]&&pe(D,u[6]),(!E||j&1&&Se!==(Se="eras text-blue "+(u[0]!="RandomSample"?"opacity-30 pointer-events-none":"")+" svelte-fmjd3d"))&&a(ve,"class",Se),(!E||j&1&&xe!==(xe="eras text-center px-4 py-2 rounded-lg border border-blue text-xs w-20 focus:outline-none "+(u[0]!="RandomSample"?"opacity-30 pointer-events-none":"")+" svelte-fmjd3d"))&&a(B,"class",xe),j&128&&de(B.value)!==u[7]&&pe(B,u[7]),(!E||j&16&&je!==(je="flex flex-col mb-8 "+(u[4]!="done"?"opacity-30 pointer-events-none":"")))&&a(_,"class",je),(!E||j&16&&$e!==($e="eras bg-purple text-white font-bold mb-8 py-2 rounded "+(u[4]!="done"?"opacity-30 pointer-events-none":"")+" svelte-fmjd3d"))&&a(ae,"class",$e),(!E||j&16&&ke!==(ke="eras bg-purple text-white font-bold py-2 rounded "+(u[4]=="done"?"opacity-30 pointer-events-none":"")+" svelte-fmjd3d"))&&a(re,"class",ke),ce!==(ce=Ne(u))&&(F&&F.d(1),F=ce&&ce(u),F&&(F.c(),F.m(be,null)));const te={};if(!Me&&j&32&&(Me=!0,te.props=u[5],W(()=>Me=!1)),!Ie&&j&2&&(Ie=!0,te.maxScale=u[1],W(()=>Ie=!1)),ee!==(ee=u[8][u[0]])){if(L){V();const J=L;H(J.$$.fragment,1,0,()=>{z(J,1)}),X()}ee?(L=new ee(qe(u)),C.push(()=>O(L,"props",Ee)),C.push(()=>O(L,"maxScale",Je)),A(L.$$.fragment),N(L.$$.fragment,1),P(L,oe,null)):L=null}else ee&&L.$set(te);(!E||j&16&&Te!==(Te="w-full flex h-2/5 "+(u[4]!="done"?"opacity-30 pointer-events-none":"")))&&a(oe,"class",Te)},i(u){E||(L&&N(L.$$.fragment,u),E=!0)},o(u){L&&H(L.$$.fragment,u),E=!1},d(u){u&&I(t),We(q,u),F&&F.d(),L&&z(L),Ce=!1,Le(ze)}}}function _t(i,t,e){let r="http://127.0.0.1:5000",f={Paint2Image:rt,Editing:Fe,Harmonization:Fe,SuperResolution:Oe,Animation:Oe,RandomSample:Oe},l="Paint2Image",n=99,h=["Paint2Image","Editing","Harmonization","SuperResolution","Animation","RandomSample"],o="100%",s,d,w,v,$;const x=()=>{switch(l){case"SuperResolution":e(5,w.resolution=s,w);break;case"RandomSample":e(5,w.width=v,w),e(5,w.height=$,w);break;case"Anmation":break;default:e(5,w.scale=s,w)}fetch(`${r}/${l}`,{body:JSON.stringify(w),headers:{"content-type":"application/json"},method:"POST"}).then(b=>b.json()).then(b=>{U()})},U=()=>{fetch(`${r}/progress`).then(b=>b.text()).then(b=>{e(2,o=b)})},k=()=>{fetch(`${r}/status`).then(b=>b.text()).then(b=>{e(4,d=b)})},T=()=>{fetch(`${r}/stop`).then(b=>b.text()).then(b=>{stoplog=b})};Qe(async()=>{U(),k(),setInterval(function(){U()},1e3),setInterval(function(){k()},1e3)});const _=b=>e(0,l=b);function R(){s=de(this.value),e(3,s)}function c(){v=de(this.value),e(6,v)}function S(){$=de(this.value),e(7,$)}function m(b){w=b,e(5,w)}function y(b){n=b,e(1,n)}return[l,n,o,s,d,w,v,$,f,h,x,T,_,R,c,S,m,y]}class ht extends ne{constructor(t){super();ie(this,t,_t,mt,le,{})}}new ht({target:document.getElementById("app")});