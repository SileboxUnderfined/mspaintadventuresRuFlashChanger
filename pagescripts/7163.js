let htmlgame = document.querySelector("iframe");
const center = htmlgame.parentNode;

if (localStorage.getItem("openboundPlayer") == "video") {
    if (localStorage.getItem('player') == "vk") {
        center.replaceChild(generateChangerObject(link="https://vk.com/video_ext.php?oid=-207391948&id=456239174&hash=d95d86a510bbd616&hd=2",width=htmlgame.width,height=htmlgame.height),htmlgame);
    } else {
        center.replaceChild(generateChangerObject(link="https://www.youtube.com/embed/Y0nu5mEX2Ts",width=htmlgame.width,height=htmlgame.height),htmlgame);
    };
};