const code = document.getElementById("code");

code.addEventListener("keypress", function onEvent(event) {
    if (event.key === "Enter") {
        eval(code.value);
        code.value = ""; 
    }
});

document.getElementById("img").addEventListener('click', () => {
    window.location.reload()
});