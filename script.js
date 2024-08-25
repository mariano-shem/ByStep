let w = document.documentElement.clientWidth || window.innerWidth;
  document.querySelector("#sidebar-open").addEventListener("click",
    function() {
      document.querySelector(".mobile-sidebar").style.width = "60%";
      document.querySelector(".main-page").style.opacity = "0.4";
      document.querySelector(".header").style.opacity = "0.4";
  });
  
  document.querySelector("#sidebar-close").addEventListener("click",
    function() {
      document.querySelector(".mobile-sidebar").style.width = "0";
      document.querySelector(".main-page").style.opacity = "1";
      document.querySelector(".header").style.opacity = "1";
  });
  
  document.querySelector(".main-page").addEventListener("click",
    function() {
      document.querySelector(".mobile-sidebar").style.width = "0";
      document.querySelector(".main-page").style.opacity = "1";
      document.querySelector(".header").style.opacity = "1";
  });




  
