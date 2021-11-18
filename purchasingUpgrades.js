var purchaseServerUpgradeConfirm = 0;
var purchaseTorConfirm = 0;

var neverOne = 0;

while (neverOne != 1) {
	// PURCHASED SERVER UPGRADE:
	if (purchaseServerUpgradeConfirm == 0 && hasRootAccess("megacorp")) {
		exec("purchase-server-1024gbV2.script", "home");
		purchaseServerUpgradeConfirm = 1;
	}
	// HOME RAM & CORES UPGRADE:
	if (getServerMoneyAvailable("home") > getUpgradeHomeRamCost()) { upgradeHomeRam(); }
	if (getServerMoneyAvailable("home") > getUpgradeHomeCoresCost()) { upgradeHomeCores(); }
	sleep(10000);
	// TOR PURCHASE:
	if (purchaseTorConfirm == 0 && getServerMoneyAvailable("home") > 200000) {
		purchaseTor();
		purchaseTorConfirm = 1;
	}
	// BruteSSH.exe PURCHASE:
	if (purchaseTorConfirm == 1 && !fileExists("BruteSSH.exe") && getServerMoneyAvailable("home") > 500000) {
		purchaseProgram("BruteSSH.exe");
	}
	// FTPCrack.exe PURCHASE:
	if (purchaseTorConfirm == 1 && !fileExists("FTPCrack.exe") && getServerMoneyAvailable("home") > 1500000) {
		purchaseProgram("FTPCrack.exe");
	}
	// relaySMTP.exe PURCHASE:
	if (purchaseTorConfirm == 1 && !fileExists("relaySMTP.exe") && getServerMoneyAvailable("home") > 5000000) {
		purchaseProgram("relaySMTP.exe");
	}
	// HTTPWorm.exe PURCHASE:
	if (purchaseTorConfirm == 1 && !fileExists("HTTPWorm.exe") && getServerMoneyAvailable("home") > 30000000) {
		purchaseProgram("HTTPWorm.exe");
	}
	// SQLInject.exe PURCHASE:
	if (purchaseTorConfirm == 1 && !fileExists("SQLInject.exe") && getServerMoneyAvailable("home") > 250000000) {
		purchaseProgram("SQLInject.exe");
	}
	// DeepscanV1.exe PURCHASE:
	if (purchaseTorConfirm == 1 && !fileExists("DeepscanV1.exe") && getServerMoneyAvailable("home") > 500000) {
		purchaseProgram("DeepscanV1.exe");
	}
	// DeepscanV2.exe PURCHASE:
	if (purchaseTorConfirm == 1 && !fileExists("DeepscanV2.exe") && getServerMoneyAvailable("home") > 25000000) {
		purchaseProgram("DeepscanV2.exe");
	}
	// AutoLink.exe PURCHASE:
	if (purchaseTorConfirm == 1 && !fileExists("AutoLink.exe") && getServerMoneyAvailable("home") > 1000000) {
		purchaseProgram("AutoLink.exe");
	}
	// ServerProfiler.exe PURCHASE:
	if (purchaseTorConfirm == 1 && !fileExists("ServerProfiler.exe") && getServerMoneyAvailable("home") > 1000000) {
		purchaseProgram("ServerProfiler.exe");
	}
	// Formulas.exe PURCHASE:
	if (purchaseTorConfirm == 1 && !fileExists("Formulas.exe") && getServerMoneyAvailable("home") > 5000000000) {
		purchaseProgram("Formulas.exe");
	}
}