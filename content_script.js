// content_scripts.js
initListener();

function initListener() {
    const title = document.querySelector(
        "#educationList > div > li > div > ul > li:nth-child(" +
        document.querySelectorAll("#educationList > div > li > div > ul > li.chk").length +
        ")"
    ).innerText

    document.querySelector('video').addEventListener('play', async function () {
        console.log('Video play event detected');
        document.querySelector('video').volume = 0;
        const response = await chrome.runtime.sendMessage({action: 'sendNotification', status: 'started', title});
        console.log(response);
    });

    document.querySelector('video').addEventListener('ended', async function () {
        console.log('Video ended event detected');
        const response = await chrome.runtime.sendMessage({action: 'sendNotification', status: 'ended', title});
        console.log(response)
        document.querySelector('#popup5 > div.cmd > input').click();
    });
}
