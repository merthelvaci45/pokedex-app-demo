const capitalizeFirstLetter = (str = "") => {
  if (str.length === 0 || str === "") return;
  const firstCharacter = str[0].toUpperCase();

  return `${firstCharacter}${str.substring(1)}`;
};

export default capitalizeFirstLetter;
