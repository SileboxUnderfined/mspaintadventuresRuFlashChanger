let flashObject = document.querySelector('[type="application/x-shockwave-flash"]');
let head = document.querySelector('head');
let button = creatorOfButtons(text="==>",link="https://www.mspaintadventures.ru/?s=6&p=006716",id="next");
let style = document.createElement('link');
style.rel = "stylesheet";
style.href = chrome.runtime.getURL("css/DOTA.css");

document.querySelector("body").appendChild(button[1]);
head.appendChild(style);

if (localStorage.getItem('player') == 'youtube') {
    flashObject.parentNode.replaceChild(generateChangerObject(link="youtube",width=flashObject.width,height=flashObject.height),flashObject);
} else {
    flashObject.parentNode.replaceChild(generateChangerObject(link="vk",width=flashObject.width,height=flashObject.height),flashObject);
};