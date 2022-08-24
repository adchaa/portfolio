window.onscroll = () => {
  const el = document.getElementsByClassName("header")[0];
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 20) {
    el.style.padding = "0px 40px";
    el.style.backgroundColor = "black";
  } else {
    el.style.padding = "30px 40px";
    el.style.backgroundColor = "transparent";
  }
};
function reveal() {
  var el = document.getElementsByClassName("reveal-top");
  var height = window.innerHeight;
  var diff = 200;
  for (let i = 0; i < el.length; i++) {
    let element = el[i];
    var elementTop = element.getBoundingClientRect().top;
    if (elementTop < height - diff) {
      element.classList.add("active");
    }
  }
}
window.addEventListener("scroll", reveal);

const menuchange = function (e) {
  console.log(e.checked);
  if (e.checked) {
    document.getElementsByClassName("navbar")[0].style.left = "0";
  } else {
    document.getElementsByClassName("navbar")[0].style.left =
      "calc(-60vw - 40px)";
  }
};
document.getElementById("checkbox").addEventListener("change", (e) => {
  menuchange(e.target);
});
document.getElementsByClassName("close")[0].addEventListener("click", () => {
  const e = document.getElementById("checkbox");
  e.checked = false;
  menuchange(e);
});
