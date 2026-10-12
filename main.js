(function(){
const S=window.SITE,$=s=>document.querySelector(s);
const esc=t=>String(t).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const root=document.documentElement;let th;try{th=localStorage.getItem("theme")}catch(e){}
if(!th)th=matchMedia("(prefers-color-scheme: light)").matches?"light":"dark";root.dataset.theme=th;
$("#theme").onclick=()=>{th=root.dataset.theme==="dark"?"light":"dark";root.dataset.theme=th;try{localStorage.setItem("theme",th)}catch(e){}};
const menu=$("#menu"),bg=$("#burger");
bg.onclick=()=>{const o=menu.classList.toggle("open");bg.setAttribute("aria-expanded",o)};
menu.onclick=e=>{if(e.target.tagName==="A"){menu.classList.remove("open");bg.setAttribute("aria-expanded",false)}};
const href={email:S.email&&"mailto:"+S.email,phone:S.phone&&"tel:"+S.phone.replace(/\s/g,""),linkedin:S.linkedin,github:S.github};
document.querySelectorAll("[data-link]").forEach(a=>{const h=href[a.dataset.link];if(h)a.href=h;else a.remove()});
$("#loc").textContent=S.location;$("#year").textContent=new Date().getFullYear();
$("#skillGrid").innerHTML=S.skills.map(s=>`<article class="card rv"><div class="ico" aria-hidden="true">${s.i}</div><h3>${esc(s.t)}</h3><span class="tag">${esc(s.l)}</span><p>${esc(s.d)}</p><ul>${s.items.map(i=>`<li>${esc(i)}</li>`).join("")}</ul></article>`).join("");
$("#projectGrid").innerHTML=S.projects.map(p=>`<article class="card rv"><div class="thumb" role="img" aria-label="Screenshot placeholder for ${esc(p.n)}">Screenshot placeholder</div>
<span class="tag">${esc(p.c)}</span>${p.demo?'<span class="tag demo">Demo / practice project</span>':""}<h3>${esc(p.n)}</h3><p>${esc(p.o)}</p>
<p><b>Tools:</b> ${p.tools.map(esc).join(", ")}</p><p><b>My role:</b> ${esc(p.role)}</p><ul>${p.f.map(f=>`<li>${esc(f)}</li>`).join("")}</ul>${p.seo?`<p><b>SEO / marketing:</b> ${esc(p.seo)}</p>`:""}
<div class="btns">${p.live?`<a class="btn" href="${esc(p.live)}" target="_blank" rel="noopener">Live site</a>`:""}${p.repo?`<a class="btn" href="${esc(p.repo)}" target="_blank" rel="noopener">GitHub / case study</a>`:""}</div></article>`).join("");
const L=[["Business objective","obj"],["Target audience","aud"],["Challenge","prob"],["Research and strategy","strat"],["Tools used","tools"],["Implementation","steps"],["KPIs","kpi"],["Actual results","res"],["Lessons learned","les"],["Future optimization","next"]];
const D={res:"Add real results here when available.",les:"Add after the work is done.",next:"Add your next steps."};
$("#caseList").innerHTML=S.cases.map(c=>`<details class="rv"><summary>${esc(c.t)}</summary><dl>${L.map(([l,k])=>`<dt>${l}</dt><dd>${esc(c[k]||D[k]||"")}</dd>`).join("")}</dl></details>`).join("");
const io="IntersectionObserver"in window?new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}}),{threshold:.1}):null;
document.querySelectorAll(".rv").forEach(el=>io?io.observe(el):el.classList.add("in"));
if(S.gtmId){const s=document.createElement("script");s.async=true;s.src="https://www.googletagmanager.com/gtm.js?id="+encodeURIComponent(S.gtmId);window.dataLayer=window.dataLayer||[];dataLayer.push({"gtm.start":Date.now(),event:"gtm.js"});document.head.appendChild(s)}
else if(S.ga4Id){const s=document.createElement("script");s.async=true;s.src="https://www.googletagmanager.com/gtag/js?id="+encodeURIComponent(S.ga4Id);document.head.appendChild(s);window.dataLayer=window.dataLayer||[];window.gtag=function(){dataLayer.push(arguments)};gtag("js",new Date());gtag("config",S.ga4Id)}
const f=$("#form"),st=$("#status");
const say=(m,ok)=>{st.textContent=m;st.className=ok?"ok":"err"};
f.addEventListener("submit",async e=>{e.preventDefault();
 if(f.company_url.value)return;
 let bad=null;["name","email","type","message"].forEach(n=>{const el=f[n],v=el.value.trim();const ok=v&&(n!=="email"||/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v));el.setAttribute("aria-invalid",!ok);if(!ok&&!bad)bad=el});
 if(bad){bad.focus();return say("Please complete the highlighted fields with valid details.")}
 if(!S.formEndpoint)return say("This form is not connected yet. Add your form service URL as formEndpoint in js/config.js, or email me directly.");
 try{const r=await fetch(S.formEndpoint,{method:"POST",headers:{Accept:"application/json"},body:new FormData(f)});
  if(!r.ok)throw 0;f.reset();say("Message sent. I will reply soon.",true)}catch(x){say("Message could not be sent. Please try again or email me directly.")}
});
})();
