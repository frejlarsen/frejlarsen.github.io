function boop() {

	if (document.getElementById("number").value==123) {
		text = "That's the correct number!"
	} else {
		text = "Sorry, that's a wrong number"
	}


	var clueDiv = document.getElementById("clue")
	clueDiv.innerHTML = "<p>" + text + "!</p>"

}
