const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/VPLocalSearchBox.bw8qKVoH.js","assets/chunks/framework.CdjpmwdR.js","assets/chunks/mermaid.core.BwUYC7YS.js"])))=>i.map(i=>d[i]);
import{d as H,c as x,r as C,n as Q,o as m,a as Cn,t as S,b as G,w as N,T as Or,e as B,_ as X,u as pe,i as $o,f as Po,g as Rr,h as R,j as f,k as g,l as ue,m as mr,p as rn,q as Dn,s as Et,v as On,x as Vr,y as Br,z as Io,A as Do,F as Z,B as sn,C as re,D as Ot,E as q,G as Zs,H as Bn,I as ni,J as ge,K as ee,L as Rt,M as Lo,N as zr,O as vr,P as Fr,Q as ei,R as Vt,S as No,U as Eo,V as ti,W as ri,X as ai,Y as Oo,Z as Ro,$ as Ur,a0 as Vo,a1 as Bo,a2 as zo}from"./framework.CdjpmwdR.js";const Fo=H({__name:"VPBadge",props:{text:{},type:{default:"tip"}},setup(n){return(e,t)=>(m(),x("span",{class:Q(["VPBadge",n.type])},[C(e.$slots,"default",{},()=>[Cn(S(n.text),1)])],2))}}),Uo={key:0,class:"VPBackdrop"},qo=H({__name:"VPBackdrop",props:{show:{type:Boolean}},setup(n){return(e,t)=>(m(),G(Or,{name:"fade"},{default:N(()=>[n.show?(m(),x("div",Uo)):B("",!0)]),_:1}))}}),Ho=X(qo,[["__scopeId","data-v-49e9b6df"]]),en=pe;function Go(n,e){let t,r=!1;return()=>{t&&clearTimeout(t),r?t=setTimeout(n,e):(n(),(r=!0)&&setTimeout(()=>r=!1,e))}}function _r(n){return n.startsWith("/")?n:`/${n}`}function qr(n){const{pathname:e,search:t,hash:r,protocol:a}=new URL(n,"http://a.com");if($o(n)||n.startsWith("#")||!a.startsWith("http")||!Po(e))return n;const{site:s}=en(),i=e.endsWith("/")||e.endsWith(".html")?n:n.replace(/(?:(^\.+)\/)?.*$/,`$1${e.replace(/(\.md)?$/,s.value.cleanUrls?"":".html")}${t}${r}`);return Rr(i)}function Ke({correspondingLink:n=!1}={}){const{site:e,localeIndex:t,page:r,theme:a,hash:s}=en(),i=R(()=>{var l,c;return{label:(l=e.value.locales[t.value])==null?void 0:l.label,link:((c=e.value.locales[t.value])==null?void 0:c.link)||(t.value==="root"?"/":`/${t.value}/`)}});return{localeLinks:R(()=>Object.entries(e.value.locales).flatMap(([l,c])=>i.value.label===c.label?[]:{text:c.label,link:jo(c.link||(l==="root"?"/":`/${l}/`),a.value.i18nRouting!==!1&&n,r.value.relativePath.slice(i.value.link.length-1),!e.value.cleanUrls)+s.value})),currentLang:i}}function jo(n,e,t,r){return e?n.replace(/\/$/,"")+_r(t.replace(/(^|\/)index\.md$/,"$1").replace(/\.md$/,r?".html":"")):n}const Wo={class:"NotFound"},Yo={class:"code"},Ko={class:"title"},Xo={class:"quote"},Qo={class:"action"},Jo=["href","aria-label"],Zo=H({__name:"NotFound",setup(n){const{theme:e}=en(),{currentLang:t}=Ke();return(r,a)=>{var s,i,o,l,c;return m(),x("div",Wo,[f("p",Yo,S(((s=g(e).notFound)==null?void 0:s.code)??"404"),1),f("h1",Ko,S(((i=g(e).notFound)==null?void 0:i.title)??"PAGE NOT FOUND"),1),a[0]||(a[0]=f("div",{class:"divider"},null,-1)),f("blockquote",Xo,S(((o=g(e).notFound)==null?void 0:o.quote)??"But if you don't change your direction, and if you keep looking, you may end up where you are heading."),1),f("div",Qo,[f("a",{class:"link",href:g(Rr)(g(t).link),"aria-label":((l=g(e).notFound)==null?void 0:l.linkLabel)??"go to home"},S(((c=g(e).notFound)==null?void 0:c.linkText)??"Take me home"),9,Jo)])])}}}),nl=X(Zo,[["__scopeId","data-v-e6e96a08"]]);function si(n,e){if(Array.isArray(n))return it(n);if(n==null)return[];e=_r(e);const t=Object.keys(n).sort((a,s)=>s.split("/").length-a.split("/").length).find(a=>e.startsWith(_r(a))),r=t?n[t]:[];return Array.isArray(r)?it(r):it(r.items,r.base)}function el(n){const e=[];let t=0;for(const r in n){const a=n[r];if(a.items){t=e.push(a);continue}e[t]||e.push({items:[]}),e[t].items.push(a)}return e}function tl(n){const e=[];function t(r){for(const a of r)a.text&&a.link&&e.push({text:a.text,link:a.link,docFooterText:a.docFooterText}),a.items&&t(a.items)}return t(n),e}function br(n,e){return Array.isArray(e)?e.some(t=>br(n,t)):ue(n,e.link)?!0:e.items?br(n,e.items):!1}function it(n,e){return[...n].map(t=>{const r={...t},a=r.base||e;return a&&r.link&&(r.link=a+r.link),r.items&&(r.items=it(r.items,a)),r})}function Jn(){const{frontmatter:n,page:e,theme:t}=en(),r=mr("(min-width: 960px)"),a=rn(!1),s=R(()=>{const _=t.value.sidebar,y=e.value.relativePath;return _?si(_,y):[]}),i=rn(s.value);Dn(s,(_,y)=>{JSON.stringify(_)!==JSON.stringify(y)&&(i.value=s.value)});const o=R(()=>n.value.sidebar!==!1&&i.value.length>0&&n.value.layout!=="home"),l=R(()=>c?n.value.aside==null?t.value.aside==="left":n.value.aside==="left":!1),c=R(()=>n.value.layout==="home"?!1:n.value.aside!=null?!!n.value.aside:t.value.aside!==!1),d=R(()=>o.value&&r.value),p=R(()=>o.value?el(i.value):[]);function u(){a.value=!0}function h(){a.value=!1}function v(){a.value?h():u()}return{isOpen:a,sidebar:i,sidebarGroups:p,hasSidebar:o,hasAside:c,leftAside:l,isSidebarEnabled:d,open:u,close:h,toggle:v}}function rl(n,e){let t;Et(()=>{t=n.value?document.activeElement:void 0}),On(()=>{window.addEventListener("keyup",r)}),Vr(()=>{window.removeEventListener("keyup",r)});function r(a){a.key==="Escape"&&n.value&&(e(),t==null||t.focus())}}function al(n){const{page:e,hash:t}=en(),r=rn(!1),a=R(()=>n.value.collapsed!=null),s=R(()=>!!n.value.link),i=rn(!1),o=()=>{i.value=ue(e.value.relativePath,n.value.link)};Dn([e,n,t],o),On(o);const l=R(()=>i.value?!0:n.value.items?br(e.value.relativePath,n.value.items):!1),c=R(()=>!!(n.value.items&&n.value.items.length));Et(()=>{r.value=!!(a.value&&n.value.collapsed)}),Br(()=>{(i.value||l.value)&&(r.value=!1)});function d(){a.value&&(r.value=!r.value)}return{collapsed:r,collapsible:a,isLink:s,isActiveLink:i,hasActiveLink:l,hasChildren:c,toggle:d}}function sl(){const{hasSidebar:n}=Jn(),e=mr("(min-width: 960px)"),t=mr("(min-width: 1280px)");return{isAsideEnabled:R(()=>!t.value&&!e.value?!1:n.value?t.value:e.value)}}const il=/\b(?:VPBadge|header-anchor|footnote-ref|ignore-header)\b/,yr=[];function ii(n){return typeof n.outline=="object"&&!Array.isArray(n.outline)&&n.outline.label||n.outlineTitle||"On this page"}function Hr(n){const e=[...document.querySelectorAll(".VPDoc :where(h1,h2,h3,h4,h5,h6)")].filter(t=>t.id&&t.hasChildNodes()).map(t=>{const r=Number(t.tagName[1]);return{element:t,title:ol(t),link:"#"+t.id,level:r}});return ll(e,n)}function ol(n){let e="";for(const t of n.childNodes)if(t.nodeType===1){if(il.test(t.className))continue;e+=t.textContent}else t.nodeType===3&&(e+=t.textContent);return e.trim()}function ll(n,e){if(e===!1)return[];const t=(typeof e=="object"&&!Array.isArray(e)?e.level:e)||2,[r,a]=typeof t=="number"?[t,t]:t==="deep"?[2,6]:t;return dl(n,r,a)}function cl(n,e){const{isAsideEnabled:t}=sl(),r=Go(s,100);let a=null;On(()=>{requestAnimationFrame(s),window.addEventListener("scroll",r)}),Io(()=>{i(location.hash)}),Vr(()=>{window.removeEventListener("scroll",r)});function s(){if(!t.value)return;const o=window.scrollY,l=window.innerHeight,c=document.body.offsetHeight,d=Math.abs(o+l-c)<1,p=yr.map(({element:h,link:v})=>({link:v,top:ul(h)})).filter(({top:h})=>!Number.isNaN(h)).sort((h,v)=>h.top-v.top);if(!p.length){i(null);return}if(o<1){i(null);return}if(d){i(p[p.length-1].link);return}let u=null;for(const{link:h,top:v}of p){if(v>o+Do()+4)break;u=h}i(u)}function i(o){a&&a.classList.remove("active"),o==null?a=null:a=n.value.querySelector(`a[href="${decodeURIComponent(o)}"]`);const l=a;l?(l.classList.add("active"),e.value.style.top=l.offsetTop+39+"px",e.value.style.opacity="1"):(e.value.style.top="33px",e.value.style.opacity="0")}}function ul(n){let e=0;for(;n!==document.body;){if(n===null)return NaN;e+=n.offsetTop,n=n.offsetParent}return e}function dl(n,e,t){yr.length=0;const r=[],a=[];return n.forEach(s=>{const i={...s,children:[]};let o=a[a.length-1];for(;o&&o.level>=i.level;)a.pop(),o=a[a.length-1];if(i.element.classList.contains("ignore-header")||o&&"shouldIgnore"in o){a.push({level:i.level,shouldIgnore:!0});return}i.level>t||i.level<e||(yr.push({element:i.element,link:i.link}),o?o.children.push(i):r.push(i),a.push(i))}),r}const hl=["href","title"],fl=H({__name:"VPDocOutlineItem",props:{headers:{},root:{type:Boolean}},setup(n){function e({target:t}){const r=t.href.split("#")[1],a=document.getElementById(decodeURIComponent(r));a==null||a.focus({preventScroll:!0})}return(t,r)=>{const a=re("VPDocOutlineItem",!0);return m(),x("ul",{class:Q(["VPDocOutlineItem",n.root?"root":"nested"])},[(m(!0),x(Z,null,sn(n.headers,({children:s,link:i,title:o})=>(m(),x("li",null,[f("a",{class:"outline-link",href:i,onClick:e,title:o},S(o),9,hl),s!=null&&s.length?(m(),G(a,{key:0,headers:s},null,8,["headers"])):B("",!0)]))),256))],2)}}}),oi=X(fl,[["__scopeId","data-v-4034b050"]]),pl={class:"content"},gl={"aria-level":"2",class:"outline-title",id:"doc-outline-aria-label",role:"heading"},ml=H({__name:"VPDocAsideOutline",setup(n){const{frontmatter:e,theme:t}=en(),r=Zs([]);Ot(()=>{r.value=Hr(e.value.outline??t.value.outline)});const a=rn(),s=rn();return cl(a,s),(i,o)=>(m(),x("nav",{"aria-labelledby":"doc-outline-aria-label",class:Q(["VPDocAsideOutline",{"has-outline":r.value.length>0}]),ref_key:"container",ref:a},[f("div",pl,[f("div",{class:"outline-marker",ref_key:"marker",ref:s},null,512),f("div",gl,S(g(ii)(g(t))),1),q(oi,{headers:r.value,root:!0},null,8,["headers"])])],2))}}),vl=X(ml,[["__scopeId","data-v-cc53f104"]]),_l={class:"VPDocAsideCarbonAds"},bl=H({__name:"VPDocAsideCarbonAds",props:{carbonAds:{}},setup(n){const e=()=>null;return(t,r)=>(m(),x("div",_l,[q(g(e),{"carbon-ads":n.carbonAds},null,8,["carbon-ads"])]))}}),yl={class:"VPDocAside"},xl=H({__name:"VPDocAside",setup(n){const{theme:e}=en();return(t,r)=>(m(),x("div",yl,[C(t.$slots,"aside-top",{},void 0,!0),C(t.$slots,"aside-outline-before",{},void 0,!0),q(vl),C(t.$slots,"aside-outline-after",{},void 0,!0),r[0]||(r[0]=f("div",{class:"spacer"},null,-1)),C(t.$slots,"aside-ads-before",{},void 0,!0),g(e).carbonAds?(m(),G(bl,{key:0,"carbon-ads":g(e).carbonAds},null,8,["carbon-ads"])):B("",!0),C(t.$slots,"aside-ads-after",{},void 0,!0),C(t.$slots,"aside-bottom",{},void 0,!0)]))}}),kl=X(xl,[["__scopeId","data-v-9516880d"]]);function wl(){const{theme:n,page:e}=en();return R(()=>{const{text:t="Edit this page",pattern:r=""}=n.value.editLink||{};let a;return typeof r=="function"?a=r(e.value):a=r.replace(/:path/g,e.value.filePath),{url:a,text:t}})}function Al(){const{page:n,theme:e,frontmatter:t}=en();return R(()=>{var c,d,p,u,h,v,_,y;const r=si(e.value.sidebar,n.value.relativePath),a=tl(r),s=Cl(a,w=>w.link.replace(/[?#].*$/,"")),i=s.findIndex(w=>ue(n.value.relativePath,w.link)),o=((c=e.value.docFooter)==null?void 0:c.prev)===!1&&!t.value.prev||t.value.prev===!1,l=((d=e.value.docFooter)==null?void 0:d.next)===!1&&!t.value.next||t.value.next===!1;return{prev:o?void 0:{text:(typeof t.value.prev=="string"?t.value.prev:typeof t.value.prev=="object"?t.value.prev.text:void 0)??((p=s[i-1])==null?void 0:p.docFooterText)??((u=s[i-1])==null?void 0:u.text),link:(typeof t.value.prev=="object"?t.value.prev.link:void 0)??((h=s[i-1])==null?void 0:h.link)},next:l?void 0:{text:(typeof t.value.next=="string"?t.value.next:typeof t.value.next=="object"?t.value.next.text:void 0)??((v=s[i+1])==null?void 0:v.docFooterText)??((_=s[i+1])==null?void 0:_.text),link:(typeof t.value.next=="object"?t.value.next.link:void 0)??((y=s[i+1])==null?void 0:y.link)}}})}function Cl(n,e){const t=new Set;return n.filter(r=>{const a=e(r);return t.has(a)?!1:t.add(a)})}const zn=H({__name:"VPLink",props:{tag:{},href:{},noIcon:{type:Boolean},target:{},rel:{}},setup(n){const e=n,t=R(()=>e.tag??(e.href?"a":"span")),r=R(()=>e.href&&ni.test(e.href)||e.target==="_blank");return(a,s)=>(m(),G(Bn(t.value),{class:Q(["VPLink",{link:n.href,"vp-external-link-icon":r.value,"no-icon":n.noIcon}]),href:n.href?g(qr)(n.href):void 0,target:n.target??(r.value?"_blank":void 0),rel:n.rel??(r.value?"noreferrer":void 0)},{default:N(()=>[C(a.$slots,"default")]),_:3},8,["class","href","target","rel"]))}}),Tl={class:"VPLastUpdated"},Sl=["datetime"],Ml=H({__name:"VPDocFooterLastUpdated",setup(n){const{theme:e,page:t,lang:r}=en(),a=R(()=>new Date(t.value.lastUpdated)),s=R(()=>a.value.toISOString()),i=rn("");return On(()=>{Et(()=>{var o,l,c;i.value=new Intl.DateTimeFormat((l=(o=e.value.lastUpdated)==null?void 0:o.formatOptions)!=null&&l.forceLocale?r.value:void 0,((c=e.value.lastUpdated)==null?void 0:c.formatOptions)??{dateStyle:"short",timeStyle:"short"}).format(a.value)})}),(o,l)=>{var c;return m(),x("p",Tl,[Cn(S(((c=g(e).lastUpdated)==null?void 0:c.text)||g(e).lastUpdatedText||"Last updated")+": ",1),f("time",{datetime:s.value},S(i.value),9,Sl)])}}}),$l=X(Ml,[["__scopeId","data-v-3607c463"]]),Pl={key:0,class:"VPDocFooter"},Il={key:0,class:"edit-info"},Dl={key:0,class:"edit-link"},Ll={key:1,class:"last-updated"},Nl={key:1,class:"prev-next","aria-labelledby":"doc-footer-aria-label"},El={class:"pager"},Ol=["innerHTML"],Rl=["innerHTML"],Vl={class:"pager"},Bl=["innerHTML"],zl=["innerHTML"],Fl=H({__name:"VPDocFooter",setup(n){const{theme:e,page:t,frontmatter:r}=en(),a=wl(),s=Al(),i=R(()=>e.value.editLink&&r.value.editLink!==!1),o=R(()=>t.value.lastUpdated),l=R(()=>i.value||o.value||s.value.prev||s.value.next);return(c,d)=>{var p,u,h,v;return l.value?(m(),x("footer",Pl,[C(c.$slots,"doc-footer-before",{},void 0,!0),i.value||o.value?(m(),x("div",Il,[i.value?(m(),x("div",Dl,[q(zn,{class:"edit-link-button",href:g(a).url,"no-icon":!0},{default:N(()=>[d[0]||(d[0]=f("span",{class:"vpi-square-pen edit-link-icon"},null,-1)),Cn(" "+S(g(a).text),1)]),_:1},8,["href"])])):B("",!0),o.value?(m(),x("div",Ll,[q($l)])):B("",!0)])):B("",!0),(p=g(s).prev)!=null&&p.link||(u=g(s).next)!=null&&u.link?(m(),x("nav",Nl,[d[1]||(d[1]=f("span",{class:"visually-hidden",id:"doc-footer-aria-label"},"Pager",-1)),f("div",El,[(h=g(s).prev)!=null&&h.link?(m(),G(zn,{key:0,class:"pager-link prev",href:g(s).prev.link},{default:N(()=>{var _;return[f("span",{class:"desc",innerHTML:((_=g(e).docFooter)==null?void 0:_.prev)||"Previous page"},null,8,Ol),f("span",{class:"title",innerHTML:g(s).prev.text},null,8,Rl)]}),_:1},8,["href"])):B("",!0)]),f("div",Vl,[(v=g(s).next)!=null&&v.link?(m(),G(zn,{key:0,class:"pager-link next",href:g(s).next.link},{default:N(()=>{var _;return[f("span",{class:"desc",innerHTML:((_=g(e).docFooter)==null?void 0:_.next)||"Next page"},null,8,Bl),f("span",{class:"title",innerHTML:g(s).next.text},null,8,zl)]}),_:1},8,["href"])):B("",!0)])])):B("",!0)])):B("",!0)}}}),Ul=X(Fl,[["__scopeId","data-v-cd0721dd"]]),ql={class:"container"},Hl={class:"aside-container"},Gl={class:"aside-content"},jl={class:"content"},Wl={class:"content-container"},Yl={class:"main"},Kl=H({__name:"VPDoc",setup(n){const{theme:e}=en(),t=ge(),{hasSidebar:r,hasAside:a,leftAside:s}=Jn(),i=R(()=>t.path.replace(/[./]+/g,"_").replace(/_html$/,""));return(o,l)=>{const c=re("Content");return m(),x("div",{class:Q(["VPDoc",{"has-sidebar":g(r),"has-aside":g(a)}])},[C(o.$slots,"doc-top",{},void 0,!0),f("div",ql,[g(a)?(m(),x("div",{key:0,class:Q(["aside",{"left-aside":g(s)}])},[l[0]||(l[0]=f("div",{class:"aside-curtain"},null,-1)),f("div",Hl,[f("div",Gl,[q(kl,null,{"aside-top":N(()=>[C(o.$slots,"aside-top",{},void 0,!0)]),"aside-bottom":N(()=>[C(o.$slots,"aside-bottom",{},void 0,!0)]),"aside-outline-before":N(()=>[C(o.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":N(()=>[C(o.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":N(()=>[C(o.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":N(()=>[C(o.$slots,"aside-ads-after",{},void 0,!0)]),_:3})])])],2)):B("",!0),f("div",jl,[f("div",Wl,[C(o.$slots,"doc-before",{},void 0,!0),f("main",Yl,[q(c,{class:Q(["vp-doc",[i.value,g(e).externalLinkIcon&&"external-link-icon-enabled"]])},null,8,["class"])]),q(Ul,null,{"doc-footer-before":N(()=>[C(o.$slots,"doc-footer-before",{},void 0,!0)]),_:3}),C(o.$slots,"doc-after",{},void 0,!0)])])]),C(o.$slots,"doc-bottom",{},void 0,!0)],2)}}}),Xl=X(Kl,[["__scopeId","data-v-f640936e"]]),Ql=H({__name:"VPButton",props:{tag:{},size:{default:"medium"},theme:{default:"brand"},text:{},href:{},target:{},rel:{}},setup(n){const e=n,t=R(()=>e.href&&ni.test(e.href)),r=R(()=>e.tag||(e.href?"a":"button"));return(a,s)=>(m(),G(Bn(r.value),{class:Q(["VPButton",[n.size,n.theme]]),href:n.href?g(qr)(n.href):void 0,target:e.target??(t.value?"_blank":void 0),rel:e.rel??(t.value?"noreferrer":void 0)},{default:N(()=>[Cn(S(n.text),1)]),_:1},8,["class","href","target","rel"]))}}),Jl=X(Ql,[["__scopeId","data-v-baf7dc9c"]]),Zl=["src","alt"],nc=H({inheritAttrs:!1,__name:"VPImage",props:{image:{},alt:{}},setup(n){return(e,t)=>{const r=re("VPImage",!0);return n.image?(m(),x(Z,{key:0},[typeof n.image=="string"||"src"in n.image?(m(),x("img",ee({key:0,class:"VPImage"},typeof n.image=="string"?e.$attrs:{...n.image,...e.$attrs},{src:g(Rr)(typeof n.image=="string"?n.image:n.image.src),alt:n.alt??(typeof n.image=="string"?"":n.image.alt||"")}),null,16,Zl)):(m(),x(Z,{key:1},[q(r,ee({class:"dark",image:n.image.dark,alt:n.image.alt},e.$attrs),null,16,["image","alt"]),q(r,ee({class:"light",image:n.image.light,alt:n.image.alt},e.$attrs),null,16,["image","alt"])],64))],64)):B("",!0)}}}),ft=X(nc,[["__scopeId","data-v-f9c85911"]]),ec={class:"container"},tc={class:"main"},rc={class:"heading"},ac=["innerHTML"],sc=["innerHTML"],ic=["innerHTML"],oc={key:0,class:"actions"},lc={key:0,class:"image"},cc={class:"image-container"},uc=H({__name:"VPHero",props:{name:{},text:{},tagline:{},image:{},actions:{}},setup(n){const e=Rt("hero-image-slot-exists");return(t,r)=>(m(),x("div",{class:Q(["VPHero",{"has-image":n.image||g(e)}])},[f("div",ec,[f("div",tc,[C(t.$slots,"home-hero-info-before",{},void 0,!0),C(t.$slots,"home-hero-info",{},()=>[f("h1",rc,[n.name?(m(),x("span",{key:0,innerHTML:n.name,class:"name clip"},null,8,ac)):B("",!0),n.text?(m(),x("span",{key:1,innerHTML:n.text,class:"text"},null,8,sc)):B("",!0)]),n.tagline?(m(),x("p",{key:0,innerHTML:n.tagline,class:"tagline"},null,8,ic)):B("",!0)],!0),C(t.$slots,"home-hero-info-after",{},void 0,!0),n.actions?(m(),x("div",oc,[(m(!0),x(Z,null,sn(n.actions,a=>(m(),x("div",{key:a.link,class:"action"},[q(Jl,{tag:"a",size:"medium",theme:a.theme,text:a.text,href:a.link,target:a.target,rel:a.rel},null,8,["theme","text","href","target","rel"])]))),128))])):B("",!0),C(t.$slots,"home-hero-actions-after",{},void 0,!0)]),n.image||g(e)?(m(),x("div",lc,[f("div",cc,[r[0]||(r[0]=f("div",{class:"image-bg"},null,-1)),C(t.$slots,"home-hero-image",{},()=>[n.image?(m(),G(ft,{key:0,class:"image-src",image:n.image},null,8,["image"])):B("",!0)],!0)])])):B("",!0)])],2))}}),dc=X(uc,[["__scopeId","data-v-09b6ce43"]]),hc=H({__name:"VPHomeHero",setup(n){const{frontmatter:e}=en();return(t,r)=>g(e).hero?(m(),G(dc,{key:0,class:"VPHomeHero",name:g(e).hero.name,text:g(e).hero.text,tagline:g(e).hero.tagline,image:g(e).hero.image,actions:g(e).hero.actions},{"home-hero-info-before":N(()=>[C(t.$slots,"home-hero-info-before")]),"home-hero-info":N(()=>[C(t.$slots,"home-hero-info")]),"home-hero-info-after":N(()=>[C(t.$slots,"home-hero-info-after")]),"home-hero-actions-after":N(()=>[C(t.$slots,"home-hero-actions-after")]),"home-hero-image":N(()=>[C(t.$slots,"home-hero-image")]),_:3},8,["name","text","tagline","image","actions"])):B("",!0)}}),fc={class:"box"},pc={key:0,class:"icon"},gc=["innerHTML"],mc=["innerHTML"],vc=["innerHTML"],_c={key:4,class:"link-text"},bc={class:"link-text-value"},yc=H({__name:"VPFeature",props:{icon:{},title:{},details:{},link:{},linkText:{},rel:{},target:{}},setup(n){return(e,t)=>(m(),G(zn,{class:"VPFeature",href:n.link,rel:n.rel,target:n.target,"no-icon":!0,tag:n.link?"a":"div"},{default:N(()=>[f("article",fc,[typeof n.icon=="object"&&n.icon.wrap?(m(),x("div",pc,[q(ft,{image:n.icon,alt:n.icon.alt,height:n.icon.height||48,width:n.icon.width||48},null,8,["image","alt","height","width"])])):typeof n.icon=="object"?(m(),G(ft,{key:1,image:n.icon,alt:n.icon.alt,height:n.icon.height||48,width:n.icon.width||48},null,8,["image","alt","height","width"])):n.icon?(m(),x("div",{key:2,class:"icon",innerHTML:n.icon},null,8,gc)):B("",!0),f("h2",{class:"title",innerHTML:n.title},null,8,mc),n.details?(m(),x("p",{key:3,class:"details",innerHTML:n.details},null,8,vc)):B("",!0),n.linkText?(m(),x("div",_c,[f("p",bc,[Cn(S(n.linkText)+" ",1),t[0]||(t[0]=f("span",{class:"vpi-arrow-right link-text-icon"},null,-1))])])):B("",!0)])]),_:1},8,["href","rel","target","tag"]))}}),xc=X(yc,[["__scopeId","data-v-67e0b8b6"]]),kc={key:0,class:"VPFeatures"},wc={class:"container"},Ac={class:"items"},Cc=H({__name:"VPFeatures",props:{features:{}},setup(n){const e=n,t=R(()=>{const r=e.features.length;if(r){if(r===2)return"grid-2";if(r===3)return"grid-3";if(r%3===0)return"grid-6";if(r>3)return"grid-4"}else return});return(r,a)=>n.features?(m(),x("div",kc,[f("div",wc,[f("div",Ac,[(m(!0),x(Z,null,sn(n.features,s=>(m(),x("div",{key:s.title,class:Q(["item",[t.value]])},[q(xc,{icon:s.icon,title:s.title,details:s.details,link:s.link,"link-text":s.linkText,rel:s.rel,target:s.target},null,8,["icon","title","details","link","link-text","rel","target"])],2))),128))])])])):B("",!0)}}),Tc=X(Cc,[["__scopeId","data-v-f6b1b269"]]),Sc=H({__name:"VPHomeFeatures",setup(n){const{frontmatter:e}=en();return(t,r)=>g(e).features?(m(),G(Tc,{key:0,class:"VPHomeFeatures",features:g(e).features},null,8,["features"])):B("",!0)}}),Mc=H({__name:"VPHomeContent",setup(n){const{width:e}=Lo({initialWidth:0,includeScrollbar:!1});return(t,r)=>(m(),x("div",{class:"vp-doc container",style:zr(g(e)?{"--vp-offset":`calc(50% - ${g(e)/2}px)`}:{})},[C(t.$slots,"default",{},void 0,!0)],4))}}),$c=X(Mc,[["__scopeId","data-v-3be093fb"]]),Pc=H({__name:"VPHome",setup(n){const{frontmatter:e,theme:t}=en();return(r,a)=>{const s=re("Content");return m(),x("div",{class:Q(["VPHome",{"external-link-icon-enabled":g(t).externalLinkIcon}])},[C(r.$slots,"home-hero-before",{},void 0,!0),q(hc,null,{"home-hero-info-before":N(()=>[C(r.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":N(()=>[C(r.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":N(()=>[C(r.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":N(()=>[C(r.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":N(()=>[C(r.$slots,"home-hero-image",{},void 0,!0)]),_:3}),C(r.$slots,"home-hero-after",{},void 0,!0),C(r.$slots,"home-features-before",{},void 0,!0),q(Sc),C(r.$slots,"home-features-after",{},void 0,!0),g(e).markdownStyles!==!1?(m(),G($c,{key:0},{default:N(()=>[q(s)]),_:1})):(m(),G(s,{key:1}))],2)}}}),Ic=X(Pc,[["__scopeId","data-v-6e6fdb32"]]),Dc={},Lc={class:"VPPage"};function Nc(n,e){const t=re("Content");return m(),x("div",Lc,[C(n.$slots,"page-top"),q(t),C(n.$slots,"page-bottom")])}const Ec=X(Dc,[["render",Nc]]),Oc=H({__name:"VPContent",setup(n){const{page:e,frontmatter:t}=en(),{hasSidebar:r}=Jn();return(a,s)=>(m(),x("div",{class:Q(["VPContent",{"has-sidebar":g(r),"is-home":g(t).layout==="home"}]),id:"VPContent"},[g(e).isNotFound?C(a.$slots,"not-found",{key:0},()=>[q(nl)],!0):g(t).layout==="page"?(m(),G(Ec,{key:1},{"page-top":N(()=>[C(a.$slots,"page-top",{},void 0,!0)]),"page-bottom":N(()=>[C(a.$slots,"page-bottom",{},void 0,!0)]),_:3})):g(t).layout==="home"?(m(),G(Ic,{key:2},{"home-hero-before":N(()=>[C(a.$slots,"home-hero-before",{},void 0,!0)]),"home-hero-info-before":N(()=>[C(a.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":N(()=>[C(a.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":N(()=>[C(a.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":N(()=>[C(a.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":N(()=>[C(a.$slots,"home-hero-image",{},void 0,!0)]),"home-hero-after":N(()=>[C(a.$slots,"home-hero-after",{},void 0,!0)]),"home-features-before":N(()=>[C(a.$slots,"home-features-before",{},void 0,!0)]),"home-features-after":N(()=>[C(a.$slots,"home-features-after",{},void 0,!0)]),_:3})):g(t).layout&&g(t).layout!=="doc"?(m(),G(Bn(g(t).layout),{key:3})):(m(),G(Xl,{key:4},{"doc-top":N(()=>[C(a.$slots,"doc-top",{},void 0,!0)]),"doc-bottom":N(()=>[C(a.$slots,"doc-bottom",{},void 0,!0)]),"doc-footer-before":N(()=>[C(a.$slots,"doc-footer-before",{},void 0,!0)]),"doc-before":N(()=>[C(a.$slots,"doc-before",{},void 0,!0)]),"doc-after":N(()=>[C(a.$slots,"doc-after",{},void 0,!0)]),"aside-top":N(()=>[C(a.$slots,"aside-top",{},void 0,!0)]),"aside-outline-before":N(()=>[C(a.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":N(()=>[C(a.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":N(()=>[C(a.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":N(()=>[C(a.$slots,"aside-ads-after",{},void 0,!0)]),"aside-bottom":N(()=>[C(a.$slots,"aside-bottom",{},void 0,!0)]),_:3}))],2))}}),Rc=X(Oc,[["__scopeId","data-v-714062c7"]]),Vc={class:"container"},Bc=["innerHTML"],zc=["innerHTML"],Fc=H({__name:"VPFooter",setup(n){const{theme:e,frontmatter:t}=en(),{hasSidebar:r}=Jn();return(a,s)=>g(e).footer&&g(t).footer!==!1?(m(),x("footer",{key:0,class:Q(["VPFooter",{"has-sidebar":g(r)}])},[f("div",Vc,[g(e).footer.message?(m(),x("p",{key:0,class:"message",innerHTML:g(e).footer.message},null,8,Bc)):B("",!0),g(e).footer.copyright?(m(),x("p",{key:1,class:"copyright",innerHTML:g(e).footer.copyright},null,8,zc)):B("",!0)])],2)):B("",!0)}}),Uc=X(Fc,[["__scopeId","data-v-a0954f24"]]);function qc(){const{theme:n,frontmatter:e}=en(),t=Zs([]),r=R(()=>t.value.length>0);return Ot(()=>{t.value=Hr(e.value.outline??n.value.outline)}),{headers:t,hasLocalNav:r}}const Hc={class:"menu-text"},Gc={class:"header"},jc={class:"outline"},Wc=H({__name:"VPLocalNavOutlineDropdown",props:{headers:{},navHeight:{}},setup(n){const e=n,{theme:t}=en(),r=rn(!1),a=rn(0),s=rn(),i=rn();function o(p){var u;(u=s.value)!=null&&u.contains(p.target)||(r.value=!1)}Dn(r,p=>{if(p){document.addEventListener("click",o);return}document.removeEventListener("click",o)}),vr("Escape",()=>{r.value=!1}),Ot(()=>{r.value=!1});function l(){r.value=!r.value,a.value=window.innerHeight+Math.min(window.scrollY-e.navHeight,0)}function c(p){p.target.classList.contains("outline-link")&&(i.value&&(i.value.style.transition="none"),Fr(()=>{r.value=!1}))}function d(){r.value=!1,window.scrollTo({top:0,left:0,behavior:"smooth"})}return(p,u)=>(m(),x("div",{class:"VPLocalNavOutlineDropdown",style:zr({"--vp-vh":a.value+"px"}),ref_key:"main",ref:s},[n.headers.length>0?(m(),x("button",{key:0,onClick:l,class:Q({open:r.value})},[f("span",Hc,S(g(ii)(g(t))),1),u[0]||(u[0]=f("span",{class:"vpi-chevron-right icon"},null,-1))],2)):(m(),x("button",{key:1,onClick:d},S(g(t).returnToTopLabel||"Return to top"),1)),q(Or,{name:"flyout"},{default:N(()=>[r.value?(m(),x("div",{key:0,ref_key:"items",ref:i,class:"items",onClick:c},[f("div",Gc,[f("a",{class:"top-link",href:"#",onClick:d},S(g(t).returnToTopLabel||"Return to top"),1)]),f("div",jc,[q(oi,{headers:n.headers},null,8,["headers"])])],512)):B("",!0)]),_:1})],4))}}),Yc=X(Wc,[["__scopeId","data-v-f210c2f8"]]),Kc={class:"container"},Xc=["aria-expanded"],Qc={class:"menu-text"},Jc=H({__name:"VPLocalNav",props:{open:{type:Boolean}},emits:["open-menu"],setup(n){const{theme:e,frontmatter:t}=en(),{hasSidebar:r}=Jn(),{headers:a}=qc(),{y:s}=ei(),i=rn(0);On(()=>{i.value=parseInt(getComputedStyle(document.documentElement).getPropertyValue("--vp-nav-height"))}),Ot(()=>{a.value=Hr(t.value.outline??e.value.outline)});const o=R(()=>a.value.length===0),l=R(()=>o.value&&!r.value),c=R(()=>({VPLocalNav:!0,"has-sidebar":r.value,empty:o.value,fixed:l.value}));return(d,p)=>g(t).layout!=="home"&&(!l.value||g(s)>=i.value)?(m(),x("div",{key:0,class:Q(c.value)},[f("div",Kc,[g(r)?(m(),x("button",{key:0,class:"menu","aria-expanded":n.open,"aria-controls":"VPSidebarNav",onClick:p[0]||(p[0]=u=>d.$emit("open-menu"))},[p[1]||(p[1]=f("span",{class:"vpi-align-left menu-icon"},null,-1)),f("span",Qc,S(g(e).sidebarMenuLabel||"Menu"),1)],8,Xc)):B("",!0),q(Yc,{headers:g(a),navHeight:i.value},null,8,["headers","navHeight"])])],2)):B("",!0)}}),Zc=X(Jc,[["__scopeId","data-v-f8cca058"]]);function nu(){const n=rn(!1);function e(){n.value=!0,window.addEventListener("resize",a)}function t(){n.value=!1,window.removeEventListener("resize",a)}function r(){n.value?t():e()}function a(){window.outerWidth>=768&&t()}const s=ge();return Dn(()=>s.path,t),{isScreenOpen:n,openScreen:e,closeScreen:t,toggleScreen:r}}const eu={},tu={class:"VPSwitch",type:"button",role:"switch"},ru={class:"check"},au={key:0,class:"icon"};function su(n,e){return m(),x("button",tu,[f("span",ru,[n.$slots.default?(m(),x("span",au,[C(n.$slots,"default",{},void 0,!0)])):B("",!0)])])}const iu=X(eu,[["render",su],["__scopeId","data-v-71e7f96a"]]),ou=H({__name:"VPSwitchAppearance",setup(n){const{isDark:e,theme:t}=en(),r=Rt("toggle-appearance",()=>{e.value=!e.value}),a=rn("");return Br(()=>{a.value=e.value?t.value.lightModeSwitchTitle||"Switch to light theme":t.value.darkModeSwitchTitle||"Switch to dark theme"}),(s,i)=>(m(),G(iu,{title:a.value,class:"VPSwitchAppearance","aria-checked":g(e),onClick:g(r)},{default:N(()=>[...i[0]||(i[0]=[f("span",{class:"vpi-sun sun"},null,-1),f("span",{class:"vpi-moon moon"},null,-1)])]),_:1},8,["title","aria-checked","onClick"]))}}),Gr=X(ou,[["__scopeId","data-v-40158760"]]),lu={key:0,class:"VPNavBarAppearance"},cu=H({__name:"VPNavBarAppearance",setup(n){const{site:e}=en();return(t,r)=>g(e).appearance&&g(e).appearance!=="force-dark"&&g(e).appearance!=="force-auto"?(m(),x("div",lu,[q(Gr)])):B("",!0)}}),uu=X(cu,[["__scopeId","data-v-e3e8a76b"]]),jr=rn();let li=!1,nr=0;function du(n){const e=rn(!1);if(Vt){!li&&hu(),nr++;const t=Dn(jr,r=>{var a,s,i;r===n.el.value||(a=n.el.value)!=null&&a.contains(r)?(e.value=!0,(s=n.onFocus)==null||s.call(n)):(e.value=!1,(i=n.onBlur)==null||i.call(n))});Vr(()=>{t(),nr--,nr||fu()})}return No(e)}function hu(){document.addEventListener("focusin",ci),li=!0,jr.value=document.activeElement}function fu(){document.removeEventListener("focusin",ci)}function ci(){jr.value=document.activeElement}const pu={class:"VPMenuLink"},gu=["innerHTML"],mu=H({__name:"VPMenuLink",props:{item:{}},setup(n){const{page:e}=en();return(t,r)=>(m(),x("div",pu,[q(zn,{class:Q({active:g(ue)(g(e).relativePath,n.item.activeMatch||n.item.link,!!n.item.activeMatch)}),href:n.item.link,target:n.item.target,rel:n.item.rel,"no-icon":n.item.noIcon},{default:N(()=>[f("span",{innerHTML:n.item.text},null,8,gu)]),_:1},8,["class","href","target","rel","no-icon"])]))}}),Bt=X(mu,[["__scopeId","data-v-9182bc9d"]]),vu={class:"VPMenuGroup"},_u={key:0,class:"title"},bu=H({__name:"VPMenuGroup",props:{text:{},items:{}},setup(n){return(e,t)=>(m(),x("div",vu,[n.text?(m(),x("p",_u,S(n.text),1)):B("",!0),(m(!0),x(Z,null,sn(n.items,r=>(m(),x(Z,null,["link"in r?(m(),G(Bt,{key:0,item:r},null,8,["item"])):B("",!0)],64))),256))]))}}),yu=X(bu,[["__scopeId","data-v-a0052f3d"]]),xu={class:"VPMenu"},ku={key:0,class:"items"},wu=H({__name:"VPMenu",props:{items:{}},setup(n){return(e,t)=>(m(),x("div",xu,[n.items?(m(),x("div",ku,[(m(!0),x(Z,null,sn(n.items,r=>(m(),x(Z,{key:JSON.stringify(r)},["link"in r?(m(),G(Bt,{key:0,item:r},null,8,["item"])):"component"in r?(m(),G(Bn(r.component),ee({key:1,ref_for:!0},r.props),null,16)):(m(),G(yu,{key:2,text:r.text,items:r.items},null,8,["text","items"]))],64))),128))])):B("",!0),C(e.$slots,"default",{},void 0,!0)]))}}),Au=X(wu,[["__scopeId","data-v-6ac81520"]]),Cu=["aria-expanded","aria-label"],Tu={key:0,class:"text"},Su=["innerHTML"],Mu={key:1,class:"vpi-more-horizontal icon"},$u={class:"menu"},Pu=H({__name:"VPFlyout",props:{icon:{},button:{},label:{},items:{}},setup(n){const e=rn(!1),t=rn();du({el:t,onBlur:r});function r(){e.value=!1}return(a,s)=>(m(),x("div",{class:"VPFlyout",ref_key:"el",ref:t,onMouseenter:s[1]||(s[1]=i=>e.value=!0),onMouseleave:s[2]||(s[2]=i=>e.value=!1)},[f("button",{type:"button",class:"button","aria-haspopup":"true","aria-expanded":e.value,"aria-label":n.label,onClick:s[0]||(s[0]=i=>e.value=!e.value)},[n.button||n.icon?(m(),x("span",Tu,[n.icon?(m(),x("span",{key:0,class:Q([n.icon,"option-icon"])},null,2)):B("",!0),n.button?(m(),x("span",{key:1,innerHTML:n.button},null,8,Su)):B("",!0),s[3]||(s[3]=f("span",{class:"vpi-chevron-down text-icon"},null,-1))])):(m(),x("span",Mu))],8,Cu),f("div",$u,[q(Au,{items:n.items},{default:N(()=>[C(a.$slots,"default",{},void 0,!0)]),_:3},8,["items"])])],544))}}),Wr=X(Pu,[["__scopeId","data-v-beb8b8d5"]]),Iu=["href","aria-label","innerHTML"],Du=H({__name:"VPSocialLink",props:{icon:{},link:{},ariaLabel:{}},setup(n){const e=n,t=rn();On(async()=>{var s;await Fr();const a=(s=t.value)==null?void 0:s.children[0];a instanceof HTMLElement&&a.className.startsWith("vpi-social-")&&(getComputedStyle(a).maskImage||getComputedStyle(a).webkitMaskImage)==="none"&&a.style.setProperty("--icon",`url('https://api.iconify.design/simple-icons/${e.icon}.svg')`)});const r=R(()=>typeof e.icon=="object"?e.icon.svg:`<span class="vpi-social-${e.icon}"></span>`);return(a,s)=>(m(),x("a",{ref_key:"el",ref:t,class:"VPSocialLink no-icon",href:n.link,"aria-label":n.ariaLabel??(typeof n.icon=="string"?n.icon:""),target:"_blank",rel:"noopener",innerHTML:r.value},null,8,Iu))}}),Lu=X(Du,[["__scopeId","data-v-7652e684"]]),Nu={class:"VPSocialLinks"},Eu=H({__name:"VPSocialLinks",props:{links:{}},setup(n){return(e,t)=>(m(),x("div",Nu,[(m(!0),x(Z,null,sn(n.links,({link:r,icon:a,ariaLabel:s})=>(m(),G(Lu,{key:r,icon:a,link:r,ariaLabel:s},null,8,["icon","link","ariaLabel"]))),128))]))}}),Yr=X(Eu,[["__scopeId","data-v-54791c74"]]),Ou={key:0,class:"group translations"},Ru={class:"trans-title"},Vu={key:1,class:"group"},Bu={class:"item appearance"},zu={class:"label"},Fu={class:"appearance-action"},Uu={key:2,class:"group"},qu={class:"item social-links"},Hu=H({__name:"VPNavBarExtra",setup(n){const{site:e,theme:t}=en(),{localeLinks:r,currentLang:a}=Ke({correspondingLink:!0}),s=R(()=>r.value.length&&a.value.label||e.value.appearance||t.value.socialLinks);return(i,o)=>s.value?(m(),G(Wr,{key:0,class:"VPNavBarExtra",label:"extra navigation"},{default:N(()=>[g(r).length&&g(a).label?(m(),x("div",Ou,[f("p",Ru,S(g(a).label),1),(m(!0),x(Z,null,sn(g(r),l=>(m(),G(Bt,{key:l.link,item:l},null,8,["item"]))),128))])):B("",!0),g(e).appearance&&g(e).appearance!=="force-dark"&&g(e).appearance!=="force-auto"?(m(),x("div",Vu,[f("div",Bu,[f("p",zu,S(g(t).darkModeSwitchLabel||"Appearance"),1),f("div",Fu,[q(Gr)])])])):B("",!0),g(t).socialLinks?(m(),x("div",Uu,[f("div",qu,[q(Yr,{class:"social-links-list",links:g(t).socialLinks},null,8,["links"])])])):B("",!0)]),_:1})):B("",!0)}}),Gu=X(Hu,[["__scopeId","data-v-ad50955e"]]),ju=["aria-expanded"],Wu=H({__name:"VPNavBarHamburger",props:{active:{type:Boolean}},emits:["click"],setup(n){return(e,t)=>(m(),x("button",{type:"button",class:Q(["VPNavBarHamburger",{active:n.active}]),"aria-label":"mobile navigation","aria-expanded":n.active,"aria-controls":"VPNavScreen",onClick:t[0]||(t[0]=r=>e.$emit("click"))},[...t[1]||(t[1]=[f("span",{class:"container"},[f("span",{class:"top"}),f("span",{class:"middle"}),f("span",{class:"bottom"})],-1)])],10,ju))}}),Yu=X(Wu,[["__scopeId","data-v-5e4fa142"]]),Ku=["innerHTML"],Xu=H({__name:"VPNavBarMenuLink",props:{item:{}},setup(n){const{page:e}=en();return(t,r)=>(m(),G(zn,{class:Q({VPNavBarMenuLink:!0,active:g(ue)(g(e).relativePath,n.item.activeMatch||n.item.link,!!n.item.activeMatch)}),href:n.item.link,target:n.item.target,rel:n.item.rel,"no-icon":n.item.noIcon,tabindex:"0"},{default:N(()=>[f("span",{innerHTML:n.item.text},null,8,Ku)]),_:1},8,["class","href","target","rel","no-icon"]))}}),Qu=X(Xu,[["__scopeId","data-v-f75fdd7c"]]),Ju=H({__name:"VPNavBarMenuGroup",props:{item:{}},setup(n){const e=n,{page:t}=en(),r=s=>"component"in s?!1:"link"in s?ue(t.value.relativePath,s.link,!!e.item.activeMatch):s.items.some(r),a=R(()=>r(e.item));return(s,i)=>(m(),G(Wr,{class:Q({VPNavBarMenuGroup:!0,active:g(ue)(g(t).relativePath,n.item.activeMatch,!!n.item.activeMatch)||a.value}),button:n.item.text,items:n.item.items},null,8,["class","button","items"]))}}),Zu={key:0,"aria-labelledby":"main-nav-aria-label",class:"VPNavBarMenu"},nd=H({__name:"VPNavBarMenu",setup(n){const{theme:e}=en();return(t,r)=>g(e).nav?(m(),x("nav",Zu,[r[0]||(r[0]=f("span",{id:"main-nav-aria-label",class:"visually-hidden"}," Main Navigation ",-1)),(m(!0),x(Z,null,sn(g(e).nav,a=>(m(),x(Z,{key:JSON.stringify(a)},["link"in a?(m(),G(Qu,{key:0,item:a},null,8,["item"])):"component"in a?(m(),G(Bn(a.component),ee({key:1,ref_for:!0},a.props),null,16)):(m(),G(Ju,{key:2,item:a},null,8,["item"]))],64))),128))])):B("",!0)}}),ed=X(nd,[["__scopeId","data-v-e90f0632"]]);function td(n){const{localeIndex:e,theme:t}=en();function r(a){var v,_,y;const s=a.split("."),i=(v=t.value.search)==null?void 0:v.options,o=i&&typeof i=="object",l=o&&((y=(_=i.locales)==null?void 0:_[e.value])==null?void 0:y.translations)||null,c=o&&i.translations||null;let d=l,p=c,u=n;const h=s.pop();for(const w of s){let A=null;const I=u==null?void 0:u[w];I&&(A=u=I);const b=p==null?void 0:p[w];b&&(A=p=b);const T=d==null?void 0:d[w];T&&(A=d=T),I||(u=A),b||(p=A),T||(d=A)}return(d==null?void 0:d[h])??(p==null?void 0:p[h])??(u==null?void 0:u[h])??""}return r}const rd=["aria-label"],ad={class:"DocSearch-Button-Container"},sd={class:"DocSearch-Button-Placeholder"},rs=H({__name:"VPNavBarSearchButton",setup(n){const t=td({button:{buttonText:"Search",buttonAriaLabel:"Search"}});return(r,a)=>(m(),x("button",{type:"button",class:"DocSearch DocSearch-Button","aria-label":g(t)("button.buttonAriaLabel")},[f("span",ad,[a[0]||(a[0]=f("span",{class:"vp-icon DocSearch-Search-Icon"},null,-1)),f("span",sd,S(g(t)("button.buttonText")),1)]),a[1]||(a[1]=f("span",{class:"DocSearch-Button-Keys"},[f("kbd",{class:"DocSearch-Button-Key"}),f("kbd",{class:"DocSearch-Button-Key"},"K")],-1))],8,rd))}}),id={class:"VPNavBarSearch"},od={id:"local-search"},ld={key:1,id:"docsearch"},Kr=H({__name:"VPNavBarSearch",setup(n){const e=Eo(()=>ti(()=>import("./VPLocalSearchBox.bw8qKVoH.js"),__vite__mapDeps([0,1]))),t=()=>null,{theme:r}=en(),a=rn(!1),s=rn(!1);On(()=>{});function i(){a.value||(a.value=!0,setTimeout(o,16))}function o(){const p=new Event("keydown");p.key="k",p.metaKey=!0,window.dispatchEvent(p),setTimeout(()=>{document.querySelector(".DocSearch-Modal")||o()},16)}function l(p){const u=p.target,h=u.tagName;return u.isContentEditable||h==="INPUT"||h==="SELECT"||h==="TEXTAREA"}const c=rn(!1);vr("k",p=>{(p.ctrlKey||p.metaKey)&&(p.preventDefault(),c.value=!0)}),vr("/",p=>{l(p)||(p.preventDefault(),c.value=!0)});const d="local";return(p,u)=>{var h;return m(),x("div",id,[g(d)==="local"?(m(),x(Z,{key:0},[c.value?(m(),G(g(e),{key:0,onClose:u[0]||(u[0]=v=>c.value=!1)})):B("",!0),f("div",od,[q(rs,{onClick:u[1]||(u[1]=v=>c.value=!0)})])],64)):g(d)==="algolia"?(m(),x(Z,{key:1},[a.value?(m(),G(g(t),{key:0,algolia:((h=g(r).search)==null?void 0:h.options)??g(r).algolia,onVnodeBeforeMount:u[2]||(u[2]=v=>s.value=!0)},null,8,["algolia"])):B("",!0),s.value?B("",!0):(m(),x("div",ld,[q(rs,{onClick:i})]))],64)):B("",!0)])}}}),cd=H({__name:"VPNavBarSocialLinks",setup(n){const{theme:e}=en();return(t,r)=>g(e).socialLinks?(m(),G(Yr,{key:0,class:"VPNavBarSocialLinks",links:g(e).socialLinks},null,8,["links"])):B("",!0)}}),ud=X(cd,[["__scopeId","data-v-27e2b2b1"]]),dd=["href","rel","target"],hd=["innerHTML"],fd={key:2},pd=H({__name:"VPNavBarTitle",setup(n){const{site:e,theme:t}=en(),{hasSidebar:r}=Jn(),{currentLang:a}=Ke(),s=R(()=>{var l;return typeof t.value.logoLink=="string"?t.value.logoLink:(l=t.value.logoLink)==null?void 0:l.link}),i=R(()=>{var l;return typeof t.value.logoLink=="string"||(l=t.value.logoLink)==null?void 0:l.rel}),o=R(()=>{var l;return typeof t.value.logoLink=="string"||(l=t.value.logoLink)==null?void 0:l.target});return(l,c)=>(m(),x("div",{class:Q(["VPNavBarTitle",{"has-sidebar":g(r)}])},[f("a",{class:"title",href:s.value??g(qr)(g(a).link),rel:i.value,target:o.value},[C(l.$slots,"nav-bar-title-before",{},void 0,!0),g(t).logo?(m(),G(ft,{key:0,class:"logo",image:g(t).logo},null,8,["image"])):B("",!0),g(t).siteTitle?(m(),x("span",{key:1,innerHTML:g(t).siteTitle},null,8,hd)):g(t).siteTitle===void 0?(m(),x("span",fd,S(g(e).title),1)):B("",!0),C(l.$slots,"nav-bar-title-after",{},void 0,!0)],8,dd)],2))}}),gd=X(pd,[["__scopeId","data-v-6ec1a2fc"]]),md={class:"items"},vd={class:"title"},_d=H({__name:"VPNavBarTranslations",setup(n){const{theme:e}=en(),{localeLinks:t,currentLang:r}=Ke({correspondingLink:!0});return(a,s)=>g(t).length&&g(r).label?(m(),G(Wr,{key:0,class:"VPNavBarTranslations",icon:"vpi-languages",label:g(e).langMenuLabel||"Change language"},{default:N(()=>[f("div",md,[f("p",vd,S(g(r).label),1),(m(!0),x(Z,null,sn(g(t),i=>(m(),G(Bt,{key:i.link,item:i},null,8,["item"]))),128))])]),_:1},8,["label"])):B("",!0)}}),ui=X(_d,[["__scopeId","data-v-40afd59f"]]),bd={class:"wrapper"},yd={class:"container"},xd={class:"title"},kd={class:"content"},wd={class:"content-body"},Ad=H({__name:"VPNavBar",props:{isScreenOpen:{type:Boolean}},emits:["toggle-screen"],setup(n){const e=n,{y:t}=ei(),{hasSidebar:r}=Jn(),{frontmatter:a}=en(),s=rn({});return Br(()=>{s.value={"has-sidebar":r.value,home:a.value.layout==="home",top:t.value===0,"screen-open":e.isScreenOpen}}),(i,o)=>(m(),x("div",{class:Q(["VPNavBar",s.value])},[f("div",bd,[f("div",yd,[f("div",xd,[q(gd,null,{"nav-bar-title-before":N(()=>[C(i.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":N(()=>[C(i.$slots,"nav-bar-title-after",{},void 0,!0)]),_:3})]),f("div",kd,[f("div",wd,[C(i.$slots,"nav-bar-content-before",{},void 0,!0),q(Kr,{class:"search"}),q(ed,{class:"menu"}),q(ui,{class:"translations"}),q(uu,{class:"appearance"}),q(ud,{class:"social-links"}),q(Gu,{class:"extra"}),C(i.$slots,"nav-bar-content-after",{},void 0,!0),q(Yu,{class:"hamburger",active:n.isScreenOpen,onClick:o[0]||(o[0]=l=>i.$emit("toggle-screen"))},null,8,["active"])])])])]),o[1]||(o[1]=f("div",{class:"divider"},[f("div",{class:"divider-line"})],-1))],2))}}),Cd=X(Ad,[["__scopeId","data-v-de524931"]]),Td={key:0,class:"VPNavScreenAppearance"},Sd={class:"text"},Md=H({__name:"VPNavScreenAppearance",setup(n){const{site:e,theme:t}=en();return(r,a)=>g(e).appearance&&g(e).appearance!=="force-dark"&&g(e).appearance!=="force-auto"?(m(),x("div",Td,[f("p",Sd,S(g(t).darkModeSwitchLabel||"Appearance"),1),q(Gr)])):B("",!0)}}),$d=X(Md,[["__scopeId","data-v-37559f51"]]),Pd=["innerHTML"],Id=H({__name:"VPNavScreenMenuLink",props:{item:{}},setup(n){const e=Rt("close-screen");return(t,r)=>(m(),G(zn,{class:"VPNavScreenMenuLink",href:n.item.link,target:n.item.target,rel:n.item.rel,"no-icon":n.item.noIcon,onClick:g(e)},{default:N(()=>[f("span",{innerHTML:n.item.text},null,8,Pd)]),_:1},8,["href","target","rel","no-icon","onClick"]))}}),Dd=X(Id,[["__scopeId","data-v-80e6e6d6"]]),Ld=["innerHTML"],Nd=H({__name:"VPNavScreenMenuGroupLink",props:{item:{}},setup(n){const e=Rt("close-screen");return(t,r)=>(m(),G(zn,{class:"VPNavScreenMenuGroupLink",href:n.item.link,target:n.item.target,rel:n.item.rel,"no-icon":n.item.noIcon,onClick:g(e)},{default:N(()=>[f("span",{innerHTML:n.item.text},null,8,Ld)]),_:1},8,["href","target","rel","no-icon","onClick"]))}}),di=X(Nd,[["__scopeId","data-v-bd01957f"]]),Ed={class:"VPNavScreenMenuGroupSection"},Od={key:0,class:"title"},Rd=H({__name:"VPNavScreenMenuGroupSection",props:{text:{},items:{}},setup(n){return(e,t)=>(m(),x("div",Ed,[n.text?(m(),x("p",Od,S(n.text),1)):B("",!0),(m(!0),x(Z,null,sn(n.items,r=>(m(),G(di,{key:r.text,item:r},null,8,["item"]))),128))]))}}),Vd=X(Rd,[["__scopeId","data-v-cd0e7558"]]),Bd=["aria-controls","aria-expanded"],zd=["innerHTML"],Fd=["id"],Ud={key:0,class:"item"},qd={key:1,class:"item"},Hd={key:2,class:"group"},Gd=H({__name:"VPNavScreenMenuGroup",props:{text:{},items:{}},setup(n){const e=n,t=rn(!1),r=R(()=>`NavScreenGroup-${e.text.replace(" ","-").toLowerCase()}`);function a(){t.value=!t.value}return(s,i)=>(m(),x("div",{class:Q(["VPNavScreenMenuGroup",{open:t.value}])},[f("button",{class:"button","aria-controls":r.value,"aria-expanded":t.value,onClick:a},[f("span",{class:"button-text",innerHTML:n.text},null,8,zd),i[0]||(i[0]=f("span",{class:"vpi-plus button-icon"},null,-1))],8,Bd),f("div",{id:r.value,class:"items"},[(m(!0),x(Z,null,sn(n.items,o=>(m(),x(Z,{key:JSON.stringify(o)},["link"in o?(m(),x("div",Ud,[q(di,{item:o},null,8,["item"])])):"component"in o?(m(),x("div",qd,[(m(),G(Bn(o.component),ee({ref_for:!0},o.props,{"screen-menu":""}),null,16))])):(m(),x("div",Hd,[q(Vd,{text:o.text,items:o.items},null,8,["text","items"])]))],64))),128))],8,Fd)],2))}}),jd=X(Gd,[["__scopeId","data-v-3d415584"]]),Wd={key:0,class:"VPNavScreenMenu"},Yd=H({__name:"VPNavScreenMenu",setup(n){const{theme:e}=en();return(t,r)=>g(e).nav?(m(),x("nav",Wd,[(m(!0),x(Z,null,sn(g(e).nav,a=>(m(),x(Z,{key:JSON.stringify(a)},["link"in a?(m(),G(Dd,{key:0,item:a},null,8,["item"])):"component"in a?(m(),G(Bn(a.component),ee({key:1,ref_for:!0},a.props,{"screen-menu":""}),null,16)):(m(),G(jd,{key:2,text:a.text||"",items:a.items},null,8,["text","items"]))],64))),128))])):B("",!0)}}),Kd=H({__name:"VPNavScreenSocialLinks",setup(n){const{theme:e}=en();return(t,r)=>g(e).socialLinks?(m(),G(Yr,{key:0,class:"VPNavScreenSocialLinks",links:g(e).socialLinks},null,8,["links"])):B("",!0)}}),Xd={class:"list"},Qd=H({__name:"VPNavScreenTranslations",setup(n){const{localeLinks:e,currentLang:t}=Ke({correspondingLink:!0}),r=rn(!1);function a(){r.value=!r.value}return(s,i)=>g(e).length&&g(t).label?(m(),x("div",{key:0,class:Q(["VPNavScreenTranslations",{open:r.value}])},[f("button",{class:"title",onClick:a},[i[0]||(i[0]=f("span",{class:"vpi-languages icon lang"},null,-1)),Cn(" "+S(g(t).label)+" ",1),i[1]||(i[1]=f("span",{class:"vpi-chevron-down icon chevron"},null,-1))]),f("ul",Xd,[(m(!0),x(Z,null,sn(g(e),o=>(m(),x("li",{key:o.link,class:"item"},[q(zn,{class:"link",href:o.link},{default:N(()=>[Cn(S(o.text),1)]),_:2},1032,["href"])]))),128))])],2)):B("",!0)}}),Jd=X(Qd,[["__scopeId","data-v-59d95cf4"]]),Zd={class:"container"},nh=H({__name:"VPNavScreen",props:{open:{type:Boolean}},setup(n){const e=rn(null),t=ri(Vt?document.body:null);return(r,a)=>(m(),G(Or,{name:"fade",onEnter:a[0]||(a[0]=s=>t.value=!0),onAfterLeave:a[1]||(a[1]=s=>t.value=!1)},{default:N(()=>[n.open?(m(),x("div",{key:0,class:"VPNavScreen",ref_key:"screen",ref:e,id:"VPNavScreen"},[f("div",Zd,[C(r.$slots,"nav-screen-content-before",{},void 0,!0),q(Yd,{class:"menu"}),q(Jd,{class:"translations"}),q($d,{class:"appearance"}),q(Kd,{class:"social-links"}),C(r.$slots,"nav-screen-content-after",{},void 0,!0)])],512)):B("",!0)]),_:3}))}}),eh=X(nh,[["__scopeId","data-v-07baf27b"]]),th={key:0,class:"VPNav"},rh=H({__name:"VPNav",setup(n){const{isScreenOpen:e,closeScreen:t,toggleScreen:r}=nu(),{frontmatter:a}=en(),s=R(()=>a.value.navbar!==!1);return ai("close-screen",t),Et(()=>{Vt&&document.documentElement.classList.toggle("hide-nav",!s.value)}),(i,o)=>s.value?(m(),x("header",th,[q(Cd,{"is-screen-open":g(e),onToggleScreen:g(r)},{"nav-bar-title-before":N(()=>[C(i.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":N(()=>[C(i.$slots,"nav-bar-title-after",{},void 0,!0)]),"nav-bar-content-before":N(()=>[C(i.$slots,"nav-bar-content-before",{},void 0,!0)]),"nav-bar-content-after":N(()=>[C(i.$slots,"nav-bar-content-after",{},void 0,!0)]),_:3},8,["is-screen-open","onToggleScreen"]),q(eh,{open:g(e)},{"nav-screen-content-before":N(()=>[C(i.$slots,"nav-screen-content-before",{},void 0,!0)]),"nav-screen-content-after":N(()=>[C(i.$slots,"nav-screen-content-after",{},void 0,!0)]),_:3},8,["open"])])):B("",!0)}}),ah=X(rh,[["__scopeId","data-v-717bd8c6"]]),sh=["role","tabindex"],ih={key:1,class:"items"},oh=H({__name:"VPSidebarItem",props:{item:{},depth:{}},setup(n){const e=n,{collapsed:t,collapsible:r,isLink:a,isActiveLink:s,hasActiveLink:i,hasChildren:o,toggle:l}=al(R(()=>e.item)),c=R(()=>o.value?"section":"div"),d=R(()=>a.value?"a":"div"),p=R(()=>o.value?e.depth+2===7?"p":`h${e.depth+2}`:"p"),u=R(()=>a.value?void 0:"button"),h=R(()=>[[`level-${e.depth}`],{collapsible:r.value},{collapsed:t.value},{"is-link":a.value},{"is-active":s.value},{"has-active":i.value}]);function v(y){"key"in y&&y.key!=="Enter"||!e.item.link&&l()}function _(){e.item.link&&l()}return(y,w)=>{const A=re("VPSidebarItem",!0);return m(),G(Bn(c.value),{class:Q(["VPSidebarItem",h.value])},{default:N(()=>[n.item.text?(m(),x("div",ee({key:0,class:"item",role:u.value},Oo(n.item.items?{click:v,keydown:v}:{},!0),{tabindex:n.item.items&&0}),[w[1]||(w[1]=f("div",{class:"indicator"},null,-1)),n.item.link?(m(),G(zn,{key:0,tag:d.value,class:"link",href:n.item.link,rel:n.item.rel,target:n.item.target},{default:N(()=>[(m(),G(Bn(p.value),{class:"text",innerHTML:n.item.text},null,8,["innerHTML"]))]),_:1},8,["tag","href","rel","target"])):(m(),G(Bn(p.value),{key:1,class:"text",innerHTML:n.item.text},null,8,["innerHTML"])),n.item.collapsed!=null&&n.item.items&&n.item.items.length?(m(),x("div",{key:2,class:"caret",role:"button","aria-label":"toggle section",onClick:_,onKeydown:Ro(_,["enter"]),tabindex:"0"},[...w[0]||(w[0]=[f("span",{class:"vpi-chevron-right caret-icon"},null,-1)])],32)):B("",!0)],16,sh)):B("",!0),n.item.items&&n.item.items.length?(m(),x("div",ih,[n.depth<5?(m(!0),x(Z,{key:0},sn(n.item.items,I=>(m(),G(A,{key:I.text,item:I,depth:n.depth+1},null,8,["item","depth"]))),128)):B("",!0)])):B("",!0)]),_:1},8,["class"])}}}),lh=X(oh,[["__scopeId","data-v-08047252"]]),ch=H({__name:"VPSidebarGroup",props:{items:{}},setup(n){const e=rn(!0);let t=null;return On(()=>{t=setTimeout(()=>{t=null,e.value=!1},300)}),Ur(()=>{t!=null&&(clearTimeout(t),t=null)}),(r,a)=>(m(!0),x(Z,null,sn(n.items,s=>(m(),x("div",{key:s.text,class:Q(["group",{"no-transition":e.value}])},[q(lh,{item:s,depth:0},null,8,["item"])],2))),128))}}),uh=X(ch,[["__scopeId","data-v-ba5ce4ae"]]),dh={class:"nav",id:"VPSidebarNav","aria-labelledby":"sidebar-aria-label",tabindex:"-1"},hh=H({__name:"VPSidebar",props:{open:{type:Boolean}},setup(n){const{sidebarGroups:e,hasSidebar:t}=Jn(),r=n,a=rn(null),s=ri(Vt?document.body:null);Dn([r,a],()=>{var o;r.open?(s.value=!0,(o=a.value)==null||o.focus()):s.value=!1},{immediate:!0,flush:"post"});const i=rn(0);return Dn(e,()=>{i.value+=1},{deep:!0}),(o,l)=>g(t)?(m(),x("aside",{key:0,class:Q(["VPSidebar",{open:n.open}]),ref_key:"navEl",ref:a,onClick:l[0]||(l[0]=Vo(()=>{},["stop"]))},[l[2]||(l[2]=f("div",{class:"curtain"},null,-1)),f("nav",dh,[l[1]||(l[1]=f("span",{class:"visually-hidden",id:"sidebar-aria-label"}," Sidebar Navigation ",-1)),C(o.$slots,"sidebar-nav-before",{},void 0,!0),(m(),G(uh,{items:g(e),key:i.value},null,8,["items"])),C(o.$slots,"sidebar-nav-after",{},void 0,!0)])],2)):B("",!0)}}),fh=X(hh,[["__scopeId","data-v-9e9a3195"]]),ph=H({__name:"VPSkipLink",setup(n){const{theme:e}=en(),t=ge(),r=rn();Dn(()=>t.path,()=>r.value.focus());function a({target:s}){const i=document.getElementById(decodeURIComponent(s.hash).slice(1));if(i){const o=()=>{i.removeAttribute("tabindex"),i.removeEventListener("blur",o)};i.setAttribute("tabindex","-1"),i.addEventListener("blur",o),i.focus(),window.scrollTo(0,0)}}return(s,i)=>(m(),x(Z,null,[f("span",{ref_key:"backToTop",ref:r,tabindex:"-1"},null,512),f("a",{href:"#VPContent",class:"VPSkipLink visually-hidden",onClick:a},S(g(e).skipToContentLabel||"Skip to content"),1)],64))}}),gh=X(ph,[["__scopeId","data-v-2f312717"]]),mh=H({__name:"Layout",setup(n){const{isOpen:e,open:t,close:r}=Jn(),a=ge();Dn(()=>a.path,r),rl(e,r);const{frontmatter:s}=en(),i=Bo(),o=R(()=>!!i["home-hero-image"]);return ai("hero-image-slot-exists",o),(l,c)=>{const d=re("Content");return g(s).layout!==!1?(m(),x("div",{key:0,class:Q(["Layout",g(s).pageClass])},[C(l.$slots,"layout-top",{},void 0,!0),q(gh),q(Ho,{class:"backdrop",show:g(e),onClick:g(r)},null,8,["show","onClick"]),q(ah,null,{"nav-bar-title-before":N(()=>[C(l.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":N(()=>[C(l.$slots,"nav-bar-title-after",{},void 0,!0)]),"nav-bar-content-before":N(()=>[C(l.$slots,"nav-bar-content-before",{},void 0,!0)]),"nav-bar-content-after":N(()=>[C(l.$slots,"nav-bar-content-after",{},void 0,!0)]),"nav-screen-content-before":N(()=>[C(l.$slots,"nav-screen-content-before",{},void 0,!0)]),"nav-screen-content-after":N(()=>[C(l.$slots,"nav-screen-content-after",{},void 0,!0)]),_:3}),q(Zc,{open:g(e),onOpenMenu:g(t)},null,8,["open","onOpenMenu"]),q(fh,{open:g(e)},{"sidebar-nav-before":N(()=>[C(l.$slots,"sidebar-nav-before",{},void 0,!0)]),"sidebar-nav-after":N(()=>[C(l.$slots,"sidebar-nav-after",{},void 0,!0)]),_:3},8,["open"]),q(Rc,null,{"page-top":N(()=>[C(l.$slots,"page-top",{},void 0,!0)]),"page-bottom":N(()=>[C(l.$slots,"page-bottom",{},void 0,!0)]),"not-found":N(()=>[C(l.$slots,"not-found",{},void 0,!0)]),"home-hero-before":N(()=>[C(l.$slots,"home-hero-before",{},void 0,!0)]),"home-hero-info-before":N(()=>[C(l.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":N(()=>[C(l.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":N(()=>[C(l.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":N(()=>[C(l.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":N(()=>[C(l.$slots,"home-hero-image",{},void 0,!0)]),"home-hero-after":N(()=>[C(l.$slots,"home-hero-after",{},void 0,!0)]),"home-features-before":N(()=>[C(l.$slots,"home-features-before",{},void 0,!0)]),"home-features-after":N(()=>[C(l.$slots,"home-features-after",{},void 0,!0)]),"doc-footer-before":N(()=>[C(l.$slots,"doc-footer-before",{},void 0,!0)]),"doc-before":N(()=>[C(l.$slots,"doc-before",{},void 0,!0)]),"doc-after":N(()=>[C(l.$slots,"doc-after",{},void 0,!0)]),"doc-top":N(()=>[C(l.$slots,"doc-top",{},void 0,!0)]),"doc-bottom":N(()=>[C(l.$slots,"doc-bottom",{},void 0,!0)]),"aside-top":N(()=>[C(l.$slots,"aside-top",{},void 0,!0)]),"aside-bottom":N(()=>[C(l.$slots,"aside-bottom",{},void 0,!0)]),"aside-outline-before":N(()=>[C(l.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":N(()=>[C(l.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":N(()=>[C(l.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":N(()=>[C(l.$slots,"aside-ads-after",{},void 0,!0)]),_:3}),q(Uc),C(l.$slots,"layout-bottom",{},void 0,!0)],2)):(m(),G(d,{key:1}))}}}),vh=X(mh,[["__scopeId","data-v-3fa573af"]]),hi={Layout:vh,enhanceApp:({app:n})=>{n.component("Badge",Fo)}},_h={class:"flex items-center rounded-lg border border-slate-200 dark:border-slate-700 overflow-hidden"},bh={key:1,class:"flex flex-wrap items-center gap-2"},yh=["href"],as=H({__name:"ThemeControls",props:{compact:{type:Boolean,default:!1},showSearch:{type:Boolean,default:!0}},setup(n){const e=rn("light"),t=ge(),{site:r}=pe(),a=R(()=>{const h=r.value.locales||{};return Object.values(h).map(v=>{const _=typeof(v==null?void 0:v.label)=="string"?v.label:"",y=typeof(v==null?void 0:v.link)=="string"?v.link:"";return{label:_,link:y}}).filter(v=>!!(v.label&&v.link))}),s=R(()=>l(t.path)),i=R(()=>a.value.map(h=>l(h.link)).filter(h=>h!=="/").sort((h,v)=>v.length-h.length)),o=R(()=>{const h=s.value;for(const v of i.value)if(h===v||h.startsWith(`${v}/`))return v;return"/"});function l(h){if(!h)return"/";const[v]=h.split(/[?#]/);return v&&v.replace(/\/+$/,"")||"/"}function c(h){return o.value===l(h)}function d(h){for(const v of i.value){if(h===v)return"/";if(h.startsWith(`${v}/`))return h.slice(v.length)||"/"}return h}function p(h){const v=l(h),_=d(s.value);return v==="/"?_:`${v}${_==="/"?"/":_}`.replace(/\/{2,}/g,"/")}function u(h){if(typeof window>"u")return;e.value=h;const v=document.documentElement;v.classList.remove("dark"),h==="dark"&&v.classList.add("dark"),v.setAttribute("data-theme",h),v.style.colorScheme=h,localStorage.setItem("vitepress-theme-appearance",h)}return On(()=>{const h=localStorage.getItem("vitepress-theme-appearance"),v=document.documentElement.classList.contains("dark")?"dark":"light",_=h==="dark"||h==="light"?h:v;u(_),requestAnimationFrame(()=>u(_))}),(h,v)=>(m(),x("div",{class:Q(n.compact?"flex flex-col items-start gap-3":"flex items-center gap-3")},[n.showSearch&&!n.compact?(m(),G(Kr,{key:0})):B("",!0),f("div",_h,[f("button",{class:Q(["px-2.5 py-1.5 text-xs font-semibold transition-colors",e.value==="light"?"bg-slate-200 text-slate-900 dark:bg-slate-100":"bg-transparent text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"]),onClick:v[0]||(v[0]=_=>u("light"))}," Light ",2),f("button",{class:Q(["px-2.5 py-1.5 text-xs font-semibold transition-colors",e.value==="dark"?"bg-slate-900 text-slate-100 dark:bg-slate-700":"bg-transparent text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"]),onClick:v[1]||(v[1]=_=>u("dark"))}," Dark ",2)]),n.compact?(m(),x("div",bh,[(m(!0),x(Z,null,sn(a.value,_=>(m(),x("a",{key:_.link,class:Q(c(_.link)?"rounded-md border border-slate-300 dark:border-slate-600 bg-slate-100 dark:bg-slate-800 px-2.5 py-1 text-xs font-semibold text-slate-900 dark:text-slate-100":"rounded-md border border-slate-200 dark:border-slate-700 px-2.5 py-1 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"),href:p(_.link)},S(_.label),11,yh))),128))])):(m(),G(ui,{key:2}))],2))}}),xh={class:"fixed top-0 w-full z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-b border-slate-200/15 dark:border-slate-800/15 shadow-[0px_24px_48px_rgba(42,52,57,0.06)]"},kh={class:"flex items-center gap-3"},wh=["href"],Ah={class:"hidden md:flex items-center space-x-8 font-inter tracking-tight"},Ch=["href"],Th={class:"hidden md:flex items-center gap-4"},Sh={key:0,class:"bg-primary text-on-primary px-5 py-2 rounded-lg font-medium text-sm transition-all active:opacity-80"},Mh={class:"md:hidden flex items-center gap-2"},$h={class:"mobile-search"},Ph={class:"group relative"},Ih={class:"absolute right-0 mt-3 w-[min(20rem,calc(100vw-2rem))] rounded-xl border border-slate-200 dark:border-slate-700 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl shadow-xl p-4"},Dh={class:"space-y-1"},Lh=["href"],Nh={class:"mt-4 border-t border-slate-200 dark:border-slate-700 pt-4"},Eh={key:0,class:"mt-4 w-full bg-primary text-on-primary px-5 py-2 rounded-lg font-medium text-sm transition-all active:opacity-80"},Oh=H({__name:"SiteHeader",props:{siteTitle:{default:"MeshShape"},navLinks:{default:()=>[]},showSubscribe:{type:Boolean,default:!1},subscribeButtonText:{default:"Subscribe"},navHeightClass:{default:"h-20"}},setup(n){const e=ge();function t(s){const i=r(s);return i==="/en"||i.startsWith("/en/")?"/en/":"/"}function r(s){if(!s)return"/";const[i]=s.split(/[?#]/);return i&&i.replace(/\/+$/,"")||"/"}function a(s){if(s.active)return!0;const i=r(s.href),o=r(e.path);return i==="/"?o==="/":i==="/en"?o==="/en":o===i||o.startsWith(`${i}/`)}return(s,i)=>(m(),x("nav",xh,[f("div",{class:Q(`flex justify-between items-center ${n.navHeightClass} px-8 w-full max-w-7xl mx-auto`)},[f("div",kh,[f("a",{class:"text-xl font-bold tracking-tighter text-slate-900 dark:text-slate-50 hover:opacity-80 transition-opacity",href:t(g(e).path)},S(n.siteTitle),9,wh)]),f("div",Ah,[(m(!0),x(Z,null,sn(n.navLinks,o=>(m(),x("a",{key:o.text,class:Q(a(o)?"text-slate-900 dark:text-slate-50 font-semibold border-b-2 border-slate-900 dark:border-slate-50 pb-1 transition-all":"text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 transition-colors"),href:o.href||"#"},S(o.text),11,Ch))),128))]),f("div",Th,[q(as),n.showSubscribe?(m(),x("button",Sh,S(n.subscribeButtonText),1)):B("",!0)]),f("div",Mh,[f("div",$h,[q(Kr)]),f("details",Ph,[i[0]||(i[0]=f("summary",{class:"list-none flex items-center justify-center h-10 w-10 rounded-lg border border-slate-300/60 dark:border-slate-700/60 text-slate-700 dark:text-slate-200 cursor-pointer","aria-label":"Open mobile navigation menu"},[f("span",{class:"text-xl leading-none"},"≡")],-1)),f("div",Ih,[f("div",Dh,[(m(!0),x(Z,null,sn(n.navLinks,o=>(m(),x("a",{key:`mobile-${o.text}`,class:Q(a(o)?"block rounded-lg px-3 py-2 text-slate-900 dark:text-slate-50 font-semibold bg-slate-100 dark:bg-slate-800/80":"block rounded-lg px-3 py-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/80 transition-colors"),href:o.href||"#"},S(o.text),11,Lh))),128))]),f("div",Nh,[q(as,{compact:!0,"show-search":!1})]),n.showSubscribe?(m(),x("button",Eh,S(n.subscribeButtonText),1)):B("",!0)])])])],2)]))}}),zt=X(Oh,[["__scopeId","data-v-70c33c8b"]]),Rh={class:"w-full border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950"},Vh={class:"max-w-7xl mx-auto px-8 py-12 flex flex-col md:flex-row justify-between items-center gap-8"},Bh=["href"],zh={class:"text-sm font-inter tracking-wide text-slate-600 dark:text-slate-400"},Fh={class:"flex flex-wrap justify-center gap-8"},Uh=["href"],qh={key:0,class:"flex gap-4"},Hh={class:"material-symbols-outlined text-slate-600 dark:text-slate-400"},Gh={key:0,class:"border-t border-slate-200/80 dark:border-slate-800/80"},jh={class:"max-w-7xl mx-auto px-8 py-4 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-xs tracking-[0.08em] uppercase text-slate-500 dark:text-slate-400"},Wh=["href"],Yh=["href"],Ft=H({__name:"SiteFooter",props:{title:{default:"MeshShape"},description:{default:""},links:{default:()=>[]},filing:{default:null},socialIcons:{default:()=>[]}},setup(n){const e=ge();function t(a){if(!a)return"/";const[s]=a.split(/[?#]/);return s&&s.replace(/\/+$/,"")||"/"}function r(a){const s=t(a);return s==="/en"||s.startsWith("/en/")?"/en/":"/"}return(a,s)=>(m(),x("footer",Rh,[f("div",Vh,[f("div",null,[f("a",{class:"text-lg font-bold text-slate-900 dark:text-slate-50 mb-2 inline-block hover:opacity-80 transition-opacity",href:r(g(e).path)},S(n.title),9,Bh),f("p",zh,S(n.description),1)]),f("div",Fh,[(m(!0),x(Z,null,sn(n.links,i=>(m(),x("a",{key:i.text,class:"text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm font-inter tracking-wide",href:i.href||"#"},S(i.text),9,Uh))),128))]),n.socialIcons.length?(m(),x("div",qh,[(m(!0),x(Z,null,sn(n.socialIcons,i=>(m(),x("button",{key:i,class:"w-10 h-10 flex items-center justify-center rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:scale-105 transition-transform"},[f("span",Hh,S(i),1)]))),128))])):B("",!0)]),n.filing?(m(),x("div",Gh,[f("div",jh,[f("a",{class:"hover:text-slate-700 dark:hover:text-slate-200 transition-colors",href:n.filing.href,rel:"noreferrer",target:"_blank"},S(n.filing.label),9,Wh),s[0]||(s[0]=f("span",{class:"hidden sm:inline text-slate-300 dark:text-slate-700"},"/",-1)),f("a",{class:"font-medium tracking-[0.03em] normal-case hover:text-slate-700 dark:hover:text-slate-200 transition-colors",href:n.filing.href,rel:"noreferrer",target:"_blank"},S(n.filing.number),9,Yh)])])):B("",!0)]))}});function Ut(){const{frontmatter:n}=pe(),e=R(()=>n.value);return{frontmatter:n,page:e}}function qt(){const{theme:n}=pe(),e=R(()=>n.value),t=R(()=>e.value.header||{}),r=R(()=>e.value.footer||{}),a=R(()=>e.value.ui||{});return{theme:n,themeConfig:e,headerConfig:t,footerConfig:r,uiConfig:a}}const Kh="/assets/mesh-texture.CdcToYau.png",Xh="/assets/mesh-architecture.BxOsXjO_.png",Qh={class:"bg-surface text-slate-900 dark:text-slate-100 antialiased selection:bg-primary-container selection:text-on-primary-container"},Jh={class:"pt-20 bg-surface"},Zh={class:"relative overflow-hidden min-h-[870px] flex items-center px-8 max-w-7xl mx-auto"},nf={class:"grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full"},ef={class:"lg:col-span-5 lg:order-2 relative h-[320px] sm:h-[420px] lg:h-[500px] w-full mt-8 lg:mt-0"},tf={class:"absolute inset-0 bg-surface-container-low rounded-[2rem] overflow-hidden mesh-gradient group"},rf={class:"lg:col-span-7 lg:order-1 z-10"},af={class:"inline-block label-sm text-[0.6875rem] font-bold tracking-[0.05em] uppercase text-tertiary mb-6"},sf={class:"text-[2.25rem] sm:text-[2.9rem] lg:text-[3.5rem] font-extrabold leading-[1.18] sm:leading-[1.12] lg:leading-[1.1] tracking-[-0.02em] text-slate-900 dark:text-slate-100 mb-8"},of={class:"text-[0.92em] sm:text-[1em] text-primary-dim"},lf={class:"text-[1.375rem] leading-relaxed text-slate-700 dark:text-slate-400 max-w-2xl font-light"},cf={class:"mt-12 mb-8 flex flex-col w-full gap-4 sm:flex-row sm:items-center sm:space-x-6 sm:gap-0"},uf=["href"],df={class:"group-hover:underline"},hf={class:"py-24 bg-surface-container-low dark:bg-slate-900"},ff={class:"max-w-7xl mx-auto px-8"},pf={class:"mb-16 text-center lg:text-left"},gf={class:"text-[2.25rem] font-bold leading-[1.34] sm:leading-[1.2] tracking-tight text-slate-900 dark:text-slate-100 mb-8"},mf={class:"text-slate-700 dark:text-slate-400 max-w-xl"},vf={class:"relative h-[350px] lg:h-auto lg:aspect-[21/9] w-full bg-surface-container-lowest rounded-[2rem] lg:rounded-full overflow-hidden outline outline-1 outline-outline-variant/10 group"},_f=["src"],bf={class:"absolute bottom-6 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] lg:w-auto lg:max-w-xs lg:left-12 lg:translate-x-0 lg:bottom-12 flex flex-col space-y-2 p-6 bg-white/40 backdrop-blur-md rounded-xl border border-white/20"},yf={class:"text-xs font-bold text-primary uppercase tracking-widest dark:text-tertiary"},xf={class:"text-sm text-slate-900 dark:text-slate-300"},kf={id:"insights-section",class:"py-32 bg-surface dark:bg-slate-950"},wf={class:"max-w-7xl mx-auto px-8"},Af={class:"flex flex-col lg:flex-row gap-24 items-start"},Cf={class:"lg:sticky lg:top-32 lg:w-1/3 w-full text-center lg:text-left"},Tf={class:"text-[3rem] font-extrabold tracking-tighter leading-tight mb-6 flex items-baseline justify-center lg:justify-start gap-x-0"},Sf={class:"text-slate-700 dark:text-slate-400"},Mf={class:"lg:w-2/3 space-y-32"},$f={class:"flex flex-col lg:flex-row lg:items-baseline items-start gap-4 lg:gap-6 mb-8"},Pf={class:"text-[4rem] font-thin text-outline-variant leading-none"},If={class:"text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100 text-left"},Df={class:"pl-0 lg:pl-20"},Lf={key:0,class:"space-y-5 mb-8 text-lg leading-relaxed text-slate-700 dark:text-slate-400"},Nf={key:1,class:"text-lg leading-relaxed text-slate-700 dark:text-slate-400 mb-8"},Ef={key:2,class:"mb-8 space-y-3 text-base leading-relaxed text-slate-700 dark:text-slate-400"},Of={key:3,class:"mt-4 px-6 py-3 bg-surface-container-high text-primary rounded-lg text-sm font-semibold hover:bg-surface-container-highest transition-colors"},Rf={class:"py-24 bg-surface-container-low dark:bg-slate-900 px-8"},Vf={class:"max-w-7xl mx-auto"},Bf={class:"bg-primary-dim rounded-full p-16 lg:p-24 relative overflow-hidden group dark:bg-slate-900 dark:border dark:border-slate-800"},zf={class:"relative z-10 text-center lg:text-left"},Ff={class:"text-[1.9rem] sm:text-[2.25rem] lg:text-[3.5rem] leading-[1.34] sm:leading-[1.28] lg:leading-[1.25] font-bold text-white mb-8 tracking-tighter"},Uf={key:0,class:"flex flex-col sm:flex-row gap-6 justify-center lg:justify-start"},qf={key:0,class:"px-10 py-5 bg-white text-primary font-bold rounded-lg hover:bg-on-primary transition-transform active:scale-95"},Hf={key:1,class:"px-10 py-5 bg-primary text-white border border-white/20 font-bold rounded-lg hover:bg-primary/80 transition-transform active:scale-95"},Gf=H({__name:"HomeLayout",setup(n){const{page:e}=Ut(),{headerConfig:t,footerConfig:r}=qt();function a(){var s;typeof window>"u"||(s=document.getElementById("insights-section"))==null||s.scrollIntoView({behavior:"smooth",block:"start"})}return(s,i)=>(m(),x("div",Qh,[q(zt,{"site-title":g(t).siteTitle||g(e).siteTitle,"nav-links":g(t).navLinks||g(e).navLinks||[],"show-subscribe":!!g(t).showSubscribe,"subscribe-button-text":g(t).subscribeButtonText,"nav-height-class":"h-20"},null,8,["site-title","nav-links","show-subscribe","subscribe-button-text"]),f("main",Jh,[f("section",Zh,[f("div",nf,[f("div",ef,[f("div",tf,[f("div",{class:"absolute inset-0 opacity-20","data-alt":"Subtle geometric mesh pattern texture",style:zr({backgroundImage:`url(${g(Kh)})`})},null,4),i[0]||(i[0]=zo('<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] flex items-center justify-center"><div class="relative w-full h-full"><div class="mesh-line mesh-line-h absolute top-[20%] left-[20%] w-[60%] h-[2px] bg-primary/20 dark:bg-slate-300/45 rotate-[-15deg] transition-all duration-1000 ease-out group-hover:top-[40%]"></div><div class="mesh-line mesh-line-h absolute top-[40%] left-[20%] w-[60%] h-[2px] bg-primary/40 dark:bg-slate-300/45 rotate-[-15deg] transition-all duration-1000 ease-out group-hover:top-[60%]"></div><div class="mesh-line mesh-line-v absolute top-[20%] left-[40%] w-[2px] h-[60%] bg-primary/30 dark:bg-slate-300/45 rotate-[10deg] transition-all duration-1000 ease-out"></div><div class="mesh-line mesh-line-v absolute top-[20%] left-[60%] w-[2px] h-[60%] bg-primary/50 dark:bg-slate-300/45 rotate-[10deg] transition-all duration-1000 ease-out"></div></div></div>',1))])]),f("div",rf,[f("span",af,S(g(e).heroEyebrow),1),f("h1",sf,[Cn(S(g(e).heroTitle),1),i[1]||(i[1]=f("br",null,null,-1)),f("span",of,S(g(e).heroTitleHighlight),1)]),f("p",lf,S(g(e).heroDescription),1),f("div",cf,[g(e).heroPrimaryButton?(m(),x("button",{key:0,class:"w-full sm:w-auto px-8 py-4 bg-primary text-on-primary rounded-lg font-medium hover:bg-primary-dim dark:bg-[#f7f9fb] dark:text-[#0f172a] dark:hover:bg-[#ffffff] transition-all hover:scale-[1.02] active:scale-95",onClick:a},S(g(e).heroPrimaryButton),1)):B("",!0),g(e).heroSecondaryButton?(m(),x("a",{key:1,class:"group w-full sm:w-auto flex items-center justify-center sm:justify-start space-x-2 text-tertiary font-medium px-8 py-4 rounded-lg",href:g(e).heroSecondaryButtonHref||"/blog/"},[f("span",df,S(g(e).heroSecondaryButton),1),i[2]||(i[2]=f("span",{class:"material-symbols-outlined text-sm"},"arrow_forward",-1))],8,uf)):B("",!0)])])])]),f("section",hf,[f("div",ff,[f("div",pf,[f("h2",gf,S(g(e).structureTitle),1),f("p",mf,S(g(e).structureDescription),1)]),f("div",vf,[f("img",{alt:"Architectural Mesh Diagram",class:"w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105","data-alt":"Digital blue circuit mesh representing neural network topology",src:g(Xh)},null,8,_f),i[3]||(i[3]=f("div",{class:"absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-transparent to-transparent opacity-60"},null,-1)),f("div",bf,[f("span",yf,S(g(e).structureCardTitle),1),f("p",xf,S(g(e).structureCardDescription),1)])])])]),f("section",kf,[f("div",wf,[f("div",Af,[f("div",Cf,[f("h2",Tf,[f("span",null,S(g(e).insightsTitleLine1),1),f("span",null,[Cn(S(g(e).insightsTitleLine2),1),i[4]||(i[4]=f("span",{class:"text-tertiary"},".",-1))])]),f("p",Sf,S(g(e).insightsSubtitle),1)]),f("div",Mf,[(m(!0),x(Z,null,sn(g(e).insights||[],o=>{var l,c;return m(),x("div",{key:o.index,class:"group"},[f("div",$f,[f("span",Pf,S(o.index),1),f("h3",If,S(o.title),1)]),f("div",Df,[(l=o.paragraphs)!=null&&l.length?(m(),x("div",Lf,[(m(!0),x(Z,null,sn(o.paragraphs,d=>(m(),x("p",{key:d},S(d),1))),128))])):o.description?(m(),x("p",Nf,S(o.description),1)):B("",!0),(c=o.listItems)!=null&&c.length?(m(),x("ul",Ef,[(m(!0),x(Z,null,sn(o.listItems,d=>(m(),x("li",{key:d,class:"flex gap-3"},[i[5]||(i[5]=f("span",{class:"mt-2 h-2 w-2 shrink-0 rounded-full bg-tertiary"},null,-1)),f("span",null,S(d),1)]))),128))])):B("",!0),o.buttonText?(m(),x("button",Of,S(o.buttonText),1)):B("",!0)])])}),128))])])])]),f("section",Rf,[f("div",Vf,[f("div",Bf,[i[6]||(i[6]=f("div",{class:"absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none"},[f("svg",{class:"w-full h-full scale-150 rotate-45",viewBox:"0 0 200 200",xmlns:"http://www.w3.org/2000/svg"},[f("path",{d:"M44.7,-76.4C58.1,-69.2,70.3,-58.5,78.4,-45.3C86.5,-32.1,90.4,-16,88.4,-0.6C86.5,14.8,78.6,29.6,69.5,42.4C60.4,55.1,50.1,65.8,37.5,72.6C24.9,79.5,10,82.5,-4.1,89.5C-18.1,96.6,-31.2,107.7,-43.3,105.7C-55.3,103.7,-66.2,88.5,-73.4,73.5C-80.6,58.4,-84.1,43.5,-86.3,28.9C-88.5,14.2,-89.4,-0.2,-86.3,-13.7C-83.2,-27.2,-76.1,-39.8,-66.5,-50.2C-56.9,-60.7,-44.8,-69.1,-32.2,-76.7C-19.6,-84.4,-6.5,-91.3,7.6,-104.4C21.7,-117.5,31.3,-83.6,44.7,-76.4Z",fill:"#FFFFFF",transform:"translate(100 100)"})])],-1)),f("div",zf,[f("h2",Ff,S(g(e).ctaTitle),1),g(e).ctaPrimaryButton||g(e).ctaSecondaryButton?(m(),x("div",Uf,[g(e).ctaPrimaryButton?(m(),x("button",qf,S(g(e).ctaPrimaryButton),1)):B("",!0),g(e).ctaSecondaryButton?(m(),x("button",Hf,S(g(e).ctaSecondaryButton),1)):B("",!0)])):B("",!0)])])])])]),q(Ft,{title:g(r).title||g(e).footerTitle,description:g(r).description||g(e).footerDescription,links:g(r).links||g(e).footerLinks||[],filing:g(r).filing||null,"social-icons":g(r).socialIcons||[]},null,8,["title","description","links","filing","social-icons"])]))}}),Xr=`---
layout: about-me
heroEyebrow: 关于我
heroTitle: 技能“网”
heroDescription: "以 AI 能力赋能整个软件开发生命周期（SDLC）。打造智能代理与 AI 原生平台，自动化并优化开发生命周期的每一个阶段。"
heroMeta: 
focusEyebrow: 职业生涯
focusTitle: 角色与专长
focusCards:
  - icon: robot_2
    title: Agentic Engineer
    description: 上下文工程、智能代理、Harness - (持续探索中)
  - icon: cloud_done
    title: 运维开发工程师
    description: 云原生，AWS、Kubernetes 生态
  - icon: grid_view
    title: 技术咨询师
    description: “全干工程师”，敏捷开发、极限编程、DDD、微服务
  - icon: architecture
    title: 开发工程师
    description: “全栈工程师”，Go、Kotlin、TypeScript
articlesTitle: 最新文章
featuredArticle: blogs/2026/202602-pov-agentic-engineering.md
sideArticles:
  path: blogs/**/*.md
  count: 3
articlesMoreText: 查看更多
articlesMoreHref: /blogs/
readMoreLabel: 阅读更多
# subscribeTitle: 保持同步
# subscribeDescription: 接收关于 AI 原生基础设施与架构模式的阶段性更新。
# subscribePlaceholder: 电子邮箱地址
# subscribeButton: 订阅
---
`,Qr=`---
category: "domain"
date: "2022-02-01"
title: "Logseq 工作流：从碎片记录到个人 Wiki"
description: "本文复盘我从 Trello、Typora 迁移到 Logseq 的过程，并给出一套可直接复用的采集、整理、执行工作流，帮助你把碎片信息转成可追踪的知识资产。"
tags:
    - "domain"
    - "PKM"
    - "logseq"
    - "wiki"
image: "/blogs/assets/202202-logseq-build-your-own-wiki/1644655887368.jpg"
---

## 前言

这几年我越来越依赖外部系统来管理信息：任务变多、上下文变长、单靠记忆很难稳定输出。
我先后用过 Trello、Typora、系统备忘录等工具，但它们在「碎片输入 + 长期追踪 + 知识关联」这件事上都不够顺手。2021 年底开始使用 [Logseq](https://logseq.com) 后，我终于把这三件事放进了一套流程。本文分享这套流程和踩坑结论。

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

----------------------------files 0. README : 如是说

1.  TODO : 待办管理
2.  NOTEBOOK : 随笔记事本

----------------------------folders
\\_backup : 备份数据
\\_secrets : \`***********\`
documents : 文档笔记，以markdown为主，自己所写
\\_archive : 已归档信息，如最终生成的pdf
resources : 资料文件，作为存档以备不时之需，来自外部
\\_workspace : 项目工作的文档，最好一段时间后删除
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

Logseq 的基础操作网上已经有很多教程，这里不重复入门步骤，只给出我长期使用后仍在复用的实战场景。你可以直接照抄，再按自己的节奏微调。

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
- TODO have a meeting with [[@Anddd7]] #Project/X/2022-02-01
  SCHEDULED 2022-02-01
\`\`\`

#### 领到一张新卡 准备开工

- 在journey里创建\`todo\`

\`\`\`markdown
- TODO refactor the workflow engine #Project/X/CARD-123456
    - tasking 1
    - tasking 2
    - tasking 3
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
- TODO [#A] refactor the workflow engine #Project/X/CARD-123456
  SCHEDULED xxxx-xx-xx
  DEADLINE xxxx-xx-xx
    - tasking 1
    - tasking 2
    - tasking 3
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

Logseq 的双链结构非常契合 Mesh-Shaped 的学习方式：先把关键节点连起来，再沿着链接持续扩展。

在多任务并行时，我会用 Journey + TODO(Query) 给当前任务做“上下文快照”，再切换到下一个任务。切回时不需要重新回忆，直接沿着记录继续推进。

Logseq 不是唯一答案，但「找到匹配你思考方式的工具」这件事本身非常关键。工具一旦与思路对齐，记录成本会下降，复用效率会明显上升。
`,Jr=`---
category: "mesh"
date: "2022-03-01"
title: "云原生开发者的 Mesh-Shaped 成长路径"
description: "这篇文章从云原生技术演进和个人职业实践两条线出发，回答一个核心问题：开发者如何在技术快速迭代中构建可迁移、可放大的能力网络。"
tags:
    - "mesh"
    - "架构设计"
    - "工程实践"
image: "/blogs/assets/202203-mesh-shaped-cloud-native-developer/2022-03-13-22-37-47.jpeg"
---

## 背景：云原生的爆发

云计算已经从“可选项”变成数字业务的基础设施。“要不要上云”基本有答案，真正困难的是“如何在云上持续交付高质量应用”。

当传统的应用迁移方案遇到瓶颈，问题会变成：云上应用是否需要一套不同于本地时代的设计原则、协作方式和工程实践？

云原生正是在这个背景下成为主流。它不只是工具升级，而是一次开发范式升级。

> [Definition of Cloud-Native](#cncf)\\
> Cloud native technologies empower organizations to build and run scalable applications in modern, dynamic environments such as public, private, and hybrid clouds. Containers, service meshes, microservices, immutable infrastructure, and declarative APIs exemplify this approach. \\
> These techniques enable loosely coupled systems that are resilient, manageable, and observable. Combined with robust automation, they allow engineers to make high-impact changes frequently and predictably with minimal toil.

云原生的关键价值是把业务功能与跨功能能力（发布、弹性、可观测、安全）解耦，让团队可以更快、更稳地交付业务价值。

![business-logic-core](../assets/202203-mesh-shaped-cloud-native-developer/2022-03-13-22-37-47.jpeg)

在刚刚过去的2021年，云原生技术又迎来了新一轮的爆发：

- 容器成为了云原生应用的交付物标准，Kubernetes则成为了容器的运行和编排标准
- 而SMI（Service Mesh Interface）、OAM（Open Application Model）试图制定网络层和应用层的云原生标准
- 在过去几年中，业界见证了云原生技术的采用呈指数级增长：从互联网到工厂，从Web到IoT
- 而在去年，国内头部的互联网公司也都基本完成了云原生化：阿里、腾讯乃至信通院都发布了其云原生建设的愿景图
  （见后文 [#Links](#reports)）

> **"大人，时代变了"**

## 背景：后端开发工程师的职业发展

作为一个以“Java / 后端 / 开发工程师”身份入行的人，我长期都有一个困惑：

- 写了3年Kotlin，没遇到几次高并发；JVM一知半解，八股文半窍不通；
- 能写React组件，能测Hooks逻辑；搞过CICD流水线，也做过Terraform自动化；
- DevOps咨询、AWS解决方案、售前打单...

但当我翻看主流后端 JD，关键词几乎都集中在 Spring、JVM、Redis。问题是：这些能力当然重要，但它们是否足以应对云原生时代的交付复杂度？如果一个开发者在业务、平台、自动化、架构之间跨域实践，是否就偏离了“后端正轨”？

### 纵向发展 vs 横向发展

开发者究竟是应该: 横向发展 —— 广度优先：博览群书 / 还是纵向发展 —— 深度优先：专治疑难杂症？

如果我们从更高的维度来看，开发者在向CTO的发展过程中，需要在不同的时机去发展横向和纵向的能力，例如：随着影响力和权利的不断扩大，管理、沟通等软实力也和技术能力同等重要。
（见后文 [扩展：如何定义架构师](#扩展如何定义架构师)）

![t-shaped](../assets/202203-mesh-shaped-cloud-native-developer/1-n1zqvw8bk-o8rwxnzs5kq-1640317547459-0.png)

因此，从长远来讲我们既要关注所在领域的技术深度，也要不断挖掘并拓宽自己的未知领域。而每一种知识、每一项能力，也可能是其他基础知识、基本能力的一种组合；知识与知识、能力与能力之间也并不孤立，而是有着千丝万缕的联系和耦合的。

最终我得到的结论是：职业能力不该停在单一的 T 型，而应演化为可连接、可迁移的能力网。

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
> 36公斤的力量怎么推动一公吨的车重呢？而且动辄数千转的引擎转速更不可能恰好成为轮胎转速，否则车子不就飞起来了？幸好聪明的人类发明了「齿轮」，利用不同大小的齿轮相连搭配，可以将旋转的速度降低，同时将扭矩放大。由于齿轮的圆周比就是半径比，因此从小齿轮传递动力至大齿轮时，转动的速度降低的比率以及扭矩放大的倍数，都恰好等于两齿轮的齿数比例，这个比例就是所谓的「齿轮比」。

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
`,Zr=`---
category: "mesh"
date: "2022-03-01"
title: "Mesh-Shaped 学习复盘：扩张与聚焦的平衡"
description: "这是一篇两个月学习实验的复盘：哪些做法真正产生了能力增量，哪些只是制造了忙碌感，以及如何把“发散探索”收敛成可执行的主线。"
tags:
    - "mesh"
    - "架构设计"
    - "工程实践"
image: "/blogs/assets/202203-mesh-shaped-recap/image-1653875255217-0.png"
---

过去两个月，我用 Logseq 驱动了一次“Mesh-Shaped”学习实验。输入量确实上来了，但执行质量并不稳定。这里做一次阶段复盘：保留有效动作，收敛无效消耗。

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

但当知识域扩展到陌生领域时，问题暴露得很快：摘抄不等于理解，收藏不等于掌握。
我曾用 3 天才完成预估 10 小时的 GCP ML Fundamental 学习，这让我意识到：新领域学习需要连续深度时间，不适合靠碎片时间硬拼。

### 一部分“碎片学习”是无效的

复盘后我确认了一点：不少“学习动作”只是信息搬运。

碎片学习适合查漏补缺，不适合从 0 到 1 建模。对已有领域（如 DDD、面向对象）它能提升理解密度；对陌生领域它常常只会制造“我在学习”的错觉。

很多被我收藏的“碎片”，本质上只是焦虑驱动的囤积，并不会自然转化为能力。

### 知识焦虑越来越重

不设边界地阅读，直接带来知识焦虑。什么都想知道，最后往往什么都不成体系。

### OKR 优先级和权重失真

碎片任务叠加后，主线 OKR 被持续挤压。我还一度尝试“并发推进”多个目标，结果是典型的上下文切换损耗：看起来很忙，实际更慢。

## 总结

发散和聚焦都重要，但顺序不能错：先用聚焦建立主线，再用发散补充视角。

前两天和同事交流“Orchestration vs Choreography”时，有聊到：

> Choreography 是 mesh 式的调用，其实是因为服务间相互不可知。即 Complex（Cynefin）的认知模式下，大家都是黑盒，因此只能依赖相邻的服务一步一步传递信息，实现业务的最终执行
> Orchestration 则是由中心的指挥家总揽全局。因为整个系统对他而言处于 Clear 模式，需要谁做什么、谁先谁后，都心中有数。

回到 Mesh-Shaped 的初衷，它不是“无限扩张的知识地图”，而是“以核心点为锚的可控扩展”。先守住核心域，再向外探索，学习系统才会稳定增值。

![Orchestration vs Choreography](../assets/202203-mesh-shaped-recap/image-1653875255217-0.png)
`,na=`---
category: "node"
date: "2022-05-01"
title: "容器江湖的刀光剑影，K8S 与 Docker 的缘起缘落"
description: "这篇文章从 Docker 崛起、OCI 标准化到 Kubernetes 运行时切换，梳理容器生态的关键分水岭，帮助你快速理解 dockerd、containerd、runc 与 CRI/OCI 的关系。"
tags:
    - "node"
    - "K8s"
image: "https://pic2.zhimg.com/v2-8eab1606a489aa28545ed7f984f80b01.jpg"
---

![](https://pic2.zhimg.com/v2-8eab1606a489aa28545ed7f984f80b01.jpg)

## 背景

今年在系统学习 Kubernetes 的时候，发现 k8s 为了进一步模块化、兼容化各种云平台和容器运行时，有非常多个接口规范和标准。同时正式的将 Docker 移除，将 containerd 作为默认的容器运行时。因此，为了搞清楚容器变迁中的前因后果，画了一张全景图来分析和归纳各个技术之间的关系和变迁。

_（大部分信息都在图中，正文主要承担导读作用）_  
_（内容带有个人理解，欢迎结合官方文档交叉验证）_

## 天空一声巨响，Docker 闪亮登场

![](https://pic3.zhimg.com/v2-2e5bff692825013e0537ec33fc1bde8e_b.jpg)

Docker 依赖的 namespace、cgroup 并非新发明，但它把这些底层能力包装成了开发者可直接使用的工作流。真正改变生态的是分层镜像与交付体验：代码、依赖、运行环境被打包为可复制的单元。

![](https://pic2.zhimg.com/v2-23eda6e9882ef84ac4f92543079b3f39_b.jpg)

再加上 CLI + Docker Hub 的组合，容器从“专家工具”变成“团队可落地能力”。

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

Kubernetes 后续移除 dockershim，并不是“抛弃 Docker 生态”，而是收敛职责边界：k8s 需要的是符合 CRI 的运行时接口，而不是完整的 Docker 上层体验。containerd 因此成为更自然的默认选择。

## “容器运行时”

我们在翻阅文档时，通常会看到两种容器运行时：

- CRI 是为支持 k8s 工作而定义的，主要目的是调用底层运行时来构建 pod = 多容器、共享网络和存储
- OCI 则相对更底层一点，主要目的是调用内核功能来构建容器

常见的区分方式是：containerd 等偏向 High-Level Runtime（更贴近平台编排场景），runc 偏向 Low-Level Runtime（更贴近内核能力调用）。

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
`,ea=`---
category: "node"
date: "2022-05-01"
title: "路由、代理、网关：边界与关系"
description: "本文用网络层级和职责边界拆解路由、代理、网关三个高频概念，给出可落地的区分方法，避免在架构讨论中混用术语。"
tags:
    - "node"
    - "api-design"
image: "/blogs/assets/202205-router-proxy-gtw/2022-05-25-10-21-15.png"
---

在阅读[《为什么需要可编程代理》](https://mp.weixin.qq.com/s/B0LVmFvI7kFtjFEM0FG_zw)时，我发现“路由、代理、网关”经常被放在同一语境里讨论，但在很多团队里这三个词的定义并不一致。

本文尝试用“工作层级 + 主要职责”来统一语义，便于在网络、平台和 API 设计讨论中快速对齐。

## 路由：在网络之间转发数据包

- 路由器
    - 硬件路由
        - 路由器工作在网络的 3 层；
        - 对其通信两端来说都是透明的，内外网的主机不会查觉中间有路由器参与了操作；
        - 路由器可以工作在低层，通过直接转化网络地址来转发数据包，它比代理服务器的速度要快；
    - 软（件）路由
        - 结合软件的功能，通过拦截数据包来修改和转发到目标地址
        - (软路由更接近于代理服务器)

## 代理：代表客户端或服务端处理请求

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

## 网关：异构网络或系统之间的边界入口

- 网关
    - 网关是一个概念，不具体特指一类产品，只要连接两个不同的网络的设备都可以叫网关；
    - 网关通常连接的是两个或多个使用不同协议的端点(协议转换)；
    - 广义的网关：有进有出即为网关
    - 狭义的网关
        - IP路由过程中的网关：子网的关口，所有对子网的访问需要先向网关(默认网关)寻址
            - [网关和路由器的区别是什么？](https://www.zhihu.com/question/21787311)
        - API网关：对HTTP API进行拦截、监控、修改、转发

## 总结：先看边界，再看能力

![Route vs Proxy vs Gateway](../assets/202205-router-proxy-gtw/2022-05-25-10-21-15.png)

> ps: 还顺便研究了一下 excalidraw 添加中文字体:
>
> - Issue：<https://github.com/excalidraw/excalidraw/issues/5245>
> - Spike：<https://github.com/Anddd7/excalidraw/commit/97eca3fd347c9d3f3875996e7c49585307264e4e>
> - Demo：<https://excalidraw-anddd7.vercel.app/>
`,ta=`---
category: "node"
date: "2022-11-01"
title: "实现云原生：从工具引入到工程体系"
description: "云原生落地的核心不是采购更多工具，而是建立可持续的工程体系。本文从标准化能力、组织协作和演进路径三个层面，给出企业推进云原生的实践框架。"
tags:
    - "node"
    - "IaC"
    - "DevOps"
image: "/blogs/assets/202211-cloud-native-engineering/image-17.png"
---

| 版本 | 修改                   | 时间    |
| ---- | ---------------------- | ------- |
| v0.1 | 脑洞                   | 2022-11 |
| v0.2 | 大纲                   | 2023-05 |
| v0.3 | 大纲重构，主要章节划分 | 2023-08 |
| v0.4 | 引言和第一章           | 2023-08 |

## 引言

在市场变化持续加速的背景下，企业对软件交付提出了更高要求：更快上线、更稳运行、更低成本。传统以功能开发为中心、平台能力后置补齐的模式，越来越难支撑这种节奏。

云原生的价值，不只是技术升级，而是把应用、平台、流程和组织协作放进同一套交付系统中。

![Cloud-Native](../assets/202211-cloud-native-engineering/image-17.png)
![Cloud-Native](../assets/202211-cloud-native-engineering/image-18.png)

“降本增效” —— 是企业上云的主要目标之一，也是企业数字化转型的重要驱动力。得益于云计算、DevOps、微服务架构、自动化运维等技术的发展，云原生技术围绕 “构建**容错性好**、**易于管理**和**便于观察**的松耦合系统。结合可靠的**自动化**手段，能够轻松地作出**频繁**和**可预测**的重大变更。” 这一目标，为企业提供了一系列的软件开发理论、实践方法和中间件工具。

![原生于云的软件架构](../assets/202211-cloud-native-engineering/image-16.png)

<!-- TODO 引出方法论、组织结构的重要性，需要多方配合 -> 即工程化体系 -->
<!-- TODO 云原生涌现了很多技术，但缺乏一个有效的方案指导企业实现云原生，大多数时候我们都只是在引入中间件而已 -->

但“降本增效”不会自动发生。云原生强调的松耦合、弹性、自动化，需要开发、运维、业务共同参与，形成一致的目标和协作机制。

因此，云原生落地的重点不是堆工具，而是**建立工程体系**：定义标准、明确职责、设计流程、持续复盘。

本文聚焦一个问题：企业如何把“技术概念”转成“工程结果”。我会围绕标准化能力、团队职责和组织演进给出一套可执行的分析框架。

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
`,ra=`---
category: "node"
date: "2022-12-01"
title: "Google 风格 API 设计：资源模型与工程约束"
description: "本文基于 Google API Design Guide，总结资源命名、标准方法、自定义动作、错误码与分页等关键规则，并给出可直接落地的设计检查项。"
tags:
    - "node"
    - "api-design"
    - "tooling"
image:
---

## URL

面向资源（Resource）的 API 设计强调一件事：先定义稳定资源，再定义动作。
“资源名称”是系统内的全局标识，它通常由 API 服务名、父级资源 ID 和当前资源 ID 组合而成：

| API 服务名称             | 集合 ID  | 资源 ID           | 集合 ID   | 资源 ID     |
| :----------------------- | :------- | :---------------- | :-------- | :---------- |
| //storage.googleapis.com | /buckets | /bucket-id        | /objects  | /object-id  |
| //mail.googleapis.com    | /users   | /name@example.com | /settings | /customFrom |

Examples:

- 完整资源名称：\`//library.googleapis.com/shelves/shelf1/books/book2\`
- 相对资源名称：\`shelves/shelf1/books/book2\`
- 非末尾资源 ID 建议保持单段，末尾资源 ID 可根据场景使用多段 URI：\`server/server1/files/source/py/parser.py\`
    - 网址：通过对资源名称进行转码 = 协议 tcp http + 版本 v1 v2
        > Pattern: \`<protocol>:<service-name><version><collection-id>...<resource-id>\` \\
        > E.g. \`//calendar.googleapis.com/users/john smith/events/123\` \\
        > E.g. \`https://calendar.googleapis.com/v3/users/john%20smith/events/123\`

## Method

### 标准方法 Standard methods

| 标准方法                                                                 | HTTP 映射                     | HTTP 请求正文 | HTTP 响应正文               |
| :----------------------------------------------------------------------- | :---------------------------- | :------------ | :-------------------------- |
| [\`List\`](https://cloud.google.com/apis/design/standard_methods#list)     | \`GET <collection URL>\`        | 无            | 资源\\*列表                  |
| [\`Get\`](https://cloud.google.com/apis/design/standard_methods#get)       | \`GET <resource URL>\`          | 无            | 资源\\*                      |
| [\`Create\`](https://cloud.google.com/apis/design/standard_methods#create) | \`POST <collection URL>\`       | 资源          | 资源\\*                      |
| [\`Update\`](https://cloud.google.com/apis/design/standard_methods#update) | \`PUT or PATCH <resource URL>\` | 资源          | 资源\\*                      |
| [\`Delete\`](https://cloud.google.com/apis/design/standard_methods#delete) | \`DELETE <resource URL>\`       | 不适用        | \`google.protobuf.Empty\`\\*\\* |

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

- 整数数量必须带单位: xxx\\_{bytes|width_pixels|meters}
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

### \\*语法规则：EBNF

### 整数类型

- 避免使用超过32位的无符号；-1、0代表特殊含义时需要额外记录

### 部分响应 Partial Response

- 通过\`FieldMask\`，提供\`$fields\`保留字段来提示API Gateway、BFF清洗返回数据

    \`\`\`zsh
    GET https://library.googleapis.com/v1/shelves?$fields=shelves.name
    GET https://library.googleapis.com/v1/shelves/123?$fields=name
    \`\`\`

- 资源视图，在请求中增加参数\`view=<defined view>\`，来指定返回某一种视图数据

### \\*ETag：客户端条件请求

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
`,aa=`---
category: "node"
date: "2022-12-01"
title: "Go 微服务架构：从代码库到运行时"
description: "本文用价值流视角梳理 Go 微服务系统的端到端实践：代码库策略、构建与部署、可观测与调试、基础设施协同，帮助团队建立可复制的交付链路。"
tags:
    - "node"
    - "K8s"
    - "IaC"
    - "DevOps"
image: "https://pic4.zhimg.com/v2-ddda56a5e941e13669028d19e70ffddf.png"
---

![](https://pic4.zhimg.com/v2-ddda56a5e941e13669028d19e70ffddf.png)

## 背景

在 K8S 成为事实标准之后，微服务交付的重心已经从“写服务”逐步转向“管理交付链路”。过去后端承担的很多基础能力（注册发现、配置、限流、弹性）正在被云平台吸收。

这意味着语言和框架的选择标准也在变化：不仅要关注表达能力，还要关注构建、调试、部署和运维协作的整体效率。

Go、Rust 等语言的流行，本质上契合了这种变化。就我自己的实践而言，Go 虽然“朴素”，但在中小规模微服务场景下（例如几十个服务）从开发到上线的链路效率非常高。

配合 grpc、docker、k8s、istio 这类成熟组件，Go 团队即使不依赖重型框架，也能构建出稳定可维护的微服务系统。

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
`,sa=`---
category: "domain"
date: "2022-12-01"
title: "Logseq 高阶实践：用 Query 管理 GTD 待办"
description: "这篇文章给出一套可复用的 Logseq GTD 查询模板，覆盖正在做、即将到期、优先事项和低优先级任务，并附带可直接拷贝的 CSS 优化。"
tags:
    - "domain"
    - "logseq"
image: "/blogs/assets/202212-logseq-customized-with-clojure-and-css/1645694079239.jpg"
---

在前文基础上，这里补一套更工程化的用法：通过 Advanced Queries 把待办从“列表堆积”变成“可筛选、可排序、可执行”的任务面板。

## TODO Query

我的 TODO 面板按 GTD 分成 4 类：正在做、即将到期、重要事项、其他事项。核心目标是减少上下文切换时的决策成本。

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

GTD（Get Things Done）在任务密度高、切换频繁的场景里非常有效。关键不在“记下来”，而在“让任务自动浮现优先级”。

> “切换页表，切换任务”，像CPU一样实现多核运行。
`,ia=`---
category: 'domain'
date: '2022-12-01'
title: 'Mesh-Shaped PKM：Logseq 个人知识管理体系'
description: '本文拆解我在 Logseq 上落地 PKM 的完整流程：输入采集、任务循环、笔记沉淀与输出反馈，目标是把“记录行为”转成可持续的能力增长。'
tags:
  - 'domain'
  - 'PKM'
  - 'logseq'
image: 'https://pic3.zhimg.com/v2-e53cc5d58b612b5154574f0eb2110d72_r.jpg'
---
<!-- markdownlint-disable MD024 -->

![](https://pic3.zhimg.com/v2-e53cc5d58b612b5154574f0eb2110d72_r.jpg)
在年初写下 ["Mesh-Shaped" - 如何成长为云原生开发者](https://zhuanlan.zhihu.com/p/575842220) 之后，我一直在迭代自己的知识管理系统：

> 知识管理方式会反映你的思维路径，而思维路径决定输出质量。

目前这套工作流已经稳定运行一段时间，涉及工具、方法论和协作习惯。本文用图解方式把它拆开，方便你按模块复用。

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

- 获得反馈：输出会倒逼你重组知识结构。比“发布”更重要的是“收到反馈后修正模型”，这才是输入-输出闭环的核心。

## 总结

> 如果知识既不是被孤立地保存，也不是被孤立地学习，而是聚集在一个思想网络中，或者说是 “思维模型的网格” 中（M unger,1994），那么理解新的信息就变得更容易了。这不仅使学习和记忆变得更容易，而且提取信息及其可用之处变得更容易了。

### **"只有个体能够构建网络，网络才能围绕个体构建"**

![graph](https://pic4.zhimg.com/80/v2-a0fec4a76fb99fef7dbd5205d575839b_1440w.webp)
`,oa=`---
category: "node"
date: "2023-02-01"
title: "IaC 实践：从不可变基础设施到工程化落地"
description: "本文从不可变基础设施出发，拆解 IaC 在真实团队中的价值边界、分层方法与 Terraform 组织策略，帮助你把“基础设施代码化”落成可维护的工程系统。"
tags:
    - "node"
    - "K8s"
    - "IaC"
    - "DevOps"
image: "https://picx.zhimg.com/80/v2-3856f65a763bad268e7d103c7aeb9c65_1440w.png"
---

## 不可变基础设施

在谈 IaC 之前，先明确它要解决的根问题：基础设施不可复制、不可追溯、不可稳定演进。

> **软件应用的复杂性 -> 开发部署的复杂性 -> 基础设施的复杂性**

在以前的软件开发中，为了配置和安装好软件应用的运行环境，通常需要花大量的时间在准备网络、机器、操作系统和数据库上。并且随着软件的更新，运行环境也会跟着调整，如安装补丁、修改 ip、修改端口等。但人工的调整不仅容易出错，而且难以记录修改，这个运行环境（服务器）就像你精心照顾的宠物一样，一旦丢失了就再也找不回来了。

因此业界提出了 [Pet vs Cattle（宠物 vs 家禽）](https://joachim8675309.medium.com/devops-concepts-pets-vs-cattle-2380b5aab313) 的比喻，并在云时代被广泛验证。

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

IaC 工具很多，shell/python + 云厂商 SDK 也能完成编排。但“基础设施即代码”的重点并不只是写代码，而是把基础设施纳入可测试、可审计、可回滚的工程流程。

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
`,la=`---
category: "mesh"
date: "2023-04-01"
title: "如何绘制架构图：面向沟通的实践方法"
description: "本文围绕“向谁传达什么信息”这一核心问题，给出一套可执行的架构图绘制方法：受众识别、信息分层、逻辑组织与风格统一。"
tags:
    - "mesh"
    - "架构设计"
    - "工程实践"
    - "方法论"
image: "/blogs/assets/202304-draw-architecture-diagram/pictograph-1.jpeg"
---

| 版本 | 内容描述                 | 时间    |
| ---- | ------------------------ | ------- |
| v0.1 | 脑洞，思考元图解法       | 2023-04 |
| v0.2 | 大纲                     | 2023-05 |
| v0.3 | 主要内容（除架构视图）   | 2023-05 |
| v1.0 | 发布                     | 2023-07 |
| v2.0 | 重构，主要突出“软件架构” | 2023-08 |
| v3.0 | 重构，提出架构阶段       | 2024-12 |

## 前言

软件系统越来越复杂，但团队协作并不会因为复杂性自动变好。真正困难的地方不是“有没有架构”，而是“能否让不同角色在同一张图上对齐认知”。

架构图的价值在于沟通，而不是制图。它通过视觉化表达把复杂关系压缩成可讨论的结构，帮助团队在设计、开发、测试、运维等不同阶段共享决策背景。

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
`,ca=`---
category: "node"
date: "2023-04-01"
title: "Tunnel、VPN、VPC：概念边界与关系"
description: "本文从网络连接视角拆解 Tunnel、VPN、VPC 三个高频概念，重点解释它们在“跨网互通、安全传输、虚拟网络抽象”上的分工与协作。"
tags:
    - "node"
    - "K8s"
image: "/blogs/assets/202304-tunnel-vpn-vpc/image.png"
---

这篇是我在梳理 VPN 相关技术时做的概念澄清笔记。

> [路由 vs 代理 vs 网关](../2022/202205-router-proxy-gtw.md) 的续集

## 隧道 Tunnel - 连接 2 个不可达网络

![tunnel](https://s2.loli.net/2023/04/17/y5EnxTrbtIAN7z9.png)

路由和代理通常以转发为主，而隧道更强调“封装后再传输”。它常用于跨公网打通两个原本不可达的网络，或连接不同协议域。

因此隧道往往会对原始数据帧进行：

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

![landscape](../assets/202304-tunnel-vpn-vpc/image.png)

### Documents

- <https://support.huawei.com/enterprise/zh/doc/EDOC1100164807>
- <https://itnext.io/kubernetes-is-hard-why-eks-makes-it-easier-for-network-and-security-architects-ea6d8b2ca965>
- <https://www.pinterest.com/pin/coreosflannel--22940279328297785/>
- <https://access.redhat.com/documentation/en-us/red_hat_virtualization/4.4/html/technical_reference/cluster_networking>
- <https://www.rebeladmin.com/2018/01/azure-accelerated-networking/>
- <https://dzone.com/articles/step-by-step-guide-establishing-container-networki>
- <https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/6/html/virtualization_administration_guide/sect-attch-nic-physdev>
- <https://zh.wikipedia.org/zh-cn/%E9%9A%A7%E9%81%93%E5%8D%8F%E8%AE%AE>
`,ua=`---
category: "node"
date: "2023-06-01"
title: "云原生左移：远端一体化开发与调试"
description: "本文聚焦云原生场景下的调试效率问题，对比四种常见方案（替换镜像、VPN 组网、开发容器、Web IDE），并分析各自的成本、收益与适用边界。"
tags:
    - "node"
    - "K8s"
image: "https://s2.loli.net/2023/06/05/v1j2stXfigwDoA5.png"
---

## 背景

（本文不讨论测试体系本身，重点聚焦开发与调试链路优化）

微服务和 Kubernetes 提升了交付能力，也显著提高了调试复杂度。一个系统可能包含数十到上百个服务及其依赖，结果是大量问题只能在集群环境复现，本地环境很难覆盖真实链路。

> "does it work on your machine?"
> "no, it only works on cluster"
> ![](https://s2.loli.net/2023/06/05/9dU5IOnfeFXrmsk.png)

即便某个服务能在本地跑起来，云上网络、依赖拓扑和权限边界也常让结果偏离真实环境。每次改动都走完整 CI/CD，等待时间往往超过编码时间。

![](https://s2.loli.net/2023/06/05/v1j2stXfigwDoA5.png)

我们单独看某一次代码提交和部署的时间并不是很长，但遇到未知的、棘手的问题，我们就需要反复尝试和验证，此时受到 CI/CD 和云端环境的限制，这个时间就会呈倍数增加

![](https://s2.loli.net/2023/06/05/SHrPGlmZihnOqw8.png)
![](https://s2.loli.net/2023/06/05/aQgvMZ8pHi7VBKe.png)

实际耗时

![](https://s2.loli.net/2023/06/05/zDCHl3OJpNTuRqb.png)

---

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
`,da=`---
category: "domain"
date: "2023-12-01"
title: "软件开发中的敏捷与精益：实践视角"
description: "本文从软件团队实际协作出发，对比敏捷与精益在目标、方法和组织演进上的交叉点，给出一套便于落地的理解框架。"
tags:
    - "domain"
    - "productivity"
    - "automation"
image: "https://pic2.zhimg.com/v2-1bdb1be25c8713045f24a89090ee8be9_r.jpg"
---

_（本文基于一线实践经验，不试图覆盖全部理论分支，重点讨论可执行部分）_

## 敏捷 和 精益

敏捷（开发）始于 “敏捷宣言”，对迭代、增量式的软件开发模式进行了总结，目的是应对快速变化的需求，并提升软件的质量。

精益（生产）则是从日本制造业 —— 丰田生产系统（TPS）总结和演进而来，用最少的工作，创造更多的价值。

两者起源不同，但在价值观和实践目标上高度重叠。我长期关注的是以下问题：

- 软件开发到底是 “创造” 活动，还是 “制造” 活动
- 软件交付 和 （工业）产品交付有什么区别
- 软件的流水线 和 工厂流水线 的相似性
- ...

在追溯 Scrum、Kanban 等 “敏捷项目管理方法” 的过程中，我发现很多工具和方法论都是来源于制造业。现在大多数软件都更像是一种工业产品，有明确的设计图（架构图）、有明确的工艺（框架/语言）、有明确的工人（程序员）和明确的步骤（开发、部署、维护）。但，软件也具备 “研究型” 产品的特质，适用性广（各行各业）、材料易获取（只是代码而已）、个人共享可占比高（一个高手顶十个）。

所以软件开发既要借鉴制造业的流程方法，也要保留软件产品自身的探索属性。

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
`,ha=`---
category: "node"
date: "2023-12-01"
title: "用 Cobra 构建可维护的个人 CLI 工具"
description: "本文以个人工具 adcli 为例，展示如何用 Cobra 搭建分层命令结构，并把博客创建与发布流程沉淀为可复用的命令行能力。"
tags:
    - "node"
    - "Go"
image:
---

<https://github.com/Anddd7/adcli>

Go 在业务开发里有时显得“朴素”，但做 CLI 工具恰好是它的强项：启动快、编译快、分发简单。

- 体积小
- 编译速度快
- 性能高
- 语法简单实用

## Quick start

我的第一个 CLI 用来自动化博客发布流程：创建 markdown 文件并写入 \`_sidebar.md\`，避免重复手工操作。

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
`,fa=`---
category: "node"
date: "2023-12-01"
title: "DevContainer 实践：构建可复制的开发环境"
description: "本文总结 DevContainer 在多语言项目中的落地经验，覆盖定义、构建、连接和团队分发，帮助你减少本地环境漂移和版本冲突。"
tags:
    - "node"
    - "IaC"
    - "Go"
    - "Java"
image: "https://pic1.zhimg.com/v2-09afb8c8e561f75d874bde41efa327c0_r.jpg"
---

![](https://pic1.zhimg.com/v2-09afb8c8e561f75d874bde41efa327c0_r.jpg)

## 背景

在多语言、多项目并行开发下，本地环境很容易失控。即使有目录规范和版本管理器，工具链冲突依然会持续累积。

比如，一些工具是用 curl 安装的、自带 upgrade 命令，一些又是 brew。特别是切换版本时，可能这个项目需要 Terraform 1.3.5，另一个项目又需要 Terraform 1.2.0。加之 Java 使用的 asdf-vm、Go 使用的 gvm、Node 使用的 nvm，不同的工具也带来了不小的心智负担。

我在 Windows（WSL）实践中重新评估了 DevContainer，并逐步把常用项目固化成独立开发容器：按需启动、互不污染、可快速重建。

Refer to: [Developing inside a Container using Visual Studio Code Remote Development](https://link.zhihu.com/?target=https%3A//code.visualstudio.com/docs/devcontainers/containers)

## 定义 Define

![](https://pic1.zhimg.com/80/v2-0b47d65b53aa9c6db6fef23f2c031afc_1440w.webp)

DevContainer 使用 json 来定义开发容器的行为，最重要的部分就是

- Image：容器的基础镜像 [containers.dev: Templates](https://link.zhihu.com/?target=https%3A//containers.dev/templates)

- 官方提供了很多主流语言、工具的基础镜像
- 也可以自己构建（需要安装 vs_server 用于通信）

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
`,pa=`---
category: "node/agentic"
date: "2023-12-01"
title: "图解 AI 基本概念：从机器学习到 LLM"
description: "本文面向工程实践者梳理 AI 关键概念脉络：应用领域、学习策略、深度学习与 LLM 的关系，帮助你快速建立可执行的学习地图。"
tags:
    - "node/agentic"
    - "LLM"
    - "Prompt"
image: "https://pic4.zhimg.com/80/v2-9d6ab07d82076ddae616b30cf1618a63_1440w.webp"
---

> GPT 是什么？  
> 生成式 AI 是什么样的 AI？还有非生成式的吗？  
> 人工智能研究了这么多年 ChatGPT 为什么2022 年才进入公众视野？

## 背景

过去半年，AI 从行业话题迅速变成大众工具。无论你是否准备好，它都已经进入工作流。

对软件、设计、写作从业者而言，变化尤其直接。ChatGPT、Midjourney 等工具不只提高效率，也在重塑岗位分工和交付方式。

很多人开始系统学习 AI，但概念体系庞杂、术语密度很高。作为偏工程背景的开发者，我也经历过“名词都认识、关系不清楚”的阶段。于是我把核心概念重新整理成一张图，目标是先建立结构，再深入细节。

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
`,ga=`---
category: "node"
date: "2023-12-01"
title: "从手写 Controller 到 Operator：CRD 实战"
description: "本文通过 Seller/Buyer 示例对比两条实现路径：基于 client-go 手写 Controller 与基于 Operator SDK 自动化生成，帮助你快速理解 CRD 工程化落地。"
tags:
    - "node"
    - "K8s"
    - "Go"
image:
---

Code Sample: <https://github.com/Anddd7/playground-k8s-crd>

我们用一个最小交易场景来演示 CRD 的完整开发流程：

- Seller 通过售卖一定价格（price）和数量（amount）的产品（name）进行获利（money）
- Buyer 会根据最高买入价（price）和需求量（amount）来选择一个或多个渠道来买入产品（name）

例如：卖家以 100 元单价出售 10 个苹果，当买家出价高于 100 时，以买家价格成交并更新卖家收益。

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
`,ma=`---
category: "node"
date: "2023-12-01"
title: "Windows 开发环境搭建：本机 + WSL + 沙盒集群"
description: "本文给出一套可复用的 Windows 开发环境分层方案：桌面宿主机、WSL 开发层、VirtualBox 集群沙盒，兼顾日常编码效率与 K8s 调试能力。"
tags:
    - "node"
    - "K8s"
image:
---

“不是 Mac 追不起，只是 Windows 更有性价比。”

实际原因是工作环境切换到 Windows，需要重建一套可长期维护的开发工作站。这里把配置方案整理成文档，便于复用和团队分享。

## 前情提要

作为“全干工程师”，工具链跨度很大。除了语言环境，还需要可折腾的 K8s 集群。所以我把 Windows 工作站分成三个层次：

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
`,va=`---
category: "node"
date: "2024-01-01"
title: "云原生落地：从工具堆栈到工程协同"
description: "本文聚焦云原生落地的真实阻力：工具过载、协作断层与价值难量化，并给出以 API 优先与数据驱动为核心的工程化思路。"
tags:
    - "node"
    - "DevOps"
image:
---

云原生已经从概念期进入落地期，但不少团队仍停留在“引入工具”阶段。工具数量在增长，交付效率却未必同步增长。

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

无论路径如何变化，“降本增效”始终是共同目标。

## 工程落地的难点

各式工具越来越多，但是工程师们却越来越难以选择。为了扩大市场，这些工具和产品都希望发展成瑞士军刀，能够解决更多的问题来吸引更多的用户。但是，这也意味着工程师们需要花更多的时间来学习这些工具，对比功能和性能、关注更新和漏洞。

在你安装了数百个开源工具后，每一次更新（节点的、集群的、工具的）都是对团队的一种挑战。你必须小心翼翼地检查每一个更新的内容，以确保不会对现有的业务产生影响。

## 工程化思考

- API（接口） First

解耦，是防止各种工具野蛮生长的一个方法。如果你的工具都是通过 API 来调用的，那么你就可以随意更换工具，只要新的工具提供了相同的 API。

- 数据工程和可视化

人类在进行判断时，会借助于经验和直觉 —— 即在过去长时间的工作中所积累下来的记忆。而在更复杂的环境中，一是这种经验和直觉就会变得不够用，二是人力的成本也会变得不够用。

所以数据 —— 机器的记忆，就是非常重要的“经验”来源了。而对于充足的、精确的、标准的数据，借助 LLM 构建出 ChatBot，可以大幅提高工作效率。
`,_a=`---
category: "mesh"
date: "2024-01-01"
title: "2024 开年复盘：角色变化与能力重构"
description: "这篇复盘记录了我从开发顾问到运维场景后的认知变化：目标如何收敛、能力如何迁移，以及哪些探索值得在 2024 持续投入。"
tags:
    - "mesh"
    - "架构设计"
    - "工程实践"
image:
---

过去几年我都会做年度复盘和 OKR 规划。今年再看 2023，完成率尚可，但更重要的收获是目标结构发生了变化：从“做更多”转向“做更长期有效的事”。

还记得2022年初的时候，内部的奇思妙想碰到了外部的机遇降临，一时间接触到了好几个有趣的话题：双链笔记和logseq、DDD社区、archguard和架构模式、云原生。在前几个月几乎都处于精神亢奋的状态，同时做着好几件事而效率不减反增，一直持续到了年中，但一直到23年底，都没有再能够回到这种状态。

最近随着新岗位逐步稳定，我重新找回了连续投入新领域时的心流状态。

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
`,ba=`---
category: "mesh"
date: "2024-01-01"
title: "图解工作法：把思考过程可视化"
description: "本文将图解从“表达工具”扩展为“思考工具”，给出复现、发散、收敛、重组四步法，帮助你在学习与工作中更快形成可复用的认知结构。"
tags:
    - "mesh"
    - "架构设计"
    - "工程实践"
    - "方法论"
image:
---

在上一篇关于架构图的方法总结之后，我开始把“图”从技术表达扩展到日常学习和问题分析。

随着练习增多，我发现不同图形本质上对应不同认知动作。思维导图擅长分解问题，时序图擅长还原过程，结构图擅长识别边界。选对图，思考效率会显著提升。

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
`,ya=`---
category: "node/agentic"
date: "2024-02-01"
title: "LLM 应用架构演进：从 Prompt 到工程化"
description: "本文梳理 LLM 应用从基础 Prompt 到向量检索、缓存与编排层的演进路径，并结合 Ollama 与 LangChain 给出本地化落地思路。"
tags:
    - "node/agentic"
    - "LLM"
    - "Prompt"
image: "/blogs/assets/202402-llm-application/llm-architecture.png"
---

过去一年，AIGC 从“概念热”快速走到“工程热”。底层模型能力提升很快，上层框架也在持续降低应用开发门槛。

我开始系统搭建 LLM 应用，也是从 Ollama 这样的本地工具切入：先跑通最小链路，再逐步补齐工程能力。

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
`,xa=`---
category: "node/agentic"
date: "2024-03-01"
title: "AI 替代论：焦虑、边界与协作方式"
description: "本文从一线使用场景出发讨论 AI 带来的效率提升与替代焦虑，并给出“把 AI 当增幅器而非替身”的实践判断。"
tags:
    - "node/agentic"
    - "LLM"
    - "Prompt"
    - "AI Native"
image:
---

最近一年的体验是：AI 能力在快速变强，使用门槛和成本在持续下降。无论是 App 端还是 API 端，接入方式都越来越成熟。

这意味着 AI 会更深地嵌入业务软件，承担生成、推荐、翻译、摘要等高频辅助任务。问题不再是“要不要用”，而是“如何用得更稳、更可控”。

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
`,ka=`---
category: "node"
date: "2024-06-01"
title: "Fork 开源项目：决策模型与工程代价"
description: "本文从 issue、发布、构建、测试四个环节拆解 Fork 开源项目的真实成本，帮助团队在“等社区、买支持、自己维护”之间做出可量化决策。"
tags:
    - "node"
    - "docker"
    - "automation"
image: "/blogs/assets/202406-fork-oss/git-graph-0.png"
---

使用开源软件时，团队经常会遇到两类问题：业务侧新增需求，或社区版本中的缺陷。常规做法是提 issue、提 PR，但现实是需求不一定会被及时处理，发布节奏也不受你控制。

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

因此，不少规模化团队都会评估 Fork。问题不在“能不能 Fork”，而在“Fork 之后能否长期维护”。

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

业界确实有很多公司维护自己的 Fork，但通常它们同时具备两项前提：持续的定制需求和稳定的维护资源。

- 云服务提供商：希望将自己的服务集成到开源项目中，例如负载均衡团队也会负责 Ingress 相关的内容。
- 金融行业：稳定性高于一切 ... 他们不需要那些新的功能，Fork 一个过期但稳定运行的版本，只添加安全相关的功能，是一个不错的选择。

当然，“性价比”才是决定因素，团队管理者需要算好手里的账：

- 经济账：购买商业支持 vs hire团队来维护分支
- 时间账：fork 项目 vs 等待社区发布
- 技术账：自己实现 vs 依赖社区
`,wa=`---
category: "node"
date: "2024-06-01"
title: "k3s 实践：个人博客基础设施重构"
description: "本文记录一次从 docker-compose 到 k3s 的博客基础设施迁移，覆盖 Ingress、DNS、证书自动续期与 GitHub Actions 自动部署的关键落地细节。"
tags:
    - "node"
    - "K8s"
    - "DevOps"
image: "/blogs/assets/202406-k3s-blogs/homepage.png"
---

<!-- markdownlint-disable MD024 -->

<!--
key words:
- k3s kustomize
- cert-manager external-dns
- github actions
 -->

这个月我对博客基础设施做了一次完整升级。直接触发点是免费证书过期，根因是原有手工部署（git pull + docker compose）已经无法支撑稳定运维。

目标很明确：迁移到 k3s，并用 cert-manager、external-dns、GitHub Actions 把证书与发布流程自动化。

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
extraArgs:
    [
        "--alibaba-cloud-zone-type=public",
        "--alibaba-cloud-config-file=/etc/kubernetes/external-dns/alibabacloud-cloud-config.yaml",
    ]

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
`,Aa=`---
category: "domain"
date: "2024-12-01"
title: "AI Powered PKM：从笔记中心到任务中心"
description: "本文复盘我将 AI 融入 Mesh-Shaped PKM 的过程，重点展示如何把“知识整理”转为“任务驱动”，并通过反馈闭环持续提升执行效率。"
tags:
    - "domain"
    - "PKM"
    - "logseq"
image: "/blogs/assets/202412-ai-powered-pkm/image-1.png"
---

从 2022 年开始使用 Logseq 到现在，我的 [Mesh-Shaped 知识管理模式](../2022/202212-logseq-pkm) 已经相对稳定。最近一年引入 AI 后，系统的重心发生了变化：从“更好地记录知识”转向“更快地完成任务”。

## AI Powered

最大的变化是输入成本显著下降。在旧流程里：

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

> 所有事务都以任务形式存在，比如读一本书、尝试一个工具，并配置对应反馈机制，形成持续迭代。
>
> 过去 PKM 往往以笔记为中心，重在收集与整理。AI 加入后，真正的瓶颈不再是“存不下”，而是“做不完”。因此系统应转向任务驱动，以价值交付为核心。

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

### 传统知识管理的边际收益在下降

原本的 Knowledge Management 也是为了解决信息过载的问题，利用软件（页、块、tag）建立索引，以便快速找到需要的信息。但随着 AI 技术的发展，索引变成了Prompt，信息变成了AI的回答并且存储在云端。

PKM 的目标始终是提升执行效率。AI 让我们可以把更多精力放在决策与行动，而不是信息搬运。因此，新一代 PKM 更应围绕任务推进与反馈闭环来设计。
`,Ca=`---
category: "mesh"
date: "2026-02-01"
title: "DomainSpec：Agents 驱动的领域建模"
description: "DomainSpec 用一套可传递的规格工件把业务上下文从讨论阶段延续到实现与验证阶段，减少语义漂移与交付偏差。"
tags:
    - "mesh"
    - "架构设计"
    - "工程实践"
    - "方法论"
image:
---

**DomainSpec 解决的是：上下文与建模意图在交付链路中逐步失真。**

团队在需求阶段往往说得很清楚，但到架构、开发、测试阶段会逐步偏离原意。DomainSpec 不是另一套写文档的方法，而是一套让同一份上下文持续穿透到执行与验证的框架。

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
`,Ta=`---
category: "node/agentic"
date: "2026-02-01"
title: "Agentic 工程实践：模块化、结果驱动、持续演进"
description: "本文将 Agent 开发流程拆为三条主线：模块化设计、结果驱动交付、持续演进机制，并给出可落地的组件映射与实践路径。"
tags:
    - "node/agentic"
    - "agentic"
    - "LLM"
    - "Prompt"
image:
---

借鉴软件工程经验，Agent 应用可以从三个维度推进：

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
`,Sa=`---
category: "node"
date: "2026-02-01"
title: "平台工程路径：从标准化到自助服务"
description: "本文给出平台工程的分层演进路径，从标准化、自动化到 API 驱动和自助服务，强调用薄切片验证端到端交付能力。"
tags:
    - "node"
    - "K8s"
    - "IaC"
image:
---

## 背景/问题

平台工程常见误区是先堆工具再补流程，结果投入很大、收益很慢。
根因通常是流程不稳定、接口不清晰、职责边界模糊。
因此需要一条可验证的演进路径，而不是一次性大改。

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
`,Ma=`---
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
`,$a=`---
layout: about-me
heroEyebrow: About Me
heroTitle: Skill Mesh
heroDescription: "I apply AI capabilities across the entire software development lifecycle (SDLC), building intelligent agents and AI-native platforms that automate and optimize every phase of engineering delivery."
heroMeta: ""
focusEyebrow: Career Path
focusTitle: Roles and Expertise
focusCards:
    - icon: robot_2
      title: Agentic Engineer
      description: Context engineering, intelligent agents, and Harness (ongoing exploration)
    - icon: cloud_done
      title: DevOps Engineer
      description: Cloud native architecture and ecosystems around AWS and Kubernetes
    - icon: grid_view
      title: Technical Consultant
      description: Generalist engineering across agile delivery, extreme programming, DDD, and microservices
    - icon: architecture
      title: Software Engineer
      description: Full-stack engineering with Go, Kotlin, and TypeScript
articlesTitle: Latest Articles
featuredArticle: en/blogs/2023/202302-iac-and-terraform.md
sideArticles:
    path: en/blogs/**/*.md
    count: 3
articlesMoreText: View More
articlesMoreHref: /en/blogs/
readMoreLabel: Read More
---
`,Pa=`---
category: domain
date: 2023-02-01
title: Infrastructure as Code in Practice with Terraform
description: This article explains how IaC supports immutable infrastructure and how to structure Terraform projects from simple stacks to layered multi-environment platforms. You can use the patterns here to reduce drift, improve reuse, and scale delivery safely.
tags: [domain, IaC, DevOps, multi-cloud]
image: https://picx.zhimg.com/80/v2-3856f65a763bad268e7d103c7aeb9c65_1440w.png
---

## Immutable Infrastructure

Before discussing IaC, define the target first: immutable infrastructure.

> **Software application complexity -> Development and deployment complexity -> Infrastructure complexity**

In traditional delivery, teams spend significant time preparing runtime environments: network, hosts, OS, and databases. As applications evolve, operations teams keep applying manual changes such as patching, updating IPs, and changing ports. These changes are error-prone and hard to audit. The result is a pet server model: each machine is unique, fragile, and difficult to reproduce.

That is why the industry adopted [Pet vs Cattle](https://joachim8675309.medium.com/devops-concepts-pets-vs-cattle-2380b5aab313), and cloud-native practices proved this model at scale.

The same idea appears in snowflake servers versus phoenix servers. A snowflake server is unique and cannot be recreated exactly after failure. A phoenix server is disposable and reproducible:

- Stable server status and fewer deployment failures
- No configuration drift or snowflake server
- Consistent pre-release environment and simple horizontal scaling
- Simple rollback and recovery processing

To reach this state, you usually combine:

- Automated pipeline
- Stateless application layer
- Persistent data layer
- Infrastructure as Code (IaC)
- DevOps style collaboration

IaC is not just one item in this list. It is the force multiplier that makes the other practices reproducible and automatable.

> IMMUTABLE, BUT CONFIGURABLE / REPRODUCIBLE AND AUTOMATABLE

## 'AS' code, not 'IS' code

![IaC Tools](https://picx.zhimg.com/80/v2-3856f65a763bad268e7d103c7aeb9c65_1440w.png)

IaC can be implemented with Terraform, Pulumi, CloudFormation, or even shell and Python over cloud SDK/CLI. The key is not writing more code. The key is treating infrastructure as a system that must be described, versioned, and safely evolved: AS code, not IS code.

First, code improves infrastructure engineering efficiency:

- Programming and templating features reduce repetitive configuration and manual mistakes.
    - Variables, constants, and reusable blocks reduce duplication.
    - Abstraction and modules make changes easier to distribute.
    - Project structure becomes an explicit map of your infrastructure architecture.
- Software delivery tools raise reliability.
    - Git provides versioning, diff, and rollback history.
    - Tests and policy checks catch mistakes earlier.
    - CI/CD pipelines automate validation, deployment, and recovery.

Second, IaC must model real infrastructure constraints instead of hiding them:

- Infrastructure has hard dependencies.
    - VM and clusters depend on network foundations.
    - Databases and message queues are usually regional, while DNS is often global.
- Provisioning speed is bounded by cloud control planes, not by your code runtime.
    - Application startup may take seconds.
    - Infrastructure changes can take minutes or longer.
    - Example: Alibaba Cloud RDS often needs around 10 minutes before full readiness.
- Stateful systems raise the rebuild cost significantly compared with stateless components.

### Simple Design in IaC

![Alt text](../assets/202302-iac-and-terraform/image.png)

> Ref: [four rules of Simple Design - Kent Beck](https://www.martinfowler.com/bliki/BeckDesignRules.html), [Clean Code — 4 Rules of Simple Design](https://medium.com/swlh/clean-code-4-rules-of-simple-design-f86b066ee43d)

IaC design benefits from the same simple design rules:

- Passes tests first
- Reveals intention
    - Use declarative code to make resource type, state, and dependency explicit.
    - Follow "Do one thing and do it well" to keep modules focused.
- No duplication
    - Reuse modules, templates, and scripts for repeated patterns.
- Fewest elements
    - Prefer less moving parts, fewer abstractions, and clearer boundaries.

### Layered architecture in IaC

![Alt text](../assets/202302-iac-and-terraform/image-1.png)

Layered infrastructure is similar to application layering (for example, MVC): separate concerns by ownership, change frequency, and resource type.

- Owner
    - What is the org structure and who owns which layer?
    - What are responsibilities and collaboration boundaries?
- Change frequency
    - What must be designed once and rarely changed?
    - What changes regularly per environment or product iteration?
- Resource Type
    - IaaS/PaaS/SaaS
    - Compute, storage, network, cluster, middleware, toolchain

In the example above, the goal is building Kubernetes capability on multi-cloud foundations.

- Layer0 and Layer1 abstract equivalent platform capabilities across cloud vendors and expose stable interfaces.
- Layer2 offers reusable middleware and service building blocks for application teams.
- Applications consume these capabilities on demand through automated delivery workflows.

![DevOps workflow](https://s2.loli.net/2023/02/19/2zS3gfmhaQWbdvK.png)

At that point, GitOps becomes the operating model that connects infra changes, review, rollout, and audit.

![GitOps with CMDB](https://s2.loli.net/2023/02/19/g7hkrQPfWaKHlAN.png)

## Terraform Tips

Based on these principles, here is a practical Terraform progression for a service with frontend and backend components.

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

### Complex application - Sub module: use folders to express hierarchy

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
  # complex-sub-modules/applications/backend-app/main.tf
  module "server" {
    source = "../../modules/vm"

    cpu    = 2
    memory = 4096
    vpc_id = module.vpc.id
  }

  module "vpc" {
    source = "../../modules/vm/networking"

    type = "private"
    cidr = "172.0.0.1/16"
  }

  module "db" {
    source = "../../modules/database"

    # upgrade to v1
    # source = "../../modules/database/v1"

    # or publish module to registry
    # source = "private-registry@modules/database/v1"
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

### Advanced application - Layered architecture and platform

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

Use these structures as an evolutionary path, not a fixed template. Start with the simplest layout that supports your current team, then add modules, environments, and layers only when scale or collaboration requires them.
`,Ia=`---
layout: blog-list
featuredEyebrow: Featured Editorial
featured: en/blogs/2023/202302-iac-and-terraform.md
listTitle: Latest Insights
listDescription: Technical and engineering practice notes organized in reverse chronological order.
posts:
    path: en/blogs/**/*.md
    perPage: 9
    page: 1
paginationPrevious: Previous
paginationNext: Next
---
`,Da=`---
layout: home
heroEyebrow: Cognitive Model
heroTitle: "Shaping #-Type Cognition:"
heroTitleHighlight: "A Core Growth Principle for Rapid Growth in the AI Era"
heroDescription: In an era where AI can increasingly replicate depth, human advantage lies in cross-domain connection and proactive exploration. Mesh (#)-shaped cognition is the structure that carries this advantage.
heroPrimaryButton: Core Insights
heroSecondaryButton: How to Apply #
heroSecondaryButtonHref: /en/blogs/
structureTitle: "Deconstructing the # Structure"
structureDescription: Horizontal lines represent breadth of knowledge. Vertical lines represent depth of skill. Their intersections are the decisive nodes where distinctive cognition is formed.
structureCardTitle: Core Concept
structureCardDescription: By linking cognitive nodes into a mesh, this model creates stable decision anchors in uncertain environments.
insightsTitleLine1: Core
insightsTitleLine2: Insights
insightsSubtitle: Reframing human advantage in the AI era through repricing depth, proactive exploration, and transfer-oriented structures
insights:
    - index: "01"
      title: Depth Is Being Repriced
      paragraphs:
          - "In the past, top talent was often seen as M-shaped: deep enough in two or three domains to make complex judgments independently. That level was already rare."
          - But AI is rapidly repricing this kind of depth. Modern models are not only broad in knowledge but also increasingly capable of reasoning, with larger context windows and lower token costs.
          - In minutes, AI can digest core literature in a domain and output professional-grade analyses and plans. The multi-domain depth once seen as an M-shaped edge is quickly becoming commoditized.
    - index: "02"
      title: Human Opportunity Starts with Proactive Exploration
      paragraphs:
          - AI is knowledgeable, but it does not explore on its own. It operates within trained boundaries and cannot spontaneously ask, "What if we investigate an uncharted direction?"
          - Humans can. We sense where the gaps are, where tension exists, and where experiments are worth running.
      listItems:
          - "Research: Go deep into underexplored domains and build new knowledge."
          - "Innovation: Recombine what already exists to generate new solutions."
          - "Transfer: Bring experience from domain A into domain B to create fast insights."
    - index: "03"
      title: "#-Type Cognition Is the Structured Form of Transfer Ability"
      paragraphs:
          - Mesh (#)-shaped cognition combines breadth and depth. Two horizontal lines represent cross-domain breadth, two vertical lines represent depth in selected directions, and the intersections are where you see what others miss.
          - AI can help you move faster, but you still need to decide where to run. That directional judgment comes from the connection network you build across domains.
ctaTitle: "People build networks, and networks connect people."
---
`,La=`---
layout: home
heroEyebrow: 认知模型
heroTitle: "塑造 # 型认知："
heroTitleHighlight: "AI时代快速成长的核心法则"
heroDescription: 跨领域连接与主动探索，是人类在AI时代的核心优势
heroPrimaryButton: 核心洞察
heroSecondaryButton: "# 如何执行"
heroSecondaryButtonHref: /blogs/
structureTitle: "解构 # 型结构"
structureDescription: 横线，代表知识的广度；竖线，代表技能的深度。交叉点，即构筑你独特认知的关键节点。
structureCardTitle: 核心概念
structureCardDescription: 跨领域思考，在不确定的环境中提供稳定的决策支点。
insightsTitleLine1: 核心
insightsTitleLine2: 洞察
insightsSubtitle: 从深度重估、主动探索到迁移结构，重新理解AI时代的人类优势
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
      title: "# 型认知，是可迁移能力的结构化表达"
      paragraphs:
          - MeshShape认知由宽度与深度交织而成。两条横线是跨域宽度，两条竖线是选定方向的深度，交叉点是你能看见别人看不见的地方。
          - AI可以帮你跑得更快，但你得先知道往哪个方向跑。这个方向感，来自你在多个领域之间建立的连接网络。
      # buttonText: 阅读完整论文
ctaTitle: "人能够构建网络，网络才会链接人。"
# ctaPrimaryButton: 申请加入专家库
# ctaSecondaryButton: 订阅研究报告
---
`;function ot(n,e){return n==null||e==null?NaN:n<e?-1:n>e?1:n>=e?0:NaN}function jf(n,e){return n==null||e==null?NaN:e<n?-1:e>n?1:e>=n?0:NaN}function Na(n){let e,t,r;n.length!==2?(e=ot,t=(o,l)=>ot(n(o),l),r=(o,l)=>n(o)-l):(e=n===ot||n===jf?n:Wf,t=n,r=n);function a(o,l,c=0,d=o.length){if(c<d){if(e(l,l)!==0)return d;do{const p=c+d>>>1;t(o[p],l)<0?c=p+1:d=p}while(c<d)}return c}function s(o,l,c=0,d=o.length){if(c<d){if(e(l,l)!==0)return d;do{const p=c+d>>>1;t(o[p],l)<=0?c=p+1:d=p}while(c<d)}return c}function i(o,l,c=0,d=o.length){const p=a(o,l,c,d-1);return p>c&&r(o[p-1],l)>-r(o[p],l)?p-1:p}return{left:a,center:i,right:s}}function Wf(){return 0}function Yf(n){return n===null?NaN:+n}const Kf=Na(ot),Xf=Kf.right;Na(Yf).center;class ss extends Map{constructor(e,t=Zf){if(super(),Object.defineProperties(this,{_intern:{value:new Map},_key:{value:t}}),e!=null)for(const[r,a]of e)this.set(r,a)}get(e){return super.get(is(this,e))}has(e){return super.has(is(this,e))}set(e,t){return super.set(Qf(this,e),t)}delete(e){return super.delete(Jf(this,e))}}function is({_intern:n,_key:e},t){const r=e(t);return n.has(r)?n.get(r):t}function Qf({_intern:n,_key:e},t){const r=e(t);return n.has(r)?n.get(r):(n.set(r,t),t)}function Jf({_intern:n,_key:e},t){const r=e(t);return n.has(r)&&(t=n.get(r),n.delete(r)),t}function Zf(n){return n!==null&&typeof n=="object"?n.valueOf():n}const np=Math.sqrt(50),ep=Math.sqrt(10),tp=Math.sqrt(2);function pt(n,e,t){const r=(e-n)/Math.max(0,t),a=Math.floor(Math.log10(r)),s=r/Math.pow(10,a),i=s>=np?10:s>=ep?5:s>=tp?2:1;let o,l,c;return a<0?(c=Math.pow(10,-a)/i,o=Math.round(n*c),l=Math.round(e*c),o/c<n&&++o,l/c>e&&--l,c=-c):(c=Math.pow(10,a)*i,o=Math.round(n/c),l=Math.round(e/c),o*c<n&&++o,l*c>e&&--l),l<o&&.5<=t&&t<2?pt(n,e,t*2):[o,l,c]}function rp(n,e,t){if(e=+e,n=+n,t=+t,!(t>0))return[];if(n===e)return[n];const r=e<n,[a,s,i]=r?pt(e,n,t):pt(n,e,t);if(!(s>=a))return[];const o=s-a+1,l=new Array(o);if(r)if(i<0)for(let c=0;c<o;++c)l[c]=(s-c)/-i;else for(let c=0;c<o;++c)l[c]=(s-c)*i;else if(i<0)for(let c=0;c<o;++c)l[c]=(a+c)/-i;else for(let c=0;c<o;++c)l[c]=(a+c)*i;return l}function xr(n,e,t){return e=+e,n=+n,t=+t,pt(n,e,t)[2]}function kr(n,e,t){e=+e,n=+n,t=+t;const r=e<n,a=r?xr(e,n,t):xr(n,e,t);return(r?-1:1)*(a<0?1/-a:a)}function $x(n,e){let t;if(e===void 0)for(const r of n)r!=null&&(t<r||t===void 0&&r>=r)&&(t=r);else{let r=-1;for(let a of n)(a=e(a,++r,n))!=null&&(t<a||t===void 0&&a>=a)&&(t=a)}return t}function Px(n,e){let t;if(e===void 0)for(const r of n)r!=null&&(t>r||t===void 0&&r>=r)&&(t=r);else{let r=-1;for(let a of n)(a=e(a,++r,n))!=null&&(t>a||t===void 0&&a>=a)&&(t=a)}return t}function ap(n,e,t){n=+n,e=+e,t=(a=arguments.length)<2?(e=n,n=0,1):a<3?1:+t;for(var r=-1,a=Math.max(0,Math.ceil((e-n)/t))|0,s=new Array(a);++r<a;)s[r]=n+r*t;return s}function sp(n){return n}var lt=1,er=2,wr=3,Ze=4,os=1e-6;function ip(n){return"translate("+n+",0)"}function op(n){return"translate(0,"+n+")"}function lp(n){return e=>+n(e)}function cp(n,e){return e=Math.max(0,n.bandwidth()-e*2)/2,n.round()&&(e=Math.round(e)),t=>+n(t)+e}function up(){return!this.__axis}function fi(n,e){var t=[],r=null,a=null,s=6,i=6,o=3,l=typeof window<"u"&&window.devicePixelRatio>1?0:.5,c=n===lt||n===Ze?-1:1,d=n===Ze||n===er?"x":"y",p=n===lt||n===wr?ip:op;function u(h){var v=r??(e.ticks?e.ticks.apply(e,t):e.domain()),_=a??(e.tickFormat?e.tickFormat.apply(e,t):sp),y=Math.max(s,0)+o,w=e.range(),A=+w[0]+l,I=+w[w.length-1]+l,b=(e.bandwidth?cp:lp)(e.copy(),l),T=h.selection?h.selection():h,k=T.selectAll(".domain").data([null]),E=T.selectAll(".tick").data(v,e).order(),F=E.exit(),W=E.enter().append("g").attr("class","tick"),U=E.select("line"),L=E.select("text");k=k.merge(k.enter().insert("path",".tick").attr("class","domain").attr("stroke","currentColor")),E=E.merge(W),U=U.merge(W.append("line").attr("stroke","currentColor").attr(d+"2",c*s)),L=L.merge(W.append("text").attr("fill","currentColor").attr(d,c*y).attr("dy",n===lt?"0em":n===wr?"0.71em":"0.32em")),h!==T&&(k=k.transition(h),E=E.transition(h),U=U.transition(h),L=L.transition(h),F=F.transition(h).attr("opacity",os).attr("transform",function(P){return isFinite(P=b(P))?p(P+l):this.getAttribute("transform")}),W.attr("opacity",os).attr("transform",function(P){var D=this.parentNode.__axis;return p((D&&isFinite(D=D(P))?D:b(P))+l)})),F.remove(),k.attr("d",n===Ze||n===er?i?"M"+c*i+","+A+"H"+l+"V"+I+"H"+c*i:"M"+l+","+A+"V"+I:i?"M"+A+","+c*i+"V"+l+"H"+I+"V"+c*i:"M"+A+","+l+"H"+I),E.attr("opacity",1).attr("transform",function(P){return p(b(P)+l)}),U.attr(d+"2",c*s),L.attr(d,c*y).text(_),T.filter(up).attr("fill","none").attr("font-size",10).attr("font-family","sans-serif").attr("text-anchor",n===er?"start":n===Ze?"end":"middle"),T.each(function(){this.__axis=b})}return u.scale=function(h){return arguments.length?(e=h,u):e},u.ticks=function(){return t=Array.from(arguments),u},u.tickArguments=function(h){return arguments.length?(t=h==null?[]:Array.from(h),u):t.slice()},u.tickValues=function(h){return arguments.length?(r=h==null?null:Array.from(h),u):r&&r.slice()},u.tickFormat=function(h){return arguments.length?(a=h,u):a},u.tickSize=function(h){return arguments.length?(s=i=+h,u):s},u.tickSizeInner=function(h){return arguments.length?(s=+h,u):s},u.tickSizeOuter=function(h){return arguments.length?(i=+h,u):i},u.tickPadding=function(h){return arguments.length?(o=+h,u):o},u.offset=function(h){return arguments.length?(l=+h,u):l},u}function Ix(n){return fi(lt,n)}function Dx(n){return fi(wr,n)}var dp={value:()=>{}};function Ht(){for(var n=0,e=arguments.length,t={},r;n<e;++n){if(!(r=arguments[n]+"")||r in t||/[\s.]/.test(r))throw new Error("illegal type: "+r);t[r]=[]}return new ct(t)}function ct(n){this._=n}function hp(n,e){return n.trim().split(/^|\s+/).map(function(t){var r="",a=t.indexOf(".");if(a>=0&&(r=t.slice(a+1),t=t.slice(0,a)),t&&!e.hasOwnProperty(t))throw new Error("unknown type: "+t);return{type:t,name:r}})}ct.prototype=Ht.prototype={constructor:ct,on:function(n,e){var t=this._,r=hp(n+"",t),a,s=-1,i=r.length;if(arguments.length<2){for(;++s<i;)if((a=(n=r[s]).type)&&(a=fp(t[a],n.name)))return a;return}if(e!=null&&typeof e!="function")throw new Error("invalid callback: "+e);for(;++s<i;)if(a=(n=r[s]).type)t[a]=ls(t[a],n.name,e);else if(e==null)for(a in t)t[a]=ls(t[a],n.name,null);return this},copy:function(){var n={},e=this._;for(var t in e)n[t]=e[t].slice();return new ct(n)},call:function(n,e){if((a=arguments.length-2)>0)for(var t=new Array(a),r=0,a,s;r<a;++r)t[r]=arguments[r+2];if(!this._.hasOwnProperty(n))throw new Error("unknown type: "+n);for(s=this._[n],r=0,a=s.length;r<a;++r)s[r].value.apply(e,t)},apply:function(n,e,t){if(!this._.hasOwnProperty(n))throw new Error("unknown type: "+n);for(var r=this._[n],a=0,s=r.length;a<s;++a)r[a].value.apply(e,t)}};function fp(n,e){for(var t=0,r=n.length,a;t<r;++t)if((a=n[t]).name===e)return a.value}function ls(n,e,t){for(var r=0,a=n.length;r<a;++r)if(n[r].name===e){n[r]=dp,n=n.slice(0,r).concat(n.slice(r+1));break}return t!=null&&n.push({name:e,value:t}),n}var Ar="http://www.w3.org/1999/xhtml";const cs={svg:"http://www.w3.org/2000/svg",xhtml:Ar,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function Gt(n){var e=n+="",t=e.indexOf(":");return t>=0&&(e=n.slice(0,t))!=="xmlns"&&(n=n.slice(t+1)),cs.hasOwnProperty(e)?{space:cs[e],local:n}:n}function pp(n){return function(){var e=this.ownerDocument,t=this.namespaceURI;return t===Ar&&e.documentElement.namespaceURI===Ar?e.createElement(n):e.createElementNS(t,n)}}function gp(n){return function(){return this.ownerDocument.createElementNS(n.space,n.local)}}function pi(n){var e=Gt(n);return(e.local?gp:pp)(e)}function mp(){}function Ea(n){return n==null?mp:function(){return this.querySelector(n)}}function vp(n){typeof n!="function"&&(n=Ea(n));for(var e=this._groups,t=e.length,r=new Array(t),a=0;a<t;++a)for(var s=e[a],i=s.length,o=r[a]=new Array(i),l,c,d=0;d<i;++d)(l=s[d])&&(c=n.call(l,l.__data__,d,s))&&("__data__"in l&&(c.__data__=l.__data__),o[d]=c);return new Pn(r,this._parents)}function _p(n){return n==null?[]:Array.isArray(n)?n:Array.from(n)}function bp(){return[]}function gi(n){return n==null?bp:function(){return this.querySelectorAll(n)}}function yp(n){return function(){return _p(n.apply(this,arguments))}}function xp(n){typeof n=="function"?n=yp(n):n=gi(n);for(var e=this._groups,t=e.length,r=[],a=[],s=0;s<t;++s)for(var i=e[s],o=i.length,l,c=0;c<o;++c)(l=i[c])&&(r.push(n.call(l,l.__data__,c,i)),a.push(l));return new Pn(r,a)}function mi(n){return function(){return this.matches(n)}}function vi(n){return function(e){return e.matches(n)}}var kp=Array.prototype.find;function wp(n){return function(){return kp.call(this.children,n)}}function Ap(){return this.firstElementChild}function Cp(n){return this.select(n==null?Ap:wp(typeof n=="function"?n:vi(n)))}var Tp=Array.prototype.filter;function Sp(){return Array.from(this.children)}function Mp(n){return function(){return Tp.call(this.children,n)}}function $p(n){return this.selectAll(n==null?Sp:Mp(typeof n=="function"?n:vi(n)))}function Pp(n){typeof n!="function"&&(n=mi(n));for(var e=this._groups,t=e.length,r=new Array(t),a=0;a<t;++a)for(var s=e[a],i=s.length,o=r[a]=[],l,c=0;c<i;++c)(l=s[c])&&n.call(l,l.__data__,c,s)&&o.push(l);return new Pn(r,this._parents)}function _i(n){return new Array(n.length)}function Ip(){return new Pn(this._enter||this._groups.map(_i),this._parents)}function gt(n,e){this.ownerDocument=n.ownerDocument,this.namespaceURI=n.namespaceURI,this._next=null,this._parent=n,this.__data__=e}gt.prototype={constructor:gt,appendChild:function(n){return this._parent.insertBefore(n,this._next)},insertBefore:function(n,e){return this._parent.insertBefore(n,e)},querySelector:function(n){return this._parent.querySelector(n)},querySelectorAll:function(n){return this._parent.querySelectorAll(n)}};function Dp(n){return function(){return n}}function Lp(n,e,t,r,a,s){for(var i=0,o,l=e.length,c=s.length;i<c;++i)(o=e[i])?(o.__data__=s[i],r[i]=o):t[i]=new gt(n,s[i]);for(;i<l;++i)(o=e[i])&&(a[i]=o)}function Np(n,e,t,r,a,s,i){var o,l,c=new Map,d=e.length,p=s.length,u=new Array(d),h;for(o=0;o<d;++o)(l=e[o])&&(u[o]=h=i.call(l,l.__data__,o,e)+"",c.has(h)?a[o]=l:c.set(h,l));for(o=0;o<p;++o)h=i.call(n,s[o],o,s)+"",(l=c.get(h))?(r[o]=l,l.__data__=s[o],c.delete(h)):t[o]=new gt(n,s[o]);for(o=0;o<d;++o)(l=e[o])&&c.get(u[o])===l&&(a[o]=l)}function Ep(n){return n.__data__}function Op(n,e){if(!arguments.length)return Array.from(this,Ep);var t=e?Np:Lp,r=this._parents,a=this._groups;typeof n!="function"&&(n=Dp(n));for(var s=a.length,i=new Array(s),o=new Array(s),l=new Array(s),c=0;c<s;++c){var d=r[c],p=a[c],u=p.length,h=Rp(n.call(d,d&&d.__data__,c,r)),v=h.length,_=o[c]=new Array(v),y=i[c]=new Array(v),w=l[c]=new Array(u);t(d,p,_,y,w,h,e);for(var A=0,I=0,b,T;A<v;++A)if(b=_[A]){for(A>=I&&(I=A+1);!(T=y[I])&&++I<v;);b._next=T||null}}return i=new Pn(i,r),i._enter=o,i._exit=l,i}function Rp(n){return typeof n=="object"&&"length"in n?n:Array.from(n)}function Vp(){return new Pn(this._exit||this._groups.map(_i),this._parents)}function Bp(n,e,t){var r=this.enter(),a=this,s=this.exit();return typeof n=="function"?(r=n(r),r&&(r=r.selection())):r=r.append(n+""),e!=null&&(a=e(a),a&&(a=a.selection())),t==null?s.remove():t(s),r&&a?r.merge(a).order():a}function zp(n){for(var e=n.selection?n.selection():n,t=this._groups,r=e._groups,a=t.length,s=r.length,i=Math.min(a,s),o=new Array(a),l=0;l<i;++l)for(var c=t[l],d=r[l],p=c.length,u=o[l]=new Array(p),h,v=0;v<p;++v)(h=c[v]||d[v])&&(u[v]=h);for(;l<a;++l)o[l]=t[l];return new Pn(o,this._parents)}function Fp(){for(var n=this._groups,e=-1,t=n.length;++e<t;)for(var r=n[e],a=r.length-1,s=r[a],i;--a>=0;)(i=r[a])&&(s&&i.compareDocumentPosition(s)^4&&s.parentNode.insertBefore(i,s),s=i);return this}function Up(n){n||(n=qp);function e(p,u){return p&&u?n(p.__data__,u.__data__):!p-!u}for(var t=this._groups,r=t.length,a=new Array(r),s=0;s<r;++s){for(var i=t[s],o=i.length,l=a[s]=new Array(o),c,d=0;d<o;++d)(c=i[d])&&(l[d]=c);l.sort(e)}return new Pn(a,this._parents).order()}function qp(n,e){return n<e?-1:n>e?1:n>=e?0:NaN}function Hp(){var n=arguments[0];return arguments[0]=this,n.apply(null,arguments),this}function Gp(){return Array.from(this)}function jp(){for(var n=this._groups,e=0,t=n.length;e<t;++e)for(var r=n[e],a=0,s=r.length;a<s;++a){var i=r[a];if(i)return i}return null}function Wp(){let n=0;for(const e of this)++n;return n}function Yp(){return!this.node()}function Kp(n){for(var e=this._groups,t=0,r=e.length;t<r;++t)for(var a=e[t],s=0,i=a.length,o;s<i;++s)(o=a[s])&&n.call(o,o.__data__,s,a);return this}function Xp(n){return function(){this.removeAttribute(n)}}function Qp(n){return function(){this.removeAttributeNS(n.space,n.local)}}function Jp(n,e){return function(){this.setAttribute(n,e)}}function Zp(n,e){return function(){this.setAttributeNS(n.space,n.local,e)}}function ng(n,e){return function(){var t=e.apply(this,arguments);t==null?this.removeAttribute(n):this.setAttribute(n,t)}}function eg(n,e){return function(){var t=e.apply(this,arguments);t==null?this.removeAttributeNS(n.space,n.local):this.setAttributeNS(n.space,n.local,t)}}function tg(n,e){var t=Gt(n);if(arguments.length<2){var r=this.node();return t.local?r.getAttributeNS(t.space,t.local):r.getAttribute(t)}return this.each((e==null?t.local?Qp:Xp:typeof e=="function"?t.local?eg:ng:t.local?Zp:Jp)(t,e))}function bi(n){return n.ownerDocument&&n.ownerDocument.defaultView||n.document&&n||n.defaultView}function rg(n){return function(){this.style.removeProperty(n)}}function ag(n,e,t){return function(){this.style.setProperty(n,e,t)}}function sg(n,e,t){return function(){var r=e.apply(this,arguments);r==null?this.style.removeProperty(n):this.style.setProperty(n,r,t)}}function ig(n,e,t){return arguments.length>1?this.each((e==null?rg:typeof e=="function"?sg:ag)(n,e,t??"")):Te(this.node(),n)}function Te(n,e){return n.style.getPropertyValue(e)||bi(n).getComputedStyle(n,null).getPropertyValue(e)}function og(n){return function(){delete this[n]}}function lg(n,e){return function(){this[n]=e}}function cg(n,e){return function(){var t=e.apply(this,arguments);t==null?delete this[n]:this[n]=t}}function ug(n,e){return arguments.length>1?this.each((e==null?og:typeof e=="function"?cg:lg)(n,e)):this.node()[n]}function yi(n){return n.trim().split(/^|\s+/)}function Oa(n){return n.classList||new xi(n)}function xi(n){this._node=n,this._names=yi(n.getAttribute("class")||"")}xi.prototype={add:function(n){var e=this._names.indexOf(n);e<0&&(this._names.push(n),this._node.setAttribute("class",this._names.join(" ")))},remove:function(n){var e=this._names.indexOf(n);e>=0&&(this._names.splice(e,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(n){return this._names.indexOf(n)>=0}};function ki(n,e){for(var t=Oa(n),r=-1,a=e.length;++r<a;)t.add(e[r])}function wi(n,e){for(var t=Oa(n),r=-1,a=e.length;++r<a;)t.remove(e[r])}function dg(n){return function(){ki(this,n)}}function hg(n){return function(){wi(this,n)}}function fg(n,e){return function(){(e.apply(this,arguments)?ki:wi)(this,n)}}function pg(n,e){var t=yi(n+"");if(arguments.length<2){for(var r=Oa(this.node()),a=-1,s=t.length;++a<s;)if(!r.contains(t[a]))return!1;return!0}return this.each((typeof e=="function"?fg:e?dg:hg)(t,e))}function gg(){this.textContent=""}function mg(n){return function(){this.textContent=n}}function vg(n){return function(){var e=n.apply(this,arguments);this.textContent=e??""}}function _g(n){return arguments.length?this.each(n==null?gg:(typeof n=="function"?vg:mg)(n)):this.node().textContent}function bg(){this.innerHTML=""}function yg(n){return function(){this.innerHTML=n}}function xg(n){return function(){var e=n.apply(this,arguments);this.innerHTML=e??""}}function kg(n){return arguments.length?this.each(n==null?bg:(typeof n=="function"?xg:yg)(n)):this.node().innerHTML}function wg(){this.nextSibling&&this.parentNode.appendChild(this)}function Ag(){return this.each(wg)}function Cg(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function Tg(){return this.each(Cg)}function Sg(n){var e=typeof n=="function"?n:pi(n);return this.select(function(){return this.appendChild(e.apply(this,arguments))})}function Mg(){return null}function $g(n,e){var t=typeof n=="function"?n:pi(n),r=e==null?Mg:typeof e=="function"?e:Ea(e);return this.select(function(){return this.insertBefore(t.apply(this,arguments),r.apply(this,arguments)||null)})}function Pg(){var n=this.parentNode;n&&n.removeChild(this)}function Ig(){return this.each(Pg)}function Dg(){var n=this.cloneNode(!1),e=this.parentNode;return e?e.insertBefore(n,this.nextSibling):n}function Lg(){var n=this.cloneNode(!0),e=this.parentNode;return e?e.insertBefore(n,this.nextSibling):n}function Ng(n){return this.select(n?Lg:Dg)}function Eg(n){return arguments.length?this.property("__data__",n):this.node().__data__}function Og(n){return function(e){n.call(this,e,this.__data__)}}function Rg(n){return n.trim().split(/^|\s+/).map(function(e){var t="",r=e.indexOf(".");return r>=0&&(t=e.slice(r+1),e=e.slice(0,r)),{type:e,name:t}})}function Vg(n){return function(){var e=this.__on;if(e){for(var t=0,r=-1,a=e.length,s;t<a;++t)s=e[t],(!n.type||s.type===n.type)&&s.name===n.name?this.removeEventListener(s.type,s.listener,s.options):e[++r]=s;++r?e.length=r:delete this.__on}}}function Bg(n,e,t){return function(){var r=this.__on,a,s=Og(e);if(r){for(var i=0,o=r.length;i<o;++i)if((a=r[i]).type===n.type&&a.name===n.name){this.removeEventListener(a.type,a.listener,a.options),this.addEventListener(a.type,a.listener=s,a.options=t),a.value=e;return}}this.addEventListener(n.type,s,t),a={type:n.type,name:n.name,value:e,listener:s,options:t},r?r.push(a):this.__on=[a]}}function zg(n,e,t){var r=Rg(n+""),a,s=r.length,i;if(arguments.length<2){var o=this.node().__on;if(o){for(var l=0,c=o.length,d;l<c;++l)for(a=0,d=o[l];a<s;++a)if((i=r[a]).type===d.type&&i.name===d.name)return d.value}return}for(o=e?Bg:Vg,a=0;a<s;++a)this.each(o(r[a],e,t));return this}function Ai(n,e,t){var r=bi(n),a=r.CustomEvent;typeof a=="function"?a=new a(e,t):(a=r.document.createEvent("Event"),t?(a.initEvent(e,t.bubbles,t.cancelable),a.detail=t.detail):a.initEvent(e,!1,!1)),n.dispatchEvent(a)}function Fg(n,e){return function(){return Ai(this,n,e)}}function Ug(n,e){return function(){return Ai(this,n,e.apply(this,arguments))}}function qg(n,e){return this.each((typeof e=="function"?Ug:Fg)(n,e))}function*Hg(){for(var n=this._groups,e=0,t=n.length;e<t;++e)for(var r=n[e],a=0,s=r.length,i;a<s;++a)(i=r[a])&&(yield i)}var Ci=[null];function Pn(n,e){this._groups=n,this._parents=e}function Xe(){return new Pn([[document.documentElement]],Ci)}function Gg(){return this}Pn.prototype=Xe.prototype={constructor:Pn,select:vp,selectAll:xp,selectChild:Cp,selectChildren:$p,filter:Pp,data:Op,enter:Ip,exit:Vp,join:Bp,merge:zp,selection:Gg,order:Fp,sort:Up,call:Hp,nodes:Gp,node:jp,size:Wp,empty:Yp,each:Kp,attr:tg,style:ig,property:ug,classed:pg,text:_g,html:kg,raise:Ag,lower:Tg,append:Sg,insert:$g,remove:Ig,clone:Ng,datum:Eg,on:zg,dispatch:qg,[Symbol.iterator]:Hg};function le(n){return typeof n=="string"?new Pn([[document.querySelector(n)]],[document.documentElement]):new Pn([[n]],Ci)}function jg(n){let e;for(;e=n.sourceEvent;)n=e;return n}function us(n,e){if(n=jg(n),e===void 0&&(e=n.currentTarget),e){var t=e.ownerSVGElement||e;if(t.createSVGPoint){var r=t.createSVGPoint();return r.x=n.clientX,r.y=n.clientY,r=r.matrixTransform(e.getScreenCTM().inverse()),[r.x,r.y]}if(e.getBoundingClientRect){var a=e.getBoundingClientRect();return[n.clientX-a.left-e.clientLeft,n.clientY-a.top-e.clientTop]}}return[n.pageX,n.pageY]}const Wg={passive:!1},qe={capture:!0,passive:!1};function tr(n){n.stopImmediatePropagation()}function we(n){n.preventDefault(),n.stopImmediatePropagation()}function Yg(n){var e=n.document.documentElement,t=le(n).on("dragstart.drag",we,qe);"onselectstart"in e?t.on("selectstart.drag",we,qe):(e.__noselect=e.style.MozUserSelect,e.style.MozUserSelect="none")}function Kg(n,e){var t=n.document.documentElement,r=le(n).on("dragstart.drag",null);e&&(r.on("click.drag",we,qe),setTimeout(function(){r.on("click.drag",null)},0)),"onselectstart"in t?r.on("selectstart.drag",null):(t.style.MozUserSelect=t.__noselect,delete t.__noselect)}const nt=n=>()=>n;function Cr(n,{sourceEvent:e,subject:t,target:r,identifier:a,active:s,x:i,y:o,dx:l,dy:c,dispatch:d}){Object.defineProperties(this,{type:{value:n,enumerable:!0,configurable:!0},sourceEvent:{value:e,enumerable:!0,configurable:!0},subject:{value:t,enumerable:!0,configurable:!0},target:{value:r,enumerable:!0,configurable:!0},identifier:{value:a,enumerable:!0,configurable:!0},active:{value:s,enumerable:!0,configurable:!0},x:{value:i,enumerable:!0,configurable:!0},y:{value:o,enumerable:!0,configurable:!0},dx:{value:l,enumerable:!0,configurable:!0},dy:{value:c,enumerable:!0,configurable:!0},_:{value:d}})}Cr.prototype.on=function(){var n=this._.on.apply(this._,arguments);return n===this._?this:n};function Xg(n){return!n.ctrlKey&&!n.button}function Qg(){return this.parentNode}function Jg(n,e){return e??{x:n.x,y:n.y}}function Zg(){return navigator.maxTouchPoints||"ontouchstart"in this}function nm(){var n=Xg,e=Qg,t=Jg,r=Zg,a={},s=Ht("start","drag","end"),i=0,o,l,c,d,p=0;function u(b){b.on("mousedown.drag",h).filter(r).on("touchstart.drag",y).on("touchmove.drag",w,Wg).on("touchend.drag touchcancel.drag",A).style("touch-action","none").style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}function h(b,T){if(!(d||!n.call(this,b,T))){var k=I(this,e.call(this,b,T),b,T,"mouse");k&&(le(b.view).on("mousemove.drag",v,qe).on("mouseup.drag",_,qe),Yg(b.view),tr(b),c=!1,o=b.clientX,l=b.clientY,k("start",b))}}function v(b){if(we(b),!c){var T=b.clientX-o,k=b.clientY-l;c=T*T+k*k>p}a.mouse("drag",b)}function _(b){le(b.view).on("mousemove.drag mouseup.drag",null),Kg(b.view,c),we(b),a.mouse("end",b)}function y(b,T){if(n.call(this,b,T)){var k=b.changedTouches,E=e.call(this,b,T),F=k.length,W,U;for(W=0;W<F;++W)(U=I(this,E,b,T,k[W].identifier,k[W]))&&(tr(b),U("start",b,k[W]))}}function w(b){var T=b.changedTouches,k=T.length,E,F;for(E=0;E<k;++E)(F=a[T[E].identifier])&&(we(b),F("drag",b,T[E]))}function A(b){var T=b.changedTouches,k=T.length,E,F;for(d&&clearTimeout(d),d=setTimeout(function(){d=null},500),E=0;E<k;++E)(F=a[T[E].identifier])&&(tr(b),F("end",b,T[E]))}function I(b,T,k,E,F,W){var U=s.copy(),L=us(W||k,T),P,D,V;if((V=t.call(b,new Cr("beforestart",{sourceEvent:k,target:u,identifier:F,active:i,x:L[0],y:L[1],dx:0,dy:0,dispatch:U}),E))!=null)return P=V.x-L[0]||0,D=V.y-L[1]||0,function tn(nn,Y,ln){var hn=L,dn;switch(nn){case"start":a[F]=tn,dn=i++;break;case"end":delete a[F],--i;case"drag":L=us(ln||Y,T),dn=i;break}U.call(nn,b,new Cr(nn,{sourceEvent:Y,subject:V,target:u,identifier:F,active:dn,x:L[0]+P,y:L[1]+D,dx:L[0]-hn[0],dy:L[1]-hn[1],dispatch:U}),E)}}return u.filter=function(b){return arguments.length?(n=typeof b=="function"?b:nt(!!b),u):n},u.container=function(b){return arguments.length?(e=typeof b=="function"?b:nt(b),u):e},u.subject=function(b){return arguments.length?(t=typeof b=="function"?b:nt(b),u):t},u.touchable=function(b){return arguments.length?(r=typeof b=="function"?b:nt(!!b),u):r},u.on=function(){var b=s.on.apply(s,arguments);return b===s?u:b},u.clickDistance=function(b){return arguments.length?(p=(b=+b)*b,u):Math.sqrt(p)},u}function Qe(n,e,t){n.prototype=e.prototype=t,t.constructor=n}function jt(n,e){var t=Object.create(n.prototype);for(var r in e)t[r]=e[r];return t}function me(){}var He=.7,mt=1/He,Ae="\\s*([+-]?\\d+)\\s*",Ge="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",Fn="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",em=/^#([0-9a-f]{3,8})$/,tm=new RegExp(`^rgb\\(${Ae},${Ae},${Ae}\\)$`),rm=new RegExp(`^rgb\\(${Fn},${Fn},${Fn}\\)$`),am=new RegExp(`^rgba\\(${Ae},${Ae},${Ae},${Ge}\\)$`),sm=new RegExp(`^rgba\\(${Fn},${Fn},${Fn},${Ge}\\)$`),im=new RegExp(`^hsl\\(${Ge},${Fn},${Fn}\\)$`),om=new RegExp(`^hsla\\(${Ge},${Fn},${Fn},${Ge}\\)$`),ds={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};Qe(me,de,{copy(n){return Object.assign(new this.constructor,this,n)},displayable(){return this.rgb().displayable()},hex:hs,formatHex:hs,formatHex8:lm,formatHsl:cm,formatRgb:fs,toString:fs});function hs(){return this.rgb().formatHex()}function lm(){return this.rgb().formatHex8()}function cm(){return Si(this).formatHsl()}function fs(){return this.rgb().formatRgb()}function de(n){var e,t;return n=(n+"").trim().toLowerCase(),(e=em.exec(n))?(t=e[1].length,e=parseInt(e[1],16),t===6?ps(e):t===3?new yn(e>>8&15|e>>4&240,e>>4&15|e&240,(e&15)<<4|e&15,1):t===8?et(e>>24&255,e>>16&255,e>>8&255,(e&255)/255):t===4?et(e>>12&15|e>>8&240,e>>8&15|e>>4&240,e>>4&15|e&240,((e&15)<<4|e&15)/255):null):(e=tm.exec(n))?new yn(e[1],e[2],e[3],1):(e=rm.exec(n))?new yn(e[1]*255/100,e[2]*255/100,e[3]*255/100,1):(e=am.exec(n))?et(e[1],e[2],e[3],e[4]):(e=sm.exec(n))?et(e[1]*255/100,e[2]*255/100,e[3]*255/100,e[4]):(e=im.exec(n))?vs(e[1],e[2]/100,e[3]/100,1):(e=om.exec(n))?vs(e[1],e[2]/100,e[3]/100,e[4]):ds.hasOwnProperty(n)?ps(ds[n]):n==="transparent"?new yn(NaN,NaN,NaN,0):null}function ps(n){return new yn(n>>16&255,n>>8&255,n&255,1)}function et(n,e,t,r){return r<=0&&(n=e=t=NaN),new yn(n,e,t,r)}function Ti(n){return n instanceof me||(n=de(n)),n?(n=n.rgb(),new yn(n.r,n.g,n.b,n.opacity)):new yn}function Tr(n,e,t,r){return arguments.length===1?Ti(n):new yn(n,e,t,r??1)}function yn(n,e,t,r){this.r=+n,this.g=+e,this.b=+t,this.opacity=+r}Qe(yn,Tr,jt(me,{brighter(n){return n=n==null?mt:Math.pow(mt,n),new yn(this.r*n,this.g*n,this.b*n,this.opacity)},darker(n){return n=n==null?He:Math.pow(He,n),new yn(this.r*n,this.g*n,this.b*n,this.opacity)},rgb(){return this},clamp(){return new yn(ce(this.r),ce(this.g),ce(this.b),vt(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:gs,formatHex:gs,formatHex8:um,formatRgb:ms,toString:ms}));function gs(){return`#${oe(this.r)}${oe(this.g)}${oe(this.b)}`}function um(){return`#${oe(this.r)}${oe(this.g)}${oe(this.b)}${oe((isNaN(this.opacity)?1:this.opacity)*255)}`}function ms(){const n=vt(this.opacity);return`${n===1?"rgb(":"rgba("}${ce(this.r)}, ${ce(this.g)}, ${ce(this.b)}${n===1?")":`, ${n})`}`}function vt(n){return isNaN(n)?1:Math.max(0,Math.min(1,n))}function ce(n){return Math.max(0,Math.min(255,Math.round(n)||0))}function oe(n){return n=ce(n),(n<16?"0":"")+n.toString(16)}function vs(n,e,t,r){return r<=0?n=e=t=NaN:t<=0||t>=1?n=e=NaN:e<=0&&(n=NaN),new En(n,e,t,r)}function Si(n){if(n instanceof En)return new En(n.h,n.s,n.l,n.opacity);if(n instanceof me||(n=de(n)),!n)return new En;if(n instanceof En)return n;n=n.rgb();var e=n.r/255,t=n.g/255,r=n.b/255,a=Math.min(e,t,r),s=Math.max(e,t,r),i=NaN,o=s-a,l=(s+a)/2;return o?(e===s?i=(t-r)/o+(t<r)*6:t===s?i=(r-e)/o+2:i=(e-t)/o+4,o/=l<.5?s+a:2-s-a,i*=60):o=l>0&&l<1?0:i,new En(i,o,l,n.opacity)}function dm(n,e,t,r){return arguments.length===1?Si(n):new En(n,e,t,r??1)}function En(n,e,t,r){this.h=+n,this.s=+e,this.l=+t,this.opacity=+r}Qe(En,dm,jt(me,{brighter(n){return n=n==null?mt:Math.pow(mt,n),new En(this.h,this.s,this.l*n,this.opacity)},darker(n){return n=n==null?He:Math.pow(He,n),new En(this.h,this.s,this.l*n,this.opacity)},rgb(){var n=this.h%360+(this.h<0)*360,e=isNaN(n)||isNaN(this.s)?0:this.s,t=this.l,r=t+(t<.5?t:1-t)*e,a=2*t-r;return new yn(rr(n>=240?n-240:n+120,a,r),rr(n,a,r),rr(n<120?n+240:n-120,a,r),this.opacity)},clamp(){return new En(_s(this.h),tt(this.s),tt(this.l),vt(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){const n=vt(this.opacity);return`${n===1?"hsl(":"hsla("}${_s(this.h)}, ${tt(this.s)*100}%, ${tt(this.l)*100}%${n===1?")":`, ${n})`}`}}));function _s(n){return n=(n||0)%360,n<0?n+360:n}function tt(n){return Math.max(0,Math.min(1,n||0))}function rr(n,e,t){return(n<60?e+(t-e)*n/60:n<180?t:n<240?e+(t-e)*(240-n)/60:e)*255}const hm=Math.PI/180,fm=180/Math.PI,_t=18,Mi=.96422,$i=1,Pi=.82521,Ii=4/29,Ce=6/29,Di=3*Ce*Ce,pm=Ce*Ce*Ce;function Li(n){if(n instanceof Un)return new Un(n.l,n.a,n.b,n.opacity);if(n instanceof jn)return Ni(n);n instanceof yn||(n=Ti(n));var e=or(n.r),t=or(n.g),r=or(n.b),a=ar((.2225045*e+.7168786*t+.0606169*r)/$i),s,i;return e===t&&t===r?s=i=a:(s=ar((.4360747*e+.3850649*t+.1430804*r)/Mi),i=ar((.0139322*e+.0971045*t+.7141733*r)/Pi)),new Un(116*a-16,500*(s-a),200*(a-i),n.opacity)}function gm(n,e,t,r){return arguments.length===1?Li(n):new Un(n,e,t,r??1)}function Un(n,e,t,r){this.l=+n,this.a=+e,this.b=+t,this.opacity=+r}Qe(Un,gm,jt(me,{brighter(n){return new Un(this.l+_t*(n??1),this.a,this.b,this.opacity)},darker(n){return new Un(this.l-_t*(n??1),this.a,this.b,this.opacity)},rgb(){var n=(this.l+16)/116,e=isNaN(this.a)?n:n+this.a/500,t=isNaN(this.b)?n:n-this.b/200;return e=Mi*sr(e),n=$i*sr(n),t=Pi*sr(t),new yn(ir(3.1338561*e-1.6168667*n-.4906146*t),ir(-.9787684*e+1.9161415*n+.033454*t),ir(.0719453*e-.2289914*n+1.4052427*t),this.opacity)}}));function ar(n){return n>pm?Math.pow(n,1/3):n/Di+Ii}function sr(n){return n>Ce?n*n*n:Di*(n-Ii)}function ir(n){return 255*(n<=.0031308?12.92*n:1.055*Math.pow(n,1/2.4)-.055)}function or(n){return(n/=255)<=.04045?n/12.92:Math.pow((n+.055)/1.055,2.4)}function mm(n){if(n instanceof jn)return new jn(n.h,n.c,n.l,n.opacity);if(n instanceof Un||(n=Li(n)),n.a===0&&n.b===0)return new jn(NaN,0<n.l&&n.l<100?0:NaN,n.l,n.opacity);var e=Math.atan2(n.b,n.a)*fm;return new jn(e<0?e+360:e,Math.sqrt(n.a*n.a+n.b*n.b),n.l,n.opacity)}function Sr(n,e,t,r){return arguments.length===1?mm(n):new jn(n,e,t,r??1)}function jn(n,e,t,r){this.h=+n,this.c=+e,this.l=+t,this.opacity=+r}function Ni(n){if(isNaN(n.h))return new Un(n.l,0,0,n.opacity);var e=n.h*hm;return new Un(n.l,Math.cos(e)*n.c,Math.sin(e)*n.c,n.opacity)}Qe(jn,Sr,jt(me,{brighter(n){return new jn(this.h,this.c,this.l+_t*(n??1),this.opacity)},darker(n){return new jn(this.h,this.c,this.l-_t*(n??1),this.opacity)},rgb(){return Ni(this).rgb()}}));const Wt=n=>()=>n;function Ei(n,e){return function(t){return n+t*e}}function vm(n,e,t){return n=Math.pow(n,t),e=Math.pow(e,t)-n,t=1/t,function(r){return Math.pow(n+r*e,t)}}function _m(n,e){var t=e-n;return t?Ei(n,t>180||t<-180?t-360*Math.round(t/360):t):Wt(isNaN(n)?e:n)}function bm(n){return(n=+n)==1?Fe:function(e,t){return t-e?vm(e,t,n):Wt(isNaN(e)?t:e)}}function Fe(n,e){var t=e-n;return t?Ei(n,t):Wt(isNaN(n)?e:n)}const bt=function n(e){var t=bm(e);function r(a,s){var i=t((a=Tr(a)).r,(s=Tr(s)).r),o=t(a.g,s.g),l=t(a.b,s.b),c=Fe(a.opacity,s.opacity);return function(d){return a.r=i(d),a.g=o(d),a.b=l(d),a.opacity=c(d),a+""}}return r.gamma=n,r}(1);function ym(n,e){e||(e=[]);var t=n?Math.min(e.length,n.length):0,r=e.slice(),a;return function(s){for(a=0;a<t;++a)r[a]=n[a]*(1-s)+e[a]*s;return r}}function xm(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function km(n,e){var t=e?e.length:0,r=n?Math.min(t,n.length):0,a=new Array(r),s=new Array(t),i;for(i=0;i<r;++i)a[i]=Ra(n[i],e[i]);for(;i<t;++i)s[i]=e[i];return function(o){for(i=0;i<r;++i)s[i]=a[i](o);return s}}function wm(n,e){var t=new Date;return n=+n,e=+e,function(r){return t.setTime(n*(1-r)+e*r),t}}function Nn(n,e){return n=+n,e=+e,function(t){return n*(1-t)+e*t}}function Am(n,e){var t={},r={},a;(n===null||typeof n!="object")&&(n={}),(e===null||typeof e!="object")&&(e={});for(a in e)a in n?t[a]=Ra(n[a],e[a]):r[a]=e[a];return function(s){for(a in t)r[a]=t[a](s);return r}}var Mr=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,lr=new RegExp(Mr.source,"g");function Cm(n){return function(){return n}}function Tm(n){return function(e){return n(e)+""}}function Oi(n,e){var t=Mr.lastIndex=lr.lastIndex=0,r,a,s,i=-1,o=[],l=[];for(n=n+"",e=e+"";(r=Mr.exec(n))&&(a=lr.exec(e));)(s=a.index)>t&&(s=e.slice(t,s),o[i]?o[i]+=s:o[++i]=s),(r=r[0])===(a=a[0])?o[i]?o[i]+=a:o[++i]=a:(o[++i]=null,l.push({i,x:Nn(r,a)})),t=lr.lastIndex;return t<e.length&&(s=e.slice(t),o[i]?o[i]+=s:o[++i]=s),o.length<2?l[0]?Tm(l[0].x):Cm(e):(e=l.length,function(c){for(var d=0,p;d<e;++d)o[(p=l[d]).i]=p.x(c);return o.join("")})}function Ra(n,e){var t=typeof e,r;return e==null||t==="boolean"?Wt(e):(t==="number"?Nn:t==="string"?(r=de(e))?(e=r,bt):Oi:e instanceof de?bt:e instanceof Date?wm:xm(e)?ym:Array.isArray(e)?km:typeof e.valueOf!="function"&&typeof e.toString!="function"||isNaN(e)?Am:Nn)(n,e)}function Sm(n,e){return n=+n,e=+e,function(t){return Math.round(n*(1-t)+e*t)}}var bs=180/Math.PI,$r={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function Ri(n,e,t,r,a,s){var i,o,l;return(i=Math.sqrt(n*n+e*e))&&(n/=i,e/=i),(l=n*t+e*r)&&(t-=n*l,r-=e*l),(o=Math.sqrt(t*t+r*r))&&(t/=o,r/=o,l/=o),n*r<e*t&&(n=-n,e=-e,l=-l,i=-i),{translateX:a,translateY:s,rotate:Math.atan2(e,n)*bs,skewX:Math.atan(l)*bs,scaleX:i,scaleY:o}}var rt;function Mm(n){const e=new(typeof DOMMatrix=="function"?DOMMatrix:WebKitCSSMatrix)(n+"");return e.isIdentity?$r:Ri(e.a,e.b,e.c,e.d,e.e,e.f)}function $m(n){return n==null||(rt||(rt=document.createElementNS("http://www.w3.org/2000/svg","g")),rt.setAttribute("transform",n),!(n=rt.transform.baseVal.consolidate()))?$r:(n=n.matrix,Ri(n.a,n.b,n.c,n.d,n.e,n.f))}function Vi(n,e,t,r){function a(c){return c.length?c.pop()+" ":""}function s(c,d,p,u,h,v){if(c!==p||d!==u){var _=h.push("translate(",null,e,null,t);v.push({i:_-4,x:Nn(c,p)},{i:_-2,x:Nn(d,u)})}else(p||u)&&h.push("translate("+p+e+u+t)}function i(c,d,p,u){c!==d?(c-d>180?d+=360:d-c>180&&(c+=360),u.push({i:p.push(a(p)+"rotate(",null,r)-2,x:Nn(c,d)})):d&&p.push(a(p)+"rotate("+d+r)}function o(c,d,p,u){c!==d?u.push({i:p.push(a(p)+"skewX(",null,r)-2,x:Nn(c,d)}):d&&p.push(a(p)+"skewX("+d+r)}function l(c,d,p,u,h,v){if(c!==p||d!==u){var _=h.push(a(h)+"scale(",null,",",null,")");v.push({i:_-4,x:Nn(c,p)},{i:_-2,x:Nn(d,u)})}else(p!==1||u!==1)&&h.push(a(h)+"scale("+p+","+u+")")}return function(c,d){var p=[],u=[];return c=n(c),d=n(d),s(c.translateX,c.translateY,d.translateX,d.translateY,p,u),i(c.rotate,d.rotate,p,u),o(c.skewX,d.skewX,p,u),l(c.scaleX,c.scaleY,d.scaleX,d.scaleY,p,u),c=d=null,function(h){for(var v=-1,_=u.length,y;++v<_;)p[(y=u[v]).i]=y.x(h);return p.join("")}}}var Pm=Vi(Mm,"px, ","px)","deg)"),Im=Vi($m,", ",")",")");function Dm(n){return function(e,t){var r=n((e=Sr(e)).h,(t=Sr(t)).h),a=Fe(e.c,t.c),s=Fe(e.l,t.l),i=Fe(e.opacity,t.opacity);return function(o){return e.h=r(o),e.c=a(o),e.l=s(o),e.opacity=i(o),e+""}}}const Lx=Dm(_m);var Se=0,Ve=0,Ie=0,Bi=1e3,yt,Be,xt=0,he=0,Yt=0,je=typeof performance=="object"&&performance.now?performance:Date,zi=typeof window=="object"&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(n){setTimeout(n,17)};function Va(){return he||(zi(Lm),he=je.now()+Yt)}function Lm(){he=0}function kt(){this._call=this._time=this._next=null}kt.prototype=Ba.prototype={constructor:kt,restart:function(n,e,t){if(typeof n!="function")throw new TypeError("callback is not a function");t=(t==null?Va():+t)+(e==null?0:+e),!this._next&&Be!==this&&(Be?Be._next=this:yt=this,Be=this),this._call=n,this._time=t,Pr()},stop:function(){this._call&&(this._call=null,this._time=1/0,Pr())}};function Ba(n,e,t){var r=new kt;return r.restart(n,e,t),r}function Nm(){Va(),++Se;for(var n=yt,e;n;)(e=he-n._time)>=0&&n._call.call(void 0,e),n=n._next;--Se}function ys(){he=(xt=je.now())+Yt,Se=Ve=0;try{Nm()}finally{Se=0,Om(),he=0}}function Em(){var n=je.now(),e=n-xt;e>Bi&&(Yt-=e,xt=n)}function Om(){for(var n,e=yt,t,r=1/0;e;)e._call?(r>e._time&&(r=e._time),n=e,e=e._next):(t=e._next,e._next=null,e=n?n._next=t:yt=t);Be=n,Pr(r)}function Pr(n){if(!Se){Ve&&(Ve=clearTimeout(Ve));var e=n-he;e>24?(n<1/0&&(Ve=setTimeout(ys,n-je.now()-Yt)),Ie&&(Ie=clearInterval(Ie))):(Ie||(xt=je.now(),Ie=setInterval(Em,Bi)),Se=1,zi(ys))}}function xs(n,e,t){var r=new kt;return e=e==null?0:+e,r.restart(a=>{r.stop(),n(a+e)},e,t),r}var Rm=Ht("start","end","cancel","interrupt"),Vm=[],Fi=0,ks=1,Ir=2,ut=3,ws=4,Dr=5,dt=6;function Kt(n,e,t,r,a,s){var i=n.__transition;if(!i)n.__transition={};else if(t in i)return;Bm(n,t,{name:e,index:r,group:a,on:Rm,tween:Vm,time:s.time,delay:s.delay,duration:s.duration,ease:s.ease,timer:null,state:Fi})}function za(n,e){var t=Rn(n,e);if(t.state>Fi)throw new Error("too late; already scheduled");return t}function qn(n,e){var t=Rn(n,e);if(t.state>ut)throw new Error("too late; already running");return t}function Rn(n,e){var t=n.__transition;if(!t||!(t=t[e]))throw new Error("transition not found");return t}function Bm(n,e,t){var r=n.__transition,a;r[e]=t,t.timer=Ba(s,0,t.time);function s(c){t.state=ks,t.timer.restart(i,t.delay,t.time),t.delay<=c&&i(c-t.delay)}function i(c){var d,p,u,h;if(t.state!==ks)return l();for(d in r)if(h=r[d],h.name===t.name){if(h.state===ut)return xs(i);h.state===ws?(h.state=dt,h.timer.stop(),h.on.call("interrupt",n,n.__data__,h.index,h.group),delete r[d]):+d<e&&(h.state=dt,h.timer.stop(),h.on.call("cancel",n,n.__data__,h.index,h.group),delete r[d])}if(xs(function(){t.state===ut&&(t.state=ws,t.timer.restart(o,t.delay,t.time),o(c))}),t.state=Ir,t.on.call("start",n,n.__data__,t.index,t.group),t.state===Ir){for(t.state=ut,a=new Array(u=t.tween.length),d=0,p=-1;d<u;++d)(h=t.tween[d].value.call(n,n.__data__,t.index,t.group))&&(a[++p]=h);a.length=p+1}}function o(c){for(var d=c<t.duration?t.ease.call(null,c/t.duration):(t.timer.restart(l),t.state=Dr,1),p=-1,u=a.length;++p<u;)a[p].call(n,d);t.state===Dr&&(t.on.call("end",n,n.__data__,t.index,t.group),l())}function l(){t.state=dt,t.timer.stop(),delete r[e];for(var c in r)return;delete n.__transition}}function zm(n,e){var t=n.__transition,r,a,s=!0,i;if(t){e=e==null?null:e+"";for(i in t){if((r=t[i]).name!==e){s=!1;continue}a=r.state>Ir&&r.state<Dr,r.state=dt,r.timer.stop(),r.on.call(a?"interrupt":"cancel",n,n.__data__,r.index,r.group),delete t[i]}s&&delete n.__transition}}function Fm(n){return this.each(function(){zm(this,n)})}function Um(n,e){var t,r;return function(){var a=qn(this,n),s=a.tween;if(s!==t){r=t=s;for(var i=0,o=r.length;i<o;++i)if(r[i].name===e){r=r.slice(),r.splice(i,1);break}}a.tween=r}}function qm(n,e,t){var r,a;if(typeof t!="function")throw new Error;return function(){var s=qn(this,n),i=s.tween;if(i!==r){a=(r=i).slice();for(var o={name:e,value:t},l=0,c=a.length;l<c;++l)if(a[l].name===e){a[l]=o;break}l===c&&a.push(o)}s.tween=a}}function Hm(n,e){var t=this._id;if(n+="",arguments.length<2){for(var r=Rn(this.node(),t).tween,a=0,s=r.length,i;a<s;++a)if((i=r[a]).name===n)return i.value;return null}return this.each((e==null?Um:qm)(t,n,e))}function Fa(n,e,t){var r=n._id;return n.each(function(){var a=qn(this,r);(a.value||(a.value={}))[e]=t.apply(this,arguments)}),function(a){return Rn(a,r).value[e]}}function Ui(n,e){var t;return(typeof e=="number"?Nn:e instanceof de?bt:(t=de(e))?(e=t,bt):Oi)(n,e)}function Gm(n){return function(){this.removeAttribute(n)}}function jm(n){return function(){this.removeAttributeNS(n.space,n.local)}}function Wm(n,e,t){var r,a=t+"",s;return function(){var i=this.getAttribute(n);return i===a?null:i===r?s:s=e(r=i,t)}}function Ym(n,e,t){var r,a=t+"",s;return function(){var i=this.getAttributeNS(n.space,n.local);return i===a?null:i===r?s:s=e(r=i,t)}}function Km(n,e,t){var r,a,s;return function(){var i,o=t(this),l;return o==null?void this.removeAttribute(n):(i=this.getAttribute(n),l=o+"",i===l?null:i===r&&l===a?s:(a=l,s=e(r=i,o)))}}function Xm(n,e,t){var r,a,s;return function(){var i,o=t(this),l;return o==null?void this.removeAttributeNS(n.space,n.local):(i=this.getAttributeNS(n.space,n.local),l=o+"",i===l?null:i===r&&l===a?s:(a=l,s=e(r=i,o)))}}function Qm(n,e){var t=Gt(n),r=t==="transform"?Im:Ui;return this.attrTween(n,typeof e=="function"?(t.local?Xm:Km)(t,r,Fa(this,"attr."+n,e)):e==null?(t.local?jm:Gm)(t):(t.local?Ym:Wm)(t,r,e))}function Jm(n,e){return function(t){this.setAttribute(n,e.call(this,t))}}function Zm(n,e){return function(t){this.setAttributeNS(n.space,n.local,e.call(this,t))}}function n0(n,e){var t,r;function a(){var s=e.apply(this,arguments);return s!==r&&(t=(r=s)&&Zm(n,s)),t}return a._value=e,a}function e0(n,e){var t,r;function a(){var s=e.apply(this,arguments);return s!==r&&(t=(r=s)&&Jm(n,s)),t}return a._value=e,a}function t0(n,e){var t="attr."+n;if(arguments.length<2)return(t=this.tween(t))&&t._value;if(e==null)return this.tween(t,null);if(typeof e!="function")throw new Error;var r=Gt(n);return this.tween(t,(r.local?n0:e0)(r,e))}function r0(n,e){return function(){za(this,n).delay=+e.apply(this,arguments)}}function a0(n,e){return e=+e,function(){za(this,n).delay=e}}function s0(n){var e=this._id;return arguments.length?this.each((typeof n=="function"?r0:a0)(e,n)):Rn(this.node(),e).delay}function i0(n,e){return function(){qn(this,n).duration=+e.apply(this,arguments)}}function o0(n,e){return e=+e,function(){qn(this,n).duration=e}}function l0(n){var e=this._id;return arguments.length?this.each((typeof n=="function"?i0:o0)(e,n)):Rn(this.node(),e).duration}function c0(n,e){if(typeof e!="function")throw new Error;return function(){qn(this,n).ease=e}}function u0(n){var e=this._id;return arguments.length?this.each(c0(e,n)):Rn(this.node(),e).ease}function d0(n,e){return function(){var t=e.apply(this,arguments);if(typeof t!="function")throw new Error;qn(this,n).ease=t}}function h0(n){if(typeof n!="function")throw new Error;return this.each(d0(this._id,n))}function f0(n){typeof n!="function"&&(n=mi(n));for(var e=this._groups,t=e.length,r=new Array(t),a=0;a<t;++a)for(var s=e[a],i=s.length,o=r[a]=[],l,c=0;c<i;++c)(l=s[c])&&n.call(l,l.__data__,c,s)&&o.push(l);return new Kn(r,this._parents,this._name,this._id)}function p0(n){if(n._id!==this._id)throw new Error;for(var e=this._groups,t=n._groups,r=e.length,a=t.length,s=Math.min(r,a),i=new Array(r),o=0;o<s;++o)for(var l=e[o],c=t[o],d=l.length,p=i[o]=new Array(d),u,h=0;h<d;++h)(u=l[h]||c[h])&&(p[h]=u);for(;o<r;++o)i[o]=e[o];return new Kn(i,this._parents,this._name,this._id)}function g0(n){return(n+"").trim().split(/^|\s+/).every(function(e){var t=e.indexOf(".");return t>=0&&(e=e.slice(0,t)),!e||e==="start"})}function m0(n,e,t){var r,a,s=g0(e)?za:qn;return function(){var i=s(this,n),o=i.on;o!==r&&(a=(r=o).copy()).on(e,t),i.on=a}}function v0(n,e){var t=this._id;return arguments.length<2?Rn(this.node(),t).on.on(n):this.each(m0(t,n,e))}function _0(n){return function(){var e=this.parentNode;for(var t in this.__transition)if(+t!==n)return;e&&e.removeChild(this)}}function b0(){return this.on("end.remove",_0(this._id))}function y0(n){var e=this._name,t=this._id;typeof n!="function"&&(n=Ea(n));for(var r=this._groups,a=r.length,s=new Array(a),i=0;i<a;++i)for(var o=r[i],l=o.length,c=s[i]=new Array(l),d,p,u=0;u<l;++u)(d=o[u])&&(p=n.call(d,d.__data__,u,o))&&("__data__"in d&&(p.__data__=d.__data__),c[u]=p,Kt(c[u],e,t,u,c,Rn(d,t)));return new Kn(s,this._parents,e,t)}function x0(n){var e=this._name,t=this._id;typeof n!="function"&&(n=gi(n));for(var r=this._groups,a=r.length,s=[],i=[],o=0;o<a;++o)for(var l=r[o],c=l.length,d,p=0;p<c;++p)if(d=l[p]){for(var u=n.call(d,d.__data__,p,l),h,v=Rn(d,t),_=0,y=u.length;_<y;++_)(h=u[_])&&Kt(h,e,t,_,u,v);s.push(u),i.push(d)}return new Kn(s,i,e,t)}var k0=Xe.prototype.constructor;function w0(){return new k0(this._groups,this._parents)}function A0(n,e){var t,r,a;return function(){var s=Te(this,n),i=(this.style.removeProperty(n),Te(this,n));return s===i?null:s===t&&i===r?a:a=e(t=s,r=i)}}function qi(n){return function(){this.style.removeProperty(n)}}function C0(n,e,t){var r,a=t+"",s;return function(){var i=Te(this,n);return i===a?null:i===r?s:s=e(r=i,t)}}function T0(n,e,t){var r,a,s;return function(){var i=Te(this,n),o=t(this),l=o+"";return o==null&&(l=o=(this.style.removeProperty(n),Te(this,n))),i===l?null:i===r&&l===a?s:(a=l,s=e(r=i,o))}}function S0(n,e){var t,r,a,s="style."+e,i="end."+s,o;return function(){var l=qn(this,n),c=l.on,d=l.value[s]==null?o||(o=qi(e)):void 0;(c!==t||a!==d)&&(r=(t=c).copy()).on(i,a=d),l.on=r}}function M0(n,e,t){var r=(n+="")=="transform"?Pm:Ui;return e==null?this.styleTween(n,A0(n,r)).on("end.style."+n,qi(n)):typeof e=="function"?this.styleTween(n,T0(n,r,Fa(this,"style."+n,e))).each(S0(this._id,n)):this.styleTween(n,C0(n,r,e),t).on("end.style."+n,null)}function $0(n,e,t){return function(r){this.style.setProperty(n,e.call(this,r),t)}}function P0(n,e,t){var r,a;function s(){var i=e.apply(this,arguments);return i!==a&&(r=(a=i)&&$0(n,i,t)),r}return s._value=e,s}function I0(n,e,t){var r="style."+(n+="");if(arguments.length<2)return(r=this.tween(r))&&r._value;if(e==null)return this.tween(r,null);if(typeof e!="function")throw new Error;return this.tween(r,P0(n,e,t??""))}function D0(n){return function(){this.textContent=n}}function L0(n){return function(){var e=n(this);this.textContent=e??""}}function N0(n){return this.tween("text",typeof n=="function"?L0(Fa(this,"text",n)):D0(n==null?"":n+""))}function E0(n){return function(e){this.textContent=n.call(this,e)}}function O0(n){var e,t;function r(){var a=n.apply(this,arguments);return a!==t&&(e=(t=a)&&E0(a)),e}return r._value=n,r}function R0(n){var e="text";if(arguments.length<1)return(e=this.tween(e))&&e._value;if(n==null)return this.tween(e,null);if(typeof n!="function")throw new Error;return this.tween(e,O0(n))}function V0(){for(var n=this._name,e=this._id,t=Hi(),r=this._groups,a=r.length,s=0;s<a;++s)for(var i=r[s],o=i.length,l,c=0;c<o;++c)if(l=i[c]){var d=Rn(l,e);Kt(l,n,t,c,i,{time:d.time+d.delay+d.duration,delay:0,duration:d.duration,ease:d.ease})}return new Kn(r,this._parents,n,t)}function B0(){var n,e,t=this,r=t._id,a=t.size();return new Promise(function(s,i){var o={value:i},l={value:function(){--a===0&&s()}};t.each(function(){var c=qn(this,r),d=c.on;d!==n&&(e=(n=d).copy(),e._.cancel.push(o),e._.interrupt.push(o),e._.end.push(l)),c.on=e}),a===0&&s()})}var z0=0;function Kn(n,e,t,r){this._groups=n,this._parents=e,this._name=t,this._id=r}function Hi(){return++z0}var Hn=Xe.prototype;Kn.prototype={constructor:Kn,select:y0,selectAll:x0,selectChild:Hn.selectChild,selectChildren:Hn.selectChildren,filter:f0,merge:p0,selection:w0,transition:V0,call:Hn.call,nodes:Hn.nodes,node:Hn.node,size:Hn.size,empty:Hn.empty,each:Hn.each,on:v0,attr:Qm,attrTween:t0,style:M0,styleTween:I0,text:N0,textTween:R0,remove:b0,tween:Hm,delay:s0,duration:l0,ease:u0,easeVarying:h0,end:B0,[Symbol.iterator]:Hn[Symbol.iterator]};function F0(n){return((n*=2)<=1?n*n*n:(n-=2)*n*n+2)/2}var U0={time:null,delay:0,duration:250,ease:F0};function q0(n,e){for(var t;!(t=n.__transition)||!(t=t[e]);)if(!(n=n.parentNode))throw new Error(`transition ${e} not found`);return t}function H0(n){var e,t;n instanceof Kn?(e=n._id,n=n._name):(e=Hi(),(t=U0).time=Va(),n=n==null?null:n+"");for(var r=this._groups,a=r.length,s=0;s<a;++s)for(var i=r[s],o=i.length,l,c=0;c<o;++c)(l=i[c])&&Kt(l,n,e,c,i,t||q0(l,e));return new Kn(r,this._parents,n,e)}Xe.prototype.interrupt=Fm;Xe.prototype.transition=H0;const Lr=Math.PI,Nr=2*Lr,ie=1e-6,G0=Nr-ie;function Gi(n){this._+=n[0];for(let e=1,t=n.length;e<t;++e)this._+=arguments[e]+n[e]}function j0(n){let e=Math.floor(n);if(!(e>=0))throw new Error(`invalid digits: ${n}`);if(e>15)return Gi;const t=10**e;return function(r){this._+=r[0];for(let a=1,s=r.length;a<s;++a)this._+=Math.round(arguments[a]*t)/t+r[a]}}class W0{constructor(e){this._x0=this._y0=this._x1=this._y1=null,this._="",this._append=e==null?Gi:j0(e)}moveTo(e,t){this._append`M${this._x0=this._x1=+e},${this._y0=this._y1=+t}`}closePath(){this._x1!==null&&(this._x1=this._x0,this._y1=this._y0,this._append`Z`)}lineTo(e,t){this._append`L${this._x1=+e},${this._y1=+t}`}quadraticCurveTo(e,t,r,a){this._append`Q${+e},${+t},${this._x1=+r},${this._y1=+a}`}bezierCurveTo(e,t,r,a,s,i){this._append`C${+e},${+t},${+r},${+a},${this._x1=+s},${this._y1=+i}`}arcTo(e,t,r,a,s){if(e=+e,t=+t,r=+r,a=+a,s=+s,s<0)throw new Error(`negative radius: ${s}`);let i=this._x1,o=this._y1,l=r-e,c=a-t,d=i-e,p=o-t,u=d*d+p*p;if(this._x1===null)this._append`M${this._x1=e},${this._y1=t}`;else if(u>ie)if(!(Math.abs(p*l-c*d)>ie)||!s)this._append`L${this._x1=e},${this._y1=t}`;else{let h=r-i,v=a-o,_=l*l+c*c,y=h*h+v*v,w=Math.sqrt(_),A=Math.sqrt(u),I=s*Math.tan((Lr-Math.acos((_+u-y)/(2*w*A)))/2),b=I/A,T=I/w;Math.abs(b-1)>ie&&this._append`L${e+b*d},${t+b*p}`,this._append`A${s},${s},0,0,${+(p*h>d*v)},${this._x1=e+T*l},${this._y1=t+T*c}`}}arc(e,t,r,a,s,i){if(e=+e,t=+t,r=+r,i=!!i,r<0)throw new Error(`negative radius: ${r}`);let o=r*Math.cos(a),l=r*Math.sin(a),c=e+o,d=t+l,p=1^i,u=i?a-s:s-a;this._x1===null?this._append`M${c},${d}`:(Math.abs(this._x1-c)>ie||Math.abs(this._y1-d)>ie)&&this._append`L${c},${d}`,r&&(u<0&&(u=u%Nr+Nr),u>G0?this._append`A${r},${r},0,1,${p},${e-o},${t-l}A${r},${r},0,1,${p},${this._x1=c},${this._y1=d}`:u>ie&&this._append`A${r},${r},0,${+(u>=Lr)},${p},${this._x1=e+r*Math.cos(s)},${this._y1=t+r*Math.sin(s)}`)}rect(e,t,r,a){this._append`M${this._x0=this._x1=+e},${this._y0=this._y1=+t}h${r=+r}v${+a}h${-r}Z`}toString(){return this._}}function Y0(n,e){var t,r=1;n==null&&(n=0),e==null&&(e=0);function a(){var s,i=t.length,o,l=0,c=0;for(s=0;s<i;++s)o=t[s],l+=o.x,c+=o.y;for(l=(l/i-n)*r,c=(c/i-e)*r,s=0;s<i;++s)o=t[s],o.x-=l,o.y-=c}return a.initialize=function(s){t=s},a.x=function(s){return arguments.length?(n=+s,a):n},a.y=function(s){return arguments.length?(e=+s,a):e},a.strength=function(s){return arguments.length?(r=+s,a):r},a}function K0(n){const e=+this._x.call(null,n),t=+this._y.call(null,n);return ji(this.cover(e,t),e,t,n)}function ji(n,e,t,r){if(isNaN(e)||isNaN(t))return n;var a,s=n._root,i={data:r},o=n._x0,l=n._y0,c=n._x1,d=n._y1,p,u,h,v,_,y,w,A;if(!s)return n._root=i,n;for(;s.length;)if((_=e>=(p=(o+c)/2))?o=p:c=p,(y=t>=(u=(l+d)/2))?l=u:d=u,a=s,!(s=s[w=y<<1|_]))return a[w]=i,n;if(h=+n._x.call(null,s.data),v=+n._y.call(null,s.data),e===h&&t===v)return i.next=s,a?a[w]=i:n._root=i,n;do a=a?a[w]=new Array(4):n._root=new Array(4),(_=e>=(p=(o+c)/2))?o=p:c=p,(y=t>=(u=(l+d)/2))?l=u:d=u;while((w=y<<1|_)===(A=(v>=u)<<1|h>=p));return a[A]=s,a[w]=i,n}function X0(n){var e,t,r=n.length,a,s,i=new Array(r),o=new Array(r),l=1/0,c=1/0,d=-1/0,p=-1/0;for(t=0;t<r;++t)isNaN(a=+this._x.call(null,e=n[t]))||isNaN(s=+this._y.call(null,e))||(i[t]=a,o[t]=s,a<l&&(l=a),a>d&&(d=a),s<c&&(c=s),s>p&&(p=s));if(l>d||c>p)return this;for(this.cover(l,c).cover(d,p),t=0;t<r;++t)ji(this,i[t],o[t],n[t]);return this}function Q0(n,e){if(isNaN(n=+n)||isNaN(e=+e))return this;var t=this._x0,r=this._y0,a=this._x1,s=this._y1;if(isNaN(t))a=(t=Math.floor(n))+1,s=(r=Math.floor(e))+1;else{for(var i=a-t||1,o=this._root,l,c;t>n||n>=a||r>e||e>=s;)switch(c=(e<r)<<1|n<t,l=new Array(4),l[c]=o,o=l,i*=2,c){case 0:a=t+i,s=r+i;break;case 1:t=a-i,s=r+i;break;case 2:a=t+i,r=s-i;break;case 3:t=a-i,r=s-i;break}this._root&&this._root.length&&(this._root=o)}return this._x0=t,this._y0=r,this._x1=a,this._y1=s,this}function J0(){var n=[];return this.visit(function(e){if(!e.length)do n.push(e.data);while(e=e.next)}),n}function Z0(n){return arguments.length?this.cover(+n[0][0],+n[0][1]).cover(+n[1][0],+n[1][1]):isNaN(this._x0)?void 0:[[this._x0,this._y0],[this._x1,this._y1]]}function kn(n,e,t,r,a){this.node=n,this.x0=e,this.y0=t,this.x1=r,this.y1=a}function nv(n,e,t){var r,a=this._x0,s=this._y0,i,o,l,c,d=this._x1,p=this._y1,u=[],h=this._root,v,_;for(h&&u.push(new kn(h,a,s,d,p)),t==null?t=1/0:(a=n-t,s=e-t,d=n+t,p=e+t,t*=t);v=u.pop();)if(!(!(h=v.node)||(i=v.x0)>d||(o=v.y0)>p||(l=v.x1)<a||(c=v.y1)<s))if(h.length){var y=(i+l)/2,w=(o+c)/2;u.push(new kn(h[3],y,w,l,c),new kn(h[2],i,w,y,c),new kn(h[1],y,o,l,w),new kn(h[0],i,o,y,w)),(_=(e>=w)<<1|n>=y)&&(v=u[u.length-1],u[u.length-1]=u[u.length-1-_],u[u.length-1-_]=v)}else{var A=n-+this._x.call(null,h.data),I=e-+this._y.call(null,h.data),b=A*A+I*I;if(b<t){var T=Math.sqrt(t=b);a=n-T,s=e-T,d=n+T,p=e+T,r=h.data}}return r}function ev(n){if(isNaN(d=+this._x.call(null,n))||isNaN(p=+this._y.call(null,n)))return this;var e,t=this._root,r,a,s,i=this._x0,o=this._y0,l=this._x1,c=this._y1,d,p,u,h,v,_,y,w;if(!t)return this;if(t.length)for(;;){if((v=d>=(u=(i+l)/2))?i=u:l=u,(_=p>=(h=(o+c)/2))?o=h:c=h,e=t,!(t=t[y=_<<1|v]))return this;if(!t.length)break;(e[y+1&3]||e[y+2&3]||e[y+3&3])&&(r=e,w=y)}for(;t.data!==n;)if(a=t,!(t=t.next))return this;return(s=t.next)&&delete t.next,a?(s?a.next=s:delete a.next,this):e?(s?e[y]=s:delete e[y],(t=e[0]||e[1]||e[2]||e[3])&&t===(e[3]||e[2]||e[1]||e[0])&&!t.length&&(r?r[w]=t:this._root=t),this):(this._root=s,this)}function tv(n){for(var e=0,t=n.length;e<t;++e)this.remove(n[e]);return this}function rv(){return this._root}function av(){var n=0;return this.visit(function(e){if(!e.length)do++n;while(e=e.next)}),n}function sv(n){var e=[],t,r=this._root,a,s,i,o,l;for(r&&e.push(new kn(r,this._x0,this._y0,this._x1,this._y1));t=e.pop();)if(!n(r=t.node,s=t.x0,i=t.y0,o=t.x1,l=t.y1)&&r.length){var c=(s+o)/2,d=(i+l)/2;(a=r[3])&&e.push(new kn(a,c,d,o,l)),(a=r[2])&&e.push(new kn(a,s,d,c,l)),(a=r[1])&&e.push(new kn(a,c,i,o,d)),(a=r[0])&&e.push(new kn(a,s,i,c,d))}return this}function iv(n){var e=[],t=[],r;for(this._root&&e.push(new kn(this._root,this._x0,this._y0,this._x1,this._y1));r=e.pop();){var a=r.node;if(a.length){var s,i=r.x0,o=r.y0,l=r.x1,c=r.y1,d=(i+l)/2,p=(o+c)/2;(s=a[0])&&e.push(new kn(s,i,o,d,p)),(s=a[1])&&e.push(new kn(s,d,o,l,p)),(s=a[2])&&e.push(new kn(s,i,p,d,c)),(s=a[3])&&e.push(new kn(s,d,p,l,c))}t.push(r)}for(;r=t.pop();)n(r.node,r.x0,r.y0,r.x1,r.y1);return this}function ov(n){return n[0]}function lv(n){return arguments.length?(this._x=n,this):this._x}function cv(n){return n[1]}function uv(n){return arguments.length?(this._y=n,this):this._y}function Ua(n,e,t){var r=new qa(e??ov,t??cv,NaN,NaN,NaN,NaN);return n==null?r:r.addAll(n)}function qa(n,e,t,r,a,s){this._x=n,this._y=e,this._x0=t,this._y0=r,this._x1=a,this._y1=s,this._root=void 0}function As(n){for(var e={data:n.data},t=e;n=n.next;)t=t.next={data:n.data};return e}var An=Ua.prototype=qa.prototype;An.copy=function(){var n=new qa(this._x,this._y,this._x0,this._y0,this._x1,this._y1),e=this._root,t,r;if(!e)return n;if(!e.length)return n._root=As(e),n;for(t=[{source:e,target:n._root=new Array(4)}];e=t.pop();)for(var a=0;a<4;++a)(r=e.source[a])&&(r.length?t.push({source:r,target:e.target[a]=new Array(4)}):e.target[a]=As(r));return n};An.add=K0;An.addAll=X0;An.cover=Q0;An.data=J0;An.extent=Z0;An.find=nv;An.remove=ev;An.removeAll=tv;An.root=rv;An.size=av;An.visit=sv;An.visitAfter=iv;An.x=lv;An.y=uv;function wn(n){return function(){return n}}function ne(n){return(n()-.5)*1e-6}function dv(n){return n.x+n.vx}function hv(n){return n.y+n.vy}function fv(n){var e,t,r,a=1,s=1;typeof n!="function"&&(n=wn(n==null?1:+n));function i(){for(var c,d=e.length,p,u,h,v,_,y,w=0;w<s;++w)for(p=Ua(e,dv,hv).visitAfter(o),c=0;c<d;++c)u=e[c],_=t[u.index],y=_*_,h=u.x+u.vx,v=u.y+u.vy,p.visit(A);function A(I,b,T,k,E){var F=I.data,W=I.r,U=_+W;if(F){if(F.index>u.index){var L=h-F.x-F.vx,P=v-F.y-F.vy,D=L*L+P*P;D<U*U&&(L===0&&(L=ne(r),D+=L*L),P===0&&(P=ne(r),D+=P*P),D=(U-(D=Math.sqrt(D)))/D*a,u.vx+=(L*=D)*(U=(W*=W)/(y+W)),u.vy+=(P*=D)*U,F.vx-=L*(U=1-U),F.vy-=P*U)}return}return b>h+U||k<h-U||T>v+U||E<v-U}}function o(c){if(c.data)return c.r=t[c.data.index];for(var d=c.r=0;d<4;++d)c[d]&&c[d].r>c.r&&(c.r=c[d].r)}function l(){if(e){var c,d=e.length,p;for(t=new Array(d),c=0;c<d;++c)p=e[c],t[p.index]=+n(p,c,e)}}return i.initialize=function(c,d){e=c,r=d,l()},i.iterations=function(c){return arguments.length?(s=+c,i):s},i.strength=function(c){return arguments.length?(a=+c,i):a},i.radius=function(c){return arguments.length?(n=typeof c=="function"?c:wn(+c),l(),i):n},i}function pv(n){return n.index}function Cs(n,e){var t=n.get(e);if(!t)throw new Error("node not found: "+e);return t}function gv(n){var e=pv,t=p,r,a=wn(30),s,i,o,l,c,d=1;n==null&&(n=[]);function p(y){return 1/Math.min(o[y.source.index],o[y.target.index])}function u(y){for(var w=0,A=n.length;w<d;++w)for(var I=0,b,T,k,E,F,W,U;I<A;++I)b=n[I],T=b.source,k=b.target,E=k.x+k.vx-T.x-T.vx||ne(c),F=k.y+k.vy-T.y-T.vy||ne(c),W=Math.sqrt(E*E+F*F),W=(W-s[I])/W*y*r[I],E*=W,F*=W,k.vx-=E*(U=l[I]),k.vy-=F*U,T.vx+=E*(U=1-U),T.vy+=F*U}function h(){if(i){var y,w=i.length,A=n.length,I=new Map(i.map((T,k)=>[e(T,k,i),T])),b;for(y=0,o=new Array(w);y<A;++y)b=n[y],b.index=y,typeof b.source!="object"&&(b.source=Cs(I,b.source)),typeof b.target!="object"&&(b.target=Cs(I,b.target)),o[b.source.index]=(o[b.source.index]||0)+1,o[b.target.index]=(o[b.target.index]||0)+1;for(y=0,l=new Array(A);y<A;++y)b=n[y],l[y]=o[b.source.index]/(o[b.source.index]+o[b.target.index]);r=new Array(A),v(),s=new Array(A),_()}}function v(){if(i)for(var y=0,w=n.length;y<w;++y)r[y]=+t(n[y],y,n)}function _(){if(i)for(var y=0,w=n.length;y<w;++y)s[y]=+a(n[y],y,n)}return u.initialize=function(y,w){i=y,c=w,h()},u.links=function(y){return arguments.length?(n=y,h(),u):n},u.id=function(y){return arguments.length?(e=y,u):e},u.iterations=function(y){return arguments.length?(d=+y,u):d},u.strength=function(y){return arguments.length?(t=typeof y=="function"?y:wn(+y),v(),u):t},u.distance=function(y){return arguments.length?(a=typeof y=="function"?y:wn(+y),_(),u):a},u}const mv=1664525,vv=1013904223,Ts=4294967296;function _v(){let n=1;return()=>(n=(mv*n+vv)%Ts)/Ts}function bv(n){return n.x}function yv(n){return n.y}var xv=10,kv=Math.PI*(3-Math.sqrt(5));function wv(n){var e,t=1,r=.001,a=1-Math.pow(r,1/300),s=0,i=.6,o=new Map,l=Ba(p),c=Ht("tick","end"),d=_v();n==null&&(n=[]);function p(){u(),c.call("tick",e),t<r&&(l.stop(),c.call("end",e))}function u(_){var y,w=n.length,A;_===void 0&&(_=1);for(var I=0;I<_;++I)for(t+=(s-t)*a,o.forEach(function(b){b(t)}),y=0;y<w;++y)A=n[y],A.fx==null?A.x+=A.vx*=i:(A.x=A.fx,A.vx=0),A.fy==null?A.y+=A.vy*=i:(A.y=A.fy,A.vy=0);return e}function h(){for(var _=0,y=n.length,w;_<y;++_){if(w=n[_],w.index=_,w.fx!=null&&(w.x=w.fx),w.fy!=null&&(w.y=w.fy),isNaN(w.x)||isNaN(w.y)){var A=xv*Math.sqrt(.5+_),I=_*kv;w.x=A*Math.cos(I),w.y=A*Math.sin(I)}(isNaN(w.vx)||isNaN(w.vy))&&(w.vx=w.vy=0)}}function v(_){return _.initialize&&_.initialize(n,d),_}return h(),e={tick:u,restart:function(){return l.restart(p),e},stop:function(){return l.stop(),e},nodes:function(_){return arguments.length?(n=_,h(),o.forEach(v),e):n},alpha:function(_){return arguments.length?(t=+_,e):t},alphaMin:function(_){return arguments.length?(r=+_,e):r},alphaDecay:function(_){return arguments.length?(a=+_,e):+a},alphaTarget:function(_){return arguments.length?(s=+_,e):s},velocityDecay:function(_){return arguments.length?(i=1-_,e):1-i},randomSource:function(_){return arguments.length?(d=_,o.forEach(v),e):d},force:function(_,y){return arguments.length>1?(y==null?o.delete(_):o.set(_,v(y)),e):o.get(_)},find:function(_,y,w){var A=0,I=n.length,b,T,k,E,F;for(w==null?w=1/0:w*=w,A=0;A<I;++A)E=n[A],b=_-E.x,T=y-E.y,k=b*b+T*T,k<w&&(F=E,w=k);return F},on:function(_,y){return arguments.length>1?(c.on(_,y),e):c.on(_)}}}function Av(){var n,e,t,r,a=wn(-30),s,i=1,o=1/0,l=.81;function c(h){var v,_=n.length,y=Ua(n,bv,yv).visitAfter(p);for(r=h,v=0;v<_;++v)e=n[v],y.visit(u)}function d(){if(n){var h,v=n.length,_;for(s=new Array(v),h=0;h<v;++h)_=n[h],s[_.index]=+a(_,h,n)}}function p(h){var v=0,_,y,w=0,A,I,b;if(h.length){for(A=I=b=0;b<4;++b)(_=h[b])&&(y=Math.abs(_.value))&&(v+=_.value,w+=y,A+=y*_.x,I+=y*_.y);h.x=A/w,h.y=I/w}else{_=h,_.x=_.data.x,_.y=_.data.y;do v+=s[_.data.index];while(_=_.next)}h.value=v}function u(h,v,_,y){if(!h.value)return!0;var w=h.x-e.x,A=h.y-e.y,I=y-v,b=w*w+A*A;if(I*I/l<b)return b<o&&(w===0&&(w=ne(t),b+=w*w),A===0&&(A=ne(t),b+=A*A),b<i&&(b=Math.sqrt(i*b)),e.vx+=w*h.value*r/b,e.vy+=A*h.value*r/b),!0;if(h.length||b>=o)return;(h.data!==e||h.next)&&(w===0&&(w=ne(t),b+=w*w),A===0&&(A=ne(t),b+=A*A),b<i&&(b=Math.sqrt(i*b)));do h.data!==e&&(I=s[h.data.index]*r/b,e.vx+=w*I,e.vy+=A*I);while(h=h.next)}return c.initialize=function(h,v){n=h,t=v,d()},c.strength=function(h){return arguments.length?(a=typeof h=="function"?h:wn(+h),d(),c):a},c.distanceMin=function(h){return arguments.length?(i=h*h,c):Math.sqrt(i)},c.distanceMax=function(h){return arguments.length?(o=h*h,c):Math.sqrt(o)},c.theta=function(h){return arguments.length?(l=h*h,c):Math.sqrt(l)},c}function Cv(n){var e=wn(.1),t,r,a;typeof n!="function"&&(n=wn(n==null?0:+n));function s(o){for(var l=0,c=t.length,d;l<c;++l)d=t[l],d.vx+=(a[l]-d.x)*r[l]*o}function i(){if(t){var o,l=t.length;for(r=new Array(l),a=new Array(l),o=0;o<l;++o)r[o]=isNaN(a[o]=+n(t[o],o,t))?0:+e(t[o],o,t)}}return s.initialize=function(o){t=o,i()},s.strength=function(o){return arguments.length?(e=typeof o=="function"?o:wn(+o),i(),s):e},s.x=function(o){return arguments.length?(n=typeof o=="function"?o:wn(+o),i(),s):n},s}function Tv(n){var e=wn(.1),t,r,a;typeof n!="function"&&(n=wn(n==null?0:+n));function s(o){for(var l=0,c=t.length,d;l<c;++l)d=t[l],d.vy+=(a[l]-d.y)*r[l]*o}function i(){if(t){var o,l=t.length;for(r=new Array(l),a=new Array(l),o=0;o<l;++o)r[o]=isNaN(a[o]=+n(t[o],o,t))?0:+e(t[o],o,t)}}return s.initialize=function(o){t=o,i()},s.strength=function(o){return arguments.length?(e=typeof o=="function"?o:wn(+o),i(),s):e},s.y=function(o){return arguments.length?(n=typeof o=="function"?o:wn(+o),i(),s):n},s}function Sv(n){return Math.abs(n=Math.round(n))>=1e21?n.toLocaleString("en").replace(/,/g,""):n.toString(10)}function wt(n,e){if(!isFinite(n)||n===0)return null;var t=(n=e?n.toExponential(e-1):n.toExponential()).indexOf("e"),r=n.slice(0,t);return[r.length>1?r[0]+r.slice(2):r,+n.slice(t+1)]}function Me(n){return n=wt(Math.abs(n)),n?n[1]:NaN}function Mv(n,e){return function(t,r){for(var a=t.length,s=[],i=0,o=n[0],l=0;a>0&&o>0&&(l+o+1>r&&(o=Math.max(1,r-l)),s.push(t.substring(a-=o,a+o)),!((l+=o+1)>r));)o=n[i=(i+1)%n.length];return s.reverse().join(e)}}function $v(n){return function(e){return e.replace(/[0-9]/g,function(t){return n[+t]})}}var Pv=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;function At(n){if(!(e=Pv.exec(n)))throw new Error("invalid format: "+n);var e;return new Ha({fill:e[1],align:e[2],sign:e[3],symbol:e[4],zero:e[5],width:e[6],comma:e[7],precision:e[8]&&e[8].slice(1),trim:e[9],type:e[10]})}At.prototype=Ha.prototype;function Ha(n){this.fill=n.fill===void 0?" ":n.fill+"",this.align=n.align===void 0?">":n.align+"",this.sign=n.sign===void 0?"-":n.sign+"",this.symbol=n.symbol===void 0?"":n.symbol+"",this.zero=!!n.zero,this.width=n.width===void 0?void 0:+n.width,this.comma=!!n.comma,this.precision=n.precision===void 0?void 0:+n.precision,this.trim=!!n.trim,this.type=n.type===void 0?"":n.type+""}Ha.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(this.width===void 0?"":Math.max(1,this.width|0))+(this.comma?",":"")+(this.precision===void 0?"":"."+Math.max(0,this.precision|0))+(this.trim?"~":"")+this.type};function Iv(n){n:for(var e=n.length,t=1,r=-1,a;t<e;++t)switch(n[t]){case".":r=a=t;break;case"0":r===0&&(r=t),a=t;break;default:if(!+n[t])break n;r>0&&(r=0);break}return r>0?n.slice(0,r)+n.slice(a+1):n}var Ct;function Dv(n,e){var t=wt(n,e);if(!t)return Ct=void 0,n.toPrecision(e);var r=t[0],a=t[1],s=a-(Ct=Math.max(-8,Math.min(8,Math.floor(a/3)))*3)+1,i=r.length;return s===i?r:s>i?r+new Array(s-i+1).join("0"):s>0?r.slice(0,s)+"."+r.slice(s):"0."+new Array(1-s).join("0")+wt(n,Math.max(0,e+s-1))[0]}function Ss(n,e){var t=wt(n,e);if(!t)return n+"";var r=t[0],a=t[1];return a<0?"0."+new Array(-a).join("0")+r:r.length>a+1?r.slice(0,a+1)+"."+r.slice(a+1):r+new Array(a-r.length+2).join("0")}const Ms={"%":(n,e)=>(n*100).toFixed(e),b:n=>Math.round(n).toString(2),c:n=>n+"",d:Sv,e:(n,e)=>n.toExponential(e),f:(n,e)=>n.toFixed(e),g:(n,e)=>n.toPrecision(e),o:n=>Math.round(n).toString(8),p:(n,e)=>Ss(n*100,e),r:Ss,s:Dv,X:n=>Math.round(n).toString(16).toUpperCase(),x:n=>Math.round(n).toString(16)};function $s(n){return n}var Ps=Array.prototype.map,Is=["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];function Lv(n){var e=n.grouping===void 0||n.thousands===void 0?$s:Mv(Ps.call(n.grouping,Number),n.thousands+""),t=n.currency===void 0?"":n.currency[0]+"",r=n.currency===void 0?"":n.currency[1]+"",a=n.decimal===void 0?".":n.decimal+"",s=n.numerals===void 0?$s:$v(Ps.call(n.numerals,String)),i=n.percent===void 0?"%":n.percent+"",o=n.minus===void 0?"−":n.minus+"",l=n.nan===void 0?"NaN":n.nan+"";function c(p,u){p=At(p);var h=p.fill,v=p.align,_=p.sign,y=p.symbol,w=p.zero,A=p.width,I=p.comma,b=p.precision,T=p.trim,k=p.type;k==="n"?(I=!0,k="g"):Ms[k]||(b===void 0&&(b=12),T=!0,k="g"),(w||h==="0"&&v==="=")&&(w=!0,h="0",v="=");var E=(u&&u.prefix!==void 0?u.prefix:"")+(y==="$"?t:y==="#"&&/[boxX]/.test(k)?"0"+k.toLowerCase():""),F=(y==="$"?r:/[%p]/.test(k)?i:"")+(u&&u.suffix!==void 0?u.suffix:""),W=Ms[k],U=/[defgprs%]/.test(k);b=b===void 0?6:/[gprs]/.test(k)?Math.max(1,Math.min(21,b)):Math.max(0,Math.min(20,b));function L(P){var D=E,V=F,tn,nn,Y;if(k==="c")V=W(P)+V,P="";else{P=+P;var ln=P<0||1/P<0;if(P=isNaN(P)?l:W(Math.abs(P),b),T&&(P=Iv(P)),ln&&+P==0&&_!=="+"&&(ln=!1),D=(ln?_==="("?_:o:_==="-"||_==="("?"":_)+D,V=(k==="s"&&!isNaN(P)&&Ct!==void 0?Is[8+Ct/3]:"")+V+(ln&&_==="("?")":""),U){for(tn=-1,nn=P.length;++tn<nn;)if(Y=P.charCodeAt(tn),48>Y||Y>57){V=(Y===46?a+P.slice(tn+1):P.slice(tn))+V,P=P.slice(0,tn);break}}}I&&!w&&(P=e(P,1/0));var hn=D.length+P.length+V.length,dn=hn<A?new Array(A-hn+1).join(h):"";switch(I&&w&&(P=e(dn+P,dn.length?A-V.length:1/0),dn=""),v){case"<":P=D+P+V+dn;break;case"=":P=D+dn+P+V;break;case"^":P=dn.slice(0,hn=dn.length>>1)+D+P+V+dn.slice(hn);break;default:P=dn+D+P+V;break}return s(P)}return L.toString=function(){return p+""},L}function d(p,u){var h=Math.max(-8,Math.min(8,Math.floor(Me(u)/3)))*3,v=Math.pow(10,-h),_=c((p=At(p),p.type="f",p),{suffix:Is[8+h/3]});return function(y){return _(v*y)}}return{format:c,formatPrefix:d}}var at,Wi,Yi;Nv({thousands:",",grouping:[3],currency:["$",""]});function Nv(n){return at=Lv(n),Wi=at.format,Yi=at.formatPrefix,at}function Ev(n){return Math.max(0,-Me(Math.abs(n)))}function Ov(n,e){return Math.max(0,Math.max(-8,Math.min(8,Math.floor(Me(e)/3)))*3-Me(Math.abs(n)))}function Rv(n,e){return n=Math.abs(n),e=Math.abs(e)-n,Math.max(0,Me(e)-Me(n))+1}function Vv(n){var e=0,t=n.children,r=t&&t.length;if(!r)e=1;else for(;--r>=0;)e+=t[r].value;n.value=e}function Bv(){return this.eachAfter(Vv)}function zv(n,e){let t=-1;for(const r of this)n.call(e,r,++t,this);return this}function Fv(n,e){for(var t=this,r=[t],a,s,i=-1;t=r.pop();)if(n.call(e,t,++i,this),a=t.children)for(s=a.length-1;s>=0;--s)r.push(a[s]);return this}function Uv(n,e){for(var t=this,r=[t],a=[],s,i,o,l=-1;t=r.pop();)if(a.push(t),s=t.children)for(i=0,o=s.length;i<o;++i)r.push(s[i]);for(;t=a.pop();)n.call(e,t,++l,this);return this}function qv(n,e){let t=-1;for(const r of this)if(n.call(e,r,++t,this))return r}function Hv(n){return this.eachAfter(function(e){for(var t=+n(e.data)||0,r=e.children,a=r&&r.length;--a>=0;)t+=r[a].value;e.value=t})}function Gv(n){return this.eachBefore(function(e){e.children&&e.children.sort(n)})}function jv(n){for(var e=this,t=Wv(e,n),r=[e];e!==t;)e=e.parent,r.push(e);for(var a=r.length;n!==t;)r.splice(a,0,n),n=n.parent;return r}function Wv(n,e){if(n===e)return n;var t=n.ancestors(),r=e.ancestors(),a=null;for(n=t.pop(),e=r.pop();n===e;)a=n,n=t.pop(),e=r.pop();return a}function Yv(){for(var n=this,e=[n];n=n.parent;)e.push(n);return e}function Kv(){return Array.from(this)}function Xv(){var n=[];return this.eachBefore(function(e){e.children||n.push(e)}),n}function Qv(){var n=this,e=[];return n.each(function(t){t!==n&&e.push({source:t.parent,target:t})}),e}function*Jv(){var n=this,e,t=[n],r,a,s;do for(e=t.reverse(),t=[];n=e.pop();)if(yield n,r=n.children)for(a=0,s=r.length;a<s;++a)t.push(r[a]);while(t.length)}function Ki(n,e){n instanceof Map?(n=[void 0,n],e===void 0&&(e=e2)):e===void 0&&(e=n2);for(var t=new Tt(n),r,a=[t],s,i,o,l;r=a.pop();)if((i=e(r.data))&&(l=(i=Array.from(i)).length))for(r.children=i,o=l-1;o>=0;--o)a.push(s=i[o]=new Tt(i[o])),s.parent=r,s.depth=r.depth+1;return t.eachBefore(r2)}function Zv(){return Ki(this).eachBefore(t2)}function n2(n){return n.children}function e2(n){return Array.isArray(n)?n[1]:null}function t2(n){n.data.value!==void 0&&(n.value=n.data.value),n.data=n.data.data}function r2(n){var e=0;do n.height=e;while((n=n.parent)&&n.height<++e)}function Tt(n){this.data=n,this.depth=this.height=0,this.parent=null}Tt.prototype=Ki.prototype={constructor:Tt,count:Bv,each:zv,eachAfter:Uv,eachBefore:Fv,find:qv,sum:Hv,sort:Gv,path:jv,ancestors:Yv,descendants:Kv,leaves:Xv,links:Qv,copy:Zv,[Symbol.iterator]:Jv};function a2(n){if(typeof n!="function")throw new Error;return n}function De(){return 0}function Le(n){return function(){return n}}function s2(n){n.x0=Math.round(n.x0),n.y0=Math.round(n.y0),n.x1=Math.round(n.x1),n.y1=Math.round(n.y1)}function i2(n,e,t,r,a){for(var s=n.children,i,o=-1,l=s.length,c=n.value&&(r-e)/n.value;++o<l;)i=s[o],i.y0=t,i.y1=a,i.x0=e,i.x1=e+=i.value*c}function o2(n,e,t,r,a){for(var s=n.children,i,o=-1,l=s.length,c=n.value&&(a-t)/n.value;++o<l;)i=s[o],i.x0=e,i.x1=r,i.y0=t,i.y1=t+=i.value*c}var l2=(1+Math.sqrt(5))/2;function c2(n,e,t,r,a,s){for(var i=[],o=e.children,l,c,d=0,p=0,u=o.length,h,v,_=e.value,y,w,A,I,b,T,k;d<u;){h=a-t,v=s-r;do y=o[p++].value;while(!y&&p<u);for(w=A=y,T=Math.max(v/h,h/v)/(_*n),k=y*y*T,b=Math.max(A/k,k/w);p<u;++p){if(y+=c=o[p].value,c<w&&(w=c),c>A&&(A=c),k=y*y*T,I=Math.max(A/k,k/w),I>b){y-=c;break}b=I}i.push(l={value:y,dice:h<v,children:o.slice(d,p)}),l.dice?i2(l,t,r,a,_?r+=v*y/_:s):o2(l,t,r,_?t+=h*y/_:a,s),_-=y,d=p}return i}const u2=function n(e){function t(r,a,s,i,o){c2(e,r,a,s,i,o)}return t.ratio=function(r){return n((r=+r)>1?r:1)},t}(l2);function Nx(){var n=u2,e=!1,t=1,r=1,a=[0],s=De,i=De,o=De,l=De,c=De;function d(u){return u.x0=u.y0=0,u.x1=t,u.y1=r,u.eachBefore(p),a=[0],e&&u.eachBefore(s2),u}function p(u){var h=a[u.depth],v=u.x0+h,_=u.y0+h,y=u.x1-h,w=u.y1-h;y<v&&(v=y=(v+y)/2),w<_&&(_=w=(_+w)/2),u.x0=v,u.y0=_,u.x1=y,u.y1=w,u.children&&(h=a[u.depth+1]=s(u)/2,v+=c(u)-h,_+=i(u)-h,y-=o(u)-h,w-=l(u)-h,y<v&&(v=y=(v+y)/2),w<_&&(_=w=(_+w)/2),n(u,v,_,y,w))}return d.round=function(u){return arguments.length?(e=!!u,d):e},d.size=function(u){return arguments.length?(t=+u[0],r=+u[1],d):[t,r]},d.tile=function(u){return arguments.length?(n=a2(u),d):n},d.padding=function(u){return arguments.length?d.paddingInner(u).paddingOuter(u):d.paddingInner()},d.paddingInner=function(u){return arguments.length?(s=typeof u=="function"?u:Le(+u),d):s},d.paddingOuter=function(u){return arguments.length?d.paddingTop(u).paddingRight(u).paddingBottom(u).paddingLeft(u):d.paddingTop()},d.paddingTop=function(u){return arguments.length?(i=typeof u=="function"?u:Le(+u),d):i},d.paddingRight=function(u){return arguments.length?(o=typeof u=="function"?u:Le(+u),d):o},d.paddingBottom=function(u){return arguments.length?(l=typeof u=="function"?u:Le(+u),d):l},d.paddingLeft=function(u){return arguments.length?(c=typeof u=="function"?u:Le(+u),d):c},d}function Xt(n,e){switch(arguments.length){case 0:break;case 1:this.range(n);break;default:this.range(e).domain(n);break}return this}const Ds=Symbol("implicit");function Xi(){var n=new ss,e=[],t=[],r=Ds;function a(s){let i=n.get(s);if(i===void 0){if(r!==Ds)return r;n.set(s,i=e.push(s)-1)}return t[i%t.length]}return a.domain=function(s){if(!arguments.length)return e.slice();e=[],n=new ss;for(const i of s)n.has(i)||n.set(i,e.push(i)-1);return a},a.range=function(s){return arguments.length?(t=Array.from(s),a):t.slice()},a.unknown=function(s){return arguments.length?(r=s,a):r},a.copy=function(){return Xi(e,t).unknown(r)},Xt.apply(a,arguments),a}function d2(){var n=Xi().unknown(void 0),e=n.domain,t=n.range,r=0,a=1,s,i,o=!1,l=0,c=0,d=.5;delete n.unknown;function p(){var u=e().length,h=a<r,v=h?a:r,_=h?r:a;s=(_-v)/Math.max(1,u-l+c*2),o&&(s=Math.floor(s)),v+=(_-v-s*(u-l))*d,i=s*(1-l),o&&(v=Math.round(v),i=Math.round(i));var y=ap(u).map(function(w){return v+s*w});return t(h?y.reverse():y)}return n.domain=function(u){return arguments.length?(e(u),p()):e()},n.range=function(u){return arguments.length?([r,a]=u,r=+r,a=+a,p()):[r,a]},n.rangeRound=function(u){return[r,a]=u,r=+r,a=+a,o=!0,p()},n.bandwidth=function(){return i},n.step=function(){return s},n.round=function(u){return arguments.length?(o=!!u,p()):o},n.padding=function(u){return arguments.length?(l=Math.min(1,c=+u),p()):l},n.paddingInner=function(u){return arguments.length?(l=Math.min(1,u),p()):l},n.paddingOuter=function(u){return arguments.length?(c=+u,p()):c},n.align=function(u){return arguments.length?(d=Math.max(0,Math.min(1,u)),p()):d},n.copy=function(){return d2(e(),[r,a]).round(o).paddingInner(l).paddingOuter(c).align(d)},Xt.apply(p(),arguments)}function h2(n){return function(){return n}}function f2(n){return+n}var Ls=[0,1];function ye(n){return n}function Er(n,e){return(e-=n=+n)?function(t){return(t-n)/e}:h2(isNaN(e)?NaN:.5)}function p2(n,e){var t;return n>e&&(t=n,n=e,e=t),function(r){return Math.max(n,Math.min(e,r))}}function g2(n,e,t){var r=n[0],a=n[1],s=e[0],i=e[1];return a<r?(r=Er(a,r),s=t(i,s)):(r=Er(r,a),s=t(s,i)),function(o){return s(r(o))}}function m2(n,e,t){var r=Math.min(n.length,e.length)-1,a=new Array(r),s=new Array(r),i=-1;for(n[r]<n[0]&&(n=n.slice().reverse(),e=e.slice().reverse());++i<r;)a[i]=Er(n[i],n[i+1]),s[i]=t(e[i],e[i+1]);return function(o){var l=Xf(n,o,1,r)-1;return s[l](a[l](o))}}function Qi(n,e){return e.domain(n.domain()).range(n.range()).interpolate(n.interpolate()).clamp(n.clamp()).unknown(n.unknown())}function v2(){var n=Ls,e=Ls,t=Ra,r,a,s,i=ye,o,l,c;function d(){var u=Math.min(n.length,e.length);return i!==ye&&(i=p2(n[0],n[u-1])),o=u>2?m2:g2,l=c=null,p}function p(u){return u==null||isNaN(u=+u)?s:(l||(l=o(n.map(r),e,t)))(r(i(u)))}return p.invert=function(u){return i(a((c||(c=o(e,n.map(r),Nn)))(u)))},p.domain=function(u){return arguments.length?(n=Array.from(u,f2),d()):n.slice()},p.range=function(u){return arguments.length?(e=Array.from(u),d()):e.slice()},p.rangeRound=function(u){return e=Array.from(u),t=Sm,d()},p.clamp=function(u){return arguments.length?(i=u?!0:ye,d()):i!==ye},p.interpolate=function(u){return arguments.length?(t=u,d()):t},p.unknown=function(u){return arguments.length?(s=u,p):s},function(u,h){return r=u,a=h,d()}}function Ji(){return v2()(ye,ye)}function _2(n,e,t,r){var a=kr(n,e,t),s;switch(r=At(r??",f"),r.type){case"s":{var i=Math.max(Math.abs(n),Math.abs(e));return r.precision==null&&!isNaN(s=Ov(a,i))&&(r.precision=s),Yi(r,i)}case"":case"e":case"g":case"p":case"r":{r.precision==null&&!isNaN(s=Rv(a,Math.max(Math.abs(n),Math.abs(e))))&&(r.precision=s-(r.type==="e"));break}case"f":case"%":{r.precision==null&&!isNaN(s=Ev(a))&&(r.precision=s-(r.type==="%")*2);break}}return Wi(r)}function b2(n){var e=n.domain;return n.ticks=function(t){var r=e();return rp(r[0],r[r.length-1],t??10)},n.tickFormat=function(t,r){var a=e();return _2(a[0],a[a.length-1],t??10,r)},n.nice=function(t){t==null&&(t=10);var r=e(),a=0,s=r.length-1,i=r[a],o=r[s],l,c,d=10;for(o<i&&(c=i,i=o,o=c,c=a,a=s,s=c);d-- >0;){if(c=xr(i,o,t),c===l)return r[a]=i,r[s]=o,e(r);if(c>0)i=Math.floor(i/c)*c,o=Math.ceil(o/c)*c;else if(c<0)i=Math.ceil(i*c)/c,o=Math.floor(o*c)/c;else break;l=c}return n},n}function y2(){var n=Ji();return n.copy=function(){return Qi(n,y2())},Xt.apply(n,arguments),b2(n)}function x2(n,e){n=n.slice();var t=0,r=n.length-1,a=n[t],s=n[r],i;return s<a&&(i=t,t=r,r=i,i=a,a=s,s=i),n[t]=e.floor(a),n[r]=e.ceil(s),n}const cr=new Date,ur=new Date;function gn(n,e,t,r){function a(s){return n(s=arguments.length===0?new Date:new Date(+s)),s}return a.floor=s=>(n(s=new Date(+s)),s),a.ceil=s=>(n(s=new Date(s-1)),e(s,1),n(s),s),a.round=s=>{const i=a(s),o=a.ceil(s);return s-i<o-s?i:o},a.offset=(s,i)=>(e(s=new Date(+s),i==null?1:Math.floor(i)),s),a.range=(s,i,o)=>{const l=[];if(s=a.ceil(s),o=o==null?1:Math.floor(o),!(s<i)||!(o>0))return l;let c;do l.push(c=new Date(+s)),e(s,o),n(s);while(c<s&&s<i);return l},a.filter=s=>gn(i=>{if(i>=i)for(;n(i),!s(i);)i.setTime(i-1)},(i,o)=>{if(i>=i)if(o<0)for(;++o<=0;)for(;e(i,-1),!s(i););else for(;--o>=0;)for(;e(i,1),!s(i););}),t&&(a.count=(s,i)=>(cr.setTime(+s),ur.setTime(+i),n(cr),n(ur),Math.floor(t(cr,ur))),a.every=s=>(s=Math.floor(s),!isFinite(s)||!(s>0)?null:s>1?a.filter(r?i=>r(i)%s===0:i=>a.count(0,i)%s===0):a)),a}const St=gn(()=>{},(n,e)=>{n.setTime(+n+e)},(n,e)=>e-n);St.every=n=>(n=Math.floor(n),!isFinite(n)||!(n>0)?null:n>1?gn(e=>{e.setTime(Math.floor(e/n)*n)},(e,t)=>{e.setTime(+e+t*n)},(e,t)=>(t-e)/n):St);St.range;const Wn=1e3,In=Wn*60,Yn=In*60,Xn=Yn*24,Ga=Xn*7,Ns=Xn*30,dr=Xn*365,xe=gn(n=>{n.setTime(n-n.getMilliseconds())},(n,e)=>{n.setTime(+n+e*Wn)},(n,e)=>(e-n)/Wn,n=>n.getUTCSeconds());xe.range;const ja=gn(n=>{n.setTime(n-n.getMilliseconds()-n.getSeconds()*Wn)},(n,e)=>{n.setTime(+n+e*In)},(n,e)=>(e-n)/In,n=>n.getMinutes());ja.range;const k2=gn(n=>{n.setUTCSeconds(0,0)},(n,e)=>{n.setTime(+n+e*In)},(n,e)=>(e-n)/In,n=>n.getUTCMinutes());k2.range;const Wa=gn(n=>{n.setTime(n-n.getMilliseconds()-n.getSeconds()*Wn-n.getMinutes()*In)},(n,e)=>{n.setTime(+n+e*Yn)},(n,e)=>(e-n)/Yn,n=>n.getHours());Wa.range;const w2=gn(n=>{n.setUTCMinutes(0,0,0)},(n,e)=>{n.setTime(+n+e*Yn)},(n,e)=>(e-n)/Yn,n=>n.getUTCHours());w2.range;const Je=gn(n=>n.setHours(0,0,0,0),(n,e)=>n.setDate(n.getDate()+e),(n,e)=>(e-n-(e.getTimezoneOffset()-n.getTimezoneOffset())*In)/Xn,n=>n.getDate()-1);Je.range;const Ya=gn(n=>{n.setUTCHours(0,0,0,0)},(n,e)=>{n.setUTCDate(n.getUTCDate()+e)},(n,e)=>(e-n)/Xn,n=>n.getUTCDate()-1);Ya.range;const A2=gn(n=>{n.setUTCHours(0,0,0,0)},(n,e)=>{n.setUTCDate(n.getUTCDate()+e)},(n,e)=>(e-n)/Xn,n=>Math.floor(n/Xn));A2.range;function ve(n){return gn(e=>{e.setDate(e.getDate()-(e.getDay()+7-n)%7),e.setHours(0,0,0,0)},(e,t)=>{e.setDate(e.getDate()+t*7)},(e,t)=>(t-e-(t.getTimezoneOffset()-e.getTimezoneOffset())*In)/Ga)}const Qt=ve(0),Mt=ve(1),C2=ve(2),T2=ve(3),$e=ve(4),S2=ve(5),M2=ve(6);Qt.range;Mt.range;C2.range;T2.range;$e.range;S2.range;M2.range;function _e(n){return gn(e=>{e.setUTCDate(e.getUTCDate()-(e.getUTCDay()+7-n)%7),e.setUTCHours(0,0,0,0)},(e,t)=>{e.setUTCDate(e.getUTCDate()+t*7)},(e,t)=>(t-e)/Ga)}const Zi=_e(0),$t=_e(1),$2=_e(2),P2=_e(3),Pe=_e(4),I2=_e(5),D2=_e(6);Zi.range;$t.range;$2.range;P2.range;Pe.range;I2.range;D2.range;const Ka=gn(n=>{n.setDate(1),n.setHours(0,0,0,0)},(n,e)=>{n.setMonth(n.getMonth()+e)},(n,e)=>e.getMonth()-n.getMonth()+(e.getFullYear()-n.getFullYear())*12,n=>n.getMonth());Ka.range;const L2=gn(n=>{n.setUTCDate(1),n.setUTCHours(0,0,0,0)},(n,e)=>{n.setUTCMonth(n.getUTCMonth()+e)},(n,e)=>e.getUTCMonth()-n.getUTCMonth()+(e.getUTCFullYear()-n.getUTCFullYear())*12,n=>n.getUTCMonth());L2.range;const Qn=gn(n=>{n.setMonth(0,1),n.setHours(0,0,0,0)},(n,e)=>{n.setFullYear(n.getFullYear()+e)},(n,e)=>e.getFullYear()-n.getFullYear(),n=>n.getFullYear());Qn.every=n=>!isFinite(n=Math.floor(n))||!(n>0)?null:gn(e=>{e.setFullYear(Math.floor(e.getFullYear()/n)*n),e.setMonth(0,1),e.setHours(0,0,0,0)},(e,t)=>{e.setFullYear(e.getFullYear()+t*n)});Qn.range;const fe=gn(n=>{n.setUTCMonth(0,1),n.setUTCHours(0,0,0,0)},(n,e)=>{n.setUTCFullYear(n.getUTCFullYear()+e)},(n,e)=>e.getUTCFullYear()-n.getUTCFullYear(),n=>n.getUTCFullYear());fe.every=n=>!isFinite(n=Math.floor(n))||!(n>0)?null:gn(e=>{e.setUTCFullYear(Math.floor(e.getUTCFullYear()/n)*n),e.setUTCMonth(0,1),e.setUTCHours(0,0,0,0)},(e,t)=>{e.setUTCFullYear(e.getUTCFullYear()+t*n)});fe.range;function N2(n,e,t,r,a,s){const i=[[xe,1,Wn],[xe,5,5*Wn],[xe,15,15*Wn],[xe,30,30*Wn],[s,1,In],[s,5,5*In],[s,15,15*In],[s,30,30*In],[a,1,Yn],[a,3,3*Yn],[a,6,6*Yn],[a,12,12*Yn],[r,1,Xn],[r,2,2*Xn],[t,1,Ga],[e,1,Ns],[e,3,3*Ns],[n,1,dr]];function o(c,d,p){const u=d<c;u&&([c,d]=[d,c]);const h=p&&typeof p.range=="function"?p:l(c,d,p),v=h?h.range(c,+d+1):[];return u?v.reverse():v}function l(c,d,p){const u=Math.abs(d-c)/p,h=Na(([,,y])=>y).right(i,u);if(h===i.length)return n.every(kr(c/dr,d/dr,p));if(h===0)return St.every(Math.max(kr(c,d,p),1));const[v,_]=i[u/i[h-1][2]<i[h][2]/u?h-1:h];return v.every(_)}return[o,l]}const[E2,O2]=N2(Qn,Ka,Qt,Je,Wa,ja);function hr(n){if(0<=n.y&&n.y<100){var e=new Date(-1,n.m,n.d,n.H,n.M,n.S,n.L);return e.setFullYear(n.y),e}return new Date(n.y,n.m,n.d,n.H,n.M,n.S,n.L)}function fr(n){if(0<=n.y&&n.y<100){var e=new Date(Date.UTC(-1,n.m,n.d,n.H,n.M,n.S,n.L));return e.setUTCFullYear(n.y),e}return new Date(Date.UTC(n.y,n.m,n.d,n.H,n.M,n.S,n.L))}function Ne(n,e,t){return{y:n,m:e,d:t,H:0,M:0,S:0,L:0}}function R2(n){var e=n.dateTime,t=n.date,r=n.time,a=n.periods,s=n.days,i=n.shortDays,o=n.months,l=n.shortMonths,c=Ee(a),d=Oe(a),p=Ee(s),u=Oe(s),h=Ee(i),v=Oe(i),_=Ee(o),y=Oe(o),w=Ee(l),A=Oe(l),I={a:Y,A:ln,b:hn,B:dn,c:null,d:zs,e:zs,f:i_,g:m_,G:__,H:r_,I:a_,j:s_,L:no,m:o_,M:l_,p:Tn,q:xn,Q:qs,s:Hs,S:c_,u:u_,U:d_,V:h_,w:f_,W:p_,x:null,X:null,y:g_,Y:v_,Z:b_,"%":Us},b={a:cn,A:Ln,b:Sn,B:M,c:null,d:Fs,e:Fs,f:w_,g:L_,G:E_,H:y_,I:x_,j:k_,L:to,m:A_,M:C_,p:z,q:j,Q:qs,s:Hs,S:T_,u:S_,U:M_,V:$_,w:P_,W:I_,x:null,X:null,y:D_,Y:N_,Z:O_,"%":Us},T={a:U,A:L,b:P,B:D,c:V,d:Vs,e:Vs,f:Z2,g:Rs,G:Os,H:Bs,I:Bs,j:K2,L:J2,m:Y2,M:X2,p:W,q:W2,Q:e_,s:t_,S:Q2,u:U2,U:q2,V:H2,w:F2,W:G2,x:tn,X:nn,y:Rs,Y:Os,Z:j2,"%":n_};I.x=k(t,I),I.X=k(r,I),I.c=k(e,I),b.x=k(t,b),b.X=k(r,b),b.c=k(e,b);function k(O,K){return function(J){var $=[],an=-1,un=0,Mn=O.length,$n,ae,ts;for(J instanceof Date||(J=new Date(+J));++an<Mn;)O.charCodeAt(an)===37&&($.push(O.slice(un,an)),(ae=Es[$n=O.charAt(++an)])!=null?$n=O.charAt(++an):ae=$n==="e"?" ":"0",(ts=K[$n])&&($n=ts(J,ae)),$.push($n),un=an+1);return $.push(O.slice(un,an)),$.join("")}}function E(O,K){return function(J){var $=Ne(1900,void 0,1),an=F($,O,J+="",0),un,Mn;if(an!=J.length)return null;if("Q"in $)return new Date($.Q);if("s"in $)return new Date($.s*1e3+("L"in $?$.L:0));if(K&&!("Z"in $)&&($.Z=0),"p"in $&&($.H=$.H%12+$.p*12),$.m===void 0&&($.m="q"in $?$.q:0),"V"in $){if($.V<1||$.V>53)return null;"w"in $||($.w=1),"Z"in $?(un=fr(Ne($.y,0,1)),Mn=un.getUTCDay(),un=Mn>4||Mn===0?$t.ceil(un):$t(un),un=Ya.offset(un,($.V-1)*7),$.y=un.getUTCFullYear(),$.m=un.getUTCMonth(),$.d=un.getUTCDate()+($.w+6)%7):(un=hr(Ne($.y,0,1)),Mn=un.getDay(),un=Mn>4||Mn===0?Mt.ceil(un):Mt(un),un=Je.offset(un,($.V-1)*7),$.y=un.getFullYear(),$.m=un.getMonth(),$.d=un.getDate()+($.w+6)%7)}else("W"in $||"U"in $)&&("w"in $||($.w="u"in $?$.u%7:"W"in $?1:0),Mn="Z"in $?fr(Ne($.y,0,1)).getUTCDay():hr(Ne($.y,0,1)).getDay(),$.m=0,$.d="W"in $?($.w+6)%7+$.W*7-(Mn+5)%7:$.w+$.U*7-(Mn+6)%7);return"Z"in $?($.H+=$.Z/100|0,$.M+=$.Z%100,fr($)):hr($)}}function F(O,K,J,$){for(var an=0,un=K.length,Mn=J.length,$n,ae;an<un;){if($>=Mn)return-1;if($n=K.charCodeAt(an++),$n===37){if($n=K.charAt(an++),ae=T[$n in Es?K.charAt(an++):$n],!ae||($=ae(O,J,$))<0)return-1}else if($n!=J.charCodeAt($++))return-1}return $}function W(O,K,J){var $=c.exec(K.slice(J));return $?(O.p=d.get($[0].toLowerCase()),J+$[0].length):-1}function U(O,K,J){var $=h.exec(K.slice(J));return $?(O.w=v.get($[0].toLowerCase()),J+$[0].length):-1}function L(O,K,J){var $=p.exec(K.slice(J));return $?(O.w=u.get($[0].toLowerCase()),J+$[0].length):-1}function P(O,K,J){var $=w.exec(K.slice(J));return $?(O.m=A.get($[0].toLowerCase()),J+$[0].length):-1}function D(O,K,J){var $=_.exec(K.slice(J));return $?(O.m=y.get($[0].toLowerCase()),J+$[0].length):-1}function V(O,K,J){return F(O,e,K,J)}function tn(O,K,J){return F(O,t,K,J)}function nn(O,K,J){return F(O,r,K,J)}function Y(O){return i[O.getDay()]}function ln(O){return s[O.getDay()]}function hn(O){return l[O.getMonth()]}function dn(O){return o[O.getMonth()]}function Tn(O){return a[+(O.getHours()>=12)]}function xn(O){return 1+~~(O.getMonth()/3)}function cn(O){return i[O.getUTCDay()]}function Ln(O){return s[O.getUTCDay()]}function Sn(O){return l[O.getUTCMonth()]}function M(O){return o[O.getUTCMonth()]}function z(O){return a[+(O.getUTCHours()>=12)]}function j(O){return 1+~~(O.getUTCMonth()/3)}return{format:function(O){var K=k(O+="",I);return K.toString=function(){return O},K},parse:function(O){var K=E(O+="",!1);return K.toString=function(){return O},K},utcFormat:function(O){var K=k(O+="",b);return K.toString=function(){return O},K},utcParse:function(O){var K=E(O+="",!0);return K.toString=function(){return O},K}}}var Es={"-":"",_:" ",0:"0"},vn=/^\s*\d+/,V2=/^%/,B2=/[\\^$*+?|[\]().{}]/g;function on(n,e,t){var r=n<0?"-":"",a=(r?-n:n)+"",s=a.length;return r+(s<t?new Array(t-s+1).join(e)+a:a)}function z2(n){return n.replace(B2,"\\$&")}function Ee(n){return new RegExp("^(?:"+n.map(z2).join("|")+")","i")}function Oe(n){return new Map(n.map((e,t)=>[e.toLowerCase(),t]))}function F2(n,e,t){var r=vn.exec(e.slice(t,t+1));return r?(n.w=+r[0],t+r[0].length):-1}function U2(n,e,t){var r=vn.exec(e.slice(t,t+1));return r?(n.u=+r[0],t+r[0].length):-1}function q2(n,e,t){var r=vn.exec(e.slice(t,t+2));return r?(n.U=+r[0],t+r[0].length):-1}function H2(n,e,t){var r=vn.exec(e.slice(t,t+2));return r?(n.V=+r[0],t+r[0].length):-1}function G2(n,e,t){var r=vn.exec(e.slice(t,t+2));return r?(n.W=+r[0],t+r[0].length):-1}function Os(n,e,t){var r=vn.exec(e.slice(t,t+4));return r?(n.y=+r[0],t+r[0].length):-1}function Rs(n,e,t){var r=vn.exec(e.slice(t,t+2));return r?(n.y=+r[0]+(+r[0]>68?1900:2e3),t+r[0].length):-1}function j2(n,e,t){var r=/^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(e.slice(t,t+6));return r?(n.Z=r[1]?0:-(r[2]+(r[3]||"00")),t+r[0].length):-1}function W2(n,e,t){var r=vn.exec(e.slice(t,t+1));return r?(n.q=r[0]*3-3,t+r[0].length):-1}function Y2(n,e,t){var r=vn.exec(e.slice(t,t+2));return r?(n.m=r[0]-1,t+r[0].length):-1}function Vs(n,e,t){var r=vn.exec(e.slice(t,t+2));return r?(n.d=+r[0],t+r[0].length):-1}function K2(n,e,t){var r=vn.exec(e.slice(t,t+3));return r?(n.m=0,n.d=+r[0],t+r[0].length):-1}function Bs(n,e,t){var r=vn.exec(e.slice(t,t+2));return r?(n.H=+r[0],t+r[0].length):-1}function X2(n,e,t){var r=vn.exec(e.slice(t,t+2));return r?(n.M=+r[0],t+r[0].length):-1}function Q2(n,e,t){var r=vn.exec(e.slice(t,t+2));return r?(n.S=+r[0],t+r[0].length):-1}function J2(n,e,t){var r=vn.exec(e.slice(t,t+3));return r?(n.L=+r[0],t+r[0].length):-1}function Z2(n,e,t){var r=vn.exec(e.slice(t,t+6));return r?(n.L=Math.floor(r[0]/1e3),t+r[0].length):-1}function n_(n,e,t){var r=V2.exec(e.slice(t,t+1));return r?t+r[0].length:-1}function e_(n,e,t){var r=vn.exec(e.slice(t));return r?(n.Q=+r[0],t+r[0].length):-1}function t_(n,e,t){var r=vn.exec(e.slice(t));return r?(n.s=+r[0],t+r[0].length):-1}function zs(n,e){return on(n.getDate(),e,2)}function r_(n,e){return on(n.getHours(),e,2)}function a_(n,e){return on(n.getHours()%12||12,e,2)}function s_(n,e){return on(1+Je.count(Qn(n),n),e,3)}function no(n,e){return on(n.getMilliseconds(),e,3)}function i_(n,e){return no(n,e)+"000"}function o_(n,e){return on(n.getMonth()+1,e,2)}function l_(n,e){return on(n.getMinutes(),e,2)}function c_(n,e){return on(n.getSeconds(),e,2)}function u_(n){var e=n.getDay();return e===0?7:e}function d_(n,e){return on(Qt.count(Qn(n)-1,n),e,2)}function eo(n){var e=n.getDay();return e>=4||e===0?$e(n):$e.ceil(n)}function h_(n,e){return n=eo(n),on($e.count(Qn(n),n)+(Qn(n).getDay()===4),e,2)}function f_(n){return n.getDay()}function p_(n,e){return on(Mt.count(Qn(n)-1,n),e,2)}function g_(n,e){return on(n.getFullYear()%100,e,2)}function m_(n,e){return n=eo(n),on(n.getFullYear()%100,e,2)}function v_(n,e){return on(n.getFullYear()%1e4,e,4)}function __(n,e){var t=n.getDay();return n=t>=4||t===0?$e(n):$e.ceil(n),on(n.getFullYear()%1e4,e,4)}function b_(n){var e=n.getTimezoneOffset();return(e>0?"-":(e*=-1,"+"))+on(e/60|0,"0",2)+on(e%60,"0",2)}function Fs(n,e){return on(n.getUTCDate(),e,2)}function y_(n,e){return on(n.getUTCHours(),e,2)}function x_(n,e){return on(n.getUTCHours()%12||12,e,2)}function k_(n,e){return on(1+Ya.count(fe(n),n),e,3)}function to(n,e){return on(n.getUTCMilliseconds(),e,3)}function w_(n,e){return to(n,e)+"000"}function A_(n,e){return on(n.getUTCMonth()+1,e,2)}function C_(n,e){return on(n.getUTCMinutes(),e,2)}function T_(n,e){return on(n.getUTCSeconds(),e,2)}function S_(n){var e=n.getUTCDay();return e===0?7:e}function M_(n,e){return on(Zi.count(fe(n)-1,n),e,2)}function ro(n){var e=n.getUTCDay();return e>=4||e===0?Pe(n):Pe.ceil(n)}function $_(n,e){return n=ro(n),on(Pe.count(fe(n),n)+(fe(n).getUTCDay()===4),e,2)}function P_(n){return n.getUTCDay()}function I_(n,e){return on($t.count(fe(n)-1,n),e,2)}function D_(n,e){return on(n.getUTCFullYear()%100,e,2)}function L_(n,e){return n=ro(n),on(n.getUTCFullYear()%100,e,2)}function N_(n,e){return on(n.getUTCFullYear()%1e4,e,4)}function E_(n,e){var t=n.getUTCDay();return n=t>=4||t===0?Pe(n):Pe.ceil(n),on(n.getUTCFullYear()%1e4,e,4)}function O_(){return"+0000"}function Us(){return"%"}function qs(n){return+n}function Hs(n){return Math.floor(+n/1e3)}var be,ao;R_({dateTime:"%x, %X",date:"%-m/%-d/%Y",time:"%-I:%M:%S %p",periods:["AM","PM"],days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],shortDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],shortMonths:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]});function R_(n){return be=R2(n),ao=be.format,be.parse,be.utcFormat,be.utcParse,be}function V_(n){return new Date(n)}function B_(n){return n instanceof Date?+n:+new Date(+n)}function so(n,e,t,r,a,s,i,o,l,c){var d=Ji(),p=d.invert,u=d.domain,h=c(".%L"),v=c(":%S"),_=c("%I:%M"),y=c("%I %p"),w=c("%a %d"),A=c("%b %d"),I=c("%B"),b=c("%Y");function T(k){return(l(k)<k?h:o(k)<k?v:i(k)<k?_:s(k)<k?y:r(k)<k?a(k)<k?w:A:t(k)<k?I:b)(k)}return d.invert=function(k){return new Date(p(k))},d.domain=function(k){return arguments.length?u(Array.from(k,B_)):u().map(V_)},d.ticks=function(k){var E=u();return n(E[0],E[E.length-1],k??10)},d.tickFormat=function(k,E){return E==null?T:c(E)},d.nice=function(k){var E=u();return(!k||typeof k.range!="function")&&(k=e(E[0],E[E.length-1],k??10)),k?u(x2(E,k)):d},d.copy=function(){return Qi(d,so(n,e,t,r,a,s,i,o,l,c))},d}function Ex(){return Xt.apply(so(E2,O2,Qn,Ka,Qt,Je,Wa,ja,xe,ao).domain([new Date(2e3,0,1),new Date(2e3,0,2)]),arguments)}function z_(n){for(var e=n.length/6|0,t=new Array(e),r=0;r<e;)t[r]="#"+n.slice(r*6,++r*6);return t}const Ox=z_("4e79a7f28e2ce1575976b7b259a14fedc949af7aa1ff9da79c755fbab0ab");function fn(n){return function(){return n}}const Gs=Math.abs,_n=Math.atan2,se=Math.cos,F_=Math.max,pr=Math.min,Vn=Math.sin,ke=Math.sqrt,bn=1e-12,We=Math.PI,Pt=We/2,ht=2*We;function U_(n){return n>1?0:n<-1?We:Math.acos(n)}function js(n){return n>=1?Pt:n<=-1?-Pt:Math.asin(n)}function io(n){let e=3;return n.digits=function(t){if(!arguments.length)return e;if(t==null)e=null;else{const r=Math.floor(t);if(!(r>=0))throw new RangeError(`invalid digits: ${t}`);e=r}return n},()=>new W0(e)}function q_(n){return n.innerRadius}function H_(n){return n.outerRadius}function G_(n){return n.startAngle}function j_(n){return n.endAngle}function W_(n){return n&&n.padAngle}function Y_(n,e,t,r,a,s,i,o){var l=t-n,c=r-e,d=i-a,p=o-s,u=p*l-d*c;if(!(u*u<bn))return u=(d*(e-s)-p*(n-a))/u,[n+u*l,e+u*c]}function st(n,e,t,r,a,s,i){var o=n-t,l=e-r,c=(i?s:-s)/ke(o*o+l*l),d=c*l,p=-c*o,u=n+d,h=e+p,v=t+d,_=r+p,y=(u+v)/2,w=(h+_)/2,A=v-u,I=_-h,b=A*A+I*I,T=a-s,k=u*_-v*h,E=(I<0?-1:1)*ke(F_(0,T*T*b-k*k)),F=(k*I-A*E)/b,W=(-k*A-I*E)/b,U=(k*I+A*E)/b,L=(-k*A+I*E)/b,P=F-y,D=W-w,V=U-y,tn=L-w;return P*P+D*D>V*V+tn*tn&&(F=U,W=L),{cx:F,cy:W,x01:-d,y01:-p,x11:F*(a/T-1),y11:W*(a/T-1)}}function Rx(){var n=q_,e=H_,t=fn(0),r=null,a=G_,s=j_,i=W_,o=null,l=io(c);function c(){var d,p,u=+n.apply(this,arguments),h=+e.apply(this,arguments),v=a.apply(this,arguments)-Pt,_=s.apply(this,arguments)-Pt,y=Gs(_-v),w=_>v;if(o||(o=d=l()),h<u&&(p=h,h=u,u=p),!(h>bn))o.moveTo(0,0);else if(y>ht-bn)o.moveTo(h*se(v),h*Vn(v)),o.arc(0,0,h,v,_,!w),u>bn&&(o.moveTo(u*se(_),u*Vn(_)),o.arc(0,0,u,_,v,w));else{var A=v,I=_,b=v,T=_,k=y,E=y,F=i.apply(this,arguments)/2,W=F>bn&&(r?+r.apply(this,arguments):ke(u*u+h*h)),U=pr(Gs(h-u)/2,+t.apply(this,arguments)),L=U,P=U,D,V;if(W>bn){var tn=js(W/u*Vn(F)),nn=js(W/h*Vn(F));(k-=tn*2)>bn?(tn*=w?1:-1,b+=tn,T-=tn):(k=0,b=T=(v+_)/2),(E-=nn*2)>bn?(nn*=w?1:-1,A+=nn,I-=nn):(E=0,A=I=(v+_)/2)}var Y=h*se(A),ln=h*Vn(A),hn=u*se(T),dn=u*Vn(T);if(U>bn){var Tn=h*se(I),xn=h*Vn(I),cn=u*se(b),Ln=u*Vn(b),Sn;if(y<We)if(Sn=Y_(Y,ln,cn,Ln,Tn,xn,hn,dn)){var M=Y-Sn[0],z=ln-Sn[1],j=Tn-Sn[0],O=xn-Sn[1],K=1/Vn(U_((M*j+z*O)/(ke(M*M+z*z)*ke(j*j+O*O)))/2),J=ke(Sn[0]*Sn[0]+Sn[1]*Sn[1]);L=pr(U,(u-J)/(K-1)),P=pr(U,(h-J)/(K+1))}else L=P=0}E>bn?P>bn?(D=st(cn,Ln,Y,ln,h,P,w),V=st(Tn,xn,hn,dn,h,P,w),o.moveTo(D.cx+D.x01,D.cy+D.y01),P<U?o.arc(D.cx,D.cy,P,_n(D.y01,D.x01),_n(V.y01,V.x01),!w):(o.arc(D.cx,D.cy,P,_n(D.y01,D.x01),_n(D.y11,D.x11),!w),o.arc(0,0,h,_n(D.cy+D.y11,D.cx+D.x11),_n(V.cy+V.y11,V.cx+V.x11),!w),o.arc(V.cx,V.cy,P,_n(V.y11,V.x11),_n(V.y01,V.x01),!w))):(o.moveTo(Y,ln),o.arc(0,0,h,A,I,!w)):o.moveTo(Y,ln),!(u>bn)||!(k>bn)?o.lineTo(hn,dn):L>bn?(D=st(hn,dn,Tn,xn,u,-L,w),V=st(Y,ln,cn,Ln,u,-L,w),o.lineTo(D.cx+D.x01,D.cy+D.y01),L<U?o.arc(D.cx,D.cy,L,_n(D.y01,D.x01),_n(V.y01,V.x01),!w):(o.arc(D.cx,D.cy,L,_n(D.y01,D.x01),_n(D.y11,D.x11),!w),o.arc(0,0,u,_n(D.cy+D.y11,D.cx+D.x11),_n(V.cy+V.y11,V.cx+V.x11),w),o.arc(V.cx,V.cy,L,_n(V.y11,V.x11),_n(V.y01,V.x01),!w))):o.arc(0,0,u,T,b,w)}if(o.closePath(),d)return o=null,d+""||null}return c.centroid=function(){var d=(+n.apply(this,arguments)+ +e.apply(this,arguments))/2,p=(+a.apply(this,arguments)+ +s.apply(this,arguments))/2-We/2;return[se(p)*d,Vn(p)*d]},c.innerRadius=function(d){return arguments.length?(n=typeof d=="function"?d:fn(+d),c):n},c.outerRadius=function(d){return arguments.length?(e=typeof d=="function"?d:fn(+d),c):e},c.cornerRadius=function(d){return arguments.length?(t=typeof d=="function"?d:fn(+d),c):t},c.padRadius=function(d){return arguments.length?(r=d==null?null:typeof d=="function"?d:fn(+d),c):r},c.startAngle=function(d){return arguments.length?(a=typeof d=="function"?d:fn(+d),c):a},c.endAngle=function(d){return arguments.length?(s=typeof d=="function"?d:fn(+d),c):s},c.padAngle=function(d){return arguments.length?(i=typeof d=="function"?d:fn(+d),c):i},c.context=function(d){return arguments.length?(o=d??null,c):o},c}function oo(n){return typeof n=="object"&&"length"in n?n:Array.from(n)}function lo(n){this._context=n}lo.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(n,e){switch(n=+n,e=+e,this._point){case 0:this._point=1,this._line?this._context.lineTo(n,e):this._context.moveTo(n,e);break;case 1:this._point=2;default:this._context.lineTo(n,e);break}}};function K_(n){return new lo(n)}function X_(n){return n[0]}function Q_(n){return n[1]}function Vx(n,e){var t=fn(!0),r=null,a=K_,s=null,i=io(o);n=typeof n=="function"?n:n===void 0?X_:fn(n),e=typeof e=="function"?e:e===void 0?Q_:fn(e);function o(l){var c,d=(l=oo(l)).length,p,u=!1,h;for(r==null&&(s=a(h=i())),c=0;c<=d;++c)!(c<d&&t(p=l[c],c,l))===u&&((u=!u)?s.lineStart():s.lineEnd()),u&&s.point(+n(p,c,l),+e(p,c,l));if(h)return s=null,h+""||null}return o.x=function(l){return arguments.length?(n=typeof l=="function"?l:fn(+l),o):n},o.y=function(l){return arguments.length?(e=typeof l=="function"?l:fn(+l),o):e},o.defined=function(l){return arguments.length?(t=typeof l=="function"?l:fn(!!l),o):t},o.curve=function(l){return arguments.length?(a=l,r!=null&&(s=a(r)),o):a},o.context=function(l){return arguments.length?(l==null?r=s=null:s=a(r=l),o):r},o}function J_(n,e){return e<n?-1:e>n?1:e>=n?0:NaN}function Z_(n){return n}function Bx(){var n=Z_,e=J_,t=null,r=fn(0),a=fn(ht),s=fn(0);function i(o){var l,c=(o=oo(o)).length,d,p,u=0,h=new Array(c),v=new Array(c),_=+r.apply(this,arguments),y=Math.min(ht,Math.max(-ht,a.apply(this,arguments)-_)),w,A=Math.min(Math.abs(y)/c,s.apply(this,arguments)),I=A*(y<0?-1:1),b;for(l=0;l<c;++l)(b=v[h[l]=l]=+n(o[l],l,o))>0&&(u+=b);for(e!=null?h.sort(function(T,k){return e(v[T],v[k])}):t!=null&&h.sort(function(T,k){return t(o[T],o[k])}),l=0,p=u?(y-c*I)/u:0;l<c;++l,_=w)d=h[l],b=v[d],w=_+(b>0?b*p:0)+I,v[d]={data:o[d],index:l,value:b,startAngle:_,endAngle:w,padAngle:A};return v}return i.value=function(o){return arguments.length?(n=typeof o=="function"?o:fn(+o),i):n},i.sortValues=function(o){return arguments.length?(e=o,t=null,i):e},i.sort=function(o){return arguments.length?(t=o,e=null,i):t},i.startAngle=function(o){return arguments.length?(r=typeof o=="function"?o:fn(+o),i):r},i.endAngle=function(o){return arguments.length?(a=typeof o=="function"?o:fn(+o),i):a},i.padAngle=function(o){return arguments.length?(s=typeof o=="function"?o:fn(+o),i):s},i}class co{constructor(e,t){this._context=e,this._x=t}areaStart(){this._line=0}areaEnd(){this._line=NaN}lineStart(){this._point=0}lineEnd(){(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line}point(e,t){switch(e=+e,t=+t,this._point){case 0:{this._point=1,this._line?this._context.lineTo(e,t):this._context.moveTo(e,t);break}case 1:this._point=2;default:{this._x?this._context.bezierCurveTo(this._x0=(this._x0+e)/2,this._y0,this._x0,t,e,t):this._context.bezierCurveTo(this._x0,this._y0=(this._y0+t)/2,e,this._y0,e,t);break}}this._x0=e,this._y0=t}}function zx(n){return new co(n,!0)}function Fx(n){return new co(n,!1)}function te(){}function It(n,e,t){n._context.bezierCurveTo((2*n._x0+n._x1)/3,(2*n._y0+n._y1)/3,(n._x0+2*n._x1)/3,(n._y0+2*n._y1)/3,(n._x0+4*n._x1+e)/6,(n._y0+4*n._y1+t)/6)}function Jt(n){this._context=n}Jt.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=NaN,this._point=0},lineEnd:function(){switch(this._point){case 3:It(this,this._x1,this._y1);case 2:this._context.lineTo(this._x1,this._y1);break}(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(n,e){switch(n=+n,e=+e,this._point){case 0:this._point=1,this._line?this._context.lineTo(n,e):this._context.moveTo(n,e);break;case 1:this._point=2;break;case 2:this._point=3,this._context.lineTo((5*this._x0+this._x1)/6,(5*this._y0+this._y1)/6);default:It(this,n,e);break}this._x0=this._x1,this._x1=n,this._y0=this._y1,this._y1=e}};function Ux(n){return new Jt(n)}function uo(n){this._context=n}uo.prototype={areaStart:te,areaEnd:te,lineStart:function(){this._x0=this._x1=this._x2=this._x3=this._x4=this._y0=this._y1=this._y2=this._y3=this._y4=NaN,this._point=0},lineEnd:function(){switch(this._point){case 1:{this._context.moveTo(this._x2,this._y2),this._context.closePath();break}case 2:{this._context.moveTo((this._x2+2*this._x3)/3,(this._y2+2*this._y3)/3),this._context.lineTo((this._x3+2*this._x2)/3,(this._y3+2*this._y2)/3),this._context.closePath();break}case 3:{this.point(this._x2,this._y2),this.point(this._x3,this._y3),this.point(this._x4,this._y4);break}}},point:function(n,e){switch(n=+n,e=+e,this._point){case 0:this._point=1,this._x2=n,this._y2=e;break;case 1:this._point=2,this._x3=n,this._y3=e;break;case 2:this._point=3,this._x4=n,this._y4=e,this._context.moveTo((this._x0+4*this._x1+n)/6,(this._y0+4*this._y1+e)/6);break;default:It(this,n,e);break}this._x0=this._x1,this._x1=n,this._y0=this._y1,this._y1=e}};function qx(n){return new uo(n)}function ho(n){this._context=n}ho.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=NaN,this._point=0},lineEnd:function(){(this._line||this._line!==0&&this._point===3)&&this._context.closePath(),this._line=1-this._line},point:function(n,e){switch(n=+n,e=+e,this._point){case 0:this._point=1;break;case 1:this._point=2;break;case 2:this._point=3;var t=(this._x0+4*this._x1+n)/6,r=(this._y0+4*this._y1+e)/6;this._line?this._context.lineTo(t,r):this._context.moveTo(t,r);break;case 3:this._point=4;default:It(this,n,e);break}this._x0=this._x1,this._x1=n,this._y0=this._y1,this._y1=e}};function Hx(n){return new ho(n)}function fo(n,e){this._basis=new Jt(n),this._beta=e}fo.prototype={lineStart:function(){this._x=[],this._y=[],this._basis.lineStart()},lineEnd:function(){var n=this._x,e=this._y,t=n.length-1;if(t>0)for(var r=n[0],a=e[0],s=n[t]-r,i=e[t]-a,o=-1,l;++o<=t;)l=o/t,this._basis.point(this._beta*n[o]+(1-this._beta)*(r+l*s),this._beta*e[o]+(1-this._beta)*(a+l*i));this._x=this._y=null,this._basis.lineEnd()},point:function(n,e){this._x.push(+n),this._y.push(+e)}};const Gx=function n(e){function t(r){return e===1?new Jt(r):new fo(r,e)}return t.beta=function(r){return n(+r)},t}(.85);function Dt(n,e,t){n._context.bezierCurveTo(n._x1+n._k*(n._x2-n._x0),n._y1+n._k*(n._y2-n._y0),n._x2+n._k*(n._x1-e),n._y2+n._k*(n._y1-t),n._x2,n._y2)}function Xa(n,e){this._context=n,this._k=(1-e)/6}Xa.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x2,this._y2);break;case 3:Dt(this,this._x1,this._y1);break}(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(n,e){switch(n=+n,e=+e,this._point){case 0:this._point=1,this._line?this._context.lineTo(n,e):this._context.moveTo(n,e);break;case 1:this._point=2,this._x1=n,this._y1=e;break;case 2:this._point=3;default:Dt(this,n,e);break}this._x0=this._x1,this._x1=this._x2,this._x2=n,this._y0=this._y1,this._y1=this._y2,this._y2=e}};const jx=function n(e){function t(r){return new Xa(r,e)}return t.tension=function(r){return n(+r)},t}(0);function Qa(n,e){this._context=n,this._k=(1-e)/6}Qa.prototype={areaStart:te,areaEnd:te,lineStart:function(){this._x0=this._x1=this._x2=this._x3=this._x4=this._x5=this._y0=this._y1=this._y2=this._y3=this._y4=this._y5=NaN,this._point=0},lineEnd:function(){switch(this._point){case 1:{this._context.moveTo(this._x3,this._y3),this._context.closePath();break}case 2:{this._context.lineTo(this._x3,this._y3),this._context.closePath();break}case 3:{this.point(this._x3,this._y3),this.point(this._x4,this._y4),this.point(this._x5,this._y5);break}}},point:function(n,e){switch(n=+n,e=+e,this._point){case 0:this._point=1,this._x3=n,this._y3=e;break;case 1:this._point=2,this._context.moveTo(this._x4=n,this._y4=e);break;case 2:this._point=3,this._x5=n,this._y5=e;break;default:Dt(this,n,e);break}this._x0=this._x1,this._x1=this._x2,this._x2=n,this._y0=this._y1,this._y1=this._y2,this._y2=e}};const Wx=function n(e){function t(r){return new Qa(r,e)}return t.tension=function(r){return n(+r)},t}(0);function Ja(n,e){this._context=n,this._k=(1-e)/6}Ja.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._point=0},lineEnd:function(){(this._line||this._line!==0&&this._point===3)&&this._context.closePath(),this._line=1-this._line},point:function(n,e){switch(n=+n,e=+e,this._point){case 0:this._point=1;break;case 1:this._point=2;break;case 2:this._point=3,this._line?this._context.lineTo(this._x2,this._y2):this._context.moveTo(this._x2,this._y2);break;case 3:this._point=4;default:Dt(this,n,e);break}this._x0=this._x1,this._x1=this._x2,this._x2=n,this._y0=this._y1,this._y1=this._y2,this._y2=e}};const Yx=function n(e){function t(r){return new Ja(r,e)}return t.tension=function(r){return n(+r)},t}(0);function Za(n,e,t){var r=n._x1,a=n._y1,s=n._x2,i=n._y2;if(n._l01_a>bn){var o=2*n._l01_2a+3*n._l01_a*n._l12_a+n._l12_2a,l=3*n._l01_a*(n._l01_a+n._l12_a);r=(r*o-n._x0*n._l12_2a+n._x2*n._l01_2a)/l,a=(a*o-n._y0*n._l12_2a+n._y2*n._l01_2a)/l}if(n._l23_a>bn){var c=2*n._l23_2a+3*n._l23_a*n._l12_a+n._l12_2a,d=3*n._l23_a*(n._l23_a+n._l12_a);s=(s*c+n._x1*n._l23_2a-e*n._l12_2a)/d,i=(i*c+n._y1*n._l23_2a-t*n._l12_2a)/d}n._context.bezierCurveTo(r,a,s,i,n._x2,n._y2)}function po(n,e){this._context=n,this._alpha=e}po.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._l01_a=this._l12_a=this._l23_a=this._l01_2a=this._l12_2a=this._l23_2a=this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x2,this._y2);break;case 3:this.point(this._x2,this._y2);break}(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(n,e){if(n=+n,e=+e,this._point){var t=this._x2-n,r=this._y2-e;this._l23_a=Math.sqrt(this._l23_2a=Math.pow(t*t+r*r,this._alpha))}switch(this._point){case 0:this._point=1,this._line?this._context.lineTo(n,e):this._context.moveTo(n,e);break;case 1:this._point=2;break;case 2:this._point=3;default:Za(this,n,e);break}this._l01_a=this._l12_a,this._l12_a=this._l23_a,this._l01_2a=this._l12_2a,this._l12_2a=this._l23_2a,this._x0=this._x1,this._x1=this._x2,this._x2=n,this._y0=this._y1,this._y1=this._y2,this._y2=e}};const Kx=function n(e){function t(r){return e?new po(r,e):new Xa(r,0)}return t.alpha=function(r){return n(+r)},t}(.5);function go(n,e){this._context=n,this._alpha=e}go.prototype={areaStart:te,areaEnd:te,lineStart:function(){this._x0=this._x1=this._x2=this._x3=this._x4=this._x5=this._y0=this._y1=this._y2=this._y3=this._y4=this._y5=NaN,this._l01_a=this._l12_a=this._l23_a=this._l01_2a=this._l12_2a=this._l23_2a=this._point=0},lineEnd:function(){switch(this._point){case 1:{this._context.moveTo(this._x3,this._y3),this._context.closePath();break}case 2:{this._context.lineTo(this._x3,this._y3),this._context.closePath();break}case 3:{this.point(this._x3,this._y3),this.point(this._x4,this._y4),this.point(this._x5,this._y5);break}}},point:function(n,e){if(n=+n,e=+e,this._point){var t=this._x2-n,r=this._y2-e;this._l23_a=Math.sqrt(this._l23_2a=Math.pow(t*t+r*r,this._alpha))}switch(this._point){case 0:this._point=1,this._x3=n,this._y3=e;break;case 1:this._point=2,this._context.moveTo(this._x4=n,this._y4=e);break;case 2:this._point=3,this._x5=n,this._y5=e;break;default:Za(this,n,e);break}this._l01_a=this._l12_a,this._l12_a=this._l23_a,this._l01_2a=this._l12_2a,this._l12_2a=this._l23_2a,this._x0=this._x1,this._x1=this._x2,this._x2=n,this._y0=this._y1,this._y1=this._y2,this._y2=e}};const Xx=function n(e){function t(r){return e?new go(r,e):new Qa(r,0)}return t.alpha=function(r){return n(+r)},t}(.5);function mo(n,e){this._context=n,this._alpha=e}mo.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._l01_a=this._l12_a=this._l23_a=this._l01_2a=this._l12_2a=this._l23_2a=this._point=0},lineEnd:function(){(this._line||this._line!==0&&this._point===3)&&this._context.closePath(),this._line=1-this._line},point:function(n,e){if(n=+n,e=+e,this._point){var t=this._x2-n,r=this._y2-e;this._l23_a=Math.sqrt(this._l23_2a=Math.pow(t*t+r*r,this._alpha))}switch(this._point){case 0:this._point=1;break;case 1:this._point=2;break;case 2:this._point=3,this._line?this._context.lineTo(this._x2,this._y2):this._context.moveTo(this._x2,this._y2);break;case 3:this._point=4;default:Za(this,n,e);break}this._l01_a=this._l12_a,this._l12_a=this._l23_a,this._l01_2a=this._l12_2a,this._l12_2a=this._l23_2a,this._x0=this._x1,this._x1=this._x2,this._x2=n,this._y0=this._y1,this._y1=this._y2,this._y2=e}};const Qx=function n(e){function t(r){return e?new mo(r,e):new Ja(r,0)}return t.alpha=function(r){return n(+r)},t}(.5);function vo(n){this._context=n}vo.prototype={areaStart:te,areaEnd:te,lineStart:function(){this._point=0},lineEnd:function(){this._point&&this._context.closePath()},point:function(n,e){n=+n,e=+e,this._point?this._context.lineTo(n,e):(this._point=1,this._context.moveTo(n,e))}};function Jx(n){return new vo(n)}function Ws(n){return n<0?-1:1}function Ys(n,e,t){var r=n._x1-n._x0,a=e-n._x1,s=(n._y1-n._y0)/(r||a<0&&-0),i=(t-n._y1)/(a||r<0&&-0),o=(s*a+i*r)/(r+a);return(Ws(s)+Ws(i))*Math.min(Math.abs(s),Math.abs(i),.5*Math.abs(o))||0}function Ks(n,e){var t=n._x1-n._x0;return t?(3*(n._y1-n._y0)/t-e)/2:e}function gr(n,e,t){var r=n._x0,a=n._y0,s=n._x1,i=n._y1,o=(s-r)/3;n._context.bezierCurveTo(r+o,a+o*e,s-o,i-o*t,s,i)}function Lt(n){this._context=n}Lt.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=this._t0=NaN,this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x1,this._y1);break;case 3:gr(this,this._t0,Ks(this,this._t0));break}(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(n,e){var t=NaN;if(n=+n,e=+e,!(n===this._x1&&e===this._y1)){switch(this._point){case 0:this._point=1,this._line?this._context.lineTo(n,e):this._context.moveTo(n,e);break;case 1:this._point=2;break;case 2:this._point=3,gr(this,Ks(this,t=Ys(this,n,e)),t);break;default:gr(this,this._t0,t=Ys(this,n,e));break}this._x0=this._x1,this._x1=n,this._y0=this._y1,this._y1=e,this._t0=t}}};function _o(n){this._context=new bo(n)}(_o.prototype=Object.create(Lt.prototype)).point=function(n,e){Lt.prototype.point.call(this,e,n)};function bo(n){this._context=n}bo.prototype={moveTo:function(n,e){this._context.moveTo(e,n)},closePath:function(){this._context.closePath()},lineTo:function(n,e){this._context.lineTo(e,n)},bezierCurveTo:function(n,e,t,r,a,s){this._context.bezierCurveTo(e,n,r,t,s,a)}};function Zx(n){return new Lt(n)}function nk(n){return new _o(n)}function yo(n){this._context=n}yo.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x=[],this._y=[]},lineEnd:function(){var n=this._x,e=this._y,t=n.length;if(t)if(this._line?this._context.lineTo(n[0],e[0]):this._context.moveTo(n[0],e[0]),t===2)this._context.lineTo(n[1],e[1]);else for(var r=Xs(n),a=Xs(e),s=0,i=1;i<t;++s,++i)this._context.bezierCurveTo(r[0][s],a[0][s],r[1][s],a[1][s],n[i],e[i]);(this._line||this._line!==0&&t===1)&&this._context.closePath(),this._line=1-this._line,this._x=this._y=null},point:function(n,e){this._x.push(+n),this._y.push(+e)}};function Xs(n){var e,t=n.length-1,r,a=new Array(t),s=new Array(t),i=new Array(t);for(a[0]=0,s[0]=2,i[0]=n[0]+2*n[1],e=1;e<t-1;++e)a[e]=1,s[e]=4,i[e]=4*n[e]+2*n[e+1];for(a[t-1]=2,s[t-1]=7,i[t-1]=8*n[t-1]+n[t],e=1;e<t;++e)r=a[e]/s[e-1],s[e]-=r,i[e]-=r*i[e-1];for(a[t-1]=i[t-1]/s[t-1],e=t-2;e>=0;--e)a[e]=(i[e]-a[e+1])/s[e];for(s[t-1]=(n[t]+a[t-1])/2,e=0;e<t-1;++e)s[e]=2*n[e+1]-a[e+1];return[a,s]}function ek(n){return new yo(n)}function Zt(n,e){this._context=n,this._t=e}Zt.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x=this._y=NaN,this._point=0},lineEnd:function(){0<this._t&&this._t<1&&this._point===2&&this._context.lineTo(this._x,this._y),(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line>=0&&(this._t=1-this._t,this._line=1-this._line)},point:function(n,e){switch(n=+n,e=+e,this._point){case 0:this._point=1,this._line?this._context.lineTo(n,e):this._context.moveTo(n,e);break;case 1:this._point=2;default:{if(this._t<=0)this._context.lineTo(this._x,e),this._context.lineTo(n,e);else{var t=this._x*(1-this._t)+n*this._t;this._context.lineTo(t,this._y),this._context.lineTo(t,e)}break}}this._x=n,this._y=e}};function tk(n){return new Zt(n,.5)}function rk(n){return new Zt(n,0)}function ak(n){return new Zt(n,1)}function ze(n,e,t){this.k=n,this.x=e,this.y=t}ze.prototype={constructor:ze,scale:function(n){return n===1?this:new ze(this.k*n,this.x,this.y)},translate:function(n,e){return n===0&e===0?this:new ze(this.k,this.x+this.k*n,this.y+this.k*e)},apply:function(n){return[n[0]*this.k+this.x,n[1]*this.k+this.y]},applyX:function(n){return n*this.k+this.x},applyY:function(n){return n*this.k+this.y},invert:function(n){return[(n[0]-this.x)/this.k,(n[1]-this.y)/this.k]},invertX:function(n){return(n-this.x)/this.k},invertY:function(n){return(n-this.y)/this.k},rescaleX:function(n){return n.copy().domain(n.range().map(this.invertX,this).map(n.invert,n))},rescaleY:function(n){return n.copy().domain(n.range().map(this.invertY,this).map(n.invert,n))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};ze.prototype;const n1={class:"knowledge-graph-shell"},Zn=720,Gn=320,mn=44,e1=H({__name:"KnowledgeGraph",setup(n){const e=Zn/2,t=Gn/2,r=rn(null);let a=null,s=null,i=null,o=null;const l=[{id:"agentic",label:"Agentic",size:22,group:"main"},{id:"devops",label:"DevOps",size:24,group:"main"},{id:"architecture",label:"Architecture",size:22,group:"main"},{id:"golang",label:"Go",size:14,group:"secondary"},{id:"kubernetes",label:"K8S",size:14,group:"secondary"},{id:"cloud",label:"Cloud",size:14,group:"secondary"},{id:"cicd",label:"GitOps",size:13,group:"secondary"},{id:"development",label:"Development",size:14,group:"secondary"},{id:"ddd",label:"DDD",size:13,group:"secondary"},{id:"microservices",label:"MicroServices",size:13,group:"secondary"},{id:"copilot",label:"Copilot",size:13,group:"secondary"},{id:"aws",label:"AWS",size:11,group:"leaf"},{id:"tdd",label:"TDD",size:11,group:"leaf"},{id:"kotlin",label:"Kotlin",size:11,group:"leaf"}],c=l.filter(M=>typeof M.anchorX=="number"&&typeof M.anchorY=="number"),d=c.map(M=>M.anchorX),p=c.map(M=>M.anchorY),u=Math.min(...d),h=Math.max(...d),v=Math.min(...p),_=Math.max(...p);function y(M){const z=Zn-mn*2;return mn+(M-u)/Math.max(h-u,1)*z}function w(M){const z=Gn-mn*2;return mn+(M-v)/Math.max(_-v,1)*z}const A={agentic:{x:e-132,y:t-44},devops:{x:e,y:t+8},architecture:{x:e+132,y:t-44}};function I(M){var z;return M.group==="main"?((z=A[M.id])==null?void 0:z.x)??e:typeof M.anchorX=="number"?y(M.anchorX):e}function b(M){var z;return M.group==="main"?((z=A[M.id])==null?void 0:z.y)??t:typeof M.anchorY=="number"?w(M.anchorY):t}const T=l.map(M=>({...M,x:I(M),y:b(M)})),k=[{id:"golang-kubernetes",source:"golang",target:"kubernetes"},{id:"golang-development",source:"golang",target:"development"},{id:"kubernetes-devops",source:"kubernetes",target:"devops"},{id:"kubernetes-cloud",source:"kubernetes",target:"cloud"},{id:"cloud-aws",source:"cloud",target:"aws"},{id:"cicd-devops",source:"cicd",target:"devops"},{id:"development-tdd",source:"development",target:"tdd"},{id:"development-ddd",source:"development",target:"ddd"},{id:"ddd-architecture",source:"ddd",target:"architecture"},{id:"ddd-microservices",source:"ddd",target:"microservices"},{id:"microservices-architecture",source:"microservices",target:"architecture"},{id:"copilot-agentic",source:"copilot",target:"agentic"},{id:"copilot-development",source:"copilot",target:"development"},{id:"golang-kotlin",source:"golang",target:"kotlin"}],E=new Map(T.map(M=>[M.id,M]));function F(M,z){const j=getComputedStyle(document.documentElement).getPropertyValue(M).trim();if(!j)return z;if(j.startsWith("#")){const O=j.slice(1),K=O.length===3?`${O[0]}${O[0]}${O[1]}${O[1]}${O[2]}${O[2]}`:O;if(K.length===6){const J=parseInt(K.slice(0,2),16),$=parseInt(K.slice(2,4),16),an=parseInt(K.slice(4,6),16);return`rgb(${J}, ${$}, ${an})`}}return j}function W(){return{mainNode:F("--color-primary","rgb(84, 95, 115)"),secondaryNode:F("--color-primary-container","rgb(216, 227, 251)"),leafNode:F("--color-surface-container-low","rgb(231, 236, 239)"),edgeColor:F("--color-outline-variant","rgb(169, 180, 185)"),activeEdge:F("--color-tertiary","rgb(58, 82, 95)"),dimColor:F("--color-surface","rgb(242, 244, 245)"),labelColor:F("--color-on-surface","rgb(42, 52, 57)"),dimLabelColor:F("--color-on-surface-variant","rgb(95, 108, 114)"),surfaceColor:F("--color-surface-container-lowest","rgb(255, 255, 255)")}}function U(M){if(M)return typeof M=="string"?E.get(M):M}function L(M){return M?typeof M=="string"?M:M.id:null}function P(M){return Math.max(M.size*.84,10)}function D(M){return Number.isFinite(M.x)?M.x:Zn/2}function V(M){return Number.isFinite(M.y)?M.y:Gn/2}function tn(M){const z=P(M),j=mn+z,O=Zn-mn-z,K=mn+z,J=Gn-mn-z;M.x=Math.min(O,Math.max(j,D(M))),M.y=Math.min(J,Math.max(K,V(M)))}function nn(M,z){const j=P(M),O=mn+j,K=Zn-mn-j;return Math.min(K,Math.max(O,z))}function Y(M,z){const j=P(M),O=mn+j,K=Gn-mn-j;return Math.min(K,Math.max(O,z))}function ln(M,z){const j=k.find(O=>O.id===M);return j?L(j.source)===z||L(j.target)===z:!1}function hn(M){return a?M===a?!0:k.some(z=>ln(z.id,M)&&ln(z.id,a)):!1}function dn(M,z){return M==="main"?z.mainNode:M==="secondary"?z.secondaryNode:z.leafNode}function Tn(){if(!r.value)return;const M=le(r.value).select("svg.knowledge-graph-svg");M.empty()||(M.selectAll("line.graph-edge").attr("x1",z=>D(U(z.source)??T[0])).attr("y1",z=>V(U(z.source)??T[0])).attr("x2",z=>D(U(z.target)??T[0])).attr("y2",z=>V(U(z.target)??T[0])),M.selectAll("line.graph-edge-hitbox").attr("x1",z=>D(U(z.source)??T[0])).attr("y1",z=>V(U(z.source)??T[0])).attr("x2",z=>D(U(z.target)??T[0])).attr("y2",z=>V(U(z.target)??T[0])),M.selectAll("g.graph-node").attr("transform",z=>`translate(${D(z)}, ${V(z)})`))}function xn(){if(!r.value)return;const M=W(),z=le(r.value).select("svg.knowledge-graph-svg");z.empty()||(z.select("rect.graph-surface").attr("fill",M.surfaceColor).attr("opacity",.18),z.selectAll("line.graph-grid").attr("stroke",M.dimColor).attr("opacity",.55),z.selectAll("line.graph-edge").attr("stroke",j=>j.id===s?M.activeEdge:a&&!ln(j.id,a)||s&&j.id!==s?M.dimColor:M.edgeColor).attr("stroke-width",j=>j.id===s?3.4:1.8).attr("opacity",j=>j.id===s?1:a&&!ln(j.id,a)||s&&j.id!==s?.35:.9),z.selectAll("circle.graph-node-shape").attr("r",j=>{const O=P(j);return j.id===a?O*1.12:O}).attr("fill",j=>dn(j.group,M)).attr("stroke",M.surfaceColor).attr("stroke-width",j=>j.id===a?3:2).attr("opacity",j=>j.id===a?1:a&&!hn(j.id)||s&&!ln(s,j.id)?.4:.96),z.selectAll("text.graph-node-label").attr("fill",j=>a&&!hn(j.id)||s&&!ln(s,j.id)?M.dimLabelColor:M.labelColor).attr("opacity",j=>a&&!hn(j.id)||s&&!ln(s,j.id)?.6:1))}function cn(){a=null,s=null,xn()}function Ln(){if(!r.value)return;const M=le(r.value);M.selectAll("*").remove();const z=M.append("svg").attr("viewBox",`0 0 ${Zn} ${Gn}`).attr("class","knowledge-graph-svg").attr("role","img").attr("aria-label","engineering knowledge graph").on("mouseleave",()=>{cn()});z.append("rect").attr("class","graph-surface").attr("x",0).attr("y",0).attr("width",Zn).attr("height",Gn).attr("rx",28),z.append("g").selectAll("line.graph-grid").data([.2,.5,.8]).join("line").attr("class","graph-grid").attr("x1",mn).attr("x2",Zn-mn).attr("y1",$=>mn+$*(Gn-mn*2)).attr("y2",$=>mn+$*(Gn-mn*2)).attr("stroke-width",1).attr("stroke-dasharray","5 8");const j=z.append("g").attr("class","edge-layer"),O=z.append("g").attr("class","node-layer"),K=nm().on("start",($,an)=>{$.active||o==null||o.alphaTarget(.18).restart(),an.fx=D(an),an.fy=V(an)}).on("drag",($,an)=>{an.fx=nn(an,$.x),an.fy=Y(an,$.y),Tn()}).on("end",($,an)=>{$.active||o==null||o.alphaTarget(0),an.fx=null,an.fy=null});j.selectAll("line.graph-edge").data(k).join("line").attr("class","graph-edge").attr("stroke-linecap","round"),j.selectAll("line.graph-edge-hitbox").data(k).join("line").attr("class","graph-edge-hitbox").attr("stroke","transparent").attr("stroke-width",14).attr("stroke-linecap","round").style("cursor","pointer").on("mouseenter",($,an)=>{s=an.id,a=null,xn()});const J=O.selectAll("g.graph-node").data(T).join("g").attr("class","graph-node").style("cursor","pointer").on("mouseenter",($,an)=>{a=an.id,s=null,xn()}).call(K);J.append("circle").attr("class","graph-node-shape"),J.append("text").attr("class","graph-node-label").text($=>$.label).attr("text-anchor","middle").attr("dominant-baseline","middle").attr("font-size",$=>Math.max($.size*.78,10)).attr("font-weight",$=>$.group==="main"?700:600).style("pointer-events","none"),Tn(),xn()}function Sn(){o==null||o.stop(),o=wv(T).force("link",gv(k).id(M=>M.id).distance(M=>{const z=U(M.source),j=U(M.target);return(z==null?void 0:z.group)==="main"||(j==null?void 0:j.group)==="main"?104:(z==null?void 0:z.group)==="leaf"||(j==null?void 0:j.group)==="leaf"?72:88}).strength(.4)).force("charge",Av().strength(M=>M.group==="main"?-780:M.group==="secondary"?-520:-320)).force("center",Y0(e,t)).force("x",Cv(M=>I(M)).strength(M=>M.group==="main"?.24:.08)).force("y",Tv(M=>b(M)).strength(M=>M.group==="main"?.22:.06)).force("collision",fv().radius(M=>P(M)+12).iterations(3)).alpha(.9).alphaDecay(.04).velocityDecay(.3).on("tick",()=>{T.forEach(M=>{tn(M)}),Tn()})}return On(()=>{Ln(),Sn(),i=new MutationObserver(()=>{xn()}),i.observe(document.documentElement,{attributes:!0,attributeFilter:["class","data-theme"]})}),Ur(()=>{i&&(i.disconnect(),i=null),o&&(o.stop(),o=null)}),(M,z)=>(m(),x("div",n1,[f("div",{ref_key:"containerRef",ref:r,class:"knowledge-graph-canvas"},null,512)]))}}),t1=X(e1,[["__scopeId","data-v-49a3d5a3"]]);function pn(n){return n.replace(/^\/+/,"").replace(/^docs\//,"")}function Qs(n){return`/${pn(n)}`}function xo(n){return Object.keys(n).reduce((e,t)=>(e[pn(t)]=t,e),{})}function ko(n,e,t){const r=pn(n),a=[Qs(n),`/${r}`,r,t[r]].filter(s=>!!s);for(const s of a){const i=e[s];if(i)return{modulePath:s,raw:i}}return{modulePath:Qs(n),raw:void 0}}function Nt(n){const e=pn(n);return e.split("/").pop()||e}function Js(n){return n.replace(/^['\"]|['\"]$/g,"").trim()}function r1(n){const e=n.trim();if(e.startsWith("[")&&e.endsWith("]")){const t=e.slice(1,-1).trim();return t?t.split(",").map(r=>Js(r.trim())).filter(r=>r.length>0):[]}return Js(e)}function wo(n){const e=n.match(/^---\n([\s\S]*?)\n---/);if(!e)return{};const t={};for(const r of e[1].split(`
`)){if(!r||/^\s/.test(r)||r.startsWith("#"))continue;const a=r.indexOf(":");if(a<0)continue;const s=r.slice(0,a).trim(),i=r1(r.slice(a+1));t[s]=i}return t}function Ao(n){return n.replace(/^---[\s\S]*?---\n?/,"").trim()}function Co(n){const t=Ao(n).split(/\n\s*\n/).find(r=>r.trim().length>0);return(t==null?void 0:t.replace(/^#+\s+/,"").trim())||""}function To(n,e={}){const r=Ao(n).replace(/```[\s\S]*?```/g," ").replace(/`[^`]*`/g," ").replace(/!\[[^\]]*\]\([^)]*\)/g," ").replace(/\[[^\]]*\]\([^)]*\)/g," ").replace(/[#>*_~\-]/g," ").replace(/\s+/g," ").trim().length,a=Math.max(1,Math.ceil(r/500));return typeof e.formatter=="function"?e.formatter(a):e.template?e.template.replace("{minutes}",String(a)):`~ ${a} min read`}function Ue(n){return n?`/${pn(n).replace(/\.md$/,"").replace(/\/index$/,"/")}`:"#"}function So(n){const e=n.replace(/[.+^${}()|[\]\\]/g,"\\$&").replace(/\*\*/g,"::DOUBLE_STAR::").replace(/\*/g,"[^/]*").replace(/::DOUBLE_STAR::/g,".*");return new RegExp(`^${e}$`)}function Mo(n){const e=String(n.category||"").trim();return e&&n.categoryMeta&&n.categoryMeta[e]?n.categoryMeta[e]:{}}function ns(n){const e=Mo(n);return e.label?e.label:String(n.category||"").trim()}function es(n){const e=Mo(n);return e.colorClass?e.colorClass:""}const a1="/assets/1644655887368.DQapbKac.jpg",s1="/assets/1644658272643.DixkFUdM.jpg",i1="/assets/wx20220212-172346.Bdr25vH2.png",o1="/assets/wx20220212-172451.BB6BU37T.png",l1="/assets/1-6zojnn4sdsd9kylfhr34-a-1640317491743-0.BT5IPXlG.png",c1="/assets/1-n1zqvw8bk-o8rwxnzs5kq-1640317547459-0.DWMxzrzx.png",u1="/assets/2022-03-13-22-37-47.FXklLsNs.jpeg",d1="/assets/dual-clutch-transmission-13-1640318081688-0.B4hokDfU.gif",h1="/assets/skills.BAnIdTNL.png",f1="/assets/wiki-type-of-architect-1640317457778-0.C3YyCdof.png",p1="/assets/wx20220320-163559.CfWPxfHG.png",g1="/assets/wx20220320-163907.B6vfIgkR.png",m1="/assets/wx20220321-104324.BgpfGzm0.png",v1="/assets/image-1653875255217-0.DLUkC6WM.png",_1="/assets/2022-05-25-10-21-15.BG964yVJ.png",b1="/assets/image-16.yUtl20qA.png",y1="/assets/image-17.hTTOmgfs.png",x1="/assets/image-18.HclV9ZG2.png",k1="/assets/1645694079239.C_nre4re.jpg",w1="/assets/achitecture-discussing-2.CIp6ic9U.jpeg",A1="/assets/achitecture-discussing._BjOxGqC.jpeg",C1="/assets/basic-diagram.k-lcOFHY.jpeg",T1="/assets/building-architecture.CVLmaHKi.jpeg",S1="/assets/image-01.9UEyGlKG.png",M1="/assets/image-02.lC5tp8JY.png",$1="/assets/image-03.CN1AMQ2n.png",P1="/assets/image-21.GzBuHhpo.png",I1="/assets/image-31.BCqMHRFV.png",D1="/assets/image-32.BONEHxoC.png",L1="/assets/image-33.35tIccBN.png",N1="/assets/image-34.BI0AYe_e.png",E1="/assets/image-35.Dqw7EEZo.png",O1="/assets/image-36.B6zYBbcF.png",R1="/assets/image-37.Bug7G00R.png",V1="/assets/image-38.F3X5v5gc.png",B1="/assets/image-main.d3gkZeRb.png",z1="/assets/math-diagram.CeYjpfsa.jpeg",F1="/assets/network-topology.CSAnXw-U.webp",U1="/assets/pictograph-1.BjKnp1uA.jpeg",q1="/assets/quick-sort.DqDqTYZk.png",H1="/assets/words.BJuqccBz.webp",G1="/assets/image.v72K2I7B.png",j1="/assets/image-1.CABcO0hy.png",W1="/assets/image-2.CqDiP9_8.png",Y1="/assets/image.C-NbRYb4.png",K1="/assets/langchain-ollama.BRx4KDS9.png",X1="/assets/llm-architecture.Brkjch2V.png",Q1="/assets/git-graph-0.C4G_Ghqh.png",J1="/assets/git-graph-1.0NB7GhSV.png",Z1="/assets/devops.D2KY2cuE.png",nb="/assets/homepage.CbpzU-qz.png",eb="/assets/mp-weixin-green.CsjjYBS_.png",tb="/assets/mp-weixin-white.CcgfmLQg.png",rb="/assets/old.BLdKa2Z6.png",ab="/assets/image-1.BZojNKVT.png",sb="/assets/image-2.DU_0Fs-4.png",ib="/assets/image-3.DFogVQnE.png",ob="/assets/image-main.QAIGTop_.png",lb="/assets/mp-weixin-green.CsjjYBS_.png",cb="/assets/mp-weixin-white.CcgfmLQg.png",ub="https://picsum.photos/800/600";function db(n){let e=0;for(let t=0;t<n.length;t+=1)e=(e*31+n.charCodeAt(t))%1e4;return e+1}function hb(n){return n.replace(/^\/+/,"").replace(/^docs\//,"")}function fb(n){const e=hb(n||"")||"default",t=db(e);return`${ub}?random=${t}`}const pb=new Set(["","null","undefined","none","n/a","na","-"]),gb=Object.assign({"/blogs/assets/202202-logseq-build-your-own-wiki/1644655887368.jpg":a1,"/blogs/assets/202202-logseq-build-your-own-wiki/1644658272643.jpg":s1,"/blogs/assets/202202-logseq-build-your-own-wiki/wx20220212-172346.png":i1,"/blogs/assets/202202-logseq-build-your-own-wiki/wx20220212-172451.png":o1,"/blogs/assets/202203-mesh-shaped-cloud-native-developer/1-6zojnn4sdsd9kylfhr34-a-1640317491743-0.png":l1,"/blogs/assets/202203-mesh-shaped-cloud-native-developer/1-n1zqvw8bk-o8rwxnzs5kq-1640317547459-0.png":c1,"/blogs/assets/202203-mesh-shaped-cloud-native-developer/2022-03-13-22-37-47.jpeg":u1,"/blogs/assets/202203-mesh-shaped-cloud-native-developer/dual-clutch-transmission-13-1640318081688-0.gif":d1,"/blogs/assets/202203-mesh-shaped-cloud-native-developer/skills.png":h1,"/blogs/assets/202203-mesh-shaped-cloud-native-developer/wiki-type-of-architect-1640317457778-0.png":f1,"/blogs/assets/202203-mesh-shaped-cloud-native-developer/wx20220320-163559.png":p1,"/blogs/assets/202203-mesh-shaped-cloud-native-developer/wx20220320-163907.png":g1,"/blogs/assets/202203-mesh-shaped-cloud-native-developer/wx20220321-104324.png":m1,"/blogs/assets/202203-mesh-shaped-recap/image-1653875255217-0.png":v1,"/blogs/assets/202205-router-proxy-gtw/2022-05-25-10-21-15.png":_1,"/blogs/assets/202211-cloud-native-engineering/image-16.png":b1,"/blogs/assets/202211-cloud-native-engineering/image-17.png":y1,"/blogs/assets/202211-cloud-native-engineering/image-18.png":x1,"/blogs/assets/202212-logseq-customized-with-clojure-and-css/1645694079239.jpg":k1,"/blogs/assets/202304-draw-architecture-diagram/achitecture-discussing-2.jpeg":w1,"/blogs/assets/202304-draw-architecture-diagram/achitecture-discussing.jpeg":A1,"/blogs/assets/202304-draw-architecture-diagram/basic-diagram.jpeg":C1,"/blogs/assets/202304-draw-architecture-diagram/building-architecture.jpeg":T1,"/blogs/assets/202304-draw-architecture-diagram/image-01.png":S1,"/blogs/assets/202304-draw-architecture-diagram/image-02.png":M1,"/blogs/assets/202304-draw-architecture-diagram/image-03.png":$1,"/blogs/assets/202304-draw-architecture-diagram/image-21.png":P1,"/blogs/assets/202304-draw-architecture-diagram/image-31.png":I1,"/blogs/assets/202304-draw-architecture-diagram/image-32.png":D1,"/blogs/assets/202304-draw-architecture-diagram/image-33.png":L1,"/blogs/assets/202304-draw-architecture-diagram/image-34.png":N1,"/blogs/assets/202304-draw-architecture-diagram/image-35.png":E1,"/blogs/assets/202304-draw-architecture-diagram/image-36.png":O1,"/blogs/assets/202304-draw-architecture-diagram/image-37.png":R1,"/blogs/assets/202304-draw-architecture-diagram/image-38.png":V1,"/blogs/assets/202304-draw-architecture-diagram/image-main.png":B1,"/blogs/assets/202304-draw-architecture-diagram/math-diagram.jpeg":z1,"/blogs/assets/202304-draw-architecture-diagram/network-topology.webp":F1,"/blogs/assets/202304-draw-architecture-diagram/pictograph-1.jpeg":U1,"/blogs/assets/202304-draw-architecture-diagram/quick-sort.png":q1,"/blogs/assets/202304-draw-architecture-diagram/words.webp":H1,"/blogs/assets/202304-tunnel-vpn-vpc/image.png":G1,"/blogs/assets/202402-llm-application/image-1.png":j1,"/blogs/assets/202402-llm-application/image-2.png":W1,"/blogs/assets/202402-llm-application/image.png":Y1,"/blogs/assets/202402-llm-application/langchain-ollama.png":K1,"/blogs/assets/202402-llm-application/llm-architecture.png":X1,"/blogs/assets/202406-fork-oss/git-graph-0.png":Q1,"/blogs/assets/202406-fork-oss/git-graph-1.png":J1,"/blogs/assets/202406-k3s-blogs/devops.png":Z1,"/blogs/assets/202406-k3s-blogs/homepage.png":nb,"/blogs/assets/202406-k3s-blogs/mp-weixin-green.png":eb,"/blogs/assets/202406-k3s-blogs/mp-weixin-white.png":tb,"/blogs/assets/202406-k3s-blogs/old.png":rb,"/blogs/assets/202412-ai-powered-pkm/image-1.png":ab,"/blogs/assets/202412-ai-powered-pkm/image-2.png":sb,"/blogs/assets/202412-ai-powered-pkm/image-3.png":ib,"/blogs/assets/202412-ai-powered-pkm/image-main.png":ob,"/blogs/assets/202412-ai-powered-pkm/mp-weixin-green.png":lb,"/blogs/assets/202412-ai-powered-pkm/mp-weixin-white.png":cb});function mb(n){const e=n.trim();if(!e)return[];const t=e.startsWith("/")?e:`/${e}`;return[e,t]}function vb(n){for(const e of mb(n)){const t=gb[e];if(t)return t}return n}function Ye(n,e){const t=(n||"").trim(),r=t.toLowerCase();return!t||pb.has(r)?fb(e):vb(t)}const _b={class:"bg-surface dark:bg-slate-900 text-on-surface dark:text-slate-100"},bb={class:"pt-32 pb-24"},yb={class:"max-w-7xl mx-auto px-8 mb-32"},xb={class:"grid grid-cols-1 lg:grid-cols-12 gap-12 items-start"},kb={class:"lg:col-span-6"},wb={class:"mb-6 inline-block bg-primary-container px-3 py-1 rounded text-[10px] uppercase tracking-widest font-bold text-on-primary-container"},Ab={class:"text-[3.5rem] font-extrabold tracking-tight leading-[1.1] mb-8 text-on-surface dark:text-slate-100"},Cb={class:"text-[1.375rem] leading-relaxed text-on-surface-variant dark:text-slate-400 font-light mb-8 max-w-2xl"},Tb={class:"flex items-center gap-4 mb-12"},Sb={class:"text-sm text-on-surface-variant dark:text-slate-400"},Mb={class:"lg:col-span-6 relative lg:mt-12"},$b={class:"bg-surface-container-lowest dark:bg-slate-950 p-6 rounded-lg dark:border-slate-700"},Pb={class:"bg-surface-container-low dark:bg-slate-900 py-24"},Ib={class:"max-w-7xl mx-auto px-8"},Db={class:"flex justify-between items-end mb-16"},Lb={class:"label-sm text-tertiary font-bold tracking-[0.2em] uppercase text-xs mb-4 block pb-4"},Nb={class:"text-[2.25rem] font-bold tracking-tight text-on-surface dark:text-slate-100"},Eb={class:"grid grid-cols-1 md:grid-cols-2 gap-px bg-outline-variant/10 dark:bg-slate-700"},Ob=["src","alt"],Rb=["data-icon"],Vb={class:"text-xl font-bold mb-4 text-on-surface dark:text-slate-100"},Bb={class:"text-on-surface-variant dark:text-slate-400 leading-relaxed"},zb={class:"max-w-7xl mx-auto px-8 py-32"},Fb={class:"mb-16 flex items-center justify-between gap-6"},Ub={class:"text-[2.25rem] font-bold tracking-tight text-on-surface dark:text-slate-100 mb-2"},qb=["href"],Hb={key:0,class:"grid grid-cols-1 md:grid-cols-12 gap-8"},Gb=["href"],jb={class:"relative overflow-hidden rounded-xl mb-6 aspect-[16/9] bg-surface-container-low dark:bg-slate-900"},Wb=["alt","src"],Yb={class:"flex items-center gap-4 mb-4"},Kb={class:"text-xs text-outline dark:text-slate-400 tracking-wider"},Xb={class:"text-3xl font-bold tracking-tight mb-4 group-hover:text-tertiary transition-colors"},Qb={class:"text-on-surface-variant dark:text-slate-400 line-clamp-2 max-w-2xl"},Jb={class:"md:col-span-4 flex flex-col gap-12"},Zb=["href"],ny={class:"flex items-center gap-3 mb-3"},ey={class:"text-[10px] text-outline dark:text-slate-400"},ty={class:"text-xl font-bold tracking-tight mb-3 group-hover:text-tertiary transition-colors leading-tight"},ry={class:"text-sm text-on-surface-variant dark:text-slate-400 line-clamp-2"},ay={class:"mt-4 flex items-center gap-1 text-tertiary text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity"},sy={key:1,class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"},iy=["href"],oy=["src","alt"],ly={class:"p-5"},cy={class:"flex items-center justify-between gap-3 mb-3"},uy={class:"text-[10px] text-outline dark:text-slate-400"},dy={class:"text-base font-bold tracking-tight mb-2 text-on-surface dark:text-slate-100"},hy={class:"text-sm text-on-surface-variant dark:text-slate-400 line-clamp-3"},fy={key:0,class:"max-w-7xl mx-auto px-8"},py={class:"bg-primary text-on-primary p-16 rounded-xl relative overflow-hidden"},gy={class:"relative z-10 max-w-2xl"},my={class:"text-3xl font-bold tracking-tight mb-4"},vy={class:"text-on-primary/80 mb-8 text-lg"},_y={class:"flex flex-col sm:flex-row gap-4"},by=["placeholder"],yy={class:"bg-on-primary text-primary font-bold px-8 py-3 rounded-lg hover:bg-primary-container transition-all active:scale-95",type:"submit"},xy=H({__name:"AboutMeLayout",setup(n){const{lang:e}=pe(),{page:t}=Ut(),{headerConfig:r,footerConfig:a,uiConfig:s}=qt(),i=R(()=>s.value.common||{}),o=R(()=>s.value.about||{}),l=R(()=>s.value.blog||{}),c=R(()=>l.value.categoryMeta||{}),d=Object.assign({"/about-me.md":Xr,"/blogs/2022/202202-logseq-build-your-own-wiki.md":Qr,"/blogs/2022/202203-mesh-shaped-cloud-native-developer.md":Jr,"/blogs/2022/202203-mesh-shaped-recap.md":Zr,"/blogs/2022/202205-container-k8s-docker.md":na,"/blogs/2022/202205-router-proxy-gtw.md":ea,"/blogs/2022/202211-cloud-native-engineering.md":ta,"/blogs/2022/202212-api-design-inspired-by-google-api-design.md":ra,"/blogs/2022/202212-go-monorepo-tutorial.md":aa,"/blogs/2022/202212-logseq-customized-with-clojure-and-css.md":sa,"/blogs/2022/202212-logseq-pkm.md":ia,"/blogs/2023/202302-iac-and-terraform.md":oa,"/blogs/2023/202304-draw-architecture-diagram.md":la,"/blogs/2023/202304-tunnel-vpn-vpc.md":ca,"/blogs/2023/202306-remote-development-in-cloud.md":ua,"/blogs/2023/202312-agile-and-lean.md":da,"/blogs/2023/202312-cobra-cli.md":ha,"/blogs/2023/202312-devcontainer-tutorial.md":fa,"/blogs/2023/202312-illustrated-ai.md":pa,"/blogs/2023/202312-kubernetes-operator.md":ga,"/blogs/2023/202312-windows-workspaces.md":ma,"/blogs/2024/202401-cloud-native-practices.md":va,"/blogs/2024/202401-eassy-2024.md":_a,"/blogs/2024/202401-illustrations.md":ba,"/blogs/2024/202402-llm-application.md":ya,"/blogs/2024/202403-ai-and-human.md":xa,"/blogs/2024/202406-fork-oss.md":ka,"/blogs/2024/202406-k3s-blogs.md":wa,"/blogs/2024/202412-ai-powered-pkm.md":Aa,"/blogs/2026/202602-domain-spec-agents.md":Ca,"/blogs/2026/202602-pov-agentic-engineering.md":Ta,"/blogs/2026/202602-pov-standard-automation-selfserve.md":Sa,"/blogs/index.md":Ma,"/en/about-me.md":$a,"/en/blogs/2023/202302-iac-and-terraform.md":Pa,"/en/blogs/index.md":Ia,"/en/index.md":Da,"/index.md":La}),p=xo(d);function u(k){var L,P;const{modulePath:E,raw:F}=ko(k,d,p);if(!F)return console.warn(`[AboutMeLayout] markdown not found for path: ${k}`),console.warn(`[AboutMeLayout] attempted module key: ${E}`),null;const W=wo(F),U=W.title||W.heroTitle||((P=(L=pn(k).split("/").pop())==null?void 0:L.replace(/\.md$/,""))==null?void 0:P.replace(/[-_]/g," "))||String(i.value.untitled||"Untitled");return{path:pn(k),title:U,description:W.description||W.heroDescription||W.articleLead||Co(F),date:W.date,category:W.category,image:W.image}}const h=R(()=>{const k=t.value.featuredArticle;if(!k)return null;if(typeof k=="string")return u(k);if(typeof k=="object"&&typeof k.path=="string"){const E=u(k.path);return E?{...E,...k,path:E.path}:null}return typeof k=="object"?k:null}),v=R(()=>{var P;const k=t.value.sideArticles,E=pn(((P=h.value)==null?void 0:P.path)||"");if(Array.isArray(k))return k.filter(D=>pn(D.path||"")!==E);if(!k||typeof k!="object")return[];const F=pn(k.path||"blog/**/*.md"),W=Number(k.count||4),U=So(F);return Object.keys(d).map(D=>pn(D)).filter(D=>U.test(D)).sort((D,V)=>{const tn=Nt(V).localeCompare(Nt(D));return tn!==0?tn:V.localeCompare(D)}).map(D=>u(D)).filter(D=>!!D).filter(D=>pn(D.path||"")!==E).slice(0,W)}),_=R(()=>!!h.value),y=R(()=>_.value?v.value:v.value.slice(0,4)),w=R(()=>t.value.articlesMoreHref||(e.value==="en"?"/en/blog/":"/blog/")),A=R(()=>t.value.articlesMoreText||o.value.viewMore||"View More");function I(k){return typeof k=="string"&&/^https?:\/\//.test(k)}function b(k){return ns({category:String(k||""),categoryMeta:c.value})}function T(k){return es({category:String(k||""),categoryMeta:c.value})}return(k,E)=>{var F,W,U,L,P,D,V,tn,nn;return m(),x("div",_b,[q(zt,{"site-title":g(r).siteTitle||g(t).siteTitle,"nav-links":g(r).navLinks||g(t).navLinks||[],"show-subscribe":!!g(r).showSubscribe,"subscribe-button-text":g(r).subscribeButtonText,"nav-height-class":"h-20"},null,8,["site-title","nav-links","show-subscribe","subscribe-button-text"]),f("main",bb,[f("section",yb,[f("div",xb,[f("div",kb,[f("div",wb,S(g(t).heroEyebrow),1),f("h1",Ab,S(g(t).heroTitle),1),f("p",Cb,S(g(t).heroDescription),1),f("div",Tb,[f("p",Sb,S(g(t).heroMeta),1)])]),f("div",Mb,[f("div",$b,[E[0]||(E[0]=f("span",{class:"text-s font-bold tracking-tight text-slate-700 dark:text-slate-300 mb-6"}," Graph: Mesh Capabilities ",-1)),q(t1)])])])]),f("section",Pb,[f("div",Ib,[f("div",Db,[f("div",null,[f("span",Lb,S(g(t).focusEyebrow),1),f("h2",Nb,S(g(t).focusTitle),1)]),E[1]||(E[1]=f("div",{class:"hidden md:block w-1/3 h-[1px] bg-outline-variant/20 dark:bg-slate-700 mb-4"},null,-1))]),f("div",Eb,[(m(!0),x(Z,null,sn(g(t).focusCards||[],Y=>(m(),x("div",{key:Y.title,class:"bg-surface-container-lowest dark:bg-slate-950 p-10 transition-colors"},[I(Y.icon)?(m(),x("img",{key:0,src:Y.icon,alt:Y.title,class:"w-10 h-10 object-contain mb-6"},null,8,Ob)):(m(),x("span",{key:1,class:"material-symbols-outlined text-primary mb-6 block text-4xl dark:text-tertiary","data-icon":Y.icon},S(Y.icon),9,Rb)),f("h3",Vb,S(Y.title),1),f("p",Bb,S(Y.description),1)]))),128))])])]),f("section",zb,[f("div",Fb,[f("div",null,[f("h2",Ub,S(g(t).articlesTitle),1),E[2]||(E[2]=f("div",{class:"w-12 h-1 bg-primary"},null,-1))]),f("a",{href:w.value,class:"inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-outline-variant/30 dark:border-slate-700 text-sm font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors"},[Cn(S(A.value)+" ",1),E[3]||(E[3]=f("span",{class:"material-symbols-outlined text-sm"},"arrow_forward",-1))],8,qb)]),_.value?(m(),x("div",Hb,[f("a",{href:g(Ue)((F=h.value)==null?void 0:F.path),class:"md:col-span-8 group cursor-pointer block"},[f("div",jb,[f("img",{alt:(W=h.value)==null?void 0:W.title,class:"w-full h-full object-cover transition-transform duration-700 group-hover:scale-105",src:g(Ye)((U=h.value)==null?void 0:U.image,(L=h.value)==null?void 0:L.path)},null,8,Wb),E[4]||(E[4]=f("div",{class:"absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"},null,-1))]),f("div",Yb,[f("span",{class:Q(["text-xs font-bold uppercase tracking-widest px-2 py-0.5 rounded",T((P=h.value)==null?void 0:P.category)])},S(b((D=h.value)==null?void 0:D.category)),3),f("span",Kb,S((V=h.value)==null?void 0:V.date),1)]),f("h3",Xb,S((tn=h.value)==null?void 0:tn.title),1),f("p",Qb,S((nn=h.value)==null?void 0:nn.description),1)],8,Gb),f("div",Jb,[(m(!0),x(Z,null,sn(y.value,Y=>(m(),x("a",{key:Y.title,href:g(Ue)(Y.path),class:"group cursor-pointer block"},[f("div",ny,[f("span",{class:Q(["text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded",T(Y.category)])},S(b(Y.category)),3),f("span",ey,S(Y.date),1)]),f("h4",ty,S(Y.title),1),f("p",ry,S(Y.description),1),f("div",ay,[Cn(S(g(t).readMoreLabel)+" ",1),E[5]||(E[5]=f("span",{class:"material-symbols-outlined text-sm"},"arrow_forward",-1))])],8,Zb))),128))])])):(m(),x("div",sy,[(m(!0),x(Z,null,sn(y.value,Y=>(m(),x("a",{key:Y.title,href:g(Ue)(Y.path),class:"bg-surface-container-lowest dark:bg-slate-900 border border-outline-variant/10 dark:border-slate-700 rounded-xl overflow-hidden block"},[f("img",{src:g(Ye)(Y.image,Y.path),alt:Y.title,class:"w-full h-40 object-cover"},null,8,oy),f("div",ly,[f("div",cy,[f("span",{class:Q(["text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded",T(Y.category)])},S(b(Y.category)),3),f("span",uy,S(Y.date),1)]),f("h4",dy,S(Y.title),1),f("p",hy,S(Y.description),1)])],8,iy))),128))]))]),g(t).subscribeTitle?(m(),x("section",fy,[f("div",py,[E[6]||(E[6]=f("div",{class:"absolute top-0 right-0 w-1/3 h-full mesh-grid opacity-10"},null,-1)),f("div",gy,[f("h2",my,S(g(t).subscribeTitle),1),f("p",vy,S(g(t).subscribeDescription),1),f("form",_y,[f("input",{class:"bg-white/10 border border-white/20 rounded-lg px-6 py-3 flex-grow focus:outline-none focus:ring-2 focus:ring-on-primary/50 text-white placeholder-white/40",placeholder:g(t).subscribePlaceholder,type:"email"},null,8,by),f("button",yy,S(g(t).subscribeButton),1)])])])])):B("",!0)]),q(Ft,{title:g(a).title||g(t).footerTitle,description:g(a).description||g(t).footerDescription,links:g(a).links||g(t).footerLinks||[],"social-icons":g(a).socialIcons||[]},null,8,["title","description","links","social-icons"])])}}}),ky={class:"bg-surface dark:bg-slate-900 text-slate-900 dark:text-slate-100 selection:bg-primary-container selection:text-on-primary-container"},wy={class:"pt-32 pb-24 px-6 lg:px-12 max-w-7xl mx-auto bg-surface dark:bg-slate-900"},Ay={class:"mb-32 relative"},Cy={class:"grid grid-cols-1 lg:grid-cols-12 gap-12 items-end"},Ty={class:"lg:col-span-7"},Sy={class:"overflow-hidden rounded-xl bg-surface-container-low group"},My=["src"],$y={class:"lg:col-span-5 pb-4"},Py={class:"flex items-center gap-4 mb-6"},Iy={class:"text-[0.6875rem] font-medium text-outline"},Dy={class:"text-5xl lg:text-6xl font-extrabold tracking-tighter leading-[1.12] lg:leading-[1.05] mb-8 text-slate-900 dark:text-slate-100"},Ly={class:"text-slate-700 dark:text-slate-400 text-lg leading-relaxed mb-8 max-w-md"},Ny={key:0,class:"flex flex-wrap gap-2 mb-8"},Ey={class:"flex items-center justify-between border-t border-outline-variant/20 pt-6"},Oy={class:"text-xs font-medium text-outline uppercase tracking-widest"},Ry=["href"],Vy={class:"flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8"},By={class:"max-w-xl"},zy={class:"text-3xl font-bold tracking-tight mb-6"},Fy={class:"text-slate-700 dark:text-slate-400"},Uy={class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-20 gap-x-12"},qy=["href"],Hy={class:"aspect-[4/3] rounded-xl overflow-hidden bg-surface-container-low mb-8"},Gy=["src"],jy={class:"flex items-center gap-4 mb-4"},Wy={class:"text-[0.6875rem] font-medium text-outline uppercase tracking-widest"},Yy={class:"text-xl font-bold leading-tight mb-4 tracking-tight text-slate-900 dark:text-slate-100 hover:text-tertiary transition-colors"},Ky={class:"text-slate-700 dark:text-slate-400 text-sm leading-relaxed mb-4"},Xy={key:0,class:"flex flex-wrap gap-2 mb-6"},Qy={class:"mt-auto flex items-center justify-between text-[0.6875rem] font-bold uppercase tracking-widest text-outline"},Jy={class:"mt-32 pt-12 border-t border-outline-variant/20 flex justify-center items-center gap-8"},Zy=["disabled"],nx={class:"flex gap-4"},ex=["onClick"],tx=["disabled"],rx=H({__name:"BlogListLayout",setup(n){const{page:e}=Ut(),{headerConfig:t,footerConfig:r,uiConfig:a}=qt(),s=R(()=>a.value.common||{}),i=R(()=>a.value.blog||{}),o=R(()=>i.value.categoryMeta||{}),l=R(()=>String(i.value.readingTimeTemplate||"")),c=Object.assign({"/about-me.md":Xr,"/blogs/2022/202202-logseq-build-your-own-wiki.md":Qr,"/blogs/2022/202203-mesh-shaped-cloud-native-developer.md":Jr,"/blogs/2022/202203-mesh-shaped-recap.md":Zr,"/blogs/2022/202205-container-k8s-docker.md":na,"/blogs/2022/202205-router-proxy-gtw.md":ea,"/blogs/2022/202211-cloud-native-engineering.md":ta,"/blogs/2022/202212-api-design-inspired-by-google-api-design.md":ra,"/blogs/2022/202212-go-monorepo-tutorial.md":aa,"/blogs/2022/202212-logseq-customized-with-clojure-and-css.md":sa,"/blogs/2022/202212-logseq-pkm.md":ia,"/blogs/2023/202302-iac-and-terraform.md":oa,"/blogs/2023/202304-draw-architecture-diagram.md":la,"/blogs/2023/202304-tunnel-vpn-vpc.md":ca,"/blogs/2023/202306-remote-development-in-cloud.md":ua,"/blogs/2023/202312-agile-and-lean.md":da,"/blogs/2023/202312-cobra-cli.md":ha,"/blogs/2023/202312-devcontainer-tutorial.md":fa,"/blogs/2023/202312-illustrated-ai.md":pa,"/blogs/2023/202312-kubernetes-operator.md":ga,"/blogs/2023/202312-windows-workspaces.md":ma,"/blogs/2024/202401-cloud-native-practices.md":va,"/blogs/2024/202401-eassy-2024.md":_a,"/blogs/2024/202401-illustrations.md":ba,"/blogs/2024/202402-llm-application.md":ya,"/blogs/2024/202403-ai-and-human.md":xa,"/blogs/2024/202406-fork-oss.md":ka,"/blogs/2024/202406-k3s-blogs.md":wa,"/blogs/2024/202412-ai-powered-pkm.md":Aa,"/blogs/2026/202602-domain-spec-agents.md":Ca,"/blogs/2026/202602-pov-agentic-engineering.md":Ta,"/blogs/2026/202602-pov-standard-automation-selfserve.md":Sa,"/blogs/index.md":Ma,"/en/about-me.md":$a,"/en/blogs/2023/202302-iac-and-terraform.md":Pa,"/en/blogs/index.md":Ia,"/en/index.md":Da,"/index.md":La}),d=xo(c);function p(L){var nn,Y;const{modulePath:P,raw:D}=ko(L,c,d);if(!D)return console.warn(`[BlogListLayout] markdown not found for path: ${L}`),console.warn(`[BlogListLayout] attempted module key: ${P}`),null;const V=wo(D),tn=pn(L);return{path:tn,category:V.category,tags:Array.isArray(V.tags)?V.tags.map(ln=>String(ln)):[],date:V.date,title:V.title||((Y=(nn=tn.split("/").pop())==null?void 0:nn.replace(/\.md$/,""))==null?void 0:Y.replace(/[-_]/g," "))||String(s.value.untitled||"Untitled"),description:V.description||V.articleLead||Co(D)||"",readingTime:To(D,{template:l.value}),action:V.action,image:V.image}}const u=R(()=>{const L=e.value.featured;if(!L)return null;if(typeof L=="string")return p(L);if(typeof L=="object"&&typeof L.path=="string"){const P=p(L.path);return P?{...P,...L,path:P.path}:null}return typeof L=="object"?L:null}),h=R(()=>{var tn;const L=e.value.posts,P=pn(((tn=u.value)==null?void 0:tn.path)||"");if(Array.isArray(L))return L.filter(nn=>pn(nn.path||"")!==P);if(!L||typeof L!="object")return[];const D=pn(L.path||"blogs/**/*.md"),V=So(D);return Object.keys(c).map(nn=>pn(nn)).filter(nn=>V.test(nn)).filter(nn=>!nn.endsWith("/index.md")).sort((nn,Y)=>{const ln=Nt(Y).localeCompare(Nt(nn));return ln!==0?ln:Y.localeCompare(nn)}).map(nn=>p(nn)).filter(nn=>!!nn).filter(nn=>pn(nn.path||"")!==P)}),v=R(()=>{const L=e.value.posts;return!L||typeof L!="object"||Array.isArray(L)?h.value.length||1:Math.max(1,Number(L.perPage||L.count||9))}),_=R(()=>{const L=e.value.posts;return!L||typeof L!="object"||Array.isArray(L)?Math.max(1,Number(e.value.paginationCurrent||1)):Math.max(1,Number(L.page||e.value.paginationCurrent||1))}),y=rn(1);Dn(_,L=>{y.value=L},{immediate:!0});const w=R(()=>Math.max(1,Math.ceil(h.value.length/v.value))),A=R(()=>Math.min(Math.max(1,y.value),w.value)),I=R(()=>{const L=(A.value-1)*v.value,P=L+v.value;return h.value.slice(L,P)}),b=R(()=>Array.from({length:w.value},(L,P)=>String(P+1)));function T(L){y.value=Math.min(Math.max(1,L),w.value)}function k(){T(A.value-1)}function E(){T(A.value+1)}function F(L){return ns({category:String(L||""),categoryMeta:o.value})}function W(L){return es({category:String(L||""),categoryMeta:o.value})}function U(L){const P=String(L.category||"").trim();return(Array.isArray(L.tags)?L.tags:[]).filter(V=>{const tn=String(V||"").trim();return!!tn&&tn!==P})}return(L,P)=>{var D,V,tn,nn,Y,ln,hn,dn,Tn,xn;return m(),x("div",ky,[q(zt,{"site-title":g(t).siteTitle||g(e).siteTitle,"nav-links":g(t).navLinks||g(e).navLinks||[],"show-subscribe":!!g(t).showSubscribe,"subscribe-button-text":g(t).subscribeButtonText,"nav-height-class":"h-20"},null,8,["site-title","nav-links","show-subscribe","subscribe-button-text"]),f("main",wy,[f("section",Ay,[f("div",Cy,[f("div",Ty,[f("div",Sy,[f("img",{class:"w-full aspect-[16/9] object-cover transition-all duration-700 hover:scale-105",src:g(Ye)((D=u.value)==null?void 0:D.image,(V=u.value)==null?void 0:V.path)},null,8,My)])]),f("div",$y,[f("div",Py,[f("span",{class:Q(["text-[0.6875rem] font-bold uppercase tracking-[0.05em] px-2 py-1 rounded",W((tn=u.value)==null?void 0:tn.category)])},S(F((nn=u.value)==null?void 0:nn.category)),3),f("span",Iy,S((Y=u.value)==null?void 0:Y.date),1)]),f("h1",Dy,S((ln=u.value)==null?void 0:ln.title),1),f("p",Ly,S((hn=u.value)==null?void 0:hn.description),1),u.value&&U(u.value).length?(m(),x("div",Ny,[(m(!0),x(Z,null,sn(U(u.value),cn=>(m(),x("span",{key:`featured-${u.value.path||u.value.title}-${cn}`,class:"px-2 py-0.5 rounded bg-surface-container-high text-[0.6875rem] font-semibold text-on-surface-variant dark:text-slate-400"}," #"+S(cn),1))),128))])):B("",!0),f("div",Ey,[f("span",Oy,S((dn=u.value)==null?void 0:dn.readingTime),1),f("a",{class:"text-tertiary font-bold text-sm flex items-center gap-2 group",href:g(Ue)((Tn=u.value)==null?void 0:Tn.path)},[Cn(S(((xn=u.value)==null?void 0:xn.action)||i.value.readArticle||"Read Article")+" ",1),P[0]||(P[0]=f("span",{class:"material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform"},"arrow_forward",-1))],8,Ry)])])])]),f("header",Vy,[f("div",By,[f("h2",zy,S(g(e).listTitle||i.value.latestArticles||"Latest Articles"),1),f("p",Fy,S(g(e).listDescription||i.value.latestArticlesDescription||"Displayed in reverse chronological order."),1)])]),f("div",Uy,[(m(!0),x(Z,null,sn(I.value,cn=>(m(),x("article",{key:cn.title,class:"flex flex-col"},[f("a",{href:g(Ue)(cn.path),class:"group flex flex-col h-full"},[f("div",Hy,[f("img",{class:"w-full h-full object-cover grayscale-[0.8] hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-110",src:g(Ye)(cn.image,cn.path)},null,8,Gy)]),f("div",jy,[f("span",{class:Q(["text-[0.6875rem] font-bold uppercase tracking-[0.05em] px-2 py-0.5 rounded",W(cn.category)])},S(F(cn.category)),3),P[1]||(P[1]=f("span",{class:"w-1 h-1 bg-outline-variant rounded-full"},null,-1)),f("span",Wy,S(cn.date),1)]),f("h3",Yy,S(cn.title),1),f("p",Ky,S(cn.description),1),U(cn).length?(m(),x("div",Xy,[(m(!0),x(Z,null,sn(U(cn),Ln=>(m(),x("span",{key:`${cn.path||cn.title}-${Ln}`,class:"px-2 py-0.5 rounded bg-surface-container-high text-[0.6875rem] font-semibold text-on-surface-variant dark:text-slate-400"}," #"+S(Ln),1))),128))])):B("",!0),f("div",Qy,[f("span",null,S(cn.readingTime),1),P[2]||(P[2]=f("span",{class:"material-symbols-outlined text-sm"},"north_east",-1))])],8,qy)]))),128))]),f("div",Jy,[f("button",{type:"button",disabled:A.value<=1,class:"text-xs font-bold uppercase tracking-widest text-outline hover:text-on-surface transition-colors flex items-center gap-2 disabled:opacity-40 disabled:cursor-not-allowed",onClick:k},[P[3]||(P[3]=f("span",{class:"material-symbols-outlined text-sm"},"arrow_back",-1)),Cn(" "+S(g(e).paginationPrevious||i.value.paginationPrevious||"Previous"),1)],8,Zy),f("div",nx,[(m(!0),x(Z,null,sn(b.value,cn=>(m(),x("button",{key:cn,type:"button",class:Q(cn===String(A.value)?"w-8 h-8 flex items-center justify-center rounded-full bg-primary text-on-primary text-xs font-bold":"w-8 h-8 flex items-center justify-center rounded-full hover:bg-surface-container-high text-xs font-bold cursor-pointer"),onClick:Ln=>T(Number(cn))},S(cn),11,ex))),128))]),f("button",{type:"button",disabled:A.value>=w.value,class:"text-xs font-bold uppercase tracking-widest text-on-surface hover:text-tertiary transition-colors flex items-center gap-2 disabled:opacity-40 disabled:cursor-not-allowed",onClick:E},[Cn(S(g(e).paginationNext||i.value.paginationNext||"Next")+" ",1),P[4]||(P[4]=f("span",{class:"material-symbols-outlined text-sm"},"arrow_forward",-1))],8,tx)])]),q(Ft,{title:g(r).title||g(e).footerTitle,description:g(r).description||g(e).footerDescription,links:g(r).links||g(e).footerLinks||[],"social-icons":g(r).socialIcons||g(e).socialIcons||[]},null,8,["title","description","links","social-icons"])])}}}),ax={class:"bg-surface dark:bg-slate-900 text-on-surface dark:text-slate-100"},sx={class:"pt-16 pb-20 bg-surface dark:bg-slate-900"},ix={class:"relative overflow-hidden bg-surface-container-low dark:bg-slate-950 mb-14"},ox={class:"max-w-6xl mx-auto px-6 lg:px-10 py-14 lg:py-16 relative z-10"},lx={class:"grid grid-cols-1 lg:grid-cols-12 gap-10 items-center"},cx={class:"lg:col-span-7 flex flex-col justify-center gap-5"},ux={class:"text-4xl lg:text-5xl font-black tracking-tight leading-tight"},dx={class:"text-base lg:text-lg text-on-surface-variant dark:text-slate-400 leading-relaxed"},hx={class:"flex flex-wrap items-center gap-4 text-sm text-on-surface-variant dark:text-slate-400"},fx={key:0,class:"flex flex-wrap gap-2 pt-1"},px={class:"lg:col-span-5 hidden lg:flex justify-center"},gx={class:"relative w-full max-w-md aspect-square rounded-full bg-surface-container-lowest/90 border border-outline-variant/20 shadow-[0px_24px_48px_rgba(42,52,57,0.08)] p-7"},mx=["src","alt"],vx={class:"max-w-6xl mx-auto px-6 lg:px-10"},_x={class:"grid grid-cols-1 lg:grid-cols-12 gap-10"},bx={key:0,class:"lg:col-span-3 order-2 lg:order-1"},yx={class:"lg:sticky lg:top-28 pl-1"},xx={class:"text-s font-bold uppercase tracking-widest text-on-surface-variant dark:text-slate-400 mb-4 -ml-1"},kx={class:"flex flex-col gap-2 pt-1 pb-4 border-b border-outline-variant/30 dark:border-slate-600"},wx=["href"],Ax={class:"lg:col-span-9 order-1 lg:order-2 vp-doc max-w-none dark:text-slate-300"},Cx=H({__name:"BlogLayout",setup(n){const{page:e}=pe(),{page:t}=Ut(),{headerConfig:r,footerConfig:a,uiConfig:s}=qt(),i=R(()=>s.value.blog||{}),o=R(()=>i.value.categoryMeta||{}),l=Object.assign({"/about-me.md":Xr,"/blogs/2022/202202-logseq-build-your-own-wiki.md":Qr,"/blogs/2022/202203-mesh-shaped-cloud-native-developer.md":Jr,"/blogs/2022/202203-mesh-shaped-recap.md":Zr,"/blogs/2022/202205-container-k8s-docker.md":na,"/blogs/2022/202205-router-proxy-gtw.md":ea,"/blogs/2022/202211-cloud-native-engineering.md":ta,"/blogs/2022/202212-api-design-inspired-by-google-api-design.md":ra,"/blogs/2022/202212-go-monorepo-tutorial.md":aa,"/blogs/2022/202212-logseq-customized-with-clojure-and-css.md":sa,"/blogs/2022/202212-logseq-pkm.md":ia,"/blogs/2023/202302-iac-and-terraform.md":oa,"/blogs/2023/202304-draw-architecture-diagram.md":la,"/blogs/2023/202304-tunnel-vpn-vpc.md":ca,"/blogs/2023/202306-remote-development-in-cloud.md":ua,"/blogs/2023/202312-agile-and-lean.md":da,"/blogs/2023/202312-cobra-cli.md":ha,"/blogs/2023/202312-devcontainer-tutorial.md":fa,"/blogs/2023/202312-illustrated-ai.md":pa,"/blogs/2023/202312-kubernetes-operator.md":ga,"/blogs/2023/202312-windows-workspaces.md":ma,"/blogs/2024/202401-cloud-native-practices.md":va,"/blogs/2024/202401-eassy-2024.md":_a,"/blogs/2024/202401-illustrations.md":ba,"/blogs/2024/202402-llm-application.md":ya,"/blogs/2024/202403-ai-and-human.md":xa,"/blogs/2024/202406-fork-oss.md":ka,"/blogs/2024/202406-k3s-blogs.md":wa,"/blogs/2024/202412-ai-powered-pkm.md":Aa,"/blogs/2026/202602-domain-spec-agents.md":Ca,"/blogs/2026/202602-pov-agentic-engineering.md":Ta,"/blogs/2026/202602-pov-standard-automation-selfserve.md":Sa,"/blogs/index.md":Ma,"/en/about-me.md":$a,"/en/blogs/2023/202302-iac-and-terraform.md":Pa,"/en/blogs/index.md":Ia,"/en/index.md":Da,"/index.md":La});function c(I){return`/${pn(I)}`}const d=R(()=>{const I=String(e.value.relativePath||""),b=c(I);return l[b]||""}),p=R(()=>To(d.value,{template:String(i.value.readingTimeTemplate||"")})),u=rn([]),h=rn("");function v(){if(typeof window>"u"||u.value.length===0){h.value="";return}const I=window.scrollY+180;let b=u.value[0].href;for(const T of u.value){const k=T.href.slice(1),E=document.getElementById(k);E&&E.offsetTop<=I&&(b=T.href)}h.value=b}function _(){if(typeof window>"u")return;const I=Array.from(document.querySelectorAll(".vp-doc h2[id]"));u.value=I.map(b=>{var T;return{text:((T=b.textContent)==null?void 0:T.trim())||"",href:`#${b.id}`}}).filter(b=>!!b.text),v()}async function y(){await Fr(),requestAnimationFrame(()=>{_()})}On(()=>{typeof window>"u"||(window.addEventListener("scroll",v,{passive:!0}),y())}),Ur(()=>{typeof window>"u"||window.removeEventListener("scroll",v)}),Dn(()=>e.value.relativePath,()=>{y()}),Dn(d,()=>{y()});const w=R(()=>ns({category:String(t.value.category||""),categoryMeta:o.value})),A=R(()=>es({category:String(t.value.category||""),categoryMeta:o.value}));return(I,b)=>{const T=re("Content");return m(),x("div",ax,[q(zt,{"site-title":g(r).siteTitle,"nav-links":g(r).navLinks||[],"show-subscribe":!!g(r).showSubscribe,"subscribe-button-text":g(r).subscribeButtonText,"nav-height-class":"h-20"},null,8,["site-title","nav-links","show-subscribe","subscribe-button-text"]),f("main",sx,[f("header",ix,[b[3]||(b[3]=f("div",{class:"absolute inset-0 mesh-gradient opacity-60"},null,-1)),b[4]||(b[4]=f("div",{class:"absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent"},null,-1)),f("div",ox,[f("div",lx,[f("div",cx,[f("span",{class:Q(["inline-flex w-fit px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest",A.value])},S(w.value),3),f("h1",ux,S(g(t).title),1),f("p",dx,S(g(t).description),1),f("div",hx,[f("span",null,S(g(t).date),1),b[0]||(b[0]=f("span",{class:"w-1 h-1 rounded-full bg-outline"},null,-1)),f("span",null,S(p.value),1)]),(g(t).tags||[]).length?(m(),x("div",fx,[(m(!0),x(Z,null,sn(g(t).tags||[],k=>(m(),x("span",{key:k,class:"px-2.5 py-1 rounded bg-surface-container-high dark:bg-slate-700 text-xs font-semibold text-on-surface-variant dark:text-slate-400"}," #"+S(k),1))),128))])):B("",!0)]),f("div",px,[f("div",gx,[b[1]||(b[1]=f("div",{class:"absolute inset-4 rounded-full border-2 border-dashed border-primary/30 animate-[spin_20s_linear_infinite]"},null,-1)),b[2]||(b[2]=f("div",{class:"absolute inset-10 rounded-full border border-primary/20"},null,-1)),f("img",{src:g(Ye)(g(t).image,g(e).relativePath),alt:g(t).title,class:"relative z-10 w-full h-full object-cover rounded-full"},null,8,mx)])])])])]),f("section",vx,[f("div",_x,[u.value.length?(m(),x("aside",bx,[f("div",yx,[f("h3",xx,S(i.value.tocTitle||"Contents"),1),f("nav",kx,[(m(!0),x(Z,null,sn(u.value,k=>(m(),x("a",{key:k.href,href:k.href,class:Q(k.href===h.value?"relative text-sm font-semibold text-primary pl-6 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-[2px] before:h-4 before:bg-primary before:rounded dark:text-tertiary":"text-sm font-thin text-on-surface dark:text-slate-300 hover:text-primary pl-6")},S(k.text),11,wx))),128))])])])):B("",!0),f("article",Ax,[q(T)])])])]),q(Ft,{title:g(a).title,description:g(a).description,links:g(a).links||[],"social-icons":g(a).socialIcons||[]},null,8,["title","description","links","social-icons"])])}}}),Tx=H({__name:"Layout",setup(n){const{frontmatter:e,page:t}=pe(),r=R(()=>{const a=String(e.value.layout||"");if(a)return a;const s=String(t.value.relativePath||"");return s.startsWith("blogs/")||s.startsWith("en/blogs/")?"blog":""});return(a,s)=>r.value==="home"?(m(),G(Gf,{key:0})):r.value==="about-me"?(m(),G(xy,{key:1})):r.value==="blog-list"?(m(),G(rx,{key:2})):r.value==="blog"?(m(),G(Cx,{key:3})):(m(),G(g(hi).Layout,{key:4}))}});let Re=null;function Sx(){let n=!1;return async()=>{if(typeof window>"u")return;const{default:e}=await ti(async()=>{const{default:a}=await import("./mermaid.core.BwUYC7YS.js").then(s=>s.bd);return{default:a}},__vite__mapDeps([2,1]));n||(e.initialize({startOnLoad:!1,securityLevel:"loose"}),n=!0);const t=document.querySelectorAll(".vp-doc div.language-mermaid pre code");for(const a of t){const s=a.closest("pre"),i=a.closest("div.language-mermaid");if(!s||!i||s.dataset.mermaidRendered==="true")continue;s.classList.remove("shiki","shiki-themes","vp-code"),s.classList.add("mermaid"),s.textContent=a.textContent||"",s.dataset.mermaidRendered="true";const o=i.querySelector("button.copy"),l=i.querySelector("span.lang");o==null||o.remove(),l==null||l.remove(),i.classList.remove("language-mermaid")}const r=Array.from(document.querySelectorAll(".vp-doc pre.mermaid"));r.length>0&&await e.run({nodes:r})}}const sk={extends:hi,Layout:Tx,enhanceApp({router:n}){if(typeof window>"u")return;Re=Re||Sx();const e=()=>{requestAnimationFrame(()=>{Re==null||Re()})};e(),n.onAfterRouteChanged=e}};export{qx as $,Je as A,Wa as B,ja as C,xe as D,St as E,Ix as F,en as G,td as H,Ox as I,rk as J,ak as K,tk as L,ek as M,nk as N,Zx as O,Jx as P,K_ as Q,Kx as R,Qx as S,Xx as T,jx as U,Yx as V,Wx as W,Gx as X,Fx as Y,zx as Z,Hx as _,Bx as a,d2 as b,Vx as c,Rx as d,Ux as e,Wi as f,Nx as g,Ki as h,Ex as i,$x as j,Lx as k,y2 as l,Px as m,Dx as n,Xi as o,ao as p,Ka as q,Qt as r,le as s,sk as t,M2 as u,S2 as v,$e as w,T2 as x,C2 as y,Mt as z};
