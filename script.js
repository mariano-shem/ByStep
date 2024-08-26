let w = document.documentElement.clientWidth || window.innerWidth;
let q = document.querySelectorAll(".viewcard");

document.querySelector(".sidebar-btn").addEventListener("click",
    function() {
      document.querySelector(".mobile-sidebar").style.width = "75%";
      document.querySelector(".main-page").style.opacity = "0.4";
      document.querySelector(".header").style.opacity = "0.4";
      for (let i = 0; i < q.length; i++) {
        q[i].classList.add("disable-link");
      };
  });
  
document.querySelector(".closebtn").addEventListener("click",
    function() {
      document.querySelector(".mobile-sidebar").style.width = "0";
      document.querySelector(".main-page").style.opacity = "1";
      document.querySelector(".header").style.opacity = "1";
      for (let i = 0; i < q.length; i++) {
        q[i].classList.remove("disable-link");
      };

  });

document.querySelector(".main-page").addEventListener("click",
    function() {
      document.querySelector(".mobile-sidebar").style.width = "0";
      document.querySelector(".main-page").style.opacity = "1";
      document.querySelector(".header").style.opacity = "1";
      for (let i = 0; i < q.length; i++) {
        q[i].classList.remove("disable-link");
      };
  });




  
