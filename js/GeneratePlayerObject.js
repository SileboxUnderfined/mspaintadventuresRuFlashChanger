function generateChangerObject(link="", width=0,height=0) {
    let changerObject = document.createElement("iframe");
    if (link == "") {
      let neededPage = new URLSearchParams(document.location.search).get("p");
      console.log(neededPage);
      fetch(chrome.runtime.getURL(`pages/${localStorage.getItem('player')}.json`))
      .then((response) => response.json())
      .then((json) => changerObject.src = json[neededPage] + '?autoplay=1&amp;');
    } else {
      changerObject.src = link;
    }
    changerObject.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
    changerObject.allowFullscreen = true;
    changerObject.width = width;
    changerObject.height = height;
    return changerObject;
};