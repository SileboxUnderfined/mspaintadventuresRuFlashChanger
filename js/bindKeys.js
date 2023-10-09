document.onkeydown = function(e) {
    switch(e.key) {
        case 'Enter':
        case 'ArrowRight':
            const next_page_button = document.querySelector("font[size='5']").firstChild.nextSibling;
            if (next_page_button == null) {
                const next_page_button = document.querySelector("div.mspa_next_link").firstChild.nextSibling;
            }
            document.location = next_page_button.href;
            break;
        case 'ArrowLeft':
            history.back();
            break;
    };
};