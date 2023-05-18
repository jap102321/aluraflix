export const validateTitle = (title) => {
  const length = title.length;
  return length >= 1 && length >= 15 ? true : false;
};
