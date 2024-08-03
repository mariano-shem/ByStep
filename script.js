
function openNav() {

  let w = document.documentElement.clientWidth || window.innerWidth;

  if (w <=480) {
    document.querySelector("#sidebar-id").style.width = "200px";
  }
  else if (w > 480 && w < 961) {
    document.querySelector("#sidebar-id").style.width = "250px";
  }
  else {
    document.querySelector("#sidebar-id").style.width = "350px";
  }

}

function closeNav() {
  document.querySelector("#sidebar-id").style.width = "0px";
}



  







  
