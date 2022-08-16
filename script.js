window.onscroll = () => {
  const el = document.getElementsByClassName("header")[0];
  if (document.documentElement.scrollTop > 80) {
    el.style.height = "90px";
    el.style.backgroundColor = "black";
  } else {
    el.style.height = "150px";
    el.style.backgroundColor = "transparent";
  }
};
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
