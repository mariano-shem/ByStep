function repositionTerm() {
  const termID = window.location.hash.substring(1);
  if (termID) {
    const termDiv = document.getElementById(termID);
    if (termDiv) {
      setTimeout(() => {
        // Get the height of the viewport
        const viewportHeight = window.innerHeight;
        
        // Get the position of the target element relative to the viewport
        const elementRect = termDiv.getBoundingClientRect();
        const elementHeight = elementRect.height;

        // Calculate the offset to center the element vertically
        const offset = (viewportHeight - elementHeight) / 2;
        
        // Calculate the scroll position
        const scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
        const targetPosition = elementRect.top + scrollPosition - offset;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth"
        });

        colorChange = setTimeout(() =>{
          termDiv.style.backgroundColor = "rgb(241, 211, 62)";
  
          colorReset = setTimeout(() => {
            termDiv.style.backgroundColor = "#D7D7D7";
          }, 1200);
        }, 500);

      }, 200)

    }
  }
}

window.onload = repositionTerm();