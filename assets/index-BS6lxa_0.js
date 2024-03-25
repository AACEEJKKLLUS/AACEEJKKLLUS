import{r as a,j as e,c as o,R as u}from"./vendor-B0AyrCyX.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))l(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&l(c)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function m(n){var l;const[i,t]=a.useState(0);return e.jsxs("div",{className:"tabs",children:[e.jsx("div",{className:"tabs-bar",children:n.tabs.map((r,s)=>e.jsx("div",{className:s===i?"tabs-bar-item tabs-bar-active":"tabs-bar-item",onClick:()=>t(s),children:e.jsx("span",{className:"tabs-bar-title",children:r.tabTitle})},"tabs-bar-item-"+s))}),e.jsx("div",{className:"tabs-content",children:(l=n.tabs.at(i))==null?void 0:l.tabContent})]})}function f(n){return e.jsx("div",{className:n.flipped?"chevron chevron-flipped":"chevron"})}function d(n){const[i,t]=a.useState(n.isExpanded??!1);return e.jsxs("div",{className:"card "+n.className,children:[e.jsxs("div",{className:"card-header",onClick:()=>t(!i),children:[n.header,e.jsx(f,{flipped:i})]}),i&&e.jsx("div",{className:"card-body",children:n.children})]})}function x(n){return e.jsx("div",{className:"notification-container",children:n.children})}function j(){return e.jsxs("div",{className:"match",children:[e.jsx(x,{children:"Kontaktieren Sie mich gerne. Neue Aufträge kann ich ab Mai 2024 annehmen."}),e.jsx(d,{header:e.jsx("span",{children:"Kontaktaufnahme"}),isExpanded:innerWidth>=512,children:e.jsxs("ul",{children:[e.jsx("li",{children:"Sie können mich insbesondere über die in der Fußleiste verlinkten Plattformen, aber auch über die im Impressum angegebenen Adressen erreichen. Falls Sie mich telefonisch kontaktieren, bitte ich um Nachsicht, wenn Sie mich aufgrund von Terminen oder außerhalb üblicher Arbeitszeiten nicht unmittelbar erreichen."}),e.jsx("li",{children:"Um ein erstes Kennenlerngespräch auszumachen, erhalten Sie auf Ihre Anfrage einen Link zur Terminbuchung."}),e.jsx("li",{children:"Über diesen Link können Sie eine für Sie zeitlich passende Besprechung über Teams mit mir erstellen."}),e.jsx("li",{children:"Sie sind im Großraum Stuttgart ansässig und möchten mich gerne bei Ihnen vor Ort kennenlernen? Dann geben Sie das gerne bei der Terminbuchung an."})]})})]})}function b(n){const i=a.useRef(void 0);return a.useEffect(()=>{var t,l;n.openModal?(t=i.current)==null||t.showModal():(l=i.current)==null||l.close()},[n.openModal]),e.jsx("dialog",{className:"modal",ref:i,onCancel:n.closeModal,children:e.jsxs("div",{className:"modal-container",children:[e.jsx("div",{className:"modal-content",children:n.children}),e.jsx("span",{className:"modal-button-close",onClick:n.closeModal,children:"✘"})]})})}function g(){const[n,i]=a.useState(!1),t=()=>e.jsxs(b,{openModal:n,closeModal:()=>i(!1),children:[e.jsx("span",{className:"modal-headline",children:"Programmiersprachen & Frameworks"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Java/Kotlin, Spring Boot, Hibernate & Liquibase, db-scheduler, ArchUnit / JUnit / Cucumber"}),e.jsx("li",{children:"C#, ASP.NET Core, Entity Framework Core, Hangfire, WPF, Winforms, ArchUnitNet / NUnit / Specflow"}),e.jsx("li",{children:"Typescript, React & Redux / Vue & Pinia, Ionic, Vitest / Cypress"}),e.jsx("li",{children:"Python, Flask"}),e.jsx("li",{children:"Go, Gin"}),e.jsx("li",{children:"C++"})]}),e.jsx("span",{className:"modal-headline",children:"Infrastruktur"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Postgres, MongoDB, InfluxDB, Oracle DB, SQLite, Redis"}),e.jsx("li",{children:"Azure Servicebus, NATS, RabbitMQ, Kafka"}),e.jsx("li",{children:"Helm, Terraform / OpenTofu, Azure / AWS Kubernetes & other services"}),e.jsx("li",{children:"Datadog, OpenTelemetry, Azure Log Analytics, ELK Stack"}),e.jsx("li",{children:"Azure Pipelines, Jenkins, Gitlab Runner"}),e.jsx("li",{children:"SonarQube, Dependency Track / BlackDuck"}),e.jsx("li",{children:"Loadbalancer, K8s Autoscaler, Keda"})]})]});return e.jsxs("div",{className:"you-search",children:[e.jsx(d,{header:e.jsx("span",{children:"Einen Softwarearchitekten"}),isExpanded:innerWidth>=512,children:e.jsxs("ul",{children:[e.jsx("li",{children:"der proaktiv und kontinuierlich nach aim42 funktionale Anforderungen, Interessen der Stakeholder und Qualitätsanforderungen ermittelt und daraus zielgerichtete, bewertbare und nach arc42 dokumentierte Architekturoptionen zur Entscheidung vorlegt."}),e.jsx("li",{children:"der mehrjährige Erfahrung im Umfeld von migrierten/nativen cloudbasierten Systemen, mit zugehörigen Web-/Apps, Embedded Geräten und vielen externen Schnittstellen, aufweisen kann."}),e.jsx("li",{children:"der bereits Bestands- wie Neuprojekte nach Domain-Driven-Design (u. a. mittels Domain Storytelling und Event Storming) für die Nutzer wertsteigernd um-/gestaltet hat."}),e.jsx("li",{children:"der sich regelmäßig bzgl. Architekturansätzen weiterbildet und dieses Wissen in Ihr Projekt einfließen lässt."})]})}),e.jsx(d,{header:e.jsx("span",{children:"Einen Mitdenker"}),children:e.jsxs("ul",{children:[e.jsx("li",{children:"der Sie als Product Owner dabei unterstützt, kontinuierlich Produktziele zu definieren und diese in schätzbare, implementierbare und wertsteigernde Storys/Backlog Items zu zerteilen."}),e.jsx("li",{children:"der Scrum auch in Projekten mit weniger agilen Rahmenbedingungen wertsteigernd etabliert."}),e.jsx("li",{children:"der als ehemaliger Projektleiter Erfahrung in der Projektorganisation sowie -dokumentation (u. a. Automotive SPICE) mitbringt."}),e.jsx("li",{children:"der Security Risiken im Sinne der ISO 27005 identifiziert und unter Verweis auf Security-Kataloge wie der OWASP ASVS Empfehlungen vorschlägt."}),e.jsx("li",{children:"der ein Grundverständnis bzgl. der funktionalen Sicherheit entsprechend der ISO 26262 mitbringt."}),e.jsx("li",{children:"der Regularien, wie die DSGVO, im Blick behält."})]})}),e.jsxs(d,{header:e.jsx("span",{children:"Einen Entwickler"}),children:[t(),e.jsxs("ul",{children:[e.jsx("li",{children:"der Anforderungen, Architekturentwürfe und Wireframes akkurat umsetzt."}),e.jsx("li",{children:"der flexibel in Web-UIs, Backend und Embedded Projekten (Fullstack) mitarbeitet."}),e.jsxs("li",{children:["der bereits eine Vielzahl von Programmiersprachen, Frameworks und Tools in produktiven Systemen eingesetzt hat."," ",e.jsx("span",{className:"modal-reference",onClick:()=>i(!0),children:"(↗)"})]}),e.jsx("li",{children:"der problemorientiert Programmiersprachen, Frameworks und Tools bewertet und zielsicher einsetzt."}),e.jsx("li",{children:"der mehrere CI/CD Pipelines bis zur Prod-Stage aufgesetzt hat."})]})]}),e.jsx(d,{header:e.jsx("span",{children:"Einen Mitmenschen"}),children:e.jsxs("ul",{children:[e.jsx("li",{children:"der auf eine gute Teamdynamik & -zusammenarbeit achtet."}),e.jsx("li",{children:"der verlässliche Zusagen macht."}),e.jsx("li",{children:"der Entscheidungsfreudig ist."}),e.jsx("li",{children:"der Humor im Umgang, Sachlichkeit bei Inhalten mitbringt."}),e.jsx("li",{children:"der gerne Besprechungen moderiert und Diskussionsinhalte visualisiert."})]})})]})}function p(){return e.jsx("div",{id:"content",children:e.jsx(m,{tabs:[{tabTitle:"Sie suchen",tabContent:e.jsx(g,{})},{tabTitle:"Passt?",tabContent:e.jsx(j,{})}]})})}function k(){return e.jsxs("div",{id:"imprint-content",children:[e.jsx("span",{className:"imprint-headline",children:"Angaben gemäß § 5 TMG"}),e.jsxs("span",{children:["Lukas Jaeckle",e.jsx("br",{}),"Selbständiger Softwarearchitekt & -entwickler",e.jsx("br",{}),"Gartenstraße 21",e.jsx("br",{}),"73760 Ostfildern"]}),e.jsx("span",{className:"imprint-headline",children:"Kontakt"}),e.jsxs("span",{children:["Telefon: +49 160 95052870",e.jsx("br",{}),"E-Mail: office@jaeckle.dev"]}),e.jsx("span",{className:"imprint-headline",children:"Umsatzsteuer-Identifikationsnummer"}),e.jsxs("span",{children:["Umsatzsteuer-ID gemäß § 27 a Umsatzsteuergesetz:",e.jsx("br",{})," DE362921293"]}),e.jsx("span",{className:"imprint-headline",children:"Verbraucher­streit­beilegung/Universal­schlichtungs­stelle"}),e.jsx("span",{children:"Ich bin nicht verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen."}),e.jsx("span",{className:"imprint-headline",children:"Haftung für Links"}),e.jsx("span",{className:"imprint-longtext",children:"Diese Webseite enthält Links zu externen Websites Dritter, auf deren Inhalte ich keinen Einfluss habe. Deshalb kann ich für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werde ich derartige Links umgehend entfernen."})]})}function v({imprintVisible:n,onClick:i}){return e.jsx("span",{id:"imprint-button",className:n?"imprint-button-clicked":void 0,onClick:i,children:"Impressum"})}function w(){const[n,i]=a.useState(!1);return e.jsxs("div",{id:"footer",children:[n&&e.jsxs("div",{className:"footer-imprint-container",children:[" ",e.jsx(k,{})," "]}),e.jsxs("div",{className:"footer-link-container",children:[e.jsxs("div",{className:"footer-links",children:[e.jsx("a",{href:"https://www.malt.de/profile/lukasjaeckle1",target:"_",children:"Malt"}),e.jsx("a",{href:"https://www.freelancermap.de/profil/lukas-jaeckle",target:"_",children:"freelancermap"}),e.jsx("a",{href:"https://www.freelance.de/Freelancer/286681-Softwarearchitekt-Softwareentwickler",target:"_",children:"freelance"})]}),e.jsxs("div",{className:"footer-links",children:[e.jsx("a",{href:"https://www.xing.com/profile/Lukas_Jaeckle083107",target:"_",children:"XING"}),e.jsx("a",{href:"https://www.linkedin.com/in/lukas-jaeckle",target:"_",children:"LinkedIn"}),e.jsx(v,{imprintVisible:n,onClick:()=>i(!n)})]})]})]})}function h(){const{innerWidth:n,innerHeight:i}=window;return{width:n,height:i}}function S(){const[n,i]=a.useState(h());return a.useEffect(()=>{function t(){i(h())}return window.addEventListener("resize",t),()=>window.removeEventListener("resize",t)},[]),n}function z(){const{width:n}=S(),[i,t]=a.useState(128);return a.useEffect(()=>{n<600?t(96):t(128)},[n]),e.jsx("div",{children:e.jsx("img",{id:"profile-image",alt:"Profilbild von Lukas Jaeckle",width:i,height:i,src:`assets/profile/${i}.webp`})})}function N(){return e.jsxs("div",{id:"header",children:[e.jsx("div",{id:"header-image",children:e.jsx(z,{})}),e.jsx("span",{id:"header-name",children:"Lukas Jaeckle"}),e.jsx("span",{id:"header-title",children:"Selbstständiger Softwarearchitekt & ‑entwickler"}),e.jsx("span",{id:"header-vision",children:"Gemeinsam zum wertmaximierten Produkt"})]})}function I(){return e.jsxs("div",{id:"app",children:[e.jsx(N,{}),e.jsx(p,{}),e.jsx(w,{})]})}o.createRoot(document.getElementById("root")).render(e.jsx(u.StrictMode,{children:e.jsx(I,{})}));
