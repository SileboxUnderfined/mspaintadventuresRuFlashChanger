let flashObject = document.querySelector('[type="application/x-shockwave-flash"]');
let nodee = flashObject.parentNode;
if (localStorage.getItem('player') == "vk") {
    nodee.replaceChild(generateChangerObject(link="https://vk.com/video_ext.php?oid=-207391948&id=456239211&hash=35d9529630d818c8&hd=2",450,650),flashObject);
} else {
    nodee.replaceChild(generateChangerObject(link="",450,650),flashObject);
};
setTimeout(function(){
    document.location.href = "https://www.mspaintadventures.ru/?s=6&p=007396";
},40000);