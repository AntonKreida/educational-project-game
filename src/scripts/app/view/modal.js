const viewModel = {
  modalWin: (timeResult) => {
    const modal = document.createElement('div');
    modal.classList.add('modal', 'js-modal');

    const modalInner = document.createElement('div');
    modalInner.classList.add('modal__inner');
    modal.appendChild(modalInner);

    const img = document.createElement('img');
    img.classList.add('modal__img');
    img.setAttribute('src', './images/modal__win.png');
    img.setAttribute('alt', '');
    modalInner.appendChild(img);

    const modalContent = document.createElement('div');
    modalContent.classList.add('modal__content');
    modalInner.appendChild(modalContent);

    const title = document.createElement('h1');
    title.classList.add('modal__title', 'title');
    title.textContent = 'Вы выиграли!';
    modalContent.appendChild(title);

    const text = document.createElement('p');
    text.classList.add('modal__text', 'js-text-result');
    text.textContent = 'Затраченное время:';
    modalContent.appendChild(text);

    const br = document.createElement('br');
    text.appendChild(br);

    const span = document.createElement('span');
    span.classList.add('modal__time', 'js-time-result');
    span.textContent = `${timeResult}`;
    text.append(span);

    const button = document.createElement('button');
    button.classList.add('button', 'js-button');
    button.textContent = 'Начать заново';
    modalContent.appendChild(button);

    return modal;
  },

  modalLose: (timeResult) => {
    const modal = document.createElement('div');
    modal.classList.add('modal', 'js-modal');

    const modalInner = document.createElement('div');
    modalInner.classList.add('modal__inner');
    modal.appendChild(modalInner);

    const img = document.createElement('img');
    img.classList.add('modal__img');
    img.setAttribute('src', './images/modal__lose.png');
    img.setAttribute('alt', '');
    modalInner.appendChild(img);

    const modalContent = document.createElement('div');
    modalContent.classList.add('modal__content');
    modalInner.appendChild(modalContent);

    const title = document.createElement('h1');
    title.classList.add('modal__title', 'title');
    title.textContent = 'Вы проиграли!';
    modalContent.appendChild(title);

    const text = document.createElement('p');
    text.classList.add('modal__text', 'js-text-result');
    text.textContent = 'Затраченное время:';
    modalContent.appendChild(text);

    const br = document.createElement('br');
    text.appendChild(br);

    const span = document.createElement('span');
    span.classList.add('modal__time', 'js-time-result');
    span.textContent = `${timeResult}`;
    text.append(span);

    const button = document.createElement('button');
    button.classList.add('button', 'js-button');
    button.textContent = 'Начать заново';
    modalContent.appendChild(button);

    return modal;
  },

  renderModal: (modal, timeResult) => {
    const body = document.querySelector('.js-body');
    const modalWindow = viewModel[`${modal}`](timeResult);

    body.appendChild(modalWindow);
  },
};

export default viewModel;
