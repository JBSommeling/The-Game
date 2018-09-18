var power = 1;
var money = 'broke';
var concentration = 1;
var stamina = 1;
var armory = 0;
var princess = false;
var dragon = false;



//Preparation
function preparation() {
var preparation = prompt('Tijd voor de voorbereiding! Wil je trainen, rusten of mediteren?');
if (preparation == 'trainen') {
	power = power + 1;
	stamina = stamina - 1
}
else if (preparation == 'rusten') {
	stamina = stamina + 1;
}
else if (preparation == 'mediteren') {
	stamina = stamina + 2;
	if (stamina >= 4) {
		alert('Ik kon mij goed concentreren. Mijn concentratie was meesterlijk. Ik ben klaar om te vechten!');
	}
	else if (stamina == 3) {
		alert('Ik ben klaar om te vechten!');
	}
	else {
		alert('Ik kon mij moeilijk concentreren. Ik ben eigenlijk nog niet helemaal klaar om te vechten...')
	}
}
}
//vechten
function fight() {
	if (stamina <=1 ) {
		alert("Je bent doodgegaan. Je hebt de draak niet kunnen verslaan. Je uithoudingsvermogen was te laag.")
		dragon = false;
		princess = false;
	}
	else {
		if (power >=2){
			alert('Met je '+ armory + ' had je genoeg kracht om de draak te verslaan.');
			dragon = true;
			var safePrincess = prompt('Wil je de princess alsnog redden? ja of nee?');
			if ( safePrincess == 'ja' && stamina >=3){
				alert('Je hebt de princess gered!');
				princess = true;
			}
			else if ( safePrincess == 'ja' && stamina <3) {
				alert('Je hebt de princess niet gered. Je had te weinig stamina.');
				princess = false;
			}
		}
		else {
			alert ('Met je ' + armory + ' heb je de draak niet kunnen doden, je had te weinig power over.');
			dragon = false;
			var safePrincess = prompt('Wil je de princess alsnog redden of ga je voor de poen? geld of princess?');
			if (safePrincess == 'geld') {
				alert ('Je hebt de princess niet gered. Je ging voor de poen. Je bent nu steenrijk!'); //ending maken
				princess = false;
			}
			else if ( safePrincess == 'princess' && stamina >=3) {
				alert('Je hebt de princess gered!');
				princess = true;
			}
			else if ( safePrincess == 'princess' && stamina <3) {
				alert('Je hebt de princess niet kunnen redden. Je had te weinig stamina.')
				princess = false;
			}

		}
	}
}

function decision() {
	if (dragon == true && princess == true) {
		alert('Je hebt zowel de draak gedood en de princess gered. Je kan nu met haar trouwen');
	}
	else if (dragon == true || princess == true) {
		alert('test 2');
	}
	else if (dragon == false && princess == false) {
		alert('test 3');
	}
}

//Bandieten vallen in bos aan.
var banditkill = prompt('Bandieten in het bos vallen een boodschapper aan! Helpen? (ja of nee)');
if (banditkill == 'ja') {
	//bandieten weggejaagd. Krijgt extra goud en boodschap over Draak en Princess.
	stamina = stamina - 1;
	concentration = concentration - 1;
	power = power + 1;
	money = 'enough';
	var loot = prompt('Wil je de lijken looten? (ja of nee)');
	if (loot === 'ja') {
		money = 'plenty';
	}

}
else {
	//Bandieten vanzelf weg. Krijgt alleen boodschap over Draak en Princess.
	stamina = stamina + 1;
	concentration = concentration + 1;
	power = power - 1;
	money = 'broke';
}
document.write("<br /> Power, money, concentration en stamina = " + power + money + concentration + stamina);
//inkopen in de stad voor wapens en eventueel armor.
var buyWeapons = prompt('Wapens kopen? (ja of nee)');
if (money ==='broke') {
	armory = 'Dummy Sword';
	power = power + 1;
}
else if (money === 'enough') {
	armory = 'Hero Sword';
	power = power + 2;
}
else if (money === 'plenty') {
	armory = 'Hero Sword en Armor';
	power = power + 3
}

document.write("<br /> Power, money, concentration en stamina = " + power + money + concentration + stamina + armory);

preparation();
var moreTraining = prompt('Wil je alvast tegen de draak vechten? (ja of nee?)');
if (moreTraining == 'ja') {
	fight();
	decision();
	//fight
}
else {
	preparation();
	alert('Ik ga nu tegen de draak vechten!');
	fight();
	decision();

	//fight
}


//Alle eindes controleren. Mogelijk met document.write.
//Ending maken met geld keuze
// concentration verwijderen. Armory implementeren


