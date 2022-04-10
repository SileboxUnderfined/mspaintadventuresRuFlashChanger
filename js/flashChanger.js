let flashObject = document.querySelector('[type="application/x-shockwave-flash"]');

function main() {
  let nodee = flashObject.parentNode;
  console.log(flashObject);
  let changerObject = generateChangerObject(link="",width=flashObject.width,height=flashObject.height);
  nodee.replaceChild(changerObject,flashObject);
};

if (flashObject == null) {
  flashObject = document.querySelector('object');
  if (flashObject != null) { main() }
} else { main() };