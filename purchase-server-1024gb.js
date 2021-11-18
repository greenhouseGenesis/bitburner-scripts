// NOTE: This is just an upgraded version of one of the tutorial scripts.

// How much RAM each purchased server will have. In this case, it'll
// be 1024GB.
var ram = 1024;

// Iterator we'll use for our loop
var i = 0;

// Make sure the script hasn't already been run to completion and that this isn't completely pointless.
if (serverExists("pserv1024-24")) { kill("purchase-server-1024gb.script", "home"); }

// Continuously try to purchase servers until we've reached the maximum
// amount of servers
while (i < getPurchasedServerLimit()) {
    // Check if we have enough money to purchase a server
    killall("pserv-" + i);
    deleteServer("pserv-" + i);
    if (getServerMoneyAvailable("home") > getPurchasedServerCost(ram)) {
        // If we have enough money, then:
        //  0. Make sure a server with the expected name hasn't already been purchased (mostly for posterity's sake)
        //  1. Purchase the server
        //  2. Copy our hacking script onto the newly-purchased server
        //  3. Run our hacking script on the newly-purchased server with 426 threads
        //  4. Increment our iterator to indicate that we've bought a new server
        if (!serverExists("pserv1024-" + i)) {
            var hostname = purchaseServer("pserv1024-" + i, ram);
            scp("hack-template.script", hostname);
            exec("hack-template.script", hostname, 426, "megacorp");
        }
        ++i;
    }
}