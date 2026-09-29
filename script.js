const menuBtn=document.querySelector(".menu-btn");const nav=document.querySelector(".nav");menuBtn.addEventListener("click",()=>{nav.classList.toggle("open");menuBtn.setAttribute("aria-expanded",nav.classList.contains("open"))});document.querySelectorAll(".nav a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));document.getElementById("year").textContent=new Date().getFullYear();document.getElementById("enquiryForm").addEventListener("submit",function(e){e.preventDefault();const d=new FormData(this);const msg=`Hello Yaster International,%0A%0AName: ${encodeURIComponent(d.get("name"))}%0ACompany: ${encodeURIComponent(d.get("company")||"-")}%0AInterest: ${encodeURIComponent(d.get("interest"))}%0AEmail: ${encodeURIComponent(d.get("email")||"-")}%0A%0ARequirement:%0A${encodeURIComponent(d.get("message"))}`;window.open(`https://wa.me/918825756004?text=${msg}`,"_blank")});
document.querySelectorAll(".enquiry-tab").forEach(btn=>{
  btn.addEventListener("click",()=>{
    document.querySelectorAll(".enquiry-tab").forEach(b=>b.classList.remove("active"));
    btn.classList.add("active");
    const select=document.querySelector('select[name="interest"]');
    select.value=btn.dataset.interest;
  });
});
