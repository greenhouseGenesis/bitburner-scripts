// NOTE: This file barely has anything to do with auto.script, other than the former starting this one. I really need to change the names sometime...

var homeServer = ["home"];

var servers0Port = ["n00dles",
	"foodnstuff",
	"sigma-cosmetics",
	"joesguns",
	"nectar-net",
	"hong-fang-tea",
	"harakiri-sushi"
];

var servers1Port = ["neo-net",
	"CSEC",
	"zer0",
	"max-hardware",
	"iron-gym"
];

var servers2Port = ["phantasy",
	"omega-net",
	"silver-helix",
	"avmnite-02h",
	"crush-fitness",
	"johnson-ortho",
	"the-hub"
];

var servers3Port = ["summit-uni",
	"I.I.I.I",
	"millenium-fitness",
	"comptek",
	"rothman-uni",
	"netlink",
	"catalyst",
	"rho-construction"
];

var servers4Port = ["alpha-ent",
	"lexo-corp",
	"snap-fitness",
	"global-pharm",
	"zb-def",
	"unitalife",
	"univ-energy",
	"syscore",
	"aevum-police",
	".",
	"applied-energetics",
	"run4theh111z",
	"nova-med"
];

var servers5Port = ["zb-institute",
	"galactic-cyber",
	"aerocorp",
	"icarus",
	"solaris",
	"microdyne",
	"taiyang-digital",
	"titan-labs",
	"deltaone",
	"omnia",
	"infocomm",
	"defcomm",
	"kuai-gong",
	"powerhouse-fitness",
	"blade",
	"b-and-a",
	"ecorp",
	"stormtech",
	"zeus-med",
	"4sigma",
	"omnitek",
	"fulcrumtech",
	"vitalife",
	"nwo",
	"clarkinc",
	"megacorp"
];

// CONFIRMATION VARIABLES:
var servers0PortConfirm = 0;
var servers0PortDoubleConfirm = 0;
var servers1PortConfirm = 0;
var servers1PortDoubleConfirm = 0;
var servers2PortConfirm = 0;
var servers2PortDoubleConfirm = 0;
var servers3PortConfirm = 0;
var servers3PortDoubleConfirm = 0;
var servers4PortConfirm = 0;
var servers4PortDoubleConfirm = 0;
var servers5PortConfirm = 0;
var servers5PortDoubleConfirm = 0;
var harakiriConfirm = 0;
var ironConfirm = 0;
var hubConfirm = 0;
var rhoConfirm = 0;
var pharmConfirm = 0;
var megaConfirm = 0;
var countToSixty = 0;

