let w = document.documentElement.clientWidth || window.innerWidth;
const nolink = document.querySelectorAll(".viewcard");
const sidebarMenu = document.querySelector(".mobile-sidebar");
const sidebarBtn = document.querySelector(".sidebar-open");

  sidebarBtn.addEventListener("click",
    function() {
      this.classList.toggle("sidebar-close");
      if(sidebarMenu.style.width) {
        sidebarMenu.style.width = null;
        document.querySelector(".main-page").style.opacity = "1";
        for (let i = 0; i < nolink.length; i++) {
            nolink[i].classList.remove("disable-link");
        };
      } else {
        sidebarMenu.style.width = "75%";
        document.querySelector(".main-page").style.opacity = "0.3";
        for (let i = 0; i < nolink.length; i++) {
            nolink[i].classList.add("disable-link");
        };
      }
  });
  
  document.querySelector(".main-page").addEventListener("click",
    function() {
      sidebarMenu.style.width = null;
      document.querySelector(".main-page").style.opacity = "1";
      for (let i = 0; i < nolink.length; i++) {
          nolink[i].classList.remove("disable-link");
      };
      sidebarBtn.classList.remove("sidebar-close");
  });

const checkmode = document.querySelector("#toggledark-btn");
const body = document.querySelector("body");

checkmode.addEventListener("change", 
  function() {
    body.classList.toggle("toggledark");
    if(body.classList.contains("toggledark")) {
      localStorage.setItem("darkMode", "on")
      this.checked = true;
    } else {
      localStorage.setItem("darkMode", "off")
      this.checked = false;
    }
})

if(localStorage.getItem("darkMode") === "on") {
  body.classList.add("toggledark");
  checkmode.checked = true;
} 