<h1>OeNetworkPing</h1>

<h2>Info <\h2>
<ul>
	<li>Module    : ScadaPing <\li>
	<li>Class     : Node.Js Program <\li>
	<li>Author    : Jeff Jones <\li>
	<li>Date      : Aug 15 2018 <\li>
	<li>Project   : OENetworkPing <\li>
	<li>Ref.      : [TO BE DEFINED] <\li>
	<li>Spec.     : [TO BE DEFINED] <\li>
	<li>Project Location: https://github.com/wjjones/ScadaPing.git <\li>
<\ul>
<\p>
Audit
	Audit at  :
	Audit by  :
Copyright (C)
	2018 Jeff Jones
	All Rights Reserved
Description :
	This Program will Check network connectivity and log it to local signals in the OE database 
Requirements :
	Windows Server or Workstation running Node.Js
Tested on OS's :
	Windows Server 2016 with GUI
Setup Instructions
	Install Windows Server 2016 With GUI
	Run all updates
Revision History
	15Aug2018 wjj	Created
		Created Server to work on as VM
		Setup Visual Studio to connect and use Github Repository
		Setup Server to Run Node.JS
		Connect Server to Network
		On the OE Database Setup the following signals per device to be monitored
	1: LocalStringSignal : 
		Name : ScadaPing:(DeviceType).(DeviceName).STR
		Description : A description of what device this is
		Value : (The IP address or name in DNS)
	2: LocalAnalogSignal :
		Name : ScadaPing:(DeviceType).(DeviceName).TIME
		Description : Time of last ping
		Value : (The value of the last ping time)
Links
	How to use Ini file
		http://thisdavej.com/using-ini-files-in-your-node-js-applications-for-health-and-profit/#what-is-the-ini-file-format
	How to use net-ping
		https://github.com/nospaceships/node-net-ping


