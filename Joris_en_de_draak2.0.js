var life = 100;
var gold = 0;
var power = 1;
var courage = 2;

var armory = 0;
var dragon = false;
var princess = false;

function prep() {
alert ('Eenmaal aangekomen op het thuisfront sta je voor een keuze. Ik moet zo snel mogelijk de draak verslaan, maar ik moet mij eerst voorbereiden!...') 
console.log('Voorbereiding op het gevecht');
var preparation = prompt('Tijd voor de voorbereiding! Wil je trainen (+1 power en +1 courage), rusten (-1 courage en + 2 power) of mediteren? (volledige levens)');
	if (preparation == 'trainen') {
		power = power + 1;
		courage = courage + 1;
	}
	else if (preparation == 'rusten') {
		courage = courage - 1;
		power = power + 2;
	}
	else if (preparation == 'mediteren') {
	life = 100;
		if (courage >= 5) {
			alert('Ik kon mij goed concentreren. Mijn concentratie was meesterlijk. Ik ben klaar om te vechten!');
		}
		else if (courage <= 4 && courage >=2) {
			alert('Ik ben klaar om te vechten!');
		}
		else if (courage === 1) {
			alert('Ik kon mij moeilijk concentreren. Ik ben eigenlijk nog niet helemaal klaar om te vechten...')
		}
	}
}

function fight() {
	console.log('Het grote gevecht tegen de draak.');
	if (life <=70 ) {
		alert("Je bent bijna doodgegaan. Je hebt de draak niet kunnen verslaan. Je had te weinig levens over toen hij je zwaar verwonde met zijn helse staart. Waar kwam ie vandaan!?.")
		dragon = false;
		princess = false;
	}
	else {
		if (power >=3){
			alert('Je had genoeg kracht over om de draak te verslaan.');
			dragon = true;
			var safePrincess = prompt('Achter de draak zie je een zak goud. De weg achter je stort in door het hevige gevecht. Wil je de princess redden en de zak goud achterlaten? ja of nee?');
			if ( safePrincess == 'ja'){
				alert('Je hebt de princess gered!');
				princess = true;
			}
			else {
				gold = gold + 10;
				alert('Goed keuze. Je hebt weliswaar de princess niet gered, maar wel een flinke zak goud gevonden met wel 10 goudstukken! Je hebt nu '+ gold + ' goudstukken.');
			}
		}
		else {
			alert ('Je hebt de draak niet kunnen doden, je had te weinig power over.');
			dragon = false;
			var safePrincess = prompt('Achter de draak zie je een zak goud. De weg achter je stort in door het hevige gevecht. Wil je de princess redden en de zak goud achterlaten?');
			if (safePrincess == 'nee') {
				alert ('Je hebt de princess niet gered. Je ging voor de poen. Je bent nu steenrijk! Misschien dat je sneeuwwitje het hof kunt maken met je doekoe\'s'); //ending maken
				princess = false;
			}
			else {
				alert('Je hebt de princess gered!');
				princess = true;
			}
		}
	}
}

function decision() {
	if (dragon == true && princess == true) {
		alert('Je hebt zowel de draak gedood en de princess gered. Je kan nu met haar trouwen'); // courage om haar ten huwelijk te vragen
	}
	else if (dragon == true || princess == true) {
		alert('test 2'); //of je hebt de draak gedood en gegaan voor de poen óf je hebt de draak niet gedood en gegaan voor de princes om te redden. Courage om sneeuwwitje of de prinses ten huwelijk te vragen.
	}
	else if (dragon == false && princess == false) {
		alert('test 3'); // bijna dood verhaal verder maken
	}
}


