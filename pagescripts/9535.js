let flash = document.querySelector("object");
console.log(flash)

let audio = document.createElement('audio');
audio.setAttribute('controls',true);
audio.setAttribute('autoplay',true);
audio.setAttribute('loop',true);
audio.src = chrome.runtime.getURL("audio/echidna.mp3");
flash.parentNode.replaceChild(audio,flash);