<h1>OeNetworkPing</h1>

<h2>Info</h2>
<p>
	<ul>
		<li>Module    : ScadaPing </li>
		<li>Class     : Node.Js Program </li>
		<li>Author    : Jeff Jones </li>
		<li>Date      : Aug 15 2018 </li>
		<li>Project   : OENetworkPing </li>
		<li>Ref.      : [TO BE DEFINED] </li>
		<li>Spec.     : [TO BE DEFINED] </li>
		<li>Project Location: https://github.com/wjjones/OeNetworkPing </li>
	</ul>
</p>
<h2>Audit</h2>
<p>
	<ul>
		<li>Audit at  : </li>
		<li>Audit by  : </li>
	</ul>
</p>

<h2>Copyright (C)</h2>
<p>
	<ul>
		<li>2018 Jeff Jones </li
		<li>All Rights Reserved <li>
	</ul>
</p>
</hr>
<h2>Description</h2>
<p>
	This Program will Check network connectivity and log it to local signals in the OE database 
</p>
</hr>
<h2>Requirements</h2>
<p>
	<ul>
		<li>Windows Server or Workstation running Node.Js </li>
	</ul>
</p>
</hr>
<h2>Tested on OS's</h2>
<p>
	<ul>
		<li>Windows Server 2016 with GUI</li>
	</ul>
</p>
</hr>
<h2>Setup Instructions</h2>
<p>
	<ul>
		<li>Install Windows Server 2016 With GUI</li>
		<li>Run all updates</li>
	</ul>
</p>
</hr>
<h2>Revision History</h2>
<p>
	<ul>
		<li>15Aug2018 wjj	Created </br>
			Created Server to work on as VM
			Setup Visual Studio to connect and use Github Repository
			Setup Server to Run Node.JS
			Connect Server to Network
			On the OE Database Setup the following signals per device to be monitored
			<ol>
				<li>LocalStringSignal : 
					Name : ScadaPing:(DeviceType).(DeviceName).STR
					Description : A description of what device this is
					Value : (The IP address or name in DNS)
				</li>
				<li>LocalAnalogSignal :
					Name : ScadaPing:(DeviceType).(DeviceName).TIME
					Description : Time of last ping
					Value : (The value of the last ping time)
				</li>
			</ol>
		</li>
		<li>16Aug2018 wjj </br>
				Worked on updating readme.md html to look correct</br>
				Also worked on getting git to work using visual studio and how to update git</br>
		</li>
	</ul>
</p>
</hr>
<h2>Links</h2>
<p>
	<ul>
		<li>How to use Ini file</br>
			http://thisdavej.com/using-ini-files-in-your-node-js-applications-for-health-and-profit/#what-is-the-ini-file-format
		</li>
		<li>How to use net-ping</br>
		https://github.com/nospaceships/node-net-ping
		</li>
	</ul>
</p>


