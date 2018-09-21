var life = 100;
var gold = 0;
var power = 0;
var courage = 0;

var armory = 'Dummy Sword';
var dragon = false;
var princess = false;

//Functie voor de voorbereiding van het gevecht tegen de draak.
function prep() {
alert ('Eenmaal aangekomen op het thuisfront sta je voor een keuze. Ik moet zo snel mogelijk de draak verslaan, maar ik moet mij eerst voorbereiden!...') 
var preparation = prompt('Tijd voor de voorbereiding! Wil je trainen (+1 power en +1 courage), rusten (-1 courage en + 2 power) of mediteren? (volledige levens)');
	if (preparation == 'trainen') {
		console.log('Keuze om te trainen');
		power = power + 1;
		courage = courage + 1;
	}
	else if (preparation == 'rusten') {
		console.log('keuze om te rusten');
		courage = courage - 1;
		power = power + 2;
	}
	else if (preparation == 'mediteren') {
		console.log('keuze om te mediteren');
	life = 100;
		if (courage >= 5) {
			console.log('super concentratie');
			alert('Ik kon mij goed concentreren. Mijn concentratie was meesterlijk. Ik ben klaar om te vechten!');
		}
		else if (courage <= 4 && courage >=2) {
			console.log('Goede concentratie');
			alert('Ik ben klaar om te vechten!');
		}
		else if (courage === 1) {
			console.log("Slechte concentratie");
			alert('Ik kon mij moeilijk concentreren. Ik ben eigenlijk nog niet helemaal klaar om te vechten...')
		}
	}
}

//Functie tijdens het vechten tegen de draak.
function fight() {
	if (life <=40 ) {
		console.log('te weinig levens om de draak te verslaan');
		alert("Je bent bijna doodgegaan. Je hebt de draak niet kunnen verslaan. Je had te weinig levens over toen hij je zwaar verwonde met zijn helse staart. Waar kwam ie vandaan!?.")
		dragon = false;
		princess = false;
	}
	else {
		console.log('voldoende levens om de draak te verslaan');
		if (power >=3){
			console.log('Genoeg kracht om de draak te verslaan');
			alert('Je had genoeg kracht over om de draak te verslaan.');
			dragon = true;
			console.log('Prinses redden of ga je voor de poen?');
			var safePrincess = prompt('Achter de draak zie je een zak goud. De weg achter je stort in door het hevige gevecht. Wil je de princess redden en de zak goud achterlaten? ja/nee?');
			if ( safePrincess == 'ja'){
				console.log('Keuze om de prinses te redden');
				alert('Je hebt de princess gered!');
				princess = true;
			}
			else {
				console.log('Keuze voor het goud, en niet de prinses');
				gold = gold + 10;
				alert('Goed keuze. Je hebt weliswaar de princess niet gered, maar wel een flinke zak goud gevonden met wel 10 goudstukken! Je hebt nu '+ gold + ' goudstukken.');
			}
		}
		else {
			console.log('Je kunt de draak niet verslaan. Te weinig power');
			alert ('Je hebt de draak niet kunnen doden, je had te weinig power over.');
			dragon = false;
			console.log('Prinses redden of ga je voor de poen?');
			var safePrincess = prompt('Achter de draak zie je een zak goud. De weg achter je stort in door het hevige gevecht. Wil je de princess redden en de zak goud achterlaten? ja/nee?');
			if (safePrincess == 'nee') {
				console.log('Gaan voor de poen ipv de prinses.');
				alert ('Je hebt de princess niet gered. Je ging voor de poen. Je bent nu steenrijk! Misschien dat je sneeuwwitje het hof kunt maken met je doekoe\'s'); //ending maken
				princess = false;
			}
			else {
				console.log('Gaan voor de prinses ipv de poen');
				alert('Je hebt de princess gered!');
				princess = true;
			}
		}
	}
}

