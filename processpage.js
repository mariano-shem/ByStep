window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

//heart of the program.
const nextButton = document.querySelectorAll(".next-button");
const backButton = document.querySelectorAll(".back-button");
const finishButton = document.querySelectorAll(".finish-button");

//next button function

nextButton.forEach(
  function(button) {
    button.addEventListener("click",
      function() {
        const currentDiv = this.closest(".container");
        const nextDiv = currentDiv.nextElementSibling;

        const currentAccordion  = currentDiv.querySelector(".accordion-panel"); //current accordion
        const nextAccordion  = nextDiv.querySelector(".accordion-panel"); //next step accordion

        closeStep(openStep);
        
        //close current accordion
        function closeStep(cb) {
          currentAccordion.style.maxHeight = "0";
          currentAccordion.style.marginTop = "0";
          currentAccordion.style.marginBottom = "0";
          setTimeout(function () {
            cb();
          }, 200)
        }
        //open next accordion
        function openStep() {
          nextAccordion.style.marginTop = "0.1rem";
          nextAccordion.style.marginBottom = "0.1rem";
          nextAccordion.style.maxHeight = nextAccordion.scrollHeight + "px";
        }
        
        //reposition screen to next step
        /*currentDiv.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });*/

        currentDiv.classList.toggle("active");
        nextDiv.classList.toggle("active");
        currentDiv.classList.add("done");
    })
  }
);

//back button function
backButton.forEach(function(button) {
  button.addEventListener("click", function() {

    const currentDiv = this.closest(".container"); //declare current step container
    const prevDiv = currentDiv.previousElementSibling; //declare previous step container

    const prevAccordion  = prevDiv.querySelector(".accordion-panel"); //current accordion
    const currentAccordion  = currentDiv.querySelector(".accordion-panel"); //previous step accordion

    //close current accordion
    currentAccordion.style.maxHeight = "0";
    currentAccordion.style.marginTop = "0";
    currentAccordion.style.marginBottom = "0";
    //open previous accordion
    prevAccordion.style.marginTop = "0.1rem";
    prevAccordion.style.marginBottom = "0.1rem";
    prevAccordion.style.maxHeight = prevAccordion.scrollHeight + "px";

    //reposition screen to last step
    /*currentDiv.scrollIntoView({
      behavior: "smooth",
      block: "center"
    });*/

    currentDiv.classList.toggle("active");
    prevDiv.classList.toggle("active");
  });
});

//go home
finishButton.forEach(function(button) {
  button.addEventListener("click", function() {
    location.href = "../index.html";
  })
})



