function boop() {


	let num = document.getElementById("number").value;

	if (num==123) {
		text = "Det her er et demo-tal! Det er totalt magisk, men giver desværre ikke noget fødselsdagshint!"
	} else if (num==3735) {
		text = "<img src='images/DSC00003.JPG' width='90%' alt='Danish beauty'>"
	} else if (num==1993) {
		text = "Kære søde sveskemås, snorketrold, englebasse <3 <br><br> Jeg håber du har haft en dejlig dag, og har en lille smule energi tilbage til en lille skattejagt! Jeg har gemt 5 små breve med opgaver rundt omkring med små opgaver til dig. Hver opgave vil give dig en kode, som du kan bruge på denne hjemmeside til at få et nyt hint. Den sidste kode vil røbe hvor du kan finde din gave! (hvis du altså ikke allerede har fundet den inden din fødselsdag..). <br> Hvis du har brug for hjælp kan du bare skrive til mig, så kan jeg hjælpe dig i den rigtige retning! <br><br> Held og lykke! <br><br> Kærlig hilsen Frej.<br><br><br> Her er et billede af hvor den første opgave er gemt. Det er et sted i køkkenet: <br>"
		text += "<img src='images/IMG_1800.jpg' width='70%' alt='ismaskinen'>"
	} else if (num==1359) {
		text = "Godt klaret! Den næste opgave er gemt.... HER!<br>"
		text += "<img src='images/IMG_1785.jpg' width='70%' alt='sofaen'>"
	} else if (num==6101) {
		text = "Meget imponerende!! Den tredje opgave er gemt.... HER!<br>"
		text += "<img src='images/IMG_1784.jpg' width='70%' alt='lords of waterdeep'>"
	} else if (num==3040) {
		text = "Puha! Sikke en hjernevrider! Den fjerde opgave er gemt et sted i soveværelset!<br>"
		text += "<img src='images/IMG_1786.jpg' width='70%' alt='Birgits maleri'>"
	} else if (num==1907) {
		text = "Hvor er du bare KLOG! Jeg håber ikke det har været alt for svært! Den sidste opgave er heldigvis meget nem!<br> Den er gemt lige her! <br>"
		text += "<img src='images/IMG_1783.jpg' width='70%' alt='spisebordet'>"
	} else if (num==9673) {
		text = "TILLYKKE MED FØDSELSDAGEN!!!!! <br> Du er bare mega klog og alt muligt!!! <br> Din gave ligger i to sorte sække i kælderrummet! <br>"
		text += "<img src='images/birthday.jpg' width='70%' alt='lys'>"
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
	clueDiv.innerHTML = "<br>" + text
}
