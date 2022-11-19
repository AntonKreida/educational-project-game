const viewIndex = {
  template: () => {
    const mainInner = document.createElement('div');
    mainInner.classList.add('main__inner', 'js-main-inner');

    const title = document.createElement('h1');
    title.classList.add('main__title', 'title');
    title.textContent = 'Выбери сложность';
    mainInner.appendChild(title);

    const form = document.createElement('form');
    form.classList.add('main__form', 'form', 'js-form');
    form.setAttribute('action', '/');
    form.setAttribute('method', 'GET');
    form.setAttribute('novalidate', 'novalidate');
    mainInner.appendChild(form);

    const control = document.createElement('div');
    control.classList.add('form__control');
    form.appendChild(control);

    const inputOne = document.createElement('input');
    inputOne.classList.add('form__input', 'input', 'js-input');
    inputOne.setAttribute('type', 'radio');
    inputOne.setAttribute('id', 'lavel-one');
    inputOne.setAttribute('name', 'lavel');
    inputOne.setAttribute('value', 'easy');
    inputOne.setAttribute('required', '');
    control.appendChild(inputOne);

    const labelOne = document.createElement('label');
    labelOne.classList.add('form__label', 'label', 'js-label');
    labelOne.setAttribute('for', 'lavel-one');
    labelOne.textContent = '1';
    control.appendChild(labelOne);

    const inputTwo = document.createElement('input');
    inputTwo.classList.add('form__input', 'input', 'js-input');
    inputTwo.setAttribute('type', 'radio');
    inputTwo.setAttribute('id', 'lavel-two');
    inputTwo.setAttribute('name', 'lavel');
    inputTwo.setAttribute('value', 'normal');
    inputTwo.setAttribute('required', '');
    control.appendChild(inputTwo);

    const labelTwo = document.createElement('label');
    labelTwo.classList.add('form__label', 'label', 'js-label');
    labelTwo.setAttribute('for', 'lavel-two');
    labelTwo.textContent = '2';
    control.appendChild(labelTwo);

    const inputThree = document.createElement('input');
    inputThree.classList.add('form__input', 'input', 'js-input');
    inputThree.setAttribute('type', 'radio');
    inputThree.setAttribute('id', 'lavel-three');
    inputThree.setAttribute('name', 'lavel');
    inputThree.setAttribute('value', 'hard');
    inputThree.setAttribute('required', '');
    control.appendChild(inputThree);

    const labelThere = document.createElement('label');
    labelThere.classList.add('form__label', 'label', 'js-label');
    labelThere.setAttribute('for', 'lavel-three');
    labelThere.textContent = '3';
    control.appendChild(labelThere);

    const button = document.createElement('button');
    button.classList.add('form__button', 'button', 'js-button');
    button.setAttribute('type', 'submit');
    button.setAttribute('disabled', '');
    button.textContent = 'Старт';

    form.appendChild(button);

    return mainInner;
  },

  getTemplate: () => {
    const main = document.querySelector('.js-main');
    main.classList.remove('main-page');
    main.innerHTML = '';
    main.appendChild(viewIndex.template());
  },
};

export default viewIndex;
