let flashObject = document.querySelector('[type="application/x-shockwave-flash"]');
let head = document.querySelector('head');
let button = creatorOfButtons(text="==>",link="https://www.mspaintadventures.ru/?s=6&p=006716",id="next");
let style = document.createElement('link');
style.rel = "stylesheet";
style.href = chrome.runtime.getURL("css/DOTA.css");

document.querySelector("body").appendChild(button[1]);
head.appendChild(style);

if (localStorage.getItem('player') == 'youtube') {
    flashObject.parentNode.replaceChild(generateChangerObject(link="https://www.youtube.com/embed/h3AQnFwFwbQ",width=flashObject.width,height=flashObject.height),flashObject);
} else {
    flashObject.parentNode.replaceChild(generateChangerObject(link="https://vk.com/video_ext.php?oid=-207391948&id=456239248&hash=21ece7d54fd0f88c&hd=2",width=flashObject.width,height=flashObject.height),flashObject);
};

let uniquePages = JSON.parse(localStorage.getItem('unique_pages_mspae'));
if (!uniquePages.includes('shes8ack')) {
    uniquePages.push('shes8ack');
    localStorage.setItem('pages_unique_mspae',JSON.stringify(uniquePages));
};
localStorage.setItem('pages_count_mspae',Number(localStorage.getItem('pages_count_mspae'))+1);