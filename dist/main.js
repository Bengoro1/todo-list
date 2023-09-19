(()=>{"use strict";var t={};(t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})})(t);!function(){const e=document.createElement("div");document.body.appendChild(e),e.classList.add("header");const n=document.createElement("div");document.body.appendChild(n),n.classList.add("content");const d=document.createElement("button");d.textContent="Create new project",n.appendChild(d),d.addEventListener("click",(()=>{document.querySelector(".project-form")||(()=>{const e=document.querySelector(".content"),n=document.createElement("form");n.classList.add("project-form"),n.setAttribute("method","get"),e.appendChild(n);const d=document.createElement("button");d.textContent="×",d.classList.add("cancel-button"),d.setAttribute("type","button"),n.appendChild(d),d.addEventListener("click",(()=>{e.contains(n)&&e.removeChild(n)}));const o=document.createElement("h1");o.textContent="Create project",o.classList.add("title"),n.appendChild(o);const c=document.createElement("label");c.setAttribute("for","project-name"),n.appendChild(c);const a=document.createElement("input");a.setAttribute("type","text"),a.id="project-name",a.setAttribute("name","project-name"),n.appendChild(a);const i=document.createElement("label");i.setAttribute("for","due-date"),n.appendChild(i);const r=document.createElement("input");r.setAttribute("type","date"),r.id="due-date",r.setAttribute("name","due-date"),n.appendChild(r);const l=document.createElement("label");l.setAttribute("for","priority"),n.appendChild(l);const u=document.createElement("input");u.setAttribute("type","text"),u.id="priority",u.setAttribute("name","priority"),n.appendChild(u);const s=document.createElement("button");s.setAttribute("type","submit"),s.textContent="Add project",n.appendChild(s),s.addEventListener("click",(d=>{d.preventDefault(),t.default.push({projectName:a.value,dueDate:r.value,priority:u.value}),console.log(t.default),e.removeChild(n)}))})()}));const o=document.createElement("button");o.textContent="Create new to-do",n.appendChild(o),o.addEventListener("click",(()=>{document.querySelector(".todo-form")||(()=>{const e=document.querySelector(".content"),n=document.createElement("form");n.classList.add("todo-form"),n.setAttribute("method","get"),e.appendChild(n);const d=document.createElement("button");d.textContent="×",d.classList.add("cancel-button"),d.setAttribute("type","button"),n.appendChild(d),d.addEventListener("click",(()=>{e.contains(n)&&e.removeChild(n)}));const o=document.createElement("h1");o.textContent="Create to-do",o.classList.add("title"),n.appendChild(o);const c=document.createElement("label");c.setAttribute("for","todo-name"),n.appendChild(c);const a=document.createElement("input");a.setAttribute("type","text"),a.id="todo-name",a.setAttribute("name","todo-name"),n.appendChild(a);const i=document.createElement("label");i.setAttribute("for","todo-description"),n.appendChild(i);const r=document.createElement("input");r.setAttribute("type","text"),r.id="todo-description",r.setAttribute("name","todo-description"),n.appendChild(r);const l=document.createElement("label");l.setAttribute("for","due-date"),n.appendChild(l);const u=document.createElement("input");u.setAttribute("type","date"),u.id="due-date",u.setAttribute("name","due-date"),n.appendChild(u);const s=document.createElement("label");s.setAttribute("for","priority"),n.appendChild(s);const p=document.createElement("input");p.setAttribute("type","text"),p.id="priority",p.setAttribute("name","priority"),n.appendChild(p);const m=document.createElement("button");m.setAttribute("type","submit"),m.textContent="Add to-do",n.appendChild(m),m.addEventListener("click",(d=>{d.preventDefault(),t.default.push(((t,e,n,d)=>({title:t,description:e,dueDate:n,priority:d}))(a.value,r.value,u.value,p.value)),console.log(t.default),e.removeChild(n)}))})()}));const c=document.createElement("div");document.body.appendChild(c),c.classList.add("footer")}()})();