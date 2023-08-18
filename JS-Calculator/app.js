var result = "";

//Clear
function Clear() {
	result = "";
	document.getElementById("outDiv").innerHTML = "";
}

//Delete
function Delete() {
	result = result.substring(0, result.length - 1);
	document.getElementById("outDiv").innerHTML = result;
}

// Seven
function getSeven() {
	let num = document.getElementById("seven").getAttribute("value");
	result += num;
	document.getElementById("outDiv").innerHTML = result;
}

//Eight
function getEight() {
	let num = document.getElementById("eight").getAttribute("value");
	result += num;
	document.getElementById("outDiv").innerHTML = result;
}

//Nine
function getNine() {
	let num = document.getElementById("nine").getAttribute("value");
	result += num;
	document.getElementById("outDiv").innerHTML = result;
}


//Four
function getFour() {
	let num = document.getElementById("four").getAttribute("value");
	result += num;
	document.getElementById("outDiv").innerHTML = result;
}

//Five
function getFive() {
	let num = document.getElementById("five").getAttribute("value");
	result += num;
	document.getElementById("outDiv").innerHTML = result;
}

//Six
function getSix() {
	let num = document.getElementById("six").getAttribute("value");
	result += num;
	document.getElementById("outDiv").innerHTML = result;
}

//One
function getOne() {
	let num = document.getElementById("one").getAttribute("value");
	result += num;
	document.getElementById("outDiv").innerHTML = result;
}

//Two
function getTwo() {
	let num = document.getElementById("two").getAttribute("value");
	result += num;
	document.getElementById("outDiv").innerHTML = result;
}

//Three
function getThree() {
	let num = document.getElementById("three").getAttribute("value");
	result += num;
	document.getElementById("outDiv").innerHTML = result;
}

//Zero
function getZero() {
	let num = document.getElementById("zero").getAttribute("value");
	result += num;
	document.getElementById("outDiv").innerHTML = result;
}

function getAdd() {
	result += "+";
	document.getElementById("outDiv").innerHTML = result;
}

function getSub() {
	result += "-";
	document.getElementById("outDiv").innerHTML = result;
}

function getMul() {
	result += "*";
	document.getElementById("outDiv").innerHTML = result;
}

function getDiv() {
	result += "/";
	document.getElementById("outDiv").innerHTML = result;
}

function getDot() {
	result += ".";
	document.getElementById("outDiv").innerHTML = result;
}

function getAns() {
	let ans = eval(result);
	result = "";
	document.getElementById("outDiv").innerHTML = ans;
}