//Functie van na het gevecht tegen de draak en het redden van de prinses.
function decision() {
	if (dragon == true && princess == true) {
		console.log('Je hebt zowel de draak gedood als de prinses gered.');
		alert('Je hebt zowel de draak gedood en de princess gered.'); 
		power = 0;
		alert('Je courage is nu ' + courage + ', je levens zijn nu ' + life + ', je hebt ' + gold + ' goudstukken. Je power is nu ' + power + '.');
		alert('Het is nu alweer een tijdje geleden dat jij de prinses gered hebt. Je ziet dat ze met Prince Adam (\'van Beauty and the Beast\') aan het flirten is.');
		var marriage = prompt('De nood om met haar te trouwen is hoog, vooral nu het nog kan. Wil je met haar trouwen? Je hebt minimaal 3 courage nodig. (' + courage + ') ja/nee?');
		if (marriage !== 'nee' && courage > 2) {
			console.log('Je gaat trouwen met de prinses');
			courage = 0;
			alert('Gefeliciteerd je gaat met haar trouwen!');
			alert('Jullie leefden nog lang en gelukkig! Je hebt gewonnen!');
		}
		else if (marriage =='nee' || courage <= 2) {
			console.log('Je gaat niet trouwen met de prinses. Het kan zijn dat je courage te laag was.');
			courage = 0;
			alert('Ze gaat er met prins Adam vandoor. Had nu dan toch voor het geld gekozen!');
			alert('Dan maar snoepen bij de buren. Je ziet sneeuwwitje staan, die lijkt je ook wel wat....');
			var marriageSecond = prompt ('Ze is een dure dame. Ga je met haar trouwen? Je hebt minimaal 15 goudstukken nodig  (' + gold + ') ja/nee?');
			if (marriageSecond !== 'nee' && gold >= 15){
				console.log('Trouwen met Sneeuwwitje');
				alert('Sneeuwwitje ziet je poen! Jazeker dat ze met je wilt trouwen. Was het toch maar slim om geen gear te kopen!');
				alert('Jullie leefden nog lang en gelukkig!');
			}
			else if (marriageSecond !== 'nee' && gold < 15) {
				console.log('Te weinig poen om te trouwen met sneeuwwitje');
				alert('Arme sloeber dat je bent. Je had te weinig goudstukken over om met Sneeuwwitje te trouwen. Was toch maar voor dat zak goud gegaan! Pocahontas daarentegen lijkt je ook wel wat....');
				alert('Einde!');
			}
			else if (marriageSecond == 'nee') {
				console.log('Je wilt niet trouwen met sneeuwwitje');
				alert('Dure dames, dat vindt je niets! Je zag Pocahontas al eerder staan. Je gaat toch liever voor haar....');
				alert('Einde!');
			}
		}
	}
	else if (dragon == true || princess == true) {
		console.log('Of je hebt de draak verslagen, of je hebt de prinses gered.');
		alert('Je hebt je missie niet helemaal gehaald. De prinses is vast boos op je.');
		alert('Een poostje later hoor je alsnog dat de prinses er met een ander vandoor is gegaan. Je hebt je leven voor niets geriskeerd, of wel soms??');
		var marriage = prompt ('Je ziet Pocahontas met Sneeuwwitje ruziemaken. Het ging over de held die de draak probeerde te verslaan. Daar ben je dan! Wil je met Sneeuwwitje trouwen? Ze is een dure dame en je hebt minimaal 15 goudstukken nodig  (' + gold + ') ja/nee? ');
		if (marriage != 'nee' && gold >= 15){
				console.log('Trouwen met sneeuwwitje');
				alert('Sneeuwwitje ziet je poen! Jazeker dat ze met je wilt trouwen. Was het toch maar slim om geen gear te kopen!');
				alert('Jullie leefden nog lang en gelukkig');
			}
			else if (marriage != 'nee' && gold < 15) {
				console.log('Te weinig geld om te trouwen met sneeuwwitje');
				alert('Arme sloeber dat je bent. Je had te weinig goudstukken over om met Sneeuwwitje te trouwen. Pocahontas daarentegen lijkt je ook wel wat....');
				alert('Einde!');
			}
			else if (marriage == 'nee') {
				console.log('Je wilt niet trouwen met sneeuwwitje');
				alert('Dure dames, dat vindt je niets! Je zag Pocahontas al eerder staan. Je gaat toch liever voor haar....');
				alert('Einde!');
	}
	}	
	else if (dragon == false && princess == false) {
		console.log('Je hebt zowel de prinses niet gered als de draak niet verslagen.');
		alert('Je hebt zowel de draak niet kunnen verslaan, je bent ternauwernood ontsnapt! Heb je ook de prinses niet kunnen redden, wat jammer!');
		alert('Je besluit door de schande om celibaat door het leven te gaan. Geen gelukkig einde! Je bent geen held geworden zoals je droomde.');
		alert('Probeer het opnieuw en let goed op je levens voordat je tegen de draak gaat vechten!');

	}
}

//Introductie
alert('Goedemorgen! Jij bent Jonkheer Joris, een doodnormale Jonkheer zonder speciale talenten. Je wilt jezelf later beroemd maken en ooit met een mooie prinses trouwen! Je voelt dat dit een dag is vol avontuur!');
var rise = prompt ('Je ligt in bed. De nacht ervoor heb je een hevige zwaardtraining achter de rug. Wil je opstaan? Je krijgt dan gelijk +2 courage en + 1 power en -30 life, stoere vent dat je bent! Anders slaap je uit en begin je je avontuur met volledige levens. ja/nee?');
if (rise == 'ja') {
	console.log('opstaan');
	life = life - 30;
	courage = courage + 2;
	power = power + 1;
	alert('Je begint de dag als een echte strijder! Je courage is nu ' + courage + ', je levens zijn nu ' + life + ', je hebt ' + gold + ' goudstukken. Je power is nu ' + power + '.');
}
else if (!(rise == 'ja')) {
	console.log('uitslapen');
	alert('Je begint de dag uitgerust! Je courage is nu ' + courage + ', je levens zijn nu ' + life + ', je hebt ' + gold + ' goudstukken. Je power is nu ' + power + '.');
}

