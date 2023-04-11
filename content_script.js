// content_scripts.js
setTimeout(() => {
    console.log("wait 2s..."); // 2초면 되겠지
    initListener();
}, 2000);

function initListener() {
    const title = document.querySelector('main > section > article > main > label').innerText

    document.querySelector('video').addEventListener('play', async function () {
        console.log('Video play event detected');
        const response = await chrome.runtime.sendMessage({action: 'sendNotification', status: 'started', title});
        console.log(response);
    });

    document.querySelector('video').addEventListener('ended', async function () {
        console.log('Video ended event detected');
        const response = await chrome.runtime.sendMessage({action: 'sendNotification', status: 'ended', title});
        console.log(response)
    });
}
