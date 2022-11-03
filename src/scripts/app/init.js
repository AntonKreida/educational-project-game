import "./global/index.js";
import handlers from "./handlers/index.js";

window.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".js-form");

  form.addEventListener("click", handlers.onClickLabel);
  form.addEventListener("submit", handlers.onSubmitForm);
});
