document.getElementById("vpaButton").addEventListener("click", function() {
    if ( document.getElementById("verified").style.display == "block" ) {
        document.getElementById("verified").style.display = "none"; 
    }

    else {
        document.getElementById("amt").innerHTML = 800;
        document.getElementById("verified").style.display = "block"; 
    }
  });