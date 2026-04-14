const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/VPLocalSearchBox.BSDqH--D.js","assets/chunks/framework.CdjpmwdR.js","assets/chunks/mermaid.core.zAc21AG6.js"])))=>i.map(i=>d[i]);
import{d as U,c as w,r as C,n as Q,o as f,a as Ae,t as S,b as G,w as N,T as Oa,e as q,_ as X,u as gn,i as Qr,f as Jr,g as Ra,h as R,j as p,k as m,l as un,m as fa,p as ae,q as De,s as Et,v as Ee,x as za,y as qa,z as Zr,A as el,F as Z,B as ie,C as tn,D as Ot,E as j,G as ks,H as ze,I as xs,J as mn,K as en,L as Rt,M as nl,N as Va,O as va,P as Ba,Q as As,R as zt,S as tl,U as al,V as Cs,W as Ts,X as Ss,Y as ol,Z as il,$ as Fa,a0 as sl,a1 as rl,a2 as ll}from"./framework.CdjpmwdR.js";const cl=U({__name:"VPBadge",props:{text:{},type:{default:"tip"}},setup(e){return(n,t)=>(f(),w("span",{class:Q(["VPBadge",e.type])},[C(n.$slots,"default",{},()=>[Ae(S(e.text),1)])],2))}}),ul={key:0,class:"VPBackdrop"},dl=U({__name:"VPBackdrop",props:{show:{type:Boolean}},setup(e){return(n,t)=>(f(),G(Oa,{name:"fade"},{default:N(()=>[e.show?(f(),w("div",ul)):q("",!0)]),_:1}))}}),hl=X(dl,[["__scopeId","data-v-49e9b6df"]]),ne=gn;function pl(e,n){let t,a=!1;return()=>{t&&clearTimeout(t),a?t=setTimeout(e,n):(e(),(a=!0)&&setTimeout(()=>a=!1,n))}}function ba(e){return e.startsWith("/")?e:`/${e}`}function ja(e){const{pathname:n,search:t,hash:a,protocol:o}=new URL(e,"http://a.com");if(Qr(e)||e.startsWith("#")||!o.startsWith("http")||!Jr(n))return e;const{site:i}=ne(),s=n.endsWith("/")||n.endsWith(".html")?e:e.replace(/(?:(^\.+)\/)?.*$/,`$1${n.replace(/(\.md)?$/,i.value.cleanUrls?"":".html")}${t}${a}`);return Ra(s)}function Yn({correspondingLink:e=!1}={}){const{site:n,localeIndex:t,page:a,theme:o,hash:i}=ne(),s=R(()=>{var l,c;return{label:(l=n.value.locales[t.value])==null?void 0:l.label,link:((c=n.value.locales[t.value])==null?void 0:c.link)||(t.value==="root"?"/":`/${t.value}/`)}});return{localeLinks:R(()=>Object.entries(n.value.locales).flatMap(([l,c])=>s.value.label===c.label?[]:{text:c.label,link:gl(c.link||(l==="root"?"/":`/${l}/`),o.value.i18nRouting!==!1&&e,a.value.relativePath.slice(s.value.link.length-1),!n.value.cleanUrls)+i.value})),currentLang:s}}function gl(e,n,t,a){return n?e.replace(/\/$/,"")+ba(t.replace(/(^|\/)index\.md$/,"$1").replace(/\.md$/,a?".html":"")):e}const ml={class:"NotFound"},fl={class:"code"},vl={class:"title"},bl={class:"quote"},yl={class:"action"},_l=["href","aria-label"],wl=U({__name:"NotFound",setup(e){const{theme:n}=ne(),{currentLang:t}=Yn();return(a,o)=>{var i,s,r,l,c;return f(),w("div",ml,[p("p",fl,S(((i=m(n).notFound)==null?void 0:i.code)??"404"),1),p("h1",vl,S(((s=m(n).notFound)==null?void 0:s.title)??"PAGE NOT FOUND"),1),o[0]||(o[0]=p("div",{class:"divider"},null,-1)),p("blockquote",bl,S(((r=m(n).notFound)==null?void 0:r.quote)??"But if you don't change your direction, and if you keep looking, you may end up where you are heading."),1),p("div",yl,[p("a",{class:"link",href:m(Ra)(m(t).link),"aria-label":((l=m(n).notFound)==null?void 0:l.linkLabel)??"go to home"},S(((c=m(n).notFound)==null?void 0:c.linkText)??"Take me home"),9,_l)])])}}}),kl=X(wl,[["__scopeId","data-v-e6e96a08"]]);function Is(e,n){if(Array.isArray(e))return st(e);if(e==null)return[];n=ba(n);const t=Object.keys(e).sort((o,i)=>i.split("/").length-o.split("/").length).find(o=>n.startsWith(ba(o))),a=t?e[t]:[];return Array.isArray(a)?st(a):st(a.items,a.base)}function xl(e){const n=[];let t=0;for(const a in e){const o=e[a];if(o.items){t=n.push(o);continue}n[t]||n.push({items:[]}),n[t].items.push(o)}return n}function Al(e){const n=[];function t(a){for(const o of a)o.text&&o.link&&n.push({text:o.text,link:o.link,docFooterText:o.docFooterText}),o.items&&t(o.items)}return t(e),n}function ya(e,n){return Array.isArray(n)?n.some(t=>ya(e,t)):un(e,n.link)?!0:n.items?ya(e,n.items):!1}function st(e,n){return[...e].map(t=>{const a={...t},o=a.base||n;return o&&a.link&&(a.link=o+a.link),a.items&&(a.items=st(a.items,o)),a})}function Qe(){const{frontmatter:e,page:n,theme:t}=ne(),a=fa("(min-width: 960px)"),o=ae(!1),i=R(()=>{const b=t.value.sidebar,_=n.value.relativePath;return b?Is(b,_):[]}),s=ae(i.value);De(i,(b,_)=>{JSON.stringify(b)!==JSON.stringify(_)&&(s.value=i.value)});const r=R(()=>e.value.sidebar!==!1&&s.value.length>0&&e.value.layout!=="home"),l=R(()=>c?e.value.aside==null?t.value.aside==="left":e.value.aside==="left":!1),c=R(()=>e.value.layout==="home"?!1:e.value.aside!=null?!!e.value.aside:t.value.aside!==!1),d=R(()=>r.value&&a.value),g=R(()=>r.value?xl(s.value):[]);function u(){o.value=!0}function h(){o.value=!1}function v(){o.value?h():u()}return{isOpen:o,sidebar:s,sidebarGroups:g,hasSidebar:r,hasAside:c,leftAside:l,isSidebarEnabled:d,open:u,close:h,toggle:v}}function Cl(e,n){let t;Et(()=>{t=e.value?document.activeElement:void 0}),Ee(()=>{window.addEventListener("keyup",a)}),za(()=>{window.removeEventListener("keyup",a)});function a(o){o.key==="Escape"&&e.value&&(n(),t==null||t.focus())}}function Tl(e){const{page:n,hash:t}=ne(),a=ae(!1),o=R(()=>e.value.collapsed!=null),i=R(()=>!!e.value.link),s=ae(!1),r=()=>{s.value=un(n.value.relativePath,e.value.link)};De([n,e,t],r),Ee(r);const l=R(()=>s.value?!0:e.value.items?ya(n.value.relativePath,e.value.items):!1),c=R(()=>!!(e.value.items&&e.value.items.length));Et(()=>{a.value=!!(o.value&&e.value.collapsed)}),qa(()=>{(s.value||l.value)&&(a.value=!1)});function d(){o.value&&(a.value=!a.value)}return{collapsed:a,collapsible:o,isLink:i,isActiveLink:s,hasActiveLink:l,hasChildren:c,toggle:d}}function Sl(){const{hasSidebar:e}=Qe(),n=fa("(min-width: 960px)"),t=fa("(min-width: 1280px)");return{isAsideEnabled:R(()=>!t.value&&!n.value?!1:e.value?t.value:n.value)}}const Il=/\b(?:VPBadge|header-anchor|footnote-ref|ignore-header)\b/,_a=[];function Ps(e){return typeof e.outline=="object"&&!Array.isArray(e.outline)&&e.outline.label||e.outlineTitle||"On this page"}function Ua(e){const n=[...document.querySelectorAll(".VPDoc :where(h1,h2,h3,h4,h5,h6)")].filter(t=>t.id&&t.hasChildNodes()).map(t=>{const a=Number(t.tagName[1]);return{element:t,title:Pl(t),link:"#"+t.id,level:a}});return Ml(n,e)}function Pl(e){let n="";for(const t of e.childNodes)if(t.nodeType===1){if(Il.test(t.className))continue;n+=t.textContent}else t.nodeType===3&&(n+=t.textContent);return n.trim()}function Ml(e,n){if(n===!1)return[];const t=(typeof n=="object"&&!Array.isArray(n)?n.level:n)||2,[a,o]=typeof t=="number"?[t,t]:t==="deep"?[2,6]:t;return $l(e,a,o)}function Dl(e,n){const{isAsideEnabled:t}=Sl(),a=pl(i,100);let o=null;Ee(()=>{requestAnimationFrame(i),window.addEventListener("scroll",a)}),Zr(()=>{s(location.hash)}),za(()=>{window.removeEventListener("scroll",a)});function i(){if(!t.value)return;const r=window.scrollY,l=window.innerHeight,c=document.body.offsetHeight,d=Math.abs(r+l-c)<1,g=_a.map(({element:h,link:v})=>({link:v,top:Ll(h)})).filter(({top:h})=>!Number.isNaN(h)).sort((h,v)=>h.top-v.top);if(!g.length){s(null);return}if(r<1){s(null);return}if(d){s(g[g.length-1].link);return}let u=null;for(const{link:h,top:v}of g){if(v>r+el()+4)break;u=h}s(u)}function s(r){o&&o.classList.remove("active"),r==null?o=null:o=e.value.querySelector(`a[href="${decodeURIComponent(r)}"]`);const l=o;l?(l.classList.add("active"),n.value.style.top=l.offsetTop+39+"px",n.value.style.opacity="1"):(n.value.style.top="33px",n.value.style.opacity="0")}}function Ll(e){let n=0;for(;e!==document.body;){if(e===null)return NaN;n+=e.offsetTop,e=e.offsetParent}return n}function $l(e,n,t){_a.length=0;const a=[],o=[];return e.forEach(i=>{const s={...i,children:[]};let r=o[o.length-1];for(;r&&r.level>=s.level;)o.pop(),r=o[o.length-1];if(s.element.classList.contains("ignore-header")||r&&"shouldIgnore"in r){o.push({level:s.level,shouldIgnore:!0});return}s.level>t||s.level<n||(_a.push({element:s.element,link:s.link}),r?r.children.push(s):a.push(s),o.push(s))}),a}const Nl=["href","title"],El=U({__name:"VPDocOutlineItem",props:{headers:{},root:{type:Boolean}},setup(e){function n({target:t}){const a=t.href.split("#")[1],o=document.getElementById(decodeURIComponent(a));o==null||o.focus({preventScroll:!0})}return(t,a)=>{const o=tn("VPDocOutlineItem",!0);return f(),w("ul",{class:Q(["VPDocOutlineItem",e.root?"root":"nested"])},[(f(!0),w(Z,null,ie(e.headers,({children:i,link:s,title:r})=>(f(),w("li",null,[p("a",{class:"outline-link",href:s,onClick:n,title:r},S(r),9,Nl),i!=null&&i.length?(f(),G(o,{key:0,headers:i},null,8,["headers"])):q("",!0)]))),256))],2)}}}),Ms=X(El,[["__scopeId","data-v-4034b050"]]),Ol={class:"content"},Rl={"aria-level":"2",class:"outline-title",id:"doc-outline-aria-label",role:"heading"},zl=U({__name:"VPDocAsideOutline",setup(e){const{frontmatter:n,theme:t}=ne(),a=ks([]);Ot(()=>{a.value=Ua(n.value.outline??t.value.outline)});const o=ae(),i=ae();return Dl(o,i),(s,r)=>(f(),w("nav",{"aria-labelledby":"doc-outline-aria-label",class:Q(["VPDocAsideOutline",{"has-outline":a.value.length>0}]),ref_key:"container",ref:o},[p("div",Ol,[p("div",{class:"outline-marker",ref_key:"marker",ref:i},null,512),p("div",Rl,S(m(Ps)(m(t))),1),j(Ms,{headers:a.value,root:!0},null,8,["headers"])])],2))}}),ql=X(zl,[["__scopeId","data-v-cc53f104"]]),Vl={class:"VPDocAsideCarbonAds"},Bl=U({__name:"VPDocAsideCarbonAds",props:{carbonAds:{}},setup(e){const n=()=>null;return(t,a)=>(f(),w("div",Vl,[j(m(n),{"carbon-ads":e.carbonAds},null,8,["carbon-ads"])]))}}),Fl={class:"VPDocAside"},jl=U({__name:"VPDocAside",setup(e){const{theme:n}=ne();return(t,a)=>(f(),w("div",Fl,[C(t.$slots,"aside-top",{},void 0,!0),C(t.$slots,"aside-outline-before",{},void 0,!0),j(ql),C(t.$slots,"aside-outline-after",{},void 0,!0),a[0]||(a[0]=p("div",{class:"spacer"},null,-1)),C(t.$slots,"aside-ads-before",{},void 0,!0),m(n).carbonAds?(f(),G(Bl,{key:0,"carbon-ads":m(n).carbonAds},null,8,["carbon-ads"])):q("",!0),C(t.$slots,"aside-ads-after",{},void 0,!0),C(t.$slots,"aside-bottom",{},void 0,!0)]))}}),Ul=X(jl,[["__scopeId","data-v-9516880d"]]);function Gl(){const{theme:e,page:n}=ne();return R(()=>{const{text:t="Edit this page",pattern:a=""}=e.value.editLink||{};let o;return typeof a=="function"?o=a(n.value):o=a.replace(/:path/g,n.value.filePath),{url:o,text:t}})}function Hl(){const{page:e,theme:n,frontmatter:t}=ne();return R(()=>{var c,d,g,u,h,v,b,_;const a=Is(n.value.sidebar,e.value.relativePath),o=Al(a),i=Wl(o,x=>x.link.replace(/[?#].*$/,"")),s=i.findIndex(x=>un(e.value.relativePath,x.link)),r=((c=n.value.docFooter)==null?void 0:c.prev)===!1&&!t.value.prev||t.value.prev===!1,l=((d=n.value.docFooter)==null?void 0:d.next)===!1&&!t.value.next||t.value.next===!1;return{prev:r?void 0:{text:(typeof t.value.prev=="string"?t.value.prev:typeof t.value.prev=="object"?t.value.prev.text:void 0)??((g=i[s-1])==null?void 0:g.docFooterText)??((u=i[s-1])==null?void 0:u.text),link:(typeof t.value.prev=="object"?t.value.prev.link:void 0)??((h=i[s-1])==null?void 0:h.link)},next:l?void 0:{text:(typeof t.value.next=="string"?t.value.next:typeof t.value.next=="object"?t.value.next.text:void 0)??((v=i[s+1])==null?void 0:v.docFooterText)??((b=i[s+1])==null?void 0:b.text),link:(typeof t.value.next=="object"?t.value.next.link:void 0)??((_=i[s+1])==null?void 0:_.link)}}})}function Wl(e,n){const t=new Set;return e.filter(a=>{const o=n(a);return t.has(o)?!1:t.add(o)})}const qe=U({__name:"VPLink",props:{tag:{},href:{},noIcon:{type:Boolean},target:{},rel:{}},setup(e){const n=e,t=R(()=>n.tag??(n.href?"a":"span")),a=R(()=>n.href&&xs.test(n.href)||n.target==="_blank");return(o,i)=>(f(),G(ze(t.value),{class:Q(["VPLink",{link:e.href,"vp-external-link-icon":a.value,"no-icon":e.noIcon}]),href:e.href?m(ja)(e.href):void 0,target:e.target??(a.value?"_blank":void 0),rel:e.rel??(a.value?"noreferrer":void 0)},{default:N(()=>[C(o.$slots,"default")]),_:3},8,["class","href","target","rel"]))}}),Kl={class:"VPLastUpdated"},Yl=["datetime"],Xl=U({__name:"VPDocFooterLastUpdated",setup(e){const{theme:n,page:t,lang:a}=ne(),o=R(()=>new Date(t.value.lastUpdated)),i=R(()=>o.value.toISOString()),s=ae("");return Ee(()=>{Et(()=>{var r,l,c;s.value=new Intl.DateTimeFormat((l=(r=n.value.lastUpdated)==null?void 0:r.formatOptions)!=null&&l.forceLocale?a.value:void 0,((c=n.value.lastUpdated)==null?void 0:c.formatOptions)??{dateStyle:"short",timeStyle:"short"}).format(o.value)})}),(r,l)=>{var c;return f(),w("p",Kl,[Ae(S(((c=m(n).lastUpdated)==null?void 0:c.text)||m(n).lastUpdatedText||"Last updated")+": ",1),p("time",{datetime:i.value},S(s.value),9,Yl)])}}}),Ql=X(Xl,[["__scopeId","data-v-3607c463"]]),Jl={key:0,class:"VPDocFooter"},Zl={key:0,class:"edit-info"},ec={key:0,class:"edit-link"},nc={key:1,class:"last-updated"},tc={key:1,class:"prev-next","aria-labelledby":"doc-footer-aria-label"},ac={class:"pager"},oc=["innerHTML"],ic=["innerHTML"],sc={class:"pager"},rc=["innerHTML"],lc=["innerHTML"],cc=U({__name:"VPDocFooter",setup(e){const{theme:n,page:t,frontmatter:a}=ne(),o=Gl(),i=Hl(),s=R(()=>n.value.editLink&&a.value.editLink!==!1),r=R(()=>t.value.lastUpdated),l=R(()=>s.value||r.value||i.value.prev||i.value.next);return(c,d)=>{var g,u,h,v;return l.value?(f(),w("footer",Jl,[C(c.$slots,"doc-footer-before",{},void 0,!0),s.value||r.value?(f(),w("div",Zl,[s.value?(f(),w("div",ec,[j(qe,{class:"edit-link-button",href:m(o).url,"no-icon":!0},{default:N(()=>[d[0]||(d[0]=p("span",{class:"vpi-square-pen edit-link-icon"},null,-1)),Ae(" "+S(m(o).text),1)]),_:1},8,["href"])])):q("",!0),r.value?(f(),w("div",nc,[j(Ql)])):q("",!0)])):q("",!0),(g=m(i).prev)!=null&&g.link||(u=m(i).next)!=null&&u.link?(f(),w("nav",tc,[d[1]||(d[1]=p("span",{class:"visually-hidden",id:"doc-footer-aria-label"},"Pager",-1)),p("div",ac,[(h=m(i).prev)!=null&&h.link?(f(),G(qe,{key:0,class:"pager-link prev",href:m(i).prev.link},{default:N(()=>{var b;return[p("span",{class:"desc",innerHTML:((b=m(n).docFooter)==null?void 0:b.prev)||"Previous page"},null,8,oc),p("span",{class:"title",innerHTML:m(i).prev.text},null,8,ic)]}),_:1},8,["href"])):q("",!0)]),p("div",sc,[(v=m(i).next)!=null&&v.link?(f(),G(qe,{key:0,class:"pager-link next",href:m(i).next.link},{default:N(()=>{var b;return[p("span",{class:"desc",innerHTML:((b=m(n).docFooter)==null?void 0:b.next)||"Next page"},null,8,rc),p("span",{class:"title",innerHTML:m(i).next.text},null,8,lc)]}),_:1},8,["href"])):q("",!0)])])):q("",!0)])):q("",!0)}}}),uc=X(cc,[["__scopeId","data-v-cd0721dd"]]),dc={class:"container"},hc={class:"aside-container"},pc={class:"aside-content"},gc={class:"content"},mc={class:"content-container"},fc={class:"main"},vc=U({__name:"VPDoc",setup(e){const{theme:n}=ne(),t=mn(),{hasSidebar:a,hasAside:o,leftAside:i}=Qe(),s=R(()=>t.path.replace(/[./]+/g,"_").replace(/_html$/,""));return(r,l)=>{const c=tn("Content");return f(),w("div",{class:Q(["VPDoc",{"has-sidebar":m(a),"has-aside":m(o)}])},[C(r.$slots,"doc-top",{},void 0,!0),p("div",dc,[m(o)?(f(),w("div",{key:0,class:Q(["aside",{"left-aside":m(i)}])},[l[0]||(l[0]=p("div",{class:"aside-curtain"},null,-1)),p("div",hc,[p("div",pc,[j(Ul,null,{"aside-top":N(()=>[C(r.$slots,"aside-top",{},void 0,!0)]),"aside-bottom":N(()=>[C(r.$slots,"aside-bottom",{},void 0,!0)]),"aside-outline-before":N(()=>[C(r.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":N(()=>[C(r.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":N(()=>[C(r.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":N(()=>[C(r.$slots,"aside-ads-after",{},void 0,!0)]),_:3})])])],2)):q("",!0),p("div",gc,[p("div",mc,[C(r.$slots,"doc-before",{},void 0,!0),p("main",fc,[j(c,{class:Q(["vp-doc",[s.value,m(n).externalLinkIcon&&"external-link-icon-enabled"]])},null,8,["class"])]),j(uc,null,{"doc-footer-before":N(()=>[C(r.$slots,"doc-footer-before",{},void 0,!0)]),_:3}),C(r.$slots,"doc-after",{},void 0,!0)])])]),C(r.$slots,"doc-bottom",{},void 0,!0)],2)}}}),bc=X(vc,[["__scopeId","data-v-f640936e"]]),yc=U({__name:"VPButton",props:{tag:{},size:{default:"medium"},theme:{default:"brand"},text:{},href:{},target:{},rel:{}},setup(e){const n=e,t=R(()=>n.href&&xs.test(n.href)),a=R(()=>n.tag||(n.href?"a":"button"));return(o,i)=>(f(),G(ze(a.value),{class:Q(["VPButton",[e.size,e.theme]]),href:e.href?m(ja)(e.href):void 0,target:n.target??(t.value?"_blank":void 0),rel:n.rel??(t.value?"noreferrer":void 0)},{default:N(()=>[Ae(S(e.text),1)]),_:1},8,["class","href","target","rel"]))}}),_c=X(yc,[["__scopeId","data-v-baf7dc9c"]]),wc=["src","alt"],kc=U({inheritAttrs:!1,__name:"VPImage",props:{image:{},alt:{}},setup(e){return(n,t)=>{const a=tn("VPImage",!0);return e.image?(f(),w(Z,{key:0},[typeof e.image=="string"||"src"in e.image?(f(),w("img",en({key:0,class:"VPImage"},typeof e.image=="string"?n.$attrs:{...e.image,...n.$attrs},{src:m(Ra)(typeof e.image=="string"?e.image:e.image.src),alt:e.alt??(typeof e.image=="string"?"":e.image.alt||"")}),null,16,wc)):(f(),w(Z,{key:1},[j(a,en({class:"dark",image:e.image.dark,alt:e.image.alt},n.$attrs),null,16,["image","alt"]),j(a,en({class:"light",image:e.image.light,alt:e.image.alt},n.$attrs),null,16,["image","alt"])],64))],64)):q("",!0)}}}),pt=X(kc,[["__scopeId","data-v-f9c85911"]]),xc={class:"container"},Ac={class:"main"},Cc={class:"heading"},Tc=["innerHTML"],Sc=["innerHTML"],Ic=["innerHTML"],Pc={key:0,class:"actions"},Mc={key:0,class:"image"},Dc={class:"image-container"},Lc=U({__name:"VPHero",props:{name:{},text:{},tagline:{},image:{},actions:{}},setup(e){const n=Rt("hero-image-slot-exists");return(t,a)=>(f(),w("div",{class:Q(["VPHero",{"has-image":e.image||m(n)}])},[p("div",xc,[p("div",Ac,[C(t.$slots,"home-hero-info-before",{},void 0,!0),C(t.$slots,"home-hero-info",{},()=>[p("h1",Cc,[e.name?(f(),w("span",{key:0,innerHTML:e.name,class:"name clip"},null,8,Tc)):q("",!0),e.text?(f(),w("span",{key:1,innerHTML:e.text,class:"text"},null,8,Sc)):q("",!0)]),e.tagline?(f(),w("p",{key:0,innerHTML:e.tagline,class:"tagline"},null,8,Ic)):q("",!0)],!0),C(t.$slots,"home-hero-info-after",{},void 0,!0),e.actions?(f(),w("div",Pc,[(f(!0),w(Z,null,ie(e.actions,o=>(f(),w("div",{key:o.link,class:"action"},[j(_c,{tag:"a",size:"medium",theme:o.theme,text:o.text,href:o.link,target:o.target,rel:o.rel},null,8,["theme","text","href","target","rel"])]))),128))])):q("",!0),C(t.$slots,"home-hero-actions-after",{},void 0,!0)]),e.image||m(n)?(f(),w("div",Mc,[p("div",Dc,[a[0]||(a[0]=p("div",{class:"image-bg"},null,-1)),C(t.$slots,"home-hero-image",{},()=>[e.image?(f(),G(pt,{key:0,class:"image-src",image:e.image},null,8,["image"])):q("",!0)],!0)])])):q("",!0)])],2))}}),$c=X(Lc,[["__scopeId","data-v-09b6ce43"]]),Nc=U({__name:"VPHomeHero",setup(e){const{frontmatter:n}=ne();return(t,a)=>m(n).hero?(f(),G($c,{key:0,class:"VPHomeHero",name:m(n).hero.name,text:m(n).hero.text,tagline:m(n).hero.tagline,image:m(n).hero.image,actions:m(n).hero.actions},{"home-hero-info-before":N(()=>[C(t.$slots,"home-hero-info-before")]),"home-hero-info":N(()=>[C(t.$slots,"home-hero-info")]),"home-hero-info-after":N(()=>[C(t.$slots,"home-hero-info-after")]),"home-hero-actions-after":N(()=>[C(t.$slots,"home-hero-actions-after")]),"home-hero-image":N(()=>[C(t.$slots,"home-hero-image")]),_:3},8,["name","text","tagline","image","actions"])):q("",!0)}}),Ec={class:"box"},Oc={key:0,class:"icon"},Rc=["innerHTML"],zc=["innerHTML"],qc=["innerHTML"],Vc={key:4,class:"link-text"},Bc={class:"link-text-value"},Fc=U({__name:"VPFeature",props:{icon:{},title:{},details:{},link:{},linkText:{},rel:{},target:{}},setup(e){return(n,t)=>(f(),G(qe,{class:"VPFeature",href:e.link,rel:e.rel,target:e.target,"no-icon":!0,tag:e.link?"a":"div"},{default:N(()=>[p("article",Ec,[typeof e.icon=="object"&&e.icon.wrap?(f(),w("div",Oc,[j(pt,{image:e.icon,alt:e.icon.alt,height:e.icon.height||48,width:e.icon.width||48},null,8,["image","alt","height","width"])])):typeof e.icon=="object"?(f(),G(pt,{key:1,image:e.icon,alt:e.icon.alt,height:e.icon.height||48,width:e.icon.width||48},null,8,["image","alt","height","width"])):e.icon?(f(),w("div",{key:2,class:"icon",innerHTML:e.icon},null,8,Rc)):q("",!0),p("h2",{class:"title",innerHTML:e.title},null,8,zc),e.details?(f(),w("p",{key:3,class:"details",innerHTML:e.details},null,8,qc)):q("",!0),e.linkText?(f(),w("div",Vc,[p("p",Bc,[Ae(S(e.linkText)+" ",1),t[0]||(t[0]=p("span",{class:"vpi-arrow-right link-text-icon"},null,-1))])])):q("",!0)])]),_:1},8,["href","rel","target","tag"]))}}),jc=X(Fc,[["__scopeId","data-v-67e0b8b6"]]),Uc={key:0,class:"VPFeatures"},Gc={class:"container"},Hc={class:"items"},Wc=U({__name:"VPFeatures",props:{features:{}},setup(e){const n=e,t=R(()=>{const a=n.features.length;if(a){if(a===2)return"grid-2";if(a===3)return"grid-3";if(a%3===0)return"grid-6";if(a>3)return"grid-4"}else return});return(a,o)=>e.features?(f(),w("div",Uc,[p("div",Gc,[p("div",Hc,[(f(!0),w(Z,null,ie(e.features,i=>(f(),w("div",{key:i.title,class:Q(["item",[t.value]])},[j(jc,{icon:i.icon,title:i.title,details:i.details,link:i.link,"link-text":i.linkText,rel:i.rel,target:i.target},null,8,["icon","title","details","link","link-text","rel","target"])],2))),128))])])])):q("",!0)}}),Kc=X(Wc,[["__scopeId","data-v-f6b1b269"]]),Yc=U({__name:"VPHomeFeatures",setup(e){const{frontmatter:n}=ne();return(t,a)=>m(n).features?(f(),G(Kc,{key:0,class:"VPHomeFeatures",features:m(n).features},null,8,["features"])):q("",!0)}}),Xc=U({__name:"VPHomeContent",setup(e){const{width:n}=nl({initialWidth:0,includeScrollbar:!1});return(t,a)=>(f(),w("div",{class:"vp-doc container",style:Va(m(n)?{"--vp-offset":`calc(50% - ${m(n)/2}px)`}:{})},[C(t.$slots,"default",{},void 0,!0)],4))}}),Qc=X(Xc,[["__scopeId","data-v-3be093fb"]]),Jc=U({__name:"VPHome",setup(e){const{frontmatter:n,theme:t}=ne();return(a,o)=>{const i=tn("Content");return f(),w("div",{class:Q(["VPHome",{"external-link-icon-enabled":m(t).externalLinkIcon}])},[C(a.$slots,"home-hero-before",{},void 0,!0),j(Nc,null,{"home-hero-info-before":N(()=>[C(a.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":N(()=>[C(a.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":N(()=>[C(a.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":N(()=>[C(a.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":N(()=>[C(a.$slots,"home-hero-image",{},void 0,!0)]),_:3}),C(a.$slots,"home-hero-after",{},void 0,!0),C(a.$slots,"home-features-before",{},void 0,!0),j(Yc),C(a.$slots,"home-features-after",{},void 0,!0),m(n).markdownStyles!==!1?(f(),G(Qc,{key:0},{default:N(()=>[j(i)]),_:1})):(f(),G(i,{key:1}))],2)}}}),Zc=X(Jc,[["__scopeId","data-v-6e6fdb32"]]),eu={},nu={class:"VPPage"};function tu(e,n){const t=tn("Content");return f(),w("div",nu,[C(e.$slots,"page-top"),j(t),C(e.$slots,"page-bottom")])}const au=X(eu,[["render",tu]]),ou=U({__name:"VPContent",setup(e){const{page:n,frontmatter:t}=ne(),{hasSidebar:a}=Qe();return(o,i)=>(f(),w("div",{class:Q(["VPContent",{"has-sidebar":m(a),"is-home":m(t).layout==="home"}]),id:"VPContent"},[m(n).isNotFound?C(o.$slots,"not-found",{key:0},()=>[j(kl)],!0):m(t).layout==="page"?(f(),G(au,{key:1},{"page-top":N(()=>[C(o.$slots,"page-top",{},void 0,!0)]),"page-bottom":N(()=>[C(o.$slots,"page-bottom",{},void 0,!0)]),_:3})):m(t).layout==="home"?(f(),G(Zc,{key:2},{"home-hero-before":N(()=>[C(o.$slots,"home-hero-before",{},void 0,!0)]),"home-hero-info-before":N(()=>[C(o.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":N(()=>[C(o.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":N(()=>[C(o.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":N(()=>[C(o.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":N(()=>[C(o.$slots,"home-hero-image",{},void 0,!0)]),"home-hero-after":N(()=>[C(o.$slots,"home-hero-after",{},void 0,!0)]),"home-features-before":N(()=>[C(o.$slots,"home-features-before",{},void 0,!0)]),"home-features-after":N(()=>[C(o.$slots,"home-features-after",{},void 0,!0)]),_:3})):m(t).layout&&m(t).layout!=="doc"?(f(),G(ze(m(t).layout),{key:3})):(f(),G(bc,{key:4},{"doc-top":N(()=>[C(o.$slots,"doc-top",{},void 0,!0)]),"doc-bottom":N(()=>[C(o.$slots,"doc-bottom",{},void 0,!0)]),"doc-footer-before":N(()=>[C(o.$slots,"doc-footer-before",{},void 0,!0)]),"doc-before":N(()=>[C(o.$slots,"doc-before",{},void 0,!0)]),"doc-after":N(()=>[C(o.$slots,"doc-after",{},void 0,!0)]),"aside-top":N(()=>[C(o.$slots,"aside-top",{},void 0,!0)]),"aside-outline-before":N(()=>[C(o.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":N(()=>[C(o.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":N(()=>[C(o.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":N(()=>[C(o.$slots,"aside-ads-after",{},void 0,!0)]),"aside-bottom":N(()=>[C(o.$slots,"aside-bottom",{},void 0,!0)]),_:3}))],2))}}),iu=X(ou,[["__scopeId","data-v-714062c7"]]),su={class:"container"},ru=["innerHTML"],lu=["innerHTML"],cu=U({__name:"VPFooter",setup(e){const{theme:n,frontmatter:t}=ne(),{hasSidebar:a}=Qe();return(o,i)=>m(n).footer&&m(t).footer!==!1?(f(),w("footer",{key:0,class:Q(["VPFooter",{"has-sidebar":m(a)}])},[p("div",su,[m(n).footer.message?(f(),w("p",{key:0,class:"message",innerHTML:m(n).footer.message},null,8,ru)):q("",!0),m(n).footer.copyright?(f(),w("p",{key:1,class:"copyright",innerHTML:m(n).footer.copyright},null,8,lu)):q("",!0)])],2)):q("",!0)}}),uu=X(cu,[["__scopeId","data-v-a0954f24"]]);function du(){const{theme:e,frontmatter:n}=ne(),t=ks([]),a=R(()=>t.value.length>0);return Ot(()=>{t.value=Ua(n.value.outline??e.value.outline)}),{headers:t,hasLocalNav:a}}const hu={class:"menu-text"},pu={class:"header"},gu={class:"outline"},mu=U({__name:"VPLocalNavOutlineDropdown",props:{headers:{},navHeight:{}},setup(e){const n=e,{theme:t}=ne(),a=ae(!1),o=ae(0),i=ae(),s=ae();function r(g){var u;(u=i.value)!=null&&u.contains(g.target)||(a.value=!1)}De(a,g=>{if(g){document.addEventListener("click",r);return}document.removeEventListener("click",r)}),va("Escape",()=>{a.value=!1}),Ot(()=>{a.value=!1});function l(){a.value=!a.value,o.value=window.innerHeight+Math.min(window.scrollY-n.navHeight,0)}function c(g){g.target.classList.contains("outline-link")&&(s.value&&(s.value.style.transition="none"),Ba(()=>{a.value=!1}))}function d(){a.value=!1,window.scrollTo({top:0,left:0,behavior:"smooth"})}return(g,u)=>(f(),w("div",{class:"VPLocalNavOutlineDropdown",style:Va({"--vp-vh":o.value+"px"}),ref_key:"main",ref:i},[e.headers.length>0?(f(),w("button",{key:0,onClick:l,class:Q({open:a.value})},[p("span",hu,S(m(Ps)(m(t))),1),u[0]||(u[0]=p("span",{class:"vpi-chevron-right icon"},null,-1))],2)):(f(),w("button",{key:1,onClick:d},S(m(t).returnToTopLabel||"Return to top"),1)),j(Oa,{name:"flyout"},{default:N(()=>[a.value?(f(),w("div",{key:0,ref_key:"items",ref:s,class:"items",onClick:c},[p("div",pu,[p("a",{class:"top-link",href:"#",onClick:d},S(m(t).returnToTopLabel||"Return to top"),1)]),p("div",gu,[j(Ms,{headers:e.headers},null,8,["headers"])])],512)):q("",!0)]),_:1})],4))}}),fu=X(mu,[["__scopeId","data-v-f210c2f8"]]),vu={class:"container"},bu=["aria-expanded"],yu={class:"menu-text"},_u=U({__name:"VPLocalNav",props:{open:{type:Boolean}},emits:["open-menu"],setup(e){const{theme:n,frontmatter:t}=ne(),{hasSidebar:a}=Qe(),{headers:o}=du(),{y:i}=As(),s=ae(0);Ee(()=>{s.value=parseInt(getComputedStyle(document.documentElement).getPropertyValue("--vp-nav-height"))}),Ot(()=>{o.value=Ua(t.value.outline??n.value.outline)});const r=R(()=>o.value.length===0),l=R(()=>r.value&&!a.value),c=R(()=>({VPLocalNav:!0,"has-sidebar":a.value,empty:r.value,fixed:l.value}));return(d,g)=>m(t).layout!=="home"&&(!l.value||m(i)>=s.value)?(f(),w("div",{key:0,class:Q(c.value)},[p("div",vu,[m(a)?(f(),w("button",{key:0,class:"menu","aria-expanded":e.open,"aria-controls":"VPSidebarNav",onClick:g[0]||(g[0]=u=>d.$emit("open-menu"))},[g[1]||(g[1]=p("span",{class:"vpi-align-left menu-icon"},null,-1)),p("span",yu,S(m(n).sidebarMenuLabel||"Menu"),1)],8,bu)):q("",!0),j(fu,{headers:m(o),navHeight:s.value},null,8,["headers","navHeight"])])],2)):q("",!0)}}),wu=X(_u,[["__scopeId","data-v-f8cca058"]]);function ku(){const e=ae(!1);function n(){e.value=!0,window.addEventListener("resize",o)}function t(){e.value=!1,window.removeEventListener("resize",o)}function a(){e.value?t():n()}function o(){window.outerWidth>=768&&t()}const i=mn();return De(()=>i.path,t),{isScreenOpen:e,openScreen:n,closeScreen:t,toggleScreen:a}}const xu={},Au={class:"VPSwitch",type:"button",role:"switch"},Cu={class:"check"},Tu={key:0,class:"icon"};function Su(e,n){return f(),w("button",Au,[p("span",Cu,[e.$slots.default?(f(),w("span",Tu,[C(e.$slots,"default",{},void 0,!0)])):q("",!0)])])}const Iu=X(xu,[["render",Su],["__scopeId","data-v-71e7f96a"]]),Pu=U({__name:"VPSwitchAppearance",setup(e){const{isDark:n,theme:t}=ne(),a=Rt("toggle-appearance",()=>{n.value=!n.value}),o=ae("");return qa(()=>{o.value=n.value?t.value.lightModeSwitchTitle||"Switch to light theme":t.value.darkModeSwitchTitle||"Switch to dark theme"}),(i,s)=>(f(),G(Iu,{title:o.value,class:"VPSwitchAppearance","aria-checked":m(n),onClick:m(a)},{default:N(()=>[...s[0]||(s[0]=[p("span",{class:"vpi-sun sun"},null,-1),p("span",{class:"vpi-moon moon"},null,-1)])]),_:1},8,["title","aria-checked","onClick"]))}}),Ga=X(Pu,[["__scopeId","data-v-40158760"]]),Mu={key:0,class:"VPNavBarAppearance"},Du=U({__name:"VPNavBarAppearance",setup(e){const{site:n}=ne();return(t,a)=>m(n).appearance&&m(n).appearance!=="force-dark"&&m(n).appearance!=="force-auto"?(f(),w("div",Mu,[j(Ga)])):q("",!0)}}),Lu=X(Du,[["__scopeId","data-v-e3e8a76b"]]),Ha=ae();let Ds=!1,ea=0;function $u(e){const n=ae(!1);if(zt){!Ds&&Nu(),ea++;const t=De(Ha,a=>{var o,i,s;a===e.el.value||(o=e.el.value)!=null&&o.contains(a)?(n.value=!0,(i=e.onFocus)==null||i.call(e)):(n.value=!1,(s=e.onBlur)==null||s.call(e))});za(()=>{t(),ea--,ea||Eu()})}return tl(n)}function Nu(){document.addEventListener("focusin",Ls),Ds=!0,Ha.value=document.activeElement}function Eu(){document.removeEventListener("focusin",Ls)}function Ls(){Ha.value=document.activeElement}const Ou={class:"VPMenuLink"},Ru=["innerHTML"],zu=U({__name:"VPMenuLink",props:{item:{}},setup(e){const{page:n}=ne();return(t,a)=>(f(),w("div",Ou,[j(qe,{class:Q({active:m(un)(m(n).relativePath,e.item.activeMatch||e.item.link,!!e.item.activeMatch)}),href:e.item.link,target:e.item.target,rel:e.item.rel,"no-icon":e.item.noIcon},{default:N(()=>[p("span",{innerHTML:e.item.text},null,8,Ru)]),_:1},8,["class","href","target","rel","no-icon"])]))}}),qt=X(zu,[["__scopeId","data-v-9182bc9d"]]),qu={class:"VPMenuGroup"},Vu={key:0,class:"title"},Bu=U({__name:"VPMenuGroup",props:{text:{},items:{}},setup(e){return(n,t)=>(f(),w("div",qu,[e.text?(f(),w("p",Vu,S(e.text),1)):q("",!0),(f(!0),w(Z,null,ie(e.items,a=>(f(),w(Z,null,["link"in a?(f(),G(qt,{key:0,item:a},null,8,["item"])):q("",!0)],64))),256))]))}}),Fu=X(Bu,[["__scopeId","data-v-a0052f3d"]]),ju={class:"VPMenu"},Uu={key:0,class:"items"},Gu=U({__name:"VPMenu",props:{items:{}},setup(e){return(n,t)=>(f(),w("div",ju,[e.items?(f(),w("div",Uu,[(f(!0),w(Z,null,ie(e.items,a=>(f(),w(Z,{key:JSON.stringify(a)},["link"in a?(f(),G(qt,{key:0,item:a},null,8,["item"])):"component"in a?(f(),G(ze(a.component),en({key:1,ref_for:!0},a.props),null,16)):(f(),G(Fu,{key:2,text:a.text,items:a.items},null,8,["text","items"]))],64))),128))])):q("",!0),C(n.$slots,"default",{},void 0,!0)]))}}),Hu=X(Gu,[["__scopeId","data-v-6ac81520"]]),Wu=["aria-expanded","aria-label"],Ku={key:0,class:"text"},Yu=["innerHTML"],Xu={key:1,class:"vpi-more-horizontal icon"},Qu={class:"menu"},Ju=U({__name:"VPFlyout",props:{icon:{},button:{},label:{},items:{}},setup(e){const n=ae(!1),t=ae();$u({el:t,onBlur:a});function a(){n.value=!1}return(o,i)=>(f(),w("div",{class:"VPFlyout",ref_key:"el",ref:t,onMouseenter:i[1]||(i[1]=s=>n.value=!0),onMouseleave:i[2]||(i[2]=s=>n.value=!1)},[p("button",{type:"button",class:"button","aria-haspopup":"true","aria-expanded":n.value,"aria-label":e.label,onClick:i[0]||(i[0]=s=>n.value=!n.value)},[e.button||e.icon?(f(),w("span",Ku,[e.icon?(f(),w("span",{key:0,class:Q([e.icon,"option-icon"])},null,2)):q("",!0),e.button?(f(),w("span",{key:1,innerHTML:e.button},null,8,Yu)):q("",!0),i[3]||(i[3]=p("span",{class:"vpi-chevron-down text-icon"},null,-1))])):(f(),w("span",Xu))],8,Wu),p("div",Qu,[j(Hu,{items:e.items},{default:N(()=>[C(o.$slots,"default",{},void 0,!0)]),_:3},8,["items"])])],544))}}),Wa=X(Ju,[["__scopeId","data-v-beb8b8d5"]]),Zu=["href","aria-label","innerHTML"],ed=U({__name:"VPSocialLink",props:{icon:{},link:{},ariaLabel:{}},setup(e){const n=e,t=ae();Ee(async()=>{var i;await Ba();const o=(i=t.value)==null?void 0:i.children[0];o instanceof HTMLElement&&o.className.startsWith("vpi-social-")&&(getComputedStyle(o).maskImage||getComputedStyle(o).webkitMaskImage)==="none"&&o.style.setProperty("--icon",`url('https://api.iconify.design/simple-icons/${n.icon}.svg')`)});const a=R(()=>typeof n.icon=="object"?n.icon.svg:`<span class="vpi-social-${n.icon}"></span>`);return(o,i)=>(f(),w("a",{ref_key:"el",ref:t,class:"VPSocialLink no-icon",href:e.link,"aria-label":e.ariaLabel??(typeof e.icon=="string"?e.icon:""),target:"_blank",rel:"noopener",innerHTML:a.value},null,8,Zu))}}),nd=X(ed,[["__scopeId","data-v-7652e684"]]),td={class:"VPSocialLinks"},ad=U({__name:"VPSocialLinks",props:{links:{}},setup(e){return(n,t)=>(f(),w("div",td,[(f(!0),w(Z,null,ie(e.links,({link:a,icon:o,ariaLabel:i})=>(f(),G(nd,{key:a,icon:o,link:a,ariaLabel:i},null,8,["icon","link","ariaLabel"]))),128))]))}}),Ka=X(ad,[["__scopeId","data-v-54791c74"]]),od={key:0,class:"group translations"},id={class:"trans-title"},sd={key:1,class:"group"},rd={class:"item appearance"},ld={class:"label"},cd={class:"appearance-action"},ud={key:2,class:"group"},dd={class:"item social-links"},hd=U({__name:"VPNavBarExtra",setup(e){const{site:n,theme:t}=ne(),{localeLinks:a,currentLang:o}=Yn({correspondingLink:!0}),i=R(()=>a.value.length&&o.value.label||n.value.appearance||t.value.socialLinks);return(s,r)=>i.value?(f(),G(Wa,{key:0,class:"VPNavBarExtra",label:"extra navigation"},{default:N(()=>[m(a).length&&m(o).label?(f(),w("div",od,[p("p",id,S(m(o).label),1),(f(!0),w(Z,null,ie(m(a),l=>(f(),G(qt,{key:l.link,item:l},null,8,["item"]))),128))])):q("",!0),m(n).appearance&&m(n).appearance!=="force-dark"&&m(n).appearance!=="force-auto"?(f(),w("div",sd,[p("div",rd,[p("p",ld,S(m(t).darkModeSwitchLabel||"Appearance"),1),p("div",cd,[j(Ga)])])])):q("",!0),m(t).socialLinks?(f(),w("div",ud,[p("div",dd,[j(Ka,{class:"social-links-list",links:m(t).socialLinks},null,8,["links"])])])):q("",!0)]),_:1})):q("",!0)}}),pd=X(hd,[["__scopeId","data-v-ad50955e"]]),gd=["aria-expanded"],md=U({__name:"VPNavBarHamburger",props:{active:{type:Boolean}},emits:["click"],setup(e){return(n,t)=>(f(),w("button",{type:"button",class:Q(["VPNavBarHamburger",{active:e.active}]),"aria-label":"mobile navigation","aria-expanded":e.active,"aria-controls":"VPNavScreen",onClick:t[0]||(t[0]=a=>n.$emit("click"))},[...t[1]||(t[1]=[p("span",{class:"container"},[p("span",{class:"top"}),p("span",{class:"middle"}),p("span",{class:"bottom"})],-1)])],10,gd))}}),fd=X(md,[["__scopeId","data-v-5e4fa142"]]),vd=["innerHTML"],bd=U({__name:"VPNavBarMenuLink",props:{item:{}},setup(e){const{page:n}=ne();return(t,a)=>(f(),G(qe,{class:Q({VPNavBarMenuLink:!0,active:m(un)(m(n).relativePath,e.item.activeMatch||e.item.link,!!e.item.activeMatch)}),href:e.item.link,target:e.item.target,rel:e.item.rel,"no-icon":e.item.noIcon,tabindex:"0"},{default:N(()=>[p("span",{innerHTML:e.item.text},null,8,vd)]),_:1},8,["class","href","target","rel","no-icon"]))}}),yd=X(bd,[["__scopeId","data-v-f75fdd7c"]]),_d=U({__name:"VPNavBarMenuGroup",props:{item:{}},setup(e){const n=e,{page:t}=ne(),a=i=>"component"in i?!1:"link"in i?un(t.value.relativePath,i.link,!!n.item.activeMatch):i.items.some(a),o=R(()=>a(n.item));return(i,s)=>(f(),G(Wa,{class:Q({VPNavBarMenuGroup:!0,active:m(un)(m(t).relativePath,e.item.activeMatch,!!e.item.activeMatch)||o.value}),button:e.item.text,items:e.item.items},null,8,["class","button","items"]))}}),wd={key:0,"aria-labelledby":"main-nav-aria-label",class:"VPNavBarMenu"},kd=U({__name:"VPNavBarMenu",setup(e){const{theme:n}=ne();return(t,a)=>m(n).nav?(f(),w("nav",wd,[a[0]||(a[0]=p("span",{id:"main-nav-aria-label",class:"visually-hidden"}," Main Navigation ",-1)),(f(!0),w(Z,null,ie(m(n).nav,o=>(f(),w(Z,{key:JSON.stringify(o)},["link"in o?(f(),G(yd,{key:0,item:o},null,8,["item"])):"component"in o?(f(),G(ze(o.component),en({key:1,ref_for:!0},o.props),null,16)):(f(),G(_d,{key:2,item:o},null,8,["item"]))],64))),128))])):q("",!0)}}),xd=X(kd,[["__scopeId","data-v-e90f0632"]]);function Ad(e){const{localeIndex:n,theme:t}=ne();function a(o){var v,b,_;const i=o.split("."),s=(v=t.value.search)==null?void 0:v.options,r=s&&typeof s=="object",l=r&&((_=(b=s.locales)==null?void 0:b[n.value])==null?void 0:_.translations)||null,c=r&&s.translations||null;let d=l,g=c,u=e;const h=i.pop();for(const x of i){let A=null;const D=u==null?void 0:u[x];D&&(A=u=D);const y=g==null?void 0:g[x];y&&(A=g=y);const T=d==null?void 0:d[x];T&&(A=d=T),D||(u=A),y||(g=A),T||(d=A)}return(d==null?void 0:d[h])??(g==null?void 0:g[h])??(u==null?void 0:u[h])??""}return a}const Cd=["aria-label"],Td={class:"DocSearch-Button-Container"},Sd={class:"DocSearch-Button-Placeholder"},Ti=U({__name:"VPNavBarSearchButton",setup(e){const t=Ad({button:{buttonText:"Search",buttonAriaLabel:"Search"}});return(a,o)=>(f(),w("button",{type:"button",class:"DocSearch DocSearch-Button","aria-label":m(t)("button.buttonAriaLabel")},[p("span",Td,[o[0]||(o[0]=p("span",{class:"vp-icon DocSearch-Search-Icon"},null,-1)),p("span",Sd,S(m(t)("button.buttonText")),1)]),o[1]||(o[1]=p("span",{class:"DocSearch-Button-Keys"},[p("kbd",{class:"DocSearch-Button-Key"}),p("kbd",{class:"DocSearch-Button-Key"},"K")],-1))],8,Cd))}}),Id={class:"VPNavBarSearch"},Pd={id:"local-search"},Md={key:1,id:"docsearch"},Ya=U({__name:"VPNavBarSearch",setup(e){const n=al(()=>Cs(()=>import("./VPLocalSearchBox.BSDqH--D.js"),__vite__mapDeps([0,1]))),t=()=>null,{theme:a}=ne(),o=ae(!1),i=ae(!1);Ee(()=>{});function s(){o.value||(o.value=!0,setTimeout(r,16))}function r(){const g=new Event("keydown");g.key="k",g.metaKey=!0,window.dispatchEvent(g),setTimeout(()=>{document.querySelector(".DocSearch-Modal")||r()},16)}function l(g){const u=g.target,h=u.tagName;return u.isContentEditable||h==="INPUT"||h==="SELECT"||h==="TEXTAREA"}const c=ae(!1);va("k",g=>{(g.ctrlKey||g.metaKey)&&(g.preventDefault(),c.value=!0)}),va("/",g=>{l(g)||(g.preventDefault(),c.value=!0)});const d="local";return(g,u)=>{var h;return f(),w("div",Id,[m(d)==="local"?(f(),w(Z,{key:0},[c.value?(f(),G(m(n),{key:0,onClose:u[0]||(u[0]=v=>c.value=!1)})):q("",!0),p("div",Pd,[j(Ti,{onClick:u[1]||(u[1]=v=>c.value=!0)})])],64)):m(d)==="algolia"?(f(),w(Z,{key:1},[o.value?(f(),G(m(t),{key:0,algolia:((h=m(a).search)==null?void 0:h.options)??m(a).algolia,onVnodeBeforeMount:u[2]||(u[2]=v=>i.value=!0)},null,8,["algolia"])):q("",!0),i.value?q("",!0):(f(),w("div",Md,[j(Ti,{onClick:s})]))],64)):q("",!0)])}}}),Dd=U({__name:"VPNavBarSocialLinks",setup(e){const{theme:n}=ne();return(t,a)=>m(n).socialLinks?(f(),G(Ka,{key:0,class:"VPNavBarSocialLinks",links:m(n).socialLinks},null,8,["links"])):q("",!0)}}),Ld=X(Dd,[["__scopeId","data-v-27e2b2b1"]]),$d=["href","rel","target"],Nd=["innerHTML"],Ed={key:2},Od=U({__name:"VPNavBarTitle",setup(e){const{site:n,theme:t}=ne(),{hasSidebar:a}=Qe(),{currentLang:o}=Yn(),i=R(()=>{var l;return typeof t.value.logoLink=="string"?t.value.logoLink:(l=t.value.logoLink)==null?void 0:l.link}),s=R(()=>{var l;return typeof t.value.logoLink=="string"||(l=t.value.logoLink)==null?void 0:l.rel}),r=R(()=>{var l;return typeof t.value.logoLink=="string"||(l=t.value.logoLink)==null?void 0:l.target});return(l,c)=>(f(),w("div",{class:Q(["VPNavBarTitle",{"has-sidebar":m(a)}])},[p("a",{class:"title",href:i.value??m(ja)(m(o).link),rel:s.value,target:r.value},[C(l.$slots,"nav-bar-title-before",{},void 0,!0),m(t).logo?(f(),G(pt,{key:0,class:"logo",image:m(t).logo},null,8,["image"])):q("",!0),m(t).siteTitle?(f(),w("span",{key:1,innerHTML:m(t).siteTitle},null,8,Nd)):m(t).siteTitle===void 0?(f(),w("span",Ed,S(m(n).title),1)):q("",!0),C(l.$slots,"nav-bar-title-after",{},void 0,!0)],8,$d)],2))}}),Rd=X(Od,[["__scopeId","data-v-6ec1a2fc"]]),zd={class:"items"},qd={class:"title"},Vd=U({__name:"VPNavBarTranslations",setup(e){const{theme:n}=ne(),{localeLinks:t,currentLang:a}=Yn({correspondingLink:!0});return(o,i)=>m(t).length&&m(a).label?(f(),G(Wa,{key:0,class:"VPNavBarTranslations",icon:"vpi-languages",label:m(n).langMenuLabel||"Change language"},{default:N(()=>[p("div",zd,[p("p",qd,S(m(a).label),1),(f(!0),w(Z,null,ie(m(t),s=>(f(),G(qt,{key:s.link,item:s},null,8,["item"]))),128))])]),_:1},8,["label"])):q("",!0)}}),$s=X(Vd,[["__scopeId","data-v-40afd59f"]]),Bd={class:"wrapper"},Fd={class:"container"},jd={class:"title"},Ud={class:"content"},Gd={class:"content-body"},Hd=U({__name:"VPNavBar",props:{isScreenOpen:{type:Boolean}},emits:["toggle-screen"],setup(e){const n=e,{y:t}=As(),{hasSidebar:a}=Qe(),{frontmatter:o}=ne(),i=ae({});return qa(()=>{i.value={"has-sidebar":a.value,home:o.value.layout==="home",top:t.value===0,"screen-open":n.isScreenOpen}}),(s,r)=>(f(),w("div",{class:Q(["VPNavBar",i.value])},[p("div",Bd,[p("div",Fd,[p("div",jd,[j(Rd,null,{"nav-bar-title-before":N(()=>[C(s.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":N(()=>[C(s.$slots,"nav-bar-title-after",{},void 0,!0)]),_:3})]),p("div",Ud,[p("div",Gd,[C(s.$slots,"nav-bar-content-before",{},void 0,!0),j(Ya,{class:"search"}),j(xd,{class:"menu"}),j($s,{class:"translations"}),j(Lu,{class:"appearance"}),j(Ld,{class:"social-links"}),j(pd,{class:"extra"}),C(s.$slots,"nav-bar-content-after",{},void 0,!0),j(fd,{class:"hamburger",active:e.isScreenOpen,onClick:r[0]||(r[0]=l=>s.$emit("toggle-screen"))},null,8,["active"])])])])]),r[1]||(r[1]=p("div",{class:"divider"},[p("div",{class:"divider-line"})],-1))],2))}}),Wd=X(Hd,[["__scopeId","data-v-de524931"]]),Kd={key:0,class:"VPNavScreenAppearance"},Yd={class:"text"},Xd=U({__name:"VPNavScreenAppearance",setup(e){const{site:n,theme:t}=ne();return(a,o)=>m(n).appearance&&m(n).appearance!=="force-dark"&&m(n).appearance!=="force-auto"?(f(),w("div",Kd,[p("p",Yd,S(m(t).darkModeSwitchLabel||"Appearance"),1),j(Ga)])):q("",!0)}}),Qd=X(Xd,[["__scopeId","data-v-37559f51"]]),Jd=["innerHTML"],Zd=U({__name:"VPNavScreenMenuLink",props:{item:{}},setup(e){const n=Rt("close-screen");return(t,a)=>(f(),G(qe,{class:"VPNavScreenMenuLink",href:e.item.link,target:e.item.target,rel:e.item.rel,"no-icon":e.item.noIcon,onClick:m(n)},{default:N(()=>[p("span",{innerHTML:e.item.text},null,8,Jd)]),_:1},8,["href","target","rel","no-icon","onClick"]))}}),eh=X(Zd,[["__scopeId","data-v-80e6e6d6"]]),nh=["innerHTML"],th=U({__name:"VPNavScreenMenuGroupLink",props:{item:{}},setup(e){const n=Rt("close-screen");return(t,a)=>(f(),G(qe,{class:"VPNavScreenMenuGroupLink",href:e.item.link,target:e.item.target,rel:e.item.rel,"no-icon":e.item.noIcon,onClick:m(n)},{default:N(()=>[p("span",{innerHTML:e.item.text},null,8,nh)]),_:1},8,["href","target","rel","no-icon","onClick"]))}}),Ns=X(th,[["__scopeId","data-v-bd01957f"]]),ah={class:"VPNavScreenMenuGroupSection"},oh={key:0,class:"title"},ih=U({__name:"VPNavScreenMenuGroupSection",props:{text:{},items:{}},setup(e){return(n,t)=>(f(),w("div",ah,[e.text?(f(),w("p",oh,S(e.text),1)):q("",!0),(f(!0),w(Z,null,ie(e.items,a=>(f(),G(Ns,{key:a.text,item:a},null,8,["item"]))),128))]))}}),sh=X(ih,[["__scopeId","data-v-cd0e7558"]]),rh=["aria-controls","aria-expanded"],lh=["innerHTML"],ch=["id"],uh={key:0,class:"item"},dh={key:1,class:"item"},hh={key:2,class:"group"},ph=U({__name:"VPNavScreenMenuGroup",props:{text:{},items:{}},setup(e){const n=e,t=ae(!1),a=R(()=>`NavScreenGroup-${n.text.replace(" ","-").toLowerCase()}`);function o(){t.value=!t.value}return(i,s)=>(f(),w("div",{class:Q(["VPNavScreenMenuGroup",{open:t.value}])},[p("button",{class:"button","aria-controls":a.value,"aria-expanded":t.value,onClick:o},[p("span",{class:"button-text",innerHTML:e.text},null,8,lh),s[0]||(s[0]=p("span",{class:"vpi-plus button-icon"},null,-1))],8,rh),p("div",{id:a.value,class:"items"},[(f(!0),w(Z,null,ie(e.items,r=>(f(),w(Z,{key:JSON.stringify(r)},["link"in r?(f(),w("div",uh,[j(Ns,{item:r},null,8,["item"])])):"component"in r?(f(),w("div",dh,[(f(),G(ze(r.component),en({ref_for:!0},r.props,{"screen-menu":""}),null,16))])):(f(),w("div",hh,[j(sh,{text:r.text,items:r.items},null,8,["text","items"])]))],64))),128))],8,ch)],2))}}),gh=X(ph,[["__scopeId","data-v-3d415584"]]),mh={key:0,class:"VPNavScreenMenu"},fh=U({__name:"VPNavScreenMenu",setup(e){const{theme:n}=ne();return(t,a)=>m(n).nav?(f(),w("nav",mh,[(f(!0),w(Z,null,ie(m(n).nav,o=>(f(),w(Z,{key:JSON.stringify(o)},["link"in o?(f(),G(eh,{key:0,item:o},null,8,["item"])):"component"in o?(f(),G(ze(o.component),en({key:1,ref_for:!0},o.props,{"screen-menu":""}),null,16)):(f(),G(gh,{key:2,text:o.text||"",items:o.items},null,8,["text","items"]))],64))),128))])):q("",!0)}}),vh=U({__name:"VPNavScreenSocialLinks",setup(e){const{theme:n}=ne();return(t,a)=>m(n).socialLinks?(f(),G(Ka,{key:0,class:"VPNavScreenSocialLinks",links:m(n).socialLinks},null,8,["links"])):q("",!0)}}),bh={class:"list"},yh=U({__name:"VPNavScreenTranslations",setup(e){const{localeLinks:n,currentLang:t}=Yn({correspondingLink:!0}),a=ae(!1);function o(){a.value=!a.value}return(i,s)=>m(n).length&&m(t).label?(f(),w("div",{key:0,class:Q(["VPNavScreenTranslations",{open:a.value}])},[p("button",{class:"title",onClick:o},[s[0]||(s[0]=p("span",{class:"vpi-languages icon lang"},null,-1)),Ae(" "+S(m(t).label)+" ",1),s[1]||(s[1]=p("span",{class:"vpi-chevron-down icon chevron"},null,-1))]),p("ul",bh,[(f(!0),w(Z,null,ie(m(n),r=>(f(),w("li",{key:r.link,class:"item"},[j(qe,{class:"link",href:r.link},{default:N(()=>[Ae(S(r.text),1)]),_:2},1032,["href"])]))),128))])],2)):q("",!0)}}),_h=X(yh,[["__scopeId","data-v-59d95cf4"]]),wh={class:"container"},kh=U({__name:"VPNavScreen",props:{open:{type:Boolean}},setup(e){const n=ae(null),t=Ts(zt?document.body:null);return(a,o)=>(f(),G(Oa,{name:"fade",onEnter:o[0]||(o[0]=i=>t.value=!0),onAfterLeave:o[1]||(o[1]=i=>t.value=!1)},{default:N(()=>[e.open?(f(),w("div",{key:0,class:"VPNavScreen",ref_key:"screen",ref:n,id:"VPNavScreen"},[p("div",wh,[C(a.$slots,"nav-screen-content-before",{},void 0,!0),j(fh,{class:"menu"}),j(_h,{class:"translations"}),j(Qd,{class:"appearance"}),j(vh,{class:"social-links"}),C(a.$slots,"nav-screen-content-after",{},void 0,!0)])],512)):q("",!0)]),_:3}))}}),xh=X(kh,[["__scopeId","data-v-07baf27b"]]),Ah={key:0,class:"VPNav"},Ch=U({__name:"VPNav",setup(e){const{isScreenOpen:n,closeScreen:t,toggleScreen:a}=ku(),{frontmatter:o}=ne(),i=R(()=>o.value.navbar!==!1);return Ss("close-screen",t),Et(()=>{zt&&document.documentElement.classList.toggle("hide-nav",!i.value)}),(s,r)=>i.value?(f(),w("header",Ah,[j(Wd,{"is-screen-open":m(n),onToggleScreen:m(a)},{"nav-bar-title-before":N(()=>[C(s.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":N(()=>[C(s.$slots,"nav-bar-title-after",{},void 0,!0)]),"nav-bar-content-before":N(()=>[C(s.$slots,"nav-bar-content-before",{},void 0,!0)]),"nav-bar-content-after":N(()=>[C(s.$slots,"nav-bar-content-after",{},void 0,!0)]),_:3},8,["is-screen-open","onToggleScreen"]),j(xh,{open:m(n)},{"nav-screen-content-before":N(()=>[C(s.$slots,"nav-screen-content-before",{},void 0,!0)]),"nav-screen-content-after":N(()=>[C(s.$slots,"nav-screen-content-after",{},void 0,!0)]),_:3},8,["open"])])):q("",!0)}}),Th=X(Ch,[["__scopeId","data-v-717bd8c6"]]),Sh=["role","tabindex"],Ih={key:1,class:"items"},Ph=U({__name:"VPSidebarItem",props:{item:{},depth:{}},setup(e){const n=e,{collapsed:t,collapsible:a,isLink:o,isActiveLink:i,hasActiveLink:s,hasChildren:r,toggle:l}=Tl(R(()=>n.item)),c=R(()=>r.value?"section":"div"),d=R(()=>o.value?"a":"div"),g=R(()=>r.value?n.depth+2===7?"p":`h${n.depth+2}`:"p"),u=R(()=>o.value?void 0:"button"),h=R(()=>[[`level-${n.depth}`],{collapsible:a.value},{collapsed:t.value},{"is-link":o.value},{"is-active":i.value},{"has-active":s.value}]);function v(_){"key"in _&&_.key!=="Enter"||!n.item.link&&l()}function b(){n.item.link&&l()}return(_,x)=>{const A=tn("VPSidebarItem",!0);return f(),G(ze(c.value),{class:Q(["VPSidebarItem",h.value])},{default:N(()=>[e.item.text?(f(),w("div",en({key:0,class:"item",role:u.value},ol(e.item.items?{click:v,keydown:v}:{},!0),{tabindex:e.item.items&&0}),[x[1]||(x[1]=p("div",{class:"indicator"},null,-1)),e.item.link?(f(),G(qe,{key:0,tag:d.value,class:"link",href:e.item.link,rel:e.item.rel,target:e.item.target},{default:N(()=>[(f(),G(ze(g.value),{class:"text",innerHTML:e.item.text},null,8,["innerHTML"]))]),_:1},8,["tag","href","rel","target"])):(f(),G(ze(g.value),{key:1,class:"text",innerHTML:e.item.text},null,8,["innerHTML"])),e.item.collapsed!=null&&e.item.items&&e.item.items.length?(f(),w("div",{key:2,class:"caret",role:"button","aria-label":"toggle section",onClick:b,onKeydown:il(b,["enter"]),tabindex:"0"},[...x[0]||(x[0]=[p("span",{class:"vpi-chevron-right caret-icon"},null,-1)])],32)):q("",!0)],16,Sh)):q("",!0),e.item.items&&e.item.items.length?(f(),w("div",Ih,[e.depth<5?(f(!0),w(Z,{key:0},ie(e.item.items,D=>(f(),G(A,{key:D.text,item:D,depth:e.depth+1},null,8,["item","depth"]))),128)):q("",!0)])):q("",!0)]),_:1},8,["class"])}}}),Mh=X(Ph,[["__scopeId","data-v-08047252"]]),Dh=U({__name:"VPSidebarGroup",props:{items:{}},setup(e){const n=ae(!0);let t=null;return Ee(()=>{t=setTimeout(()=>{t=null,n.value=!1},300)}),Fa(()=>{t!=null&&(clearTimeout(t),t=null)}),(a,o)=>(f(!0),w(Z,null,ie(e.items,i=>(f(),w("div",{key:i.text,class:Q(["group",{"no-transition":n.value}])},[j(Mh,{item:i,depth:0},null,8,["item"])],2))),128))}}),Lh=X(Dh,[["__scopeId","data-v-ba5ce4ae"]]),$h={class:"nav",id:"VPSidebarNav","aria-labelledby":"sidebar-aria-label",tabindex:"-1"},Nh=U({__name:"VPSidebar",props:{open:{type:Boolean}},setup(e){const{sidebarGroups:n,hasSidebar:t}=Qe(),a=e,o=ae(null),i=Ts(zt?document.body:null);De([a,o],()=>{var r;a.open?(i.value=!0,(r=o.value)==null||r.focus()):i.value=!1},{immediate:!0,flush:"post"});const s=ae(0);return De(n,()=>{s.value+=1},{deep:!0}),(r,l)=>m(t)?(f(),w("aside",{key:0,class:Q(["VPSidebar",{open:e.open}]),ref_key:"navEl",ref:o,onClick:l[0]||(l[0]=sl(()=>{},["stop"]))},[l[2]||(l[2]=p("div",{class:"curtain"},null,-1)),p("nav",$h,[l[1]||(l[1]=p("span",{class:"visually-hidden",id:"sidebar-aria-label"}," Sidebar Navigation ",-1)),C(r.$slots,"sidebar-nav-before",{},void 0,!0),(f(),G(Lh,{items:m(n),key:s.value},null,8,["items"])),C(r.$slots,"sidebar-nav-after",{},void 0,!0)])],2)):q("",!0)}}),Eh=X(Nh,[["__scopeId","data-v-9e9a3195"]]),Oh=U({__name:"VPSkipLink",setup(e){const{theme:n}=ne(),t=mn(),a=ae();De(()=>t.path,()=>a.value.focus());function o({target:i}){const s=document.getElementById(decodeURIComponent(i.hash).slice(1));if(s){const r=()=>{s.removeAttribute("tabindex"),s.removeEventListener("blur",r)};s.setAttribute("tabindex","-1"),s.addEventListener("blur",r),s.focus(),window.scrollTo(0,0)}}return(i,s)=>(f(),w(Z,null,[p("span",{ref_key:"backToTop",ref:a,tabindex:"-1"},null,512),p("a",{href:"#VPContent",class:"VPSkipLink visually-hidden",onClick:o},S(m(n).skipToContentLabel||"Skip to content"),1)],64))}}),Rh=X(Oh,[["__scopeId","data-v-2f312717"]]),zh=U({__name:"Layout",setup(e){const{isOpen:n,open:t,close:a}=Qe(),o=mn();De(()=>o.path,a),Cl(n,a);const{frontmatter:i}=ne(),s=rl(),r=R(()=>!!s["home-hero-image"]);return Ss("hero-image-slot-exists",r),(l,c)=>{const d=tn("Content");return m(i).layout!==!1?(f(),w("div",{key:0,class:Q(["Layout",m(i).pageClass])},[C(l.$slots,"layout-top",{},void 0,!0),j(Rh),j(hl,{class:"backdrop",show:m(n),onClick:m(a)},null,8,["show","onClick"]),j(Th,null,{"nav-bar-title-before":N(()=>[C(l.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":N(()=>[C(l.$slots,"nav-bar-title-after",{},void 0,!0)]),"nav-bar-content-before":N(()=>[C(l.$slots,"nav-bar-content-before",{},void 0,!0)]),"nav-bar-content-after":N(()=>[C(l.$slots,"nav-bar-content-after",{},void 0,!0)]),"nav-screen-content-before":N(()=>[C(l.$slots,"nav-screen-content-before",{},void 0,!0)]),"nav-screen-content-after":N(()=>[C(l.$slots,"nav-screen-content-after",{},void 0,!0)]),_:3}),j(wu,{open:m(n),onOpenMenu:m(t)},null,8,["open","onOpenMenu"]),j(Eh,{open:m(n)},{"sidebar-nav-before":N(()=>[C(l.$slots,"sidebar-nav-before",{},void 0,!0)]),"sidebar-nav-after":N(()=>[C(l.$slots,"sidebar-nav-after",{},void 0,!0)]),_:3},8,["open"]),j(iu,null,{"page-top":N(()=>[C(l.$slots,"page-top",{},void 0,!0)]),"page-bottom":N(()=>[C(l.$slots,"page-bottom",{},void 0,!0)]),"not-found":N(()=>[C(l.$slots,"not-found",{},void 0,!0)]),"home-hero-before":N(()=>[C(l.$slots,"home-hero-before",{},void 0,!0)]),"home-hero-info-before":N(()=>[C(l.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":N(()=>[C(l.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":N(()=>[C(l.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":N(()=>[C(l.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":N(()=>[C(l.$slots,"home-hero-image",{},void 0,!0)]),"home-hero-after":N(()=>[C(l.$slots,"home-hero-after",{},void 0,!0)]),"home-features-before":N(()=>[C(l.$slots,"home-features-before",{},void 0,!0)]),"home-features-after":N(()=>[C(l.$slots,"home-features-after",{},void 0,!0)]),"doc-footer-before":N(()=>[C(l.$slots,"doc-footer-before",{},void 0,!0)]),"doc-before":N(()=>[C(l.$slots,"doc-before",{},void 0,!0)]),"doc-after":N(()=>[C(l.$slots,"doc-after",{},void 0,!0)]),"doc-top":N(()=>[C(l.$slots,"doc-top",{},void 0,!0)]),"doc-bottom":N(()=>[C(l.$slots,"doc-bottom",{},void 0,!0)]),"aside-top":N(()=>[C(l.$slots,"aside-top",{},void 0,!0)]),"aside-bottom":N(()=>[C(l.$slots,"aside-bottom",{},void 0,!0)]),"aside-outline-before":N(()=>[C(l.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":N(()=>[C(l.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":N(()=>[C(l.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":N(()=>[C(l.$slots,"aside-ads-after",{},void 0,!0)]),_:3}),j(uu),C(l.$slots,"layout-bottom",{},void 0,!0)],2)):(f(),G(d,{key:1}))}}}),qh=X(zh,[["__scopeId","data-v-3fa573af"]]),Es={Layout:qh,enhanceApp:({app:e})=>{e.component("Badge",cl)}},Vh={class:"flex items-center rounded-lg border border-slate-200 dark:border-slate-700 overflow-hidden"},Bh={key:1,class:"flex flex-wrap items-center gap-2"},Fh=["href"],Si=U({__name:"ThemeControls",props:{compact:{type:Boolean,default:!1},showSearch:{type:Boolean,default:!0}},setup(e){const n=ae("light"),t=mn(),{site:a}=gn(),o=R(()=>{const h=a.value.locales||{};return Object.values(h).map(v=>{const b=typeof(v==null?void 0:v.label)=="string"?v.label:"",_=typeof(v==null?void 0:v.link)=="string"?v.link:"";return{label:b,link:_}}).filter(v=>!!(v.label&&v.link))}),i=R(()=>l(t.path)),s=R(()=>o.value.map(h=>l(h.link)).filter(h=>h!=="/").sort((h,v)=>v.length-h.length)),r=R(()=>{const h=i.value;for(const v of s.value)if(h===v||h.startsWith(`${v}/`))return v;return"/"});function l(h){if(!h)return"/";const[v]=h.split(/[?#]/);return v&&v.replace(/\/+$/,"")||"/"}function c(h){return r.value===l(h)}function d(h){for(const v of s.value){if(h===v)return"/";if(h.startsWith(`${v}/`))return h.slice(v.length)||"/"}return h}function g(h){const v=l(h),b=d(i.value);return v==="/"?b:`${v}${b==="/"?"/":b}`.replace(/\/{2,}/g,"/")}function u(h){if(typeof window>"u")return;n.value=h;const v=document.documentElement;v.classList.remove("dark"),h==="dark"&&v.classList.add("dark"),v.setAttribute("data-theme",h),v.style.colorScheme=h,localStorage.setItem("vitepress-theme-appearance",h)}return Ee(()=>{const h=localStorage.getItem("vitepress-theme-appearance"),v=document.documentElement.classList.contains("dark")?"dark":"light",b=h==="dark"||h==="light"?h:v;u(b),requestAnimationFrame(()=>u(b))}),(h,v)=>(f(),w("div",{class:Q(e.compact?"flex flex-col items-start gap-3":"flex items-center gap-3")},[e.showSearch&&!e.compact?(f(),G(Ya,{key:0})):q("",!0),p("div",Vh,[p("button",{class:Q(["px-2.5 py-1.5 text-xs font-semibold transition-colors",n.value==="light"?"bg-slate-200 text-slate-900 dark:bg-slate-100":"bg-transparent text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"]),onClick:v[0]||(v[0]=b=>u("light"))}," Light ",2),p("button",{class:Q(["px-2.5 py-1.5 text-xs font-semibold transition-colors",n.value==="dark"?"bg-slate-900 text-slate-100 dark:bg-slate-700":"bg-transparent text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"]),onClick:v[1]||(v[1]=b=>u("dark"))}," Dark ",2)]),e.compact?(f(),w("div",Bh,[(f(!0),w(Z,null,ie(o.value,b=>(f(),w("a",{key:b.link,class:Q(c(b.link)?"rounded-md border border-slate-300 dark:border-slate-600 bg-slate-100 dark:bg-slate-800 px-2.5 py-1 text-xs font-semibold text-slate-900 dark:text-slate-100":"rounded-md border border-slate-200 dark:border-slate-700 px-2.5 py-1 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"),href:g(b.link)},S(b.label),11,Fh))),128))])):(f(),G($s,{key:2}))],2))}}),jh={class:"fixed top-0 w-full z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-b border-slate-200/15 dark:border-slate-800/15 shadow-[0px_24px_48px_rgba(42,52,57,0.06)]"},Uh={class:"flex items-center gap-3"},Gh=["href"],Hh={class:"hidden md:flex items-center space-x-8 font-inter tracking-tight"},Wh=["href"],Kh={class:"hidden md:flex items-center gap-4"},Yh={key:0,class:"bg-primary text-on-primary px-5 py-2 rounded-lg font-medium text-sm transition-all active:opacity-80"},Xh={class:"md:hidden flex items-center gap-2"},Qh={class:"mobile-search"},Jh={class:"group relative"},Zh={class:"absolute right-0 mt-3 w-[min(20rem,calc(100vw-2rem))] rounded-xl border border-slate-200 dark:border-slate-700 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl shadow-xl p-4"},ep={class:"space-y-1"},np=["href"],tp={class:"mt-4 border-t border-slate-200 dark:border-slate-700 pt-4"},ap={key:0,class:"mt-4 w-full bg-primary text-on-primary px-5 py-2 rounded-lg font-medium text-sm transition-all active:opacity-80"},op=U({__name:"SiteHeader",props:{siteTitle:{default:"MeshShape"},navLinks:{default:()=>[]},showSubscribe:{type:Boolean,default:!1},subscribeButtonText:{default:"Subscribe"},navHeightClass:{default:"h-20"}},setup(e){const n=mn();function t(i){const s=a(i);return s==="/en"||s.startsWith("/en/")?"/en/":"/"}function a(i){if(!i)return"/";const[s]=i.split(/[?#]/);return s&&s.replace(/\/+$/,"")||"/"}function o(i){if(i.active)return!0;const s=a(i.href),r=a(n.path);return s==="/"?r==="/":s==="/en"?r==="/en":r===s||r.startsWith(`${s}/`)}return(i,s)=>(f(),w("nav",jh,[p("div",{class:Q(`flex justify-between items-center ${e.navHeightClass} px-8 w-full max-w-7xl mx-auto`)},[p("div",Uh,[p("a",{class:"text-xl font-bold tracking-tighter text-slate-900 dark:text-slate-50 hover:opacity-80 transition-opacity",href:t(m(n).path)},S(e.siteTitle),9,Gh)]),p("div",Hh,[(f(!0),w(Z,null,ie(e.navLinks,r=>(f(),w("a",{key:r.text,class:Q(o(r)?"text-slate-900 dark:text-slate-50 font-semibold border-b-2 border-slate-900 dark:border-slate-50 pb-1 transition-all":"text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 transition-colors"),href:r.href||"#"},S(r.text),11,Wh))),128))]),p("div",Kh,[j(Si),e.showSubscribe?(f(),w("button",Yh,S(e.subscribeButtonText),1)):q("",!0)]),p("div",Xh,[p("div",Qh,[j(Ya)]),p("details",Jh,[s[0]||(s[0]=p("summary",{class:"list-none flex items-center justify-center h-10 w-10 rounded-lg border border-slate-300/60 dark:border-slate-700/60 text-slate-700 dark:text-slate-200 cursor-pointer","aria-label":"Open mobile navigation menu"},[p("span",{class:"text-xl leading-none"},"≡")],-1)),p("div",Zh,[p("div",ep,[(f(!0),w(Z,null,ie(e.navLinks,r=>(f(),w("a",{key:`mobile-${r.text}`,class:Q(o(r)?"block rounded-lg px-3 py-2 text-slate-900 dark:text-slate-50 font-semibold bg-slate-100 dark:bg-slate-800/80":"block rounded-lg px-3 py-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/80 transition-colors"),href:r.href||"#"},S(r.text),11,np))),128))]),p("div",tp,[j(Si,{compact:!0,"show-search":!1})]),e.showSubscribe?(f(),w("button",ap,S(e.subscribeButtonText),1)):q("",!0)])])])],2)]))}}),Vt=X(op,[["__scopeId","data-v-70c33c8b"]]),ip={class:"w-full border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950"},sp={class:"max-w-7xl mx-auto px-8 py-12 flex flex-col md:flex-row justify-between items-center gap-8"},rp=["href"],lp={class:"text-sm font-inter tracking-wide text-slate-600 dark:text-slate-400"},cp={class:"flex flex-wrap justify-center gap-8"},up=["href"],dp={key:0,class:"flex gap-4"},hp={class:"material-symbols-outlined text-slate-600 dark:text-slate-400"},pp={key:0,class:"border-t border-slate-200/80 dark:border-slate-800/80"},gp={class:"max-w-7xl mx-auto px-8 py-4 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-xs tracking-[0.08em] uppercase text-slate-500 dark:text-slate-400"},mp=["href"],fp=["href"],Bt=U({__name:"SiteFooter",props:{title:{default:"MeshShape"},description:{default:""},links:{default:()=>[]},filing:{default:null},socialIcons:{default:()=>[]}},setup(e){const n=mn();function t(o){if(!o)return"/";const[i]=o.split(/[?#]/);return i&&i.replace(/\/+$/,"")||"/"}function a(o){const i=t(o);return i==="/en"||i.startsWith("/en/")?"/en/":"/"}return(o,i)=>(f(),w("footer",ip,[p("div",sp,[p("div",null,[p("a",{class:"text-lg font-bold text-slate-900 dark:text-slate-50 mb-2 inline-block hover:opacity-80 transition-opacity",href:a(m(n).path)},S(e.title),9,rp),p("p",lp,S(e.description),1)]),p("div",cp,[(f(!0),w(Z,null,ie(e.links,s=>(f(),w("a",{key:s.text,class:"text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm font-inter tracking-wide",href:s.href||"#"},S(s.text),9,up))),128))]),e.socialIcons.length?(f(),w("div",dp,[(f(!0),w(Z,null,ie(e.socialIcons,s=>(f(),w("button",{key:s,class:"w-10 h-10 flex items-center justify-center rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:scale-105 transition-transform"},[p("span",hp,S(s),1)]))),128))])):q("",!0)]),e.filing?(f(),w("div",pp,[p("div",gp,[p("a",{class:"hover:text-slate-700 dark:hover:text-slate-200 transition-colors",href:e.filing.href,rel:"noreferrer",target:"_blank"},S(e.filing.label),9,mp),i[0]||(i[0]=p("span",{class:"hidden sm:inline text-slate-300 dark:text-slate-700"},"/",-1)),p("a",{class:"font-medium tracking-[0.03em] normal-case hover:text-slate-700 dark:hover:text-slate-200 transition-colors",href:e.filing.href,rel:"noreferrer",target:"_blank"},S(e.filing.number),9,fp)])])):q("",!0)]))}});function Ft(){const{frontmatter:e}=gn(),n=R(()=>e.value);return{frontmatter:e,page:n}}function jt(){const{theme:e}=gn(),n=R(()=>e.value),t=R(()=>n.value.header||{}),a=R(()=>n.value.footer||{}),o=R(()=>n.value.ui||{});return{theme:e,themeConfig:n,headerConfig:t,footerConfig:a,uiConfig:o}}const vp="/assets/mesh-texture.CdcToYau.png",bp="/assets/mesh-architecture.BxOsXjO_.png",yp={class:"bg-surface text-slate-900 dark:text-slate-100 antialiased selection:bg-primary-container selection:text-on-primary-container"},_p={class:"pt-20 bg-surface"},wp={class:"relative overflow-hidden min-h-[870px] flex items-center px-8 max-w-7xl mx-auto"},kp={class:"grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full"},xp={class:"lg:col-span-5 lg:order-2 relative h-[320px] sm:h-[420px] lg:h-[500px] w-full mt-8 lg:mt-0"},Ap={class:"absolute inset-0 bg-surface-container-low rounded-[2rem] overflow-hidden mesh-gradient group"},Cp={class:"lg:col-span-7 lg:order-1 z-10"},Tp={class:"inline-block label-sm text-[0.6875rem] font-bold tracking-[0.05em] uppercase text-tertiary mb-6"},Sp={class:"text-[2.25rem] sm:text-[2.9rem] lg:text-[3.5rem] font-extrabold leading-[1.18] sm:leading-[1.12] lg:leading-[1.1] tracking-[-0.02em] text-slate-900 dark:text-slate-100 mb-8"},Ip={class:"text-[0.92em] sm:text-[1em] text-primary-dim"},Pp={class:"text-[1.375rem] leading-relaxed text-slate-700 dark:text-slate-400 max-w-2xl font-light"},Mp={class:"mt-12 mb-8 flex flex-col w-full gap-4 sm:flex-row sm:items-center sm:space-x-6 sm:gap-0"},Dp=["href"],Lp={class:"group-hover:underline"},$p={class:"py-24 bg-surface-container-low dark:bg-slate-900"},Np={class:"max-w-7xl mx-auto px-8"},Ep={class:"mb-16 text-center lg:text-left"},Op={class:"text-[2.25rem] font-bold leading-[1.34] sm:leading-[1.2] tracking-tight text-slate-900 dark:text-slate-100 mb-8"},Rp={class:"text-slate-700 dark:text-slate-400 max-w-xl"},zp={class:"relative h-[350px] lg:h-auto lg:aspect-[21/9] w-full bg-surface-container-lowest rounded-[2rem] lg:rounded-full overflow-hidden outline outline-1 outline-outline-variant/10 group"},qp=["src"],Vp={class:"absolute bottom-6 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] lg:w-auto lg:max-w-xs lg:left-12 lg:translate-x-0 lg:bottom-12 flex flex-col space-y-2 p-6 bg-white/40 backdrop-blur-md rounded-xl border border-white/20"},Bp={class:"text-xs font-bold text-primary uppercase tracking-widest dark:text-tertiary"},Fp={class:"text-sm text-slate-900 dark:text-slate-300"},jp={id:"insights-section",class:"py-32 bg-surface dark:bg-slate-950"},Up={class:"max-w-7xl mx-auto px-8"},Gp={class:"flex flex-col lg:flex-row gap-24 items-start"},Hp={class:"lg:sticky lg:top-32 lg:w-1/3 w-full text-center lg:text-left"},Wp={class:"text-[3rem] font-extrabold tracking-tighter leading-tight mb-6 flex items-baseline justify-center lg:justify-start gap-x-0"},Kp={class:"text-slate-700 dark:text-slate-400"},Yp={class:"lg:w-2/3 space-y-32"},Xp={class:"flex flex-col lg:flex-row lg:items-baseline items-start gap-4 lg:gap-6 mb-8"},Qp={class:"text-[4rem] font-thin text-outline-variant leading-none"},Jp={class:"text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100 text-left"},Zp={class:"pl-0 lg:pl-20"},eg={key:0,class:"space-y-5 mb-8 text-lg leading-relaxed text-slate-700 dark:text-slate-400"},ng={key:1,class:"text-lg leading-relaxed text-slate-700 dark:text-slate-400 mb-8"},tg={key:2,class:"mb-8 space-y-3 text-base leading-relaxed text-slate-700 dark:text-slate-400"},ag={key:3,class:"mt-4 px-6 py-3 bg-surface-container-high text-primary rounded-lg text-sm font-semibold hover:bg-surface-container-highest transition-colors"},og={class:"py-24 bg-surface-container-low dark:bg-slate-900 px-8"},ig={class:"max-w-7xl mx-auto"},sg={class:"bg-primary-dim rounded-full p-16 lg:p-24 relative overflow-hidden group dark:bg-slate-900 dark:border dark:border-slate-800"},rg={class:"relative z-10 text-center lg:text-left"},lg={class:"text-[1.9rem] sm:text-[2.25rem] lg:text-[3.5rem] leading-[1.34] sm:leading-[1.28] lg:leading-[1.25] font-bold text-white mb-8 tracking-tighter"},cg={key:0,class:"flex flex-col sm:flex-row gap-6 justify-center lg:justify-start"},ug={key:0,class:"px-10 py-5 bg-white text-primary font-bold rounded-lg hover:bg-on-primary transition-transform active:scale-95"},dg={key:1,class:"px-10 py-5 bg-primary text-white border border-white/20 font-bold rounded-lg hover:bg-primary/80 transition-transform active:scale-95"},hg=U({__name:"HomeLayout",setup(e){const{page:n}=Ft(),{headerConfig:t,footerConfig:a}=jt();function o(){var i;typeof window>"u"||(i=document.getElementById("insights-section"))==null||i.scrollIntoView({behavior:"smooth",block:"start"})}return(i,s)=>(f(),w("div",yp,[j(Vt,{"site-title":m(t).siteTitle||m(n).siteTitle,"nav-links":m(t).navLinks||m(n).navLinks||[],"show-subscribe":!!m(t).showSubscribe,"subscribe-button-text":m(t).subscribeButtonText,"nav-height-class":"h-20"},null,8,["site-title","nav-links","show-subscribe","subscribe-button-text"]),p("main",_p,[p("section",wp,[p("div",kp,[p("div",xp,[p("div",Ap,[p("div",{class:"absolute inset-0 opacity-20","data-alt":"Subtle geometric mesh pattern texture",style:Va({backgroundImage:`url(${m(vp)})`})},null,4),s[0]||(s[0]=ll('<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] flex items-center justify-center"><div class="relative w-full h-full"><div class="mesh-line mesh-line-h absolute top-[20%] left-[20%] w-[60%] h-[2px] bg-primary/20 dark:bg-slate-300/45 rotate-[-15deg] transition-all duration-1000 ease-out group-hover:top-[40%]"></div><div class="mesh-line mesh-line-h absolute top-[40%] left-[20%] w-[60%] h-[2px] bg-primary/40 dark:bg-slate-300/45 rotate-[-15deg] transition-all duration-1000 ease-out group-hover:top-[60%]"></div><div class="mesh-line mesh-line-v absolute top-[20%] left-[40%] w-[2px] h-[60%] bg-primary/30 dark:bg-slate-300/45 rotate-[10deg] transition-all duration-1000 ease-out"></div><div class="mesh-line mesh-line-v absolute top-[20%] left-[60%] w-[2px] h-[60%] bg-primary/50 dark:bg-slate-300/45 rotate-[10deg] transition-all duration-1000 ease-out"></div></div></div>',1))])]),p("div",Cp,[p("span",Tp,S(m(n).heroEyebrow),1),p("h1",Sp,[Ae(S(m(n).heroTitle),1),s[1]||(s[1]=p("br",null,null,-1)),p("span",Ip,S(m(n).heroTitleHighlight),1)]),p("p",Pp,S(m(n).heroDescription),1),p("div",Mp,[m(n).heroPrimaryButton?(f(),w("button",{key:0,class:"w-full sm:w-auto px-8 py-4 bg-primary text-on-primary rounded-lg font-medium hover:bg-primary-dim dark:bg-[#f7f9fb] dark:text-[#0f172a] dark:hover:bg-[#ffffff] transition-all hover:scale-[1.02] active:scale-95",onClick:o},S(m(n).heroPrimaryButton),1)):q("",!0),m(n).heroSecondaryButton?(f(),w("a",{key:1,class:"group w-full sm:w-auto flex items-center justify-center sm:justify-start space-x-2 text-tertiary font-medium px-8 py-4 rounded-lg",href:m(n).heroSecondaryButtonHref||"/blog/"},[p("span",Lp,S(m(n).heroSecondaryButton),1),s[2]||(s[2]=p("span",{class:"material-symbols-outlined text-sm"},"arrow_forward",-1))],8,Dp)):q("",!0)])])])]),p("section",$p,[p("div",Np,[p("div",Ep,[p("h2",Op,S(m(n).structureTitle),1),p("p",Rp,S(m(n).structureDescription),1)]),p("div",zp,[p("img",{alt:"Architectural Mesh Diagram",class:"w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105","data-alt":"Digital blue circuit mesh representing neural network topology",src:m(bp)},null,8,qp),s[3]||(s[3]=p("div",{class:"absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-transparent to-transparent opacity-60"},null,-1)),p("div",Vp,[p("span",Bp,S(m(n).structureCardTitle),1),p("p",Fp,S(m(n).structureCardDescription),1)])])])]),p("section",jp,[p("div",Up,[p("div",Gp,[p("div",Hp,[p("h2",Wp,[p("span",null,S(m(n).insightsTitleLine1),1),p("span",null,[Ae(S(m(n).insightsTitleLine2),1),s[4]||(s[4]=p("span",{class:"text-tertiary"},".",-1))])]),p("p",Kp,S(m(n).insightsSubtitle),1)]),p("div",Yp,[(f(!0),w(Z,null,ie(m(n).insights||[],r=>{var l,c;return f(),w("div",{key:r.index,class:"group"},[p("div",Xp,[p("span",Qp,S(r.index),1),p("h3",Jp,S(r.title),1)]),p("div",Zp,[(l=r.paragraphs)!=null&&l.length?(f(),w("div",eg,[(f(!0),w(Z,null,ie(r.paragraphs,d=>(f(),w("p",{key:d},S(d),1))),128))])):r.description?(f(),w("p",ng,S(r.description),1)):q("",!0),(c=r.listItems)!=null&&c.length?(f(),w("ul",tg,[(f(!0),w(Z,null,ie(r.listItems,d=>(f(),w("li",{key:d,class:"flex gap-3"},[s[5]||(s[5]=p("span",{class:"mt-2 h-2 w-2 shrink-0 rounded-full bg-tertiary"},null,-1)),p("span",null,S(d),1)]))),128))])):q("",!0),r.buttonText?(f(),w("button",ag,S(r.buttonText),1)):q("",!0)])])}),128))])])])]),p("section",og,[p("div",ig,[p("div",sg,[s[6]||(s[6]=p("div",{class:"absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none"},[p("svg",{class:"w-full h-full scale-150 rotate-45",viewBox:"0 0 200 200",xmlns:"http://www.w3.org/2000/svg"},[p("path",{d:"M44.7,-76.4C58.1,-69.2,70.3,-58.5,78.4,-45.3C86.5,-32.1,90.4,-16,88.4,-0.6C86.5,14.8,78.6,29.6,69.5,42.4C60.4,55.1,50.1,65.8,37.5,72.6C24.9,79.5,10,82.5,-4.1,89.5C-18.1,96.6,-31.2,107.7,-43.3,105.7C-55.3,103.7,-66.2,88.5,-73.4,73.5C-80.6,58.4,-84.1,43.5,-86.3,28.9C-88.5,14.2,-89.4,-0.2,-86.3,-13.7C-83.2,-27.2,-76.1,-39.8,-66.5,-50.2C-56.9,-60.7,-44.8,-69.1,-32.2,-76.7C-19.6,-84.4,-6.5,-91.3,7.6,-104.4C21.7,-117.5,31.3,-83.6,44.7,-76.4Z",fill:"#FFFFFF",transform:"translate(100 100)"})])],-1)),p("div",rg,[p("h2",lg,S(m(n).ctaTitle),1),m(n).ctaPrimaryButton||m(n).ctaSecondaryButton?(f(),w("div",cg,[m(n).ctaPrimaryButton?(f(),w("button",ug,S(m(n).ctaPrimaryButton),1)):q("",!0),m(n).ctaSecondaryButton?(f(),w("button",dg,S(m(n).ctaSecondaryButton),1)):q("",!0)])):q("",!0)])])])])]),j(Bt,{title:m(a).title||m(n).footerTitle,description:m(a).description||m(n).footerDescription,links:m(a).links||m(n).footerLinks||[],filing:m(a).filing||null,"social-icons":m(a).socialIcons||[]},null,8,["title","description","links","filing","social-icons"])]))}}),Xa=`---
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
`,Qa=`---
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
`,Ja=`---
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
`,Za=`---
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
`,eo=`---
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
`,no=`---
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
`,to=`---
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
`,ao=`---
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
`,oo=`---
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
`,io=`---
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
`,so=`---
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
`,ro=`---
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
`,lo=`---
category: "mesh"
date: "2023-04-01"
title: "如何绘制架构图：面向沟通的实践方法"
description: "本文围绕“向谁传达什么信息”这一核心问题，给出一套可执行的架构图绘制方法：受众识别、信息分层、逻辑组织与风格统一。"
tags:
    - "mesh"
    - "架构设计"
    - "工程实践"
    - "方法论"
image: "/blogs/assets/202304-draw-architecture-diagram/achitecture-discussing.jpeg"
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
`,co=`---
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
`,uo=`---
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
`,ho=`---
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
`,po=`---
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
`,go=`---
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
`,mo=`---
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
`,fo=`---
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
`,vo=`---
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
`,bo=`---
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
`,yo=`---
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
`,_o=`---
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
`,wo=`---
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
`,ko=`---
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
`,xo=`---
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
`,Ao=`---
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
`,Co=`---
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
`,To=`---
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
`,So=`---
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
`,Io=`---
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
`,Po=`---
category: "domain"
title: "从 PKM 到 Brains：让知识库在规则中持续进化"
date: "2026-04-13"
description: "本文解释我为什么把个人知识库从笔记工具改造成 Brains，并给出一套可直接落地的分层结构：输入层、知识层、输出层，以及 agent 的修改边界。"
tags:
  - "domain"
  - "PKM"
  - "LLM"
  - "wiki"
---

年初我把 Logseq 换成 VSCode + Foam 的时候，脑子里最先冒出来的感觉是：知识库这件事变了。存储开始变便宜，判断开始变贵。这也是我把 PKM 升级成 Agentic Brains 的原因：它不再只是一个存储系统，而是一个在约束中持续进化的知识系统。

眼看 Logseq 更新越来越少、越来越慢，我原本只是想换一个更方便接入 Copilot 的地方。结果发现，要动的根本不是工具，而是整个工作流。虽然 VSCode + Foam 在 Query 和任务管理上不如 Logseq 顺手，但它让我更自然地把 AI 接进写作、整理和提炼流程。

这件事背后的变化很直接。过去做知识管理，我更关心存储、检索、关联；现在 AI 让知识获取的边际成本接近于零，重点就转成了思考、提炼和决策。比如以前我要自己摘录、整理、建双链；现在很多原始材料只要保留链接、对话或草稿，真正需要我投入的，是判断它是否值得进入知识层。

前段时间 Karpathy 的 “LLM Wiki” 在社区里很火，也正好补上了我这套系统里卡住的那一块：把“编译”这件事显式放进知识库更新流程。四处抓取的网页、AI 的聊天记录、agent 从一句话生成的内容，都只是输入层材料；它们只能在明确规则下，被编译成知识层的结果。这样知识库才会越用越准，而不是越用越乱。

## Brains 的最小架构

\`\`\`mermaid
flowchart TD
  subgraph I[输入层]
    raws[raws/]
    journals[journals/]
  end

  subgraph K[知识层]
    pages[pages/, pages/OKR/]
  end

  subgraph O[输出层]
    outputs[outputs/, outputs/blogs/]
  end

  subgraph R[规则层]
    agents[AGENTS.md]
    soul[SOUL.md]
  end

  raws --> synth[整理 / 提炼 / 选择]
  journals --> synth
  synth -->|编译后升级| pages
  pages --> outputs
  agents -.边界.-> synth
  soul -.风格.-> outputs
\`\`\`

我现在把知识库拆成四层，这样每一层的职责都很清楚：

- 输入层：\`raws/\`、\`journals/\`。放原始信息、随手记录、未整理材料。这里强调保真，不强调结构。
- 知识层：\`pages/\`、\`pages/OKR/\`。放已经被提炼、合并、去重后的长期知识。这里才允许 agent 在规则内修改。
- 输出层：\`outputs/\`、\`outputs/blogs/\`。放对外表达的内容，服务写作、分享和复用。
- 规则层：\`AGENTS.md\`、\`SOUL.md\`。前者定义全局边界，后者定义个性化偏好，让 agent 知道“能做什么、不能做什么、应该像谁一样写”。

和 Karpathy 的思路类似，我先把原始数据和知识明确分开，再规定 agent 只能修改知识区里被授权的内容。这样做的目的在于给进化过程加护栏，避免系统被自己的自动化能力反噬。

\`\`\`mermaid
flowchart LR
  raw[原始材料：网页 / 聊天 / 草稿] --> compile[规则内编译]
  compile --> evidence[证据层]
  evidence --> page[长期知识页]
  rule[AGENTS.md / SOUL.md] -.约束.-> compile
  agent[agent] -.仅可写.-> page
\`\`\`

## 规则怎么落地

光有目录结构还不够，关键是把“谁能改什么”写成规则。我的做法很简单：输入区尽量保留原样，知识区和输出区按工作流授权修改，规则文件集中管理。

为了让这套规则易于维护，我把 agent framework 拆成三类：

- Role / instruction：定义角色边界，说明什么能做、什么不能做。
- Command：定义工作流，说明怎么做、输入输出是什么。
- Skill：定义可复用能力，说明 agent 在什么场景下可以调用哪些能力。

这套拆分的好处很具体：

- 想调整输入输出格式，改 command。
- 想修改知识页治理规则，比如增加 expire 规则或 conflict 记录，改 instruction。
- 想新增检索、写作或分析能力，改 skill。
- 想统一更新全局约束或个性化偏好，改 \`AGENTS.md\` 或 \`SOUL.md\`。

我额外还要做 OKR 管理和博客写作，所以在这套框架里又补了对应的输入输出和规则。这样一来，知识库、计划系统和内容生产都落在同一个 Brains 里，只是分属不同工作面。对我来说，这样拆开以后，边界反而更清楚了。

## 为什么这比传统 PKM 更适合 AI 时代

传统 PKM 的默认前提是：人负责整理，工具负责存储。Brains 的前提正好相反：存储和初步整理越来越便宜，真正昂贵的是判断、连接和迭代。

先说最直接的一点：AI 把实现成本压低之后，思考本身反而更值钱了。过去一个想法从出现到验证，中间隔着资料收集、方案整理、原型实现；现在很多步骤都可以先交给 AI 起草，你只需要更快判断这个方向值不值得继续，再决定怎么迭代。也就是说，瓶颈不再是“做不出来”，而是“该做什么”。

我现在碰到一个新想法，通常会先丢进 \`journals/\` 或原始记录里，让 AI 帮我做初筛；只有它反复出现在 OKR、写作或项目里，我才会把它整理进 \`pages/\`。存储动作确实变轻了，但判断动作反而变重了。

再往下看，单纯的知识存储其实也在快速贬值。以前我们需要花很多力气把资料摘录、归档、分类，因为找不到就等于没有；现在很多信息即使不完整存档，也可以通过搜索、对话和上下文临时重建。真正稀缺的，反而是你能不能把看似无关的内容连起来。

这也是为什么跨领域链接反而更重要，因为 AI 还不会主动替你建立长期、稳定、带偏好的连接。它可以回答“这是什么”，也可以补全“下一步怎么做”，但它不会天然知道为什么我会把 OKR、博客写作、知识页治理放在同一个系统里，也不会天然知道某条原始记录为什么值得升级成长期知识。这部分仍然需要人来定义连接规则。

当然，这不等于存储不重要。对研究、合规、资料归档这类场景来说，原始材料的完整保存仍然很关键。我的判断更适用于另一类系统：需要持续提炼、持续产出、持续迭代的知识系统。

说到底，Brains 只是把一件事说清楚了：AI 负责把实现成本打下来，人负责决定什么值得留下、什么应该连接、什么可以被改。我的判断是，规则的作用就是保住知识库的方向感。
`,Mo=`---
category: "domain"
title: "Logseq 迁移打分：五个维度、三条流水线"
date: "2026-04-13"
description: "这套迁移机制先用五个维度判断旧笔记值不值得留，再把它分进 A/B/C 三条流水线。你可以直接照着阈值、CSV 字段和校准步骤执行。"
tags:
  - "domain"
  - "logseq"
  - "migration"
  - "knowledge-management"
---

在搭建好 Brains（LLM Wiki）之后，第一时间就是回去 Logseq 翻翻，看看有没有什么值得迁移的内容，榨取一遍剩余价值。在整理 Logseq 旧笔记时，最难的不是判断什么样的内容是值得留下的。为此，我设计了一个打分机制，让Agent在五个review维度上对内容进行打分，再按得分阈值分为三类笔记，最后批量的按流水线执行：立即吸收、延后总结、谨慎放弃。这样就不需要一个一个人为的判断，也不靠感觉决定去留了，更多是按一套能复查、能校准的流程走。

执行时按照：**高价值、强相关、可复用的进 Lane A；暂时有价值但不值得立即精炼的进 Lane B；低分、重复、偏题的进 Lane C。**

## 五个打分维度，分别在筛什么

这套 rubric 对应五个字段：\`goal_alignment\`、\`reusability\`、\`uniqueness\`、\`insight_density\`、\`maintainability\`。它们看起来像指标，实际是在回答五个个性化问题。

| 维度            | 主要在看什么           | 高分信号                 | 低分信号                 |
| --------------- | ---------------------- | ------------------------ | ------------------------ |
| goal_alignment  | 是否服务当前知识库目标 | 核心主题、可直接服务输出 | 偏题、与主线无关         |
| reusability     | 能否跨场景复用         | 方法、规则、框架         | 一次性记录、强依赖上下文 |
| uniqueness      | 是否重复劳动           | 独有表达、案例、结构     | 重复摘录、简写变体       |
| insight_density | 单位篇幅里是否有判断   | 结论、边界、建议         | 只有材料，没有提炼       |
| maintainability | 迁入后是否好维护       | 边界清楚、便于引用       | 主题散、维护成本高       |

\`\`\`mermaid
flowchart TD
  score[五维打分] --> check{是否重复 / 偏题?}
  check -- 是 --> laneC[Lane C: Drop]
  check -- 否 --> total{total_score >= 18?}
  total -- 否 --> mid{11-17?}
  total -- 是 --> goal{goal_alignment >= 4?}
  goal -- 是 --> laneA[Lane A: Ingest-Now]
  mid -- 是 --> laneB[Lane B: Summarize-Later]
  goal -- 否 --> laneB
  mid -- 否 --> laneC
\`\`\`

### 1. goal_alignment：这条笔记是否服务当前知识库目标

这一维看的是“它和当前迁移目标有没有关系”。迁移优先的是**可复用的方法、框架和长期知识**，所以核心主题天然比泛知识更容易得高分。最直接的判断方法，就是问一句：**迁入后，能不能稳定服务当前知识库目标或后续输出？**

判断很简单：强相关就高，弱相关就低，无关就直接降级。

比如 \`DDD.md\`、\`4+1 View Model.md\`、\`分析工具___MECE.md\`、\`架构治理.md\` 本身就在高价值主题里，天然更贴近目标。相反，\`多巴胺.md\`、\`虚数与复数.md\`、\`老头晒太阳.md\` 这类内容，至少在当前目标下不占优先级。

### 2. reusability：这条笔记能不能跨场景复用

可复用性看的是“它能不能反复拿出来用”。至于我当时写得顺不顺，反而没那么重要。高分内容通常能脱离原始语境单独成立，描述的是方法、框架或判断规则，而不是一次性记录。像 DDD 拆解、架构风格对比、认知偏差总结，通常都更适合进入可复用知识层；零散问答、瞬时灵感、会议碎片则更适合先放进 Lane B。

迁移计划把 Lane B 设计成 \`summary bundles\`，承认的是一个简单事实：**有些材料是“主题有价值，单条不值得精修”。** 它们不该丢，但也不该占用 Lane A 的处理能力。

### 3. uniqueness：这条笔记是不是重复劳动

独特性解决的是迁移里最常见的问题：看起来在积累，实际是在重复记录。所以计划里才会先建 \`duplicate-clusters.md\`，再判断一条笔记到底是 canonical source，还是重复变体。

| 重复簇                         | 典型问题         | 处理方式            |
| ------------------------------ | ---------------- | ------------------- |
| DDD family                     | 同一主题多次展开 | 找 canonical source |
| architecture style comparisons | 对比维度重复     | 合并成主题包        |
| cognition micro-bias notes     | 碎片化但高度相似 | 汇总后再提炼        |
| overlapping workshop Q&A notes | 问答内容互相重叠 | 保留最完整版本      |

- 如果一条笔记提供了别处没有的表达、案例或结构，它的独特性更高。
- 如果它只是另一条笔记的简写版、重复摘录版、局部展开版，它的独特性就应下降。

这一步看不清，迁移后的知识库就会继续继承旧系统里的冗余。

### 4. insight_density：单位篇幅里有没有真正的判断

信息密度看的是“有效判断”有多少。高密度笔记通常有结论、有边界、有可执行建议；低密度内容则往往只有标题、概念或摘录，没有真正的提炼。这样的材料不是没用，但更像原材料，先留在 Lane B 的主题汇总里更合适。

迁移计划采用“先 synthesis，再 evidence，再 pages”的链路，本质上也是在提高 insight density：先合并原始材料，再提炼能站住脚的判断，最后才进入长期知识层。

### 5. maintainability：迁进去之后，未来好不好维护

这一维决定知识库会不会越迁越重。好维护的内容，边界清楚、结构稳定、后续容易合并和引用；难维护的内容，通常语义发散、主题过宽、又强依赖当时上下文。计划要求 \`inventory.csv\` 记录 \`primary_category\`、\`secondary_category\`、\`decision_reason\`，就是为了提前把维护成本显式化。

## 阈值规则：吞吐控制

计划文档给出的阈值很明确：

- \`total_score >= 18\` 且 \`goal_alignment >= 4\` → Lane A
- \`11-17\` → Lane B
- \`<=10\` 或 duplicate / off-goal → Lane C

我最在意的是 **Lane A 额外要求 \`goal_alignment >= 4\`**。这说明体系的优先级很明确：先看是否服务当前目标，再看综合价值。

### Lane A：立即吸收，不等以后

Lane A 对应 \`Ingest-Now\`。进入这一道，说明材料不仅整体价值高，而且和当前知识库目标强相关，值得立即投入精炼成本。

典型候选就是首波种子里的 DDD、架构、方法论、认知类核心笔记。它们会先进入 \`raws/*-core-synthesis.md\`、\`raws/*-core-evidence.md\`，再提升到 \`pages/DDD.md\`、\`pages/架构模式.md\`、\`pages/问题分析与决策方法.md\` 等正式页面。Lane A 的意思很简单：**进入生产线。**

### Lane B：主题保留，但先做批处理

Lane B 对应 \`Summarize-Later\`。总分落在 11-17，意味着它不是垃圾，也不是当前最该精修的对象。

这类内容的正确处理方式，是进入主题包。例如计划里的：

- \`raws/DDD-extended-notes-summary.md\`
- \`raws/architecture-styles-comparison-summary.md\`
- \`raws/cognitive-bias-and-heuristics-summary.md\`

这背后的判断很实用：**有价值，但价值主要体现在“成组后更有用”。** 如果强行逐条精炼，成本会高于收益。

### Lane C：先记账，后复核

Lane C 对应 \`Drop\`，但计划对它很克制。规则写的是 \`<=10\` 或 duplicate / off-goal 可进 Lane C，同时又明确规定：**任何物理删除都要等完整流程结束后的最终复核和显式确认。**

这点我很认同。Lane C 的意义是先停止继续投资。

也就是说，Lane C 更像一个带账本的冻结区：

- 先记录它为什么被放弃。
- 先标记它是不是重复、偏题或低价值。
- 直到全量分类完成，再统一回看是否真的删除。

这样能防止迁移前期因为判断标准还没稳定，就误删边界内容。

## 执行流程：把打分、提炼、入库串成一条线

要让这套东西真的跑起来，我最在意的其实不是“流程有多完整”，而是每一步能不能落到动作上。能不能回写。能不能复核。不能的话，前面说再多都没用。

1. 先把全量内容落到 \`inventory.csv\`。
   - 这里不只是记文件名，还要把 \`filename\`、\`primary_category\`、\`secondary_category\`、\`goal_alignment\`、\`reusability\`、\`uniqueness\`、\`insight_density\`、\`maintainability\`、\`total_score\`、\`lane\`、\`duplicate_cluster\`、\`decision_reason\`、\`status\` 这些字段都准备好。这样后面每一次判断，处理的都是数据，不是印象。
2. 然后，用 Python 脚本把这份 CSV 包成一层可 CRUD 的操作面。
   - 我不太想让 Agent 直接手改表，所以会把交互规则先写进 Prompt，Agent 只需要按规则去读、算、写。
   - 说白了，就是先把规矩编码进去，再让它照着执行。这样少很多口头解释，也少很多“这次我觉得应该算进去”的偏差。
3. 接下来，按 20 条一组做打分标注。
   - 每一组里，Agent 先分析内容，再调用 Python 脚本把分数、类别、lane、reason 写回 CSV。
   - 第一轮的目标很简单：先分完，不急着精修。每批结束后，先生成分组结果，再把需要人工确认的条目单独列出来，尤其是边界样本、重复簇和争议项，人工过一遍。
4. 等初筛完成，再按同样的 20 条一组做内容提炼。
   - 这一轮不再盯着分数，而是把能留下的内容压成当前知识库可接收的 \`raws\` 原始材料。
   - 节奏还是一样：Agent 分析，脚本落盘，结果回看，必要项人工确认。这样提炼出来的，不是散笔记，而是已经过一轮筛选、可以继续进知识库加工的原料。
5. 最后，等所有内容都提炼完，再执行 \`/kn-ingest\`。  
   这一步不是简单导入，而是把前面整理好的 \`raws\` 再消化一遍，真正变成当前知识库能直接用的新知识。到这里，打分、提炼、入库才算闭环。

**最后，我就得到了 10 篇高度精炼、结构清晰、可复用的核心笔记（Lane A）**

## Example

![Theme Wave 01](../assets/202604-logseq-scoring-overview/1776153628712.png)
`,Do=`---
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
`,Lo=`---
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
featuredArticle: en/blogs/2026/202602-pov-agentic-engineering.md
sideArticles:
    path: en/blogs/**/*.md
    count: 3
articlesMoreText: View More
articlesMoreHref: /en/blogs/
readMoreLabel: Read More
---
`,$o=`---
category: "domain"
date: "2022-02-01"
title: "Logseq Workflow: From Fragments to a Personal Wiki"
description: "A practical walkthrough of how I migrated from Trello and Typora to Logseq, and how a capture–organize–execute workflow turns scattered notes into a trackable knowledge wiki."
tags:
    - "domain"
    - "PKM"
    - "logseq"
    - "wiki"
image: "/blogs/assets/202202-logseq-build-your-own-wiki/1644655887368.jpg"
---

## Preface

In the last few years I have relied more and more on external systems to manage information: more tasks, longer-lived contexts, and memory alone is no longer enough to keep output stable.
I tried Trello, Typora, and the system Notes app, but none of them handled the combination of "fragment input + long‑term tracking + knowledge linking" well. When I started using [Logseq](https://logseq.com) at the end of 2021, I finally wired these three into one workflow. This article documents that workflow and the lessons learned.

## Tool Journey

### 1.0 | Trello

- Goal: manage non‑project tasks and track goals
- Use cases:
    - Reading notes, recorded in card comments (markdown)
    - Certification progress, with deadlines and caveats
    - TODOs: things to do, articles to read, topics to learn
- Limitations:
    - Mid‑ to long‑term plans need to be broken down gradually, which Trello does not guide you to do
    - Work‑related tasks increased and had to be recorded (brain RAM was not enough)
    - There was a lot of fragmented information, and Trello requires login, so I could not capture anytime, anywhere
    - In the end tasks just piled up on the Kanban board, without truly being managed and executed, especially when large tasks needed decomposition

### 2.0 | Trello + Reminders/Notes + Typora

- Goal: task management, goal tracking, OKR
- Use cases:
    - Use tags and separators to distinguish task types and priorities
    - Use checklist + attachment to connect Os and KRs and review completion
    - Use folder hierarchy in Typora to roughly group notes
    - (Apple) Reminders/Notes to capture sparks of ideas on the phone, then move them to Mac later

![Trello Card](../../../blogs/assets/202202-logseq-build-your-own-wiki/1644655887368.jpg)

\`\`\`markdown
## Typora Folder Structure

----------------------------files 0. README : Preface

1.  TODO : task management
2.  NOTEBOOK : scratchpad

----------------------------folders
\\_backup : backup data
\\_secrets : \`***********\`
documents : notes I wrote, mostly in markdown
\\_archive : archived outputs, such as final PDFs
resources : reference materials from outside
\\_workspace : project working docs, ideally deleted after some time
\`\`\`

- Limitations:
    - Typora is great for writing articles, but clumsy for fragmented notes; I often had to search to find past notes
    - I had to jump repeatedly across multiple apps
    - Trello was enterprise edition, Typora became paid; future migration cost would be high
    - Later I replaced Trello with GitHub Project, but it only treated symptoms, not the cause

### 3.0 | Logseq

I first saw [Dawei Ma's](https://www.bmpi.dev/) [life management system](https://www.bmpi.dev/self/life-in-plain-text) on his blog. His TODO/OKR/notes management approach matched my needs very well: an "All in One + Notes + Geek + RoamCult" tool.

Then through the community and Twitter I learned about more RoamCult + GTD + Wiki tools, and finally picked Logseq as my new note‑taking system.

## Logseq Workflow

### Quick Start

There are already many tutorials on basic Logseq usage, so I will not repeat them. Instead I will only list the real‑world scenarios I still use after long‑term adoption. You can copy them directly and tweak at your own pace.

#### Reading a good article in WeChat Official Account

- Capture
    - On phone: forward the article to the contact \`Cubox收藏助手\`
- Process
    - Log into \`Cubox.pro\`, review collected articles, copy/export markdown into \`Logseq\`, then delete the item from Cubox

> Cubox is a knowledge box with multi‑platform entry points: iOS / Chrome plugin / WeChat bot. The free tier supports 200 items. I just treat it as a relay station.
> It also supports OCR for images and markdown export.

#### Valuable discussion in a WeChat group

- Capture
    - On phone: forward messages to \`Cubox收藏助手\`

> Yes, chat messages can be forwarded too… but you cannot easily merge multiple messages into one item.

#### Discovering a new technology on Zhihu

- On phone: Share → More → Quick save to \`Cubox\`
- Chrome:
    - Right‑click → save page/content to \`Cubox\`
    - Take full‑page screenshots with \`GoFullPage\`

#### Receiving an email (beware of sensitive content)

- Chrome:
    - \`GoFullPage\` screenshot
    - Export markdown with \`Markdownload\`

#### Reading a technical article on Medium

- Chrome:
    - \`GoFullPage\` screenshot
    - Export markdown with \`Markdownload\`

#### Downloading a PDF e‑book

- On Mac: drag it into \`Logseq\`

> Dragging into Logseq creates a copy under the configured assets path. If you do not want that copy, you can copy the absolute path and reference the existing file from Logseq with \`![title](<absolute path of pdf>)\`.
> I also installed \`Goodnotes\`, but since I mostly work on Mac/iPhone, I rarely use it (it is more friendly on iPad).

#### OKR: finishing 20 LeetCode problems

- I created a template. Before solving, I create a page from the template and start a TODO timer.
- After finishing, I record the analysis and code and then complete the TODO.
- In the OKR page I added a Query to count how many LeetCode problems are done (in practice, linked references alone already give a good view).

\`\`\`markdown
- TODO #leetcode #OKR/2022/O1-JVM/KR1-Leetcode
    - Problem
        - abcdefg
    - Analysis
        - 1
        - 2
        - 3
    - Code
        - blaaaaaaaaaaaaa
\`\`\`

#### Preparing next week's meeting

- In the journal create a \`scheduled todo\`, and put agenda/meeting minutes under a tag page

\`\`\`markdown
- TODO have a meeting with [[@Anddd7]] #Project/X/2022-02-01
  SCHEDULED 2022-02-01
\`\`\`

#### Picking up a new ticket

- In the journal create a \`todo\`

\`\`\`markdown
- TODO refactor the workflow engine #Project/X/CARD-123456
    - tasking 1
    - tasking 2
    - tasking 3
\`\`\`

#### Doing tech selection and architecture design for a new project

- Create a \`page\` like \`Project/X/Payment Solution\`
- You can use Logseq's built‑in \`/draw\`, or external tools such as:
    - Whiteboard: Excalidraw, draw.io, Google Drawing
    - Mindmap: ProcessOn, Shimo
    - Design: Penpot (open source), Figma (paid)
    - Sticky‑note boards: Google Jamboard, Miro, Mural (paid)
    - As‑code diagrams: PlantUML
    - Database diagrams: dbdiagram
    - Code highlighting: carbon.now.sh

#### Handling a high‑priority bug

- In the journal create a \`todo\` with priority, schedule, and deadline

\`\`\`markdown
- TODO [#A] refactor the workflow engine #Project/X/CARD-123456
  SCHEDULED xxxx-xx-xx
  DEADLINE xxxx-xx-xx
    - tasking 1
    - tasking 2
    - tasking 3
\`\`\`

#### Publishing a blog post

- Copy or export the Logseq page and just paste it into your blog repo

> I wrote a small shell script: type a filename and it copies the page from Logseq into the Hexo path.

#### Reviewing knowledge

- Use flashcards!! Or the community plugin random notes to flip through old notes from time to time
- Do periodic (weekly/monthly) reviews

### Tips

#### Other tools

Logseq is at the center of my knowledge management, but to capture high‑quality raw data efficiently I still rely on other tools. Currently I mainly use:

- Tools
    - Logseq: TODO, OKR, GTD, notes, insights, highlights, databases, views, tables
    - Visual Studio Code: structuring notes, writing blogs
    - iCloud + GitHub: multi‑device sync and backups
    - Cubox + MarkDownload: collecting articles and clipping content
    - Goodnotes + WeChat Reading: deep reading books
- Channels
    - Twitter (great, except you need a VPN)
    - Zhihu (so‑so)
    - WeChat Official Accounts
    - Blogs / newsletters
    - Group chats

#### Hierarchy

When a page name contains \`/\`, Logseq will treat it like a file path and generate a hierarchy. The graph view also uses different colors, which makes the structure clearer.

![Hierarchy](../../../blogs/assets/202202-logseq-build-your-own-wiki/wx20220212-172346.png)

![Page Graph](../../../blogs/assets/202202-logseq-build-your-own-wiki/wx20220212-172451.png)

#### Query: GTD / OKR

With Advanced Queries you can search pages/blocks, surface high‑priority tasks or content, and build your own flow for managing work.

- Tasks in progress

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

- High‑priority or OKR‑related TODOs

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

![Result](../../../blogs/assets/202202-logseq-build-your-own-wiki/1644658272643.jpg)

## Thoughts

Logseq's bidirectional links fit Mesh‑Shaped learning very well: connect key nodes first, then keep expanding along those links.

When I juggle multiple parallel tasks, I use the journal + TODO (Query) to create a "context snapshot" for the current task before switching. When I come back, I do not need to reconstruct the mental state – I just follow the notes and continue.

Logseq is not the only answer, but finding a tool that matches the way you think is crucial. Once the tool aligns with your thinking pattern, the cost of recording drops, and the reuse efficiency of your notes goes up significantly.
`,No=`---
category: "mesh"
date: "2022-03-01"
title: "Mesh‑Shaped Growth Path for Cloud‑Native Developers"
description: "Using cloud‑native evolution and personal career practice to answer one question: how can developers build a transferable, amplifiable capability network instead of chasing isolated skills."
tags:
    - "mesh"
    - "架构设计"
    - "工程实践"
image: "/blogs/assets/202203-mesh-shaped-cloud-native-developer/2022-03-13-22-37-47.jpeg"
---

## Background: The Rise of Cloud‑Native

Cloud computing has shifted from an optional tactic to core infrastructure for digital business. The question is no longer "Should we go to the cloud?" but "How do we continuously deliver high‑quality applications on the cloud?"

When traditional migration approaches hit their limits, a deeper question emerges: do cloud applications need a different set of design principles, collaboration models, and engineering practices compared with the on‑prem era?

Cloud‑native became mainstream in exactly this context. It is not just a tooling upgrade; it is a paradigm shift in how we build and operate software.

> [Definition of Cloud‑Native](#cncf) \\
> Cloud native technologies empower organizations to build and run scalable applications in modern, dynamic environments such as public, private, and hybrid clouds. Containers, service meshes, microservices, immutable infrastructure, and declarative APIs exemplify this approach. \\
> These techniques enable loosely coupled systems that are resilient, manageable, and observable. Combined with robust automation, they allow engineers to make high‑impact changes frequently and predictably with minimal toil.

The key value of cloud‑native is decoupling: it separates business capabilities from cross‑cutting concerns such as deployment, elasticity, observability, and security, so teams can ship business value faster and more reliably.

![business-logic-core](../../../blogs/assets/202203-mesh-shaped-cloud-native-developer/2022-03-13-22-37-47.jpeg)

In 2021 cloud‑native technology hit another wave of explosive adoption:

- Containers became the standard packaging format for cloud‑native apps, and Kubernetes became the de‑facto standard for running and orchestrating them.
- SMI (Service Mesh Interface) and OAM (Open Application Model) attempt to define standards for the network and application layers.
- Adoption has grown exponentially across industries and domains: from internet to factories, from web to IoT.
- In China, leading internet companies have largely completed their cloud‑native transformations; Alibaba, Tencent and even CAICT have all published their cloud‑native blueprints (see [#Links](#reports)).

> "Sir, the times have changed."

## Background: Backend Developers and Career Paths

As someone who started with the label "Java / backend / developer", I have long been puzzled:

- Three years of Kotlin, but only a handful of truly high‑concurrency scenarios; my JVM knowledge is partial, my interview‑style theory even more so.
- I can write React components and test Hooks logic; I have built CI/CD pipelines and Terraform automation.
- I have done DevOps consulting, AWS solution design, and pre‑sales work…

Yet most backend job descriptions still revolve around Spring, JVM, and Redis. These skills are important, but are they sufficient for handling the delivery complexity of the cloud‑native era? If a developer practices across business, platform, automation, and architecture, are they "off the backend track"?

### Vertical vs Horizontal Growth

Should developers grow horizontally — breadth‑first, reading widely? Or vertically — depth‑first, specializing in hard problems?

If we zoom out to the CTO horizon, a healthy trajectory mixes both breadth and depth at different stages. As your influence and authority broaden, communication and leadership become as important as technical skill (see [Appendix: What Is an Architect](#扩展如何定义架构师)).

![t-shaped](../../../blogs/assets/202203-mesh-shaped-cloud-native-developer/1-n1zqvw8bk-o8rwxnzs5kq-1640317547459-0.png)

Long‑term, you need both depth in your core domains and deliberate exploration into adjacent areas. Knowledge and skills are rarely isolated; each is often composed from more foundational pieces, and there are many links and couplings between them.

My conclusion: instead of stopping at a single T‑shape, your capability should evolve into a connectable, transferable mesh.

#### The Trap of "Division of Labor"

Division of labor creates a need for vertical specialization, but its nature is to maximize output in a narrow domain. Many so‑called "specialties" are in fact defined by capital: they bind workers to a narrow label so that labor can be traded as a commodity — for example, "I need an SSH backend developer".

Once labor becomes a commodity, discounting and promotion logic naturally applies — this is the root of over‑competition and burnout.

![scientist](../../../blogs/assets/202203-mesh-shaped-cloud-native-developer/wx20220321-104324.png)

(Recommended) [【硬核社会学】996、内卷、打工人：马克思为什么是对的（上）| 23:22](https://www.bilibili.com/video/BV18z4y1C7rX)

---

## 00. Preface

When I first entered IT, I had a clear role model: the indie developer. Programming felt cool — combining different languages, frameworks, and services like Lego bricks to build interesting systems. Thoughtworks' focus on technical excellence gave me many chances to try cutting‑edge technologies (Tech Radar).

After experimenting with different stacks, roles, and projects, my familiar domains and skills gradually extended beyond classic backend. But technical WeChat groups were still obsessed with Spring internals and JVM tuning, which made me doubt my direction. We were all doing CRUD, but why did our focus diverge so much?

After diving into cloud services and cloud‑native, the answer emerged for me: **the development model has changed.**

- In the past, "business and technology" were hard to separate; when writing business logic you had to worry about many runtime, deployment, and operations concerns.
- Now, cloud abstracts hardware and networking; cloud‑native abstracts technical components and development practices. Developers get simpler, more powerful tools.

> "It is like building a PC: pick parts on an e‑commerce site, follow a basic guide, and power on with one click" — that is the cloud‑native development model.

## 01. Development in the Cloud‑Native Era

"Abstraction — the essence of programming — is about distilling the problem domain and the solution domain."
"Encapsulation, inheritance, polymorphism — not just OO features, but the direction of technological progress."

### Technical Descent

Cloud computing sits above hardware and traditional software, providing a higher‑level abstraction layer. As certain problem domains get solved well, their solution space is packaged and productized into cloud services.

The more domains we industrialize, the richer our toolset becomes, and the easier it is to solve new problems on top.

Before the cloud era we built GUIs and backends with Java and Python, structured by procedural or OO thinking. In the cloud era we compose containers, serverless, and IaC.

Technical descent drives infrastructure shifts; infrastructure shifts drive industry upgrades.

### Spiral Ascent

"Spiral ascent" nicely describes how history and technology progress.

From history we know how electricity and the internal combustion engine enabled consumer electronics, computers, and cars, which in turn changed society. Today, software repeats the pattern. Cloud‑driven technical descent is triggering a cascade of higher‑level innovation.

Once upon a time you had to dig through docs to install a database, configure IPs, and set up replication. Now there are dozens of database vendors, many with subscription‑based cloud offerings. Ideas that used to live only in imagination are now mainstream:

- Abstractions for business: low‑code / no‑code
- Abstractions for programming: BA with AI developer autopilot
- Abstractions for architecture: Architecture as a Service (AaaS)

Take Tencent Mini Programs: they are fully integrated with Tencent Cloud. You can use the IDE to develop, deploy, and operate cloud functions and storage without ever logging into the cloud console — truly "one person, one army".

### Staying Stable Amid Change

With such rapid change, how do developers keep up?

> "Master math, physics, and chemistry; then you can go anywhere."

Math, physics, and chemistry capture how the world works. In computing we have similar "laws of nature": algorithms, CPU architecture, pipelines, consensus protocols, and so on.

"Using AWS MQ for async messaging" and "CPU DMA talking to devices asynchronously" are both instances of async IO in different layers.

So although I dislike rote interview drills, I still believe algorithms and computer architecture are fundamentals every developer should understand. As old technologies sink and new ones spiral upward, these laws sustain your learning and adaptation capacity.

## 10. Developers in the Cloud‑Native Era

In a narrow sense, a "cloud‑native developer" is someone who builds cloud‑native infrastructure: containers, CI/CD, cloud services, etc. They work in known problem domains, shaping reusable solutions and providing them as services — working on the _known_ (for example, solution architects in cloud vendors).

But cloud‑native ultimately serves _business applications_. Before proposing solutions, you must clarify the problem domain: understand the business, commercial logic, and organizational context, design appropriate applications, and then choose cloud‑native options to support them.

In a broader sense, a cloud‑native developer is someone who understands cloud‑native concepts and technologies, and can apply them to increase individual, team, and organizational delivery efficiency — working on the _unknown_ (for example, the opportunities at Thoughtworks).

### "Cloud‑Native Developer ≠ Backend"

"Interviewing about nuclear bombs, screwing bolts at work" captures many people's frustration with current hiring. But even if you master "nuclear" skills, do they actually make your daily delivery that much better? Maybe optimizing how to screw the bolts — improving boring day‑to‑day processes — matters more.

With cloud and cloud‑native, many previously "advanced" techniques are now basic services. As infrastructure standardizes, backend work shifts from "server development" to "server‑side business development".

### "Cloud‑Native Developer ≠ DevOps"

DevOps and SRE culture are integral to cloud‑native, so you can see them as a subset. But when you look at microservices, you realize decomposition is not purely technical: organization, business, and domain all affect how you split services, which then shapes containers and runtime architecture.

A cloud‑native developer cannot exist in isolation from business context — "Your company is not Alibaba; you probably do not need a middle platform." In many Chinese companies, DevOps roles tilt toward Ops, while infrastructure development is labeled "engineering effectiveness" or "platform team".

### "Cloud‑Native Developer ≈ Full‑Stack Engineer ≈ 10x Developer ≈ Architect"

If someone can effectively apply cloud‑native concepts and tools and adapt to this development model, they are essentially playing the architect role: seeing across dimensions and domains, choosing appropriate technologies and architectures to support evolving business.

With everyone typing on similar keyboards, doing ten times the individual work is hard. But a cloud‑native developer can leverage the stack to:

- Goal: improve team/project/organization efficiency (10x team)
    - By: improving software delivery (10x developer)
    - By: improving organizational communication (10x catalyst)
- Outcome: a "10x developer" in effect

A more accurate label is **full‑spectrum engineer**.

## 11. Mesh‑Shaped Growth Model

Across layers (OS, applications, distributed systems) and domains (mobile, backend, cloud), many technical principles repeat. Once you master a principle in one area, you can transfer it to others and deepen your understanding.

In the cloud‑native era, abstraction levels shift more dramatically (from single‑machine, multi‑threaded, stable to cloud, multi‑node, elastic). The CNCF Landscape changes daily. How do you enter a new domain quickly? How do you adopt a new technology?

"Stay stable amid change" — my view is that cloud‑native developers and architects should go beyond T or Π shapes. Solid fundamentals across several "disciplines" form the base; on top of that you build cross‑discipline, cross‑domain expertise and keep expanding.

Many physicists have strong math backgrounds and read philosophy. Different domains provide different lenses.

### Like a Mesh

Skills are not just binary labels; careers should not have only one direction. Your knowledge and abilities should form a mesh, where each node connects to others:

- Multiple skills stack as buffs, multiplying impact
- Skills reinforce each other and deepen understanding
- You learn new skills and domains by mapping them onto existing ones (like matching tiles in a puzzle game)
- By expanding boundaries and strengthening the core, you change your position in the network (the "mesh center")
- Try everything

![skill-mesh](../../../blogs/assets/202203-mesh-shaped-cloud-native-developer/skills.png)

## N. Summary: Looking Ahead

"Mesh‑Shaped + Cloud‑Native = a different career path"

### Cloud‑Native Developer

> The higher the gear ratio in a gearbox, the larger the torque it can deliver, and the faster the car can run. Gears implement leverage: with a small gear driving a large gear, you reduce speed and amplify torque. \\
> How can 36 kilograms of force move a one‑ton car? Without gears, you cannot. The gear ratio — the tooth count ratio between gears — defines how much speed you trade for torque.

![engine](../../../blogs/assets/202203-mesh-shaped-cloud-native-developer/dual-clutch-transmission-13-1640318081688-0.gif)

A cloud‑native developer is this gearbox: choosing appropriate gears to drive different levels of business demand.

> "He used the drainage ditch to corner, and even floored it!"

### Mesh‑Shaped Developer

A line I like from a Web 3.0 article:

> "Only when individuals can build networks, can networks truly form around individuals."

As you master more skills and build a larger capability mesh, people, events, and opportunities start to stick to that mesh. That is how you create more possibilities.

> "Expand boundaries beyond the present."

---

## Appendix: What Is an Architect

### Architect: Expectations vs Domain

Most developers have a small goal in mind: become an architect. To get there, we need a workable definition.

#### Software Architect

> A software architect is a software development expert who makes high‑level design choices and tries to enforce technical standards, including software coding standards, tools, and platforms.

An older Wiki version (now changed) split Software Architects into three types:

![wiki-type-of-architect](../../../blogs/assets/202203-mesh-shaped-cloud-native-developer/wiki-type-of-architect-1640317457778-0.png)

This categorization reflects differences in _expectations_ and responsibilities. Often people assume Enterprise > Solution > Application, but they are not simple subsets. They address different concerns along different dimensions. (For example, Senior Enterprise Architect, Head of Solution Architecture…)

#### Domain Architect

If you classify architects by domain expertise, you get something like this:

![domain-type-of-architect](../../../blogs/assets/202203-mesh-shaped-cloud-native-developer/1-6zojnn4sdsd9kylfhr34-a-1640317491743-0.png)

### Developer: Competency vs Archetype

So is a Cloud Architect a Solution Architect or an Enterprise Architect? Across role expectations and domains, "Cloud Architect" is not a simple A‑is‑B relationship. Without a workable taxonomy, you cannot define responsibilities, so you cannot design a concrete growth path.

At Thoughtworks, the [Pathway](https://pathways.thoughtworks.net/) model helped me a lot during performance reviews:

- Role + grade summarize your job profile — what the company expects you to be able to do and deliver.
- Archetypes describe your responsibilities along specific dimensions — your fit for particular roles.
- Competencies are the building‑block capabilities: development, consulting, communication, and so on.

![archetype](../../../blogs/assets/202203-mesh-shaped-cloud-native-developer/wx20220320-163559.png)

If you want to grow from Developer to Tech Lead, Pathway shows clearly which core competencies you need and which you lack.

![archetype-path](../../../blogs/assets/202203-mesh-shaped-cloud-native-developer/wx20220320-163907.png)

Organized into growth routes like this, your abilities naturally form a **mesh**.

## Appendix: Knowledge Management

For a long time I used Typora + Trello for tasks and knowledge. As my skill mesh expanded, these tools stopped scaling. When I wanted to map out the mesh explicitly, I needed the knowledge structure behind it as well.

My TODO list and knowledge base also needed to be mesh‑shaped: discrete yet connected, so that they could support a mesh‑shaped skill system (Conway's Law?).

I eventually picked Logseq, and have already recommended it to many colleagues.

### "Logseq!!!"

- [Logseq - Build your own Wiki](202202-logseq-build-your-own-wiki)
- [Logseq - Customized with Clojure and CSS](202212-logseq-customized-with-clojure-and-css)

## Links

### Reports

- SlashData cloud‑native developer ecosystem | [The State of Cloud-Native Development 2021 Q1](https://www.cncf.io/wp-content/uploads/2021/12/Q1-2021-State-of-Cloud-Native-development-FINAL.pdf)
- [CNCF 2021 Survey (Chinese)](https://mp.weixin.qq.com/s?__biz=MjM5MDE0Mjc4MA==&mid=2651106517&idx=3&sn=fc21f1a29d582fbb483d12f3b6178ac0&chksm=bdb954868acedd90c14e12a9f5675685b560fa043a93b9550bc45406394101d5a7f0be8db044&mpshare=1&scene=1&srcid=0214kerzprubNiE3J0be7HJA&sharer_sharetime=1644822581245&sharer_shareid=eff20db62f686469259d202fc0146a67#rd) | [CNCF Annual Survey 2021](https://www.cncf.io/reports/cncf-annual-survey-2021/)
- Datadog containers | [datadog-container-report](https://www.datadoghq.com/container-report/)
- Datadog serverless | [datadog-state-of-serverless](https://www.datadoghq.com/state-of-serverless/)
- [Sysdig 2022 Cloud-Native Security and Usage Report (CN)](https://segmentfault.com/a/1190000041422184) | [2022 Cloud-Native Security and Usage Report](https://sysdig.com/blog/2022-cloud-native-security-usage-report)
- [Alibaba: Cloud‑Native Architecture in 2022](https://www.infoq.cn/article/S9wzvZU6BZMpMbkbvVQI)
- [Cloud‑Native Trends to Watch in 2022 (Alibaba)](https://www.infoq.cn/article/KxPztASa2Sfbwo4dZ4iF)
- [Microsoft: Cloud‑Native Landing Trends 2022](https://segmentfault.com/a/1190000041371751)

### CNCF

- CNCF (Cloud Native Computing Foundation)
    - [CNCF Foundation Charter](https://github.com/cncf/foundation/blob/main/charter.md)

### Architect

- [Types of Software Architects](https://medium.com/@nvashanin/types-of-software-architects-aa03e359d192)
- [Growth Paths at TW](https://docs.google.com/presentation/d/1ia5GdebBrFZoSvXqM5hk9kUXYGaSYFUq46m8Uz8I7E4/edit)
- [Development Career Paths](https://docs.google.com/presentation/d/1O24SOrZN9OTE3oGSZ53e4L2rPxKmt6gPJYroCm_uMzE/edit)
`,Eo=`---
category: "node"
date: "2022-05-01"
title: "Container Ecosystem in Motion: Docker, containerd, runc and Kubernetes"
description: "A timeline view of how Docker rose, OCI standardized runtimes, and Kubernetes switched container runtimes, clarifying the relationships between dockerd, containerd, runc, CRI, and OCI."
tags:
    - "node"
    - "K8s"
image: "https://pic2.zhimg.com/v2-8eab1606a489aa28545ed7f984f80b01.jpg"
---

![](https://pic2.zhimg.com/v2-8eab1606a489aa28545ed7f984f80b01.jpg)

## Background

When I started to learn Kubernetes systematically this year, I noticed that Kubernetes introduced multiple interfaces and standards to better modularize the system and support various cloud platforms and runtimes. At the same time, Docker support was removed in favor of containerd as the default container runtime.

To understand the story behind these changes, I drew a landscape diagram and connected the dots among the key technologies.

_(Most of the information is already in the diagram; the text here mainly acts as a guided tour.)_  
_(This is based on my understanding — please cross‑check with official docs.)_

## Docker Enters the Stage

![](https://pic3.zhimg.com/v2-2e5bff692825013e0537ec33fc1bde8e_b.jpg)

Docker did not invent \`namespace\` or \`cgroup\`, but wrapped these kernel features into a workflow that developers could use directly. What truly changed the ecosystem was the layered image model and delivery experience: code, dependencies, and runtime are packed into reproducible units.

![](https://pic2.zhimg.com/v2-23eda6e9882ef84ac4f92543079b3f39_b.jpg)

Combined with a simple CLI and Docker Hub, containers moved from "expert tooling" to "every team can actually use this in production".

## Kubernetes vs Docker Swarm

![](https://pic4.zhimg.com/v2-ec7c2c677631f7fcb616166676501d43_b.jpg)

After Docker unified single‑host container workflows, it naturally tried to move up the stack into PaaS and orchestration — which is where cloud vendors make serious money.

Around 2014 two events changed Docker's destiny:

- **Kubernetes** appeared with the Google halo and quickly captured developer mindshare.
- **OCI (Open Container Initiative)** was founded (led by Google, Red Hat, etc.) to define container standards.

Docker started splitting its components and implementing these standards to integrate with different platforms. \`runc\` and \`containerd\` became popular building blocks in the wider ecosystem, while "Docker" the product gradually faded into "docker" the generic word for containers.

_(If Docker had not joined OCI, not donated runc, what would the ecosystem look like today?)_  
\\_(Recently Istio finally joined CNCF as well...)

## OCI: Open Container Initiative

![](https://pic4.zhimg.com/v2-505c8cfaeac6e5042330af60890c9813_b.jpg)

Under the Linux Foundation, OCI defines the **Runtime** and **Image** specifications so users can choose different container runtimes based on needs: hypervisor‑based Kata Containers for strong isolation, syscall‑intercepting gVisor, and so on.

When people say "OCI runtime" they usually mean the low‑level component that actually creates containers and manages images according to these specs.

## Kubernetes Takes the High Ground

![](https://pic2.zhimg.com/v2-98750bc5070732faf351a1e71fd8d7a9_b.jpg)

Kubernetes used open source momentum to attract developers, developers influenced technical decisions, and over time Kubernetes won the orchestration war. Today it is the de facto standard. Even PaaS platforms that pre‑dated containers (AWS, Cloud Foundry, etc.) are getting eaten by Kubernetes‑based offerings.

Kubernetes is essentially a PaaS. To integrate with different implementations — container runtimes, networking, storage, cloud services — it defines a set of interfaces: CRI, CNI, CSI, CCM, etc.

The later removal of dockershim was not "abandoning Docker"; it was about clarifying boundaries. Kubernetes needs a CRI‑compliant runtime, not the full Docker UX stack. \`containerd\` is a better fit as a focused runtime.

## "Container Runtime"

You will often see two layers of runtimes:

- **CRI runtimes**: used by Kubernetes to manage Pods — multi‑container units that share network and storage.
- **OCI runtimes**: used to talk directly to the kernel to create containers.

A common distinction is:

- \`containerd\` and similar are **high‑level runtimes**, closer to orchestration platforms.
- \`runc\` is a **low‑level runtime**, closer to raw kernel primitives.

## What Is a Shim?

"Shim" is another overloaded term. Literally it means a small spacer or adapter layer, and you will see it used in different contexts.

![](https://pic2.zhimg.com/v2-c48f1605cadaf38cb90e1222da20aa51_b.jpg)

In **Docker's** context, the shim is the layer between the manager (\`containerd\`) and the low‑level runtime (\`runc\`).

![](https://pic3.zhimg.com/v2-556e53e5bd8477861db967326775af6e_b.jpg)

In **Kubernetes** docs, shim used to refer to the bridge between the CRI client (kubelet) and Docker/containerd.

> Initially Kubernetes only supported Docker, so it used dockershim as a bridge. With CRI‑containerd, this extra shim layer disappears.

![](https://pic1.zhimg.com/v2-6a94ea5611ac846c8064fc1b2998da30_b.jpg)

In **containerd** architecture docs, shim again refers to the layer between the OCI client (containerd) and the runtime (\`runc\`).

## References

- [9000字长文复盘Docker兴衰，从容器大战史推演基础软件投资](https://mp.weixin.qq.com/s?__biz=MzkzMTM1MDEyOA==&mid=2247483673&idx=1&sn=405f481ab19f928bb85add017201fb1c)
- [Dockershim：历史背景](https://kubernetes.io/zh-cn/blog/2022/05/03/dockershim-historical-context/)
- 容器江湖的爱恨情仇 - Thoughtworks 中国文章 - 知乎 <https://zhuanlan.zhihu.com/p/523574407>
- [Kubernetes容器平台，从繁荣走向碎片化](https://mp.weixin.qq.com/s?__biz=MzI5ODQ2MzI3NQ==&mid=2247507046&idx=1&sn=1c8f205730fb3b7b9519725b7d7730d0)
- [Kubernetes: The Documentary \\[PART 1\\]](https://www.youtube.com/watch?v=BE77h7dmoQU)
- [Kubernetes: The Documentary \\[PART 2\\]](https://www.youtube.com/watch?v=318elIq37PE)
- [K8s宣布弃用Docker，千万别慌！](https://mp.weixin.qq.com/s/GHjvvTJ8ZerIyCqXB1BSUQ)
`,Oo=`---
category: "node"
date: "2022-05-01"
title: "Router, Proxy, Gateway: Boundaries and Relationships"
description: "A boundary‑first way to distinguish routers, proxies, and gateways by network layer and responsibility, so architecture discussions stop mixing the terms."
tags:
    - "node"
    - "api-design"
image: "/blogs/assets/202205-router-proxy-gtw/2022-05-25-10-21-15.png"
---

While reading [《为什么需要可编程代理》](https://mp.weixin.qq.com/s/B0LVmFvI7kFtjFEM0FG_zw), I noticed that "router", "proxy", and "gateway" are often discussed together, but many teams use these words with different meanings.

This note uses **working layer + primary responsibility** to align terminology so that network, platform, and API design discussions can converge quickly.

## Router: forwarding packets between networks

- **Router**
    - Hardware router
        - Works at Layer 3 of the network stack.
        - Transparent to endpoints on both sides; hosts on internal and external networks do not know a router is involved.
        - Can work at a low level by rewriting network addresses and forwarding packets directly, usually faster than an app lication‑level proxy.
    - Software router
        - Combines software logic to intercept, modify, and forward packets.
        - In practice often behaves similarly to a proxy server.

## Proxy: acting on behalf of clients or servers

- **Proxy server**
    - Operates above Layer 3, usually at Layer 4 or 7.
    - Often the only machine in a LAN that can access the internet. Clients must send requests to the proxy, which then forwards and returns responses.
        - Can cache HTTP content, apply application‑level filtering and authorization, etc.
    - Different proxy products expose different capabilities (WWW, FTP, …).
    - Typically connects endpoints that speak the **same protocol stack** — its main job is forwarding.

- **Proxy modes**
    - **Forward proxy** — proxying external addresses (typical "climb the wall" setup).
        - NAT rewrites destination address/port after unpacking packets.
    - **Reverse proxy** — exposing a single public address for multiple backend servers.
        - Load balancers are a specialized form of reverse proxy.
            - Load balancing is the _goal_; reverse proxy is the _mechanism_.

## Gateway: boundary between heterogeneous networks or systems

- **Gateway**
    - A conceptual term: any device that connects two different networks can be called a gateway.
    - Typically connects endpoints that use **different protocols** — protocol translation is the key.
    - **Broad sense**: anything with traffic coming in and out can be called a gateway.
    - **Narrow sense**:
        - In IP routing: the boundary of a subnet. All traffic entering or leaving the subnet must first reach the (default) gateway.  
          See: [网关和路由器的区别是什么？](https://www.zhihu.com/question/21787311)
        - API gateway: intercepts, monitors, transforms, and forwards HTTP APIs.

## Summary: start from boundaries, then capabilities

![Route vs Proxy vs Gateway](../../../blogs/assets/202205-router-proxy-gtw/2022-05-25-10-21-15.png)

> PS: I also looked into adding Chinese fonts to Excalidraw:
>
> - Issue: <https://github.com/excalidraw/excalidraw/issues/5245>
> - Spike: <https://github.com/Anddd7/excalidraw/commit/97eca3fd347c9d3f3875996e7c49585307264e4e>
> - Demo: <https://excalidraw-anddd7.vercel.app/>
`,Ro=`---
category: "node"
date: "2022-11-01"
title: "Cloud‑Native in Practice: From Tools to Engineering Systems"
description: "Cloud‑native adoption is not about buying tools, but about building an engineering system. This article offers a framework around standardized capabilities, team responsibilities, and organizational evolution to turn buzzwords into delivery outcomes."
tags:
    - "node"
    - "IaC"
    - "DevOps"
image: "/blogs/assets/202211-cloud-native-engineering/image-17.png"
---

| Version | Change                            | Time    |
| ------- | --------------------------------- | ------- |
| v0.1    | Initial idea                      | 2022-11 |
| v0.2    | Outline                           | 2023-05 |
| v0.3    | Outline refactor, main chaptering | 2023-08 |
| v0.4    | Introduction and Chapter 1        | 2023-08 |

## Introduction

In a market where change keeps accelerating, organizations expect more from software delivery: faster release, more stable operation, and lower cost. A feature‑centric model with platform capabilities patched in afterwards is struggling to keep up.

Cloud‑native is not just a technology upgrade. Its value lies in putting applications, platforms, processes, and organization into one delivery system.

![Cloud-Native](../../../blogs/assets/202211-cloud-native-engineering/image-17.png)
![Cloud-Native](../../../blogs/assets/202211-cloud-native-engineering/image-18.png)

"Cost reduction and efficiency" is one of the main goals of cloud adoption, and a major driver for digital transformation. With cloud computing, DevOps, microservices, and automation, cloud‑native technologies aim to "build **fault‑tolerant**, **manageable**, and **observable** loosely coupled systems that, combined with **automation**, can handle **frequent** and **predictable** changes".

![Cloud-native architecture](../../../blogs/assets/202211-cloud-native-engineering/image-16.png)

But cost reduction does not happen automatically. Loose coupling, elasticity, and automation require developers, ops, and business stakeholders to collaborate toward a shared goal.

So the focus of cloud‑native adoption is not stacking more tools, but **building an engineering system**: defining standards, clarifying responsibilities, designing processes, and running continuous retrospectives.

This article focuses on one question: how can enterprises turn "technical concepts" into "engineering results"? We will use a framework based on standardized capabilities, team responsibilities, and organizational evolution.

> Disclaimer: this reflects my personal view only. Use it as reference, not as a guaranteed recipe.

## Chapter 1: Cloud‑Native Engineering

> **Engineering** — applying systematic, repeatable methods to a domain or task under constraints, to achieve a desired outcome.

### What Is Engineering?

Engineering is about applying structured, repeatable methods to increase efficiency, quality, and maintainability. It focuses on process, standards, automation, and continuous improvement so that products stay high‑quality across their lifecycle.

Key ideas include: decomposing complex problems, defining clear steps, using data to support decisions, and iterating via feedback.

Examples:

- Manufacturing: process optimization, quality control, and cost efficiency.
- Aerospace: design, build, and test under strict safety and reliability constraints.
- Construction: planning, design, construction, and maintenance of buildings and infrastructure.
- Energy and environment: balancing resource usage, sustainability, and regulation.
- Software engineering: building and maintaining large‑scale systems with attention to quality, maintainability, and scalability.

Scientific innovation often assumes ideal conditions. Without engineering discipline, those assumptions break in real environments:

1. **Instability and unreliability**: without systematic testing, innovations may be fragile.
2. **Poor maintainability**: lack of documentation, conventions, and standards makes long‑term evolution hard.
3. **Weak risk management**: without explicit risk assessment, hidden risks accumulate.
4. **Project management challenges**: no structure leads to delays, waste, and communication issues.
5. **Non‑compliance**: many industries require standards and regulation.

Technology advances productivity, but without engineering methods the result is often unstable, unmaintainable, and risky.

### What Is Cloud‑Native Engineering?

Cloud‑native tech has exploded in recent years. The CNCF Landscape keeps growing, but many enterprises still struggle with adoption:

- Too many tools, hard to choose.
- Immature technical practices, lacking standardization.
- Team skill gaps, slow onboarding.
- Unclear processes, weak collaboration.
- Technical value hard to articulate, limited business support.
- Costs go up instead of down.

Most cloud‑native tools solve **specific** problems (orchestration, observability, automation…), but for an enterprise, adoption also involves people, organization, and process.

There are no silver bullets. To adopt cloud‑native, you must first define the problem space: current pain points, goals, and constraints — then pick technologies and tools to address them, step by step.

**A cloud‑native engineering system** is a structured set of methods and guidelines that drive cloud migration, DevOps, and delivery effectiveness. It spans problem definition, team design, system design, development, testing, and continuous improvement.

\`\`\`txt
“Review the entire business and remove adjacent activities we cannot serve well;
examine complexity end‑to‑end — process, structure, manufacturing, distribution;
understand customer needs and set up continuous review.
” — Jørgen Vig Knudstorp, LEGO
\`\`\`

#### Goals

PoV for a cloud‑native engineering system:

- A runbook for cloud‑native adoption.
- Reference paths for organizational evolution: structures, processes, and core capabilities.
- A catalog of key capabilities across tooling, theory, and practice.

#### Audience

- Tech leaders: team responsibilities, structure, and capability growth.
- Architects: technical choices and architecture design.
- Ops/SRE: platform and reliability capabilities.
- Developers: day‑to‑day engineering practices.

#### Where It Applies

- Cloud migration and cost‑efficiency.
- Reducing cloud‑native complexity.
- Demonstrating platform team value.
- DevOps and delivery effectiveness.
- FinOps and cost management.
- Microservice migration, containerization, observability…

## Chapter 2: Key Elements for Cloud‑Native Adoption

The only constant is change: technology, business, and organization all evolve. A cloud‑native engineering system must evolve too.

- Different roles and teams see different problems and need different tools.
- At different stages, organizations face different bottlenecks and capacity gaps.

> “Complexity seeps into any human organization. New initiatives, new layers of management, new departments, poorly researched products, leveraged financial instruments — all of these add complexity. Complexity grows exponentially, not linearly. Always reduce complexity where you can.” — LEGO, Jørgen Vig Knudstorp

This framework has two views:

- **Value stream view**: from delivery perspective, describe problems at a given stage, define roles and their value.
- **Evolution view**: from organization perspective, describe transitions between stages and which capabilities are needed.

Core elements:

- **Standardized capabilities**
    - Technical and non‑technical.
    - Problem‑oriented, implementation‑agnostic; realized via tools.
- **Responsibilities and team topology**
    - Roles and responsibilities.
    - Collaboration patterns.
- **Organizational evolution and culture**
    - How industries differ.
    - How to transition into cloud‑native teams.
    - Culture: agile, DevOps, BizDevOps.
    - Growth across small / medium / large / very large organizations.

### Standardized Capabilities

Technical capabilities:

- Container orchestration.
- GitOps.
- IaC.
- …

Non‑technical capabilities:

- Project management.
- Product management.
- People management.
- …

The goal is a capability model that is concrete and implementable, not abstract buzzwords.

### Responsibilities and Team Organization

DevOps team topologies and platform thinking:

- [The Art of Platform Thinking | Thoughtworks](https://www.thoughtworks.com/insights/blog/art-platform-thinking)

Platform engineering:

- Atlassian: platform teams create capabilities consumed by product teams, reducing their cognitive load.
- Fowler/Bottcher: a digital platform is a self‑service base of APIs, tools, services, and knowledge. Autonomous delivery teams build on top of it.
- CNCF TAG App Delivery: [Platforms whitepaper](https://tag-app-delivery.cncf.io/whitepapers/platforms/)

Topics:

- Redefining roles and orgs
    - CloudOps, DevOps, SRE.
    - Product vs project vs shared platforms.
- Evolution directions
    - From ad‑hoc ops to SRE.
    - From project teams to long‑lived product teams.

Examples of standardized responsibilities:

- Define technical standards and best practices.
- Unified container image management.
- Infrastructure as Code baselines.

### Organizational Evolution and Culture

Standardized capabilities are building blocks. Org structure is the blueprint that assigns these capabilities. Process is the connective tissue that activates the org toward a goal.

When an organization adopts a set of capabilities for a clear objective, that is engineering.

- Dev (feature teams) – DevOps (enabling teams) – SRE (platform team) – Ops (cloud platform).

Evolution examples (simplified):

- Small teams
    - DevOps as external service; operations partially outsourced.
- Medium teams
    - DevOps advocacy team appears; Dev and Ops concerns increase.
- Large teams
    - Dedicated SRE team; platform standards and toolchains; DevOps builds on SRE‑provided products.

Mapping (one possible view):

- SRE ≈ CloudOps, DevOps ≈ platform engineering, Ops ≈ infra/cloud providers.

Key questions per stage:

- Where are we now? What capabilities do we have?
- What is the next stage? What problems will appear?
- Which capabilities close those gaps?

## Chapter 3: Evolution Paths and Case Studies

Using the elements above, we can analyze concrete organizations.

- By organization size as a rough axis:
    - 10–25–50–99: small / mid‑size teams.
    - 100–150–250: larger teams.
    - 299+: very large orgs.
- For each, consider:
    - Goals, direction, and main pain points.
    - People and capabilities.

### Value Realization

Questions organizations keep asking:

- Why move to cloud? Why move off cloud?
- How should the internal platform team evolve?
- What if the platform team does not own infra but only wraps interfaces?
- When incidents happen, how do we avoid blame ping‑pong between platform and infra?
- How do we gather and prioritize business requirements for the platform?

These are all value questions. Different orgs and stages have different value stories.

With the capability × organization view we can:

- **Analyze** current stage and capabilities, and likely next stage.
- **Design** org changes, capability building, and tool choices.
- **Plan** timelines, stakeholders, and investment.
- **Implement** as iterative evolution with feedback.
- **Summarize** experience into practices that can travel.

### Example: Enterprise X’s Cloud‑Native Journey

(Placeholder for a concrete case: background and challenges, chosen technologies and strategies, lessons and outcomes.)

### Success Factors

At the end, we can extract a set of success patterns and how to apply them at different stages and in different org shapes.

## Closing: The Next Station for Cloud‑Native

### Future Directions

- Emerging technologies and patterns.
- Skills cloud‑native practitioners will need.

### Suggestions Looking Forward

- How to sustain cloud‑native adoption, not treat it as a one‑off project.
- How to grow people and enable knowledge sharing.

## Appendix

### References

- ChatGPT
- <https://martinfowler.com/articles/talk-about-platforms.html>
- <https://www.zhihu.com/question/24292554>
- <https://mp.weixin.qq.com/s/sRRqJS8dOrtbTrnef16eUQ>
`,zo=`---
category: "domain"
date: "2022-12-01"
title: "Logseq Advanced GTD: Managing TODOs with Query + CSS"
description: "A reusable set of Logseq GTD queries and CSS tweaks that turn scattered TODO blocks into an actionable task dashboard: doing, scheduled, next, and others."
tags:
    - "domain"
    - "logseq"
image: "/blogs/assets/202212-logseq-customized-with-clojure-and-css/1645694079239.jpg"
---

Building on the previous article, this one adds a more engineering‑style setup: using Advanced Queries to turn TODO piles into a filterable, sortable, executable task panel.

## TODO Queries

My TODO panel follows GTD and splits tasks into four buckets: **doing**, **scheduled**, **next**, and **others**. The goal is to reduce decision overhead when switching contexts.

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

## CSS Tweaks

I use Dev Theme, but the defaults are not ideal for my workflow:

- Code blocks are too small.
- Markdown tables are too narrow and wrap even on wide screens.
- Custom query tables show a radio‑button switch I rarely use.

A small \`custom.css\` goes a long way:

\`\`\`css
/* base fonts */
:root {
    --ct-text-size: 16px;
    --ct-line-height: 1.6;
    --ls-font-family: "Only Emoji", "JetBrains Mono";
    --ct-page-title-font-family: var(--ls-font-family);
    --ct-code-font-family: "JetBrains Mono";
}

/* increase code font size */
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

/* widen markdown tables */
.table-wrapper {
    white-space: nowrap;
    max-width: 1400px !important;
}

/* hide less useful parts in custom query UI */
.custom-query .initial .align-items {
    display: none;
}
.custom-query .initial .content .block-content .timestamp,
.custom-query .initial .content .block-content .block-body {
    display: none;
}

/* small style tweaks */
.priority {
    margin-right: 8px !important;
}
\`\`\`

### Output

![Demo](../../../blogs/assets/202212-logseq-customized-with-clojure-and-css/1645694079239.jpg)

## Wrap‑Up

GTD is powerful when tasks are dense and context switches are frequent. The point is not just "write tasks down" but "let the right tasks rise to the surface automatically".

> "Switch page tables, switch tasks" — like a CPU time‑slicing between cores.
`,qo=`---
category: "domain"
date: "2022-12-01"
title: "Mesh-Shaped PKM: A Logseq-based Personal Knowledge System"
description: "How I implemented a Mesh-Shaped PKM system on top of Logseq: input capture, task and note cycles, and feedback loops that turn recording into sustained capability growth."
tags:
    - "domain"
    - "PKM"
    - "logseq"
image: "https://pic3.zhimg.com/v2-e53cc5d58b612b5154574f0eb2110d72_r.jpg"
---

<!-- markdownlint-disable MD024 -->

![](https://pic3.zhimg.com/v2-e53cc5d58b612b5154574f0eb2110d72_r.jpg)

After writing ["Mesh-Shaped: How to Grow as a Cloud-Native Developer"](https://zhuanlan.zhihu.com/p/575842220) earlier this year, I have been iterating on my personal knowledge management (PKM) system.

> The way you manage knowledge reflects how you think — and your thinking path determines output quality.

The current workflow has been stable for a while. It combines tools, methods, and collaboration habits. This article breaks it down visually so you can reuse modules as needed.

## Input

![](https://pic4.zhimg.com/80/v2-0a99df5b67b41531e39dd8f9c5e7bb23_1440w.webp)

### Methods

- [How to Take Smart Notes](https://book.douban.com/subject/35503571/)
- OKR
- Logic trees

### Input Types

- **Task input**: goal‑oriented work with clear deliverables and time windows (SMART principle).
- **Knowledge input**: research, exploration, and reading around a topic, often with attachments (books, papers, images, slides).

### Tools

- **GoFullPage**: Chrome extension for full‑page screenshots.
- **MarkDownload**: Chrome extension to save pages or selections as markdown for Logseq.
- **Cubox**: Chrome/iOS/WeChat multi‑end collector and media box.

> Cubox is powerful enough that if your ratio of collecting > producing is high, using Cubox alone can work.
> I use Cubox as an inbox: when I see an article or thread worth keeping, I send it to Cubox first and later consume it via GTD/Logseq.

### Notes

Logseq is the core. Combined with card‑style notes, I separate pages by role:

- **Journey**: daily journal pages generated by Logseq; good for scratch notes. TODOs are the only thing that must be tracked.
- **Note**: regular pages.
- **Project**: also pages, but with prefixes to indicate project scope.
- **OKR**: pages organized via tags/hierarchy/query to track objectives.

![OKR Hierarchy](https://pic3.zhimg.com/80/v2-d99183cdf27244b27bf6499e9b3f6e6e_1440w.webp)

## Iteration

![iteration](https://pic1.zhimg.com/80/v2-28beb58c07769b2e95fb85572e6ba290_1440w.webp)

### Methods

- OKR
- GTD (Getting Things Done)
- Mesh‑Shaped mindset

### Task Space

- **OKR**: as above.
- **Roadmap**: monthly breakdown of OKRs into executable tasks.
- **GTD**: categorized TODO management.

Logseq queries pull tasks by priority, tag, keywords, and status.

![](https://pic4.zhimg.com/80/v2-bb9523567c2e2804054f9f552d3051bf_1440w.webp)

You can also wire key queries into your Journey template so critical items show on each day’s front page.

![](https://pic3.zhimg.com/80/v2-125cdaa60f9d7dc17a4f99841d91786e_1440w.webp)

### Note Space

The core is treating **permanent notes** as the real knowledge base, following smart‑notes style:

- Journey drafts can be disposable (unfinished TODOs are still caught by GTD queries).
- Project/Book pages often act as aggregators.
- Permanent notes are the real assets.

A note landing in "permanent" does not mean it will stay useful forever:

- Structure matters: Logseq’s outliner pushes toward tree‑like organization inside a page. When a page grows large, split by sections (quadrants) or child pages (hierarchy).
- Only **linked** knowledge is effective knowledge. The more associations you create — even playful ones like "Agile project management applied to home renovation" — the deeper it sticks and the more cross‑domain reuse you get.

![](https://pic2.zhimg.com/80/v2-0657aa86ae9b1b880ef578bd69d24a5d_1440w.webp)

### Other Tools

- **GitHub**: backup repo; you can also export Logseq and host a double‑linked graph site with GitHub Pages.
- **GoodNotes, KOReader, WeChat Reading, Apple Books**: for long‑form reading (books, English papers, annotated slides) an iPad + Pencil workflow can be more comfortable than Logseq’s builtin PDF viewer.

## Output

![](https://pic1.zhimg.com/80/v2-84a9ff2439dac7d05696d5d7b426d95c_1440w.webp)

### Methods

- Feynman technique.
- Agile personal productivity.
- Other ideas in the diagram.

### Output

- The key is **feedback**: publishing forces you to re‑structure knowledge; feedback forces you to re‑shape models.

## Summary

> “If knowledge is neither stored nor learned in isolation, but collected into a network of ideas — a latticework of mental models — then new information becomes easier to understand, remember, and retrieve.”

### "Only when individuals build networks, can networks form around them"

![graph](https://pic4.zhimg.com/80/v2-a0fec4a76fb99fef7dbd5205d575839b_1440w.webp)

As you build a larger capability mesh, your environment — people, opportunities, projects — starts to organize around it. That is where PKM turns into real career leverage.
`,Vo=`---
category: domain
date: "2023-02-01"
title: Infrastructure as Code in Practice with Terraform
description: This article explains how IaC supports immutable infrastructure and how to structure Terraform projects from simple stacks to layered multi-environment platforms. You can use the patterns here to reduce drift, improve reuse, and scale delivery safely.
tags:
    - "domain"
    - "IaC"
    - "DevOps"
    - "multi-cloud"
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
`,Bo=`---
category: "mesh"
date: "2023-04-01"
title: "How to Draw Architecture Diagrams: A Communication-First Practice"
description: "A practical method for drawing software architecture diagrams by starting from one question: who are you talking to, and what do you want them to understand?"
tags:
    - "mesh"
    - "architecture"
    - "software-design"
    - "communication"
image: "/blogs/assets/202304-draw-architecture-diagram/pictograph-1.jpeg"
---

| Version | Description                                 | Time    |
| ------- | ------------------------------------------- | ------- |
| v0.1    | Brain dump – meta thinking about diagrams   | 2023-04 |
| v0.2    | Outline                                     | 2023-05 |
| v0.3    | Main content (except view matrix)           | 2023-05 |
| v1.0    | First release                               | 2023-07 |
| v2.0    | Refactor – focus on "software architecture" | 2023-08 |
| v3.0    | Refactor – introduce architecture stages    | 2024-12 |

## Intro

Software systems keep getting more complex, but collaboration does not automatically get better with complexity. The hard part is usually not "do we have an architecture", but "can different roles align on one picture of the system".

The value of an architecture diagram is communication, not drawing. It compresses complex relationships into a visual structure that teams can discuss across design, development, testing and operations.

> A good diagram helps the team understand the system at **different stages and levels**, and enables smoother **communication** across roles.

## Text, Graphics and Visual Expression

> A picture is worth a thousand words.

Throughout human history, text and graphics have been our main tools for expressing ideas and transmitting information. They each have strengths and are suited to different contexts.

### Language and Text

Language is the most common tool for human communication. It started from primitive sounds and gestures, and evolved into complex symbolic systems that can represent objects, concepts and even abstract thinking.

Text is the visual form of language. It removes the time and space limits of speech so information can be stored, transmitted and read.

Language and text shaped human civilization: they are the medium of thought and knowledge, and the foundation of social development.

![](../../../blogs/assets/202304-draw-architecture-diagram/pictograph-1.jpeg)

### Graphics and Drawing

Graphics are visual expressions composed of lines, shapes, points and colors. They can be simple geometric forms or complicated patterns. They convey concepts, ideas or information, and may be artistic, decorative or functional.

> Should I use **text** or **graphics**?

When we use language or text, we immediately hit some limitations:

- Limited expressiveness: the amount of information is roughly proportional to the number of words. Text is powerful, but it struggles to accurately capture complex concepts, emotions or sensations. Abstract ideas often need metaphors, analogies and rhetorical devices; speech needs pauses, emphasis and rhythm. Pure text therefore relies heavily on context and style to reinforce meaning.
- Linear expression: text is inherently linear. In most writing systems we read left-to-right, top-to-bottom. Earlier content affects interpretation of what comes later. Losing context causes ambiguity. Linear reading also makes it hard to convey many parallel concepts.
- Cognitive load: understanding text depends on the reader’s ability to parse, remember and synthesize. Different readers have different vocabulary, background and reasoning skills, so they may interpret the same paragraph differently.
- Context dependence: the same words can mean different things in different contexts. To really understand text we must combine wording, background, tone and surrounding content.

![](../../../blogs/assets/202304-draw-architecture-diagram/words.webp)

When we "read" a picture, the brain behaves differently:

- Non‑linear reading: diagrams are not consumed strictly left-to-right. Elements are placed in space and the viewer can focus on whichever area they care about. This makes it easier to scan and explore.
- Visual processing: we interpret shapes, lines and colors. If the graphic resembles something from the real world, people can understand it directly without translating words into mental models.
- Mathematical / logical expression: in graph theory and topology, diagrams are used to express logic because they are an intuitive way to describe relationships and structure — network topologies, data flows, org charts, etc.

![](../../../blogs/assets/202304-draw-architecture-diagram/math-diagram.jpeg)

### Visual Representation

#### What a Diagram Is Made Of

The expressiveness of a diagram depends on the number and type of visual elements it uses. Broadly, we can think in terms of **geometric attributes** and **non‑geometric attributes**.

**Geometric attributes** describe shape and structure:

- Point: the most basic unit, often representing a location or data record.
    - Relative positions between points show closeness, clusters and relationships.
    - In scatter plots or maps, each point is an item or geo location.
- Line: connects two or more points.
    - Segments represent paths or connections.
    - Arrows add direction and can show spatial or temporal order.
    - Polylines and curves show trends and changes.
- Area: a closed shape formed by lines or curves.
    - Boxes represent ranges, scopes or areas.
    - On maps, polygons represent regions.
- Volume: 3D shapes formed by multiple faces.
    - Cubes, spheres, cylinders show structure and spatial position.

> There is also a hidden geometric attribute: the **coordinate system**. The same object, in different coordinate systems, may appear in different states. A line in one coordinate system may be summarized as a point in another.

**Non‑geometric attributes** describe how objects look: color, brightness, texture, opacity, line style, line width, etc.

- Color: great for categories, properties or importance. Proper palettes help the reader distinguish and remember patterns.
- Texture: patterns, shadows or hatching add nuance, often representing material, status or boundaries.
- Brightness and contrast: used to highlight or push back elements.
- Opacity: controls layering and density, allowing 3D feeling on 2D planes.
- Line width: used to express strength, importance or capacity.

![](../../../blogs/assets/202304-draw-architecture-diagram/basic-diagram.jpeg)

#### Forms of Visuals

Once we understand the basic elements, we can combine them in forms that match how humans perceive the world:

- **2D**: basic charts and diagrams on a plane.
- **2.5D**: multiple layers stacked in a single 2D view.
    - Each layer encodes different information (typical for maps and dashboards).

    ![Alt text](../../../blogs/assets/202304-draw-architecture-diagram/image-21.png)

- **3D**: full xyz coordinates, highlighting depth and volume.
- **4D**: animation over time.
    - A sequence of frames shows change and evolution — perfect for time series and algorithms.

![](../../../blogs/assets/202304-draw-architecture-diagram/quick-sort.png)

#### Expressive Power

A diagram can encode a lot of information in a very small space, so its **information density** is often far higher than pure text:

- Intuitive: meanings are carried by shapes and positions, reducing reading overhead.
- Integrative: many relationships and viewpoints can be presented at once, supporting global understanding.
- Semantic: symbols and icons directly represent concepts, so the viewer can "see" relationships without long explanations.
- Spatial: layout itself encodes hierarchy and importance.
- Cross‑cultural: visuals are less tied to language.

![](../../../blogs/assets/202304-draw-architecture-diagram/network-topology.webp)

> Diagrams are still abstract symbols. The more abstract the diagram, the more background knowledge is required. Waveforms, Gantt charts and UML are all high‑context.

So as a diagram author you must think about two things:

1. Can this visual element correctly express what I mean?
2. Does my audience have enough knowledge to decode it?

## How to Draw Software Architecture Diagrams

In software, architecture diagrams are analogous to building blueprints: they show logical structure and help people reason about the system. They are also a collaboration tool: different roles can see how their work fits into the whole.

My father is a construction engineer, so I grew up around paper blueprints — long sheets filled with lines and annotations. Later, doing software, I felt the parallel very strongly: both disciplines involve many roles, constraints, safety and long‑lived systems.

![](../../../blogs/assets/202304-draw-architecture-diagram/building-architecture.jpeg)

Software is more malleable than buildings — extracting a function is far cheaper than moving a wall. Architecture diagrams are therefore not only for initial design; they are tools for evolution.

> Regardless of type, the essence of an architecture diagram is **information transfer**.

To transfer information efficiently you must first answer one question:

> **Who is the audience, and what do they need to know?**

Different roles focus on different aspects of the system. Your diagram should be optimized for those foci.

### Identify Your Audience

A few typical roles:

#### CTO

Scenarios:

- Strategic decisions: evaluating technical options versus business goals.
- Communication with other executives.

Goals:

- Align technology and business strategy.
- Plan investment, capacity and risk.

#### Product Manager

Scenarios:

- Understanding whether the system satisfies user needs.
- Planning features and prioritization.

Goals:

- Manage expectations: what the system can and cannot do.
- Understand impact of requirement changes.

#### Architect

Scenarios:

- Overall design and evolution.
- Maintaining a shared view of the system.

Goals:

- Support technical decisions with trade‑offs.
- Communicate design with dev and non‑dev stakeholders.

#### Developer

Scenarios:

- Implementing and integrating modules.
- Understanding dependencies.

Goals:

- Consistent code structure and boundaries.
- Fewer integration surprises.

#### Technical Advisor / Consultant

Scenarios:

- Assessing existing systems, proposing improvements.
- Advising on new project design and feasibility.

Goals:

- Identify strengths, weaknesses and risks.
- Provide clear, actionable guidance.

![](../../../blogs/assets/202304-draw-architecture-diagram/achitecture-discussing-2.jpeg)

### Stakeholders and Subjects

To design a useful diagram, think in two dimensions:

1. **Stakeholders** – who cares about this diagram, and what do they care about?
2. **Subject** – what is the core thing being described?

Examples of stakeholders and their primary focus:

| Role (examples) | Main focus                                         |
| --------------- | -------------------------------------------------- |
| Business        | Business domains, flows, system boundaries         |
| Developer       | Components, modules, APIs                          |
| Sysadmin / SRE  | Deployment, runtime, monitoring                    |
| Architect       | Overall design, constraints, evolution path        |
| Project Manager | System boundaries, team structure, cost            |
| CxO             | Mapping between business domains and org structure |

Examples of subjects:

| Subject         | Description                                       |
| --------------- | ------------------------------------------------- |
| Business domain | e.g. sales, procurement, inventory, finance       |
| Use case        | e.g. purchase request, order, inbound, settlement |
| System          | e.g. procurement system, inventory system         |
| Module          | e.g. order module, payment module                 |
| Infrastructure  | e.g. servers, networks, databases                 |
| Inter‑process   | Cross‑service calls, data flows                   |
| In‑process      | Packages, layers, interfaces                      |

Stakeholders and subjects are often coupled (e.g. product ↔ domain, SRE ↔ infra), which is why certain types of diagrams become repeatable patterns.

### Turning Information into Visuals

A practical workflow:

1. **Structural decomposition** – break the subject into layers and parts.
    - Split systems into layers or modules (frontend / backend / shared; app / data / infra).
    - Use containers (boxes) to show boundaries.
    - Use color, line type and shape to distinguish levels.
    - Add concise role / responsibility labels.
    - Avoid excessive detail in a single view.
2. **Organize logical relationships** – add flows and dependencies.
    - Choose layouts that fit (hierarchy, flow, grid, etc.).
    - Draw calls, data flows and message channels explicitly.
    - Emphasize key components by position, size or styling.
    - Annotate with labels and notes where needed.
3. **Adopt a style / notation** – reuse patterns.

Over years of practice, the industry has converged on several popular styles:

- **UML** – class diagrams, sequence diagrams, component diagrams, etc.
- **AWS icons** – cloud‑service‑centric diagrams for infra.
- **Network topology** – routers, switches, links.
- **C4 model** – context / container / component / code views.

As a team, you should **reuse** existing styles wherever possible. If existing styles are not enough, define your own — but do it deliberately:

- Follow clear rules for symbols and meanings.
- Keep visuals consistent so people can read any new diagram quickly.
- Document your style in a lightweight guide.

Finally, pick tools that support your style and workflow:

- Excalidraw
- draw.io
- Jamboard / whiteboard tools
- Slides / Keynote
- PlantUML
- dbdiagram
- Mermaid

## Mesh‑Shaped Architecture Views

So far we’ve treated each diagram individually. In reality, complex systems need **multiple, related views**, just like buildings have floor plans, elevations and sections.

> How do we organize many diagrams so they are consistent, complete and non‑redundant?

### A View Matrix

Based on experience and tools like 4+1 and C4, I use a simple matrix organized by **view level** and **stakeholder level**.

**View levels** (what kind of thing we’re describing):

- **Concept view** – static, core ideas and language.
- **Module view** – static, hierarchy and containment.
- **Implementation view** – static, concrete artifacts at a point in time.
- **Dynamic view** – dynamic, dependencies and time.

**Stakeholder levels** (who primarily consumes this view):

- **Management** (CxO, PM): vision, direction, value.
- **Product** (PO, BA): how features realize value.
- **Architecture** (architects): CFRs and overall system design.
- **Engineering** (TL, dev): concrete implementation.

We then map which stakeholder typically cares about which subject at which view level. That forms a reusable **architecture view matrix**.

![alt text](../../../blogs/assets/202304-draw-architecture-diagram/image-main.png)

There are also two implicit dimensions:

- **Product scale** – how big is "product" vs "system" vs "app" in your context?
- **Lifecycle stage** – design, implementation, operations.

Complex products (think super‑apps) may require several nested matrices.

### Lifecycle and Relationships

The same set of views appears at different times with different frequencies.

#### Design Phase

![alt text](../../../blogs/assets/202304-draw-architecture-diagram/image-01.png)

- Product ↔ Management (concept): vision, strategy, value.
- Product ↔ Architecture (module): domains, bounded contexts, capabilities.
- Architecture (concept / implementation): tech choices, data models, NFRs.
- Architecture ↔ Engineering (concept): responsibilities and boundaries.

These form a feedback loop: changes in any view (e.g. vision) may require adjustments in others.

#### Development Phase

![alt text](../../../blogs/assets/202304-draw-architecture-diagram/image-02.png)

- Management (module): teams and ownership mapped to components.
- Product (module): user journeys and UI flows mapped to services.
- Engineering (implementation / dynamic): code, pipelines, integration flows.

#### Operations Phase

![alt text](../../../blogs/assets/202304-draw-architecture-diagram/image-03.png)

- Product (dynamic): metrics and user feedback.
- Management (dynamic / implementation): progress, budget, revenue.
- Management (concept): refine vision as the market changes.

These phases often overlap, especially for fast‑iterating teams. The key is:

> Every role should understand how their outputs affect others.

Otherwise changes in one place (e.g. a vision slide) will cause chaos in others (e.g. impossible deadlines).

### Style Examples

Once the matrix is clear, we can choose a consistent visual language and build a **family of diagrams**. For example, for a smart property management system we might draw:

- Lean value tree
  ![Alt text](../../../blogs/assets/202304-draw-architecture-diagram/image-31.png)
- Value stream map
  ![Alt text](../../../blogs/assets/202304-draw-architecture-diagram/image-32.png)
- Business panorama
  ![Alt text](../../../blogs/assets/202304-draw-architecture-diagram/image-33.png)
- Technical panorama
  ![Alt text](../../../blogs/assets/202304-draw-architecture-diagram/image-34.png)
- System context (C4 / Context)
  ![Alt text](../../../blogs/assets/202304-draw-architecture-diagram/image-35.png)
- DevOps value stream
  ![Alt text](../../../blogs/assets/202304-draw-architecture-diagram/image-38.png)
- Infra deployment
  ![Alt text](../../../blogs/assets/202304-draw-architecture-diagram/image-36.png)
- Container view (C4 / Container)
  ![Alt text](../../../blogs/assets/202304-draw-architecture-diagram/image-37.png)
- In‑process architecture

The last one is just code‑level design: classes, objects, modules, function flows.

## Summary

> We draw architecture diagrams to **communicate**, not to "have more diagrams".

Regardless of type, the essence is always information transfer.

So before opening any drawing tool, answer:

> **Who are you talking to, and what do you want them to understand?**

Once you are clear on **subjects** (deployment, dependencies, data flows, code structure) and **stakeholders** (boss, PO, tech lead, QA, SRE, etc.), choosing the right diagram becomes much easier.
`,Fo=`---
category: "node"
date: "2023-04-01"
title: "Tunnel, VPN, VPC: Boundaries and Relationships"
description: "A networking-oriented clarification of three overloaded terms – Tunnel, VPN and VPC – focusing on how they cooperate for connectivity, security and virtual network abstraction."
tags:
    - "node"
    - "networking"
    - "K8s"
image: "/blogs/assets/202304-tunnel-vpn-vpc/image.png"
---

This started as a note I wrote while sorting out VPN-related concepts.

> A sequel to [Router vs Proxy vs Gateway](../2022/202205-router-proxy-gtw.md)

## Tunnel – Connecting Two Unreachable Networks

![tunnel](https://s2.loli.net/2023/04/17/y5EnxTrbtIAN7z9.png)

Routers and proxies mainly **forward** traffic. Tunnels emphasize **encapsulate, then transmit**.

Typical use cases:

- Connect two networks that cannot reach each other directly (often across the public Internet)
- Bridge different protocol domains

A tunnel usually:

- Wraps or rewrites the original packet header
- Encrypts the payload
- Adds extra metadata (logging, tracing, etc.)

Every layer of the network stack is itself "wrapping" packets, so in theory you can create a tunnel on **any layer** as long as you can encode/decode packets at that layer.

## VPN – Virtual Private Network

![vpn](https://s2.loli.net/2023/04/17/KMUOH1bTycPYtJv.png)

A VPN always has two ends: **Server** and **Client**. The client must connect to the server to work.

- The server acts as a **gateway** to other networks for clients
- The link between server and client is typically built on top of **tunnels**, to secure cross‑network traffic

So from a networking perspective, a VPN is a set of tunnels with a control plane and addressing model on top.

## TUN/TAP – Virtual Network Devices

TUN/TAP are Linux virtual network devices that allow a single host to have additional virtual IP/MAC identities.

They are often used together with VPNs and tunnels to:

- Give processes or containers their own network stack
- Inject or capture packets in user space

## Underlay vs Overlay

Because of tunnels and virtual devices, **logical** topology and **physical** topology can look completely different:

- Two machines on different continents can appear to be on the **same LAN and subnet**
- Two applications on the **same host** can be placed into different virtual networks and isolated from each other

This is exactly the idea of **overlay networks** built on top of a physical **underlay**.

## VPC / VNet – Virtual Private Cloud

As we add more and more virtual devices and endpoints, VPNs start dealing with:

- Many nodes
- Multicast / broadcast
- VM‑to‑VM communication on the same host

At data‑center scale this leads to **virtual LAN / data center networking** technologies, and cloud vendors built their own abstractions: VPC (AWS/GCP/AliCloud), VNet (Azure), etc.

Conceptually a VPC/VNet is:

- A virtual L3 network with its own CIDR blocks
- A boundary for routing, security groups and peering
- Often implemented using a mix of tunnels, encapsulation (VXLAN/Geneve), and virtual routers

## Virtual Networks vs Container Networking

These two worlds are very similar:

- Both build overlays on top of physical networks
- Both use encapsulation and virtual interfaces to isolate tenants / workloads
- Both rely on routing rules and policies to control reachability

The main difference is focus:

- VPC/VNet: cloud accounts, subnets, security groups
- Container networking: Pods, Services, CNI plugins

## Appendix: Landscape

![landscape](../../../blogs/assets/202304-tunnel-vpn-vpc/image.png)

### Further Reading

- <https://support.huawei.com/enterprise/zh/doc/EDOC1100164807>
- <https://itnext.io/kubernetes-is-hard-why-eks-makes-it-easier-for-network-and-security-architects-ea6d8b2ca965>
- <https://www.pinterest.com/pin/coreosflannel--22940279328297785/>
- <https://access.redhat.com/documentation/en-us/red_hat_virtualization/4.4/html/technical_reference/cluster_networking>
- <https://www.rebeladmin.com/2018/01/azure-accelerated-networking/>
- <https://dzone.com/articles/step-by-step-guide-establishing-container-networki>
- <https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/6/html/virtualization_administration_guide/sect-attch-nic-physdev>
- <https://zh.wikipedia.org/zh-cn/%E9%9A%A7%E9%81%93%E5%8D%8F%E8%AE%AE>
`,jo=`---
category: "node"
date: "2023-06-01"
title: "Cloud-Native Shift Left: Remote-First Development and Debugging"
description: "A practical comparison of four approaches to debugging in cloud-native environments – image swap, VPN peering, dev containers and web IDE – with their costs, benefits and boundaries."
tags:
    - "node"
    - "K8s"
    - "devx"
image: "https://s2.loli.net/2023/06/05/v1j2stXfigwDoA5.png"
---

## Background

(This article focuses on **development and debugging flows**, not on test strategy itself.)

Microservices and Kubernetes improve delivery capability but also make debugging harder. A system may have dozens or hundreds of services and dependencies. Many issues only reproduce in the **cluster**, and local setups are often too simplified.

> "Does it work on your machine?"
>
> "No, it only works on the cluster."
>
> ![](https://s2.loli.net/2023/06/05/9dU5IOnfeFXrmsk.png)

Even if you can run one service locally, cloud networking, dependency topology and IAM boundaries often make behavior diverge from real environments. And if **every** change goes through full CI/CD, waiting for pipelines can easily dominate your iteration time.

![](https://s2.loli.net/2023/06/05/v1j2stXfigwDoA5.png)

A single build+deploy might not be long, but for unknown, tricky bugs you must iterate repeatedly. CI/CD and cluster roundtrips then blow up your cycle time:

![](https://s2.loli.net/2023/06/05/SHrPGlmZihnOqw8.png)
![](https://s2.loli.net/2023/06/05/aQgvMZ8pHi7VBKe.png)

Real‑world time spent:

![](https://s2.loli.net/2023/06/05/zDCHl3OJpNTuRqb.png)

---

So the natural question is:

> Can we make the **cloud environment feel like local** – edit, build and see effects instantly?

![](https://s2.loli.net/2023/06/05/ViS4g15j29sPuMC.png)

(Here "local / dev machine" means the developer’s own machine, nearby. "Remote / cluster / cloud" means nodes in the cloud, far away.)

Below are four common approaches.

## Approach 1 – Build and Swap Test Images

![](https://pic1.zhimg.com/80/v2-f7f850f928d48866afc291fc10bc8ab8_1440w.webp)

Build, package (Docker) and deploy **from your local machine**, bypassing CI/CD to save pipeline time. Use the locally built image to temporarily replace the image in a dev or test cluster, then retest the whole call chain.

![](https://pic4.zhimg.com/80/v2-fc326f231bdac873610e0d88964fcf53_1440w.webp)

You can combine this with a Service Mesh to shadow traffic or route only a subset to your dev image, so as not to impact others.

Pros:

- Easy to understand and operate

Cons:

- Still need to build Docker images and push to registry
- Reload latency is usually in **minutes**, not seconds

Related tools: Skaffold

## Approach 2 – VPN Peering into the Cluster

![](https://pic2.zhimg.com/80/v2-aba5162bddaf66c5ebb25fe5dfb3dde1_1440w.webp)

Here we treat the local host as a **peer node** inside the cluster network via an overlay. The idea:

- The local host becomes a node that can "host" a specific Pod replacement
- Service Mesh or sidecar proxies reroute traffic to your local process
- Outbound calls from the local process to Pods / cloud services / in‑cluster DNS are intercepted and tunneled back into the cluster

Pros:

- Your app runs locally → hot reload is easy
- Only network traffic is forwarded; cluster workloads stay mostly untouched

Cons:

- Solution is complex; routing rules can get gnarly (by ClusterIP, DNS, port, protocol, etc.)
- With many connections, the central traffic manager/agent becomes a bottleneck
- Local still isn’t truly "cloud" – you can’t directly use PVs, CCM, etc.

Related tools: Telepresence, kubevpn

> Extension idea:
>
> - Use a CNI like Terway, let Pods get real VPC IPs
> - Connect the local host to the VPC via VPN
> - Use routing + Service Mesh to connect local apps and Pods

## Approach 3 – Dev Containers for Remote Development

![](https://pic2.zhimg.com/80/v2-a232ceb0676cbf1523c777b20ffba321_1440w.webp)

Package the **development environment** as a container and run it directly in the cluster.

Compared to "build & swap image":

- The dev container is a **full OS + SDK + CLI** environment
- You edit, build and run **inside** the container
- No need to rebuild full images for each change; just restart the process
- Expose the container as a remote host and connect via VS Code Remote, etc.

Pros:

- Hot reload; "dev env = cluster env"
- Custom dev images reduce onboarding and env drift
- Local needs only a terminal or IDE
- Higher security – code and data stay in the cluster

Cons:

- Increases cluster workload (CPU / memory / bandwidth); a service that normally needs 0.1c/0.1g might require 1c/1g for dev
- More ports and access paths need to be exposed

Related tools: Nocalhost, VS Code Server

> Side note: you can probably spend less on fancy Macbooks and more on cloud resources 😄

## Approach 4 – Web IDE for Remote Development

![](https://pic1.zhimg.com/80/v2-a0c70ee07ec4de634ed54654c39ece1c_1440w.webp)

This is a natural extension of dev containers: not only the dev environment, but also the **IDE itself** runs in the cloud.

- The dev container hosts code + tools + editor
- The browser is just a thin client

Related tools: [Coder](https://coder.com/), VS Code Web

### A Slightly Different Angle

My expectation for a Web IDE is not "VS Code in the browser" per se, but:

> **One environment** where develop, deploy and run all live in the same place – the cloud.

In this model, "dev environment" and "dev cluster" are actually the same thing.

For example:

- Give dev containers dedicated ConfigMaps, Secrets and ServiceAccounts
- Access cloud services via VPC private IPs and endpoints from inside the dev container

![](https://s2.loli.net/2023/06/05/3iVTgwatB6h8vYD.png)

My little Mac (6c/16g) has long been struggling under modern workloads. Web IDEs consume more resources on the server side, but **reduce requirements on local machines**. In effect, you pool physical machines into a shared cluster; total cost can even go down.

## Closing Thoughts

As systems get more complex and infra gets more cloud‑native, "works only on the cluster" becomes the norm.

If your team is still debugging mainly via "change, build, push, wait for CI/CD, test", consider moving more of the dev loop **into the cloud**:

- VPN peering if you want to keep code local
- Dev containers if you want "cloud as local env"
- Web IDE if you want full remote dev and easy sharing

Long term, this is not just about shaving a few minutes off each iteration. It’s about making **cluster‑native debugging the default path**, instead of a last resort.
`,Uo=`---
category: "domain"
date: "2023-12-01"
title: "Agile and Lean in Software Development: A Practitioner’s View"
description: "A practice-driven framing of how Agile and Lean overlap in software teams – goals, methods and organizational evolution – with a focus on what is actually executable."
tags:
    - "domain"
    - "productivity"
    - "automation"
    - "lean"
image: "https://pic2.zhimg.com/v2-1bdb1be25c8713045f24a89090ee8be9_r.jpg"
---

_(This article is based on hands‑on experience. It does not try to cover every theoretical branch – only what’s executable.)_

## Agile and Lean

**Agile** (development) started from the Agile Manifesto. It summarizes iterative, incremental ways of building software to respond to change and improve quality.

**Lean** (production) grew out of the Toyota Production System (TPS): creating more value with less work.

The origins are different, but their values and goals overlap heavily.

Questions I keep coming back to:

- Is software development a **creative** activity, or a **manufacturing** activity?
- How is software delivery similar to / different from industrial product delivery?
- How close can a software pipeline get to a factory assembly line?

While tracing the roots of Scrum, Kanban and other "agile project management" methods, you quickly see their manufacturing DNA. Today most software looks like an industrial product:

- Clear design artifacts (architecture diagrams)
- Clear processes (frameworks, languages)
- Clear workers (engineers)
- Clear steps (dev, deploy, operate)

At the same time software is also **exploratory**:

- Highly cross‑domain
- Cheap materials (code)
- Big leverage from individual experts

So we need both:

- Borrow manufacturing flow and discipline
- Preserve the exploratory nature of software products

## Tech / Management × Theory / Practice

![](https://pic1.zhimg.com/v2-123e5739332a6ba55f85609d172cac94_r.jpg)

A few observations:

- In a broad sense, "Agile" includes XP, Clean Code, DevOps, etc.
- Scrum and Kanban both have strong roots in Toyota. They later migrated into software and were branded as agile management methods. (Ken Schwaber is both an Agile Manifesto author and one of the creators of modern Scrum.)
- Applying **lean value stream** analysis to software pushed automation and tooling across the pipeline to reduce handoff time and context switching.
- The **lean value tree** can focus product vision and investment and help define a real MVP.

## Individual, Team, Department, Company

![](https://pic2.zhimg.com/v2-1bdb1be25c8713045f24a89090ee8be9_r.jpg)

From an org perspective:

- Early on, Agile focused more on **individual practice** (there were simply fewer programmers): TDD, pair programming, etc.
- As teams and systems grew, and cognitive load increased:
    - We introduced project management for larger teams: Scrum, Kanban
    - We reduced cognitive load: DDD, platformization, modularization
    - We upgraded tooling: DevOps, automation, cloud‑native
- For IT‑centric companies, "product" is software, so org structure shifts too:
    - Flatter hierarchies
    - Coaching over mentoring; emphasis on self‑learning
    - Self‑managing teams, organized by product / value stream rather than rigid horizontal departments

Agile and Lean are not magic words. They are two lenses to see the same thing:

> How do we **turn ideas into running software** with less waste and more learning?

For that, I care less about what a team calls its process, and more about:

- Is there a clear value chain from customer to code to customer again?
- Are we making small, reversible bets instead of big, irreversible ones?
- Are feedback loops short enough – from prod back to the team?
- Is the org structure helping or fighting these loops?
`,Go=`---
category: "node"
date: "2023-12-01"
title: "DevContainer in Practice: Reproducible Dev Environments"
description: "Practical notes on using DevContainer for multi-language projects – defining, building, connecting and sharing containers to reduce local drift and version conflicts."
tags:
    - "node"
    - "IaC"
    - "Go"
    - "Java"
    - "devx"
image: "https://pic1.zhimg.com/v2-09afb8c8e561f75d874bde41efa327c0_r.jpg"
---

![](https://pic1.zhimg.com/v2-09afb8c8e561f75d874bde41efa327c0_r.jpg)

## Background

With multiple languages and projects in parallel, local environments go out of control easily. Even with directory conventions and version managers, toolchain conflicts keep piling up.

Some tools are installed via \`curl\` plus their own \`upgrade\` commands, some via \`brew\`. Project A needs Terraform 1.3.5, project B still wants 1.2.0. On top of that, Java is managed via \`asdf-vm\`, Go via \`gvm\`, Node via \`nvm\` – each with different mental models.

On Windows (WSL), I revisited DevContainer and gradually turned common projects into dedicated dev containers: **on‑demand, isolated, easy to rebuild**.

Reference: [Developing inside a Container using Visual Studio Code Remote Development](https://code.visualstudio.com/docs/devcontainers/containers)

## Define

![](https://pic1.zhimg.com/80/v2-0b47d65b53aa9c6db6fef23f2c031afc_1440w.webp)

DevContainer uses JSON to describe the dev environment. The key pieces:

- \`image\`: base container image – see [containers.dev: Templates](https://containers.dev/templates)
    - Official templates exist for many languages and stacks
    - You can also build your own (with a VS Code server preinstalled)
- \`features\`: scripts and tools to install – see [containers.dev: Features](https://containers.dev/features)
    - The spec defines a standard interface for features, so you can easily publish your own
    - Features can be shipped as OCI artifacts in registries

## Build & Start

![](https://pic4.zhimg.com/80/v2-5664ed72bbb8f58fcd1cc0fa78d5b747_1440w.webp)

You can use the VS Code command **Create Dev Container** to set things up, or you can write \`.devcontainer/devcontainer.json\` yourself. When you open the project, VS Code will detect it and offer to **Reopen in Dev Container**.

When you confirm, DevContainer (CLI) builds a new image and starts the matching container.

Patterns that work well:

- Split images by language, frontend/backend or project
- Containers don’t affect each other
- If the container is missing a tool, either:
    - Edit \`devcontainer.json\` and reload, or
    - Install ad‑hoc inside the container

If you need databases or middleware, you can bring them up with **docker‑compose**.

> See: [Create a development container using Visual Studio Code Remote Development](https://code.visualstudio.com/docs/devcontainers/create-dev-container#_use-docker-compose)

## Connect

![](https://pic2.zhimg.com/80/v2-fe602d2918e1baec9423793ff9c23f75_1440w.webp)

VS Code then connects to the server running inside the container via the DevContainer extension. From that point on, you’re editing files **in the container**.

You can either:

- Mount your local project into the container as a volume, or
- \`git clone\` directly inside the container

On macOS and Windows, Docker runs in a VM, so heavy volume mounts can be slow. In that case I prefer cloning directly inside the container.

(The downside: other tools on the host can’t edit the same files.)

> _"Enjoy your Dev Environments"_

## Tips

- You can share dev environments with others via \`devcontainer.json\` or even exported images
- GitHub Codespaces uses the same config, so you can take the same setup to the cloud
- Extensions installed **inside** the dev container are scoped to that container and won’t pollute your global VS Code
- With Profiles you can separate shortcuts and VS Code settings further, if you care
- You can run multiple dev containers at the same time

![](https://pic2.zhimg.com/80/v2-8f372319fa1a9464e462ddd6534a7f99_1440w.webp)

- A single dev container can host multiple projects:
    - Use the Command Palette to create a dev container **or** a starter project
    - Configure \`devcontainer.json\`, then Reopen in Container
    - Once inside, \`mkdir\` and \`git clone\` new repos
    - Use **Open Folder** for each project
    - Later you can use **Open Recent** to jump back directly into projects inside the container

![](https://pic3.zhimg.com/80/v2-1959b48b01e08f0eb60d68a2259c27b2_1440w.webp)

![](https://pic2.zhimg.com/v2-2868526299016bfd589152ce101c29d1_b.png)

![](https://pic2.zhimg.com/80/v2-2868526299016bfd589152ce101c29d1_1440w.webp)

## Closing

From both imagination and execution, VS Code is far ahead of most IDEs – and Microsoft/GitHub’s ecosystem makes it even stronger. With Copilot / ChatGPT in the loop, VS Code as the "default universe IDE" is basically a done deal.

For large companies, dev containers and remote coding are not just toys:

- Better dev experience
- Centralized control over source code and secrets
- Potentially **lower total cost** than buying every engineer a maxed‑out laptop.
`,Ho=`---
category: "node"
date: "2024-01-01"
title: "Cloud-Native in Practice: From Tool Stack to Engineering Collaboration"
description: "A look at the real frictions in cloud-native adoption – tool overload, collaboration gaps and hard-to-measure value – and an engineering mindset centered on API-first and data-driven decisions."
tags:
    - "node"
    - "DevOps"
    - "cloud-native"
image: ""
---

Cloud-native has moved past the hype phase into the rollout phase, but many teams are still stuck at the "introduce tools" stage. The number of tools keeps going up; delivery efficiency does not necessarily follow.

- Too many platforms: cloud platforms, container platforms, dev platforms, ops platforms
- Too many tools: languages, frameworks, middleware, databases, caches, message queues
- Too many concepts: Agile, DevOps, GitOps, AIOps
- Too many roles: dev, QA, SRE, security, data, product, operations
- Too many business models: SaaS, subscriptions

## What Cloud-Native Is For

Cloud-native is supposed to make development, testing and operations **faster, safer and more reliable**. But in different companies the concrete goals vary:

- Some want cloud-native to boost **engineering throughput** – making DevOps real
- Some want it to boost **operations efficiency** – building observable, governable, self-healing systems
- Some want it to boost **business efficiency** – using SaaS to expand reach and reduce friction

Regardless of the path, the slogan is the same: **spend less, get more**.

## Why Engineering Adoption Is Hard

The ecosystem keeps expanding, and engineers face more and more choices. To grow their market, tools tend to become Swiss army knives that "do everything". That’s good for vendors but bad for signal‑to‑noise:

- Learning cost: you must invest time just to understand capabilities and trade‑offs
- Maintenance cost: every upgrade (nodes, clusters, tools) is a risk event

Install a few hundred open‑source components and every upgrade is a mini‑project. You have to carefully read every changelog and compatibility note to avoid breaking production.

## An Engineering Mindset

Two principles that help:

### API‑First

Decoupling is how you prevent tool sprawl from turning into architecture rot.

If tools are exposed and consumed **via APIs**, you can:

- Swap implementations behind stable contracts
- Hide vendor quirks from the rest of the system

This works at many layers:

- Internal platform APIs
- Infra abstractions as APIs (IaC, self‑service portals)
- Even CI/CD as an API surface instead of bespoke pipelines per team

### Data Engineering and Visualization

Humans rely on **experience and intuition** – i.e. accumulated memory. In complex systems two things happen:

1. Experience doesn’t cover enough of the state space
2. Human bandwidth is nowhere near enough

So data – the machine’s memory – becomes a critical source of "experience".

With **accurate, structured, standardized data**, you can layer LLM‑based chatbots on top and significantly amplify:

- Incident analysis
- Postmortems
- Capacity planning
- Product analytics

The goal is not "more dashboards", but a loop where:

- Systems emit meaningful signals
- Data pipelines shape them into usable views
- Humans and AI tools jointly turn them into better decisions.
`,Wo=`---
category: "mesh"
date: "2024-01-01"
title: "Diagram-First Thinking: Making Thought Processes Visible"
description: "Extends diagrams from an expression tool to a thinking tool, with a four-step method – reproduce, diverge, converge, recombine – to build reusable cognitive structures in learning and work."
tags:
    - "mesh"
    - "architecture"
    - "engineering-practice"
    - "methodology"
image: ""
---

After summarizing architecture diagram practices in a previous post, I started to use "diagrams" beyond technical communication – for everyday learning and problem analysis.

With more practice, I noticed that different diagram types map to different **cognitive moves**:

- Mind maps are good at decomposition
- Sequence diagrams are good at reconstructing processes
- Structural diagrams are good at finding boundaries

Pick the right diagram, and your thinking speed improves significantly.

## Diagramming as Visualized Thinking

Compared to invisible mental operations, drawing your thinking as diagrams is much clearer and easier to revisit:

- You externalize and record your reasoning process
- You (and others) can replay and critique it later

Modern tools and templates help a lot: whiteboards, versioning, diagram‑as‑code, layers… For many tasks, sketching a diagram is now **faster than typing**.

## A Four-Step Loop

To make diagramming usable in many contexts, I use a simple four‑step loop. Diagramming is just one expression channel; thinking still comes first.

### 1. Reproduce

Dump what’s in your head onto the whiteboard.

> Like a brain dump: capture **everything** without filtering. \\
> This frees up working memory and makes later steps easier.

### 2. Diverge

Expand around current information:

- What’s missing?
- What extra notes or clarifications are needed?
- What relationships exist – time, dependency, composition?

> Pull in external sources here if useful – interviews, search, prior docs.

### 3. Converge

Focus and clean up:

- **Semantic convergence**: use abbreviations, symbols, colors to encode types and meanings
- **Logical convergence**: use distance, direction and shapes to encode structure and relationships
- Identify the **key information**

> This step forces another round of thinking and retrieval. \\
> You compress noise into structure.

### 4. Recombine

Using the converged key information as anchors, pick the right **diagram type** and redraw.

> After convergence you usually know _what kind_ of diagram fits best. \\
> Conversely, the constraints of a diagram type can drive deeper thinking.

## Tools

Some of the tooling I use:

> Diagram tooling repo: <https://github.com/Anddd7/docs-architecture-diagrams>

- Whiteboards (Miro / Excalidraw)
- Diagram‑as‑code (Mermaid, D2, PlantUML)
- Cloud diagrams, infra views, business flows, etc.

The tools themselves are secondary. The core is: **treat drawing as part of thinking, not post‑hoc decoration**.
`,Ko=`---
category: "node/agentic"
date: "2024-02-01"
title: "LLM Application Architecture: From Prompts to Engineering Systems"
description: "Traces how LLM apps evolve from basic prompts to vector search, caching and orchestration layers, and shows how to build a local stack with Ollama and LangChain."
tags:
    - "node/agentic"
    - "LLM"
    - "Prompt"
    - "RAG"
image: "/blogs/assets/202402-llm-application/llm-architecture.png"
---

In the last year, AIGC has shifted from **concept hype** to **engineering hype**. Base models keep getting stronger; upper‑layer frameworks keep lowering the bar for building apps.

I started building LLM apps systematically via tools like **Ollama**: first get a minimal chain working locally, then gradually add engineering capabilities.

## How LLM Architectures Evolved

Early on, context length was tiny. The only usable pattern was:

- Give the model a short prompt
- Maybe add some inline context
- Let it "continue the text"

This simple setup already solved a bunch of tasks.

![alt text](../../../blogs/assets/202402-llm-application/image.png)

> - Chrome prompt collection: <https://github.com/Anddd7/poc-aigc/blob/main/chrome/image.png> \\
> - LangChain prompt templates: <https://github.com/Anddd7/poc-aigc/blob/main/langchain/index.ipynb>

But the model’s knowledge is bounded by its **training data**. Ask about recent events and it will hallucinate. You can inject extra text into the \`context\`, but that:

- Doesn’t scale to large docs (PDF/Word, etc.)
- Is brittle and expensive in tokens

The next step was **vectorization** – convert supplemental information into embeddings and retrieve relevant chunks per query, then attach them to the prompt.

![alt text](../../../blogs/assets/202402-llm-application/image-1.png)

> - Logseq markdown indexing example: <https://github.com/Anddd7/llm-logseq-reader/blob/main/example/Starter.ipynb>

As usage grows (bigger context, more users, higher QPS), we add **databases** and **caches**:

- Vector DB stores embeddings and supports similarity search
    - Within limited context windows, you still feed the _most_ relevant content
- Cache stores previous questions and answers
    - Reduces model calls for similar queries
    - Provides conversational history to avoid "amnesia"

![alt text](../../../blogs/assets/202402-llm-application/image-2.png)

## Developing and Deploying LLM Apps

![alt text](../../../blogs/assets/202402-llm-application/llm-architecture.png)

> Reference: [The architecture of today’s LLM applications](https://github.blog/2023-10-30-the-architecture-of-todays-llm-applications/)

From a traditional perspective, an LLM app is still:

- UI
- Server
- DB

The difference is that the **model runtime** pulls in a lot of extra dependencies (weights, GPU, runtimes), and is often treated as a separate tier.

Tools like **Ollama** smooth this out by providing:

- A local model registry and runtime
- A simple CLI and HTTP API over many models

\`\`\`sh
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

With Ollama in place, you don’t need to stand up your own model server. Just call Ollama and focus on **orchestration**, where **LangChain** is still the de facto first choice.

![alt text](../../../blogs/assets/202402-llm-application/langchain-ollama.png)

> [Building LLM-Powered Web Apps with Client-Side Technology](https://ollama.com/blog/building-llm-powered-web-apps)

If you already know how to build a 3‑tier web app, you’re 80% of the way there. The remaining 20% is about:

- Picking the right model(s)
- Designing prompts and chains
- Managing context, latency and cost
- Observability for prompts and responses

Everything else is just engineering.
`,Yo=`---
category: "node/agentic"
date: "2024-03-01"
title: "AI Replacement Anxiety: Boundaries, Leverage and Collaboration"
description: "Grounded in real usage scenarios, this post examines how AI boosts efficiency and triggers replacement anxiety, and argues for treating AI as an amplifier instead of a substitute."
tags:
    - "node/agentic"
    - "LLM"
    - "Prompt"
    - "AI-native"
image: ""
---

Over the past year, two things have been true at the same time:

- AI capabilities are improving fast
- Access cost and friction are dropping

Apps and APIs are maturing. AI will embed deeper into business software, taking on generation, recommendation, translation, summarization and other high‑frequency assistive work.

The question is no longer **"use or not"**, but **"how to use it safely and controllably"**.

## My Daily Use Cases

### Coding

ChatGPT generally understands programming tasks well and can even emit Mermaid diagrams.

- For algorithm or "toy" tasks (max array value, longest substring, basic HTTP server in Go, simple crawler in Python), it produces usable code
- With prompts and chain‑of‑thought, you can refine outputs step by step

Copilot’s in‑IDE completion pushes this further:

- When ChatGPT’s snippet is off, paste and partially comment it out; Copilot uses the surrounding context to suggest better code
- In the IDE, you can often just stub a function or write a comment and \`Tab\` your way forward
- Copilot is context‑aware at file and project level, so generated code tends to fit your style and conventions

### Writing Articles / Docs

Writing also tends to follow: **idea → outline → expand**.

AI fits into several slots:

- Build outlines and adjust emphasis (role‑casting prompts: "You are a domain expert in finance…")
- Expand and refine paragraphs: write a rough draft, then ask AI to extend or tighten
- Run style checks, generate summaries and blurbs

Copilot helps with documentation as well:

- Boilerplate, parameter lists, code blocks in Markdown
- Docs then loop back to guide later coding work

Translation and language learning are almost trivial now.

### Search

Before Perplexity, there were already RAG‑style search engines. They:

- Interpret your question better
- Pull more relevant documents from noisy result sets

Sometimes the AI answer is good enough and you never click through.

The same pattern applies to **internal docs**:

- Index content and run AI‑backed search
- Let AI summarize or point you at the right place instead of grep‑driven archaeology

## Keeping the Boat Steady

> What I _thought_ AI would do: laundry, cooking, cleaning – the dirty, boring chores. \\
> What AI actually does: writing, drawing, translating – the things that look a lot like my job.

Because GenAI is contextual generation, it hits **word work** first. For me personally, that’s coding, writing, translation, planning.

At first I was amazed at the speed and accuracy. Dependence went up; so did anxiety.

**If AI keeps getting better, will anyone be left?**

Two concerns are real:

1. If AI does a large share of the work, there’s less left for humans. Either the economy must grow fast enough to create new work, or some people will be displaced.
2. If we rely on AI too much, we think less. "Learning without thinking leads to confusion; thinking without learning leads to peril." Progress requires both. Remove practice and reflection, and cognitive and creative capacity erodes.

Context windows are now at 200k tokens – enough to stuff an entire classic novel in. More compute and richer models will push capabilities further.

Knowledge that took you weeks to learn might take an AI seconds.

## Riding the Wave Instead of Drowning

If this makes you anxious, you’ve already taken the first step – **you’re thinking about it**.

Anxiety is a side effect of asking the right questions:

- How should we respond to AI’s progress?
- How do we avoid being replaced by it?
- How do we use it well?

### When AI Peaks, Who Thrives?

- On one hand, AI saves a lot of time and effort
    - For me: +10–30% efficiency at work, +40% time savings outside work
    - Information gathering is much faster: define the goal, then have AI help you search and synthesize
- On the other hand, AI creates more opportunities and challenges
    - Any place where it improves efficiency has value: tech, real estate, finance, customer service…
    - It accelerates: integrating existing knowledge and learning new knowledge

"Copilot everywhere" is a reasonable prediction. The question becomes: **What do you build on top of that?**

### A Few Grounding Points

- Today’s GenAI still has big limitations
    - Most products are text↔text or text→image; there’s a lot of sameness
    - Real commercialized multimodal hardware / robotics is rare
- Human cognition doesn’t instantly level up
    - Adoption and usage patterns differ a lot by age, region and culture
- Many industries are not fully digitized yet
    - Without clean data and processes, AI can easily amplify the wrong things
- Your own thinking still matters most
    - With family you don’t reach for AI; you talk, walk, cook
    - At real career bottlenecks, AI won’t give you a life plan

AI is an amplifier, not a replacement.

If you treat it as a **leverage tool** instead of a **competitor**, the strategy shifts from "outrun AI" to "outrun other humans _with_ AI".
`,Xo=`---
category: "domain"
date: "2024-12-01"
title: "AI-Powered PKM: From Note-Centered to Task-Centered"
description: 'A recap of weaving AI into a Mesh-Shaped PKM system, shifting focus from "better note-taking" to "faster task completion" and building feedback loops that improve execution.'
tags:
    - "domain"
    - "PKM"
    - "logseq"
    - "AI"
image: "/blogs/assets/202412-ai-powered-pkm/image-1.png"
---

Since 2022 I’ve been using Logseq and evolving my [Mesh-Shaped PKM](../2022/202212-logseq-pkm). Over the last year, with AI in the loop, the center of gravity shifted:

> From **"record knowledge better"** to **"finish tasks faster"**.

## AI as a Power-Up

The biggest shift is **input cost** dropping.

In the old flow:

- Collect info through many tools: tasks, read‑later, notes, etc.
- Do a first pass in Logseq: triage tasks vs ideas vs deep‑learning candidates
- Store and categorize large amounts of notes; build links
- Regularly refactor, summarize, condense

With AI:

- I almost never paste more than 200 characters
- I rarely save more than 10 raw images or links
- I can just keep an AI **conversation link** or a **prompt**, and re‑generate a 1k+ word answer when needed

So I rebuilt my workflow and made AI an explicit part of each stage.

## Task-Driven System

I split my work system into three layers.

### 1. Flywheel – Long-Term Task System

The **flywheel** is a macro‑level goal management model, focused on:

- **Vision** – a long‑term direction, not necessarily a precise target
- **Action** – continuous experiments and adjustments toward that vision
- **Feedback** – outcomes that either spawn new GTD tasks or refine the flywheel items
- **Iteration** – adjusting plans based on feedback to keep moving toward the vision

![alt text](../../../blogs/assets/202412-ai-powered-pkm/image-1.png)

### 2. GTD – Execution Layer

GTD is about **clear, actionable tasks**.

- **Collect** – everything goes into an inbox
- **Process** – decide: do, delegate, defer, delete
- **Organize** – assign tasks to lists (waiting, projects, calendar, etc.)
- **Review** – regularly scan and update
- **Do** – execute based on context, energy and priority

![alt text](../../../blogs/assets/202412-ai-powered-pkm/image-2.png)

### 3. Feedback – Learning Layer

Each task should lead to:

- **Output feedback** – writing, notes, artifacts
- **Input feedback** – new tasks or adjustments to the flywheel

![alt text](../../../blogs/assets/202412-ai-powered-pkm/image-3.png)

> Everything shows up as tasks: reading a book, trying a tool, exploring a topic – each with explicit feedback mechanisms to keep the loop going.
>
> Traditional PKM is note‑centric and optimization goal is "better capture & organize". With AI, the bottleneck is no longer **storing** information but **acting** on it. The system should therefore be **task‑centric**, with value delivery as the primary metric.

![alt text](../../../blogs/assets/202412-ai-powered-pkm/image-main.png)

> AI can help at many points: goal shaping, task breakdown, execution (research, summarization, coding), reflection. The net effect is higher throughput per unit of attention.

## Tools in the Stack

My current AI stack looks like this:

- **GitHub Copilot** – code, docs, blog posts (anything in VS Code)
- **Logseq AI Assistant** – everything inside the graph: summaries, translations, tagging, task breakdown, OKR and retros
- **Kimi** – quick ideas and read‑later
    - Free, cross‑platform (app, WeChat, web)
    - I throw all fleeting thoughts and links into Kimi
        - Instant answers, summaries, image descriptions, etc.
        - Save conversation links as "knowledge handles" for later
    - In Logseq I only keep the link plus a short description and a few tags

## Some Thoughts

### The Marginal Value of Traditional KM Is Dropping

Knowledge management was invented to fight information overload:

- Use pages, blocks and tags to build indices
- Make it easier to find what you need later

With AI, the index becomes the **prompt**, and information becomes the **answer**, stored in the cloud.

The purpose of PKM stays the same: **increase execution efficiency**.

AI lets us:

- Spend less time on moving information around
- Spend more time on deciding and doing

So next‑gen PKM should be designed around:

- Task flow and feedback loops
- Where AI can safely take over mechanical work
- Where humans must still make the call

Once that’s clear, "AI‑powered PKM" stops being a buzzword and becomes a concrete operating system for your work and life.
`,Qo=`---
category: "mesh"
date: "2026-02-01"
title: "DomainSpec: Domain Modeling Powered by Agents"
description: "DomainSpec uses a set of transferable specification artifacts to carry business context from discussion all the way through implementation and verification, reducing semantic drift and delivery misalignment."
tags:
    - "mesh"
    - "Architecture Design"
    - "Engineering Practice"
    - "Methodology"
image:
---

**DomainSpec tackles one core problem: context and modeling intent get progressively distorted along the delivery chain.**

Teams often speak clearly during the discovery phase, but by the time work goes through architecture, development, and testing, the original intent has drifted. DomainSpec is not yet another way to write documents; it is a framework for letting the same context penetrate execution and verification end‑to‑end.

**The core idea is straightforward: define boundaries first, then define procedures.**

First use DDD to carve out bounded contexts and clarify which concepts belong to which context; then use process design to define standard procedures, making explicit the inputs, outputs, and checkpoints at each step. Only after boundaries and procedures are nailed down can Agents execute efficiently, instead of guessing.

Even without Agents, this problem has always existed: requirements gradually deform as they pass between architecture, development, and testing; context gets lost at every handoff.

Agents are not the root cause; they simply increase the speed. Problems surface earlier and are amplified more easily. Speed without boundaries only accelerates deviation. DomainSpec’s value is in fixing boundaries, rules, and handoff relationships up front.

## Unified Language and Context

**This directly hits the hardest part of DDD in practice: ubiquitous language.**

Domain experts, architects, developers, and validators often use the same word to refer to different things, or different words to refer to the same thing. Humans will misunderstand each other; Agents will only amplify that misunderstanding.

DomainSpec turns “unified language” from a meeting‑room consensus into transferable artifacts, and keeps passing these artifacts down into later stages so that the Agent’s context stays aligned with the DDD context.

1. **Here, “context” is not background material; it is the boundary conditions for decisions.**

    A bounded context in DDD is not only a unit of business modeling, but also a collaboration unit for Agents. The domain glossary is not just explanation text for humans, but also the anchor for prompts, task specs, and validation criteria.

    Once context changes, it must be propagated via explicit artifacts, not patched in via fuzzy notes in chat history.

2. **Layering is not for formal completeness; it is to prevent semantic drift.**

    The specification layer is responsible for defining meaning, structures, and procedures; the execution layer is responsible for implementation and verification. Feedback must not bypass the upstream model; it should flow back through explicit change requests.

    That way, what the system corrects is the specification itself, rather than quietly rewriting the original intent in implementation.

---

\`\`\`mermaid
flowchart TB
    subgraph SPEC[Specification Layer]
        D[DDD ‑ Define Domain Boundaries]
        P[Process ‑ Design Standard Procedures]
        C[Unified Language & Shared Context]
        D --> C
        P --> C
    end

    C --> DEV[Agents Execute Within Clear Task Context]
    DEV --> VAL[Validate Whether Delivery Matches Intent]
    VAL -. Explicit Feedback & Change Requests .-> C
\`\`\`

## Agents

### Human‑led, Agent‑assisted

- **Domain Analysis Assistant**
    - **Responsibility:** Define the business domain model and keep terminology consistent across all domain artifacts.
    - **Artifacts:** Glossary, Four‑Color Model, Event Map, Context Map.
- **Architecture Design Assistant**
    - **Responsibility:** Translate domain boundaries into system‑ and service‑level architecture, making constraints explicit.
    - **Artifacts:** System Context, Service Decomposition, Communication Map, NFR Analysis, ADRs, service‑level component designs.
- **Process Design Assistant**
    - **Responsibility:** Turn architectural constraints into reusable procedures and executable stories.
    - **Artifacts:** Procedure Catalog, Story Specs, process consistency checks.

### Agent‑led, Human‑reviewed

- **Developer**
    - **Responsibility:** Implement approved stories under architectural and procedural constraints.
    - **Artifacts:** Implementation plans, business code, unit tests, developer‑side validation reports.
- **Validator**
    - **Responsibility:** Black‑box validation of delivery, feeding gaps back into the delivery layer.
    - **Artifacts:** Test plans, test code, test reports, defect‑type change requests.

**In one sentence:** DDD defines the boundaries; process defines the flow; Agents only become truly effective when context remains consistently unified — and DomainSpec’s role is to fix that context, propagate it, and continually correct it via feedback.

---

> **Project:** <https://github.com/Anddd7/domain-spec-agents>
>
> **Examples:** <https://github.com/Anddd7/domain-spec-examples/pulls>
`,Jo=`---
category: "node/agentic"
date: "2026-02-01"
title: "Agentic Engineering in Practice: Modular, Outcome‑Driven, Continuously Evolving"
description: "This post breaks Agent development down into three main tracks — modular design, outcome‑driven delivery, and continuous evolution — and maps them to concrete components and practices."
tags:
    - "node/agentic"
    - "agentic"
    - "LLM"
    - "Prompt"
image:
---

Borrowing from software engineering experience, you can push Agent applications along three dimensions:

- Modularity: standardized responsibilities, single responsibility, higher reusability
- Outcome‑driven: testable, verifiable, regression‑friendly
- Continuous evolution: iterative optimization, feedback loops, versioning

## Modularity

> Prompt ≈ Code  
> Model ≈ Compiler  
> Agent ≈ Application

At a first approximation, you can treat prompts as a new kind of high‑level programming language. It has much higher abstraction power and expressiveness, but also brings new challenges:

- Uncertainty: model outputs are stochastic and diverse; it is hard to guarantee consistency and predictability.
- Opacity: the internal mechanisms and decision process of models are black‑box; they are hard to understand and debug.
- Dependency: performance and behavior depend on training data and architecture; they are hard to control and optimize.
- Safety: models may emit harmful, biased, or inappropriate content; they are hard to guard and govern.

Likewise, you can see an Agent as a new application architecture with higher intelligence and autonomy.

### Core Components of an Agent

#### System Instruction

Defines global rules, roles, and safety boundaries; always in effect.

- Similar to: environment variables or global configuration
- Examples: SOUL.md, AGENT.md, CLAUDE.md

#### Command

Executable commands explicitly triggered by the user.

- Similar to: API endpoints or CLI commands
- Examples: "help me write an email", \`/search AI safety papers\`

#### Skill

Capabilities the Agent can autonomously invoke.

- Similar to: dynamic dispatch based on conditions
- Examples: pdf‑convert, code‑execution, web‑search

### Context and Data Layer

#### Memory

Cross‑session state and preferences, ensuring continuity.

- Similar to: database or cache
- Examples: user profile memory, task state memory

#### MCP (Model Context Protocol)

External capability integration; provides data and interfaces for Skills and Memory.

- Similar to: third‑party APIs
- Examples: GitHub MCP, Google Search MCP

### Packaging and Orchestration

By combining the above layers into a minimal deliverable intelligent unit, you can version, permission, test, and iterate Agents just like traditional software.

#### Single Agent

Bundle the layers into a minimal shippable Agent.

- Similar to: software package or service
- Examples: Email Assistant Agent, Research Assistant Agent

#### Multi‑Agent

Multiple Agents collaborate through scheduling/orchestration or autonomous coordination to complete complex tasks.

- Similar to: microservices architecture
- Examples: customer support system with email, chat, and knowledge‑base Agents

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

> Reference: [Awesome Agentic Patterns](https://github.com/nibzard/awesome-agentic-patterns)

## Outcome‑Driven

### Why Outcome‑Driven Matters

LLMs are inherently uncertain and black‑box; trial‑and‑error is not a smell but the normal path. That means every module must satisfy:

- Testable: you can verify that functionality works.
- Reproducible: results have some degree of consistency.
- Checkable: you can evaluate output quality.
- Regressable: you can roll back versions and trace issues.

Design and development should start from acceptance criteria and validation paths, then implement capability orchestration. If something is not testable, it is not fit for production.

### From "Code" to "Outcome"

If you treat prompts as a programming language, then what Agents generate are analogous to compiled artifacts in software engineering (like \`.class\` files). Most of the time, you do not need to stare at them; you should focus on outcomes — whether user goals are achieved and value is created. Obsessing over every detail of the "code" leads to micromanagement and kills leverage and innovation.

> "Insist on not looking at any code other than CLAUDE.md. Eliminate micromanagement of AI. Using AI is an excellent way to practice servant leadership as a leader." — [Yuanming Hu · "I Work for 10 Claude Code Agents"](https://mp.weixin.qq.com/s/9qPD3gXj3HLmrKC64Q6fbQ)

### Guard the Architecture, Let Go of the Code

This is the higher‑leverage way to work:

- Focus on outcomes and value, not line‑by‑line code control.
- Constrain the system with boundaries and acceptance criteria, not micromanage execution.
- Spend your attention on architecture, prioritization, and feedback loops — the high‑leverage decisions.

## Continuous Evolution

### Why Evolution Is Necessary

An Agent should be a continuously evolving system, not a one‑off deliverable. You keep improving its capability and adaptability by:

- Iterative optimization: refine based on real usage feedback.
- Feedback loops: deliberately collect and apply user feedback.
- Version management: support canary releases, A/B tests, and fast rollback.

### Design Principles

You need to plan for long‑term maintainability from day one:

- Maintainability: clear module boundaries and documentation.
- Extensibility: reserve extension points and integration hooks for new capabilities.
- Upgradability: avoid tech debt and over‑coupling.

## Personal Practice

### GitHub Copilot

With [Customize AI in Visual Studio Code](https://code.visualstudio.com/docs/copilot/customization/overview), Copilot already supports most Agentic techniques, including:

- \`.github/copilot-instructions.md\` = System Instruction
- \`.github/prompts/*.prompt.md\` = Command
- \`.github/skills/*/SKILL.md\` = Skill
- MCP & Custom Agents

Without changing the development environment, you can gradually build Agentic workflows via custom instructions, and eventually replace most repetitive work. For example: \`/test-golang\`, \`/code-review\`, \`/debug-kubernetes\`, \`/get-my-jira-tickets\` …

### Memory

Memory stores user preferences, history, and context so that interactions across sessions stay coherent. Implementation options include:

- File system: store memory in files under a specific path; pass the path as input.
- File system + Skills: provide skills for reading/writing memory without exposing concrete paths (e.g. OpenSpec).
- MCP: store memory in an external system (database) and access it via MCP (e.g. OpenMemory).

---

> 🤖 Suggested prompts for AI:
>
> - "Difference between Commands and Skills"
> - "Versioning and rollback strategies for Agents"
> - "How to test and evaluate Agent output quality"
`,Zo=`---
category: "node"
date: "2026-02-01"
title: "Platform Engineering Path: From Standardization to Self‑Service"
description: "This post outlines a layered evolution path for platform engineering — from standardization and automation to API‑driven capabilities and self‑service, emphasizing thin slices that validate end‑to‑end delivery."
tags:
    - "node"
    - "K8s"
    - "IaC"
image:
---

## Background / Problem

A common anti‑pattern in platform engineering is piling up tools first and only later trying to fix processes, leading to heavy investment and slow returns.
The root causes are usually unstable processes, unclear interfaces, and blurry responsibility boundaries.
What you need is a verifiable evolution path, not a big‑bang redesign.

## Key Ideas

- Standardization first: inputs, actions, and outputs are enumerable.
- Reusable automation: pipelines, templates, images, toolchains.
- API‑driven: ship capabilities as products.
- Self‑service: user‑facing portals and integrations.
- End‑to‑end thin slices: validate the whole chain on small scenarios.

## Approach

Take the "generic resource request" flow as an example and push it through four layers.

\`\`\`mermaid
flowchart TD
  A[0. Standardization: terms / naming / responsibilities / metadata] --> B[1. Automation: pipelines / templates / images / scripts]
  B --> C[2. API‑driven: unified entry / auth / audit]
  C --> D[3. Self‑service: IDP / portal / integrations / ChatOps]
  D --> E[n. Ops automation: scale / upgrade / backup / restore]
\`\`\`

### Example: Generic Resource Request (VSM)

| Action                                | Role                 | Tools                          | Output                               | Pain Points                            |
| ------------------------------------- | -------------------- | ------------------------------ | ------------------------------------ | -------------------------------------- |
| Request: submit need and key params   | Requester            | Form / ticket / UI             | Request, param list                  | Incomplete params, inconsistency       |
| Pre‑check: naming, quota, deps        | Platform / Gov       | Rules engine, quota svc        | Pre‑check result, risk hints         |                                        |
| Change: generate config and review    | Platform / Reviewer  | Templates / IaC, review system | Change ticket, config list           | Long review cycle, many back‑and‑forth |
| Execute: apply resources & config     | Platform / Ops       | CI/CD, orchestration engine    | Resource instances, config state     | Script drift, env inconsistencies      |
| Verify: acceptance, monitoring, alers | Requester / Platform | Checklists, monitoring         | Acceptance records, monitoring items | Fuzzy acceptance criteria, blind spots |
| Record: update assets and change log  | Platform / Ops       | CMDB, audit logs               | Asset records, audit trail           |                                        |

## Critical Details

- The standardization layer outputs "dictionaries + processes", not tools.
- The automation layer reuses the same templates and images.
- The API layer must include auth, audit, and idempotency.
- Self‑service must leave room for a human fallback path.
- Operations phase also needs automation: scaling, upgrade, backup.

### Example: IDP Architecture Sketch

\`\`\`mermaid
flowchart TD
  subgraph Portal[User Portal]
    A[Self‑service entry]
    B[API Gateway]
  end

  subgraph Support[Supporting Systems]
    F[Identity & Access]
    G[Audit Logs]
    H[CMDB]
    P[Monitoring & Alerting]

    F --- G --- P
  end

  subgraph Core[Platform Services]
    X[Orchestration Engine]
    M[K8s Clusters]
    N[GitHub Repos]
    O[CI/CD Pipelines]
    Q[Image Registry]
    R[Argo CD]

    X -->|Service API| M
    X -->|Service API, Internal Integrations| N
    X -->|Service API| O
    O --> Q
    O --> R
  end

  User[User] ---> A
  A --> B
  A --> F
  B ---> H
  B --->|Product API, user‑facing capabilities| X
\`\`\`

## Trade‑offs and Boundaries

- Over‑standardization reduces flexibility.
- Automation does not replace organizational collaboration and approvals.
- API‑driven designs require a stable domain model.
- Self‑service does not mean "no governance".

## Conclusion / Next Steps

Start from standardization and validate end‑to‑end via thin slices.
First, make one generic resource request chain fully work, then replicate and iterate to more scenarios.
Treat APIs as products with release cadence and continuous iteration.

### AIOps Use Cases

- User guidance: leverage standardized flows to provide smart guidance and recommendations.
- Anomaly detection: monitor automated pipelines and API calls to catch issues early.
- Intelligent operations: combine the self‑service platform with automated ops tasks.
- Data analytics: collect platform usage data to refine standardization and automation strategies.

---

- **IDP (Internal Developer Platform):** a self‑service platform for developers, providing unified interfaces and tools to simplify development, deployment, and operations.
- **Thin Slice:** a small but end‑to‑end feature slice in a complex system, used to validate that all parts of the system work together.
- **VSM (Value Stream Mapping):** a method for analyzing and designing work flows, used to uncover waste and improvement opportunities.

> 🤖 Suggested prompts for AI:
>
> - "Give detailed suggestions for standardization"
> - "Best practices for API design"
> - "How to design UX for a self‑service portal"
`,ei=`---
layout: blog-list
featuredEyebrow: Featured Editorial
featured: en/blogs/2026/202602-pov-agentic-engineering.md
listTitle: Latest Insights
listDescription: Technical and engineering practice notes organized in reverse chronological order.
posts:
    path: en/blogs/**/*.md
    perPage: 9
    page: 1
paginationPrevious: Previous
paginationNext: Next
---
`,ni=`---
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
`,ti=`---
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
`;function rt(e,n){return e==null||n==null?NaN:e<n?-1:e>n?1:e>=n?0:NaN}function pg(e,n){return e==null||n==null?NaN:n<e?-1:n>e?1:n>=e?0:NaN}function ai(e){let n,t,a;e.length!==2?(n=rt,t=(r,l)=>rt(e(r),l),a=(r,l)=>e(r)-l):(n=e===rt||e===pg?e:gg,t=e,a=e);function o(r,l,c=0,d=r.length){if(c<d){if(n(l,l)!==0)return d;do{const g=c+d>>>1;t(r[g],l)<0?c=g+1:d=g}while(c<d)}return c}function i(r,l,c=0,d=r.length){if(c<d){if(n(l,l)!==0)return d;do{const g=c+d>>>1;t(r[g],l)<=0?c=g+1:d=g}while(c<d)}return c}function s(r,l,c=0,d=r.length){const g=o(r,l,c,d-1);return g>c&&a(r[g-1],l)>-a(r[g],l)?g-1:g}return{left:o,center:s,right:i}}function gg(){return 0}function mg(e){return e===null?NaN:+e}const fg=ai(rt),vg=fg.right;ai(mg).center;class Ii extends Map{constructor(n,t=_g){if(super(),Object.defineProperties(this,{_intern:{value:new Map},_key:{value:t}}),n!=null)for(const[a,o]of n)this.set(a,o)}get(n){return super.get(Pi(this,n))}has(n){return super.has(Pi(this,n))}set(n,t){return super.set(bg(this,n),t)}delete(n){return super.delete(yg(this,n))}}function Pi({_intern:e,_key:n},t){const a=n(t);return e.has(a)?e.get(a):t}function bg({_intern:e,_key:n},t){const a=n(t);return e.has(a)?e.get(a):(e.set(a,t),t)}function yg({_intern:e,_key:n},t){const a=n(t);return e.has(a)&&(t=e.get(a),e.delete(a)),t}function _g(e){return e!==null&&typeof e=="object"?e.valueOf():e}const wg=Math.sqrt(50),kg=Math.sqrt(10),xg=Math.sqrt(2);function gt(e,n,t){const a=(n-e)/Math.max(0,t),o=Math.floor(Math.log10(a)),i=a/Math.pow(10,o),s=i>=wg?10:i>=kg?5:i>=xg?2:1;let r,l,c;return o<0?(c=Math.pow(10,-o)/s,r=Math.round(e*c),l=Math.round(n*c),r/c<e&&++r,l/c>n&&--l,c=-c):(c=Math.pow(10,o)*s,r=Math.round(e/c),l=Math.round(n/c),r*c<e&&++r,l*c>n&&--l),l<r&&.5<=t&&t<2?gt(e,n,t*2):[r,l,c]}function Ag(e,n,t){if(n=+n,e=+e,t=+t,!(t>0))return[];if(e===n)return[e];const a=n<e,[o,i,s]=a?gt(n,e,t):gt(e,n,t);if(!(i>=o))return[];const r=i-o+1,l=new Array(r);if(a)if(s<0)for(let c=0;c<r;++c)l[c]=(i-c)/-s;else for(let c=0;c<r;++c)l[c]=(i-c)*s;else if(s<0)for(let c=0;c<r;++c)l[c]=(o+c)/-s;else for(let c=0;c<r;++c)l[c]=(o+c)*s;return l}function wa(e,n,t){return n=+n,e=+e,t=+t,gt(e,n,t)[2]}function ka(e,n,t){n=+n,e=+e,t=+t;const a=n<e,o=a?wa(n,e,t):wa(e,n,t);return(a?-1:1)*(o<0?1/-o:o)}function Jw(e,n){let t;if(n===void 0)for(const a of e)a!=null&&(t<a||t===void 0&&a>=a)&&(t=a);else{let a=-1;for(let o of e)(o=n(o,++a,e))!=null&&(t<o||t===void 0&&o>=o)&&(t=o)}return t}function Zw(e,n){let t;if(n===void 0)for(const a of e)a!=null&&(t>a||t===void 0&&a>=a)&&(t=a);else{let a=-1;for(let o of e)(o=n(o,++a,e))!=null&&(t>o||t===void 0&&o>=o)&&(t=o)}return t}function Cg(e,n,t){e=+e,n=+n,t=(o=arguments.length)<2?(n=e,e=0,1):o<3?1:+t;for(var a=-1,o=Math.max(0,Math.ceil((n-e)/t))|0,i=new Array(o);++a<o;)i[a]=e+a*t;return i}function Tg(e){return e}var lt=1,na=2,xa=3,Zn=4,Mi=1e-6;function Sg(e){return"translate("+e+",0)"}function Ig(e){return"translate(0,"+e+")"}function Pg(e){return n=>+e(n)}function Mg(e,n){return n=Math.max(0,e.bandwidth()-n*2)/2,e.round()&&(n=Math.round(n)),t=>+e(t)+n}function Dg(){return!this.__axis}function Os(e,n){var t=[],a=null,o=null,i=6,s=6,r=3,l=typeof window<"u"&&window.devicePixelRatio>1?0:.5,c=e===lt||e===Zn?-1:1,d=e===Zn||e===na?"x":"y",g=e===lt||e===xa?Sg:Ig;function u(h){var v=a??(n.ticks?n.ticks.apply(n,t):n.domain()),b=o??(n.tickFormat?n.tickFormat.apply(n,t):Tg),_=Math.max(i,0)+r,x=n.range(),A=+x[0]+l,D=+x[x.length-1]+l,y=(n.bandwidth?Mg:Pg)(n.copy(),l),T=h.selection?h.selection():h,k=T.selectAll(".domain").data([null]),E=T.selectAll(".tick").data(v,n).order(),B=E.exit(),W=E.enter().append("g").attr("class","tick"),F=E.select("line"),$=E.select("text");k=k.merge(k.enter().insert("path",".tick").attr("class","domain").attr("stroke","currentColor")),E=E.merge(W),F=F.merge(W.append("line").attr("stroke","currentColor").attr(d+"2",c*i)),$=$.merge(W.append("text").attr("fill","currentColor").attr(d,c*_).attr("dy",e===lt?"0em":e===xa?"0.71em":"0.32em")),h!==T&&(k=k.transition(h),E=E.transition(h),F=F.transition(h),$=$.transition(h),B=B.transition(h).attr("opacity",Mi).attr("transform",function(M){return isFinite(M=y(M))?g(M+l):this.getAttribute("transform")}),W.attr("opacity",Mi).attr("transform",function(M){var L=this.parentNode.__axis;return g((L&&isFinite(L=L(M))?L:y(M))+l)})),B.remove(),k.attr("d",e===Zn||e===na?s?"M"+c*s+","+A+"H"+l+"V"+D+"H"+c*s:"M"+l+","+A+"V"+D:s?"M"+A+","+c*s+"V"+l+"H"+D+"V"+c*s:"M"+A+","+l+"H"+D),E.attr("opacity",1).attr("transform",function(M){return g(y(M)+l)}),F.attr(d+"2",c*i),$.attr(d,c*_).text(b),T.filter(Dg).attr("fill","none").attr("font-size",10).attr("font-family","sans-serif").attr("text-anchor",e===na?"start":e===Zn?"end":"middle"),T.each(function(){this.__axis=y})}return u.scale=function(h){return arguments.length?(n=h,u):n},u.ticks=function(){return t=Array.from(arguments),u},u.tickArguments=function(h){return arguments.length?(t=h==null?[]:Array.from(h),u):t.slice()},u.tickValues=function(h){return arguments.length?(a=h==null?null:Array.from(h),u):a&&a.slice()},u.tickFormat=function(h){return arguments.length?(o=h,u):o},u.tickSize=function(h){return arguments.length?(i=s=+h,u):i},u.tickSizeInner=function(h){return arguments.length?(i=+h,u):i},u.tickSizeOuter=function(h){return arguments.length?(s=+h,u):s},u.tickPadding=function(h){return arguments.length?(r=+h,u):r},u.offset=function(h){return arguments.length?(l=+h,u):l},u}function ek(e){return Os(lt,e)}function nk(e){return Os(xa,e)}var Lg={value:()=>{}};function Ut(){for(var e=0,n=arguments.length,t={},a;e<n;++e){if(!(a=arguments[e]+"")||a in t||/[\s.]/.test(a))throw new Error("illegal type: "+a);t[a]=[]}return new ct(t)}function ct(e){this._=e}function $g(e,n){return e.trim().split(/^|\s+/).map(function(t){var a="",o=t.indexOf(".");if(o>=0&&(a=t.slice(o+1),t=t.slice(0,o)),t&&!n.hasOwnProperty(t))throw new Error("unknown type: "+t);return{type:t,name:a}})}ct.prototype=Ut.prototype={constructor:ct,on:function(e,n){var t=this._,a=$g(e+"",t),o,i=-1,s=a.length;if(arguments.length<2){for(;++i<s;)if((o=(e=a[i]).type)&&(o=Ng(t[o],e.name)))return o;return}if(n!=null&&typeof n!="function")throw new Error("invalid callback: "+n);for(;++i<s;)if(o=(e=a[i]).type)t[o]=Di(t[o],e.name,n);else if(n==null)for(o in t)t[o]=Di(t[o],e.name,null);return this},copy:function(){var e={},n=this._;for(var t in n)e[t]=n[t].slice();return new ct(e)},call:function(e,n){if((o=arguments.length-2)>0)for(var t=new Array(o),a=0,o,i;a<o;++a)t[a]=arguments[a+2];if(!this._.hasOwnProperty(e))throw new Error("unknown type: "+e);for(i=this._[e],a=0,o=i.length;a<o;++a)i[a].value.apply(n,t)},apply:function(e,n,t){if(!this._.hasOwnProperty(e))throw new Error("unknown type: "+e);for(var a=this._[e],o=0,i=a.length;o<i;++o)a[o].value.apply(n,t)}};function Ng(e,n){for(var t=0,a=e.length,o;t<a;++t)if((o=e[t]).name===n)return o.value}function Di(e,n,t){for(var a=0,o=e.length;a<o;++a)if(e[a].name===n){e[a]=Lg,e=e.slice(0,a).concat(e.slice(a+1));break}return t!=null&&e.push({name:n,value:t}),e}var Aa="http://www.w3.org/1999/xhtml";const Li={svg:"http://www.w3.org/2000/svg",xhtml:Aa,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function Gt(e){var n=e+="",t=n.indexOf(":");return t>=0&&(n=e.slice(0,t))!=="xmlns"&&(e=e.slice(t+1)),Li.hasOwnProperty(n)?{space:Li[n],local:e}:e}function Eg(e){return function(){var n=this.ownerDocument,t=this.namespaceURI;return t===Aa&&n.documentElement.namespaceURI===Aa?n.createElement(e):n.createElementNS(t,e)}}function Og(e){return function(){return this.ownerDocument.createElementNS(e.space,e.local)}}function Rs(e){var n=Gt(e);return(n.local?Og:Eg)(n)}function Rg(){}function oi(e){return e==null?Rg:function(){return this.querySelector(e)}}function zg(e){typeof e!="function"&&(e=oi(e));for(var n=this._groups,t=n.length,a=new Array(t),o=0;o<t;++o)for(var i=n[o],s=i.length,r=a[o]=new Array(s),l,c,d=0;d<s;++d)(l=i[d])&&(c=e.call(l,l.__data__,d,i))&&("__data__"in l&&(c.__data__=l.__data__),r[d]=c);return new Pe(a,this._parents)}function qg(e){return e==null?[]:Array.isArray(e)?e:Array.from(e)}function Vg(){return[]}function zs(e){return e==null?Vg:function(){return this.querySelectorAll(e)}}function Bg(e){return function(){return qg(e.apply(this,arguments))}}function Fg(e){typeof e=="function"?e=Bg(e):e=zs(e);for(var n=this._groups,t=n.length,a=[],o=[],i=0;i<t;++i)for(var s=n[i],r=s.length,l,c=0;c<r;++c)(l=s[c])&&(a.push(e.call(l,l.__data__,c,s)),o.push(l));return new Pe(a,o)}function qs(e){return function(){return this.matches(e)}}function Vs(e){return function(n){return n.matches(e)}}var jg=Array.prototype.find;function Ug(e){return function(){return jg.call(this.children,e)}}function Gg(){return this.firstElementChild}function Hg(e){return this.select(e==null?Gg:Ug(typeof e=="function"?e:Vs(e)))}var Wg=Array.prototype.filter;function Kg(){return Array.from(this.children)}function Yg(e){return function(){return Wg.call(this.children,e)}}function Xg(e){return this.selectAll(e==null?Kg:Yg(typeof e=="function"?e:Vs(e)))}function Qg(e){typeof e!="function"&&(e=qs(e));for(var n=this._groups,t=n.length,a=new Array(t),o=0;o<t;++o)for(var i=n[o],s=i.length,r=a[o]=[],l,c=0;c<s;++c)(l=i[c])&&e.call(l,l.__data__,c,i)&&r.push(l);return new Pe(a,this._parents)}function Bs(e){return new Array(e.length)}function Jg(){return new Pe(this._enter||this._groups.map(Bs),this._parents)}function mt(e,n){this.ownerDocument=e.ownerDocument,this.namespaceURI=e.namespaceURI,this._next=null,this._parent=e,this.__data__=n}mt.prototype={constructor:mt,appendChild:function(e){return this._parent.insertBefore(e,this._next)},insertBefore:function(e,n){return this._parent.insertBefore(e,n)},querySelector:function(e){return this._parent.querySelector(e)},querySelectorAll:function(e){return this._parent.querySelectorAll(e)}};function Zg(e){return function(){return e}}function em(e,n,t,a,o,i){for(var s=0,r,l=n.length,c=i.length;s<c;++s)(r=n[s])?(r.__data__=i[s],a[s]=r):t[s]=new mt(e,i[s]);for(;s<l;++s)(r=n[s])&&(o[s]=r)}function nm(e,n,t,a,o,i,s){var r,l,c=new Map,d=n.length,g=i.length,u=new Array(d),h;for(r=0;r<d;++r)(l=n[r])&&(u[r]=h=s.call(l,l.__data__,r,n)+"",c.has(h)?o[r]=l:c.set(h,l));for(r=0;r<g;++r)h=s.call(e,i[r],r,i)+"",(l=c.get(h))?(a[r]=l,l.__data__=i[r],c.delete(h)):t[r]=new mt(e,i[r]);for(r=0;r<d;++r)(l=n[r])&&c.get(u[r])===l&&(o[r]=l)}function tm(e){return e.__data__}function am(e,n){if(!arguments.length)return Array.from(this,tm);var t=n?nm:em,a=this._parents,o=this._groups;typeof e!="function"&&(e=Zg(e));for(var i=o.length,s=new Array(i),r=new Array(i),l=new Array(i),c=0;c<i;++c){var d=a[c],g=o[c],u=g.length,h=om(e.call(d,d&&d.__data__,c,a)),v=h.length,b=r[c]=new Array(v),_=s[c]=new Array(v),x=l[c]=new Array(u);t(d,g,b,_,x,h,n);for(var A=0,D=0,y,T;A<v;++A)if(y=b[A]){for(A>=D&&(D=A+1);!(T=_[D])&&++D<v;);y._next=T||null}}return s=new Pe(s,a),s._enter=r,s._exit=l,s}function om(e){return typeof e=="object"&&"length"in e?e:Array.from(e)}function im(){return new Pe(this._exit||this._groups.map(Bs),this._parents)}function sm(e,n,t){var a=this.enter(),o=this,i=this.exit();return typeof e=="function"?(a=e(a),a&&(a=a.selection())):a=a.append(e+""),n!=null&&(o=n(o),o&&(o=o.selection())),t==null?i.remove():t(i),a&&o?a.merge(o).order():o}function rm(e){for(var n=e.selection?e.selection():e,t=this._groups,a=n._groups,o=t.length,i=a.length,s=Math.min(o,i),r=new Array(o),l=0;l<s;++l)for(var c=t[l],d=a[l],g=c.length,u=r[l]=new Array(g),h,v=0;v<g;++v)(h=c[v]||d[v])&&(u[v]=h);for(;l<o;++l)r[l]=t[l];return new Pe(r,this._parents)}function lm(){for(var e=this._groups,n=-1,t=e.length;++n<t;)for(var a=e[n],o=a.length-1,i=a[o],s;--o>=0;)(s=a[o])&&(i&&s.compareDocumentPosition(i)^4&&i.parentNode.insertBefore(s,i),i=s);return this}function cm(e){e||(e=um);function n(g,u){return g&&u?e(g.__data__,u.__data__):!g-!u}for(var t=this._groups,a=t.length,o=new Array(a),i=0;i<a;++i){for(var s=t[i],r=s.length,l=o[i]=new Array(r),c,d=0;d<r;++d)(c=s[d])&&(l[d]=c);l.sort(n)}return new Pe(o,this._parents).order()}function um(e,n){return e<n?-1:e>n?1:e>=n?0:NaN}function dm(){var e=arguments[0];return arguments[0]=this,e.apply(null,arguments),this}function hm(){return Array.from(this)}function pm(){for(var e=this._groups,n=0,t=e.length;n<t;++n)for(var a=e[n],o=0,i=a.length;o<i;++o){var s=a[o];if(s)return s}return null}function gm(){let e=0;for(const n of this)++e;return e}function mm(){return!this.node()}function fm(e){for(var n=this._groups,t=0,a=n.length;t<a;++t)for(var o=n[t],i=0,s=o.length,r;i<s;++i)(r=o[i])&&e.call(r,r.__data__,i,o);return this}function vm(e){return function(){this.removeAttribute(e)}}function bm(e){return function(){this.removeAttributeNS(e.space,e.local)}}function ym(e,n){return function(){this.setAttribute(e,n)}}function _m(e,n){return function(){this.setAttributeNS(e.space,e.local,n)}}function wm(e,n){return function(){var t=n.apply(this,arguments);t==null?this.removeAttribute(e):this.setAttribute(e,t)}}function km(e,n){return function(){var t=n.apply(this,arguments);t==null?this.removeAttributeNS(e.space,e.local):this.setAttributeNS(e.space,e.local,t)}}function xm(e,n){var t=Gt(e);if(arguments.length<2){var a=this.node();return t.local?a.getAttributeNS(t.space,t.local):a.getAttribute(t)}return this.each((n==null?t.local?bm:vm:typeof n=="function"?t.local?km:wm:t.local?_m:ym)(t,n))}function Fs(e){return e.ownerDocument&&e.ownerDocument.defaultView||e.document&&e||e.defaultView}function Am(e){return function(){this.style.removeProperty(e)}}function Cm(e,n,t){return function(){this.style.setProperty(e,n,t)}}function Tm(e,n,t){return function(){var a=n.apply(this,arguments);a==null?this.style.removeProperty(e):this.style.setProperty(e,a,t)}}function Sm(e,n,t){return arguments.length>1?this.each((n==null?Am:typeof n=="function"?Tm:Cm)(e,n,t??"")):Tn(this.node(),e)}function Tn(e,n){return e.style.getPropertyValue(n)||Fs(e).getComputedStyle(e,null).getPropertyValue(n)}function Im(e){return function(){delete this[e]}}function Pm(e,n){return function(){this[e]=n}}function Mm(e,n){return function(){var t=n.apply(this,arguments);t==null?delete this[e]:this[e]=t}}function Dm(e,n){return arguments.length>1?this.each((n==null?Im:typeof n=="function"?Mm:Pm)(e,n)):this.node()[e]}function js(e){return e.trim().split(/^|\s+/)}function ii(e){return e.classList||new Us(e)}function Us(e){this._node=e,this._names=js(e.getAttribute("class")||"")}Us.prototype={add:function(e){var n=this._names.indexOf(e);n<0&&(this._names.push(e),this._node.setAttribute("class",this._names.join(" ")))},remove:function(e){var n=this._names.indexOf(e);n>=0&&(this._names.splice(n,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(e){return this._names.indexOf(e)>=0}};function Gs(e,n){for(var t=ii(e),a=-1,o=n.length;++a<o;)t.add(n[a])}function Hs(e,n){for(var t=ii(e),a=-1,o=n.length;++a<o;)t.remove(n[a])}function Lm(e){return function(){Gs(this,e)}}function $m(e){return function(){Hs(this,e)}}function Nm(e,n){return function(){(n.apply(this,arguments)?Gs:Hs)(this,e)}}function Em(e,n){var t=js(e+"");if(arguments.length<2){for(var a=ii(this.node()),o=-1,i=t.length;++o<i;)if(!a.contains(t[o]))return!1;return!0}return this.each((typeof n=="function"?Nm:n?Lm:$m)(t,n))}function Om(){this.textContent=""}function Rm(e){return function(){this.textContent=e}}function zm(e){return function(){var n=e.apply(this,arguments);this.textContent=n??""}}function qm(e){return arguments.length?this.each(e==null?Om:(typeof e=="function"?zm:Rm)(e)):this.node().textContent}function Vm(){this.innerHTML=""}function Bm(e){return function(){this.innerHTML=e}}function Fm(e){return function(){var n=e.apply(this,arguments);this.innerHTML=n??""}}function jm(e){return arguments.length?this.each(e==null?Vm:(typeof e=="function"?Fm:Bm)(e)):this.node().innerHTML}function Um(){this.nextSibling&&this.parentNode.appendChild(this)}function Gm(){return this.each(Um)}function Hm(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function Wm(){return this.each(Hm)}function Km(e){var n=typeof e=="function"?e:Rs(e);return this.select(function(){return this.appendChild(n.apply(this,arguments))})}function Ym(){return null}function Xm(e,n){var t=typeof e=="function"?e:Rs(e),a=n==null?Ym:typeof n=="function"?n:oi(n);return this.select(function(){return this.insertBefore(t.apply(this,arguments),a.apply(this,arguments)||null)})}function Qm(){var e=this.parentNode;e&&e.removeChild(this)}function Jm(){return this.each(Qm)}function Zm(){var e=this.cloneNode(!1),n=this.parentNode;return n?n.insertBefore(e,this.nextSibling):e}function ef(){var e=this.cloneNode(!0),n=this.parentNode;return n?n.insertBefore(e,this.nextSibling):e}function nf(e){return this.select(e?ef:Zm)}function tf(e){return arguments.length?this.property("__data__",e):this.node().__data__}function af(e){return function(n){e.call(this,n,this.__data__)}}function of(e){return e.trim().split(/^|\s+/).map(function(n){var t="",a=n.indexOf(".");return a>=0&&(t=n.slice(a+1),n=n.slice(0,a)),{type:n,name:t}})}function sf(e){return function(){var n=this.__on;if(n){for(var t=0,a=-1,o=n.length,i;t<o;++t)i=n[t],(!e.type||i.type===e.type)&&i.name===e.name?this.removeEventListener(i.type,i.listener,i.options):n[++a]=i;++a?n.length=a:delete this.__on}}}function rf(e,n,t){return function(){var a=this.__on,o,i=af(n);if(a){for(var s=0,r=a.length;s<r;++s)if((o=a[s]).type===e.type&&o.name===e.name){this.removeEventListener(o.type,o.listener,o.options),this.addEventListener(o.type,o.listener=i,o.options=t),o.value=n;return}}this.addEventListener(e.type,i,t),o={type:e.type,name:e.name,value:n,listener:i,options:t},a?a.push(o):this.__on=[o]}}function lf(e,n,t){var a=of(e+""),o,i=a.length,s;if(arguments.length<2){var r=this.node().__on;if(r){for(var l=0,c=r.length,d;l<c;++l)for(o=0,d=r[l];o<i;++o)if((s=a[o]).type===d.type&&s.name===d.name)return d.value}return}for(r=n?rf:sf,o=0;o<i;++o)this.each(r(a[o],n,t));return this}function Ws(e,n,t){var a=Fs(e),o=a.CustomEvent;typeof o=="function"?o=new o(n,t):(o=a.document.createEvent("Event"),t?(o.initEvent(n,t.bubbles,t.cancelable),o.detail=t.detail):o.initEvent(n,!1,!1)),e.dispatchEvent(o)}function cf(e,n){return function(){return Ws(this,e,n)}}function uf(e,n){return function(){return Ws(this,e,n.apply(this,arguments))}}function df(e,n){return this.each((typeof n=="function"?uf:cf)(e,n))}function*hf(){for(var e=this._groups,n=0,t=e.length;n<t;++n)for(var a=e[n],o=0,i=a.length,s;o<i;++o)(s=a[o])&&(yield s)}var Ks=[null];function Pe(e,n){this._groups=e,this._parents=n}function Xn(){return new Pe([[document.documentElement]],Ks)}function pf(){return this}Pe.prototype=Xn.prototype={constructor:Pe,select:zg,selectAll:Fg,selectChild:Hg,selectChildren:Xg,filter:Qg,data:am,enter:Jg,exit:im,join:sm,merge:rm,selection:pf,order:lm,sort:cm,call:dm,nodes:hm,node:pm,size:gm,empty:mm,each:fm,attr:xm,style:Sm,property:Dm,classed:Em,text:qm,html:jm,raise:Gm,lower:Wm,append:Km,insert:Xm,remove:Jm,clone:nf,datum:tf,on:lf,dispatch:df,[Symbol.iterator]:hf};function ln(e){return typeof e=="string"?new Pe([[document.querySelector(e)]],[document.documentElement]):new Pe([[e]],Ks)}function gf(e){let n;for(;n=e.sourceEvent;)e=n;return e}function $i(e,n){if(e=gf(e),n===void 0&&(n=e.currentTarget),n){var t=n.ownerSVGElement||n;if(t.createSVGPoint){var a=t.createSVGPoint();return a.x=e.clientX,a.y=e.clientY,a=a.matrixTransform(n.getScreenCTM().inverse()),[a.x,a.y]}if(n.getBoundingClientRect){var o=n.getBoundingClientRect();return[e.clientX-o.left-n.clientLeft,e.clientY-o.top-n.clientTop]}}return[e.pageX,e.pageY]}const mf={passive:!1},jn={capture:!0,passive:!1};function ta(e){e.stopImmediatePropagation()}function xn(e){e.preventDefault(),e.stopImmediatePropagation()}function ff(e){var n=e.document.documentElement,t=ln(e).on("dragstart.drag",xn,jn);"onselectstart"in n?t.on("selectstart.drag",xn,jn):(n.__noselect=n.style.MozUserSelect,n.style.MozUserSelect="none")}function vf(e,n){var t=e.document.documentElement,a=ln(e).on("dragstart.drag",null);n&&(a.on("click.drag",xn,jn),setTimeout(function(){a.on("click.drag",null)},0)),"onselectstart"in t?a.on("selectstart.drag",null):(t.style.MozUserSelect=t.__noselect,delete t.__noselect)}const et=e=>()=>e;function Ca(e,{sourceEvent:n,subject:t,target:a,identifier:o,active:i,x:s,y:r,dx:l,dy:c,dispatch:d}){Object.defineProperties(this,{type:{value:e,enumerable:!0,configurable:!0},sourceEvent:{value:n,enumerable:!0,configurable:!0},subject:{value:t,enumerable:!0,configurable:!0},target:{value:a,enumerable:!0,configurable:!0},identifier:{value:o,enumerable:!0,configurable:!0},active:{value:i,enumerable:!0,configurable:!0},x:{value:s,enumerable:!0,configurable:!0},y:{value:r,enumerable:!0,configurable:!0},dx:{value:l,enumerable:!0,configurable:!0},dy:{value:c,enumerable:!0,configurable:!0},_:{value:d}})}Ca.prototype.on=function(){var e=this._.on.apply(this._,arguments);return e===this._?this:e};function bf(e){return!e.ctrlKey&&!e.button}function yf(){return this.parentNode}function _f(e,n){return n??{x:e.x,y:e.y}}function wf(){return navigator.maxTouchPoints||"ontouchstart"in this}function kf(){var e=bf,n=yf,t=_f,a=wf,o={},i=Ut("start","drag","end"),s=0,r,l,c,d,g=0;function u(y){y.on("mousedown.drag",h).filter(a).on("touchstart.drag",_).on("touchmove.drag",x,mf).on("touchend.drag touchcancel.drag",A).style("touch-action","none").style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}function h(y,T){if(!(d||!e.call(this,y,T))){var k=D(this,n.call(this,y,T),y,T,"mouse");k&&(ln(y.view).on("mousemove.drag",v,jn).on("mouseup.drag",b,jn),ff(y.view),ta(y),c=!1,r=y.clientX,l=y.clientY,k("start",y))}}function v(y){if(xn(y),!c){var T=y.clientX-r,k=y.clientY-l;c=T*T+k*k>g}o.mouse("drag",y)}function b(y){ln(y.view).on("mousemove.drag mouseup.drag",null),vf(y.view,c),xn(y),o.mouse("end",y)}function _(y,T){if(e.call(this,y,T)){var k=y.changedTouches,E=n.call(this,y,T),B=k.length,W,F;for(W=0;W<B;++W)(F=D(this,E,y,T,k[W].identifier,k[W]))&&(ta(y),F("start",y,k[W]))}}function x(y){var T=y.changedTouches,k=T.length,E,B;for(E=0;E<k;++E)(B=o[T[E].identifier])&&(xn(y),B("drag",y,T[E]))}function A(y){var T=y.changedTouches,k=T.length,E,B;for(d&&clearTimeout(d),d=setTimeout(function(){d=null},500),E=0;E<k;++E)(B=o[T[E].identifier])&&(ta(y),B("end",y,T[E]))}function D(y,T,k,E,B,W){var F=i.copy(),$=$i(W||k,T),M,L,z;if((z=t.call(y,new Ca("beforestart",{sourceEvent:k,target:u,identifier:B,active:s,x:$[0],y:$[1],dx:0,dy:0,dispatch:F}),E))!=null)return M=z.x-$[0]||0,L=z.y-$[1]||0,function te(ee,K,re){var de=$,ue;switch(ee){case"start":o[B]=te,ue=s++;break;case"end":delete o[B],--s;case"drag":$=$i(re||K,T),ue=s;break}F.call(ee,y,new Ca(ee,{sourceEvent:K,subject:z,target:u,identifier:B,active:ue,x:$[0]+M,y:$[1]+L,dx:$[0]-de[0],dy:$[1]-de[1],dispatch:F}),E)}}return u.filter=function(y){return arguments.length?(e=typeof y=="function"?y:et(!!y),u):e},u.container=function(y){return arguments.length?(n=typeof y=="function"?y:et(y),u):n},u.subject=function(y){return arguments.length?(t=typeof y=="function"?y:et(y),u):t},u.touchable=function(y){return arguments.length?(a=typeof y=="function"?y:et(!!y),u):a},u.on=function(){var y=i.on.apply(i,arguments);return y===i?u:y},u.clickDistance=function(y){return arguments.length?(g=(y=+y)*y,u):Math.sqrt(g)},u}function Qn(e,n,t){e.prototype=n.prototype=t,t.constructor=e}function Ht(e,n){var t=Object.create(e.prototype);for(var a in n)t[a]=n[a];return t}function fn(){}var Un=.7,ft=1/Un,An="\\s*([+-]?\\d+)\\s*",Gn="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",Ve="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",xf=/^#([0-9a-f]{3,8})$/,Af=new RegExp(`^rgb\\(${An},${An},${An}\\)$`),Cf=new RegExp(`^rgb\\(${Ve},${Ve},${Ve}\\)$`),Tf=new RegExp(`^rgba\\(${An},${An},${An},${Gn}\\)$`),Sf=new RegExp(`^rgba\\(${Ve},${Ve},${Ve},${Gn}\\)$`),If=new RegExp(`^hsl\\(${Gn},${Ve},${Ve}\\)$`),Pf=new RegExp(`^hsla\\(${Gn},${Ve},${Ve},${Gn}\\)$`),Ni={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};Qn(fn,dn,{copy(e){return Object.assign(new this.constructor,this,e)},displayable(){return this.rgb().displayable()},hex:Ei,formatHex:Ei,formatHex8:Mf,formatHsl:Df,formatRgb:Oi,toString:Oi});function Ei(){return this.rgb().formatHex()}function Mf(){return this.rgb().formatHex8()}function Df(){return Xs(this).formatHsl()}function Oi(){return this.rgb().formatRgb()}function dn(e){var n,t;return e=(e+"").trim().toLowerCase(),(n=xf.exec(e))?(t=n[1].length,n=parseInt(n[1],16),t===6?Ri(n):t===3?new ye(n>>8&15|n>>4&240,n>>4&15|n&240,(n&15)<<4|n&15,1):t===8?nt(n>>24&255,n>>16&255,n>>8&255,(n&255)/255):t===4?nt(n>>12&15|n>>8&240,n>>8&15|n>>4&240,n>>4&15|n&240,((n&15)<<4|n&15)/255):null):(n=Af.exec(e))?new ye(n[1],n[2],n[3],1):(n=Cf.exec(e))?new ye(n[1]*255/100,n[2]*255/100,n[3]*255/100,1):(n=Tf.exec(e))?nt(n[1],n[2],n[3],n[4]):(n=Sf.exec(e))?nt(n[1]*255/100,n[2]*255/100,n[3]*255/100,n[4]):(n=If.exec(e))?Vi(n[1],n[2]/100,n[3]/100,1):(n=Pf.exec(e))?Vi(n[1],n[2]/100,n[3]/100,n[4]):Ni.hasOwnProperty(e)?Ri(Ni[e]):e==="transparent"?new ye(NaN,NaN,NaN,0):null}function Ri(e){return new ye(e>>16&255,e>>8&255,e&255,1)}function nt(e,n,t,a){return a<=0&&(e=n=t=NaN),new ye(e,n,t,a)}function Ys(e){return e instanceof fn||(e=dn(e)),e?(e=e.rgb(),new ye(e.r,e.g,e.b,e.opacity)):new ye}function Ta(e,n,t,a){return arguments.length===1?Ys(e):new ye(e,n,t,a??1)}function ye(e,n,t,a){this.r=+e,this.g=+n,this.b=+t,this.opacity=+a}Qn(ye,Ta,Ht(fn,{brighter(e){return e=e==null?ft:Math.pow(ft,e),new ye(this.r*e,this.g*e,this.b*e,this.opacity)},darker(e){return e=e==null?Un:Math.pow(Un,e),new ye(this.r*e,this.g*e,this.b*e,this.opacity)},rgb(){return this},clamp(){return new ye(cn(this.r),cn(this.g),cn(this.b),vt(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:zi,formatHex:zi,formatHex8:Lf,formatRgb:qi,toString:qi}));function zi(){return`#${rn(this.r)}${rn(this.g)}${rn(this.b)}`}function Lf(){return`#${rn(this.r)}${rn(this.g)}${rn(this.b)}${rn((isNaN(this.opacity)?1:this.opacity)*255)}`}function qi(){const e=vt(this.opacity);return`${e===1?"rgb(":"rgba("}${cn(this.r)}, ${cn(this.g)}, ${cn(this.b)}${e===1?")":`, ${e})`}`}function vt(e){return isNaN(e)?1:Math.max(0,Math.min(1,e))}function cn(e){return Math.max(0,Math.min(255,Math.round(e)||0))}function rn(e){return e=cn(e),(e<16?"0":"")+e.toString(16)}function Vi(e,n,t,a){return a<=0?e=n=t=NaN:t<=0||t>=1?e=n=NaN:n<=0&&(e=NaN),new Ne(e,n,t,a)}function Xs(e){if(e instanceof Ne)return new Ne(e.h,e.s,e.l,e.opacity);if(e instanceof fn||(e=dn(e)),!e)return new Ne;if(e instanceof Ne)return e;e=e.rgb();var n=e.r/255,t=e.g/255,a=e.b/255,o=Math.min(n,t,a),i=Math.max(n,t,a),s=NaN,r=i-o,l=(i+o)/2;return r?(n===i?s=(t-a)/r+(t<a)*6:t===i?s=(a-n)/r+2:s=(n-t)/r+4,r/=l<.5?i+o:2-i-o,s*=60):r=l>0&&l<1?0:s,new Ne(s,r,l,e.opacity)}function $f(e,n,t,a){return arguments.length===1?Xs(e):new Ne(e,n,t,a??1)}function Ne(e,n,t,a){this.h=+e,this.s=+n,this.l=+t,this.opacity=+a}Qn(Ne,$f,Ht(fn,{brighter(e){return e=e==null?ft:Math.pow(ft,e),new Ne(this.h,this.s,this.l*e,this.opacity)},darker(e){return e=e==null?Un:Math.pow(Un,e),new Ne(this.h,this.s,this.l*e,this.opacity)},rgb(){var e=this.h%360+(this.h<0)*360,n=isNaN(e)||isNaN(this.s)?0:this.s,t=this.l,a=t+(t<.5?t:1-t)*n,o=2*t-a;return new ye(aa(e>=240?e-240:e+120,o,a),aa(e,o,a),aa(e<120?e+240:e-120,o,a),this.opacity)},clamp(){return new Ne(Bi(this.h),tt(this.s),tt(this.l),vt(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){const e=vt(this.opacity);return`${e===1?"hsl(":"hsla("}${Bi(this.h)}, ${tt(this.s)*100}%, ${tt(this.l)*100}%${e===1?")":`, ${e})`}`}}));function Bi(e){return e=(e||0)%360,e<0?e+360:e}function tt(e){return Math.max(0,Math.min(1,e||0))}function aa(e,n,t){return(e<60?n+(t-n)*e/60:e<180?t:e<240?n+(t-n)*(240-e)/60:n)*255}const Nf=Math.PI/180,Ef=180/Math.PI,bt=18,Qs=.96422,Js=1,Zs=.82521,er=4/29,Cn=6/29,nr=3*Cn*Cn,Of=Cn*Cn*Cn;function tr(e){if(e instanceof Be)return new Be(e.l,e.a,e.b,e.opacity);if(e instanceof Ge)return ar(e);e instanceof ye||(e=Ys(e));var n=ra(e.r),t=ra(e.g),a=ra(e.b),o=oa((.2225045*n+.7168786*t+.0606169*a)/Js),i,s;return n===t&&t===a?i=s=o:(i=oa((.4360747*n+.3850649*t+.1430804*a)/Qs),s=oa((.0139322*n+.0971045*t+.7141733*a)/Zs)),new Be(116*o-16,500*(i-o),200*(o-s),e.opacity)}function Rf(e,n,t,a){return arguments.length===1?tr(e):new Be(e,n,t,a??1)}function Be(e,n,t,a){this.l=+e,this.a=+n,this.b=+t,this.opacity=+a}Qn(Be,Rf,Ht(fn,{brighter(e){return new Be(this.l+bt*(e??1),this.a,this.b,this.opacity)},darker(e){return new Be(this.l-bt*(e??1),this.a,this.b,this.opacity)},rgb(){var e=(this.l+16)/116,n=isNaN(this.a)?e:e+this.a/500,t=isNaN(this.b)?e:e-this.b/200;return n=Qs*ia(n),e=Js*ia(e),t=Zs*ia(t),new ye(sa(3.1338561*n-1.6168667*e-.4906146*t),sa(-.9787684*n+1.9161415*e+.033454*t),sa(.0719453*n-.2289914*e+1.4052427*t),this.opacity)}}));function oa(e){return e>Of?Math.pow(e,1/3):e/nr+er}function ia(e){return e>Cn?e*e*e:nr*(e-er)}function sa(e){return 255*(e<=.0031308?12.92*e:1.055*Math.pow(e,1/2.4)-.055)}function ra(e){return(e/=255)<=.04045?e/12.92:Math.pow((e+.055)/1.055,2.4)}function zf(e){if(e instanceof Ge)return new Ge(e.h,e.c,e.l,e.opacity);if(e instanceof Be||(e=tr(e)),e.a===0&&e.b===0)return new Ge(NaN,0<e.l&&e.l<100?0:NaN,e.l,e.opacity);var n=Math.atan2(e.b,e.a)*Ef;return new Ge(n<0?n+360:n,Math.sqrt(e.a*e.a+e.b*e.b),e.l,e.opacity)}function Sa(e,n,t,a){return arguments.length===1?zf(e):new Ge(e,n,t,a??1)}function Ge(e,n,t,a){this.h=+e,this.c=+n,this.l=+t,this.opacity=+a}function ar(e){if(isNaN(e.h))return new Be(e.l,0,0,e.opacity);var n=e.h*Nf;return new Be(e.l,Math.cos(n)*e.c,Math.sin(n)*e.c,e.opacity)}Qn(Ge,Sa,Ht(fn,{brighter(e){return new Ge(this.h,this.c,this.l+bt*(e??1),this.opacity)},darker(e){return new Ge(this.h,this.c,this.l-bt*(e??1),this.opacity)},rgb(){return ar(this).rgb()}}));const Wt=e=>()=>e;function or(e,n){return function(t){return e+t*n}}function qf(e,n,t){return e=Math.pow(e,t),n=Math.pow(n,t)-e,t=1/t,function(a){return Math.pow(e+a*n,t)}}function Vf(e,n){var t=n-e;return t?or(e,t>180||t<-180?t-360*Math.round(t/360):t):Wt(isNaN(e)?n:e)}function Bf(e){return(e=+e)==1?Bn:function(n,t){return t-n?qf(n,t,e):Wt(isNaN(n)?t:n)}}function Bn(e,n){var t=n-e;return t?or(e,t):Wt(isNaN(e)?n:e)}const yt=function e(n){var t=Bf(n);function a(o,i){var s=t((o=Ta(o)).r,(i=Ta(i)).r),r=t(o.g,i.g),l=t(o.b,i.b),c=Bn(o.opacity,i.opacity);return function(d){return o.r=s(d),o.g=r(d),o.b=l(d),o.opacity=c(d),o+""}}return a.gamma=e,a}(1);function Ff(e,n){n||(n=[]);var t=e?Math.min(n.length,e.length):0,a=n.slice(),o;return function(i){for(o=0;o<t;++o)a[o]=e[o]*(1-i)+n[o]*i;return a}}function jf(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function Uf(e,n){var t=n?n.length:0,a=e?Math.min(t,e.length):0,o=new Array(a),i=new Array(t),s;for(s=0;s<a;++s)o[s]=si(e[s],n[s]);for(;s<t;++s)i[s]=n[s];return function(r){for(s=0;s<a;++s)i[s]=o[s](r);return i}}function Gf(e,n){var t=new Date;return e=+e,n=+n,function(a){return t.setTime(e*(1-a)+n*a),t}}function $e(e,n){return e=+e,n=+n,function(t){return e*(1-t)+n*t}}function Hf(e,n){var t={},a={},o;(e===null||typeof e!="object")&&(e={}),(n===null||typeof n!="object")&&(n={});for(o in n)o in e?t[o]=si(e[o],n[o]):a[o]=n[o];return function(i){for(o in t)a[o]=t[o](i);return a}}var Ia=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,la=new RegExp(Ia.source,"g");function Wf(e){return function(){return e}}function Kf(e){return function(n){return e(n)+""}}function ir(e,n){var t=Ia.lastIndex=la.lastIndex=0,a,o,i,s=-1,r=[],l=[];for(e=e+"",n=n+"";(a=Ia.exec(e))&&(o=la.exec(n));)(i=o.index)>t&&(i=n.slice(t,i),r[s]?r[s]+=i:r[++s]=i),(a=a[0])===(o=o[0])?r[s]?r[s]+=o:r[++s]=o:(r[++s]=null,l.push({i:s,x:$e(a,o)})),t=la.lastIndex;return t<n.length&&(i=n.slice(t),r[s]?r[s]+=i:r[++s]=i),r.length<2?l[0]?Kf(l[0].x):Wf(n):(n=l.length,function(c){for(var d=0,g;d<n;++d)r[(g=l[d]).i]=g.x(c);return r.join("")})}function si(e,n){var t=typeof n,a;return n==null||t==="boolean"?Wt(n):(t==="number"?$e:t==="string"?(a=dn(n))?(n=a,yt):ir:n instanceof dn?yt:n instanceof Date?Gf:jf(n)?Ff:Array.isArray(n)?Uf:typeof n.valueOf!="function"&&typeof n.toString!="function"||isNaN(n)?Hf:$e)(e,n)}function Yf(e,n){return e=+e,n=+n,function(t){return Math.round(e*(1-t)+n*t)}}var Fi=180/Math.PI,Pa={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function sr(e,n,t,a,o,i){var s,r,l;return(s=Math.sqrt(e*e+n*n))&&(e/=s,n/=s),(l=e*t+n*a)&&(t-=e*l,a-=n*l),(r=Math.sqrt(t*t+a*a))&&(t/=r,a/=r,l/=r),e*a<n*t&&(e=-e,n=-n,l=-l,s=-s),{translateX:o,translateY:i,rotate:Math.atan2(n,e)*Fi,skewX:Math.atan(l)*Fi,scaleX:s,scaleY:r}}var at;function Xf(e){const n=new(typeof DOMMatrix=="function"?DOMMatrix:WebKitCSSMatrix)(e+"");return n.isIdentity?Pa:sr(n.a,n.b,n.c,n.d,n.e,n.f)}function Qf(e){return e==null||(at||(at=document.createElementNS("http://www.w3.org/2000/svg","g")),at.setAttribute("transform",e),!(e=at.transform.baseVal.consolidate()))?Pa:(e=e.matrix,sr(e.a,e.b,e.c,e.d,e.e,e.f))}function rr(e,n,t,a){function o(c){return c.length?c.pop()+" ":""}function i(c,d,g,u,h,v){if(c!==g||d!==u){var b=h.push("translate(",null,n,null,t);v.push({i:b-4,x:$e(c,g)},{i:b-2,x:$e(d,u)})}else(g||u)&&h.push("translate("+g+n+u+t)}function s(c,d,g,u){c!==d?(c-d>180?d+=360:d-c>180&&(c+=360),u.push({i:g.push(o(g)+"rotate(",null,a)-2,x:$e(c,d)})):d&&g.push(o(g)+"rotate("+d+a)}function r(c,d,g,u){c!==d?u.push({i:g.push(o(g)+"skewX(",null,a)-2,x:$e(c,d)}):d&&g.push(o(g)+"skewX("+d+a)}function l(c,d,g,u,h,v){if(c!==g||d!==u){var b=h.push(o(h)+"scale(",null,",",null,")");v.push({i:b-4,x:$e(c,g)},{i:b-2,x:$e(d,u)})}else(g!==1||u!==1)&&h.push(o(h)+"scale("+g+","+u+")")}return function(c,d){var g=[],u=[];return c=e(c),d=e(d),i(c.translateX,c.translateY,d.translateX,d.translateY,g,u),s(c.rotate,d.rotate,g,u),r(c.skewX,d.skewX,g,u),l(c.scaleX,c.scaleY,d.scaleX,d.scaleY,g,u),c=d=null,function(h){for(var v=-1,b=u.length,_;++v<b;)g[(_=u[v]).i]=_.x(h);return g.join("")}}}var Jf=rr(Xf,"px, ","px)","deg)"),Zf=rr(Qf,", ",")",")");function e0(e){return function(n,t){var a=e((n=Sa(n)).h,(t=Sa(t)).h),o=Bn(n.c,t.c),i=Bn(n.l,t.l),s=Bn(n.opacity,t.opacity);return function(r){return n.h=a(r),n.c=o(r),n.l=i(r),n.opacity=s(r),n+""}}}const tk=e0(Vf);var Sn=0,zn=0,Dn=0,lr=1e3,_t,qn,wt=0,hn=0,Kt=0,Hn=typeof performance=="object"&&performance.now?performance:Date,cr=typeof window=="object"&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(e){setTimeout(e,17)};function ri(){return hn||(cr(n0),hn=Hn.now()+Kt)}function n0(){hn=0}function kt(){this._call=this._time=this._next=null}kt.prototype=li.prototype={constructor:kt,restart:function(e,n,t){if(typeof e!="function")throw new TypeError("callback is not a function");t=(t==null?ri():+t)+(n==null?0:+n),!this._next&&qn!==this&&(qn?qn._next=this:_t=this,qn=this),this._call=e,this._time=t,Ma()},stop:function(){this._call&&(this._call=null,this._time=1/0,Ma())}};function li(e,n,t){var a=new kt;return a.restart(e,n,t),a}function t0(){ri(),++Sn;for(var e=_t,n;e;)(n=hn-e._time)>=0&&e._call.call(void 0,n),e=e._next;--Sn}function ji(){hn=(wt=Hn.now())+Kt,Sn=zn=0;try{t0()}finally{Sn=0,o0(),hn=0}}function a0(){var e=Hn.now(),n=e-wt;n>lr&&(Kt-=n,wt=e)}function o0(){for(var e,n=_t,t,a=1/0;n;)n._call?(a>n._time&&(a=n._time),e=n,n=n._next):(t=n._next,n._next=null,n=e?e._next=t:_t=t);qn=e,Ma(a)}function Ma(e){if(!Sn){zn&&(zn=clearTimeout(zn));var n=e-hn;n>24?(e<1/0&&(zn=setTimeout(ji,e-Hn.now()-Kt)),Dn&&(Dn=clearInterval(Dn))):(Dn||(wt=Hn.now(),Dn=setInterval(a0,lr)),Sn=1,cr(ji))}}function Ui(e,n,t){var a=new kt;return n=n==null?0:+n,a.restart(o=>{a.stop(),e(o+n)},n,t),a}var i0=Ut("start","end","cancel","interrupt"),s0=[],ur=0,Gi=1,Da=2,ut=3,Hi=4,La=5,dt=6;function Yt(e,n,t,a,o,i){var s=e.__transition;if(!s)e.__transition={};else if(t in s)return;r0(e,t,{name:n,index:a,group:o,on:i0,tween:s0,time:i.time,delay:i.delay,duration:i.duration,ease:i.ease,timer:null,state:ur})}function ci(e,n){var t=Oe(e,n);if(t.state>ur)throw new Error("too late; already scheduled");return t}function Fe(e,n){var t=Oe(e,n);if(t.state>ut)throw new Error("too late; already running");return t}function Oe(e,n){var t=e.__transition;if(!t||!(t=t[n]))throw new Error("transition not found");return t}function r0(e,n,t){var a=e.__transition,o;a[n]=t,t.timer=li(i,0,t.time);function i(c){t.state=Gi,t.timer.restart(s,t.delay,t.time),t.delay<=c&&s(c-t.delay)}function s(c){var d,g,u,h;if(t.state!==Gi)return l();for(d in a)if(h=a[d],h.name===t.name){if(h.state===ut)return Ui(s);h.state===Hi?(h.state=dt,h.timer.stop(),h.on.call("interrupt",e,e.__data__,h.index,h.group),delete a[d]):+d<n&&(h.state=dt,h.timer.stop(),h.on.call("cancel",e,e.__data__,h.index,h.group),delete a[d])}if(Ui(function(){t.state===ut&&(t.state=Hi,t.timer.restart(r,t.delay,t.time),r(c))}),t.state=Da,t.on.call("start",e,e.__data__,t.index,t.group),t.state===Da){for(t.state=ut,o=new Array(u=t.tween.length),d=0,g=-1;d<u;++d)(h=t.tween[d].value.call(e,e.__data__,t.index,t.group))&&(o[++g]=h);o.length=g+1}}function r(c){for(var d=c<t.duration?t.ease.call(null,c/t.duration):(t.timer.restart(l),t.state=La,1),g=-1,u=o.length;++g<u;)o[g].call(e,d);t.state===La&&(t.on.call("end",e,e.__data__,t.index,t.group),l())}function l(){t.state=dt,t.timer.stop(),delete a[n];for(var c in a)return;delete e.__transition}}function l0(e,n){var t=e.__transition,a,o,i=!0,s;if(t){n=n==null?null:n+"";for(s in t){if((a=t[s]).name!==n){i=!1;continue}o=a.state>Da&&a.state<La,a.state=dt,a.timer.stop(),a.on.call(o?"interrupt":"cancel",e,e.__data__,a.index,a.group),delete t[s]}i&&delete e.__transition}}function c0(e){return this.each(function(){l0(this,e)})}function u0(e,n){var t,a;return function(){var o=Fe(this,e),i=o.tween;if(i!==t){a=t=i;for(var s=0,r=a.length;s<r;++s)if(a[s].name===n){a=a.slice(),a.splice(s,1);break}}o.tween=a}}function d0(e,n,t){var a,o;if(typeof t!="function")throw new Error;return function(){var i=Fe(this,e),s=i.tween;if(s!==a){o=(a=s).slice();for(var r={name:n,value:t},l=0,c=o.length;l<c;++l)if(o[l].name===n){o[l]=r;break}l===c&&o.push(r)}i.tween=o}}function h0(e,n){var t=this._id;if(e+="",arguments.length<2){for(var a=Oe(this.node(),t).tween,o=0,i=a.length,s;o<i;++o)if((s=a[o]).name===e)return s.value;return null}return this.each((n==null?u0:d0)(t,e,n))}function ui(e,n,t){var a=e._id;return e.each(function(){var o=Fe(this,a);(o.value||(o.value={}))[n]=t.apply(this,arguments)}),function(o){return Oe(o,a).value[n]}}function dr(e,n){var t;return(typeof n=="number"?$e:n instanceof dn?yt:(t=dn(n))?(n=t,yt):ir)(e,n)}function p0(e){return function(){this.removeAttribute(e)}}function g0(e){return function(){this.removeAttributeNS(e.space,e.local)}}function m0(e,n,t){var a,o=t+"",i;return function(){var s=this.getAttribute(e);return s===o?null:s===a?i:i=n(a=s,t)}}function f0(e,n,t){var a,o=t+"",i;return function(){var s=this.getAttributeNS(e.space,e.local);return s===o?null:s===a?i:i=n(a=s,t)}}function v0(e,n,t){var a,o,i;return function(){var s,r=t(this),l;return r==null?void this.removeAttribute(e):(s=this.getAttribute(e),l=r+"",s===l?null:s===a&&l===o?i:(o=l,i=n(a=s,r)))}}function b0(e,n,t){var a,o,i;return function(){var s,r=t(this),l;return r==null?void this.removeAttributeNS(e.space,e.local):(s=this.getAttributeNS(e.space,e.local),l=r+"",s===l?null:s===a&&l===o?i:(o=l,i=n(a=s,r)))}}function y0(e,n){var t=Gt(e),a=t==="transform"?Zf:dr;return this.attrTween(e,typeof n=="function"?(t.local?b0:v0)(t,a,ui(this,"attr."+e,n)):n==null?(t.local?g0:p0)(t):(t.local?f0:m0)(t,a,n))}function _0(e,n){return function(t){this.setAttribute(e,n.call(this,t))}}function w0(e,n){return function(t){this.setAttributeNS(e.space,e.local,n.call(this,t))}}function k0(e,n){var t,a;function o(){var i=n.apply(this,arguments);return i!==a&&(t=(a=i)&&w0(e,i)),t}return o._value=n,o}function x0(e,n){var t,a;function o(){var i=n.apply(this,arguments);return i!==a&&(t=(a=i)&&_0(e,i)),t}return o._value=n,o}function A0(e,n){var t="attr."+e;if(arguments.length<2)return(t=this.tween(t))&&t._value;if(n==null)return this.tween(t,null);if(typeof n!="function")throw new Error;var a=Gt(e);return this.tween(t,(a.local?k0:x0)(a,n))}function C0(e,n){return function(){ci(this,e).delay=+n.apply(this,arguments)}}function T0(e,n){return n=+n,function(){ci(this,e).delay=n}}function S0(e){var n=this._id;return arguments.length?this.each((typeof e=="function"?C0:T0)(n,e)):Oe(this.node(),n).delay}function I0(e,n){return function(){Fe(this,e).duration=+n.apply(this,arguments)}}function P0(e,n){return n=+n,function(){Fe(this,e).duration=n}}function M0(e){var n=this._id;return arguments.length?this.each((typeof e=="function"?I0:P0)(n,e)):Oe(this.node(),n).duration}function D0(e,n){if(typeof n!="function")throw new Error;return function(){Fe(this,e).ease=n}}function L0(e){var n=this._id;return arguments.length?this.each(D0(n,e)):Oe(this.node(),n).ease}function $0(e,n){return function(){var t=n.apply(this,arguments);if(typeof t!="function")throw new Error;Fe(this,e).ease=t}}function N0(e){if(typeof e!="function")throw new Error;return this.each($0(this._id,e))}function E0(e){typeof e!="function"&&(e=qs(e));for(var n=this._groups,t=n.length,a=new Array(t),o=0;o<t;++o)for(var i=n[o],s=i.length,r=a[o]=[],l,c=0;c<s;++c)(l=i[c])&&e.call(l,l.__data__,c,i)&&r.push(l);return new Ke(a,this._parents,this._name,this._id)}function O0(e){if(e._id!==this._id)throw new Error;for(var n=this._groups,t=e._groups,a=n.length,o=t.length,i=Math.min(a,o),s=new Array(a),r=0;r<i;++r)for(var l=n[r],c=t[r],d=l.length,g=s[r]=new Array(d),u,h=0;h<d;++h)(u=l[h]||c[h])&&(g[h]=u);for(;r<a;++r)s[r]=n[r];return new Ke(s,this._parents,this._name,this._id)}function R0(e){return(e+"").trim().split(/^|\s+/).every(function(n){var t=n.indexOf(".");return t>=0&&(n=n.slice(0,t)),!n||n==="start"})}function z0(e,n,t){var a,o,i=R0(n)?ci:Fe;return function(){var s=i(this,e),r=s.on;r!==a&&(o=(a=r).copy()).on(n,t),s.on=o}}function q0(e,n){var t=this._id;return arguments.length<2?Oe(this.node(),t).on.on(e):this.each(z0(t,e,n))}function V0(e){return function(){var n=this.parentNode;for(var t in this.__transition)if(+t!==e)return;n&&n.removeChild(this)}}function B0(){return this.on("end.remove",V0(this._id))}function F0(e){var n=this._name,t=this._id;typeof e!="function"&&(e=oi(e));for(var a=this._groups,o=a.length,i=new Array(o),s=0;s<o;++s)for(var r=a[s],l=r.length,c=i[s]=new Array(l),d,g,u=0;u<l;++u)(d=r[u])&&(g=e.call(d,d.__data__,u,r))&&("__data__"in d&&(g.__data__=d.__data__),c[u]=g,Yt(c[u],n,t,u,c,Oe(d,t)));return new Ke(i,this._parents,n,t)}function j0(e){var n=this._name,t=this._id;typeof e!="function"&&(e=zs(e));for(var a=this._groups,o=a.length,i=[],s=[],r=0;r<o;++r)for(var l=a[r],c=l.length,d,g=0;g<c;++g)if(d=l[g]){for(var u=e.call(d,d.__data__,g,l),h,v=Oe(d,t),b=0,_=u.length;b<_;++b)(h=u[b])&&Yt(h,n,t,b,u,v);i.push(u),s.push(d)}return new Ke(i,s,n,t)}var U0=Xn.prototype.constructor;function G0(){return new U0(this._groups,this._parents)}function H0(e,n){var t,a,o;return function(){var i=Tn(this,e),s=(this.style.removeProperty(e),Tn(this,e));return i===s?null:i===t&&s===a?o:o=n(t=i,a=s)}}function hr(e){return function(){this.style.removeProperty(e)}}function W0(e,n,t){var a,o=t+"",i;return function(){var s=Tn(this,e);return s===o?null:s===a?i:i=n(a=s,t)}}function K0(e,n,t){var a,o,i;return function(){var s=Tn(this,e),r=t(this),l=r+"";return r==null&&(l=r=(this.style.removeProperty(e),Tn(this,e))),s===l?null:s===a&&l===o?i:(o=l,i=n(a=s,r))}}function Y0(e,n){var t,a,o,i="style."+n,s="end."+i,r;return function(){var l=Fe(this,e),c=l.on,d=l.value[i]==null?r||(r=hr(n)):void 0;(c!==t||o!==d)&&(a=(t=c).copy()).on(s,o=d),l.on=a}}function X0(e,n,t){var a=(e+="")=="transform"?Jf:dr;return n==null?this.styleTween(e,H0(e,a)).on("end.style."+e,hr(e)):typeof n=="function"?this.styleTween(e,K0(e,a,ui(this,"style."+e,n))).each(Y0(this._id,e)):this.styleTween(e,W0(e,a,n),t).on("end.style."+e,null)}function Q0(e,n,t){return function(a){this.style.setProperty(e,n.call(this,a),t)}}function J0(e,n,t){var a,o;function i(){var s=n.apply(this,arguments);return s!==o&&(a=(o=s)&&Q0(e,s,t)),a}return i._value=n,i}function Z0(e,n,t){var a="style."+(e+="");if(arguments.length<2)return(a=this.tween(a))&&a._value;if(n==null)return this.tween(a,null);if(typeof n!="function")throw new Error;return this.tween(a,J0(e,n,t??""))}function ev(e){return function(){this.textContent=e}}function nv(e){return function(){var n=e(this);this.textContent=n??""}}function tv(e){return this.tween("text",typeof e=="function"?nv(ui(this,"text",e)):ev(e==null?"":e+""))}function av(e){return function(n){this.textContent=e.call(this,n)}}function ov(e){var n,t;function a(){var o=e.apply(this,arguments);return o!==t&&(n=(t=o)&&av(o)),n}return a._value=e,a}function iv(e){var n="text";if(arguments.length<1)return(n=this.tween(n))&&n._value;if(e==null)return this.tween(n,null);if(typeof e!="function")throw new Error;return this.tween(n,ov(e))}function sv(){for(var e=this._name,n=this._id,t=pr(),a=this._groups,o=a.length,i=0;i<o;++i)for(var s=a[i],r=s.length,l,c=0;c<r;++c)if(l=s[c]){var d=Oe(l,n);Yt(l,e,t,c,s,{time:d.time+d.delay+d.duration,delay:0,duration:d.duration,ease:d.ease})}return new Ke(a,this._parents,e,t)}function rv(){var e,n,t=this,a=t._id,o=t.size();return new Promise(function(i,s){var r={value:s},l={value:function(){--o===0&&i()}};t.each(function(){var c=Fe(this,a),d=c.on;d!==e&&(n=(e=d).copy(),n._.cancel.push(r),n._.interrupt.push(r),n._.end.push(l)),c.on=n}),o===0&&i()})}var lv=0;function Ke(e,n,t,a){this._groups=e,this._parents=n,this._name=t,this._id=a}function pr(){return++lv}var je=Xn.prototype;Ke.prototype={constructor:Ke,select:F0,selectAll:j0,selectChild:je.selectChild,selectChildren:je.selectChildren,filter:E0,merge:O0,selection:G0,transition:sv,call:je.call,nodes:je.nodes,node:je.node,size:je.size,empty:je.empty,each:je.each,on:q0,attr:y0,attrTween:A0,style:X0,styleTween:Z0,text:tv,textTween:iv,remove:B0,tween:h0,delay:S0,duration:M0,ease:L0,easeVarying:N0,end:rv,[Symbol.iterator]:je[Symbol.iterator]};function cv(e){return((e*=2)<=1?e*e*e:(e-=2)*e*e+2)/2}var uv={time:null,delay:0,duration:250,ease:cv};function dv(e,n){for(var t;!(t=e.__transition)||!(t=t[n]);)if(!(e=e.parentNode))throw new Error(`transition ${n} not found`);return t}function hv(e){var n,t;e instanceof Ke?(n=e._id,e=e._name):(n=pr(),(t=uv).time=ri(),e=e==null?null:e+"");for(var a=this._groups,o=a.length,i=0;i<o;++i)for(var s=a[i],r=s.length,l,c=0;c<r;++c)(l=s[c])&&Yt(l,e,n,c,s,t||dv(l,n));return new Ke(a,this._parents,e,n)}Xn.prototype.interrupt=c0;Xn.prototype.transition=hv;const $a=Math.PI,Na=2*$a,sn=1e-6,pv=Na-sn;function gr(e){this._+=e[0];for(let n=1,t=e.length;n<t;++n)this._+=arguments[n]+e[n]}function gv(e){let n=Math.floor(e);if(!(n>=0))throw new Error(`invalid digits: ${e}`);if(n>15)return gr;const t=10**n;return function(a){this._+=a[0];for(let o=1,i=a.length;o<i;++o)this._+=Math.round(arguments[o]*t)/t+a[o]}}class mv{constructor(n){this._x0=this._y0=this._x1=this._y1=null,this._="",this._append=n==null?gr:gv(n)}moveTo(n,t){this._append`M${this._x0=this._x1=+n},${this._y0=this._y1=+t}`}closePath(){this._x1!==null&&(this._x1=this._x0,this._y1=this._y0,this._append`Z`)}lineTo(n,t){this._append`L${this._x1=+n},${this._y1=+t}`}quadraticCurveTo(n,t,a,o){this._append`Q${+n},${+t},${this._x1=+a},${this._y1=+o}`}bezierCurveTo(n,t,a,o,i,s){this._append`C${+n},${+t},${+a},${+o},${this._x1=+i},${this._y1=+s}`}arcTo(n,t,a,o,i){if(n=+n,t=+t,a=+a,o=+o,i=+i,i<0)throw new Error(`negative radius: ${i}`);let s=this._x1,r=this._y1,l=a-n,c=o-t,d=s-n,g=r-t,u=d*d+g*g;if(this._x1===null)this._append`M${this._x1=n},${this._y1=t}`;else if(u>sn)if(!(Math.abs(g*l-c*d)>sn)||!i)this._append`L${this._x1=n},${this._y1=t}`;else{let h=a-s,v=o-r,b=l*l+c*c,_=h*h+v*v,x=Math.sqrt(b),A=Math.sqrt(u),D=i*Math.tan(($a-Math.acos((b+u-_)/(2*x*A)))/2),y=D/A,T=D/x;Math.abs(y-1)>sn&&this._append`L${n+y*d},${t+y*g}`,this._append`A${i},${i},0,0,${+(g*h>d*v)},${this._x1=n+T*l},${this._y1=t+T*c}`}}arc(n,t,a,o,i,s){if(n=+n,t=+t,a=+a,s=!!s,a<0)throw new Error(`negative radius: ${a}`);let r=a*Math.cos(o),l=a*Math.sin(o),c=n+r,d=t+l,g=1^s,u=s?o-i:i-o;this._x1===null?this._append`M${c},${d}`:(Math.abs(this._x1-c)>sn||Math.abs(this._y1-d)>sn)&&this._append`L${c},${d}`,a&&(u<0&&(u=u%Na+Na),u>pv?this._append`A${a},${a},0,1,${g},${n-r},${t-l}A${a},${a},0,1,${g},${this._x1=c},${this._y1=d}`:u>sn&&this._append`A${a},${a},0,${+(u>=$a)},${g},${this._x1=n+a*Math.cos(i)},${this._y1=t+a*Math.sin(i)}`)}rect(n,t,a,o){this._append`M${this._x0=this._x1=+n},${this._y0=this._y1=+t}h${a=+a}v${+o}h${-a}Z`}toString(){return this._}}function fv(e,n){var t,a=1;e==null&&(e=0),n==null&&(n=0);function o(){var i,s=t.length,r,l=0,c=0;for(i=0;i<s;++i)r=t[i],l+=r.x,c+=r.y;for(l=(l/s-e)*a,c=(c/s-n)*a,i=0;i<s;++i)r=t[i],r.x-=l,r.y-=c}return o.initialize=function(i){t=i},o.x=function(i){return arguments.length?(e=+i,o):e},o.y=function(i){return arguments.length?(n=+i,o):n},o.strength=function(i){return arguments.length?(a=+i,o):a},o}function vv(e){const n=+this._x.call(null,e),t=+this._y.call(null,e);return mr(this.cover(n,t),n,t,e)}function mr(e,n,t,a){if(isNaN(n)||isNaN(t))return e;var o,i=e._root,s={data:a},r=e._x0,l=e._y0,c=e._x1,d=e._y1,g,u,h,v,b,_,x,A;if(!i)return e._root=s,e;for(;i.length;)if((b=n>=(g=(r+c)/2))?r=g:c=g,(_=t>=(u=(l+d)/2))?l=u:d=u,o=i,!(i=i[x=_<<1|b]))return o[x]=s,e;if(h=+e._x.call(null,i.data),v=+e._y.call(null,i.data),n===h&&t===v)return s.next=i,o?o[x]=s:e._root=s,e;do o=o?o[x]=new Array(4):e._root=new Array(4),(b=n>=(g=(r+c)/2))?r=g:c=g,(_=t>=(u=(l+d)/2))?l=u:d=u;while((x=_<<1|b)===(A=(v>=u)<<1|h>=g));return o[A]=i,o[x]=s,e}function bv(e){var n,t,a=e.length,o,i,s=new Array(a),r=new Array(a),l=1/0,c=1/0,d=-1/0,g=-1/0;for(t=0;t<a;++t)isNaN(o=+this._x.call(null,n=e[t]))||isNaN(i=+this._y.call(null,n))||(s[t]=o,r[t]=i,o<l&&(l=o),o>d&&(d=o),i<c&&(c=i),i>g&&(g=i));if(l>d||c>g)return this;for(this.cover(l,c).cover(d,g),t=0;t<a;++t)mr(this,s[t],r[t],e[t]);return this}function yv(e,n){if(isNaN(e=+e)||isNaN(n=+n))return this;var t=this._x0,a=this._y0,o=this._x1,i=this._y1;if(isNaN(t))o=(t=Math.floor(e))+1,i=(a=Math.floor(n))+1;else{for(var s=o-t||1,r=this._root,l,c;t>e||e>=o||a>n||n>=i;)switch(c=(n<a)<<1|e<t,l=new Array(4),l[c]=r,r=l,s*=2,c){case 0:o=t+s,i=a+s;break;case 1:t=o-s,i=a+s;break;case 2:o=t+s,a=i-s;break;case 3:t=o-s,a=i-s;break}this._root&&this._root.length&&(this._root=r)}return this._x0=t,this._y0=a,this._x1=o,this._y1=i,this}function _v(){var e=[];return this.visit(function(n){if(!n.length)do e.push(n.data);while(n=n.next)}),e}function wv(e){return arguments.length?this.cover(+e[0][0],+e[0][1]).cover(+e[1][0],+e[1][1]):isNaN(this._x0)?void 0:[[this._x0,this._y0],[this._x1,this._y1]]}function we(e,n,t,a,o){this.node=e,this.x0=n,this.y0=t,this.x1=a,this.y1=o}function kv(e,n,t){var a,o=this._x0,i=this._y0,s,r,l,c,d=this._x1,g=this._y1,u=[],h=this._root,v,b;for(h&&u.push(new we(h,o,i,d,g)),t==null?t=1/0:(o=e-t,i=n-t,d=e+t,g=n+t,t*=t);v=u.pop();)if(!(!(h=v.node)||(s=v.x0)>d||(r=v.y0)>g||(l=v.x1)<o||(c=v.y1)<i))if(h.length){var _=(s+l)/2,x=(r+c)/2;u.push(new we(h[3],_,x,l,c),new we(h[2],s,x,_,c),new we(h[1],_,r,l,x),new we(h[0],s,r,_,x)),(b=(n>=x)<<1|e>=_)&&(v=u[u.length-1],u[u.length-1]=u[u.length-1-b],u[u.length-1-b]=v)}else{var A=e-+this._x.call(null,h.data),D=n-+this._y.call(null,h.data),y=A*A+D*D;if(y<t){var T=Math.sqrt(t=y);o=e-T,i=n-T,d=e+T,g=n+T,a=h.data}}return a}function xv(e){if(isNaN(d=+this._x.call(null,e))||isNaN(g=+this._y.call(null,e)))return this;var n,t=this._root,a,o,i,s=this._x0,r=this._y0,l=this._x1,c=this._y1,d,g,u,h,v,b,_,x;if(!t)return this;if(t.length)for(;;){if((v=d>=(u=(s+l)/2))?s=u:l=u,(b=g>=(h=(r+c)/2))?r=h:c=h,n=t,!(t=t[_=b<<1|v]))return this;if(!t.length)break;(n[_+1&3]||n[_+2&3]||n[_+3&3])&&(a=n,x=_)}for(;t.data!==e;)if(o=t,!(t=t.next))return this;return(i=t.next)&&delete t.next,o?(i?o.next=i:delete o.next,this):n?(i?n[_]=i:delete n[_],(t=n[0]||n[1]||n[2]||n[3])&&t===(n[3]||n[2]||n[1]||n[0])&&!t.length&&(a?a[x]=t:this._root=t),this):(this._root=i,this)}function Av(e){for(var n=0,t=e.length;n<t;++n)this.remove(e[n]);return this}function Cv(){return this._root}function Tv(){var e=0;return this.visit(function(n){if(!n.length)do++e;while(n=n.next)}),e}function Sv(e){var n=[],t,a=this._root,o,i,s,r,l;for(a&&n.push(new we(a,this._x0,this._y0,this._x1,this._y1));t=n.pop();)if(!e(a=t.node,i=t.x0,s=t.y0,r=t.x1,l=t.y1)&&a.length){var c=(i+r)/2,d=(s+l)/2;(o=a[3])&&n.push(new we(o,c,d,r,l)),(o=a[2])&&n.push(new we(o,i,d,c,l)),(o=a[1])&&n.push(new we(o,c,s,r,d)),(o=a[0])&&n.push(new we(o,i,s,c,d))}return this}function Iv(e){var n=[],t=[],a;for(this._root&&n.push(new we(this._root,this._x0,this._y0,this._x1,this._y1));a=n.pop();){var o=a.node;if(o.length){var i,s=a.x0,r=a.y0,l=a.x1,c=a.y1,d=(s+l)/2,g=(r+c)/2;(i=o[0])&&n.push(new we(i,s,r,d,g)),(i=o[1])&&n.push(new we(i,d,r,l,g)),(i=o[2])&&n.push(new we(i,s,g,d,c)),(i=o[3])&&n.push(new we(i,d,g,l,c))}t.push(a)}for(;a=t.pop();)e(a.node,a.x0,a.y0,a.x1,a.y1);return this}function Pv(e){return e[0]}function Mv(e){return arguments.length?(this._x=e,this):this._x}function Dv(e){return e[1]}function Lv(e){return arguments.length?(this._y=e,this):this._y}function di(e,n,t){var a=new hi(n??Pv,t??Dv,NaN,NaN,NaN,NaN);return e==null?a:a.addAll(e)}function hi(e,n,t,a,o,i){this._x=e,this._y=n,this._x0=t,this._y0=a,this._x1=o,this._y1=i,this._root=void 0}function Wi(e){for(var n={data:e.data},t=n;e=e.next;)t=t.next={data:e.data};return n}var xe=di.prototype=hi.prototype;xe.copy=function(){var e=new hi(this._x,this._y,this._x0,this._y0,this._x1,this._y1),n=this._root,t,a;if(!n)return e;if(!n.length)return e._root=Wi(n),e;for(t=[{source:n,target:e._root=new Array(4)}];n=t.pop();)for(var o=0;o<4;++o)(a=n.source[o])&&(a.length?t.push({source:a,target:n.target[o]=new Array(4)}):n.target[o]=Wi(a));return e};xe.add=vv;xe.addAll=bv;xe.cover=yv;xe.data=_v;xe.extent=wv;xe.find=kv;xe.remove=xv;xe.removeAll=Av;xe.root=Cv;xe.size=Tv;xe.visit=Sv;xe.visitAfter=Iv;xe.x=Mv;xe.y=Lv;function ke(e){return function(){return e}}function Ze(e){return(e()-.5)*1e-6}function $v(e){return e.x+e.vx}function Nv(e){return e.y+e.vy}function Ev(e){var n,t,a,o=1,i=1;typeof e!="function"&&(e=ke(e==null?1:+e));function s(){for(var c,d=n.length,g,u,h,v,b,_,x=0;x<i;++x)for(g=di(n,$v,Nv).visitAfter(r),c=0;c<d;++c)u=n[c],b=t[u.index],_=b*b,h=u.x+u.vx,v=u.y+u.vy,g.visit(A);function A(D,y,T,k,E){var B=D.data,W=D.r,F=b+W;if(B){if(B.index>u.index){var $=h-B.x-B.vx,M=v-B.y-B.vy,L=$*$+M*M;L<F*F&&($===0&&($=Ze(a),L+=$*$),M===0&&(M=Ze(a),L+=M*M),L=(F-(L=Math.sqrt(L)))/L*o,u.vx+=($*=L)*(F=(W*=W)/(_+W)),u.vy+=(M*=L)*F,B.vx-=$*(F=1-F),B.vy-=M*F)}return}return y>h+F||k<h-F||T>v+F||E<v-F}}function r(c){if(c.data)return c.r=t[c.data.index];for(var d=c.r=0;d<4;++d)c[d]&&c[d].r>c.r&&(c.r=c[d].r)}function l(){if(n){var c,d=n.length,g;for(t=new Array(d),c=0;c<d;++c)g=n[c],t[g.index]=+e(g,c,n)}}return s.initialize=function(c,d){n=c,a=d,l()},s.iterations=function(c){return arguments.length?(i=+c,s):i},s.strength=function(c){return arguments.length?(o=+c,s):o},s.radius=function(c){return arguments.length?(e=typeof c=="function"?c:ke(+c),l(),s):e},s}function Ov(e){return e.index}function Ki(e,n){var t=e.get(n);if(!t)throw new Error("node not found: "+n);return t}function Rv(e){var n=Ov,t=g,a,o=ke(30),i,s,r,l,c,d=1;e==null&&(e=[]);function g(_){return 1/Math.min(r[_.source.index],r[_.target.index])}function u(_){for(var x=0,A=e.length;x<d;++x)for(var D=0,y,T,k,E,B,W,F;D<A;++D)y=e[D],T=y.source,k=y.target,E=k.x+k.vx-T.x-T.vx||Ze(c),B=k.y+k.vy-T.y-T.vy||Ze(c),W=Math.sqrt(E*E+B*B),W=(W-i[D])/W*_*a[D],E*=W,B*=W,k.vx-=E*(F=l[D]),k.vy-=B*F,T.vx+=E*(F=1-F),T.vy+=B*F}function h(){if(s){var _,x=s.length,A=e.length,D=new Map(s.map((T,k)=>[n(T,k,s),T])),y;for(_=0,r=new Array(x);_<A;++_)y=e[_],y.index=_,typeof y.source!="object"&&(y.source=Ki(D,y.source)),typeof y.target!="object"&&(y.target=Ki(D,y.target)),r[y.source.index]=(r[y.source.index]||0)+1,r[y.target.index]=(r[y.target.index]||0)+1;for(_=0,l=new Array(A);_<A;++_)y=e[_],l[_]=r[y.source.index]/(r[y.source.index]+r[y.target.index]);a=new Array(A),v(),i=new Array(A),b()}}function v(){if(s)for(var _=0,x=e.length;_<x;++_)a[_]=+t(e[_],_,e)}function b(){if(s)for(var _=0,x=e.length;_<x;++_)i[_]=+o(e[_],_,e)}return u.initialize=function(_,x){s=_,c=x,h()},u.links=function(_){return arguments.length?(e=_,h(),u):e},u.id=function(_){return arguments.length?(n=_,u):n},u.iterations=function(_){return arguments.length?(d=+_,u):d},u.strength=function(_){return arguments.length?(t=typeof _=="function"?_:ke(+_),v(),u):t},u.distance=function(_){return arguments.length?(o=typeof _=="function"?_:ke(+_),b(),u):o},u}const zv=1664525,qv=1013904223,Yi=4294967296;function Vv(){let e=1;return()=>(e=(zv*e+qv)%Yi)/Yi}function Bv(e){return e.x}function Fv(e){return e.y}var jv=10,Uv=Math.PI*(3-Math.sqrt(5));function Gv(e){var n,t=1,a=.001,o=1-Math.pow(a,1/300),i=0,s=.6,r=new Map,l=li(g),c=Ut("tick","end"),d=Vv();e==null&&(e=[]);function g(){u(),c.call("tick",n),t<a&&(l.stop(),c.call("end",n))}function u(b){var _,x=e.length,A;b===void 0&&(b=1);for(var D=0;D<b;++D)for(t+=(i-t)*o,r.forEach(function(y){y(t)}),_=0;_<x;++_)A=e[_],A.fx==null?A.x+=A.vx*=s:(A.x=A.fx,A.vx=0),A.fy==null?A.y+=A.vy*=s:(A.y=A.fy,A.vy=0);return n}function h(){for(var b=0,_=e.length,x;b<_;++b){if(x=e[b],x.index=b,x.fx!=null&&(x.x=x.fx),x.fy!=null&&(x.y=x.fy),isNaN(x.x)||isNaN(x.y)){var A=jv*Math.sqrt(.5+b),D=b*Uv;x.x=A*Math.cos(D),x.y=A*Math.sin(D)}(isNaN(x.vx)||isNaN(x.vy))&&(x.vx=x.vy=0)}}function v(b){return b.initialize&&b.initialize(e,d),b}return h(),n={tick:u,restart:function(){return l.restart(g),n},stop:function(){return l.stop(),n},nodes:function(b){return arguments.length?(e=b,h(),r.forEach(v),n):e},alpha:function(b){return arguments.length?(t=+b,n):t},alphaMin:function(b){return arguments.length?(a=+b,n):a},alphaDecay:function(b){return arguments.length?(o=+b,n):+o},alphaTarget:function(b){return arguments.length?(i=+b,n):i},velocityDecay:function(b){return arguments.length?(s=1-b,n):1-s},randomSource:function(b){return arguments.length?(d=b,r.forEach(v),n):d},force:function(b,_){return arguments.length>1?(_==null?r.delete(b):r.set(b,v(_)),n):r.get(b)},find:function(b,_,x){var A=0,D=e.length,y,T,k,E,B;for(x==null?x=1/0:x*=x,A=0;A<D;++A)E=e[A],y=b-E.x,T=_-E.y,k=y*y+T*T,k<x&&(B=E,x=k);return B},on:function(b,_){return arguments.length>1?(c.on(b,_),n):c.on(b)}}}function Hv(){var e,n,t,a,o=ke(-30),i,s=1,r=1/0,l=.81;function c(h){var v,b=e.length,_=di(e,Bv,Fv).visitAfter(g);for(a=h,v=0;v<b;++v)n=e[v],_.visit(u)}function d(){if(e){var h,v=e.length,b;for(i=new Array(v),h=0;h<v;++h)b=e[h],i[b.index]=+o(b,h,e)}}function g(h){var v=0,b,_,x=0,A,D,y;if(h.length){for(A=D=y=0;y<4;++y)(b=h[y])&&(_=Math.abs(b.value))&&(v+=b.value,x+=_,A+=_*b.x,D+=_*b.y);h.x=A/x,h.y=D/x}else{b=h,b.x=b.data.x,b.y=b.data.y;do v+=i[b.data.index];while(b=b.next)}h.value=v}function u(h,v,b,_){if(!h.value)return!0;var x=h.x-n.x,A=h.y-n.y,D=_-v,y=x*x+A*A;if(D*D/l<y)return y<r&&(x===0&&(x=Ze(t),y+=x*x),A===0&&(A=Ze(t),y+=A*A),y<s&&(y=Math.sqrt(s*y)),n.vx+=x*h.value*a/y,n.vy+=A*h.value*a/y),!0;if(h.length||y>=r)return;(h.data!==n||h.next)&&(x===0&&(x=Ze(t),y+=x*x),A===0&&(A=Ze(t),y+=A*A),y<s&&(y=Math.sqrt(s*y)));do h.data!==n&&(D=i[h.data.index]*a/y,n.vx+=x*D,n.vy+=A*D);while(h=h.next)}return c.initialize=function(h,v){e=h,t=v,d()},c.strength=function(h){return arguments.length?(o=typeof h=="function"?h:ke(+h),d(),c):o},c.distanceMin=function(h){return arguments.length?(s=h*h,c):Math.sqrt(s)},c.distanceMax=function(h){return arguments.length?(r=h*h,c):Math.sqrt(r)},c.theta=function(h){return arguments.length?(l=h*h,c):Math.sqrt(l)},c}function Wv(e){var n=ke(.1),t,a,o;typeof e!="function"&&(e=ke(e==null?0:+e));function i(r){for(var l=0,c=t.length,d;l<c;++l)d=t[l],d.vx+=(o[l]-d.x)*a[l]*r}function s(){if(t){var r,l=t.length;for(a=new Array(l),o=new Array(l),r=0;r<l;++r)a[r]=isNaN(o[r]=+e(t[r],r,t))?0:+n(t[r],r,t)}}return i.initialize=function(r){t=r,s()},i.strength=function(r){return arguments.length?(n=typeof r=="function"?r:ke(+r),s(),i):n},i.x=function(r){return arguments.length?(e=typeof r=="function"?r:ke(+r),s(),i):e},i}function Kv(e){var n=ke(.1),t,a,o;typeof e!="function"&&(e=ke(e==null?0:+e));function i(r){for(var l=0,c=t.length,d;l<c;++l)d=t[l],d.vy+=(o[l]-d.y)*a[l]*r}function s(){if(t){var r,l=t.length;for(a=new Array(l),o=new Array(l),r=0;r<l;++r)a[r]=isNaN(o[r]=+e(t[r],r,t))?0:+n(t[r],r,t)}}return i.initialize=function(r){t=r,s()},i.strength=function(r){return arguments.length?(n=typeof r=="function"?r:ke(+r),s(),i):n},i.y=function(r){return arguments.length?(e=typeof r=="function"?r:ke(+r),s(),i):e},i}function Yv(e){return Math.abs(e=Math.round(e))>=1e21?e.toLocaleString("en").replace(/,/g,""):e.toString(10)}function xt(e,n){if(!isFinite(e)||e===0)return null;var t=(e=n?e.toExponential(n-1):e.toExponential()).indexOf("e"),a=e.slice(0,t);return[a.length>1?a[0]+a.slice(2):a,+e.slice(t+1)]}function In(e){return e=xt(Math.abs(e)),e?e[1]:NaN}function Xv(e,n){return function(t,a){for(var o=t.length,i=[],s=0,r=e[0],l=0;o>0&&r>0&&(l+r+1>a&&(r=Math.max(1,a-l)),i.push(t.substring(o-=r,o+r)),!((l+=r+1)>a));)r=e[s=(s+1)%e.length];return i.reverse().join(n)}}function Qv(e){return function(n){return n.replace(/[0-9]/g,function(t){return e[+t]})}}var Jv=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;function At(e){if(!(n=Jv.exec(e)))throw new Error("invalid format: "+e);var n;return new pi({fill:n[1],align:n[2],sign:n[3],symbol:n[4],zero:n[5],width:n[6],comma:n[7],precision:n[8]&&n[8].slice(1),trim:n[9],type:n[10]})}At.prototype=pi.prototype;function pi(e){this.fill=e.fill===void 0?" ":e.fill+"",this.align=e.align===void 0?">":e.align+"",this.sign=e.sign===void 0?"-":e.sign+"",this.symbol=e.symbol===void 0?"":e.symbol+"",this.zero=!!e.zero,this.width=e.width===void 0?void 0:+e.width,this.comma=!!e.comma,this.precision=e.precision===void 0?void 0:+e.precision,this.trim=!!e.trim,this.type=e.type===void 0?"":e.type+""}pi.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(this.width===void 0?"":Math.max(1,this.width|0))+(this.comma?",":"")+(this.precision===void 0?"":"."+Math.max(0,this.precision|0))+(this.trim?"~":"")+this.type};function Zv(e){e:for(var n=e.length,t=1,a=-1,o;t<n;++t)switch(e[t]){case".":a=o=t;break;case"0":a===0&&(a=t),o=t;break;default:if(!+e[t])break e;a>0&&(a=0);break}return a>0?e.slice(0,a)+e.slice(o+1):e}var Ct;function eb(e,n){var t=xt(e,n);if(!t)return Ct=void 0,e.toPrecision(n);var a=t[0],o=t[1],i=o-(Ct=Math.max(-8,Math.min(8,Math.floor(o/3)))*3)+1,s=a.length;return i===s?a:i>s?a+new Array(i-s+1).join("0"):i>0?a.slice(0,i)+"."+a.slice(i):"0."+new Array(1-i).join("0")+xt(e,Math.max(0,n+i-1))[0]}function Xi(e,n){var t=xt(e,n);if(!t)return e+"";var a=t[0],o=t[1];return o<0?"0."+new Array(-o).join("0")+a:a.length>o+1?a.slice(0,o+1)+"."+a.slice(o+1):a+new Array(o-a.length+2).join("0")}const Qi={"%":(e,n)=>(e*100).toFixed(n),b:e=>Math.round(e).toString(2),c:e=>e+"",d:Yv,e:(e,n)=>e.toExponential(n),f:(e,n)=>e.toFixed(n),g:(e,n)=>e.toPrecision(n),o:e=>Math.round(e).toString(8),p:(e,n)=>Xi(e*100,n),r:Xi,s:eb,X:e=>Math.round(e).toString(16).toUpperCase(),x:e=>Math.round(e).toString(16)};function Ji(e){return e}var Zi=Array.prototype.map,es=["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];function nb(e){var n=e.grouping===void 0||e.thousands===void 0?Ji:Xv(Zi.call(e.grouping,Number),e.thousands+""),t=e.currency===void 0?"":e.currency[0]+"",a=e.currency===void 0?"":e.currency[1]+"",o=e.decimal===void 0?".":e.decimal+"",i=e.numerals===void 0?Ji:Qv(Zi.call(e.numerals,String)),s=e.percent===void 0?"%":e.percent+"",r=e.minus===void 0?"−":e.minus+"",l=e.nan===void 0?"NaN":e.nan+"";function c(g,u){g=At(g);var h=g.fill,v=g.align,b=g.sign,_=g.symbol,x=g.zero,A=g.width,D=g.comma,y=g.precision,T=g.trim,k=g.type;k==="n"?(D=!0,k="g"):Qi[k]||(y===void 0&&(y=12),T=!0,k="g"),(x||h==="0"&&v==="=")&&(x=!0,h="0",v="=");var E=(u&&u.prefix!==void 0?u.prefix:"")+(_==="$"?t:_==="#"&&/[boxX]/.test(k)?"0"+k.toLowerCase():""),B=(_==="$"?a:/[%p]/.test(k)?s:"")+(u&&u.suffix!==void 0?u.suffix:""),W=Qi[k],F=/[defgprs%]/.test(k);y=y===void 0?6:/[gprs]/.test(k)?Math.max(1,Math.min(21,y)):Math.max(0,Math.min(20,y));function $(M){var L=E,z=B,te,ee,K;if(k==="c")z=W(M)+z,M="";else{M=+M;var re=M<0||1/M<0;if(M=isNaN(M)?l:W(Math.abs(M),y),T&&(M=Zv(M)),re&&+M==0&&b!=="+"&&(re=!1),L=(re?b==="("?b:r:b==="-"||b==="("?"":b)+L,z=(k==="s"&&!isNaN(M)&&Ct!==void 0?es[8+Ct/3]:"")+z+(re&&b==="("?")":""),F){for(te=-1,ee=M.length;++te<ee;)if(K=M.charCodeAt(te),48>K||K>57){z=(K===46?o+M.slice(te+1):M.slice(te))+z,M=M.slice(0,te);break}}}D&&!x&&(M=n(M,1/0));var de=L.length+M.length+z.length,ue=de<A?new Array(A-de+1).join(h):"";switch(D&&x&&(M=n(ue+M,ue.length?A-z.length:1/0),ue=""),v){case"<":M=L+M+z+ue;break;case"=":M=L+ue+M+z;break;case"^":M=ue.slice(0,de=ue.length>>1)+L+M+z+ue.slice(de);break;default:M=ue+L+M+z;break}return i(M)}return $.toString=function(){return g+""},$}function d(g,u){var h=Math.max(-8,Math.min(8,Math.floor(In(u)/3)))*3,v=Math.pow(10,-h),b=c((g=At(g),g.type="f",g),{suffix:es[8+h/3]});return function(_){return b(v*_)}}return{format:c,formatPrefix:d}}var ot,fr,vr;tb({thousands:",",grouping:[3],currency:["$",""]});function tb(e){return ot=nb(e),fr=ot.format,vr=ot.formatPrefix,ot}function ab(e){return Math.max(0,-In(Math.abs(e)))}function ob(e,n){return Math.max(0,Math.max(-8,Math.min(8,Math.floor(In(n)/3)))*3-In(Math.abs(e)))}function ib(e,n){return e=Math.abs(e),n=Math.abs(n)-e,Math.max(0,In(n)-In(e))+1}function sb(e){var n=0,t=e.children,a=t&&t.length;if(!a)n=1;else for(;--a>=0;)n+=t[a].value;e.value=n}function rb(){return this.eachAfter(sb)}function lb(e,n){let t=-1;for(const a of this)e.call(n,a,++t,this);return this}function cb(e,n){for(var t=this,a=[t],o,i,s=-1;t=a.pop();)if(e.call(n,t,++s,this),o=t.children)for(i=o.length-1;i>=0;--i)a.push(o[i]);return this}function ub(e,n){for(var t=this,a=[t],o=[],i,s,r,l=-1;t=a.pop();)if(o.push(t),i=t.children)for(s=0,r=i.length;s<r;++s)a.push(i[s]);for(;t=o.pop();)e.call(n,t,++l,this);return this}function db(e,n){let t=-1;for(const a of this)if(e.call(n,a,++t,this))return a}function hb(e){return this.eachAfter(function(n){for(var t=+e(n.data)||0,a=n.children,o=a&&a.length;--o>=0;)t+=a[o].value;n.value=t})}function pb(e){return this.eachBefore(function(n){n.children&&n.children.sort(e)})}function gb(e){for(var n=this,t=mb(n,e),a=[n];n!==t;)n=n.parent,a.push(n);for(var o=a.length;e!==t;)a.splice(o,0,e),e=e.parent;return a}function mb(e,n){if(e===n)return e;var t=e.ancestors(),a=n.ancestors(),o=null;for(e=t.pop(),n=a.pop();e===n;)o=e,e=t.pop(),n=a.pop();return o}function fb(){for(var e=this,n=[e];e=e.parent;)n.push(e);return n}function vb(){return Array.from(this)}function bb(){var e=[];return this.eachBefore(function(n){n.children||e.push(n)}),e}function yb(){var e=this,n=[];return e.each(function(t){t!==e&&n.push({source:t.parent,target:t})}),n}function*_b(){var e=this,n,t=[e],a,o,i;do for(n=t.reverse(),t=[];e=n.pop();)if(yield e,a=e.children)for(o=0,i=a.length;o<i;++o)t.push(a[o]);while(t.length)}function br(e,n){e instanceof Map?(e=[void 0,e],n===void 0&&(n=xb)):n===void 0&&(n=kb);for(var t=new Tt(e),a,o=[t],i,s,r,l;a=o.pop();)if((s=n(a.data))&&(l=(s=Array.from(s)).length))for(a.children=s,r=l-1;r>=0;--r)o.push(i=s[r]=new Tt(s[r])),i.parent=a,i.depth=a.depth+1;return t.eachBefore(Cb)}function wb(){return br(this).eachBefore(Ab)}function kb(e){return e.children}function xb(e){return Array.isArray(e)?e[1]:null}function Ab(e){e.data.value!==void 0&&(e.value=e.data.value),e.data=e.data.data}function Cb(e){var n=0;do e.height=n;while((e=e.parent)&&e.height<++n)}function Tt(e){this.data=e,this.depth=this.height=0,this.parent=null}Tt.prototype=br.prototype={constructor:Tt,count:rb,each:lb,eachAfter:ub,eachBefore:cb,find:db,sum:hb,sort:pb,path:gb,ancestors:fb,descendants:vb,leaves:bb,links:yb,copy:wb,[Symbol.iterator]:_b};function Tb(e){if(typeof e!="function")throw new Error;return e}function Ln(){return 0}function $n(e){return function(){return e}}function Sb(e){e.x0=Math.round(e.x0),e.y0=Math.round(e.y0),e.x1=Math.round(e.x1),e.y1=Math.round(e.y1)}function Ib(e,n,t,a,o){for(var i=e.children,s,r=-1,l=i.length,c=e.value&&(a-n)/e.value;++r<l;)s=i[r],s.y0=t,s.y1=o,s.x0=n,s.x1=n+=s.value*c}function Pb(e,n,t,a,o){for(var i=e.children,s,r=-1,l=i.length,c=e.value&&(o-t)/e.value;++r<l;)s=i[r],s.x0=n,s.x1=a,s.y0=t,s.y1=t+=s.value*c}var Mb=(1+Math.sqrt(5))/2;function Db(e,n,t,a,o,i){for(var s=[],r=n.children,l,c,d=0,g=0,u=r.length,h,v,b=n.value,_,x,A,D,y,T,k;d<u;){h=o-t,v=i-a;do _=r[g++].value;while(!_&&g<u);for(x=A=_,T=Math.max(v/h,h/v)/(b*e),k=_*_*T,y=Math.max(A/k,k/x);g<u;++g){if(_+=c=r[g].value,c<x&&(x=c),c>A&&(A=c),k=_*_*T,D=Math.max(A/k,k/x),D>y){_-=c;break}y=D}s.push(l={value:_,dice:h<v,children:r.slice(d,g)}),l.dice?Ib(l,t,a,o,b?a+=v*_/b:i):Pb(l,t,a,b?t+=h*_/b:o,i),b-=_,d=g}return s}const Lb=function e(n){function t(a,o,i,s,r){Db(n,a,o,i,s,r)}return t.ratio=function(a){return e((a=+a)>1?a:1)},t}(Mb);function ak(){var e=Lb,n=!1,t=1,a=1,o=[0],i=Ln,s=Ln,r=Ln,l=Ln,c=Ln;function d(u){return u.x0=u.y0=0,u.x1=t,u.y1=a,u.eachBefore(g),o=[0],n&&u.eachBefore(Sb),u}function g(u){var h=o[u.depth],v=u.x0+h,b=u.y0+h,_=u.x1-h,x=u.y1-h;_<v&&(v=_=(v+_)/2),x<b&&(b=x=(b+x)/2),u.x0=v,u.y0=b,u.x1=_,u.y1=x,u.children&&(h=o[u.depth+1]=i(u)/2,v+=c(u)-h,b+=s(u)-h,_-=r(u)-h,x-=l(u)-h,_<v&&(v=_=(v+_)/2),x<b&&(b=x=(b+x)/2),e(u,v,b,_,x))}return d.round=function(u){return arguments.length?(n=!!u,d):n},d.size=function(u){return arguments.length?(t=+u[0],a=+u[1],d):[t,a]},d.tile=function(u){return arguments.length?(e=Tb(u),d):e},d.padding=function(u){return arguments.length?d.paddingInner(u).paddingOuter(u):d.paddingInner()},d.paddingInner=function(u){return arguments.length?(i=typeof u=="function"?u:$n(+u),d):i},d.paddingOuter=function(u){return arguments.length?d.paddingTop(u).paddingRight(u).paddingBottom(u).paddingLeft(u):d.paddingTop()},d.paddingTop=function(u){return arguments.length?(s=typeof u=="function"?u:$n(+u),d):s},d.paddingRight=function(u){return arguments.length?(r=typeof u=="function"?u:$n(+u),d):r},d.paddingBottom=function(u){return arguments.length?(l=typeof u=="function"?u:$n(+u),d):l},d.paddingLeft=function(u){return arguments.length?(c=typeof u=="function"?u:$n(+u),d):c},d}function Xt(e,n){switch(arguments.length){case 0:break;case 1:this.range(e);break;default:this.range(n).domain(e);break}return this}const ns=Symbol("implicit");function yr(){var e=new Ii,n=[],t=[],a=ns;function o(i){let s=e.get(i);if(s===void 0){if(a!==ns)return a;e.set(i,s=n.push(i)-1)}return t[s%t.length]}return o.domain=function(i){if(!arguments.length)return n.slice();n=[],e=new Ii;for(const s of i)e.has(s)||e.set(s,n.push(s)-1);return o},o.range=function(i){return arguments.length?(t=Array.from(i),o):t.slice()},o.unknown=function(i){return arguments.length?(a=i,o):a},o.copy=function(){return yr(n,t).unknown(a)},Xt.apply(o,arguments),o}function $b(){var e=yr().unknown(void 0),n=e.domain,t=e.range,a=0,o=1,i,s,r=!1,l=0,c=0,d=.5;delete e.unknown;function g(){var u=n().length,h=o<a,v=h?o:a,b=h?a:o;i=(b-v)/Math.max(1,u-l+c*2),r&&(i=Math.floor(i)),v+=(b-v-i*(u-l))*d,s=i*(1-l),r&&(v=Math.round(v),s=Math.round(s));var _=Cg(u).map(function(x){return v+i*x});return t(h?_.reverse():_)}return e.domain=function(u){return arguments.length?(n(u),g()):n()},e.range=function(u){return arguments.length?([a,o]=u,a=+a,o=+o,g()):[a,o]},e.rangeRound=function(u){return[a,o]=u,a=+a,o=+o,r=!0,g()},e.bandwidth=function(){return s},e.step=function(){return i},e.round=function(u){return arguments.length?(r=!!u,g()):r},e.padding=function(u){return arguments.length?(l=Math.min(1,c=+u),g()):l},e.paddingInner=function(u){return arguments.length?(l=Math.min(1,u),g()):l},e.paddingOuter=function(u){return arguments.length?(c=+u,g()):c},e.align=function(u){return arguments.length?(d=Math.max(0,Math.min(1,u)),g()):d},e.copy=function(){return $b(n(),[a,o]).round(r).paddingInner(l).paddingOuter(c).align(d)},Xt.apply(g(),arguments)}function Nb(e){return function(){return e}}function Eb(e){return+e}var ts=[0,1];function _n(e){return e}function Ea(e,n){return(n-=e=+e)?function(t){return(t-e)/n}:Nb(isNaN(n)?NaN:.5)}function Ob(e,n){var t;return e>n&&(t=e,e=n,n=t),function(a){return Math.max(e,Math.min(n,a))}}function Rb(e,n,t){var a=e[0],o=e[1],i=n[0],s=n[1];return o<a?(a=Ea(o,a),i=t(s,i)):(a=Ea(a,o),i=t(i,s)),function(r){return i(a(r))}}function zb(e,n,t){var a=Math.min(e.length,n.length)-1,o=new Array(a),i=new Array(a),s=-1;for(e[a]<e[0]&&(e=e.slice().reverse(),n=n.slice().reverse());++s<a;)o[s]=Ea(e[s],e[s+1]),i[s]=t(n[s],n[s+1]);return function(r){var l=vg(e,r,1,a)-1;return i[l](o[l](r))}}function _r(e,n){return n.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown())}function qb(){var e=ts,n=ts,t=si,a,o,i,s=_n,r,l,c;function d(){var u=Math.min(e.length,n.length);return s!==_n&&(s=Ob(e[0],e[u-1])),r=u>2?zb:Rb,l=c=null,g}function g(u){return u==null||isNaN(u=+u)?i:(l||(l=r(e.map(a),n,t)))(a(s(u)))}return g.invert=function(u){return s(o((c||(c=r(n,e.map(a),$e)))(u)))},g.domain=function(u){return arguments.length?(e=Array.from(u,Eb),d()):e.slice()},g.range=function(u){return arguments.length?(n=Array.from(u),d()):n.slice()},g.rangeRound=function(u){return n=Array.from(u),t=Yf,d()},g.clamp=function(u){return arguments.length?(s=u?!0:_n,d()):s!==_n},g.interpolate=function(u){return arguments.length?(t=u,d()):t},g.unknown=function(u){return arguments.length?(i=u,g):i},function(u,h){return a=u,o=h,d()}}function wr(){return qb()(_n,_n)}function Vb(e,n,t,a){var o=ka(e,n,t),i;switch(a=At(a??",f"),a.type){case"s":{var s=Math.max(Math.abs(e),Math.abs(n));return a.precision==null&&!isNaN(i=ob(o,s))&&(a.precision=i),vr(a,s)}case"":case"e":case"g":case"p":case"r":{a.precision==null&&!isNaN(i=ib(o,Math.max(Math.abs(e),Math.abs(n))))&&(a.precision=i-(a.type==="e"));break}case"f":case"%":{a.precision==null&&!isNaN(i=ab(o))&&(a.precision=i-(a.type==="%")*2);break}}return fr(a)}function Bb(e){var n=e.domain;return e.ticks=function(t){var a=n();return Ag(a[0],a[a.length-1],t??10)},e.tickFormat=function(t,a){var o=n();return Vb(o[0],o[o.length-1],t??10,a)},e.nice=function(t){t==null&&(t=10);var a=n(),o=0,i=a.length-1,s=a[o],r=a[i],l,c,d=10;for(r<s&&(c=s,s=r,r=c,c=o,o=i,i=c);d-- >0;){if(c=wa(s,r,t),c===l)return a[o]=s,a[i]=r,n(a);if(c>0)s=Math.floor(s/c)*c,r=Math.ceil(r/c)*c;else if(c<0)s=Math.ceil(s*c)/c,r=Math.floor(r*c)/c;else break;l=c}return e},e}function Fb(){var e=wr();return e.copy=function(){return _r(e,Fb())},Xt.apply(e,arguments),Bb(e)}function jb(e,n){e=e.slice();var t=0,a=e.length-1,o=e[t],i=e[a],s;return i<o&&(s=t,t=a,a=s,s=o,o=i,i=s),e[t]=n.floor(o),e[a]=n.ceil(i),e}const ca=new Date,ua=new Date;function ge(e,n,t,a){function o(i){return e(i=arguments.length===0?new Date:new Date(+i)),i}return o.floor=i=>(e(i=new Date(+i)),i),o.ceil=i=>(e(i=new Date(i-1)),n(i,1),e(i),i),o.round=i=>{const s=o(i),r=o.ceil(i);return i-s<r-i?s:r},o.offset=(i,s)=>(n(i=new Date(+i),s==null?1:Math.floor(s)),i),o.range=(i,s,r)=>{const l=[];if(i=o.ceil(i),r=r==null?1:Math.floor(r),!(i<s)||!(r>0))return l;let c;do l.push(c=new Date(+i)),n(i,r),e(i);while(c<i&&i<s);return l},o.filter=i=>ge(s=>{if(s>=s)for(;e(s),!i(s);)s.setTime(s-1)},(s,r)=>{if(s>=s)if(r<0)for(;++r<=0;)for(;n(s,-1),!i(s););else for(;--r>=0;)for(;n(s,1),!i(s););}),t&&(o.count=(i,s)=>(ca.setTime(+i),ua.setTime(+s),e(ca),e(ua),Math.floor(t(ca,ua))),o.every=i=>(i=Math.floor(i),!isFinite(i)||!(i>0)?null:i>1?o.filter(a?s=>a(s)%i===0:s=>o.count(0,s)%i===0):o)),o}const St=ge(()=>{},(e,n)=>{e.setTime(+e+n)},(e,n)=>n-e);St.every=e=>(e=Math.floor(e),!isFinite(e)||!(e>0)?null:e>1?ge(n=>{n.setTime(Math.floor(n/e)*e)},(n,t)=>{n.setTime(+n+t*e)},(n,t)=>(t-n)/e):St);St.range;const He=1e3,Me=He*60,We=Me*60,Ye=We*24,gi=Ye*7,as=Ye*30,da=Ye*365,wn=ge(e=>{e.setTime(e-e.getMilliseconds())},(e,n)=>{e.setTime(+e+n*He)},(e,n)=>(n-e)/He,e=>e.getUTCSeconds());wn.range;const mi=ge(e=>{e.setTime(e-e.getMilliseconds()-e.getSeconds()*He)},(e,n)=>{e.setTime(+e+n*Me)},(e,n)=>(n-e)/Me,e=>e.getMinutes());mi.range;const Ub=ge(e=>{e.setUTCSeconds(0,0)},(e,n)=>{e.setTime(+e+n*Me)},(e,n)=>(n-e)/Me,e=>e.getUTCMinutes());Ub.range;const fi=ge(e=>{e.setTime(e-e.getMilliseconds()-e.getSeconds()*He-e.getMinutes()*Me)},(e,n)=>{e.setTime(+e+n*We)},(e,n)=>(n-e)/We,e=>e.getHours());fi.range;const Gb=ge(e=>{e.setUTCMinutes(0,0,0)},(e,n)=>{e.setTime(+e+n*We)},(e,n)=>(n-e)/We,e=>e.getUTCHours());Gb.range;const Jn=ge(e=>e.setHours(0,0,0,0),(e,n)=>e.setDate(e.getDate()+n),(e,n)=>(n-e-(n.getTimezoneOffset()-e.getTimezoneOffset())*Me)/Ye,e=>e.getDate()-1);Jn.range;const vi=ge(e=>{e.setUTCHours(0,0,0,0)},(e,n)=>{e.setUTCDate(e.getUTCDate()+n)},(e,n)=>(n-e)/Ye,e=>e.getUTCDate()-1);vi.range;const Hb=ge(e=>{e.setUTCHours(0,0,0,0)},(e,n)=>{e.setUTCDate(e.getUTCDate()+n)},(e,n)=>(n-e)/Ye,e=>Math.floor(e/Ye));Hb.range;function vn(e){return ge(n=>{n.setDate(n.getDate()-(n.getDay()+7-e)%7),n.setHours(0,0,0,0)},(n,t)=>{n.setDate(n.getDate()+t*7)},(n,t)=>(t-n-(t.getTimezoneOffset()-n.getTimezoneOffset())*Me)/gi)}const Qt=vn(0),It=vn(1),Wb=vn(2),Kb=vn(3),Pn=vn(4),Yb=vn(5),Xb=vn(6);Qt.range;It.range;Wb.range;Kb.range;Pn.range;Yb.range;Xb.range;function bn(e){return ge(n=>{n.setUTCDate(n.getUTCDate()-(n.getUTCDay()+7-e)%7),n.setUTCHours(0,0,0,0)},(n,t)=>{n.setUTCDate(n.getUTCDate()+t*7)},(n,t)=>(t-n)/gi)}const kr=bn(0),Pt=bn(1),Qb=bn(2),Jb=bn(3),Mn=bn(4),Zb=bn(5),ey=bn(6);kr.range;Pt.range;Qb.range;Jb.range;Mn.range;Zb.range;ey.range;const bi=ge(e=>{e.setDate(1),e.setHours(0,0,0,0)},(e,n)=>{e.setMonth(e.getMonth()+n)},(e,n)=>n.getMonth()-e.getMonth()+(n.getFullYear()-e.getFullYear())*12,e=>e.getMonth());bi.range;const ny=ge(e=>{e.setUTCDate(1),e.setUTCHours(0,0,0,0)},(e,n)=>{e.setUTCMonth(e.getUTCMonth()+n)},(e,n)=>n.getUTCMonth()-e.getUTCMonth()+(n.getUTCFullYear()-e.getUTCFullYear())*12,e=>e.getUTCMonth());ny.range;const Xe=ge(e=>{e.setMonth(0,1),e.setHours(0,0,0,0)},(e,n)=>{e.setFullYear(e.getFullYear()+n)},(e,n)=>n.getFullYear()-e.getFullYear(),e=>e.getFullYear());Xe.every=e=>!isFinite(e=Math.floor(e))||!(e>0)?null:ge(n=>{n.setFullYear(Math.floor(n.getFullYear()/e)*e),n.setMonth(0,1),n.setHours(0,0,0,0)},(n,t)=>{n.setFullYear(n.getFullYear()+t*e)});Xe.range;const pn=ge(e=>{e.setUTCMonth(0,1),e.setUTCHours(0,0,0,0)},(e,n)=>{e.setUTCFullYear(e.getUTCFullYear()+n)},(e,n)=>n.getUTCFullYear()-e.getUTCFullYear(),e=>e.getUTCFullYear());pn.every=e=>!isFinite(e=Math.floor(e))||!(e>0)?null:ge(n=>{n.setUTCFullYear(Math.floor(n.getUTCFullYear()/e)*e),n.setUTCMonth(0,1),n.setUTCHours(0,0,0,0)},(n,t)=>{n.setUTCFullYear(n.getUTCFullYear()+t*e)});pn.range;function ty(e,n,t,a,o,i){const s=[[wn,1,He],[wn,5,5*He],[wn,15,15*He],[wn,30,30*He],[i,1,Me],[i,5,5*Me],[i,15,15*Me],[i,30,30*Me],[o,1,We],[o,3,3*We],[o,6,6*We],[o,12,12*We],[a,1,Ye],[a,2,2*Ye],[t,1,gi],[n,1,as],[n,3,3*as],[e,1,da]];function r(c,d,g){const u=d<c;u&&([c,d]=[d,c]);const h=g&&typeof g.range=="function"?g:l(c,d,g),v=h?h.range(c,+d+1):[];return u?v.reverse():v}function l(c,d,g){const u=Math.abs(d-c)/g,h=ai(([,,_])=>_).right(s,u);if(h===s.length)return e.every(ka(c/da,d/da,g));if(h===0)return St.every(Math.max(ka(c,d,g),1));const[v,b]=s[u/s[h-1][2]<s[h][2]/u?h-1:h];return v.every(b)}return[r,l]}const[ay,oy]=ty(Xe,bi,Qt,Jn,fi,mi);function ha(e){if(0<=e.y&&e.y<100){var n=new Date(-1,e.m,e.d,e.H,e.M,e.S,e.L);return n.setFullYear(e.y),n}return new Date(e.y,e.m,e.d,e.H,e.M,e.S,e.L)}function pa(e){if(0<=e.y&&e.y<100){var n=new Date(Date.UTC(-1,e.m,e.d,e.H,e.M,e.S,e.L));return n.setUTCFullYear(e.y),n}return new Date(Date.UTC(e.y,e.m,e.d,e.H,e.M,e.S,e.L))}function Nn(e,n,t){return{y:e,m:n,d:t,H:0,M:0,S:0,L:0}}function iy(e){var n=e.dateTime,t=e.date,a=e.time,o=e.periods,i=e.days,s=e.shortDays,r=e.months,l=e.shortMonths,c=En(o),d=On(o),g=En(i),u=On(i),h=En(s),v=On(s),b=En(r),_=On(r),x=En(l),A=On(l),D={a:K,A:re,b:de,B:ue,c:null,d:cs,e:cs,f:Iy,g:zy,G:Vy,H:Cy,I:Ty,j:Sy,L:xr,m:Py,M:My,p:Ce,q:_e,Q:hs,s:ps,S:Dy,u:Ly,U:$y,V:Ny,w:Ey,W:Oy,x:null,X:null,y:Ry,Y:qy,Z:By,"%":ds},y={a:le,A:Le,b:Te,B:I,c:null,d:us,e:us,f:Gy,g:n2,G:a2,H:Fy,I:jy,j:Uy,L:Cr,m:Hy,M:Wy,p:V,q:H,Q:hs,s:ps,S:Ky,u:Yy,U:Xy,V:Qy,w:Jy,W:Zy,x:null,X:null,y:e2,Y:t2,Z:o2,"%":ds},T={a:F,A:$,b:M,B:L,c:z,d:rs,e:rs,f:wy,g:ss,G:is,H:ls,I:ls,j:vy,L:_y,m:fy,M:by,p:W,q:my,Q:xy,s:Ay,S:yy,u:uy,U:dy,V:hy,w:cy,W:py,x:te,X:ee,y:ss,Y:is,Z:gy,"%":ky};D.x=k(t,D),D.X=k(a,D),D.c=k(n,D),y.x=k(t,y),y.X=k(a,y),y.c=k(n,y);function k(O,Y){return function(J){var P=[],oe=-1,ce=0,Se=O.length,Ie,an,Ci;for(J instanceof Date||(J=new Date(+J));++oe<Se;)O.charCodeAt(oe)===37&&(P.push(O.slice(ce,oe)),(an=os[Ie=O.charAt(++oe)])!=null?Ie=O.charAt(++oe):an=Ie==="e"?" ":"0",(Ci=Y[Ie])&&(Ie=Ci(J,an)),P.push(Ie),ce=oe+1);return P.push(O.slice(ce,oe)),P.join("")}}function E(O,Y){return function(J){var P=Nn(1900,void 0,1),oe=B(P,O,J+="",0),ce,Se;if(oe!=J.length)return null;if("Q"in P)return new Date(P.Q);if("s"in P)return new Date(P.s*1e3+("L"in P?P.L:0));if(Y&&!("Z"in P)&&(P.Z=0),"p"in P&&(P.H=P.H%12+P.p*12),P.m===void 0&&(P.m="q"in P?P.q:0),"V"in P){if(P.V<1||P.V>53)return null;"w"in P||(P.w=1),"Z"in P?(ce=pa(Nn(P.y,0,1)),Se=ce.getUTCDay(),ce=Se>4||Se===0?Pt.ceil(ce):Pt(ce),ce=vi.offset(ce,(P.V-1)*7),P.y=ce.getUTCFullYear(),P.m=ce.getUTCMonth(),P.d=ce.getUTCDate()+(P.w+6)%7):(ce=ha(Nn(P.y,0,1)),Se=ce.getDay(),ce=Se>4||Se===0?It.ceil(ce):It(ce),ce=Jn.offset(ce,(P.V-1)*7),P.y=ce.getFullYear(),P.m=ce.getMonth(),P.d=ce.getDate()+(P.w+6)%7)}else("W"in P||"U"in P)&&("w"in P||(P.w="u"in P?P.u%7:"W"in P?1:0),Se="Z"in P?pa(Nn(P.y,0,1)).getUTCDay():ha(Nn(P.y,0,1)).getDay(),P.m=0,P.d="W"in P?(P.w+6)%7+P.W*7-(Se+5)%7:P.w+P.U*7-(Se+6)%7);return"Z"in P?(P.H+=P.Z/100|0,P.M+=P.Z%100,pa(P)):ha(P)}}function B(O,Y,J,P){for(var oe=0,ce=Y.length,Se=J.length,Ie,an;oe<ce;){if(P>=Se)return-1;if(Ie=Y.charCodeAt(oe++),Ie===37){if(Ie=Y.charAt(oe++),an=T[Ie in os?Y.charAt(oe++):Ie],!an||(P=an(O,J,P))<0)return-1}else if(Ie!=J.charCodeAt(P++))return-1}return P}function W(O,Y,J){var P=c.exec(Y.slice(J));return P?(O.p=d.get(P[0].toLowerCase()),J+P[0].length):-1}function F(O,Y,J){var P=h.exec(Y.slice(J));return P?(O.w=v.get(P[0].toLowerCase()),J+P[0].length):-1}function $(O,Y,J){var P=g.exec(Y.slice(J));return P?(O.w=u.get(P[0].toLowerCase()),J+P[0].length):-1}function M(O,Y,J){var P=x.exec(Y.slice(J));return P?(O.m=A.get(P[0].toLowerCase()),J+P[0].length):-1}function L(O,Y,J){var P=b.exec(Y.slice(J));return P?(O.m=_.get(P[0].toLowerCase()),J+P[0].length):-1}function z(O,Y,J){return B(O,n,Y,J)}function te(O,Y,J){return B(O,t,Y,J)}function ee(O,Y,J){return B(O,a,Y,J)}function K(O){return s[O.getDay()]}function re(O){return i[O.getDay()]}function de(O){return l[O.getMonth()]}function ue(O){return r[O.getMonth()]}function Ce(O){return o[+(O.getHours()>=12)]}function _e(O){return 1+~~(O.getMonth()/3)}function le(O){return s[O.getUTCDay()]}function Le(O){return i[O.getUTCDay()]}function Te(O){return l[O.getUTCMonth()]}function I(O){return r[O.getUTCMonth()]}function V(O){return o[+(O.getUTCHours()>=12)]}function H(O){return 1+~~(O.getUTCMonth()/3)}return{format:function(O){var Y=k(O+="",D);return Y.toString=function(){return O},Y},parse:function(O){var Y=E(O+="",!1);return Y.toString=function(){return O},Y},utcFormat:function(O){var Y=k(O+="",y);return Y.toString=function(){return O},Y},utcParse:function(O){var Y=E(O+="",!0);return Y.toString=function(){return O},Y}}}var os={"-":"",_:" ",0:"0"},fe=/^\s*\d+/,sy=/^%/,ry=/[\\^$*+?|[\]().{}]/g;function se(e,n,t){var a=e<0?"-":"",o=(a?-e:e)+"",i=o.length;return a+(i<t?new Array(t-i+1).join(n)+o:o)}function ly(e){return e.replace(ry,"\\$&")}function En(e){return new RegExp("^(?:"+e.map(ly).join("|")+")","i")}function On(e){return new Map(e.map((n,t)=>[n.toLowerCase(),t]))}function cy(e,n,t){var a=fe.exec(n.slice(t,t+1));return a?(e.w=+a[0],t+a[0].length):-1}function uy(e,n,t){var a=fe.exec(n.slice(t,t+1));return a?(e.u=+a[0],t+a[0].length):-1}function dy(e,n,t){var a=fe.exec(n.slice(t,t+2));return a?(e.U=+a[0],t+a[0].length):-1}function hy(e,n,t){var a=fe.exec(n.slice(t,t+2));return a?(e.V=+a[0],t+a[0].length):-1}function py(e,n,t){var a=fe.exec(n.slice(t,t+2));return a?(e.W=+a[0],t+a[0].length):-1}function is(e,n,t){var a=fe.exec(n.slice(t,t+4));return a?(e.y=+a[0],t+a[0].length):-1}function ss(e,n,t){var a=fe.exec(n.slice(t,t+2));return a?(e.y=+a[0]+(+a[0]>68?1900:2e3),t+a[0].length):-1}function gy(e,n,t){var a=/^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(n.slice(t,t+6));return a?(e.Z=a[1]?0:-(a[2]+(a[3]||"00")),t+a[0].length):-1}function my(e,n,t){var a=fe.exec(n.slice(t,t+1));return a?(e.q=a[0]*3-3,t+a[0].length):-1}function fy(e,n,t){var a=fe.exec(n.slice(t,t+2));return a?(e.m=a[0]-1,t+a[0].length):-1}function rs(e,n,t){var a=fe.exec(n.slice(t,t+2));return a?(e.d=+a[0],t+a[0].length):-1}function vy(e,n,t){var a=fe.exec(n.slice(t,t+3));return a?(e.m=0,e.d=+a[0],t+a[0].length):-1}function ls(e,n,t){var a=fe.exec(n.slice(t,t+2));return a?(e.H=+a[0],t+a[0].length):-1}function by(e,n,t){var a=fe.exec(n.slice(t,t+2));return a?(e.M=+a[0],t+a[0].length):-1}function yy(e,n,t){var a=fe.exec(n.slice(t,t+2));return a?(e.S=+a[0],t+a[0].length):-1}function _y(e,n,t){var a=fe.exec(n.slice(t,t+3));return a?(e.L=+a[0],t+a[0].length):-1}function wy(e,n,t){var a=fe.exec(n.slice(t,t+6));return a?(e.L=Math.floor(a[0]/1e3),t+a[0].length):-1}function ky(e,n,t){var a=sy.exec(n.slice(t,t+1));return a?t+a[0].length:-1}function xy(e,n,t){var a=fe.exec(n.slice(t));return a?(e.Q=+a[0],t+a[0].length):-1}function Ay(e,n,t){var a=fe.exec(n.slice(t));return a?(e.s=+a[0],t+a[0].length):-1}function cs(e,n){return se(e.getDate(),n,2)}function Cy(e,n){return se(e.getHours(),n,2)}function Ty(e,n){return se(e.getHours()%12||12,n,2)}function Sy(e,n){return se(1+Jn.count(Xe(e),e),n,3)}function xr(e,n){return se(e.getMilliseconds(),n,3)}function Iy(e,n){return xr(e,n)+"000"}function Py(e,n){return se(e.getMonth()+1,n,2)}function My(e,n){return se(e.getMinutes(),n,2)}function Dy(e,n){return se(e.getSeconds(),n,2)}function Ly(e){var n=e.getDay();return n===0?7:n}function $y(e,n){return se(Qt.count(Xe(e)-1,e),n,2)}function Ar(e){var n=e.getDay();return n>=4||n===0?Pn(e):Pn.ceil(e)}function Ny(e,n){return e=Ar(e),se(Pn.count(Xe(e),e)+(Xe(e).getDay()===4),n,2)}function Ey(e){return e.getDay()}function Oy(e,n){return se(It.count(Xe(e)-1,e),n,2)}function Ry(e,n){return se(e.getFullYear()%100,n,2)}function zy(e,n){return e=Ar(e),se(e.getFullYear()%100,n,2)}function qy(e,n){return se(e.getFullYear()%1e4,n,4)}function Vy(e,n){var t=e.getDay();return e=t>=4||t===0?Pn(e):Pn.ceil(e),se(e.getFullYear()%1e4,n,4)}function By(e){var n=e.getTimezoneOffset();return(n>0?"-":(n*=-1,"+"))+se(n/60|0,"0",2)+se(n%60,"0",2)}function us(e,n){return se(e.getUTCDate(),n,2)}function Fy(e,n){return se(e.getUTCHours(),n,2)}function jy(e,n){return se(e.getUTCHours()%12||12,n,2)}function Uy(e,n){return se(1+vi.count(pn(e),e),n,3)}function Cr(e,n){return se(e.getUTCMilliseconds(),n,3)}function Gy(e,n){return Cr(e,n)+"000"}function Hy(e,n){return se(e.getUTCMonth()+1,n,2)}function Wy(e,n){return se(e.getUTCMinutes(),n,2)}function Ky(e,n){return se(e.getUTCSeconds(),n,2)}function Yy(e){var n=e.getUTCDay();return n===0?7:n}function Xy(e,n){return se(kr.count(pn(e)-1,e),n,2)}function Tr(e){var n=e.getUTCDay();return n>=4||n===0?Mn(e):Mn.ceil(e)}function Qy(e,n){return e=Tr(e),se(Mn.count(pn(e),e)+(pn(e).getUTCDay()===4),n,2)}function Jy(e){return e.getUTCDay()}function Zy(e,n){return se(Pt.count(pn(e)-1,e),n,2)}function e2(e,n){return se(e.getUTCFullYear()%100,n,2)}function n2(e,n){return e=Tr(e),se(e.getUTCFullYear()%100,n,2)}function t2(e,n){return se(e.getUTCFullYear()%1e4,n,4)}function a2(e,n){var t=e.getUTCDay();return e=t>=4||t===0?Mn(e):Mn.ceil(e),se(e.getUTCFullYear()%1e4,n,4)}function o2(){return"+0000"}function ds(){return"%"}function hs(e){return+e}function ps(e){return Math.floor(+e/1e3)}var yn,Sr;i2({dateTime:"%x, %X",date:"%-m/%-d/%Y",time:"%-I:%M:%S %p",periods:["AM","PM"],days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],shortDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],shortMonths:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]});function i2(e){return yn=iy(e),Sr=yn.format,yn.parse,yn.utcFormat,yn.utcParse,yn}function s2(e){return new Date(e)}function r2(e){return e instanceof Date?+e:+new Date(+e)}function Ir(e,n,t,a,o,i,s,r,l,c){var d=wr(),g=d.invert,u=d.domain,h=c(".%L"),v=c(":%S"),b=c("%I:%M"),_=c("%I %p"),x=c("%a %d"),A=c("%b %d"),D=c("%B"),y=c("%Y");function T(k){return(l(k)<k?h:r(k)<k?v:s(k)<k?b:i(k)<k?_:a(k)<k?o(k)<k?x:A:t(k)<k?D:y)(k)}return d.invert=function(k){return new Date(g(k))},d.domain=function(k){return arguments.length?u(Array.from(k,r2)):u().map(s2)},d.ticks=function(k){var E=u();return e(E[0],E[E.length-1],k??10)},d.tickFormat=function(k,E){return E==null?T:c(E)},d.nice=function(k){var E=u();return(!k||typeof k.range!="function")&&(k=n(E[0],E[E.length-1],k??10)),k?u(jb(E,k)):d},d.copy=function(){return _r(d,Ir(e,n,t,a,o,i,s,r,l,c))},d}function ok(){return Xt.apply(Ir(ay,oy,Xe,bi,Qt,Jn,fi,mi,wn,Sr).domain([new Date(2e3,0,1),new Date(2e3,0,2)]),arguments)}function l2(e){for(var n=e.length/6|0,t=new Array(n),a=0;a<n;)t[a]="#"+e.slice(a*6,++a*6);return t}const ik=l2("4e79a7f28e2ce1575976b7b259a14fedc949af7aa1ff9da79c755fbab0ab");function he(e){return function(){return e}}const gs=Math.abs,ve=Math.atan2,on=Math.cos,c2=Math.max,ga=Math.min,Re=Math.sin,kn=Math.sqrt,be=1e-12,Wn=Math.PI,Mt=Wn/2,ht=2*Wn;function u2(e){return e>1?0:e<-1?Wn:Math.acos(e)}function ms(e){return e>=1?Mt:e<=-1?-Mt:Math.asin(e)}function Pr(e){let n=3;return e.digits=function(t){if(!arguments.length)return n;if(t==null)n=null;else{const a=Math.floor(t);if(!(a>=0))throw new RangeError(`invalid digits: ${t}`);n=a}return e},()=>new mv(n)}function d2(e){return e.innerRadius}function h2(e){return e.outerRadius}function p2(e){return e.startAngle}function g2(e){return e.endAngle}function m2(e){return e&&e.padAngle}function f2(e,n,t,a,o,i,s,r){var l=t-e,c=a-n,d=s-o,g=r-i,u=g*l-d*c;if(!(u*u<be))return u=(d*(n-i)-g*(e-o))/u,[e+u*l,n+u*c]}function it(e,n,t,a,o,i,s){var r=e-t,l=n-a,c=(s?i:-i)/kn(r*r+l*l),d=c*l,g=-c*r,u=e+d,h=n+g,v=t+d,b=a+g,_=(u+v)/2,x=(h+b)/2,A=v-u,D=b-h,y=A*A+D*D,T=o-i,k=u*b-v*h,E=(D<0?-1:1)*kn(c2(0,T*T*y-k*k)),B=(k*D-A*E)/y,W=(-k*A-D*E)/y,F=(k*D+A*E)/y,$=(-k*A+D*E)/y,M=B-_,L=W-x,z=F-_,te=$-x;return M*M+L*L>z*z+te*te&&(B=F,W=$),{cx:B,cy:W,x01:-d,y01:-g,x11:B*(o/T-1),y11:W*(o/T-1)}}function sk(){var e=d2,n=h2,t=he(0),a=null,o=p2,i=g2,s=m2,r=null,l=Pr(c);function c(){var d,g,u=+e.apply(this,arguments),h=+n.apply(this,arguments),v=o.apply(this,arguments)-Mt,b=i.apply(this,arguments)-Mt,_=gs(b-v),x=b>v;if(r||(r=d=l()),h<u&&(g=h,h=u,u=g),!(h>be))r.moveTo(0,0);else if(_>ht-be)r.moveTo(h*on(v),h*Re(v)),r.arc(0,0,h,v,b,!x),u>be&&(r.moveTo(u*on(b),u*Re(b)),r.arc(0,0,u,b,v,x));else{var A=v,D=b,y=v,T=b,k=_,E=_,B=s.apply(this,arguments)/2,W=B>be&&(a?+a.apply(this,arguments):kn(u*u+h*h)),F=ga(gs(h-u)/2,+t.apply(this,arguments)),$=F,M=F,L,z;if(W>be){var te=ms(W/u*Re(B)),ee=ms(W/h*Re(B));(k-=te*2)>be?(te*=x?1:-1,y+=te,T-=te):(k=0,y=T=(v+b)/2),(E-=ee*2)>be?(ee*=x?1:-1,A+=ee,D-=ee):(E=0,A=D=(v+b)/2)}var K=h*on(A),re=h*Re(A),de=u*on(T),ue=u*Re(T);if(F>be){var Ce=h*on(D),_e=h*Re(D),le=u*on(y),Le=u*Re(y),Te;if(_<Wn)if(Te=f2(K,re,le,Le,Ce,_e,de,ue)){var I=K-Te[0],V=re-Te[1],H=Ce-Te[0],O=_e-Te[1],Y=1/Re(u2((I*H+V*O)/(kn(I*I+V*V)*kn(H*H+O*O)))/2),J=kn(Te[0]*Te[0]+Te[1]*Te[1]);$=ga(F,(u-J)/(Y-1)),M=ga(F,(h-J)/(Y+1))}else $=M=0}E>be?M>be?(L=it(le,Le,K,re,h,M,x),z=it(Ce,_e,de,ue,h,M,x),r.moveTo(L.cx+L.x01,L.cy+L.y01),M<F?r.arc(L.cx,L.cy,M,ve(L.y01,L.x01),ve(z.y01,z.x01),!x):(r.arc(L.cx,L.cy,M,ve(L.y01,L.x01),ve(L.y11,L.x11),!x),r.arc(0,0,h,ve(L.cy+L.y11,L.cx+L.x11),ve(z.cy+z.y11,z.cx+z.x11),!x),r.arc(z.cx,z.cy,M,ve(z.y11,z.x11),ve(z.y01,z.x01),!x))):(r.moveTo(K,re),r.arc(0,0,h,A,D,!x)):r.moveTo(K,re),!(u>be)||!(k>be)?r.lineTo(de,ue):$>be?(L=it(de,ue,Ce,_e,u,-$,x),z=it(K,re,le,Le,u,-$,x),r.lineTo(L.cx+L.x01,L.cy+L.y01),$<F?r.arc(L.cx,L.cy,$,ve(L.y01,L.x01),ve(z.y01,z.x01),!x):(r.arc(L.cx,L.cy,$,ve(L.y01,L.x01),ve(L.y11,L.x11),!x),r.arc(0,0,u,ve(L.cy+L.y11,L.cx+L.x11),ve(z.cy+z.y11,z.cx+z.x11),x),r.arc(z.cx,z.cy,$,ve(z.y11,z.x11),ve(z.y01,z.x01),!x))):r.arc(0,0,u,T,y,x)}if(r.closePath(),d)return r=null,d+""||null}return c.centroid=function(){var d=(+e.apply(this,arguments)+ +n.apply(this,arguments))/2,g=(+o.apply(this,arguments)+ +i.apply(this,arguments))/2-Wn/2;return[on(g)*d,Re(g)*d]},c.innerRadius=function(d){return arguments.length?(e=typeof d=="function"?d:he(+d),c):e},c.outerRadius=function(d){return arguments.length?(n=typeof d=="function"?d:he(+d),c):n},c.cornerRadius=function(d){return arguments.length?(t=typeof d=="function"?d:he(+d),c):t},c.padRadius=function(d){return arguments.length?(a=d==null?null:typeof d=="function"?d:he(+d),c):a},c.startAngle=function(d){return arguments.length?(o=typeof d=="function"?d:he(+d),c):o},c.endAngle=function(d){return arguments.length?(i=typeof d=="function"?d:he(+d),c):i},c.padAngle=function(d){return arguments.length?(s=typeof d=="function"?d:he(+d),c):s},c.context=function(d){return arguments.length?(r=d??null,c):r},c}function Mr(e){return typeof e=="object"&&"length"in e?e:Array.from(e)}function Dr(e){this._context=e}Dr.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(e,n){switch(e=+e,n=+n,this._point){case 0:this._point=1,this._line?this._context.lineTo(e,n):this._context.moveTo(e,n);break;case 1:this._point=2;default:this._context.lineTo(e,n);break}}};function v2(e){return new Dr(e)}function b2(e){return e[0]}function y2(e){return e[1]}function rk(e,n){var t=he(!0),a=null,o=v2,i=null,s=Pr(r);e=typeof e=="function"?e:e===void 0?b2:he(e),n=typeof n=="function"?n:n===void 0?y2:he(n);function r(l){var c,d=(l=Mr(l)).length,g,u=!1,h;for(a==null&&(i=o(h=s())),c=0;c<=d;++c)!(c<d&&t(g=l[c],c,l))===u&&((u=!u)?i.lineStart():i.lineEnd()),u&&i.point(+e(g,c,l),+n(g,c,l));if(h)return i=null,h+""||null}return r.x=function(l){return arguments.length?(e=typeof l=="function"?l:he(+l),r):e},r.y=function(l){return arguments.length?(n=typeof l=="function"?l:he(+l),r):n},r.defined=function(l){return arguments.length?(t=typeof l=="function"?l:he(!!l),r):t},r.curve=function(l){return arguments.length?(o=l,a!=null&&(i=o(a)),r):o},r.context=function(l){return arguments.length?(l==null?a=i=null:i=o(a=l),r):a},r}function _2(e,n){return n<e?-1:n>e?1:n>=e?0:NaN}function w2(e){return e}function lk(){var e=w2,n=_2,t=null,a=he(0),o=he(ht),i=he(0);function s(r){var l,c=(r=Mr(r)).length,d,g,u=0,h=new Array(c),v=new Array(c),b=+a.apply(this,arguments),_=Math.min(ht,Math.max(-ht,o.apply(this,arguments)-b)),x,A=Math.min(Math.abs(_)/c,i.apply(this,arguments)),D=A*(_<0?-1:1),y;for(l=0;l<c;++l)(y=v[h[l]=l]=+e(r[l],l,r))>0&&(u+=y);for(n!=null?h.sort(function(T,k){return n(v[T],v[k])}):t!=null&&h.sort(function(T,k){return t(r[T],r[k])}),l=0,g=u?(_-c*D)/u:0;l<c;++l,b=x)d=h[l],y=v[d],x=b+(y>0?y*g:0)+D,v[d]={data:r[d],index:l,value:y,startAngle:b,endAngle:x,padAngle:A};return v}return s.value=function(r){return arguments.length?(e=typeof r=="function"?r:he(+r),s):e},s.sortValues=function(r){return arguments.length?(n=r,t=null,s):n},s.sort=function(r){return arguments.length?(t=r,n=null,s):t},s.startAngle=function(r){return arguments.length?(a=typeof r=="function"?r:he(+r),s):a},s.endAngle=function(r){return arguments.length?(o=typeof r=="function"?r:he(+r),s):o},s.padAngle=function(r){return arguments.length?(i=typeof r=="function"?r:he(+r),s):i},s}class Lr{constructor(n,t){this._context=n,this._x=t}areaStart(){this._line=0}areaEnd(){this._line=NaN}lineStart(){this._point=0}lineEnd(){(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line}point(n,t){switch(n=+n,t=+t,this._point){case 0:{this._point=1,this._line?this._context.lineTo(n,t):this._context.moveTo(n,t);break}case 1:this._point=2;default:{this._x?this._context.bezierCurveTo(this._x0=(this._x0+n)/2,this._y0,this._x0,t,n,t):this._context.bezierCurveTo(this._x0,this._y0=(this._y0+t)/2,n,this._y0,n,t);break}}this._x0=n,this._y0=t}}function ck(e){return new Lr(e,!0)}function uk(e){return new Lr(e,!1)}function nn(){}function Dt(e,n,t){e._context.bezierCurveTo((2*e._x0+e._x1)/3,(2*e._y0+e._y1)/3,(e._x0+2*e._x1)/3,(e._y0+2*e._y1)/3,(e._x0+4*e._x1+n)/6,(e._y0+4*e._y1+t)/6)}function Jt(e){this._context=e}Jt.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=NaN,this._point=0},lineEnd:function(){switch(this._point){case 3:Dt(this,this._x1,this._y1);case 2:this._context.lineTo(this._x1,this._y1);break}(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(e,n){switch(e=+e,n=+n,this._point){case 0:this._point=1,this._line?this._context.lineTo(e,n):this._context.moveTo(e,n);break;case 1:this._point=2;break;case 2:this._point=3,this._context.lineTo((5*this._x0+this._x1)/6,(5*this._y0+this._y1)/6);default:Dt(this,e,n);break}this._x0=this._x1,this._x1=e,this._y0=this._y1,this._y1=n}};function dk(e){return new Jt(e)}function $r(e){this._context=e}$r.prototype={areaStart:nn,areaEnd:nn,lineStart:function(){this._x0=this._x1=this._x2=this._x3=this._x4=this._y0=this._y1=this._y2=this._y3=this._y4=NaN,this._point=0},lineEnd:function(){switch(this._point){case 1:{this._context.moveTo(this._x2,this._y2),this._context.closePath();break}case 2:{this._context.moveTo((this._x2+2*this._x3)/3,(this._y2+2*this._y3)/3),this._context.lineTo((this._x3+2*this._x2)/3,(this._y3+2*this._y2)/3),this._context.closePath();break}case 3:{this.point(this._x2,this._y2),this.point(this._x3,this._y3),this.point(this._x4,this._y4);break}}},point:function(e,n){switch(e=+e,n=+n,this._point){case 0:this._point=1,this._x2=e,this._y2=n;break;case 1:this._point=2,this._x3=e,this._y3=n;break;case 2:this._point=3,this._x4=e,this._y4=n,this._context.moveTo((this._x0+4*this._x1+e)/6,(this._y0+4*this._y1+n)/6);break;default:Dt(this,e,n);break}this._x0=this._x1,this._x1=e,this._y0=this._y1,this._y1=n}};function hk(e){return new $r(e)}function Nr(e){this._context=e}Nr.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=NaN,this._point=0},lineEnd:function(){(this._line||this._line!==0&&this._point===3)&&this._context.closePath(),this._line=1-this._line},point:function(e,n){switch(e=+e,n=+n,this._point){case 0:this._point=1;break;case 1:this._point=2;break;case 2:this._point=3;var t=(this._x0+4*this._x1+e)/6,a=(this._y0+4*this._y1+n)/6;this._line?this._context.lineTo(t,a):this._context.moveTo(t,a);break;case 3:this._point=4;default:Dt(this,e,n);break}this._x0=this._x1,this._x1=e,this._y0=this._y1,this._y1=n}};function pk(e){return new Nr(e)}function Er(e,n){this._basis=new Jt(e),this._beta=n}Er.prototype={lineStart:function(){this._x=[],this._y=[],this._basis.lineStart()},lineEnd:function(){var e=this._x,n=this._y,t=e.length-1;if(t>0)for(var a=e[0],o=n[0],i=e[t]-a,s=n[t]-o,r=-1,l;++r<=t;)l=r/t,this._basis.point(this._beta*e[r]+(1-this._beta)*(a+l*i),this._beta*n[r]+(1-this._beta)*(o+l*s));this._x=this._y=null,this._basis.lineEnd()},point:function(e,n){this._x.push(+e),this._y.push(+n)}};const gk=function e(n){function t(a){return n===1?new Jt(a):new Er(a,n)}return t.beta=function(a){return e(+a)},t}(.85);function Lt(e,n,t){e._context.bezierCurveTo(e._x1+e._k*(e._x2-e._x0),e._y1+e._k*(e._y2-e._y0),e._x2+e._k*(e._x1-n),e._y2+e._k*(e._y1-t),e._x2,e._y2)}function yi(e,n){this._context=e,this._k=(1-n)/6}yi.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x2,this._y2);break;case 3:Lt(this,this._x1,this._y1);break}(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(e,n){switch(e=+e,n=+n,this._point){case 0:this._point=1,this._line?this._context.lineTo(e,n):this._context.moveTo(e,n);break;case 1:this._point=2,this._x1=e,this._y1=n;break;case 2:this._point=3;default:Lt(this,e,n);break}this._x0=this._x1,this._x1=this._x2,this._x2=e,this._y0=this._y1,this._y1=this._y2,this._y2=n}};const mk=function e(n){function t(a){return new yi(a,n)}return t.tension=function(a){return e(+a)},t}(0);function _i(e,n){this._context=e,this._k=(1-n)/6}_i.prototype={areaStart:nn,areaEnd:nn,lineStart:function(){this._x0=this._x1=this._x2=this._x3=this._x4=this._x5=this._y0=this._y1=this._y2=this._y3=this._y4=this._y5=NaN,this._point=0},lineEnd:function(){switch(this._point){case 1:{this._context.moveTo(this._x3,this._y3),this._context.closePath();break}case 2:{this._context.lineTo(this._x3,this._y3),this._context.closePath();break}case 3:{this.point(this._x3,this._y3),this.point(this._x4,this._y4),this.point(this._x5,this._y5);break}}},point:function(e,n){switch(e=+e,n=+n,this._point){case 0:this._point=1,this._x3=e,this._y3=n;break;case 1:this._point=2,this._context.moveTo(this._x4=e,this._y4=n);break;case 2:this._point=3,this._x5=e,this._y5=n;break;default:Lt(this,e,n);break}this._x0=this._x1,this._x1=this._x2,this._x2=e,this._y0=this._y1,this._y1=this._y2,this._y2=n}};const fk=function e(n){function t(a){return new _i(a,n)}return t.tension=function(a){return e(+a)},t}(0);function wi(e,n){this._context=e,this._k=(1-n)/6}wi.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._point=0},lineEnd:function(){(this._line||this._line!==0&&this._point===3)&&this._context.closePath(),this._line=1-this._line},point:function(e,n){switch(e=+e,n=+n,this._point){case 0:this._point=1;break;case 1:this._point=2;break;case 2:this._point=3,this._line?this._context.lineTo(this._x2,this._y2):this._context.moveTo(this._x2,this._y2);break;case 3:this._point=4;default:Lt(this,e,n);break}this._x0=this._x1,this._x1=this._x2,this._x2=e,this._y0=this._y1,this._y1=this._y2,this._y2=n}};const vk=function e(n){function t(a){return new wi(a,n)}return t.tension=function(a){return e(+a)},t}(0);function ki(e,n,t){var a=e._x1,o=e._y1,i=e._x2,s=e._y2;if(e._l01_a>be){var r=2*e._l01_2a+3*e._l01_a*e._l12_a+e._l12_2a,l=3*e._l01_a*(e._l01_a+e._l12_a);a=(a*r-e._x0*e._l12_2a+e._x2*e._l01_2a)/l,o=(o*r-e._y0*e._l12_2a+e._y2*e._l01_2a)/l}if(e._l23_a>be){var c=2*e._l23_2a+3*e._l23_a*e._l12_a+e._l12_2a,d=3*e._l23_a*(e._l23_a+e._l12_a);i=(i*c+e._x1*e._l23_2a-n*e._l12_2a)/d,s=(s*c+e._y1*e._l23_2a-t*e._l12_2a)/d}e._context.bezierCurveTo(a,o,i,s,e._x2,e._y2)}function Or(e,n){this._context=e,this._alpha=n}Or.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._l01_a=this._l12_a=this._l23_a=this._l01_2a=this._l12_2a=this._l23_2a=this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x2,this._y2);break;case 3:this.point(this._x2,this._y2);break}(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(e,n){if(e=+e,n=+n,this._point){var t=this._x2-e,a=this._y2-n;this._l23_a=Math.sqrt(this._l23_2a=Math.pow(t*t+a*a,this._alpha))}switch(this._point){case 0:this._point=1,this._line?this._context.lineTo(e,n):this._context.moveTo(e,n);break;case 1:this._point=2;break;case 2:this._point=3;default:ki(this,e,n);break}this._l01_a=this._l12_a,this._l12_a=this._l23_a,this._l01_2a=this._l12_2a,this._l12_2a=this._l23_2a,this._x0=this._x1,this._x1=this._x2,this._x2=e,this._y0=this._y1,this._y1=this._y2,this._y2=n}};const bk=function e(n){function t(a){return n?new Or(a,n):new yi(a,0)}return t.alpha=function(a){return e(+a)},t}(.5);function Rr(e,n){this._context=e,this._alpha=n}Rr.prototype={areaStart:nn,areaEnd:nn,lineStart:function(){this._x0=this._x1=this._x2=this._x3=this._x4=this._x5=this._y0=this._y1=this._y2=this._y3=this._y4=this._y5=NaN,this._l01_a=this._l12_a=this._l23_a=this._l01_2a=this._l12_2a=this._l23_2a=this._point=0},lineEnd:function(){switch(this._point){case 1:{this._context.moveTo(this._x3,this._y3),this._context.closePath();break}case 2:{this._context.lineTo(this._x3,this._y3),this._context.closePath();break}case 3:{this.point(this._x3,this._y3),this.point(this._x4,this._y4),this.point(this._x5,this._y5);break}}},point:function(e,n){if(e=+e,n=+n,this._point){var t=this._x2-e,a=this._y2-n;this._l23_a=Math.sqrt(this._l23_2a=Math.pow(t*t+a*a,this._alpha))}switch(this._point){case 0:this._point=1,this._x3=e,this._y3=n;break;case 1:this._point=2,this._context.moveTo(this._x4=e,this._y4=n);break;case 2:this._point=3,this._x5=e,this._y5=n;break;default:ki(this,e,n);break}this._l01_a=this._l12_a,this._l12_a=this._l23_a,this._l01_2a=this._l12_2a,this._l12_2a=this._l23_2a,this._x0=this._x1,this._x1=this._x2,this._x2=e,this._y0=this._y1,this._y1=this._y2,this._y2=n}};const yk=function e(n){function t(a){return n?new Rr(a,n):new _i(a,0)}return t.alpha=function(a){return e(+a)},t}(.5);function zr(e,n){this._context=e,this._alpha=n}zr.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._l01_a=this._l12_a=this._l23_a=this._l01_2a=this._l12_2a=this._l23_2a=this._point=0},lineEnd:function(){(this._line||this._line!==0&&this._point===3)&&this._context.closePath(),this._line=1-this._line},point:function(e,n){if(e=+e,n=+n,this._point){var t=this._x2-e,a=this._y2-n;this._l23_a=Math.sqrt(this._l23_2a=Math.pow(t*t+a*a,this._alpha))}switch(this._point){case 0:this._point=1;break;case 1:this._point=2;break;case 2:this._point=3,this._line?this._context.lineTo(this._x2,this._y2):this._context.moveTo(this._x2,this._y2);break;case 3:this._point=4;default:ki(this,e,n);break}this._l01_a=this._l12_a,this._l12_a=this._l23_a,this._l01_2a=this._l12_2a,this._l12_2a=this._l23_2a,this._x0=this._x1,this._x1=this._x2,this._x2=e,this._y0=this._y1,this._y1=this._y2,this._y2=n}};const _k=function e(n){function t(a){return n?new zr(a,n):new wi(a,0)}return t.alpha=function(a){return e(+a)},t}(.5);function qr(e){this._context=e}qr.prototype={areaStart:nn,areaEnd:nn,lineStart:function(){this._point=0},lineEnd:function(){this._point&&this._context.closePath()},point:function(e,n){e=+e,n=+n,this._point?this._context.lineTo(e,n):(this._point=1,this._context.moveTo(e,n))}};function wk(e){return new qr(e)}function fs(e){return e<0?-1:1}function vs(e,n,t){var a=e._x1-e._x0,o=n-e._x1,i=(e._y1-e._y0)/(a||o<0&&-0),s=(t-e._y1)/(o||a<0&&-0),r=(i*o+s*a)/(a+o);return(fs(i)+fs(s))*Math.min(Math.abs(i),Math.abs(s),.5*Math.abs(r))||0}function bs(e,n){var t=e._x1-e._x0;return t?(3*(e._y1-e._y0)/t-n)/2:n}function ma(e,n,t){var a=e._x0,o=e._y0,i=e._x1,s=e._y1,r=(i-a)/3;e._context.bezierCurveTo(a+r,o+r*n,i-r,s-r*t,i,s)}function $t(e){this._context=e}$t.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=this._t0=NaN,this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x1,this._y1);break;case 3:ma(this,this._t0,bs(this,this._t0));break}(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(e,n){var t=NaN;if(e=+e,n=+n,!(e===this._x1&&n===this._y1)){switch(this._point){case 0:this._point=1,this._line?this._context.lineTo(e,n):this._context.moveTo(e,n);break;case 1:this._point=2;break;case 2:this._point=3,ma(this,bs(this,t=vs(this,e,n)),t);break;default:ma(this,this._t0,t=vs(this,e,n));break}this._x0=this._x1,this._x1=e,this._y0=this._y1,this._y1=n,this._t0=t}}};function Vr(e){this._context=new Br(e)}(Vr.prototype=Object.create($t.prototype)).point=function(e,n){$t.prototype.point.call(this,n,e)};function Br(e){this._context=e}Br.prototype={moveTo:function(e,n){this._context.moveTo(n,e)},closePath:function(){this._context.closePath()},lineTo:function(e,n){this._context.lineTo(n,e)},bezierCurveTo:function(e,n,t,a,o,i){this._context.bezierCurveTo(n,e,a,t,i,o)}};function kk(e){return new $t(e)}function xk(e){return new Vr(e)}function Fr(e){this._context=e}Fr.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x=[],this._y=[]},lineEnd:function(){var e=this._x,n=this._y,t=e.length;if(t)if(this._line?this._context.lineTo(e[0],n[0]):this._context.moveTo(e[0],n[0]),t===2)this._context.lineTo(e[1],n[1]);else for(var a=ys(e),o=ys(n),i=0,s=1;s<t;++i,++s)this._context.bezierCurveTo(a[0][i],o[0][i],a[1][i],o[1][i],e[s],n[s]);(this._line||this._line!==0&&t===1)&&this._context.closePath(),this._line=1-this._line,this._x=this._y=null},point:function(e,n){this._x.push(+e),this._y.push(+n)}};function ys(e){var n,t=e.length-1,a,o=new Array(t),i=new Array(t),s=new Array(t);for(o[0]=0,i[0]=2,s[0]=e[0]+2*e[1],n=1;n<t-1;++n)o[n]=1,i[n]=4,s[n]=4*e[n]+2*e[n+1];for(o[t-1]=2,i[t-1]=7,s[t-1]=8*e[t-1]+e[t],n=1;n<t;++n)a=o[n]/i[n-1],i[n]-=a,s[n]-=a*s[n-1];for(o[t-1]=s[t-1]/i[t-1],n=t-2;n>=0;--n)o[n]=(s[n]-o[n+1])/i[n];for(i[t-1]=(e[t]+o[t-1])/2,n=0;n<t-1;++n)i[n]=2*e[n+1]-o[n+1];return[o,i]}function Ak(e){return new Fr(e)}function Zt(e,n){this._context=e,this._t=n}Zt.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x=this._y=NaN,this._point=0},lineEnd:function(){0<this._t&&this._t<1&&this._point===2&&this._context.lineTo(this._x,this._y),(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line>=0&&(this._t=1-this._t,this._line=1-this._line)},point:function(e,n){switch(e=+e,n=+n,this._point){case 0:this._point=1,this._line?this._context.lineTo(e,n):this._context.moveTo(e,n);break;case 1:this._point=2;default:{if(this._t<=0)this._context.lineTo(this._x,n),this._context.lineTo(e,n);else{var t=this._x*(1-this._t)+e*this._t;this._context.lineTo(t,this._y),this._context.lineTo(t,n)}break}}this._x=e,this._y=n}};function Ck(e){return new Zt(e,.5)}function Tk(e){return new Zt(e,0)}function Sk(e){return new Zt(e,1)}function Vn(e,n,t){this.k=e,this.x=n,this.y=t}Vn.prototype={constructor:Vn,scale:function(e){return e===1?this:new Vn(this.k*e,this.x,this.y)},translate:function(e,n){return e===0&n===0?this:new Vn(this.k,this.x+this.k*e,this.y+this.k*n)},apply:function(e){return[e[0]*this.k+this.x,e[1]*this.k+this.y]},applyX:function(e){return e*this.k+this.x},applyY:function(e){return e*this.k+this.y},invert:function(e){return[(e[0]-this.x)/this.k,(e[1]-this.y)/this.k]},invertX:function(e){return(e-this.x)/this.k},invertY:function(e){return(e-this.y)/this.k},rescaleX:function(e){return e.copy().domain(e.range().map(this.invertX,this).map(e.invert,e))},rescaleY:function(e){return e.copy().domain(e.range().map(this.invertY,this).map(e.invert,e))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};Vn.prototype;const k2={class:"knowledge-graph-shell"},Je=720,Ue=320,me=44,x2=U({__name:"KnowledgeGraph",setup(e){const n=Je/2,t=Ue/2,a=ae(null);let o=null,i=null,s=null,r=null;const l=[{id:"agentic",label:"Agentic",size:22,group:"main"},{id:"devops",label:"DevOps",size:24,group:"main"},{id:"architecture",label:"Architecture",size:22,group:"main"},{id:"golang",label:"Go",size:14,group:"secondary"},{id:"kubernetes",label:"K8S",size:14,group:"secondary"},{id:"cloud",label:"Cloud",size:14,group:"secondary"},{id:"cicd",label:"GitOps",size:13,group:"secondary"},{id:"development",label:"Development",size:14,group:"secondary"},{id:"ddd",label:"DDD",size:13,group:"secondary"},{id:"microservices",label:"MicroServices",size:13,group:"secondary"},{id:"copilot",label:"Copilot",size:13,group:"secondary"},{id:"aws",label:"AWS",size:11,group:"leaf"},{id:"tdd",label:"TDD",size:11,group:"leaf"},{id:"kotlin",label:"Kotlin",size:11,group:"leaf"}],c=l.filter(I=>typeof I.anchorX=="number"&&typeof I.anchorY=="number"),d=c.map(I=>I.anchorX),g=c.map(I=>I.anchorY),u=Math.min(...d),h=Math.max(...d),v=Math.min(...g),b=Math.max(...g);function _(I){const V=Je-me*2;return me+(I-u)/Math.max(h-u,1)*V}function x(I){const V=Ue-me*2;return me+(I-v)/Math.max(b-v,1)*V}const A={agentic:{x:n-132,y:t-44},devops:{x:n,y:t+8},architecture:{x:n+132,y:t-44}};function D(I){var V;return I.group==="main"?((V=A[I.id])==null?void 0:V.x)??n:typeof I.anchorX=="number"?_(I.anchorX):n}function y(I){var V;return I.group==="main"?((V=A[I.id])==null?void 0:V.y)??t:typeof I.anchorY=="number"?x(I.anchorY):t}const T=l.map(I=>({...I,x:D(I),y:y(I)})),k=[{id:"golang-kubernetes",source:"golang",target:"kubernetes"},{id:"golang-development",source:"golang",target:"development"},{id:"kubernetes-devops",source:"kubernetes",target:"devops"},{id:"kubernetes-cloud",source:"kubernetes",target:"cloud"},{id:"cloud-aws",source:"cloud",target:"aws"},{id:"cicd-devops",source:"cicd",target:"devops"},{id:"development-tdd",source:"development",target:"tdd"},{id:"development-ddd",source:"development",target:"ddd"},{id:"ddd-architecture",source:"ddd",target:"architecture"},{id:"ddd-microservices",source:"ddd",target:"microservices"},{id:"microservices-architecture",source:"microservices",target:"architecture"},{id:"copilot-agentic",source:"copilot",target:"agentic"},{id:"copilot-development",source:"copilot",target:"development"},{id:"golang-kotlin",source:"golang",target:"kotlin"}],E=new Map(T.map(I=>[I.id,I]));function B(I,V){const H=getComputedStyle(document.documentElement).getPropertyValue(I).trim();if(!H)return V;if(H.startsWith("#")){const O=H.slice(1),Y=O.length===3?`${O[0]}${O[0]}${O[1]}${O[1]}${O[2]}${O[2]}`:O;if(Y.length===6){const J=parseInt(Y.slice(0,2),16),P=parseInt(Y.slice(2,4),16),oe=parseInt(Y.slice(4,6),16);return`rgb(${J}, ${P}, ${oe})`}}return H}function W(){return{mainNode:B("--color-primary","rgb(84, 95, 115)"),secondaryNode:B("--color-primary-container","rgb(216, 227, 251)"),leafNode:B("--color-surface-container-low","rgb(231, 236, 239)"),edgeColor:B("--color-outline-variant","rgb(169, 180, 185)"),activeEdge:B("--color-tertiary","rgb(58, 82, 95)"),dimColor:B("--color-surface","rgb(242, 244, 245)"),labelColor:B("--color-on-surface","rgb(42, 52, 57)"),dimLabelColor:B("--color-on-surface-variant","rgb(95, 108, 114)"),surfaceColor:B("--color-surface-container-lowest","rgb(255, 255, 255)")}}function F(I){if(I)return typeof I=="string"?E.get(I):I}function $(I){return I?typeof I=="string"?I:I.id:null}function M(I){return Math.max(I.size*.84,10)}function L(I){return Number.isFinite(I.x)?I.x:Je/2}function z(I){return Number.isFinite(I.y)?I.y:Ue/2}function te(I){const V=M(I),H=me+V,O=Je-me-V,Y=me+V,J=Ue-me-V;I.x=Math.min(O,Math.max(H,L(I))),I.y=Math.min(J,Math.max(Y,z(I)))}function ee(I,V){const H=M(I),O=me+H,Y=Je-me-H;return Math.min(Y,Math.max(O,V))}function K(I,V){const H=M(I),O=me+H,Y=Ue-me-H;return Math.min(Y,Math.max(O,V))}function re(I,V){const H=k.find(O=>O.id===I);return H?$(H.source)===V||$(H.target)===V:!1}function de(I){return o?I===o?!0:k.some(V=>re(V.id,I)&&re(V.id,o)):!1}function ue(I,V){return I==="main"?V.mainNode:I==="secondary"?V.secondaryNode:V.leafNode}function Ce(){if(!a.value)return;const I=ln(a.value).select("svg.knowledge-graph-svg");I.empty()||(I.selectAll("line.graph-edge").attr("x1",V=>L(F(V.source)??T[0])).attr("y1",V=>z(F(V.source)??T[0])).attr("x2",V=>L(F(V.target)??T[0])).attr("y2",V=>z(F(V.target)??T[0])),I.selectAll("line.graph-edge-hitbox").attr("x1",V=>L(F(V.source)??T[0])).attr("y1",V=>z(F(V.source)??T[0])).attr("x2",V=>L(F(V.target)??T[0])).attr("y2",V=>z(F(V.target)??T[0])),I.selectAll("g.graph-node").attr("transform",V=>`translate(${L(V)}, ${z(V)})`))}function _e(){if(!a.value)return;const I=W(),V=ln(a.value).select("svg.knowledge-graph-svg");V.empty()||(V.select("rect.graph-surface").attr("fill",I.surfaceColor).attr("opacity",.18),V.selectAll("line.graph-grid").attr("stroke",I.dimColor).attr("opacity",.55),V.selectAll("line.graph-edge").attr("stroke",H=>H.id===i?I.activeEdge:o&&!re(H.id,o)||i&&H.id!==i?I.dimColor:I.edgeColor).attr("stroke-width",H=>H.id===i?3.4:1.8).attr("opacity",H=>H.id===i?1:o&&!re(H.id,o)||i&&H.id!==i?.35:.9),V.selectAll("circle.graph-node-shape").attr("r",H=>{const O=M(H);return H.id===o?O*1.12:O}).attr("fill",H=>ue(H.group,I)).attr("stroke",I.surfaceColor).attr("stroke-width",H=>H.id===o?3:2).attr("opacity",H=>H.id===o?1:o&&!de(H.id)||i&&!re(i,H.id)?.4:.96),V.selectAll("text.graph-node-label").attr("fill",H=>o&&!de(H.id)||i&&!re(i,H.id)?I.dimLabelColor:I.labelColor).attr("opacity",H=>o&&!de(H.id)||i&&!re(i,H.id)?.6:1))}function le(){o=null,i=null,_e()}function Le(){if(!a.value)return;const I=ln(a.value);I.selectAll("*").remove();const V=I.append("svg").attr("viewBox",`0 0 ${Je} ${Ue}`).attr("class","knowledge-graph-svg").attr("role","img").attr("aria-label","engineering knowledge graph").on("mouseleave",()=>{le()});V.append("rect").attr("class","graph-surface").attr("x",0).attr("y",0).attr("width",Je).attr("height",Ue).attr("rx",28),V.append("g").selectAll("line.graph-grid").data([.2,.5,.8]).join("line").attr("class","graph-grid").attr("x1",me).attr("x2",Je-me).attr("y1",P=>me+P*(Ue-me*2)).attr("y2",P=>me+P*(Ue-me*2)).attr("stroke-width",1).attr("stroke-dasharray","5 8");const H=V.append("g").attr("class","edge-layer"),O=V.append("g").attr("class","node-layer"),Y=kf().on("start",(P,oe)=>{P.active||r==null||r.alphaTarget(.18).restart(),oe.fx=L(oe),oe.fy=z(oe)}).on("drag",(P,oe)=>{oe.fx=ee(oe,P.x),oe.fy=K(oe,P.y),Ce()}).on("end",(P,oe)=>{P.active||r==null||r.alphaTarget(0),oe.fx=null,oe.fy=null});H.selectAll("line.graph-edge").data(k).join("line").attr("class","graph-edge").attr("stroke-linecap","round"),H.selectAll("line.graph-edge-hitbox").data(k).join("line").attr("class","graph-edge-hitbox").attr("stroke","transparent").attr("stroke-width",14).attr("stroke-linecap","round").style("cursor","pointer").on("mouseenter",(P,oe)=>{i=oe.id,o=null,_e()});const J=O.selectAll("g.graph-node").data(T).join("g").attr("class","graph-node").style("cursor","pointer").on("mouseenter",(P,oe)=>{o=oe.id,i=null,_e()}).call(Y);J.append("circle").attr("class","graph-node-shape"),J.append("text").attr("class","graph-node-label").text(P=>P.label).attr("text-anchor","middle").attr("dominant-baseline","middle").attr("font-size",P=>Math.max(P.size*.78,10)).attr("font-weight",P=>P.group==="main"?700:600).style("pointer-events","none"),Ce(),_e()}function Te(){r==null||r.stop(),r=Gv(T).force("link",Rv(k).id(I=>I.id).distance(I=>{const V=F(I.source),H=F(I.target);return(V==null?void 0:V.group)==="main"||(H==null?void 0:H.group)==="main"?104:(V==null?void 0:V.group)==="leaf"||(H==null?void 0:H.group)==="leaf"?72:88}).strength(.4)).force("charge",Hv().strength(I=>I.group==="main"?-780:I.group==="secondary"?-520:-320)).force("center",fv(n,t)).force("x",Wv(I=>D(I)).strength(I=>I.group==="main"?.24:.08)).force("y",Kv(I=>y(I)).strength(I=>I.group==="main"?.22:.06)).force("collision",Ev().radius(I=>M(I)+12).iterations(3)).alpha(.9).alphaDecay(.04).velocityDecay(.3).on("tick",()=>{T.forEach(I=>{te(I)}),Ce()})}return Ee(()=>{Le(),Te(),s=new MutationObserver(()=>{_e()}),s.observe(document.documentElement,{attributes:!0,attributeFilter:["class","data-theme"]})}),Fa(()=>{s&&(s.disconnect(),s=null),r&&(r.stop(),r=null)}),(I,V)=>(f(),w("div",k2,[p("div",{ref_key:"containerRef",ref:a,class:"knowledge-graph-canvas"},null,512)]))}}),A2=X(x2,[["__scopeId","data-v-49a3d5a3"]]);function pe(e){return e.replace(/^\/+/,"").replace(/^docs\//,"")}function _s(e){return`/${pe(e)}`}function jr(e){return Object.keys(e).reduce((n,t)=>(n[pe(t)]=t,n),{})}function Ur(e,n,t){const a=pe(e),o=[_s(e),`/${a}`,a,t[a]].filter(i=>!!i);for(const i of o){const s=n[i];if(s)return{modulePath:i,raw:s}}return{modulePath:_s(e),raw:void 0}}function Nt(e){const n=pe(e);return n.split("/").pop()||n}function ws(e){return e.replace(/^['\"]|['\"]$/g,"").trim()}function C2(e){const n=e.trim();if(n.startsWith("[")&&n.endsWith("]")){const t=n.slice(1,-1).trim();return t?t.split(",").map(a=>ws(a.trim())).filter(a=>a.length>0):[]}return ws(n)}function Gr(e){const n=e.match(/^---\n([\s\S]*?)\n---/);if(!n)return{};const t={};for(const a of n[1].split(`
`)){if(!a||/^\s/.test(a)||a.startsWith("#"))continue;const o=a.indexOf(":");if(o<0)continue;const i=a.slice(0,o).trim(),s=C2(a.slice(o+1));t[i]=s}return t}function Hr(e){return e.replace(/^---[\s\S]*?---\n?/,"").trim()}function Wr(e){const t=Hr(e).split(/\n\s*\n/).find(a=>a.trim().length>0);return(t==null?void 0:t.replace(/^#+\s+/,"").trim())||""}function Kr(e,n={}){const a=Hr(e).replace(/```[\s\S]*?```/g," ").replace(/`[^`]*`/g," ").replace(/!\[[^\]]*\]\([^)]*\)/g," ").replace(/\[[^\]]*\]\([^)]*\)/g," ").replace(/[#>*_~\-]/g," ").replace(/\s+/g," ").trim().length,o=Math.max(1,Math.ceil(a/500));return typeof n.formatter=="function"?n.formatter(o):n.template?n.template.replace("{minutes}",String(o)):`~ ${o} min read`}function Fn(e){return e?`/${pe(e).replace(/\.md$/,"").replace(/\/index$/,"/")}`:"#"}function Yr(e){const n=e.replace(/[.+^${}()|[\]\\]/g,"\\$&").replace(/\*\*/g,"::DOUBLE_STAR::").replace(/\*/g,"[^/]*").replace(/::DOUBLE_STAR::/g,".*");return new RegExp(`^${n}$`)}function Xr(e){const n=String(e.category||"").trim();return n&&e.categoryMeta&&e.categoryMeta[n]?e.categoryMeta[n]:{}}function xi(e){const n=Xr(e);return n.label?n.label:String(e.category||"").trim()}function Ai(e){const n=Xr(e);return n.colorClass?n.colorClass:""}const T2="/assets/1644655887368.DQapbKac.jpg",S2="/assets/1644658272643.DixkFUdM.jpg",I2="/assets/wx20220212-172346.Bdr25vH2.png",P2="/assets/wx20220212-172451.BB6BU37T.png",M2="/assets/1-6zojnn4sdsd9kylfhr34-a-1640317491743-0.BT5IPXlG.png",D2="/assets/1-n1zqvw8bk-o8rwxnzs5kq-1640317547459-0.DWMxzrzx.png",L2="/assets/2022-03-13-22-37-47.FXklLsNs.jpeg",$2="/assets/dual-clutch-transmission-13-1640318081688-0.B4hokDfU.gif",N2="/assets/skills.BAnIdTNL.png",E2="/assets/wiki-type-of-architect-1640317457778-0.C3YyCdof.png",O2="/assets/wx20220320-163559.CfWPxfHG.png",R2="/assets/wx20220320-163907.B6vfIgkR.png",z2="/assets/wx20220321-104324.BgpfGzm0.png",q2="/assets/image-1653875255217-0.DLUkC6WM.png",V2="/assets/2022-05-25-10-21-15.BG964yVJ.png",B2="/assets/image-16.yUtl20qA.png",F2="/assets/image-17.hTTOmgfs.png",j2="/assets/image-18.HclV9ZG2.png",U2="/assets/1645694079239.C_nre4re.jpg",G2="/assets/achitecture-discussing-2.CIp6ic9U.jpeg",H2="/assets/achitecture-discussing._BjOxGqC.jpeg",W2="/assets/basic-diagram.k-lcOFHY.jpeg",K2="/assets/building-architecture.CVLmaHKi.jpeg",Y2="/assets/image-01.9UEyGlKG.png",X2="/assets/image-02.lC5tp8JY.png",Q2="/assets/image-03.CN1AMQ2n.png",J2="/assets/image-21.GzBuHhpo.png",Z2="/assets/image-31.BCqMHRFV.png",e1="/assets/image-32.BONEHxoC.png",n1="/assets/image-33.35tIccBN.png",t1="/assets/image-34.BI0AYe_e.png",a1="/assets/image-35.Dqw7EEZo.png",o1="/assets/image-36.B6zYBbcF.png",i1="/assets/image-37.Bug7G00R.png",s1="/assets/image-38.F3X5v5gc.png",r1="/assets/image-main.d3gkZeRb.png",l1="/assets/math-diagram.CeYjpfsa.jpeg",c1="/assets/network-topology.CSAnXw-U.webp",u1="/assets/pictograph-1.BjKnp1uA.jpeg",d1="/assets/quick-sort.DqDqTYZk.png",h1="/assets/words.BJuqccBz.webp",p1="/assets/image.v72K2I7B.png",g1="/assets/image-1.CABcO0hy.png",m1="/assets/image-2.CqDiP9_8.png",f1="/assets/image.C-NbRYb4.png",v1="/assets/langchain-ollama.BRx4KDS9.png",b1="/assets/llm-architecture.Brkjch2V.png",y1="/assets/git-graph-0.C4G_Ghqh.png",_1="/assets/git-graph-1.0NB7GhSV.png",w1="/assets/devops.D2KY2cuE.png",k1="/assets/homepage.CbpzU-qz.png",x1="/assets/mp-weixin-green.CsjjYBS_.png",A1="/assets/mp-weixin-white.CcgfmLQg.png",C1="/assets/old.BLdKa2Z6.png",T1="/assets/image-1.BZojNKVT.png",S1="/assets/image-2.DU_0Fs-4.png",I1="/assets/image-3.DFogVQnE.png",P1="/assets/image-main.QAIGTop_.png",M1="/assets/mp-weixin-green.CsjjYBS_.png",D1="/assets/mp-weixin-white.CcgfmLQg.png",L1="/assets/1776153628712.Bl4yzL5r.png",$1="https://picsum.photos/800/600";function N1(e){let n=0;for(let t=0;t<e.length;t+=1)n=(n*31+e.charCodeAt(t))%1e4;return n+1}function E1(e){return e.replace(/^\/+/,"").replace(/^docs\//,"")}function O1(e){const n=E1(e||"")||"default",t=N1(n);return`${$1}?random=${t}`}const R1=new Set(["","null","undefined","none","n/a","na","-"]),z1=Object.assign({"/blogs/assets/202202-logseq-build-your-own-wiki/1644655887368.jpg":T2,"/blogs/assets/202202-logseq-build-your-own-wiki/1644658272643.jpg":S2,"/blogs/assets/202202-logseq-build-your-own-wiki/wx20220212-172346.png":I2,"/blogs/assets/202202-logseq-build-your-own-wiki/wx20220212-172451.png":P2,"/blogs/assets/202203-mesh-shaped-cloud-native-developer/1-6zojnn4sdsd9kylfhr34-a-1640317491743-0.png":M2,"/blogs/assets/202203-mesh-shaped-cloud-native-developer/1-n1zqvw8bk-o8rwxnzs5kq-1640317547459-0.png":D2,"/blogs/assets/202203-mesh-shaped-cloud-native-developer/2022-03-13-22-37-47.jpeg":L2,"/blogs/assets/202203-mesh-shaped-cloud-native-developer/dual-clutch-transmission-13-1640318081688-0.gif":$2,"/blogs/assets/202203-mesh-shaped-cloud-native-developer/skills.png":N2,"/blogs/assets/202203-mesh-shaped-cloud-native-developer/wiki-type-of-architect-1640317457778-0.png":E2,"/blogs/assets/202203-mesh-shaped-cloud-native-developer/wx20220320-163559.png":O2,"/blogs/assets/202203-mesh-shaped-cloud-native-developer/wx20220320-163907.png":R2,"/blogs/assets/202203-mesh-shaped-cloud-native-developer/wx20220321-104324.png":z2,"/blogs/assets/202203-mesh-shaped-recap/image-1653875255217-0.png":q2,"/blogs/assets/202205-router-proxy-gtw/2022-05-25-10-21-15.png":V2,"/blogs/assets/202211-cloud-native-engineering/image-16.png":B2,"/blogs/assets/202211-cloud-native-engineering/image-17.png":F2,"/blogs/assets/202211-cloud-native-engineering/image-18.png":j2,"/blogs/assets/202212-logseq-customized-with-clojure-and-css/1645694079239.jpg":U2,"/blogs/assets/202304-draw-architecture-diagram/achitecture-discussing-2.jpeg":G2,"/blogs/assets/202304-draw-architecture-diagram/achitecture-discussing.jpeg":H2,"/blogs/assets/202304-draw-architecture-diagram/basic-diagram.jpeg":W2,"/blogs/assets/202304-draw-architecture-diagram/building-architecture.jpeg":K2,"/blogs/assets/202304-draw-architecture-diagram/image-01.png":Y2,"/blogs/assets/202304-draw-architecture-diagram/image-02.png":X2,"/blogs/assets/202304-draw-architecture-diagram/image-03.png":Q2,"/blogs/assets/202304-draw-architecture-diagram/image-21.png":J2,"/blogs/assets/202304-draw-architecture-diagram/image-31.png":Z2,"/blogs/assets/202304-draw-architecture-diagram/image-32.png":e1,"/blogs/assets/202304-draw-architecture-diagram/image-33.png":n1,"/blogs/assets/202304-draw-architecture-diagram/image-34.png":t1,"/blogs/assets/202304-draw-architecture-diagram/image-35.png":a1,"/blogs/assets/202304-draw-architecture-diagram/image-36.png":o1,"/blogs/assets/202304-draw-architecture-diagram/image-37.png":i1,"/blogs/assets/202304-draw-architecture-diagram/image-38.png":s1,"/blogs/assets/202304-draw-architecture-diagram/image-main.png":r1,"/blogs/assets/202304-draw-architecture-diagram/math-diagram.jpeg":l1,"/blogs/assets/202304-draw-architecture-diagram/network-topology.webp":c1,"/blogs/assets/202304-draw-architecture-diagram/pictograph-1.jpeg":u1,"/blogs/assets/202304-draw-architecture-diagram/quick-sort.png":d1,"/blogs/assets/202304-draw-architecture-diagram/words.webp":h1,"/blogs/assets/202304-tunnel-vpn-vpc/image.png":p1,"/blogs/assets/202402-llm-application/image-1.png":g1,"/blogs/assets/202402-llm-application/image-2.png":m1,"/blogs/assets/202402-llm-application/image.png":f1,"/blogs/assets/202402-llm-application/langchain-ollama.png":v1,"/blogs/assets/202402-llm-application/llm-architecture.png":b1,"/blogs/assets/202406-fork-oss/git-graph-0.png":y1,"/blogs/assets/202406-fork-oss/git-graph-1.png":_1,"/blogs/assets/202406-k3s-blogs/devops.png":w1,"/blogs/assets/202406-k3s-blogs/homepage.png":k1,"/blogs/assets/202406-k3s-blogs/mp-weixin-green.png":x1,"/blogs/assets/202406-k3s-blogs/mp-weixin-white.png":A1,"/blogs/assets/202406-k3s-blogs/old.png":C1,"/blogs/assets/202412-ai-powered-pkm/image-1.png":T1,"/blogs/assets/202412-ai-powered-pkm/image-2.png":S1,"/blogs/assets/202412-ai-powered-pkm/image-3.png":I1,"/blogs/assets/202412-ai-powered-pkm/image-main.png":P1,"/blogs/assets/202412-ai-powered-pkm/mp-weixin-green.png":M1,"/blogs/assets/202412-ai-powered-pkm/mp-weixin-white.png":D1,"/blogs/assets/202604-logseq-scoring-overview/1776153628712.png":L1});function q1(e){const n=e.trim();if(!n)return[];const t=n.startsWith("/")?n:`/${n}`;return[n,t]}function V1(e){for(const n of q1(e)){const t=z1[n];if(t)return t}return e}function Kn(e,n){const t=(e||"").trim(),a=t.toLowerCase();return!t||R1.has(a)?O1(n):V1(t)}const B1={class:"bg-surface dark:bg-slate-900 text-on-surface dark:text-slate-100"},F1={class:"pt-32 pb-24"},j1={class:"max-w-7xl mx-auto px-8 mb-32"},U1={class:"grid grid-cols-1 lg:grid-cols-12 gap-12 items-start"},G1={class:"lg:col-span-6"},H1={class:"mb-6 inline-block bg-primary-container px-3 py-1 rounded text-[10px] uppercase tracking-widest font-bold text-on-primary-container"},W1={class:"text-[3.5rem] font-extrabold tracking-tight leading-[1.1] mb-8 text-on-surface dark:text-slate-100"},K1={class:"text-[1.375rem] leading-relaxed text-on-surface-variant dark:text-slate-400 font-light mb-8 max-w-2xl"},Y1={class:"flex items-center gap-4 mb-12"},X1={class:"text-sm text-on-surface-variant dark:text-slate-400"},Q1={class:"lg:col-span-6 relative lg:mt-12"},J1={class:"bg-surface-container-lowest dark:bg-slate-950 p-6 rounded-lg dark:border-slate-700"},Z1={class:"bg-surface-container-low dark:bg-slate-900 py-24"},e_={class:"max-w-7xl mx-auto px-8"},n_={class:"flex justify-between items-end mb-16"},t_={class:"label-sm text-tertiary font-bold tracking-[0.2em] uppercase text-xs mb-4 block pb-4"},a_={class:"text-[2.25rem] font-bold tracking-tight text-on-surface dark:text-slate-100"},o_={class:"grid grid-cols-1 md:grid-cols-2 gap-px bg-outline-variant/10 dark:bg-slate-700"},i_=["src","alt"],s_=["data-icon"],r_={class:"text-xl font-bold mb-4 text-on-surface dark:text-slate-100"},l_={class:"text-on-surface-variant dark:text-slate-400 leading-relaxed"},c_={class:"max-w-7xl mx-auto px-8 py-32"},u_={class:"mb-16 flex items-center justify-between gap-6"},d_={class:"text-[2.25rem] font-bold tracking-tight text-on-surface dark:text-slate-100 mb-2"},h_=["href"],p_={key:0,class:"grid grid-cols-1 md:grid-cols-12 gap-8"},g_=["href"],m_={class:"relative overflow-hidden rounded-xl mb-6 aspect-[16/9] bg-surface-container-low dark:bg-slate-900"},f_=["alt","src"],v_={class:"flex items-center gap-4 mb-4"},b_={class:"text-xs text-outline dark:text-slate-400 tracking-wider"},y_={class:"text-3xl font-bold tracking-tight mb-4 group-hover:text-tertiary transition-colors"},__={class:"text-on-surface-variant dark:text-slate-400 line-clamp-2 max-w-2xl"},w_={class:"md:col-span-4 flex flex-col gap-12"},k_=["href"],x_={class:"flex items-center gap-3 mb-3"},A_={class:"text-[10px] text-outline dark:text-slate-400"},C_={class:"text-xl font-bold tracking-tight mb-3 group-hover:text-tertiary transition-colors leading-tight"},T_={class:"text-sm text-on-surface-variant dark:text-slate-400 line-clamp-2"},S_={class:"mt-4 flex items-center gap-1 text-tertiary text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity"},I_={key:1,class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"},P_=["href"],M_=["src","alt"],D_={class:"p-5"},L_={class:"flex items-center justify-between gap-3 mb-3"},$_={class:"text-[10px] text-outline dark:text-slate-400"},N_={class:"text-base font-bold tracking-tight mb-2 text-on-surface dark:text-slate-100"},E_={class:"text-sm text-on-surface-variant dark:text-slate-400 line-clamp-3"},O_={key:0,class:"max-w-7xl mx-auto px-8"},R_={class:"bg-primary text-on-primary p-16 rounded-xl relative overflow-hidden"},z_={class:"relative z-10 max-w-2xl"},q_={class:"text-3xl font-bold tracking-tight mb-4"},V_={class:"text-on-primary/80 mb-8 text-lg"},B_={class:"flex flex-col sm:flex-row gap-4"},F_=["placeholder"],j_={class:"bg-on-primary text-primary font-bold px-8 py-3 rounded-lg hover:bg-primary-container transition-all active:scale-95",type:"submit"},U_=U({__name:"AboutMeLayout",setup(e){const{lang:n}=gn(),{page:t}=Ft(),{headerConfig:a,footerConfig:o,uiConfig:i}=jt(),s=R(()=>i.value.common||{}),r=R(()=>i.value.about||{}),l=R(()=>i.value.blog||{}),c=R(()=>l.value.categoryMeta||{}),d=Object.assign({"/about-me.md":Xa,"/blogs/2022/202202-logseq-build-your-own-wiki.md":Qa,"/blogs/2022/202203-mesh-shaped-cloud-native-developer.md":Ja,"/blogs/2022/202203-mesh-shaped-recap.md":Za,"/blogs/2022/202205-container-k8s-docker.md":eo,"/blogs/2022/202205-router-proxy-gtw.md":no,"/blogs/2022/202211-cloud-native-engineering.md":to,"/blogs/2022/202212-api-design-inspired-by-google-api-design.md":ao,"/blogs/2022/202212-go-monorepo-tutorial.md":oo,"/blogs/2022/202212-logseq-customized-with-clojure-and-css.md":io,"/blogs/2022/202212-logseq-pkm.md":so,"/blogs/2023/202302-iac-and-terraform.md":ro,"/blogs/2023/202304-draw-architecture-diagram.md":lo,"/blogs/2023/202304-tunnel-vpn-vpc.md":co,"/blogs/2023/202306-remote-development-in-cloud.md":uo,"/blogs/2023/202312-agile-and-lean.md":ho,"/blogs/2023/202312-cobra-cli.md":po,"/blogs/2023/202312-devcontainer-tutorial.md":go,"/blogs/2023/202312-illustrated-ai.md":mo,"/blogs/2023/202312-kubernetes-operator.md":fo,"/blogs/2023/202312-windows-workspaces.md":vo,"/blogs/2024/202401-cloud-native-practices.md":bo,"/blogs/2024/202401-eassy-2024.md":yo,"/blogs/2024/202401-illustrations.md":_o,"/blogs/2024/202402-llm-application.md":wo,"/blogs/2024/202403-ai-and-human.md":ko,"/blogs/2024/202406-fork-oss.md":xo,"/blogs/2024/202406-k3s-blogs.md":Ao,"/blogs/2024/202412-ai-powered-pkm.md":Co,"/blogs/2026/202602-domain-spec-agents.md":To,"/blogs/2026/202602-pov-agentic-engineering.md":So,"/blogs/2026/202602-pov-standard-automation-selfserve.md":Io,"/blogs/2026/202604-llm-wiki-self-evolving-brains.md":Po,"/blogs/2026/202604-logseq-scoring-overview.md":Mo,"/blogs/index.md":Do,"/en/about-me.md":Lo,"/en/blogs/2022/202202-logseq-build-your-own-wiki.md":$o,"/en/blogs/2022/202203-mesh-shaped-cloud-native-developer.md":No,"/en/blogs/2022/202205-container-k8s-docker.md":Eo,"/en/blogs/2022/202205-router-proxy-gtw.md":Oo,"/en/blogs/2022/202211-cloud-native-engineering.md":Ro,"/en/blogs/2022/202212-logseq-customized-with-clojure-and-css.md":zo,"/en/blogs/2022/202212-logseq-pkm.md":qo,"/en/blogs/2023/202302-iac-and-terraform.md":Vo,"/en/blogs/2023/202304-draw-architecture-diagram.md":Bo,"/en/blogs/2023/202304-tunnel-vpn-vpc.md":Fo,"/en/blogs/2023/202306-remote-development-in-cloud.md":jo,"/en/blogs/2023/202312-agile-and-lean.md":Uo,"/en/blogs/2023/202312-devcontainer-tutorial.md":Go,"/en/blogs/2024/202401-cloud-native-practices.md":Ho,"/en/blogs/2024/202401-illustrations.md":Wo,"/en/blogs/2024/202402-llm-application.md":Ko,"/en/blogs/2024/202403-ai-and-human.md":Yo,"/en/blogs/2024/202412-ai-powered-pkm.md":Xo,"/en/blogs/2026/202602-domain-spec-agents.md":Qo,"/en/blogs/2026/202602-pov-agentic-engineering.md":Jo,"/en/blogs/2026/202602-pov-standard-automation-selfserve.md":Zo,"/en/blogs/index.md":ei,"/en/index.md":ni,"/index.md":ti}),g=jr(d);function u(k){var $,M;const{modulePath:E,raw:B}=Ur(k,d,g);if(!B)return console.warn(`[AboutMeLayout] markdown not found for path: ${k}`),console.warn(`[AboutMeLayout] attempted module key: ${E}`),null;const W=Gr(B),F=W.title||W.heroTitle||((M=($=pe(k).split("/").pop())==null?void 0:$.replace(/\.md$/,""))==null?void 0:M.replace(/[-_]/g," "))||String(s.value.untitled||"Untitled");return{path:pe(k),title:F,description:W.description||W.heroDescription||W.articleLead||Wr(B),date:W.date,category:W.category,image:W.image}}const h=R(()=>{const k=t.value.featuredArticle;if(!k)return null;if(typeof k=="string")return u(k);if(typeof k=="object"&&typeof k.path=="string"){const E=u(k.path);return E?{...E,...k,path:E.path}:null}return typeof k=="object"?k:null}),v=R(()=>{var M;const k=t.value.sideArticles,E=pe(((M=h.value)==null?void 0:M.path)||"");if(Array.isArray(k))return k.filter(L=>pe(L.path||"")!==E);if(!k||typeof k!="object")return[];const B=pe(k.path||"blog/**/*.md"),W=Number(k.count||4),F=Yr(B);return Object.keys(d).map(L=>pe(L)).filter(L=>F.test(L)).sort((L,z)=>{const te=Nt(z).localeCompare(Nt(L));return te!==0?te:z.localeCompare(L)}).map(L=>u(L)).filter(L=>!!L).filter(L=>pe(L.path||"")!==E).slice(0,W)}),b=R(()=>!!h.value),_=R(()=>b.value?v.value:v.value.slice(0,4)),x=R(()=>t.value.articlesMoreHref||(n.value==="en"?"/en/blog/":"/blog/")),A=R(()=>t.value.articlesMoreText||r.value.viewMore||"View More");function D(k){return typeof k=="string"&&/^https?:\/\//.test(k)}function y(k){return xi({category:String(k||""),categoryMeta:c.value})}function T(k){return Ai({category:String(k||""),categoryMeta:c.value})}return(k,E)=>{var B,W,F,$,M,L,z,te,ee;return f(),w("div",B1,[j(Vt,{"site-title":m(a).siteTitle||m(t).siteTitle,"nav-links":m(a).navLinks||m(t).navLinks||[],"show-subscribe":!!m(a).showSubscribe,"subscribe-button-text":m(a).subscribeButtonText,"nav-height-class":"h-20"},null,8,["site-title","nav-links","show-subscribe","subscribe-button-text"]),p("main",F1,[p("section",j1,[p("div",U1,[p("div",G1,[p("div",H1,S(m(t).heroEyebrow),1),p("h1",W1,S(m(t).heroTitle),1),p("p",K1,S(m(t).heroDescription),1),p("div",Y1,[p("p",X1,S(m(t).heroMeta),1)])]),p("div",Q1,[p("div",J1,[E[0]||(E[0]=p("span",{class:"text-s font-bold tracking-tight text-slate-700 dark:text-slate-300 mb-6"}," Graph: Mesh Capabilities ",-1)),j(A2)])])])]),p("section",Z1,[p("div",e_,[p("div",n_,[p("div",null,[p("span",t_,S(m(t).focusEyebrow),1),p("h2",a_,S(m(t).focusTitle),1)]),E[1]||(E[1]=p("div",{class:"hidden md:block w-1/3 h-[1px] bg-outline-variant/20 dark:bg-slate-700 mb-4"},null,-1))]),p("div",o_,[(f(!0),w(Z,null,ie(m(t).focusCards||[],K=>(f(),w("div",{key:K.title,class:"bg-surface-container-lowest dark:bg-slate-950 p-10 transition-colors"},[D(K.icon)?(f(),w("img",{key:0,src:K.icon,alt:K.title,class:"w-10 h-10 object-contain mb-6"},null,8,i_)):(f(),w("span",{key:1,class:"material-symbols-outlined text-primary mb-6 block text-4xl dark:text-tertiary","data-icon":K.icon},S(K.icon),9,s_)),p("h3",r_,S(K.title),1),p("p",l_,S(K.description),1)]))),128))])])]),p("section",c_,[p("div",u_,[p("div",null,[p("h2",d_,S(m(t).articlesTitle),1),E[2]||(E[2]=p("div",{class:"w-12 h-1 bg-primary"},null,-1))]),p("a",{href:x.value,class:"inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-outline-variant/30 dark:border-slate-700 text-sm font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors"},[Ae(S(A.value)+" ",1),E[3]||(E[3]=p("span",{class:"material-symbols-outlined text-sm"},"arrow_forward",-1))],8,h_)]),b.value?(f(),w("div",p_,[p("a",{href:m(Fn)((B=h.value)==null?void 0:B.path),class:"md:col-span-8 group cursor-pointer block"},[p("div",m_,[p("img",{alt:(W=h.value)==null?void 0:W.title,class:"w-full h-full object-cover transition-transform duration-700 group-hover:scale-105",src:m(Kn)((F=h.value)==null?void 0:F.image,($=h.value)==null?void 0:$.path)},null,8,f_),E[4]||(E[4]=p("div",{class:"absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"},null,-1))]),p("div",v_,[p("span",{class:Q(["text-xs font-bold uppercase tracking-widest px-2 py-0.5 rounded",T((M=h.value)==null?void 0:M.category)])},S(y((L=h.value)==null?void 0:L.category)),3),p("span",b_,S((z=h.value)==null?void 0:z.date),1)]),p("h3",y_,S((te=h.value)==null?void 0:te.title),1),p("p",__,S((ee=h.value)==null?void 0:ee.description),1)],8,g_),p("div",w_,[(f(!0),w(Z,null,ie(_.value,K=>(f(),w("a",{key:K.title,href:m(Fn)(K.path),class:"group cursor-pointer block"},[p("div",x_,[p("span",{class:Q(["text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded",T(K.category)])},S(y(K.category)),3),p("span",A_,S(K.date),1)]),p("h4",C_,S(K.title),1),p("p",T_,S(K.description),1),p("div",S_,[Ae(S(m(t).readMoreLabel)+" ",1),E[5]||(E[5]=p("span",{class:"material-symbols-outlined text-sm"},"arrow_forward",-1))])],8,k_))),128))])])):(f(),w("div",I_,[(f(!0),w(Z,null,ie(_.value,K=>(f(),w("a",{key:K.title,href:m(Fn)(K.path),class:"bg-surface-container-lowest dark:bg-slate-900 border border-outline-variant/10 dark:border-slate-700 rounded-xl overflow-hidden block"},[p("img",{src:m(Kn)(K.image,K.path),alt:K.title,class:"w-full h-40 object-cover"},null,8,M_),p("div",D_,[p("div",L_,[p("span",{class:Q(["text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded",T(K.category)])},S(y(K.category)),3),p("span",$_,S(K.date),1)]),p("h4",N_,S(K.title),1),p("p",E_,S(K.description),1)])],8,P_))),128))]))]),m(t).subscribeTitle?(f(),w("section",O_,[p("div",R_,[E[6]||(E[6]=p("div",{class:"absolute top-0 right-0 w-1/3 h-full mesh-grid opacity-10"},null,-1)),p("div",z_,[p("h2",q_,S(m(t).subscribeTitle),1),p("p",V_,S(m(t).subscribeDescription),1),p("form",B_,[p("input",{class:"bg-white/10 border border-white/20 rounded-lg px-6 py-3 flex-grow focus:outline-none focus:ring-2 focus:ring-on-primary/50 text-white placeholder-white/40",placeholder:m(t).subscribePlaceholder,type:"email"},null,8,F_),p("button",j_,S(m(t).subscribeButton),1)])])])])):q("",!0)]),j(Bt,{title:m(o).title||m(t).footerTitle,description:m(o).description||m(t).footerDescription,links:m(o).links||m(t).footerLinks||[],"social-icons":m(o).socialIcons||[]},null,8,["title","description","links","social-icons"])])}}}),G_={class:"bg-surface dark:bg-slate-900 text-slate-900 dark:text-slate-100 selection:bg-primary-container selection:text-on-primary-container"},H_={class:"pt-32 pb-24 px-6 lg:px-12 max-w-7xl mx-auto bg-surface dark:bg-slate-900"},W_={class:"mb-32 relative"},K_={class:"grid grid-cols-1 lg:grid-cols-12 gap-12 items-end"},Y_={class:"lg:col-span-7"},X_={class:"overflow-hidden rounded-xl bg-surface-container-low group"},Q_=["src"],J_={class:"lg:col-span-5 pb-4"},Z_={class:"flex items-center gap-4 mb-6"},ew={class:"text-[0.6875rem] font-medium text-outline"},nw={class:"text-5xl lg:text-6xl font-extrabold tracking-tighter leading-[1.12] lg:leading-[1.05] mb-8 text-slate-900 dark:text-slate-100"},tw={class:"text-slate-700 dark:text-slate-400 text-lg leading-relaxed mb-8 max-w-md"},aw={key:0,class:"flex flex-wrap gap-2 mb-8"},ow={class:"flex items-center justify-between border-t border-outline-variant/20 pt-6"},iw={class:"text-xs font-medium text-outline uppercase tracking-widest"},sw=["href"],rw={class:"flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8"},lw={class:"max-w-xl"},cw={class:"text-3xl font-bold tracking-tight mb-6"},uw={class:"text-slate-700 dark:text-slate-400"},dw={class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-20 gap-x-12"},hw=["href"],pw={class:"aspect-[4/3] rounded-xl overflow-hidden bg-surface-container-low mb-8"},gw=["src"],mw={class:"flex items-center gap-4 mb-4"},fw={class:"text-[0.6875rem] font-medium text-outline uppercase tracking-widest"},vw={class:"text-xl font-bold leading-tight mb-4 tracking-tight text-slate-900 dark:text-slate-100 hover:text-tertiary transition-colors"},bw={class:"text-slate-700 dark:text-slate-400 text-sm leading-relaxed mb-4"},yw={key:0,class:"flex flex-wrap gap-2 mb-6"},_w={class:"mt-auto flex items-center justify-between text-[0.6875rem] font-bold uppercase tracking-widest text-outline"},ww={class:"mt-32 pt-12 border-t border-outline-variant/20 flex justify-center items-center gap-8"},kw=["disabled"],xw={class:"flex gap-4"},Aw=["onClick"],Cw=["disabled"],Tw=U({__name:"BlogListLayout",setup(e){const{page:n}=Ft(),{headerConfig:t,footerConfig:a,uiConfig:o}=jt(),i=R(()=>o.value.common||{}),s=R(()=>o.value.blog||{}),r=R(()=>s.value.categoryMeta||{}),l=R(()=>String(s.value.readingTimeTemplate||"")),c=Object.assign({"/about-me.md":Xa,"/blogs/2022/202202-logseq-build-your-own-wiki.md":Qa,"/blogs/2022/202203-mesh-shaped-cloud-native-developer.md":Ja,"/blogs/2022/202203-mesh-shaped-recap.md":Za,"/blogs/2022/202205-container-k8s-docker.md":eo,"/blogs/2022/202205-router-proxy-gtw.md":no,"/blogs/2022/202211-cloud-native-engineering.md":to,"/blogs/2022/202212-api-design-inspired-by-google-api-design.md":ao,"/blogs/2022/202212-go-monorepo-tutorial.md":oo,"/blogs/2022/202212-logseq-customized-with-clojure-and-css.md":io,"/blogs/2022/202212-logseq-pkm.md":so,"/blogs/2023/202302-iac-and-terraform.md":ro,"/blogs/2023/202304-draw-architecture-diagram.md":lo,"/blogs/2023/202304-tunnel-vpn-vpc.md":co,"/blogs/2023/202306-remote-development-in-cloud.md":uo,"/blogs/2023/202312-agile-and-lean.md":ho,"/blogs/2023/202312-cobra-cli.md":po,"/blogs/2023/202312-devcontainer-tutorial.md":go,"/blogs/2023/202312-illustrated-ai.md":mo,"/blogs/2023/202312-kubernetes-operator.md":fo,"/blogs/2023/202312-windows-workspaces.md":vo,"/blogs/2024/202401-cloud-native-practices.md":bo,"/blogs/2024/202401-eassy-2024.md":yo,"/blogs/2024/202401-illustrations.md":_o,"/blogs/2024/202402-llm-application.md":wo,"/blogs/2024/202403-ai-and-human.md":ko,"/blogs/2024/202406-fork-oss.md":xo,"/blogs/2024/202406-k3s-blogs.md":Ao,"/blogs/2024/202412-ai-powered-pkm.md":Co,"/blogs/2026/202602-domain-spec-agents.md":To,"/blogs/2026/202602-pov-agentic-engineering.md":So,"/blogs/2026/202602-pov-standard-automation-selfserve.md":Io,"/blogs/2026/202604-llm-wiki-self-evolving-brains.md":Po,"/blogs/2026/202604-logseq-scoring-overview.md":Mo,"/blogs/index.md":Do,"/en/about-me.md":Lo,"/en/blogs/2022/202202-logseq-build-your-own-wiki.md":$o,"/en/blogs/2022/202203-mesh-shaped-cloud-native-developer.md":No,"/en/blogs/2022/202205-container-k8s-docker.md":Eo,"/en/blogs/2022/202205-router-proxy-gtw.md":Oo,"/en/blogs/2022/202211-cloud-native-engineering.md":Ro,"/en/blogs/2022/202212-logseq-customized-with-clojure-and-css.md":zo,"/en/blogs/2022/202212-logseq-pkm.md":qo,"/en/blogs/2023/202302-iac-and-terraform.md":Vo,"/en/blogs/2023/202304-draw-architecture-diagram.md":Bo,"/en/blogs/2023/202304-tunnel-vpn-vpc.md":Fo,"/en/blogs/2023/202306-remote-development-in-cloud.md":jo,"/en/blogs/2023/202312-agile-and-lean.md":Uo,"/en/blogs/2023/202312-devcontainer-tutorial.md":Go,"/en/blogs/2024/202401-cloud-native-practices.md":Ho,"/en/blogs/2024/202401-illustrations.md":Wo,"/en/blogs/2024/202402-llm-application.md":Ko,"/en/blogs/2024/202403-ai-and-human.md":Yo,"/en/blogs/2024/202412-ai-powered-pkm.md":Xo,"/en/blogs/2026/202602-domain-spec-agents.md":Qo,"/en/blogs/2026/202602-pov-agentic-engineering.md":Jo,"/en/blogs/2026/202602-pov-standard-automation-selfserve.md":Zo,"/en/blogs/index.md":ei,"/en/index.md":ni,"/index.md":ti}),d=jr(c);function g($){var ee,K;const{modulePath:M,raw:L}=Ur($,c,d);if(!L)return console.warn(`[BlogListLayout] markdown not found for path: ${$}`),console.warn(`[BlogListLayout] attempted module key: ${M}`),null;const z=Gr(L),te=pe($);return{path:te,category:z.category,tags:Array.isArray(z.tags)?z.tags.map(re=>String(re)):[],date:z.date,title:z.title||((K=(ee=te.split("/").pop())==null?void 0:ee.replace(/\.md$/,""))==null?void 0:K.replace(/[-_]/g," "))||String(i.value.untitled||"Untitled"),description:z.description||z.articleLead||Wr(L)||"",readingTime:Kr(L,{template:l.value}),action:z.action,image:z.image}}const u=R(()=>{const $=n.value.featured;if(!$)return null;if(typeof $=="string")return g($);if(typeof $=="object"&&typeof $.path=="string"){const M=g($.path);return M?{...M,...$,path:M.path}:null}return typeof $=="object"?$:null}),h=R(()=>{var te;const $=n.value.posts,M=pe(((te=u.value)==null?void 0:te.path)||"");if(Array.isArray($))return $.filter(ee=>pe(ee.path||"")!==M);if(!$||typeof $!="object")return[];const L=pe($.path||"blogs/**/*.md"),z=Yr(L);return Object.keys(c).map(ee=>pe(ee)).filter(ee=>z.test(ee)).filter(ee=>!ee.endsWith("/index.md")).sort((ee,K)=>{const re=Nt(K).localeCompare(Nt(ee));return re!==0?re:K.localeCompare(ee)}).map(ee=>g(ee)).filter(ee=>!!ee).filter(ee=>pe(ee.path||"")!==M)}),v=R(()=>{const $=n.value.posts;return!$||typeof $!="object"||Array.isArray($)?h.value.length||1:Math.max(1,Number($.perPage||$.count||9))}),b=R(()=>{const $=n.value.posts;return!$||typeof $!="object"||Array.isArray($)?Math.max(1,Number(n.value.paginationCurrent||1)):Math.max(1,Number($.page||n.value.paginationCurrent||1))}),_=ae(1);De(b,$=>{_.value=$},{immediate:!0});const x=R(()=>Math.max(1,Math.ceil(h.value.length/v.value))),A=R(()=>Math.min(Math.max(1,_.value),x.value)),D=R(()=>{const $=(A.value-1)*v.value,M=$+v.value;return h.value.slice($,M)}),y=R(()=>Array.from({length:x.value},($,M)=>String(M+1)));function T($){_.value=Math.min(Math.max(1,$),x.value)}function k(){T(A.value-1)}function E(){T(A.value+1)}function B($){return xi({category:String($||""),categoryMeta:r.value})}function W($){return Ai({category:String($||""),categoryMeta:r.value})}function F($){const M=String($.category||"").trim();return(Array.isArray($.tags)?$.tags:[]).filter(z=>{const te=String(z||"").trim();return!!te&&te!==M})}return($,M)=>{var L,z,te,ee,K,re,de,ue,Ce,_e;return f(),w("div",G_,[j(Vt,{"site-title":m(t).siteTitle||m(n).siteTitle,"nav-links":m(t).navLinks||m(n).navLinks||[],"show-subscribe":!!m(t).showSubscribe,"subscribe-button-text":m(t).subscribeButtonText,"nav-height-class":"h-20"},null,8,["site-title","nav-links","show-subscribe","subscribe-button-text"]),p("main",H_,[p("section",W_,[p("div",K_,[p("div",Y_,[p("div",X_,[p("img",{class:"w-full aspect-[16/9] object-cover transition-all duration-700 hover:scale-105",src:m(Kn)((L=u.value)==null?void 0:L.image,(z=u.value)==null?void 0:z.path)},null,8,Q_)])]),p("div",J_,[p("div",Z_,[p("span",{class:Q(["text-[0.6875rem] font-bold uppercase tracking-[0.05em] px-2 py-1 rounded",W((te=u.value)==null?void 0:te.category)])},S(B((ee=u.value)==null?void 0:ee.category)),3),p("span",ew,S((K=u.value)==null?void 0:K.date),1)]),p("h1",nw,S((re=u.value)==null?void 0:re.title),1),p("p",tw,S((de=u.value)==null?void 0:de.description),1),u.value&&F(u.value).length?(f(),w("div",aw,[(f(!0),w(Z,null,ie(F(u.value),le=>(f(),w("span",{key:`featured-${u.value.path||u.value.title}-${le}`,class:"px-2 py-0.5 rounded bg-surface-container-high text-[0.6875rem] font-semibold text-on-surface-variant dark:text-slate-400"}," #"+S(le),1))),128))])):q("",!0),p("div",ow,[p("span",iw,S((ue=u.value)==null?void 0:ue.readingTime),1),p("a",{class:"text-tertiary font-bold text-sm flex items-center gap-2 group",href:m(Fn)((Ce=u.value)==null?void 0:Ce.path)},[Ae(S(((_e=u.value)==null?void 0:_e.action)||s.value.readArticle||"Read Article")+" ",1),M[0]||(M[0]=p("span",{class:"material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform"},"arrow_forward",-1))],8,sw)])])])]),p("header",rw,[p("div",lw,[p("h2",cw,S(m(n).listTitle||s.value.latestArticles||"Latest Articles"),1),p("p",uw,S(m(n).listDescription||s.value.latestArticlesDescription||"Displayed in reverse chronological order."),1)])]),p("div",dw,[(f(!0),w(Z,null,ie(D.value,le=>(f(),w("article",{key:le.title,class:"flex flex-col"},[p("a",{href:m(Fn)(le.path),class:"group flex flex-col h-full"},[p("div",pw,[p("img",{class:"w-full h-full object-cover grayscale-[0.8] hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-110",src:m(Kn)(le.image,le.path)},null,8,gw)]),p("div",mw,[p("span",{class:Q(["text-[0.6875rem] font-bold uppercase tracking-[0.05em] px-2 py-0.5 rounded",W(le.category)])},S(B(le.category)),3),M[1]||(M[1]=p("span",{class:"w-1 h-1 bg-outline-variant rounded-full"},null,-1)),p("span",fw,S(le.date),1)]),p("h3",vw,S(le.title),1),p("p",bw,S(le.description),1),F(le).length?(f(),w("div",yw,[(f(!0),w(Z,null,ie(F(le),Le=>(f(),w("span",{key:`${le.path||le.title}-${Le}`,class:"px-2 py-0.5 rounded bg-surface-container-high text-[0.6875rem] font-semibold text-on-surface-variant dark:text-slate-400"}," #"+S(Le),1))),128))])):q("",!0),p("div",_w,[p("span",null,S(le.readingTime),1),M[2]||(M[2]=p("span",{class:"material-symbols-outlined text-sm"},"north_east",-1))])],8,hw)]))),128))]),p("div",ww,[p("button",{type:"button",disabled:A.value<=1,class:"text-xs font-bold uppercase tracking-widest text-outline hover:text-on-surface transition-colors flex items-center gap-2 disabled:opacity-40 disabled:cursor-not-allowed",onClick:k},[M[3]||(M[3]=p("span",{class:"material-symbols-outlined text-sm"},"arrow_back",-1)),Ae(" "+S(m(n).paginationPrevious||s.value.paginationPrevious||"Previous"),1)],8,kw),p("div",xw,[(f(!0),w(Z,null,ie(y.value,le=>(f(),w("button",{key:le,type:"button",class:Q(le===String(A.value)?"w-8 h-8 flex items-center justify-center rounded-full bg-primary text-on-primary text-xs font-bold":"w-8 h-8 flex items-center justify-center rounded-full hover:bg-surface-container-high text-xs font-bold cursor-pointer"),onClick:Le=>T(Number(le))},S(le),11,Aw))),128))]),p("button",{type:"button",disabled:A.value>=x.value,class:"text-xs font-bold uppercase tracking-widest text-on-surface hover:text-tertiary transition-colors flex items-center gap-2 disabled:opacity-40 disabled:cursor-not-allowed",onClick:E},[Ae(S(m(n).paginationNext||s.value.paginationNext||"Next")+" ",1),M[4]||(M[4]=p("span",{class:"material-symbols-outlined text-sm"},"arrow_forward",-1))],8,Cw)])]),j(Bt,{title:m(a).title||m(n).footerTitle,description:m(a).description||m(n).footerDescription,links:m(a).links||m(n).footerLinks||[],"social-icons":m(a).socialIcons||m(n).socialIcons||[]},null,8,["title","description","links","social-icons"])])}}}),Sw={class:"bg-surface dark:bg-slate-900 text-on-surface dark:text-slate-100"},Iw={class:"pt-16 pb-20 bg-surface dark:bg-slate-900"},Pw={class:"relative overflow-hidden bg-surface-container-low dark:bg-slate-950 mb-14"},Mw={class:"max-w-6xl mx-auto px-6 lg:px-10 py-14 lg:py-16 relative z-10"},Dw={class:"grid grid-cols-1 lg:grid-cols-12 gap-10 items-center"},Lw={class:"lg:col-span-7 flex flex-col justify-center gap-5"},$w={class:"text-4xl lg:text-5xl font-black tracking-tight leading-tight"},Nw={class:"text-base lg:text-lg text-on-surface-variant dark:text-slate-400 leading-relaxed"},Ew={class:"flex flex-wrap items-center gap-4 text-sm text-on-surface-variant dark:text-slate-400"},Ow={key:0,class:"flex flex-wrap gap-2 pt-1"},Rw={class:"lg:col-span-5 hidden lg:flex justify-center"},zw={class:"relative w-full max-w-md aspect-square rounded-full bg-surface-container-lowest/90 border border-outline-variant/20 shadow-[0px_24px_48px_rgba(42,52,57,0.08)] p-7"},qw=["src","alt"],Vw={class:"max-w-6xl mx-auto px-6 lg:px-10"},Bw={class:"grid grid-cols-1 lg:grid-cols-12 gap-10"},Fw={key:0,class:"lg:col-span-3 order-2 lg:order-1"},jw={class:"lg:sticky lg:top-28 pl-1"},Uw={class:"text-s font-bold uppercase tracking-widest text-on-surface-variant dark:text-slate-400 mb-4 -ml-1"},Gw={class:"flex flex-col gap-2 pt-1 pb-4 border-b border-outline-variant/30 dark:border-slate-600"},Hw=["href"],Ww={class:"lg:col-span-9 order-1 lg:order-2 vp-doc max-w-none dark:text-slate-300"},Kw=U({__name:"BlogLayout",setup(e){const{page:n}=gn(),{page:t}=Ft(),{headerConfig:a,footerConfig:o,uiConfig:i}=jt(),s=R(()=>i.value.blog||{}),r=R(()=>s.value.categoryMeta||{}),l=Object.assign({"/about-me.md":Xa,"/blogs/2022/202202-logseq-build-your-own-wiki.md":Qa,"/blogs/2022/202203-mesh-shaped-cloud-native-developer.md":Ja,"/blogs/2022/202203-mesh-shaped-recap.md":Za,"/blogs/2022/202205-container-k8s-docker.md":eo,"/blogs/2022/202205-router-proxy-gtw.md":no,"/blogs/2022/202211-cloud-native-engineering.md":to,"/blogs/2022/202212-api-design-inspired-by-google-api-design.md":ao,"/blogs/2022/202212-go-monorepo-tutorial.md":oo,"/blogs/2022/202212-logseq-customized-with-clojure-and-css.md":io,"/blogs/2022/202212-logseq-pkm.md":so,"/blogs/2023/202302-iac-and-terraform.md":ro,"/blogs/2023/202304-draw-architecture-diagram.md":lo,"/blogs/2023/202304-tunnel-vpn-vpc.md":co,"/blogs/2023/202306-remote-development-in-cloud.md":uo,"/blogs/2023/202312-agile-and-lean.md":ho,"/blogs/2023/202312-cobra-cli.md":po,"/blogs/2023/202312-devcontainer-tutorial.md":go,"/blogs/2023/202312-illustrated-ai.md":mo,"/blogs/2023/202312-kubernetes-operator.md":fo,"/blogs/2023/202312-windows-workspaces.md":vo,"/blogs/2024/202401-cloud-native-practices.md":bo,"/blogs/2024/202401-eassy-2024.md":yo,"/blogs/2024/202401-illustrations.md":_o,"/blogs/2024/202402-llm-application.md":wo,"/blogs/2024/202403-ai-and-human.md":ko,"/blogs/2024/202406-fork-oss.md":xo,"/blogs/2024/202406-k3s-blogs.md":Ao,"/blogs/2024/202412-ai-powered-pkm.md":Co,"/blogs/2026/202602-domain-spec-agents.md":To,"/blogs/2026/202602-pov-agentic-engineering.md":So,"/blogs/2026/202602-pov-standard-automation-selfserve.md":Io,"/blogs/2026/202604-llm-wiki-self-evolving-brains.md":Po,"/blogs/2026/202604-logseq-scoring-overview.md":Mo,"/blogs/index.md":Do,"/en/about-me.md":Lo,"/en/blogs/2022/202202-logseq-build-your-own-wiki.md":$o,"/en/blogs/2022/202203-mesh-shaped-cloud-native-developer.md":No,"/en/blogs/2022/202205-container-k8s-docker.md":Eo,"/en/blogs/2022/202205-router-proxy-gtw.md":Oo,"/en/blogs/2022/202211-cloud-native-engineering.md":Ro,"/en/blogs/2022/202212-logseq-customized-with-clojure-and-css.md":zo,"/en/blogs/2022/202212-logseq-pkm.md":qo,"/en/blogs/2023/202302-iac-and-terraform.md":Vo,"/en/blogs/2023/202304-draw-architecture-diagram.md":Bo,"/en/blogs/2023/202304-tunnel-vpn-vpc.md":Fo,"/en/blogs/2023/202306-remote-development-in-cloud.md":jo,"/en/blogs/2023/202312-agile-and-lean.md":Uo,"/en/blogs/2023/202312-devcontainer-tutorial.md":Go,"/en/blogs/2024/202401-cloud-native-practices.md":Ho,"/en/blogs/2024/202401-illustrations.md":Wo,"/en/blogs/2024/202402-llm-application.md":Ko,"/en/blogs/2024/202403-ai-and-human.md":Yo,"/en/blogs/2024/202412-ai-powered-pkm.md":Xo,"/en/blogs/2026/202602-domain-spec-agents.md":Qo,"/en/blogs/2026/202602-pov-agentic-engineering.md":Jo,"/en/blogs/2026/202602-pov-standard-automation-selfserve.md":Zo,"/en/blogs/index.md":ei,"/en/index.md":ni,"/index.md":ti});function c(D){return`/${pe(D)}`}const d=R(()=>{const D=String(n.value.relativePath||""),y=c(D);return l[y]||""}),g=R(()=>Kr(d.value,{template:String(s.value.readingTimeTemplate||"")})),u=ae([]),h=ae("");function v(){if(typeof window>"u"||u.value.length===0){h.value="";return}const D=window.scrollY+180;let y=u.value[0].href;for(const T of u.value){const k=T.href.slice(1),E=document.getElementById(k);E&&E.offsetTop<=D&&(y=T.href)}h.value=y}function b(){if(typeof window>"u")return;const D=Array.from(document.querySelectorAll(".vp-doc h2[id]"));u.value=D.map(y=>{var T;return{text:((T=y.textContent)==null?void 0:T.trim())||"",href:`#${y.id}`}}).filter(y=>!!y.text),v()}async function _(){await Ba(),requestAnimationFrame(()=>{b()})}Ee(()=>{typeof window>"u"||(window.addEventListener("scroll",v,{passive:!0}),_())}),Fa(()=>{typeof window>"u"||window.removeEventListener("scroll",v)}),De(()=>n.value.relativePath,()=>{_()}),De(d,()=>{_()});const x=R(()=>xi({category:String(t.value.category||""),categoryMeta:r.value})),A=R(()=>Ai({category:String(t.value.category||""),categoryMeta:r.value}));return(D,y)=>{const T=tn("Content");return f(),w("div",Sw,[j(Vt,{"site-title":m(a).siteTitle,"nav-links":m(a).navLinks||[],"show-subscribe":!!m(a).showSubscribe,"subscribe-button-text":m(a).subscribeButtonText,"nav-height-class":"h-20"},null,8,["site-title","nav-links","show-subscribe","subscribe-button-text"]),p("main",Iw,[p("header",Pw,[y[3]||(y[3]=p("div",{class:"absolute inset-0 mesh-gradient opacity-60"},null,-1)),y[4]||(y[4]=p("div",{class:"absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent"},null,-1)),p("div",Mw,[p("div",Dw,[p("div",Lw,[p("span",{class:Q(["inline-flex w-fit px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest",A.value])},S(x.value),3),p("h1",$w,S(m(t).title),1),p("p",Nw,S(m(t).description),1),p("div",Ew,[p("span",null,S(m(t).date),1),y[0]||(y[0]=p("span",{class:"w-1 h-1 rounded-full bg-outline"},null,-1)),p("span",null,S(g.value),1)]),(m(t).tags||[]).length?(f(),w("div",Ow,[(f(!0),w(Z,null,ie(m(t).tags||[],k=>(f(),w("span",{key:k,class:"px-2.5 py-1 rounded bg-surface-container-high dark:bg-slate-700 text-xs font-semibold text-on-surface-variant dark:text-slate-400"}," #"+S(k),1))),128))])):q("",!0)]),p("div",Rw,[p("div",zw,[y[1]||(y[1]=p("div",{class:"absolute inset-4 rounded-full border-2 border-dashed border-primary/30 animate-[spin_20s_linear_infinite]"},null,-1)),y[2]||(y[2]=p("div",{class:"absolute inset-10 rounded-full border border-primary/20"},null,-1)),p("img",{src:m(Kn)(m(t).image,m(n).relativePath),alt:m(t).title,class:"relative z-10 w-full h-full object-cover rounded-full"},null,8,qw)])])])])]),p("section",Vw,[p("div",Bw,[u.value.length?(f(),w("aside",Fw,[p("div",jw,[p("h3",Uw,S(s.value.tocTitle||"Contents"),1),p("nav",Gw,[(f(!0),w(Z,null,ie(u.value,k=>(f(),w("a",{key:k.href,href:k.href,class:Q(k.href===h.value?"relative text-sm font-semibold text-primary pl-6 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-[2px] before:h-4 before:bg-primary before:rounded dark:text-tertiary":"text-sm font-thin text-on-surface dark:text-slate-300 hover:text-primary pl-6")},S(k.text),11,Hw))),128))])])])):q("",!0),p("article",Ww,[j(T)])])])]),j(Bt,{title:m(o).title,description:m(o).description,links:m(o).links||[],"social-icons":m(o).socialIcons||[]},null,8,["title","description","links","social-icons"])])}}}),Yw=U({__name:"Layout",setup(e){const{frontmatter:n,page:t}=gn(),a=R(()=>{const o=String(n.value.layout||"");if(o)return o;const i=String(t.value.relativePath||"");return i.startsWith("blogs/")||i.startsWith("en/blogs/")?"blog":""});return(o,i)=>a.value==="home"?(f(),G(hg,{key:0})):a.value==="about-me"?(f(),G(U_,{key:1})):a.value==="blog-list"?(f(),G(Tw,{key:2})):a.value==="blog"?(f(),G(Kw,{key:3})):(f(),G(m(Es).Layout,{key:4}))}});let Rn=null;function Xw(){let e=!1;return async()=>{if(typeof window>"u")return;const{default:n}=await Cs(async()=>{const{default:o}=await import("./mermaid.core.zAc21AG6.js").then(i=>i.bd);return{default:o}},__vite__mapDeps([2,1]));e||(n.initialize({startOnLoad:!1,securityLevel:"loose"}),e=!0);const t=document.querySelectorAll(".vp-doc div.language-mermaid pre code");for(const o of t){const i=o.closest("pre"),s=o.closest("div.language-mermaid");if(!i||!s||i.dataset.mermaidRendered==="true")continue;i.classList.remove("shiki","shiki-themes","vp-code"),i.classList.add("mermaid"),i.textContent=o.textContent||"",i.dataset.mermaidRendered="true";const r=s.querySelector("button.copy"),l=s.querySelector("span.lang");r==null||r.remove(),l==null||l.remove(),s.classList.remove("language-mermaid")}const a=Array.from(document.querySelectorAll(".vp-doc pre.mermaid"));a.length>0&&await n.run({nodes:a})}}const Ik={extends:Es,Layout:Yw,enhanceApp({router:e}){if(typeof window>"u")return;Rn=Rn||Xw();const n=()=>{requestAnimationFrame(()=>{Rn==null||Rn()})};n(),e.onAfterRouteChanged=n}};export{hk as $,Jn as A,fi as B,mi as C,wn as D,St as E,ek as F,ne as G,Ad as H,ik as I,Tk as J,Sk as K,Ck as L,Ak as M,xk as N,kk as O,wk as P,v2 as Q,bk as R,_k as S,yk as T,mk as U,vk as V,fk as W,gk as X,uk as Y,ck as Z,pk as _,lk as a,$b as b,rk as c,sk as d,dk as e,fr as f,ak as g,br as h,ok as i,Jw as j,tk as k,Fb as l,Zw as m,nk as n,yr as o,Sr as p,bi as q,Qt as r,ln as s,Ik as t,Xb as u,Yb as v,Pn as w,Kb as x,Wb as y,It as z};