//2 clans bandieten vallen in bos een krijger aan. Zo te zien hebben ze ruzie met de krijger, maar ook met elkaar... Jonkheer Joris kijkt toe.
var help = prompt('Ga je de krijger in nood helpen? Ja/Nee?');
console.log('De krijger in nood');
if (help == 'ja') {
	alert('Je weet ternauwernood te ontsnappen aan een dodelijke slag, met als gevolg dat je geraakt bent. Je hebt mooi wat goudstukken van de bandietten kunnen stelen');
	life = life - 30;
	power = power + 1;
	courage = courage + 1;
	gold = gold + 5;
	alert ('Je hebt ' + life + ' levens over. Power + 1 (' + power + '), Courage + 1 (' + courage + ') en goud + 5 (' + gold + ')');
}
else {
	alert('Je ziet het gevaar in van de situatie, en wacht tot ze elkaar afmaken');
	courage = courage - 1;
	alert('Dit ging wel ten koste van je courage. Deze is nu -1 (' + courage + ')');
}

//Looten
console.log('De boel looten of niet?');
alert('De krijger maakt de laatste paar bandieten dood, maar raakt wel zwaar gewond. Hij legt uit dat hij op een missie is; hij moet de prinses redden van de Draak!');
alert('Zo nobel als jij bent, neem jij de taak op je van de gewonde krijger. Misschien is die prinses ook eens een mooie dame == win/win');
alert('Je kijkt naar de lijken van de bandietten en bedenkt jezelf..');
var loot = prompt('Zal ik gaan looten? Voor een bijdrage van 10 gold (' + gold + '), maar gaat wel ten koste van je courage -1. (' + courage + '). Als je niet loot, komt er 1 courage bij.');
if (loot == 'ja') {
	gold = gold + 10;
	courage = courage - 1;
}
else {
	courage = courage + 1;
}
alert('Je courage is nu ' + courage + ', je levens zijn nu ' + life + ', je hebt ' + gold + ' goudstukken. Je power is nu ' + power + '.');

//Boodschappen:
console.log('Boodschappen doen');
var shopping = prompt('Je hebt nu' + gold + ' goudstukken. Wil je er mee winkelen voordat je de draak gaat uitdagen?');
if (shopping == 'ja') {
	if (gold == 15) {
		armory = 'Hero Sword & Armor';
		courage = courage + 3;
		gold = 0;
		alert('Je hebt een ' + armory + ' met als bonus +3 courage (' + courage + ')');
	}
	else if (gold == 10) {
		armory = "Hero Sword";
		courage = courage + 2;
		gold = 0;
		alert('Je hebt een ' + armory + ' met als bonus +2 courage (' + courage + ')');
	}
	else if (gold == 5) {
		armory = 'Hero Armor';
		courage = courage + 1;
		gold = 0;
		alert('Je hebt een ' + armory + ' met als bonus +1 courage (' + courage + ')');
	}
	else if (gold < 5) {
		armory = 'Dummy Sword'
		courage = courage -1;
		alert('Je bent te arm om iets te kopen. Je gaat verder met je '+ armory + '. Dit gaat ten koste van je courage - 1 (' + courage + ')');
	}
}
else {
	alert('Verstandig om niets te kopen, misschien dat je het later nodig hebt!');
}
alert('Je courage is nu ' + courage + ', je levens zijn nu ' + life + ', je hebt ' + gold + ' goudstukken. Je power is nu ' + power + '.');



prep();
alert('Je voelt je net Rocky, goed bezig man!');
alert('Je courage is nu ' + courage + ', je levens zijn nu ' + life + ', je hebt ' + gold + ' goudstukken. Je power is nu ' + power + '.');
console.log('Nogmaals trainen of niet?');
var moreTraining = prompt('Wil je alvast tegen de draak vechten? (ja of nee?)');
if (moreTraining == 'ja') {
	fight();
	decision();

}
else {
	prep();
	alert('Je courage is nu ' + courage + ', je levens zijn nu ' + life + ', je hebt ' + gold + ' goudstukken. Je power is nu ' + power + '.');
	alert('Ik ga nu tegen de draak vechten!');
	fight();
	decision();

}