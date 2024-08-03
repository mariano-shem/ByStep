async function loadAccordionContents() {
  try {
    const response = await fetch("process-contents/enrolcontent.html");

    if(response.ok) {
      const accordionText = await response.text();
      const parser = new DOMParser();
      const doc = parser.parseFromString(accordionText, "text/html");

      //every line represent a step of a process page
      document.getElementById("one").innerHTML = doc.querySelector("#one").innerHTML;
      document.getElementById("two").innerHTML = doc.querySelector("#two").innerHTML;
      document.getElementById("three").innerHTML = doc.querySelector("#three").innerHTML;
      document.getElementById("four").innerHTML = doc.querySelector("#four").innerHTML;
      document.getElementById("five").innerHTML = doc.querySelector("#five").innerHTML;
      document.getElementById("six").innerHTML = doc.querySelector("#six").innerHTML;
      document.getElementById("seven").innerHTML = doc.querySelector("#seven").innerHTML;
      document.getElementById("eight").innerHTML = doc.querySelector("#eight").innerHTML;
      document.getElementById("nine").innerHTML = doc.querySelector("#nine").innerHTML;
      
    } else {
      console.error("No content.", response.status, response.statusText);
    }

  } catch (error) {
    console.error("Please refresh page.",error);
  }
}
loadAccordionContents();
//automatically opens the first collapsible
document.addEventListener("DOMContentLoaded", openAccordion);

function openAccordion(){
  const stepOne = document.querySelector(".step-one");
  const firstAccordion = stepOne.querySelector(".first-accordion-panel");
  const stepBorder = stepOne.querySelector(".accordion-header");

  firstAccordion.style.marginTop = "0.1rem";
  firstAccordion.style.marginBottom = "0.1rem";
  firstAccordion.style.maxHeight = firstAccordion.scrollHeight + "px";
};

function openCollapsible() {

  const collapseHead = document.querySelectorAll(".collapsible-header");

  collapseHead.forEach(
    function(button) {
      button.addEventListener("click", function(){
        this.classList.toggle("open")

        const collapseContainer = this.closest(".accordion-panel");
        const collapsePanel = this.nextElementSibling;
        if (collapsePanel.style.maxHeight) {
          collapsePanel.style.maxHeight = null;
        } else {
          collapsePanel.style.maxHeight = collapsePanel.scrollHeight + "px";
          collapseContainer.style.marginTop = "0.1rem";
          collapseContainer.style.marginBottom = "0.1rem";
          collapseContainer.style.maxHeight = collapseContainer.scrollHeight + collapsePanel.scrollHeight + "px";
        }
      })
    }
  )
};


//add delay in opening the collapsible to compensate for content loading
//100 means 1 second delay
function onPageLoad() {
  setTimeout(() => {
  openAccordion()
  openCollapsible()
  }, 100)
}
window.onload = onPageLoad;