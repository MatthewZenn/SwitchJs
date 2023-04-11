const code = document.getElementById("code");
const snip = document.getElementById("snippets");

code.addEventListener("keypress", function onEvent(event) {
    if (event.key === "Enter") {
        eval(code.value);
        code.value = ""; 
    }
});

console.log = function(message) {
    snip.innerHTML += message + "\n";
};

document.getElementById("img").addEventListener('click', () => {
    window.location.reload()
});