//Bandieten en de boodschapper
alert('Je loopt door het bos en ziet twee clans bandieten een krijger aanvallen. Zo te zien hebben ze ruzie met de krijger, maar ook met elkaar....Jonkheer Joris kijkt toe.');
var help = prompt('Ga je de krijger in nood helpen? ja/nee?');
if (help == 'ja') {
	console.log('Krijger in nood helpen');
	alert('Je weet ternauwernood te ontsnappen aan een dodelijke slag, met als gevolg dat je geraakt bent. Je hebt mooi wat goudstukken van de bandieten kunnen stelen');
	life = life - 30;
	power = power + 1;
	courage = courage + 1;
	gold = gold + 5;
	alert ('Je hebt ' + life + ' levens over. Power + 1 (' + power + '), Courage + 1 (' + courage + ') en goud + 5 (' + gold + ')');
}
else if (!(help == 'ja')) {
	console.log('Krijger in nood niet helpen');
	alert('Je ziet het gevaar in van de situatie, en wacht tot ze elkaar afmaken');
	courage = courage - 1;
	alert('Dit ging wel ten koste van je courage. Deze is nu -1 (' + courage + ')');
}

//Looten of niet?
alert('De krijger maakt de laatste paar bandieten dood, maar raakt wel zwaar gewond. Hij legt uit dat hij op een missie is; hij moet de prinses redden van de Draak!');
alert('Zo nobel als jij bent, neem jij de taak op je van de gewonde krijger. Misschien is die prinses ook eens een mooie dame == win/win');
alert('Je kijkt naar de lijken van de bandietten en bedenkt jezelf..');
var loot = prompt('Zal ik gaan looten? Voor een bijdrage van 10 gold (' + gold + '), maar gaat wel ten koste van je courage -1. (' + courage + '). Als je niet loot, komt er 1 courage bij. ja/nee?');
if (loot == 'ja') {
	console.log("lijken wel looten");
	gold = gold + 10;
	courage = courage - 1;
}
else {
	console.log('lijken niet looten');
	courage = courage + 1;
}
alert('Je courage is nu ' + courage + ', je levens zijn nu ' + life + ', je hebt ' + gold + ' goudstukken. Je power is nu ' + power + '.');

//Boodschappen of niet?
var shopping = prompt('Je hebt nu' + gold + ' goudstukken. Wil je er mee winkelen voordat je de draak gaat uitdagen? ja/nee?');
if (shopping == 'ja') {
	console.log('Wel boodschappen doen');
	if (gold == 15) {
		console.log('Je koopt de Hero Sword en Armor');
		armory = 'Hero Sword & Armor';
		courage = courage + 3;
		gold = 0;
		alert('Je hebt een ' + armory + ' met als bonus +3 courage (' + courage + ')');
	}
	else if (gold == 10) {
		console.log('Je koopt alleen de Hero Sword');
		armory = "Hero Sword";
		courage = courage + 2;
		gold = 0;
		alert('Je hebt een ' + armory + ' met als bonus +2 courage (' + courage + ')');
	}
	else if (gold == 5) {
		console.log('Je koopt alleen de Hero Armor');
		armory = 'Hero Armor';
		courage = courage + 1;
		gold = 0;
		alert('Je hebt een ' + armory + ' met als bonus +1 courage (' + courage + ')');
	}
	else if (gold < 5) {
		console.log('Je hebt te weinig poen om iets te kopen');
		courage = courage -1;
		alert('Je bent te arm om iets te kopen. Je gaat verder met je '+ armory + '. Dit gaat ten koste van je courage - 1 (' + courage + ')');
	}
}
else {
	console.log('Je gaat geen boodschappen doen');
	alert('Verstandig om niets te kopen, misschien dat je het later nodig hebt!');
}
alert('Je courage is nu ' + courage + ', je levens zijn nu ' + life + ', je hebt ' + gold + ' goudstukken. Je power is nu ' + power + '.');

prep();
alert('Je voelt je net Rocky, goed bezig man!');
alert('Je courage is nu ' + courage + ', je levens zijn nu ' + life + ', je hebt ' + gold + ' goudstukken. Je power is nu ' + power + '.');

//Doortrainen of niet?
var moreTraining = prompt('Wil je alvast tegen de draak vechten? ja/nee?');
if (moreTraining == 'ja') {
	console.log('Je gaat je niet extra voorbereiden, maar vecht gelijk tegen de draak');
	fight();
	decision();

}
else {
	console.log('Je gaat je nog extra voorbereiden voordat je vecht tegen de draak.');
	prep();
	alert('Je courage is nu ' + courage + ', je levens zijn nu ' + life + ', je hebt ' + gold + ' goudstukken. Je power is nu ' + power + '.');
	alert('Ik ga nu tegen de draak vechten!');
	fight();
	decision();
}