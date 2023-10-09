if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i
    .test(navigator.userAgent)) {
        let head = document.querySelector("head");
        let newStyleCss = document.createElement("link");
        newStyleCss.rel = "stylesheet";
        newStyleCss.href = chrome.runtime.getURL("css/mobileStyle.css");
        head.appendChild(newStyleCss);
}