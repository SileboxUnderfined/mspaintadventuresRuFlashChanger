let flashObject = document.querySelector('[type="application/x-shockwave-flash"]');

function main() {
  let nodee = flashObject.parentNode;
  console.log(flashObject);
  let changerObject = generateChangerObject(link="",width=flashObject.width,height=flashObject.height);
  nodee.replaceChild(changerObject,flashObject);
};

if (localStorage.getItem('player_disabled') != 'yes') {
  if ((getCookie('html5_pref') == undefined) || (getCookie('html5_pref') == 'yes')) { setCookie('html5_pref','no',3640); document.location.reload(); }
  if ((getCookie('ruffle_pref') == undefined) || (getCookie('ruffle_pref') == 'yes')) { setCookie('ruffle_pref','no',3640); document.location.reload(); }
  if (flashObject == null) {
    flashObject = document.querySelector('object');
    if (flashObject != null) { main() }
  } else { main() };
} else {
  if ((getCookie('html5_pref') == 'no')) { setCookie('html5_pref','yes',3640); document.location.reload(); }
  if ((getCookie('ruffle_pref') == 'no')) { setCookie('ruffle_pref','yes',3640); document.location.reload(); }
}