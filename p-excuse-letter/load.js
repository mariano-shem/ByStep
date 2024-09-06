async function loadAccordionContents() {
  try {
    const response = await fetch("content.html");

    if(response.ok) {
      const accordionText = await response.text();
      const parser = new DOMParser();
      const doc = parser.parseFromString(accordionText, "text/html");

      //every line represent a heading of a process page
      document.getElementById("head-1").innerHTML = doc.querySelector("#head-1").innerHTML;
      document.getElementById("head-2").innerHTML = doc.querySelector("#head-2").innerHTML;
      document.getElementById("head-3").innerHTML = doc.querySelector("#head-3").innerHTML;
      document.getElementById("head-4").innerHTML = doc.querySelector("#head-4").innerHTML;

      //every line represent a content of a process page
      document.getElementById("content-1").innerHTML = doc.querySelector("#content-1").innerHTML;
      document.getElementById("content-2").innerHTML = doc.querySelector("#content-2").innerHTML;
      document.getElementById("content-3").innerHTML = doc.querySelector("#content-3").innerHTML;
      document.getElementById("content-4").innerHTML = doc.querySelector("#content-4").innerHTML;
      

      
    } else {
      console.error("No content.", response.status, response.statusText);
    }

  } catch (error) {
    console.error("Please refresh page.",error);
  } finally {
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

    setTimeout(() => {
      openAccordion()
      openCollapsible()
      }, 500)
  }
}
loadAccordionContents();