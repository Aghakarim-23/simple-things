const colors = document.getElementsByClassName("color");
for (let i = 0; i < colors.length; i++) {
  colors[i].addEventListener("click", () => {
    colors[i].classList.add("border-red-400");
    for (let u = 0; u < colors.length; u++) {
      if (colors[u] != colors[i]) {
        colors[u].classList.remove("border-red-400");
      }
    }
  });
}