let flashObject = document.querySelector('[type="application/x-shockwave-flash"]');
let head = document.querySelector('head');
let button = creatorOfButtons(text="==>",link="https://www.mspaintadventures.ru/?s=6&p=006716",id="next");
let style = document.createElement('link');
style.rel = "stylesheet";
style.href = chrome.runtime.getURL("css/DOTA.css");

document.querySelector("body").appendChild(button[1]);
head.appendChild(style);

let changerObject = document.createElement('iframe');
if (localStorage.getItem('player') == 'youtube') {
    changerObject.src = "https://www.youtube.com/embed/FIm7_GyPA9Q";
} else {
    changerObject.src = "https://vk.com/video_ext.php?oid=-207391948&id=456239151&hash=dfe8e133c1080bcf&hd=2";
};

changerObject.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
changerObject.allowFullscreen = true;
changerObject.width = flashObject.width;
changerObject.height = flashObject.height;

flashObject.parentNode.replaceChild(changerObject,flashObject);