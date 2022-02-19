let flashObject = document.querySelector('[type="application/x-shockwave-flash"]');

function generateChangerObject() {
  let changerObject = document.createElement("iframe");
  let neededPage = new URLSearchParams(document.location.search).get("p");
  console.log(neededPage);
  fetch(chrome.runtime.getURL("pages.json"))
  .then((response) => response.json())
  .then((json) => changerObject.src = json[neededPage] + '?autoplay=1&amp;');
  changerObject.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
  changerObject.allowFullscreen = true;
  changerObject.width = flashObject.width;
  changerObject.height = flashObject.height;
  return changerObject;
};

function main() {
  let nodee = flashObject.parentNode;
  console.log(flashObject);
  let changerObject = generateChangerObject();
  nodee.replaceChild(changerObject,flashObject);
};

if (flashObject == null) {
  flashObject = document.querySelector('object');
  if (flashObject != null) { main() }
} else { main() };