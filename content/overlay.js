var nextTab=
{
	onLoad:function() 
	{
		document.getElementById("contentAreaContextMenu").addEventListener("popupshowing", nextTab._toggleMenuItems, false);
	},
	_toggleMenuItems:function() 
	{
		document.getElementById("nexttab-open").setAttribute('hidden', !gContextMenu.onLink);
	},
	openNextToCurrentTab:function()
	{
		var targetPopupNode = document.popupNode; 	// get the popup node
		// If what we got is not an anchor element, traverse up till we get the anchor element.
		while(!targetPopupNode.href)	targetPopupNode=targetPopupNode.parentNode;
		var gPopupNodeContextMenu = targetPopupNode.href;
		nextTab.addTab(gPopupNodeContextMenu);	// Add a new tab next to the current tab
	},

	addTab:function(aURI, aReferrerURI, aCharset, aPostData) {

	var currTab=gBrowser.mCurrentTab;
	//call the browsers real add tab function
	var newTab=gBrowser.addTab(aURI, aReferrerURI, aCharset, aPostData);

	//shift the new tab into position
	//if (newTab._tPos!=currTab._tPos+1) {
		gBrowser.moveTabTo(newTab, currTab._tPos+1);
	//}
	//gTabControl.selectTab(newTab);
	return newTab;
	}
}

window.addEventListener('load', nextTab.onLoad, true);	
