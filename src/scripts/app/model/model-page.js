const markupFields = {
  easy: 'easy',
  normal: 'normal',
  hard: 'hard',
};

const modalsList = {
  win: 'modalWin',
  lose: 'modalLose',
};

export const getMarkupField = () => {
  const markups = Object.keys(markupFields);
  const markup = markups.find((element) => element === window.globalStateApp.lavel);
  const markupCards = markupFields[markup];

  return markupCards;
};

export const getModalWindow = () => {
  const modals = Object.keys(modalsList);
  const modal = modals.find((element) => element === window.globalStateApp.result.status);
  const modalResult = modalsList[modal];

  return modalResult;
};
