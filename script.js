var b = document.querySelector("#button2");
b.addEventListener("click", change);

function change() {
    let i = Math.floor(Math.random() * 500) + 1;
    let j = Math.floor(Math.random() * 500) + 1;
    console.log('here', i, j, b.style.left, b.style.top);
    b.style.left = i + 'px';
    b.style.top = j + "px";
}

document.getElementById("button1").addEventListener("click", function () {
    document.getElementById("textbox").textContent = "Yeey Date time :D";
    pic.src = "pinguin.jpg";
});

document.getElementById("button2").addEventListener("click", function () {
    document.getElementById("textbox").textContent = "Please ☹";
    const button1 = document.getElementById("button1");
    const currentWidth = button1.offsetWidth;
    const currentHeight = button1.offsetHeight;
    const newWidth = currentWidth * 1.2;
    const newHeight = currentHeight * 1.1;
    button1.style.width = `${newWidth}px`;
    button1.style.height = `${newHeight}px`;
    button1.style.fontSize = `${parseFloat(window.getComputedStyle(button1).fontSize) * 1.1}px`;
    if (newHeight > 50) {
        document.getElementById("textbox").textContent = "OK FINE! F*ck u😭";
        button2.disabled = true;
        pic.src = "sadpinguin.jpg";
    }
});
