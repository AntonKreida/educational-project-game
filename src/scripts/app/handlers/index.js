const handlers = {
  onSubmitForm: (event) => {
    event.preventDefault();

    const { target } = event;
    const inputs = target.querySelectorAll('.js-input');

    if (!target.checkValidity()) {
      return;
    }

    inputs.forEach((input) => {
      if (!input.checked) {
        return;
      }

      window.globalStateApp.lavel = input.value;
      window.location.href = './game-pages.html';
    });
  },

  onClickLabel: (event) => {
    const { target } = event;
    const labels = document.querySelectorAll('.js-label');
    const button = document.querySelector('.js-button');

    if (!target.closest('.js-label')) {
      return;
    }

    labels.forEach((label) => {
      label.classList.remove('active');
    });

    target.classList.add('active');
    button.removeAttribute('disabled');
  },
};

export default handlers;
