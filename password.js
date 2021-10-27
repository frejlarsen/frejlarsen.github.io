function boop() {


	let num = document.getElementById("number").value;

	if (num==123) {
		text = "Yaaaay! Magisk tal!!!"
	} else {

		incorrect = num % 4;

		switch(incorrect) {
			case 0:
				text = "Niks! Det nummer virkede ikke!"
				break;
			case 1:
				text = "Ærgeligt! Prøv igen!"
				break;
			case 2:
				text = "Beklager, det tal er ikke magisk :("
				break;
			case 3:
				text = "Hov, det var vist en smutter!"
				break;
			default:
				text = "Ej altså, det virkede ikke!"
		}
	}

	var clueDiv = document.getElementById("clue")
	clueDiv.innerHTML = "<p>" + text + "!</p>"
}
