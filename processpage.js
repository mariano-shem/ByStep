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
          }, 500)
        }
        //open next accordion
        function openStep() {
          nextAccordion.style.marginTop = "0.1rem";
          nextAccordion.style.marginBottom = "0.1rem";
          nextAccordion.style.maxHeight = nextAccordion.scrollHeight + "px";
        }
        
        currentDiv.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });

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

    closeStep(openStep);

    //close current accordion
    function closeStep(cb) {
      currentAccordion.style.maxHeight = "0";
      currentAccordion.style.marginTop = "0";
      currentAccordion.style.marginBottom = "0";
      setTimeout(function() {
        cb();
      }, 500)
    }
    //open previous accordion
    function openStep() {
      prevAccordion.style.marginTop = "0.1rem";
      prevAccordion.style.marginBottom = "0.1rem";
      prevAccordion.style.maxHeight = prevAccordion.scrollHeight + "px";
    }

    //reposition screen to last step
    currentDiv.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });

    currentDiv.classList.toggle("active");
    prevDiv.classList.toggle("active");
  });
});

function confirmExit(confirmTitle, confirmMsg, cancelBtn, confirmBtn, link) {
  const content = "<div class=\"confirm-exit\">" +
  "<div class=\"confirm-title\"><h3>" + confirmTitle + "</h3></div>" +
  "<div class=\"confirm-msg\"><p>" + confirmMsg + "</p></div>" +
  "<div class=\"control-btns\">" +
    "<button class=\"c-button cancel\">" + cancelBtn + "</button>" +
    "<button class=\"c-button confirm\">" + confirmBtn + "</button>" +
  "</div>"

  document.body.insertAdjacentHTML("afterbegin", content);
  document.body.classList.add("disable");

  document.querySelector(".confirm").addEventListener("click", 
    function() {
      this.closest(".confirm-exit").style.display = "none";
      this.closest(".confirm-exit").remove();
      location.href = "../";
    }
  );
  document.querySelector(".cancel").addEventListener("click", 
    function() {
      this.closest(".confirm-exit").style.display = "none";
      this.closest(".confirm-exit").remove();
      document.body.classList.remove("disable");
    }
  );
}

finishButton.forEach(
  function(button) {
    button.addEventListener("click", 
    function(button) {
      button.preventDefault();
      confirmExit("Finish Process?", 
        "This will take you back to the home page.", 
        "Cancel", 
        "Confirm",
        "../");
    });
  });
  
//check dark mode status
if(localStorage.getItem("darkMode") === "on") {
  document.querySelector("body").classList.add("toggledark");
} 