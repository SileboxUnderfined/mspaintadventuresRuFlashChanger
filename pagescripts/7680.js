let flashObject = document.querySelector('[type="application/x-shockwave-flash"]');
let nodee = flashObject.parentNode;
if (localStorage.getItem('player') == "vk") {
    nodee.replaceChild(generateChangerObject(link="https://vk.com/video_ext.php?oid=-207391948&id=456239211&hash=35d9529630d818c8&hd=2",450,650),flashObject);
} else {
    nodee.replaceChild(generateChangerObject(link="https://www.youtube.com/embed/cBgI2KCroBE",450,650),flashObject);
};
setTimeout(function(){
    document.location.href = "https://www.mspaintadventures.ru/?s=6&p=007681";
},40000);

let uniquePages = JSON.parse(localStorage.getItem('pages_unique_mspae'));
if (!uniquePages.includes('007680')) {
    uniquePages.push('007680');
    localStorage.setItem('pages_unique_mspae',JSON.stringify(uniquePages));
};
localStorage.setItem('pages_count_mspae',Number(localStorage.getItem('pages_count_mspae'))+1);