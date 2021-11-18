var joinedFactions = new Array();
var invitedFactions = new Array();
var factionAugs = new Array();
var factionWorkPointer = 0;
var augMatch = 0;
var neurofluxLocator = 0;
var icarusConfirm = 0;
var joesConfirm = 0;
var noMoneyToTravel = 0;
var placeToGo = new String();
var countToTwenty = 0;

// NOTE: Tetrads is excluded, because you should be in Chongqing for the faction after Tetrads (The Dark Army) anyways, so no travel is needed. The Syndicate is also not included, as it is the final faction that requires a specific city, and this list is specifically referenced in order to determine the next place to travel.
// Tian Di Hui is ALSO excluded, as it is accounted for in the timeToGo() function.
var cityFactions = ["Sector-12",
	"Chongqing",
	"New Tokyo",
	"Ishama",
	"Aevum",
	"Volhaven",
	"The Dark Army"
];

var corpsWithFactions = ["ECorp",
	"MegaCorp",
	"KuaiGong International",
	"Four Sigma",
	"NWO",
	"Blade Industries",
	"OmniTek Incorporated",
	"Bachman & Associates",
	"Clarke Incorporated"
];

var requirementsForCorps = [
	// PUT NUMBERS IN HERE ASSOCIATED WITH THE REQUIRED HACKING LEVEL FOR EACH OF THE ABOVE ARRAY'S COMPANIES IN ORDER
]

var corpsConfirm = new Array(corpsWithFactions.length);

function augOwned(values) {
	for (var i = 0; i < getOwnedAugmentations(true).length; i++) {
		if (getOwnedAugmentations(true)[i] == values || values.includes("NeuroFlux Governor")) {
			return true;
		}
	}
	return false;
}

function augPrereqOwned(values) {
	for (var i = 0; i < getAugmentationPrereq(values).length; i++) {
		for (var y = 0; y < getOwnedAugmentations(true).length; y++) {
			if (getAugmentationPrereq(values)[i] == getOwnedAugmentations[y]) { return true; }
		}
	}
	return false;
}

function allFactionAugsOwned(values) {
	// Sort factionAugs from least to most expensive.
	factionAugs = getAugmentationsFromFaction(values);
	var factionAugsSorter = new Array();
	factionAugsSorter = factionAugsSorter.concat(factionAugs[0]);
	for (var i = 1; i < factionAugs.length; ++i) {
		if (getAugmentationCost(factionAugsSorter[i - 1]) <= getAugmentationCost(factionAugs[i])) {
			factionAugsSorter = factionAugsSorter.concat(factionAugs[i]);
		} else {
			factionAugsSorter = factionAugsSorter.concat(factionAugsSorter[i - 1]);
			factionAugsSorter[i - 1] = factionAugs[i]
		}
	}
	factionAugs = factionAugsSorter;
	// Count the amount of augmentations owned from the current faction, automatically including the NeuroFlux Governor (and the Neuralstimulator from any faction that ISN'T Volhaven (as all City Factions have this upgrade)), after resetting the temporary pointer.
	augMatch = 0;
	for (var i = 0; i < factionAugs.length; ++i) {
		if (factionAugs[i].includes("Neuralstimulator") && joinedFactions[factionWorkPointer] != "Volhaven") { augMatch++; }
		else if (factionAugs[i].includes("NeuroFlux Governor")) {
			neurofluxLocator = i;
			augMatch++;
		} else {
			for (var y = 0; y < getOwnedAugmentations().length; ++y) {
				if (getOwnedAugmentations[y] == factionAugs[i]) {
					augMatch++;
				}
			}
		}
	}
	if (augMatch >= factionAugs.length) { return true; } else { return false; }
}

function accessCompanyFaction() {
	// If possible, work for companies that have factions associated with them, in the order presented on https://bitburner.readthedocs.io/en/latest/basicgameplay/factions.html
	for (var i = 0; i < corpsWithFactions.length; i++) {
		if (allFactionAugsOwned(corpsWithFactions[i])) { corpsConfirm[i] = 2; }
		if (getHackingLevel() > requirementsForCorps[i] && corpsConfirm[i] < 1) { 
			if (applyToCompany(corpsWithFactions[i], "software consultant")) { corpsConfirm[i] = 1; }
		}
		if (corpsConfirm[i] == 1 && getCompanyRep <= 200000 ) {
			workForCompany(corpsWithFactions[i]);
			return i;
		}
	}
	// INSERT SOMETHING HERE THAT APPLIES TO AND WORKS FOR FULCRUM TO 250000 REP AND RETURNS 9 ON SUCCESS (and MAYBE installs a backdoor if possible)
	return -1;
}

function timeToGo(values) {
	if (values == "Sector-12") {
		if(!travelToCity("Aevum")) {
			noMoneyToTravel = 1;
			placeToGo = "Aevum";
	} return 0;
	}
	else if (values == "Aevum") {
		if(!travelToCity("Chongqing")) {
			noMoneyToTravel = 1;
			placeToGo = "Chongqing";
	} return 1;
	}
	else if (values == "Chongqing") {
		if(!travelToCity("New Tokyo")) {
			noMoneyToTravel = 1;
			placeToGo = "New Tokyo";
	} return 2;
	}
	else if (values == "New Tokyo") {
		if(!travelToCity("Ishima")) {
			noMoneyToTravel = 1;
			placeToGo = "Ishima";
	} return 3;
	}
	else if (values == "Ishima") {
		// NOTE: Travel is stopped here unless you are either a part of or have all augmentations from Tian Di Hui.
		if(joinedFactions.includes("Tian Di Hui") || allFactionAugsOwned("Tian Di Hui")) { if(!travelToCity("Volhaven")) {
			noMoneyToTravel = 1;
			placeToGo = "Volhaven";
	} return 4;
	}}
	else if (values == "Volhaven") {
		if(!travelToCity("Chongqing")) {
			noMoneyToTravel = 1;
			placeToGo = "Chongqing";
	} return 5;
	}
	else if (values == "The Dark Army") {
		if(!travelToCity("Aevum")) {
			noMoneyToTravel = 1;
			placeToGo = "Aevum";
	} return 6;
	}
	return -1;
}


