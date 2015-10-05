chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        chrome.downloads.download({ url: request.file.url, filename: request.file.name, saveAs: false });
    });