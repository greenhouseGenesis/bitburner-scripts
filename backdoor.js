// NOTE: This script is so ridiculously incomplete and I feel compelled to apologize for it.

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

var serverListList = [servers0Port,
	servers1Port,
	servers2Port,
	servers3Port,
	servers4Port,
	servers5Port,
];

var servList = serverListList[args[0]];

while(isRunning("backdoor.script", "home", args[0]-1)) { sleep(60000); }

for (var i = 0; i < servList.length; i++) {
	var serv = servList[i];
	while(getHackingLevel() < getServerRequiredHackingLevel(serv)) {
		sleep(60000);
	}
	if (connect(serv)) {
		installBackdoor();
		tprint("Installing backdoor on " + serv + "...");
		connect("home");
	} else if (serv == "CSEC" || serv == "avmnite-02h" || serv == "I.I.I.I" || serv == "run4theh111z") { tprint("Failed to connect to " + serv + "! backdoor.script requires updating with getServer() features (specifically isConnectedTo object use to automatically connect to servers not directly connected to home)!")}
}