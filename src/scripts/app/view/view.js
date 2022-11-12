const form = document.querySelector('.js-form');

form.addEventListener('click', (event) => {
  const { target } = event;

  const label = event.target.closest('.js-label');
  const button = document.querySelector('.js-button');
  const listLabels = document.querySelectorAll('.js-label');

  if (target !== label) {
    return;
  }

  listLabels.forEach((element) => {
    element.classList.remove('active');
  });

  label.classList.add('active');
  button.removeAttribute('disabled');
});
