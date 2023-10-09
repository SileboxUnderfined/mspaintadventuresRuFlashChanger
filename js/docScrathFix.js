if (localStorage.getItem("ds_fix" == null)) {
    localStorage.setItem("ds_fix","no");
};

document.getElementById("ds_fixSwitch").addEventListener("click",function(){
    if (localStorage.getItem("ds_fix") == "yes") {
        localStorage.setItem("ds_fix","no");
    } else {
        localStorage.setItem("ds_fix","yes");
    }
});

if (localStorage.getItem("ds_fix") == "yes") {
    let el = document.querySelector('span[style="color: white"');
    if (el != null) {
        el.setAttribute("style", "color: white; background-color: black");
    }

    let tds = Array.from(document.getElementsByTagName("td"))
    let backgroundColor = "";
    tds.forEach((child) => {
        if (child.getAttribute("bgcolor") != null) {
            if (child.getAttribute("bgcolor").charAt(0) == "#") {
                backgroundColor = child.getAttribute("bgcolor");
                console.log(backgroundColor);
                return;
            };
        };
    });

    let children = Array.from(el.children);
    children.forEach((child) => {
        if (child.nodeName == "SPAN") {
            let lastColor = child.getAttribute("style").split(":")[1];
            child.setAttribute("style",`color: ${lastColor}; background-color: ${backgroundColor};`);
        };
    });
};