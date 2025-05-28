var logo = "logo.svg"; // This is the logo that will be used site wide
var name = ""; // This is the name that will be used site wide
var desc = ""; // This is the peice of text the appers at the top of the site and in embeds
var lice = ""; /* Chose a license

 - CC
 - Apache
 - MIT
*/
var link = document.querySelector("link[rel~='icon']");
if (!link) {
    link = document.createElement('link');
    link.rel = 'icon';
    document.head.appendChild(link);
}
link.href = logo;
document.getElementById("desctext").innerText = desc;
document.getElementById("desc").content = desc;
document.getElementById("title").innerText = name;
document.getElementById("logo").src = logo;
document.getElementById("name").innerText = name;
