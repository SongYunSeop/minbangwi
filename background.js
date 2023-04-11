// background.js

chrome.runtime.onInstalled.addListener(function () {
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
        chrome.declarativeContent.onPageChanged.addRules([{
            conditions: [
                new chrome.declarativeContent.PageStateMatcher({
                    pageUrl: {hostEquals: 'kcmes.or.kr', pathContains: '/edu/detail'},
                })
            ],
            actions: [new chrome.declarativeContent.ShowPageAction()]
        }]);
    });
});

chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        const {action, status, progress, title} = request;
        console.log(action, status, progress, title)
        let options;

        if (status === 'started') {
            options = {
                type: 'basic',
                iconUrl: 'images/icon.png',
                title: '민방위 🫡',
                message: `${title} 시작`,
            };
        } else if (status === 'ended') {
            options = {
                type: 'basic',
                iconUrl: 'images/icon.png',
                title: '민방위 🫡',
                message: `${title} 완료`,
            };
        }

        chrome.notifications.create(options);
        sendResponse({message: 'OK'});
    }
);
