
// bg.js

chrome.tabs.query({active: true, currentWindow: true}, function (tabs) 
{
    chrome.webRequest.onBeforeRequest.addListener(function (details)
    {
        if(details.method == "GET" && details.url.indexOf("allow_source") == -1)
        {    
        	var requestUrl = details.url + "&allow_source=true";
        	return {redirectUrl:requestUrl};
        }
    },
    {urls: ["https://usher.ttvnw.net/*"]},
    ["blocking"]
    );
});