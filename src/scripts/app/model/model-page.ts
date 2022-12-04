import { markupType } from './type';

const markupFields: markupType = {
  easy: 'easy',
  normal: 'normal',
  hard: 'hard',
};

const modalsList: markupType = {
  win: 'modalWin',
  lose: 'modalLose',
};

export const getMarkupField = (): string | never[] => {
  const markups = Object.keys(markupFields);
  const markup = markups.find((element) => element === window.globalStateApp.lavel);
  if (!markup) {
    return [];
  }
  const markupCards = markupFields[markup];

  return markupCards;
};

export const getModalWindow = (): string | never[] => {
  const modals = Object.keys(modalsList);
  const modal = modals.find((element) => element === window.globalStateApp.result.status);
  if (!modal) {
    return [];
  }
  const modalResult = modalsList[modal];

  return modalResult;
};
