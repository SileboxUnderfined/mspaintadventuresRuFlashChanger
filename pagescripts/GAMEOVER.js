let head = document.querySelector('head');
let style = document.createElement('link');
style.rel = "stylesheet";
style.href = chrome.runtime.getURL("css/GAMEOVER.css");

let centerdiv = document.querySelector("center");
let flashObject = document.querySelector("embed");
let body = document.querySelector('body');

if (localStorage.getItem('player') == "vk") {
    centerdiv.replaceChild(generateChangerObject(link="https://vk.com/video_ext.php?oid=-207391948&id=456239240&hash=e93bcd61080d7f7e&hd=2",950,786),flashObject);
} else {
    centerdiv.replaceChild(generateChangerObject(link="https://www.youtube.com/embed/oZVzbpfREkA",950,786),flashObject);
};

body.appendChild(creatorOfButtons(text="> АКТ 6 АКТ 6 АНТРАКТ 3",link="https://www.mspaintadventures.ru/?s=6&p=008802",id="next")[1]);

let uniquePages = JSON.parse(localStorage.getItem('pages_unique_mspae'));
if (!uniquePages.includes('GAMEOVER')) {
    uniquePages.push('GAMEOVER');
    localStorage.setItem('pages_unique_mspae',JSON.stringify(uniquePages));
};
localStorage.setItem('pages_count_mspae',Number(localStorage.getItem('pages_count_mspae'))+1);