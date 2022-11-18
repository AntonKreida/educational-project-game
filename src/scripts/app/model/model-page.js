const markupFields = {
  easy: 'easy',
  normal: 'normal',
  hard: 'hard',
};

const getMarkupField = () => {
  const markups = Object.keys(markupFields);
  const markup = markups.find((element) => element === window.globalStateApp.lavel);
  const markupCards = markupFields[markup];

  return markupCards;
};

export default getMarkupField;
