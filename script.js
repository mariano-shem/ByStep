
function openNav() {

  let w = document.documentElement.clientWidth || window.innerWidth;

  if (w <=480) {
    document.getElementById("sidebar-id").style.width = "200px";
    document.getElementById("sidebar-id").style.backgroundColor = "red";
  }
  else if (w > 480 && w < 961) {
    document.getElementById("sidebar-id").style.width = "250px";
    document.getElementById("sidebar-id").style.backgroundColor = "blue";
  }
  else {
    document.getElementById("sidebar-id").style.width = "350px";
    document.getElementById("sidebar-id").style.backgroundColor = "green";
  }

}

function closeNav() {
  document.getElementById("sidebar-id").style.width = "0px";
}

//CHANGE THIS TO SWITCH CASE LATER
//universal checkbox ayaw eon paghueaga ra, ginpuean ko ran mayad
var currentStep = document.querySelectorAll(".radio-btn");

currentStep.forEach(el => el.addEventListener("change", event => {
  var currentButton = event.target.value;
  var nextStep;
  var nextButton;

  switch(currentButton) {
    case "BoxOne":
      nextStep = document.querySelectorAll(".container-two");
      for(i = 0; i <nextStep.length; i++) {
        nextStep[i].style.opacity = "1";
        nextStep[i].querySelector("input").disabled = false;
      }
      break;
    case "BoxTwo":
      nextStep = document.querySelectorAll(".container-three");
      for(i = 0; i <nextStep.length; i++) {
        nextStep[i].style.opacity = "1";
        nextStep[i].querySelector("input").disabled = false;
      }
      break;
    case "BoxThree":
      nextStep = document.querySelectorAll(".container-four");
      for(i = 0; i <nextStep.length; i++) {
        nextStep[i].style.opacity = "1";
        nextStep[i].querySelector("input").disabled = false;
      }
      break;
    case "BoxFour":
      nextStep = document.querySelectorAll(".container-five");
      for(i = 0; i <nextStep.length; i++) {
        nextStep[i].style.opacity = "1";
        nextStep[i].querySelector("input").disabled = false;
      }
      break;
    case "BoxFive":
      nextStep = document.querySelectorAll(".container-six");
      for(i = 0; i <nextStep.length; i++) {
        nextStep[i].style.opacity = "1";
        nextStep[i].querySelector("input").disabled = false;
      }
      break;
    case "BoxSix":
      nextStep = document.querySelectorAll(".container-seven");
      for(i = 0; i <nextStep.length; i++) {
        nextStep[i].style.opacity = "1";
        nextStep[i].querySelector("input").disabled = false;
      }
      break;
    case "BoxSeven":
      nextStep = document.querySelectorAll(".container-eight");
      for(i = 0; i <nextStep.length; i++) {
        nextStep[i].style.opacity = "1";
        nextStep[i].querySelector("input").disabled = false;
      }
      break;
    case "BoxEight":
      nextStep = document.querySelectorAll(".container-nine");
      for(i = 0; i <nextStep.length; i++) {
        nextStep[i].style.opacity = "1";
        nextStep[i].querySelector("input").disabled = false;
      }
      break;
    case "BoxNine":
      nextStep = document.querySelectorAll(".container-ten");
      for(i = 0; i <nextStep.length; i++) {
        nextStep[i].style.opacity = "1";
        nextStep[i].querySelector("input").disabled = false;
      }
      break;
    case "BoxTen":
      nextStep = document.querySelectorAll(".container-eleven");
      for(i = 0; i <nextStep.length; i++) {
        nextStep[i].style.opacity = "1";
        nextStep[i].querySelector("input").disabled = false;
      }
      break;
  }
}));

  
//expanding a step and showing addtl. content
var expandStep = document.querySelectorAll(".radio-label");

for(i = 0; i < expandStep.length; i++) {
  expandStep[i].addEventListener("click", function() {
    this.classList.toggle("expand");
    var stepContent = this.nextElementSibling;
      if (stepContent.style.maxHeight) {
        stepContent.style.maxHeight = null;
      } else {
        stepContent.style.maxHeight = stepContent.scrollHeight + "px";
      }
  });
}






  
