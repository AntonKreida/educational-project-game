import controllerForm from '../controller/controller-form';

const viewHandlersPage = {
  lobbyForm: () => {
    const form = document.querySelector('.js-form') as HTMLFormElement;

    form.addEventListener('click', (event) => {
      const target = event.target as HTMLFormElement;
      const label = target.closest('.js-label') as HTMLLabelElement;
      const labelList = document.querySelectorAll('.js-label') as NodeListOf<HTMLLabelElement>;
      const button = document.querySelector('.js-button') as HTMLButtonElement;

      if (!target.classList.contains('js-label')) {
        return;
      }

      labelList.forEach((element) => {
        (element as HTMLLabelElement).classList.remove('active');
      });

      label.classList.add('active');
      button.removeAttribute('disabled');
    });

    controllerForm.validateForm(form);
  },
};

export default viewHandlersPage;
