export const getImageUrl = (person: any, size = "s") => {
  return "https://i.imgur.com/" + person + size + ".jpg";
};
