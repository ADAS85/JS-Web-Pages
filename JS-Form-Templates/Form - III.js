var page = 1

function nextPage() {
	if (page < 4) {
		page += 1;
	}

	if (page == 2) {
		document.getElementById("formOne").style.visibility = "hidden";
		document.getElementById("formTwo").style.visibility = "visible";
		document.getElementById("formThree").style.visibility = "hidden";
		document.getElementById("formFour").style.visibility = "hidden";
	}
	else if (page == 3) {
		document.getElementById("formOne").style.visibility = "hidden";
		document.getElementById("formTwo").style.visibility = "hidden";
		document.getElementById("formThree").style.visibility = "visible";
		document.getElementById("formFour").style.visibility = "hidden";
	}
	else if (page == 4) {
		document.getElementById("formOne").style.visibility = "hidden";
		document.getElementById("formTwo").style.visibility = "hidden";
		document.getElementById("formThree").style.visibility = "hidden";
		document.getElementById("formFour").style.visibility = "visible";
	}
	else {
		document.getElementById("formOne").style.visibility = "visible";
		document.getElementById("formTwo").style.visibility = "hidden";
		document.getElementById("formThree").style.visibility = "hidden";
		document.getElementById("formFour").style.visibility = "hidden";
	}
}


function prevPage() {
	if (page > 1) {
		page -= 1;
	}

	if (page == 2) {
		document.getElementById("formOne").style.visibility = "hidden";
		document.getElementById("formTwo").style.visibility = "visible";
		document.getElementById("formThree").style.visibility = "hidden";
		document.getElementById("formFour").style.visibility = "hidden";
	}
	else if (page == 3) {
		document.getElementById("formOne").style.visibility = "hidden";
		document.getElementById("formTwo").style.visibility = "hidden";
		document.getElementById("formThree").style.visibility = "visible";
		document.getElementById("formFour").style.visibility = "hidden";
	}
	else if (page == 4) {
		document.getElementById("formOne").style.visibility = "hidden";
		document.getElementById("formTwo").style.visibility = "hidden";
		document.getElementById("formThree").style.visibility = "hidden";
		document.getElementById("formFour").style.visibility = "visible";
	}
	else {
		document.getElementById("formOne").style.visibility = "visible";
		document.getElementById("formTwo").style.visibility = "hidden";
		document.getElementById("formThree").style.visibility = "hidden";
		document.getElementById("formFour").style.visibility = "hidden";
	}
}