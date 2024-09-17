const tabButton = document.querySelectorAll(".id-tab");
const tabContent = document.querySelectorAll(".id-step-container");

tabButton.forEach(function(button) {
  button.addEventListener("click", function() {
     if (this.classList.contains("id-reg")) {
      tabContent[0].classList.add("show");
      tabContent[1].classList.remove("show");
      tabButton[0].classList.add("selected");
      tabButton[1].classList.remove("selected");
     } else {
      tabContent[1].classList.add("show");
      tabContent[0].classList.remove("show");
      tabButton[1].classList.add("selected");
      tabButton[0].classList.remove("selected");
      const stepTwo = tabContent[1].querySelector(".step-two");
      const firstAccordion = stepTwo.querySelector(".accordion-panel");
      if (stepTwo.classList.contains("active")) {
        firstAccordion.style.marginTop = "0.1rem";
        firstAccordion.style.marginBottom = "0.1rem";
        firstAccordion.style.maxHeight = firstAccordion.scrollHeight + "px";
      }
     }
  })
})