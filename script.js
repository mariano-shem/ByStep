
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

//CHANGE THIS TO SWITCH CASE LATER
//universal checkbox ayaw eon paghueaga ra, ginpueawan ko ran mayad
document.querySelectorAll(".radio-btn").forEach(function(input) {
  input.addEventListener("change", function() {
      var currentDiv = this.closest(".step");
      var nextDiv = currentDiv.nextElementSibling;
      if (nextDiv && nextDiv.classList.contains("step")) {
        nextDiv.querySelector("input").disabled = false;
        currentDiv.classList.add("step-fin");
        nextDiv.classList.add("step-gonext");

        /*automatic expand, remove at will*/
        autoExpand = nextDiv.querySelector(".step-collapsible");
        autoExpand.style.maxHeight = autoExpand.scrollHeight + "px";

        /*automatic close previous step, remove at will*/
        autoClose = currentDiv.querySelector(".step-collapsible");
        autoClose.style.maxHeight = null;
      }
  });
});

  
//expanding a step and showing addtl. content
var expandStep = document.querySelectorAll(".radio-label");

for(i = 0; i < expandStep.length; i++) {
  expandStep[i].addEventListener("click", function() {
    this.classList.toggle("expand");
    var stepContent = this.nextElementSibling;
      if (stepContent.style.maxHeight) {
        stepContent.style.maxHeight = null;
        stepContent.style.marginTop = "0";
        stepContent.style.marginBottom = "0";
      } else {
        stepContent.style.maxHeight = stepContent.scrollHeight + "px";
        stepContent.style.marginTop = "10px";
        stepContent.style.marginBottom = "10px";
      }
  });
}






  
