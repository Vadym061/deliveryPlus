export function textMore() {
  document.addEventListener("DOMContentLoaded", () => {
    const btnHideText = document.querySelector(".btn-hide");
    const textHide = document.querySelector(".text-hide");

    btnHideText.addEventListener("click", () => {
      textHide.classList.toggle("more");
      if (textHide.classList.contains("more")) {
        textHide.classList.add("more");
        textHide.classList.remove("background-clip");
      } else {
        textHide.classList.remove("more");
        textHide.classList.add("background-clip");
      }
    });
  });
}
