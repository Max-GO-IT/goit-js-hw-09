import"./assets/styles-ba4318e3.js";const t={email:"",message:""},a=document.querySelector(".feedback-form"),s="feedback-form-state";window.addEventListener("load",()=>{const e=localStorage.getItem(s);e&&(t=JSON.parse(e),a.elements.email.value=t.email,a.elements.message.value=t.message)});a.addEventListener("input",e=>{t[e.target.name]=e.target.value,localStorage.setItem(s,JSON.stringify(t))});a.addEventListener("submit",e=>{e.preventDefault(),localStorage.removeItem(s),t.email="",t.message="",a.reset()});
//# sourceMappingURL=commonHelpers2.js.map
