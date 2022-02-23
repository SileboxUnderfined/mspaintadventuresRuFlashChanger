const MAINURL = "https://www.mspaintadventures.ru/?s=6&p=";

const MANIFEST = chrome.runtime.getManifest();
const TITLE = `Mspaintadventures.ru flash changer version ${MANIFEST.version}  by Silent Box`;
document.getElementById('title').innerText = TITLE;

document.getElementById("nextPageButton").addEventListener("click",function(){
  chrome.tabs.query({active:true,currentWindow:true},function(tabs){
    if (tabs[0].url.indexOf(MAINURL) != -1) {
      let coreURL = tabs[0].url.substring(0,40);
      let newURL = coreURL + "00" + String(Number(tabs[0].url.replace(coreURL,'')) + 1);
      chrome.tabs.update({active:true,url:newURL});
    };
  });
});

document.getElementById("VKgroup").addEventListener("click",function(){
  chrome.tabs.create({active:true,url:"https://vk.com/silentbox1488"});
});