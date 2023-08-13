const MAINURL = "https://www.mspaintadventures.ru/?s=6&p=";

const MANIFEST = chrome.runtime.getManifest();
const TITLE = `MSPAEssentials v${MANIFEST.version} by Silent Box`;
document.getElementById('title').innerText = TITLE;

document.getElementById("VKgroup").addEventListener("click",function(){
  chrome.tabs.create({active:true,url:"https://vk.com/silentbox1488"});
});