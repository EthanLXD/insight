(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function i(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(s){if(s.ep)return;s.ep=!0;const o=i(s);fetch(s.href,o)}})();const u={phone:"666688",email:"info@example.com"},g={defaultLang:"en",supportedLangs:["zh","en"],get contactPhone(){return u.phone}},c={HOME:"home",SERVICES:"services",SOLUTIONS:"solutions",ABOUT:"about",CONTACT:"contact"},V={[c.HOME]:"section-home",[c.SERVICES]:"section-services",[c.SOLUTIONS]:"section-solutions",[c.ABOUT]:"section-about",[c.CONTACT]:"section-contact"},D={"page.title":"Insight 调查 | 专业私人调查与商业情报","hero.title":"专业调查 · 值得信赖","hero.desc":"多年经验，合规资质，为个人与企业提供可靠的调查与情报服务。","hero.cta":"立即咨询","home.banner":"私人侦探与调查 – 新西兰","home.intro.p1":"Insight Investigation 为新西兰注册的独立公司，拥有逾十年经验。我们持牌经营，提供专业私人调查服务，在新西兰以诚信与高质量 surveillance 及调查服务著称。","home.intro.p2a":"Insight 符合国际认可的 ","home.intro.p2b":" 质量保证标准，具备人力、物力与财力，在新西兰各地承接从中小型到大型的调查项目。我们专长包括：","home.intro.li":"工伤赔偿 • 强制第三方 • 公共责任 • 机动车盗窃 • 欺诈防控 • 电子窃听检测/tscm 扫描 • 一般保险理赔 • 风险管理 • 不当行为调查 • 欺凌与骚扰索赔 • 压力索赔与 surveillance 调查","home.block1.title":"Surveillance","home.block1.text":"As licensed Private investigators we do all kinds of surveillance: cheating spouse, false insurance claims or workers comp claims, industrial espionage, misconduct. Contact us to discuss your intelligence needs","home.block2.title":"Personal Protection","home.block2.text":"At Insight investigation group our operatives are also trained in all kind of personal protection and personal risk assessments. Our military and law enforcement background operatives can make a specific security protection plan for every situation.","home.block3.title":"Bug Sweeps","home.block3.text":"With spy cameras and listening devices becoming smaller and more powerful, we offer a bug sweep service (tscm sweep) for your home and office. Make sure the spouse or competitors don't listen in and call us for a bug sweep.","home.block4.title":"Finding a missing person","home.block4.text":"A child or relative been abducted? Looking for the beneficiaries of an inheritance, or just want to reunite with a former friend, colleague or classmate. As licensed private investigators we have access to extensive Australian and international databases and advances search technology to find your missing person.","nav.home":"首页","nav.services":"服务领域","nav.solutions":"行业方案","nav.about":"关于我们","nav.contact":"联系我们","nav.call":"致电","nav.phone":"待填写","nav.brandName":"INSIGHT","nav.brandTagline":"INVESTIGATION","nav.services.personal":"个人调查","nav.services.corporate":"企业调查","nav.services.legal":"法律支持","nav.services.special":"特殊服务","nav.about.founder":"创始人简介","nav.about.qual":"资质展示","services.title":"服务领域","services.lead":"核心业务分门别类，每项服务均有独立方案与专业团队支持。","services.personal.title":"个人调查","services.personal.item1":"婚姻忠诚度调查","services.personal.item2":"失踪人口查找","services.personal.item3":"子女安全调查","services.personal.item4":"背景调查","services.corporate.title":"企业调查","services.corporate.item1":"员工背景审查","services.corporate.item2":"内部舞弊调查","services.corporate.item3":"商业对手情报收集","services.legal.title":"法律支持","services.legal.item1":"证据搜集","services.legal.item2":"证人访谈","services.legal.item3":"协助律师准备案件","services.special.title":"特殊服务","services.special.item1":"华人社区跨国事务调查（中国-新西兰之间）","services.special.item2":"资产追踪","serviceTab.personal":"个人调查","serviceTab.corporate":"企业调查","serviceTab.legal":"法律支持","serviceTab.special":"特殊服务","solutions.title":"行业方案","solutions.lead":"针对客户的定制化方案与案例说明。","solutions.back":"返回列表","solution.item1.title":"寻找失踪人员","solution.item1.desc":"子女或亲属被拐？寻找遗产受益人，或希望与故友、同事、同学重聚？作为持牌私人调查机构，我们可访问澳大利亚及国际数据库与先进检索技术，助您寻人。","solution.item2.title":"专业商业窃听检测服务","solution.item2.desc":"通过专业窃听检测与电子反监控服务保护您的企业。我们协助发现并清除场所内未经授权的窃听器与隐蔽摄像头。","solution.item3.title":"查找窃听设备","solution.item3.desc":"怀疑住所或办公室被监控？我们使用先进设备定位隐蔽窃听器与摄像头，保障您的隐私与安心。","solution.item4.title":"电子扫描服务","solution.item4.desc":"全面电子扫描服务，检测窃听器、GPS 追踪器及其他监控设备。适用于关注商业间谍或个人隐私的企业与个人。","solution.item5.title":"个人与家庭解决方案","solution.item5.desc":"婚姻、子女、失踪人口等——为个人与家庭事务提供合规、高效的调查与证据支持。","solution.item6.title":"法律与保险支持","solution.item6.desc":"为律师事务所与保险公司提供证据搜集、证人访谈及案件准备支持，提供专业、可呈堂的交付成果。","about.title":"关于我们","about.founderTab":"创始人简介","about.qualTab":"资质展示","about.founder.title":"创始人简介","about.founder.heading":"关于创始人：","about.founder.desc":"Ice 为 Insight Investigation 唯一董事，拥有逾 20 年调查经验，负责规划、组织、管控并推动公司各项战略职能。","about.qual.title":"资质展示","about.qual.desc":"持牌私人调查机构，具备相关行业资质与保险，严格遵循当地法律法规。","contact.title":"联系我们","contact.lead":"欢迎通过以下方式与我们沟通。","contact.phone":"电话","contact.email":"邮箱","contact.address":"地址","contact.poBox":"邮政信箱","contact.office1.name":"办公室一","contact.office1.address":"地址待填写","contact.office1.poBox":"","contact.office2.name":"办公室二","contact.office2.address":"待填写","contact.office2.poBox":"待填写","contact.form.name":"姓名","contact.form.email":"邮箱","contact.form.phone":"电话","contact.form.enquiry":"咨询内容","contact.form.submit":"提交","footer.copyright":"Copyright All Rights Reserved © 2026"},G={"page.title":"Insight | Private Investigation & Intelligence","hero.title":"Professional Investigation · Trusted","hero.desc":"Years of experience and full compliance. Reliable investigation and intelligence for individuals and businesses.","hero.cta":"Get in Touch","home.banner":"PRIVATE DETECTIVE & PRIVATE INVESTIGATOR – NEW ZEALAND","home.intro.p1":"The Insight Investigation is an independently owned New Zealand registered company with over 10 years experience. We are a fully licensed, professional private investigations firm with a reputation throughout New Zealand for integrity and high quality service in all aspects of surveillance and investigation.","home.intro.p2a":"Insight is a Quality Assured company to the Internationally recognised standard ","home.intro.p2b":" and regularly conducts investigations with the human, physical and financial resources to manage small to large scale investigations anywhere in New Zealand. We specialise in conducting investigations into:-","home.intro.li":"Workers Compensation • Compulsory Third Party • Public Liability • Motor Vehicle Theft • Fraud Control • Electronic Bug detection/tscm sweep • General Insurance Claims • Risk Management • Misconduct Investigations • Bullying & Harassment Claims • Stress Claims & Surveillance Investigations","home.block1.title":"Surveillance","home.block1.text":"As licensed Private investigators we do all kinds of surveillance: cheating spouse, false insurance claims or workers comp claims, industrial espionage, misconduct. Contact us to discuss your intelligence needs","home.block2.title":"Personal Protection","home.block2.text":"At Insight investigation group our operatives are also trained in all kind of personal protection and personal risk assessments. Our military and law enforcement background operatives can make a specific security protection plan for every situation.","home.block3.title":"Bug Sweeps","home.block3.text":"With spy cameras and listening devices becoming smaller and more powerful, we offer a bug sweep service (tscm sweep) for your home and office. Make sure the spouse or competitors don't listen in and call us for a bug sweep.","home.block4.title":"Finding a missing person","home.block4.text":"A child or relative been abducted? Looking for the beneficiaries of an inheritance, or just want to reunite with a former friend, colleague or classmate. As licensed private investigators we have access to extensive Australian and international databases and advances search technology to find your missing person.","nav.home":"Home","nav.services":"Services","nav.solutions":"Solutions","nav.about":"About Us","nav.contact":"Contacts","nav.call":"CALL","nav.phone":"TBA","nav.brandName":"INSIGHT","nav.brandTagline":"INVESTIGATION","nav.services.personal":"Personal","nav.services.corporate":"Corporate","nav.services.legal":"Legal","nav.services.special":"Special","nav.about.founder":"Founder","nav.about.qual":"Qualifications","services.title":"Services","services.lead":"Core offerings by category, each with dedicated solutions and professional support.","services.personal.title":"Personal Investigation","services.personal.item1":"Marital fidelity investigation","services.personal.item2":"Missing persons","services.personal.item3":"Child safety investigation","services.personal.item4":"Background checks","services.corporate.title":"Corporate Investigation","services.corporate.item1":"Employee background screening","services.corporate.item2":"Internal fraud investigation","services.corporate.item3":"Competitor intelligence","services.legal.title":"Legal Support","services.legal.item1":"Evidence gathering","services.legal.item2":"Witness interviews","services.legal.item3":"Case preparation for lawyers","services.special.title":"Special Services","services.special.item1":"Cross-border matters (China–New Zealand) for Chinese community","services.special.item2":"Asset tracing","serviceTab.personal":"Personal","serviceTab.corporate":"Corporate","serviceTab.legal":"Legal","serviceTab.special":"Special","solutions.title":"Solutions","solutions.lead":"Custom solutions and case studies for our clients.","solutions.back":"Back to list","solution.item1.title":"Finding a missing person","solution.item1.desc":"A child or relative been abducted? Looking for the beneficiaries of an inheritance, or just want to reunite with a former friend, colleague or classmate. As licensed private investigators we have access to extensive Australian and international databases and advances search technology to find your missing person.","solution.item2.title":"Professional bug sweep services for your business","solution.item2.desc":"Protect your business with professional bug sweep and electronic counter-surveillance services. We help detect and remove unauthorised listening devices and hidden cameras from your premises.","solution.item3.title":"Find a listening device","solution.item3.desc":"Suspect your home or office is under surveillance? Our team uses advanced equipment to locate hidden listening devices and cameras, giving you peace of mind and privacy.","solution.item4.title":"Electronic sweep services","solution.item4.desc":"Comprehensive electronic sweep services to detect bugs, GPS trackers and other surveillance equipment. Ideal for businesses and individuals concerned about corporate espionage or personal privacy.","solution.item5.title":"Personal & family solutions","solution.item5.desc":"Marriage, children, missing persons—compliant, efficient investigation and evidence support for personal and family matters.","solution.item6.title":"Legal & insurance support","solution.item6.desc":"Evidence gathering, witness interviews, and case preparation for law firms and insurers. We support legal and insurance investigations with professional, court-ready deliverables.","about.title":"About Us","about.founderTab":"Founder","about.qualTab":"Qualifications","about.founder.title":"Founder","about.founder.heading":"ABOUT THE FOUNDER:","about.founder.desc":"Ice is the sole director of Insight Investigation. Ice has over 20 years experience in investigations and holds the responsibility to plan, organise, control and influence all strategic functions of the company.","about.qual.title":"Qualifications","about.qual.desc":"Licensed private investigation practice with relevant credentials and insurance, in full compliance with local regulations.","contact.title":"Contact Us","contact.lead":"Get in touch via the following channels.","contact.phone":"Phone","contact.email":"Email","contact.address":"Address","contact.poBox":"PO Box","contact.office1.name":"Office 1","contact.office1.address":"Address TBA","contact.office1.poBox":"","contact.office2.name":"Office 2","contact.office2.address":"TBA","contact.office2.poBox":"TBA","contact.form.name":"Name","contact.form.email":"Email","contact.form.phone":"Phone","contact.form.enquiry":"Enquiry","contact.form.submit":"Submit","footer.copyright":"Copyright All Rights Reserved © 2026"},K={zh:D,en:G};let y=g.defaultLang;function N(){return y}function P(e){if(!g.supportedLangs.includes(e))return;y=e,document.documentElement.lang=e==="zh"?"zh-CN":"en";const t=n("page.title");return t&&(document.title=t),y}function n(e){const t=K[y];return t!=null&&e in t?t[e]:e}const x=[c.HOME,c.SERVICES,c.SOLUTIONS,c.ABOUT,c.CONTACT],F={[c.SERVICES]:[{id:"personal",i18nKey:"nav.services.personal"},{id:"corporate",i18nKey:"nav.services.corporate"},{id:"legal",i18nKey:"nav.services.legal"},{id:"special",i18nKey:"nav.services.special"}],[c.ABOUT]:[{id:"founder",i18nKey:"nav.about.founder"},{id:"qualifications",i18nKey:"nav.about.qual"}]},z="active";let w=c.HOME,A=null,b=[];function T(){return{section:w,sub:A}}function v(e){return V[e]||`section-${e}`}function S(e,t=null){x.includes(e)&&(w=e,A=t,b.forEach(i=>i({section:w,sub:A})))}function W(e){return b.push(e),()=>{b=b.filter(t=>t!==e)}}function Z(){return z}const Q=Z();function j(e){if(!e)return;e.querySelectorAll("[data-section]").forEach(o=>{o.addEventListener("click",r=>{r.preventDefault();const l=o.getAttribute("data-section"),p=o.getAttribute("data-sub")||null;S(l,p)})});const i=e.querySelector(".nav-toggle"),a=e.querySelector(".main-nav");i&&a&&i.addEventListener("click",()=>a.classList.toggle("open")),e.querySelectorAll(".has-dropdown").forEach(o=>{const r=o.querySelector(".nav-link");!r||!window.matchMedia("(max-width: 900px)").matches||r.addEventListener("click",l=>{l.preventDefault(),o.classList.toggle("open");const p=r.getAttribute("data-section");p&&S(p)})})}function O(e){if(!e)return;const{section:t}=T();e.querySelectorAll(".nav-link").forEach(i=>{const a=i.getAttribute("data-section"),o=!i.getAttribute("data-sub");i.classList.toggle(Q,a===t&&o)})}function B(e){const t=e.querySelector(".lang-switch");t&&t.querySelectorAll(".lang-btn").forEach(i=>{i.addEventListener("click",()=>{const a=i.getAttribute("data-lang");a&&window.dispatchEvent(new CustomEvent("app:lang",{detail:{lang:a}}))})})}function M(e,t){e.querySelectorAll(".lang-btn").forEach(i=>{i.classList.toggle("active",i.getAttribute("data-lang")===t)})}function Y(){const e=[];for(const t of x){const i=F[t],a=t===c.SERVICES?"nav.services":t===c.ABOUT?"nav.about":`nav.${t}`,s=n(a);if(i&&i.length>0){const o=i.map(r=>`<li><a href="#" data-section="${t}" data-sub="${r.id}">${n(r.i18nKey)}</a></li>`).join("");e.push(`
        <li class="has-dropdown">
          <a href="#" class="nav-link" data-section="${t}">${s}</a>
          <ul class="dropdown">${o}</ul>
        </li>
      `)}else{const o=t===c.HOME?" active":"";e.push(`<li><a href="#" class="nav-link${o}" data-section="${t}">${s}</a></li>`)}}return e.join(`
`)}function _(){const e=g.contactPhone,t=`tel:${g.contactPhone.replace(/\s/g,"")}`,i=n("nav.call"),a=n("nav.brandName"),s=n("nav.brandTagline");return`
    <header class="site-header">
      <div class="header-inner">
        <a href="#" class="header-brand" data-section="${c.HOME}">
          <img src="/logo.png" alt="${a}" class="header-logo" onerror="this.style.display='none'" />
          <span class="header-brand-text">
            <span class="header-brand-name">${a}</span>
            <span class="header-brand-tagline">${s}</span>
          </span>
        </a>
        <div class="header-right">
          <nav class="main-nav">
            <ul class="nav-list">${Y()}</ul>
          </nav>
          <div class="header-actions">
            <a href="${t}" class="header-call-btn" >${i}: ${e}</a>
            <div class="lang-switch">
              <button type="button" class="lang-btn active" data-lang="zh">中文</button>
              <span class="lang-divider">|</span>
              <button type="button" class="lang-btn" data-lang="en">EN</button>
            </div>
          </div>
        </div>
      </div>
    </header>
  `}function U(){return`
    <footer class="site-footer">
      <div class="footer-inner">
        <p class="copyright">${n("footer.copyright")}</p>
      </div>
    </footer>
  `}const q=["/images/carousel-1.jpg","/images/carousel-2.jpg","/images/carousel-3.jpg"],J=["/images/surveillance.jpg","/images/bug-sweeps.jpg","/images/finding-missing-person.jpg"];function X(){const e=v(c.HOME),t=q.map((o,r)=>`
    <div class="home-carousel-slide${r===0?" active":""}" data-index="${r}">
      <img src="${o}" alt="" class="home-carousel-img" onerror="this.style.display='none'" />
    </div>`).join(""),i=q.map((o,r)=>`<button type="button" class="home-carousel-dot${r===0?" active":""}" data-index="${r}" aria-label="Slide ${r+1}"></button>`).join(""),s=[1,3,4].map((o,r)=>`
    <div class="home-block">
      <div class="home-block-img-wrap">
        <img src="${J[r]}" alt="${n("home.block"+o+".title")}" class="home-block-img" onerror="this.style.display='none'" />
      </div>
      <h3 class="home-block-title">${n("home.block"+o+".title")}</h3>
      <p class="home-block-text">${n("home.block"+o+".text")}</p>
    </div>`).join("");return`
    <section id="${e}" class="panel home-page">
      <div class="home-banner">
        <p class="home-banner-text">${n("home.banner")}</p>
      </div>
      <div class="home-carousel">
        <div class="home-carousel-inner">
          ${t}
        </div>
        <div class="home-carousel-dots">${i}</div>
      </div>
      <div class="home-intro section-inner">
        <p class="home-intro-p">${n("home.intro.p1")}</p>
        <p class="home-intro-p">${n("home.intro.p2a")}<span class="home-intro-highlight">AZ/NZS ISO 9001</span>${n("home.intro.p2b")}</p>
        <ul class="home-intro-list">${(n("home.intro.li")||"").split("•").map(o=>o.trim()).filter(Boolean).map(o=>`<li>${o}</li>`).join("")}</ul>
      </div>
      <div class="home-blocks section-inner">
        ${s}
      </div>
    </section>
  `}function ee(e){if(!e)return;e.querySelector(".home-carousel-inner");const t=e.querySelectorAll(".home-carousel-slide"),i=e.querySelectorAll(".home-carousel-dot");if(t.length&&i.length){let s=function(p){const h=(p%t.length+t.length)%t.length;t.forEach(($,E)=>$.classList.toggle("active",E===h)),i.forEach(($,E)=>$.classList.toggle("active",E===h))};var a=s;i.forEach((p,h)=>{p.addEventListener("click",()=>s(h))});let o=0;const r=setInterval(()=>{o+=1,s(o)},5e3),l=e.querySelector(".home-carousel");l&&l.addEventListener("mouseenter",()=>clearInterval(r))}}const te=Object.freeze(Object.defineProperty({__proto__:null,init:ee,render:X},Symbol.toStringTag,{value:"Module"}));function ie(e){const t={personal:n("services.personal.title"),corporate:n("services.corporate.title"),legal:n("services.legal.title"),special:n("services.special.title")},i={personal:[1,2,3,4].map(o=>n("services.personal.item"+o)),corporate:[1,2,3].map(o=>n("services.corporate.item"+o)),legal:[1,2,3].map(o=>n("services.legal.item"+o)),special:[1,2].map(o=>n("services.special.item"+o))},a=t[e]||t.personal,s=(i[e]||i.personal).map(o=>`<li>${o}</li>`).join("");return`
    <article id="service-${e}" class="service-page">
      <h3 class="service-page-title">${a}</h3>
      <ul class="service-page-list">${s}</ul>
    </article>
  `}function oe(){const e=v(c.SERVICES),t=["personal","corporate","legal","special"].map(i=>ie(i)).join("");return`
    <section id="${e}" class="panel">
      <div class="section-inner">
        <h2 class="section-title">${n("services.title")}</h2>
        <p class="section-lead">${n("services.lead")}</p>
        <div class="service-content">
          ${t}
        </div>
      </div>
    </section>
  `}const ne=Object.freeze(Object.defineProperty({__proto__:null,render:oe},Symbol.toStringTag,{value:"Module"})),f=["1","2","3","4","5","6"],se=["/images/solutions/1.jpg","/images/solutions/2.jpg","/images/solutions/3.jpg","/images/solutions/4.jpg","/images/solutions/5.jpg","/images/solutions/6.jpg"];function I(e){const t=f.indexOf(String(e));return t===-1?null:{id:f[t],image:se[t],title:n("solution.item"+f[t]+".title"),desc:n("solution.item"+f[t]+".desc")}}function ae(e,t=120){return e?e.length<=t?e:e.slice(0,t).trim()+"...":""}function ce(){const e=v(c.SOLUTIONS),t=f.map(i=>{const a=I(i),s=ae(a.desc);return`
      <article class="solution-card" data-section="${c.SOLUTIONS}" data-sub="${i}">
        <div class="solution-card-img-wrap">
          <img src="${a.image}" alt="${a.title}" class="solution-card-img" onerror="this.style.display='none'" />
        </div>
        <div class="solution-card-body">
          <h3 class="solution-card-title">${a.title}</h3>
          <p class="solution-card-desc">${s}</p>
        </div>
      </article>`}).join("");return`
    <section id="${e}" class="panel">
      <div class="section-inner">
        <div class="solutions-grid">
          ${t}
        </div>
        <div class="solution-detail" hidden>
          <a href="#" class="solution-detail-back" data-section="${c.SOLUTIONS}">${n("solutions.back")}</a>
          <div class="solution-detail-img-wrap">
            <img id="solution-detail-img" src="" alt="" class="solution-detail-img" />
          </div>
          <h3 id="solution-detail-title" class="solution-detail-title"></h3>
          <p id="solution-detail-desc" class="solution-detail-desc"></p>
        </div>
      </div>
    </section>
  `}function re(e){var t;e&&(e.querySelectorAll(".solution-card").forEach(i=>{i.addEventListener("click",a=>{a.preventDefault();const s=i.getAttribute("data-section"),o=i.getAttribute("data-sub");s&&o&&window.dispatchEvent(new CustomEvent("app:navigate",{detail:{section:s,sub:o}}))})}),(t=e.querySelector(".solution-detail-back"))==null||t.addEventListener("click",i=>{i.preventDefault(),window.dispatchEvent(new CustomEvent("app:navigate",{detail:{section:c.SOLUTIONS,sub:null}}))}))}const le=Object.freeze(Object.defineProperty({__proto__:null,getSolutionItem:I,init:re,render:ce},Symbol.toStringTag,{value:"Module"}));function de(){return`
    <section id="${v(c.ABOUT)}" class="panel">
      <div class="section-inner">
        <div class="about-content">
          <div id="about-founder" class="about-page">
            <div class="about-founder-wrap">
              <div class="about-founder-text">
                <h3 class="about-founder-heading">${n("about.founder.heading")}</h3>
                <p class="about-founder-p">${n("about.founder.desc")}</p>
              </div>
              <div class="about-founder-image-wrap">
                <img src="/images/founder.jpg" alt="${n("about.founder.title")}" class="about-founder-image" onerror="this.style.display='none'" />
              </div>
            </div>
          </div>
          <div id="about-qualifications" class="about-page">
            <h3 class="about-page-title">${n("about.qual.title")}</h3>
            <p>${n("about.qual.desc")}</p>
          </div>
        </div>
      </div>
    </section>
  `}const ue=Object.freeze(Object.defineProperty({__proto__:null,render:de},Symbol.toStringTag,{value:"Module"}));function pe(){return`
    <section id="${v(c.CONTACT)}" class="panel">
      <div class="section-inner">
        <div class="contact-page-wrap">
          <div class="contact-offices">
            <div class="contact-office">
              <h3 class="contact-office-name">${n("contact.office1.name")}</h3>
              <p class="contact-office-line"><strong>${n("contact.address")}</strong> ${n("contact.office1.address")}</p>
              ${n("contact.office1.poBox")?`<p class="contact-office-line"><strong>${n("contact.poBox")}</strong> ${n("contact.office1.poBox")}</p>`:""}
              <p class="contact-office-line"><strong>${n("contact.phone")}</strong> <a href="${"tel:"+u.phone.replace(/\s/g,"")}" class="contact-link">${u.phone}</a></p>
              <p class="contact-office-line"><strong>${n("contact.email")}</strong> <a href="mailto:${u.email}" class="contact-link">${u.email}</a></p>
            </div>
            <div class="contact-office">
              <h3 class="contact-office-name">${n("contact.office2.name")}</h3>
              <p class="contact-office-line"><strong>${n("contact.address")}</strong> ${n("contact.office2.address")}</p>
              ${n("contact.office2.poBox")?`<p class="contact-office-line"><strong>${n("contact.poBox")}</strong> ${n("contact.office2.poBox")}</p>`:""}
              <p class="contact-office-line"><strong>${n("contact.phone")}</strong> <a href="${"tel:"+u.phone.replace(/\s/g,"")}" class="contact-link">${u.phone}</a></p>
              <p class="contact-office-line"><strong>${n("contact.email")}</strong> <a href="mailto:${u.email}" class="contact-link">${u.email}</a></p>
            </div>
          </div>
          <div class="contact-form-wrap">
            <form class="contact-form" action="#" method="post">
              <div class="contact-field">
                <label for="contact-name">${n("contact.form.name")}</label>
                <input type="text" id="contact-name" name="name" />
              </div>
              <div class="contact-field">
                <label for="contact-email">${n("contact.form.email")}</label>
                <input type="email" id="contact-email" name="email" />
              </div>
              <div class="contact-field">
                <label for="contact-phone">${n("contact.form.phone")}</label>
                <input type="tel" id="contact-phone" name="phone" />
              </div>
              <div class="contact-field">
                <label for="contact-enquiry">${n("contact.form.enquiry")}</label>
                <textarea id="contact-enquiry" name="enquiry" rows="4"></textarea>
              </div>
              <button type="submit" class="btn btn-primary contact-submit">${n("contact.form.submit")}</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  `}function me(e){const t=e==null?void 0:e.querySelector(".contact-form");t&&t.addEventListener("submit",i=>{i.preventDefault()})}const ve=Object.freeze(Object.defineProperty({__proto__:null,init:me,render:pe},Symbol.toStringTag,{value:"Module"})),R={[c.HOME]:te,[c.SERVICES]:ne,[c.SOLUTIONS]:le,[c.ABOUT]:ue,[c.CONTACT]:ve};let m,d;function H(){return Object.entries(R).map(([e,t])=>t.render()).join(`
`)}function k(e){const t=v(e);d.querySelectorAll(".panel").forEach(a=>a.classList.remove("active"));const i=d.querySelector("#"+t);i&&i.classList.add("active")}function L(e){const t=R[e];if(t&&typeof t.init=="function"){const i=d.querySelector("#"+v(e));i&&t.init(i)}}function C(e,t){if(e===c.SERVICES){const i=t||"personal";d.querySelectorAll(".service-page").forEach(s=>s.classList.remove("active"));const a=d.querySelector("#service-"+i);a&&a.classList.add("active")}if(e===c.ABOUT){const i=t||"founder";d.querySelectorAll(".about-page").forEach(s=>s.classList.remove("active"));const a=d.querySelector("#about-"+i);a&&a.classList.add("active")}if(e===c.SOLUTIONS){const i=d.querySelector(".solutions-grid"),a=d.querySelector(".solution-detail");if(i&&a)if(t){const s=I(t);if(s){i.setAttribute("hidden",""),a.removeAttribute("hidden");const o=d.querySelector("#solution-detail-img"),r=d.querySelector("#solution-detail-title"),l=d.querySelector("#solution-detail-desc");o&&(o.src=s.image),o&&(o.alt=s.title),r&&(r.textContent=s.title),l&&(l.textContent=s.desc)}}else i.removeAttribute("hidden"),a.setAttribute("hidden","")}}function fe(){const e=m.querySelector(".site-header");e&&(e.outerHTML=_());const t=m.querySelector(".site-header");t&&(j(t),O(t),B(t),M(t,N())),d.innerHTML=H();const{section:i,sub:a}=T();k(i),C(i,a),L(i);const s=m.querySelector(".site-footer");s&&(s.outerHTML=U())}function ge({section:e,sub:t}){k(e),O(m.querySelector(".site-header")),C(e,t),L(e)}function he(e="#app"){const t=document.querySelector(e);if(!t)return;m=t,m.innerHTML=`
    ${_()}
    <main class="main-content">${H()}</main>
    ${U()}
  `,d=m.querySelector(".main-content");const i=m.querySelector(".site-header");j(i),B(i),O(i),M(i,N());const{section:a,sub:s}=T();k(a),C(a,s),L(a),W(ge),window.addEventListener("app:navigate",o=>{const{section:r,sub:l}=o.detail||{};r&&S(r,l??null)}),window.addEventListener("app:lang",o=>{var l;const r=(l=o.detail)==null?void 0:l.lang;r&&(P(r),fe())})}P(g.defaultLang);S("home");he("#app");
//# sourceMappingURL=index-BKvDyXLK.js.map
