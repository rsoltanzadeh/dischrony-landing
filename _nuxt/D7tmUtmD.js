import{l as h,D as k,E as g,d as m,G as f,H as v,J as u,K as S,L as w,c as b,e as A,M as C,k as y,t as x,N as _,U as E,r as z,an as O,o as $,R as j,w as I,O as l}from"./xpi4dJ4k.js";const N={base:"inline-flex items-center justify-center text-gray-900 dark:text-white",padding:"px-1",size:{xs:"h-4 min-w-[16px] text-[10px]",sm:"h-5 min-w-[20px] text-[11px]",md:"h-6 min-w-[24px] text-[12px]"},rounded:"rounded",font:"font-medium font-sans",background:"bg-gray-100 dark:bg-gray-800",ring:"ring-1 ring-gray-300 dark:ring-gray-700 ring-inset",default:{size:"sm"}},d=k(g.ui.strategy,g.ui.kbd,N),M=m({inheritAttrs:!1,props:{value:{type:String,default:null},size:{type:String,default:()=>d.default.size,validator(t){return Object.keys(d.size).includes(t)}},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(t){const{ui:e,attrs:a}=f("kbd",v(t,"ui"),d),s=u(()=>S(w(e.value.base,e.value.size[t.size],e.value.padding,e.value.rounded,e.value.font,e.value.background,e.value.ring),t.class));return{ui:e,attrs:a,kbdClass:s}}});function T(t,e,a,s,n,r){return b(),A("kbd",_({class:t.kbdClass},t.attrs),[C(t.$slots,"default",{},()=>[y(x(t.value),1)])],16)}const U=h(M,[["render",T]]),B=()=>{const t=u(()=>navigator&&navigator.userAgent&&navigator.userAgent.match(/Macintosh;/)),e=z(" "),a=O(),s=u(()=>{var i,c,o;const n=(i=a.value)==null?void 0:i.tagName,r=(c=a.value)==null?void 0:c.contentEditable;return n==="INPUT"||n==="TEXTAREA"||r==="true"||r==="plaintext-only"?((o=a.value)==null?void 0:o.name)||!0:!1});return $(()=>{e.value=t.value?"⌘":"Ctrl"}),{macOS:t,metaSymbol:e,activeElement:a,usingInput:s}},R=E(B),J=m({inheritAttrs:!1,__name:"Shortcut",props:{value:{type:String,required:!0},class:{type:[String,Object,Array],default:void 0}},setup(t){const e={wrapper:"!my-0 align-text-top"},a=t,{metaSymbol:s}=R(),{ui:n,attrs:r}=f("content.shortcut",void 0,e,v(a,"class"),!0),p=u(()=>a.value==="meta"?s.value:a.value);return(i,c)=>{const o=U;return b(),j(o,_({class:l(n).wrapper},l(r)),{default:I(()=>[y(x(l(p)),1)]),_:1},16,["class"])}}});export{J as default};
