import{O as a,ar as w,v as y,as as D,B as H,s as g,d as S,a1 as _,at as b,au as s}from"./xpi4dJ4k.js";import q from"./BN-zt7fC.js";import x from"./Be2Czbhu.js";import"./Chi6CCfa.js";import"./C-v3KzvZ.js";import"./Dnd51l0P.js";import"./BkFgZbP2.js";import"./A1j4TPrs.js";import"./19zCKYWc.js";const d=(u,p=y())=>{const e=a(u),f=g();w(()=>a(u),(n=e)=>{if(!p.path||!n)return;const t=Object.assign({},(n==null?void 0:n.head)||{});t.meta=[...t.meta||[]],t.link=[...t.link||[]];const r=t.title||(n==null?void 0:n.title);r&&(t.title=r),f.public.content.host;const c=(t==null?void 0:t.description)||(n==null?void 0:n.description);c&&t.meta.filter(l=>l.name==="description").length===0&&t.meta.push({name:"description",content:c}),t!=null&&t.image||(n==null||n.image),D(()=>H(t))},{immediate:!0})},O=S({name:"ContentDoc",props:{tag:{type:String,required:!1,default:"div"},excerpt:{type:Boolean,default:!1},path:{type:String,required:!1,default:void 0},query:{type:Object,required:!1,default:void 0},head:{type:Boolean,required:!1,default:void 0}},render(u){const{contentHead:p}=g().public.content,e=_(),{tag:f,excerpt:m,path:n,query:t,head:r}=u,c=r===void 0?p:r,l={...t||{},path:n||(t==null?void 0:t.path)||b(y().path),find:"one"},v=(o,i)=>s("pre",null,JSON.stringify({message:"You should use slots with <ContentDoc>",slot:o,data:i},null,2));return s(x,l,{default:e!=null&&e.default?({data:o,refresh:i,isPartial:C})=>{var h;return c&&d(o),(h=e.default)==null?void 0:h.call(e,{doc:o,refresh:i,isPartial:C,excerpt:m,...this.$attrs})}:({data:o})=>(c&&d(o),s(q,{value:o,excerpt:m,tag:f,...this.$attrs},{empty:i=>e!=null&&e.empty?e.empty(i):v("default",o)})),empty:o=>{var i;return((i=e==null?void 0:e.empty)==null?void 0:i.call(e,o))||s("p",null,"Document is empty, overwrite this content with #empty slot in <ContentDoc>.")},"not-found":o=>{var i;return((i=e==null?void 0:e["not-found"])==null?void 0:i.call(e,o))||s("p",null,"Document not found, overwrite this content with #not-found slot in <ContentDoc>.")}})}}),P=O;export{P as default};