var neverOne = 0;
while (!neverOne == 1) {
	// 0PORT:
	if (servers0PortConfirm == 0) {
		for (var i = 0; i < servers0Port.length; ++i) {
			var serv = servers0Port[i];
			servers0PortDoubleConfirm = 1
			if (getServerMaxRam("home") - getServerUsedRam("home") > getScriptRam("RAM-to-hacks.script")) {
				exec("RAM-to-hacks.script", "home", 1, serv);
			} else {
				servers0PortDoubleConfirm = 0;
			}
			if (servers0PortDoubleConfirm == 1) {
				servers0PortConfirm = 1;
				exec("backdoor.script", "home", 1, 0);
			}
		}
	}
	// 1PORT:
	if (servers1PortConfirm == 0 && fileExists("BruteSSH.exe")) {
		for (var i = 0; i < servers1Port.length; ++i) {
			var serv = servers1Port[i];
			servers1PortDoubleConfirm = 1
			if (getServerMaxRam("home") - getServerUsedRam("home") > getScriptRam("RAM-to-hacks.script")) {
				exec("RAM-to-hacks.script", "home", 1, serv);
			} else {
				servers1PortDoubleConfirm = 0;
			}
			if (servers1PortDoubleConfirm == 1) {
				servers1PortConfirm = 1;
				exec("backdoor.script", "home", 1, 1);
			}
		}
	}
	// 2PORT:
	if (servers2PortConfirm == 0 && fileExists("FTPCrack.exe")) {
		for (var i = 0; i < servers2Port.length; ++i) {
			var serv = servers2Port[i];
			servers2PortDoubleConfirm = 1
			if (getServerMaxRam("home") - getServerUsedRam("home") > getScriptRam("RAM-to-hacks.script")) {
				exec("RAM-to-hacks.script", "home", 1, serv);
			} else {
				servers2PortDoubleConfirm = 0;
			}
			if (servers2PortDoubleConfirm == 1) {
				servers2PortConfirm = 1;
				exec("backdoor.script", "home", 1, 2);
			}
		}
	}
	// 3PORT:
	if (servers3PortConfirm == 0 && fileExists("relaySMTP.exe")) {
		for (var i = 0; i < servers3Port.length; ++i) {
			var serv = servers3Port[i];
			servers3PortDoubleConfirm = 1
			if (getServerMaxRam("home") - getServerUsedRam("home") > getScriptRam("RAM-to-hacks.script")) {
				exec("RAM-to-hacks.script", "home", 1, serv);
			} else {
				servers3PortDoubleConfirm = 0;
			}
			if (servers3PortDoubleConfirm == 1) {
				servers3PortConfirm = 1;
				exec("backdoor.script", "home", 1, 3);
			}
		}
	}
	// 4PORT:
	if (servers4PortConfirm == 0 && fileExists("HTTPWorm.exe")) {
		for (var i = 0; i < servers4Port.length; ++i) {
			var serv = servers4Port[i];
			servers4PortDoubleConfirm = 1
			if (getServerMaxRam("home") - getServerUsedRam("home") > getScriptRam("RAM-to-hacks.script")) {
				exec("RAM-to-hacks.script", "home", 1, serv);
			} else {
				servers4PortDoubleConfirm = 0;
			}
			if (servers4PortDoubleConfirm == 1) {
				servers4PortConfirm = 1;
				exec("backdoor.script", "home", 1, 4);
			}
		}
	}
	// 5PORT:
	if (servers5PortConfirm == 0 && fileExists("SQLInject.exe")) {
		for (var i = 0; i < servers5Port.length; ++i) {
			var serv = servers5Port[i];
			servers5PortDoubleConfirm = 1
			if (getServerMaxRam("home") - getServerUsedRam("home") > getScriptRam("RAM-to-hacks.script")) {
				exec("RAM-to-hacks.script", "home", 1, serv);
			} else {
				servers5PortDoubleConfirm = 0;
			}
			if (servers5PortDoubleConfirm == 1) {
				servers5PortConfirm = 1;
				exec("backdoor.script", "home", 1, 5);
			}
		}
	}
	// UPGRADE:
	if (getHackingLevel() > getServerRequiredHackingLevel("harakiri-sushi") && harakiriConfirm == 0) {
		exec("upgradeV1.script", "home");
		harakiriConfirm = 1;
	}
	if (fileExists("BruteSSH.exe") && getHackingLevel() > getServerRequiredHackingLevel("iron-gym") && ironConfirm == 0) {
		exec("upgradeV1.script", "home");
		ironConfirm = 1;
	}
	if (fileExists("FTPCrack.exe") && getHackingLevel() > getServerRequiredHackingLevel("the-hub") && hubConfirm == 0) {
		exec("upgradeV1.script", "home");
		hubConfirm = 1;
	}
	if (fileExists("relaySMTP.exe") && getHackingLevel() > getServerRequiredHackingLevel("rho-construction") && rhoConfirm == 0) {
		exec("upgradeV1.script", "home");
		rhoConfirm = 1;
	}
	if (fileExists("HTTPWorm.exe") && getHackingLevel() > getServerRequiredHackingLevel("global-pharm") && pharmConfirm == 0) {
		exec("upgradeV1.script", "home");
		pharmConfirm = 1;
	}
	if (fileExists("SQLInject.exe") && getHackingLevel() > getServerRequiredHackingLevel("megacorp") && megaConfirm == 0) {
		exec("upgradeV1.script", "home");
		megaConfirm = 1;
	}
	
	// Wait 10 seconds, and run upgradeV1.script every five minutes (600 seconds).
	sleep(10000);
	countToSixty++;
	if (countToSixty >= 60) {
		run("upgradeV1.script", 1, 0);
		countToSixty = 0;
	}
}