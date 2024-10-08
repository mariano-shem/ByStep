let w = document.documentElement.clientWidth || window.innerWidth;
const nolink = document.querySelectorAll(".viewcard");
const sidebarMenu = document.querySelector(".mobile-sidebar");
const sidebarBtn = document.querySelector(".sidebar-open");
const mainPage = document.querySelectorAll(".sbc");
  sidebarBtn.addEventListener("click",
    function() {
      if(sidebarMenu.style.width) {
        sidebarMenu.style.width = null;
        for(i = 0; i < mainPage.length; i++) {
          mainPage[i].style.opacity = "1";
        }
        for (let i = 0; i < nolink.length; i++) {
            nolink[i].classList.remove("disable-link");
        };
      } else {
        sidebarMenu.style.width = "75%";
        for(i = 0; i < mainPage.length; i++) {
          mainPage[i].style.opacity = "0.3";
        }
        for (let i = 0; i < nolink.length; i++) {
            nolink[i].classList.add("disable-link");
        };
      }
  });
  mainPage.forEach(function(button) {
    button.addEventListener("click",
      function() {
        sidebarMenu.style.width = null;
        for(i = 0; i < mainPage.length; i++) {
          mainPage[i].style.opacity = "1";
        }
        for (let i = 0; i < nolink.length; i++) {
            nolink[i].classList.remove("disable-link");
        };
    });
  })

const checkmode = document.querySelectorAll(".toggledark-btn");
const body = document.querySelector("body");
const mobileBtn = document.querySelector(".tgm");
const desktopBtn = document.querySelector(".tgd");

checkmode.forEach(function(button) {
  button.addEventListener("change", 
    function() {
      body.classList.toggle("toggledark");
      if(body.classList.contains("toggledark")) {
        localStorage.setItem("darkMode", "on")
        mobileBtn.checked = true;
        desktopBtn.checked = true;
      } else {
        localStorage.setItem("darkMode", "off")
        mobileBtn.checked = false;
        desktopBtn.checked = false;
      }
  })
})

if(localStorage.getItem("darkMode") === "on") {
  body.classList.add("toggledark");
  mobileBtn.checked = true;
  desktopBtn.checked = true;
}


//SEARCH BAR LOGIC \/ \/ \/
const searchBar = document.querySelectorAll(".search-bar");

searchBar.forEach(
  function(inputKey) {
    inputKey.addEventListener("keyup", 
      function() {
        let findThis = this.value.toLowerCase();
        let listName = document.querySelectorAll(".list-name");
        for(i = 0; i < listName.length; i++) {
          let listItem = listName[i].querySelectorAll("li");

          for(j = 0; j < listItem.length; j++) {
            let listLink = listItem[j].querySelectorAll("a")[0];
            if (listLink.innerHTML.toLowerCase().indexOf(findThis) > -1) {
              listItem[j].style.display = "";
            } else {
              listItem[j].style.display = "none";
            }
          }
        }

        
    })
})