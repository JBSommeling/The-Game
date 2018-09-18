var power = 1;
var money = 'broke';
var concentration = 1;
var stamina = 1;
var armory = 0;

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
}
else if (money === 'enough') {
	armory = 'Hero Sword';
}
else if (money === 'plenty') {
	armory = 'Hero Sword and Armor';
}

document.write("<br /> Power, money, concentration en stamina = " + power + money + concentration + stamina + armory);

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
	power = power + 2;
	if (stamina == 4) {
		alert('Ik kon mij goed concentreren. Mijn concentratie was meesterlijk. Ik ben klaar om te vechten!');
	}
	else if (stamina == 2) {
		alert('Ik ben klaar om te vechten!');
	}
	else {
		alert('Ik kon mij moeilijk concentreren. Ik ben eigenlijk nog niet helemaal klaar om te vechten...')
	}
}
}
preparation();
var moreTraining = prompt('Wil je alvast tegen de draak vechten? (ja of nee?)');
if (moreTraining == 'ja') {
	//fight

}
else {
	preparation();
	alert('Ik ga nu tegen de draak vechten!');
	//fight
}





