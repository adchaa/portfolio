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
