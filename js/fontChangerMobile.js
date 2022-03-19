let head = document.querySelector("head");
let newStyleCss = document.createElement("link");
newStyleCss.rel = "stylesheet";
newStyleCss.href = chrome.runtime.getURL("css/mobileStyle.css");
head.appendChild(newStyleCss);