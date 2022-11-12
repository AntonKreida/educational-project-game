import templateGamePages from '../view/template';

const form = document.querySelector('.js-form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const { target } = event;
  const { elements } = target;

  if (!target.checkValidity) {
    return;
  }

  const inputs = Array.from(elements).filter((element) => element.name);

  inputs.forEach((input) => {
    if (input.checked) {
      window.globalStateApp.lavel = input.value;
    }
  });

  templateGamePages();
});
