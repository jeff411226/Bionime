var isChromium = window.chrome, //warning, edge is true
winNav = window.navigator,
vendorName = winNav.vendor,
isOpera = winNav.userAgent.indexOf("OPR") > -1,
isIEedge = winNav.userAgent.indexOf("Edge") > -1,
isIE11 = !!window.MSInputMethodContext && !!document.documentMode,
isChrome = isChromium != null && vendorName === "Google Inc.",
isIOSChrome = winNav.userAgent.match("CriOS"),
isIOSDevice = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);

//init before other js be imported
paceOptions = {
	ajax: {
		trackMethods: ['GET', 'POST']
	}
};