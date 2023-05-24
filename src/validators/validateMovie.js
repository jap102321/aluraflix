export const validateTitle = (title) => {
  const length = title.length;
  return length >= 1 && length <= 15 ? true : false;
};

export const validatePoster = (poster) => {
  return poster.contains("http") || poster.contains("https") ? true : false;
};

export const validateDate = (date) => {};

export const validateTrailer = (url) => {
  return url.contains("http") || url.contains("https") ? true : false;
};
