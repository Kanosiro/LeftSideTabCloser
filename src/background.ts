chrome.action.onClicked.addListener(() => {
  chrome.tabs.query({}, (tabs) => {
    let tabId: number | undefined;
    for (let i = 0; !tabs[i].active; i++) {
      tabId = tabs[i].id;
      if (tabId != undefined) {
        chrome.tabs.remove(tabId);
      }
    }
  });
});
