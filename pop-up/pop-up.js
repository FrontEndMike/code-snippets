function mainPopup(){
	var element = document.getElementById("pop-up-wrapper");
	    element.classList.add("on");
}

window.onload = function() {
  setTimeout(mainPopup, 5000);
};

function closeFunction(){
	var element = document.getElementById("pop-up-wrapper");
	element.classList.remove("on");
}