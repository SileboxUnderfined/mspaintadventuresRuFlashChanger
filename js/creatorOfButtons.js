function creatorOfButtons(text="", link="",id="") {
    let separator = document.createElement("separator");
    separator.innerText = " | ";
    let button = document.createElement("a");
    button.href = link;
    button.text = text;
    button.id = id;
    return [separator,button];
};