// Travel to the next city with a faction who's augments you don't yet have BEFORE THE LOOP STARTS, or otherwise set it as a destination to go to when you can afford it.
if (allFactionAugsOwned("Sector-12"))  {
	if (!allFactionAugsOwned("Aevum")) { if(!travelToCity("Aevum")) {
		noMoneyToTravel = 1;
		placeToGo = "Aevum";
	}}
	else if (!allFactionAugsOwned("Chongqing")) { if(!travelToCity("Chongqing")) {
		noMoneyToTravel = 1;
		placeToGo = "Chongqing";
	}}
	else if (!allFactionAugsOwned("New Tokyo")) { if(!travelToCity("New Tokyo")) {
		noMoneyToTravel = 1;
		placeToGo = "New Tokyo";
	}}
	else if (!allFactionAugsOwned("Ishima")) { if(!travelToCity("Ishima")) {
		noMoneyToTravel = 1;
		placeToGo = "Ishima";
	}}
	else if (!allFactionAugsOwned("Volhaven")) { if(!travelToCity("Volhaven")) {
		noMoneyToTravel = 1;
		placeToGo = "Volhaven";
	}}
}

var neverOne = 0;
while(neverOne != 1) {

	// If you have a travel queued, attempt it, and clear the flag for further attempts if successful.
	if (noMoneyToTravel == 1) { if(travelToCity(placeToGo)) { noMoneyToTravel = 0; }}

	// FACTION JOINING:
	// NOTE: If the joined faction is a city-based faction, travel to the next city if necessary.
	invitedFactions = checkFactionInvitations();
	if (invitedFactions.length > 0) {
		for (var i = 0; i < invitedFactions.length; ++i) {
			var faction = invitedFactions[i];
			joinFaction(faction);
			joinedFactions = joinedFactions.concat(faction);
			if (cityFactions.includes(values)) { timeToGo(faction); }
		}
	}

	//WORKING/AUG BUYING:
	// Check to make sure you have joined a faction.
	if (joinedFactions.length >= 1) {
		// Check to see if the player has all augmentations from the current faction.
		if (allFactionAugsOwned(joinedFactions[factionWorkPointer])) {
			// If the faction you were least recently invited to that didn't have enough favor to be donated to either has or will after augmentations have enough favor to be donated to, and there is another faction you could be working for, and you have all augmentations from the current faction, work for the next faction (in order of when their invitations were accepted).
			if (getFactionFavor(joinedFactions[factionWorkPointer]) + getFactionFavorGain(joinedFactions[factionWorkPointer]) > getFavorToDonate(joinedFactions[factionWorkPointer]) && joinedFactions.length > factionWorkPointer) {
				factionWorkPointer++;
			}
			// Otherwise, if there's no more factions to work for, purchase a NeuroFlux Governor if you can afford it.
			else if (joinedFactions.length <= factionWorkPointer && getServerMoneyAvailable("home") > getAugmentationCost(factionAugs[neurofluxLocator])) { purchaseAugmentation(factionAugs[neurofluxLocator]) }

			// Purchase the next augmentation from your faction, after checking if you can afford it and that it has no prerequisites you don't already own (and that it's not a NeuroFlux Governor, which augOwned will always return as true).
		} else {
			for (var i = factionAugs.length - 1; i >= 0; --i) {
				if ((getAugmentationPrereq(factionAugs[i]).length == 0 || augPrereqOwned(factionAugs[i])) && !augOwned(factionAugs[i])) {
					if (getServerMoneyAvailable("home") >= getAugmentationCost(factionAugs[i])) { purchaseAugmentation(joinedFactions[factionWorkPointer], factionAugs[i]) } else { break; }
				}
			}
		}

		// Check to make sure the player isn't busy.
		if (!isBusy() || countToTwenty == 0) {
			if (accessCompanyFaction() <= 0) { workForFaction(joinedFactions[factionWorkPointer], "hacking"); }
		}
	}

	// If you haven't yet joined a faction, apply to (if necessary) and work for Icarus Microsystems as a Software Consultant if your hacking is above 250.
	else if (getHackingLevel() > 250 || icarusConfirm == 1) {
		if (icarusConfirm == 0) {
			applyToCompany("Icarus Microsystems", "software consultant");
			icarusConfirm = 1;
		}
		if (!isBusy()) { workForCompany("Icarus Microsystems"); }
	}
	// If you can't work for Icarus Microsystems yet, apply to (if necessary) and work for Joe's Guns as a part-time employee.
	else {
		if (joesConfirm == 0) {
			applyToCompany("Joe's Guns", "part-time employee");
			joesConfirm = 1;
		}
		if (!isBusy()) { workForCompany("Joe's Guns"); }
	}

	// Increment the counter that resets working every twenty times this script reaches completion (and wait 1 second, so that doesn't turn into some kind of super-fast irrecoverable loop with too much RAM).
	sleep(1000);
	++countToTwenty;
	if(countToTwenty == 20) { countToTwenty = 0; }
}