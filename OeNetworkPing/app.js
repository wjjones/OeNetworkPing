'use strict';
const fs = require('fs');
const ini = require('ini');
const netping = require('net-ping');

// Read in the ini
const setup = ini.parse(fs.readFileSync('./setup.ini', 'utf-8'));
// Assign the vars to the Keys from the ini file
// for net-ping
const ininetworkProtocol = Object.keys(setup.networkProtocol);
const inipacketSize = Object.keys(setup.packetSize);
const iniretries = Object.keys(setup.retries);
const inisessionid = Object.keys(setup.sessionid);
const initimeout = Object.keys(setup.timeout);
const inittl = Object.keys(setup.ttl);
// for program
const inipingfreq = Object.keys(setup.pingfreq);
const inioeserver = Object.keys(setup.oeserver);
const inioedatabasename = Object.keys(setup.oedatabasename);
const inidevices = Object.keys(setup.devices);
const inicompleteoeservername = inioeserver + ":" + inioedatabasename;
//const ini = Object.keys(setup.);

console.log("ininetworkProtocol : " + ininetworkProtocol);
console.log("inipacketSize : " + inipacketSize);
console.log("iniretries : " + iniretries);
console.log("inisessionid : " + inisessionid);
console.log("initimeout : " +initimeout);
console.log("inittl : " + inittl);
console.log("inipingfreq : " + inipingfreq);
console.log("inioeserver : " + inioeserver);
console.log("inioedatabasename : " + inioedatabasename);
console.log("inidevices : " + inidevices);
console.log("inicompleteoeservername : " + inicompleteoeservername);

console.log("Net-Ping will check: " + inidevices + '\n' +
    " using: " + ininetworkProtocol + '\n' +
    " With a packet size of: " + inipacketSize + '\n' +
    " a retry of : " + iniretries + '\n' +
    " a timeout of : " + initimeout + '\n' +
    " a time to live of : " + inittl + '\n' +
    "It will log the Data to : " + inicompleteoeservername );


var options = {
    retries: iniretries,
    timeout: initimeout
};

var session = netping.createSession(options);

session.on("error", function (error) {
    console.trace(error.toString());
});

for (var i = 0; i < inidevices.length; i++) {

    session.pingHost(inidevices[i], function (error, inidevices, sent, rcvd) {

        var ms = rcvd - sent;

        if (error)

            if (error instanceof netping.RequestTimedOutError)

                console.log(inidevices + ": Not alive (ms=" + ms + ")");

            else

                console.log(inidevices + ": " + error.toString() + " (ms="

                    + ms + ")");

        else

            console.log(inidevices + ": Alive alive (ms=" + ms + ")");

    });

}


