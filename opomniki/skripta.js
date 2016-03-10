window.addEventListener('load', function() {
	//stran nalozena
		
	//Posodobi opomnike
	var posodobiOpomnike = function() {
		var opomniki = document.querySelectorAll(".opomnik");
		
		for (i = 0; i < opomniki.length; i++) {
			var opomnik = opomniki[i];
			var casovnik = opomnik.querySelector("span");
			var cas = parseInt(casovnik.innerHTML);
	
			//TODO: 
			// - če je čas enak 0, izpiši opozorilo "Opomnik!\n\nZadolžitev NAZIV_OPOMNIK je potekla!"
			// - sicer zmanjšaj čas za 1 in nastavi novo vrednost v časovniku
			if (cas == 0) {
				alert("Opomnik!\n\nZadolžitev NAZIV_OPOMNIK je potekla!");
				opomnik.innerHTML = "";
			} else {
				cas--;
				casovnik.innerHTML = cas;
			}
		}
	}
	setInterval(posodobiOpomnike, 1000);
	
	
	var dodajOpomnik = function(event) {
		var nazivEl = document.querySelector("#naziv_opomnika");
		var casEl = document.querySelector("#cas_opomnika");
		document.querySelector("#opomniki").innerHTML += "<div class='opomnik senca rob'>\
            <div class='naziv_opomnika'>"+nazivEl.value+"</div>\
            <div class='cas_opomnika'> Opomnik čez <span>"+casEl.value+"</span> sekund.</div></div>"
            nazivEl.value = "";
            casEl.value = "";
		
	};
	
	document.querySelector("#dodajGumb").addEventListener("click", dodajOpomnik);
	
	
	var izvediPrijavo = function(event) {
		var ime = document.querySelector("#uporabnisko_ime").value;
		document.querySelector("#uporabnik").innerHTML = ime;
		document.querySelector(".pokrivalo").style.display = "none";
	
	};
	
	document.querySelector("#prijavniGumb").addEventListener("click", izvediPrijavo);
	
	
});