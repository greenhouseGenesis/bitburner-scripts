// Run purchase-server-64gb.script, a script which purchases relatively cheap personal servers to hack from.
if (exec("purchase-server-64gb.script", "home") == 0) { tprint("Not enough RAM to run purchase-server-64gb.script!") } else tprint("Starting purchase-server-64gb.script on home with 1 thread...");

// Run autoV2.script with up to 5% of your max RAM, a constantly-looping script which manages hacking and backdoor installation.
var servRAM = getServerMaxRam("home")/20;
var x = Math.floor(servRAM / getScriptRam("autoV2.script"));
if(x > 1) {
	exec("autoV2.script", "home", x);
	tprint("Starting autoV2.script on home with ", x, " threads...");
// Run upgradeV1.script if you can't run autoV2.script yet.
} else if (exec("autoV2.script", "home", 1) == 0) {
	tprint("Not enough RAM to start autoV2.script! Running upgradeV1.script instead...");
	if (exec("upgradeV1.script", "home", 1) == 0) { tprint("Not enough RAM to start upgradeV1.script! Good luck!") }
} else tprint("Starting autoV2.script on home with 1 thread...");

// Run purchasingUpgrades.script with up to 5% of your max RAM, a constantly-looping script which manages purchases of more expensive servers, a TOR router, executable files, and home RAM and Core upgrades.
var servRAM = getServerMaxRam("home")/20;
var x = Math.floor(servRAM / getScriptRam("purchasingUpgrades.script"));
if(x > 1) {
	exec("purchasingUpgrades.script", "home", x);
	tprint("Starting purchasingUpgrades.script on home with ", x, " threads...");
// Run upgradeV1.script if you can't run autoV2.script yet.
} else if (exec("purchasingUpgrades.script", "home", 1) == 0) { tprint("Not enough RAM to start purchasingUpgrades.script!") } else tprint("Starting purchasingUpgrades.script on home with 1 thread...");

// Run factionManage.script with up to 10% of your max RAM, a constantly-looping script which manages faction invitations and work, as well as augmentation purchases and installations.
var servRAM = getServerMaxRam("home")/10;
var x = Math.floor(servRAM / getScriptRam("factionManageV2.script"));
if(x > 1) {
	exec("factionManageV2.script", "home", x);
	tprint("Starting factionManageV2.script on home with ", x, " threads...");
} else if (exec("factionManageV2.script", "home", 1) == 0) { tprint("Not enough RAM to start factionManageV2.script!"); } else tprint("Starting factionManageV2.script on home with 1 thread...");