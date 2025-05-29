var logo: string = "./logo.svg";
var name: string = "Angstrom";


function updateTime() {
    const timeDiv = document.querySelector('.time');
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    timeDiv.textContent = `${hours}:${minutes}:${seconds}`;
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
