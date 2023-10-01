const autoGrow = (elm) => {
    elm.style.height = `${elm.scrollHeight}px`;

    if (!!elm.value) {
        document.querySelector(".contentInput__tools-post").style.opacity = 1;
        document.querySelector(".contentInput__tools-post").style.cursor =
            "pointer";
    } else {
        document.querySelector(".contentInput__tools-post").style.opacity = 0.5;
        document.querySelector(".contentInput__tools-post").style.cursor =
            "initial";
    }
};
