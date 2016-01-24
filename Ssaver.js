/*
 *
 * Promoter/Screen Saver
 * By- Rohit Motwani (http://www.RohitMotwani.com/)
 * Version : 1.4
 *
*/

var idleTime = 0; 
var standby = false; 
function CheckInactivity() 
	{ 
	idleTime += 10; 
	if(idleTime > 11) 
		{ 
		InitializeStandBy(); 
		} 
	} 
function InitializeStandBy() 
	{ 
		if(!standby) 
			{ 
			var h = 0; 
			h = jQuery(window).height(); 
			jQuery("#energysaving").show().css({ height: "0", width: "0", left: "50%", top: "50%" }).animate({ width: "100%", height: h, left: "0", top: "0", opacity: "1" }, 1000); 
			standby = true; 
			} 
	} 
function StopStandBy() 
	{ 
	if(standby) 
		{ 
		jQuery("#energysaving").animate({ width: "0", height: "0", opacity: "0", left: "50%", top: "50%" }, 500); 
		setTimeout('jQuery("#energysaving").hide();', 800); standby = false; 
		} 
	} 
	
document.write('<link rel="stylesheet" href="savetheenvironment.css" type="text/css">'); 
if(typeof(jQuery) == "undefined") 
	{ 
	document.write('<script type="text/javascript" src="jquery.min.js"></script>'); 
	} 
function InitJQuery() 
	{ 
	if(typeof(jQuery) == "undefined") 
		{ 
		setTimeout("InitJQuery();", 50); 
		} 
	else 
		{ 
		jQuery(function() { jQuery(document).ready(function() { setInterval("CheckInactivity();", 10000); 
		/* jQuery(this).mousemove(function(e) { idleTime = 0; StopStandBy(); }); */
		jQuery(this).click(function(e) { idleTime = 0; StopStandBy(); });
		jQuery(document).keypress(function(e) { idleTime = 0; StopStandBy(); }); 
		jQuery("body").append('<div id="energysaving"><p><a href="TY.html" target="_blank"><img src="image.jpg" /></a><br /><span></span></p><div id="copyrightOnlineLeaf">Jedi Footer.<font style="color: #666666;">Rohit Motwani</font> - visit http://RohitMotwani.com</div></div>'); jQuery("#energysaving").hide(); }); }); 
		} 
	} 
InitJQuery();