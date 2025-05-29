var logo = "./logo.svg";
var name = "Angstrom";
function updateTime() {
    var timeDiv = document.querySelector('.time');
    var now = new Date();
    var hours = now.getHours().toString().padStart(2, '0');
    var minutes = now.getMinutes().toString().padStart(2, '0');
    var seconds = now.getSeconds().toString().padStart(2, '0');
    timeDiv.textContent = "".concat(hours, ":").concat(minutes, ":").concat(seconds);
}
var link = document.querySelector("link[rel~='icon']");
if (!link) {
    link = document.createElement('link');
    link.rel = 'icon';
    document.head.appendChild(link);
}
link.href = logo;
document.getElementById("title").innerText = name;
document.getElementById("logo").src = logo;
document.getElementById("name").innerText = name;
updateTime();
setInterval(updateTime, 1000);
