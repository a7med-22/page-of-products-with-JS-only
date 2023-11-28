function create(el) {
    return document.createElement(`${el}`);
}
// header

let header = create("header");
header.className = "website-head";
let logo = create("h1");
let menu = create("ul");

logo.textContent = "Elzero";

for (let i = 1; i <= 4; i++) {
    let li = create("li");
    li.className = `li-${i}`;
    menu.append(li);
    li.style =
        "list-style: none; display: inline-block; padding: 10px; cursor: pointer;";
}
header.appendChild(logo);
header.appendChild(menu);
document.body.append(header);
document.querySelector(".li-1").textContent = "Home";
document.querySelector(".li-2").textContent = "About";
document.querySelector(".li-3").textContent = "Service";
document.querySelector(".li-4").textContent = "Contact";


//Style Of Header
document.body.style =
    "margin: 0px; background-color: rgb(236,236,236); font-family: Tahoma,Arial;";
header.style =
    "display: flex; padding: 10px; background-color: rgb(255,255,255); justify-content: space-between; align-items: center;";
logo.style = "color: #26956a; font-weight: bold; font-size: 26px;";
menu.style = " padding: 0px; margin: 0px; display: flex; list-style: none; ";

//content with its style
let content = create("div");
content.className = "content";
content.style =
    "display: flex; padding: 20px; flex-wrap: wrap; justify-content: center; gap: 20px; min-height: calc(100vh-142px); box-sizing: border-box;";


    // build boxes with their style
for (let i = 1; i <= 15; i++) {
    let box = create("div");
    box.className = "product";
    let boxNumber = create("span");
    boxNumber.textContent = `${i}`;
    box.textContent = "product";
    box.prepend(boxNumber);
    content.appendChild(box);
    box.style =
        "padding: 20px; background-color: rgb(255,255,255); border: 1px solid rgb(221,221,221); width: calc((100% - 40px)/3); box-sizing: border-box; text-align: center; color: rgb(136,136,136); border-radius: 6px;";
    boxNumber.style =
        "font-size: 40px; color: black; font-weight: normal; display: block; margin-bottom: 10px; margin-top: 10px;";
}
document.body.append(content);

//footer
let footer= create("footer");
footer.className = "footer";
footer.textContent = "copyright 2021";
document.body.append(footer);

// style of footer
footer.style = "background-color: rgb(35,169,110); font-size: 26px; text-align: center; padding: 20px; color: rgb(255,255,255);";
