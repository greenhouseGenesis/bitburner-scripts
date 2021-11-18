// NOTE: This script is intended for use at the beginning of the game, when foodnstuff is your best single server to target.
// This is because it is intended to be used alongside occasional upgradeV1.script runnings, which replace early-hack-template.script
// with the more modular hack-template.script targeting higher-profile servers.

var serv = args[0];
var servRAM = getServerMaxRam(serv) - getServerUsedRam(serv);
var x = Math.floor(servRAM / getScriptRam("hack-template.script"));
if(x > 0) {
	if (fileExists("BruteSSH.exe")) {
		brutessh(serv);
	}
	if (fileExists("FTPCrack.exe")) {
		ftpcrack(serv);
	}
	if (fileExists("relaySMTP.exe")) {
		relaysmtp(serv);
	}
	if (fileExists("HTTPWorm.exe")) {
		httpworm(serv);
	}
	if (fileExists("SQLInject.exe")) {
		sqlinject(serv);
	}
	nuke(serv);
	scp("early-hack-template.script", serv);
	exec("early-hack-template.script", serv, x);
	//tprint("Starting early-hack-template.script on ", serv, " with ", x, " threads...");
}