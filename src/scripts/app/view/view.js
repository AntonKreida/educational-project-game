import controllerForm from '../controller/controller-form';

const viewHandlersPage = {
  lobbyForm: () => {
    const form = document.querySelector('.js-form');

    form.addEventListener('click', (event) => {
      const { target } = event;
      const label = event.target.closest('.js-label');
      const labelList = document.querySelectorAll('.js-label');
      const button = document.querySelector('.js-button');

      if (!target.classList.contains('js-label')) {
        return;
      }

      labelList.forEach((element) => {
        element.classList.remove('active');
      });

      label.classList.add('active');
      button.removeAttribute('disabled');
    });

    controllerForm.validateForm(form);
  },
};

export default viewHandlersPage;
