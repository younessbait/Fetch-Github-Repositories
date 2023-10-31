let input = document.querySelector("input");
let btn = document.querySelector("button");
let content = document.querySelector(".content");
btn.onclick = mantApi;
function mantApi() {
  if (input.value == "") {
    input.value = " write something";
    input.style.color = "red";
    input.style.borderColor = "red";
    setTimeout(() => {
      input.value = "";
      input.focus();
      input.style.color = "rgb(252, 163, 99)";
      input.style.borderColor = "rgb(252, 163, 99)";
    }, 2000);
    return;
  }
  fetch(`https://api.github.com/users/${input.value}/repos`)
    .then((repons) => repons.json())
    .then((properts) => {
      content.innerHTML = "";
      properts.forEach((e) => {
        let maindivs = document.createElement("div");
        maindivs.className = "element";
        let textdivs = document.createTextNode(e.name);
        maindivs.appendChild(textdivs);
        let alink = document.createElement("a");
        alink.href = `https://github.com/${input.value}/${e.name}`;
        let textalink = document.createTextNode("visite");
        alink.appendChild(textalink);
        alink.setAttribute("target", "_blank");
        maindivs.appendChild(alink);
        let spans = document.createElement("span");
        let textspans = document.createTextNode(e.stargazers_count);
        spans.appendChild(textspans);
        maindivs.appendChild(spans);
        content.appendChild(maindivs);
      });
    });
}
