const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/VPLocalSearchBox.DUibIwWK.js","assets/chunks/framework.CdjpmwdR.js","assets/chunks/mermaid.core.DLRIWwJg.js"])))=>i.map(i=>d[i]);
import{d as y,c as i,r as p,n as V,o as r,a as X,t as h,b as P,w as g,T as On,e as b,_ as I,u as pn,i as We,f as Ke,g as En,h as v,j as a,k as d,l as mn,m as Tn,p as R,q as en,s as yn,v as on,x as Nn,y as Vn,z as Qe,A as Je,F as M,B as G,C as un,D as xn,E as _,G as Le,H as an,I as $e,J as vn,K as dn,L as wn,M as Xe,N as De,O as Ln,P as Rn,Q as Me,R as An,S as Ye,U as Ze,V as Oe,W as Ee,X as Ne,Y as nt,Z as et,$ as Ve,a0 as tt,a1 as at,a2 as st}from"./framework.CdjpmwdR.js";const ot=y({__name:"VPBadge",props:{text:{},type:{default:"tip"}},setup(n){return(t,e)=>(r(),i("span",{class:V(["VPBadge",n.type])},[p(t.$slots,"default",{},()=>[X(h(n.text),1)])],2))}}),rt={key:0,class:"VPBackdrop"},it=y({__name:"VPBackdrop",props:{show:{type:Boolean}},setup(n){return(t,e)=>(r(),P(On,{name:"fade"},{default:g(()=>[n.show?(r(),i("div",rt)):b("",!0)]),_:1}))}}),lt=I(it,[["__scopeId","data-v-49e9b6df"]]),O=pn;function ct(n,t){let e,o=!1;return()=>{e&&clearTimeout(e),o?e=setTimeout(n,t):(n(),(o=!0)&&setTimeout(()=>o=!1,t))}}function $n(n){return n.startsWith("/")?n:`/${n}`}function Bn(n){const{pathname:t,search:e,hash:o,protocol:s}=new URL(n,"http://a.com");if(We(n)||n.startsWith("#")||!s.startsWith("http")||!Ke(t))return n;const{site:l}=O(),c=t.endsWith("/")||t.endsWith(".html")?n:n.replace(/(?:(^\.+)\/)?.*$/,`$1${t.replace(/(\.md)?$/,l.value.cleanUrls?"":".html")}${e}${o}`);return En(c)}function bn({correspondingLink:n=!1}={}){const{site:t,localeIndex:e,page:o,theme:s,hash:l}=O(),c=v(()=>{var m,f;return{label:(m=t.value.locales[e.value])==null?void 0:m.label,link:((f=t.value.locales[e.value])==null?void 0:f.link)||(e.value==="root"?"/":`/${e.value}/`)}});return{localeLinks:v(()=>Object.entries(t.value.locales).flatMap(([m,f])=>c.value.label===f.label?[]:{text:f.label,link:dt(f.link||(m==="root"?"/":`/${m}/`),s.value.i18nRouting!==!1&&n,o.value.relativePath.slice(c.value.link.length-1),!t.value.cleanUrls)+l.value})),currentLang:c}}function dt(n,t,e,o){return t?n.replace(/\/$/,"")+$n(e.replace(/(^|\/)index\.md$/,"$1").replace(/\.md$/,o?".html":"")):n}const ut={class:"NotFound"},pt={class:"code"},mt={class:"title"},ht={class:"quote"},gt={class:"action"},ft=["href","aria-label"],vt=y({__name:"NotFound",setup(n){const{theme:t}=O(),{currentLang:e}=bn();return(o,s)=>{var l,c,u,m,f;return r(),i("div",ut,[a("p",pt,h(((l=d(t).notFound)==null?void 0:l.code)??"404"),1),a("h1",mt,h(((c=d(t).notFound)==null?void 0:c.title)??"PAGE NOT FOUND"),1),s[0]||(s[0]=a("div",{class:"divider"},null,-1)),a("blockquote",ht,h(((u=d(t).notFound)==null?void 0:u.quote)??"But if you don't change your direction, and if you keep looking, you may end up where you are heading."),1),a("div",gt,[a("a",{class:"link",href:d(En)(d(e).link),"aria-label":((m=d(t).notFound)==null?void 0:m.linkLabel)??"go to home"},h(((f=d(t).notFound)==null?void 0:f.linkText)??"Take me home"),9,ft)])])}}}),bt=I(vt,[["__scopeId","data-v-e6e96a08"]]);function Re(n,t){if(Array.isArray(n))return kn(n);if(n==null)return[];t=$n(t);const e=Object.keys(n).sort((s,l)=>l.split("/").length-s.split("/").length).find(s=>t.startsWith($n(s))),o=e?n[e]:[];return Array.isArray(o)?kn(o):kn(o.items,o.base)}function kt(n){const t=[];let e=0;for(const o in n){const s=n[o];if(s.items){e=t.push(s);continue}t[e]||t.push({items:[]}),t[e].items.push(s)}return t}function _t(n){const t=[];function e(o){for(const s of o)s.text&&s.link&&t.push({text:s.text,link:s.link,docFooterText:s.docFooterText}),s.items&&e(s.items)}return e(n),t}function Dn(n,t){return Array.isArray(t)?t.some(e=>Dn(n,e)):mn(n,t.link)?!0:t.items?Dn(n,t.items):!1}function kn(n,t){return[...n].map(e=>{const o={...e},s=o.base||t;return s&&o.link&&(o.link=s+o.link),o.items&&(o.items=kn(o.items,s)),o})}function ln(){const{frontmatter:n,page:t,theme:e}=O(),o=Tn("(min-width: 960px)"),s=R(!1),l=v(()=>{const j=e.value.sidebar,F=t.value.relativePath;return j?Re(j,F):[]}),c=R(l.value);en(l,(j,F)=>{JSON.stringify(j)!==JSON.stringify(F)&&(c.value=l.value)});const u=v(()=>n.value.sidebar!==!1&&c.value.length>0&&n.value.layout!=="home"),m=v(()=>f?n.value.aside==null?e.value.aside==="left":n.value.aside==="left":!1),f=v(()=>n.value.layout==="home"?!1:n.value.aside!=null?!!n.value.aside:e.value.aside!==!1),x=v(()=>u.value&&o.value),w=v(()=>u.value?kt(c.value):[]);function T(){s.value=!0}function L(){s.value=!1}function B(){s.value?L():T()}return{isOpen:s,sidebar:c,sidebarGroups:w,hasSidebar:u,hasAside:f,leftAside:m,isSidebarEnabled:x,open:T,close:L,toggle:B}}function yt(n,t){let e;yn(()=>{e=n.value?document.activeElement:void 0}),on(()=>{window.addEventListener("keyup",o)}),Nn(()=>{window.removeEventListener("keyup",o)});function o(s){s.key==="Escape"&&n.value&&(t(),e==null||e.focus())}}function xt(n){const{page:t,hash:e}=O(),o=R(!1),s=v(()=>n.value.collapsed!=null),l=v(()=>!!n.value.link),c=R(!1),u=()=>{c.value=mn(t.value.relativePath,n.value.link)};en([t,n,e],u),on(u);const m=v(()=>c.value?!0:n.value.items?Dn(t.value.relativePath,n.value.items):!1),f=v(()=>!!(n.value.items&&n.value.items.length));yn(()=>{o.value=!!(s.value&&n.value.collapsed)}),Vn(()=>{(c.value||m.value)&&(o.value=!1)});function x(){s.value&&(o.value=!o.value)}return{collapsed:o,collapsible:s,isLink:l,isActiveLink:c,hasActiveLink:m,hasChildren:f,toggle:x}}function wt(){const{hasSidebar:n}=ln(),t=Tn("(min-width: 960px)"),e=Tn("(min-width: 1280px)");return{isAsideEnabled:v(()=>!e.value&&!t.value?!1:n.value?e.value:t.value)}}const At=/\b(?:VPBadge|header-anchor|footnote-ref|ignore-header)\b/,Mn=[];function Be(n){return typeof n.outline=="object"&&!Array.isArray(n.outline)&&n.outline.label||n.outlineTitle||"On this page"}function zn(n){const t=[...document.querySelectorAll(".VPDoc :where(h1,h2,h3,h4,h5,h6)")].filter(e=>e.id&&e.hasChildNodes()).map(e=>{const o=Number(e.tagName[1]);return{element:e,title:Pt(e),link:"#"+e.id,level:o}});return Ct(t,n)}function Pt(n){let t="";for(const e of n.childNodes)if(e.nodeType===1){if(At.test(e.className))continue;t+=e.textContent}else e.nodeType===3&&(t+=e.textContent);return t.trim()}function Ct(n,t){if(t===!1)return[];const e=(typeof t=="object"&&!Array.isArray(t)?t.level:t)||2,[o,s]=typeof e=="number"?[e,e]:e==="deep"?[2,6]:e;return Tt(n,o,s)}function St(n,t){const{isAsideEnabled:e}=wt(),o=ct(l,100);let s=null;on(()=>{requestAnimationFrame(l),window.addEventListener("scroll",o)}),Qe(()=>{c(location.hash)}),Nn(()=>{window.removeEventListener("scroll",o)});function l(){if(!e.value)return;const u=window.scrollY,m=window.innerHeight,f=document.body.offsetHeight,x=Math.abs(u+m-f)<1,w=Mn.map(({element:L,link:B})=>({link:B,top:It(L)})).filter(({top:L})=>!Number.isNaN(L)).sort((L,B)=>L.top-B.top);if(!w.length){c(null);return}if(u<1){c(null);return}if(x){c(w[w.length-1].link);return}let T=null;for(const{link:L,top:B}of w){if(B>u+Je()+4)break;T=L}c(T)}function c(u){s&&s.classList.remove("active"),u==null?s=null:s=n.value.querySelector(`a[href="${decodeURIComponent(u)}"]`);const m=s;m?(m.classList.add("active"),t.value.style.top=m.offsetTop+39+"px",t.value.style.opacity="1"):(t.value.style.top="33px",t.value.style.opacity="0")}}function It(n){let t=0;for(;n!==document.body;){if(n===null)return NaN;t+=n.offsetTop,n=n.offsetParent}return t}function Tt(n,t,e){Mn.length=0;const o=[],s=[];return n.forEach(l=>{const c={...l,children:[]};let u=s[s.length-1];for(;u&&u.level>=c.level;)s.pop(),u=s[s.length-1];if(c.element.classList.contains("ignore-header")||u&&"shouldIgnore"in u){s.push({level:c.level,shouldIgnore:!0});return}c.level>e||c.level<t||(Mn.push({element:c.element,link:c.link}),u?u.children.push(c):o.push(c),s.push(c))}),o}const Lt=["href","title"],$t=y({__name:"VPDocOutlineItem",props:{headers:{},root:{type:Boolean}},setup(n){function t({target:e}){const o=e.href.split("#")[1],s=document.getElementById(decodeURIComponent(o));s==null||s.focus({preventScroll:!0})}return(e,o)=>{const s=un("VPDocOutlineItem",!0);return r(),i("ul",{class:V(["VPDocOutlineItem",n.root?"root":"nested"])},[(r(!0),i(M,null,G(n.headers,({children:l,link:c,title:u})=>(r(),i("li",null,[a("a",{class:"outline-link",href:c,onClick:t,title:u},h(u),9,Lt),l!=null&&l.length?(r(),P(s,{key:0,headers:l},null,8,["headers"])):b("",!0)]))),256))],2)}}}),ze=I($t,[["__scopeId","data-v-4034b050"]]),Dt={class:"content"},Mt={"aria-level":"2",class:"outline-title",id:"doc-outline-aria-label",role:"heading"},Ot=y({__name:"VPDocAsideOutline",setup(n){const{frontmatter:t,theme:e}=O(),o=Le([]);xn(()=>{o.value=zn(t.value.outline??e.value.outline)});const s=R(),l=R();return St(s,l),(c,u)=>(r(),i("nav",{"aria-labelledby":"doc-outline-aria-label",class:V(["VPDocAsideOutline",{"has-outline":o.value.length>0}]),ref_key:"container",ref:s},[a("div",Dt,[a("div",{class:"outline-marker",ref_key:"marker",ref:l},null,512),a("div",Mt,h(d(Be)(d(e))),1),_(ze,{headers:o.value,root:!0},null,8,["headers"])])],2))}}),Et=I(Ot,[["__scopeId","data-v-cc53f104"]]),Nt={class:"VPDocAsideCarbonAds"},Vt=y({__name:"VPDocAsideCarbonAds",props:{carbonAds:{}},setup(n){const t=()=>null;return(e,o)=>(r(),i("div",Nt,[_(d(t),{"carbon-ads":n.carbonAds},null,8,["carbon-ads"])]))}}),Rt={class:"VPDocAside"},Bt=y({__name:"VPDocAside",setup(n){const{theme:t}=O();return(e,o)=>(r(),i("div",Rt,[p(e.$slots,"aside-top",{},void 0,!0),p(e.$slots,"aside-outline-before",{},void 0,!0),_(Et),p(e.$slots,"aside-outline-after",{},void 0,!0),o[0]||(o[0]=a("div",{class:"spacer"},null,-1)),p(e.$slots,"aside-ads-before",{},void 0,!0),d(t).carbonAds?(r(),P(Vt,{key:0,"carbon-ads":d(t).carbonAds},null,8,["carbon-ads"])):b("",!0),p(e.$slots,"aside-ads-after",{},void 0,!0),p(e.$slots,"aside-bottom",{},void 0,!0)]))}}),zt=I(Bt,[["__scopeId","data-v-9516880d"]]);function qt(){const{theme:n,page:t}=O();return v(()=>{const{text:e="Edit this page",pattern:o=""}=n.value.editLink||{};let s;return typeof o=="function"?s=o(t.value):s=o.replace(/:path/g,t.value.filePath),{url:s,text:e}})}function Gt(){const{page:n,theme:t,frontmatter:e}=O();return v(()=>{var f,x,w,T,L,B,j,F;const o=Re(t.value.sidebar,n.value.relativePath),s=_t(o),l=jt(s,H=>H.link.replace(/[?#].*$/,"")),c=l.findIndex(H=>mn(n.value.relativePath,H.link)),u=((f=t.value.docFooter)==null?void 0:f.prev)===!1&&!e.value.prev||e.value.prev===!1,m=((x=t.value.docFooter)==null?void 0:x.next)===!1&&!e.value.next||e.value.next===!1;return{prev:u?void 0:{text:(typeof e.value.prev=="string"?e.value.prev:typeof e.value.prev=="object"?e.value.prev.text:void 0)??((w=l[c-1])==null?void 0:w.docFooterText)??((T=l[c-1])==null?void 0:T.text),link:(typeof e.value.prev=="object"?e.value.prev.link:void 0)??((L=l[c-1])==null?void 0:L.link)},next:m?void 0:{text:(typeof e.value.next=="string"?e.value.next:typeof e.value.next=="object"?e.value.next.text:void 0)??((B=l[c+1])==null?void 0:B.docFooterText)??((j=l[c+1])==null?void 0:j.text),link:(typeof e.value.next=="object"?e.value.next.link:void 0)??((F=l[c+1])==null?void 0:F.link)}}})}function jt(n,t){const e=new Set;return n.filter(o=>{const s=t(o);return e.has(s)?!1:e.add(s)})}const sn=y({__name:"VPLink",props:{tag:{},href:{},noIcon:{type:Boolean},target:{},rel:{}},setup(n){const t=n,e=v(()=>t.tag??(t.href?"a":"span")),o=v(()=>t.href&&$e.test(t.href)||t.target==="_blank");return(s,l)=>(r(),P(an(e.value),{class:V(["VPLink",{link:n.href,"vp-external-link-icon":o.value,"no-icon":n.noIcon}]),href:n.href?d(Bn)(n.href):void 0,target:n.target??(o.value?"_blank":void 0),rel:n.rel??(o.value?"noreferrer":void 0)},{default:g(()=>[p(s.$slots,"default")]),_:3},8,["class","href","target","rel"]))}}),Ht={class:"VPLastUpdated"},Ft=["datetime"],Ut=y({__name:"VPDocFooterLastUpdated",setup(n){const{theme:t,page:e,lang:o}=O(),s=v(()=>new Date(e.value.lastUpdated)),l=v(()=>s.value.toISOString()),c=R("");return on(()=>{yn(()=>{var u,m,f;c.value=new Intl.DateTimeFormat((m=(u=t.value.lastUpdated)==null?void 0:u.formatOptions)!=null&&m.forceLocale?o.value:void 0,((f=t.value.lastUpdated)==null?void 0:f.formatOptions)??{dateStyle:"short",timeStyle:"short"}).format(s.value)})}),(u,m)=>{var f;return r(),i("p",Ht,[X(h(((f=d(t).lastUpdated)==null?void 0:f.text)||d(t).lastUpdatedText||"Last updated")+": ",1),a("time",{datetime:l.value},h(c.value),9,Ft)])}}}),Wt=I(Ut,[["__scopeId","data-v-3607c463"]]),Kt={key:0,class:"VPDocFooter"},Qt={key:0,class:"edit-info"},Jt={key:0,class:"edit-link"},Xt={key:1,class:"last-updated"},Yt={key:1,class:"prev-next","aria-labelledby":"doc-footer-aria-label"},Zt={class:"pager"},na=["innerHTML"],ea=["innerHTML"],ta={class:"pager"},aa=["innerHTML"],sa=["innerHTML"],oa=y({__name:"VPDocFooter",setup(n){const{theme:t,page:e,frontmatter:o}=O(),s=qt(),l=Gt(),c=v(()=>t.value.editLink&&o.value.editLink!==!1),u=v(()=>e.value.lastUpdated),m=v(()=>c.value||u.value||l.value.prev||l.value.next);return(f,x)=>{var w,T,L,B;return m.value?(r(),i("footer",Kt,[p(f.$slots,"doc-footer-before",{},void 0,!0),c.value||u.value?(r(),i("div",Qt,[c.value?(r(),i("div",Jt,[_(sn,{class:"edit-link-button",href:d(s).url,"no-icon":!0},{default:g(()=>[x[0]||(x[0]=a("span",{class:"vpi-square-pen edit-link-icon"},null,-1)),X(" "+h(d(s).text),1)]),_:1},8,["href"])])):b("",!0),u.value?(r(),i("div",Xt,[_(Wt)])):b("",!0)])):b("",!0),(w=d(l).prev)!=null&&w.link||(T=d(l).next)!=null&&T.link?(r(),i("nav",Yt,[x[1]||(x[1]=a("span",{class:"visually-hidden",id:"doc-footer-aria-label"},"Pager",-1)),a("div",Zt,[(L=d(l).prev)!=null&&L.link?(r(),P(sn,{key:0,class:"pager-link prev",href:d(l).prev.link},{default:g(()=>{var j;return[a("span",{class:"desc",innerHTML:((j=d(t).docFooter)==null?void 0:j.prev)||"Previous page"},null,8,na),a("span",{class:"title",innerHTML:d(l).prev.text},null,8,ea)]}),_:1},8,["href"])):b("",!0)]),a("div",ta,[(B=d(l).next)!=null&&B.link?(r(),P(sn,{key:0,class:"pager-link next",href:d(l).next.link},{default:g(()=>{var j;return[a("span",{class:"desc",innerHTML:((j=d(t).docFooter)==null?void 0:j.next)||"Next page"},null,8,aa),a("span",{class:"title",innerHTML:d(l).next.text},null,8,sa)]}),_:1},8,["href"])):b("",!0)])])):b("",!0)])):b("",!0)}}}),ra=I(oa,[["__scopeId","data-v-cd0721dd"]]),ia={class:"container"},la={class:"aside-container"},ca={class:"aside-content"},da={class:"content"},ua={class:"content-container"},pa={class:"main"},ma=y({__name:"VPDoc",setup(n){const{theme:t}=O(),e=vn(),{hasSidebar:o,hasAside:s,leftAside:l}=ln(),c=v(()=>e.path.replace(/[./]+/g,"_").replace(/_html$/,""));return(u,m)=>{const f=un("Content");return r(),i("div",{class:V(["VPDoc",{"has-sidebar":d(o),"has-aside":d(s)}])},[p(u.$slots,"doc-top",{},void 0,!0),a("div",ia,[d(s)?(r(),i("div",{key:0,class:V(["aside",{"left-aside":d(l)}])},[m[0]||(m[0]=a("div",{class:"aside-curtain"},null,-1)),a("div",la,[a("div",ca,[_(zt,null,{"aside-top":g(()=>[p(u.$slots,"aside-top",{},void 0,!0)]),"aside-bottom":g(()=>[p(u.$slots,"aside-bottom",{},void 0,!0)]),"aside-outline-before":g(()=>[p(u.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":g(()=>[p(u.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":g(()=>[p(u.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":g(()=>[p(u.$slots,"aside-ads-after",{},void 0,!0)]),_:3})])])],2)):b("",!0),a("div",da,[a("div",ua,[p(u.$slots,"doc-before",{},void 0,!0),a("main",pa,[_(f,{class:V(["vp-doc",[c.value,d(t).externalLinkIcon&&"external-link-icon-enabled"]])},null,8,["class"])]),_(ra,null,{"doc-footer-before":g(()=>[p(u.$slots,"doc-footer-before",{},void 0,!0)]),_:3}),p(u.$slots,"doc-after",{},void 0,!0)])])]),p(u.$slots,"doc-bottom",{},void 0,!0)],2)}}}),ha=I(ma,[["__scopeId","data-v-f640936e"]]),ga=y({__name:"VPButton",props:{tag:{},size:{default:"medium"},theme:{default:"brand"},text:{},href:{},target:{},rel:{}},setup(n){const t=n,e=v(()=>t.href&&$e.test(t.href)),o=v(()=>t.tag||(t.href?"a":"button"));return(s,l)=>(r(),P(an(o.value),{class:V(["VPButton",[n.size,n.theme]]),href:n.href?d(Bn)(n.href):void 0,target:t.target??(e.value?"_blank":void 0),rel:t.rel??(e.value?"noreferrer":void 0)},{default:g(()=>[X(h(n.text),1)]),_:1},8,["class","href","target","rel"]))}}),fa=I(ga,[["__scopeId","data-v-baf7dc9c"]]),va=["src","alt"],ba=y({inheritAttrs:!1,__name:"VPImage",props:{image:{},alt:{}},setup(n){return(t,e)=>{const o=un("VPImage",!0);return n.image?(r(),i(M,{key:0},[typeof n.image=="string"||"src"in n.image?(r(),i("img",dn({key:0,class:"VPImage"},typeof n.image=="string"?t.$attrs:{...n.image,...t.$attrs},{src:d(En)(typeof n.image=="string"?n.image:n.image.src),alt:n.alt??(typeof n.image=="string"?"":n.image.alt||"")}),null,16,va)):(r(),i(M,{key:1},[_(o,dn({class:"dark",image:n.image.dark,alt:n.image.alt},t.$attrs),null,16,["image","alt"]),_(o,dn({class:"light",image:n.image.light,alt:n.image.alt},t.$attrs),null,16,["image","alt"])],64))],64)):b("",!0)}}}),_n=I(ba,[["__scopeId","data-v-f9c85911"]]),ka={class:"container"},_a={class:"main"},ya={class:"heading"},xa=["innerHTML"],wa=["innerHTML"],Aa=["innerHTML"],Pa={key:0,class:"actions"},Ca={key:0,class:"image"},Sa={class:"image-container"},Ia=y({__name:"VPHero",props:{name:{},text:{},tagline:{},image:{},actions:{}},setup(n){const t=wn("hero-image-slot-exists");return(e,o)=>(r(),i("div",{class:V(["VPHero",{"has-image":n.image||d(t)}])},[a("div",ka,[a("div",_a,[p(e.$slots,"home-hero-info-before",{},void 0,!0),p(e.$slots,"home-hero-info",{},()=>[a("h1",ya,[n.name?(r(),i("span",{key:0,innerHTML:n.name,class:"name clip"},null,8,xa)):b("",!0),n.text?(r(),i("span",{key:1,innerHTML:n.text,class:"text"},null,8,wa)):b("",!0)]),n.tagline?(r(),i("p",{key:0,innerHTML:n.tagline,class:"tagline"},null,8,Aa)):b("",!0)],!0),p(e.$slots,"home-hero-info-after",{},void 0,!0),n.actions?(r(),i("div",Pa,[(r(!0),i(M,null,G(n.actions,s=>(r(),i("div",{key:s.link,class:"action"},[_(fa,{tag:"a",size:"medium",theme:s.theme,text:s.text,href:s.link,target:s.target,rel:s.rel},null,8,["theme","text","href","target","rel"])]))),128))])):b("",!0),p(e.$slots,"home-hero-actions-after",{},void 0,!0)]),n.image||d(t)?(r(),i("div",Ca,[a("div",Sa,[o[0]||(o[0]=a("div",{class:"image-bg"},null,-1)),p(e.$slots,"home-hero-image",{},()=>[n.image?(r(),P(_n,{key:0,class:"image-src",image:n.image},null,8,["image"])):b("",!0)],!0)])])):b("",!0)])],2))}}),Ta=I(Ia,[["__scopeId","data-v-09b6ce43"]]),La=y({__name:"VPHomeHero",setup(n){const{frontmatter:t}=O();return(e,o)=>d(t).hero?(r(),P(Ta,{key:0,class:"VPHomeHero",name:d(t).hero.name,text:d(t).hero.text,tagline:d(t).hero.tagline,image:d(t).hero.image,actions:d(t).hero.actions},{"home-hero-info-before":g(()=>[p(e.$slots,"home-hero-info-before")]),"home-hero-info":g(()=>[p(e.$slots,"home-hero-info")]),"home-hero-info-after":g(()=>[p(e.$slots,"home-hero-info-after")]),"home-hero-actions-after":g(()=>[p(e.$slots,"home-hero-actions-after")]),"home-hero-image":g(()=>[p(e.$slots,"home-hero-image")]),_:3},8,["name","text","tagline","image","actions"])):b("",!0)}}),$a={class:"box"},Da={key:0,class:"icon"},Ma=["innerHTML"],Oa=["innerHTML"],Ea=["innerHTML"],Na={key:4,class:"link-text"},Va={class:"link-text-value"},Ra=y({__name:"VPFeature",props:{icon:{},title:{},details:{},link:{},linkText:{},rel:{},target:{}},setup(n){return(t,e)=>(r(),P(sn,{class:"VPFeature",href:n.link,rel:n.rel,target:n.target,"no-icon":!0,tag:n.link?"a":"div"},{default:g(()=>[a("article",$a,[typeof n.icon=="object"&&n.icon.wrap?(r(),i("div",Da,[_(_n,{image:n.icon,alt:n.icon.alt,height:n.icon.height||48,width:n.icon.width||48},null,8,["image","alt","height","width"])])):typeof n.icon=="object"?(r(),P(_n,{key:1,image:n.icon,alt:n.icon.alt,height:n.icon.height||48,width:n.icon.width||48},null,8,["image","alt","height","width"])):n.icon?(r(),i("div",{key:2,class:"icon",innerHTML:n.icon},null,8,Ma)):b("",!0),a("h2",{class:"title",innerHTML:n.title},null,8,Oa),n.details?(r(),i("p",{key:3,class:"details",innerHTML:n.details},null,8,Ea)):b("",!0),n.linkText?(r(),i("div",Na,[a("p",Va,[X(h(n.linkText)+" ",1),e[0]||(e[0]=a("span",{class:"vpi-arrow-right link-text-icon"},null,-1))])])):b("",!0)])]),_:1},8,["href","rel","target","tag"]))}}),Ba=I(Ra,[["__scopeId","data-v-67e0b8b6"]]),za={key:0,class:"VPFeatures"},qa={class:"container"},Ga={class:"items"},ja=y({__name:"VPFeatures",props:{features:{}},setup(n){const t=n,e=v(()=>{const o=t.features.length;if(o){if(o===2)return"grid-2";if(o===3)return"grid-3";if(o%3===0)return"grid-6";if(o>3)return"grid-4"}else return});return(o,s)=>n.features?(r(),i("div",za,[a("div",qa,[a("div",Ga,[(r(!0),i(M,null,G(n.features,l=>(r(),i("div",{key:l.title,class:V(["item",[e.value]])},[_(Ba,{icon:l.icon,title:l.title,details:l.details,link:l.link,"link-text":l.linkText,rel:l.rel,target:l.target},null,8,["icon","title","details","link","link-text","rel","target"])],2))),128))])])])):b("",!0)}}),Ha=I(ja,[["__scopeId","data-v-f6b1b269"]]),Fa=y({__name:"VPHomeFeatures",setup(n){const{frontmatter:t}=O();return(e,o)=>d(t).features?(r(),P(Ha,{key:0,class:"VPHomeFeatures",features:d(t).features},null,8,["features"])):b("",!0)}}),Ua=y({__name:"VPHomeContent",setup(n){const{width:t}=Xe({initialWidth:0,includeScrollbar:!1});return(e,o)=>(r(),i("div",{class:"vp-doc container",style:De(d(t)?{"--vp-offset":`calc(50% - ${d(t)/2}px)`}:{})},[p(e.$slots,"default",{},void 0,!0)],4))}}),Wa=I(Ua,[["__scopeId","data-v-3be093fb"]]),Ka=y({__name:"VPHome",setup(n){const{frontmatter:t,theme:e}=O();return(o,s)=>{const l=un("Content");return r(),i("div",{class:V(["VPHome",{"external-link-icon-enabled":d(e).externalLinkIcon}])},[p(o.$slots,"home-hero-before",{},void 0,!0),_(La,null,{"home-hero-info-before":g(()=>[p(o.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":g(()=>[p(o.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":g(()=>[p(o.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":g(()=>[p(o.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":g(()=>[p(o.$slots,"home-hero-image",{},void 0,!0)]),_:3}),p(o.$slots,"home-hero-after",{},void 0,!0),p(o.$slots,"home-features-before",{},void 0,!0),_(Fa),p(o.$slots,"home-features-after",{},void 0,!0),d(t).markdownStyles!==!1?(r(),P(Wa,{key:0},{default:g(()=>[_(l)]),_:1})):(r(),P(l,{key:1}))],2)}}}),Qa=I(Ka,[["__scopeId","data-v-6e6fdb32"]]),Ja={},Xa={class:"VPPage"};function Ya(n,t){const e=un("Content");return r(),i("div",Xa,[p(n.$slots,"page-top"),_(e),p(n.$slots,"page-bottom")])}const Za=I(Ja,[["render",Ya]]),ns=y({__name:"VPContent",setup(n){const{page:t,frontmatter:e}=O(),{hasSidebar:o}=ln();return(s,l)=>(r(),i("div",{class:V(["VPContent",{"has-sidebar":d(o),"is-home":d(e).layout==="home"}]),id:"VPContent"},[d(t).isNotFound?p(s.$slots,"not-found",{key:0},()=>[_(bt)],!0):d(e).layout==="page"?(r(),P(Za,{key:1},{"page-top":g(()=>[p(s.$slots,"page-top",{},void 0,!0)]),"page-bottom":g(()=>[p(s.$slots,"page-bottom",{},void 0,!0)]),_:3})):d(e).layout==="home"?(r(),P(Qa,{key:2},{"home-hero-before":g(()=>[p(s.$slots,"home-hero-before",{},void 0,!0)]),"home-hero-info-before":g(()=>[p(s.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":g(()=>[p(s.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":g(()=>[p(s.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":g(()=>[p(s.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":g(()=>[p(s.$slots,"home-hero-image",{},void 0,!0)]),"home-hero-after":g(()=>[p(s.$slots,"home-hero-after",{},void 0,!0)]),"home-features-before":g(()=>[p(s.$slots,"home-features-before",{},void 0,!0)]),"home-features-after":g(()=>[p(s.$slots,"home-features-after",{},void 0,!0)]),_:3})):d(e).layout&&d(e).layout!=="doc"?(r(),P(an(d(e).layout),{key:3})):(r(),P(ha,{key:4},{"doc-top":g(()=>[p(s.$slots,"doc-top",{},void 0,!0)]),"doc-bottom":g(()=>[p(s.$slots,"doc-bottom",{},void 0,!0)]),"doc-footer-before":g(()=>[p(s.$slots,"doc-footer-before",{},void 0,!0)]),"doc-before":g(()=>[p(s.$slots,"doc-before",{},void 0,!0)]),"doc-after":g(()=>[p(s.$slots,"doc-after",{},void 0,!0)]),"aside-top":g(()=>[p(s.$slots,"aside-top",{},void 0,!0)]),"aside-outline-before":g(()=>[p(s.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":g(()=>[p(s.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":g(()=>[p(s.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":g(()=>[p(s.$slots,"aside-ads-after",{},void 0,!0)]),"aside-bottom":g(()=>[p(s.$slots,"aside-bottom",{},void 0,!0)]),_:3}))],2))}}),es=I(ns,[["__scopeId","data-v-714062c7"]]),ts={class:"container"},as=["innerHTML"],ss=["innerHTML"],os=y({__name:"VPFooter",setup(n){const{theme:t,frontmatter:e}=O(),{hasSidebar:o}=ln();return(s,l)=>d(t).footer&&d(e).footer!==!1?(r(),i("footer",{key:0,class:V(["VPFooter",{"has-sidebar":d(o)}])},[a("div",ts,[d(t).footer.message?(r(),i("p",{key:0,class:"message",innerHTML:d(t).footer.message},null,8,as)):b("",!0),d(t).footer.copyright?(r(),i("p",{key:1,class:"copyright",innerHTML:d(t).footer.copyright},null,8,ss)):b("",!0)])],2)):b("",!0)}}),rs=I(os,[["__scopeId","data-v-a0954f24"]]);function is(){const{theme:n,frontmatter:t}=O(),e=Le([]),o=v(()=>e.value.length>0);return xn(()=>{e.value=zn(t.value.outline??n.value.outline)}),{headers:e,hasLocalNav:o}}const ls={class:"menu-text"},cs={class:"header"},ds={class:"outline"},us=y({__name:"VPLocalNavOutlineDropdown",props:{headers:{},navHeight:{}},setup(n){const t=n,{theme:e}=O(),o=R(!1),s=R(0),l=R(),c=R();function u(w){var T;(T=l.value)!=null&&T.contains(w.target)||(o.value=!1)}en(o,w=>{if(w){document.addEventListener("click",u);return}document.removeEventListener("click",u)}),Ln("Escape",()=>{o.value=!1}),xn(()=>{o.value=!1});function m(){o.value=!o.value,s.value=window.innerHeight+Math.min(window.scrollY-t.navHeight,0)}function f(w){w.target.classList.contains("outline-link")&&(c.value&&(c.value.style.transition="none"),Rn(()=>{o.value=!1}))}function x(){o.value=!1,window.scrollTo({top:0,left:0,behavior:"smooth"})}return(w,T)=>(r(),i("div",{class:"VPLocalNavOutlineDropdown",style:De({"--vp-vh":s.value+"px"}),ref_key:"main",ref:l},[n.headers.length>0?(r(),i("button",{key:0,onClick:m,class:V({open:o.value})},[a("span",ls,h(d(Be)(d(e))),1),T[0]||(T[0]=a("span",{class:"vpi-chevron-right icon"},null,-1))],2)):(r(),i("button",{key:1,onClick:x},h(d(e).returnToTopLabel||"Return to top"),1)),_(On,{name:"flyout"},{default:g(()=>[o.value?(r(),i("div",{key:0,ref_key:"items",ref:c,class:"items",onClick:f},[a("div",cs,[a("a",{class:"top-link",href:"#",onClick:x},h(d(e).returnToTopLabel||"Return to top"),1)]),a("div",ds,[_(ze,{headers:n.headers},null,8,["headers"])])],512)):b("",!0)]),_:1})],4))}}),ps=I(us,[["__scopeId","data-v-f210c2f8"]]),ms={class:"container"},hs=["aria-expanded"],gs={class:"menu-text"},fs=y({__name:"VPLocalNav",props:{open:{type:Boolean}},emits:["open-menu"],setup(n){const{theme:t,frontmatter:e}=O(),{hasSidebar:o}=ln(),{headers:s}=is(),{y:l}=Me(),c=R(0);on(()=>{c.value=parseInt(getComputedStyle(document.documentElement).getPropertyValue("--vp-nav-height"))}),xn(()=>{s.value=zn(e.value.outline??t.value.outline)});const u=v(()=>s.value.length===0),m=v(()=>u.value&&!o.value),f=v(()=>({VPLocalNav:!0,"has-sidebar":o.value,empty:u.value,fixed:m.value}));return(x,w)=>d(e).layout!=="home"&&(!m.value||d(l)>=c.value)?(r(),i("div",{key:0,class:V(f.value)},[a("div",ms,[d(o)?(r(),i("button",{key:0,class:"menu","aria-expanded":n.open,"aria-controls":"VPSidebarNav",onClick:w[0]||(w[0]=T=>x.$emit("open-menu"))},[w[1]||(w[1]=a("span",{class:"vpi-align-left menu-icon"},null,-1)),a("span",gs,h(d(t).sidebarMenuLabel||"Menu"),1)],8,hs)):b("",!0),_(ps,{headers:d(s),navHeight:c.value},null,8,["headers","navHeight"])])],2)):b("",!0)}}),vs=I(fs,[["__scopeId","data-v-f8cca058"]]);function bs(){const n=R(!1);function t(){n.value=!0,window.addEventListener("resize",s)}function e(){n.value=!1,window.removeEventListener("resize",s)}function o(){n.value?e():t()}function s(){window.outerWidth>=768&&e()}const l=vn();return en(()=>l.path,e),{isScreenOpen:n,openScreen:t,closeScreen:e,toggleScreen:o}}const ks={},_s={class:"VPSwitch",type:"button",role:"switch"},ys={class:"check"},xs={key:0,class:"icon"};function ws(n,t){return r(),i("button",_s,[a("span",ys,[n.$slots.default?(r(),i("span",xs,[p(n.$slots,"default",{},void 0,!0)])):b("",!0)])])}const As=I(ks,[["render",ws],["__scopeId","data-v-71e7f96a"]]),Ps=y({__name:"VPSwitchAppearance",setup(n){const{isDark:t,theme:e}=O(),o=wn("toggle-appearance",()=>{t.value=!t.value}),s=R("");return Vn(()=>{s.value=t.value?e.value.lightModeSwitchTitle||"Switch to light theme":e.value.darkModeSwitchTitle||"Switch to dark theme"}),(l,c)=>(r(),P(As,{title:s.value,class:"VPSwitchAppearance","aria-checked":d(t),onClick:d(o)},{default:g(()=>[...c[0]||(c[0]=[a("span",{class:"vpi-sun sun"},null,-1),a("span",{class:"vpi-moon moon"},null,-1)])]),_:1},8,["title","aria-checked","onClick"]))}}),qn=I(Ps,[["__scopeId","data-v-40158760"]]),Cs={key:0,class:"VPNavBarAppearance"},Ss=y({__name:"VPNavBarAppearance",setup(n){const{site:t}=O();return(e,o)=>d(t).appearance&&d(t).appearance!=="force-dark"&&d(t).appearance!=="force-auto"?(r(),i("div",Cs,[_(qn)])):b("",!0)}}),Is=I(Ss,[["__scopeId","data-v-e3e8a76b"]]),Gn=R();let qe=!1,In=0;function Ts(n){const t=R(!1);if(An){!qe&&Ls(),In++;const e=en(Gn,o=>{var s,l,c;o===n.el.value||(s=n.el.value)!=null&&s.contains(o)?(t.value=!0,(l=n.onFocus)==null||l.call(n)):(t.value=!1,(c=n.onBlur)==null||c.call(n))});Nn(()=>{e(),In--,In||$s()})}return Ye(t)}function Ls(){document.addEventListener("focusin",Ge),qe=!0,Gn.value=document.activeElement}function $s(){document.removeEventListener("focusin",Ge)}function Ge(){Gn.value=document.activeElement}const Ds={class:"VPMenuLink"},Ms=["innerHTML"],Os=y({__name:"VPMenuLink",props:{item:{}},setup(n){const{page:t}=O();return(e,o)=>(r(),i("div",Ds,[_(sn,{class:V({active:d(mn)(d(t).relativePath,n.item.activeMatch||n.item.link,!!n.item.activeMatch)}),href:n.item.link,target:n.item.target,rel:n.item.rel,"no-icon":n.item.noIcon},{default:g(()=>[a("span",{innerHTML:n.item.text},null,8,Ms)]),_:1},8,["class","href","target","rel","no-icon"])]))}}),Pn=I(Os,[["__scopeId","data-v-9182bc9d"]]),Es={class:"VPMenuGroup"},Ns={key:0,class:"title"},Vs=y({__name:"VPMenuGroup",props:{text:{},items:{}},setup(n){return(t,e)=>(r(),i("div",Es,[n.text?(r(),i("p",Ns,h(n.text),1)):b("",!0),(r(!0),i(M,null,G(n.items,o=>(r(),i(M,null,["link"in o?(r(),P(Pn,{key:0,item:o},null,8,["item"])):b("",!0)],64))),256))]))}}),Rs=I(Vs,[["__scopeId","data-v-a0052f3d"]]),Bs={class:"VPMenu"},zs={key:0,class:"items"},qs=y({__name:"VPMenu",props:{items:{}},setup(n){return(t,e)=>(r(),i("div",Bs,[n.items?(r(),i("div",zs,[(r(!0),i(M,null,G(n.items,o=>(r(),i(M,{key:JSON.stringify(o)},["link"in o?(r(),P(Pn,{key:0,item:o},null,8,["item"])):"component"in o?(r(),P(an(o.component),dn({key:1,ref_for:!0},o.props),null,16)):(r(),P(Rs,{key:2,text:o.text,items:o.items},null,8,["text","items"]))],64))),128))])):b("",!0),p(t.$slots,"default",{},void 0,!0)]))}}),Gs=I(qs,[["__scopeId","data-v-6ac81520"]]),js=["aria-expanded","aria-label"],Hs={key:0,class:"text"},Fs=["innerHTML"],Us={key:1,class:"vpi-more-horizontal icon"},Ws={class:"menu"},Ks=y({__name:"VPFlyout",props:{icon:{},button:{},label:{},items:{}},setup(n){const t=R(!1),e=R();Ts({el:e,onBlur:o});function o(){t.value=!1}return(s,l)=>(r(),i("div",{class:"VPFlyout",ref_key:"el",ref:e,onMouseenter:l[1]||(l[1]=c=>t.value=!0),onMouseleave:l[2]||(l[2]=c=>t.value=!1)},[a("button",{type:"button",class:"button","aria-haspopup":"true","aria-expanded":t.value,"aria-label":n.label,onClick:l[0]||(l[0]=c=>t.value=!t.value)},[n.button||n.icon?(r(),i("span",Hs,[n.icon?(r(),i("span",{key:0,class:V([n.icon,"option-icon"])},null,2)):b("",!0),n.button?(r(),i("span",{key:1,innerHTML:n.button},null,8,Fs)):b("",!0),l[3]||(l[3]=a("span",{class:"vpi-chevron-down text-icon"},null,-1))])):(r(),i("span",Us))],8,js),a("div",Ws,[_(Gs,{items:n.items},{default:g(()=>[p(s.$slots,"default",{},void 0,!0)]),_:3},8,["items"])])],544))}}),jn=I(Ks,[["__scopeId","data-v-beb8b8d5"]]),Qs=["href","aria-label","innerHTML"],Js=y({__name:"VPSocialLink",props:{icon:{},link:{},ariaLabel:{}},setup(n){const t=n,e=R();on(async()=>{var l;await Rn();const s=(l=e.value)==null?void 0:l.children[0];s instanceof HTMLElement&&s.className.startsWith("vpi-social-")&&(getComputedStyle(s).maskImage||getComputedStyle(s).webkitMaskImage)==="none"&&s.style.setProperty("--icon",`url('https://api.iconify.design/simple-icons/${t.icon}.svg')`)});const o=v(()=>typeof t.icon=="object"?t.icon.svg:`<span class="vpi-social-${t.icon}"></span>`);return(s,l)=>(r(),i("a",{ref_key:"el",ref:e,class:"VPSocialLink no-icon",href:n.link,"aria-label":n.ariaLabel??(typeof n.icon=="string"?n.icon:""),target:"_blank",rel:"noopener",innerHTML:o.value},null,8,Qs))}}),Xs=I(Js,[["__scopeId","data-v-7652e684"]]),Ys={class:"VPSocialLinks"},Zs=y({__name:"VPSocialLinks",props:{links:{}},setup(n){return(t,e)=>(r(),i("div",Ys,[(r(!0),i(M,null,G(n.links,({link:o,icon:s,ariaLabel:l})=>(r(),P(Xs,{key:o,icon:s,link:o,ariaLabel:l},null,8,["icon","link","ariaLabel"]))),128))]))}}),Hn=I(Zs,[["__scopeId","data-v-54791c74"]]),no={key:0,class:"group translations"},eo={class:"trans-title"},to={key:1,class:"group"},ao={class:"item appearance"},so={class:"label"},oo={class:"appearance-action"},ro={key:2,class:"group"},io={class:"item social-links"},lo=y({__name:"VPNavBarExtra",setup(n){const{site:t,theme:e}=O(),{localeLinks:o,currentLang:s}=bn({correspondingLink:!0}),l=v(()=>o.value.length&&s.value.label||t.value.appearance||e.value.socialLinks);return(c,u)=>l.value?(r(),P(jn,{key:0,class:"VPNavBarExtra",label:"extra navigation"},{default:g(()=>[d(o).length&&d(s).label?(r(),i("div",no,[a("p",eo,h(d(s).label),1),(r(!0),i(M,null,G(d(o),m=>(r(),P(Pn,{key:m.link,item:m},null,8,["item"]))),128))])):b("",!0),d(t).appearance&&d(t).appearance!=="force-dark"&&d(t).appearance!=="force-auto"?(r(),i("div",to,[a("div",ao,[a("p",so,h(d(e).darkModeSwitchLabel||"Appearance"),1),a("div",oo,[_(qn)])])])):b("",!0),d(e).socialLinks?(r(),i("div",ro,[a("div",io,[_(Hn,{class:"social-links-list",links:d(e).socialLinks},null,8,["links"])])])):b("",!0)]),_:1})):b("",!0)}}),co=I(lo,[["__scopeId","data-v-ad50955e"]]),uo=["aria-expanded"],po=y({__name:"VPNavBarHamburger",props:{active:{type:Boolean}},emits:["click"],setup(n){return(t,e)=>(r(),i("button",{type:"button",class:V(["VPNavBarHamburger",{active:n.active}]),"aria-label":"mobile navigation","aria-expanded":n.active,"aria-controls":"VPNavScreen",onClick:e[0]||(e[0]=o=>t.$emit("click"))},[...e[1]||(e[1]=[a("span",{class:"container"},[a("span",{class:"top"}),a("span",{class:"middle"}),a("span",{class:"bottom"})],-1)])],10,uo))}}),mo=I(po,[["__scopeId","data-v-5e4fa142"]]),ho=["innerHTML"],go=y({__name:"VPNavBarMenuLink",props:{item:{}},setup(n){const{page:t}=O();return(e,o)=>(r(),P(sn,{class:V({VPNavBarMenuLink:!0,active:d(mn)(d(t).relativePath,n.item.activeMatch||n.item.link,!!n.item.activeMatch)}),href:n.item.link,target:n.item.target,rel:n.item.rel,"no-icon":n.item.noIcon,tabindex:"0"},{default:g(()=>[a("span",{innerHTML:n.item.text},null,8,ho)]),_:1},8,["class","href","target","rel","no-icon"]))}}),fo=I(go,[["__scopeId","data-v-f75fdd7c"]]),vo=y({__name:"VPNavBarMenuGroup",props:{item:{}},setup(n){const t=n,{page:e}=O(),o=l=>"component"in l?!1:"link"in l?mn(e.value.relativePath,l.link,!!t.item.activeMatch):l.items.some(o),s=v(()=>o(t.item));return(l,c)=>(r(),P(jn,{class:V({VPNavBarMenuGroup:!0,active:d(mn)(d(e).relativePath,n.item.activeMatch,!!n.item.activeMatch)||s.value}),button:n.item.text,items:n.item.items},null,8,["class","button","items"]))}}),bo={key:0,"aria-labelledby":"main-nav-aria-label",class:"VPNavBarMenu"},ko=y({__name:"VPNavBarMenu",setup(n){const{theme:t}=O();return(e,o)=>d(t).nav?(r(),i("nav",bo,[o[0]||(o[0]=a("span",{id:"main-nav-aria-label",class:"visually-hidden"}," Main Navigation ",-1)),(r(!0),i(M,null,G(d(t).nav,s=>(r(),i(M,{key:JSON.stringify(s)},["link"in s?(r(),P(fo,{key:0,item:s},null,8,["item"])):"component"in s?(r(),P(an(s.component),dn({key:1,ref_for:!0},s.props),null,16)):(r(),P(vo,{key:2,item:s},null,8,["item"]))],64))),128))])):b("",!0)}}),_o=I(ko,[["__scopeId","data-v-e90f0632"]]);function yo(n){const{localeIndex:t,theme:e}=O();function o(s){var B,j,F;const l=s.split("."),c=(B=e.value.search)==null?void 0:B.options,u=c&&typeof c=="object",m=u&&((F=(j=c.locales)==null?void 0:j[t.value])==null?void 0:F.translations)||null,f=u&&c.translations||null;let x=m,w=f,T=n;const L=l.pop();for(const H of l){let K=null;const nn=T==null?void 0:T[H];nn&&(K=T=nn);const D=w==null?void 0:w[H];D&&(K=w=D);const N=x==null?void 0:x[H];N&&(K=x=N),nn||(T=K),D||(w=K),N||(x=K)}return(x==null?void 0:x[L])??(w==null?void 0:w[L])??(T==null?void 0:T[L])??""}return o}const xo=["aria-label"],wo={class:"DocSearch-Button-Container"},Ao={class:"DocSearch-Button-Placeholder"},Te=y({__name:"VPNavBarSearchButton",setup(n){const e=yo({button:{buttonText:"Search",buttonAriaLabel:"Search"}});return(o,s)=>(r(),i("button",{type:"button",class:"DocSearch DocSearch-Button","aria-label":d(e)("button.buttonAriaLabel")},[a("span",wo,[s[0]||(s[0]=a("span",{class:"vp-icon DocSearch-Search-Icon"},null,-1)),a("span",Ao,h(d(e)("button.buttonText")),1)]),s[1]||(s[1]=a("span",{class:"DocSearch-Button-Keys"},[a("kbd",{class:"DocSearch-Button-Key"}),a("kbd",{class:"DocSearch-Button-Key"},"K")],-1))],8,xo))}}),Po={class:"VPNavBarSearch"},Co={id:"local-search"},So={key:1,id:"docsearch"},je=y({__name:"VPNavBarSearch",setup(n){const t=Ze(()=>Oe(()=>import("./VPLocalSearchBox.DUibIwWK.js"),__vite__mapDeps([0,1]))),e=()=>null,{theme:o}=O(),s=R(!1),l=R(!1);on(()=>{});function c(){s.value||(s.value=!0,setTimeout(u,16))}function u(){const w=new Event("keydown");w.key="k",w.metaKey=!0,window.dispatchEvent(w),setTimeout(()=>{document.querySelector(".DocSearch-Modal")||u()},16)}function m(w){const T=w.target,L=T.tagName;return T.isContentEditable||L==="INPUT"||L==="SELECT"||L==="TEXTAREA"}const f=R(!1);Ln("k",w=>{(w.ctrlKey||w.metaKey)&&(w.preventDefault(),f.value=!0)}),Ln("/",w=>{m(w)||(w.preventDefault(),f.value=!0)});const x="local";return(w,T)=>{var L;return r(),i("div",Po,[d(x)==="local"?(r(),i(M,{key:0},[f.value?(r(),P(d(t),{key:0,onClose:T[0]||(T[0]=B=>f.value=!1)})):b("",!0),a("div",Co,[_(Te,{onClick:T[1]||(T[1]=B=>f.value=!0)})])],64)):d(x)==="algolia"?(r(),i(M,{key:1},[s.value?(r(),P(d(e),{key:0,algolia:((L=d(o).search)==null?void 0:L.options)??d(o).algolia,onVnodeBeforeMount:T[2]||(T[2]=B=>l.value=!0)},null,8,["algolia"])):b("",!0),l.value?b("",!0):(r(),i("div",So,[_(Te,{onClick:c})]))],64)):b("",!0)])}}}),Io=y({__name:"VPNavBarSocialLinks",setup(n){const{theme:t}=O();return(e,o)=>d(t).socialLinks?(r(),P(Hn,{key:0,class:"VPNavBarSocialLinks",links:d(t).socialLinks},null,8,["links"])):b("",!0)}}),To=I(Io,[["__scopeId","data-v-27e2b2b1"]]),Lo=["href","rel","target"],$o=["innerHTML"],Do={key:2},Mo=y({__name:"VPNavBarTitle",setup(n){const{site:t,theme:e}=O(),{hasSidebar:o}=ln(),{currentLang:s}=bn(),l=v(()=>{var m;return typeof e.value.logoLink=="string"?e.value.logoLink:(m=e.value.logoLink)==null?void 0:m.link}),c=v(()=>{var m;return typeof e.value.logoLink=="string"||(m=e.value.logoLink)==null?void 0:m.rel}),u=v(()=>{var m;return typeof e.value.logoLink=="string"||(m=e.value.logoLink)==null?void 0:m.target});return(m,f)=>(r(),i("div",{class:V(["VPNavBarTitle",{"has-sidebar":d(o)}])},[a("a",{class:"title",href:l.value??d(Bn)(d(s).link),rel:c.value,target:u.value},[p(m.$slots,"nav-bar-title-before",{},void 0,!0),d(e).logo?(r(),P(_n,{key:0,class:"logo",image:d(e).logo},null,8,["image"])):b("",!0),d(e).siteTitle?(r(),i("span",{key:1,innerHTML:d(e).siteTitle},null,8,$o)):d(e).siteTitle===void 0?(r(),i("span",Do,h(d(t).title),1)):b("",!0),p(m.$slots,"nav-bar-title-after",{},void 0,!0)],8,Lo)],2))}}),Oo=I(Mo,[["__scopeId","data-v-6ec1a2fc"]]),Eo={class:"items"},No={class:"title"},Vo=y({__name:"VPNavBarTranslations",setup(n){const{theme:t}=O(),{localeLinks:e,currentLang:o}=bn({correspondingLink:!0});return(s,l)=>d(e).length&&d(o).label?(r(),P(jn,{key:0,class:"VPNavBarTranslations",icon:"vpi-languages",label:d(t).langMenuLabel||"Change language"},{default:g(()=>[a("div",Eo,[a("p",No,h(d(o).label),1),(r(!0),i(M,null,G(d(e),c=>(r(),P(Pn,{key:c.link,item:c},null,8,["item"]))),128))])]),_:1},8,["label"])):b("",!0)}}),He=I(Vo,[["__scopeId","data-v-40afd59f"]]),Ro={class:"wrapper"},Bo={class:"container"},zo={class:"title"},qo={class:"content"},Go={class:"content-body"},jo=y({__name:"VPNavBar",props:{isScreenOpen:{type:Boolean}},emits:["toggle-screen"],setup(n){const t=n,{y:e}=Me(),{hasSidebar:o}=ln(),{frontmatter:s}=O(),l=R({});return Vn(()=>{l.value={"has-sidebar":o.value,home:s.value.layout==="home",top:e.value===0,"screen-open":t.isScreenOpen}}),(c,u)=>(r(),i("div",{class:V(["VPNavBar",l.value])},[a("div",Ro,[a("div",Bo,[a("div",zo,[_(Oo,null,{"nav-bar-title-before":g(()=>[p(c.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":g(()=>[p(c.$slots,"nav-bar-title-after",{},void 0,!0)]),_:3})]),a("div",qo,[a("div",Go,[p(c.$slots,"nav-bar-content-before",{},void 0,!0),_(je,{class:"search"}),_(_o,{class:"menu"}),_(He,{class:"translations"}),_(Is,{class:"appearance"}),_(To,{class:"social-links"}),_(co,{class:"extra"}),p(c.$slots,"nav-bar-content-after",{},void 0,!0),_(mo,{class:"hamburger",active:n.isScreenOpen,onClick:u[0]||(u[0]=m=>c.$emit("toggle-screen"))},null,8,["active"])])])])]),u[1]||(u[1]=a("div",{class:"divider"},[a("div",{class:"divider-line"})],-1))],2))}}),Ho=I(jo,[["__scopeId","data-v-de524931"]]),Fo={key:0,class:"VPNavScreenAppearance"},Uo={class:"text"},Wo=y({__name:"VPNavScreenAppearance",setup(n){const{site:t,theme:e}=O();return(o,s)=>d(t).appearance&&d(t).appearance!=="force-dark"&&d(t).appearance!=="force-auto"?(r(),i("div",Fo,[a("p",Uo,h(d(e).darkModeSwitchLabel||"Appearance"),1),_(qn)])):b("",!0)}}),Ko=I(Wo,[["__scopeId","data-v-37559f51"]]),Qo=["innerHTML"],Jo=y({__name:"VPNavScreenMenuLink",props:{item:{}},setup(n){const t=wn("close-screen");return(e,o)=>(r(),P(sn,{class:"VPNavScreenMenuLink",href:n.item.link,target:n.item.target,rel:n.item.rel,"no-icon":n.item.noIcon,onClick:d(t)},{default:g(()=>[a("span",{innerHTML:n.item.text},null,8,Qo)]),_:1},8,["href","target","rel","no-icon","onClick"]))}}),Xo=I(Jo,[["__scopeId","data-v-80e6e6d6"]]),Yo=["innerHTML"],Zo=y({__name:"VPNavScreenMenuGroupLink",props:{item:{}},setup(n){const t=wn("close-screen");return(e,o)=>(r(),P(sn,{class:"VPNavScreenMenuGroupLink",href:n.item.link,target:n.item.target,rel:n.item.rel,"no-icon":n.item.noIcon,onClick:d(t)},{default:g(()=>[a("span",{innerHTML:n.item.text},null,8,Yo)]),_:1},8,["href","target","rel","no-icon","onClick"]))}}),Fe=I(Zo,[["__scopeId","data-v-bd01957f"]]),nr={class:"VPNavScreenMenuGroupSection"},er={key:0,class:"title"},tr=y({__name:"VPNavScreenMenuGroupSection",props:{text:{},items:{}},setup(n){return(t,e)=>(r(),i("div",nr,[n.text?(r(),i("p",er,h(n.text),1)):b("",!0),(r(!0),i(M,null,G(n.items,o=>(r(),P(Fe,{key:o.text,item:o},null,8,["item"]))),128))]))}}),ar=I(tr,[["__scopeId","data-v-cd0e7558"]]),sr=["aria-controls","aria-expanded"],or=["innerHTML"],rr=["id"],ir={key:0,class:"item"},lr={key:1,class:"item"},cr={key:2,class:"group"},dr=y({__name:"VPNavScreenMenuGroup",props:{text:{},items:{}},setup(n){const t=n,e=R(!1),o=v(()=>`NavScreenGroup-${t.text.replace(" ","-").toLowerCase()}`);function s(){e.value=!e.value}return(l,c)=>(r(),i("div",{class:V(["VPNavScreenMenuGroup",{open:e.value}])},[a("button",{class:"button","aria-controls":o.value,"aria-expanded":e.value,onClick:s},[a("span",{class:"button-text",innerHTML:n.text},null,8,or),c[0]||(c[0]=a("span",{class:"vpi-plus button-icon"},null,-1))],8,sr),a("div",{id:o.value,class:"items"},[(r(!0),i(M,null,G(n.items,u=>(r(),i(M,{key:JSON.stringify(u)},["link"in u?(r(),i("div",ir,[_(Fe,{item:u},null,8,["item"])])):"component"in u?(r(),i("div",lr,[(r(),P(an(u.component),dn({ref_for:!0},u.props,{"screen-menu":""}),null,16))])):(r(),i("div",cr,[_(ar,{text:u.text,items:u.items},null,8,["text","items"])]))],64))),128))],8,rr)],2))}}),ur=I(dr,[["__scopeId","data-v-3d415584"]]),pr={key:0,class:"VPNavScreenMenu"},mr=y({__name:"VPNavScreenMenu",setup(n){const{theme:t}=O();return(e,o)=>d(t).nav?(r(),i("nav",pr,[(r(!0),i(M,null,G(d(t).nav,s=>(r(),i(M,{key:JSON.stringify(s)},["link"in s?(r(),P(Xo,{key:0,item:s},null,8,["item"])):"component"in s?(r(),P(an(s.component),dn({key:1,ref_for:!0},s.props,{"screen-menu":""}),null,16)):(r(),P(ur,{key:2,text:s.text||"",items:s.items},null,8,["text","items"]))],64))),128))])):b("",!0)}}),hr=y({__name:"VPNavScreenSocialLinks",setup(n){const{theme:t}=O();return(e,o)=>d(t).socialLinks?(r(),P(Hn,{key:0,class:"VPNavScreenSocialLinks",links:d(t).socialLinks},null,8,["links"])):b("",!0)}}),gr={class:"list"},fr=y({__name:"VPNavScreenTranslations",setup(n){const{localeLinks:t,currentLang:e}=bn({correspondingLink:!0}),o=R(!1);function s(){o.value=!o.value}return(l,c)=>d(t).length&&d(e).label?(r(),i("div",{key:0,class:V(["VPNavScreenTranslations",{open:o.value}])},[a("button",{class:"title",onClick:s},[c[0]||(c[0]=a("span",{class:"vpi-languages icon lang"},null,-1)),X(" "+h(d(e).label)+" ",1),c[1]||(c[1]=a("span",{class:"vpi-chevron-down icon chevron"},null,-1))]),a("ul",gr,[(r(!0),i(M,null,G(d(t),u=>(r(),i("li",{key:u.link,class:"item"},[_(sn,{class:"link",href:u.link},{default:g(()=>[X(h(u.text),1)]),_:2},1032,["href"])]))),128))])],2)):b("",!0)}}),vr=I(fr,[["__scopeId","data-v-59d95cf4"]]),br={class:"container"},kr=y({__name:"VPNavScreen",props:{open:{type:Boolean}},setup(n){const t=R(null),e=Ee(An?document.body:null);return(o,s)=>(r(),P(On,{name:"fade",onEnter:s[0]||(s[0]=l=>e.value=!0),onAfterLeave:s[1]||(s[1]=l=>e.value=!1)},{default:g(()=>[n.open?(r(),i("div",{key:0,class:"VPNavScreen",ref_key:"screen",ref:t,id:"VPNavScreen"},[a("div",br,[p(o.$slots,"nav-screen-content-before",{},void 0,!0),_(mr,{class:"menu"}),_(vr,{class:"translations"}),_(Ko,{class:"appearance"}),_(hr,{class:"social-links"}),p(o.$slots,"nav-screen-content-after",{},void 0,!0)])],512)):b("",!0)]),_:3}))}}),_r=I(kr,[["__scopeId","data-v-07baf27b"]]),yr={key:0,class:"VPNav"},xr=y({__name:"VPNav",setup(n){const{isScreenOpen:t,closeScreen:e,toggleScreen:o}=bs(),{frontmatter:s}=O(),l=v(()=>s.value.navbar!==!1);return Ne("close-screen",e),yn(()=>{An&&document.documentElement.classList.toggle("hide-nav",!l.value)}),(c,u)=>l.value?(r(),i("header",yr,[_(Ho,{"is-screen-open":d(t),onToggleScreen:d(o)},{"nav-bar-title-before":g(()=>[p(c.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":g(()=>[p(c.$slots,"nav-bar-title-after",{},void 0,!0)]),"nav-bar-content-before":g(()=>[p(c.$slots,"nav-bar-content-before",{},void 0,!0)]),"nav-bar-content-after":g(()=>[p(c.$slots,"nav-bar-content-after",{},void 0,!0)]),_:3},8,["is-screen-open","onToggleScreen"]),_(_r,{open:d(t)},{"nav-screen-content-before":g(()=>[p(c.$slots,"nav-screen-content-before",{},void 0,!0)]),"nav-screen-content-after":g(()=>[p(c.$slots,"nav-screen-content-after",{},void 0,!0)]),_:3},8,["open"])])):b("",!0)}}),wr=I(xr,[["__scopeId","data-v-717bd8c6"]]),Ar=["role","tabindex"],Pr={key:1,class:"items"},Cr=y({__name:"VPSidebarItem",props:{item:{},depth:{}},setup(n){const t=n,{collapsed:e,collapsible:o,isLink:s,isActiveLink:l,hasActiveLink:c,hasChildren:u,toggle:m}=xt(v(()=>t.item)),f=v(()=>u.value?"section":"div"),x=v(()=>s.value?"a":"div"),w=v(()=>u.value?t.depth+2===7?"p":`h${t.depth+2}`:"p"),T=v(()=>s.value?void 0:"button"),L=v(()=>[[`level-${t.depth}`],{collapsible:o.value},{collapsed:e.value},{"is-link":s.value},{"is-active":l.value},{"has-active":c.value}]);function B(F){"key"in F&&F.key!=="Enter"||!t.item.link&&m()}function j(){t.item.link&&m()}return(F,H)=>{const K=un("VPSidebarItem",!0);return r(),P(an(f.value),{class:V(["VPSidebarItem",L.value])},{default:g(()=>[n.item.text?(r(),i("div",dn({key:0,class:"item",role:T.value},nt(n.item.items?{click:B,keydown:B}:{},!0),{tabindex:n.item.items&&0}),[H[1]||(H[1]=a("div",{class:"indicator"},null,-1)),n.item.link?(r(),P(sn,{key:0,tag:x.value,class:"link",href:n.item.link,rel:n.item.rel,target:n.item.target},{default:g(()=>[(r(),P(an(w.value),{class:"text",innerHTML:n.item.text},null,8,["innerHTML"]))]),_:1},8,["tag","href","rel","target"])):(r(),P(an(w.value),{key:1,class:"text",innerHTML:n.item.text},null,8,["innerHTML"])),n.item.collapsed!=null&&n.item.items&&n.item.items.length?(r(),i("div",{key:2,class:"caret",role:"button","aria-label":"toggle section",onClick:j,onKeydown:et(j,["enter"]),tabindex:"0"},[...H[0]||(H[0]=[a("span",{class:"vpi-chevron-right caret-icon"},null,-1)])],32)):b("",!0)],16,Ar)):b("",!0),n.item.items&&n.item.items.length?(r(),i("div",Pr,[n.depth<5?(r(!0),i(M,{key:0},G(n.item.items,nn=>(r(),P(K,{key:nn.text,item:nn,depth:n.depth+1},null,8,["item","depth"]))),128)):b("",!0)])):b("",!0)]),_:1},8,["class"])}}}),Sr=I(Cr,[["__scopeId","data-v-08047252"]]),Ir=y({__name:"VPSidebarGroup",props:{items:{}},setup(n){const t=R(!0);let e=null;return on(()=>{e=setTimeout(()=>{e=null,t.value=!1},300)}),Ve(()=>{e!=null&&(clearTimeout(e),e=null)}),(o,s)=>(r(!0),i(M,null,G(n.items,l=>(r(),i("div",{key:l.text,class:V(["group",{"no-transition":t.value}])},[_(Sr,{item:l,depth:0},null,8,["item"])],2))),128))}}),Tr=I(Ir,[["__scopeId","data-v-ba5ce4ae"]]),Lr={class:"nav",id:"VPSidebarNav","aria-labelledby":"sidebar-aria-label",tabindex:"-1"},$r=y({__name:"VPSidebar",props:{open:{type:Boolean}},setup(n){const{sidebarGroups:t,hasSidebar:e}=ln(),o=n,s=R(null),l=Ee(An?document.body:null);en([o,s],()=>{var u;o.open?(l.value=!0,(u=s.value)==null||u.focus()):l.value=!1},{immediate:!0,flush:"post"});const c=R(0);return en(t,()=>{c.value+=1},{deep:!0}),(u,m)=>d(e)?(r(),i("aside",{key:0,class:V(["VPSidebar",{open:n.open}]),ref_key:"navEl",ref:s,onClick:m[0]||(m[0]=tt(()=>{},["stop"]))},[m[2]||(m[2]=a("div",{class:"curtain"},null,-1)),a("nav",Lr,[m[1]||(m[1]=a("span",{class:"visually-hidden",id:"sidebar-aria-label"}," Sidebar Navigation ",-1)),p(u.$slots,"sidebar-nav-before",{},void 0,!0),(r(),P(Tr,{items:d(t),key:c.value},null,8,["items"])),p(u.$slots,"sidebar-nav-after",{},void 0,!0)])],2)):b("",!0)}}),Dr=I($r,[["__scopeId","data-v-9e9a3195"]]),Mr=y({__name:"VPSkipLink",setup(n){const{theme:t}=O(),e=vn(),o=R();en(()=>e.path,()=>o.value.focus());function s({target:l}){const c=document.getElementById(decodeURIComponent(l.hash).slice(1));if(c){const u=()=>{c.removeAttribute("tabindex"),c.removeEventListener("blur",u)};c.setAttribute("tabindex","-1"),c.addEventListener("blur",u),c.focus(),window.scrollTo(0,0)}}return(l,c)=>(r(),i(M,null,[a("span",{ref_key:"backToTop",ref:o,tabindex:"-1"},null,512),a("a",{href:"#VPContent",class:"VPSkipLink visually-hidden",onClick:s},h(d(t).skipToContentLabel||"Skip to content"),1)],64))}}),Or=I(Mr,[["__scopeId","data-v-2f312717"]]),Er=y({__name:"Layout",setup(n){const{isOpen:t,open:e,close:o}=ln(),s=vn();en(()=>s.path,o),yt(t,o);const{frontmatter:l}=O(),c=at(),u=v(()=>!!c["home-hero-image"]);return Ne("hero-image-slot-exists",u),(m,f)=>{const x=un("Content");return d(l).layout!==!1?(r(),i("div",{key:0,class:V(["Layout",d(l).pageClass])},[p(m.$slots,"layout-top",{},void 0,!0),_(Or),_(lt,{class:"backdrop",show:d(t),onClick:d(o)},null,8,["show","onClick"]),_(wr,null,{"nav-bar-title-before":g(()=>[p(m.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":g(()=>[p(m.$slots,"nav-bar-title-after",{},void 0,!0)]),"nav-bar-content-before":g(()=>[p(m.$slots,"nav-bar-content-before",{},void 0,!0)]),"nav-bar-content-after":g(()=>[p(m.$slots,"nav-bar-content-after",{},void 0,!0)]),"nav-screen-content-before":g(()=>[p(m.$slots,"nav-screen-content-before",{},void 0,!0)]),"nav-screen-content-after":g(()=>[p(m.$slots,"nav-screen-content-after",{},void 0,!0)]),_:3}),_(vs,{open:d(t),onOpenMenu:d(e)},null,8,["open","onOpenMenu"]),_(Dr,{open:d(t)},{"sidebar-nav-before":g(()=>[p(m.$slots,"sidebar-nav-before",{},void 0,!0)]),"sidebar-nav-after":g(()=>[p(m.$slots,"sidebar-nav-after",{},void 0,!0)]),_:3},8,["open"]),_(es,null,{"page-top":g(()=>[p(m.$slots,"page-top",{},void 0,!0)]),"page-bottom":g(()=>[p(m.$slots,"page-bottom",{},void 0,!0)]),"not-found":g(()=>[p(m.$slots,"not-found",{},void 0,!0)]),"home-hero-before":g(()=>[p(m.$slots,"home-hero-before",{},void 0,!0)]),"home-hero-info-before":g(()=>[p(m.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":g(()=>[p(m.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":g(()=>[p(m.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":g(()=>[p(m.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":g(()=>[p(m.$slots,"home-hero-image",{},void 0,!0)]),"home-hero-after":g(()=>[p(m.$slots,"home-hero-after",{},void 0,!0)]),"home-features-before":g(()=>[p(m.$slots,"home-features-before",{},void 0,!0)]),"home-features-after":g(()=>[p(m.$slots,"home-features-after",{},void 0,!0)]),"doc-footer-before":g(()=>[p(m.$slots,"doc-footer-before",{},void 0,!0)]),"doc-before":g(()=>[p(m.$slots,"doc-before",{},void 0,!0)]),"doc-after":g(()=>[p(m.$slots,"doc-after",{},void 0,!0)]),"doc-top":g(()=>[p(m.$slots,"doc-top",{},void 0,!0)]),"doc-bottom":g(()=>[p(m.$slots,"doc-bottom",{},void 0,!0)]),"aside-top":g(()=>[p(m.$slots,"aside-top",{},void 0,!0)]),"aside-bottom":g(()=>[p(m.$slots,"aside-bottom",{},void 0,!0)]),"aside-outline-before":g(()=>[p(m.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":g(()=>[p(m.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":g(()=>[p(m.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":g(()=>[p(m.$slots,"aside-ads-after",{},void 0,!0)]),_:3}),_(rs),p(m.$slots,"layout-bottom",{},void 0,!0)],2)):(r(),P(x,{key:1}))}}}),Nr=I(Er,[["__scopeId","data-v-3fa573af"]]),Ue={Layout:Nr,enhanceApp:({app:n})=>{n.component("Badge",ot)}},Vr={class:"flex items-center gap-3"},Rr={class:"flex items-center rounded-lg border border-slate-200 dark:border-slate-700 overflow-hidden"},Br=y({__name:"ThemeControls",setup(n){const t=R("light");function e(o){if(typeof window>"u")return;t.value=o;const s=document.documentElement;s.classList.remove("dark"),o==="dark"&&s.classList.add("dark"),s.setAttribute("data-theme",o),s.style.colorScheme=o,localStorage.setItem("vitepress-theme-appearance",o)}return on(()=>{const o=localStorage.getItem("vitepress-theme-appearance"),s=o==="dark"||o==="light"?o:"light";e(s),requestAnimationFrame(()=>e(s))}),(o,s)=>(r(),i("div",Vr,[_(je),a("div",Rr,[a("button",{class:V(["px-2.5 py-1.5 text-xs font-semibold transition-colors",t.value==="light"?"bg-slate-200 text-slate-900 dark:bg-slate-100":"bg-transparent text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"]),onClick:s[0]||(s[0]=l=>e("light"))}," Light ",2),a("button",{class:V(["px-2.5 py-1.5 text-xs font-semibold transition-colors",t.value==="dark"?"bg-slate-900 text-slate-100 dark:bg-slate-700":"bg-transparent text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"]),onClick:s[1]||(s[1]=l=>e("dark"))}," Dark ",2)]),_(He)]))}}),zr={class:"fixed top-0 w-full z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-b border-slate-200/15 dark:border-slate-800/15 shadow-[0px_24px_48px_rgba(42,52,57,0.06)]"},qr={class:"flex items-center gap-3"},Gr={class:"text-xl font-bold tracking-tighter text-slate-900 dark:text-slate-50"},jr={class:"hidden md:flex items-center space-x-8 font-inter tracking-tight"},Hr=["href"],Fr={class:"flex items-center gap-4"},Ur={key:0,class:"bg-primary text-on-primary px-5 py-2 rounded-lg font-medium text-sm transition-all active:opacity-80"},Cn=y({__name:"SiteHeader",props:{siteTitle:{default:"Mesh Shape"},navLinks:{default:()=>[]},showSubscribe:{type:Boolean,default:!1},subscribeButtonText:{default:"Subscribe"},navHeightClass:{default:"h-20"}},setup(n){const t=vn();function e(s){if(!s)return"/";const[l]=s.split(/[?#]/);return l&&l.replace(/\/+$/,"")||"/"}function o(s){if(s.active)return!0;const l=e(s.href),c=e(t.path);return l==="/"?c==="/":c===l||c.startsWith(`${l}/`)}return(s,l)=>(r(),i("nav",zr,[a("div",{class:V(`flex justify-between items-center ${n.navHeightClass} px-8 w-full max-w-7xl mx-auto`)},[a("div",qr,[a("div",Gr,h(n.siteTitle),1)]),a("div",jr,[(r(!0),i(M,null,G(n.navLinks,c=>(r(),i("a",{key:c.text,class:V(o(c)?"text-slate-900 dark:text-slate-50 font-semibold border-b-2 border-slate-900 dark:border-slate-50 pb-1 transition-all":"text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 transition-colors"),href:c.href||"#"},h(c.text),11,Hr))),128))]),a("div",Fr,[_(Br),n.showSubscribe?(r(),i("button",Ur,h(n.subscribeButtonText),1)):b("",!0)])],2)]))}}),Wr={class:"w-full py-12 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950"},Kr={class:"max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-8"},Qr={class:"text-lg font-bold text-slate-900 dark:text-slate-50 mb-2"},Jr={class:"text-sm font-inter tracking-wide text-slate-600 dark:text-slate-400"},Xr={class:"flex flex-wrap justify-center gap-8"},Yr=["href"],Zr={key:0,class:"flex gap-4"},ni={class:"material-symbols-outlined text-slate-600 dark:text-slate-400"},Sn=y({__name:"SiteFooter",props:{title:{default:"Mesh Shape"},description:{default:""},links:{default:()=>[]},socialIcons:{default:()=>[]}},setup(n){return(t,e)=>(r(),i("footer",Wr,[a("div",Kr,[a("div",null,[a("div",Qr,h(n.title),1),a("p",Jr,h(n.description),1)]),a("div",Xr,[(r(!0),i(M,null,G(n.links,o=>(r(),i("a",{key:o.text,class:"text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm font-inter tracking-wide",href:o.href||"#"},h(o.text),9,Yr))),128))]),n.socialIcons.length?(r(),i("div",Zr,[(r(!0),i(M,null,G(n.socialIcons,o=>(r(),i("button",{key:o,class:"w-10 h-10 flex items-center justify-center rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:scale-105 transition-transform"},[a("span",ni,h(o),1)]))),128))])):b("",!0)])]))}}),ei={class:"bg-surface text-slate-900 dark:text-slate-100 antialiased selection:bg-primary-container selection:text-on-primary-container"},ti={class:"pt-20 bg-surface"},ai={class:"relative overflow-hidden min-h-[870px] flex items-center px-8 max-w-7xl mx-auto"},si={class:"grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full"},oi={class:"lg:col-span-7 z-10"},ri={class:"inline-block label-sm text-[0.6875rem] font-bold tracking-[0.05em] uppercase text-tertiary mb-6"},ii={class:"text-[3.5rem] font-extrabold leading-[1.1] tracking-[-0.02em] text-slate-900 dark:text-slate-100 mb-8"},li={class:"text-primary-dim"},ci={class:"text-[1.375rem] leading-relaxed text-slate-700 dark:text-slate-400 max-w-2xl font-light"},di={class:"mt-12 flex items-center space-x-6"},ui=["href"],pi={class:"py-24 bg-surface-container-low dark:bg-slate-900"},mi={class:"max-w-7xl mx-auto px-8"},hi={class:"mb-16 text-center lg:text-left"},gi={class:"text-[2.25rem] font-bold tracking-tight text-slate-900 dark:text-slate-100 mb-8"},fi={class:"text-slate-700 dark:text-slate-400 max-w-xl"},vi={class:"relative aspect-[21/9] w-full bg-surface-container-lowest rounded-full overflow-hidden outline outline-1 outline-outline-variant/10 group"},bi={class:"absolute bottom-12 left-12 flex flex-col space-y-2 p-6 bg-white/40 backdrop-blur-md rounded-xl border border-white/20 max-w-xs"},ki={class:"text-xs font-bold text-primary uppercase tracking-widest"},_i={class:"text-sm text-slate-900 dark:text-slate-100"},yi={id:"insights-section",class:"py-32 bg-surface dark:bg-slate-950"},xi={class:"max-w-7xl mx-auto px-8"},wi={class:"flex flex-col lg:flex-row gap-24 items-start"},Ai={class:"lg:sticky lg:top-32 lg:w-1/3"},Pi={class:"text-[3rem] font-extrabold tracking-tighter leading-tight mb-6"},Ci={class:"text-slate-700 dark:text-slate-400"},Si={class:"lg:w-2/3 space-y-32"},Ii={class:"flex items-baseline gap-6 mb-8"},Ti={class:"text-[4rem] font-thin text-outline-variant leading-none"},Li={class:"text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100"},$i={class:"pl-0 lg:pl-20"},Di={key:0,class:"space-y-5 mb-8 text-lg leading-relaxed text-slate-700 dark:text-slate-400"},Mi={key:1,class:"text-lg leading-relaxed text-slate-700 dark:text-slate-400 mb-8"},Oi={key:2,class:"mb-8 space-y-3 text-base leading-relaxed text-slate-700 dark:text-slate-400"},Ei={key:3,class:"mt-4 px-6 py-3 bg-surface-container-high text-primary rounded-lg text-sm font-semibold hover:bg-surface-container-highest transition-colors"},Ni={class:"py-24 bg-surface-container-low dark:bg-slate-900 px-8"},Vi={class:"max-w-7xl mx-auto"},Ri={class:"bg-primary-dim rounded-full p-16 lg:p-24 relative overflow-hidden group dark:bg-slate-900 dark:border dark:border-slate-800"},Bi={class:"relative z-10 text-center lg:text-left"},zi={class:"text-[2.5rem] lg:text-[3.5rem] font-bold text-white mb-8 tracking-tighter"},qi={key:0,class:"flex flex-col sm:flex-row gap-6 justify-center lg:justify-start"},Gi={key:0,class:"px-10 py-5 bg-white text-primary font-bold rounded-lg hover:bg-on-primary transition-transform active:scale-95"},ji={key:1,class:"px-10 py-5 bg-primary text-white border border-white/20 font-bold rounded-lg hover:bg-primary/80 transition-transform active:scale-95"},Hi=y({__name:"HomeLayout",setup(n){const{frontmatter:t}=pn(),e=v(()=>t.value),{theme:o}=pn(),s=v(()=>o.value),l=v(()=>s.value.header||{}),c=v(()=>s.value.footer||{});function u(){var m;typeof window>"u"||(m=document.getElementById("insights-section"))==null||m.scrollIntoView({behavior:"smooth",block:"start"})}return(m,f)=>(r(),i("div",ei,[_(Cn,{"site-title":l.value.siteTitle||e.value.siteTitle,"nav-links":l.value.navLinks||e.value.navLinks||[],"show-subscribe":!!l.value.showSubscribe,"subscribe-button-text":l.value.subscribeButtonText,"nav-height-class":"h-20"},null,8,["site-title","nav-links","show-subscribe","subscribe-button-text"]),a("main",ti,[a("section",ai,[a("div",si,[a("div",oi,[a("span",ri,h(e.value.heroEyebrow),1),a("h1",ii,[X(h(e.value.heroTitle),1),f[0]||(f[0]=a("br",null,null,-1)),a("span",li,h(e.value.heroTitleHighlight),1)]),a("p",ci,h(e.value.heroDescription),1),a("div",di,[e.value.heroPrimaryButton?(r(),i("button",{key:0,class:"px-8 py-4 bg-primary text-on-primary rounded-lg font-medium hover:bg-primary-dim dark:bg-[#f7f9fb] dark:text-[#0f172a] dark:hover:bg-[#ffffff] transition-all hover:scale-[1.02] active:scale-95",onClick:u},h(e.value.heroPrimaryButton),1)):b("",!0),e.value.heroSecondaryButton?(r(),i("button",{key:1,class:"flex items-center space-x-2 text-tertiary font-medium hover:underline",href:e.value.heroSecondaryButtonHref||"/blog/"},[a("span",null,h(e.value.heroSecondaryButton),1),f[1]||(f[1]=a("span",{class:"material-symbols-outlined text-sm"},"arrow_forward",-1))],8,ui)):b("",!0)])]),f[2]||(f[2]=st('<div class="lg:col-span-5 relative h-[500px] w-full hidden lg:block"><div class="absolute inset-0 bg-surface-container-low rounded-[2rem] overflow-hidden mesh-gradient"><div class="absolute inset-0 opacity-20" data-alt="Subtle geometric mesh pattern texture" style="background-image:url(&quot;https://lh3.googleusercontent.com/aida-public/AB6AXuAUcSe9d46Mwj1WAWf04NrQ9aCyd30vAK73ywP_BdL2seXS7AHlEyTiukTkxtS1ej9DvI7RVoDbklVly8Il8toNsQwMzCi-45WniKVjOWOIhXwwWepsvMV2DcST7w-9KwnJbe18kSm6YxwpOmXNljV68iPkix6t70Z40-aVvjytCaUJWHfCsw7yYc5fDypW6_6h1ZJxraEAQ46zW1qLGDMgxxfzBqB3KDTkIMdmFgqpUKk2kgM03mVlZDNVUPUok8GYEd5-MNbBeiU&quot;);"></div><div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] flex items-center justify-center"><div class="relative w-full h-full"><div class="absolute top-[20%] left-[20%] w-[60%] h-[2px] bg-primary/20 rotate-[-15deg]"></div><div class="absolute top-[40%] left-[20%] w-[60%] h-[2px] bg-primary/40 rotate-[-15deg]"></div><div class="absolute top-[20%] left-[40%] w-[2px] h-[60%] bg-primary/30 rotate-[10deg]"></div><div class="absolute top-[20%] left-[60%] w-[2px] h-[60%] bg-primary/50 rotate-[10deg]"></div></div></div></div></div>',1))])]),a("section",pi,[a("div",mi,[a("div",hi,[a("h2",gi,h(e.value.structureTitle),1),a("p",fi,h(e.value.structureDescription),1)]),a("div",vi,[f[3]||(f[3]=a("img",{alt:"Architectural Mesh Diagram",class:"w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105","data-alt":"Digital blue circuit mesh representing neural network topology",src:"https://lh3.googleusercontent.com/aida-public/AB6AXuB03QjBHV3UvocHZ0gjZqh_YK3bnvSo4vE4MJo4kN6mVSCBrJ54oBX1gJQ8EZ1z4UYrWQwluH5o4f6j5xmkUnDAxxAjQLbeRxSIf-wuSVMHzQfRf-RaR9s8GLqEX5vWqZ8dLg8sETni0uYuKXFP3ohH1Y-C4PoaEV8hyndXWceTLOklD7OrY7T6jkS-Yc3H0j_6KkPodPVNV0jXdyfgZpz7Wlxmktxbms8MIyp8ikOEtltEdTH-TQfmHfHtLLRqmETLYjuj7DRlPTE"},null,-1)),f[4]||(f[4]=a("div",{class:"absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-transparent to-transparent opacity-60"},null,-1)),a("div",bi,[a("span",ki,h(e.value.structureCardTitle),1),a("p",_i,h(e.value.structureCardDescription),1)])])])]),a("section",yi,[a("div",xi,[a("div",wi,[a("div",Ai,[a("h2",Pi,[X(h(e.value.insightsTitleLine1),1),f[5]||(f[5]=a("br",null,null,-1)),X(h(e.value.insightsTitleLine2),1),f[6]||(f[6]=a("span",{class:"text-tertiary"},".",-1))]),a("p",Ci,h(e.value.insightsSubtitle),1)]),a("div",Si,[(r(!0),i(M,null,G(e.value.insights||[],x=>{var w,T;return r(),i("div",{key:x.index,class:"group"},[a("div",Ii,[a("span",Ti,h(x.index),1),a("h3",Li,h(x.title),1)]),a("div",$i,[(w=x.paragraphs)!=null&&w.length?(r(),i("div",Di,[(r(!0),i(M,null,G(x.paragraphs,L=>(r(),i("p",{key:L},h(L),1))),128))])):x.description?(r(),i("p",Mi,h(x.description),1)):b("",!0),(T=x.listItems)!=null&&T.length?(r(),i("ul",Oi,[(r(!0),i(M,null,G(x.listItems,L=>(r(),i("li",{key:L,class:"flex gap-3"},[f[7]||(f[7]=a("span",{class:"mt-2 h-2 w-2 shrink-0 rounded-full bg-tertiary"},null,-1)),a("span",null,h(L),1)]))),128))])):b("",!0),x.buttonText?(r(),i("button",Ei,h(x.buttonText),1)):b("",!0)])])}),128))])])])]),a("section",Ni,[a("div",Vi,[a("div",Ri,[f[8]||(f[8]=a("div",{class:"absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none"},[a("svg",{class:"w-full h-full scale-150 rotate-45",viewBox:"0 0 200 200",xmlns:"http://www.w3.org/2000/svg"},[a("path",{d:"M44.7,-76.4C58.1,-69.2,70.3,-58.5,78.4,-45.3C86.5,-32.1,90.4,-16,88.4,-0.6C86.5,14.8,78.6,29.6,69.5,42.4C60.4,55.1,50.1,65.8,37.5,72.6C24.9,79.5,10,82.5,-4.1,89.5C-18.1,96.6,-31.2,107.7,-43.3,105.7C-55.3,103.7,-66.2,88.5,-73.4,73.5C-80.6,58.4,-84.1,43.5,-86.3,28.9C-88.5,14.2,-89.4,-0.2,-86.3,-13.7C-83.2,-27.2,-76.1,-39.8,-66.5,-50.2C-56.9,-60.7,-44.8,-69.1,-32.2,-76.7C-19.6,-84.4,-6.5,-91.3,7.6,-104.4C21.7,-117.5,31.3,-83.6,44.7,-76.4Z",fill:"#FFFFFF",transform:"translate(100 100)"})])],-1)),a("div",Bi,[a("h2",zi,h(e.value.ctaTitle),1),e.value.ctaPrimaryButton||e.value.ctaSecondaryButton?(r(),i("div",qi,[e.value.ctaPrimaryButton?(r(),i("button",Gi,h(e.value.ctaPrimaryButton),1)):b("",!0),e.value.ctaSecondaryButton?(r(),i("button",ji,h(e.value.ctaSecondaryButton),1)):b("",!0)])):b("",!0)])])])])]),_(Sn,{title:c.value.title||e.value.footerTitle,description:c.value.description||e.value.footerDescription,links:c.value.links||e.value.footerLinks||[],"social-icons":c.value.socialIcons||[]},null,8,["title","description","links","social-icons"])]))}}),Fn=`---
layout: about-me
heroEyebrow: 画像
heroTitle: 关于我
heroDescription: "以 AI 能力赋能整个软件开发生命周期（SDLC）。打造智能代理与 AI 原生平台，自动化并优化开发生命周期的每一个阶段。"
heroMeta: "- Anddd7"
stackTitle: 技术栈
stackItems:
  - icon: https://img.icons8.com/color/48/000000/golang.png
    label: Go
  - icon: https://img.icons8.com/color/48/000000/kotlin.png
    label: Kotlin
  - icon: https://img.icons8.com/color/48/000000/amazon-web-services.png
    label: AWS
  - icon: https://img.icons8.com/color/48/000000/kubernetes.png
    label: K8s
  - icon: https://img.icons8.com/fluency/48/github-copilot.png
    label: Copilot
  - icon: https://img.icons8.com/color/48/000000/google-cloud.png
    label: GCP
  - icon: https://img.icons8.com/fluency/48/azure-1.png
    label: Azure
  - icon: https://img.icons8.com/color/48/gitlab.png
    label: GitLab
focusEyebrow: 能力矩阵
focusTitle: 关注领域
focusCards:
  - icon: robot_2
    title: AI + DevOps
    description: 基于 LLM 的智能代理，实现覆盖完整 SDLC 的智能自动化
  - icon: grid_view
    title: 网格化技能（Mesh-Shape）
    description: 跨越开发、基础设施与 AI 的跨领域专长
  - icon: architecture
    title: AI 原生平台
    description: 由智能代理驱动的云原生工具与系统
  - icon: cloud_done
    title: 云与基础设施
    description: Kubernetes、IaC 与多云自动化（AWS、GCP、Azure）
articlesTitle: 最新文章
featuredArticle: blogs/2026/202602-pov-agentic-engineering.md
sideArticles:
  path: blogs/**/*.md
  count: 3
articlesMoreText: 查看更多
articlesMoreHref: /blogs/
readMoreLabel: 阅读更多
# c: 保持同步
# subscribeDescription: 接收关于 AI 原生基础设施与架构模式的阶段性更新。
# subscribePlaceholder: 电子邮箱地址
# subscribeButton: 订阅
---
`,Un=`# Logseq - Build your own Wiki

## 前言

最近几年开始习惯用文字记录一些经历和感想，开始留意代码以外的叙述方式 - 绘图、文字、语音。也可能是年龄大了记不住太多事，也可能是（工作/社会）角色产生了变化，事情变多了。
在这个过程中切换了几次软件，终于在去年年底（21/12）注意到了[Logseq](https://logseq.com)，试用了一个月基本满足了我所有的需求。借此分享一些经验出来 ~ (已经安利给了不少周围的同事)

## 选型之旅

### 1.0 | Trello
  
- 目的：（项目外的）任务管理、目标追踪
- 用例：
  - 读书笔记，通过追加comments记录笔记（markdown）
  - 考证进度，标记deadline和注意事项
  - 待办事项，要做的事、要看的文章、要学的东西
- 不足：
  - 后期开始有一些中长期的规划，需要逐步拆分才能工作
  - 工作相关的任务也逐渐变多，需要记录（大脑内存不足）
  - 碎片化信息很多，Trello需要登录没法随时随地记录
  - 最后就是大大小小的任务堆积在Kanban，并不能有效的管理、执行任务，特别是需要拆分大任务的时候

### 2.0 | Trello + Reminders/Notes + Typora

- 目的：任务管理、目标追踪、OKR
- 用例：
  - 使用Tag和分割线来区分不同类型和优先级的任务
  - 使用Checklist+Attachment来关联O和KR，查看完成情况
  - 在Typora里用文件结构稍微区分了一下笔记内容
  - (Apple)Reminders/Notes，灵光一闪的时候（haha）就用手机记录，再通过Mac迁移

![Trello Card](../assets/202202-logseq-build-your-own-wiki/1644655887368.jpg)

\`\`\`markdown
 ## Typora Folder Structure
 ----------------------------files
 0. README      : 如是说
 1. TODO        : 待办管理
 2. NOTEBOOK    : 随笔记事本

 ----------------------------folders
 _backup        : 备份数据
 _secrets       : \`***********\`
 documents      : 文档笔记，以markdown为主，自己所写
    _archive    : 已归档信息，如最终生成的pdf
 resources      : 资料文件，作为存档以备不时之需，来自外部
    _workspace  : 项目工作的文档，最好一段时间后删除
\`\`\`

- 不足：
  - Typora很适合写文章，然而很难管理碎片化的笔记，很多时候我都要通过搜索找之前的笔记
  - 有时候要在多个软件间反复横跳，挺麻烦的
  - Trello用的企业版，Typora也收费了，考虑后续的迁移成本也挺麻烦的
  - 后来用Github Project替换了Trello，但是效果一般（治标不治本）

### 3.0 | Logseq

在[Dawei Ma的博客](https://www.bmpi.dev/)里看到了他的[人生管理系统](https://www.bmpi.dev/self/life-in-plain-text)，里面有关TODO、OKR、笔记的管理方式非常契合我的需求：All in One + Notes + Geek + RoamCult的工具。

随后通过Community、Twitter了解到了更多的RoamCult + GTD + Wiki工具，最后选择了Logseq作为新的笔记软件。

## Logseq Workflow

### 快速起步

知乎和B站已经有大量操作视频，可以通过他们的讲解快速入门。我这里直接分享我日常的用例，大家可以自行采用或修改

#### 微信公众号读到一篇好文

- 搜集
  - 手机：微信转发好友给\`Cubox收藏助手\`
- 处理
  - 登录\`Cubox.pro\`，查看收藏的文章，复制/导出markdown到\`Logseq\`，删除收藏

> Cubox 是一个知识库，提供多端的接口：IOS/ChromePlugin/微信小助手(微信好友)，免费有200条，我只是把他作为中转站
> Cubox 还提供图片转文字，导出markdown

#### 微信群内的讨论

- 搜集
  - 手机：微信转发好友给\`Cubox收藏助手\`

> 对没错，聊天信息也可以转发..。但是不能多条合并转发

#### 知乎了解到一个新技术

- 手机：分享-更多-快速收藏至\`Cubox\`
- Chrome：
  - 右键-收藏网页/收藏内容至\`Cubox\`
  - \`GoFullPage\`截图

#### 收到一封邮件(!!注意涉密信息)

- Chrome：
  - \`GoFullPage\`截图
  - \`Markdownload\`导出markdown

#### medium读到一篇技术文章

- Chrome：
  - \`GoFullPage\`截图
  - \`Markdownload\`导出markdown

#### 下载了一本PDF电子书

- MAC：拖进\`Logseq\`即可

> 拖进Logseq会在指定路径下创建一个副本，如果不想要这个副本，可以copy绝对路径，通过\`![title](<absolute path of pdf>)\`在Logseq中引用已有文件
> 我还安装了\`Goodnotes\`，不过大多数时间都在Mac/iPhone上，使用频率很低(对Pad会比较友好)

#### OKR完成20道Leetcode

- 我创建了一个模板，刷题之前先创建一个Page，然后写入模板，点击TODO开始计时
- 完成之后将分析过程和代码记录回来，结束TODO
- 在OKR内写了一个Query来查询完成了多少leetcode (其实通过 linked references 就知道做了多少了)

\`\`\`markdown
- TODO #leetcode #OKR/2022/O1-JVM/KR1-Leetcode
  - 题目
    - abcdefg
  - 分析
    - 1
    - 2
    - 3
  - 代码
    - blaaaaaaaaaaaaa
\`\`\`

#### 准备下周的会议

- 在journey里创建\`scheduled todo\`，在tag页面记录agend或者meeting minutes

\`\`\`markdown
* TODO have a meeting with [[@Anddd7]] #Project/X/2022-02-01
  SCHEDULED 2022-02-01
\`\`\`

#### 领到一张新卡 准备开工

- 在journey里创建\`todo\`

\`\`\`markdown
* TODO refactor the workflow engine #Project/X/CARD-123456
  * tasking 1
  * tasking 2
  * tasking 3
\`\`\`

#### 进行新项目的技术选型和架构设计

- 创建\`page\`，\`Project/X/Payment Solution\`
- 可以使用\`Logseq\`内置的\`/draw\`
  - 也可以用:
    - 白板 - Excalidraw，drawio，Google drawing
    - 脑图 - ProcessOn、石墨
    - 设计图 - Penpot（开源）、Figma（收费）
    - 白板Sticker - Google Jamboard、Miro、Mural（收费）
    - as Code - PlantUML
    - Database - dbdiagram
    - CodeHighlight - carbon.now.sh

#### 遇到优先级很高的Bug需要修复

- 在journey里创建\`todo\`，加上优先级和schedule和deadline

\`\`\`markdown
* TODO [#A] refactor the workflow engine #Project/X/CARD-123456
  SCHEDULED xxxx-xx-xx
  DEADLINE xxxx-xx-xx
  * tasking 1
  * tasking 2
  * tasking 3
\`\`\`

#### 准备发布博客

- copy or export Logseq page，just 粘贴

> 我写了一个shell，输入文件名可以从logseq把文件copy到hexo路径下

#### 回顾知识

- Flashcards!! 或者使用社区的插件 random notes，没事翻一翻之前的笔记
- 定期(周/月)的总结

### 小技巧

#### 其他工具

Logseq主要做知识管理，但是如何高效高质量的获取原始数据，就需要其他工具的辅助了。我目前主要用的：

- 工具
  - Logseq：TODO、OKR、GTD、笔记、Insights、摘录、数据库、视图、表格
  - Visual Studio Code：编排笔记、书写博客
  - iCloud + Github：多端同步、备份数据
  - Cubox + MarkDownload：收藏文章、剪切信息
  - Goodnotes + 微信读书：读书（精读）
- 渠道
  - 推特 (真的不错，除了要翻墙之外)
  - 知乎 (一般般)
  - 微信公众号
  - 博客/邮件
  - 群聊天

#### Hierarchy

当 page name 中包含\`/\`时，Logseq会将其分解为类似文件路径的结构，并生成hierarchy。而且在 graph 中也会有不同的着色，看起来更清晰。

![Hierarchy](../assets/202202-logseq-build-your-own-wiki/wx20220212-172346.png)

![Page Graph](../assets/202202-logseq-build-your-own-wiki/wx20220212-172451.png)

#### Query：GTD / OKR

通过Advanced Query查询 Page/Block，显示优先级较高的任务或内容，构建适合你自己的事务处理流。

- 正在做的任务

\`\`\`clojure
#+BEGIN_QUERY
{   :title "🍖 Run~Run~Run"
    :query [:find (pull ?h [*])
            :where
            [?h :block/marker ?marker]
            [(contains? #{"NOW" "DOING"} ?marker)]]
    :result-transform (fn [result]
         (sort-by (fn [h]
                           (get h :block/priority "Z")) result))
    :collapsed? false}
#+END_QUERY
\`\`\`

- 优先级较高或OKR相关的代办

\`\`\`clojure
#+BEGIN_QUERY
{   :title "🏄 Nnnnnext"
    :query [:find (pull ?h [*])
            :where
            [?h :block/marker ?marker]
            [(contains? #{"NOW" "LATER" "TODO"} ?marker)]
            (not
             (not
                 [?h :block/priority ?priority]
            [(contains? #{"A" "B" "C"} ?priority)]
                )
                (not 
                 [?h :block/ref-pages ?p]
            [?p :page/name ?page-name]
            [(clojure.string/includes? ?page-name "okr")]
                )
            )]
    :result-transform (fn [result]
         (sort-by (fn [h]
                           (get h :block/priority "Z")) result))
    :collapsed? false}
#+END_QUERY
\`\`\`

![效果图](../assets/202202-logseq-build-your-own-wiki/1644658272643.jpg)

## 想法

Logseq的双链非常契合Mesh-Shaped的想法，我在使用Logseq进行工作/学习的时候也非常爽。知识可以相互链接扩展，计算机未必不能用哲学思考，UML也适用于团队管理。

在多个任务同时进行的时候，我也可以使用Journey + TODO(Query)随时"存档"然后切换到下一个任务。完成之后再切回来，通过记录的上下文快速回到之前的工作状态。

当然，Logseq本身只是一个工具，不一定适用每一个人。但找到一个契合你"思考方式"的工具，就能帮助你高效工作。
`,Wn=`# Mesh-Shaped Cloud-Native Developer

## 背景：云原生的爆发

云计算在经过数十年的发展后，已经成为了 Internet 新的的超级基建。“我要不要上云” 的问题已经被业界用实际行动回答了，而 “何时何地以何种姿势上云” 才是接下来亟待解决的新问题。

当“应用迁移上云”的计划陷入了瓶颈，大家开始思考：“应用上云 / 云上的应用”是否有所不同？云上运行的应用是否应该因地制宜，基于云去重新设计其软件架构？

新的环境自然会催生出新的事物，云原生的概念一经提出便成为了云时代新的里程碑，随之建立的云原生基金会和云原生项目也如雨后春笋般快速发展。

> [Definition of Cloud-Native](#cncf)\\
> Cloud native technologies empower organizations to build and run scalable applications in modern, dynamic environments such as public, private, and hybrid clouds. Containers, service meshes, microservices, immutable infrastructure, and declarative APIs exemplify this approach. \\
> These techniques enable loosely coupled systems that are resilient, manageable, and observable. Combined with robust automation, they allow engineers to make high-impact changes frequently and predictably with minimal toil.

在云原生中，我们试图将功能性需求（Functional Requirements）与跨功能性需求（CrossFunctionalRequirements）进行解耦。利用容器、微服务、CI/CD、DevOps等技术为业务应用提供“安全营养无负担的环境”，云原生技术未来（Now!）将成为驱动业务增长的重要引擎。

![business-logic-core](../assets/202203-mesh-shaped-cloud-native-developer/2022-03-13-22-37-47.jpeg)

在刚刚过去的2021年，云原生技术又迎来了新一轮的爆发：

- 容器成为了云原生应用的交付物标准，Kubernetes则成为了容器的运行和编排标准
- 而SMI（Service Mesh Interface）、OAM（Open Application Model）试图制定网络层和应用层的云原生标准
- 在过去几年中，业界见证了云原生技术的采用呈指数级增长：从互联网到工厂，从Web到IoT
- 而在去年，国内头部的互联网公司也都基本完成了云原生化：阿里、腾讯乃至信通院都发布了其云原生建设的愿景图
（见后文 [#Links](#reports)）

> **"大人，时代变了"**

## 背景：后端开发工程师的职业发展

作为一个以 “Java / 后端 / 开发工程师” 身份加入TW的程序员，我时常会对自己的角色定位产生疑惑：

- 写了3年Kotlin，没遇到几次高并发；JVM一知半解，八股文半窍不通；
- 能写React组件，能测Hooks逻辑；搞过CICD流水线，也做过Terraform自动化；
- DevOps咨询、AWS解决方案、售前打单...

然而，随意翻开一些互联网公司的后端工程师JD：Spring手撕、JVM调优、Redis原理。这些技能是后端所必须的吗？具备这些技能就能够打造出市场所需要的产品吗？那我这样“不务正业”的Java后端又该何去何从呢？

### 纵向发展 vs 横向发展

开发者究竟是应该: 横向发展 —— 广度优先：博览群书 / 还是纵向发展 —— 深度优先：专治疑难杂症？

如果我们从更高的维度来看，开发者在向CTO的发展过程中，需要在不同的时机去发展横向和纵向的能力，例如：随着影响力和权利的不断扩大，管理、沟通等软实力也和技术能力同等重要。
（见后文 [扩展：如何定义架构师](#扩展如何定义架构师)）

![t-shaped](../assets/202203-mesh-shaped-cloud-native-developer/1-n1zqvw8bk-o8rwxnzs5kq-1640317547459-0.png)

因此，从长远来讲我们既要关注所在领域的技术深度，也要不断挖掘并拓宽自己的未知领域。而每一种知识、每一项能力，也可能是其他基础知识、基本能力的一种组合；知识与知识、能力与能力之间也并不孤立，而是有着千丝万缕的联系和耦合的。

最终，可能每个人掌握的技能都不是一个简单的“T”，或是“M” —— 技能树？No 能力网？Yes

#### “劳动分工”的陷阱

劳动分工带来了纵向发展的需求，但其本质是为了提升某一专业领域的产出效率。而一些所谓的 "专业领域" 实际上是由资本家划分出来的：以便让劳动者与某种专业领域绑定，将劳动力作为“商品”进行售卖，e.g. 我需要一个SSH后端开发。一旦将劳动力与商品等价，“议价”“打折”“促销”的商品交易手段也就同样适用于劳动力交易 —— 内卷。

![scientist](../assets/202203-mesh-shaped-cloud-native-developer/wx20220321-104324.png)

（推荐）[【硬核社会学】996、内卷、打工人：马克思为什么是对的（上）| 23:22](https://www.bilibili.com/video/BV18z4y1C7rX)

---

## 00.前言

在一开始进入IT行业时，我就有一个目标/RoleModel —— 独立开发者。因为我觉得编程是一件很酷的事情，可以使用不同的语言、不同的框架、不同的服务，像乐高一样随意组合，做出各种各样更酷的程序。Thoughtworks 秉承的技术卓越，也让我在加入之后有机会了解和尝试到非常多前沿的、新鲜的技术（Tech Radar）。

在尝试了一些不同的技术栈、角色和项目之后，我所熟悉的领域和掌握的技能也慢慢超出了后端的范畴。而各大微信技术群里大家对Spring源码、JVM优化的讨论还依旧火热，总让我怀疑是不是走错了方向。同样是CRUD程序员，为什么我们的关注点会不一样呢？

在深入学习了云服务，了解了云原生之后，我发现这个问题的答案可能是“开发模式的变革”：

- 以前，软件产品的“业务和技术”是难以分离的，在编写业务逻辑时还需要考虑非常多运行、部署、维护的问题
- 现在，云抽象了物理和网络设备、云原生抽象了技术组件和开发模式，开发者有了更简洁易用的工具

> “就像配电脑一样，淘宝京东、下单三大件、参照说明书、一键点亮” —— 云原生的开发模式

## 01.云原生时代的开发模式

“抽象 —— 编程的本质，是对问题域和解决方案域的一种提炼”
“封装、继承、多态 —— 不仅是面向对象的特性，也是软件技术进步的方向”

### 技术下沉

云计算站在软/硬件之上提供了更高层级的封装，抽象出了更通用、更实用、更易用的解决方案。随着某一个问题域被充分的解决，所有可能的解决方案和相关的技术都将被封装起来，抽象并打包成某一个产品 —— 云服务。（最近2年很多独角兽企业都是技术服务公司，甚至很多运营的是开源产品，Strapi、Hashicorp、PingCAP…）

解决的问题域越多，我们可用的服务就越多，我们就越容易利用这些已有方案去解决新的问题。在云时代以前，大家面向过程、面向对象，基于Java、基于Python，构建前端、构建后端；在云时代后，我们使用容器、Serverless、IaC。

技术下沉带来的是基础设施的变革，基础设施的变革带来的是产业升级。

### 螺旋式上升

“螺旋式上升”这个词很好的形容了历史、科技的进步规律。从历史中，我们得知了电、发动机等技术如何推动了电器、电脑、汽车、飞机的发展，进而推动了社会的进步。站在今天，软件技术同样也经历着这样一个过程：云计算所带来的技术下沉，会引起更多的连锁反应。

以前想要搭建一个数据库，要在网上搜索很久，怎么下载安装、怎么设置IP、怎么配置主从Copy。而现在，独立上市的数据库企业就有10+，并且越来越多的收入是来自于订阅式的云服务。以前只存在于脑洞中的技术，也都慢慢的走上了台面：

- 对业务的抽象：Low-Code/No-Code
- 对编程的抽象：BA with AI-Developer - autopilot
- 对架构的抽象：Architecture as a Service(AaaS)

这里特别提一下腾讯的小程序，现在已经完全和腾讯云打通：可以使用 IDE 完成整个开发、部署，使用和控制云上服务（云函数、云存储等），而无需登录腾讯云 —— one person, one army。

### 以不变应万变

面对变化如此迅猛的后云时代，作为开发者如何才能跟紧？

> “学好数理化走遍天下都不怕”

数学、物理、化学是世界运行的一些客观规律，同样的，在计算机技术领域也有着这样的“上帝法则”：算法、CPA、流水线、一致性协议，等等。“利用AWS MQ实现异步消息”和“CPU与外设的DMA异步通讯”，可以说都是AIO在不同层面的一种应用。（量子计算机是另一个话题，逃）

所以，我虽然反感八股文，但我仍认为算法、计算机组成原理等基础知识是所有开发者都应该去了解并掌握的。在旧技术不断下沉、新技术螺旋上升的时候，这些“法则”将帮助你保持较高的学习能力和适应能力。

## 10.云原生时代的开发者

狭义上讲，“云原生开发者”顾名思义就是从事云原生有关技术的开发者，比如容器、CI/CD、云服务，等等。他们对已知的问题域进行分析和解答，并形成可复用的解决方案，以某种技术服务的方式提供给其他人 —— Working on Known Area（e.g. 云厂商的Solution Architect）

但是云原生的目的是为了更好的支持“业务应用”，也就意味着在提供解决方案前，你得明确问题域是什么。要先能理解业务、商业、组织的问题，设计出合理的“业务应用”；才能进一步规划和采用相应的解决方案，实现应用的云原生。

广义上讲，“云原生开发者”则是了解、掌握云原生相关理论和技术的人，并能够使用这套规则来提高自己、团队、企业的开发效率，实现技术驱动业务增长 —— Working on Unknown Area（e.g. Thoughtworks的机会）

### “云原生开发者 ≠ 后端”

“面试造核弹，上班拧螺丝”是如今大多数公司面试的一个缩影，也受到非常多人的吐槽。但反过来想，即使掌握了“核弹”技能，就能显著的提升开发的效率和质量吗？怎样把“螺丝”拧的又快又好，是不是更应该努力的方向？

而在云服务和云原生兴起的今天，一些过去的“高级技术”已经被抽象成了“基础服务”。随着基础设施的标准化，后端要解决的核心问题已经从“服务器开发”转向了”服务端业务开发”。

### “云原生开发者 ≠ DevOps”

“DevOps”及“SRE”文化本身就是云原生中关键的一环，因此可以看做是云原生开发者的一个子集。但是当我们聊到微服务时，会发现微服务拆分并不是一个纯粹的技术问题：组织架构、业务形态、行业领域，都可能会影响我们的微服务拆分，从而影响到容器、运行环境等技术架构。

因此，云原生开发者也不能脱离业务场景而存在 —— “不是每一家公司都是阿里，你可能并不需要中台”。国内一些公司对DevOps的职责需求可能更靠近“Ops”一点，而基础设施的开发通常叫“工程效能团队” 或 “基础架构组”。

### “云原生开发者 ≈ 全干工程师 ≈ 10xDeveloper ≈ Architect”

如果一个人能够很好的应用云原生的理论和技术，并且适应于云原生的开发模式，那么他实际承担的是架构师的职责了。他需要看到不同维度、不同领域、不同技术，并且选择合适的技术和架构，以应对不断变化的业务场景。

现在大家都用的机械键盘（打字都很快），一个开发者想要完成十倍于人的工作量是很难的，但一个云原生开发者可以利用云原生服务：

- 目标：提升团队、项目、企业的运行效率（10x团队）
  - By：优化了软件开发效率（10x程序员）
  - By：提升了组织沟通的效率（10x催化剂）
- 结果：“10x Developer”

一个更贴切的名称是 —— “全干工程师”。

## 11.Mesh-Shaped 成长模型

在计算机科学范畴内，不同的层级（操作系统、应用软件、分布式应用）和不同的领域（移动端、服务端、云端）下的很多技术原理是一致的。当你学会了某一项原理后，可以快速的“移植”到另一个领域，或是增强某一领域的技能。而在云原生时代，软件的抽象层级变化的更为剧烈（单机、多线程、稳定 -> 云、多机、弹性），CNCF Landscape的项目每天都在变化，如何快速的进入一个新的领域？或是学习一项新的技术？

“以不变应万变” —— 我所理解的云原生时代的开发者/架构师，应该不止于“T” or “π”的能力：多个基础“学科”的扎实功底，在此之上构建起跨学科、跨领域的技术专长，并不断发散以吸收新的知识。

就像很多物理学家都有不错的数学功底，同时还会研读哲学，不同领域的知识能够为他提供不同的视角。

### 就像一张网（Mesh）

每一项技能不再只是一个“有或无”的标签，职业发展也不应该只有一个方向。你所有的知识和技能应该形成一个网状结构，每个点都能与另外的知识和技能产生链接：

- 多个技能叠加buff，战斗力翻倍
- 相辅相成，加深理解
- 借助其他已有技能来学习新技能、熟悉新领域（像消消乐一样）
- 通过拓展边界、增强核心域，不断改变自己的定位（网心）
- Try everything

![skill-mesh](../assets/202203-mesh-shaped-cloud-native-developer/skills.png)

## N.总结：展望未来

"Mesh-Shaped + Cloud-Native = 全新的职业生涯"

### Cloud-Native Developer

> 汽车变速箱的档位越高，能驱动的力就越大，车就跑的越快。齿轮传动（杠杆原理），小齿轮转速不变的情况下，大齿轮越大扭矩越大。
36公斤的力量怎么推动一公吨的车重呢？而且动辄数千转的引擎转速更不可能恰好成为轮胎转速，否则车子不就飞起来了？幸好聪明的人类发明了「齿轮」，利用不同大小的齿轮相连搭配，可以将旋转的速度降低，同时将扭矩放大。由于齿轮的圆周比就是半径比，因此从小齿轮传递动力至大齿轮时，转动的速度降低的比率以及扭矩放大的倍数，都恰好等于两齿轮的齿数比例，这个比例就是所谓的「齿轮比」。

![engine](../assets/202203-mesh-shaped-cloud-native-developer/dual-clutch-transmission-13-1640318081688-0.gif)

云原生开发者就是这个变速箱，能够灵活的选用合适的档位，以驱动不同级别的业务需求：

> “他用了排水渠过弯！甚至还踩了一脚油门！”

### Mesh-Shaped Developer

之前阅读Web 3.0的时候看到一句话很好：

> “只有个体能够构建网络，网络才能围绕个体构建”。

我们通过掌握更多的技能、构建更大的能力网的同时，周围的人、事、物才会被我们的网所吸引和连接，才能有更多的机会创造更多的可能。

> “拓宽边界，不止当下”

---

## 扩展：如何定义架构师

### 架构师：职能要求 Expectation vs Domain 专业领域

But，不是每个人都能成为CTO的，但大多数程序员心里都会有个“小目标” —— 成为架构师。要想成为架构师，我们得先定义什么是架构师？

#### Software Architect

> A software architect is a software development expert who makes high-level design choices and tries to enforce technical standards, including software coding standards, tools, and platforms.

Wiki（现在好像没有这段描述了）上将 Software Architect 分为了三类：

![wiki-type-of-architect](../assets/202203-mesh-shaped-cloud-native-developer/wiki-type-of-architect-1640317457778-0.png)

这样的分类实际上是取决于公司对架构师这个角色的“职能要求”的不同。虽然大多数时候，Enterprise > Solution > Application，但他们并不是包含关系，而是在不同的维度处理各自的问题。e.g. Senior Enterpeise Architect, Head of Solution Architect...

#### Domain Architect

如果将专业领域作为架构师分类的依据，那么就会变成这样：

![domain-type-of-architect](../assets/202203-mesh-shaped-cloud-native-developer/1-6zojnn4sdsd9kylfhr34-a-1640317491743-0.png)

### 开发者：胜任力 Competency vs Archetype 原型

那么，Cloud Architect应该是Solution Architect还是Enterprise Architect呢？在不同的职能要求和专业领域下，对架构师的分类不再是一个简单的 A is B。如果无法对架构师进行一个合理的分类，那就无法定义某一类架构师的职责，也就无法规划一个有效的发展路线。

在做Performance Review的时候，我发现Thoughtworks的[Pathway](https://pathways.thoughtworks.net/)给了一个非常好的模型：

- Role + Grade 是一个对你工作职责（Job Profile）的高度总结，也包含了公司期望你必须具备的技能和产出
    e.g. Developer Senior Consultant，Experience Designer Lead Consultant
- Archetype 则提供了另一个维度来描述你的工作职责 —— 在特定领域的胜任力
- Competency 则是抽象出来的一系列基础能力 e.g. 开发、Consulting、沟通...

![archetype](../assets/202203-mesh-shaped-cloud-native-developer/wx20220320-163559.png)

当你想要从Developer向Tech Lead发展时，能非常清晰的看到目标所需要的核心能力是什么，你欠缺的能力是什么，你所需要补足的是什么。

![archetype-path](../assets/202203-mesh-shaped-cloud-native-developer/wx20220320-163907.png)

而被这样的发展路线所组织起来的各种能力也恰恰形成了 —— “#-shaped”。

## 扩展：知识管理

之前很长一段时间我都是使用的Typora+Trello来做任务管理和知识积累，在我不停拓展技能网的时候，这两个工具不再能满足我的需求了。当我想要构建一个技能网时，我需要把技能网相关的知识结构也都记录下来。

因此，我的代办列表和知识库也需要是“Mesh-Shaped”、离散但又相互连接的，才能够帮助我构建和维护这样的技能和知识。（康威定律？）

最后选用了最近比较火的Logseq，并且已经安利给了很多同事。

### “Logseq!!!”

- [Logseq - Build your own Wiki](202202-logseq-build-your-own-wiki)
- [Logseq - Customized with Clojure and CSS](202212-logseq-customized-with-clojure-and-css)

## Links

### Reports

- SlashData 云原生开发生态 | [The State of Cloud-Native Development 2021 Q1](https://www.cncf.io/wp-content/uploads/2021/12/Q1-2021-State-of-Cloud-Native-development-FINAL.pdf)
- [CNCF 2021年度调查报告](https://mp.weixin.qq.com/s?__biz=MjM5MDE0Mjc4MA==&mid=2651106517&idx=3&sn=fc21f1a29d582fbb483d12f3b6178ac0&chksm=bdb954868acedd90c14e12a9f5675685b560fa043a93b9550bc45406394101d5a7f0be8db044&mpshare=1&scene=1&srcid=0214kerzprubNiE3J0be7HJA&sharer_sharetime=1644822581245&sharer_shareid=eff20db62f686469259d202fc0146a67#rd) | [CNCF-Annual-Survey-2021](https://www.cncf.io/reports/cncf-annual-survey-2021/)
- Datadog 容器使用 | [datadog-container-report](https://www.datadoghq.com/container-report/)
- Datadog 无服务使用 | [datadog-state-of-serverless](https://www.datadoghq.com/state-of-serverless/)
- [Sysdig 2022年云原生安全和使用报告](https://segmentfault.com/a/1190000041422184) | [2022 Cloud-Native Security and Usage Report](https://sysdig.com/blog/2022-cloud-native-security-usage-report)
- [展望架构的 2022：热度居高不下的云原生，如何撑起架构的未来 - 阿里云](https://www.infoq.cn/article/S9wzvZU6BZMpMbkbvVQI)
- [2022 年，云原生领域有哪些值得关注的趋势？ - 阿里云](https://www.infoq.cn/article/KxPztASa2Sfbwo4dZ4iF)
- [解码2022年云原生落地技术趋势 - 微软](https://segmentfault.com/a/1190000041371751)

### CNCF

- CNCF（Cloud Native Computing Foundation）云原生基金会
  - [CNCF-Foundation](https://github.com/cncf/foundation/blob/main/charter.md)

### Architect

- [Types of Software Architects](https://medium.com/@nvashanin/types-of-software-architects-aa03e359d192)
- [Growth Paths at TW](https://docs.google.com/presentation/d/1ia5GdebBrFZoSvXqM5hk9kUXYGaSYFUq46m8Uz8I7E4/edit)
- [Development Career Paths](https://docs.google.com/presentation/d/1O24SOrZN9OTE3oGSZ53e4L2rPxKmt6gPJYroCm_uMzE/edit)
`,Kn=`# Mesh-Shaped Retro

在过去的 2 个月，在 Logseq 的帮助下进行了一段时间“mesh”式的学习和探索。得到了一些新的知识，也遇到了不少的问题，借这个时间点回顾一下，希望能在下半年做的更好一些。

## Good achievements

- 阅读了 3 本书（粗读）
- 阅读了 40+ 篇 Blog/文档，100+篇笔记（长短不一）
- 整理并复习了 DDD、Cloud-Native 的知识图谱
- 持续的贡献开源代码

## Less well

- 一部分“碎片学习”是无效的
- 知识焦虑越来越重
- OKR 优先级和权重失真

## Why

在完成了规划已久的[“Mesh-Shaped”](../2022/202203-mesh-shaped-cloud-native-developer.md)设定之后，这一宏大愿景给了我非常强的信心和动力投身到 “mesh” 式的学习中。借助 Logseq 等工具，我把所关注的公众号、参与的技术群群、关注的社交网络中的大佬，都安排进了我的“knowledge pipeline” —— 通过摘抄、截图、总结把这些知识收集了起来。从编程语言的 tips、到云原生的发展前景、到架构模式的建立、到开源商业的市场逻辑，随着时间的推移，涉及的知识域越来越广。

然而，随着知识域扩展到我不熟悉的领域，并不能通过简单的摘抄就能够理解它。我需要搜索更多的资料，了解更多的背景，而学习的重点也逐渐的偏移了我的 OKR。在我花了整整 3 天时间，才完成了预计 10h 的 GCP ML Fundamental 的学习后，我发现想要学习一个全新的领域，需要的时间、精力是另一个量级的（超出预计），也是很难用碎片化时间去填充的。比如，ML Models 和相关的算法，需要一个非常集中思考的时间，才能够真正学懂的知识。

### 一部分“碎片学习”是无效的

因此，回顾我过去 2 个月的学习时，不少的知识都是碎片且无效的。（包括加入了很多社区群，just 加入）

碎片式学习很适合查漏补缺，比如，在对 DDD 和面向对象有一定了解的前提下，通过参加社区活动和查阅博客，对我以前不理解或有疏漏的概念进行了补充和深入。或者是对于一个具体的问题的调查和研究。

而我收集到的很多“碎片”，只是放在那里，希望我能在它“过气”之前用上它。

### 知识焦虑越来越重

不加限制的阅读导致我的知识焦虑越来越重。什么都想知道，什么都要了解 —— 这并不好。

### OKR 优先级和权重失真

碎片化的学习叠加起来，反而占据了大量的时间，导致 OKR 里的主线任务迟迟没有进展。而且在执行 OKR 时，我也试图用碎片化的方式去做 —— 今天做这个明天看那个，实现了 OKR 的“并发”，然而我并没有多个“线程”来执行他们，最后的后果就是抢占式调度 —— 更慢了。

## 总结

发散很重要，我们需要拓宽眼界和思路，以实现 “曲线救国” 或是 “降维打击”。聚焦也同等重要，保证路不走偏，积蓄力量攻坚克难。

前两天和同事交流“Orchestration vs Choreography”时，有聊到：
> Choreography 是 mesh 式的调用，其实是因为服务间相互不可知。即 Complex（Cynefin）的认知模式下，大家都是黑盒，因此只能依赖相邻的服务一步一步传递信息，实现业务的最终执行
> Orchestration 则是由中心的指挥家总揽全局。因为整个系统对他而言处于 Clear 模式，需要谁做什么、谁先谁后，都心中有数。

反观“Mesh-Shaped”，并不是说所有知识一定是要相互连接，奔着扩大范围走的。而是以点绘面 —— 通过已有的核心点，逐步扩散出新的领域，从而构建更大的范围知识网。

![Orchestration vs Choreography](../assets/202203-mesh-shaped-recap/image-1653875255217-0.png)
`,Qn=`# 容器江湖的刀光剑影 - 图解 K8S 与 Docker 的缘起缘落

![](https://pic2.zhimg.com/v2-8eab1606a489aa28545ed7f984f80b01.jpg)

## 背景

今年在系统学习 Kubernetes 的时候，发现 k8s 为了进一步模块化、兼容化各种云平台和容器运行时，有非常多个接口规范和标准。同时正式的将 Docker 移除，将 containerd 作为默认的容器运行时。因此，为了搞清楚容器变迁中的前因后果，画了一张全景图来分析和归纳各个技术之间的关系和变迁。

_（大部分信息都在图中，因此文字仅作为导读）  
（图文带有主观认知，难免会有错误和误解，仅作学习参考）_

## 天空一声巨响，Docker 闪亮登场

![](https://pic3.zhimg.com/v2-2e5bff692825013e0537ec33fc1bde8e_b.jpg)

Docker 的核心能力 namespace、cgroup 其实早在 08 年前就已经被广泛的运用在 linux 系统上。而当时，提供 “代码和依赖一致” 的能力，也并非是容器首创的。而 Docker 能够打败 Cloud Foundry，靠的其实是 AUFS —— 通过分层文件打造镜像，保证了系统环境的统一。即 代码（应用程序）+ 依赖（后端服务）+ 系统（操作系统） 三位一体，保证了运行的一致性。

![](https://pic2.zhimg.com/v2-23eda6e9882ef84ac4f92543079b3f39_b.jpg)

加之，Docker 还通过 Cli + Docker Hub 的模式，便捷且友好的交互模式降低了容器的准入门槛，赢得了开发者就赢得了未来。（同 Github）

## Kubernetes vs Docker Swarm

![](https://pic4.zhimg.com/v2-ec7c2c677631f7fcb616166676501d43_b.jpg)

当 Docker 完成了单机运行环境的大一统后，就开始计划抢夺各大云厂商的饭碗 —— PaaS 和容器编排。不过，各大云厂（AWS、Azure、GCP、VMWare）背后站的可都是 IT 行业的话事人，不会这么轻易的让出这块蛋糕。因此，2014 年左右，发生了 2 件事改变了 Docker 的命运。

Kubernetes 横空出世，带着 Google 的光环一出场就吸引了全场目光，随后一路走高直接干趴了 DockerSwarm。  
OCI 组织成立（Google Redhat 发起），开始定义各种容器标准，随后 Docker 开始拆分自身组件、实现各式标准和对接各种平台。runc, containerd 在受到社区追捧被更多工具使用时，Docker 这个软件却被慢慢遗忘了，最后只剩下 “docker” 这样一个容器的代称了。

_（如果 Docker 不加入 OCI、不实现标准、不捐赠 runc，现在会是怎么样呢  
（最近 Istio 终于也加入 CNCF 了 ..._

## OCI 开放容器接口

![](https://pic4.zhimg.com/v2-505c8cfaeac6e5042330af60890c9813_b.jpg)

Linux 基金会下的 OCI 定义了 Runtime（运行时） + Image（镜像）标准，以便根据用户的使用情况选择不同的容器运行时，如 能基于 hypervisor 提供强隔离性的 KataContainer，基于系统调用拦截的 gVistor 等。

“OCI 容器” 通常是指的容器运行时，即如何创建容器、管理镜像的底层功能。

## Kubernetes 占领高地

![](https://pic2.zhimg.com/v2-98750bc5070732faf351a1e71fd8d7a9_b.jpg)

Kubernetes 通过开源运作不断吸引开发者，开发者影响技术决策，从而逐渐占据企业市场，最终赢得了容器编排大战的胜利，当前 k8s 以成为容器编排的事实标准，AWS、Cloud Foundry 这些在容器之前就已经有 PaaS 平台能力的云厂，份额也在不断的被 k8s 蚕食。

k8s 本质是一个 PaaS 平台，为了对接不同的实现，比如 容器运行时、网络传输、云服务组件，也抽象出了很多接口，即 CRI、CNI、CSI、CCM 等。

为什么剔除 Docker（dockerd） 也是因为对于 k8s 来说，并不需要 Docker 的上层功能，仅需要能够操纵容器的运行时组件即可。而这部分能力恰好就是在 Docker 演进过程中，被拆分出来的 containerd。因此 containerd 被纳入到 CRI 标准中，随后被捐赠给 CNCF，作为 k8s 默认的容器运行时实现。

## “容器运行时”

我们在翻阅文档时，通常会看到两种容器运行时：

- CRI 是为支持 k8s 工作而定义的，主要目的是调用底层运行时来构建 pod = 多容器、共享网络和存储
- OCI 则相对更底层一点，主要目的是调用内核功能来构建容器

有一种说法是 containerd 等用于支持 k8s 等 PaaS 平台功能的运行时，被称为 High-Level 运行时，除了容器、镜像外，还拥有管理网络、存储等能力。而 runc 这种直接对接操作系统内核，只关注于容器本身的即为 Low-Level 运行时。

## Shim

Shim 也是一个常出现但让人误解的词，在翻阅了一些资料后，我发现 “Shim - 垫片” 就是一个技术词汇，出现在各处的定义不同。

![](https://pic2.zhimg.com/v2-c48f1605cadaf38cb90e1222da20aa51_b.jpg)

在 docker 的语境下，shim 指的是 mangager(containerd) -> container(runc) 这一层

![](https://pic3.zhimg.com/v2-556e53e5bd8477861db967326775af6e_b.jpg)

在 k8s 的语境下，shim 指的是 CRI client(kubelet) -> runtime(docker/containerd) 这一层

> _因为一开始 k8s 只支持 docker，所以使用 dockershim 做了一层桥接；而后使用 CRI-containerd 操作时，其实就不存在 shim 这一层了_

![](https://pic1.zhimg.com/v2-6a94ea5611ac846c8064fc1b2998da30_b.jpg)

在 containerd 的语境下，shim 指的是 OCI client(containerd) -> runtime(runc) 这一层

## 参考资料

- [9000字长文复盘Docker兴衰，从容器大战史推演基础软件投资](https://link.zhihu.com/?target=https%3A//mp.weixin.qq.com/s%3F__biz%3DMzkzMTM1MDEyOA%3D%3D%26mid%3D2247483673%26idx%3D1%26sn%3D405f481ab19f928bb85add017201fb1c%26chksm%3Dc26d1206f51a9b107de1d80d91e29c4e7c6c6edaa6e6809b0040ee3aa08c1524563b8cd43ac8%26mpshare%3D1%26scene%3D1%26srcid%3D05304k7ldEAcPcXbuNW6G4Lu%26sharer_sharetime%3D1653886191829%26sharer_shareid%3Dd1c27a97d2ae54cfe57aae2b6d670930%23rd)
- [Dockershim：历史背景](https://link.zhihu.com/?target=https%3A//kubernetes.io/zh-cn/blog/2022/05/03/dockershim-historical-context/)
- 容器江湖的爱恨情仇 - Thoughtworks中国的文章 - 知乎 [https://zhuanlan.zhihu.com/p/523574407](https://zhuanlan.zhihu.com/p/523574407)
- [Kubernetes容器平台，从繁荣走向碎片化](https://link.zhihu.com/?target=https%3A//mp.weixin.qq.com/s%3F__biz%3DMzI5ODQ2MzI3NQ%3D%3D%26mid%3D2247507046%26idx%3D1%26sn%3D1c8f205730fb3b7b9519725b7d7730d0%26chksm%3Deca7e522dbd06c34be089b740b710238168da8009b111a44deadc89f08ea98b31a466d9dd95e%26mpshare%3D1%26scene%3D1%26srcid%3D0405CZnlY42ne6yorySr9VG5%26sharer_sharetime%3D1649166099552%26sharer_shareid%3Dd1c27a97d2ae54cfe57aae2b6d670930%23rd)
- [Kubernetes: The Documentary \\[PART 1\\]](https://link.zhihu.com/?target=https%3A//www.youtube.com/watch%3Fv%3DBE77h7dmoQU)
- [Kubernetes: The Documentary \\[PART 2\\]](https://link.zhihu.com/?target=https%3A//www.youtube.com/watch%3Fv%3D318elIq37PE)
- [K8s宣布弃用Docker，千万别慌！](https://link.zhihu.com/?target=https%3A//mp.weixin.qq.com/s/GHjvvTJ8ZerIyCqXB1BSUQ)
`,Jn=`# 路由 vs 代理 vs 网关

在阅读[《为什么需要可编程代理》](https://mp.weixin.qq.com/s/B0LVmFvI7kFtjFEM0FG_zw)的时候，发现在云原生网关的变迁史中，频繁的出现了“路由、代理、网关”。而我们日常所用的技术中心，也有不少的软硬件设备和这三个概念有关系，如路由器、代理服务器、API 网关等。让我产生了好奇，这三个概念有具体的联系吗？

在翻阅了部分资料后，大致做了一些总结。

## 路由 —— “move packets between networks”

- 路由器
  - 硬件路由
    - 路由器工作在网络的 3 层；
    - 对其通信两端来说都是透明的，内外网的主机不会查觉中间有路由器参与了操作；
    - 路由器可以工作在低层，通过直接转化网络地址来转发数据包，它比代理服务器的速度要快；
  - 软（件）路由
    - 结合软件的功能，通过拦截数据包来修改和转发到目标地址
    - (软路由更接近于代理服务器)

## 代理 —— 「代为处理」

- 代理服务器
  - 代理工作在 3 层以上，通常是 4 层和 7 层；
  - 局域网中只有代理服务器能上网，只能依托代理服务器进行数据请求和接收，然后再转发；
    - perform some useful service such as caching HTTP content, applying application-level filtering and authorization functions and so on
  - 不同的代理服务器提供不同的服务，通常提供WWW、FTP等常见服务；
  - 代理通常连接的是两个或多个使用相同协议栈的端点(转发为主)；
  
- 代理方式
  - 正向代理 代理外部地址 翻墙
    - NAT 通过解包，替换目标地址/端口
  - 反向代理 为内部多个机器提供统一的对外地址
    - 负载均衡 对一组相同功能的机器进行的反向代理
      - (负载均衡是目的，反向代理是实现方式)

## 网关 —— 「网络关口」

- 网关
  - 网关是一个概念，不具体特指一类产品，只要连接两个不同的网络的设备都可以叫网关；
  - 网关通常连接的是两个或多个使用不同协议的端点(协议转换)；
  - 广义的网关：有进有出即为网关
  - 狭义的网关
    - IP路由过程中的网关：子网的关口，所有对子网的访问需要先向网关(默认网关)寻址
      - [网关和路由器的区别是什么？](https://www.zhihu.com/question/21787311)
    - API网关：对HTTP API进行拦截、监控、修改、转发

## 总结

![Route vs Proxy vs Gateway](../assets/202205-router-proxy-gtw/2022-05-25-10-21-15.png)

> ps: 还顺便研究了一下 excalidraw 添加中文字体:
>
> - Issue：<https://github.com/excalidraw/excalidraw/issues/5245>
> - Spike：<https://github.com/Anddd7/excalidraw/commit/97eca3fd347c9d3f3875996e7c49585307264e4e>
> - Demo：<https://excalidraw-anddd7.vercel.app/>
`,Xn=`# 实现云原生：从技术创新到工程落地

| 版本 | 修改                   | 时间    |
| ---- | ---------------------- | ------- |
| v0.1 | 脑洞                   | 2022-11 |
| v0.2 | 大纲                   | 2023-05 |
| v0.3 | 大纲重构，主要章节划分 | 2023-08 |
| v0.4 | 引言和第一章           | 2023-08 |

## 引言

在当今快速变化的数字化时代，云原生已经成为企业实现敏捷、创新和可扩展性的关键策略。随着市场竞争的日益激烈，传统的软件开发和部署方式已经无法满足迅速变化的业务需求。云原生作为一种全新的方法论和技术范式，旨在通过将应用程序和基础架构无缝结合，使组织能够更快速地交付软件、更高效地响应市场变化，并在不断演化的环境中保持竞争优势。

![Cloud-Native](../assets/202211-cloud-native-engineering/image-17.png)
![Cloud-Native](../assets/202211-cloud-native-engineering/image-18.png)

“降本增效” —— 是企业上云的主要目标之一，也是企业数字化转型的重要驱动力。得益于云计算、DevOps、微服务架构、自动化运维等技术的发展，云原生技术围绕 “构建**容错性好**、**易于管理**和**便于观察**的松耦合系统。结合可靠的**自动化**手段，能够轻松地作出**频繁**和**可预测**的重大变更。” 这一目标，为企业提供了一系列的软件开发理论、实践方法和中间件工具。

![原生于云的软件架构](../assets/202211-cloud-native-engineering/image-16.png)

<!-- TODO 引出方法论、组织结构的重要性，需要多方配合 -> 即工程化体系 -->
<!-- TODO 云原生涌现了很多技术，但缺乏一个有效的方案指导企业实现云原生，大多数时候我们都只是在引入中间件而已 -->

然而，要真正实现降本增效，仅仅依靠技术的创新是无法达成的。云原生强调的松耦合、弹性扩展、自动化等原则，不仅需要开发运维的紧密合作（DevOps），引入高效的工具和系统，业务部门也需要积极参与其中（BizDevOps），以敏捷的、快速的方式传递并交付业务价值。因此，落地云原生不是要堆砌技术工具，而是需要**建立新的工程体系，结合思维方式和组织文化的变革**，实现团队的高效协作、快速交付和持续创新。

本文将探讨如何构建云原生的工程体系，如建立标准化能力、明确职责划分、推动组织文化变革，以帮助不同阶段的企业落地云原生。

> （免责声明叠甲）本文所述内容仅代表作者个人的观点，供参考但不对最终实践结果负责。

## 第一章：云原生工程

> 工程 —— 在资源有限的情况下通过合理的规划、设计和管理，实现预期目标

### 什么是工程

工程（化）是指将某种系统的、可重复的方法应用于特定领域或任务，以提升效率、质量和可维护性。工程化关注过程、规范、标准化、自动化和持续改进，以确保产品在各个阶段都能保证高质量。工程思想包括：解决复杂问题并构建高效的解决方案，将问题分解为更小的组成部分，制定明确的流程和步骤，利用数据和分析来支持决策，以及持续改进。例如：

- 制造业：制造业依赖工程方法来设计和制造产品，包括流程优化、质量控制和成本效益的考虑。
- 航空航天工程：在设计、构建和测试航空航天器时，工程思想至关重要，因为安全性和可靠性是最高优先事项。
- 建筑工程：建筑行业涉及大规模的工程项目，工程化方法用于规划、设计、施工和维护建筑物和基础设施。
- 能源和环境工程：解决能源供应和环境问题需要综合的工程方法，考虑资源利用、环境影响和可持续性。
- 软件工程：软件系统变得越发复杂而庞大，也需要建立对应的工程方法，以确保软件应用的质量、可维护性和可扩展性。
  - [在大学学科划分中 5204070 软件工程也是计算机众多分支中的一门独立学科](https://www.zhihu.com/question/24292554)。
  - 软件工程是关于构建和维护大规模软件系统的一门学科。
    - 它注重通过规范的过程、方法和工具来管理软件开发项目，以确保软件按照预期的质量、时间和成本要求完成。
    - 它强调团队协作、项目管理、质量保证和软件生命周期管理等多个方面。
    - 它的目标是在现实环境中开发出可靠、高质量、易维护的软件，同时关注了软件的可扩展性、可维护性和鲁棒性。

计算机技术的发展和软件工程的建立是螺旋上升的，单一的技术创新通常包括很多的前提和假设，在进入实际生产时可能会遇到很多问题，例如：

1. **不稳定性和不可靠性**：缺乏系统性测试的创新的技术可能存在不稳定性和不可靠性。
2. **缺乏可维护性**：工程通常要求产品具备必要的文档、规范和标准，有助于保持系统的可维护性。
3. **风险管理困难**：工程通常要求进行风险评估和管理的流程。缺乏这些方法可能导致对潜在风险的忽视，从而可能在未来出现意外问题。
4. **项目管理挑战**：缺乏系统化管理可能导致项目管理困难，包括进度延误、资源浪费和沟通混乱。
5. **不符合法规和标准**：在某些行业中，遵循特定法规和标准是必要的。

尽管科学技术是推动生产力进步的关键，但缺乏工程方法（规章制度）可能导致产品的不稳定性、不可维护性和风险增加。

### 什么是云原生工程

在过去的几年，云原生技术高速发展，各种新的技术和工具层出不穷 [CNCF Landscape](https://landscape.cncf.io/)，但是在实际的落地过程中，很多企业都遇到了各种各样的问题，比如：

- 云原生工具太多，不知道如何选择
- 技术体系不成熟，缺乏标准化能力
- 团队成员能力不足，无法快速上手
- 流程不清晰，无法有效的协作
- 技术侧难以阐述价值，无法获得业务部门的支持
- 成本不降反升，无法实现降本增效
- ...

这些云原生技术大多是在解决一个已知的特定领域的问题，例如容器编排、可观测性、自动化运维等。然而，对于企业而言，云原生的落地并不是一个简单的技术问题，还包括人员、组织和流程等各个方面的问题。**复杂问题没有简单解**，企业想要落地云原生首先要明确问题域，当前的痛点是什么、需要解决什么问题、如何解决这些问题，然后再选择合适的技术和工具逐步完成。

**云原生工程体系**即希望通过定义一套系统性、标准化的方法和指南，为企业上云、DevOps、研发提效等活动提供指导。它涵盖了从问题定义、团队划分、系统设计、开发、测试到持续改进等各个环节的方方面面，以协调、管理和优化各种资源和活动。

\`\`\`txt
“对整个业务进行复盘，并删除我们没有能力交付的邻接业务；彻底检查整个业务的复杂性，即流程、结构、制造、配送中心；深入了解客户和消费者的需求，建立持续评审流程并进行相应调整。” —— 乐高 巴利·帕达
\`\`\`

#### 目标

云原生工程化体系 PoV

- 企业落地云原生的 Runbook
- 可供参考的组织演进路线，包括组织结构、流程和关键能力
- 可供参考的关键能力项，包括技术工具、理论知识、实践方法
- ...

#### 受众

- 技术负责人：关注划分团队职责、组织结构和培养人员能力
- 架构师：关注技术选型和架构设计
- 运维：关注关键能力
- 开发：关注关键能力
- ...

#### 适用场景

- 企业上云，降本增效
- 降低云原生复杂性
- 平台团队价值呈现
- DevOps，研发效能提升
- FinOps，降低成本
- 微服务改造、容器化改造、可观测性...

## 第二章：落地云原生的关键要素

唯一不变的是变化本身，在企业发展的过程中，技术、业务、组织无时无刻都在变化，云原生工程体系也需要不断的演进，或者说它本身就是演进式的。

- 不同的角色和团队面临的问题是不同的，需要不同的方法和工具来解决这些问题。
- 不同的阶段，企业面临的问题和需要解决的痛点也是不同的，需要不同的角色和团队来解决这些问题。

“「复杂性」会逐渐渗入任何人类组织。
新举措、新的管理层级、新部门、缺乏市场调研的复 杂新产品、高杠杆率又花哨的复杂金融工具——这些都会增加管理中的复杂性，并且这种复杂性的增长是指数级的，而不是线性的。请始终尽一切可能降低复杂性。” —— 乐高 巴利·帕达

<!-- TODO: 以标准化、降低复杂性为主要目的 -->
因此，这个体系会分为两部分

- 价值流图：以团队交付为视角，描述某一个阶段的问题，定义不同的角色和团队，以及他们需要解决的问题和提供的价值
- 演进状态图：以组织演进为视角，描述团队在迁移到下一个阶段时，会出现哪些变化、如何应对这些变化、需要构建哪些能力

其中，主要元素包括

- 标准化能力
  - 技术的和非技术的能力
  - 标准化的，以解决问题为导向的能力
  - 通过某种技术或工具来实现，可复用可替代
- 职责划分与团队组织
  - 角色的职责划分 Role and Responsibility
  - 协作方式 topology
- 组织演进与文化变革
  - 不同行业的组织特征
  - 如何转型到云原生团队
  - 文化的变革：敏捷、DevOps、BizDevOps
  - 组织的演进：小团队、中型团队、大型团队、超大型团队

### 标准化能力

技术能力

- 容器编排
- GitOps
- IaC
- ...

非技术能力

- 项目管理
- 产品管理
- 人员管理
- ...

> 需要思考出一个合理的能力分层，更面向实现、可操作层面的
>
> 云原生模型：API + 微服务 + devops ...
> DI 模型(infra): IaC + ... + ...
> DPS 模型：API + DI + ...

- 制定技术标准和最佳实践
- 统一的容器镜像管理
- 基础设施即代码（Infrastructure as Code）

### 职责划分与团队组织

devops team topologies

- [The Art of Platform Thinking | Thoughtworks](https://www.thoughtworks.com/insights/blog/art-platform-thinking)

平台工程

- 根据 Atlassian 的说法，“平台团队创建可以由众多流程对齐的 [产品] 团队使用的功能，减少了流程对齐 [产品] 团队的资源和认知负荷…… 平台团队可以创建跨不同用户体验或产品的连贯体验。”
- 根据 Martin Fowler 和 Evan Bottcher 的说法，“数字平台是一个自助式 API、工具、服务、知识和支持基础，按照一个引人注目的内部产品的方式组织。自治交付团队可以利用该平台以更高的速度交付产品功能，并减少协调。”
- [CNCF 平台白皮书发布](https://mp.weixin.qq.com/s/z6i09qkCaoI79gH4O70skA)
- <https://tag-app-delivery.cncf.io/whitepapers/platforms/>

- 重新定义角色和组织
  - role 角色
    - cloudops, devops, sre
  - 组织
    - 产品型
    - 项目型
    - 中台
    - ...
  - 演进方向
    - ...

- 制定云原生团队的角色和职责
- 跨部门协作和沟通
- DevOps文化的培养

### 组织演进与文化变革

标准化能力 —— 基本模块
组织结构 —— 蓝图（将标准化能力分配给不同的角色和团队）
流程 —— 使能和连接点（将组织调动起来，实现目标）

一个组织有计划、有规模的采用某种能力，以实现组织的某种目标，这就是工程。

- Dev（研发团队）- DevOps（赋能团队） - SRE（平台团队） - Ops（云平台）

演进

- 小团队： | 4. DevOps as an External Service ，将 Ops 托管出去，通过插件化、服务化来运维产品
- 中型团队： | 6. DevOps Advocacy Team 随着组织扩大，Dev 和 Ops 的内容变的更多，DevOps 不再只关注当前产品，会需要考虑运维的特殊需求
- 大型团队： | 7. SRE Team 随着组织进一步扩大，运维的产品越来越多，通过建立 SRE 团队来为组织建立统一的标准和工具链；DevOps 不再需要和 Ops 直接接触，而是使用 SRE 为组织量身打造的产品和“服务”
    collapsed:: true

- SRE = CloudOps，DevOps = 平台工程, Ops = 云平台/基础设施
  - SRE 提供统一的工作流程和工具链
  - Dev 通过使用这些预制工具来实现 DevOps
  - case 1 ...
    - 处于某个阶段的组织，具有 ... 的特性
    - 我们应采取 ... 等能力，以应对 ... 变化（当前阶段为什么需要这些能力，可以完成什么样的工作）
    - 当组织演进到 case x 时，我们应准备 ... （对演进方向的阐述，加上需要扩展的能力）
  - case 2 ...
    - ...

- 从传统架构到云原生的演进阶段
- 重塑组织文化，促进敏捷和创新

## 第三章：演进路线和案例分析

根据第二章的组织演进和文化变革，我们以更实际的案例来说明云原生工程体系的落地过程。

- 以组织规模为主线
  - 10 25 50 99 中小型团队 ds omj payme
  - 100 150 250 大型团队 payme ds nanyue
  - 299+ 超大型团队 asiainfo
- 每一条线都有：标准组织 行业特征
  - 目标 方向 难点
  - 人员 能力

### 价值呈现

如何通过云原生工程化，实现价值的呈现

- 为什么要上云
- 为什么要下云

- 内部云平台团队如何发展？
- 平台团队并不拥有资源（归属于数据中心），只是封装了一些接口
- 出了问题后，不好定位（会首先 target 到平台团队，但可能 rootcause 在数据中心）
- 如何有效的获取业务团队的需求，然后持续的演进

回答的都是一个价值问题，在不同的组织、不同的阶段，需要解决的问题和提供的价值是不同的
这也是云原生化最难的一个点，只是采购几个工具，或者买几个云产品是解决不了问题的
因此也没有一个适合所有公司所有行业的上云方案

通过上述 能力 x 组织 的阐述，我们可以

- 分析：当前的组织处于什么阶段；当前的团队具备哪些能力；组织的下一个阶段是什么，面对的问题是什么，需要具备哪些能力才能解决这些问题
- 设计：如何调整组织结构，如何培养团队能力，如何选择工具和技术
- 计划：时间线、参与方、资源投入
- 实施：迭代式演进 + 评估效果 + 调整计划
- 总结：总结经验，形成最佳实践
- 迁移：将经验迁移到另一个组织继续实施，或者迁移到另一个阶段

### 行业案例分享：企业X的云原生之旅

- 企业X的背景和挑战
- 云原生引入的具体技术和策略
- 实施过程中的经验教训和收获

### 成功的关键因素总结

- 从实践案例中总结的成功因素
- 如何在不同组织阶段应用这些因素

## 完结篇：云原生下一站

### 云原生技术的未来发展方向

- 新兴技术和趋势展望
- 对云原生从业者的技能要求

### 面向未来的建议

- 如何持续推动云原生落地和发展
- 培养人才，促进知识分享和交流

## 附录

### 参考资料

- ChatGPT
- <https://martinfowler.com/articles/talk-about-platforms.html>
- <https://www.zhihu.com/question/24292554>
- <https://mp.weixin.qq.com/s/sRRqJS8dOrtbTrnef16eUQ>
`,Yn=`# API Design - inspired by google api design

## URL

面向资源（Resource）的API设计：“资源”是被命名的实体，“资源名称”是它们的标识符。资源名称由资源自身的 ID、任何父资源的 ID 及其 API 服务名称组成：

| API 服务名称             | 集合 ID  | 资源 ID           | 集合 ID   | 资源 ID     |
| :----------------------- | :------- | :---------------- | :-------- | :---------- |
| //storage.googleapis.com | /buckets | /bucket-id        | /objects  | /object-id  |
| //mail.googleapis.com    | /users   | /name@example.com | /settings | /customFrom |

Examples:

- 完整资源名称：\`//library.googleapis.com/shelves/shelf1/books/book2\`
- 相对资源名称：\`shelves/shelf1/books/book2\`
- 非末尾的资源ID有且仅有一个网址段，末尾的资源ID可以有多个网址URI段：\`server/server1/files/source/py/parser.py\`
  - 网址：通过对资源名称进行转码 = 协议 tcp http + 版本 v1 v2
    > Pattern: \`<protocol>:<service-name><version><collection-id>...<resource-id>\` \\
   > E.g. \`//calendar.googleapis.com/users/john smith/events/123\` \\
   > E.g. \`https://calendar.googleapis.com/v3/users/john%20smith/events/123\`

## Method

### 标准方法 Standard methods

| 标准方法                                                                 | HTTP 映射                     | HTTP 请求正文 | HTTP 响应正文             |
| :----------------------------------------------------------------------- | :---------------------------- | :------------ | :------------------------ |
| [\`List\`](https://cloud.google.com/apis/design/standard_methods#list)     | \`GET <collection URL>\`        | 无            | 资源*列表                 |
| [\`Get\`](https://cloud.google.com/apis/design/standard_methods#get)       | \`GET <resource URL>\`          | 无            | 资源*                     |
| [\`Create\`](https://cloud.google.com/apis/design/standard_methods#create) | \`POST <collection URL>\`       | 资源          | 资源*                     |
| [\`Update\`](https://cloud.google.com/apis/design/standard_methods#update) | \`PUT or PATCH <resource URL>\` | 资源          | 资源*                     |
| [\`Delete\`](https://cloud.google.com/apis/design/standard_methods#delete) | \`DELETE <resource URL>\`       | 不适用        | \`google.protobuf.Empty\`** |

Examples:

- \`GET /shelves/shelf1/books?page_size=2&page_token=3\`
  - > 仅适用于获取集合资源；分页、结果排序；过滤字段、结果字段；
- \`GET /shelves/shelf1/books/book2\`
- \`POST /shelves/shelf1/books\`
- \`PUT /shelves/shelf1/books/book2\` or \`PATCH /shelves/shelf1/books/book2\`
  - > PUT 全量更新；PATCH 部分更新，配合[FieldMask](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#field-masks-in-update-operations)指定哪些字段会被更新；
- \`DELETE /shelves/shelf1/books/book2\`
  - > 数据保持一致，但是只有第一次会删除成功返回Empty，后续返回NOT_FOUND

### 自定义方法 Custom methods

| 方法名称   | 自定义动词  | HTTP 动词 | 备注                                                                                                                                                                                            |
| :--------- | :---------- | :-------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \`Cancel\`   | \`:cancel\`   | \`POST\`    | 取消一个未完成的操作，例如 [\`operations.cancel\`](https://github.com/googleapis/googleapis/blob/master/google/longrunning/operations.proto#L100)。                                               |
| \`BatchGet\` | \`:batchGet\` | \`GET\`     | 批量获取多个资源。如需了解详情，请参阅[列表描述](https://cloud.google.com/apis/design/standard_methods#list)。                                                                                  |
| \`Move\`     | \`:move\`     | \`POST\`    | 将资源从一个父级移动到另一个父级，例如 [\`folders.move\`](https://cloud.google.com/resource-manager/reference/rest/v2/folders/move)。                                                             |
| \`Search\`   | \`:search\`   | \`GET\`     | List 的替代方法，用于获取不符合 List 语义的数据，例如 [\`services.search\`](https://cloud.google.com/service-infrastructure/docs/service-consumer-management/reference/rest/v1/services/search)。 |
| \`Undelete\` | \`:undelete\` | \`POST\`    | 恢复之前删除的资源，例如 [\`services.undelete\`](https://cloud.google.com/service-infrastructure/docs/service-management/reference/rest/v1/services/undelete)。建议的保留期限为 30 天。           |

Highlights:

- 使用\`:\`而非\`/\`来分隔自定义动词和资源名称，e.g. \`POST /files/a/long/file/name:undelete\`
  - > 使用自定义方法表达业务动作：提拔员工、完成配送（类似黑马业务能力表的设计）

### Example (works in Spring/Micronaunt)

\`\`\`kotlin
// controller
@RestController
@RequestMapping("/google")
class GoogleStyleController {
  @GetMapping("/{id}")
  fun get(@PathVariable id: String): String = URLDecoder.decode(id, Charset.defaultCharset())

  @GetMapping("/{id}:print")
  fun print(@PathVariable id: String) = "@<\${URLDecoder.decode(id, Charset.defaultCharset())}>@"
}

// controller test
@ActiveProfiles("test")
@WebMvcTest(GoogleStyleController::class, excludeAutoConfiguration = [SecurityAutoConfiguration::class])
internal class GoogleStyleControllerTest {
  @Autowired
  private lateinit var mvc: MockMvc
  private val id = "1a!@#\\$%^&*():print" // 如果id存在特殊字符，需要encode避免":"被误解
  private val encoded = URLEncoder.encode(id, Charset.defaultCharset())

  @Test
  fun \`should get things\`() {
      mvc.get("/google/\${encoded}").andExpect { content { string(id) } }
  }

  @Test
  fun \`should print things\`() {
      mvc.get("/google/\${encoded}:print").andExpect { content { string("@<\${id}>@") } }
  }
}
\`\`\`

## Standard Fields & Header

- 标准字段：根据项目类型、行业特征指定一些API的标准字段，比如分页参数、audit信息、auth信息等，保证整个系统API的一致性和可读性
- 系统参数：同上，并包括Header中的一些参数（仅供参考）
  - \`X-HTTP-Method-Override\`：请求的预期 HTTP 方法。部分网络代理不接受所有 HTTP 方法。（AWS API Gateway）
  - \`passwd/password\`：避免将密码或credentials放入网址
  - \`X-Goog-Request-Reason, X-Server-Timeout\`
  - \`X-RESOURCE-ID\`：创建完成的资源ID（如果Create方法不返回任何数据的话）

## Error

- 使用统一的Code，且不提倡自由扩展：面向数据和行为设计，而非业务场景
- 通过不同的上下文来对Code进行解释和相应
- 能够映射到某一个确定的HttpStatus

> CODE：A simple error code that can be easily handled by the client. \\
> Message：A developer-facing human-readable error message in English. \\
> Details：Additional error information that the client code can use to handle the error, such as retry info or a help link.

### 重试

客户端可根据（可重试的）Code设计重试策略：重试次数、重试间隔、长任务后台作业

### 传播错误 Propagating / Reproducing

由于上游服务错误导致的服务器错误

- 隐藏实现详细信息和机密信息
- 调整负责该错误的一方：从调用者角度看，无论服务器是因为何种原因发生错误，对调用者的响应结果是一定的
  - Get 资源，依赖上游服务404：404
  - List 资源，部分依赖上游服务404：200 with partial data
  - ...

### Status Code (for example)

> [REST API status code for upstream service failure?](https://stackoverflow.com/questions/26639172/rest-api-status-code-for-upstream-service-failure)

| HTTP | gRPC                  | 错误消息示例                                        |
| :--- | :-------------------- | :-------------------------------------------------- |
| 400  | \`INVALID_ARGUMENT\`    | 请求字段 x.y.z 是 xxx，预期为 [yyy, zzz] 内的一个。 |
| 400  | \`FAILED_PRECONDITION\` | 资源 xxx 是非空目录，因此无法删除。                 |
| 400  | \`OUT_OF_RANGE\`        | 参数“age”超出范围 [0,125]。                         |
| 401  | \`UNAUTHENTICATED\`     | 身份验证凭据无效。                                  |
| 403  | \`PERMISSION_DENIED\`   | 使用权限“xxx”处理资源“yyy”被拒绝。                  |
| 404  | \`NOT_FOUND\`           | 找不到资源“xxx”。                                   |
| 409  | \`ABORTED\`             | 无法锁定资源“xxx”。                                 |
| 409  | \`ALREADY_EXISTS\`      | 资源“xxx”已经存在。                                 |
| 429  | \`RESOURCE_EXHAUSTED\`  | 超出配额限制“xxx”。                                 |
| 499  | \`CANCELLED\`           | 请求被客户端取消。                                  |
| 500  | \`DATA_LOSS\`           | 请参阅备注。                                        |
| 500  | \`UNKNOWN\`             | 请参阅备注。                                        |
| 500  | \`INTERNAL\`            | 请参阅备注。                                        |
| 501  | \`NOT_IMPLEMENTED\`     | 方法“xxx”未实现。                                   |
| 503  | \`UNAVAILABLE\`         | 请参阅备注。                                        |
| 504  | \`DEADLINE_EXCEEDED\`   | 请参阅备注。                                        |

## Naming Convention

| API 名称       | 示例                                 |                                                                               |
| :------------- | :----------------------------------- | ----------------------------------------------------------------------------- |
| **产品名称**   | \`Google Calendar API\`                | 营销名称，与书面描述、商标等一致                                              |
| **服务名称**   | \`calendar.googleapis.com\`            | 语法上有效的 DNS 名称（遵循 [RFC 1035](http://www.ietf.org/rfc/rfc1035.txt)） |
| **软件包名称** | \`google.calendar.v3\`                 | 单数组件名称                                                                  |
| **接口名称**   | \`google.calendar.v3.CalendarService\` | 区别于服务名称，API的抽象定义                                                 |
| **来源目录**   | \`//google/calendar/v3\`               |                                                                               |
| **API 名称**   | \`calendar\`                           |                                                                               |

### （接口）方法名称：VerbNoun

方法名称的动词部分**应该**使用用于要求或命令的[祈使语气](https://en.wikipedia.org/wiki/Imperative_mood#English)，如果关于 API 子资源的方法名称使用提问动词（经常使用陈述语气表示），则容易让人混淆。例如，要求 API 创建一本书，这显然是 \`CreateBook\`（祈使语气），但是询问 API 关于图书发行商的状态可能会使用陈述语气，例如 \`IsBookPublisherApproved\` 或 \`NeedsPublisherApproval\`。若要在此类情况下继续使用祈使语气，请使用“check”(\`CheckBookPublisherApproved\`) 和“validate”(\`ValidateBookPublisher\`) 等命令。

方法名称**不应**包含介词（例如“For”、“With”、“At”、“To”）。通常，带有介词的方法名称表示正在使用新方法，应将一个字段添加到现有方法中，或者该方法应使用不同的动词。例如，如果 \`CreateBook\` 消息已存在且您正在考虑添加 \`CreateBookFromDictation\`，请考虑使用 \`TranscribeBook\` 方法。

### 消息（对象）名称

- （形容词）+名词：无二义性时，形容词可省略
- **不应**包含介词（例如“With”、“For”）（带有介词的消息名称可以通过消息上的可选字段来更好地表示
  - 请求响应使用Request、Response进行区分
  - 除非请求和响应刚好是：
    - Empty
    - 某一个资源类型：通常用于标准方法中
    - 某一个操作：通常用于自定义方法中

### 字段名称

- **不应**包含介词
- **不应**使用后置形容词

### 时间与日期

- 使用Timestamp
- **应该**以 \`time\`（例如 \`start_time\` 和 \`end_time\`）结尾
- （与时区和时段无关的日期）
  - 使用LocalDate（ ISO 8601 日期格式 YYYY-MM-DD）
  - 应具有后缀 \`_date\`
- （与时区和日期无关的时间）
  - 使用LocalTime（ ISO 8601 24 小时制格式 HH:MM:SS[.FFF]）
  - 应具有后缀 \`_time\`

### 数量

- 整数数量必须带单位: xxx_{bytes|width_pixels|meters}
- 数量是条目计数，则该字段**应该**具有后缀 \`_count\`

### 列表

- 过滤字段：\`filter\`
- 响应：\`ListEventResponse { events: [..., ...] }\`

### 缩写

- 对于软件开发者熟知的名称缩写，使源代码易于读写...

## Implementation Tips

### 空响应

- 标准Delete应返回空
- “软”删除返回状态已更新的资源（表示正在删除）
  - 此处“软”删除是指对于正常List/Get不可见，但仍可以通过自定义查询获得结果的“条件隐藏式删除”
- 自定义方法一定要有Response：便于后续接口修改和维护

### 耗时操作/异步操作 Long Running Operations

- 异步API会返回标准的Operation对象（异步句柄）
  - List、Get、Delete、Cancel
- 基于Operation查询异步操作的结果
- 即使没有完成，原资源也可以通过List、Get进行查询
  > 例如，在创建资源时，即便资源表明其尚未准备就绪，该资源也**应该**出现在 LIST 和 GET 方法中。

### 分页

- request
  - \`page_size\`: 结果数
  - \`page_token\`: 分页令牌，请求特定页
- response
  - \`next_page_token\`：下一页的分页令牌

> 1. The page token is useful when you don't want users to move to the any given page without fetching first results. Since the next page token is only received when you access the previous page, users won't be able to cache a search and access content later. So the end users can't skip promoted (advertised) content.
> 2. Can't do parallel requests \\

links:

- <https://softwareengineering.stackexchange.com/questions/313382/paging-strategies-page-token-vs-skip-start-index>
- <https://stackoverflow.com/questions/35369966/why-use-pagination-tokens>
- <https://softwareengineering.stackexchange.com/questions/351271/api-pagination-how-to-implement-page-token-paging-method>

### 排序

- 使用额外的字段\`order_by="foo,bar desc"\`，默认asc

### 子集合（跨父集合）

- 使用\`-\`通配标识跨父集合（\`-\`可以避免转移，\`*\`不行）
  - \`GET https://library.googleapis.com/v1/shelves/-/books?filter=xxx\`
  - \`GET https://library.googleapis.com/v1/shelves/-/books/{id}\`

### 验证请求（dry run）

- 使用额外的字段\`validate_only=true\`，仅执行无副作用的请求

### 重复请求

- 不能轻易重复执行的请求（有较大影响：钱、时间、法务风险），请求时需要包含唯一ID（非资源ID）

### 枚举值

- 从\`0\`开始定义并作为默认值，API必须记录如何处理默认情况
- 这个默认值不允许默认行为，则接口应显示错误INVALID ARGUMENT

### *语法规则：EBNF

### 整数类型

- 避免使用超过32位的无符号；-1、0代表特殊含义时需要额外记录

### 部分响应 Partial Response

- 通过\`FieldMask\`，提供\`$fields\`保留字段来提示API Gateway、BFF清洗返回数据

  \`\`\`zsh
  GET https://library.googleapis.com/v1/shelves?$fields=shelves.name
  GET https://library.googleapis.com/v1/shelves/123?$fields=name
  \`\`\`

- 资源视图，在请求中增加参数\`view=<defined view>\`，来指定返回某一种视图数据

### *ETag：客户端条件请求

### 单例资源 Singleton

- 仅有一个资源存在其集合（或父资源）中:\`/users/{uid}/setting\`

### 如何提供Option值

- Bool，提供固定的无需扩展的设置：\`bool enable_tracing\` 或 \`bool enable_pretty_print\`
- Enum，灵活的设计但不会频繁修改：\`enum TlsVersion\` 或 \`enum HttpVersion\`
- String，开放式设计或兼容外部标准：\`sting region_code\`或\`string language_code\`

### 数据保留（backup）Data Retention

- 对于用户元数据、用户设置和其他重要信息，应保留 30 天的数据。例如，监控指标、项目元数据和服务定义。
- 对于大量用户内容，应保留 7 天的数据。例如，二进制 blob 和数据库表。
- 对于暂时性状态或费用昂贵的存储服务，如果可行，应保留 1 天的数据。例如，Memcache 实例和 Redis 服务器。
  > 在数据保留期限期间，可以删除数据而不会丢失数据。如果免费提供数据保留的成本很高，则服务可以提供付费的数据保留。\\
  > （使用非业务侵入的方式来保留、恢复这部分数据）

### 数据负载限制 Large Payloads

- Max 32MB
- 大于10MB则需要考虑API设计的合理性，是否需要使用流式传输、异步传输

## Built-in API文档

- API说明：以动词开头说明API功能，e.g.
  - 与世界各地的朋友分享最新动态、照片、视频等。
  - 访问云托管的机器学习服务，轻松构建响应数据流的智能应用。
- 资源说明：资源所表示的内容
- 字段和参数，e.g.
  - 本系列的主题数量。
  - 经纬度坐标的精度，以米为单位。 必须是非负数。
  - 标记是否为本系列的提交资源返回附件网址值。\`series.insert\` 的默认值为 \`true\`。
  - 投票信息的容器。仅在记录投票信息时出现。
  - 目前未使用或已弃用。

Checklist：

- 它是什么？
- 如果成功了它会执行什么操作？如果失败了它会执行什么操作？什么可能导致它失败及如何导致它失败？
- 它具有幂等性吗？
- 它的单位是什么？（例如：米、度、像素。）
- 它接受什么范围的值？此范围是否包含边界值？
- 它有什么副作用？
- 应该如何使用它？
- 可能会导致它失败的常见错误有哪些？
- 它总是存在吗？（例如：“用于投票信息的容器。仅在记录投票信息时存在。”）
- 它有默认设置吗？

## Version

主版本号

- 作为URL路径的第一部分
- 重大更改（删除、修改字段）时需要增加API版号 - Server/Client主版本号必须保持一致
  - 向后兼容的非重大更改
    - 向 API 服务定义添加 API 接口
    - 向 API 接口添加方法
    - 向方法添加 HTTP 绑定
    - 向请求消息添加字段：非必须、不更改接口行为的（如分页）
    - 向响应消息添加字段
    - 向枚举添加值
    - 添加仅限输出的资源字段
  - 不兼容的重大更改
    - 移除或重命名服务、字段、方法或枚举值
    - 更改 HTTP 绑定
    - 更改字段的类型
    - 更改资源名称格式
    - 更改现有请求的可见行为
    - 更改 HTTP 定义中的网址格式
    - 向资源消息添加读取/写入字段
- 内部可以通过小版本进行区分，但不应该开放给用户
  - \`v1,v2\` 稳定的可接受版本
  - \`v1.1\` 稳定的非公开版本
  - \`v1beta\` 非稳定版本，必须是\`v1\`的超集（包含）
  - \`v1alpha\` 非稳定版本，必须是\`v1beta\`的超集（包含）

## Links

- [Google API 设计指南](https://cloud.google.com/apis/design)
`,Zn=`# Go 微服务架构 - 图解 Go + K8S 的微服务系统的全开发流程

![](https://pic4.zhimg.com/v2-ddda56a5e941e13669028d19e70ffddf.png)

## 背景

在 K8S 已成为容器编排事实标准的 2022 年，越来越多的项目开始基于微服务、声明式 API 来构建系统 —— 即云原生系统。作为一个不会八股文的 Java 开发，在过去的几年用 Kotlin+Spring 开发后端的体验还算不错，但随着对 AWS、K8S 的使用越来越多，很多以前由后端承载的功能都移交给了云，比如 注册中心、配置管理、限流降级。加之 DDD 拆分微服务，各个服务间通过 MQ 实现最终一致性，连分布式事务都没有了，后端代码真正的变成了 CRUD。

Go、Rust 等语言的崛起也正是切中了这点 —— 简单、高效。相比 Kotlin（+Spring）来说，虽然 Go 给我的感受更多是“简陋”，但不可否认使用 Go 来构建小型微服务系统（少于 100 个 go 文件, 多于 40 个微服务）时，从开发编译到部署调试的效率都大大高于 JVM 系统。

对于 Go 微服务体系而言，grpc、docker、k8s、istio 这一系列成熟的工具，也能帮助开发者在没有“spring框架”的情况下，开发出一个足够健壮的微服务系统了。

> _PS: 本文使用类似 Value Stream Mapping（价值流图）的方式介绍了 Go 微服务架构的整个生命周期，所涉及到的开源技术和组件可根据具体需求进行替换，并不是唯一解_

### Codebase

在写下代码后要思考的第一件事就是，如何管理你的源代码。虽然大多数人都有使用 Github 的经验了，但在构建一个复杂业务的微服务系统的时候，代码库拆分、分支策略、发布策略、CodeOwner 等，都是需要考虑的范畴。

- Monorepo vs Polyrepo
- trunk-based vs gitflow
- release branch, tag, feature toogle
- ...

是选择单体式仓库还是组合式仓库？是选择主分支开发还是特性分支？没有最好，只有最适合 —— 根据团队的大小、能力、协作方式来选择开发方式；或者反之，根据开发模式选择团队。

本文推荐采用的一种开发模式：

- monorepo

  - 所有代码存放在一个仓库
  - 按照使用阶段和类别划分 folder
  - 通过 CodeOwner 限制或区分 Dev/Ops 和团队边界

- trunk-based + PR

  - 业务代码直接提交到 main
  - 直接影响 CI/CD 和线上环境的代码需经过 PR，以便 CodeOwner 进行检查

- one codebase all environment

  - 所有环境同一代码库
  - 通过 feature toogle 来打开和关闭未完成的功能

- **缺点 —— 对开发团队要求很高**

  - **团队成员需要有跨团队、领域工作的能力**
  - **团队 Leader 需要全栈（前、后、DevOps、云）**
  - **架构师需要和团队一起工作，保证所有人对业务和架构的理解正确**
  - **TDD + 自动化测试 是必备技能**

![](https://pic4.zhimg.com/v2-5a3fe4e210d0d315e0d67f9ef73c73e3_b.jpg)

![](https://pic4.zhimg.com/v2-212bd010da70d694739344b77ae62933_b.jpg)

### Development 开发 + Build 编译

![](https://pic1.zhimg.com/v2-5438e8b09a50a06bdd66d638e8e8dd48_b.jpg)

概念：

- 12 factors（基准代码、配置分离）
- 声明式 API
- CI

与其说微服务构建的是一个个服务，还不如说构建的是一项项能力。特别是在云原生、云服务、Serverless 越发红火的今天，站在价值端看，一个服务如何被编写、如何被运行其实并不重要（有太多种选择），一个服务能提供什么样的能力才重要。API 则是服务所能提供能力的一个体现，好的 API 设计即能获得更易用的系统、更高效的交互 —— "Declarative API, API First"。将 API 作为统一语言也未尝不可，团队基于 API 达成统一，业务能理解 API 代表的能力、技术能保证 API 的正常运行。

技术：

- \`grpc + protobuf\` 定义 API ，通过 protoc 自动生成 server/client
- \`make + shell\` 进行代码的编译和打包
- \`kustomize\` 定义和组装 k8s manifest
- \`docker\` 打包镜像
- \`skaffold\` 根据 git diff 选择需要编译的服务，提升效率

![](https://pic3.zhimg.com/v2-928f116da591a6cceff5b37abd8d6b2a_b.jpg)

\`skaffold\` 其实是个很有意思的项目，他的本意是作为一套 CI/CD 的工具来管控服务的编译、打包、测试、部署。但单一的功能与 \`Jenkins, GithubActions, FluxCD, ArgoCD\` 等专业工具相比又捉襟见肘。不过用它来比对本地、commit 的修改，自动生成 image tag 的功能还是很好用的，就不用自己写 shell、python 来完成这个功能了。

### Deploy 部署 + Runtime 运行

![](https://pic3.zhimg.com/v2-4f31a96422cb9e41ebb86b05fea8d3c6_b.jpg)

概念：

- 12 factors
- CD
- service mesh

技术：

- \`ArgoCD\` 工作在 k8s 集群内部的持续部署
- \`Kubernetes\`, \`Istio\`

部署和运行阶段相比就简单的多了，k8s 已经是非常成熟的 PaaS 平台，只需要提供正确的 manifest 就能将应用部署到集群之中。

### Observe 监控 + Debug 遥测

![](https://pic3.zhimg.com/v2-0ed49fdab4c49413a4bb44dcfb89423e_b.jpg)

概念：

- service mesh
- 可观测性

技术：

- \`OPLG（Open Telemetry、Prometheus、Loki、Grafana）\`
- \`Istio\`
- \`Nocalhost\`

Nocalhost 也是一个很有意思的项目，通过替换、复制原有容器， 可以在运行时对远程应用进行调试和控制。加上 Istio 可以灵活控制流量路由，配合使用就可以很方便的实现“每个人一个环境”的开发梦想。

### Platform 基础设施

![](https://pic2.zhimg.com/v2-09e22d41da3ae9c01fe9b17cffbd3b99_b.jpg)

概念：

- 不可变基础设施
- IaC

技术：

- \`terraform、terragrunt\`

在很多团队，基础设施被认为是运维、DevOps 的专项工作，和团队的日常开发是分离的。当团队需要使用基础设施时，更多的是通过 “ticket” “request” 来进行跨团队的协作。但如果我们把基础设施稍微拆分一下：

- layer 0，配置基础服务和云账号
- layer 1，配置集群和支撑服务
- layer 2，部署应用所需的后端服务

随着 k8s、istio、dapr 技术的出现，后端应用变得更存粹（的 CRUD），但跨功能需求并不会消失，对数据库、MQ 的需求和依赖也不会消失，只是将这种耦合变为进程间、pod 外的耦合了。如果我们将基础设施也用代码管理起来，并随应用代码一起提交、一起管理、一起运行，就可以进一步降低“不同步”的可能性、提升团队开发的效率。

甚至有团队会自定义一些 yaml 文件，用于描述需求的后端服务（数据库、桶、MQ、IP），通过 CRD 自定义的解析器来 provision 云资源。

### 总结

![](https://pic1.zhimg.com/v2-679d6225ef5d4f1f7fbbbc31b7115428_b.jpg)

云原生技术重塑了原本的前端、后端、运维，并通过新的概念、技术重新定义软件开发的流程。

云原生开发者 ≈ 全干工程师
`,ne=`# Logseq 实现 TODO 列表

在前文基础上，介绍一下更贴近程序员的Logseq使用方式 —— Advanced Queries。

## TODO Query

我的TODO列表是按GTD的方式划分了4块：正在做、即将到期的、重要的、其他的

### GTD/DOING

\`\`\`clojure
#+BEGIN_QUERY
{
 :title "🍖 Run~Run~Run"
    :query [:find (pull ?h [*])
            :where
            [?h :block/marker ?marker]
            [(contains? #{"NOW" "DOING"} ?marker)]]
    :result-transform (fn [result]
         (sort-by (fn [h]
                           (get h :block/priority "Z")) result))
    :collapsed? false}
#+END_QUERY
\`\`\`

### GTD/SCHEDULED

\`\`\`clojure
#+BEGIN_QUERY
{
 :title "🍻 It's time to make it happen"
    :query [
     :find (pull ?h [*])
        :in $ ?start ?next
        :where
        [?h :block/marker ?marker]
        [(contains? #{"NOW" "LATER" "TODO"} ?marker)]
        (or [?h :block/scheduled ?d] [?h :block/deadline ?d])
        [(>= ?d ?start)]
        [(< ?d ?next)]
    ]
   :inputs [:today :7d-after]
    :result-transform (fn [result]
         (sort-by (fn [h]
                           (get h :block/priority "Z")) result))
    :collapsed? false}
#+END_QUERY
\`\`\`

### GTD/NEXT

\`\`\`clojure
#+BEGIN_QUERY
{
 :title "🏄 Nnnnnext"
    :query [:find (pull ?h [*])
            :where
            [?h :block/marker ?marker]
            [(contains? #{"NOW" "LATER" "TODO"} ?marker)]
            (not
             (not
                 [?h :block/priority ?priority]
            [(contains? #{"A" "B" "C"} ?priority)]
                )
                (not 
                 [?h :block/ref-pages ?p]
            [?p :page/name ?page-name]
            [(clojure.string/includes? ?page-name "okr")]
                )
            )]
    :result-transform (fn [result]
         (sort-by (fn [h]
                           (get h :block/priority "Z")) result))
    :collapsed? false}
#+END_QUERY
\`\`\`

### GTD/OTHERS

\`\`\`clojure
#+BEGIN_QUERY
{
 :title "🦄 Emmmm, schedule it or kick it off"
    :query [
     :find (pull ?h [*])
        :in $ ?start ?next
        :where
        [?h :block/marker ?marker]
        [(contains? #{"NOW" "LATER" "TODO"} ?marker)]
        (not
         [?h :block/priority ?priority]
         [(contains? #{"A" "B" "C"} ?priority)]
        )
        (not 
         [?h :block/ref-pages ?p]
          [?p :page/name ?page-name]
         [(clojure.string/includes? ?page-name "okr")]
        )
        (not
         (or [?h :block/scheduled ?d] [?h :block/deadline ?d])
         [(>= ?d ?start)]
         [(< ?d ?next)]
        )
    ]
    :inputs [:today :3d-after]
    :result-transform (fn [result]
         (sort-by (fn [h]
                           (get h :block/priority "Z")) result))
    :collapsed? false}
#+END_QUERY
\`\`\`

## CSS 加持

我使用的是Dev Theme, 但默认的样式会有一些问题（或者说我不太习惯）

- 代码块字体较小
- markdown table太窄，宽屏模式下还是会折行
- query table会有一个radio button切换模式，不过我不太常使用

在进行了亿点点🤏🏻（阅读源码）的研究之后，发现用css可能是最简单的解决方式...

\`\`\`css
/* This must be the first line of the custom.css with other import rules */

/* 
 Anddd7's diy _
 checkout [https://logseq.com], create some sample blocks and check the classnames in browser
 copy and overwrite it here. (use !important if needed.)
*/

/* default font for literal */
:root {
  --ct-text-size: 16px;
  --ct-line-height: 1.6;
  --ls-font-family: "Only Emoji", "JetBrains Mono";
  --ct-page-title-font-family: var(--ls-font-family);
  --ct-code-font-family: "JetBrains Mono";
}

/* increase the font size of the code */
.CodeMirror pre.CodeMirror-line,
.CodeMirror-gutter,
.CodeMirror-gutters,
.CodeMirror-linenumber,
.CodeMirror-scroll,
.CodeMirror-sizer,
.CodeMirror {
  font-size: 14px;
  line-height: 18px;
}

/* expand markdown table for wide screen */
.table-wrapper {
  white-space: nowrap;
  max-width: 1400px !important;
}

/* hide useless things in customer query */
.custom-query .initial .align-items {
  display: none;
}
.custom-query .initial .content .block-content .timestamp,
.custom-query .initial .content .block-content .block-body {
  display: none;
}

/* styles changes */
.priority {
  margin-right: 8px !important;
}
\`\`\`

### Output

![Demo](../assets/202212-logseq-customized-with-clojure-and-css/1645694079239.jpg)

## 总结

GTD（Get Things Done）是一个不错的工作框架，特别是在事情多且杂的时候。
> “切换页表，切换任务”，像CPU一样实现多核运行。
`,ee=`<!-- markdownlint-disable MD024 -->

# 打造 Mesh-Shaped 能力 - 图解 Logseq 个人知识管理体系

![](https://pic3.zhimg.com/v2-e53cc5d58b612b5154574f0eb2110d72_r.jpg)
在年初写下 ["Mesh-Shaped" - 如何成长为云原生开发者](https://zhuanlan.zhihu.com/p/575842220) 之后，我就一直在探索和完善个人知识管理的方式：

> 知识管理的方式反映了你的思维方式，你的思维方式决定了你的思考过程

最近的工作流已经比较稳定了，过程中会使用到不同的工具、平台、方法论。这里简单的做亿点点图解，希望对大家有所帮助。

## 输入 Input

![](https://pic4.zhimg.com/80/v2-0a99df5b67b41531e39dd8f9c5e7bb23_1440w.webp)

### 方法论

- [卡片笔记学习法](https://link.zhihu.com/?target=https%3A//book.douban.com/subject/35503571/)
- OKR
- 逻辑树

### 输入源

- 任务输入：有较明确的目标的任务，需要在一定时间点完成，并产生相应产物的（[SMART 原则](https://link.zhihu.com/?target=https%3A//baike.baidu.com/item/SMART%25E5%258E%259F%25E5%2588%2599/8575850)）
- 知识输入：学习某一块知识所随机产生的研究、探索、阅读，通常伴随着各种附件，书、文献、图片或 ppt

### 工具

- GoFullPage：Chrome 插件，用于截屏
- MarkDownload：Chrome 插件，可以将网页或选段“下载/保存为 Markdown 格式”，方便加入 Logseq
- Cubox：Chrome/iOS/Wechat 多端插件，作为一个媒体库保存任意内容

- _Cubox 功能很强大，如果 收集>产出 的话，只使用 Cubox 也是不错的选择_
- _我是将 Cubox 作为收集工具使用的，比如看到一篇公众号文章、看到一篇知乎，都可以先通过 Cubox 暂存，再通过 GTD（Logseq）来消费这些“内容”_

### 笔记

- Logseq：将 Logseq 的功能 和 卡片笔记学习法 相结合，分离出不同的页面来管理不同的内容

- Journey，即 Logseq 每天自动生成的页面，来记录一些琐碎的内容，任务使用 "TODO" 标签进行管理
- Note，就是正常的 Page
- Project，也是正常的 Page，会添加一些前缀来标识某一个项目
- OKR，其实也是一个正常的 Page，会通过 tag/hierarchy/query 功能来进一步追踪和管理

![OKR Hierarchy](https://pic3.zhimg.com/80/v2-d99183cdf27244b27bf6499e9b3f6e6e_1440w.webp)

## 知识循环 Iteration

![iteration](https://pic1.zhimg.com/80/v2-28beb58c07769b2e95fb85572e6ba290_1440w.webp)

### 方法论

- OKR
- GTD（Get things done）
- Mesh-Shaped：[Anddd7："Mesh-Shaped" - 如何成长为云原生开发者](https://zhuanlan.zhihu.com/p/575842220)

### 任务区

- OKR：（同上）
- Roadmap：可以理解为 OKR 落实到当月的一个详细计划，更细的拆分任务以便合理的执行
- GTD：对待办（TODO）分门别类的管理

- 会通过 Logseq 的 Query 进行搜集（按优先级、按 Tag、按关键字、按状态）

![](https://pic4.zhimg.com/80/v2-bb9523567c2e2804054f9f552d3051bf_1440w.webp)

- 还可以配置到 Journey 的模板里，把重要事务钉在每天的首页上

![](https://pic3.zhimg.com/80/v2-125cdaa60f9d7dc17a4f99841d91786e_1440w.webp)

### 笔记区

- **核心**：还是按 卡片笔记学习法 的方式，对需要被保留的笔记进行“管理”

- Journey 无关紧要的草稿，可随意丢弃（未完成的 TODO 会被 GTD 采集，也无需关心）
- Project/Books 虽然也是单独页面，但更像是一个分类标签来聚合一些内容
- Note 永久笔记才是知识库的核心

- 记入“永久笔记”的笔记不代表就能真的永久的生效
- 第一，要有合适的组织方式，当然因为 Logseq 是大纲笔记，我会更偏向于使用树形的结构来组织页面内的笔记；当某一个页面的笔记过多时，可以考虑拆分段落（文档象限）或是拆分子页面（Hierarchy）
- 第二，“产生链接的知识才是有效的知识”，多脑补、多想象、多扩展，产生链接的知识会让你记的更深，并且还能产生跨领域的作用 —— e.g. “论敏捷项目管理在装修计划上的实践方案”

![](https://pic2.zhimg.com/80/v2-0657aa86ae9b1b880ef578bd69d24a5d_1440w.webp)

### 其他

- Github：作为备份仓库，当然也可以利用 Logseq export + Github pages 快速搭建一个博客网站，并且带双链、带图谱的酷炫网站
- GoodNotes、棵岩阅读、微信读书、Apple Books：Logseq 虽然提供了内置的 PDF 阅读功能，但在阅读较长的书籍、英文的文献、需要做标记的 PPT，可能在 iPad + ApplePencil 的环境下会更方便快捷一些

## 输出 Output

![](https://pic1.zhimg.com/80/v2-84a9ff2439dac7d05696d5d7b426d95c_1440w.webp)

### 方法论

- 费曼学习法
- [敏捷个人](https://link.zhihu.com/?target=http%3A//www.zhoujingen.cn/)
- 其他概念 ... （见图）

### 输出

- 获得反馈：知识需要输出，输出会迫使你对知识进行再学习和提炼，更大的好处是你能获得反馈，或是赞美、或是改进建议、或者交流想法，通过反馈修正你的认知方向，形成新的输入实现认知迭代才是更重要的目标

## 总结

> 如果知识既不是被孤立地保存，也不是被孤立地学习，而是聚集在一个思想网络中，或者说是 “思维模型的网格” 中（M unger,1994），那么理解新的信息就变得更容易了。这不仅使学习和记忆变得更容易，而且提取信息及其可用之处变得更容易了。

### **"只有个体能够构建网络，网络才能围绕个体构建"**

![graph](https://pic4.zhimg.com/80/v2-a0fec4a76fb99fef7dbd5205d575839b_1440w.webp)
`,te=`# Infrastructure as Code (IaC) 思考和实践

## 不可变基础设施

在讲 IaC 之前，我们先了解一下不可变基础设施：

> **软件应用的复杂性 -> 开发部署的复杂性 -> 基础设施的复杂性**

在以前的软件开发中，为了配置和安装好软件应用的运行环境，通常需要花大量的时间在准备网络、机器、操作系统和数据库上。并且随着软件的更新，运行环境也会跟着调整，如安装补丁、修改 ip、修改端口等。但人工的调整不仅容易出错，而且难以记录修改，这个运行环境（服务器）就像你精心照顾的宠物一样，一旦丢失了就再也找不回来了。

因此，业界提出了 [Pet vs Cattle（宠物 vs 家禽）](https://joachim8675309.medium.com/devops-concepts-pets-vs-cattle-2380b5aab313) 的比喻，并且通过云服务验证了其有效性。

同样的，雪花服务器和凤凰服务器也是描述的类似的情况：每一片雪花都是独一无二的，并且消融后就再也无法再次凝结成相同的雪花。而凤凰服务器则可以通过“变蛋”涅槃重生（凤凰服务器的特点）：

- 稳定的服务器状态和更少的部署失败
- 没有配置漂移或雪花服务器
- 一致的预发布环境和简单的水平扩缩容
- 简单的回滚和恢复处理

而要想解决上述问题（实现不可变基础设施）：

- 自动化管道
- 无状态应用层
- 持久化数据层
- 基础设施即代码 IaC
- DevOps 式协作

而 IaC 不仅是其中重要的一环，利用代码的特点和优势也更容易达成其他几项工程实践。

> IMMUTABLE, BUT CONFIGURABLE / REPRODUCIBLE AND AUTOMATABLE \\
> （是）不可变的，但可配置 / （是）可复制的，且可自动化

## 'AS' code, not 'IS' code

![IaC Tools](https://picx.zhimg.com/80/v2-3856f65a763bad268e7d103c7aeb9c65_1440w.png)

IaC 的工具很多，甚至使用 shell、python 调用云服务 sdk、cli 也能完成高效的基础设施编排。但基础设施‘即’代码的重点并不完全是代码化 —— 'AS' not 'IS'。

一方面，使用代码管理基础设施：

- 基于编程/模版语言提升效率
  - 变量、常量、函数，提升编码效率减少重复和输入错误
  - 抽象、封装、复用，辅助基础设施的创建、修改、分发
  - 代码结构即基础设施架构
  - 同样适用 Clean Code 书写出自解释的代码
- 基于代码工具提升效率
  - Git，帮助基础设施实现版本化
  - 测试，尽早检验基础设施的可靠性
  - 流水线，自动化测试、部署、验证、回滚，响应更快

另一方面，IaC 应该致力于‘描述’基础设施：

- 基础设施受硬件架构影响，具有固有的依赖和限制
  - 比如 vm、集群 需要建设在网络之上
  - 比如 db、mq 是区域（region）资源，而 dns 是全球资源
- 虽然代码执行很快，但基础设施的准备并不像云厂说的那样快
  - java、go 应用的启动是秒级的
  - 而基础设施的“部署”时间则在几分钟到几小时不等
  - 比如 阿里云 rds 需要接近 10 分钟才能完全可以
- 如果遇到有状态服务，重建的难度远大于数据库迁移

下面我举 2 个编程理论用于 IaC 领域的例子 ...

### 简单设计 in IaC

![简单设计](https://insights.thoughtworks.cn/wp-content/uploads/2023/02/code-simple-design-five-principles-1.png)
[代码的简单设计五原则 - Thoughtworks洞见](https://insights.thoughtworks.cn/code-simple-design-five-principles/)

IaC 的设计实现过程中同样可以采用简单设计的理论：

- 通过测试，必然是首要满足的条件
- 揭示意图
  - 采用声明式编程，用代码描述基础设施的种类、型号以及资源的依赖关系
    - (参考下文 Terraform Tips)
  - "Do one thing and do it well" - UNIX 设计哲学
    - make, man, tree
    - kubectl run, apply, delete
- 消除重复
  - 使用 module、模版、脚本 来抽象可复用的资源或命令
    - (参考下文 Terraform Tips)
- 最小元素 ...

### 分层架构 in IaC

![基础设施的分层架构示例](https://s2.loli.net/2023/02/19/3nGJem5aP1z4lyu.png)

对基础设施进行分层和代码分层（mvc 模式）类似，目的是分离关注点：

- 权责方
  - 有哪些组织？有哪些部门？有哪些角色？
  - 他们的权利和义务是什么？
  - 如何协作？
- 修改频率
  - 哪些资源是一开始就需要准备和设计的？
  - 哪些资源是新项目启动需要的？
  - 哪些是不能修改的？哪些是定期修改的？哪些是随时可能修改的？
- 资源类型
  - IaaS/PaaS/SaaS
  - 计算、存储、网络，集群、中间件、工具链

如上图，是以 “基于多云环境构建 k8s 集群运行多种服务” 为题的分层架构：

- Layer0、Layer1 致力于不同的云环境上抽象出相同的支撑平台，对上暴露封装好的接口
- Layer2 构建企业内部的中间件/服务“市场”，提供多种组件按需使用
- Application 按需“采买”，直到某项服务被应用团队采用了，就会通过自动化脚本进行部署

![平台工程下的 DevOps 工作流](https://s2.loli.net/2023/02/19/2zS3gfmhaQWbdvK.png)

![GitOps with CMDB](https://s2.loli.net/2023/02/19/g7hkrQPfWaKHlAN.png)

## Terraform Tips

基于上述理论，我们以 terraform 为例（部署一个包含前后端的服务）来介绍一些 tips：

### 简单应用：无所谓分层，直接放到一个地方方便执行

\`\`\`sh
  simple
  └── main.tf
\`\`\`

### 简单应用 - 分类：随着资源变多，可以按资源类型/应用类型来

\`\`\`sh
  simple-by-resource/
  ├── database.tf
  ├── oss.tf
  ├── vm.tf
  └── vpc.tf
\`\`\`

\`\`\`sh
  simple-by-application/
  ├── backend-app.tf
  └── frontend-app.tf
\`\`\`

### 简单应用 - 组件化：当某些资源复杂度高、需要单独维护、需要复用时，通过 module 进行管理

\`\`\`sh
  simple-with-modules/
  ├── applications
  │   ├── backend-app
  │   │   └── main.tf
  │   └── frontend-app
  │       └── main.tf
  └── modules
      ├── database
      │   └── main.tf
      ├── oss
      │   └── main.tf
      └── vm
          ├── main.tf
          └── vpc.tf
\`\`\`

### 复杂应用 - 子组件：通过 folder 结构来标识复杂组件的关系和版本

\`\`\`sh
  complex-sub-modules/
  ├── applications
  │   ├── backend-app
  │   │   └── main.tf
  │   └── frontend-app
  │       └── main.tf
  └── modules
      ├── database
      │   ├── main.tf
      │   └── v1
      │       ├── main.tf
      │       └── security-policy.tf
      ├── oss
      │   └── main.tf
      └── vm
          ├── main.tf
          └── networking
              └── main.tf
\`\`\`

\`\`\`terraform
  # complex-sub-modules/applications/banckend-app/main.tf
  module "server" {
    source = "../../modules/vm"

    cpu    = 2
    memory = 4096
    vpc_id = module.vpc.id
  }

  module "vpc" {
    source = "../../modules/vm/networking"

    type = "private"
    cdir = "172.0.0.1/16"
  }

  module "db" {
    source = "../../modules/database"

    # upgrade to v1
    # source = "../../modules/database/v1"

    # or publish module to registry
    # source = "private-regirstry@modules/database/v1"
  }
\`\`\`

### 复杂应用 - 环境：将环境相关的变量抽象出去形成 variables，基于环境做区分

\`\`\`sh
  complex-env-apps/
  ├── applications
  │   ├── backend-app
  │   │   ├── env
  │   │   │   ├── dev.tfvars
  │   │   │   ├── prod.tfvars
  │   │   │   ├── qa.tfvars
  │   │   │   └── stg.tfvars
  │   │   ├── main.tf
  │   │   └── variables.tf
  │   └── frontend-app
  │       ├── env
  │       │   ├── dev.tfvars
  │       │   ├── prod.tfvars
  │       │   ├── qa.tfvars
  │       │   └── stg.tfvars
  │       ├── main.tf
  │       └── variables.tf
  └── modules
      ├── database
      │   └── main.tf
      ├── oss
      │   └── main.tf
      └── vm
          ├── main.tf
          └── vpc.tf
\`\`\`

\`\`\`sh
  # 独立管理环境参数，把 applications 也当成一种 module
  complex-outside-env-apps/
    ├── applications
    │   ├── backend-app
    │   │   ├── main.tf
    │   │   └── variables.tf
    │   └── frontend-app
    │       ├── main.tf
    │       └── variables.tf
    ├── env
    │   ├── common.yaml
    │   ├── dev.tfvars
    │   ├── prod.tfvars
    │   ├── qa.tfvars
    │   └── stg.tfvars
    └── modules
        ├── database
        │   └── main.tf
        ├── oss
        │   └── main.tf
        └── vm
            ├── main.tf
            └── vpc.tf
\`\`\`

\`\`\`sh
  # 更复杂的全球部署的系统，在环境之上再加一层地域做区分
  complex-region-env-apps/
  ├── applications
  │   ├── backend-app
  │   │   ├── main.tf
  │   │   └── variables.tf
  │   └── frontend-app
  │       ├── main.tf
  │       └── variables.tf
  ├── modules
  │   ├── database
  │   │   └── main.tf
  │   ├── oss
  │   │   └── main.tf
  │   └── vm
  │       ├── main.tf
  │       └── vpc.tf
  └── vars
      ├── cn-chengdu
      │   ├── dev.tfvars
      │   ├── prod.tfvars
      │   ├── qa.tfvars
      │   └── stg.tfvars
      ├── cn-shanghai
      │   ├── dev.tfvars
      │   ├── prod.tfvars
      │   ├── qa.tfvars
      │   └── stg.tfvars
      ├── common.yaml
      ├── eu-west4
      │   ├── dev.tfvars
      │   ├── prod.tfvars
      │   ├── qa.tfvars
      │   └── stg.tfvars
      └── sg
          ├── dev.tfvars
          ├── prod.tfvars
          ├── qa.tfvars
          └── stg.tfvars
\`\`\`

### 进阶应用 - 共享状态：如果多个应用间要共享状态，比如前端需要拿到后端服务器的端口号

\`\`\`terraform
  # 使用 remote state，跨 state 直接查询
  data "terraform_remote_state" "backend_state" {
    backend = "oss"

    config = {
      bucket = "tf_tutorial_remote_state_bucket"
      key    = "dev/applications/backend-app/terraform.tfstate"
      region = "cn-shanghai"
    }
  }

  locals {
    backend_port = data.terraform_remote_state.backend_state.outputs.port
  }
\`\`\`

\`\`\`sh
  # 合并应用，将所有基础设施合并成一棵树，从根节点进行管理
  advance-compose-state/
  ├── applications
  │   ├── backend-app
  │   │   ├── main.tf
  │   │   └── variables.tf
  │   ├── composed
  │   │   └── main.tf
  │   └── frontend-app
  │       ├── main.tf
  │       └── variables.tf
  ├── modules
  │   ├── database
  │   │   └── main.tf
  │   ├── oss
  │   │   └── main.tf
  │   └── vm
  │       ├── main.tf
  │       └── vpc.tf
  └── vars
      ├── cn-chengdu
      │   ├── dev.tfvars
      │   ├── prod.tfvars
      │   ├── qa.tfvars
      │   └── stg.tfvars
      ├── cn-shanghai
      │   ├── dev.tfvars
      │   ├── prod.tfvars
      │   ├── qa.tfvars
      │   └── stg.tfvars
      ├── common.yaml
      ├── eu-west4
      │   ├── dev.tfvars
      │   ├── prod.tfvars
      │   ├── qa.tfvars
      │   └── stg.tfvars
      └── sg
          ├── dev.tfvars
          ├── prod.tfvars
          ├── qa.tfvars
          └── stg.tfvars
\`\`\`

使用 Terragrunt 进行多应用管理（相当于一个代码生成器，帮你执行 remote state 的查询逻辑）

![Terragrunt](https://s2.loli.net/2023/02/19/LQeRJhclxbOYVSg.png)

### 进阶应用 - 分层架构和平台化

\`\`\`sh
  advance-platform/
  ├── layer0
  │   ├── alicloud
  │   │   ├── nonprod
  │   │   │   └── main.tf
  │   │   └── prod
  │   │       └── main.tf
  │   └── aws
  │       ├── nonprod
  │       │   └── main.tf
  │       └── prod
  │           └── main.tf
  ├── layer1
  │   ├── modules
  │   │   ├── compute
  │   │   │   └── main.tf
  │   │   ├── network
  │   │   │   └── main.tf
  │   │   └── storage
  │   │       └── main.tf
  │   ├── platform
  │   │   └── main.tf
  │   └── vars
  │       ├── cn-chengdu
  │       │   ├── dev.tfvars
  │       │   ├── prod.tfvars
  │       │   ├── qa.tfvars
  │       │   └── stg.tfvars
  │       ├── cn-shanghai
  │       │   ├── dev.tfvars
  │       │   ├── prod.tfvars
  │       │   ├── qa.tfvars
  │       │   └── stg.tfvars
  │       ├── common.yaml
  │       ├── eu-west4
  │       │   ├── dev.tfvars
  │       │   ├── prod.tfvars
  │       │   ├── qa.tfvars
  │       │   └── stg.tfvars
  │       └── sg
  │           ├── dev.tfvars
  │           ├── prod.tfvars
  │           ├── qa.tfvars
  │           └── stg.tfvars
  └── layer2
      ├── applications
      │   ├── backend-app
      │   │   ├── main.tf
      │   │   └── variables.tf
      │   └── frontend-app
      │       ├── main.tf
      │       └── variables.tf
      ├── modules
      │   ├── database
      │   │   └── main.tf
      │   ├── oss
      │   │   └── main.tf
      │   └── vm
      │       ├── main.tf
      │       └── vpc.tf
      └── vars
          ├── cn-chengdu
          │   ├── dev.tfvars
          │   ├── prod.tfvars
          │   ├── qa.tfvars
          │   └── stg.tfvars
          ├── cn-shanghai
          │   ├── dev.tfvars
          │   ├── prod.tfvars
          │   ├── qa.tfvars
          │   └── stg.tfvars
          ├── common.yaml
          ├── eu-west4
          │   ├── dev.tfvars
          │   ├── prod.tfvars
          │   ├── qa.tfvars
          │   └── stg.tfvars
          └── sg
              ├── dev.tfvars
              ├── prod.tfvars
              ├── qa.tfvars
              └── stg.tfvars
\`\`\`
`,ae=`# 如何绘制架构图：Mesh-Shaped Architecture Views

| 版本 | 修改                     | 时间    |
| ---- | ------------------------ | ------- |
| v0.1 | 脑洞，思考元图解法       | 2023-04 |
| v0.2 | 大纲                     | 2023-05 |
| v0.3 | 主要内容（除架构视图）   | 2023-05 |
| v1.0 | 发布                     | 2023-07 |
| v2.0 | 重构，主要突出“软件架构” | 2023-08 |
| v3.0 | 重构，提出架构阶段       | 2024-12 |

- [如何绘制架构图：Mesh-Shaped Architecture Views](#如何绘制架构图mesh-shaped-architecture-views)
  - [前言](#前言)
  - [文字、图形和可视化表达](#文字图形和可视化表达)
    - [语言与文字](#语言与文字)
    - [图形和绘画](#图形和绘画)
    - [可视化表达](#可视化表达)
      - [图形的基本组成](#图形的基本组成)
      - [图形的表现形式](#图形的表现形式)
      - [图的表现力](#图的表现力)
  - [如何绘制软件架构图](#如何绘制软件架构图)
    - [明确目标受众](#明确目标受众)
      - [首席技术官（CTO）](#首席技术官cto)
      - [产品经理（PM）](#产品经理pm)
      - [架构师](#架构师)
      - [开发工程师](#开发工程师)
      - [技术顾问（Advisor）](#技术顾问advisor)
    - [关注点设立](#关注点设立)
    - [传递可视化信息](#传递可视化信息)
  - [Mesh-Shaped 架构视图](#mesh-shaped-架构视图)
    - [结构层次分解](#结构层次分解)
      - [隐含的层次](#隐含的层次)
    - [逻辑关系组织](#逻辑关系组织)
      - [设计阶段](#设计阶段)
      - [开发阶段](#开发阶段)
      - [运维阶段](#运维阶段)
    - [风格（示例补充）](#风格示例补充)
  - [总结](#总结)

## 前言

在当今快速发展的数字时代，软件已经成为了我们生活和商业中不可或缺的一部分。无论是移动应用、在线服务还是大规模企业系统，软件的复杂性和重要性都在不断增加。在如此复杂的软件生态中，良好的架构设计成为了确保系统可靠性、可维护性以及扩展性的关键。然而，如何将这些复杂的技术概念和设计思想有效传达给不同角色的团队成员，成为了一个值得深入探讨的话题。

架构图 —— 它作为一种视觉表达形式，将复杂的技术架构（逻辑关系、事件时序、组合泛化等）以图形的方式展现出来，抽象关键概念而无需深入技术细节。这种表达方式能够降低技术和业务之间的认知障碍，更容易实现统一语言，将架构设计的目的和价值传达给各种角色。无论是项目的初期阶段，用于明确系统的整体构架，还是在后续的开发、测试和维护阶段，用于在团队间共享设计决策，架构图都是一种简单普适又强大的工具。

> 帮助团队在**不同的阶段和层次**上理解系统，并在不同的角色之间促进更流畅的**沟通**。

## 文字、图形和可视化表达

> A picture is worth a thousand words. \\
> 一画胜千言。

在人类的历史中，文字和图形一直是人们表达思想和传播信息的主要方式，它们各有优势并用于不同的场景和目的。

### 语言与文字

语言是人类交流和表达思想的最常用的一种工具，它通过语音符号来传递意义。语言的起源可以追溯到早期人类通过声音和手势进行基本交流的时期。随着人类智慧的发展，语言逐渐演化成为复杂的符号系统，用于表示事物（识物）、概念（辩理）甚至是抽象思维（哲学、宗教）。

文字是语言的可视化形式，用于通过抽象的符号记录和传播信息。文字的发展是为了解决语言的时间和空间限制，使得信息可以被保存、传递和阅读，超越了口头传述的限制。

语言和文字对人类文明的影响深远。它们不仅成为了人类思想和知识的媒介，还推动了人类社会的发展和进步。

![](../assets/202304-draw-architecture-diagram/pictograph-1.jpeg)

### 图形和绘画

图形是通过线条、形状、点和颜色等基本要素构成的平面或立体的视觉表达。它们可以是简单的几何形状，也可以是复杂的图案和图像，用于传达和表达特定的概念、思想或信息，具有艺术性、装饰性或功能性的目的。

> 使用 “文字” 还是 “图形” ？

在我们使用语言或文字表达某种信息时，会受到一些限制：

- 表现力有限：表达的内容体量和字数成正比。文字通过字词和句子的组合来传达意义，但很难准确地捕捉复杂的概念、情感和感觉。一些抽象的或非具象的概念可能需要通过其他手段的协助，如比喻、类比、隐喻等修辞手法，停顿、重音、断句等说话技巧。因此纯文字描述，会有非常多的上下文和修辞来强化表达的效果。
- 线性表达：文字的表达方式是线性的。在大部分文字书写系统中，写作和阅读方式都是从左至右、从上至下的。在一段文字中，前面的内容可能会影响对后续内容的理解，丢失上下文的阅读会引起很大的歧义。同时，线性阅读也限制了其传达多个概念或信息的能力。
- 依赖人脑处理：文字的理解依赖于人脑的分析、记忆和总结能力。读者需要通过解读和组织文字，将其转化为有意义的概念和思维模型。这可能涉及词汇理解、语法解析、上下文推断和知识联想等认知过程。不同的人具有不同的认知能力和知识背景，因此对相同文字的理解可能存在差异。
- 上下文负载：文字的理解通常依赖于上下文的负载。同样的文字，在不同的上下文中可能具有不同的含义和解读。读者需要综合考虑文字本身的表述以及所处的背景信息、语境和前后关系等因素，以理解文字的真正意义。

![](../assets/202304-draw-architecture-diagram/words.webp)

而我们在“阅读”一副图时，大脑的关注点和运行模式就不太一样了：

- 非线性阅读：相比于文字的线性阅读方式，图的阅读是非线性的。图中的元素可以在不同的位置和角度上呈现，并且读者可以根据自己的需要选择性地关注不同的部分。这种非线性的特性使得读者可以自由地浏览和理解图中的信息，以适应自己的思维方式和需求。
- 依赖视觉能力：图的阅读依赖于人脑的视觉能力。读者需要观察、分析和解释图中的形状、线条、颜色等视觉元素，虽然也需要经过人脑的分析，但如果图形本身和现实世界的概念或物体有相似之处，那么读者就可以直接理解图形的含义，而无需经过文字的转换。
- 数理逻辑表达：在图论和拓扑学中使用图来表达数学逻辑，是因为图提供了一种直观、可视化的方式来描述和分析对象之间的关系和结构。图的数理逻辑表达能力使得它们可以用于描述和分析复杂的关系和结构，如网络拓扑、数据流、组织结构等。

![](../assets/202304-draw-architecture-diagram/math-diagram.jpeg)

### 可视化表达

#### 图形的基本组成

图形通过视觉元素来传达信息，其表现力取决于组成这个图形的元素数量和种类。从广义的概念，一个图形包含的信息主要包括几何属性和非几何属性：

**几何属性**：刻画对象的轮廓、形状。

- 点：最基本的几何属性，通常用来表示一个位置或一个数据点。
  - 点和点的相对位置，则反应了数据间的亲疏关系。
  - 在数据可视化中，点经常被用来表示离散的数据项，如散点图中的数据点，或地图上的地理位置。
- 线：线是由两个或多个点连接而成的几何形状。
  - 线段，可以用来表示各种关系和连接，如连接两个点之间的路径
  - 箭头，带上方向的线，可用于表示空间、时间上的顺序关系。
  - 折线、曲线，改变形态的线，用于表达数据的变化趋势。
- 面：面是由多个线段或曲线围成的闭合区域，具有面积和形状。
  - 方框，常用来表示数据的分布、范围或区域。
  - 圆圈，在地图中，面被用来表示地理区域、行政区域或统计区域。
- 体：体是由多个面围成的立体形状，具有体积和形状。
  - 立方体、球体，体通常用来表示物体的形状和空间位置。
  - 在建筑设计中，体被用来表示建筑物的结构和布局。

> 还有一个隐藏的几何属性是 “坐标系”。同一个物体（概念、元素）在不同的坐标系上，可能处于不同的状态，使用点组成线、面、体，在更高的坐标系上，又回归为一个点。\\
> 如，一个街道的交通规划，在市的坐标系上表现为一条条线组成的交通网络。但在省的坐标系上，会抽象为一个点，仅作为省道、国道规划的一个组成点。

**非几何属性**：视觉属性，刻画对象的颜色、材质等。比如明暗、色彩、纹理、透明性、线型、线宽。

- 颜色：颜色是非常重要的属性，可以用来表达数据的不同类别、特征或重要程度。因为人眼对不同颜色的敏感度不同，选用合适的颜色可以帮助读者更好地理解和记忆信息。例如，使用红色表示紧急的信息，使用绿色表示正常的信息。
- 纹理：纹理是通过斑点、线条、图案或阴影等视觉效果来增加图形的细节和复杂性。纹理可以用来表示表面的质地、模式或特征。如虚线表示虚拟的边界，阴影表示物体的凹凸表面。
- 明暗：明暗是指图形的亮度和对比度。通过调整明暗，可以增加图形的视觉效果和对比度，用来突出显示某些部分或强调关键信息。如将前景物体调亮，将背景物体调暗，可以使前景物体更加突出。
- 透明度：透明度是指图形元素的透明程度。透明度可以用来表示数据的密度、重叠关系或深度。可以在二维图形中表现三维效果。
- 线宽：线宽指线条的粗细程度。线宽可以用来表示数据的强度、关联的强弱或表示图形元素的重要性。比如，使用粗线条表示主要的数据传输路径，使用细线条表示次要的数据传输路径。

![](../assets/202304-draw-architecture-diagram/basic-diagram.jpeg)

#### 图形的表现形式

在了解了图形的基本属性后，我们就需要使用合理的利用这些属性来表达信息。因为受人类认知世界的方式的影响（双眼），我们在使用图形描绘信息时，通常会使用以下几种形式（视图）：

- **二维**：二维可视化是最基本的形式，主要通过平面上的点、线和面来表达信息。

- **二点五维**：在同一个二维平面上叠加多个图像形成图层。
  - 每一层的图像可以表示不同的信息。这种可视化表达形式常用于地图、图表和数据可视化中。
  - 例如，将地形特征作为基本图层，可以同时展示某一个地区的人口数据和气候状况，以便更全面地了解地区的情况。

![Alt text](../assets/202304-draw-architecture-diagram/image-21.png)

- **三维**：在三维空间中表达信息，即 xyz 三坐标系。
  - 以体（立方体、圆柱体）为主要元素，突出深度、体积和角度等。通过调整物体在三维空间中的位置、大小和形状，可以展示更多的空间关系和视角。
  - 非几何属性也同样适用于三维可视化，例如使用色彩和光照效果来模拟阴影和反射。三维可视化广泛应用于建筑设计、虚拟现实、游戏开发等领域。

- **四维**：通过动画（帧 + 时间）来记录和展示图形的变化。
  - 在时间维度上，通过连续的图形演变，可以呈现数据的变化趋势和演化过程。这种形式的可视化特别适用于展示时间序列数据和动态系统。
  - 例如，使用折线图或曲线图展示随时间变化的数据趋势，或者通过动画展示物体的运动轨迹和变形过程。

![](../assets/202304-draw-architecture-diagram/quick-sort.png)

#### 图的表现力

图可以在一个相对小的空间中表达大量的信息，因而图传达信息的能力（表现力）远远超过了文字。

- 直观性：图形能够以直观的方式呈现信息，通过形状、颜色和位置等视觉元素传达信息，使人们更容易理解和记忆。相比之下，文字需要经过阅读和解释才能理解其含义。
- 综合性：图形可以在一个整体中呈现大量的信息，将复杂的概念和关系以一种清晰的方式展示出来。这有助于整合不同的观点和元素，帮助读者建立全局的认知和理解。
- 语义化：图形可以使用符号、图标和形状等视觉元素来表示特定的含义，从而实现语义化的表达。这样一来，读者可以通过视觉上的关联性来理解不同元素之间的关系，而无需依赖繁琐的文字解释。
- 空间表达：图形在空间上的布局和组织可以传达信息的层次结构和重要性。通过在图形中使用不同的位置、大小和层次，可以强调某些元素的重要性，帮助读者更好地理解和记忆信息。
- 跨文化性：图形在语言和文化之间具有更广泛的适应性。由于图形是基于视觉元素的，因此它们可以跨越语言障碍，使得信息在不同文化和语境中都能得到理解和传达。

![](../assets/202304-draw-architecture-diagram/network-topology.webp)

**图本质上也是抽象的、符号化的，在绘制和阅读时同样会遇到理解差异、上下文负载等语言和文字限制。抽象程度越高，需要理解当前图像的上下文和背景知识就越多，如波形图、甘特图、UML 图等。**

因此绘图者不但要琢磨绘制的图形元素是否能够表达自己的想法，还要考虑读者是否具备足够的知识和能力来理解图形的含义。

## 如何绘制软件架构图

在软件开发领域，架构图是一种强大的工具，用于描述系统设计时的逻辑结构。类似于建筑设计中的建筑图纸，架构图可以帮助软件开发人员更好地理解和沟通系统的整体设计，从而促进团队合作和项目的成功实施。

因为父亲是一名建筑工程师，小时候在书房能经常看到各种设计图纸，一米多长的图纸上密密麻麻的线条和文字。在从事软件开发后，我也一直觉得软件工程和建筑工程是有很大相似性的，都需要多个部门、多个角色的协作，都需要在有限的条件下解决问题，都需要考虑安全因素，才能最终完成一个复杂的工程项目。软件开发过程中，也常将架构图作为协作的纽带，将不同的角色的工作内容、工作流程、标准规范等，以图形的方式表达出来，以便于大家理解和沟通。

![](../assets/202304-draw-architecture-diagram/building-architecture.jpeg)

软件相比建筑会更加的灵活 —— 抽一个函数比抽一块砖的难度小多了。因此架构图还能够作为演进和后期规划的工具，帮助团队在系统演进过程中做出明智的决策。就像我在前言里提到的各种使用场景，架构图本质是**一种用来沟通的工具**，它能够帮助团队在不同的阶段和层次上理解系统，并在不同的角色之间促进更流畅的沟通 —— 这也是它的价值所在。

![](../assets/202304-draw-architecture-diagram/achitecture-discussing.jpeg)

不论是哪种类型的架构图，它们的本质都是用来传递信息。那么**为了高效地传达信息，绘制架构图时首先要明确目标受众群体和信息主体，即“向谁传达什么信息”。**不同的受众可能对系统的不同方面有不同的关注点，因此在设计架构图时需要根据受众的角色和需求，选择合适的表现方式和细节层次。

### 明确目标受众

在软件开发和架构设计过程中，不同角色承担的职责不同，因此他们期望从架构图上获取的信息也不同。

#### 首席技术官（CTO）

场景：

- 战略决策：CTO 需要使用架构图来评估技术决策对业务目标的影响，为公司的技术战略提供指导。
- 技术沟通：CTO 利用架构图与其他高层管理人员共享技术信息，以支持业务决策和资源分配。

目的：

- 业务和技术对齐：架构图帮助 CTO 确保技术决策与公司的战略目标和需求保持一致。
- 资源规划：CTO 通过架构图了解系统的瓶颈和扩展性，从而做出合理的资源投资决策。

#### 产品经理（PM）

场景：

- 需求理解与验证：产品经理可以通过架构图了解系统如何满足用户需求，验证产品功能是否与预期一致。
- 产品规划与优先级：产品经理可以根据架构图了解各个模块的重要性和依赖关系，从而进行合理的产品规划和优先级设定。

目的：

- 用户期望管理：架构图能够帮助产品经理更好地理解系统能力，从而更准确地与用户沟通产品的期望和限制。
- 需求变更理解：架构图帮助产品经理了解修改需求如何影响整个系统，以便做出明智的需求调整决策。

#### 架构师

场景：

- 架构设计与演进：架构师需要创建初始架构设计以满足业务需求，并在系统演进过程中进行架构优化和重构。
- 系统整体视图：架构师可以使用架构图来展示整个系统的组件、模块和关系，以便更好地理解系统。

目的：

- 技术决策支持：通过架构图，架构师能够评估不同的技术选项，从而做出明智的技术决策。
- 团队沟通：架构师可以利用架构图向开发团队和非技术团队解释设计决策，协调不同团队之间的合作。

#### 开发工程师

场景：

- 开发指导：开发工程师根据架构图中的指导，编写、测试和维护系统的不同模块和组件。
- 跨模块理解：开发工程师可以查看架构图，了解自己的模块如何与其他模块互操作，从而更好地集成系统。

目的：

- 代码一致性：架构图可以确保开发团队按照相同的结构和设计来构建系统，提高代码的一致性和可维护性。
- 减少集成问题：开发工程师通过架构图了解模块之间的交互，有助于减少集成阶段的问题和冲突。

#### 技术顾问（Advisor）

场景：

- 技术评估和建议：技术顾问通过架构图对现有系统进行评估，提供技术改进建议和优化方案。
- 新项目咨询：在新项目启动阶段，技术顾问可以协助客户绘制架构图，指导技术选择，并阐述项目可行性。
- 解决问题和疑难情况：在面临技术难题、性能问题或安全漏洞时，技术顾问可以利用架构图进行分析和解决方案制定。

目的：

- 技术指导：通过架构图，技术顾问可以向客户阐明系统的强项和改进的空间，为技术决策提供明智的建议。
- 风险识别与规避：技术顾问利用架构图帮助客户识别潜在风险和漏洞，提前规避可能的问题。
- 战略规划：通过绘制架构图，技术顾问可以帮助客户规划长期技术战略，以支持业务目标的实现。

![](../assets/202304-draw-architecture-diagram/achitecture-discussing-2.jpeg)

### 关注点设立

在理解了不同角色的需求后，我们可以根据不同的关注点设立架构图的目标，以便更好地传达信息。我们将其分为两个方面：

**利益相关方**，即谁应该关注当前的架构图，以及他们关注的是什么。利益相关方可以是项目团队的成员，也可以是项目外的其他人员，如客户、投资人等。

| 角色（示例） | 关注点                                                       |
| :----------- | :----------------------------------------------------------- |
| 业务人员     | 主要关注业务模块、业务流程和系统边界等                       |
| 开发人员     | 主要关注系统的组件、模块和接口等                             |
| 系统管理员   | 主要关注系统的部署、运行和监控等                             |
| 架构师       | 主要关注系统的整体设计、问题和优化方向，以及未来的演进规划等 |
| 项目经理     | 主要关注系统的边界，团队资源和成本                           |
| CxO          | 主要关注业务领域、组织结构的映射                             |

**信息主体**，即当前架构图想要表达的核心概念是什么。信息主体可以是业务领域、业务用例、系统、系统模块、基础设施等。

| 主体（示例） | 描述                                             |
| :----------- | :----------------------------------------------- |
| 业务领域     | 比如，销售、采购、库存、财务等                   |
| 业务用例     | 比如，采购领域中的采购申请、采购订单、采购入库等 |
| 系统         | 比如，采购系统、库存系统、财务系统等             |
| 系统模块     | 比如，采购系统中的支付模块、订单模块等           |
| 基础设施     | 比如，服务器、网络、数据库等                     |
| 进程间架构   | 比如，系统模块间的调用关系、数据流等             |
| 进程内架构   | 比如，系统模块内的接口、包、分层等               |

信息主体和利益相关方很多时候是有关联关系的，某一些角色会相对固定的关注某一些信息主体。因此，便形成一些可复用的、模式化的架构图，可以帮助团队更好地理解和沟通系统。

### 传递可视化信息

**结构层次分解**，分析信息主体，按整体和部分的顺序分解为不同的层次，并添加细节。

- 分解系统：将系统分解为不同的层次或模块。如，前台、中台、后台，或者业务层、数据层、基础层等。
- 使用容器：使用容器限定系统或层次的边界。
- 显式化层次：使用适当的符号（颜色、线段、形状）来区别不同层次。
- 细化职责和功能：为在每个层次的模块，添加其职责和功能的描述。
- 避免过度细节：保持适度的抽象避免加入过多细节。

**逻辑关系组织**，添加更多细节，调整和突出层次、模块间的逻辑关系。

- 使用合适的布局：选择合适的布局增强可读性和美观性。如层次布局、流程图布局、网格布局等。
- 显示化依赖关系：使用适当的符号或线条来表示组件之间的依赖关系。如消息传递、调用关系、数据流等。
- 强调关键组件：如果系统中存在关键的组件或模块，可以将其放置在显著的位置，并突出显示。
- 添加标签和注释：添加适当的标签、注释和说明。

**风格和风格指南**，形成可复用的、模式化的架构图。

在软件开发发展的这些年，已经有一些比较成熟的架构图风格：

- 统一建模语言（Unified Modeling Language，UML）是一种用于软件系统分析和设计的标准化建模语言。它提供了一套丰富的图形符号，用于表示系统的结构、行为和交互。UML 通常用于面向对象的系统设计，但也可以用于其他类型的系统设计。UML 的图形符号包括类图、对象图、组件图、部署图、活动图、时序图等。
- AWS 架构图，由亚马逊云服务（Amazon Web Services，AWS）提供的一套用于描述和展示云架构的图形符号。AWS 架构图包括了大量的图形符号，用于表示云服务、网络、存储、数据库、安全、分析等方面的内容。AWS 架构图通常用于描述和展示基于 AWS 云服务的系统架构。
- 网络拓扑图，用于描述和展示网络拓扑的图形符号。网络拓扑图通常用于描述和展示网络的结构、组件、设备和连接关系等。网络拓扑图通常用于描述和展示网络的结构、组件、设备和连接关系等。
- C4 模型，由 Simon Brown 提出的一种用于描述和展示软件系统架构的模型。C4 模型包括了多种图形符号，用于表示系统的上下文、容器、组件和代码等。C4 模型通常用于描述和展示软件系统的整体结构和组织方式。

与此同时，作为架构图的绘制者（个人或是项目团队）应该掌握和复用已有的架构图风格，减少信息差便于大家对齐理解。如果现有风格不满足需求的情况下，也可以建立自己的架构图风格 —— 不是随意的拖拽、堆砌一些图形和文字，而是构建标准的绘制手法、保持稳定的图形输出，以便具有相同上下文的利益相关方能够快速理解：

- 遵循标准和规范：不同的风格通常都有相应的标准和规范，这些标准和规范定义了符号的含义、连接方式、布局等要求。在绘制架构图时，应该遵循相应的标准和规范，以确保图形的一致性和易读性。
- 选择适合的风格：根据具体的需求和受众群体选择适合的风格。例如，如果要与开发团队共享架构图，可以选择使用UML标准，因为UML是一种通用的建模语言，被广泛接受和理解。如果要绘制云平台相关的架构图，可以参考AWS架构图风格，以便更好地与AWS服务和工具集成。
- 保持一致性：在整个架构图中保持一致的风格和符号使用，避免混淆和误解。使用相同的符号表示相同的概念或组件，使用相似的线条和布局方式来表示关系和连接。

**使用合适的图形工具**：以确保可以满足所选风格和规范的要求。也可根据个人偏好选择适合的工具，逐渐形成自己的使用习惯。

软件系统相比建筑物来说，其生命周期要短的多，并且需要持续不断的演进和迭代。绘制架构图也需要选择合适的工具，以适应系统的快速变化和演进。如果只是为了简述和讨论，那么使用白板和笔就足够了。如果需要长期保存和维护，那么可以选择一些在线绘图工具。当前这些工具都非常成熟，并且同类产品很多，这里只分享几个笔者常用的工具：

- Excalidraw
- Draw.io
- Jamboard
- PPT (slides, keynote)
- plantuml
- dbdiagram
- mermaid

## Mesh-Shaped 架构视图

综上所述，架构图是

> 即 \\
> -> 针对 “利益相关方” 选定合适的 “信息主体” 用于传达某种信息；\\
> -> 进行 “结构层次分解” 并按 ”逻辑关系组织” 分解出的元素；\\
> -> 按照 ”风格” 调整和添加一些细节 —— 我们就能绘制出一张简明扼要的架构图。

然而，在构建复杂的软件系统时，常常需要多个角色通力合作并进行信息交换。就像是建筑设计中的平面图、立面图、剖面图等，分别描绘的不同视角下建筑物的某项功能和特点，但组合起来才能构建完整的建筑。类似的，在软件开发中我们也有这样一系列的、具有明确职责的、但又相互关联的架构图。比如：

- UML 包含了多种类型的架构图，如类图、对象图、组件图、部署图、活动图、时序图等。
- C4 模型则包含了系统的上下文视图、容器视图、组件视图和代码视图等。
- “4+1” 提出了逻辑视图、过程视图、物理视图、开发视图和场景视图。通过多个相互关联的架构图，对软件系统进行不同维度的描述。

上文提到，架构图使用图形元素作为抽象符号来表达信息，依然会出现上下文依赖和信息过载的问题。因此，绘制架构图时需要考量当前架构图的信息边界，不宜在一张架构图中表达过多的信息。此时，可以通过绘制多张架构图来描述未包含的信息，比如背景、上下文、细节实现。

> 那如何组织这些架构图？既能保证信息传递的完整性和一致性，又最大限度减少冗余呢？

### 结构层次分解

基于过往的经验和 4+1、C4 等工具的使用，我总结了一个架构视图矩阵，用于组织和描述软件系统的不同视图。其核心还是关注点设立：**利益相关方**和**信息主体**。对于较为成熟的软件开发模式/团队来说，利益相关方和信息主体变动不大，因此可以将他们的关系固化下来：

**视图层次**，信息主体所处的层次或者说类别。是表达概念为主，还是实际产物为主。

- **概念视图**：静态视图，描绘关键概念 -> 统一语言和概念
  - 目的：统一团队对项目核心概念和术语的理解。
  - 内容：包括项目的愿景、目标、核心价值主张、用户需求等。
  - 方法：通过工作坊、头脑风暴会议和概念图来定义和共享关键概念。
- **模块视图**：静态视图，描绘层级关系 -> 大小、包含、接触、交界
  - 目的：展示系统的结构化层级和模块化设计。
  - 内容：包括系统的各个模块、组件及其相互关系。
  - 方法：使用UML图、架构图和模块图来描述系统的静态结构。
- **实现视图**：静态视图，描绘某一个时间点的产物 -> 等价交付物
  - 目的：描述在特定时间点的系统实现状态。
  - 内容：包括代码库、数据库架构、API接口等具体的实现细节。
  - 方法：通过代码审查、技术文档和部署图来展示系统的实现状态。
- **动态视图**：动态视图，描绘依赖关系和时间轴上的先后顺序 -> 前置后驱
  - 目的：展示系统的动态行为，包括依赖关系和时间轴上的先后顺序。
  - 内容：包括系统的工作流程、数据流、用户交互流程等。
  - 方法：使用流程图、状态图和时序图来描述系统的动态行为。

**利益相关方层次**，当前架构图的主要关注者。但不代表其他人不关注这些信息，只是关注程度不同。

- **管理**（CxO，PM）：产品/项目的领导者，关注愿景、方向、价值
  - 关注点：产品的长期愿景、战略方向和商业价值。
  - 需求：需要高层次的业务视图，包括市场分析、竞争分析和ROI预测。
  - 沟通方式：定期的战略会议和高层汇报，以及关键里程碑的更新。
- **产品**（PO，BA）：产品设计者，通过功能设计实现价值
  - 关注点：产品的功能设计、用户体验和市场定位。
  - 需求：需要详细的产品需求文档、用户故事和原型设计。
  - 沟通方式：产品评审会议、用户反馈会议和敏捷迭代计划。
- **架构**（Arch）：架构师，关注 CFR 和系统设计
  - 关注点：系统的可扩展性、性能、安全性和可靠性。
  - 需求：需要系统架构图、技术选型文档和性能测试报告。
  - 沟通方式：架构评审会议、技术研讨会和代码规范。
- **研发**（TL，Dev）：工程师，进行业务功能在系统上的实现
  - 关注点：代码的质量和系统的可维护性。
  - 需求：需要具体的开发指南、代码规范和自动化测试脚本。
  - 沟通方式：代码审查会议、技术分享会和每日站会。

因此，我们可以绘制出以下的矩阵 —— 不同角色（利益相关者）对应到不同视图层次所期望获得的信息主体。

![alt text](../assets/202304-draw-architecture-diagram/image-main.png)
<!-- ![Alt text](../assets/README/image-22.png) -->

#### 隐含的层次

因为组织的规模不同，同样的角色可能代表不同的职责范围。比如，世界 500 强的 CTO 和创业公司的 CTO 关注点是不同的，传统行业研发的架构师和互联网研发的架构师职责也不尽相同。为了避免深入到组织架构的讨论，这里的角色限于负责单一“软件产品”的团队内。

**软件产品层次**，限定本视图对产品、系统、应用的讨论范围。

同样是软件产品，一个图书馆管理系统和抖音的规模是完全不同的，技术架构、系统设计、组织结构和团队规模都是完全不同的。类似抖音的 SuperApp 更像是一个包含多个产品的门户，如直播、商业、短视频、社交。每个产品又由若干个系统组成，如评论系统、弹幕系统、礼物系统，每个系统又有多个微服务和中间件构成。

> 复杂度低，应用 ≈ 系统 ≈ 产品 \\
> 复杂度高，应用 < 系统 < 产品

因此，越复杂的产品绘制出的架构视图也越复杂，甚至可能交叉，如多个产品团队实现同一个愿景，多个技术化团队支持同一个产品。为了方便理清本文中架构图的信息边界，这里先对我们所讨论的软件产品下一个笼统的、仅供参考的定义。

- 应用：在单个进程或 Pod 内运行的程序，用于提供 API 调用。也可以是中间件和封装好的 API 接口。
- 系统：由一个或多个应用组成，用于提供特定业务功能。
- 产品：由一个或多个系统组成，用于提供特定的行业价值。

另一个隐含的层次是生命周期，各个视图的出现的时机和修改频率是不一样的，你不会频繁的修改你的愿景，但你却需要时刻关注项目进度。

**产品生命周期**，描述软件产品的整个生命周期，从概念到实现再到维护。

- 设计：如何根据用户需求设计产品的功能和界面，并确定技术选型。
- 开发：如何根据设计文档实现产品的功能和界面，并进行测试和部署。
- 运维：如何根据用户反馈和运行数据优化产品的功能和性能，并进行维护和升级。

### 逻辑关系组织

接下来，我们要为架构图添加依赖关系，以突出不同关注点间的逻辑关系。

#### 设计阶段

![alt text](../assets/202304-draw-architecture-diagram/image-01.png)

设计阶段的核心是产品设计和系统设计：

- 产品需要根据用户需求和市场定位确定产品的功能 （产品x概念）
- 产品需要和管理层沟通产品的愿景和战略方向（管理x概念）
  - 产品的愿景和战略方向是否符合公司的战略目标？
  - 产品的功能是否能提供用户价值？
  - 产品的盈利模式是否可行？
  - 愿景是否调整？
- 产品需要根据用户需求设计出产品的功能和界面（产品x模块）
  - 产品的功能是否满足用户需求？
  - 产品的界面是否符合用户习惯？
  - 产品的交互是否流畅？
- 产品需要和架构师沟通设计领域模型（架构x模块）
- 架构师需要根据产品的功能设计系统的架构（架构x概念）
  - 技术选型是否满足产品的需求？
  - 核心数据结构是否合理？
  - 数据如何流转？
- 架构师需要根据技术选型列出NFR（架构x实现）
- 架构师需要和开发团队沟通确定系统职责（研发x概念）

> 可以看到，这些视图形成了一个反馈链，任何一个“架构”的修改，都可能引发其他架构的调整。如愿景的调整会增加或裁剪产品功能，架构设计时发现遗漏或是无法实现的功能。

<!-- ![Alt text](../assets/README/image-23.png) -->

#### 开发阶段

![alt text](../assets/202304-draw-architecture-diagram/image-02.png)

之后我们便进入开发周期:

- 管理根据产品规划的功能划分团队（管理x模块）
- 产品根据用户需求设计原型图（产品x模块）
- 研发根据产品设计和技术框架实现功能（研发-）

#### 运维阶段

![alt text](../assets/202304-draw-architecture-diagram/image-03.png)

软件具有第一个可发布版本后，我们便进入运维阶段：

- 产品需要关注运营指标和用户反馈（产品x动态）
  - 是否调整运营策略？
  - 产品功能是否满足用户需求？
- 管理需要关注迭代计划（管理x动态）
  - 项目进度是否符合计划？
  - 是否需要调整团队资源？
- 管理需要关注营收和预算（管理x实现）
  - 项目的成本是否控制在预算内？
- 管理需要适时调整愿景（管理x概念）
  - 是否有新的商业机会？
  - 是否有新的竞争对手？
  - 营收目标是否达成？

> 上述阶段可以同时存在，特别是在产品的初期，需要快速的迭代和验证产品的功能和用户需求。因此，在快速迭代的团队，如何及时的同步信息，是非常重要的。
>
> 同时，每一个角色都要明白，你的产出对其他角色的工作有什么影响，如何协作和沟通。否则就会出现，管理层修改愿景却不留给产品足够的时间去调整功能，产品设计了暂无法实现的功能又不留给架构师调整架构的时间，最后导致团队无法按时交付，质量低，用户反馈差。

### 风格（示例补充）

最后，整个团队使用相同的设计语言（颜色、字体、线条、形状）来绘制架构图，以确保图形的一致性和易读性。以一个智能物业系统为例... （随便想的一个例子，主要看图）

- 精益价值树
![Alt text](../assets/202304-draw-architecture-diagram/image-31.png)

- 价值流图
![Alt text](../assets/202304-draw-architecture-diagram/image-32.png)

- 业务全景图
![Alt text](../assets/202304-draw-architecture-diagram/image-33.png)

- 技术全景图
![Alt text](../assets/202304-draw-architecture-diagram/image-34.png)

- 系统上下文 (C4/Context)
![Alt text](../assets/202304-draw-architecture-diagram/image-35.png)

- DevOps 价值流图
![Alt text](../assets/202304-draw-architecture-diagram/image-38.png)

- Infra 部署图
![Alt text](../assets/202304-draw-architecture-diagram/image-36.png)

- 进程间架构 (C4/Container)

![Alt text](../assets/202304-draw-architecture-diagram/image-37.png)

- 进程内架构

> 进程内架构则是我们熟悉的代码设计了，可以是类图、对象图，也可以是一个功能的具体设计，主要是目的是描述代码实现的逻辑结构。

## 总结

> 画架构图的目的是为了沟通，而不是为了画图而画图。

不论是哪种类型的架构图，它们的本质都是用来传递信息。**为了高效地传达信息，绘制架构图时首先要明确目标受众群体和信息主体，即“向谁传达什么信息”。**

熟悉信息主体（部署情况、服务依赖关系、代码结构、数据流向），了解利益相关者（老板、业务 PO、技术 Leader、测试工程师），之后再考虑你应该绘制怎样的一张架构图。
`,se=`# Tunnel vs VPN vs VPC

最近研究 VPN 所得 ...

> [路由 vs 代理 vs 网关](../2022/202205-router-proxy-gtw.md) 的续集

## 隧道 Tunnel - 连接 2 个不可达网络

![tunnel](https://s2.loli.net/2023/04/17/y5EnxTrbtIAN7z9.png)

上文的路由和代理通常不会对报文做大的修改，而隧道通常用于将 2 个局域网通过公网进行连通，或是将 2 个不同协议的的网络连通。

因此隧道会对其他协议的数据帧进行：

- 包装、改写报文头
- 加密
- 添加额外信息（日志、追踪）
- ...

网络的每一层都是对报文的包装，所以隧道可以工作在任何一层，只需编写对应的隧道程序，编码和解码该层的报文。

## 虚拟私有网络 VPN

![vpn](https://s2.loli.net/2023/04/17/KMUOH1bTycPYtJv.png)

VPN 有明确的 Server/Client 2 端，Client 必须与 Server 连接才能正常工作

- 此时的 Server 就是一个网关设备，用于连接不同网络的 client 设备
- 此时 Server 和 Client 的连接也都是基于隧道技术，以保证跨网络传输时的数据安全

## 虚拟设备 TUN/TAP

TUN/TAP 是 Linux 内核的虚拟设备，使单一节点具有多个虚拟地址（IP/Mac），也可以配合 VPN 使用。

## Underlay vs Overlay

得益于隧道和虚拟设备，逻辑上的网络架构和物理层的网络架构可以呈现出完全不同的表现。

- 相隔万里的 2 台主机可以工作在同一个局域网，使用同一个网段
- 一台主机上的 2 个应用处于不同的虚拟网络，相互隔离

## 虚拟私有云 VPC / Vnet

随着虚拟设备的增多，VPN 需要处理多节点、组播、广播以及同一 host 下的 VM 互通，因此分支出了虚拟局域网相关技术，用于构建数据中心的大规模网络。

## 虚拟网络 vs 容器网络

这两者其实很像...

## 附录：全景图

![landscape](https://user-images.githubusercontent.com/24785373/232397473-f7138d09-5baf-4a74-9aba-0068729a17aa.png)

### Documents

- <https://support.huawei.com/enterprise/zh/doc/EDOC1100164807>
- <https://itnext.io/kubernetes-is-hard-why-eks-makes-it-easier-for-network-and-security-architects-ea6d8b2ca965>
- <https://www.pinterest.com/pin/coreosflannel--22940279328297785/>
- <https://access.redhat.com/documentation/en-us/red_hat_virtualization/4.4/html/technical_reference/cluster_networking>
- <https://www.rebeladmin.com/2018/01/azure-accelerated-networking/>
- <https://dzone.com/articles/step-by-step-guide-establishing-container-networki>
- <https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/6/html/virtualization_administration_guide/sect-attch-nic-physdev>
- <https://zh.wikipedia.org/zh-cn/%E9%9A%A7%E9%81%93%E5%8D%8F%E8%AE%AE>
`,oe=`# 云原生左移：开发环境“一体”化 - 图解云原生应用的开发与调试

## 背景

（本文不探讨“测试”对软件质量的作用，只是给出线上开发、调试的相关思路）

微服务架构和 Kubernetes 的流行给复杂软件应用的开发和部署提供了便利，但同时也带来了新的复杂性。一个软件系统可能包含上百个微服务应用（或 replicas），以及数十个中间件和云服务依赖。导致大多数的微服务应用都只能在本地跑跑单测，有的甚至连编译都无法通过。

> "does it work on your machine?"
> "no, it only works on cluster"
![](https://s2.loli.net/2023/06/05/9dU5IOnfeFXrmsk.png)

即使本地可以运行某个微服务，但上下游服务和中间件的依赖、云上网络和集群差异，常常导致调试结果不甚理想。一旦返工又需要重新编译打包部署（CI/CD），等待部署生效的时间可能比修改代码的时间要长得多了 ...

![](https://s2.loli.net/2023/06/05/v1j2stXfigwDoA5.png)

我们单独看某一次代码提交和部署的时间并不是很长，但遇到未知的、棘手的问题，我们就需要反复尝试和验证，此时受到 CI/CD 和云端环境的限制，这个时间就会呈倍数增加

![](https://s2.loli.net/2023/06/05/SHrPGlmZihnOqw8.png)
![](https://s2.loli.net/2023/06/05/aQgvMZ8pHi7VBKe.png)

实际耗时

![](https://s2.loli.net/2023/06/05/zDCHl3OJpNTuRqb.png)

___

因此我们在思考，能不能把云端环境做成“本地环境”一样，能够即时修改、即时编译、即时生效 ...

![](https://s2.loli.net/2023/06/05/ViS4g15j29sPuMC.png)

（本地、开发机：指的是开发者的机器，在近端）
（远端、集群、云端：指的是云环境中的机器，在远端）

## 构建并替换测试镜像

![](https://pic1.zhimg.com/80/v2-f7f850f928d48866afc291fc10bc8ab8_1440w.webp)

由本地进行 “编译、打包（docker）、部署”，以跳过 CI/CD 阶段以节省跑流水线的时间。用临时生成的开发镜像对线上环境进行替换，然后重新测试整个链路。

![](https://pic4.zhimg.com/80/v2-fc326f231bdac873610e0d88964fcf53_1440w.webp)

当然也可以结合 Service Mesh，避免影响正常环境的使用。

优势

- 简单易懂

劣势

- 仍需打包 docker 镜像并且上传制品库（registry）
- Reload 时间在分钟级

相关开源技术：Skaffold

## VPN 组网

![](https://pic2.zhimg.com/80/v2-aba5162bddaf66c5ebb25fe5dfb3dde1_1440w.webp)

这种方式是基于 Overlay 网络的思路，将本地主机 peering 进集群网络作为一个 “运行指定 Pod 的节点”。通过 Service Mesh 等技术以某种规则拦截访问流量，并通过 VPN 隧道转发到本地，完成 “集群到本地” 的访问。当本地应用需要访问其他 Pod、云服务、集群内域名时，相应流量也会被本地的 VPN 拦截并转发到集群中，由集群内的代理进行处理。

优势

- 本地应用即本地开发，可做到热更新
- 只做网络转发，集群的工作负载不会因此增加太多

劣势

- 方案复杂，路由规则（基于 cluster ip、基于 dns、基于端口、基于协议）可能会很复杂
- 连接数较多时，代理（Traffic Manger）负载会很高，可能成为瓶颈
- 本地环境仍是近似线上环境，无法利用云上的插件（e.g. PV、Cloud Controller Manager）

相关开源技术：telepresence、kubevpn

> 扩展思路：  
>
> - 集群使用 Terway 网络，Pod 直接分配 VPC 内的网络地址  
> - 本地主机使用 VPN 连接到 VPC 网络  
> - 使用路由 + Service Mesh，实现本地主机（上的应用）和 Pod 互联

## 开发容器远程开发

![](https://pic2.zhimg.com/80/v2-a232ceb0676cbf1523c777b20ffba321_1440w.webp)

将开发环境打包成容器（即将容器作为开发环境）直接运行在集群内。相比方案一中国“构建并替换测试镜像”，这里的容器是一个包含 os、sdk、cli 的全功能容器，因此可以在容器内直接书写代码、编译并运行，不用频繁的构建整个镜像，只需要修改代码再 run 就行。还可以将容器暴露成远端主机，利用 VSCode Remote 插件进行远程开发。

优势

- 可热更新，开发环境即线上环境
- 定制开发容器，可以简化开发环境的配置（预装好相关工具）
- 本地只需要命令行或 IDE
- 安全性高，代码资料都在远端

劣势

- 集群工作负载增加（cpu/内存/带宽），原应用可能只需要 0.1c0.1g，而开发容器打底就需要 1c1g
- 需要暴露更多的端口

相关开源技术：Nocalhost、VSCode Server

> 扩展思路：可以把给程序员买 Mac 的钱省下来用到云上 😄

## Web IDE 远程开发

![](https://pic1.zhimg.com/80/v2-a0c70ee07ec4de634ed54654c39ece1c_1440w.webp)

开发容器和 Web IDE 其实是一个思路，即整个开发环境在远端。在开发容器的基础上更进一步，将 IDE 也放到远端，对本地的依赖更少，更容易做到集中化管理。

相关开源技术：[Coder](https://link.zhihu.com/?target=https%3A//coder.com/)、VSCode Web

### 脑洞

这里的 Web IDE 和现在业界的思路还不太一样。本质上，我们是希望能够做到云端开发、部署、运行是一体的，我们的 “代码开发环境“ 和 “dev 开发环境” 就是一个环境，在开发和调试阶段就能够使用到云上的资源。

比如，为开发容器分配独立的 configmap、secrets 和 serviceaccount，在容器内通过 vpc 的内网 ip 和端点来访问云服务。

![](https://s2.loli.net/2023/06/05/3iVTgwatB6h8vYD.png)

面对越来越复杂的软件系统，我的小 mac（6c16g）早已不堪重负。虽然 Web IDE 资源消耗会更大，但相应的对本地主机的要求也会降低，相当于把物理机合并成了集群的节点池，总的成本上可能还会降低。
`,re=`# 软件开发管理中的敏捷和精益

_（笔者主要从事敏捷开发的技术工作，但不是专业的敏捷教练或者精益专家）_
_（内容并没有包含所有敏捷和精益的概念，仅从实践角度谈个人经验）_
_（所示分类仅代表个人意见，欢迎讨论）_

## 敏捷 和 精益

敏捷（开发）始于 “敏捷宣言”，对迭代、增量式的软件开发模式进行了总结，目的是应对快速变化的需求，并提升软件的质量。

精益（生产）则是从日本制造业 —— 丰田生产系统（TPS）总结和演进而来，用最少的工作，创造更多的价值。

两者看起来并无关系，但潜在的价值观却有很多不谋而合之处，我也一直在思考这样一些问题

- 软件开发到底是 “创造” 活动，还是 “制造” 活动
- 软件交付 和 （工业）产品交付有什么区别
- 软件的流水线 和 工厂流水线 的相似性
- ...

在追溯 Scrum、Kanban 等 “敏捷项目管理方法” 的过程中，我发现很多工具和方法论都是来源于制造业。现在大多数软件都更像是一种工业产品，有明确的设计图（架构图）、有明确的工艺（框架/语言）、有明确的工人（程序员）和明确的步骤（开发、部署、维护）。但，软件也具备 “研究型” 产品的特质，适用性广（各行各业）、材料易获取（只是代码而已）、个人共享可占比高（一个高手顶十个）。

所以，软件开发既要能从制造业吸取管理经验，又要能输出符合自身发展的管理理论。

## 技术/管理 x 理论/实践

![](https://pic1.zhimg.com/v2-123e5739332a6ba55f85609d172cac94_r.jpg)

- 广义的敏捷，是包含如极限编程、整洁代码、DevOps 等方法学和工具的一个集合体。
- Scrum 和 Kanban 的原型其实都是始于丰田（早于敏捷概念的提出），但后来被引入到软件开发管理上，逐渐变成了敏捷管理方法。（Ken Schwaber 即是敏捷宣言的发起人，又是现代 Scrum 的创立者）
- 将精益价值流的分析迁移到软件开发过程中，推动了软件交付的自动化，以减少各个流程交替的时间和上下文切换的消耗
- 精益价值树也可以被用来聚焦产品的核心愿景和投入，以便确立 MVP

## 个人 团队 部门 企业  

![](https://pic2.zhimg.com/v2-1bdb1be25c8713045f24a89090ee8be9_r.jpg)

- 从组织层面看，敏捷更关注个人（毕竟一开始程序员比较少），如 TDD、结对 等工程实践
- 随着团队体量的增加、软件复杂性的提升、知识负载的增加
  - 一方面需要引入项目管理管理大型团队，如 Scrum、Kanban
  - 一方面需要降低认知负载，如 DDD、平台化、组件化/模块化
  - 一方面需要革新技术提升效率，如 DevOps、自动化、云原生
- 而以 IT 技术为核心的公司，因为 “产品” 的特殊性，其组织结构也会发生转变（或是本就如此）
  - 层级较为扁平
  - 教练 coach over 导师 mentor，崇尚自我提升自我学习
  - 自管理团队，以产品、项目团队为单元，而非横向部门
`,ie=`# 用 cobra 实现自己的 cheatsheet

<https://github.com/Anddd7/adcli>

虽然 Go 语言在写业务代码时的感受很差，但用来制作命令行工具时缺点就变成了优点，非常的高效

- 体积小
- 编译速度快
- 性能高
- 语法简单实用

## Quick start

我的第一个 cli 就是用来创建博客的 md 文件，并自动加入到 _sidebar.md 中进行发布

\`\`\`sh
cobra-cli init
cobra-cli add blog
\`\`\`

随后只需要按照命令的层级关系，层层组织（书写、调用）就可以完成一个多层级的命令行工具

\`\`\`sh
$ tree ../../github_golang/adcli/
../../github_golang/adcli/
├── LICENSE
├── Makefile
├── README.md
├── bin
├── cmd
│   ├── blog
│   │   ├── create.go
│   │   ├── publish.go
│   │   └── root.go
│   └── root.go
├── coverage.out
├── go.mod
├── go.sum
├── internal
│   ├── have_a_try
│   │   ├── function.go
│   │   └── pointer.go
│   └── tutorial
│       ├── main.go
│       └── mock
├── main.go
├── pkg
└── scripts
    └── fmt_failed.sh
\`\`\`

\`\`\`sh
$ adcli blog                                           
Usage:
  adcli blog [command]

Available Commands:
  create      Create blog file in post folder
  publish     Publish a blog to sidebar

Flags:
  -h, --help   help for blog

Use "adcli blog [command] --help" for more information about a command.
\`\`\`
`,le=`# “在我的电脑上明明可以的” — 图解 DevContainer 构建干净的开发环境

![](https://pic1.zhimg.com/v2-09afb8c8e561f75d874bde41efa327c0_r.jpg)

## 背景

作为一个全栈（干）工程师，可能需要工作在不同的语言和框架上。尽管我使用了一定的目录结构、各种包管理器、版本管理器，本地（MacOS）的开发环境还是日渐凌乱。

比如，一些工具是用 curl 安装的、自带 upgrade 命令，一些又是 brew。特别是切换版本时，可能这个项目需要 Terraform 1.3.5，另一个项目又需要 Terraform 1.2.0。加之 Java 使用的 asdf-vm、Go 使用的 gvm、Node 使用的 nvm，不同的工具也带来了不小的心智负担。

在鼓捣家中的 Windows（WSL）时使用的是 VSCode + WSL 插件，当时就关注到了 DevContainers。随着最近的深入体验，果断弃用 Intellij / Goland（最近 Java 写的太少了）。并且根据常用项目构建了 5 个开发容器，需要哪个开哪个，干净又卫生~

Refer to: [Developing inside a Container using Visual Studio Code Remote Development](https://link.zhihu.com/?target=https%3A//code.visualstudio.com/docs/devcontainers/containers)

## 定义 Define

![](https://pic1.zhimg.com/80/v2-0b47d65b53aa9c6db6fef23f2c031afc_1440w.webp)

DevContainer 使用 json 来定义开发容器的行为，最重要的部分就是

- Image：容器的基础镜像 [containers.dev: Templates](https://link.zhihu.com/?target=https%3A//containers.dev/templates)

- 官方提供了很多主流语言、工具的基础镜像
- 也可以自己构建（需要安装 vs\\_server 用于通信）

- Feature：需要在镜像中执行的脚本、安装的工具 [containers.dev: Features](https://link.zhihu.com/?target=https%3A//containers.dev/features)

- 官方 Spec 定义了一个 Feature 需要的参数接口，可以很容易的扩展自己的安装脚本
- 可作为 OCI 产物一起存到镜像仓库里

## 构建 & 启动 Build & Start

![](https://pic4.zhimg.com/80/v2-5664ed72bbb8f58fcd1cc0fa78d5b747_1440w.webp)

你可以使用 VSCode 的 Command: Create Dev Container 来配置并创建一个开发容器。或者你提前写好了配置文件并放到了对应的路径（.devcontainer/devcontainer.json），打开项目时 VSCode 会自动获取配置信息并提示你是否要 Reopen in Dev Container。

确定之后，DevContainer（的 CLI）工具会构建一个新的镜像并启动对应的容器。你可以按你的使用习惯，按语言、前后端、项目来划分和构建不同的镜像和容器，容器间互不影响。即使创建之后发现容器中缺少某些工具，你仍可以通过修改配置文件然后 reload，或者是直接在容器中安装。

如果开发时需要一些数据库、中间件，你可以使用 docker-compose 来运行一整套环境。  
\\> [Create a development container using Visual Studio Code Remote Development](https://link.zhihu.com/?target=https%3A//code.visualstudio.com/docs/devcontainers/create-dev-container%23_use-docker-compose)

## 连接 Connect

![](https://pic2.zhimg.com/80/v2-fe602d2918e1baec9423793ff9c23f75_1440w.webp)

随后，VSCode 会通过 DevContainer 插件和安装在容器中的 server 进行连接，这时你就可以编辑容器中的文件了。你既可以将本机的代码通过 volume mount 到容器中，也可以直接在容器中 git clone。

（MacOS 和 Windows 上的 Docker 运行时是运行在虚拟机中的，所以 mount 会产生性能问题，建议直接在容器中 clone  
（但缺点就是宿主机上的其他程序就没法编辑这些文件了

**_"Enjoy your Dev Environments"_**

## Tips

- 可以通过 devcontainers.json 甚至 docker export 将开发环境分发给其他人，快速实现团队统一
- Github Codespaces 可以直接使用 devcontainers.json 配置，有条件的可以直接上云了
- 在开发容器中安装的插件只会关联到这个容器，可以避免大量插件出现的冲突

- 叠加 Profile 使用，还可以分离快捷键和 VSCode 配置 （当然必要性不是很高）

- 可以同时启动多个开发容器

![](https://pic2.zhimg.com/80/v2-8f372319fa1a9464e462ddd6534a7f99_1440w.webp)

- 一个开发容器中也可以创建多个项目

- 通过 Command Palette 创建一个开发容器 **或者** 创建一个 starter 项目，配置好 json 文件后 Reopen in Container

![](https://pic3.zhimg.com/80/v2-1959b48b01e08f0eb60d68a2259c27b2_1440w.webp)

- 进入容器后，通过 mkdir 或 git clone 创建新的项目目录
- 使用 Open Folder 打开新的项目目录
- 之后就可以通过 Open Recent 直接进入容器中的项目

![](https://pic2.zhimg.com/v2-2868526299016bfd589152ce101c29d1_b.png)

![](https://pic2.zhimg.com/80/v2-2868526299016bfd589152ce101c29d1_1440w.webp)

## 结尾

从想象力和技术力上来看，VSCode 确实比 Jetbrains 强太多了，或者是 Microsoft/Github 太强了。加上 Copilot / ChatGPT（不久的将来）加持，VSCode 成为宇宙第一 IDE 已经是板上钉钉的事情了。大厂也可以基于这样的技术实现 Remote Coding，在提升开发体验的同时保障数据资产，并且成本可能还更低一些。
`,ce=`# AI 是个筐啥都可以装 - 图解 AI 基本概念

> GPT 是什么？  
> 生成式 AI 是什么样的 AI？还有非生成式的吗？  
> 人工智能研究了这么多年 ChatGPT 为什么2022 年才进入公众视野？

## 背景

在过去的半年，人工智能不再只是学术论文中的颜如玉和科幻电影中的空中楼阁。一夜之间，它就降临到了所有人的身边，并不给你反应和拒绝的机会，连已经退休的父母都在微信中表示略有耳闻。

而对于软件、设计、写作行业的从业人员来说，这个冲击更是直直的迎在了面上。ChatGPT、Midjourney 等 AI 应用不仅改变了大家的工作方式，并在短短的半年内快速迭代，甚至开始影响和改变一些行业规则。

更多的人开始关注、了解和学习 AI，然而从上个世纪 1950 年就开始 AI 就开始萌芽，相关的概念和论文汗牛充栋。笔者虽然也是一名程序员，但大多数知识都在软件工程、应用开发上，在看到 AI 相关的各种概念，特别是各种分类、算法、专业词汇，也是一脸懵逼。因此在阅读了一些资料后，尝试用图解的方式重新整理 AI 的基本概念，从而找出适合自己的一条学习路径。

## AI 的应用领域

![](https://pic4.zhimg.com/80/v2-9d6ab07d82076ddae616b30cf1618a63_1440w.webp)

人工智能是一个存在已久的学科，其目标是研究使计算机能够模拟出人类的只能。而随着科技的发展（人类智力的发展），人工智能想要解决的问题也越来越多。但既然是模拟人，总逃不出 “眼、耳、嘴、大脑” 这些人用于接收和处理信息的感官系统。如果以解决的问题的角度划分，AI 可以分为几个应用领域：

- 问题域：AI 应该能解决哪些问题
  - CV 视觉能力
  - NLP 语言能力
  - VC 听觉能力
  - KG 思维和推理能力
- 复杂问题域：结合多种能力实现的复杂功能
- 自动驾驶、机器人、专家系统等
- 解决方案域：如何使 AI 有解决这些问题的能力
- 机器学习

## 机器学习策略

![](https://pic3.zhimg.com/80/v2-f8252582639800e30e15a7a731d68bca_1440w.webp)

由此我们可以看出，机器学习是让机器能够解决上述应用问题的解决方案。也是在漫长的发展和尝试中，我们得出几种相对靠谱的学习方式：

- 监督学习：对着课本进行教学
- 无监督学习：自学和自由阅读
- 强化学习：对学习成果予以奖励（和惩罚）
- 深度学习：大量的数据和神经网络的使用

各种学习方式并不是冲突的，只是对输入、输出和中间态的处理方式不同，演化到今天，大多数的机器学习都会叠加多种学习方式以实现更好的训练效果。如，使用标记好的数据作为输入，基于深度神经网络进行学习。

## 深度学习

![](https://pic4.zhimg.com/80/v2-1f471d7c7331603b1a08649595519dab_1440w.webp)

当我们的视角聚焦到深度学习时，我们终于捕捉到了生成式 AI、大语言模型这些最近比较火的名词。因为计算能力（CPU/GPU）的发展，通过神经网络训练的模型效果已经远远比其他学习方式来的强（所谓大力出奇迹）。

- 当训练数据、参数到达一定的数量级后，就形成了“大”模型
- 根据数据类型（输入输出）分为语言模型和图像模型（可以扩展为语音、视频模型）
- 区别于判别型 AI（这个图片是不是一只小狗），生成式 AI 可以根据训练数据输出新的内容

## LLM 大语言模型

![](https://pic4.zhimg.com/80/v2-772a3863c18267c3706c9d70d3bf4c37_1440w.webp)

大语言模型和生成式 AI 的划分维度是不一样的，一个是以输入数据的量级来看，另一个则是输出内容的模式。但应用了大语言模型的训练方式之后，生成式 AI 的能力得到了巨大的提升，由此诞生出了我们最近所看到的 ChatGPT、LLaMA 等模型。所以在现阶段，我们也常常说 LLM = GenAI。

LLM 的训练方式，还是逃不出监督、无监督、强化学习和神经网络。之前的科技发展不断叠加，才使得 LLM 在 2022/2023 爆炸式的成功。

(参照：[【精校版】Andrej Karpathy微软Build大会精彩演讲： GPT状态和原理 - 解密OpenAI模型训练\\_哔哩哔哩\\_bilibili](https://link.zhihu.com/?target=https%3A//www.bilibili.com/video/BV1ts4y1T7UH/)）

![](https://pic4.zhimg.com/80/v2-5d82f5e805af422ee8538b10a89517c3_1440w.webp)

LLM 的使用模式也因为 GenAI 的特性，和之前 is A==A 的模式有很大区别。我们可以用自然语言要求 AI “续写” 我们的任务 —— 即继续生成我们想要的但未给出的部分文字（或图像）。

因此我们也有了无需改变模型进行微调的方法，给出指向性前提和足够的 context 作为 prompt，即可影响 AI 的输出结果。

在图像模型上，还有 LoRA 技术可以在已有基础模型上进行叠加（比如，StableDiffusion），以调整模型的输出。

## 神经网络

![](https://pic2.zhimg.com/80/v2-b556b86a0c89af9c1f11d72728b279a1_1440w.webp)

深度学习的核心 —— 神经网络的基本模型其实非常简单，多层感知机和全连接模型也是上个世纪就提出的概念。但数据量上去之后，神经元的连接也是指数级的增加，需要非常多优化和调整才能由计算机进行处理。

![](https://pic4.zhimg.com/80/v2-b21431380163ff222a1726b727abea4f_1440w.webp)

DNN —— 想要表达更复杂的输入输出关系，要么增加参数、要么增加层数，“深度” 也就是这么来的，即增加神经网络的中间层数，来增加映射的多变性。

CNN —— 实际的神经元连接（推理计算）是邻接结构，即当前节点的值会受所有其他节点的影响，但这样的关系是无法被计算的。因此我们需要对节点关系进行采样滤波，只保留相关性更高的连接。

RNN —— 使上一次的输出状态参与计算，以便更好的处理一段文字、一段视频这种具有序列/时间相关的数据。
`,de=`# 从 Handcraft 到 Operator, 0-1 实现 CRD

Code Sample: <https://github.com/Anddd7/playground-k8s-crd>

集群中存在两种资源 Seller 和 Buyer

- Seller 通过售卖一定价格（price）和数量（amount）的产品（name）进行获利（money）
- Buyer 会根据最高买入价（price）和需求量（amount）来选择一个或多个渠道来买入产品（name）

e.g. 卖苹果的以 100 元每个的价格售卖 10 个苹果，如果有买家出价超过 100，则以买入价来结算总价值

## Handcraft (with client-go)

### Step 1 - 创建 CRD 资源

#### 声明 CRD 资源

相当于注册一个 API 接口，让 K8S API Server 识别并处理请求

\`\`\`yaml
# [artifacts/crd-seller.yaml](https://github.com/Anddd7/playground-k8s-crd/blob/handcraft/artifacts/crd-seller.yaml)
apiVersion: apiextensions.k8s.io/v1
kind: CustomResourceDefinition
metadata:
  name: sellers.playgroundk8scrd.anddd7.github.com
spec:
  group: playgroundk8scrd.anddd7.github.com
  versions:
    - name: v1alpha1
      served: true
      storage: true
      schema:
        openAPIV3Schema:
          type: object
          properties:
            spec:
              type: object
              properties:
                name:
                  type: string
                amount:
                  type: integer
                price:
                  type: number
                money:
                  type: number
  scope: Namespaced
  names:
    plural: sellers
    singular: seller
    kind: Seller
    shortNames:
      - seller
# [artifacts/crd-buyer.yaml](https://github.com/Anddd7/playground-k8s-crd/blob/handcraft/artifacts/crd-buyer.yaml)
...
              properties:
                name:
                  type: string
                amount:
                  type: integer
                price:
                  type: number
  scope: Namespaced
  names:
    plural: buyers
    singular: buyer
    kind: Buyer
    shortNames:
      - buyer
\`\`\`

#### 声明 Seller 和 Buyer 资源

通过 Yaml 创建“资源”，就像创建 Pod、Deployment 一样

\`\`\`yaml
# [artifacts/sellers.yaml](https://github.com/Anddd7/playground-k8s-crd/blob/handcraft/artifacts/sellers.yaml)
apiVersion: "playgroundk8scrd.anddd7.github.com/v1alpha1"
kind: Seller
metadata:
  name: seller-apple
spec:
  name: apple
  amount: 10
  price: 100
  money: 0
# [artifacts/buyers.yaml](https://github.com/Anddd7/playground-k8s-crd/blob/handcraft/artifacts/buyers.yaml)
apiVersion: "playgroundk8scrd.anddd7.github.com/v1alpha1"
kind: Buyer
metadata:
  name: buyer-apple
spec:
  name: apple
  amount: 10
  price: 100
\`\`\`

#### 测试和验证

Apply 所有的资源到集群里

\`\`\`sh
# apply crd
k apply -f artifacts/crd-seller.yaml -f artifacts/crd-buyer.yaml

k get crd sellers.playgroundk8scrd.anddd7.github.com
k get crd buyers.playgroundk8scrd.anddd7.github.com

# apply resource
k apply -f artifacts/buyers.yaml -f artifacts/sellers.yaml

k get sellers
k get buyers
\`\`\`

\`\`\`sh
k get buyers -o jsonpath='{range .items[*]}{@.metadata.name}:{@.spec.name}{"\\n"}{end}'
k get sellers -o jsonpath='{range .items[*]}{@.metadata.name}:{@.spec.name}{"\\n"}{end}'
\`\`\`

### Step 2 - 创建 Controller

> 为了便于项目的管理，需要尽量保持 项目、module、api group 等名称保持一定的统一 \\
> 特别是 code generator 可能会因为名称不统一而不工作

- 项目名：github.com/Anddd7/playground-k8s-crd
- group: playgroundk8scrd.anddd7.github.com
- short: playgroundk8scrd
- version: v1alpha1

#### 初始化项目

\`\`\`sh
go mod init github.com/Anddd7/playground-k8s-crd
\`\`\`

#### 创建 pkg/apis/playgroundk8scrd/register.go

声明能够被 client-go 识别的参数和变量（如果用其它的语言 sdk，也需要 follow 相应的规则）

\`\`\`sh
mkdir -p pkg/apis/playgroundk8scrd
touch pkg/apis/playgroundk8scrd/register.go
\`\`\`

\`\`\`go
package playgroundk8scrd

const (
 // same as the group name of the crd 'spec.group'
 GroupName = "playgroundk8scrd.anddd7.github.com"
 Version   = "v1alpha1"
)
\`\`\`

#### 创建 skeleton 代码

- pkg/apis/playgroundk8scrd/v1alpha1/doc.go
- pkg/apis/playgroundk8scrd/v1alpha1/types.go
- pkg/apis/playgroundk8scrd/v1alpha1/register.go

参照 kubernetes/sample-controller 定义 CRD 资源在 Go 代码中的结构体

#### 目录结构

\`\`\`sh
$ tree                                         
.
├── LICENSE
├── README.md
├── artifacts
│   ├── buyers.yaml
│   ├── crd-buyer.yaml
│   ├── crd-seller.yaml
│   └── sellers.yaml
├── go.mod
├── go.sum
└── pkg
    └── apis
        └── playgroundk8scrd
            ├── register.go
            └── v1alpha1
                ├── doc.go
                ├── register.go
                └── types.go
\`\`\`

### Step 3 - 编写 Controller

#### 准备 code generator，从 sample-controller 里复制 hack 文件夹

#### 修改 hack/update-codegen.sh (项目名和包名)，并执行

\`\`\`sh
# ... resolve compile issue
go mod vendor
chmod -R 777 vendor
./hack/update-codegen.sh
\`\`\`

#### 复制生成的文件到 pkg 下

\`\`\`sh
mv ../github.com/Anddd7/ vendor/github.com/
mv vendor/github.com/Anddd7/playground-k8s-crd/pkg/ .
\`\`\`

#### 编写 [main.go](https://github.com/Anddd7/playground-k8s-crd/blob/handcraft/main.go) 和 [controller.go](https://github.com/Anddd7/playground-k8s-crd/blob/handcraft/controller.go)

重点是修改 [contorller.go#syncHandler](https://github.com/Anddd7/playground-k8s-crd/blob/handcraft/controller.go#L222) 方法，当监听到资源的改变时，进行响应

#### 运行和验证

\`\`\`sh
go run .

# all products has been selled, and money increased 
k get sellers -o jsonpath='{range .items[*]}{@.metadata.name}:{@.spec.name}:{@.spec.amount}:{@.spec.money}{"\\n"}{end}'
k get buyers -o jsonpath='{range .items[*]}{@.metadata.name}:{@.spec.name}:{@.spec.amount}{"\\n"}{end}'
\`\`\`

#### （后续）放到集群中运行

- Docker build
- Add service account
- Add deployment manifest
- ...
- Apply into k8s cluster

## Operator

虽然 k8s 提供了非常多工具，让你可以基于 client-go 实现自己的 controller，但整个过程还是非常繁琐。属于灵活性高但效率低的方式。

而 Operator 则是将上述流程进行了包装和自动化，以便更好的使用 client-go、code generator 等工具。并且还额外定义了 ‘启动、停止、更新’ 等操作流来保护被 operator 的应用能够安全的运行。

### Step 1 - 初始化项目和 API

\`\`\`sh
operator-sdk init --domain mesh-shaped.top --repo github.com/Anddd7/playground-k8s-crd
operator-sdk create api --group transaction --version v1alpha1 --kind Seller --resource --controller
operator-sdk create api --group transaction --version v1alpha1 --kind Buyer --resource --controller
\`\`\`

### Step 2 - 修改资源定义

- 修改 api/v1alpha1/buyer_types.go 和 api/v1alpha1/seller_types.go，添加必要的参数
- make generate，自动生成新的 deep copy 方法
- make manifest，自动生成新的 manifest 文件

### Step 3 - 修改 controller

#### 实现 Reconcile 方法

修改 [controllers/buyer_controller.go](https://github.com/Anddd7/playground-k8s-crd/blob/main/controllers/buyer_controller.go) 和 [controllers/seller_controller.go](https://github.com/Anddd7/playground-k8s-crd/blob/main/controllers/seller_controller.go)

#### 为 controller 添加必要的权限 (RBAC)

通过注解定义对应 SA 的权限，然后用 make manifest 就可以刷新 manifest 文件

\`\`\`go
//+kubebuilder:rbac:groups=transaction.mesh-shaped.top,resources=sellers,verbs=get;list;watch;create;update;patch;delete
//+kubebuilder:rbac:groups=transaction.mesh-shaped.top,resources=sellers/status,verbs=get;update;patch
//+kubebuilder:rbac:groups=transaction.mesh-shaped.top,resources=sellers/finalizers,verbs=update
//+kubebuilder:rbac:groups=core,resources=events,verbs=create;patch
\`\`\`

\`\`\`sh
make manifest
\`\`\`

#### 编写 controller 测试

由 Operator 支撑的 controller 逻辑更加纯粹，所以测试起来会更加容易

- <https://github.com/Anddd7/playground-k8s-crd/blob/main/controllers/buyer_controller_test.go>
- <https://github.com/Anddd7/playground-k8s-crd/blob/main/controllers/seller_controller_test.go>

- <https://sdk.operatorframework.io/docs/building-operators/golang/testing/>

\`\`\`sh
make test
\`\`\`

#### 运行（本地和集群）

\`\`\`sh
# build image and deploy into cluster
make deploy IMG="mesh-shaped.top/playground-k8s-crd:v0.0.1"

# run locally
make install run
\`\`\`

### 总结

从需要执行的操作可以看出，operator 框架大大减少了操作步骤和涉及的工具，几乎只需要 operator-sdk 和 make 命令就可以完成 operator 的开发部署全流程。

### 推荐阅读

- [Kubernetes CRD 详解（Custom Resource Definition）](https://mp.weixin.qq.com/s?__biz=MzIzNzU5NTYzMA==&mid=2247512881&idx=1&sn=e5595b6d101432112d498ffd7cbe5901&chksm=e8c4cdb0dfb344a620aa10bcc283212a00e075e0b3db60e43cf87f03f9832b8d1d6733a8b16f&scene=178&cur_album_id=1990567114293739521#rd)
- <https://github.com/kubernetes/sample-controller>
- <https://sdk.operatorframework.io/docs/building-operators/golang/tutorial/>
`,ue=`# 消费降级 - 配置 Windows 开发环境

“不是 Mac 追不起，只是 Windows 更有性价比”

hah，其实是因为工作原因从 Mac 切换到了 Windows 系统，需要重新搭建自己的开发环境，顺便记录一篇文档方便复用和分享。

## 前情提要

当前作为一名“全干工程师”，会涉及各种类型的技术工作，依赖的工具链也比较杂。除了常用的语言环境外，还需要一个耐造的 K8S 集群。因此我将 Windows 划分为三个子环境：

- Windows 本机
  - 宿主机，主要用于桌面软件的安装和使用，如：网页浏览、邮件收发、文档编辑
  - Yes：只能在 win 环境上操作的东西，No：代码开发、容器运行
- WSL 开发环境
  - 开发机，Linux 环境，用于绝大多数的开发、运维工作
  - Yes：代码开发，No：桌面应用、沙盒集群、虚拟机
- VirtualBox 沙盒环境
  - 沙盒环境，k8s-linux 集群，用于测试和 Debug 集群问题
  - Yes：测试集群、Debug，No：代码开发、桌面应用

划分之后，Windows 本机就是一个相对干净的环境，除了桌面软件和配置 Git 外，不会安装 SDK 和配置环境变量。WSL 则完全承接开发工作，并通过内网 IP 来调试 VirtualBox 中的集群。

## Windows 本机

1. 安装必要的软件

    即需要运行在 Windows 桌面环境的应用，根据个人使用情况选择和替换，如：

    - Logseq（主要的知识库，用 OneDrive 做备份和同步）
    - Visual Studio Code（主要的编辑器，各种插件 YYDS）
    - Windows Terminal
    - WSL
    - VirtualBox
    - Vagrant（代码化操作 VM）
    - FlowLauncher（类似 Alfred，也可使用 uTools）
    - Clash

2. 开启虚拟化功能（为其他环境做准备）

    Win 健 -> Turn Windows feature on or off -> 打开以下功能：

    - Hyper-V
    - Virtual Machine Platform
    - Windows Subsystem for Linux

    也可以通过 Powershell 命令开启

    \`\`\`powershell
    Enable-WindowsOptionalFeature -Online -FeatureName Microsoft-Hyper-V -All
    Enable-WindowsOptionalFeature -Online -FeatureName VirtualMachinePlatform -All
    Enable-WindowsOptionalFeature -Online -FeatureName Microsoft-Windows-Subsystem-Linux
    \`\`\`

3. 其他设置

    - ！！墙裂建议升级到 Win11
    - 通过快捷键操作 Snap 布局、虚拟桌面，体验比 Mac 还要好
    - [非常实用的 Windows 11 键盘快捷键终极列表 - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/460274555)
    - 调整键盘速度：Win 健 -> KeyBoard -> Repeat delay / Repeat rate 拉满
    - 开启世界时钟：时钟 -> 世界时钟 -> 增加城市（对于跨时区工作的同学很有帮助）

## WSL 开发环境

1. 安装 WSL

    WSL 的安装已经有非常多的文档，就不详述了。需要注意的是：

    - 如果安装的是 wsl 1，需要手动下载一个升级包
    - <https://learn.microsoft.com/zh-cn/windows/wsl/install#upgrade-version-from-wsl-1-to-wsl-2>
    - <https://learn.microsoft.com/zh-cn/windows/wsl/install-manual#step-3---enable-virtual-machine-feature>
    - 如果 Win 需要工作在 VPN 环境下，wsl 有一定概率出现网络问题
    - [sakai135/wsl-vpnkit: Provides network connectivity to WSL 2 when blocked by VPN (github.com)](https://github.com/sakai135/wsl-vpnkit)

2. 配置 WSL（Linux）

   - 安装 zsh，配置 zshrc
     - 主要是一些环境变量的配置：<https://github.com/Anddd7/workspaces/blob/main/.initializer.win/wsl/zsh/.zshrc>
     - 很多工具都会往 zshrc 中写东西，建议安装完成后再来整理这个
   - 配置 gitconfig
     - 有多个账号/仓库的情况下，可以建立具有 hierarchy 结构的配置：<https://github.com/Anddd7/workspaces/blob/main/.initializer.win/wsl/git/.gitconfig>
     - 还可以在顶层引入全局的 githook 和 gitignore 来统一管理
   - 配置 ssh
     - ssh clone 的时候需要，这里可以选择在 win 上生成 ssh key，然后复制到 wsl 中使用，就可以配一份 ssh 两边都能 clone

     - \`\`\`sh
       cp -r /mnt/c/Users/your-user-name/.ssh ~/.ssh
       chmod 600 ~/.ssh/id_ed25519
       \`\`\`

3. 准备开发环境

    即安装各种开发工具和代码环境，可参考：<https://github.com/Anddd7/workspaces/tree/main/.initializer.win/wsl>

    值得一提的是容器环境的安装，我选择的是 podman + k3s：<https://github.com/Anddd7/workspaces/blob/main/.initializer.win/wsl/2_0_container.sh>

    - podman
    - 用于代替 docker，底层使用的是 crun 作为容器运行时
    - alias docker=podman，打镜像、运行测试容器
    - k3s
    - 因为有 virtualbox 做沙盒环境，wsl 里只是想装一个最小化 k8s 用来验证 yaml 和部署流程的
    - 但尝试了 minikube 和 kind，由于 cni 和 runtime 的问题各种报错
    - 最后选择了 k3s 一键式安装，啪的一下就装好了，干净又卫生

## VirtualBox 沙盒环境

这一步主要是测试复杂的 k8s 集群，比如我现在要准备一个 Rancher 集群用于测试，如果在 wsl 里面搭建的话会相对麻烦，你需要安装和准备很多工具和运行时，而且还需要考虑和 wsl 的兼容性问题。

而在 VirtualBox 里面，你可以创建一台这样的机器，配置好之后复制多份就能搭建一个集群，非常方便。再加上使用 Vagrant 用脚本来描述机器的配置，就能够实现代码化的操作：<https://github.com/rancher/quickstart/blob/master/rancher/vagrant/Vagrantfile。>

## 总结

总的来说，Windows 作为开发环境还是非常不错的，配置 WSL 的部分对于 Mac/Linux 用户来说基本没有难度。

最大的问题还是网络，比如 Proxy、VPN 环境下，需要在 Win 和 WSL 做一些额外的配置。
`,pe=`# 实现云原生：从技术创新到工程落地

云原生这个概念也炒了一阵子了，开源工具也是出了一茬又一茬，但是真正的落地还是很困难的。很多人对云原生的理解还是停留在容器、微服务、DevOps的工具使用上，不少人在落地时都是一头雾水，不知道从何下手 ——

- 平台多：云平台、容器平台、开发平台、运维平台
- 工具多：编程语言、框架、中间件、数据库、缓存、消息队列
- 概念多：敏捷、DevOps、GitOps、AIOps
- 人员多：开发、测试、运维、安全、数据、产品、运营
- 业务多：SaaS、订阅制

## 云原生的目的

云原生的价值观是希望让软件开发、测试、运维更加高效、快速、安全、可靠。但落到不同的公司，这个目的就有所不同了：

- 有的公司希望通过云原生来提升研发效率 —— 推进 DevOps 的落地
- 有的公司希望通过云原生来提升运维效率 —— 建立 可观测、可治理、可自愈 的运维体系
- 有的公司希望通过云原生来提升商业效率 —— 采用 SaaS 的商业模式

—— “降本增效” 还是内在的核心需求。

## 工程落地的难点

各式工具越来越多，但是工程师们却越来越难以选择。为了扩大市场，这些工具和产品都希望发展成瑞士军刀，能够解决更多的问题来吸引更多的用户。但是，这也意味着工程师们需要花更多的时间来学习这些工具，对比功能和性能、关注更新和漏洞。

在你安装了数百个开源工具后，每一次更新（节点的、集群的、工具的）都是对团队的一种挑战。你必须小心翼翼地检查每一个更新的内容，以确保不会对现有的业务产生影响。

## 工程化思考

- API（接口） First

解耦，是防止各种工具野蛮生长的一个方法。如果你的工具都是通过 API 来调用的，那么你就可以随意更换工具，只要新的工具提供了相同的 API。

- 数据工程和可视化

人类在进行判断时，会借助于经验和直觉 —— 即在过去长时间的工作中所积累下来的记忆。而在更复杂的环境中，一是这种经验和直觉就会变得不够用，二是人力的成本也会变得不够用。

所以数据 —— 机器的记忆，就是非常重要的“经验”来源了。而对于充足的、精确的、标准的数据，借助 LLM 构建出 ChatBot，可以大幅提高工作效率。
`,me=`# 随笔 - 二零二四，开年“述职”

过去几年因为前司年终总结的需要，去年也是早早的就完成了2023-Retro和2024-OKR，总体的完成率还是不错的，不过也可能和去年的目标定的比较低有关系。

还记得2022年初的时候，内部的奇思妙想碰到了外部的机遇降临，一时间接触到了好几个有趣的话题：双链笔记和logseq、DDD社区、archguard和架构模式、云原生。在前几个月几乎都处于精神亢奋的状态，同时做着好几件事而效率不减反增，一直持续到了年中，但一直到23年底，都没有再能够回到这种状态。

最近，在熟悉了新的工作内容之后，也开始有了一些新的想法，一连接触了不少新的领域，似乎又有了那种“心流”的感觉。

## OKR

在24年的OKR里，功利性的目标大大减少了。

> 在工作上，不再追求那么多的成就感，而是更多的追求自己的兴趣。\\
> 在生活上，不再追求那么多的物质，而是更多的追求精神上的满足。能够更多的去关注自己的家人，和他们一起做一些有意义的事情。

一方面是因为小朋友的出生带来的精神和物理环境的改变，另一方面，现在从事的运维工作要求的广度和深度也出现了变化，也让我更多的关注到了稳定性和可靠性的重要。

相比于之前的开发（技术顾问）的角色：

- 知识面要求更广，从网络和存储到监控和安全，都需要有一定的了解，以便处理各种奇奇怪怪的问题
- 软技能要求有所降低，之前会常常需要做一些需求管理、项目管理、沟通协调等工作，现在会比较少也有专业的同事来负责
- 技术深度要求更高，需要对各种技术有深入的了解，以便能够快速的定位问题和解决问题

所以只要能够胜任这项工作，那技术能力的构建上就已经足够了。

## 增值点

相比功利性（工作）的目标，我更多的关注的是自己的兴趣点 —— 同时也是保证自己在未来增值的一些目标。

增值有精神上的，比如多看书、多写作，少看抖音、少看花边新闻；也有身体健康和家庭幸福的。新的一年，不能只思考 —— 产生焦虑，而不作尝试和实践。

## 脑洞和尝试

在年末的时候就开始研究一些新鲜玩意，包括运维自动化、AI、文档管理。在这些领域里，都有一些有趣的想法，但是都还没有形成一个完整的产品。短时间内应该会持续在这些方向上进行尝试。

### 运维自动化

> 在当前的工作中，还是有很多手动的运维工作，有些是工具不成熟、不好集成，有些则是故意为之。如何平衡自动、半自动、手动的工作量和可靠性，是构建工具的一个重要的考虑点 —— 不是能不能，是允不允许。\\
> 程序员讨厌别人不写注释，但更讨厌别人要求程序员写注释；在每个项目中都有大量的文档，写的时候很痛苦找的时候也很痛苦。但一个团队，如果知识仅存在于团队成员脑海中，遇到问题时很容易出现“单点失效”，一个人休假都可能导致工作暂停。

在敏捷开发的时候，我们常说代码即文档，是否在运维层面也能有这样的实践呢？比如，通过代码来描述运维的各种操作、规则和策略：

- jypyter notebook，把runbook和操作步骤放到一起，一个notebook既是文档又是操作记录
- cloudposse/atmos，用工具串接各种自动、手动的操作（shell、sdk、cli、web），并记录操作日志

与此同时，我也发现了一些新的用于绘图或是记录文档的工具：

- Diagrams，绘制云架构图，Python
- D2，对标plantuml，基于DSL支持时序图、类图等，更简单更好看
- Marp，使用markdown书写ppt，可以一定程度减缓强迫症
- **Logseq，在这一年也做了很多更新，从个人知识管理转变为适合项目和企业的知识库**
  - 支持 whiteboard <-> page 的双链，可以构建更自由的知识图谱
  - 支持 http api，可以通过api来打通知识库和外部的链接，比如jira/github
  
### AI

> 而说到AI，2023年的技术圈是被AI统治的，聊啥都能聊到AI上去。当然，事实证明AI确实对很多行业产生了质的影响，从我自己而言，写代码、写文章、翻译、做计划等都会用到AI。下一步，AI就会成为像云计算一样的基础设施，融入到各行各业中去。\\
> AI的改变不会是颠覆的，或者说对大多数行业不会是颠覆的，因为人类的认知是无法跃升的，不是所有人都能直接使用ChatGPT去做日常工作的。但以Copilot的模式，融入到日常的操作流程中，比如聊天联想表情包、自动补全、翻译和摘要，这些是一定会发生的。

**Not everything needs AI, but try everything with AI.** 从这个角度来看，AI的应用场景是无限的，只要能够提高效率，就是有意义的。

- wrap，命令行AI提示
- github copilot cli，同上
- **llm-as-service**
  - > 现在很多的大模型都提供了API，可以直接调用，毕竟自己搭建的成本还是很高的（训练、运行、维护）。\\
    > 基于API，就可以构建更复杂的AI应用了，比如通过 ChatGLM 生成绘本文本，再通过 Liblib 生成插图。\\
    > 避免运营商绑定的同时，也可以根据场景使用更便宜、更适用的服务
  - 文字生成
    - [ChatGPT](https://chat.openai.com/)
    - [Bard - Google](https://bard.google.com/)
    - [ChatGLM - 智谱 AI](https://open.bigmodel.cn/trialcenter?modelCode=chatglm_turbo)
    - 豆包 - 字节 (原生app)
  - 图片生成
    - [Stable Diffusion — Stability AI](https://stability.ai/stable-diffusion/)
      - non-official - [Stable Diffusion AI 在线生成器](https://www.stablediffusionai.ai/zh-CN)
    - [Midjourney](https://www.midjourney.com/home)
    - [LiblibAI·哩布哩布AI - 中国领先的AI创作平台](https://www.liblib.art/)
  - 多模态（文+图）
    - [NovelAI - The AI Storyteller](https://novelai.net/)
    - [星火大模型 - 科大讯飞](https://xinghuo.xfyun.cn/desk)
    - 通义千问 @阿里
    - 文言一心 @百度
`,he=`# 图解工作法

去年在[架构图怎么画](../2023/202304-draw-architecture-diagram.md)中总结了架构图的绘制方法之后，我开始思考如何将图的方式应用到更多的场景中，比如学习和生活中。

随着绘图技能的熟练度增加，我发现不同的图其实就是不同的思维工具。比如，思维导图就是逻辑树的一种实现，将问题分解为子问题，再递归分解，直到得到可解的小问题。再比如，时序图则以时间为轴，描述了多个主体之间的事件发生顺序和关系，用来进行推理断案（剧本杀）也是不错的选择。

## 图解：可视化思维模式

相比不可言说的大脑内的思维运转，用图来表现和记录你的思考过程，可以更加清晰和直观。不仅可以帮助你日后回顾和整理，还能帮助他人理解你的思考过程。

得益于现在丰富的绘图工具和图例，白板、版本化、代码化、图层 ... 绘制一些简单的图甚至比打字更快

## 步骤

话虽如此，想要将图解工作法应用到更多的场景中，还需要一些方法论和实践。先思考，再输出，图解只是一种输出形式。

### 复现

将脑中的信息“抛”到白板上

> 类似头脑风暴，将所有的信息都记录下来，不做筛选 \\
> 可以释放大脑内存，便于后续思考

### 发散

对当前的信息进行发散

- 是否有遗漏的信息
- 是否有补充的说明
- 信息间是否存在关联，时间先后、依赖、组成

> 包括纳入外部信息，进行对比和参考 \\
> 比如访谈、搜索

### 收敛

聚焦关键信息进行整理

- 语义收敛：使用简称、符号、颜色来表达信息的种类和内容
- 逻辑收敛：通过距离、方向、形状来表达信息的关系和结构
- 找出关键信息

> 通过这一步可以精炼信息，减少冗余 \\
> 也会迫使你对信息再进行一次思考和检索

### 重组

以收敛后的关键信息为中心，选择合适的图例重新绘制图

> 收敛之后你就知道你需要什么样的图来表达你的思考 \\
> 也可以根据图的特性来进一步思考

## 工具

> diagrams tools: <https://github.com/Anddd7/docs-architecture-diagrams>
`,ge=`# 逐步完善的 LLM 应用架构

在过去的一年，AIGC 的浪一波又一波的拍向了各个行业，各种的应用和项目也如雨后春笋般涌现。经过一年多的迭代，底层模型的质量和数量都得到的极大的提升，特别是开源模型的迭代速度更是快的让人吃惊。中上层的框架和应用也发展迅猛，像是 Langchain、ollama 这样的项目，降低了构建 LLM 应用的门槛也提升开发的速度。

我也是最近发现了 ollama 这样一个工具，从而开始了对 LLM 应用开发的探索。

## LLM 架构演进

一开始受限于上下文 token 的限制，大家只能通过一些简单的提示和上下文来使用 LLM 模型。比如，给定一些上下文信息或是给 AI 设定一些角色和任务，然后让 AI 继续下文。这样的应用虽然简单，但是也能够满足一些简单的需求。

![alt text](../assets/202402-llm-application/image.png)

> - chrome prompt 收藏夹: <https://github.com/Anddd7/poc-aigc/blob/main/chrome/image.png>
> - langchain prompt template: <https://github.com/Anddd7/poc-aigc/blob/main/langchain/index.ipynb>

而模型的知识域受限于训练数据，是无法实时更新的。如果你询问一些最新的信息，模型是无法给出正确的答案的，然后胡言乱语 —— 幻觉。当然，你可以将这些补充信息作为 context 传入模型，但是这样的做法是不够灵活的，且无法处理较大的文本或是 pdf/word 等格式的文档。

向量化 —— 将补充信息转化为向量，然后拼接到上下文中。相比文字，向量化的标识符会更容易被 LLM 处理，并且消耗 Token 更少。

![alt text](../assets/202402-llm-application/image-1.png)

> - logseq markdown index query: <https://github.com/Anddd7/llm-logseq-reader/blob/main/example/Starter.ipynb>

随着使用规模的增加，更大的上下文、更多的用户和更高的使用频率，社区又引入了数据库和 cache 来存储和管理上下文信息。就像传统应用的开发一样，数据库能够对向量数据进行存储管理和相关性查询，能够最大程度保证在有限长度下，上下文输入数据的准确性。cache 一是缓存已经回答过的相关问题减少模型调用频次，二是存储历史问答数据作为上下文补充，避免“失忆”。

![alt text](../assets/202402-llm-application/image-2.png)

## LLM 应用开发和部署

![alt text](../assets/202402-llm-application/llm-architecture.png)

> [The architecture of today’s LLM applications](https://github.blog/2023-10-30-the-architecture-of-todays-llm-applications/)

从常规的应用开发的角度来看，LLM 就是一个 UI/Server/DB 的老三层架构，只不过部署和运行 LLM 需要一大堆的依赖会相对复杂一些。

而 ollama 这个工具则提供了非常方便的接口，通过 cli 命令就可以直接调用多个模型，还能通过 http api 进行调用。

\`\`\`sh
# 对于熟悉 docker 命令的同学来说，这个 cli 就更加简洁易懂了 ...
Available Commands:
  serve       Start ollama
  create      Create a model from a Modelfile
  show        Show information for a model
  run         Run a model
  pull        Pull a model from a registry
  push        Push a model to a registry
  list        List models
  cp          Copy a model
  rm          Remove a model
  help        Help about any command
\`\`\`

因此在有了 ollama 之后，我们就可以直接使用 ollama 来调用模型，而不需要再自己搭建一套服务了。Langchain 则毫无疑问是 Orchestration 的第一选择。

![alt text](../assets/202402-llm-application/langchain-ollama.png)

> [Building LLM-Powered Web Apps with Client-Side Technology](https://ollama.com/blog/building-llm-powered-web-apps)
`,fe=`# AI 替代论

最近国内的 AI 产品开始稳定输出，在尝试了几个不同的模型后，发现国内大模型和 ChatGPT(3.5) 的差距已经可以忽略不计了。并且，这些模型的使用成本也在逐渐降低，有 App、小程序、API 等多种形式的接入方式；提供Prompt 模版和应用（e.g. 上传文档和图片进行提问）；自带 RAG 可获取更多的信息；上下文更长单价更便宜。

由此可见，下一步 AI 将被集成进各种软件应用，进行辅助式生成、推荐、翻译、摘要等工作。而且，AI 的应用场景是无限的，只要能够提高效率，就是有意义的。今天刚使用了飞书多维表格，让 AI 进行内容的翻译、补全和格式调整，确实是个不错的体验。

## 我的几个使用场景

### 写代码

ChatGPT 对编程需求的理解和输出都比较准确，还能给出 mermaid 流程图。

- 常规的，如“给定一个数组，求最大值”、“给定一个字符串，求最长子串”这样的算法问题，或是“用 golang 实现一个 http server”、“用 python 实现一个简单的爬虫”这样的编程问题，也能给出基本可用的实例。

- 使用 Prompt 和 CoT，对问题和答案进行逐步追问，还可以微调输出的结果。

Copilot 的上下文补全能力，则进一步增强了可用代码的编写。

- 当 ChatGPT 生成的代码不可用或太过简化，你可以复制到 IDE 中并选择性的注释掉一部分，然后 Copilot 会根据上下文进行补全
- Copilot 工作在 IDE 中，生成效率更高；在关键位置只需要写一个空函数或者注释，就可以一路 tab 走了
- Copilot 还能根据当前文件、项目的上下文进行生成，这样的代码更符合当前的代码风格和规范

### 写文章/文档

同样的，书写文章大多数时候也是从想法到提纲，提纲到段落的发散模式。

- 借助 AI 构建提纲和调整重点，比如给出一些 role cast prompt - “你是一个金融领域的专家...”
- 通过 AI 进行段落的补充和调整，写出自己的草稿或是想法，让 AI 进行段落补全
- 使用 AI 校审和补全，或是生成简介和总结

Copilot 也能辅助进行文档的编写，比如给出一些模板和提示，在 Markdown 中插入代码块、参数列表等，都能大大增加效率。反过来，这些文档又能辅助之后的代码开发。

翻译和语言学习就更加简单了 ...

### 搜索

在 perplexity.ai 出现前，就有不少通过 RAG 模式实现的搜索引擎。这样的搜索引擎能够更好的理解你的问题，在茫茫多的搜索结果中找出相对准确的内容。甚至很多问题，你都不需要去查看搜索结果，AI 会直接回答你。

这个模式同样可以应用在文档的搜索和管理中，通过 AI 进行文档的索引和搜索，能够更快的找到你需要的内容。

## 如何稳住船帆

> 我以为的 AI：洗衣、做饭、扫地，脏活累活它都干 \\
> 实际上的 AI：码字、画图、翻译，把我干失业 ...

生成式 AI 因为基于上下文的“生成”的原理，最先影响的就是文字相关的工作。就以我个人而言，写代码、写文章、翻译、做计划等都会用到 AI。一开始是惊叹于 AI 的速度和准确度，依赖度越来越高，焦虑也越来越重 ——

**AI 变的更强之后，是否将无人生还？**

1. 通过 AI 完成大量工作，人能做的工作更少了。要么经济发展持续增长，要么人类的工作会被 AI 取代，这是一个不可逃避的问题。
2. 依赖 AI 完成大量工作，人能思考的问题更少了。“学而不思则罔，思而不学则殆”，进步需要建立在反复的思考和实践，缺失了这些机会，人的认知和创造能力会下降。

最新的大模型，上下文已经达到了 200k，可以完整的输入一部《西游记》并进行问答。算力的进一步增加，模型参数的进一步丰富，会让 AI 的能力进一步增强。

你花费了大量的时间和精力学习的知识，AI 可能只需要几秒钟就能“学会”。

## 如何乘风破浪

如果因此感到焦虑，那就已经跨出了“战胜AI”的第一步 —— 思考。

焦虑来源于思考，我们应该如何应对 AI 的发展？我们如何才能避免被 AI 取代？我们如何才能更好的利用 AI？

### AI 登峰造极，适者恰逢其会

- 一方面，AI 节省了大量的时间和精力。
  - 工作领域能带给我 10~30% 的效率提升，非工作领域则有高于 40% 的时间节省。
  - 过去需要找大量的渠道和时间来获取信息，现在可以通过 AI 明确目标并快速搜索。
- 另一方面，AI 的发展也会带来更多的机会和挑战。
  - 只要能够提高效率，就是有意义的。工作中、生活中，科学技术、地产销售、金融保险。
  - 对已有知识的融会贯通，对新的知识的快速学习，能够加速自己的成长。
- Copilot Everywhere
  - 习惯并接受 AI 辅助的存在 ...

## 其他

即使 AI 已经在科技公司、金融公司、媒体公司等行业中得到了广泛的应用，但并不代表它就是未来的全部。AI 的改变不会是颠覆的，或者说对大多数行业不会是颠覆的。

- 当前的生成式 AI 还有很大局限性

目前火热的 AI 产品，大多是基于大模型的文生文、文生图应用，同质化严重，缺乏差异化的产品和服务。有少量和穿戴设备、硬件、机器人进行结合的项目，但是还没有产出商业化的产品。很多线下场景还无法触及。

- 人的认知是无法跃升的

不同年龄、不同地区的人对 AI 接受度和使用方式都有很大的差异。

- 数字化进程还没有完成

很多行业本身的数字化程度低，本身就缺少标准化的数据和流程。在使用 AI 时很容易被带偏，甚至产生错误的决策。

- 自己的思考才是最重要的

在和家人相处的时候，吹吹风、聊聊天、吃吃喝喝，很少会想到用 AI 去做什么。\\
遇到瓶颈时，AI 也不会给出很好的建议。还是需要自己去思考，去尝试，去实践。\\
AI 是辅助，不是替代。
`,ve=`# Fork 一个开源项目的挑战

通常，在使用开源软件的过程中，我们会遇到一些问题，可能是我们自己的需求，也可能是开源软件的一些 bug。你会通过提交 issue 或者 pull request 的方式来尝试解决这些问题。但是，有时候你的需求并不会被马上合并和发布，甚至被社区拒绝。

团队管理者会有几种选择：

## 购买开源软件的商业支持

- 一些开源软件的维护者（组织、公司）会提供商业支持，这样你可以获得更快的响应和解决方案。
- 他们会根据客户的级别来调整服务的优先级，从而影响Issue和PR的处理速度以及Release的发布时间。
- 他们会根据客户的规模（用户数、收入等）来调整服务的价格。
- 当团队规模持续增长时，商业支持的价格可能会超出预算。

## 积极参与开源社区

- 可以发动团队成员参与开源社区，培养团队的技术能力
- 可以通过参与开源社区，获得更多的技术资源和人脉
- 提升影响力，从而影响开源软件的发展方向
  - 虽然听起来有些不公正，但开源本身也是一种共创式制定标准的手段
  - 参与开源就要对社区负责，即使是 PMC 也并不意味着可以随意修改 Roadmap
- 需要平衡开源贡献的成本和收益
  - 需要花费多少时间在 PR 上
  - 需要等待多久才能 Release
  - 需要多少人兼职、全职的参与

## Fork 一个开源项目

- 自己维护一个分支
- 可以自由的发布自己的版本
- 可以自有的添加自己的功能
- 可以自由的选择优先合并的 PR
- ...

相信很多规模较大的团队都会考虑，通过 Fork 开源项目来解决类似的问题 ...

## 挑战

最大的挑战是如何保持自己的 Fork 版本与原始版本的同步。

### Issue / PR 阶段

#### 挑战一：你的 issue 可能不会被处理

你提交了一个 issue，但是维护者并没有立即处理，或是直接拒绝了你的提议。

你是否还需要这个功能？

- No，关掉这个 issue，寻找替代方案
- Yes，fork 这个项目，自己实现这个功能 ... 除此之外你还需要 ...

> 你的 commits 可能会很快过期，当上游的新版本发布时，你需要将你的 commits rebase 到最新的版本。例如，你基于 v1.10 fork 了一个项目，现在你想升级到 v1.11。
>
> 每一次上游版本的升级，你的团队都需要疲惫地处理冲突 💀，特别是当你有很多这样的 commits 时。

\`\`\`mermaid
%%{init: { 'gitGraph': {'rotateCommitLabel': true}} }%%
gitGraph
    commit
    branch release-v1.10
    commit tag: "v1.10"
    
    branch your-v1.10
    checkout your-v1.10
    commit id: "feature-1"

    checkout release-v1.10
    commit tag: "v1.10.1"

    branch your-v1.10.1
    checkout your-v1.10.1
    cherry-pick id: "feature-1"

    checkout main
    commit
    commit
    branch release-v1.11
    checkout release-v1.11
    commit tag: "v1.11"

    branch your-v1.11
    checkout your-v1.11
    cherry-pick id: "feature-1"
\`\`\`

> Tips:
>
> - 保持你的 commits 小而简单
> - 避免删除原有代码，通过 feature-toggle 的方式来跳过
> - 创建新的文件、函数来实现你的功能，在原有文件中只是调用
> - 通过配置文件、环境变量、流水线在编译和运行时注入代码
>
> 以上小技巧能帮助你减少 rebase/cherry-pick 时的冲突

#### 挑战二：你的 PR 短期内无法发布

即使你的 PR 被合并，社区通常有自己的发布计划，可能需要很长时间才能发布。以我参与的 ingress-nginx 为例：

- Issue raised Apr 10
- PR created Apr 13
- PR merged May 27
- Tagged Release 1.11 (probably in Sep)
  - 1.10.0 at Feb, 2024
  - 1.9.0 at Sep, 2023

可以看到，社区对于 minor 版本的发布计划是 6 个月，也就意味着我的 PR 可能会在今年九月才会发布 ... 距离 issue 提交已经是半年过去了。

你是否还需要这个功能，现在？

- No，关掉这个 issue，寻找替代方案
- Yes，fork 这个项目，自己实现这个功能 ... 除此之外你还需要 ...

> 你仍然需要 rebase 你的 commits，但是相对于挑战一，这个过程会简单很多。
>
> 虽然会等待一段时间，但你的代码已经存在于下一个版本。一旦新版本发布，抛弃 Fork，按照官方的升级指南升级即可。

<!-- ![alt text](../assets/202406-fork-oss/git-graph-0.png) -->

\`\`\`mermaid
%%{init: { 'gitGraph': {'rotateCommitLabel': true}} }%%
gitGraph
    commit
    branch release-v1.10
    commit tag: "v1.10"

    checkout main
    commit id: "feature-1"

    checkout release-v1.10
    branch your-v1.10
    cherry-pick id: "feature-1"

    checkout main
    commit
    branch release-v1.11
    commit tag: "v1.11"
\`\`\`

### Build / Release 阶段

#### 挑战一：你的构建可能会失败

很多开源项目都会依赖 Github / Gitlab 等平台的 CI/CD 服务，进行自动化构建和发布。当你 fork 一个项目时，原有的 pipeline 你是无法直接使用的，需要自己配置 CI 服务，包括：

- 你的 Fork 是否在私有仓库
- 你的 CI 能否访问你的 Fork 仓库
- 你的 CI 是否有构建代码的环境和依赖
- ...

#### 挑战二：如何发布你的 Fork 版本

同挑战一，开源项目会链接到官方的发布渠道，例如 Docker Hub、Github Release 等。在构建好你的 Fork 版本后，你还需要将他们发布到你的私有仓库中。

> 当然，你也可以选择发布到公共仓库，但是你需要注意命名冲突的问题。我在发布一个 python 包时，为了避免和上游版本的包冲突，重命名了整个 src 文件夹。
>
> <https://github.com/Anddd7/diagrams-ext>

#### 挑战三：如何测试你的 Fork 版本

现在，你可能是唯一一个使用你的 Fork 版本的人，当你遇到 Bug 可能也无法从社区获得有效的帮助。你需要做额外的测试，确保你的 Fork 版本没有问题 —— 除非你对自己的代码有 100% 的信任。

## 结论

在业界，有不少公司都创建了自己的 Fork 版本，但通常他们有很多定制需求和足够的资源来维护这个 Fork 版本。

- 云服务提供商：希望将自己的服务集成到开源项目中，例如负载均衡团队也会负责 Ingress 相关的内容。
- 金融行业：稳定性高于一切 ... 他们不需要那些新的功能，Fork 一个过期但稳定运行的版本，只添加安全相关的功能，是一个不错的选择。

当然，“性价比”才是决定因素，团队管理者需要算好手里的账：

- 经济账：购买商业支持 vs hire团队来维护分支
- 时间账：fork 项目 vs 等待社区发布
- 技术账：自己实现 vs 依赖社区
`,be=`<!-- markdownlint-disable MD024 -->

# k3s 搭建个人博客基础设施

<!-- 
key words:
- k3s kustomize
- cert-manager external-dns
- github actions
 -->

这个月初的时候对博客的基础设施做了一波升级，起因是因为免费的域名证书过期了，就想着把博客的基础设施迁移到 k8s 上，这样就可以使用 cert-manager 来自动续期证书了。虽然工作中做了不少 k8s、devops 的工作，但之前的博客还是依靠手动的 git pull 和 docker compose 来部署的，有点过于寒酸了。

![alt text](../assets/202406-k3s-blogs/old.png)

所以基于 k8s 设计了一套新的基础设施和部署流程，主要包括以下几个部分：

- 使用 k3s 部署所有页面（apps）
- 使用 ingress 做负载均衡
- 使用 external-dns 和 cert-manager 管理域名和证书
- 使用 github actions 自动部署

不过实施的过程中还是遇到了不少的坑 ... 回顾记录一下 ...

## k3s 安装

### Why

> k3s 是 Rancher Labs 开发的一个轻量级 Kubernetes 发行版，它的目标是在资源有限的环境中运行 Kubernetes。k3s 的设计目标是尽可能的小，同时保持生产就绪的特性。

我目前是使用的腾讯云主机 4c8g，续费价格颇高，考虑之后可能会换成更便宜的主机（aliyun 99）构建集群。因此安装完整的 k8s 对资源消耗太大，k3s 安装简单、资源消耗小，比较适合这样的轻量级场景。

### How

因为众所周知的原因，在国内服务器安装开源软件首先要考虑的就是镜像源的问题。好在 k3s 官方就提供了国内的镜像源，所以安装起来还是比较顺利的。

**需要注意的一点是，如果你使用单节点模式 —— 即主机有公网 IP 并提供直接访问。需要配置 k3s 使用公网 IP 来启用 Ingress，保证 ingress + external-dns 能够正确的将域名指向这台主机的公网 IP。**

\`\`\`bash
if [ -z $PUBLIC_IP ]; then
    echo "PUBLIC_IP is not set"
    exit 1
fi

# use mirror for cn https://docs.k3s.io/zh/quick-start
curl -sfL https://rancher-mirror.rancher.cn/k3s/k3s-install.sh | INSTALL_K3S_MIRROR=cn sh -s - server --node-external-ip $PUBLIC_IP --write-kubeconfig-mode=644
\`\`\`

### Verify

然后通过 \`k get no\` 来查看节点的状态，确保 k3s 安装成功并且 IP 地址正确。

\`\`\`bash
$ k get no -owide
NAME             STATUS   ROLES                  AGE   VERSION        INTERNAL-IP   EXTERNAL-IP     OS-IMAGE           KERNEL-VERSION      CONTAINER-RUNTIME
vm-4-17-ubuntu   Ready    control-plane,master   19d   v1.29.5+k3s1   10.0.4.17     111.11.11.111   Ubuntu 22.04 LTS   5.15.0-86-generic   containerd://1.7.15-k3s1
\`\`\`

- \`INTERNAL-IP\` 是 k8s 节点的 cluster ip
- \`EXTERNAL-IP\` 默认是 k8s 节点的 ip，如果使用 \`--node-external-ip\` 就可以指定 ip 地址

## Ingress

### Why

然后我们就可以开始安装 ingress、external-dns 和 cert-manager 了。这三个组件是网站基础设施的核心组件，负责负载均衡、域名解析和证书管理。

一开始我自行安装了 ingress-nginx，之后发现 k3s 自带了 traefik，也可以作为 ingress 使用，所以就直接使用了 traefik。

> traefik 是一款开源的反向代理和负载均衡工具，支持多种后端服务，如 Docker、Swarm、Kubernetes、Mesos、Consul、Etcd 等。traefik 通过监听 Docker 或 Kubernetes 的事件，自动更新配置，支持热更新。

### How

因为 traefik 会自动安装在 k3s 集群中，所以并不需要额外的安装步骤。

**需要注意的一点是，如果你使用单节点模式 —— 即主机有公网 IP 并提供直接访问。traefik 会默认使用 LoadBalancer 模式，使用当前节点的 EXTERNAL-IP 作为负载均衡的入口。**

- 所以如果你和我一样，在安装 k3s 时，重新指定了公网 IP 作为 EXTERNAL-IP，那么 traefik 就会使用这个 IP 作为负载均衡的入口。
- 如果不是 ... 那就需要通过修改 traefik 的 svc 来指定 EXTERNAL-IP = <外部负载均衡器的公网 IP>，来保证后续 dns 的正确生成

### Verify

可以看到，traefik 以 LoadBalancer 模式运行，并在节点上监听了 80 和 443 端口。

\`\`\`bash
k get svc -n kube-system traefik -owide 
NAME      TYPE           CLUSTER-IP     EXTERNAL-IP     PORT(S)                      AGE   SELECTOR
traefik   LoadBalancer   10.43.115.98   111.11.11.111   80:32453/TCP,443:30949/TCP   19d   app.kubernetes.io/instance=traefik-kube-system,app.kubernetes.io/name=traefik
\`\`\`

## DNS & Cert

### Why

> external-dns 是一个 Kubernetes 插件，它可以根据 Ingress 和 Service 的信息，自动的更新 DNS 记录。external-dns 支持多种 DNS 提供商，如 AWS Route 53、Azure、Google Cloud DNS、Aliyun、Tencent Cloud 等。
>
> cert-manager 是一个 Kubernetes 插件，它可以自动的申请和续期 SSL 证书。cert-manager 支持多种证书颁发机构，如 Let's Encrypt、Venafi、Certbot 等。

external-dns 就不用多说，可以保证 ingress 和域名解析的一致性。cert-manager 是为了自动续期证书，

### How

这两个都是成熟的 k8s 组件，提供 helm chart 方便安装。通常我会用这样的脚本来安装某一个组件：

\`\`\`bash
# 安装额外的 manifests 资源，如 configmap，secrets 或是其他 CRDs
kubectl kustomize kustomization | envsubst | kubectl apply -f -

# 添加仓库
helm repo add external-dns https://kubernetes-sigs.github.io/external-dns/
# 安装，并指定 values.yaml 覆盖默认配置
helm upgrade --install \\
    external-dns external-dns/external-dns \\
    --namespace external-dns \\
    --create-namespace \\
    --version 1.14.4 \\
    -f helm/values.yaml
\`\`\`

#### external-dns

安装 extrenal-dns 时，需要注意两点

- 替换镜像源
  - 默认镜像存放在 kubernetes.io 中，在国内基本访问不了
  - 替换成 docker.io（无前缀），也有一定几率访问不了 —— （最新新闻，dockerhub 镜像大批下架）
  - 所以，最好替换成稳定的、可信的、高速的源
- 配置 AKSK
  - 因为我使用的是腾讯的主机，没法使用 RAM Role + STS 进行验权
  - 所以只能使用 AKSK 的方式，将 AKSK 保存在 secret 中，然后挂载到 pod 中
  - external-dns（alicloud provider）是通过读取配置文件的方式来获取 AKSK 的
  - 所以需要将配置文件挂载到 pod 中，并添加 \`--alibaba-cloud-config-file\` 来指定配置文件的路径

\`\`\`yaml
# bind and use the config file with aksk
extraArgs: ["--alibaba-cloud-zone-type=public", "--alibaba-cloud-config-file=/etc/kubernetes/external-dns/alibabacloud-cloud-config.yaml"]

extraVolumes:
- name: alibabacloud-cloud-config
  secret:
    secretName: alibabacloud-cloud-config

extraVolumeMounts:
- name: alibabacloud-cloud-config
  mountPath: /etc/kubernetes/external-dns
  readOnly: true
\`\`\`

#### cert-manager

和 external-dns 类似

- cert-manager 也需要替换镜像源
- cert-manager 并没有官方的 alicloud provider，只能通过 webhook 模式进行扩展
  - 找到的多个 alidns-webhook 都有些过期了
  - 目前使用的是 <https://github.com/wjiec/alidns-webhook>
- 因此，需要安装的有
  - cert-manager
  - cluster-issuer (with AKSK secret)
  - alidns-webhook

\`\`\`bash
# cert-manager
helm repo add jetstack https://charts.jetstack.io

helm upgrade --install \\
    cert-manager jetstack/cert-manager \\
    --namespace cert-manager \\
    --create-namespace \\
    --version v1.14.5 \\
    --set installCRDs=true \\
    -f helm/values.yaml

# prepare the secret for aksk and cluster issues
kubectl kustomize kustomization | envsubst | kubectl apply -f -

# alidns webhook
helm upgrade --install alidns-webhook alidns-webhook \\
    --repo https://wjiec.github.io/alidns-webhook \\
    --namespace cert-manager \\
    --create-namespace \\
    --set groupName=acme.mesh-shaped.top
\`\`\`

### Verify

可以通过部署一个 nginx 测试一下 ingress 是否正常工作

## 部署 Apps

最后，你就可以准备 deploy.yaml 部署你的博客了。因为政策原因，根域名的网站上必须带有备案信息，所以我单独构建了一个页面作为备案信息页。在我的集群中会部署以下应用

- beian：备案信息
- docsify：博客
- homepage：导航页（一个很有意思的项目）

### Homepage

> homepage 是一个简单的导航页，通过 values.yaml 配置 的你快捷链接、仪表盘和个人空间。

![alt text](../assets/202406-k3s-blogs/homepage.png)

### Github Actions

博客会频繁更新，因此我使用了 github actions 来自动部署博客。每次 push 到 main 分支，actions 就会根据修改的路径触发不同的应用部署流程

![alt text](../assets/202406-k3s-blogs/devops.png)

- beian
  - 只是简单的将 index.html 通过 configmap 挂载到 nginx 中
  - action 只需应用新生成的 configmap 进行替换即可

- docsify
  - 会将 md 文件和 docsify 程序打包进容器进行运行
  - action 会重新 build docker image
- 使用 kubectl + kustomize 应用新的 yaml

- homepage
  - homepage 是通过 helm 安装的，只需要修改 values.yaml 进行配置
  - action 检测 values.yaml 的修改，并执行 helm upgrade

## Enjoy

\`\`\`bash
NAMESPACE      NAME                      READY   UP-TO-DATE   AVAILABLE   AGE
kube-system    coredns                   1/1     1            1           19d
kube-system    local-path-provisioner    1/1     1            1           19d
kube-system    traefik                   1/1     1            1           19d
kube-system    metrics-server            1/1     1            1           19d
external-dns   external-dns              1/1     1            1           19d
cert-manager   cert-manager              1/1     1            1           18d
cert-manager   cert-manager-cainjector   1/1     1            1           18d
cert-manager   cert-manager-webhook      1/1     1            1           18d
cert-manager   alidns-webhook            1/1     1            1           18d
default        homepage                  1/1     1            1           18d
default        beian                     1/1     1            1           16d
default        docsify                   1/1     1            1           16d
\`\`\`
`,ke=`# Mesh-Shaped PKM - AI Powered

从 2022 年开始使用Logseq到现在，所构建的 [Mesh-Shaped 的知识管理模式](../2022/202212-logseq-pkm) 逐渐成熟，帮助我高效的学习、工作和生活。在最近一年对AI的学习和实践中，我发现AI技术可以帮助我更好的管理知识，提高工作效率，因此我将AI技术融入到Mesh-Shaped PKM中，构建了一个AI Powered的知识管理模式。

## AI Powered

最大的改变是信息的输入变得简单了，在之前的模式中：

- 需要通过多种工具来收集信息，包括任务、稍后阅读、知识等
- 需要在Logseq中进行信息初筛，任务规划，以确定哪些是闪念、哪些是需要深入学习的知识、哪些是任务
- 需要在Logseq中存储和分类大量的笔记，建立双链
- 需要定期整理、总结、精炼

有了 AI 之后，我几乎没有再复制过超过200字的文本，也没有再添加过超过10张图片或是超链接。你可以仅保存一个AI的会话链接，或是一段Prompt，就可以得到超过1000字的回答。

因此我重新构建了我的工作流，并将AI显式化的嵌入到各个流程内。

## 任务驱动

我将我的工作流程分为了三个部分：

- **任务驱动：“飞轮”系统**
  - 飞轮系统是一种更宏观的目标管理方法，它侧重于长期愿景和持续的进步：
  - 愿景：设定一个长远的愿景或目标，这个目标可能并不具体，但提供了方向。
  - 行动：在执行过程中，通过不断的尝试和调整，逐步接近愿景。
  - 反馈：从行动中获得反馈，这些反馈可能会产生新的GTD任务或是调整飞轮任务。
  - 迭代：根据反馈不断调整行动计划，以确保持续向愿景靠近。

![alt text](../assets/202412-ai-powered-pkm/image-1.png)

- **任务执行：GTD 系统**
  - GTD系统强调的是任务的明确性和可操作性，它要求任务有明确的目标和步骤
  - 收集：将所有任务和想法收集到一个“收集箱”中，以便不会忘记任何事情。
  - 处理：对收集到的任务进行快速处理，决定是立即执行、委派、延迟还是删除。
  - 组织：将任务分类并放入不同的“篮子”中，比如等待清单、项目清单、日程表等。
  - 回顾：定期回顾任务清单，确保所有任务都得到适当的关注。
  - 执行：根据优先级和可用时间执行任务。

![alt text](../assets/202412-ai-powered-pkm/image-2.png)

- **获得反馈**
  - 输出型反馈，写文留存
  - 输入性反馈，新任务

![alt text](../assets/202412-ai-powered-pkm/image-3.png)

> 所有事务都会以任务的形式存在，比如 读一本书、尝试一个工具，并且有对应的反馈机制，以便不断迭代。
>
> 以往的 PKM 是以笔记为核心，重在收集、整理和记录。而借由 AI 赋能后，你的笔记本质上已经是无限大了，Knowledge Management 已经没有意义，更重要的是如何利用这些知识来创造价值 —— 即任务驱动。

![alt text](../assets/202412-ai-powered-pkm/image-main.png)

> 可以看到，AI 可以在目标管理、任务拆解、任务执行（信息收集、整理、编码）等多个环节中发挥作用，从而提高工作效率。

## 工具使用

我主要会用到以下 AI 工具：

- Copilot：代码、文档、博客编写（处理所有在VSCode里完成的任务）
- Logseq AI Assistant 插件：处理所有Logseq内的任务，代替人工的总结、翻译、tag、任务拆分、OKR & Retro ...
- Kimi：闪念和稍后阅读
  - 免费，且全平台可用（App、微信、Web）
  - 所有的想法和链接我都会先丢给 Kimi
    - 可以获得即时的反馈，比如一个问题的答案、一篇文章的摘要、一张图片的描述
    - 可以保存会话链接来“保存”这个想法，以便后续进一步处理
  - 对于有价值的内容，仅需要将会话链接保存到Logseq中，加上少量的描述和tag即可

## 随想

### Knowledge Management 已经没有意义

原本的 Knowledge Management 也是为了解决信息过载的问题，利用软件（页、块、tag）建立索引，以便快速找到需要的信息。但随着 AI 技术的发展，索引变成了Prompt，信息变成了AI的回答并且存储在云端。

PKM 的终极目的还是提高工作效率，AI 技术的应用使得我们可以更加专注于任务的执行，而不是信息的收集和整理。因此，新一代的 PKM 应该是一个任务驱动的系统，以任务为核心，以任务的执行为目标。
`,_e=`---
category: DevOps
date: Oct 18, 2024
title: "Infrastructural Integrity: Scaling Beyond the Monolith."
description: Parallels between distributed systems and modular engineering.
image: https://lh3.googleusercontent.com/aida-public/AB6AXuDzKWWVxz0DGkjl-0UeiovPLpjKi4Fbn41BHqQkcd1WKNoO89NjE2vAaB_dFriwDLH_6nag_Lsjocv_XM2U_0j-7g1f17YwIaXSqdl6JQb8tCJZNwBONiGo5pg5BoS_MtMLOK-U1hJbSwi4cekhDiO_zuOgJHWb41JdFq4j_1MP0_0vGrbAdNZrrZCFzLm5yJsdh8F5rl5tF2HAvJ5fA7ezbMJI5FUZx0Le_2AfmgQH9pPo4Z-_bRI1k5gA0ByE1nyoCVtq7UTpesc
---


# Agents 驱动领域建模

**DomainSpec 解决的是“上下文与建模意图在交付过程中逐步失真”这个问题。**

团队最初说清楚了需求，到了架构、开发、测试阶段却逐步偏离原意。它不是另一套“写文档的方法”，而是一套让同一份上下文从业务讨论一路延续到执行与验证的框架。

**它的核心很直接：先定边界，再定流程。**

先用 DDD 划定领域边界，明确哪些概念属于哪个上下文；再用工序设计制定标准流程，明确每一步的输入、输出和校验点。边界和流程一旦被写清楚，Agent 才能高效执行，而不是靠猜。

即使没有 Agent，这个问题也一直存在：需求会在架构、开发和测试之间逐步走样，上下文会在一次次交接里慢慢丢失。

Agent 不是根因，只是把速度拉高了。问题会更早暴露，也更容易被放大。没有边界的速度，只会更快地产生偏差。DomainSpec 的价值，就是先把边界、规则和交接关系固定下来。

## “统一语言和上下文”

**这正好击中 DDD 最难落地的地方：统一语言。**

领域专家、架构师、开发者、验证者经常在说同一个词时指向不同对象，或者面对同一个对象用了不同名字。人会因此误解，Agent 只会把这种误解放大。

DomainSpec 把统一语言从“会议共识”变成可传递的工件，再把这些工件持续传到后续层级，让 Agent 的上下文始终和 DDD 的上下文保持一致。

1. **这里的“上下文”不是背景材料，而是决策的边界条件。**

    DDD 里的 bounded context，不只是业务建模单元，也是 Agent 协作单元；领域词汇表不只是给人读的说明，也是提示词、任务规格和验证标准的锚点。

    上下文一旦变化，就必须通过显式工件传递，而不是靠聊天记录里的模糊补充。

2. **分层不是为了形式完整，而是为了防止语义漂移。**

    规格层负责定义含义、结构和流程，执行层负责实现和验证。反馈也不能绕开上游模型，而要通过显式 Change Request 回流。

    这样系统修正的是规格本身，不是让实现偷偷改写原始意图。

---

\`\`\`mermaid
flowchart TB
    subgraph SPEC[规格层]
        D[DDD 划定领域边界]
        P[工序制定标准流程]
        C[统一语言 与共享上下文]
        D --> C
        P --> C
    end

    C --> DEV[Agent 在清晰任务上下文中执行]
    DEV --> VAL[验证交付结果是否符合意图]
    VAL -. 显式反馈与变更请求 .-> C
\`\`\`

## Agents

### human-led, agent-assisted

- **Domain Analysis Assistant**
  - **职责：** 定义业务领域模型，并在各类领域工件之间保持术语一致。
  - **产物：** Glossary、Four-Color Model、Event Map、Context Map。
- **Architecture Design Assistant**
  - **职责：** 把领域边界转换成系统级与服务级架构，并明确约束条件。
  - **产物：** System Context、Service Decomposition、Communication Map、NFR Analysis、ADR、服务级组件设计。
- **Process Design Assistant**
  - **职责：** 把架构约束进一步转成可复用工序和可执行的 Story。
  - **产物：** Procedure Catalog、Story Spec、流程一致性校验结果。

### agent-led, human-reviewed

- **Developer**
  - **职责：** 在架构和工序约束下实现已确认的 Story。
  - **产物：** Implementation Plan、业务代码、单元测试、开发校验报告。
- **Validator**
  - **职责：** 以黑盒方式验证交付结果，并把缺口反馈回交付层。
  - **产物：** Test Plan、测试代码、测试报告、缺陷类 Change Request。

**一句话总结：** DDD 负责划边界，工序负责定流程，Agent 只有在上下文持续统一时才能真正高效，而 DomainSpec 的作用就是把这份上下文固定下来、传递下去、在反馈中持续校正。

---

> **项目地址：** <https://github.com/Anddd7/domain-spec-agents>
>
> **示例地址：** <https://github.com/Anddd7/domain-spec-examples/pulls>
`,ye=`---
category: AI Systems
date: Feb 02, 2026
title: "智能体(Agentic)工程实践"
description: 在 AI 原生时代，智能体(Agent)的开发需要新的工程实践。本文从模块化设计、结果驱动和持续演进三个维度，探讨如何构建可测试、可维护和可扩展的智能体系统。
image: https://lh3.googleusercontent.com/aida-public/AB6AXuBk9XqneKb8hVXIQTQnYqbfNoshu24DoOi5vWQmBkTgLunOEp4R5PKn32ASoppP6QJTil9BnoZrLti9B9vSS4oZ6mFahpSHPikI2DVrx0qWTtPSF0dxNinmAl_6h3nhIE6TeDJ1tLDwSi5QbJEOkPs0I76PGvb8Y8QXb6zZzXP9S1JHRzd2RGN_kfBjeFzy4SUIsLJhA91l8Z1VHJHCmdvxd6FQ8nH2g2p6h0aPP1BkoYRMlViYRRaq0LYmt-s6reknsAvvhHhyEF8
---

# 智能体(Agentic)工程实践

参考软件工程的最佳实践，我们可以从三个维度思考 Agent 应用的开发流程：

- 模块化：标准化职责、单一原则、提升复用性
- 结果驱动：可测试、可验证、可回归
- 持续演进：迭代优化、反馈闭环、版本管理

## 模块化

> Prompt ≈ Code
> Model ≈ Compiler
> Agent ≈ Application

粗浅地看，我们可以将 Prompt 视为一种新的高级编程语言。它具有更高的抽象能力和表达力，但同时也带来了新的挑战：

- 不确定性：大模型的输出具有随机性和多样性，难以保证结果的一致性和可预测性
- 黑盒性：大模型的内部机制和决策过程不透明，难以理解和调试
- 依赖性：大模型的性能和行为受训练数据和模型架构的影响，难以控制和优化
- 安全性：大模型可能产生有害、偏见或不适当的内容，难以防范和监管

同样地，我们可以将 Agent 视为一种新的应用架构，它具有更高的智能能力和自主性。

### Agent 的核心组件

#### System Instruction（系统指令）

定义全局规则、角色与安全边界，默认生效。

- 类似于：Environment Variables 或 Global Configuration
- 示例：SOUL.md、AGENT.md、CLAUDE.md

#### Command（命令）

用户主动触发的可执行命令。

- 类似于：API Endpoint 或 CLI Command
- 示例：帮我写一封邮件、/search AI safety papers

#### Skill（技能）

已掌握的可自主调用的能力。

- 类似于：Dynamic Dispatch 进行条件匹配
- 示例：pdf-convert、code-execution、web-search

### 上下文与数据层

#### Memory（记忆）

跨会话状态与偏好，确保连续性。

- 类似于：Database 或 Cache
- 示例：User Profile Memory、Task State Memory

#### MCP（模型上下文协议）

外部能力接入层，为 Skill 和 Memory 提供数据与接口。

- 类似于：3rd-party API
- 示例：Github MCP、Google Search MCP

### Agent 的封装与编排

将上述各层组合成可交付的最小智能体单元，就可以像使用传统软件一样进行版本管理、权限控制、测试和迭代。

#### 单个 Agent

将各层组合成可交付的最小智能体单元。

- 类似于：Software Package 或 Service
- 示例：Email Assistant Agent、Research Assistant Agent

#### Multi-Agent（多智能体）

多个 Agent 通过调度编排或自治协作完成复杂任务。

- 类似于：Microservices Architecture
- 示例：Customer Support System with Email Agent, Chat Agent, and Knowledge Base Agent

\`\`\`mermaid
flowchart TD
  subgraph CA[Agent]
    SI[System Instruction]
    MS[Command]
    AS[Skill]
    MCP[MCP]
    M[Memory]
  end

  U('User') --> CA
  SI --> MS
  SI --> AS
  MCP --> MS
  MCP --> AS
  M[Memory] --> MCP

  CA --> Prompt
  Prompt --> LLM

\`\`\`

---

> 参考：[Awesome Agentic Patterns](https://github.com/nibzard/awesome-agentic-patterns)

## 结果驱动

### 为什么需要结果驱动

大模型具备先天的不确定性与黑盒属性，试错与迭代是必要流程。因此，每个模块都必须满足以下要求：

- 可测试：能够验证功能是否正常
- 可复现：结果具有一定的一致性
- 可校验：能够评估输出质量
- 可回归：支持版本回滚和问题追踪

设计与开发应先定义验收标准和验证路径，再实现能力编排。不可测试 = 不可上生产。

### 从"代码"到"结果"的转变

如果将 Prompt 看作一种编程语言，那通过 Agent 生成的产物就相当于软件工程中的"编译结果"（如 .class 文件）。大多数情况下，我们并不需要关注它，而应该关注结果 —— 即用户的目标是否达成、价值是否创造。过度关注代码细节，反而会陷入微管理，降低效率和创新。

> "坚持不去看除了 CLAUDE.md 以外的代码。杜绝对 AI 的 micromanagement（微管理）。用 AI 是锻炼一个领导者的 servant leadership 的很好的办法。" —— [胡渊鸣 | 我给 10 个 Claude Code 打工](https://mp.weixin.qq.com/s/9qPD3gXj3HLmrKC64Q6fbQ)

### "守护架构，放权代码"

这是更高杠杆的工作方式：

- 聚焦结果与价值，而不是逐行控制代码细节
- 用边界与验收标准约束系统，而不是用微管理约束执行
- 把精力放在架构、优先级与反馈闭环这些高 leverage 决策上

## 持续演进

### 演进的必要性

Agent 应该是一个持续演进的系统，而不是一次性交付的产品。通过以下方式不断提升 Agent 的能力和适应性：

- 迭代优化：基于使用反馈持续改进
- 反馈闭环：建立用户反馈的收集与应用机制
- 版本管理：支持灰度发布、A/B 测试和快速回滚

### 设计原则

从一开始就要考虑系统的长期可维护性：

- 可维护性：清晰的模块划分和文档
- 可扩展性：预留扩展接口，支持新能力接入
- 可升级性：避免技术债务和过度耦合

## 个人实践

### Github Copilot

[Customize AI in Visual Studio Code](https://code.visualstudio.com/docs/copilot/customization/overview)，Copilot 已经支持绝大多数的 Agentic 技术，包括：

- \`.github/copilot-instructions.md\` = System Instruction
- \`.github/prompts/*.prompt.md\` = Command
- \`.github/skills/*/SKILL.md\` = Skill
- MCP & Custom Agent

在不更改开发环境的情况下，通过自定义的指令逐步构建智能体工作流，最后替代大部分的重复性工作。如：/test-golang, /code-review, /debug-kubernetes, /get-my-jira-tickets ...

### Memory

Memory 主要用于存储用户的偏好、历史交互和上下文信息，以便在跨 Session 的交互中保持连续性。实现方式：

- 文件系统：将 Memory 存储在指定路径的文件中，将路径作为输入
- 文件系统+skill：提供读写 Memory 的技能，无需提供具体路径，e.g. OpenSpec
- MCP：将 Memory 存储在外部系统（数据库）中，通过 MCP 提供接口访问，e.g. OpenMemory

---

> 🤖 AI投喂建议：
>
> - “Command 和 Skill 的区别”
> - “Agent 的版本管理和回滚机制”
> - “如何测试和评估 Agent 的输出质量”
`,xe=`---
category: AI Systems
date: Oct 20, 2024
title: "The Neural Aesthetic: Generative Design in Urban Planning."
description: Translating latent spaces into physical structural grids for future cities.
image: https://lh3.googleusercontent.com/aida-public/AB6AXuBreJW9_j6VDYS-7Fu1R_5CMgTrejYak_XJxx2aeeBTjjMS75ZzHyJQzOcO19SAvx9Aiz30VpJsbIX9Uqo2QXMsqNmd1dzZJtAkluUBmiZSJH-jM0t--OhDOe1hKlQxe32cueEi3Rx4sLqU7gcJ18ZPfeSSWGZD9E1Ip0yVxlbdzZ-fhWKsHZRypy4UByjwyH4MIMjoNOqp6udTkQLlWNGzjq5nksR14jc4MOlrlHIaa2bRJ7mR7O45dInMPdaiTcvvcEuMQ99XJg4
---

# 标准化到自助服务：平台工程的最短路径

## 背景/问题

平台工程常被“自动化工具堆积”拖慢。
根因是流程不稳定、接口不明确、职责不清。
需要一条可验证的演进路径，而不是一次性大改。

## 关键概念

- 标准化先行：输入、动作、输出可枚举
- 自动化可复用：流水线、模板、镜像、工具链
- API 驱动：把能力当产品发布
- 自助服务：面向用户的门户与集成
- 端到端薄切片：小场景验证全链路

## 方案/方法

以“平台工程通用流程”为案例，分四层推进。

\`\`\`mermaid
flowchart TD
  A[0.标准化: 术语/命名/职责/元数据] --> B[1.自动化: 流水线/模板/镜像/脚本]
  B --> C[2.API驱动: 统一入口/鉴权/审计]
  C --> D[3.自助服务: IDP/门户/系统集成/ChatOps]
  D --> E[n.运维自动化: 扩容/升级/备份/恢复]
\`\`\`

### 案例：通用资源申请流程（VSM）

| 动作                           | 角色        | 工具               | 产物                 | 痛点                   |
| ------------------------------ | ----------- | ------------------ | -------------------- | ---------------------- |
| 申请：提交需求与关键参数       | 需求方      | 表单/工单/门户     | 需求单、参数清单     | 参数不完整、口径不一致 |
| 预检查：命名、配额、依赖、风险 | 平台/治理   | 规则引擎、配额服务 | 预检查结果、风险提示 |                        |
| 变更：生成配置清单并走评审     | 平台/评审人 | 模板/IaC、评审系统 | 变更单、配置清单     | 评审周期长、往返多     |
| 执行：流水线落地资源与配置     | 平台/运维   | CI/CD、编排引擎    | 资源实例、配置状态   | 脚本漂移、环境不一致   |
| 验证：验收、监控、告警接入     | 需求方/平台 | 验收清单、监控系统 | 验收记录、监控项     | 验收标准不清、盲区     |
| 记录：更新资产与变更记录       | 平台/运营   | CMDB、审计日志     | 资产记录、审计链路   |                        |

## 关键细节

- 标准化层输出“字典+流程”，不是工具
- 自动化层复用同一模板与镜像
- API 层必须覆盖鉴权、审计、幂等
- 自助服务必须留“人工兜底”路径
- 运营期同样要自动化：扩缩容、升级、备份

### 案例：IDP 架构示意图

\`\`\`mermaid
flowchart TD
  subgraph 用户门户
    A[自助服务触点]
    B[API网关]
  end

  subgraph Support[支撑系统]
    F[身份认证]
    G[审计日志]
    H[配置管理数据库]
    P[监控告警系统]

    F --- G --- P
  end

  subgraph Core[平台服务]
    X[编排引擎]
    M[K8S集群]
    N[GitHub仓库]
    O[CI/CD流水线]
    Q[Docker镜像库]
    R[ArgoCD]

    X -->|Service-API| M
    X -->|Service-API, 内部系统集成| N
    X -->|Service-API| O
    O --> Q
    O --> R
  end

  User[用户] ---> A
  A --> B
  A --> F
  B ---> H
  B --->|Product-API, 面向用户的产品能力| X
\`\`\`

## 权衡与边界

- 过度标准化会降低灵活性
- 自动化无法替代组织协作与审批
- API 驱动需要稳定的领域模型
- 自助服务不等于“无治理”

## 结论/下一步

从标准化开始，以薄切片跑通端到端。
先做一条通用资源申请链路，再迭代复制到更多场景。
将 API 视为产品发布节奏，持续迭代。

### AIOps 应用场景

- 用户引导：基于标准化流程，提供智能推荐与引导
- 异常检测：监控自动化流水线与 API 调用，及时发现异常
- 智能运维：结合自助服务平台，实现自动化运维任务
- 数据分析：收集平台使用数据，优化标准化与自动化策略

---

- IDP（Internal Developer Platform，内部开发者平台）：一种面向开发者的自助服务平台，提供统一的接口和工具，简化开发、部署和运维流程。
- 薄切片（Thin Slice）：指在复杂系统中，选择一个小而完整的功能模块进行开发和验证，以确保整个系统的各个部分能够协同工作。
- VSM（Value Stream Mapping，价值流图）：一种用于分析和设计工作流程的方法，帮助识别流程中的浪费和改进

> 🤖 AI投喂建议：
>
> - “请给出标准化的详细建议”
> - “请提供API设计的最佳实践”
> - “如何设计自助服务门户的用户体验”
`,we=`---
layout: blog-list
featuredEyebrow: 精选文章
featured: blogs/2026/202602-pov-agentic-engineering.md
listTitle: 最新洞察
listDescription: 按时间倒序整理的技术与工程实践文章。
posts:
  path: blogs/**/*.md
  perPage: 9
  page: 1
paginationPrevious: 上一页
paginationNext: 下一页
---
`,Ae=`# Thoughts and Practices on Infrastructure as Code (IaC)

## Immutable Infrastructure

Before talking about IaC, let's first understand immutable infrastructure:

> **Software application complexity -> Development and deployment complexity -> Infrastructure complexity**

In the past software development, in order to configure and install the operating environment of the software application, it usually takes a lot of time to prepare the network, machine, operating system and database. And as the software is updated, the operating environment will also be adjusted, such as installing patches, modifying ip, modifying ports, etc. However, manual adjustments are not only prone to errors, but also difficult to record modifications. This operating environment (server) is like a pet you care for carefully. Once lost, it will never be found again.

Therefore, the industry has put forward the metaphor of [Pet vs Cattle](https://joachim8675309.medium.com/devops-concepts-pets-vs-cattle-2380b5aab313), and verified its effectiveness through cloud services.

Similarly, snowflake servers and phoenix servers describe similar situations: each snowflake is unique, and once it melts, it can never be condensed into the same snowflake again. The phoenix server can be reborn through "egg" nirvana (the characteristics of the phoenix server):

- Stable server status and fewer deployment failures
- No configuration drift or snowflake server
- Consistent pre-release environment and simple horizontal scaling
- Simple rollback and recovery processing

And to solve the above problems (to achieve immutable infrastructure):

- Automated pipeline
- Stateless application layer
- Persistent data layer
- Infrastructure as Code IaC
- DevOps style collaboration

IaC is not only an important part of them, but also a tool that can easier to achieve the other goals using the advantages of code.

> IMMUTABLE, BUT CONFIGURABLE / REPRODUCIBLE AND AUTOMATABLE

## 'AS' code, not 'IS' code

![IaC Tools](https://picx.zhimg.com/80/v2-3856f65a763bad268e7d103c7aeb9c65_1440w.png)

There are many tools for IaC, and even using shell, python to call cloud service sdk, cli can also complete efficient infrastructure orchestration. But the focus of the infrastructure 'as' code is not entirely on code - 'AS' not 'IS'.

On the one hand, use code to manage infrastructure:

- Improve efficiency based on programming/template language
  - Variables, constants, functions, improve coding efficiency and reduce duplication and input errors
  - Abstraction, encapsulation, reuse, assist in the creation, modification and distribution of infrastructure
  - Code structure is the infrastructure architecture
  - The code is self-explanatory, just like Clean Code
- Improve efficiency based on code tools
  - Git, help infrastructure achieve versioning
  - Test, check the reliability of infrastructure as early as possible
  - Pipeline, automated testing, deployment, verification, rollback, faster response

On the other hand, IaC should be committed to 'describing' infrastructure:

- Infrastructure is affected by hardware architecture and has inherent dependencies and limitations
  - For example, vm, cluster needs to be built on the network
  - For example, db, mq are regional resources, and dns is a global resource
- Although the code runs very fast, the preparation of the infrastructure is not as fast as the cloud provider said "in seconds"
  - The startup of java and go applications is in seconds
  - While the "deployment" time of infrastructure varies from a few minutes to several hours
  - For example, Alibaba Cloud RDS takes nearly 10 minutes to be fully available
- If you encounter a stateful service, the difficulty of rebuilding is much greater than that of database migration

### Simple Design in IaC

![Alt text](../assets/202302-iac-and-terraform/image.png)
[four rules of Simple Design - Kent Beck](https://www.martinfowler.com/bliki/BeckDesignRules.html)
[Clean Code — 4 Rules of Simple Design](https://medium.com/swlh/clean-code-4-rules-of-simple-design-f86b066ee43d)

The design and implementation process of IaC can also use the theory of simple design:

- Passes the test, it must be the first condition to be met
- Reveals intention
  - Use declarative programming to describe the types, models and resource dependencies of infrastructure with code
  - "Do one thing and do it well" - UNIX design philosophy
    - eg. make, man, tree ...
- No duplication
  - Use module, template, script to abstract reusable resources or commands
    - eg. module, template, script ...
- Fewest elements - Less is more

### Layered architecture in IaC

![Alt text](../assets/202302-iac-and-terraform/image-1.png)

Layered infrastructure is similar to layered architecture (eg. mvc), that is used to separate focus point:

- Owner
  - What the organization is? How many departments are there? How many stackholders are there?
  - What are their roles and responsibilities?
  - What's the collaboration model?
- Change frequency
  - What resources need to be prepared and designed from the beginning?
  - What resources are needed to start a new service?
  - Which ones cannot be modified? Which ones are revised regularly? Which ones are subject to change at any time?
- Resource Type
  - IaaS/PaaS/SaaS
  - Computing, storage, network, cluster, middleware, tool chain

As shown above, it is a sample of layered architecture, if you want to "Build a k8s cluster based on a multi-cloud environment".

- Layer0 and Layer1 are committed to abstracting the same support platform in different cloud environments and exposing encapsulated interfaces.
- Layer2 builds an internal middleware/service "market" within the enterprise and provides a variety of components for on-demand use.
- Application "use" on demand, until a service is adopted by the application team, it will be deployed through automated scripts

![DevOps workflow](https://s2.loli.net/2023/02/19/2zS3gfmhaQWbdvK.png)

Then, we can process it via gitops.

![GitOps with CMDB](https://s2.loli.net/2023/02/19/g7hkrQPfWaKHlAN.png)

## Terraform Tips

Based on the above theory, we take terraform as an example (deploying a service including front-end and back-end) to introduce some tips:

### Simple application: no layer, just execute it

\`\`\`sh
  simple
  └── main.tf
\`\`\`

### Simple application - Classify: need to manage the resource by group

\`\`\`sh
  simple-by-resource/
  ├── database.tf
  ├── oss.tf
  ├── vm.tf
  └── vpc.tf
\`\`\`

\`\`\`sh
  simple-by-application/
  ├── backend-app.tf
  └── frontend-app.tf
\`\`\`

### Simple application - Modulization: abstract, reuse by module

\`\`\`sh
  simple-with-modules/
  ├── applications
  │   ├── backend-app
  │   │   └── main.tf
  │   └── frontend-app
  │       └── main.tf
  └── modules
      ├── database
      │   └── main.tf
      ├── oss
      │   └── main.tf
      └── vm
          ├── main.tf
          └── vpc.tf
\`\`\`

### Complex application - Sub module: use folder to build hierarchy

\`\`\`sh
  complex-sub-modules/
  ├── applications
  │   ├── backend-app
  │   │   └── main.tf
  │   └── frontend-app
  │       └── main.tf
  └── modules
      ├── database
      │   ├── main.tf
      │   └── v1
      │       ├── main.tf
      │       └── security-policy.tf
      ├── oss
      │   └── main.tf
      └── vm
          ├── main.tf
          └── networking
              └── main.tf
\`\`\`

\`\`\`terraform
  # complex-sub-modules/applications/banckend-app/main.tf
  module "server" {
    source = "../../modules/vm"

    cpu    = 2
    memory = 4096
    vpc_id = module.vpc.id
  }

  module "vpc" {
    source = "../../modules/vm/networking"

    type = "private"
    cdir = "172.0.0.1/16"
  }

  module "db" {
    source = "../../modules/database"

    # upgrade to v1
    # source = "../../modules/database/v1"

    # or publish module to registry
    # source = "private-regirstry@modules/database/v1"
  }
\`\`\`

### Complex application - Environment: extract environment-related variables, and distinguish based on environment

\`\`\`sh
  complex-env-apps/
  ├── applications
  │   ├── backend-app
  │   │   ├── env
  │   │   │   ├── dev.tfvars
  │   │   │   ├── prod.tfvars
  │   │   │   ├── qa.tfvars
  │   │   │   └── stg.tfvars
  │   │   ├── main.tf
  │   │   └── variables.tf
  │   └── frontend-app
  │       ├── env
  │       │   ├── dev.tfvars
  │       │   ├── prod.tfvars
  │       │   ├── qa.tfvars
  │       │   └── stg.tfvars
  │       ├── main.tf
  │       └── variables.tf
  └── modules
      ├── database
      │   └── main.tf
      ├── oss
      │   └── main.tf
      └── vm
          ├── main.tf
          └── vpc.tf
\`\`\`

\`\`\`sh
  # manage env vars in a separate folder, and treat applications as a module
  complex-outside-env-apps/
    ├── applications
    │   ├── backend-app
    │   │   ├── main.tf
    │   │   └── variables.tf
    │   └── frontend-app
    │       ├── main.tf
    │       └── variables.tf
    ├── env
    │   ├── common.yaml
    │   ├── dev.tfvars
    │   ├── prod.tfvars
    │   ├── qa.tfvars
    │   └── stg.tfvars
    └── modules
        ├── database
        │   └── main.tf
        ├── oss
        │   └── main.tf
        └── vm
            ├── main.tf
            └── vpc.tf
\`\`\`

\`\`\`sh
  # for global deployment, add region layer on top of environment
  complex-region-env-apps/
  ├── applications
  │   ├── backend-app
  │   │   ├── main.tf
  │   │   └── variables.tf
  │   └── frontend-app
  │       ├── main.tf
  │       └── variables.tf
  ├── modules
  │   ├── database
  │   │   └── main.tf
  │   ├── oss
  │   │   └── main.tf
  │   └── vm
  │       ├── main.tf
  │       └── vpc.tf
  └── vars
      ├── cn-chengdu
      │   ├── dev.tfvars
      │   ├── prod.tfvars
      │   ├── qa.tfvars
      │   └── stg.tfvars
      ├── cn-shanghai
      │   ├── dev.tfvars
      │   ├── prod.tfvars
      │   ├── qa.tfvars
      │   └── stg.tfvars
      ├── common.yaml
      ├── eu-west4
      │   ├── dev.tfvars
      │   ├── prod.tfvars
      │   ├── qa.tfvars
      │   └── stg.tfvars
      └── sg
          ├── dev.tfvars
          ├── prod.tfvars
          ├── qa.tfvars
          └── stg.tfvars
\`\`\`

### Advanced application - Share State: access state of other module

\`\`\`terraform
  # query by remote state
  data "terraform_remote_state" "backend_state" {
    backend = "oss"

    config = {
      bucket = "tf_tutorial_remote_state_bucket"
      key    = "dev/applications/backend-app/terraform.tfstate"
      region = "cn-shanghai"
    }
  }

  locals {
    backend_port = data.terraform_remote_state.backend_state.outputs.port
  }
\`\`\`

\`\`\`sh
  # combine applications, merge all infrastructure into a tree, and manage them from the root node
  advance-compose-state/
  ├── applications
  │   ├── backend-app
  │   │   ├── main.tf
  │   │   └── variables.tf
  │   ├── composed
  │   │   └── main.tf
  │   └── frontend-app
  │       ├── main.tf
  │       └── variables.tf
  ├── modules
  │   ├── database
  │   │   └── main.tf
  │   ├── oss
  │   │   └── main.tf
  │   └── vm
  │       ├── main.tf
  │       └── vpc.tf
  └── vars
      ├── cn-chengdu
      │   ├── dev.tfvars
      │   ├── prod.tfvars
      │   ├── qa.tfvars
      │   └── stg.tfvars
      ├── cn-shanghai
      │   ├── dev.tfvars
      │   ├── prod.tfvars
      │   ├── qa.tfvars
      │   └── stg.tfvars
      ├── common.yaml
      ├── eu-west4
      │   ├── dev.tfvars
      │   ├── prod.tfvars
      │   ├── qa.tfvars
      │   └── stg.tfvars
      └── sg
          ├── dev.tfvars
          ├── prod.tfvars
          ├── qa.tfvars
          └── stg.tfvars
\`\`\`

Print the outputs of one module into a file, and then read the file in another module

\`\`\`terraform
  # write outputs to file
  output "port" {
    value = module.server.port

    depends_on = [module.server]
  }

  provisioner "local-exec" {
    command = "echo \${module.server.port} > port.txt"
  }
\`\`\`

\`\`\`terraform
  # read outputs from file
  data "local_file" "port" {
    filename = "\${path.module}/port.txt"
  }

  locals {
    port = data.local_file.port.content
  }
\`\`\`

Use Terragrunt to facilitate the remote state query

![Terragrunt](https://s2.loli.net/2023/02/19/LQeRJhclxbOYVSg.png)

### Advanced application - Layered achitecture and Platform

\`\`\`sh
  advance-platform/
  ├── layer0
  │   ├── alicloud
  │   │   ├── nonprod
  │   │   │   └── main.tf
  │   │   └── prod
  │   │       └── main.tf
  │   └── aws
  │       ├── nonprod
  │       │   └── main.tf
  │       └── prod
  │           └── main.tf
  ├── layer1
  │   ├── modules
  │   │   ├── compute
  │   │   │   └── main.tf
  │   │   ├── network
  │   │   │   └── main.tf
  │   │   └── storage
  │   │       └── main.tf
  │   ├── platform
  │   │   └── main.tf
  │   └── vars
  │       ├── cn-chengdu
  │       │   ├── dev.tfvars
  │       │   ├── prod.tfvars
  │       │   ├── qa.tfvars
  │       │   └── stg.tfvars
  │       ├── cn-shanghai
  │       │   ├── dev.tfvars
  │       │   ├── prod.tfvars
  │       │   ├── qa.tfvars
  │       │   └── stg.tfvars
  │       ├── common.yaml
  │       ├── eu-west4
  │       │   ├── dev.tfvars
  │       │   ├── prod.tfvars
  │       │   ├── qa.tfvars
  │       │   └── stg.tfvars
  │       └── sg
  │           ├── dev.tfvars
  │           ├── prod.tfvars
  │           ├── qa.tfvars
  │           └── stg.tfvars
  └── layer2
      ├── applications
      │   ├── backend-app
      │   │   ├── main.tf
      │   │   └── variables.tf
      │   └── frontend-app
      │       ├── main.tf
      │       └── variables.tf
      ├── modules
      │   ├── database
      │   │   └── main.tf
      │   ├── oss
      │   │   └── main.tf
      │   └── vm
      │       ├── main.tf
      │       └── vpc.tf
      └── vars
          ├── cn-chengdu
          │   ├── dev.tfvars
          │   ├── prod.tfvars
          │   ├── qa.tfvars
          │   └── stg.tfvars
          ├── cn-shanghai
          │   ├── dev.tfvars
          │   ├── prod.tfvars
          │   ├── qa.tfvars
          │   └── stg.tfvars
          ├── common.yaml
          ├── eu-west4
          │   ├── dev.tfvars
          │   ├── prod.tfvars
          │   ├── qa.tfvars
          │   └── stg.tfvars
          └── sg
              ├── dev.tfvars
              ├── prod.tfvars
              ├── qa.tfvars
              └── stg.tfvars
\`\`\`
`,Pe=`---
layout: home
heroEyebrow: 认知模型
heroTitle: "塑造 # 型认知："
heroTitleHighlight: "AI时代快速成长的核心法则"
heroDescription: 在AI已能替代深度的时代，人类的优势在于跨域连接与主动探索，而Mesh(#)型认知，正是这种优势的载体。
heroPrimaryButton: 核心洞察
heroSecondaryButton: 了解方法论
heroSecondaryButtonHref: /blogs/
structureTitle: "解构 # 字结构"
structureDescription: 在AI已能替代深度的时代，人类的优势在于跨域连接与主动探索，而Mesh(#)型认知，正是这种优势的载体。
structureCardTitle: 核心概念
structureCardDescription: 格栅化认知通过节点互联，在不确定环境中提供稳定的决策支点。
insightsTitleLine1: 核心
insightsTitleLine2: 洞察
insightsSubtitle: 从深度重估、主动探索到迁移结构，重新理解 AI 时代的人类优势
insights:
  - index: "01"
    title: 深度，正在被重新定价
    paragraphs:
      - 过去，我们认为顶尖人才的标准是M型，在2到3个领域都有足够的深度，能独立完成复杂判断，这已经是极少数人才能做到的事。
      - 但AI的出现，正在重新定价这种深度。当前的AI不仅博学，还具备推理能力，上下文窗口越来越大，token成本越来越低。
      - 它可以在几分钟内消化一个领域的核心文献，给出专业级分析与方案。M型人才引以为傲的多领域深度，正在被AI快速平替。
  - index: "02"
    title: 人类的机会，在主动探索
    paragraphs:
      - AI很博学，但它不会主动去探索。它只能在已被训练的知识边界内运作，无法自发提出“我想去一个从未被研究过的方向看看”。
      - 而人类恰恰可以。我们能感知哪里有空白、哪里有张力、哪里值得一试。
    listItems:
      - 研究：深入未被充分理解的领域，建立新知识
      - 创新：在已有领域内重新组合，产生新解法
      - 迁移：把A领域经验带到B领域尝试，快速产生洞见
  - index: "03"
    title: "# 型认知，是迁移能力的结构化表达"
    paragraphs:
      - Mesh(#)型认知由宽度与深度交织而成。两条横线是跨域宽度，两条竖线是选定方向的深度，交叉点是你能看见别人看不见的地方。
      - AI可以帮你跑得更快，但你得先知道往哪个方向跑。这个方向感，来自你在多个领域之间建立的连接网络。
    # buttonText: 阅读完整论文
ctaTitle: "人能够构建网络，网络才会链接人。"
# ctaPrimaryButton: 申请加入专家库
# ctaSecondaryButton: 订阅研究报告
---
`,Fi={class:"bg-surface dark:bg-slate-900 text-on-surface dark:text-slate-100"},Ui={class:"pt-32 pb-24"},Wi={class:"max-w-7xl mx-auto px-8 mb-32"},Ki={class:"grid grid-cols-1 lg:grid-cols-12 gap-12 items-start"},Qi={class:"lg:col-span-7"},Ji={class:"mb-6 inline-block bg-primary-container px-3 py-1 rounded text-[10px] uppercase tracking-widest font-bold text-on-primary-container"},Xi={class:"text-[3.5rem] font-extrabold tracking-tight leading-[1.1] mb-8 text-on-surface dark:text-slate-100"},Yi={class:"text-[1.375rem] leading-relaxed text-on-surface-variant dark:text-slate-400 font-light mb-8 max-w-2xl"},Zi={class:"flex items-center gap-4 mb-12"},nl={class:"text-sm text-on-surface-variant dark:text-slate-400"},el={class:"lg:col-span-5 relative"},tl={class:"bg-surface-container-lowest dark:bg-slate-900 p-8 rounded-xl border border-outline-variant/10 dark:border-slate-700 shadow-[0px_24px_48px_rgba(42,52,57,0.04)]"},al={class:"text-sm font-bold tracking-widest uppercase text-primary mb-6 dark:text-tertiary"},sl={class:"grid grid-cols-4 gap-6"},ol=["src","alt"],rl=["data-icon"],il={class:"text-[10px] font-medium text-outline dark:text-slate-400 uppercase tracking-tighter"},ll={class:"bg-surface-container-low dark:bg-slate-900 py-24"},cl={class:"max-w-7xl mx-auto px-8"},dl={class:"flex justify-between items-end mb-16"},ul={class:"label-sm text-tertiary font-bold tracking-[0.2em] uppercase text-xs mb-4 block pb-4"},pl={class:"text-[2.25rem] font-bold tracking-tight text-on-surface dark:text-slate-100"},ml={class:"grid grid-cols-1 md:grid-cols-2 gap-px bg-outline-variant/10 dark:bg-slate-700"},hl=["src","alt"],gl=["data-icon"],fl={class:"text-xl font-bold mb-4 text-on-surface dark:text-slate-100"},vl={class:"text-on-surface-variant dark:text-slate-400 leading-relaxed"},bl={class:"max-w-7xl mx-auto px-8 py-32"},kl={class:"mb-16 flex items-center justify-between gap-6"},_l={class:"text-[2.25rem] font-bold tracking-tight text-on-surface dark:text-slate-100 mb-2"},yl=["href"],xl={key:0,class:"grid grid-cols-1 md:grid-cols-12 gap-8"},wl=["href"],Al={class:"relative overflow-hidden rounded-xl mb-6 aspect-[16/9] bg-surface-container-low dark:bg-slate-900"},Pl=["alt","src"],Cl={class:"flex items-center gap-4 mb-4"},Sl={class:"text-xs font-bold uppercase tracking-widest text-tertiary"},Il={class:"text-xs text-outline dark:text-slate-400 tracking-wider"},Tl={class:"text-3xl font-bold tracking-tight mb-4 group-hover:text-tertiary transition-colors"},Ll={class:"text-on-surface-variant dark:text-slate-400 line-clamp-2 max-w-2xl"},$l={class:"md:col-span-4 flex flex-col gap-12"},Dl=["href"],Ml={class:"flex items-center gap-3 mb-3"},Ol={class:"text-[10px] font-bold uppercase tracking-widest text-primary"},El={class:"text-[10px] text-outline dark:text-slate-400"},Nl={class:"text-xl font-bold tracking-tight mb-3 group-hover:text-tertiary transition-colors leading-tight"},Vl={class:"text-sm text-on-surface-variant dark:text-slate-400 line-clamp-2"},Rl={class:"mt-4 flex items-center gap-1 text-tertiary text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity"},Bl={key:1,class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"},zl=["href"],ql=["src","alt"],Gl={key:1,class:"w-full h-40 bg-surface-container-low dark:bg-slate-800"},jl={class:"p-5"},Hl={class:"flex items-center justify-between gap-3 mb-3"},Fl={class:"text-[10px] font-bold uppercase tracking-widest text-tertiary"},Ul={class:"text-[10px] text-outline dark:text-slate-400"},Wl={class:"text-base font-bold tracking-tight mb-2 text-on-surface dark:text-slate-100"},Kl={class:"text-sm text-on-surface-variant dark:text-slate-400 line-clamp-3"},Ql={key:0,class:"max-w-7xl mx-auto px-8"},Jl={class:"bg-primary text-on-primary p-16 rounded-xl relative overflow-hidden"},Xl={class:"relative z-10 max-w-2xl"},Yl={class:"text-3xl font-bold tracking-tight mb-4"},Zl={class:"text-on-primary/80 mb-8 text-lg"},nc={class:"flex flex-col sm:flex-row gap-4"},ec=["placeholder"],tc={class:"bg-on-primary text-primary font-bold px-8 py-3 rounded-lg hover:bg-primary-container transition-all active:scale-95",type:"submit"},ac=y({__name:"AboutMeLayout",setup(n){const{frontmatter:t,lang:e,theme:o}=pn(),s=v(()=>t.value),l=v(()=>o.value),c=v(()=>l.value.header||{}),u=v(()=>l.value.footer||{}),m=Object.assign({"/about-me.md":Fn,"/blogs/2022/202202-logseq-build-your-own-wiki.md":Un,"/blogs/2022/202203-mesh-shaped-cloud-native-developer.md":Wn,"/blogs/2022/202203-mesh-shaped-recap.md":Kn,"/blogs/2022/202205-container-k8s-docker.md":Qn,"/blogs/2022/202205-router-proxy-gtw.md":Jn,"/blogs/2022/202211-cloud-native-engineering.md":Xn,"/blogs/2022/202212-api-design-inspired-by-google-api-design.md":Yn,"/blogs/2022/202212-go-monorepo-tutorial.md":Zn,"/blogs/2022/202212-logseq-customized-with-clojure-and-css.md":ne,"/blogs/2022/202212-logseq-pkm.md":ee,"/blogs/2023/202302-iac-and-terraform.md":te,"/blogs/2023/202304-draw-architecture-diagram.md":ae,"/blogs/2023/202304-tunnel-vpn-vpc.md":se,"/blogs/2023/202306-remote-development-in-cloud.md":oe,"/blogs/2023/202312-agile-and-lean.md":re,"/blogs/2023/202312-cobra-cli.md":ie,"/blogs/2023/202312-devcontainer-tutorial.md":le,"/blogs/2023/202312-illustrated-ai.md":ce,"/blogs/2023/202312-kubernetes-operator.md":de,"/blogs/2023/202312-windows-workspaces.md":ue,"/blogs/2024/202401-cloud-native-practices.md":pe,"/blogs/2024/202401-eassy-2024.md":me,"/blogs/2024/202401-illustrations.md":he,"/blogs/2024/202402-llm-application.md":ge,"/blogs/2024/202403-ai-and-human.md":fe,"/blogs/2024/202406-fork-oss.md":ve,"/blogs/2024/202406-k3s-blogs.md":be,"/blogs/2024/202412-ai-powered-pkm.md":ke,"/blogs/2026/202602-domain-spec-agents.md":_e,"/blogs/2026/202602-pov-agentic-engineering.md":ye,"/blogs/2026/202602-pov-standard-automation-selfserve.md":xe,"/blogs/index.md":we,"/en/blogs/2023/202302-iac-and-terraform.md":Ae,"/index.md":Pe}),f=Object.keys(m).reduce((S,$)=>(S[x($)]=$,S),{});function x(S){return S.replace(/^\/+/,"").replace(/^docs\//,"")}function w(S){return`/${x(S)}`}function T(S){const $=x(S),U=[w(S),`/${$}`,$,f[$]].filter(q=>!!q);for(const q of U){const J=m[q];if(J)return{modulePath:q,raw:J}}return{modulePath:w(S),raw:void 0}}function L(S){const $=x(S);return $.split("/").pop()||$}function B(S){return S.replace(/^['\"]|['\"]$/g,"").trim()}function j(S){const $=S.match(/^---\n([\s\S]*?)\n---/);if(!$)return{};const U={};for(const q of $[1].split(`
`)){if(!q||/^\s/.test(q)||q.startsWith("#"))continue;const J=q.indexOf(":");if(J<0)continue;const k=q.slice(0,J).trim(),C=B(q.slice(J+1));U[k]=C}return U}function F(S){const U=S.replace(/^---[\s\S]*?---\n?/,"").trim().split(/\n\s*\n/).find(q=>q.trim().length>0);return(U==null?void 0:U.replace(/^#+\s+/,"").trim())||""}function H(S){var k,C;const{modulePath:$,raw:U}=T(S);if(!U)return console.warn(`[AboutMeLayout] markdown not found for path: ${S}`),console.warn(`[AboutMeLayout] attempted module key: ${$}`),null;const q=j(U),J=q.title||q.heroTitle||((C=(k=x(S).split("/").pop())==null?void 0:k.replace(/\.md$/,""))==null?void 0:C.replace(/[-_]/g," "))||"Untitled";return{path:x(S),title:J,description:q.description||q.heroDescription||q.articleLead||F(U),date:q.date,category:q.category,image:q.image}}function K(S){return S?`/${x(S).replace(/\.md$/,"").replace(/\/index$/,"/")}`:"#"}function nn(S){const $=S.replace(/[.+^${}()|[\]\\]/g,"\\$&").replace(/\*\*/g,"::DOUBLE_STAR::").replace(/\*/g,"[^/]*").replace(/::DOUBLE_STAR::/g,".*");return new RegExp(`^${$}$`)}const D=v(()=>{const S=s.value.featuredArticle;if(!S)return null;if(typeof S=="string")return H(S);if(typeof S=="object"&&typeof S.path=="string"){const $=H(S.path);return $?{...$,...S,path:$.path}:null}return typeof S=="object"?S:null}),N=v(()=>{var C;const S=s.value.sideArticles,$=x(((C=D.value)==null?void 0:C.path)||"");if(Array.isArray(S))return S.filter(E=>x(E.path||"")!==$);if(!S||typeof S!="object")return[];const U=x(S.path||"blog/**/*.md"),q=Number(S.count||4),J=nn(U);return Object.keys(m).map(E=>x(E)).filter(E=>J.test(E)).sort((E,z)=>{const W=L(z).localeCompare(L(E));return W!==0?W:z.localeCompare(E)}).map(E=>H(E)).filter(E=>!!E).filter(E=>x(E.path||"")!==$).slice(0,q)}),Q=v(()=>!!D.value),Y=v(()=>Q.value?N.value:N.value.slice(0,4)),cn=v(()=>s.value.articlesMoreHref||(e.value==="en"?"/en/blog/":"/blog/")),hn=v(()=>s.value.articlesMoreText||(e.value==="en"?"View More":"查看更多"));function rn(S){return typeof S=="string"&&/^https?:\/\//.test(S)}return(S,$)=>{var U,q,J,k,C,E,z,W;return r(),i("div",Fi,[_(Cn,{"site-title":c.value.siteTitle||s.value.siteTitle,"nav-links":c.value.navLinks||s.value.navLinks||[],"show-subscribe":!!c.value.showSubscribe,"subscribe-button-text":c.value.subscribeButtonText,"nav-height-class":"h-20"},null,8,["site-title","nav-links","show-subscribe","subscribe-button-text"]),a("main",Ui,[a("section",Wi,[a("div",Ki,[a("div",Qi,[a("div",Ji,h(s.value.heroEyebrow),1),a("h1",Xi,h(s.value.heroTitle),1),a("p",Yi,h(s.value.heroDescription),1),a("div",Zi,[a("p",nl,h(s.value.heroMeta),1)])]),a("div",el,[$[0]||($[0]=a("div",{class:"absolute -top-12 -right-12 w-64 h-64 mesh-grid opacity-20 -z-10"},null,-1)),a("div",tl,[a("h3",al,h(s.value.stackTitle),1),a("div",sl,[(r(!0),i(M,null,G(s.value.stackItems||[],A=>(r(),i("div",{key:A.label,class:"flex flex-col items-center gap-2 group"},[rn(A.icon)?(r(),i("img",{key:0,src:A.icon,alt:A.label,class:"w-8 h-8 object-contain transition-transform group-hover:scale-110"},null,8,ol)):(r(),i("span",{key:1,class:"material-symbols-outlined text-3xl text-primary transition-transform group-hover:scale-110","data-icon":A.icon},h(A.icon),9,rl)),a("span",il,h(A.label),1)]))),128))])])])])]),a("section",ll,[a("div",cl,[a("div",dl,[a("div",null,[a("span",ul,h(s.value.focusEyebrow),1),a("h2",pl,h(s.value.focusTitle),1)]),$[1]||($[1]=a("div",{class:"hidden md:block w-1/3 h-[1px] bg-outline-variant/20 dark:bg-slate-700 mb-4"},null,-1))]),a("div",ml,[(r(!0),i(M,null,G(s.value.focusCards||[],A=>(r(),i("div",{key:A.title,class:"bg-surface-container-lowest dark:bg-slate-950 p-10 transition-colors"},[rn(A.icon)?(r(),i("img",{key:0,src:A.icon,alt:A.title,class:"w-10 h-10 object-contain mb-6"},null,8,hl)):(r(),i("span",{key:1,class:"material-symbols-outlined text-primary mb-6 block text-4xl dark:text-tertiary","data-icon":A.icon},h(A.icon),9,gl)),a("h3",fl,h(A.title),1),a("p",vl,h(A.description),1)]))),128))])])]),a("section",bl,[a("div",kl,[a("div",null,[a("h2",_l,h(s.value.articlesTitle),1),$[2]||($[2]=a("div",{class:"w-12 h-1 bg-primary"},null,-1))]),a("a",{href:cn.value,class:"inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-outline-variant/30 dark:border-slate-700 text-sm font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors"},[X(h(hn.value)+" ",1),$[3]||($[3]=a("span",{class:"material-symbols-outlined text-sm"},"arrow_forward",-1))],8,yl)]),Q.value?(r(),i("div",xl,[a("a",{href:K((U=D.value)==null?void 0:U.path),class:"md:col-span-8 group cursor-pointer block"},[a("div",Al,[(q=D.value)!=null&&q.image?(r(),i("img",{key:0,alt:(J=D.value)==null?void 0:J.title,class:"w-full h-full object-cover transition-transform duration-700 group-hover:scale-105",src:(k=D.value)==null?void 0:k.image},null,8,Pl)):b("",!0),$[4]||($[4]=a("div",{class:"absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"},null,-1))]),a("div",Cl,[a("span",Sl,h((C=D.value)==null?void 0:C.category),1),a("span",Il,h((E=D.value)==null?void 0:E.date),1)]),a("h3",Tl,h((z=D.value)==null?void 0:z.title),1),a("p",Ll,h((W=D.value)==null?void 0:W.description),1)],8,wl),a("div",$l,[(r(!0),i(M,null,G(Y.value,A=>(r(),i("a",{key:A.title,href:K(A.path),class:"group cursor-pointer block"},[a("div",Ml,[a("span",Ol,h(A.category),1),a("span",El,h(A.date),1)]),a("h4",Nl,h(A.title),1),a("p",Vl,h(A.description),1),a("div",Rl,[X(h(s.value.readMoreLabel)+" ",1),$[5]||($[5]=a("span",{class:"material-symbols-outlined text-sm"},"arrow_forward",-1))])],8,Dl))),128))])])):(r(),i("div",Bl,[(r(!0),i(M,null,G(Y.value,A=>(r(),i("a",{key:A.title,href:K(A.path),class:"bg-surface-container-lowest dark:bg-slate-900 border border-outline-variant/10 dark:border-slate-700 rounded-xl overflow-hidden block"},[A.image?(r(),i("img",{key:0,src:A.image,alt:A.title,class:"w-full h-40 object-cover"},null,8,ql)):(r(),i("div",Gl)),a("div",jl,[a("div",Hl,[a("span",Fl,h(A.category),1),a("span",Ul,h(A.date),1)]),a("h4",Wl,h(A.title),1),a("p",Kl,h(A.description),1)])],8,zl))),128))]))]),s.value.subscribeTitle?(r(),i("section",Ql,[a("div",Jl,[$[6]||($[6]=a("div",{class:"absolute top-0 right-0 w-1/3 h-full mesh-grid opacity-10"},null,-1)),a("div",Xl,[a("h2",Yl,h(s.value.subscribeTitle),1),a("p",Zl,h(s.value.subscribeDescription),1),a("form",nc,[a("input",{class:"bg-white/10 border border-white/20 rounded-lg px-6 py-3 flex-grow focus:outline-none focus:ring-2 focus:ring-on-primary/50 text-white placeholder-white/40",placeholder:s.value.subscribePlaceholder,type:"email"},null,8,ec),a("button",tc,h(s.value.subscribeButton),1)])])])])):b("",!0)]),_(Sn,{title:u.value.title||s.value.footerTitle,description:u.value.description||s.value.footerDescription,links:u.value.links||s.value.footerLinks||[],"social-icons":u.value.socialIcons||[]},null,8,["title","description","links","social-icons"])])}}}),sc={class:"bg-surface dark:bg-slate-900 text-slate-900 dark:text-slate-100 selection:bg-primary-container selection:text-on-primary-container"},oc={class:"pt-32 pb-24 px-6 lg:px-12 max-w-7xl mx-auto bg-surface dark:bg-slate-900"},rc={class:"mb-32 relative"},ic={class:"grid grid-cols-1 lg:grid-cols-12 gap-12 items-end"},lc={class:"lg:col-span-7"},cc={class:"overflow-hidden rounded-xl bg-surface-container-low group"},dc=["src"],uc={key:1,class:"w-full aspect-[16/9] bg-surface-container-high dark:bg-slate-800"},pc={class:"lg:col-span-5 pb-4"},mc={class:"flex items-center gap-4 mb-6"},hc={class:"text-[0.6875rem] font-bold uppercase tracking-[0.05em] px-2 py-1 bg-secondary-container text-on-secondary-container rounded"},gc={class:"text-[0.6875rem] font-medium text-outline"},fc={class:"text-5xl lg:text-6xl font-extrabold tracking-tighter leading-[0.95] mb-8 text-slate-900 dark:text-slate-100"},vc={class:"text-slate-700 dark:text-slate-400 text-lg leading-relaxed mb-8 max-w-md"},bc={class:"flex items-center justify-between border-t border-outline-variant/20 pt-6"},kc={class:"text-xs font-medium text-outline uppercase tracking-widest"},_c=["href"],yc={class:"flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8"},xc={class:"max-w-xl"},wc={class:"text-3xl font-bold tracking-tight mb-6"},Ac={class:"text-slate-700 dark:text-slate-400"},Pc={class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-20 gap-x-12"},Cc=["href"],Sc={class:"aspect-[4/3] rounded-xl overflow-hidden bg-surface-container-low mb-8"},Ic=["src"],Tc={key:1,class:"w-full h-full bg-surface-container-high dark:bg-slate-800"},Lc={class:"flex items-center gap-4 mb-4"},$c={class:"text-[0.6875rem] font-bold uppercase tracking-[0.05em] text-tertiary"},Dc={class:"text-[0.6875rem] font-medium text-outline uppercase tracking-widest"},Mc={class:"text-xl font-bold leading-tight mb-4 tracking-tight text-slate-900 dark:text-slate-100 hover:text-tertiary transition-colors"},Oc={class:"text-slate-700 dark:text-slate-400 text-sm leading-relaxed mb-6"},Ec={class:"mt-auto flex items-center justify-between text-[0.6875rem] font-bold uppercase tracking-widest text-outline"},Nc={class:"mt-32 pt-12 border-t border-outline-variant/20 flex justify-center items-center gap-8"},Vc=["disabled"],Rc={class:"flex gap-4"},Bc=["onClick"],zc=["disabled"],qc=y({__name:"BlogListLayout",setup(n){const{frontmatter:t,theme:e}=pn(),o=v(()=>t.value),s=v(()=>e.value),l=v(()=>s.value.header||{}),c=v(()=>s.value.footer||{}),u=Object.assign({"/about-me.md":Fn,"/blogs/2022/202202-logseq-build-your-own-wiki.md":Un,"/blogs/2022/202203-mesh-shaped-cloud-native-developer.md":Wn,"/blogs/2022/202203-mesh-shaped-recap.md":Kn,"/blogs/2022/202205-container-k8s-docker.md":Qn,"/blogs/2022/202205-router-proxy-gtw.md":Jn,"/blogs/2022/202211-cloud-native-engineering.md":Xn,"/blogs/2022/202212-api-design-inspired-by-google-api-design.md":Yn,"/blogs/2022/202212-go-monorepo-tutorial.md":Zn,"/blogs/2022/202212-logseq-customized-with-clojure-and-css.md":ne,"/blogs/2022/202212-logseq-pkm.md":ee,"/blogs/2023/202302-iac-and-terraform.md":te,"/blogs/2023/202304-draw-architecture-diagram.md":ae,"/blogs/2023/202304-tunnel-vpn-vpc.md":se,"/blogs/2023/202306-remote-development-in-cloud.md":oe,"/blogs/2023/202312-agile-and-lean.md":re,"/blogs/2023/202312-cobra-cli.md":ie,"/blogs/2023/202312-devcontainer-tutorial.md":le,"/blogs/2023/202312-illustrated-ai.md":ce,"/blogs/2023/202312-kubernetes-operator.md":de,"/blogs/2023/202312-windows-workspaces.md":ue,"/blogs/2024/202401-cloud-native-practices.md":pe,"/blogs/2024/202401-eassy-2024.md":me,"/blogs/2024/202401-illustrations.md":he,"/blogs/2024/202402-llm-application.md":ge,"/blogs/2024/202403-ai-and-human.md":fe,"/blogs/2024/202406-fork-oss.md":ve,"/blogs/2024/202406-k3s-blogs.md":be,"/blogs/2024/202412-ai-powered-pkm.md":ke,"/blogs/2026/202602-domain-spec-agents.md":_e,"/blogs/2026/202602-pov-agentic-engineering.md":ye,"/blogs/2026/202602-pov-standard-automation-selfserve.md":xe,"/blogs/index.md":we,"/en/blogs/2023/202302-iac-and-terraform.md":Ae,"/index.md":Pe}),m=Object.keys(u).reduce((k,C)=>(k[f(C)]=C,k),{});function f(k){return k.replace(/^\/+/,"").replace(/^docs\//,"")}function x(k){return`/${f(k)}`}function w(k){const C=f(k),E=[x(k),`/${C}`,C,m[C]].filter(z=>!!z);for(const z of E){const W=u[z];if(W)return{modulePath:z,raw:W}}return{modulePath:x(k),raw:void 0}}function T(k){const C=f(k);return C.split("/").pop()||C}function L(k){return k.replace(/^['\"]|['\"]$/g,"").trim()}function B(k){const C=k.match(/^---\n([\s\S]*?)\n---/);if(!C)return{};const E={};for(const z of C[1].split(`
`)){if(!z||/^\s/.test(z)||z.startsWith("#"))continue;const W=z.indexOf(":");if(W<0)continue;const A=z.slice(0,W).trim(),tn=L(z.slice(W+1));E[A]=tn}return E}function j(k){const E=k.replace(/^---[\s\S]*?---\n?/,"").trim().split(/\n\s*\n/).find(z=>z.trim().length>0);return(E==null?void 0:E.replace(/^#+\s+/,"").trim())||""}function F(k){const E=k.replace(/^---[\s\S]*?---\n?/,"").replace(/```[\s\S]*?```/g," ").replace(/`[^`]*`/g," ").replace(/!\[[^\]]*\]\([^)]*\)/g," ").replace(/\[[^\]]*\]\([^)]*\)/g," ").replace(/[#>*_~\-]/g," ").replace(/\s+/g," ").trim().length;return`约 ${Math.max(1,Math.ceil(E/500))} 分钟阅读`}function H(k){var A,tn;const{modulePath:C,raw:E}=w(k);if(!E)return console.warn(`[BlogListLayout] markdown not found for path: ${k}`),console.warn(`[BlogListLayout] attempted module key: ${C}`),null;const z=B(E),W=f(k);return{path:W,category:z.category,date:z.date,title:z.title||((tn=(A=W.split("/").pop())==null?void 0:A.replace(/\.md$/,""))==null?void 0:tn.replace(/[-_]/g," "))||"Untitled",description:z.description||z.articleLead||j(E)||"",readingTime:F(E),action:z.action,image:z.image}}function K(k){return k?`/${f(k).replace(/\.md$/,"").replace(/\/index$/,"/")}`:"#"}function nn(k){const C=k.replace(/[.+^${}()|[\]\\]/g,"\\$&").replace(/\*\*/g,"::DOUBLE_STAR::").replace(/\*/g,"[^/]*").replace(/::DOUBLE_STAR::/g,".*");return new RegExp(`^${C}$`)}const D=v(()=>{const k=o.value.featured;if(!k)return null;if(typeof k=="string")return H(k);if(typeof k=="object"&&typeof k.path=="string"){const C=H(k.path);return C?{...C,...k,path:C.path}:null}return typeof k=="object"?k:null}),N=v(()=>{var W;const k=o.value.posts,C=f(((W=D.value)==null?void 0:W.path)||"");if(Array.isArray(k))return k.filter(A=>f(A.path||"")!==C);if(!k||typeof k!="object")return[];const E=f(k.path||"blogs/**/*.md"),z=nn(E);return Object.keys(u).map(A=>f(A)).filter(A=>z.test(A)).filter(A=>!A.endsWith("/index.md")).sort((A,tn)=>{const gn=T(tn).localeCompare(T(A));return gn!==0?gn:tn.localeCompare(A)}).map(A=>H(A)).filter(A=>!!A).filter(A=>f(A.path||"")!==C)}),Q=v(()=>{const k=o.value.posts;return!k||typeof k!="object"||Array.isArray(k)?N.value.length||1:Math.max(1,Number(k.perPage||k.count||9))}),Y=v(()=>{const k=o.value.posts;return!k||typeof k!="object"||Array.isArray(k)?Math.max(1,Number(o.value.paginationCurrent||1)):Math.max(1,Number(k.page||o.value.paginationCurrent||1))}),cn=R(1);en(Y,k=>{cn.value=k},{immediate:!0});const hn=v(()=>Math.max(1,Math.ceil(N.value.length/Q.value))),rn=v(()=>Math.min(Math.max(1,cn.value),hn.value)),S=v(()=>{const k=(rn.value-1)*Q.value,C=k+Q.value;return N.value.slice(k,C)}),$=v(()=>Array.from({length:hn.value},(k,C)=>String(C+1)));function U(k){cn.value=Math.min(Math.max(1,k),hn.value)}function q(){U(rn.value-1)}function J(){U(rn.value+1)}return(k,C)=>{var E,z,W,A,tn,gn,Ce,Se,Ie;return r(),i("div",sc,[_(Cn,{"site-title":l.value.siteTitle||o.value.siteTitle,"nav-links":l.value.navLinks||o.value.navLinks||[],"show-subscribe":!!l.value.showSubscribe,"subscribe-button-text":l.value.subscribeButtonText,"nav-height-class":"h-20"},null,8,["site-title","nav-links","show-subscribe","subscribe-button-text"]),a("main",oc,[a("section",rc,[a("div",ic,[a("div",lc,[a("div",cc,[(E=D.value)!=null&&E.image?(r(),i("img",{key:0,class:"w-full aspect-[16/9] object-cover grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105",src:(z=D.value)==null?void 0:z.image},null,8,dc)):(r(),i("div",uc))])]),a("div",pc,[a("div",mc,[a("span",hc,h((W=D.value)==null?void 0:W.category),1),a("span",gc,h((A=D.value)==null?void 0:A.date),1)]),a("h1",fc,h((tn=D.value)==null?void 0:tn.title),1),a("p",vc,h((gn=D.value)==null?void 0:gn.description),1),a("div",bc,[a("span",kc,h((Ce=D.value)==null?void 0:Ce.readingTime),1),a("a",{class:"text-tertiary font-bold text-sm flex items-center gap-2 group",href:K((Se=D.value)==null?void 0:Se.path)},[X(h(((Ie=D.value)==null?void 0:Ie.action)||"阅读文章")+" ",1),C[0]||(C[0]=a("span",{class:"material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform"},"arrow_forward",-1))],8,_c)])])])]),a("header",yc,[a("div",xc,[a("h2",wc,h(o.value.listTitle||"最新文章"),1),a("p",Ac,h(o.value.listDescription||"按时间倒序展示。"),1)])]),a("div",Pc,[(r(!0),i(M,null,G(S.value,Z=>(r(),i("article",{key:Z.title,class:"flex flex-col"},[a("a",{href:K(Z.path),class:"group flex flex-col h-full"},[a("div",Sc,[Z.image?(r(),i("img",{key:0,class:"w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-110",src:Z.image},null,8,Ic)):(r(),i("div",Tc))]),a("div",Lc,[a("span",$c,h(Z.category),1),C[1]||(C[1]=a("span",{class:"w-1 h-1 bg-outline-variant rounded-full"},null,-1)),a("span",Dc,h(Z.date),1)]),a("h3",Mc,h(Z.title),1),a("p",Oc,h(Z.description),1),a("div",Ec,[a("span",null,h(Z.readingTime),1),C[2]||(C[2]=a("span",{class:"material-symbols-outlined text-sm"},"north_east",-1))])],8,Cc)]))),128))]),a("div",Nc,[a("button",{type:"button",disabled:rn.value<=1,class:"text-xs font-bold uppercase tracking-widest text-outline hover:text-on-surface transition-colors flex items-center gap-2 disabled:opacity-40 disabled:cursor-not-allowed",onClick:q},[C[3]||(C[3]=a("span",{class:"material-symbols-outlined text-sm"},"arrow_back",-1)),X(" "+h(o.value.paginationPrevious||"上一页"),1)],8,Vc),a("div",Rc,[(r(!0),i(M,null,G($.value,Z=>(r(),i("button",{key:Z,type:"button",class:V(Z===String(rn.value)?"w-8 h-8 flex items-center justify-center rounded-full bg-primary text-on-primary text-xs font-bold":"w-8 h-8 flex items-center justify-center rounded-full hover:bg-surface-container-high text-xs font-bold cursor-pointer"),onClick:ud=>U(Number(Z))},h(Z),11,Bc))),128))]),a("button",{type:"button",disabled:rn.value>=hn.value,class:"text-xs font-bold uppercase tracking-widest text-on-surface hover:text-tertiary transition-colors flex items-center gap-2 disabled:opacity-40 disabled:cursor-not-allowed",onClick:J},[X(h(o.value.paginationNext||"下一页")+" ",1),C[4]||(C[4]=a("span",{class:"material-symbols-outlined text-sm"},"arrow_forward",-1))],8,zc)])]),_(Sn,{title:c.value.title||o.value.footerTitle,description:c.value.description||o.value.footerDescription,links:c.value.links||o.value.footerLinks||[],"social-icons":c.value.socialIcons||o.value.socialIcons||[]},null,8,["title","description","links","social-icons"])])}}}),Gc={class:"bg-surface dark:bg-slate-900 text-on-surface dark:text-slate-100"},jc={class:"pt-16 pb-20 bg-surface dark:bg-slate-900"},Hc={class:"relative overflow-hidden bg-surface-container-low dark:bg-slate-950 mb-14"},Fc={class:"max-w-6xl mx-auto px-6 lg:px-10 py-14 lg:py-16 relative z-10"},Uc={class:"grid grid-cols-1 lg:grid-cols-12 gap-10 items-center"},Wc={class:"lg:col-span-7 flex flex-col justify-center gap-5"},Kc={class:"text-4xl lg:text-5xl font-black tracking-tight leading-tight"},Qc={class:"text-base lg:text-lg text-on-surface-variant dark:text-slate-400 leading-relaxed"},Jc={class:"flex flex-wrap items-center gap-4 text-sm text-on-surface-variant dark:text-slate-400"},Xc={key:0,class:"flex flex-wrap gap-2 pt-1"},Yc={class:"lg:col-span-5 hidden lg:flex justify-center"},Zc={class:"relative w-full max-w-md aspect-square rounded-full bg-surface-container-lowest/90 border border-outline-variant/20 shadow-[0px_24px_48px_rgba(42,52,57,0.08)] p-7"},nd=["src","alt"],ed={class:"max-w-6xl mx-auto px-6 lg:px-10"},td={class:"grid grid-cols-1 lg:grid-cols-12 gap-10"},ad={key:0,class:"lg:col-span-3 order-2 lg:order-1"},sd={class:"lg:sticky lg:top-28 pl-1"},od={class:"flex flex-col gap-2 pt-1 pb-4 border-b border-outline-variant/30 dark:border-slate-600"},rd=["href"],id={class:"lg:col-span-9 order-1 lg:order-2 vp-doc max-w-none dark:text-slate-300"},ld=y({__name:"BlogLayout",setup(n){const{frontmatter:t,page:e,theme:o}=pn(),s=v(()=>t.value),l=v(()=>o.value),c=v(()=>l.value.header||{}),u=v(()=>l.value.footer||{}),m=Object.assign({"/about-me.md":Fn,"/blogs/2022/202202-logseq-build-your-own-wiki.md":Un,"/blogs/2022/202203-mesh-shaped-cloud-native-developer.md":Wn,"/blogs/2022/202203-mesh-shaped-recap.md":Kn,"/blogs/2022/202205-container-k8s-docker.md":Qn,"/blogs/2022/202205-router-proxy-gtw.md":Jn,"/blogs/2022/202211-cloud-native-engineering.md":Xn,"/blogs/2022/202212-api-design-inspired-by-google-api-design.md":Yn,"/blogs/2022/202212-go-monorepo-tutorial.md":Zn,"/blogs/2022/202212-logseq-customized-with-clojure-and-css.md":ne,"/blogs/2022/202212-logseq-pkm.md":ee,"/blogs/2023/202302-iac-and-terraform.md":te,"/blogs/2023/202304-draw-architecture-diagram.md":ae,"/blogs/2023/202304-tunnel-vpn-vpc.md":se,"/blogs/2023/202306-remote-development-in-cloud.md":oe,"/blogs/2023/202312-agile-and-lean.md":re,"/blogs/2023/202312-cobra-cli.md":ie,"/blogs/2023/202312-devcontainer-tutorial.md":le,"/blogs/2023/202312-illustrated-ai.md":ce,"/blogs/2023/202312-kubernetes-operator.md":de,"/blogs/2023/202312-windows-workspaces.md":ue,"/blogs/2024/202401-cloud-native-practices.md":pe,"/blogs/2024/202401-eassy-2024.md":me,"/blogs/2024/202401-illustrations.md":he,"/blogs/2024/202402-llm-application.md":ge,"/blogs/2024/202403-ai-and-human.md":fe,"/blogs/2024/202406-fork-oss.md":ve,"/blogs/2024/202406-k3s-blogs.md":be,"/blogs/2024/202412-ai-powered-pkm.md":ke,"/blogs/2026/202602-domain-spec-agents.md":_e,"/blogs/2026/202602-pov-agentic-engineering.md":ye,"/blogs/2026/202602-pov-standard-automation-selfserve.md":xe,"/blogs/index.md":we,"/en/blogs/2023/202302-iac-and-terraform.md":Ae,"/index.md":Pe});function f(D){return D.replace(/^\/+/,"").replace(/^docs\//,"")}function x(D){return`/${f(D)}`}const w=v(()=>{const D=String(e.value.relativePath||""),N=x(D);return m[N]||""}),T=v(()=>w.value.replace(/^---[\s\S]*?---\n?/,"").trim()),L=v(()=>{const N=T.value.replace(/```[\s\S]*?```/g," ").replace(/`[^`]*`/g," ").replace(/!\[[^\]]*\]\([^)]*\)/g," ").replace(/\[[^\]]*\]\([^)]*\)/g," ").replace(/[#>*_~\-]/g," ").replace(/\s+/g," ").trim().length;return`约 ${Math.max(1,Math.ceil(N/500))} 分钟阅读`}),B=R([]),j=R("");function F(){if(typeof window>"u"||B.value.length===0){j.value="";return}const D=window.scrollY+180;let N=B.value[0].href;for(const Q of B.value){const Y=Q.href.slice(1),cn=document.getElementById(Y);cn&&cn.offsetTop<=D&&(N=Q.href)}j.value=N}function H(){if(typeof window>"u")return;const D=Array.from(document.querySelectorAll(".vp-doc h2[id]"));B.value=D.map(N=>{var Q;return{text:((Q=N.textContent)==null?void 0:Q.trim())||"",href:`#${N.id}`}}).filter(N=>!!N.text),F()}async function K(){await Rn(),requestAnimationFrame(()=>{H()})}on(()=>{typeof window>"u"||(window.addEventListener("scroll",F,{passive:!0}),K())}),Ve(()=>{typeof window>"u"||window.removeEventListener("scroll",F)}),en(()=>e.value.relativePath,()=>{K()}),en(w,()=>{K()});const nn=v(()=>{const D=String(s.value.category||"").toLowerCase();return D.includes("ai")?{badge:"bg-sky-100 text-sky-700"}:D.includes("devops")||D.includes("cloud")?{badge:"bg-emerald-100 text-emerald-700"}:{badge:"bg-amber-100 text-amber-700"}});return(D,N)=>{const Q=un("Content");return r(),i("div",Gc,[_(Cn,{"site-title":c.value.siteTitle,"nav-links":c.value.navLinks||[],"show-subscribe":!!c.value.showSubscribe,"subscribe-button-text":c.value.subscribeButtonText,"nav-height-class":"h-20"},null,8,["site-title","nav-links","show-subscribe","subscribe-button-text"]),a("main",jc,[a("header",Hc,[N[3]||(N[3]=a("div",{class:"absolute inset-0 mesh-gradient opacity-60"},null,-1)),N[4]||(N[4]=a("div",{class:"absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent"},null,-1)),a("div",Fc,[a("div",Uc,[a("div",Wc,[a("span",{class:V(["inline-flex w-fit px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest",nn.value.badge])},h(s.value.category||"General"),3),a("h1",Kc,h(s.value.title),1),a("p",Qc,h(s.value.description),1),a("div",Jc,[a("span",null,h(s.value.date),1),N[0]||(N[0]=a("span",{class:"w-1 h-1 rounded-full bg-outline"},null,-1)),a("span",null,h(L.value),1)]),(s.value.tags||[]).length?(r(),i("div",Xc,[(r(!0),i(M,null,G(s.value.tags||[],Y=>(r(),i("span",{key:Y,class:"px-2.5 py-1 rounded bg-surface-container-high dark:bg-slate-700 text-xs font-semibold text-on-surface-variant dark:text-slate-400"}," #"+h(Y),1))),128))])):b("",!0)]),a("div",Yc,[a("div",Zc,[N[1]||(N[1]=a("div",{class:"absolute inset-4 rounded-full border-2 border-dashed border-primary/30 animate-[spin_20s_linear_infinite]"},null,-1)),N[2]||(N[2]=a("div",{class:"absolute inset-10 rounded-full border border-primary/20"},null,-1)),s.value.image?(r(),i("img",{key:0,src:s.value.image,alt:s.value.title,class:"relative z-10 w-full h-full object-cover rounded-full"},null,8,nd)):b("",!0)])])])])]),a("section",ed,[a("div",td,[B.value.length?(r(),i("aside",ad,[a("div",sd,[N[5]||(N[5]=a("h3",{class:"text-s font-bold uppercase tracking-widest text-on-surface-variant dark:text-slate-400 mb-4 -ml-1"}," 目录 ",-1)),a("nav",od,[(r(!0),i(M,null,G(B.value,Y=>(r(),i("a",{key:Y.href,href:Y.href,class:V(Y.href===j.value?"relative text-sm font-semibold text-primary pl-6 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-[2px] before:h-4 before:bg-primary before:rounded dark:text-tertiary":"text-sm font-thin text-on-surface dark:text-slate-300 hover:text-primary pl-6")},h(Y.text),11,rd))),128))])])])):b("",!0),a("article",id,[_(Q)])])])]),_(Sn,{title:u.value.title,description:u.value.description,links:u.value.links||[],"social-icons":u.value.socialIcons||[]},null,8,["title","description","links","social-icons"])])}}}),cd=y({__name:"Layout",setup(n){const{frontmatter:t,page:e}=pn(),o=v(()=>{const s=String(t.value.layout||"");return s||(String(e.value.relativePath||"").startsWith("blogs/")?"blog":"")});return(s,l)=>o.value==="home"?(r(),P(Hi,{key:0})):o.value==="about-me"?(r(),P(ac,{key:1})):o.value==="blog-list"?(r(),P(qc,{key:2})):o.value==="blog"?(r(),P(ld,{key:3})):(r(),P(d(Ue).Layout,{key:4}))}});let fn=null;function dd(){let n=!1;return async()=>{if(typeof window>"u")return;const{default:t}=await Oe(async()=>{const{default:s}=await import("./mermaid.core.DLRIWwJg.js").then(l=>l.bI);return{default:s}},__vite__mapDeps([2,1]));n||(t.initialize({startOnLoad:!1,securityLevel:"loose"}),n=!0);const e=document.querySelectorAll(".vp-doc div.language-mermaid pre code");for(const s of e){const l=s.closest("pre"),c=s.closest("div.language-mermaid");if(!l||!c||l.dataset.mermaidRendered==="true")continue;l.classList.remove("shiki","shiki-themes","vp-code"),l.classList.add("mermaid"),l.textContent=s.textContent||"",l.dataset.mermaidRendered="true";const u=c.querySelector("button.copy"),m=c.querySelector("span.lang");u==null||u.remove(),m==null||m.remove(),c.classList.remove("language-mermaid")}const o=Array.from(document.querySelectorAll(".vp-doc pre.mermaid"));o.length>0&&await t.run({nodes:o})}}const md={extends:Ue,Layout:cd,enhanceApp({router:n}){if(typeof window>"u")return;fn=fn||dd();const t=()=>{requestAnimationFrame(()=>{fn==null||fn()})};t(),n.onAfterRouteChanged=t}};export{yo as c,md as t,O as u};
