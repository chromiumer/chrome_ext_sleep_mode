chrome.runtime.onInstalled.addListener(() => {
	chrome.contextMenus.create({
		id: "some-command",
		title: "SendTo...",
		contexts: ["all"]
	});
});

chrome.contextMenus.onClicked.addListener(function(info, tab) {
	if (info.menuItemId == "some-command") {
		console.log("Yes got!");
	}
});